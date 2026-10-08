begin;

-- Match the first preference in the response rather than the first team in the menu.
create function public.recruiting_first_team(answer text) returns text language sql immutable set search_path='' as $$
 select coalesce((select id from (values
 ('scafo','scafo'),('management','management'),('materiali','materiali'),
 ('manufacturing','manufacturing'),('manufacturing','cantiere'),('foil','foil'),
 ('elettronica','elettronica'),('shore','shore')
 ) as teams(id,alias) where strpos(lower(answer),alias)>0
 order by strpos(lower(answer),alias) limit 1),'');
$$;
revoke all on function public.recruiting_first_team(text) from public,anon,authenticated;
grant execute on function public.recruiting_first_team(text) to service_role;

-- Preserve old workflow decisions in the private history before consolidating states.
insert into public.recruiting_activities(candidate_id,actor,text)
select id,'Sistema','Stato precedente: '||stage||' · workflow semplificato'
from public.recruiting_candidates where stage not in ('In valutazione','Colloquio fissato');
alter table public.recruiting_candidates drop constraint recruiting_candidates_stage_check;
update public.recruiting_candidates set
 stage=case stage when 'Accettata' then 'Accettato' when 'Non selezionata' then 'Rifiutato'
 when 'Ritirata' then 'Rifiutato' when 'Colloquio fissato' then 'Colloquio fissato' else 'In valutazione' end,
 assigned_team=case when assigned_team='' then public.recruiting_first_team(requested_team) else assigned_team end,
 version=version+1,updated_at=now();
alter table public.recruiting_candidates alter column stage set default 'In valutazione';
alter table public.recruiting_candidates add constraint recruiting_candidates_stage_check
 check(stage in ('In valutazione','Colloquio fissato','Accettato','Rifiutato'));

-- Sync updates imported answers, while an existing department assignment stays intact.
create function public.assign_recruiting_team() returns trigger language plpgsql set search_path='' as $$
begin
 if new.assigned_team='' then new.assigned_team:=public.recruiting_first_team(new.requested_team); end if;
 return new;
end; $$;
revoke all on function public.assign_recruiting_team() from public,anon,authenticated;
create trigger recruiting_auto_team before insert or update of requested_team on public.recruiting_candidates
 for each row execute function public.assign_recruiting_team();


create or replace function public.save_recruiting_interview(candidate uuid, interview uuid, expected integer, event_expected integer, fields jsonb, actor text) returns void language plpgsql set search_path='' as $$
declare c public.recruiting_candidates; existing public.recruiting_interviews; event uuid; n integer;
begin
 select * into c from public.recruiting_candidates where id=candidate for update;
 if not found or c.archived then raise exception 'Candidatura non disponibile'; end if;
 select * into existing from public.recruiting_interviews where id=interview for update;
 if found then
  if existing.candidate_id<>candidate or existing.version<>expected then raise exception 'Colloquio aggiornato. Ricarica prima di salvare.'; end if;
  event:=existing.event_id;
  update public.events set title=fields->>'title',date=fields->>'date',start_time=fields->>'start_time',end_time=fields->>'end_time',
  team_id=fields->>'team_id',location=fields->>'location',description=fields->>'description',status=fields->>'status',archived=(fields->>'status'='Annullato')
  where id=event and version=event_expected;
  get diagnostics n=row_count;
  if n<>1 then raise exception 'Orario modificato in agenda. Ricarica prima di salvare.'; end if;
  update public.recruiting_interviews set notes=fields->>'notes',outcome=fields->>'outcome',version=version+1 where id=interview;
 else
  if expected is not null then raise exception 'Colloquio mancante'; end if;
  insert into public.events(season_id,title,type,status,date,start_time,end_time,team_id,location,description,archived)
  values(c.season_id,fields->>'title','Colloquio recruiting',fields->>'status',fields->>'date',fields->>'start_time',fields->>'end_time',fields->>'team_id',fields->>'location',fields->>'description',fields->>'status'='Annullato') returning id into event;
  insert into public.recruiting_interviews(id,candidate_id,event_id,notes,outcome) values(interview,candidate,event,fields->>'notes',fields->>'outcome');
 end if;
 if c.stage='In valutazione' and fields->>'status'='Confermato' then
  update public.recruiting_candidates set stage='Colloquio fissato',version=version+1,updated_at=now() where id=candidate;
 end if;
 if c.stage='Colloquio fissato' and fields->>'status'='Annullato' and not exists (
  select 1 from public.recruiting_interviews i join public.events e on e.id=i.event_id
  where i.candidate_id=candidate and not e.archived and e.status='Confermato'
 ) then
  update public.recruiting_candidates set stage='In valutazione',version=version+1,updated_at=now() where id=candidate;
 end if;
 insert into public.recruiting_activities(candidate_id,actor,text) values(candidate,actor,'Colloquio: '||(fields->>'status')||' · '||(fields->>'date')||' '||(fields->>'start_time'));
end; $$;

commit;
