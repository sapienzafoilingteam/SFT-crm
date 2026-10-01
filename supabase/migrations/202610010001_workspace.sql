-- SFT Workspace: eseguire sul progetto Supabase nuovo, prima dei dati reali.
-- Migrazione atomica. Nessun account o dato commerciale dimostrativo viene creato.
begin;
create table public.members (
 id uuid primary key references auth.users(id) on delete cascade,
 display_name text not null default '', active boolean not null default false,
 is_admin boolean not null default false, created_at timestamptz not null default now()
);
create or replace function public.is_member() returns boolean language sql stable security definer
set search_path = '' as $$ select exists(select 1 from public.members where id=auth.uid() and active); $$;
create or replace function public.is_team_admin() returns boolean language sql stable security definer
set search_path = '' as $$ select exists(select 1 from public.members where id=auth.uid() and active and is_admin); $$;
revoke all on function public.is_member() from public, anon;
revoke all on function public.is_team_admin() from public, anon;
grant execute on function public.is_member(),public.is_team_admin() to authenticated;
alter table public.members enable row level security;
create policy member_read on public.members for select to authenticated using(id=auth.uid() or public.is_team_admin());
create policy admin_insert on public.members for insert to authenticated with check(public.is_team_admin());
create policy admin_update on public.members for update to authenticated using(public.is_team_admin()) with check(public.is_team_admin());
grant select,insert,update on public.members to authenticated;
revoke all on public.members from anon;

create table public.seasons (id uuid primary key, name text not null, starts_on date, ends_on date);
create table public.teams (id text primary key, name text not null);
insert into public.seasons values
 ('00000000-0000-4000-8000-000000000001','2026 / 2027','2026-09-01','2027-08-31'),
 ('00000000-0000-4000-8000-000000000002','2025 / 2026','2025-09-01','2026-08-31');
-- Date indicative: modificabili dal proprietario del progetto.
insert into public.teams values
 ('scafo','Scafo e terrazze'),('management','Management e Comunicazione'),
 ('materiali','Materiali e Sostenibilità'),('manufacturing','Manufacturing e Cantiere'),
 ('foil','Foil e Controllo di Volo'),('elettronica','Elettronica e Data Analysis'),('shore','Shore Team e Logistica');
alter table public.seasons enable row level security;
alter table public.teams enable row level security;
create policy member_read on public.seasons for select to authenticated using(public.is_member());
create policy member_read on public.teams for select to authenticated using(public.is_member());
grant select on public.seasons,public.teams to authenticated;
revoke all on public.seasons,public.teams from anon;

create function public.valid_date(value text) returns boolean language plpgsql immutable
set search_path = '' as $$ begin
 if value !~ '^\d{4}-\d{2}-\d{2}$' then return false; end if;
 return to_char(value::date,'YYYY-MM-DD')=value;
 exception when others then return false;
end; $$;

create table public.audit_log (
 id bigint generated always as identity primary key, table_name text not null,
 record_id uuid not null, actor_id uuid, action text not null,
 before_record jsonb, after_record jsonb, at timestamptz not null default now()
);
alter table public.audit_log enable row level security;
create policy audit_read on public.audit_log for select to authenticated using(public.is_member());
grant select on public.audit_log to authenticated;
revoke insert,update,delete on public.audit_log from anon,authenticated;
create function public.audit_change() returns trigger language plpgsql security definer
set search_path = '' as $$ begin
 insert into public.audit_log(table_name,record_id,actor_id,action,before_record,after_record)
 values(TG_TABLE_NAME,new.id,auth.uid(),TG_OP,case when TG_OP='UPDATE' then to_jsonb(old) else null end,to_jsonb(new));
 return new;
end; $$;
revoke all on function public.audit_change() from public,anon,authenticated;
create function public.touch_record() returns trigger language plpgsql set search_path = '' as $$ begin
 if TG_OP='INSERT' then new.version:=1; new.created_by:=auth.uid();
 else new.version:=old.version+1; new.created_by:=old.created_by; new.created_at:=old.created_at; end if;
 new.updated_at:=now(); new.updated_by:=auth.uid(); return new;
end; $$;

create table public.links (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 title text not null, url text not null default '', category text not null default 'Team', team_id text references public.teams(id)
);
create index links_season on public.links(season_id,archived);
alter table public.links enable row level security;
create policy member_read on public.links for select to authenticated using(public.is_member());
create policy member_insert on public.links for insert to authenticated with check(public.is_member());
create policy member_update on public.links for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.links to authenticated;
revoke all on public.links from anon;
revoke delete on public.links from authenticated;
create trigger touch_record before insert or update on public.links for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.links for each row execute function public.audit_change();

create table public.pages (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 team_id text not null references public.teams(id), summary text not null default '', blocks jsonb not null default '[]' check (jsonb_typeof(blocks)='array'), revisions jsonb not null default '[]' check (jsonb_typeof(revisions)='array'), unique(season_id,team_id)
);
create index pages_season on public.pages(season_id,archived);
alter table public.pages enable row level security;
create policy member_read on public.pages for select to authenticated using(public.is_member());
create policy member_insert on public.pages for insert to authenticated with check(public.is_member());
create policy member_update on public.pages for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.pages to authenticated;
revoke all on public.pages from anon;
revoke delete on public.pages from authenticated;
create trigger touch_record before insert or update on public.pages for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.pages for each row execute function public.audit_change();

create table public.reports (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 team_id text not null references public.teams(id), title text not null, content text not null default '', date text not null check (public.valid_date(date)), url text not null default ''
);
create index reports_season on public.reports(season_id,archived);
alter table public.reports enable row level security;
create policy member_read on public.reports for select to authenticated using(public.is_member());
create policy member_insert on public.reports for insert to authenticated with check(public.is_member());
create policy member_update on public.reports for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.reports to authenticated;
revoke all on public.reports from anon;
revoke delete on public.reports from authenticated;
create trigger touch_record before insert or update on public.reports for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.reports for each row execute function public.audit_change();

create table public.sponsors (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 title text not null, type text not null check (type in ('Finanziario','Tecnico','Ibrido')), stage text not null check (stage in ('Da contattare','Contatto avviato','In trattativa','Contratto','Attivo','Sospeso','Non concluso')), contact text not null default '', email text not null default '', amount_cents bigint not null default 0 check (amount_cents>=0), technical_cents bigint not null default 0 check (technical_cents>=0), next_action text not null default '', due_date text not null default '' check (due_date='' or public.valid_date(due_date)), notes text not null default '', pitch_url text not null default '', document_url text not null default '', activities jsonb not null default '[]' check (jsonb_typeof(activities)='array')
);
create index sponsors_season on public.sponsors(season_id,archived);
alter table public.sponsors enable row level security;
create policy member_read on public.sponsors for select to authenticated using(public.is_member());
create policy member_insert on public.sponsors for insert to authenticated with check(public.is_member());
create policy member_update on public.sponsors for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.sponsors to authenticated;
revoke all on public.sponsors from anon;
revoke delete on public.sponsors from authenticated;
create trigger touch_record before insert or update on public.sponsors for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.sponsors for each row execute function public.audit_change();

create table public.events (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 title text not null, type text not null default 'Evento team', status text not null check (status in ('Idea','In preparazione','Confermato','Concluso','Annullato')), date text not null default '' check (date='' or public.valid_date(date)), location text not null default '', description text not null default '', checklist jsonb not null default '[]' check (jsonb_typeof(checklist)='array'), sponsor_id uuid references public.sponsors(id), document_url text not null default '', recap text not null default ''
);
create index events_season on public.events(season_id,archived);
alter table public.events enable row level security;
create policy member_read on public.events for select to authenticated using(public.is_member());
create policy member_insert on public.events for insert to authenticated with check(public.is_member());
create policy member_update on public.events for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.events to authenticated;
revoke all on public.events from anon;
revoke delete on public.events from authenticated;
create trigger touch_record before insert or update on public.events for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.events for each row execute function public.audit_change();

create table public.deliveries (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 title text not null, type text not null, status text not null check (status in ('Da fare','In preparazione','Da verificare','Consegnato / Pubblicato')), date text not null check (public.valid_date(date)), team_id text references public.teams(id), priority text not null check (priority in ('Alta','Media','Bassa')), url text not null default '', notes text not null default '', completion_url text not null default '', completed_at text not null default '', recurrence_key text, unique(season_id,recurrence_key), check (status<>'Consegnato / Pubblicato' or completion_url<>'')
);
create index deliveries_season on public.deliveries(season_id,archived);
alter table public.deliveries enable row level security;
create policy member_read on public.deliveries for select to authenticated using(public.is_member());
create policy member_insert on public.deliveries for insert to authenticated with check(public.is_member());
create policy member_update on public.deliveries for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.deliveries to authenticated;
revoke all on public.deliveries from anon;
revoke delete on public.deliveries from authenticated;
create trigger touch_record before insert or update on public.deliveries for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.deliveries for each row execute function public.audit_change();

create table public.costs (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 title text not null, date text not null check (public.valid_date(date)), amount_cents bigint not null check (amount_cents>0), category text not null, team_id text references public.teams(id), event_id uuid references public.events(id), vendor text not null default '', paid_by text not null default '', document_url text not null default '', notes text not null default ''
);
create index costs_season on public.costs(season_id,archived);
alter table public.costs enable row level security;
create policy member_read on public.costs for select to authenticated using(public.is_member());
create policy member_insert on public.costs for insert to authenticated with check(public.is_member());
create policy member_update on public.costs for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.costs to authenticated;
revoke all on public.costs from anon;
revoke delete on public.costs from authenticated;
create trigger touch_record before insert or update on public.costs for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.costs for each row execute function public.audit_change();

create table public.contracts (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 title text not null, sponsor_id uuid references public.sponsors(id), event_id uuid references public.events(id), type text not null, status text not null check (status in ('Bozza','Inviato','Firmato','Annullato')), date text not null default '' check (date='' or public.valid_date(date)), url text not null default '', notes text not null default '', versions jsonb not null default '[]' check (jsonb_typeof(versions)='array')
);
create index contracts_season on public.contracts(season_id,archived);
alter table public.contracts enable row level security;
create policy member_read on public.contracts for select to authenticated using(public.is_member());
create policy member_insert on public.contracts for insert to authenticated with check(public.is_member());
create policy member_update on public.contracts for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.contracts to authenticated;
revoke all on public.contracts from anon;
revoke delete on public.contracts from authenticated;
create trigger touch_record before insert or update on public.contracts for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.contracts for each row execute function public.audit_change();

create table public.templates (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 title text not null, category text not null, subject text not null, body text not null, url text not null default ''
);
create index templates_season on public.templates(season_id,archived);
alter table public.templates enable row level security;
create policy member_read on public.templates for select to authenticated using(public.is_member());
create policy member_insert on public.templates for insert to authenticated with check(public.is_member());
create policy member_update on public.templates for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.templates to authenticated;
revoke all on public.templates from anon;
revoke delete on public.templates from authenticated;
create trigger touch_record before insert or update on public.templates for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.templates for each row execute function public.audit_change();

create table public.offers (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 title text not null, description text not null, conditions text not null default ''
);
create index offers_season on public.offers(season_id,archived);
alter table public.offers enable row level security;
create policy member_read on public.offers for select to authenticated using(public.is_member());
create policy member_insert on public.offers for insert to authenticated with check(public.is_member());
create policy member_update on public.offers for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.offers to authenticated;
revoke all on public.offers from anon;
revoke delete on public.offers from authenticated;
create trigger touch_record before insert or update on public.offers for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.offers for each row execute function public.audit_change();

create table public.documents (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 title text not null, category text not null, url text not null default '', storage_path text not null default ''
);
create index documents_season on public.documents(season_id,archived);
alter table public.documents enable row level security;
create policy member_read on public.documents for select to authenticated using(public.is_member());
create policy member_insert on public.documents for insert to authenticated with check(public.is_member());
create policy member_update on public.documents for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.documents to authenticated;
revoke all on public.documents from anon;
revoke delete on public.documents from authenticated;
create trigger touch_record before insert or update on public.documents for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.documents for each row execute function public.audit_change();

create table public.recurrences (
 id uuid primary key default gen_random_uuid(),
 version integer not null default 1,
 season_id uuid not null references public.seasons(id),
 archived boolean not null default false,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 created_by uuid references auth.users(id) on delete set null,
 updated_by uuid references auth.users(id) on delete set null,
 title text not null, type text not null, day integer not null check (day between 1 and 31), team_id text references public.teams(id), priority text not null check (priority in ('Alta','Media','Bassa'))
);
create index recurrences_season on public.recurrences(season_id,archived);
alter table public.recurrences enable row level security;
create policy member_read on public.recurrences for select to authenticated using(public.is_member());
create policy member_insert on public.recurrences for insert to authenticated with check(public.is_member());
create policy member_update on public.recurrences for update to authenticated using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.recurrences to authenticated;
revoke all on public.recurrences from anon;
revoke delete on public.recurrences from authenticated;
create trigger touch_record before insert or update on public.recurrences for each row execute function public.touch_record();
create trigger audit_record after insert or update on public.recurrences for each row execute function public.audit_change();

-- Un’unica transazione per le modifiche: un conflitto annulla tutto il gruppo.
create function public.apply_changes(changes jsonb) returns void language plpgsql security invoker
set search_path = '' as $$
declare c jsonb; t text; r jsonb; expected integer; affected integer; assignments text; field_name text;
begin
 if not public.is_member() then raise exception 'Accesso riservato ai membri attivi'; end if;
 if jsonb_typeof(changes)<>'array' or jsonb_array_length(changes)>100 then raise exception 'Gruppo non valido (massimo 100 elementi)'; end if;
 for c in select value from jsonb_array_elements(changes) loop
  t:=c->>'table'; r:=c->'record'; expected:=(c->>'expected_version')::integer;
  if t is null or not (t=any(array['links','pages','reports','sponsors','events','deliveries','costs','contracts','templates','offers','documents','recurrences'])) then
   raise exception 'Tabella non autorizzata';
  end if;
  if r->>'id' is null or jsonb_typeof(r)<>'object' then raise exception 'Record non valido'; end if;
  foreach field_name in array array['team_id','sponsor_id','event_id'] loop
   if r->>field_name='' then r:=jsonb_set(r,array[field_name],'null'::jsonb); end if;
  end loop;
  if expected is null then
   execute format('insert into public.%I select (jsonb_populate_record(null::public.%I,$1)).*',t,t)
   using r || jsonb_build_object('created_at',now(),'updated_at',now(),'archived',coalesce((r->>'archived')::boolean,false),'version',1);
  else
   select string_agg(format('%I = (jsonb_populate_record(null::public.%I,$1)).%I',column_name,t,column_name),', ')
    into assignments from information_schema.columns
    where table_schema='public' and table_name=t and column_name not in ('id','version','updated_at','created_at','created_by','updated_by');
   execute format('update public.%I set %s where id=($1->>''id'')::uuid and version=$2',t,assignments) using r,expected;
   get diagnostics affected=row_count;
   if affected<>1 then raise exception 'Questo elemento è stato modificato da un altro membro. Ricarica la pagina prima di salvare.'; end if;
  end if;
 end loop;
end; $$;
revoke all on function public.apply_changes(jsonb) from public,anon;
grant execute on function public.apply_changes(jsonb) to authenticated;

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('team-documents','team-documents',false,20971520,array[
 'application/pdf','image/png','image/jpeg','image/webp',
 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
 'application/vnd.openxmlformats-officedocument.presentationml.presentation']);
create policy sft_document_read on storage.objects for select to authenticated
 using(bucket_id='team-documents' and public.is_member());
create policy sft_document_upload on storage.objects for insert to authenticated
 with check(bucket_id='team-documents' and public.is_member());
-- Nessun DELETE: archiviazione dei metadati e conservazione dei file.
commit;
