-- Impostazioni → Account del team: tutti i membri attivi vedono l'elenco degli account
-- (nome, email, reparto, ruolo, stato), come il Team Captain. Solo lettura: abilitazione,
-- reparto e ruolo restano modificabili solo tramite le funzioni già esistenti.
begin;
create policy team_read on public.members for select to authenticated using (public.is_member());
commit;