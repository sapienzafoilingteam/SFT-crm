begin;

create or replace function public.can_use_social() returns boolean
language sql stable security definer
set search_path = ''
as $$ select public.is_member(); $$;

revoke all on function public.can_use_social() from public, anon;
grant execute on function public.can_use_social() to authenticated;

commit;
