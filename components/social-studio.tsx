'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Copy, FolderOpen, ImageIcon, Palette, Plus, LayoutTemplate, Upload, ArrowUpRight, RefreshCw, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Heading, Empty, Toolbar } from './views/shared';
import { useWorkspace } from './provider';
import { createProject, cloneProject, newElement, TEMPLATE_FAMILIES, type SocialProject, type SocialAsset } from '@/lib/social-model';
import { getAccess, getProject, listProjects, listAssets, saveProject, deleteProject, listTemplates, saveTemplate, type SocialAccess } from '@/lib/social-repository';
import { importStudioFile, importLegacy } from '@/lib/social-import';
import { live, supabase } from '@/lib/repository';
import { SEASONS } from '@/lib/model';
import { imagePlacement } from '@/lib/social-export';
import { SocialMedia, SocialAssetImage } from './social-media';
import { SocialAccessPanel } from './social-access';
const Editor = dynamic(() => import('./social-editor').then(m => m.SocialEditor), { ssr: false, loading: () => <div className="empty" role="status">Preparazione dell’editor…</div> });
const base = '/team/management/social';
const tabs = [{ id: '', label: 'Progetti', icon: FolderOpen }, { id: 'media', label: 'Media', icon: ImageIcon }, { id: 'brand', label: 'Brand', icon: Palette }, { id: 'template', label: 'Template', icon: LayoutTemplate }];
function ProjectCover({ project, assets }: { project: SocialProject; assets: SocialAsset[] }) {
  const slide = project.slides[0];
  return <div className="social-cover" style={{ aspectRatio: `${project.width}/${project.height}`, background: slide.background }} aria-label={`Copertina di ${project.title}`}>
    {slide.elements.filter(e => !e.hidden).map(e => {
      const asset = assets.find(a => a.id === e.assetId);
      const placement = asset ? imagePlacement(e, asset.width || e.width, asset.height || e.height) : null;
      const crop = placement?.crop;
      const rect = crop && asset ? { x: -crop.x * e.width / crop.width, y: -crop.y * e.height / crop.height, width: asset.width * e.width / crop.width, height: asset.height * e.height / crop.height } : placement;
      return <div key={e.id} className="social-cover-element" style={{ left: `${e.x / project.width * 100}%`, top: `${e.y / project.height * 100}%`, width: `${e.width / project.width * 100}%`, height: `${e.height / project.height * 100}%`, transform: `rotate(${e.rotation}deg)`, opacity: e.opacity, background: e.type === 'rect' ? e.fill : undefined, color: e.fill, fontFamily: e.fontFamily, fontWeight: e.fontStyle?.includes('bold') ? 700 : 400, fontSize: `${(e.fontSize || 40) / project.width * 100}cqw`, textAlign: e.align, lineHeight: e.lineHeight || 1, overflow: 'hidden' }}>{e.type === 'text' ? e.text : e.type === 'image' && asset && rect ? <div style={{ position: 'absolute', left: `${rect.x / e.width * 100}%`, top: `${rect.y / e.height * 100}%`, width: `${rect.width / e.width * 100}%`, height: `${rect.height / e.height * 100}%` }}><SocialAssetImage asset={asset} /></div> : null}</div>;
    })}
  </div>;
}
export function SocialStudio({ path }: { path: string[] }) {
  const { season, data, notice } = useWorkspace(), router = useRouter();
  const [access, setAccess] = useState<SocialAccess | null>(null), [loading, setLoading] = useState(true), [error, setError] = useState(''), [retry, setRetry] = useState(0);
  const [projects, setProjects] = useState<SocialProject[]>([]), [assets, setAssets] = useState<SocialAsset[]>([]), [templates, setTemplates] = useState<SocialProject[]>([]), [opened, setOpened] = useState<SocialProject | null>(null);
  const [query, setQuery] = useState(''), [createOpen, setCreateOpen] = useState(false), [title, setTitle] = useState(''), [family, setFamily] = useState('blank'), [height, setHeight] = useState(1350), [sponsor, setSponsor] = useState(''), [event, setEvent] = useState('');
  const [busy, setBusy] = useState(false), [progress, setProgress] = useState(''), [removing, setRemoving] = useState<SocialProject | null>(null);
  const importer = useRef<HTMLInputElement>(null);
  const section = path[0] || '', projectId = section === 'progetti' ? path[1] : undefined;
  const generation = useRef(0);
  const refresh = useCallback(async () => {
    const stamp = generation.current;
    const [p, a, t] = await Promise.all([listProjects(season), listAssets(), listTemplates()]);
    if (stamp !== generation.current) return;
    setProjects(p); setAssets(a); setTemplates(t);
  }, [season]);
  useEffect(() => {
    let active = true; generation.current++; setLoading(true); setError(''); setOpened(null);
    void (async () => {
      const permission = await getAccess(); if (!active) return; setAccess(permission);
      if (!permission.allowed) return;
      await refresh();
      if (projectId) { const project = await getProject(projectId); if (active) { if (!project) throw new Error('Progetto non trovato o accesso non consentito.'); setOpened(project); } }
    })().catch(e => { if (active) setError(e.message); }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; generation.current++; };
  }, [season, projectId, refresh, retry]);
  async function persistNew(project: SocialProject) {
    project.author = access?.displayName || project.author;
    const saved = await saveProject(project, 0); setCreateOpen(false); router.push(`${base}/progetti/${saved.id}`);
  }
  async function create(e: React.FormEvent) {
    e.preventDefault(); if (busy) return; setBusy(true); setError('');
    try { const project = createProject(title, season, family, height); project.sponsorId = sponsor; project.eventId = event;
      if (family === 'sponsor' && sponsor) { const logo = assets.find(a => a.sponsorId === sponsor); if (logo) project.slides[0].elements.push(newElement('image', { assetId: logo.id, x: 80, y: 800, width: 520, height: 250, fit: 'contain' })); }
      await persistNew(project); }
    catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  }
  async function importFile(file?: File) {
    if (!file) return; setBusy(true); setError(''); setProgress('Lettura del progetto…');
    try { await persistNew(await importStudioFile(file, season, setProgress)); }
    catch (e) { setError((e as Error).message); } finally { setBusy(false); setProgress(''); }
  }
  async function sftDay() {
    setBusy(true); setError(''); setProgress('Preparazione dell’esempio SFT Day…');
    try {
      let seed: unknown;
      if (live) { const session = await supabase?.auth.getSession(); const response = await fetch('/api/social/seed', { headers: { Authorization: `Bearer ${session?.data.session?.access_token || ''}` } }); if (!response.ok) throw new Error((await response.json()).error); seed = await response.json(); }
      else { const response = await fetch('/api/social/demo-seed'); if (!response.ok) throw new Error('Esempio non disponibile in questa modalità. Importa il file editor.html di SFT Day.'); seed = await response.json(); }
      await persistNew(await importLegacy(seed, season, setProgress));
    } catch (e) { setError((e as Error).message); } finally { setBusy(false); setProgress(''); }
  }
  const action = async (fn: () => Promise<unknown>) => { setBusy(true); setError(''); try { await fn(); await refresh(); } catch (e) { setError((e as Error).message); } finally { setBusy(false); } };
  if (loading) return <div className="empty" role="status">Caricamento di Social Studio…</div>;
  if (!access?.allowed) return <><Heading eyebrow="MANAGEMENT E SPONSOR" title="SFT Social Studio" description="Lo spazio di lavoro per i contenuti del team." /><div className="panel"><h2>Accesso Social da abilitare</h2><p>{error || 'Chiedi a un amministratore di abilitare Social sul tuo account CRM.'}</p><Button variant="outline" onClick={() => setRetry(n => n + 1)}>Riprova</Button></div></>;
  if (projectId && opened) return <Editor key={opened.id} project={opened} onBack={() => router.push(base)} onSaved={p => setProjects(all => all.map(item => item.id === p.id ? p : item))} />;
  return <section className="social-studio">
    <Heading eyebrow="MANAGEMENT E SPONSOR" title="SFT Social Studio" description="Le idee diventano storie. Uno spazio condiviso per progetti, immagini e identità del team.">{section === '' && <><Button variant="outline" disabled={busy} onClick={() => importer.current?.click()}><Upload size={16} />Importa progetto</Button><Button disabled={busy} onClick={() => { setTitle(''); setCreateOpen(true); }}><Plus size={16} />Nuovo progetto</Button></>}</Heading>
    <nav className="social-tabs" aria-label="Social Studio">{tabs.map(tab => <Link key={tab.id} href={`${base}${tab.id ? '/' + tab.id : ''}`} aria-current={section === tab.id ? 'page' : undefined}><tab.icon size={17} />{tab.label}</Link>)}</nav>
    {!live && <p className="social-mode">Modalità demo · progetti e media sono conservati in questo browser.</p>}
    {error && <div className="social-error" role="alert"><p>{error}</p><Button variant="outline" onClick={() => setRetry(n => n + 1)}><RefreshCw size={16} />Riprova</Button></div>}
    {busy && <p role="status">{progress || 'Salvataggio…'}</p>}
    <input ref={importer} hidden type="file" accept=".json,.zip,.html" onChange={e => { void importFile(e.target.files?.[0]); e.target.value = ''; }} />
    {section === '' && <><div className="social-intro"><div><span className="eyebrow">IL PROSSIMO CONTENUTO PARTE QUI</span><h2>Una storia alla volta.</h2><p>Parti da un template del team o dai forma a una pagina vuota.</p></div><Button variant="outline" disabled={busy} onClick={() => router.push(`${base}/template`)}>Sfoglia i template<ArrowUpRight size={16} /></Button></div><Toolbar search={query} setSearch={setQuery} /><div className="social-section-heading"><h2>I progetti</h2><span className="muted">{SEASONS.find(s => s.id === season)?.name} · {projects.length} progetti</span></div>{projects.length === 0 ? <Empty text="Il primo progetto aspetta la tua idea." action={<Button onClick={() => setCreateOpen(true)}>Crea un progetto</Button>} /> : <div className="social-project-grid">{projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase())).map(p => <article className="social-project-card" key={p.id}><Link href={`${base}/progetti/${p.id}`} className="social-project-cover"><ProjectCover project={p} assets={assets} /></Link><div className="social-project-info"><Link href={`${base}/progetti/${p.id}`}><h3>{p.title}</h3></Link><p>{p.slides.length} slide · {p.width} × {p.height}</p><small>{p.author} · {new Date(p.updatedAt).toLocaleString('it-IT')}</small><div className="social-card-actions"><Button variant="ghost" size="sm" disabled={busy} onClick={() => void action(() => saveProject(cloneProject(p), 0))}><Copy size={14} />Duplica</Button><Button variant="ghost" size="sm" disabled={busy} onClick={() => void action(() => saveTemplate(p))}><LayoutTemplate size={14} />Salva template</Button><Button variant="ghost" size="icon" disabled={busy} aria-label={`Elimina ${p.title}`} onClick={() => setRemoving(p)}><Trash2 size={15} /></Button></div></div></article>)}</div>}</>}
    {section === 'media' && <SocialMedia assets={assets} projects={projects} admin={access.admin} onRefresh={refresh} />}
    {section === 'brand' && <><div className="social-brand-header"><div><h2>L’identità del team</h2><p>Marchi SFT e SuMoth, collaborazioni e sponsor. Carattere Kelson.</p><p className="muted">{access.admin ? 'Puoi aggiungere loghi e collegarli alle aziende del CRM.' : 'La gestione della libreria è riservata agli amministratori.'}</p></div><div className="social-swatches">{['#812435', '#FFFFFF', '#F2C572'].map(c => <span key={c}><i style={{ background: c }} />{c}</span>)}</div></div><SocialMedia assets={assets} projects={projects} admin={access.admin} brandOnly onRefresh={refresh} />{access.admin && <SocialAccessPanel />}</>}
    {section === 'template' && <><div className="social-section-heading"><h2>Le famiglie del team</h2><p className="muted">Ogni template viene copiato nel tuo progetto.</p></div><div className="social-project-grid">{TEMPLATE_FAMILIES.map(f => <article key={f.id} className="social-template-card"><ProjectCover project={createProject(f.title, season, f.id)} assets={assets} /><div className="social-project-info"><h3>{f.title}</h3><p>{f.description}</p><Button disabled={busy} variant="outline" onClick={() => { setFamily(f.id); setTitle(f.id === 'blank' ? '' : f.title); setCreateOpen(true); }}>Usa template</Button></div></article>)}<article className="social-template-card social-sft-day"><div className="social-seed-cover"><span>SFT</span><strong>DAY.</strong><small>08 NOV 2026 · RECAP</small></div><div className="social-project-info"><h3>SFT Day · progetto originale</h3><p>Le cinque slide già realizzate, con foto e testi modificabili.</p><Button disabled={busy} variant="outline" onClick={() => void sftDay()}>Apri SFT Day</Button></div></article></div>{templates.length > 0 && <><div className="social-section-heading"><h2>I tuoi template</h2></div><div className="social-project-grid">{templates.map(t => <article key={t.id} className="social-template-card"><ProjectCover project={t} assets={assets} /><div className="social-project-info"><h3>{t.title}</h3><Button variant="outline" disabled={busy} onClick={() => void action(async () => { const p = cloneProject(t); p.template = false; p.seasonId = season; await persistNew(p); })}>Usa template</Button></div></article>)}</div></>}</>}
    {!['', 'media', 'brand', 'template'].includes(section) && <Empty text="Pagina Social non trovata." action={<Button asChild><Link href={base}>Torna ai progetti</Link></Button>} />}
    <Dialog open={createOpen} onOpenChange={open => { if (!busy) setCreateOpen(open); }}><DialogContent><DialogTitle className="dialog-title">Nuovo progetto Social</DialogTitle><DialogDescription className="muted">Scegli il formato e una base da personalizzare.</DialogDescription><form onSubmit={create} className="social-create-form"><label className="field">Titolo<input autoFocus required maxLength={200} value={title} onChange={e => setTitle(e.target.value)} placeholder="La nostra prossima storia" /></label><label className="field">Template<select value={family} onChange={e => setFamily(e.target.value)}>{TEMPLATE_FAMILIES.map(f => <option key={f.id} value={f.id}>{f.title}</option>)}</select></label><label className="field">Formato<select value={height} onChange={e => setHeight(Number(e.target.value))}><option value={1350}>1080 × 1350 · verticale</option><option value={1080}>1080 × 1080 · quadrato</option></select></label><label className="field">Sponsor<select value={sponsor} onChange={e => setSponsor(e.target.value)}><option value="">Nessuno sponsor</option>{data.sponsors.filter(s => s.season_id === season && !s.archived).map(s => <option value={s.id} key={s.id}>{s.title}</option>)}</select></label><label className="field">Evento<select value={event} onChange={e => setEvent(e.target.value)}><option value="">Nessun evento</option>{data.events.filter(s => s.season_id === season && !s.archived).map(s => <option value={s.id} key={s.id}>{s.title}</option>)}</select></label>{error && <p role="alert">{error}</p>}<div className="dialog-footer"><Button variant="outline" type="button" disabled={busy} onClick={() => setCreateOpen(false)}>Annulla</Button><Button type="submit" disabled={busy || !title.trim()}>Crea progetto</Button></div></form></DialogContent></Dialog>
    <Dialog open={!!removing} onOpenChange={open => { if (!open) setRemoving(null); }}><DialogContent><DialogTitle className="dialog-title">Eliminare il progetto?</DialogTitle><DialogDescription>Il progetto “{removing?.title}” verrà eliminato. Le immagini restano nella libreria.</DialogDescription><div className="dialog-footer"><Button variant="outline" onClick={() => setRemoving(null)}>Annulla</Button><Button variant="destructive" disabled={busy} onClick={() => { if (removing) void action(async () => { await deleteProject(removing.id, removing.version); setRemoving(null); }); }}>Elimina progetto</Button></div></DialogContent></Dialog>
  </section>;
}
