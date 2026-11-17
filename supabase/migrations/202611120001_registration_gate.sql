-- Registrazione riservata a chi conosce la password dell'account del team
-- (sapienzafoilingteam@gmail.com). La password non viene copiata: il database la confronta
-- con l'hash già salvato da Supabase Auth, quindi se cambia la password cambia anche l'accesso
-- alla registrazione. La verifica rilascia un codice monouso valido 30 minuti, richiesto dal
-- trigger su auth.users: senza codice valido nessun nuovo account può essere creato con la
-- chiave pubblica. Gli inviti dalla console Supabase (Invite user) restano consentiti.
begin;
create schema if not exists extensions;
create extension if not exists pgcrypto with schema extensions;

create table public.registration_tokens (
  token_hash text primary key,
  expires_at timestamptz not null
);
create table public.registration_attempts (
  id bigint generated always as identity primary key,
  client text not null,
  at timestamptz not null default now()
);
create index registration_attempts_recent on public.registration_attempts(at, client);
alter table public.registration_tokens enable row level security;
alter table public.registration_attempts enable row level security;
revoke all on public.registration_tokens, public.registration_attempts from anon, authenticated;

create function public.registration_gate_email() returns text language sql immutable
set search_path = '' as $$ select 'sapienzafoilingteam@gmail.com'::text $$;

create function public.issue_registration_token(p_password text) returns text language plpgsql volatile security definer
set search_path = '' as $$
declare
  headers text := nullif(current_setting('request.headers', true), '');
  v_client text := coalesce(nullif(btrim(split_part(coalesce(headers::json->>'x-forwarded-for', ''), ',', 1)), ''), 'sconosciuto');
  v_hash text;
  v_token text;
begin
  delete from public.registration_attempts where at < now() - interval '1 day';
  delete from public.registration_tokens where expires_at < now();
  if (select count(*) from public.registration_attempts where client = v_client and at > now() - interval '15 minutes') >= 5
     or (select count(*) from public.registration_attempts where at > now() - interval '15 minutes') >= 50 then
    raise exception 'Troppi tentativi. Riprova tra 15 minuti.';
  end if;
  select encrypted_password into v_hash from auth.users
  where lower(email) = public.registration_gate_email() and coalesce(encrypted_password, '') <> '' limit 1;
  if v_hash is null or coalesce(p_password, '') = '' or extensions.crypt(p_password, v_hash) <> v_hash then
    -- Nessuna eccezione: il tentativo fallito deve restare registrato.
    insert into public.registration_attempts(client) values (v_client);
    return null;
  end if;
  v_token := encode(extensions.gen_random_bytes(24), 'hex');
  insert into public.registration_tokens values (encode(sha256(convert_to(v_token, 'UTF8')), 'hex'), now() + interval '30 minutes');
  return v_token;
end; $$;
revoke all on function public.issue_registration_token(text), public.registration_gate_email() from public;
grant execute on function public.issue_registration_token(text) to anon, authenticated;

-- Controllo differito a fine transazione: Supabase Auth crea l'utente e solo dopo, nella stessa
-- transazione, segna invited_at per gli inviti. Un controllo immediato li rifiuterebbe.
create function public.check_registration_gate() returns trigger language plpgsql security definer
set search_path = '' as $$
declare v_invited timestamptz; v_meta jsonb; v_token text;
begin
  select invited_at, raw_user_meta_data into v_invited, v_meta from auth.users where id = new.id;
  if not found or v_invited is not null then return null; end if;
  v_token := v_meta->>'registration_token';
  if coalesce(v_token, '') = '' then
    raise exception 'Registrazione riservata ai membri del team';
  end if;
  -- Codice monouso: dopo il consumo il valore rimasto nei metadati non vale più nulla.
  delete from public.registration_tokens
  where token_hash = encode(sha256(convert_to(v_token, 'UTF8')), 'hex') and expires_at > now();
  if not found then raise exception 'Codice di registrazione non valido o scaduto'; end if;
  return null;
end; $$;
revoke all on function public.check_registration_gate() from public, anon, authenticated;
create constraint trigger registration_gate after insert on auth.users
  deferrable initially deferred
  for each row execute function public.check_registration_gate();
commit;
