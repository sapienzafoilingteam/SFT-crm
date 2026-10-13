"use client";
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Clock, FileText, GripVertical, RotateCcw, Trash2, ArrowUp, ArrowDown, Copy } from 'lucide-react';
import { base, TEAMS, type Block, type TeamPage } from '@/lib/model';
import { pageAt, replacePage } from '@/lib/nested-pages';
import { PageAutosave, PageSaveBusy } from '@/lib/page-autosave';
import { useWorkspace } from './provider';
import { useAutosizeTextarea } from './use-autosize-textarea';
import { makeBlock, PageBlockEditor } from './page-block-editor';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';

export function DepartmentPage({ team }: { team: (typeof TEAMS)[number] }) {
  const { data, season, put, busy } = useWorkspace();
  const remote = data.pages.find(p => p.team_id === team.id && p.season_id === season && !p.archived);
  const [path, setPath] = useState<string[]>([]);
  const [history, setHistory] = useState(false);
  const [focus, setFocus] = useState('');
  const [tail, setTail] = useState(() => makeBlock('testo'));
  const [, render] = useState(0);
  const mounted = useRef(false);
  const summaryInput = useRef<HTMLTextAreaElement>(null);
  const writer = useRef({ put, busy }); writer.current = { put, busy };
  const storageKey = `sft-page-draft:${season}:${team.id}`;
  const [recovery, setRecovery] = useState<TeamPage | null>(null);
  const [autosave] = useState(() => new PageAutosave(remote || { ...base(season), version: 0, team_id: team.id, summary: '', blocks: [], revisions: [] }, async page => {
    if (writer.current.busy) throw new PageSaveBusy();
    return writer.current.put('pages', page, { silent: true });
  }, () => { if (mounted.current) render(n => n + 1); }, page => {
    try { if (page) localStorage.setItem(storageKey, JSON.stringify(page)); else localStorage.removeItem(storageKey); } catch { /* beforeunload still protects pending writes */ }
  }));
  useEffect(() => {
    mounted.current = true;
    autosave.activate();
    try {
      const preserved = localStorage.getItem(storageKey + ':recovery');
      if (preserved) setRecovery(JSON.parse(preserved));
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const draft = JSON.parse(raw) as TeamPage;
        if (draft.team_id === team.id && draft.season_id === season && Array.isArray(draft.blocks) && Array.isArray(draft.revisions)) {
          if ((!remote && draft.version === 0) || (remote?.id === draft.id && remote.version === draft.version)) autosave.update(() => draft);
          else { localStorage.setItem(storageKey + ':recovery', JSON.stringify(draft)); localStorage.removeItem(storageKey); setRecovery(draft); }
        }
      }
    } catch { /* Ignore unreadable drafts without altering the saved page. */ }
    const warn = (event: BeforeUnloadEvent) => { if (autosave.dirty) { event.preventDefault(); event.returnValue = ''; } };
    const flush = () => { if (document.visibilityState === 'hidden') void autosave.flush(); };
    const retry = () => { if (autosave.dirty) void autosave.flush(); };
    window.addEventListener('beforeunload', warn);
    window.addEventListener('online', retry);
    document.addEventListener('visibilitychange', flush);
    return () => {
      mounted.current = false;
      window.removeEventListener('beforeunload', warn);
      window.removeEventListener('online', retry);
      document.removeEventListener('visibilitychange', flush);
      autosave.dispose();
    };
  }, [autosave, storageKey]);
  useEffect(() => { if (remote) autosave.accept(remote); }, [remote, autosave]);
  const root = autosave.page;
  const child = pageAt(root.blocks, path);
  const blocks = path.length ? child?.blocks || [] : root.blocks;
  const summary = path.length ? child?.summary || '' : root.summary;
  useAutosizeTextarea(summaryInput, summary);
  const changePage = (patch: { blocks?: Block[]; summary?: string }, checkpoint = false) => autosave.update(current => {
    if (!path.length) return { ...current, ...patch };
    const currentChild = pageAt(current.blocks, path);
    if (!currentChild) return current;
    return { ...current, blocks: replacePage(current.blocks, path, { summary: patch.summary ?? currentChild.summary ?? '', blocks: patch.blocks ?? currentChild.blocks ?? [] }) };
  }, checkpoint);
  const updateBlock = (id: string, patch: Partial<Block>) => {
    if (id === tail.id) { changePage({ blocks: [...blocks, { ...tail, ...patch }] }); setFocus(tail.id); setTail(makeBlock('testo')); }
    else changePage({ blocks: blocks.map(b => b.id === id ? { ...b, ...patch } : b) });
  };
  const navigate = (next: string[]) => { setPath(next); setFocus(''); void autosave.flush(); };
  useEffect(() => { if (path.length && !child) setPath([]); }, [child, path]);
  return <div className="team-page notion-page">
    <nav className="page-trail" aria-label="Percorso della pagina">
      <Button variant="ghost" size="sm" onClick={() => navigate([])}>Pagina del reparto</Button>
      {path.map((id, i) => <Button key={id} variant="ghost" size="sm" onClick={() => navigate(path.slice(0, i + 1))}>/ {pageAt(root.blocks, path.slice(0, i + 1))?.content || 'Senza titolo'}</Button>)}
    </nav>
    <div className="page-local-actions">
      <h2>{child?.content || 'Contenuti del reparto'}</h2>
      <div className="document-status"><span role="status" aria-live="polite">{{ saved: 'Tutte le modifiche salvate', pending: 'Modifiche in attesa…', saving: 'Salvataggio…', error: 'Salvataggio interrotto' }[autosave.state]}</span><Button variant="ghost" size="sm" onClick={() => setHistory(true)} aria-label="Revisioni della pagina"><Clock size={16} />Revisioni</Button></div>
    </div>
    {recovery && <div className="document-error" role="alert">C’è una bozza precedente da confrontare con la pagina aggiornata. <Button variant="outline" size="sm" onClick={() => {
      const url = URL.createObjectURL(new Blob([JSON.stringify(recovery, null, 2)], { type: 'application/json' }));
      const link = document.createElement('a'); link.href = url; link.download = `${team.id}-bozza.json`; link.click(); URL.revokeObjectURL(url);
    }}>Scarica la bozza</Button></div>}
    <div className="team-page-banner" style={{ borderLeftColor: team.color }}>
      <span className="eyebrow">{path.length ? 'RIEPILOGO DELLA PAGINA' : 'DIREZIONE DELLA STAGIONE'}</span>
      <textarea ref={summaryInput} className="notion-input" rows={1} aria-label="Riepilogo del reparto" placeholder="Riepilogo del reparto…" value={summary} onChange={e => changePage({ summary: e.target.value })} />
    </div>
    <div className="blocks">
      {[...blocks, tail].map((block, i) => block.type === 'link' && block.content.trim() === 'Drive del reparto' ? null : <div key={block.id} className={`block document-block block-${block.type}`}>
        {block.id !== tail.id && <details className="document-block-actions"><summary aria-label="Azioni del blocco"><GripVertical size={16} /></summary><div>
          <button disabled={i === 0} onClick={() => { const next = [...blocks]; [next[i - 1], next[i]] = [next[i], next[i - 1]]; changePage({ blocks: next }); }}><ArrowUp size={14} />Sposta su</button>
          <button disabled={i === blocks.length - 1} onClick={() => { const next = [...blocks]; [next[i + 1], next[i]] = [next[i], next[i + 1]]; changePage({ blocks: next }); }}><ArrowDown size={14} />Sposta giù</button>
          <button onClick={() => {
            const duplicate = (b: Block): Block => ({ ...b, id: crypto.randomUUID(), ...(b.blocks ? { blocks: b.blocks.map(duplicate) } : {}) });
            changePage({ blocks: [...blocks.slice(0, i + 1), duplicate(block), ...blocks.slice(i + 1)] });
          }}><Copy size={14} />Duplica</button>
          <button onClick={() => { if (block.type !== 'pagina' || window.confirm('Rimuovere questa sottopagina e tutti i suoi contenuti? La versione precedente sarà nelle revisioni.')) changePage({ blocks: blocks.filter(b => b.id !== block.id) }, true); }}><Trash2 size={14} />Elimina</button>
        </div></details>}
        {block.type === 'pagina' ? <div className="inline-page-link"><FileText size={18} /><input autoFocus={focus === block.id} aria-label="Titolo della sottopagina" maxLength={160} placeholder="Senza titolo" value={block.content} onChange={e => updateBlock(block.id, { content: e.target.value })} /><Button variant="ghost" size="sm" onClick={() => navigate([...path, block.id])} aria-label={`Apri ${block.content || 'sottopagina'}`}><ArrowUpRight size={18} /></Button></div> : <PageBlockEditor block={block} autoFocus={focus === block.id} onChange={patch => updateBlock(block.id, patch)} onRemove={() => { if (block.id === tail.id) return; changePage({ blocks: blocks.filter(b => b.id !== block.id) }, true); setFocus(blocks[Math.max(0, i - 1)]?.id || ''); }} onSplit={(before, next) => {
          changePage({ blocks: [...blocks.slice(0, i), { ...block, content: before }, next, ...blocks.slice(i + 1)] }); setFocus(next.id);
        }} />}
      </div>)}
      <small className="document-hint muted">Scrivi / per inserire un elemento · Invio per continuare · Shift + Invio per andare a capo</small>
      {autosave.state === 'error' && <div className="document-error" role="alert">{autosave.error}<Button variant="outline" size="sm" onClick={() => void autosave.flush()}>Riprova</Button></div>}
    </div>
    <Dialog open={history} onOpenChange={setHistory}><DialogContent><DialogTitle className="dialog-title">Revisioni del reparto</DialogTitle><DialogDescription className="muted">Le revisioni raggruppano le modifiche vicine nel tempo. Il ripristino conserva la versione attuale.</DialogDescription>
      {root.revisions.length ? root.revisions.map((revision, i) => <div className="task-row" key={i}><div><strong>{new Date(revision.at).toLocaleString('it-IT')}</strong><small>{revision.blocks.length} blocchi</small></div><Button variant="outline" size="sm" onClick={() => { autosave.update(current => ({ ...current, blocks: revision.blocks, summary: revision.summary ?? current.summary, revisions: [...current.revisions, { at: new Date().toISOString(), blocks: current.blocks, summary: current.summary }].slice(-20) })); navigate([]); setHistory(false); }}><RotateCcw size={14} />Ripristina</Button></div>) : <p className="muted">Nessuna versione precedente.</p>}
    </DialogContent></Dialog>
  </div>;
}
