-- Ruolo "Project Manager", scelto in registrazione: si aggiunge al reparto (obbligatorio) ed è
-- cumulabile con Capo Reparto. Combinazioni ammesse: reparto; reparto + Capo Reparto;
-- reparto + Project Manager; reparto + Capo Reparto + Project Manager; Team Captain da solo.
-- Il Project Manager ha i poteri del Team Captain (is_team_captain): sostituisce l'elenco per nome
-- public.captain_delegates, i cui account diventano Project Manager.
-- Da eseguire dopo 202611200001_captain_powers.sql.
begin;
alter table public.members
  add column project_manager boolean not null default false,
  add constraint members_project_manager_team check (not project_manager or team_id is not null);

-- Chi aveva i poteri per nome (e ha già un account) diventa Project Manager.
update public.members m set project_manager = true
where m.team_id is not null and exists (select 1 from public.captain_delegates d where d.full_name = m.full_name);

-- Poteri del Team Captain: il Team Captain e i Project Manager.
create or replace function public.is_team_captain() returns boolean language sql stable security definer
set search_path = '' as $$
  select exists(select 1 from public.members m where m.id = auth.uid() and m.active and (m.role = 'team_captain' or m.project_manager));
$$;
drop table public.captain_delegates;

-- Project Manager solo insieme a un reparto (quindi mai con Team Captain).
create function public.member_project_manager(p_team_id text, p_project_manager boolean) returns boolean language plpgsql immutable
set search_path = '' as $$
begin
  if coalesce(p_project_manager, false) and p_team_id is null then
    raise exception 'Il Project Manager deve indicare anche un reparto';
  end if;
  return coalesce(p_project_manager, false);
end; $$;
revoke all on function public.member_project_manager(text, boolean) from public, anon, authenticated;

create or replace function public.handle_new_user() returns trigger language plpgsql security definer
set search_path = '' as $$
declare
  name text := btrim(regexp_replace(coalesce(new.raw_user_meta_data->>'full_name', ''), '\s+', ' ', 'g'));
  v_team text; v_role text; v_pm boolean;
begin
  if not public.name_available(name, new.id) then name := ''; end if;
  begin
    select a.team_id, a.role into v_team, v_role
    from public.member_assignment(new.raw_user_meta_data->>'team_id', new.raw_user_meta_data->>'role') a;
    v_pm := public.member_project_manager(v_team, (new.raw_user_meta_data->>'project_manager') = 'true');
  exception when others then
    -- Dati non validi: profilo da completare al primo accesso.
    v_team := null; v_role := 'membro'; v_pm := false;
  end;
  insert into public.members(id, display_name, email, full_name, team_id, role, project_manager, active, is_admin)
  values (new.id, coalesce(nullif(name, ''), coalesce(new.email, '')), coalesce(new.email, ''), name, v_team, v_role, v_pm, new.email_confirmed_at is not null, false)
  on conflict (id) do nothing;
  return new;
end; $$;

-- Completamento del profilo: come prima, con in più la scelta Project Manager.
drop function public.complete_profile(text, text, text);
create function public.complete_profile(p_full_name text, p_team_id text, p_role text default 'membro', p_project_manager boolean default false) returns void language plpgsql security definer
set search_path = '' as $$
declare v_team text; v_role text; v_has_team boolean;
begin
  if not public.is_member() then raise exception 'Solo i membri attivi possono completare il profilo'; end if;
  select team_id is not null or role = 'team_captain' into v_has_team from public.members
  where id = auth.uid() and (full_name = '' or (team_id is null and role <> 'team_captain'));
  if v_has_team is null then raise exception 'Il profilo è già completo: per modificarlo contatta il Team Captain'; end if;
  if not public.name_available(p_full_name, auth.uid()) then
    raise exception 'Scegli il tuo nome dall''elenco del team: se manca o risulta già usato, contatta il Team Captain';
  end if;
  if v_has_team then
    update public.members set full_name = p_full_name, display_name = p_full_name where id = auth.uid();
  else
    select a.team_id, a.role into v_team, v_role from public.member_assignment(p_team_id, p_role) a;
    update public.members set full_name = p_full_name, display_name = p_full_name, team_id = v_team, role = v_role,
      project_manager = public.member_project_manager(v_team, p_project_manager)
    where id = auth.uid();
  end if;
end; $$;

-- Correzione di reparto e ruoli, con i poteri del Team Captain.
drop function public.set_member_assignment(uuid, text, text);
create function public.set_member_assignment(p_member uuid, p_team_id text, p_role text, p_project_manager boolean default false) returns void language plpgsql security definer
set search_path = '' as $$
declare v_team text; v_role text; v_pm boolean; v_before jsonb;
begin
  if not public.is_team_captain() then raise exception 'Solo il Team Captain può modificare reparto e ruolo'; end if;
  select a.team_id, a.role into v_team, v_role from public.member_assignment(p_team_id, p_role) a;
  v_pm := public.member_project_manager(v_team, p_project_manager);
  select jsonb_build_object('team_id', team_id, 'role', role, 'project_manager', project_manager) into v_before from public.members where id = p_member;
  if v_before is null then raise exception 'Account non trovato'; end if;
  if p_member = auth.uid() and v_role <> 'team_captain'
     and not exists (select 1 from public.members where active and role = 'team_captain' and id <> p_member) then
    raise exception 'Serve almeno un altro Team Captain attivo prima di cambiare il tuo ruolo';
  end if;
  update public.members set team_id = v_team, role = v_role, project_manager = v_pm where id = p_member;
  insert into public.audit_log(table_name, record_id, actor_id, action, before_record, after_record)
  values ('members', p_member, auth.uid(), 'REPARTO', v_before, jsonb_build_object('team_id', v_team, 'role', v_role, 'project_manager', v_pm));
end; $$;

-- Il registro espone anche il Project Manager, per mostrarlo accanto al nome.
drop function public.attendance_roster();
create function public.attendance_roster() returns table(id uuid, full_name text, team_id text, role text, project_manager boolean) language sql stable security definer
set search_path = '' as $$
  select m.id, m.full_name, m.team_id, m.role, m.project_manager from public.members m
  where public.is_member() and m.active and m.full_name <> '' and (m.team_id is not null or m.role = 'team_captain')
  order by m.full_name;
$$;

revoke all on function public.complete_profile(text, text, text, boolean), public.set_member_assignment(uuid, text, text, boolean), public.attendance_roster() from public, anon;
grant execute on function public.complete_profile(text, text, text, boolean), public.set_member_assignment(uuid, text, text, boolean), public.attendance_roster() to authenticated;
commit;
