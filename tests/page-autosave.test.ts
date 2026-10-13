import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PageAutosave, PageSaveBusy } from '../lib/page-autosave';
import type { TeamPage } from '../lib/model';
const page: TeamPage = { id: 'page', season_id: 'season', team_id: 'team', version: 1, archived: false, updated_at: '', summary: '', blocks: [], revisions: [] };
test('serializes typing during a save, advances versions, and preserves every edit', async () => {
  const writes: TeamPage[] = []; let release!: () => void;
  const queue = new PageAutosave(page, async snapshot => {
    writes.push(snapshot);
    if (writes.length === 1) await new Promise<void>(resolve => { release = resolve; });
    return true;
  }, () => {}, () => {}, 10000);
  queue.update(current => ({ ...current, summary: 'Prima' }));
  const saving = queue.flush();
  queue.update(current => ({ ...current, summary: 'Prima e seconda' }));
  assert.equal(writes.length, 1);
  release(); assert.equal(await saving, true);
  assert.deepEqual(writes.map(p => [p.summary, p.version]), [['Prima', 1], ['Prima e seconda', 2]]);
  assert.equal(queue.page.version, 3); assert.equal(queue.state, 'saved'); assert.equal(queue.dirty, false);
  assert.equal(queue.page.revisions.length, 1); queue.dispose();
});
test('failed writes retain the draft and retry with the same version', async () => {
  let succeed = false; const backups: Array<TeamPage | null> = [];
  const queue = new PageAutosave(page, async () => succeed, () => {}, draft => backups.push(draft), 10000);
  queue.update(current => ({ ...current, summary: 'Da conservare' }));
  assert.equal(await queue.flush(), false); assert.equal(queue.state, 'error'); assert.equal(queue.page.version, 1);
  assert.equal(queue.dirty, true); assert.equal(backups.at(-1)?.summary, 'Da conservare');
  succeed = true; assert.equal(await queue.flush(), true); assert.equal(backups.at(-1), null); queue.dispose();
});
test('remote changes never overwrite a pending local draft', async () => {
  const queue = new PageAutosave(page, async () => false, () => {}, () => {}, 10000);
  queue.update(current => ({ ...current, summary: 'Locale' }));
  queue.accept({ ...page, version: 2, summary: 'Remoto' });
  assert.equal(queue.state, 'error'); assert.equal(queue.page.summary, 'Locale'); queue.dispose();
});
test('a busy workspace leaves the save pending', async () => {
  const queue = new PageAutosave(page, async () => { throw new PageSaveBusy(); }, () => {}, () => {}, 10000);
  queue.update(current => ({ ...current, summary: 'Modifica' }));
  assert.equal(await queue.flush(), false); assert.equal(queue.state, 'pending'); assert.equal(queue.dirty, true); queue.dispose();
});
test('autosave resumes after effect cleanup and setup', async () => {
  let writes = 0;
  const queue = new PageAutosave(page, async () => { writes++; return true; }, () => {}, () => {}, 1);
  queue.dispose(); queue.activate();
  queue.update(current => ({ ...current, summary: 'Dopo rimontaggio' }));
  await new Promise(resolve => setTimeout(resolve, 15));
  assert.equal(writes, 1); assert.equal(queue.state, 'saved'); queue.dispose();
});
test('the first save of a new page uses version zero and advances to one', async () => {
  const queue = new PageAutosave({ ...page, version: 0 }, async snapshot => { assert.equal(snapshot.version, 0); return true; }, () => {}, () => {}, 10000);
  queue.update(current => ({ ...current, summary: 'Nuova pagina' }));
  await queue.flush(); assert.equal(queue.page.version, 1); assert.equal(queue.page.revisions.length, 0); queue.dispose();
});
test('deleting a block checkpoints even content edited since the last save', async () => {
  const block = { id: 'block', type: 'testo' as const, content: 'Contenuto da recuperare' };
  const queue = new PageAutosave(page, async () => true, () => {}, () => {}, 10000);
  queue.update(current => ({ ...current, blocks: [block] }));
  queue.update(current => ({ ...current, blocks: [] }), true);
  await queue.flush(); assert.deepEqual(queue.page.revisions.at(-1)?.blocks, [block]); queue.dispose();
});
