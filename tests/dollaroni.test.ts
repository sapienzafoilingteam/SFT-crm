import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { makeDollaroniReport, readDollaroni, isDollaroniReport, validateDollaroniProject } from '../lib/dollaroni';
import { SEASONS } from '../lib/model';
import { routeCollections } from '../lib/workspace-resources';
const example = () => JSON.parse(readFileSync(new URL('../public/tools/dollaroni/data/projects/meravijosa-2026-s1.json', import.meta.url), 'utf8'));

test('shared Dollaroni projects round-trip original data, frozen S1 and custom catalog without modifying source', () => {
  const p = example();
  p.stage = 'S2'; p.baseline = { project: example(), stage: 'S1', frozenAt: '2026-10-30T10:00:00Z' };
  p.futureField = { preserved: true };
  const row = makeDollaroniReport(p, SEASONS[0].id);
  assert.equal(row.team_id, 'materiali'); assert.equal(row.season_id, SEASONS[0].id);
  assert.deepEqual(readDollaroni(row)?.project, p);
  const checked = validateDollaroniProject(p); checked.name = 'edited'; assert.notEqual(p.name, checked.name);
  const versioned = { ...row, version: 7 };
  const next = makeDollaroniReport({ ...p, name: 'Updated' }, SEASONS[0].id, versioned);
  assert.equal(next.id, row.id); assert.equal(next.version, 7);
});
test('storage isolates season, report kind and archived records; malformed payload cannot open', () => {
  const row = makeDollaroniReport(example(), SEASONS[0].id);
  assert.equal(isDollaroniReport({ ...row, team_id: 'scafo' }), false);
  assert.equal(readDollaroni({ ...row, content: JSON.stringify({ kind: 'dollaroni-project', project: {} }) }), null);
  assert.equal(isDollaroniReport({ ...row, content: JSON.stringify({ kind: 'dollaroni-project', project: {} }) }), true);
  assert.equal(readDollaroni({ ...row, content: 'ordinary report' }), null);
  assert.throws(() => makeDollaroniReport(example(), SEASONS[1].id, row));
  assert.throws(() => makeDollaroniReport(example(), SEASONS[0].id, { ...row, archived: true }));
  assert.throws(() => makeDollaroniReport(example(), SEASONS[0].id, { ...row, content: 'ordinary report' }));
});
test('malformed, oversized and recursively nested projects are rejected before CRM persistence', () => {
  for (const patch of [{ schema: 'unknown' }, { parts: {} }, { lines: [null] }, { season: '2027' }, { stage: 'S3' }, { name: '' }])
    assert.throws(() => validateDollaroniProject({ ...example(), ...patch }));
  assert.throws(() => validateDollaroniProject({ ...example(), notes: 'x'.repeat(5 * 1024 * 1024) }));
  const baseline = example(); baseline.baseline = { project: example() };
  assert.throws(() => validateDollaroniProject({ ...example(), baseline: { project: baseline } }));
  assert.deepEqual(routeCollections(['team', 'materiali', 'dollaroni']), ['deliveries', 'reports']);
});
