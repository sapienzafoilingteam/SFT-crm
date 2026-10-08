'use client';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { CalendarDays, Download, FileText, LockKeyhole, Search, Users } from 'lucide-react';
import { live, supabase } from '@/lib/repository';
import { TEAMS, base, type EventRecord } from '@/lib/model';
import { RECRUITING_STATES, demoRecruiting, interviewTitle, recruitingCsv, submissionTime, teamFromAnswer, type Candidate, type RecruitingData, type RecruitingInterview } from '@/lib/recruiting';
import { interviewFields } from '@/lib/recruiting-validation';
import { useWorkspace } from './provider';
import { CalendarSync } from './calendar-sync';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';

const emptyData: RecruitingData = { candidates: [], activities: [], interviews: [], last_sync: null, sync_error: null };
// Only invented demo records survive client navigation; real candidates never use this store.
let demoSession: RecruitingData | null = null;
function Field({ label, children, wide = false }: { label: string; children: ReactNode; wide?: boolean }) { return <label className={wide ? 'wide' : ''}><span className="field-label">{label}</span>{children}</label>; }
function timeLabel(event: EventRecord) { return `${event.date.split('-').reverse().join('/')} · ${event.start_time || 'Orario da definire'}${event.end_time ? '–' + event.end_time : ''}`; }
function stamp(value: string) { return new Date(value).toLocaleString('it-IT'); }

export function RecruitingView() {
  const { season, refresh, put, data: workspace } = useWorkspace();
  const [data, setData] = useState<RecruitingData>(emptyData);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState(''), [team, setTeam] = useState(''), [stage, setStage] = useState(''), [degree, setDegree] = useState(''), [year, setYear] = useState(''), [owner, setOwner] = useState('');
  const [archive, setArchive] = useState(false), [mode, setMode] = useState('lista');
  const [selected, setSelected] = useState<Candidate | null>(null);
  const [interview, setInterview] = useState<{ candidate: Candidate; existing?: RecruitingInterview } | null>(null);
  const [preview, setPreview] = useState<{ url: string; title: string } | null>(null);
  useEffect(() => { if (!live && unlocked) demoSession = data; }, [data, unlocked]);
  const loading = useRef(false), mounted = useRef(true);
  const generation = useRef(0);
  const clear = useCallback(() => { generation.current++; setUnlocked(false); setData(emptyData); setSelected(null); setInterview(null); setPreview(null); setPassword(''); }, []);
  const api = useCallback(async (path: string, method = 'GET', body?: object) => {
    const currentGeneration = generation.current;
    const session = await supabase?.auth.getSession();
    if (!session?.data.session) { clear(); throw new Error('Accedi al CRM per usare il recruiting.'); }
    const response = await fetch('/api/recruiting' + path, { method, cache: 'no-store', headers: { Authorization: `Bearer ${session.data.session.access_token}`, ...(body ? { 'Content-Type': 'application/json' } : {}) }, ...(body ? { body: JSON.stringify(body) } : {}) });
    if ([401, 423].includes(response.status)) clear();
    const result = await response.json();
    if (currentGeneration !== generation.current) throw new Error('Sessione recruiting terminata. Sblocca di nuovo la pagina.');
    if (!response.ok) throw new Error(result.error || 'Operazione non riuscita.');
    return result;
  }, [clear]);
  const load = useCallback(async (sync = false) => {
    if (!live || loading.current) return;
    loading.current = true;
    try {
      // Show the stored snapshot first even if Google is temporarily unavailable.
      const stored = await api('?season=' + season);
      if (!mounted.current) return;
      setData(stored); setUnlocked(true); setError('');
      if (sync) {
        try { await api('/sync', 'POST'); }
        catch (e) { if (mounted.current) setError(e instanceof Error ? e.message : 'Aggiornamento non riuscito.'); }
        const updated = await api('?season=' + season);
        if (mounted.current) setData(updated);
      }
    } catch (e) { if (mounted.current) setError(e instanceof Error ? e.message : 'Recruiting non disponibile.'); }
    finally { loading.current = false; }
  }, [api, season]);
  useEffect(() => { generation.current++; loading.current = false; setSelected(null); setInterview(null); setPreview(null); if (live) setData(emptyData); }, [season]);
  useEffect(() => {
    mounted.current = true;
    if (live) void load(true);
    const subscription = supabase?.auth.onAuthStateChange((event) => { if (event === 'SIGNED_OUT' || event === 'TOKEN_REFRESHED') clear(); }).data.subscription;
    return () => { mounted.current = false; subscription?.unsubscribe(); };
  }, [load, clear]);
  useEffect(() => {
    if (!live || !unlocked) return;
    const timer = setInterval(() => { if (document.visibilityState === 'visible') void load(true); }, 60000);
    const focus = () => void load(true);
    window.addEventListener('focus', focus);
    return () => { clearInterval(timer); window.removeEventListener('focus', focus); };
  }, [load, unlocked]);
  useEffect(() => { if (!preview) return; return () => URL.revokeObjectURL(preview.url); }, [preview]);
  async function run(task: () => Promise<void>) { setBusy(true); setError(''); try { await task(); } catch (e) { setError(e instanceof Error ? e.message : 'Operazione non riuscita.'); } finally { setBusy(false); } }
  async function change(candidate: Candidate, fields: Partial<Candidate>) {
    await run(async () => {
      if (live) { await api('/candidates', 'PATCH', { id: candidate.id, version: candidate.version, fields }); await load(); }
      else setData(d => ({ ...d, candidates: d.candidates.map(c => c.id === candidate.id ? { ...c, ...fields, version: c.version + 1 } : c), activities: [{ id: crypto.randomUUID(), candidate_id: candidate.id, actor: 'Demo', text: fields.stage ? 'Stato: ' + fields.stage : 'Scheda aggiornata', at: new Date().toISOString() }, ...d.activities] }));
      setSelected(null);
    });
  }
  const renderedData = live ? data : { ...data, interviews: data.interviews.map(i => ({ ...i, event: workspace.events.find(e => e.id === i.event_id) || i.event })) };
  const rows = data.candidates.filter(c => c.season_id === season && c.archived === archive)
    .filter(c => `${c.first_name} ${c.last_name} ${c.email} ${c.degree}`.toLowerCase().includes(query.toLowerCase()) && (!team || teamFromAnswer(c.requested_team) === team || c.assigned_team === team) && (!stage || c.stage === stage) && (!degree || c.degree === degree) && (!year || c.year === year) && (!owner || c.owner === owner))
    .sort((a, b) => submissionTime(b.submitted_at) - submissionTime(a.submitted_at));
  const current = data.candidates.filter(c => c.season_id === season && !c.archived);
  const emails = new Map<string, number>();
  current.forEach(c => emails.set(c.email.trim().toLowerCase(), (emails.get(c.email.trim().toLowerCase()) || 0) + 1));
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Rome' });
  const departments = TEAMS.map(t => ({ ...t, count: current.filter(c => teamFromAnswer(c.requested_team) === t.id || c.assigned_team === t.id).length }));
  function exportCsv() { const url = URL.createObjectURL(new Blob([recruitingCsv(rows)], { type: 'text/csv;charset=utf-8;' })); const a = document.createElement('a'); a.href = url; a.download = 'recruiting.csv'; a.click(); URL.revokeObjectURL(url); }
  async function attachment(candidate: Candidate, id: string, title: string) {
    await run(async () => {
      const session = await supabase!.auth.getSession();
      const response = await fetch(`/api/recruiting/attachment?candidate=${candidate.id}&file=${encodeURIComponent(id)}`, { headers: { Authorization: `Bearer ${session.data.session?.access_token || ''}` }, cache: 'no-store' });
      if (!response.ok) { if ([401,423].includes(response.status)) clear(); throw new Error((await response.json()).error); }
      if (mounted.current) setPreview({ url: URL.createObjectURL(await response.blob()), title });
    });
  }
  return <>
    <div className="page-heading"><div><span className="eyebrow">LE PERSONE, IL PROSSIMO TEAM</span><h1>Recruiting</h1><p>Candidature, selezione e colloqui della stagione.</p></div>{unlocked && <div className="heading-actions"><Button variant="outline" disabled={busy} onClick={exportCsv}><Download size={16} /> Esporta elenco</Button><Button variant="outline" onClick={() => void run(async () => { if (live) await api('/unlock', 'DELETE'); clear(); })}><LockKeyhole size={16} /> Blocca</Button></div>}</div>
    {error && <div className="recruiting-alert" role="alert">{error}<Button size="sm" variant="outline" disabled={busy} onClick={() => void load(true)}>Riprova</Button></div>}
    {!unlocked ? <div className="panel recruiting-gate"><LockKeyhole size={32} /><h2>Accesso al recruiting</h2><p className="muted">Le candidature e le valutazioni sono riservate ai selezionatori.</p>{live ? <form onSubmit={e => { e.preventDefault(); void run(async () => { await api('/unlock', 'POST', { password }); setPassword(''); await load(true); }); }}><Field label="Password recruiting"><input required type="password" autoComplete="off" maxLength={256} value={password} onChange={e => setPassword(e.target.value)} /></Field><Button disabled={busy || !password} type="submit">{busy ? 'Verifica…' : 'Sblocca recruiting'}</Button></form> : <><p className="muted">Modalità demo: esclusivamente dati fittizi. La password protegge i dati reali nella modalità condivisa.</p><Button onClick={() => { setData(demoSession || demoRecruiting()); setUnlocked(true); }}>Apri demo recruiting</Button></>}</div> : <>
      {live && <CalendarSync />}
      <div className="recruiting-stats">{[['Candidature',current.length],['Da contattare',current.filter(c => ['Nuova','Da contattare'].includes(c.stage)).length],['In valutazione',current.filter(c => c.stage === 'In valutazione').length],['Accettate',current.filter(c => c.stage === 'Accettata').length],['Azioni scadute',current.filter(c => c.due_date && c.due_date < today && !['Accettata','Non selezionata','Ritirata'].includes(c.stage)).length]].map(([label,count]) => <div className="panel" key={label}><span className="muted">{label}</span><strong>{count}</strong></div>)}</div>
      <div className="recruiting-departments">{departments.map(t => <button key={t.id} aria-pressed={team === t.id} onClick={() => setTeam(v => v === t.id ? '' : t.id)}><span className="team-dot" style={{ background: t.color }} />{t.short}<strong>{t.count}</strong></button>)}</div>
      <div className="toolbar recruiting-toolbar"><label className="search-box"><Search size={16} /><input aria-label="Cerca candidati" placeholder="Nome, email o corso…" value={query} onChange={e => setQuery(e.target.value)} /></label>
        <select aria-label="Reparto candidati" value={team} onChange={e => setTeam(e.target.value)}><option value="">Tutti i reparti</option>{TEAMS.map(t => <option key={t.id} value={t.id}>{t.short}</option>)}</select>
        <select aria-label="Stato candidati" value={stage} onChange={e => setStage(e.target.value)}><option value="">Tutti gli stati</option>{RECRUITING_STATES.map(s => <option key={s}>{s}</option>)}</select>
        {[['Corso di laurea',degree,setDegree,'degree'],['Anno di iscrizione',year,setYear,'year'],['Responsabile',owner,setOwner,'owner']].map(([label,value,set,key]) => <select key={String(key)} aria-label={String(label)} value={String(value)} onChange={e => (set as (s: string) => void)(e.target.value)}><option value="">{String(label)} · tutti</option>{[...new Set(current.map(c => c[key as 'degree'|'year'|'owner']).filter(Boolean))].sort().map(v => <option key={v}>{v}</option>)}</select>)}
        <select aria-label="Archivio candidati" value={archive ? 'archivio' : 'attive'} onChange={e => setArchive(e.target.value === 'archivio')}><option value="attive">Candidature attive</option><option value="archivio">Archivio</option></select>
        <div className="segmented"><button aria-pressed={mode === 'lista'} onClick={() => setMode('lista')}>Elenco</button><button aria-pressed={mode === 'kanban'} onClick={() => setMode('kanban')}>Kanban</button></div>
      </div>
      <p className="muted recruiting-sync-info">Candidature visualizzate: {rows.length} · {live ? data.last_sync ? 'Ultimo aggiornamento: ' + stamp(data.last_sync) : 'Primo aggiornamento in attesa' : 'Dati dimostrativi'}{data.sync_error && ' · ' + data.sync_error}</p>
      {mode === 'lista' ? <div className="panel recruiting-table"><table><thead><tr><th>Candidato</th><th>Reparto</th><th>Corso e anno</th><th>Stato</th><th>Responsabile / prossima azione</th><th><span className="sr-only">Apri</span></th></tr></thead><tbody>{rows.map(c => <tr key={c.id}><td><button className="recruiting-name" onClick={() => setSelected(c)}>{c.first_name} {c.last_name}</button><small>{c.email}</small>{c.source_missing && <small>Non più presente nel foglio</small>}{(emails.get(c.email.trim().toLowerCase()) || 0) > 1 && <small>Candidature multiple</small>}</td><td>{c.requested_team}<small>{c.assigned_team && 'Assegnato: ' + TEAMS.find(t => t.id === c.assigned_team)?.short}</small></td><td>{c.degree}<small>Anno {c.year || '—'}</small></td><td><span className="badge">{c.stage}</span></td><td>{c.owner || 'Da assegnare'}<small>{c.next_action}{c.due_date && ' · ' + c.due_date.split('-').reverse().join('/')}</small></td><td><Button variant="ghost" size="sm" onClick={() => setSelected(c)}>Apri scheda</Button></td></tr>)}</tbody></table>{!rows.length && <div className="empty"><Users size={24} /><p>Nessuna candidatura per questi filtri.</p></div>}</div> : <div className="recruiting-kanban">{RECRUITING_STATES.map(s => <section className="panel recruiting-column" key={s}><h2>{s}<span>{rows.filter(c => c.stage === s).length}</span></h2>{rows.filter(c => c.stage === s).map(c => <div className="recruiting-card" key={c.id}><button className="recruiting-name" onClick={() => setSelected(c)}>{c.first_name} {c.last_name}</button><p className="muted">{c.requested_team}</p><p>{c.owner || 'Responsabile da assegnare'}</p><small>{c.next_action}</small><select disabled={busy} aria-label={'Stato di ' + c.first_name + ' ' + c.last_name} value={c.stage} onChange={e => void change(c, { stage: e.target.value as Candidate['stage'] })}>{RECRUITING_STATES.map(st => <option key={st}>{st}</option>)}</select></div>)}</section>)}</div>}
      <Dialog open={Boolean(selected)} onOpenChange={v => { if (!v) setSelected(null); }}><DialogContent className="recruiting-detail">{selected && <CandidateDetail key={selected.id} candidate={selected} data={renderedData} busy={busy} error={error} save={fields => void change(selected, fields)} interview={existing => { setInterview({ candidate: selected, existing }); setSelected(null); }} attachment={(id,title) => void attachment(selected, id, title)} />}</DialogContent></Dialog>
      <Dialog open={Boolean(interview)} onOpenChange={v => { if (!v) setInterview(null); }}><DialogContent>{interview && <InterviewEditor key={interview.existing?.id || 'new'} candidate={interview.candidate} existing={interview.existing} busy={busy} externalError={error} save={values => void run(async () => {
        if (live) { await api('/interviews', 'POST', { candidate_id: interview.candidate.id, ...(interview.existing ? { id: interview.existing.id, version: interview.existing.version, event_version: interview.existing.event.version } : {}), ...values }); await refresh(); await load(); }
        else {
          const fields = interviewFields(values), event = { ...(interview.existing?.event || { ...base(season), type: 'Colloquio recruiting', checklist: [], sponsor_id: '', document_url: '', recap: '' }), ...fields, archived: fields.status === 'Annullato' } as EventRecord;
          if (!(await put('events', event))) throw new Error('Colloquio non salvato.');
          setData(d => ({ ...d, candidates: d.candidates.map(c => c.id === interview.candidate.id && ['Nuova','Da contattare','Colloquio da fissare'].includes(c.stage) ? { ...c, stage: 'Colloquio fissato', version: c.version + 1 } : c), interviews: [{ id: interview.existing?.id || crypto.randomUUID(), candidate_id: interview.candidate.id, event_id: event.id, event, notes: fields.notes, outcome: fields.outcome, version: (interview.existing?.version || 0) + 1 }, ...d.interviews.filter(i => i.id !== interview.existing?.id)] }));
        }
        setInterview(null);
      })} />}</DialogContent></Dialog>
      <Dialog open={Boolean(preview)} onOpenChange={v => { if (!v) setPreview(null); }}><DialogContent className="recruiting-detail"><DialogTitle className="dialog-title">{preview?.title || 'Documento'}</DialogTitle><DialogDescription className="muted">Documento riservato della candidatura.</DialogDescription>{preview && <><iframe className="recruiting-pdf" title={preview.title} src={preview.url} /><a className="recruiting-name" href={preview.url} download="documento.pdf">Scarica PDF</a></>}</DialogContent></Dialog>
    </>}
  </>;
}

function CandidateDetail({ candidate: c, data, busy, error, save, interview, attachment }: { candidate: Candidate; data: RecruitingData; busy: boolean; error: string; save: (fields: Partial<Candidate>) => void; interview: (existing?: RecruitingInterview) => void; attachment: (id: string,title: string) => void }) {
  const [draft, setDraft] = useState({ stage: c.stage, owner: c.owner, assigned_team: c.assigned_team, next_action: c.next_action, due_date: c.due_date, notes: c.notes, evaluation: c.evaluation });
  const set = (key: string, value: string) => setDraft(d => ({ ...d, [key]: value }));
  const interviews = data.interviews.filter(i => i.candidate_id === c.id);
  const groups = [...new Set(c.answers.filter(a => a.answer).map(a => a.group))];
  return <><DialogTitle className="dialog-title">{c.first_name} {c.last_name}</DialogTitle><DialogDescription className="muted">Candidatura del {c.submitted_at} · {c.requested_team}</DialogDescription>{error && <p className="recruiting-alert" role="alert">{error}</p>}
    <div className="recruiting-contact"><a href={'mailto:' + c.email}>{c.email}</a>{c.phone && <a href={'tel:' + c.phone.replace(/[^+\d]/g,'')}>{c.phone}</a>}</div>
    <div className="recruiting-documents">{c.attachments.map(a => <Button key={a.id} disabled={busy} variant="outline" onClick={() => attachment(a.id,a.kind)}><FileText size={16} />{a.kind}</Button>)}{!c.attachments.length && <p className="muted">Nessun allegato disponibile.</p>}</div>
    {c.source_missing && <p className="recruiting-alert">La risposta non è più presente nel foglio. Scheda e storico sono conservati.</p>}
    <h2 className="recruiting-section-title">Risposte del modulo</h2>
    {groups.map(group => <details className="recruiting-answers" key={group} open={group === 'Dati e percorso'}><summary>{group}</summary>{c.answers.filter(a => a.group === group && a.answer).map(a => <div key={a.column}><h3>{a.question.split('//')[0].trim()}</h3><p>{[10,11].includes(a.column) ? 'Allegato disponibile nella sezione documenti.' : a.answer}</p></div>)}</details>)}
    <h2 className="recruiting-section-title">Selezione</h2>
    <form onSubmit={e => { e.preventDefault(); save(draft); }}><div className="form-grid">
      <Field label="Stato"><select value={draft.stage} onChange={e => set('stage',e.target.value)}>{RECRUITING_STATES.map(s => <option key={s}>{s}</option>)}</select></Field>
      <Field label="Responsabile"><input maxLength={500} value={draft.owner} onChange={e => set('owner',e.target.value)} placeholder="Nome del selezionatore" /></Field>
      <Field label="Reparto assegnato"><select value={draft.assigned_team} onChange={e => set('assigned_team',e.target.value)}><option value="">Da assegnare</option>{TEAMS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}</select></Field>
      <Field label="Scadenza prossima azione"><input type="date" value={draft.due_date} onChange={e => set('due_date',e.target.value)} /></Field>
      <Field label="Prossima azione" wide><input maxLength={500} value={draft.next_action} onChange={e => set('next_action',e.target.value)} /></Field>
      <Field label="Note interne" wide><textarea rows={4} maxLength={12000} value={draft.notes} onChange={e => set('notes',e.target.value)} /></Field>
      <Field label="Valutazione dei selezionatori" wide><textarea rows={4} maxLength={12000} value={draft.evaluation} onChange={e => set('evaluation',e.target.value)} /></Field>
    </div><div className="dialog-footer"><Button type="button" disabled={busy} variant="outline" onClick={() => save({ archived: !c.archived })}>{c.archived ? 'Ripristina candidatura' : 'Archivia candidatura'}</Button><Button type="submit" disabled={busy}>Salva selezione</Button></div></form>
    <div className="recruiting-section-heading"><h2>Colloqui</h2><Button disabled={busy || c.archived} onClick={() => interview()}><CalendarDays size={16} /> Fissa colloquio</Button></div>
    {interviews.map(i => <button className="recruiting-interview" key={i.id} onClick={() => interview(i)}><strong>{timeLabel(i.event)}</strong><span>{i.event.archived ? 'Annullato' : i.event.status} · {i.event.location || 'Luogo da definire'}</span><span>{i.event.description}</span>{i.outcome && <small>Esito: {i.outcome}</small>}</button>)}
    {!interviews.length && <p className="muted">Nessun colloquio fissato.</p>}
    <h2 className="recruiting-section-title">Storico</h2>{data.activities.filter(a => a.candidate_id === c.id).sort((a,b) => b.at.localeCompare(a.at)).map(a => <div className="recruiting-activity" key={a.id}><p>{a.text}</p><small>{stamp(a.at)} · {a.actor}</small></div>)}
  </>;
}
function InterviewEditor({ candidate, existing, busy, externalError, save }: { candidate: Candidate; existing?: RecruitingInterview; busy: boolean; externalError: string; save: (values: Record<string,string>) => void }) {
  const [values, setValues] = useState<Record<string,string>>({ team_id: existing?.event.team_id || candidate.assigned_team || teamFromAnswer(candidate.requested_team), date: existing?.event.date || new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Rome' }), start_time: existing?.event.start_time || '10:00', end_time: existing?.event.end_time || '10:30', location: existing?.event.location || '', interviewers: existing?.event.description.replace(/^Selezionatori: /,'') || '', status: existing?.event.archived ? 'Annullato' : existing?.event.status || 'Confermato', notes: existing?.notes || '', outcome: existing?.outcome || '' });
  const [error, setError] = useState('');
  const set = (key: string, value: string) => setValues(v => ({ ...v, [key]: value }));
  return <><DialogTitle className="dialog-title">{existing ? 'Modifica colloquio' : 'Fissa colloquio'}</DialogTitle><DialogDescription className="muted">Nell’agenda condivisa: {interviewTitle(values.team_id)}. Identità e valutazione restano nel recruiting.</DialogDescription><form onSubmit={e => { e.preventDefault(); try { interviewFields(values); setError(''); save(values); } catch (e) { setError(e instanceof Error ? e.message : 'Controlla i campi.'); } }}><div className="form-grid">
    <Field label="Reparto"><select required value={values.team_id} onChange={e => set('team_id',e.target.value)}><option value="">Seleziona reparto</option>{TEAMS.map(t => <option key={t.id} value={t.id}>{t.short}</option>)}</select></Field>
    <Field label="Data"><input required type="date" value={values.date} onChange={e => set('date',e.target.value)} /></Field>
    <Field label="Ora inizio · Europe/Rome"><input required type="time" value={values.start_time} onChange={e => set('start_time',e.target.value)} /></Field>
    <Field label="Ora fine · Europe/Rome"><input required type="time" value={values.end_time} onChange={e => set('end_time',e.target.value)} /></Field>
    <Field label="Selezionatori · visibili nell’agenda" wide><input maxLength={500} value={values.interviewers} onChange={e => set('interviewers',e.target.value)} /></Field>
    <Field label="Luogo o link della call · visibile nell’agenda" wide><input maxLength={1000} value={values.location} onChange={e => set('location',e.target.value)} /></Field>
    <Field label="Stato"><select value={values.status} onChange={e => set('status',e.target.value)}>{['Confermato','Concluso','Annullato'].map(s => <option key={s}>{s}</option>)}</select></Field>
    <Field label="Esito riservato"><input maxLength={2000} value={values.outcome} onChange={e => set('outcome',e.target.value)} /></Field>
    <Field label="Appunti riservati" wide><textarea rows={4} maxLength={12000} value={values.notes} onChange={e => set('notes',e.target.value)} /></Field>
    </div>{(error || externalError) && <p role="alert" className="recruiting-alert">{error || externalError}</p>}<div className="dialog-footer"><Button disabled={busy} type="submit">Salva colloquio e agenda</Button></div></form></>;
}
