-- Elenco dei nomi del team. In registrazione (e nel completamento del profilo) ognuno sceglie il
-- proprio Nome Cognome da questo elenco: un nome vale per un solo account. La pagina Presenze
-- mostra tutti i nomi dell'elenco, anche di chi non si è ancora registrato (sempre "Assente").
-- Per aggiungere o correggere un nome: insert/update su public.team_names (per una correzione,
-- aggiornare anche members.full_name e members.display_name dell'account che lo usa).
begin;
create table public.team_names (
  full_name text primary key check (full_name = btrim(regexp_replace(full_name, '\s+', ' ', 'g')) and full_name <> '' and char_length(full_name) <= 80)
);
alter table public.team_names enable row level security;
revoke all on public.team_names from anon, authenticated;

insert into public.team_names(full_name) values
  ('Alberto Carvelli'), ('Simone Verticchio'), ('Arturo Buzzetti'), ('Erman Battistoni'), ('Edi Catalano'),
  ('Emanuele Rinnaudo'), ('Federico Vitelli'), ('Flaminia Di Giacomo'), ('Flavia Ciravegna'), ('Flavia Gentile'),
  ('Andrea Giuliotti'), ('Francesco Grossi'), ('Gabriele Maimone'), ('Gaia Gattia'), ('Giacomo Romeo'),
  ('Gianluca Ianniccari'), ('Gianmarco'), ('Giorgia Frasca'), ('Giovanni Battista Pernazza'), ('Giulio Mastronardi'),
  ('Leonardo Di Vona'), ('Leonardo Giuliani'), ('Matteo Valabrega'), ('Michele Arrigo Semeraro'), ('Matteo Cassoni'),
  ('Matteo Prestijacopo'), ('Greta Onali'), ('Fulvio Pellini'), ('Jacopo Pender'), ('Matteo Pagnotta'),
  ('Pietro Pennacchi'), ('Federico Romeo'), ('Riccardo Mariotti'), ('Angelica Schifano'), ('Sergio Costantini'),
  ('Siria Filomia'), ('Mario Valensise'), ('Rosalba Vitetta'), ('Valerio Giura Longo'), ('Valerio Persio'),
  ('Stella Tortora');

-- Account già registrati: un nome uguale a meno di maiuscole e spazi viene allineato all'elenco;
-- un nome assente dall'elenco viene svuotato e l'interessato lo sceglie al prossimo accesso
-- ("Completa il profilo"), mantenendo reparto, ruolo e presenze già registrate.
update public.members m set full_name = n.full_name, display_name = n.full_name
from public.team_names n
where m.full_name <> '' and m.full_name <> n.full_name
  and lower(btrim(regexp_replace(m.full_name, '\s+', ' ', 'g'))) = lower(n.full_name);
update public.members m set full_name = ''
where m.full_name <> '' and not exists (select 1 from public.team_names n where n.full_name = m.full_name);
-- Se due account usavano lo stesso nome, lo tiene il più vecchio; l'altro lo sceglie di nuovo.
update public.members m set full_name = ''
where m.full_name <> '' and exists (
  select 1 from public.members o where o.full_name = m.full_name and (o.created_at, o.id) < (m.created_at, m.id));

-- Il formato del nome non serve più: vale l'appartenenza all'elenco, controllata dalle funzioni
-- (nessun utente può scrivere members.full_name direttamente).
alter table public.members drop constraint if exists members_full_name_check;
create unique index members_full_name_unique on public.members(full_name) where full_name <> '';

-- Nome dell'elenco non ancora usato da un altro account.
create function public.name_available(p_name text, p_self uuid) returns boolean language sql stable security definer
set search_path = '' as $$
  select exists (select 1 from public.team_names where full_name = p_name)
    and not exists (select 1 from public.members where full_name = p_name and id is distinct from p_self);
$$;
revoke all on function public.name_available(text, uuid) from public, anon, authenticated;

-- Nomi liberi, per il menù della registrazione: solo con un codice di registrazione valido
-- (rilasciato dalla password del team) oppure per un membro attivo che completa il profilo.
-- Senza uno dei due l'elenco non è leggibile.
create function public.available_names(p_token text default null) returns setof text language sql stable security definer
set search_path = '' as $$
  select n.full_name from public.team_names n
  where (public.is_member() or exists (
      select 1 from public.registration_tokens t
      where t.token_hash = encode(sha256(convert_to(coalesce(p_token, ''), 'UTF8')), 'hex') and t.expires_at > now()))
    and not exists (select 1 from public.members m where m.full_name = n.full_name and m.id is distinct from auth.uid())
  order by n.full_name;
$$;
revoke all on function public.available_names(text) from public;
grant execute on function public.available_names(text) to anon, authenticated;

-- Tutti i nomi dell'elenco, per le righe della pagina Presenze.
create function public.team_name_list() returns setof text language sql stable security definer
set search_path = '' as $$
  select full_name from public.team_names where public.is_member() order by full_name;
$$;
revoke all on function public.team_name_list() from public, anon;
grant execute on function public.team_name_list() to authenticated;

-- Registrazione: il nome deve essere uno di quelli liberi dell'elenco, altrimenti resta vuoto e
-- si sceglie al primo accesso.
create or replace function public.handle_new_user() returns trigger language plpgsql security definer
set search_path = '' as $$
declare
  name text := btrim(regexp_replace(coalesce(new.raw_user_meta_data->>'full_name', ''), '\s+', ' ', 'g'));
  v_team text; v_role text;
begin
  if not public.name_available(name, new.id) then name := ''; end if;
  begin
    select a.team_id, a.role into v_team, v_role
    from public.member_assignment(new.raw_user_meta_data->>'team_id', new.raw_user_meta_data->>'role') a;
  exception when others then
    -- Dati non validi: profilo da completare al primo accesso.
    v_team := null; v_role := 'membro';
  end;
  insert into public.members(id, display_name, email, full_name, team_id, role, active, is_admin)
  values (new.id, coalesce(nullif(name, ''), coalesce(new.email, '')), coalesce(new.email, ''), name, v_team, v_role, new.email_confirmed_at is not null, false)
  on conflict (id) do nothing;
  return new;
end; $$;

-- Completamento del profilo: si sceglie il nome dall'elenco. Reparto e ruolo si indicano solo se
-- mancano; se l'account li ha già (es. nome svuotato da questa migrazione) restano invariati.
create or replace function public.complete_profile(p_full_name text, p_team_id text, p_role text default 'membro') returns void language plpgsql security definer
set search_path = '' as $$
declare v_team text; v_role text; v_has_team boolean;
begin
  if not public.is_member() then raise exception 'Solo i membri attivi possono completare il profilo'; end if;
  select team_id is not null or role = 'team_captain' into v_has_team from public.members
  where id = auth.uid() and (full_name = '' or (team_id is null and role <> 'team_captain'));
  if v_has_team is null then raise exception 'Il profilo è già completo: per modificarlo contatta il Team Captain'; end if;
  if not public.name_available(p_full_name, auth.uid()) then
    raise exception 'Scegli il tuo nome dall''elenco del team: se manca o risulta già usato, contatta il Team Captain';
  end if;
  if v_has_team then
    update public.members set full_name = p_full_name, display_name = p_full_name where id = auth.uid();
  else
    select a.team_id, a.role into v_team, v_role from public.member_assignment(p_team_id, p_role) a;
    update public.members set full_name = p_full_name, display_name = p_full_name, team_id = v_team, role = v_role where id = auth.uid();
  end if;
end; $$;
commit;
