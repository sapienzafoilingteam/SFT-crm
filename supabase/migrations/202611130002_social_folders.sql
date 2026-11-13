begin;
create table public.social_drive_folders (
 id text primary key check(id ~ '^[A-Za-z0-9_-]+$'),
 name text not null check(length(name) between 1 and 300),
 created_by uuid not null references public.members(id),
 created_at timestamptz not null default now()
);
alter table public.social_drive_folders enable row level security;
create policy social_folder_read on public.social_drive_folders for select to authenticated using(public.can_use_social());
create policy social_folder_insert on public.social_drive_folders for insert to authenticated with check(public.can_use_social() and created_by=auth.uid());
create policy social_folder_update on public.social_drive_folders for update to authenticated using(public.can_use_social()) with check(public.can_use_social() and created_by=auth.uid());
grant select,insert,update on public.social_drive_folders to authenticated;
revoke all on public.social_drive_folders from anon;
commit;
