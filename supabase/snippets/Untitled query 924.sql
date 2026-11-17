-- Storico presenze dal foglio Google (riunioni del 14/10, 21/10, 28/10 e 04/11/2026).
-- NON è una migrazione: da eseguire UNA volta nell'SQL Editor del progetto Supabase online,
-- dopo tutte le migrazioni. Si può rieseguire senza creare doppioni.
-- Conversione: Presente (>2h) e Parziale (<2h) = Presente; Assente = Assente. "Giustificato" è ignorato (nessuna presenza importata).
-- Sono elencati solo i presenti: chi non compare in una data risulta assente.
-- Chi ha già un account attivo riceve le presenze sul proprio account, gli altri sul nome
-- (passano all'account quando si registrano con quel nome).
begin;
create temporary table storico(full_name text not null, meeting_date date not null) on commit drop;
insert into storico values
  ('Alberto Carvelli', '2026-10-14'),
  ('Alberto Carvelli', '2026-10-21'),
  ('Alberto Carvelli', '2026-10-28'),
  ('Alberto Carvelli', '2026-11-04'),
  ('Andrea Giuliotti', '2026-10-14'),
  ('Andrea Giuliotti', '2026-10-21'),
  ('Andrea Giuliotti', '2026-11-04'),
  ('Angelica Schifano', '2026-10-14'),
  ('Angelica Schifano', '2026-11-04'),
  ('Arturo Buzzetti', '2026-10-14'),
  ('Arturo Buzzetti', '2026-11-04'),
  ('Edi Catalano', '2026-10-14'),
  ('Edi Catalano', '2026-10-21'),
  ('Edi Catalano', '2026-10-28'),
  ('Emanuele Rinnaudo', '2026-11-04'),
  ('Erman Battistoni', '2026-10-14'),
  ('Erman Battistoni', '2026-10-21'),
  ('Erman Battistoni', '2026-10-28'),
  ('Erman Battistoni', '2026-11-04'),
  ('Federico Romeo', '2026-10-14'),
  ('Federico Vitelli', '2026-10-14'),
  ('Federico Vitelli', '2026-10-21'),
  ('Federico Vitelli', '2026-10-28'),
  ('Federico Vitelli', '2026-11-04'),
  ('Flaminia Di Giacomo', '2026-10-14'),
  ('Flaminia Di Giacomo', '2026-10-21'),
  ('Flaminia Di Giacomo', '2026-10-28'),
  ('Flaminia Di Giacomo', '2026-11-04'),
  ('Flavia Ciravegna', '2026-10-14'),
  ('Flavia Ciravegna', '2026-10-21'),
  ('Flavia Ciravegna', '2026-10-28'),
  ('Flavia Ciravegna', '2026-11-04'),
  ('Flavia Gentile', '2026-10-14'),
  ('Flavia Gentile', '2026-10-21'),
  ('Flavia Gentile', '2026-10-28'),
  ('Flavia Gentile', '2026-11-04'),
  ('Francesco Grossi', '2026-10-14'),
  ('Francesco Grossi', '2026-10-21'),
  ('Francesco Grossi', '2026-10-28'),
  ('Francesco Grossi', '2026-11-04'),
  ('Fulvio Pellini', '2026-10-14'),
  ('Fulvio Pellini', '2026-10-21'),
  ('Fulvio Pellini', '2026-10-28'),
  ('Fulvio Pellini', '2026-11-04'),
  ('Gabriele Maimone', '2026-10-21'),
  ('Gabriele Maimone', '2026-10-28'),
  ('Gabriele Maimone', '2026-11-04'),
  ('Gaia Gattia', '2026-10-14'),
  ('Gaia Gattia', '2026-10-28'),
  ('Gaia Gattia', '2026-11-04'),
  ('Giacomo Romeo', '2026-10-21'),
  ('Giacomo Romeo', '2026-10-28'),
  ('Giacomo Romeo', '2026-11-04'),
  ('Gianluca Ianniccari', '2026-10-14'),
  ('Gianluca Ianniccari', '2026-10-21'),
  ('Gianluca Ianniccari', '2026-10-28'),
  ('Gianluca Ianniccari', '2026-11-04'),
  ('Giorgia Frasca', '2026-11-04'),
  ('Giovanni Battista Pernazza', '2026-10-14'),
  ('Giovanni Battista Pernazza', '2026-10-21'),
  ('Giovanni Battista Pernazza', '2026-10-28'),
  ('Giovanni Battista Pernazza', '2026-11-04'),
  ('Giulio Mastronardi', '2026-10-28'),
  ('Greta Onali', '2026-10-14'),
  ('Greta Onali', '2026-10-21'),
  ('Greta Onali', '2026-10-28'),
  ('Jacopo Pender', '2026-10-14'),
  ('Jacopo Pender', '2026-10-28'),
  ('Leonardo Di Vona', '2026-10-14'),
  ('Leonardo Di Vona', '2026-10-21'),
  ('Leonardo Di Vona', '2026-10-28'),
  ('Leonardo Di Vona', '2026-11-04'),
  ('Leonardo Giuliani', '2026-10-14'),
  ('Leonardo Giuliani', '2026-10-21'),
  ('Leonardo Giuliani', '2026-10-28'),
  ('Leonardo Giuliani', '2026-11-04'),
  ('Mario Valensise', '2026-10-14'),
  ('Mario Valensise', '2026-10-21'),
  ('Mario Valensise', '2026-10-28'),
  ('Mario Valensise', '2026-11-04'),
  ('Matteo Cassoni', '2026-10-14'),
  ('Matteo Cassoni', '2026-10-21'),
  ('Matteo Cassoni', '2026-10-28'),
  ('Matteo Cassoni', '2026-11-04'),
  ('Matteo Pagnotta', '2026-10-14'),
  ('Matteo Pagnotta', '2026-10-21'),
  ('Matteo Pagnotta', '2026-10-28'),
  ('Matteo Pagnotta', '2026-11-04'),
  ('Matteo Prestijacopo', '2026-10-14'),
  ('Matteo Prestijacopo', '2026-10-21'),
  ('Matteo Prestijacopo', '2026-10-28'),
  ('Matteo Prestijacopo', '2026-11-04'),
  ('Matteo Valabrega', '2026-10-14'),
  ('Matteo Valabrega', '2026-10-21'),
  ('Matteo Valabrega', '2026-10-28'),
  ('Matteo Valabrega', '2026-11-04'),
  ('Michele Arrigo Semeraro', '2026-10-14'),
  ('Michele Arrigo Semeraro', '2026-10-21'),
  ('Michele Arrigo Semeraro', '2026-10-28'),
  ('Michele Arrigo Semeraro', '2026-11-04'),
  ('Pietro Pennacchi', '2026-10-14'),
  ('Pietro Pennacchi', '2026-10-21'),
  ('Pietro Pennacchi', '2026-10-28'),
  ('Pietro Pennacchi', '2026-11-04'),
  ('Riccardo Mariotti', '2026-10-14'),
  ('Riccardo Mariotti', '2026-11-04'),
  ('Rosalba Vitetta', '2026-10-14'),
  ('Rosalba Vitetta', '2026-10-21'),
  ('Rosalba Vitetta', '2026-10-28'),
  ('Rosalba Vitetta', '2026-11-04'),
  ('Sergio Costantini', '2026-10-14'),
  ('Sergio Costantini', '2026-10-21'),
  ('Sergio Costantini', '2026-10-28'),
  ('Sergio Costantini', '2026-11-04'),
  ('Simone Verticchio', '2026-10-14'),
  ('Simone Verticchio', '2026-10-21'),
  ('Simone Verticchio', '2026-10-28'),
  ('Simone Verticchio', '2026-11-04'),
  ('Siria Filomia', '2026-10-14'),
  ('Siria Filomia', '2026-10-21'),
  ('Siria Filomia', '2026-10-28'),
  ('Siria Filomia', '2026-11-04'),
  ('Stella Tortora', '2026-10-14'),
  ('Stella Tortora', '2026-10-21'),
  ('Stella Tortora', '2026-11-04'),
  ('Valerio Giura Longo', '2026-10-14'),
  ('Valerio Giura Longo', '2026-10-21'),
  ('Valerio Giura Longo', '2026-10-28'),
  ('Valerio Giura Longo', '2026-11-04'),
  ('Valerio Persio', '2026-11-04');

-- Ogni nome deve essere nell'elenco del team: altrimenti si ferma e non salva nulla.
do $$ declare bad text; begin
  select string_agg(distinct s.full_name, ', ') into bad from storico s
  where not exists (select 1 from public.team_names n where n.full_name = s.full_name);
  if bad is not null then raise exception 'Nomi non presenti nell''elenco: %', bad; end if;
end $$;

insert into public.attendance(member_id, meeting_date, team_id)
select m.id, s.meeting_date, m.team_id from storico s join public.members m on m.full_name = s.full_name and m.active
on conflict do nothing;

insert into public.name_attendance(full_name, meeting_date)
select s.full_name, s.meeting_date from storico s
where not exists (select 1 from public.members m where m.full_name = s.full_name and m.active)
on conflict do nothing;
commit;

-- Controllo: presenti per data (atteso: 2026-10-14 → 34, 2026-10-21 → 30, 2026-10-28 → 31, 2026-11-04 → 35).
select meeting_date, count(*) as presenti from (
  select meeting_date from public.attendance where meeting_date in ('2026-10-14', '2026-10-21', '2026-10-28', '2026-11-04')
  union all
  select meeting_date from public.name_attendance where meeting_date in ('2026-10-14', '2026-10-21', '2026-10-28', '2026-11-04')
) t group by 1 order by 1;
