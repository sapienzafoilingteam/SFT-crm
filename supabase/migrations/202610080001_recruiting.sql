begin;

-- Private recruiting records are accessible only through the password-gated server.
create table public.recruiting_candidates (
 id uuid primary key default gen_random_uuid(), source_id text not null unique,
 season_id uuid not null references public.seasons(id), submitted_at text not null,
 first_name text not null, last_name text not null, email text not null, phone text not null default '',
 degree text not null default '', year text not null default '', discovery text not null default '', sailing text not null default '',
 requested_team text not null default '', interests text not null default '',
 answers jsonb not null default '[]' check(jsonb_typeof(answers)='array'),
 attachments jsonb not null default '[]' check(jsonb_typeof(attachments)='array'), source_hash text not null,
 source_missing boolean not null default false,
 stage text not null default 'Nuova' check(stage in ('Nuova','Da contattare','Colloquio da fissare','Colloquio fissato','In valutazione','Accettata','Non selezionata','Ritirata')),
 owner text not null default '', assigned_team text not null default '' check(assigned_team in ('','scafo','management','materiali','manufacturing','foil','elettronica','shore')),
 next_action text not null default '', due_date text not null default '' check(due_date='' or public.valid_date(due_date)),
 notes text not null default '', evaluation text not null default '', archived boolean not null default false,
 version integer not null default 1, updated_at timestamptz not null default now()
);
create index recruiting_season on public.recruiting_candidates(season_id,archived);
create table public.recruiting_activities (
 id uuid primary key default gen_random_uuid(), candidate_id uuid not null references public.recruiting_candidates(id),
 actor text not null, text text not null, at timestamptz not null default now()
);
create index recruiting_activity_candidate on public.recruiting_activities(candidate_id,at);
create table public.recruiting_interviews (
 id uuid primary key default gen_random_uuid(), candidate_id uuid not null references public.recruiting_candidates(id),
 event_id uuid not null unique references public.events(id), notes text not null default '', outcome text not null default '',
 version integer not null default 1
);
create table public.recruiting_sync (
 id boolean primary key default true check(id), last_sync timestamptz, error text, header_hash text,
 lock_token uuid, locked_until timestamptz
);
insert into public.recruiting_sync(id) values(true);
create table public.recruiting_unlock_attempts (
 member_id uuid primary key references auth.users(id) on delete cascade,
 attempts integer not null default 0, window_start timestamptz not null default now()
);
create table public.recruiting_drive_files(file_id text primary key);

-- Do not attach the general audit trigger: its log is visible to all members.
alter table public.recruiting_candidates enable row level security;
alter table public.recruiting_activities enable row level security;
alter table public.recruiting_interviews enable row level security;
alter table public.recruiting_sync enable row level security;
alter table public.recruiting_unlock_attempts enable row level security;
alter table public.recruiting_drive_files enable row level security;
revoke all on public.recruiting_candidates,public.recruiting_activities,public.recruiting_interviews,public.recruiting_sync,public.recruiting_unlock_attempts,public.recruiting_drive_files from public,anon,authenticated;
grant select,insert,update,delete on public.recruiting_candidates,public.recruiting_activities,public.recruiting_interviews,public.recruiting_sync,public.recruiting_unlock_attempts,public.recruiting_drive_files to service_role;

-- The shared agenda contains only scheduling data, never candidate identity.
alter table public.events add column start_time text not null default '' check(start_time='' or start_time ~ '^([01][0-9]|2[0-3]):[0-5][0-9]$');
alter table public.events add column end_time text not null default '' check(end_time='' or end_time ~ '^([01][0-9]|2[0-3]):[0-5][0-9]$');
alter table public.events add column team_id text not null default '' check(team_id in ('','scafo','management','materiali','manufacturing','foil','elettronica','shore'));
alter table public.events add constraint event_times check((start_time='' and end_time='') or (start_time<>'' and end_time<>'' and end_time>start_time));
-- Older clients omit these fields in jsonb_populate_record; normalize before constraints.
create function public.event_time_defaults() returns trigger language plpgsql set search_path='' as $$
begin
 if TG_OP='UPDATE' then
  if new.start_time is null and new.end_time is null then new.start_time:=old.start_time; new.end_time:=old.end_time; end if;
  if new.team_id is null then new.team_id:=old.team_id; end if;
  if old.type='Colloquio recruiting' then new.type:=old.type; end if;
 end if;
 new.start_time:=coalesce(new.start_time,''); new.end_time:=coalesce(new.end_time,''); new.team_id:=coalesce(new.team_id,'');
 if new.type='Colloquio recruiting' then
  new.title:='Colloquio recruiting · '||case new.team_id when 'scafo' then 'Scafo' when 'management' then 'Management' when 'materiali' then 'Materiali' when 'manufacturing' then 'Cantiere' when 'foil' then 'Foil' when 'elettronica' then 'Elettronica' when 'shore' then 'Shore team' else 'Team' end;
  new.document_url:=''; new.recap:=''; new.checklist:='[]'::jsonb; new.sponsor_id:=null;
  if new.status='Annullato' then new.archived:=true; end if;
 end if;
 return new;
end; $$;
revoke all on function public.event_time_defaults() from public,anon,authenticated;
create trigger event_time_defaults before insert or update on public.events for each row execute function public.event_time_defaults();

create function public.recruiting_attempt(member uuid) returns boolean language plpgsql set search_path='' as $$
declare n integer;
begin
 insert into public.recruiting_unlock_attempts(member_id,attempts) values(member,1)
 on conflict(member_id) do update set
 attempts=case when recruiting_unlock_attempts.window_start < now()-interval '15 minutes' then 1 else recruiting_unlock_attempts.attempts+1 end,
 window_start=case when recruiting_unlock_attempts.window_start < now()-interval '15 minutes' then now() else recruiting_unlock_attempts.window_start end
 returning attempts into n;
 return n<=5;
end; $$;

create function public.acquire_recruiting_sync(token uuid) returns boolean language plpgsql set search_path='' as $$
begin
 update public.recruiting_sync set lock_token=token,locked_until=now()+interval '2 minutes'
 where id and (locked_until is null or locked_until<now());
 return found;
end; $$;
create function public.release_recruiting_sync(token uuid) returns void language sql set search_path='' as $$
 update public.recruiting_sync set lock_token=null,locked_until=null where id and lock_token=token;
$$;

-- A complete snapshot is committed atomically; malformed imports preserve the previous data.
create function public.import_recruiting(records jsonb, season uuid, headers_hash text default null) returns void language plpgsql set search_path='' as $$
declare r jsonb;
begin
 if jsonb_typeof(records)<>'array' then raise exception 'Importazione non valida'; end if;
 for r in select value from jsonb_array_elements(records) loop
  insert into public.recruiting_candidates(source_id,season_id,submitted_at,first_name,last_name,email,phone,degree,year,discovery,sailing,requested_team,interests,answers,attachments,source_hash)
  values(r->>'source_id',season,r->>'submitted_at',r->>'first_name',r->>'last_name',r->>'email',r->>'phone',r->>'degree',r->>'year',r->>'discovery',r->>'sailing',r->>'requested_team',r->>'interests',r->'answers',r->'attachments',r->>'source_hash')
  on conflict(source_id) do update set submitted_at=excluded.submitted_at,first_name=excluded.first_name,last_name=excluded.last_name,
  email=excluded.email,phone=excluded.phone,degree=excluded.degree,year=excluded.year,discovery=excluded.discovery,sailing=excluded.sailing,
  requested_team=excluded.requested_team,interests=excluded.interests,answers=excluded.answers,attachments=excluded.attachments,
  source_hash=excluded.source_hash,source_missing=false,version=recruiting_candidates.version+1,updated_at=now()
  where recruiting_candidates.source_hash<>excluded.source_hash or recruiting_candidates.source_missing;
 end loop;
 update public.recruiting_candidates set source_missing=true,version=version+1,updated_at=now()
 where season_id=season and not source_missing and source_id not in(select value->>'source_id' from jsonb_array_elements(records));
 update public.recruiting_sync set last_sync=now(),error=null,header_hash=coalesce(headers_hash,header_hash) where id;
end; $$;

create function public.update_recruiting(candidate uuid, expected integer, fields jsonb, actor text) returns void language plpgsql set search_path='' as $$
declare previous public.recruiting_candidates; summary text;
begin
 select * into previous from public.recruiting_candidates where id=candidate for update;
 if not found or previous.version<>expected then raise exception 'Candidatura aggiornata da un altro selezionatore. Ricarica prima di salvare.'; end if;
 update public.recruiting_candidates set
 stage=coalesce(fields->>'stage',stage),owner=coalesce(fields->>'owner',owner),assigned_team=coalesce(fields->>'assigned_team',assigned_team),
 next_action=coalesce(fields->>'next_action',next_action),due_date=coalesce(fields->>'due_date',due_date),notes=coalesce(fields->>'notes',notes),
 evaluation=coalesce(fields->>'evaluation',evaluation),archived=coalesce((fields->>'archived')::boolean,archived),version=version+1,updated_at=now()
 where id=candidate;
 summary:=case when fields ? 'stage' and fields->>'stage'<>previous.stage then 'Stato: '||previous.stage||' → '||(fields->>'stage') else 'Scheda e valutazione aggiornate' end;
 if fields ? 'archived' then summary:=case when (fields->>'archived')::boolean then 'Candidatura archiviata' else 'Candidatura ripristinata' end; end if;
 insert into public.recruiting_activities(candidate_id,actor,text) values(candidate,actor,summary);
end; $$;

-- Public event and private interview are saved in the same transaction.
create function public.save_recruiting_interview(candidate uuid, interview uuid, expected integer, event_expected integer, fields jsonb, actor text) returns void language plpgsql set search_path='' as $$
declare c public.recruiting_candidates; existing public.recruiting_interviews; event uuid; n integer;
begin
 select * into c from public.recruiting_candidates where id=candidate for update;
 if not found or c.archived then raise exception 'Candidatura non disponibile'; end if;
 select * into existing from public.recruiting_interviews where id=interview for update;
 if found then
  if existing.candidate_id<>candidate or existing.version<>expected then raise exception 'Colloquio aggiornato. Ricarica prima di salvare.'; end if;
  event:=existing.event_id;
  update public.events set title=fields->>'title',date=fields->>'date',start_time=fields->>'start_time',end_time=fields->>'end_time',
  team_id=fields->>'team_id',location=fields->>'location',description=fields->>'description',status=fields->>'status',archived=(fields->>'status'='Annullato')
  where id=event and version=event_expected;
  get diagnostics n=row_count;
  if n<>1 then raise exception 'Orario modificato in agenda. Ricarica prima di salvare.'; end if;
  update public.recruiting_interviews set notes=fields->>'notes',outcome=fields->>'outcome',version=version+1 where id=interview;
 else
  if expected is not null then raise exception 'Colloquio mancante'; end if;
  insert into public.events(season_id,title,type,status,date,start_time,end_time,team_id,location,description)
  values(c.season_id,fields->>'title','Colloquio recruiting',fields->>'status',fields->>'date',fields->>'start_time',fields->>'end_time',fields->>'team_id',fields->>'location',fields->>'description') returning id into event;
  insert into public.recruiting_interviews(id,candidate_id,event_id,notes,outcome) values(interview,candidate,event,fields->>'notes',fields->>'outcome');
 end if;
 if c.stage in ('Nuova','Da contattare','Colloquio da fissare') and fields->>'status'='Confermato' then
  update public.recruiting_candidates set stage='Colloquio fissato',version=version+1,updated_at=now() where id=candidate;
 end if;
 insert into public.recruiting_activities(candidate_id,actor,text) values(candidate,actor,'Colloquio: '||(fields->>'status')||' · '||(fields->>'date')||' '||(fields->>'start_time'));
end; $$;

revoke all on function public.recruiting_attempt(uuid),public.acquire_recruiting_sync(uuid),public.release_recruiting_sync(uuid),public.import_recruiting(jsonb,uuid,text),public.update_recruiting(uuid,integer,jsonb,text),public.save_recruiting_interview(uuid,uuid,integer,integer,jsonb,text) from public,anon,authenticated;
grant execute on function public.recruiting_attempt(uuid),public.acquire_recruiting_sync(uuid),public.release_recruiting_sync(uuid),public.import_recruiting(jsonb,uuid,text),public.update_recruiting(uuid,integer,jsonb,text),public.save_recruiting_interview(uuid,uuid,integer,integer,jsonb,text) to service_role;
grant select,insert,update on public.events to service_role;
grant select on public.seasons to service_role;
commit;
