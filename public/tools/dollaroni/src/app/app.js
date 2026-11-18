import { onCrmLoad, publishProject, projectReplaced, saveToCrm } from './crm.js';
import { html, useState, useMemo, useEffect, useCallback } from '../../vendor/preact-htm.js';
import { Button, Icon, Bar, Badge, TextInput, NumInput, Select } from './ui.js';
import { sm, pct } from './format.js';
import { useProject, useAutosave, loadAutosave, openProjectFile, saveProjectFile, serialize, validateProject, downloadBytes, hasUnsavedWork, saveRecoveryCopy, loadRecoveryCopy, clearRecoveryCopy } from './store.js';
import { emptyProject, projectFrom2026, freezeToS2, toRules2027 } from './templates.js';
import { CURRENT_RULES, rulesId } from '../engine/rules.js';
import { evaluate } from '../engine/project.js';
import { runChecks } from '../engine/checks.js';
import { fmtPoints } from '../engine/reports.js';
import { Overview } from './views/overview.js';
import { Parts } from './views/parts.js';
import { Lines } from './views/lines.js';
import { Compare } from './views/compare.js';
import { Checks } from './views/checks.js';
import { Catalog } from './views/catalog.js';
import { Performance } from './views/performance.js';
import { ExportView } from './views/export.js';
import { Welcome } from './views/welcome.js';
import { Assistant } from './views/assistant.js';
import { subscribeUpdates, showNews, checkNow } from './updates.js';

const NAV = [
  { id: 'overview', label: 'Panoramica', icon: 'home' },
  { id: 'parts', label: 'Pezzi laminati', icon: 'layers' },
  { id: 'lines', label: 'Voci di costo', icon: 'list' },
  { id: 'performance', label: 'Performance Rating', icon: 'star', needs: 'performance' },
  { id: 'compare', label: 'Confronto S1→S2', icon: 'gauge' },
  { id: 'checks', label: 'Controlli', icon: 'alert' },
  { id: 'catalog', label: 'Listino', icon: 'book' },
  { id: 'export', label: 'Esporta', icon: 'export' },
];

/** Contesto (regole + listino + Layup Calculator) del regolamento chiesto dal progetto. */
const contextFor = (contexts, p) => contexts[rulesId(p)] || contexts[CURRENT_RULES];

export function App({ contexts }) {
  const autosave = useMemo(loadAutosave, []);
  const { project, update, replace, undo, redo, canUndo, canRedo } = useProject(null);
  const ctx = contextFor(contexts, project);
  const [file, setFile] = useState({ handle: null, fileName: null, savedJson: null, pristineJson: null, lastModified: null });
  const [recovery, setRecovery] = useState(loadRecoveryCopy);
  const [view, setView] = useState('overview');
  const [welcome, setWelcome] = useState(true);
  const [chatSession, setChatSession] = useState(0);
  const [selPart, setSelPart] = useState(null);
  const [lineFilter, setLineFilter] = useState(null);
  const [expandedLine, setExpandedLine] = useState(null);
  const [toast, setToast] = useState(null);

  useAutosave(project, { fileName: file.fileName, savedJson: file.savedJson, pristineJson: file.pristineJson });

  const ev = useMemo(() => {
    if (!project) return null;
    try {
      return evaluate(project, ctx);
    } catch (e) {
      console.error(e);
      return { error: e };
    }
  }, [project, ctx]);
  // S1 congelato (riferimento per il confronto in S2)
  const baseline = project?.baseline?.project || null;
  const evBase = useMemo(() => {
    if (!baseline) return null;
    try {
      return evaluate(baseline, contextFor(contexts, baseline));
    } catch (e) {
      console.error(e);
      return null;
    }
  }, [baseline]);
  const baseTotals = useMemo(() => (evBase ? new Map(evBase.lines.map((l) => [l.id, l.total])) : null), [evBase]);
  const checks = useMemo(() => (ev && !ev.error ? runChecks(ev) : []), [ev]);
  const unsaved = hasUnsavedWork(project, file.savedJson, file.pristineJson);

  useEffect(() => {
    if (!unsaved) return undefined;
    const onLeave = (e) => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', onLeave);
    return () => window.removeEventListener('beforeunload', onLeave);
  }, [unsaved]);

  const notify = (text, tone = 'ok') => {
    setToast({ text, tone });
    setTimeout(() => setToast(null), 3200);
  };

  /** Prima di sostituire il progetto: chiede conferma se c'è lavoro non salvato e ne tiene una copia di recupero. */
  const confirmReplace = () => {
    const current = project
      ? (unsaved ? { project, fileName: file.fileName, savedJson: file.savedJson, pristineJson: file.pristineJson } : null)
      : (autosave?.project && hasUnsavedWork(autosave.project, autosave.savedJson, autosave.pristineJson) ? autosave : null);
    if (!current) return true;
    const ok = confirm(
      `"${current.project.name}" ha modifiche non salvate nel CRM o su file.\n\n` +
      'Continuando verrà sostituito: ne tengo una copia di recupero nella schermata iniziale, ma solo finché non ne sostituisci un altro.\n\n' +
      'Continuare?'
    );
    if (!ok) return false;
    if (saveRecoveryCopy(current)) {
      setRecovery(loadRecoveryCopy());
      return true;
    }
    return confirm('Non riesco a tenere la copia di recupero: continuando le modifiche andranno perse. Continuare?');
  };

  const load = (p, fileInfo = {}, fromCrm = false) => {
    if (!fromCrm) projectReplaced(p);
    replace(p);
    setChatSession(value => value + 1);
    setFile({ handle: null, fileName: null, savedJson: null, lastModified: null, pristineJson: serialize(p), ...fileInfo });
    setWelcome(false);
    setView('overview');
    setSelPart(null);
    setLineFilter(null);
    setExpandedLine(null);
  };

  useEffect(() => onCrmLoad((p) => {
    // il CRM ha già deciso di aprire questo progetto: non si chiede niente, ma il lavoro non salvato resta recuperabile
    const incoming = validateProject(p);
    if (unsaved && serialize(incoming) !== serialize(project) && saveRecoveryCopy({ project, fileName: file.fileName, savedJson: file.savedJson, pristineJson: file.pristineJson })) setRecovery(loadRecoveryCopy());
    load(incoming, { savedJson: serialize(incoming) }, true);
  }));
  useEffect(() => { if (project) publishProject(project); }, [project]);
  const saveCrm = async () => {
    try { await saveToCrm(project); setFile((f) => ({ ...f, savedJson: serialize(project) })); notify('Progetto salvato nel CRM'); }
    catch (error) { notify(error.message, 'err'); }
  };

  const fetchJson = async (path) => validateProject(await (await fetch(path)).json());

  const go = useCallback((v, opts = {}) => {
    setView(v);
    if (opts.part) setSelPart(opts.part);
    if ('component' in opts) setLineFilter(opts.component);
    if (opts.line) {
      setExpandedLine(opts.line);
      setLineFilter(null);
      setTimeout(() => document.querySelector('.row-open')?.scrollIntoView({ block: 'center', behavior: 'smooth' }), 50);
    }
    document.querySelector('main')?.scrollTo(0, 0);
  }, []);

  const actions = {
    resume: () => {
      try {
        load(validateProject(autosave.project), { fileName: autosave.fileName, savedJson: autosave.savedJson, pristineJson: autosave.pristineJson ?? null });
      } catch (e) {
        alert('Non riesco a riprendere il progetto: ' + e.message);
      }
    },
    recover: () => {
      if (!confirmReplace()) return;
      const kept = recovery;
      try {
        load(validateProject(kept.project), { fileName: kept.fileName, savedJson: kept.savedJson, pristineJson: kept.pristineJson ?? null });
      } catch (e) {
        alert('Non riesco a recuperare il progetto: ' + e.message);
        return;
      }
      // confirmReplace può aver appena messo da parte il progetto sostituito: quella copia resta
      if (loadRecoveryCopy()?.keptAt === kept.keptAt) {
        clearRecoveryCopy();
        setRecovery(null);
      }
    },
    new: () => { if (confirmReplace()) load(emptyProject()); },
    template: async () => { if (confirmReplace()) load(projectFrom2026(await fetchJson('data/projects/meravijosa-2026-s1.json'))); },
    example: async (id) => {
      if (!confirmReplace()) return;
      const p = await fetchJson(`data/projects/${id}.json`);
      // l'esempio S2 2026 viene collegato alla stima S1 2026 per il confronto
      if (p.stage === 'S2' && !p.baseline && id === 'meravijosa-2026-s2') {
        p.baseline = { stage: 'S1', frozenAt: null, project: await fetchJson('data/projects/meravijosa-2026-s1.json') };
      }
      load(p);
    },
    open: async () => {
      try {
        const r = await openProjectFile();
        if (r && confirmReplace()) load(r.project, { handle: r.handle, fileName: r.fileName, savedJson: serialize(r.project), lastModified: r.lastModified ?? null });
      } catch (e) {
        alert('Non riesco ad aprire il file: ' + e.message);
      }
    },
    save: async (saveAs = false) => {
      if (!project) return;
      try {
        const r = await saveProjectFile(project, file.handle, {
          saveAs,
          knownModified: file.lastModified,
          confirmOverwrite: (when) => confirm(
            `Il file "${file.fileName}" è cambiato dopo che l'hai aperto (ultima modifica ${new Date(when).toLocaleString('it-IT', { dateStyle: 'short', timeStyle: 'short' })}): forse l'ha salvato qualcun altro o un'altra finestra.\n\n` +
            'OK = sovrascrivilo con la tua versione (le modifiche dell\'altro vanno perse).\n' +
            'Annulla = non salvare: con Ctrl+Maiusc+S puoi salvare in un altro file.'
          ),
        });
        if (r) {
          setFile((f) => ({ ...f, handle: r.handle, fileName: r.fileName, savedJson: serialize(project), lastModified: r.lastModified }));
          notify(`Salvato in ${r.fileName}`);
        }
      } catch (e) {
        alert('Salvataggio non riuscito: ' + e.message);
      }
    },
    toS2: () => {
      if (!project || project.stage === 'S2') return;
      const ok = confirm(
        "Congelare l'S1 e passare a S2?\n\n" +
        "• L'S1 così com'è adesso viene salvato dentro il progetto come riferimento per il confronto (non si modifica più).\n" +
        '• Il progetto diventa S2: stessi pezzi e voci, tutti segnati "stimata" finché non li aggiorni con i valori reali.\n' +
        "• Al prossimo Salva ti verrà chiesto un nuovo file, così il file dell'S1 resta com'è.\n\n" +
        'Puoi annullare con Ctrl+Z.'
      );
      if (!ok) return;
      const { s2 } = freezeToS2(project);
      update(() => s2);
      setChatSession(value => value + 1);
      projectReplaced(s2); // A shared S2 is a new record; keep the delivered S1 intact.
      setFile({ handle: null, fileName: null, savedJson: null, pristineJson: null, lastModified: null });
      go('compare');
      notify('S1 congelato: ora sei in S2');
    },
    linkBaseline: async () => {
      try {
        const r = await openProjectFile();
        if (!r) return;
        const p = r.project;
        if (p.stage !== 'S1' && !confirm(`Il file scelto è uno stage ${p.stage}, non un S1. Usarlo comunque come riferimento?`)) return;
        const frozen = structuredClone(p);
        delete frozen.baseline;
        update((d) => { d.baseline = { stage: 'S1', frozenAt: p.frozenAt || p.savedAt || null, project: frozen }; });
        notify(`S1 di riferimento: ${r.fileName}`);
      } catch (e) {
        alert('Non riesco ad aprire il file: ' + e.message);
      }
    },
    toRules2027: () => {
      update((p) => toRules2027(p));
      notify('Ora il progetto usa le regole 2027 (Ctrl+Z per tornare indietro)');
    },
    downloadBaseline: () => {
      if (!baseline) return;
      const name = `${baseline.name || 'progetto'} ${baseline.season || ''} S1 congelato.dollaroni.json`.replace(/[\\/:*?"<>|]+/g, '-');
      downloadBytes(new TextEncoder().encode(serialize(baseline)), name, 'application/json');
    },
  };

  useEffect(() => {
    const onKey = (e) => {
      const mod = e.ctrlKey || e.metaKey;
      if (!mod) return;
      const k = e.key.toLowerCase();
      if (k === 's' && e.shiftKey) { e.preventDefault(); saveCrm(); }
      else if (k === 's') { e.preventDefault(); actions.save(false); }
      else if (k === 'z' && !e.shiftKey && !isTextField(e.target)) { e.preventDefault(); undo(); }
      else if ((k === 'y' || (k === 'z' && e.shiftKey)) && !isTextField(e.target)) { e.preventDefault(); redo(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (welcome || !project) {
    // con un progetto aperto il salvataggio letto all'avvio è vecchio: per tornarci c'è "Torna al progetto aperto"
    return html`<${Welcome} autosave=${project ? null : autosave} recovery=${recovery} onRecover=${actions.recover} onResume=${actions.resume} onNew=${actions.new} onTemplate=${actions.template}
      onOpen=${actions.open} onExample=${actions.example} onClose=${project ? () => setWelcome(false) : null} />`;
  }

  const errors = checks.filter((c) => c.level === 'error').length;
  const warnings = checks.filter((c) => c.level === 'warning').length;
  const isS2 = project.stage === 'S2';
  const exportLabel = `Esporta ${project.stage}`;
  const sections = NAV.filter((section) => !section.needs || ctx.rules[section.needs]);
  const activeSection = sections.some((section) => section.id === view) ? view : 'overview';

  return html`<div class="app">
    <header class="topbar">
      <div class="brand">Dollaroni<span>SM$ · SFT</span></div>
      <div class="project-meta">
        <${TextInput} className="inp-dark" value=${project.name} width=${190} title="Nome della barca" onChange=${(v) => update((d) => { d.name = v; }, 'pname')} />
        <${NumInput} className="inp-dark" value=${project.season} width=${64} title="Stagione" onChange=${(v) => update((d) => { d.season = v; }, 'season')} />
        <span class=${`stage-badge ${isS2 ? 's2' : ''}`} title=${isS2 ? 'Stage S2: costruzione e consuntivo' : 'Stage S1: stima di progetto'}>${isS2 ? 'S2 · as-built' : 'S1 · stima'}</span>
        <button class=${`rules-badge ${ctx.rules.official.provisional ? 'provisional' : ''}`} onClick=${() => go('overview')}
          title=${`${ctx.rules.title}${ctx.rules.official.provisional ? ' · listino e Layup Calculator 2026 provvisori, in attesa di SuMoth Agora' : ''}`}>
          Regole ${ctx.rules.id}${ctx.rules.official.provisional ? html`<span class="rules-extra"> · listino provvisorio</span>` : ''}</button>
      </div>
      <div class="topbar-actions">
        <${Button} kind="ghost" icon="undo" title="Annulla (Ctrl+Z)" onClick=${undo} disabled=${!canUndo} />
        <${Button} kind="ghost" icon="redo" title="Ripeti (Ctrl+Y)" onClick=${redo} disabled=${!canRedo} />
        <span class="sep"></span>
        <${Button} kind="ghost" icon="file" title="Nuovo / apri" onClick=${() => setWelcome(true)}>Nuovo / apri</${Button}>
        <${Button} kind="ghost" icon="save" onClick=${() => actions.save(false)} title="Scarica il file progetto (Ctrl+S)">Salva file</${Button}>
        <span class="crm-save"><${Button} kind="primary" icon="save" onClick=${saveCrm} title="Salva nel CRM (Ctrl+Shift+S)">Salva nel CRM</${Button}></span>
        <${Button} kind="primary" icon="export" onClick=${() => go('export')}>${exportLabel}</${Button}>
      </div>
    </header>

    <div class="budgetbar">
      <div class="budget-main">
        <span class="budget-label">Budget</span>
        <strong class=${ev.error ? '' : ev.total > ev.budget ? 't-err' : ''}>${ev.error ? '–' : sm(ev.total)}</strong>
        <span class="muted budget-cap">/ ${ev.error ? '–' : sm(ev.budget)} SM$</span>
      </div>
      <div class="budget-bar">${!ev.error && html`<${Bar} ratio=${ev.total / ev.budget} tone=${ev.total > ev.budget ? 'err' : ev.margin < ev.budget * 0.02 ? 'warn' : 'accent'} height=${10} />`}</div>
      <div class="budget-side">
        ${!ev.error && html`<span class="budget-margin">Margine <strong class=${ev.margin < 0 ? 't-err' : ''}>${sm(ev.margin)}</strong><span class="budget-extra"> SM$ (${pct(Math.max(ev.margin, 0) / ev.budget)})</span></span>`}
        ${!ev.error && evBase && html`<span class="muted small">S1: ${sm(evBase.total)}</span>`}
        <button class="link-chip" onClick=${() => go('checks')}>
          ${errors ? html`<${Badge} tone="err">${errors} ${errors === 1 ? 'errore' : 'errori'}</${Badge}>` : html`<${Badge} tone="ok">nessun errore</${Badge}>`}
          ${warnings > 0 && html`<${Badge} tone="warn">${warnings}<span class="budget-extra"> da verificare</span></${Badge}>`}
        </button>
      </div>
    </div>

    <div class="body">
      <div class="section-tools">
        <div class="field section-picker">
          <label for="dollaroni-section">Sezione</label>
          <${Select} id="dollaroni-section" value=${activeSection} onChange=${go}
            options=${sections.map(({ id, label }) => ({ value: id, label: id === 'export' ? exportLabel : label }))} />
        </div>
        ${!ev.error && html`<${Assistant} key=${chatSession} ev=${ev} checks=${checks} ctx=${ctx} evBase=${evBase} go=${go} update=${update} undo=${undo} />`}
      </div>
      <nav class="sidebar" aria-label="Sezioni">
        ${sections.map((n) => html`<button class=${`nav-item ${activeSection === n.id ? 'active' : ''}`} aria-current=${activeSection === n.id ? 'page' : undefined} onClick=${() => go(n.id)}>
          <${Icon} name=${n.icon} /><span>${n.id === 'export' ? exportLabel : n.label}</span>
          ${n.id === 'parts' && html`<span class="nav-count">${project.parts.length}</span>`}
          ${n.id === 'lines' && html`<span class="nav-count">${project.lines.length}</span>`}
          ${n.id === 'performance' && ev.performance && html`<span class="nav-count">${fmtPoints(ev.performance.total)}</span>`}
          ${n.id === 'compare' && !isS2 && html`<span class="nav-count">S2</span>`}
          ${n.id === 'checks' && (errors + warnings > 0) && html`<span class=${`nav-count ${errors ? 'err' : 'warn'}`}>${errors + warnings}</span>`}
        </button>`)}
        <div class="sidebar-foot">
          <div class="small">${file.fileName ? html`<${Icon} name="file" size=${13} /> ${file.fileName}` : html`<span class="muted">Non ancora salvato su file</span>`}</div>
          <${VersionFoot} />
        </div>
      </nav>

      <main>
        ${ev.error
          ? html`<div class="notice notice-err">Errore nel calcolo del progetto: ${ev.error.message}. Puoi annullare l'ultima modifica con Ctrl+Z.</div>`
          : view === 'overview' || (view === 'performance' && !ev.performance) ? html`<${Overview} project=${project} ev=${ev} evBase=${evBase} ctx=${ctx} checks=${checks} go=${go} onToS2=${actions.toS2} onToRules2027=${actions.toRules2027} />`
          : view === 'parts' ? html`<${Parts} project=${project} ev=${ev} evBase=${evBase} ctx=${ctx} update=${update} selectedId=${selPart} onSelect=${setSelPart} />`
          : view === 'lines' ? html`<${Lines} project=${project} ev=${ev} ctx=${ctx} update=${update} baseTotals=${baseTotals} filter=${lineFilter} setFilter=${setLineFilter} expandedId=${expandedLine} setExpanded=${setExpandedLine} go=${go} />`
          : view === 'performance' ? html`<${Performance} project=${project} ev=${ev} ctx=${ctx} update=${update} go=${go} />`
          : view === 'compare' ? html`<${Compare} project=${project} ev=${ev} evBase=${evBase} onToS2=${actions.toS2} onLinkBaseline=${actions.linkBaseline} onDownloadBaseline=${actions.downloadBaseline} go=${go} />`
          : view === 'checks' ? html`<${Checks} checks=${checks} project=${project} go=${go} />`
          : view === 'catalog' ? html`<${Catalog} project=${project} ctx=${ctx} update=${update} />`
          : html`<${ExportView} project=${project} ev=${ev} evBase=${evBase} ctx=${ctx} checks=${checks} onToS2=${actions.toS2} go=${go} />`}
      </main>
    </div>
    ${toast && html`<div class=${`toast tone-${toast.tone}`}>${toast.text}</div>`}
  </div>`;
}

/** Versione in uso, novità e stato degli aggiornamenti (in fondo alla barra laterale). */
function VersionFoot() {
  const [u, setU] = useState(null);
  useEffect(() => subscribeUpdates(setU), []);
  if (!u?.installed) return null;
  const title = u.mode === 'local'
    ? (u.repository ? `Aggiornamenti da github.com/${u.repository}${u.checkedAt ? ` · ultimo controllo ${u.checkedAt.toLocaleTimeString('it-IT', { timeStyle: 'short' })}` : ''}${u.error ? ` · ${u.error}` : ''}` : 'Aggiornamenti automatici non ancora configurati (dollaroni.config.json)')
    : u.mode === 'crm' ? 'Gli aggiornamenti sono gestiti dal CRM' : '';
  return html`<div class="version-foot small muted" title=${title}>
    <span>Dollaroni ${u.installed.version}</span>
    <button class="link" onClick=${() => showNews(u.installed)}>Novità</button>
    ${u.available && u.latest && html`<span class="new">· ${u.latest.version} disponibile</span>`}
    ${u.mode === 'local' && u.repository && !u.available && html`<button class="link" onClick=${() => checkNow()}>Controlla</button>`}
  </div>`;
}

function isTextField(el) {
  return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.type !== 'checkbox';
}
