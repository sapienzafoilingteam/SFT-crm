'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ArrowLeft, ChevronDown, Copy, FolderOpen, Maximize2, RefreshCw, Save } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { isDollaroniReport, makeDollaroniReport, readDollaroni, validateDollaroniProject, type DollaroniProject } from '@/lib/dollaroni';
import { SEASONS, type Report } from '@/lib/model';
import { live, supabase } from '@/lib/repository';
import { useWorkspace } from './provider';
import { Button } from './ui/button';
import { BrumothBridge } from './brumoth-bridge';
import { Heading } from './views/shared';

const CHANNEL = 'sft-dollaroni';
const BOOT_TIMEOUT_MS = 30_000;

export function DollaroniPage() {
  const { data, season, put, refresh, busy } = useWorkspace();
  const { resolvedTheme } = useTheme();
  const iframe = useRef<HTMLIFrameElement>(null);
  const frameHolder = useRef<HTMLDivElement>(null);
  const [scope, setScope] = useState('');
  const [ready, setReady] = useState(false);
  const [booted, setBooted] = useState(false);
  const [retry, setRetry] = useState(0);
  const [project, setProject] = useState<DollaroniProject | null>(null);
  const [invalidProject, setInvalidProject] = useState(false);
  const [opened, setOpened] = useState<Report | null>(null);
  const [selection, setSelection] = useState('');
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [savedJson, setSavedJson] = useState('');
  const [saving, setSaving] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const state = useRef({ project, opened, savedJson, saving, busy });
  state.current = { project, opened, savedJson, saving, busy };
  const savingLock = useRef(false);
  const documentGeneration = useRef(0);
  const validationProblem = useRef(false);
  const active = useRef(true);
  useEffect(() => { active.current = true; return () => { active.current = false; }; }, []);
  const dirty = invalidProject || (project !== null && JSON.stringify(project) !== savedJson);
  const shared = useMemo(() => data.reports.filter(row => !row.archived && row.season_id === season && isDollaroniReport(row)), [data.reports, season]);
  const invalidIds = useMemo(() => new Set(shared.filter(row => !readDollaroni(row)).map(row => row.id)), [shared]);

  const send = useCallback((message: Record<string, unknown>) => {
    iframe.current?.contentWindow?.postMessage({ channel: CHANNEL, ...message }, window.location.origin);
  }, []);

  useEffect(() => {
    let cancelled = false;
    if (!live) { setScope(`demo:${season}`); return; }
    void supabase?.auth.getSession().then(({ data: sessionData, error: sessionError }) => {
      if (cancelled) return;
      if (sessionError || !sessionData.session?.user.id) setError('Non riesco a verificare il tuo accesso. Ricarica la pagina.');
      else setScope(`${sessionData.session.user.id}:${season}`);
    });
    return () => { cancelled = true; };
  }, [season]);

  const saveProject = useCallback(async (next: DollaroniProject, copy = false, requestId?: string | number) => {
    const reply = (ok: boolean, message?: string) => {
      if (requestId !== undefined) send({ type: 'saved', requestId, ok, error: message });
    };
    if (savingLock.current || state.current.busy) { reply(false, 'Un salvataggio è già in corso. Riprova tra un momento.'); return; }
    const generation = documentGeneration.current;
    savingLock.current = true;
    setSaving(true); setError(''); setStatus('Salvataggio nel CRM…');
    try {
      const snapshot = validateDollaroniProject(next);
      const json = JSON.stringify(snapshot);
      const existing = copy ? undefined : state.current.opened || undefined;
      const row = makeDollaroniReport(snapshot, season, existing);
      const ok = await put('reports', row, { silent: true });
      if (!ok) throw new Error('Il progetto non è stato salvato. Potrebbe essere stato aggiornato da un’altra persona: aggiorna l’elenco e apri la versione condivisa, oppure salva una copia. La tua bozza locale è conservata.');
      if (active.current && generation === documentGeneration.current) {
        const stored = { ...row, version: existing ? existing.version + 1 : 1, updated_at: new Date().toISOString() };
        setOpened(stored); setSelection(stored.id); setSavedJson(json);
        setStatus(copy ? 'Copia salvata nel CRM.' : 'Progetto salvato nel CRM.');
      }
      reply(true);
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : 'Salvataggio non riuscito. Riprova.';
      if (active.current) { setError(message); setStatus(''); }
      reply(false, message);
    } finally {
      savingLock.current = false;
      if (active.current) setSaving(false);
    }
  }, [put, season, send]);

  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== iframe.current?.contentWindow || event.data?.channel !== CHANNEL) return;
      const message = event.data;
      if (message.type === 'ready') { setReady(true); return; }
      if (message.type === 'booted') { setBooted(true); setError(''); return; }
      if (message.type === 'draft-error') { setError(typeof message.error === 'string' ? message.error : 'La bozza locale non può essere salvata. Salva il progetto nel CRM o scaricalo su file.'); return; }
      if (message.type === 'error') { setError(typeof message.error === 'string' ? message.error : 'Dollaroni non riesce a partire. Riprova.'); return; }
      if (!['changed', 'replaced', 'save'].includes(message.type)) return;
      if (message.scope && message.scope !== scope) return;
      if (message.type === 'replaced') {
        documentGeneration.current++; setOpened(null); setSelection(''); setSavedJson('');
        setStatus('Progetto locale aperto. Salvalo nel CRM per condividerlo con il team.');
      }
      try {
        const next = validateDollaroniProject(message.project);
        if (validationProblem.current) { setError(''); validationProblem.current = false; }
        setInvalidProject(false);
        if (message.type === 'save') void saveProject(next, false, typeof message.requestId === 'string' || typeof message.requestId === 'number' ? message.requestId : undefined);
        else {
          setProject(next);

        }
      } catch (cause) {
        const errorMessage = cause instanceof Error ? cause.message : 'Il progetto ricevuto non è valido.';
        setError(errorMessage);
        if (message.type === 'changed' || message.type === 'replaced') { validationProblem.current = true; setInvalidProject(true); setProject(null); }
        if (message.type === 'save' && (typeof message.requestId === 'string' || typeof message.requestId === 'number'))
          send({ type: 'saved', requestId: message.requestId, ok: false, error: errorMessage });
      }
    };
    window.addEventListener('message', receive);
    return () => window.removeEventListener('message', receive);
  }, [saveProject, scope, send]);

  useEffect(() => {
    if (!ready || !scope) return;
    const publishTheme = () => {
      const styles = getComputedStyle(document.documentElement);
      const tokenNames = ['background', 'foreground', 'card', 'muted', 'muted-foreground', 'primary', 'secondary', 'border', 'input', 'success', 'success-soft', 'warning', 'warning-soft', 'destructive', 'info', 'info-soft'];
      const tokens = Object.fromEntries(tokenNames.map(name => [name, styles.getPropertyValue(`--${name}`).trim()]));
      send({ type: 'init', scope, theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light', tokens });
    };
    // next-themes can apply the root class after this effect; read tokens after that mutation.
    let frame = requestAnimationFrame(publishTheme);
    const observer = new MutationObserver(() => { cancelAnimationFrame(frame); frame = requestAnimationFrame(publishTheme); });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [ready, scope, resolvedTheme, send]);

  useEffect(() => {
    if (!scope || booted) return;
    const timer = setTimeout(() => setError('Dollaroni sta impiegando troppo tempo a partire. Controlla la connessione e riprova.'), BOOT_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [scope, booted, retry]);

  useEffect(() => {
    if (!dirty) return;
    const beforeUnload = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = ''; };
    const beforeNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link || link.download || link.target === '_blank' || link.origin !== location.origin || link.pathname === location.pathname) return;
      if (!window.confirm('Il progetto ha modifiche non salvate nel CRM. La bozza resta su questo dispositivo. Vuoi uscire da Dollaroni?')) { event.preventDefault(); event.stopPropagation(); }
    };
    window.addEventListener('beforeunload', beforeUnload);
    document.addEventListener('click', beforeNavigation, true);
    return () => { window.removeEventListener('beforeunload', beforeUnload); document.removeEventListener('click', beforeNavigation, true); };
  }, [dirty]);

  const openShared = () => {
    const row = shared.find(item => item.id === selection);
    const value = row && readDollaroni(row);
    if (!row || !value) { setError('Il progetto non può essere aperto. Aggiorna l’elenco e riprova.'); return; }
    if (dirty && !window.confirm('Aprire il progetto condiviso? Le modifiche attuali non salvate nel CRM verranno sostituite. Usa “Salva una copia” per conservarle.')) return;
    documentGeneration.current++;
    setOpened(row); setProject(value.project); setInvalidProject(false); setSavedJson(JSON.stringify(value.project)); setError('');
    setStatus('Progetto condiviso aperto.'); setProjectsOpen(false); send({ type: 'load', project: value.project });
  };

  return <div className="dollaroni-page">
    <BrumothBridge iframe={iframe} scope={scope} />
    <Link className="software-project-back" href="/team/materiali"><ArrowLeft size={16} />Materiali e Sostenibilità</Link>
    <Heading title="Dollaroni" description="Laminazioni, costi SM$ e report S1/S2." />
    <section className="dollaroni-workspace" aria-label="Progetto e salvataggio">
      <div className="dollaroni-toolbar">
        <div className="dollaroni-current-project"><strong>{project ? `${project.name} · ${project.stage}` : invalidProject ? 'Progetto da completare' : 'Nessun progetto aperto'}</strong><span className={"dollaroni-save-status " + (dirty ? 'is-unsaved' : opened ? 'is-saved' : '')} role="status" aria-live="polite">{saving ? 'Salvataggio…' : dirty ? 'Modifiche da salvare nel CRM' : opened ? 'Salvato nel CRM' : 'Crea o apri un progetto'}</span></div>
        <div className="dollaroni-workspace-actions"><Button variant="outline" size="sm" aria-expanded={projectsOpen} aria-controls="dollaroni-projects-drawer" onClick={() => setProjectsOpen(value => !value)}><FolderOpen size={16} />Progetti del reparto ({shared.length})<ChevronDown size={14} className={projectsOpen ? 'dollaroni-chevron-open' : ''} /></Button><Button variant="ghost" size="icon" title="Schermo intero" aria-label="Schermo intero" disabled={!booted} onClick={() => { void frameHolder.current?.requestFullscreen?.().catch(() => setError('La modalità a schermo intero non è disponibile in questo browser.')); }}><Maximize2 size={16} /></Button><Button size="sm" disabled={!project || saving || busy || !booted} onClick={() => project && void saveProject(project)}><Save size={16} />{saving ? 'Salvataggio…' : 'Salva nel CRM'}</Button></div>
      </div>
      <div id="dollaroni-projects-drawer" className="dollaroni-projects-drawer" hidden={!projectsOpen}>
        <div className="dollaroni-projects-context"><p>Salvati nel CRM e disponibili ai membri del team, per stagione.</p><span>Stagione {SEASONS.find(item => item.id === season)?.name}</span></div>
        <div className="dollaroni-project-controls"><label className="dollaroni-project-picker" htmlFor="dollaroni-shared-project">Progetto nel CRM<select id="dollaroni-shared-project" value={selection} onChange={event => setSelection(event.target.value)} disabled={saving || refreshing}><option value="">{shared.length ? 'Seleziona un progetto…' : 'Nessun progetto salvato nel CRM'}</option>{shared.map(row => <option key={row.id} value={row.id}>{row.title}{invalidIds.has(row.id) ? ' · file non valido' : ''}</option>)}</select></label>
          <Button variant="outline" size="sm" disabled={!selection || !booted || saving} onClick={openShared}><FolderOpen size={16} />Apri</Button>
          <Button variant="ghost" size="sm" disabled={refreshing || saving || busy} onClick={async () => { setRefreshing(true); setError(''); try { await refresh(['reports']); setStatus('Elenco dei progetti aggiornato.'); } catch { setError('Non riesco ad aggiornare i progetti. Riprova.'); } finally { if (active.current) setRefreshing(false); } }}><RefreshCw size={16} />{refreshing ? 'Aggiornamento…' : 'Aggiorna'}</Button>
          <Button variant="outline" size="sm" disabled={!project || saving || busy || !booted} onClick={() => project && void saveProject(project, true)}><Copy size={16} />Salva una copia</Button>
        </div>
        <p className="dollaroni-storage-note">“Salva nel CRM” condivide il progetto con il reparto. “Salva file” scarica una copia sul dispositivo. La bozza automatica resta solo in questo browser.</p>
        {status && <p className="dollaroni-action-status" role="status" aria-live="polite">{status}</p>}
      </div>
    </section>
    {error && <div className="document-error dollaroni-error" role="alert"><p>{error}</p>{!booted && <Button variant="outline" size="sm" onClick={() => { documentGeneration.current++; setProject(null); setInvalidProject(false); setOpened(null); setSavedJson(''); setSelection(''); setReady(false); setBooted(false); setError(''); setRetry(value => value + 1); }}>Riprova</Button>}</div>}
    <div className="dollaroni-frame-holder" ref={frameHolder} aria-busy={!booted}>
      {!booted && <div className="dollaroni-loading" role="status">Preparazione di Dollaroni, del listino e del Layup Calculator…</div>}
      {scope && <iframe key={retry} ref={iframe} src="/tools/dollaroni/index.html" title="Dollaroni — laminazioni, costi SM$ e report S1/S2" className="dollaroni-frame" allow="clipboard-read; clipboard-write; fullscreen" onError={() => setError('Dollaroni non è disponibile. Riprova.')} />}
    </div>
  </div>;
}
