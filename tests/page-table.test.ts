import { test } from 'node:test';
import assert from 'node:assert/strict';
import { tableCells, tablePatch } from '../lib/page-table';
import type { Block } from '../lib/model';
const table: Block = { id: 'table', type: 'tabella', content: ' A | B\nUno\nDue | Tre | Quattro' };
test('legacy table content becomes a rectangular editable grid', () => {
  assert.deepEqual(tableCells(table), [['A', 'B', ''], ['Uno', '', ''], ['Due', 'Tre', 'Quattro']]);
});
test('cell text retains pipes, newlines and surrounding spaces', () => {
  const cells = [['Titolo', 'Altro'], [' a | b ', 'prima\nseconda']];
  assert.deepEqual(tableCells({ ...table, ...tablePatch(cells) }), cells);
});
