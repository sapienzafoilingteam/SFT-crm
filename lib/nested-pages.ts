import type { Block } from './model';

export function pageAt(blocks: Block[], path: readonly string[]): Block | undefined {
  if (!path.length) return undefined;
  const page = blocks.find(b => b.id === path[0] && b.type === 'pagina');
  return path.length === 1 ? page : pageAt(page?.blocks || [], path.slice(1));
}

export function replacePage(blocks: Block[], path: readonly string[], patch: Pick<Block, 'summary' | 'blocks'>): Block[] {
  if (!path.length) throw new Error('Percorso della sottopagina mancante.');
  if (!blocks.some(b => b.id === path[0] && b.type === 'pagina')) throw new Error('Sottopagina non disponibile. Ricarica il reparto.');
  return blocks.map(b => b.id !== path[0] ? b : path.length === 1
    ? { ...b, ...patch }
    : { ...b, blocks: replacePage(b.blocks || [], path.slice(1), patch) });
}
