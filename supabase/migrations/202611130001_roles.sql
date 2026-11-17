-- Ruoli scelti in registrazione: "Team Captain" e "Capo Progetto".
-- Combinazioni ammesse: solo reparto (membro), reparto + Capo Progetto, Team Captain (senza reparto).
-- Il Team Captain vale come appartenente a ogni reparto: segna e toglie le presenze di tutti ed è
-- l'unico che può correggere reparto e ruolo dei membri (Impostazioni → Account del team).
begin;
update public.teams set name = 'Scafo e Terrazze' where id = 'scafo';

alter table public.members
  add column role text not null default 'membro' check (role in ('membro', 'capo_progetto', 'team_captain')),
  add constraint members_role_team check (
    (role <> 'team_captain' or team_id is null) and (role <> 'capo_progetto' or team_id is not null)
  );

create function public.is_team_captain() returns boolean language sql stable security definer
set search_path = '' as $$ select exists(select 1 from public.members where id = auth.uid() and active and role = 'team_captain'); $$;
revoke all on function public.is_team_captain() from public, anon;
grant execute on function public.is_team_captain() to authenticated;

-- Il Team Captain vede l'elenco degli account per poter correggere i reparti.
create policy captain_read on public.members for select to authenticated using (public.is_team_captain());

-- Reparto e ruolo cambiano solo tramite le funzioni qui sotto: gli amministratori aggiornano
-- direttamente soltanto abilitazione e nome visualizzato.
revoke insert, update on public.members from authenticated;
grant update (display_name, active, is_admin) on public.members to authenticated;

-- Normalizza la coppia reparto/ruolo e rifiuta le combinazioni non ammesse.
create function public.member_assignment(p_team_id text, p_role text, out team_id text, out role text) language plpgsql stable
set search_path = '' as $$
begin
  role := coalesce(nullif(p_role, ''), 'membro');
  team_id := nullif(p_team_id, '');
  if role not in ('membro', 'capo_progetto', 'team_captain') then raise exception 'Ruolo non valido'; end if;
  if role = 'team_captain' then
    if team_id is not null then raise exception 'Il Team Captain non appartiene a un singolo reparto'; end if;
    return;
  end if;
  if team_id is null or not exists (select 1 from public.teams t where t.id = p_team_id) then raise exception 'Reparto non valido'; end if;
end; $$;
revoke all on function public.member_assignment(text, text) from public, anon, authenticated;

create or replace function public.handle_new_user() returns trigger language plpgsql security definer
set search_path = '' as $$
declare
  name text := btrim(regexp_replace(coalesce(new.raw_user_meta_data->>'full_name', ''), '\s+', ' ', 'g'));
  v_team text; v_role text;
begin
  if not public.valid_full_name(name) then name := ''; end if;
  begin
    select a.team_id, a.role into v_team, v_role
    from public.member_assignment(new.raw_user_meta_data->>'team_id', new.raw_user_meta_data->>'role') a;
  exception when others then
    -- Dati non validi: profilo da completare al primo accesso.
    v_team := null; v_role := 'membro';
  end;
  insert into public.members(id, display_name, email, full_name, team_id, role, active, is_admin)
  values (new.id, coalesce(nullif(name, ''), coalesce(new.email, '')), coalesce(new.email, ''), name, v_team, v_role, new.email_confirmed_at is not null, false)
  on conflict (id) do nothing;
  return new;
end; $$;

-- Completamento del profilo per gli account senza nome e reparto: ora indica anche il ruolo.
drop function public.complete_profile(text, text);
create function public.complete_profile(p_full_name text, p_team_id text, p_role text default 'membro') returns void language plpgsql security definer
set search_path = '' as $$
declare name text := btrim(regexp_replace(coalesce(p_full_name, ''), '\s+', ' ', 'g')); v_team text; v_role text;
begin
  if not public.is_member() then raise exception 'Solo i membri attivi possono completare il profilo'; end if;
  if not public.valid_full_name(name) then raise exception 'Scrivi Nome e Cognome con le iniziali maiuscole'; end if;
  select a.team_id, a.role into v_team, v_role from public.member_assignment(p_team_id, p_role) a;
  update public.members set full_name = name, display_name = name, team_id = v_team, role = v_role
  where id = auth.uid() and team_id is null and role <> 'team_captain';
  if not found then raise exception 'Il profilo è già completo: per modificarlo contatta il Team Captain'; end if;
end; $$;

-- Correzione di reparto e ruolo, riservata al Team Captain.
create function public.set_member_assignment(p_member uuid, p_team_id text, p_role text) returns void language plpgsql security definer
set search_path = '' as $$
declare v_team text; v_role text; v_before jsonb;
begin
  if not public.is_team_captain() then raise exception 'Solo il Team Captain può modificare reparto e ruolo'; end if;
  select a.team_id, a.role into v_team, v_role from public.member_assignment(p_team_id, p_role) a;
  select jsonb_build_object('team_id', team_id, 'role', role) into v_before from public.members where id = p_member;
  if v_before is null then raise exception 'Account non trovato'; end if;
  if p_member = auth.uid() and v_role <> 'team_captain'
     and not exists (select 1 from public.members where active and role = 'team_captain' and id <> p_member) then
    raise exception 'Serve almeno un altro Team Captain attivo prima di cambiare il tuo ruolo';
  end if;
  update public.members set team_id = v_team, role = v_role where id = p_member;
  insert into public.audit_log(table_name, record_id, actor_id, action, before_record, after_record)
  values ('members', p_member, auth.uid(), 'REPARTO', v_before, jsonb_build_object('team_id', v_team, 'role', v_role));
end; $$;

-- Il registro espone anche il ruolo, per mostrare i Capi Progetto.
drop function public.attendance_roster();
create function public.attendance_roster() returns table(id uuid, full_name text, team_id text, role text) language sql stable security definer
set search_path = '' as $$
  select m.id, m.full_name, m.team_id, m.role from public.members m
  where public.is_member() and m.active and m.team_id is not null and m.full_name <> ''
  order by m.full_name;
$$;

-- Presenze: stesso reparto, oppure qualunque reparto per il Team Captain.
create or replace function public.set_attendance(p_member uuid, p_date date, p_present boolean) returns void language plpgsql security definer
set search_path = '' as $$
declare caller_team text; caller_role text; target_team text;
begin
  select team_id, role into caller_team, caller_role from public.members where id = auth.uid() and active;
  if caller_role is null or (caller_team is null and caller_role <> 'team_captain') then
    raise exception 'Solo i membri attivi con un reparto possono segnare le presenze';
  end if;
  select team_id into target_team from public.members where id = p_member and active;
  if target_team is null then raise exception 'Questa persona non appartiene a un reparto'; end if;
  if caller_role <> 'team_captain' and target_team <> caller_team then
    raise exception 'Puoi segnare le presenze solo per il tuo reparto';
  end if;
  if p_present then
    insert into public.attendance(member_id, meeting_date, team_id, marked_by)
    values (p_member, p_date, target_team, auth.uid()) on conflict do nothing;
  else
    delete from public.attendance where member_id = p_member and meeting_date = p_date;
  end if;
  if found then
    insert into public.audit_log(table_name, record_id, actor_id, action, after_record)
    values ('attendance', p_member, auth.uid(), case when p_present then 'PRESENTE' else 'ASSENTE' end,
      jsonb_build_object('meeting_date', p_date, 'team_id', target_team));
  end if;
end; $$;

revoke all on function public.complete_profile(text, text, text), public.attendance_roster(), public.set_member_assignment(uuid, text, text) from public, anon;
grant execute on function public.complete_profile(text, text, text), public.attendance_roster(), public.set_member_assignment(uuid, text, text) to authenticated;
commit;
