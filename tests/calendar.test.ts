import test from 'node:test';
import assert from 'node:assert/strict';
import { createMock } from '../lib/mock';
import { direction, googleBody, googleDate, googleHash, googleId, importId, localHash, pullFields } from '../lib/calendar';
import { GET as cron } from '../app/api/calendar/cron/route';
import { GET, POST } from '../app/api/calendar/route';
import { syncCalendar, CALENDAR_ACCOUNT } from '../lib/calendar-server';
import { readFile } from 'node:fs/promises';
import { PGlite } from '@electric-sql/pglite';
import { createClient } from '@supabase/supabase-js';
const row = { ...createMock().events[0], date: '2026-10-05' };
const event = { id: googleId('events', row.id), ...googleBody('events', row), etag: 'v1' };
const link = { calendar_id: CALENDAR_ACCOUNT, google_id: event.id, collection: 'events' as const,
  record_id: row.id, local_hash: localHash('events', row), google_hash: googleHash(event) };
test('directions, archives and conflicts use shared fields rather than unrelated CRM status', () => {
  assert.equal(direction(link, 'events', row, event), 'none');
  assert.equal(direction(link, 'events', { ...row, status: 'Concluso' }, event), 'none');
  assert.equal(direction(link, 'events', { ...row, title: 'CRM' }, event), 'push');
  assert.equal(direction(link, 'events', row, { ...event, summary: 'Google' }), 'pull');
  assert.equal(direction(link, 'events', { ...row, title: 'CRM' }, { ...event, summary: 'Google' }), 'conflict');
  assert.equal(direction(link, 'events', { ...row, archived: true }, event), 'push');
  assert.deepEqual(pullFields('events', { id: event.id, status: 'cancelled' }), { archived: true });
  assert.equal(googleHash({ ...event, status: 'cancelled' }), googleHash({ id: event.id, status: 'cancelled' }));
});
test('all-day exclusive end, stable IDs, time zones and daylight saving preserve Google duration', () => {
  assert.deepEqual(event.end, { date: '2026-10-06' });
  assert.match(event.id, /^[0-9a-v]{5,1024}$/);
  assert.equal(importId('a', 'event'), importId('a', 'event'));
  assert.notEqual(importId('a', 'event'), importId('b', 'event'));
  const timed = { id: 'timed', start: { dateTime: '2026-10-24T10:00:00+02:00', timeZone: 'Europe/Rome' }, end: { dateTime: '2026-10-24T11:00:00+02:00', timeZone: 'Europe/Rome' } };
  const moved = googleBody('events', { ...row, date: '2026-10-25' }, timed);
  assert.equal(moved.start?.dateTime, '2026-10-25T09:00:00.000Z');
  assert.equal(moved.end?.dateTime, '2026-10-25T10:00:00.000Z');
  assert.equal(googleDate({ id: 'midnight', start: { dateTime: '2026-10-05T23:30:00Z' } }), '2026-10-06');
  assert.deepEqual(googleBody('events', { ...row, title: 'Renamed', date: '2026-10-24' }, timed).start, timed.start);
  const multi = { id: 'days', start: { date: '2026-10-01' }, end: { date: '2026-10-04' } };
  assert.deepEqual(googleBody('events', row, multi).end, { date: '2026-10-08' });
});
test('API rejects unauthenticated users and never exposes Google credentials', async () => {
  const response = await GET(new Request('https://crm.test/api/calendar'));
  assert.equal(response.status, 401);
  assert.equal((await POST(new Request('https://crm.test/api/calendar', { method: 'POST' }))).status, 401);
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
});
test('Calendar migration restricts access and serializes runs with owner-specific lock release', async () => {
  const db = new PGlite();
  const user = '10000000-0000-4000-8000-000000000001';
  const a = crypto.randomUUID(), b = crypto.randomUUID();
  try {
    await db.exec(`create role anon; create role authenticated; create role service_role; create schema auth; create table auth.users(id uuid primary key); create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$; grant usage on schema auth to authenticated,anon; grant execute on function auth.uid() to authenticated,anon; create function auth.role() returns text language sql stable as $$ select current_setting('role') $$; grant execute on function auth.role() to authenticated,service_role; create schema storage; create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]); create table storage.objects(id uuid primary key default gen_random_uuid(),bucket_id text,name text); alter table storage.objects enable row level security; grant usage on schema storage to authenticated,anon; grant select,insert on storage.objects to authenticated; insert into auth.users values('${user}');`);
    await db.exec(await readFile('supabase/migrations/202610010001_workspace.sql', 'utf8'));
    await db.exec(await readFile('supabase/migrations/202610050001_calendar_sync.sql', 'utf8'));
    await db.exec(`insert into members(id,active) values('${user}',true); set role authenticated; set "request.jwt.claim.sub"='${user}';`);
    const acquire = async (token: string) => (await db.query<{ ok: boolean }>('select acquire_calendar_sync($1) as ok', [token])).rows[0].ok;
    assert.equal(await acquire(a), true);
    assert.equal(await acquire(b), false);
    await db.query('select release_calendar_sync($1)', [b]);
    assert.equal(await acquire(b), false);
    await db.query('select release_calendar_sync($1)', [a]);
    assert.equal(await acquire(b), true);
    await assert.rejects(db.query('select * from calendar_sync_lock'));
    await db.exec('reset role; update members set active=false; set role authenticated;');
    await assert.rejects(acquire(a));
    await db.exec('reset role; set role service_role;');
    await db.query('select release_calendar_sync($1)', [b]);
    assert.equal(await acquire(a), true);
    await db.exec('reset role; set role anon;');
    await assert.rejects(db.query('select * from calendar_links'));
  } finally { await db.close(); }
});
test('sync paginates, pulls, pushes, archives, imports and reruns without duplicates', async () => {
  const original = globalThis.fetch;
  const names = ['GOOGLE_CALENDAR_REFRESH_TOKEN','GOOGLE_DRIVE_CLIENT_ID','GOOGLE_DRIVE_CLIENT_SECRET'];
  const before = names.map(n => process.env[n]);
  names.forEach(n => process.env[n] = 'private-test');
  const rows = { events: [{ ...row, title: 'Local change' }, { ...row, id: crypto.randomUUID(), title: 'From Google' },
    { ...row, id: crypto.randomUUID(), title: 'Delete me' }], deliveries: [] as object[] };
  const remote = [event, { ...event, id: 'second', summary: 'Google changed' }, { id: 'third', status: 'cancelled' },
    { id: 'new', summary: 'New Google', start: { date: '2026-10-06' }, end: { date: '2026-10-07' } }];
  const links = [link, { ...link, record_id: rows.events[1].id, google_id: 'second', local_hash: localHash('events', rows.events[1]), google_hash: googleHash({ ...remote[1], summary: 'Old' }) },
    { ...link, record_id: rows.events[2].id, google_id: 'third', local_hash: localHash('events', rows.events[2]), google_hash: googleHash(event) }];
  const writes: string[] = [];
  globalThis.fetch = async (input, init) => {
    const url = new URL(String(input)); const method = init?.method || 'GET';
    if (url.hostname === 'oauth2.googleapis.com') return Response.json({ access_token: 'secret-access' });
    if (url.hostname === 'www.googleapis.com') {
      assert.equal(new Headers(init?.headers).get('Authorization'), 'Bearer secret-access');
      if (method === 'PATCH') {
        assert.equal(new Headers(init?.headers).get('If-Match'), 'v1');
        Object.assign(remote[0], JSON.parse(String(init?.body))); writes.push('google'); return Response.json(remote[0]);
      }
      return Response.json(url.searchParams.has('pageToken') ? { items: remote.slice(2) } : { items: remote.slice(0,2), nextPageToken: 'two' });
    }
    const table = url.pathname.split('/').at(-1)!;
    if (table === 'events' && method === 'PATCH') {
      const id = url.searchParams.get('id')!.slice(3);
      const target = rows.events.find(r => r.id === id)!;
      assert.equal(url.searchParams.get('version'), `eq.${target.version}`);
      Object.assign(target, JSON.parse(String(init?.body))); target.version++;
      writes.push('background'); return Response.json([{ id }]);
    }
    if (table === 'acquire_calendar_sync') return Response.json(true);
    if (table === 'release_calendar_sync') return Response.json(null);
    if (table === 'apply_changes') {
      const change = JSON.parse(String(init?.body)).changes[0];
      const index = rows.events.findIndex(r => r.id === change.record.id);
      if (index < 0) rows.events.push(change.record); else rows.events[index] = change.record;
      writes.push('crm'); return Response.json(null);
    }
    if (table === 'calendar_links' && method === 'POST') {
      const record = JSON.parse(String(init?.body)); const index = links.findIndex(l => l.google_id === record.google_id);
      if (index < 0) links.push(record); else links[index] = record;
      return Response.json(null);
    }
    return Response.json(table === 'calendar_links' ? links : table === 'seasons' ? [{ id: row.season_id, starts_on: '2026-09-01', ends_on: '2027-08-31' }] : rows[table as keyof typeof rows]);
  };
  try {
    const client = createClient('https://crm.test', 'test', { auth: { persistSession: false } });
    const first = await syncCalendar(client);
    assert.equal(first.updated, 2); assert.equal(first.archived, 1); assert.equal(first.imported, 1);
    assert.equal(first.conflicts.length, 0);
    assert.equal(rows.events[1].title, 'Google changed'); assert.equal(rows.events[2].archived, true);
    const count = writes.length;
    const second = await syncCalendar(client);
    assert.equal(second.imported + second.updated + second.exported + second.archived, 0);
    assert.equal(writes.length, count);
    assert.equal(rows.events.length, 4);
    remote[1].summary = 'Background update';
    const third = await syncCalendar(client, true);
    assert.equal(third.updated, 1);
    assert.equal(rows.events[1].title, 'Background update');
    assert.equal(writes.at(-1), 'background');
  } finally { globalThis.fetch = original; names.forEach((n,i) => before[i] === undefined ? delete process.env[n] : process.env[n] = before[i]); }
});

test('background endpoint requires an exact secret and fails closed without credentials', async () => {
  const previous = process.env.CRON_SECRET;
  process.env.CRON_SECRET = 'test-secret';
  try {
    assert.equal((await cron(new Request('https://crm.test/api/calendar/cron'))).status, 401);
    assert.equal((await cron(new Request('https://crm.test/api/calendar/cron', { headers: { Authorization: 'Bearer wrong-secret' } }))).status, 401);
    const response = await cron(new Request('https://crm.test/api/calendar/cron', { headers: { Authorization: 'Bearer test-secret' } }));
    assert.equal(response.status, 503);
    assert.doesNotMatch(await response.text(), /test-secret/);
  } finally { previous === undefined ? delete process.env.CRON_SECRET : process.env.CRON_SECRET = previous; }
});
