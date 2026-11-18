-- Social Studio e ruoli insieme: 202611130001_roles limita l'update diretto di members a
-- display_name, active e is_admin, ma il pannello "Accessi a Social Studio" scrive social_enabled.
-- Restituisce l'update di quella sola colonna; la policy admin_update lo lascia ai soli amministratori.
-- Eseguibile prima o dopo 202611130001_social_studio.sql (che usa anch'essa "if not exists").
begin;
alter table public.members add column if not exists social_enabled boolean not null default false;
grant update (social_enabled) on public.members to authenticated;
commit;
