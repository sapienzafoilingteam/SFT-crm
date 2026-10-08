begin;
create table public.calendar_links (
 calendar_id text not null, google_id text not null,
 collection text not null check (collection in ('events','deliveries')), record_id uuid not null,
 local_hash text not null, google_hash text not null,
 primary key(calendar_id,google_id), unique(calendar_id,collection,record_id)
);
alter table public.calendar_links enable row level security;
create policy member_access on public.calendar_links for all to authenticated
 using(public.is_member()) with check(public.is_member());
grant select,insert,update on public.calendar_links to authenticated,service_role;
revoke all on public.calendar_links from anon;
create table public.calendar_sync_lock (id boolean primary key default true check(id), token uuid, expires_at timestamptz);
insert into public.calendar_sync_lock(id) values(true);
alter table public.calendar_sync_lock enable row level security;
revoke all on public.calendar_sync_lock from anon,authenticated;
create function public.acquire_calendar_sync(lock_token uuid) returns boolean
 language plpgsql security definer set search_path = '' as $$
begin
 if not public.is_member() and coalesce(auth.role(),'') <> 'service_role' then raise exception 'Accesso negato'; end if;
 update public.calendar_sync_lock set token=lock_token, expires_at=now()+interval '5 minutes'
 where id=true and (token is null or expires_at<now());
 return found;
end; $$;
create function public.release_calendar_sync(lock_token uuid) returns void
 language plpgsql security definer set search_path = '' as $$
begin
 if not public.is_member() and coalesce(auth.role(),'') <> 'service_role' then raise exception 'Accesso negato'; end if;
 update public.calendar_sync_lock set token=null,expires_at=null where id=true and token=lock_token;
end; $$;
revoke all on function public.acquire_calendar_sync(uuid),public.release_calendar_sync(uuid) from public,anon;
grant execute on function public.acquire_calendar_sync(uuid),public.release_calendar_sync(uuid) to authenticated,service_role;
commit;
