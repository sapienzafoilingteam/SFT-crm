-- Presenze alle riunioni dei reparti.
-- Ogni account indica Nome Cognome e reparto in fase di registrazione; il reparto non è
-- modificabile dall'utente. Un membro può segnare (o togliere) la presenza solo di persone
-- del proprio reparto. Le presenze sono leggibili da tutti i membri attivi.
begin;

create function public.valid_full_name(value text) returns boolean language sql immutable
set search_path = '' as $$
  -- Intervalli espliciti: il risultato non dipende dal locale del database.
  select value ~ '^[A-ZÀ-ÖØ-Þ][A-Za-zÀ-ÖØ-öø-ÿĀ-ž''’.-]*( [A-ZÀ-ÖØ-Þ][A-Za-zÀ-ÖØ-öø-ÿĀ-ž''’.-]*)+$' and char_length(value) <= 80;
$$;

alter table public.members
  add column email text not null default '',
  add column full_name text not null default '' check (full_name = '' or public.valid_full_name(full_name)),
  add column team_id text references public.teams(id);

update public.members m set email = coalesce(u.email, '') from auth.users u where u.id = m.id;

-- Profilo dalla registrazione. L'account diventa attivo quando la mail è confermata
-- (subito, se il progetto non richiede la conferma).
create function public.handle_new_user() returns trigger language plpgsql security definer
set search_path = '' as $$
declare
  name text := btrim(regexp_replace(coalesce(new.raw_user_meta_data->>'full_name', ''), '\s+', ' ', 'g'));
  team text := new.raw_user_meta_data->>'team_id';
begin
  if not public.valid_full_name(name) then name := ''; end if;
  if not exists (select 1 from public.teams where id = team) then team := null; end if;
  insert into public.members(id, display_name, email, full_name, team_id, active, is_admin)
  values (new.id, coalesce(nullif(name, ''), coalesce(new.email, '')), coalesce(new.email, ''), name, team, new.email_confirmed_at is not null, false)
  on conflict (id) do nothing;
  return new;
end; $$;
revoke all on function public.handle_new_user() from public, anon, authenticated;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Attivazione alla conferma della mail (registrazione o accettazione dell'invito).
-- Scatta solo al primo passaggio da "non confermata" a "confermata": chi è stato
-- disattivato da un amministratore non viene riattivato.
create function public.activate_confirmed_member() returns trigger language plpgsql security definer
set search_path = '' as $$
begin
  if old.email_confirmed_at is null and new.email_confirmed_at is not null then
    update public.members set active = true where id = new.id;
  end if;
  return null;
end; $$;
revoke all on function public.activate_confirmed_member() from public, anon, authenticated;
create trigger on_auth_user_confirmed after update of email_confirmed_at on auth.users
  for each row execute function public.activate_confirmed_member();

-- Gli account esistenti senza profilo lo completano una sola volta; poi solo un admin può correggerlo.
create function public.complete_profile(p_full_name text, p_team_id text) returns void language plpgsql security definer
set search_path = '' as $$
declare name text := btrim(regexp_replace(coalesce(p_full_name, ''), '\s+', ' ', 'g'));
begin
  if not public.is_member() then raise exception 'Solo i membri attivi possono completare il profilo'; end if;
  if not public.valid_full_name(name) then raise exception 'Scrivi Nome e Cognome con le iniziali maiuscole'; end if;
  if not exists (select 1 from public.teams where id = p_team_id) then raise exception 'Reparto non valido'; end if;
  update public.members set full_name = name, display_name = name, team_id = p_team_id
  where id = auth.uid() and team_id is null and full_name = '';
  if not found then raise exception 'Il profilo è già completo: per modificarlo contatta un amministratore'; end if;
end; $$;

-- Elenco dei membri per reparto, visibile a tutti i membri attivi (solo nome e reparto).
create function public.attendance_roster() returns table(id uuid, full_name text, team_id text) language sql stable security definer
set search_path = '' as $$
  select m.id, m.full_name, m.team_id from public.members m
  where public.is_member() and m.active and m.team_id is not null and m.full_name <> ''
  order by m.full_name;
$$;

create table public.attendance (
  member_id uuid not null references public.members(id) on delete cascade,
  meeting_date date not null check (meeting_date between '2020-01-01' and '2100-12-31'),
  team_id text not null references public.teams(id),
  marked_by uuid references auth.users(id) on delete set null,
  marked_at timestamptz not null default now(),
  primary key (member_id, meeting_date)
);
create index attendance_date on public.attendance(meeting_date, team_id);
alter table public.attendance enable row level security;
create policy member_read on public.attendance for select to authenticated using (public.is_member());
grant select on public.attendance to authenticated;
revoke all on public.attendance from anon;
revoke insert, update, delete on public.attendance from authenticated;

create function public.set_attendance(p_member uuid, p_date date, p_present boolean) returns void language plpgsql security definer
set search_path = '' as $$
declare caller_team text; target_team text;
begin
  select team_id into caller_team from public.members where id = auth.uid() and active;
  if caller_team is null then raise exception 'Solo i membri attivi con un reparto possono segnare le presenze'; end if;
  select team_id into target_team from public.members where id = p_member and active;
  if target_team is null or target_team <> caller_team then
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

revoke all on function public.complete_profile(text, text), public.attendance_roster(), public.set_attendance(uuid, date, boolean) from public, anon;
grant execute on function public.complete_profile(text, text), public.attendance_roster(), public.set_attendance(uuid, date, boolean) to authenticated;

-- Aggiornamento in tempo reale della tabella Presenze, dove Realtime è disponibile.
do $$ begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    alter publication supabase_realtime add table public.attendance;
  end if;
end $$;
commit;
