import type { Block } from './model';
export function tableCells(block: Block): string[][] {
  const rows = block.table?.length ? block.table : block.content ? block.content.split('\n').map(row => row.split('|').map(cell => cell.trim())) : [['Colonna 1', 'Colonna 2'], ['', ''], ['', '']];
  const width = Math.max(1, ...rows.map(row => row.length));
  return rows.map(row => Array.from({ length: width }, (_, i) => row[i] || ''));
}
export function tablePatch(table: string[][]): Partial<Block> {
  return { table, content: table.map(row => row.join(' | ')).join('\n') };
}
