-- Presenze segnate dal Team Captain direttamente nella tabella mensile, anche per chi non ha
-- ancora un account: la presenza si lega al nome dell'elenco (team_names). Quando quella persona
-- si registra con quel nome e l'account è attivo, le presenze passano al suo account.
-- Da eseguire dopo 202611150001_team_names.sql.
begin;
create table public.name_attendance (
  id uuid not null default gen_random_uuid() unique,
  full_name text not null references public.team_names(full_name) on update cascade on delete cascade,
  meeting_date date not null check (meeting_date between '2020-01-01' and '2100-12-31'),
  marked_by uuid references auth.users(id) on delete set null,
  marked_at timestamptz not null default now(),
  primary key (full_name, meeting_date)
);
alter table public.name_attendance enable row level security;
create policy member_read on public.name_attendance for select to authenticated using (public.is_member());
grant select on public.name_attendance to authenticated;
revoke all on public.name_attendance from anon;
revoke insert, update, delete on public.name_attendance from authenticated;

-- Solo il Team Captain, solo per i nomi dell'elenco senza un account attivo
-- (per gli account attivi si usa set_attendance, come nella sezione del reparto).
create function public.set_name_attendance(p_name text, p_date date, p_present boolean) returns void language plpgsql security definer
set search_path = '' as $$
declare v_id uuid;
begin
  if not public.is_team_captain() then raise exception 'Solo il Team Captain può segnare le presenze di chi non ha un account'; end if;
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
revoke all on function public.set_name_attendance(text, date, boolean) from public, anon;
grant execute on function public.set_name_attendance(text, date, boolean) to authenticated;

-- Quando un account attivo ha il nome, le presenze segnate sul nome passano all'account.
create function public.claim_name_attendance() returns trigger language plpgsql security definer
set search_path = '' as $$
begin
  if new.active and new.full_name <> '' then
    insert into public.attendance(member_id, meeting_date, team_id, marked_by, marked_at)
    select new.id, n.meeting_date, new.team_id, n.marked_by, n.marked_at
    from public.name_attendance n where n.full_name = new.full_name
    on conflict do nothing;
    delete from public.name_attendance where full_name = new.full_name;
  end if;
  return null;
end; $$;
revoke all on function public.claim_name_attendance() from public, anon, authenticated;
create trigger claim_name_attendance after insert or update of full_name, active on public.members
  for each row execute function public.claim_name_attendance();

do $$ begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    alter publication supabase_realtime add table public.name_attendance;
  end if;
end $$;
commit;
