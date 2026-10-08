import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PGlite } from '@electric-sql/pglite';
import { createClient } from '@supabase/supabase-js';
import { demoRecruiting, parseCandidate, recruitingCsv, RECRUITING_SHEET, interviewTitle, type Candidate } from '../lib/recruiting';
import { hashPassword, issueUnlock, verifyPassword, verifyUnlock } from '../lib/recruiting-security';
import { candidateFields, interviewFields } from '../lib/recruiting-validation';
import { syncRecruiting } from '../lib/recruiting-server';
import { GET as getRecruiting } from '../app/api/recruiting/route';
import { POST as unlock } from '../app/api/recruiting/unlock/route';
import { POST as interviews } from '../app/api/recruiting/interviews/route';
import { GET as attachment } from '../app/api/recruiting/attachment/route';
import { GET as cron } from '../app/api/recruiting/cron/route';
import { googleBody, pullFields, romeDateTime } from '../lib/calendar';
import { recruitingDriveAccess, touchesProtectedFile } from '../lib/recruiting-drive-policy';

test('password hashing, forged cookies, user/session binding, expiry and password rotation', () => {
  const hash = hashPassword('correct-password');
  assert.equal(verifyPassword('correct-password',hash),true);
  assert.equal(verifyPassword('wrong-password',hash),false);
  assert.equal(verifyPassword('correct-password','broken'),false);
  const secret = 'session-secret', cookie = issueUnlock('user-a','token-a',hash,secret,100000);
  assert.equal(verifyUnlock(cookie,'user-a','token-a',hash,secret,101000),true);
  for (const [user,token,password,key,now] of [['user-b','token-a',hash,secret,101000],['user-a','token-b',hash,secret,101000],['user-a','token-a',hashPassword('new-password'),secret,101000],['user-a','token-a',hash,'wrong',101000],['user-a','token-a',hash,secret,15000000]] as const)
    assert.equal(verifyUnlock(cookie,user,token,password,key,now),false);
  assert.equal(verifyUnlock(cookie+'x','user-a','token-a',hash,secret,101000),false);
});
test('all answers retain separate column identity, imported fields cannot be overwritten and CSV is safe', () => {
  const headers = Array.from({length:34},(_,i) => i === 32 ? 'CRM_ID' : 'Domanda '+i);
  headers[12] = headers[13] = 'Quale aspetto ti interessa?';
  const row = Array.from({length:34},(_,i) => String(i));
  row[9] = 'https://drive.google.com/open?id=private_letter_123';
  row[10] = 'https://drive.google.com/file/d/private_cv_123/view';
  const parsed = parseCandidate(headers,row,'source','season');
  assert.equal(parsed.answers.length,33);
  assert.equal(parsed.answers.filter(a => a.question === headers[12]).length,2);
  assert.deepEqual(parsed.attachments.map(a => a.id),['private_letter_123','private_cv_123']);
  assert.throws(() => candidateFields({ email: 'changed' }));
  assert.throws(() => candidateFields({ due_date: '2026-02-31' }));
  assert.throws(() => candidateFields({ stage: 'Inventato' }));
  assert.deepEqual(candidateFields({ notes: 'private', stage: 'In valutazione' }),{ notes:'private',stage:'In valutazione' });
  const c = {...demoRecruiting().candidates[0],first_name:'=HYPERLINK("bad")'};
  assert.match(recruitingCsv([c]), /"'=HYPERLINK/);
});
test('recruiting API endpoints reject anonymous users and background requires a separate exact secret', async () => {
  for (const endpoint of [getRecruiting,unlock,interviews,attachment]) {
    const response = await endpoint(new Request('https://crm.test/api/recruiting'));
    assert.equal(response.status,401); assert.equal(response.headers.get('Cache-Control'),'no-store');
  }
  assert.equal((await cron(new Request('https://crm.test/api/recruiting/cron'))).status,401);
});
test('Drive protection covers direct content, exports, folder queries and writes into private folders', () => {
  const ids = new Set([RECRUITING_SHEET,'private-letter','private-folder']);
  assert.equal(touchesProtectedFile(new URL(`https://www.googleapis.com/drive/v3/files/${RECRUITING_SHEET}/export`),undefined,ids),true);
  assert.equal(touchesProtectedFile(new URL('https://www.googleapis.com/drive/v3/files/private-letter?alt=media'),undefined,ids),true);
  assert.equal(touchesProtectedFile(new URL('https://www.googleapis.com/drive/v3/files?q='+encodeURIComponent("'private-folder' in parents")),undefined,ids),true);
  assert.equal(touchesProtectedFile(new URL('https://www.googleapis.com/drive/v3/files'),JSON.stringify({parents:['private-folder']}),ids),true);
  assert.equal(touchesProtectedFile(new URL('https://www.googleapis.com/drive/v3/files/public'),undefined,ids),false);
});
test('imported files stay locked while the server key is configured before the page password', async () => {
  const names=['SUPABASE_SERVICE_ROLE_KEY','NEXT_PUBLIC_SUPABASE_URL','RECRUITING_PASSWORD_HASH'];
  const before=names.map(n=>process.env[n]); const fetchBefore=globalThis.fetch;
  process.env.SUPABASE_SERVICE_ROLE_KEY='test-server-key'; process.env.NEXT_PUBLIC_SUPABASE_URL='https://crm-db.test'; delete process.env.RECRUITING_PASSWORD_HASH;
  globalThis.fetch=async input=>{
    assert.equal(new URL(String(input)).pathname,'/rest/v1/recruiting_drive_files');
    return Response.json([{file_id:'imported-private-cv'}]);
  };
  try {
    const access=await recruitingDriveAccess(new Request('https://crm.test/api/drive'));
    assert.equal(access.unlocked,false); assert.equal(access.ids.has('imported-private-cv'),true);
  } finally {
    globalThis.fetch=fetchBefore;
    names.forEach((name,i)=>{if(before[i]===undefined) delete process.env[name]; else process.env[name]=before[i];});
  }
});
test('timed interviews preserve duration in Calendar, DST and agenda changes', () => {
  const input = { team_id:'elettronica',date:'2026-10-24',start_time:'10:00',end_time:'10:45',location:'Room',interviewers:'Selezionatore',status:'Confermato',notes:'Private assessment',outcome:'Private outcome' };
  const fields = interviewFields(input);
  assert.equal(fields.title,'Colloquio recruiting · Elettronica');
  assert.throws(() => interviewFields({...input,end_time:'09:00'}));
  const event = { ...demoEvent(), ...fields };
  const body = googleBody('events',event);
  assert.equal(body.start?.dateTime,'2026-10-24T08:00:00.000Z');
  assert.equal(body.end?.dateTime,'2026-10-24T08:45:00.000Z');
  assert.doesNotMatch(JSON.stringify(body),/Private assessment|Private outcome/);
  const moved = googleBody('events',{...event,date:'2026-10-25'}, {id:'google',...body});
  assert.equal(moved.start?.dateTime,'2026-10-25T09:00:00.000Z');
  const pulled = pullFields('events',{id:'google',...moved});
  assert.ok('start_time' in pulled && 'end_time' in pulled);
  assert.equal(pulled.start_time,'10:00'); assert.equal(pulled.end_time,'10:45');
  assert.throws(() => romeDateTime('2026-03-29','02:30'));
});
function demoEvent() { return { id:crypto.randomUUID(),season_id:demoRecruiting().candidates[0].season_id,title:'',type:'Colloquio recruiting',status:'Confermato',date:'2026-10-08',location:'',description:'',checklist:[],sponsor_id:'',document_url:'',recap:'',archived:false,version:1,updated_at:new Date().toISOString() }; }

test('sync assigns durable sheet IDs, preserves duplicate submissions, is repeatable and stops malformed snapshots', async () => {
  const original = globalThis.fetch;
  const names = ['GOOGLE_DRIVE_CLIENT_ID','GOOGLE_DRIVE_CLIENT_SECRET','GOOGLE_DRIVE_REFRESH_TOKEN'];
  const before = names.map(n => process.env[n]); names.forEach(n => process.env[n]='secret-test');
  const headers = Array.from({length:32},()=> 'Domanda');
  Object.assign(headers,{ 1:'Nome',2:'Cognome',3:'Mail',11:'Reparto' });
  const row = Array.from({length:32},()=> '');
  Object.assign(row,{0:'08/10/2026',1:'Alex',2:'Example',3:'alex@example.invalid',11:'Elettronica'});
  const rows = [headers,row,[...row]], snapshots: object[][] = [];
  let writeCount = 0;
  globalThis.fetch = async (input,init) => {
    const url = new URL(String(input)), path = url.pathname.split('/').at(-1);
    if (url.hostname === 'oauth2.googleapis.com') return Response.json({access_token:'private-access'});
    if (url.hostname === 'sheets.googleapis.com') {
      if (url.pathname.endsWith('/values:batchUpdate')) {
        writeCount++;
        const body = JSON.parse(String(init?.body));
        for (const change of body.data) { const index = Number(change.range.match(/(\d+)$/)[1])-1; rows[index][32]=change.values[0][0]; }
        return Response.json({});
      }
      if (url.pathname.includes('/values/')) return Response.json({values:rows});
      return Response.json({sheets:[{properties:{sheetId:1212892271,title:'Risposte',gridProperties:{columnCount:40}}}]});
    }
    if (path === 'acquire_recruiting_sync') return Response.json(true);
    if (path === 'release_recruiting_sync') return Response.json(null);
    if (path === 'import_recruiting') { snapshots.push(JSON.parse(String(init?.body)).records); return Response.json(null); }
    if (path === 'recruiting_drive_files') return Response.json((init?.method || 'GET') === 'GET' ? [] : null);
    if (path === 'recruiting_sync') return Response.json((init?.method || 'GET') === 'GET' ? {last_sync:null} : null);
    throw new Error('Unexpected request');
  };
  try {
    const client = createClient('https://crm.test','test',{auth:{persistSession:false}});
    const first = await syncRecruiting(client,true);
    assert.equal(first.count,2); assert.notEqual(rows[1][32],rows[2][32]);
    await syncRecruiting(client,true);
    assert.equal(writeCount,1); assert.deepEqual(snapshots[0],snapshots[1]);
    rows[2][32]=rows[1][32];
    await assert.rejects(syncRecruiting(client,true),/duplicati/); assert.equal(snapshots.length,2);
    rows[0][1]='Wrong column';
    await assert.rejects(syncRecruiting(client,true),/struttura/); assert.equal(snapshots.length,2);
  } finally { globalThis.fetch=original; names.forEach((n,i) => before[i] === undefined ? delete process.env[n] : process.env[n]=before[i]); }
});

test('private database permissions, retry limits, atomic imports, conflict protection and public interview privacy', async () => {
  const db = new PGlite(), user = crypto.randomUUID();
  try {
    await db.exec(`create role anon; create role authenticated; create role service_role bypassrls; create schema auth; create table auth.users(id uuid primary key); create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$; grant usage on schema auth to authenticated,anon,service_role; grant execute on function auth.uid() to authenticated,anon,service_role; create schema storage; create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]); create table storage.objects(id uuid primary key default gen_random_uuid(),bucket_id text,name text); alter table storage.objects enable row level security; grant usage on schema storage to authenticated,anon; grant select,insert on storage.objects to authenticated; insert into auth.users values('${user}');`);
    await db.exec(await readFile('supabase/migrations/202610010001_workspace.sql','utf8'));
    await db.exec(await readFile('supabase/migrations/202610080001_recruiting.sql','utf8'));
    await db.exec(`insert into members(id,active) values('${user}',true); set role authenticated; set "request.jwt.claim.sub"='${user}';`);
    for (const table of ['recruiting_candidates','recruiting_activities','recruiting_interviews','recruiting_sync','recruiting_unlock_attempts','recruiting_drive_files']) await assert.rejects(db.query('select * from '+table));
    await assert.rejects(db.query('select import_recruiting($1,$2)', ['[]',demoRecruiting().candidates[0].season_id]));
    await db.exec('reset role; set role service_role;');
    for (let i=0;i<6;i++) assert.equal((await db.query<{ok:boolean}>('select recruiting_attempt($1) as ok',[user])).rows[0].ok,i<5);
    const source = {...demoRecruiting().candidates[0],source_id:crypto.randomUUID(),source_hash:'one'};
    const importRows = (records: object[]) => db.query('select import_recruiting($1,$2)',[JSON.stringify(records),source.season_id]);
    await importRows([source]);
    let candidate = (await db.query<Candidate>('select * from recruiting_candidates')).rows[0];
    await db.query('select update_recruiting($1,$2,$3,$4)',[candidate.id,candidate.version,JSON.stringify({notes:'Private notes',stage:'In valutazione'}),'Selector']);
    await assert.rejects(db.query('select update_recruiting($1,$2,$3,$4)',[candidate.id,1,JSON.stringify({notes:'Stale overwrite'}),'Selector']));
    await importRows([{...source,source_hash:'two',first_name:'Updated'}]);
    candidate = (await db.query<Candidate>('select * from recruiting_candidates')).rows[0];
    assert.equal(candidate.first_name,'Updated'); assert.equal(candidate.notes,'Private notes'); assert.equal(candidate.stage,'In valutazione');
    await importRows([{...source,source_hash:'two',first_name:'Updated'}]);
    assert.equal((await db.query<Candidate>('select * from recruiting_candidates')).rows[0].version,candidate.version);
    await assert.rejects(importRows([{...source,source_hash:'three'}, {...source,source_id:'invalid',answers:{not:'array'}}]));
    assert.equal((await db.query<Candidate>('select * from recruiting_candidates')).rows[0].source_hash,'two');
    const id=crypto.randomUUID(), fields=interviewFields({team_id:'elettronica',date:'2026-10-08',start_time:'10:00',end_time:'11:00',interviewers:'Selector',location:'Room',status:'Confermato',notes:'Private interview',outcome:'Private evaluation'});
    await db.query('select save_recruiting_interview($1,$2,$3,$4,$5,$6)',[candidate.id,id,null,null,JSON.stringify(fields),'Selector']);
    await assert.rejects(db.query('select save_recruiting_interview($1,$2,$3,$4,$5,$6)',[candidate.id,id,1,99,JSON.stringify({...fields,notes:'Lost note',start_time:'11:00',end_time:'12:00'}),'Selector']));
    assert.equal((await db.query<{notes:string}>('select notes from recruiting_interviews')).rows[0].notes,'Private interview');
    await db.exec('reset role; set role authenticated;');
    const events = await db.query<{title:string}>('select * from events'); assert.equal(events.rows.length,1);
    assert.equal(events.rows[0].title,interviewTitle('elettronica'));
    const legacy = { ...events.rows[0], title:'Candidate name must stay private',type:'Evento team',recap:'Private evaluation' } as Record<string,unknown>;
    delete legacy.start_time; delete legacy.end_time; delete legacy.team_id;
    await db.query('select apply_changes($1)',[JSON.stringify([{table:'events',record:legacy,expected_version:1}])]);
    const agenda = (await db.query<{title:string;start_time:string;end_time:string;recap:string}>('select * from events')).rows[0];
    assert.equal(agenda.title,interviewTitle('elettronica')); assert.equal(agenda.start_time,'10:00'); assert.equal(agenda.end_time,'11:00'); assert.equal(agenda.recap,'');
    assert.doesNotMatch(JSON.stringify(events.rows),/Updated|alex@example|Private notes|Private interview|Private evaluation/);
    assert.doesNotMatch(JSON.stringify((await db.query('select * from audit_log')).rows),/Candidate name must stay private|Private notes|Private interview|Private evaluation/);
    await db.exec('reset role; set role service_role;');
    await importRows([]);
    candidate=(await db.query<Candidate>('select * from recruiting_candidates')).rows[0];
    assert.equal(candidate.source_missing,true); assert.equal(candidate.notes,'Private notes');
    const lock=crypto.randomUUID();
    assert.equal((await db.query<{ok:boolean}>('select acquire_recruiting_sync($1) as ok',[lock])).rows[0].ok,true);
    await db.query('select release_recruiting_sync($1)',[crypto.randomUUID()]);
    assert.equal((await db.query<{ok:boolean}>('select acquire_recruiting_sync($1) as ok',[crypto.randomUUID()])).rows[0].ok,false);
  } finally { await db.close(); }
});
