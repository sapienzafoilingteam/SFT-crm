-- Poteri del Team Captain anche per alcune persone che restano nel proprio reparto (con il proprio
-- ruolo): segnano le presenze di tutti (anche dalla tabella e sul nome di chi non ha un account),
-- abilitano/disattivano gli account e correggono reparto e ruolo.
-- Si assegnano per nome dell'elenco (team_names), così valgono anche se la persona si registra dopo.
-- Per aggiungerne o toglierne: insert/delete su public.captain_delegates.
-- Da eseguire dopo 202611160001_members_visible.sql.
begin;
create table public.captain_delegates (
  full_name text primary key references public.team_names(full_name) on update cascade on delete cascade
);
alter table public.captain_delegates enable row level security;
revoke all on public.captain_delegates from anon, authenticated;

insert into public.captain_delegates(full_name)
select full_name from public.team_names where full_name in ('Matteo Valabrega', 'Michele Arrigo Semeraro');

-- Vale per il Team Captain e per chi ne ha i poteri. Usata da set_member_assignment,
-- set_member_active, set_name_attendance, dalla policy captain_read e dal client.
create or replace function public.is_team_captain() returns boolean language sql stable security definer
set search_path = '' as $$
  select exists(select 1 from public.members m where m.id = auth.uid() and m.active and (m.role = 'team_captain'
    or (m.full_name <> '' and exists (select 1 from public.captain_delegates d where d.full_name = m.full_name))));
$$;

-- Presenze: stesso reparto, oppure qualunque reparto con i poteri del Team Captain.
-- La presenza del Team Captain (senza reparto) la segna solo lui.
create or replace function public.set_attendance(p_member uuid, p_date date, p_present boolean) returns void language plpgsql security definer
set search_path = '' as $$
declare caller_team text; caller_role text; target_team text; target_role text; powers boolean := public.is_team_captain();
begin
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
commit;
