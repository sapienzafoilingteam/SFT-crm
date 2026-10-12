import test from 'node:test';
import assert from 'node:assert/strict';
import type { SupabaseClient } from '@supabase/supabase-js';
import { WorkspaceResources, routeCollections } from '../lib/workspace-resources';
import { emptyWorkspace, loadCollections } from '../lib/repository';
import { newRecord } from '../lib/new-record';
import type { Workspace } from '../lib/model';

function deferred<T>() { let resolve!: (value: T) => void; const promise = new Promise<T>(r => { resolve = r; }); return { promise, resolve }; }
const row = (id: string, season = 'one', version = 1) => ({ ...newRecord('deliveries', season), id, version }) as Workspace['deliveries'][number];

test('navigation reuses collection snapshots, deduplicates overlapping reads and isolates seasons', async () => {
  const response = deferred<Partial<Workspace>>(); let reads = 0;
  const cache = new WorkspaceResources(async (keys, season) => { reads++; assert.deepEqual(keys, ['deliveries']); return season === 'one' ? response.promise : { deliveries: [row('other', season)] }; });
  const a = cache.load('one', ['deliveries']), b = cache.load('one', ['deliveries']);
  assert.equal(reads, 1); response.resolve({ deliveries: [row('first')] }); await Promise.all([a, b]);
  await cache.load('one', ['deliveries']); assert.equal(reads, 1);
  await cache.load('two', ['deliveries']); assert.equal(reads, 2);
  assert.equal(cache.snapshot('one').deliveries[0].id, 'first');
  assert.equal(cache.snapshot('two').deliveries[0].id, 'other');
});
test('logout invalidates pending responses and clears every cached season', async () => {
  const response = deferred<Partial<Workspace>>(); const cache = new WorkspaceResources(() => response.promise);
  const load = cache.load('one', ['deliveries']); cache.clear(); response.resolve({ deliveries: [row('private')] }); await load;
  assert.deepEqual(cache.snapshot('one').deliveries, []); assert.equal(cache.has('one', ['deliveries']), false);
});
test('a background response cannot overwrite a newer saved row', async () => {
  const response = deferred<Partial<Workspace>>(); const cache = new WorkspaceResources(() => response.promise);
  const load = cache.load('one', ['deliveries']); cache.replace('one', { ...emptyWorkspace(), deliveries: [row('saved', 'one', 2)] });
  response.resolve({ deliveries: [row('saved', 'one', 1)] }); await load;
  assert.equal(cache.snapshot('one').deliveries[0].version, 2);
});
test('failed collection reads remain retryable, and refresh targets only the requested collection', async () => {
  let reads = 0; const keys: readonly string[][] = [];
  const cache = new WorkspaceResources(async requested => { reads++; (keys as string[][]).push([...requested]); if (reads === 1) throw new Error('offline'); return { deliveries: [], events: [] }; });
  await assert.rejects(cache.load('one', ['deliveries'])); assert.equal(cache.has('one', ['deliveries']), false);
  await cache.load('one', ['deliveries', 'events']); await cache.load('one', ['events'], true);
  assert.deepEqual(keys, [['deliveries'], ['deliveries', 'events'], ['events']]);
});
test('a forced refresh during an in-flight read fetches a newer snapshot afterward', async () => {
  const response = deferred<Partial<Workspace>>(); let reads = 0;
  const cache = new WorkspaceResources(async () => ++reads === 1 ? response.promise : { deliveries: [row('new', 'one', 2)] });
  const initial = cache.load('one', ['deliveries']), refresh = cache.load('one', ['deliveries'], true);
  response.resolve({ deliveries: [row('new')] }); await Promise.all([initial, refresh]); assert.equal(reads, 2); assert.equal(cache.snapshot('one').deliveries[0].version, 2);
});
test('route dependencies include all relationships without loading unrelated modules', () => {
  assert.deepEqual(routeCollections(['drive']), ['deliveries']);
  assert.deepEqual(routeCollections(['agenda']), ['deliveries', 'events', 'recurrences']);
  assert.equal(routeCollections(['team', 'management', 'contratti']).includes('sponsors'), true);
  assert.equal(routeCollections([]).includes('costs'), false);
});
test('collection loader applies season filtering and paginates past a smaller server cap', async () => {
  const records = [row('a'), row('b'), row('c')]; const offsets: number[] = [], tables: string[] = [];
  const client = { from(table: string) { tables.push(table); let offset = 0;
    const query = { select() { return query; }, order(column: string) { assert.equal(column, 'id'); return query; },
      range(start: number) { offset = start; offsets.push(start); return query; }, eq(column: string, season: string) { assert.equal(column, 'season_id'); assert.equal(season, 'one'); return query; },
      then(resolve: (value: unknown) => unknown) { return Promise.resolve({ data: records.slice(offset, offset + 2), count: records.length, error: null }).then(resolve); } };
    return query;
  } } as unknown as SupabaseClient;
  const data = await loadCollections(client, ['deliveries'], 'one');
  assert.equal(data.deliveries?.length, 3); assert.deepEqual(offsets, [0, 2]); assert.deepEqual(tables, ['deliveries', 'deliveries']);
});

test('newly inserted rows survive a response that started before the insert', async () => {
  const response = deferred<Partial<Workspace>>(); const cache = new WorkspaceResources(() => response.promise);
  const pending = cache.load('one', ['deliveries']); cache.replace('one', { ...emptyWorkspace(), deliveries: [row('inserted')] });
  response.resolve({ deliveries: [] }); await pending;
  assert.equal(cache.snapshot('one').deliveries[0].id, 'inserted');
});
test('an unchanged background refresh keeps the snapshot reference stable', async () => {
  const records = [row('same')]; const cache = new WorkspaceResources(async () => ({ deliveries: records }));
  await cache.load('one', ['deliveries']); const previous = cache.snapshot('one');
  await cache.load('one', ['deliveries'], true); assert.equal(cache.snapshot('one'), previous);
});

test('logout cancels follow-up fetches queued by a forced refresh', async () => {
  const response = deferred<Partial<Workspace>>(); let reads = 0;
  const cache = new WorkspaceResources(async () => { reads++; return response.promise; });
  const initial = cache.load('one', ['deliveries']), refresh = cache.load('one', ['deliveries'], true);
  cache.clear(); response.resolve({ deliveries: [row('private')] }); await Promise.all([initial, refresh]);
  assert.equal(reads, 1); assert.deepEqual(cache.snapshot('one').deliveries, []);
});
