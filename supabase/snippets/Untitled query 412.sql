select
  exists(select 1 from information_schema.columns where table_schema='public' and table_name='members' and column_name='team_id') as presenze,
  exists(select 1 from information_schema.tables where table_schema='public' and table_name='registration_tokens') as password_team,
  exists(select 1 from information_schema.columns where table_schema='public' and table_name='members' and column_name='role') as ruoli,
  exists(select 1 from pg_proc where proname='set_member_active') as abilitazione;
