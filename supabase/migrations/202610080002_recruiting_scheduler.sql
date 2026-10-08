begin;
create extension if not exists pg_cron;
create extension if not exists pg_net;
create extension if not exists supabase_vault;

-- The dedicated token can trigger an import, but cannot read candidates.
-- Its value stays in Vault; the cron command contains only this function name.
create function public.recruiting_scheduled_sync() returns bigint
language plpgsql set search_path='' as $$
declare endpoint text; credential text;
begin
 select decrypted_secret into endpoint from vault.decrypted_secrets where name='recruiting_endpoint';
 select decrypted_secret into credential from vault.decrypted_secrets where name='recruiting_cron_secret';
 if endpoint is null or credential is null then return null; end if;
 if endpoint <> 'https://crm.sapienzafoilingteam.com/api/recruiting/cron' then
  raise exception 'Endpoint recruiting non valido';
 end if;
 return net.http_get(url:=endpoint,headers:=jsonb_build_object('Authorization','Bearer '||credential),timeout_milliseconds:=60000);
end; $$;
revoke all on function public.recruiting_scheduled_sync() from public,anon,authenticated,service_role;
select cron.schedule('recruiting-sync','*/5 * * * *','select public.recruiting_scheduled_sync();');
commit;
