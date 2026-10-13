import test from 'node:test';
import assert from 'node:assert/strict';
import { pageAt, replacePage } from '../lib/nested-pages';
import type { Block } from '../lib/model';

test('nested edits preserve parent content, sibling pages and original revision', () => {
  const child: Block = { id: 'child', type: 'pagina', content: 'Figlia', blocks: [] };
  const sibling: Block = { id: 'sibling', type: 'pagina', content: 'Altra', blocks: [] };
  const parent: Block = { id: 'parent', type: 'pagina', content: 'Pagina', blocks: [child, sibling] };
  const text: Block = { id: 'text', type: 'testo', content: 'Contenuto reparto' };
  const original = [text, parent];
  const updated = replacePage(original, ['parent', 'child'], { summary: 'Obiettivi', blocks: [text] });
  assert.equal(pageAt(updated, ['parent', 'child'])?.summary, 'Obiettivi');
  assert.equal(updated[0], text);
  assert.equal(pageAt(updated, ['parent', 'sibling']), sibling);
  assert.deepEqual(pageAt(original, ['parent', 'child'])?.blocks, []);
  const roundTrip = JSON.parse(JSON.stringify(updated));
  assert.equal(pageAt(roundTrip, ['parent', 'child'])?.blocks?.[0].content, 'Contenuto reparto');
});

test('missing page paths cannot silently replace root contents', () => {
  assert.equal(pageAt([], ['missing']), undefined);
  assert.throws(() => replacePage([], ['missing'], { blocks: [] }));
  assert.throws(() => replacePage([], [], { blocks: [] }));
});
