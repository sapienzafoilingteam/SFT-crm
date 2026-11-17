-- Presenza del Team Captain: una al giorno, senza reparto (vale per tutti), segnata dalla Home.
-- Solo il Team Captain può segnare o togliere la propria presenza; compare nello storico come "Team Captain".
begin;
alter table public.attendance alter column team_id drop not null;

-- Il registro include il Team Captain (senza reparto), così lo storico ne mostra il nome.
create or replace function public.attendance_roster() returns table(id uuid, full_name text, team_id text, role text) language sql stable security definer
set search_path = '' as $$
  select m.id, m.full_name, m.team_id, m.role from public.members m
  where public.is_member() and m.active and m.full_name <> '' and (m.team_id is not null or m.role = 'team_captain')
  order by m.full_name;
$$;

create or replace function public.set_attendance(p_member uuid, p_date date, p_present boolean) returns void language plpgsql security definer
set search_path = '' as $$
declare caller_team text; caller_role text; target_team text; target_role text;
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
  elsif caller_role <> 'team_captain' and target_team <> caller_team then
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
