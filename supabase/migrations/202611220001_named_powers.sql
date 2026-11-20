-- 1. Poteri del Team Captain (e quindi del Project Manager) per nome, solo per le persone elencate
--    in public.captain_names: valgono con il loro account attivo, anche se si registrano dopo, e si
--    sommano a quelli del Team Captain e dei Project Manager.
--    Per aggiungerne o toglierne: insert/delete su public.captain_names.
-- 2. Le presenze si segnano solo per i mercoledì (giorno delle riunioni).
-- Da eseguire dopo 202611210001_project_manager.sql.
begin;
create table public.captain_names (
  full_name text primary key references public.team_names(full_name) on update cascade on delete cascade
);
alter table public.captain_names enable row level security;
revoke all on public.captain_names from anon, authenticated;

insert into public.captain_names(full_name)
select full_name from public.team_names where full_name in ('Andrea Giuliotti', 'Giovanni Battista Pernazza');

-- Poteri del Team Captain: Team Captain, Project Manager e i nomi di captain_names.
create or replace function public.is_team_captain() returns boolean language sql stable security definer
set search_path = '' as $$
  select exists(select 1 from public.members m where m.id = auth.uid() and m.active and (m.role = 'team_captain' or m.project_manager
    or (m.full_name <> '' and exists (select 1 from public.captain_names n where n.full_name = m.full_name))));
$$;

create or replace function public.set_attendance(p_member uuid, p_date date, p_present boolean) returns void language plpgsql security definer
set search_path = '' as $$
declare caller_team text; caller_role text; target_team text; target_role text; powers boolean := public.is_team_captain();
begin
  if extract(isodow from p_date) <> 3 then raise exception 'Le presenze si segnano solo per le riunioni del mercoledì'; end if;
  select team_id, role into caller_team, caller_role from public.members where id = auth.uid() and active;
  if caller_role is null or (caller_team is null and caller_role <> 'team_captain') then
    raise exception 'Solo i membri attivi con un reparto possono segnare le presenze';
  end if;
  select team_id, role into target_team, target_role from public.members where id = p_member and active;
  if target_role is null then raise exception 'Account non attivo'; end if;
  if target_role = 'team_captain' then
    if p_member <> auth.uid() then raise exception 'Solo il Team Captain può segnare la propria presenza'; end if;
  elsif target_team is null then
    raise exception 'Questa persona non appartiene a un reparto';
  elsif not powers and target_team <> caller_team then
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

create or replace function public.set_name_attendance(p_name text, p_date date, p_present boolean) returns void language plpgsql security definer
set search_path = '' as $$
declare v_id uuid;
begin
  if not public.is_team_captain() then raise exception 'Solo il Team Captain può segnare le presenze di chi non ha un account'; end if;
  if extract(isodow from p_date) <> 3 then raise exception 'Le presenze si segnano solo per le riunioni del mercoledì'; end if;
  if not exists (select 1 from public.team_names where full_name = p_name) then raise exception 'Nome non presente nell''elenco del team'; end if;
  if exists (select 1 from public.members where full_name = p_name and active) then
    raise exception 'Questa persona ha già un account: aggiorna la pagina e riprova';
  end if;
  if p_present then
    insert into public.name_attendance(full_name, meeting_date, marked_by) values (p_name, p_date, auth.uid())
    on conflict do nothing returning id into v_id;
  else
    delete from public.name_attendance where full_name = p_name and meeting_date = p_date returning id into v_id;
  end if;
  if v_id is not null then
    insert into public.audit_log(table_name, record_id, actor_id, action, after_record)
    values ('name_attendance', v_id, auth.uid(), case when p_present then 'PRESENTE' else 'ASSENTE' end,
      jsonb_build_object('full_name', p_name, 'meeting_date', p_date));
  end if;
end; $$;
commit;
