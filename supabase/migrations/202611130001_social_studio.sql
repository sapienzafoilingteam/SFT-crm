-- SFT Social Studio: explicit authorisation, private media, atomic versioned saves.
begin;
alter table public.members add column if not exists social_enabled boolean not null default false;
create or replace function public.can_use_social() returns boolean language sql stable security definer
set search_path = '' as $$ select exists(select 1 from public.members where id=auth.uid() and active and (is_admin or social_enabled)); $$;
revoke all on function public.can_use_social() from public, anon;
grant execute on function public.can_use_social() to authenticated;
create table public.social_projects (
 id uuid primary key, season_id uuid not null references public.seasons(id), title text not null check(length(title) between 1 and 300),
 document jsonb not null check(jsonb_typeof(document)='object' and octet_length(document::text)<=15000000),
 version integer not null default 1, is_template boolean not null default false,
 author_id uuid references auth.users(id) on delete set null, author_name text not null default '',
 updated_at timestamptz not null default now(), created_at timestamptz not null default now()
);
create index social_projects_season on public.social_projects(season_id,updated_at desc);
create table public.social_revisions (
 id bigint generated always as identity primary key, project_id uuid not null references public.social_projects(id) on delete cascade,
 version integer not null, document jsonb not null, actor_id uuid references auth.users(id) on delete set null,
 created_at timestamptz not null default now(), unique(project_id,version)
);
create table public.social_assets (
 id uuid primary key, name text not null check(length(name) between 1 and 300), folder text not null default '',
 mime text not null check(mime in ('image/png','image/jpeg','image/webp','image/svg+xml')),
 width integer not null check(width>0 and width<=40000), height integer not null check(height>0 and height<=40000),
 size bigint not null check(size between 1 and 20971520), hash text not null,
 source text not null check(source in ('local','drive','brand')), drive_id text,
 favorite boolean not null default false, collection text, sponsor_id uuid references public.sponsors(id) on delete set null,
 season_id uuid references public.seasons(id) on delete set null,
 thumbnail_path text, storage_path text not null unique check(storage_path !~ '^brand/' or source='brand'),
 created_by uuid references auth.users(id) on delete set null, created_at timestamptz not null default now(),
 check(source<>'brand' or storage_path ~ '^brand/')
);
create table public.social_brand_overrides (
 id text primary key, name text not null check(length(name) between 1 and 300), folder text not null default '', collection text,
 sponsor_id uuid references public.sponsors(id) on delete set null, season_id uuid references public.seasons(id) on delete set null
);
create table public.social_asset_favorites (
 user_id uuid not null references auth.users(id) on delete cascade, asset_id text not null, favorite boolean not null default true, primary key(user_id,asset_id)
);
alter table public.social_brand_overrides enable row level security;
alter table public.social_asset_favorites enable row level security;
create policy social_brand_read on public.social_brand_overrides for select to authenticated using(public.can_use_social());
create policy social_brand_insert on public.social_brand_overrides for insert to authenticated with check(public.is_team_admin());
create policy social_brand_update on public.social_brand_overrides for update to authenticated using(public.is_team_admin()) with check(public.is_team_admin());
create policy social_favorite_read on public.social_asset_favorites for select to authenticated using(public.can_use_social() and user_id=auth.uid());
create policy social_favorite_insert on public.social_asset_favorites for insert to authenticated with check(public.can_use_social() and user_id=auth.uid());
create policy social_favorite_update on public.social_asset_favorites for update to authenticated using(public.can_use_social() and user_id=auth.uid()) with check(public.can_use_social() and user_id=auth.uid());
grant select,insert,update on public.social_brand_overrides,public.social_asset_favorites to authenticated;
revoke all on public.social_brand_overrides,public.social_asset_favorites from anon;
create index social_assets_hash on public.social_assets(hash);
alter table public.social_projects enable row level security;
alter table public.social_revisions enable row level security;
alter table public.social_assets enable row level security;
create policy social_read on public.social_projects for select to authenticated using(public.can_use_social());
create policy social_read on public.social_revisions for select to authenticated using(public.can_use_social());
-- Project mutations only through the version-guarded RPC, never direct table updates.
grant select on public.social_projects,public.social_revisions to authenticated;
revoke all on public.social_projects,public.social_revisions from anon;
revoke insert,update,delete on public.social_projects,public.social_revisions from authenticated;
create policy social_asset_read on public.social_assets for select to authenticated using(public.can_use_social());
create policy social_asset_insert on public.social_assets for insert to authenticated with check(public.can_use_social() and (source<>'brand' or public.is_team_admin()) and created_by=auth.uid());
create policy social_asset_update on public.social_assets for update to authenticated using(public.can_use_social() and (source<>'brand' or public.is_team_admin())) with check(public.can_use_social() and (source<>'brand' or public.is_team_admin()));
grant select,insert,update on public.social_assets to authenticated;
revoke all on public.social_assets from anon;
create or replace function public.save_social_project(p_document jsonb,p_expected integer) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare previous public.social_projects; saved public.social_projects; v_project_id uuid; season uuid; author text;
begin
 if not public.can_use_social() then raise exception 'Accesso Social non abilitato' using errcode='42501'; end if;
 if p_expected is null or p_expected<0 then raise exception 'Versione non valida'; end if;
 if jsonb_typeof(p_document) is distinct from 'object' or octet_length(p_document::text)>15000000
 or coalesce(length(p_document->>'title'),0) not between 1 and 300
 or jsonb_typeof(p_document->'slides') is distinct from 'array'
 or coalesce(p_document->>'width','')<>'1080' or coalesce(p_document->>'height','') not in ('1080','1350')
 then raise exception 'Progetto non valido'; end if;
 if jsonb_array_length(p_document->'slides') not between 1 and 100 then raise exception 'Numero slide non valido'; end if;
 v_project_id := (p_document->>'id')::uuid; season := (p_document->>'seasonId')::uuid;
 -- Serialize creation as well as update; concurrent tabs cannot both create the same ID.
 perform pg_advisory_xact_lock(hashtextextended(v_project_id::text,0));
 select * into previous from public.social_projects where id=v_project_id for update;
 if (previous.id is null and p_expected<>0) or (previous.id is not null and previous.version<>p_expected) then
   raise exception 'SOCIAL_CONFLICT: progetto modificato da un altro utente' using errcode='40001';
 end if;
 select display_name into author from public.members where id=auth.uid();
 if previous.id is null then
  insert into public.social_projects(id,season_id,title,document,version,is_template,author_id,author_name)
  values(v_project_id,season,p_document->>'title',p_document,1,coalesce((p_document->>'template')::boolean,false),auth.uid(),coalesce(author,'')) returning * into saved;
 else
  update public.social_projects set season_id=season,title=p_document->>'title',document=p_document,
  version=previous.version+1,is_template=coalesce((p_document->>'template')::boolean,false),updated_at=now()
  where id=v_project_id returning * into saved;
 end if;
 insert into public.social_revisions(project_id,version,document,actor_id) values(v_project_id,saved.version,p_document,auth.uid());
 -- Retain the latest 30 complete revisions per document.
 delete from public.social_revisions where social_revisions.project_id=saved.id and social_revisions.version<=saved.version-30;
 return to_jsonb(saved);
end; $$;
revoke all on function public.save_social_project(jsonb,integer) from public,anon;
grant execute on function public.save_social_project(jsonb,integer) to authenticated;
create or replace function public.delete_social_project(p_id uuid,p_expected integer) returns void
language plpgsql security definer set search_path = '' as $$
begin
 if not public.can_use_social() then raise exception 'Accesso Social non abilitato' using errcode='42501'; end if;
 delete from public.social_projects where id=p_id and version=p_expected;
 if not found then raise exception 'SOCIAL_CONFLICT: ricarica il progetto' using errcode='40001'; end if;
end; $$;
revoke all on function public.delete_social_project(uuid,integer) from public,anon;
grant execute on function public.delete_social_project(uuid,integer) to authenticated;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('social-media','social-media',false,20971520,array['image/png','image/jpeg','image/webp','image/svg+xml'])
on conflict(id) do nothing;
create policy social_media_read on storage.objects for select to authenticated using(bucket_id='social-media' and public.can_use_social());
create policy social_media_insert on storage.objects for insert to authenticated with check(bucket_id='social-media' and public.can_use_social() and ((name like 'brand/%' and public.is_team_admin()) or (name not like 'brand/%' and (storage.foldername(name))[1]=auth.uid()::text)));
-- Objects are immutable: replacing an asset creates a new object and keeps old projects reproducible.
commit;
