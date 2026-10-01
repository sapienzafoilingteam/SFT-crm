-- Icone personalizzate dei link. I link esistenti usano la scelta automatica.
begin;
alter table public.links add column if not exists icon text;
notify pgrst, 'reload schema';
commit;
