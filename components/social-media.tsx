'use client';
import { useEffect, useMemo, useRef, useState, type InputHTMLAttributes } from 'react';
import { FolderOpen, Upload, Star, RefreshCw, Cloud, Search, X, Check, ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Empty, Toolbar } from './views/shared';
import { assetUrl, importAsset, saveAsset } from '@/lib/social-repository';
import type { SocialAsset, SocialProject } from '@/lib/social-model';
import { sharedDriveClient, driveStatus } from '@/lib/drive-browser';
import { DRIVE_FOLDER, type DriveFile } from '@/lib/google-drive';
import { live } from '@/lib/repository';
import { useWorkspace } from './provider';

export function SocialAssetImage({ asset, className = '' }: { asset: SocialAsset; className?: string }) {
  const [url, setUrl] = useState(''), [visible, setVisible] = useState(false);
  const holder = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!holder.current) return;
    const observer = new IntersectionObserver(entries => { if (entries.some(entry => entry.isIntersecting)) { setVisible(true); observer.disconnect(); } }, { rootMargin: '240px' });
    observer.observe(holder.current); return () => observer.disconnect();
  }, []);
  useEffect(() => { if (!visible) return; let active = true; assetUrl(asset, true).then(value => { if (active) setUrl(value); }).catch(() => {}); return () => { active = false; }; }, [asset, visible]);
  return <div ref={holder} className={className} style={{ width: '100%', height: '100%' }}>{url ? <img src={url} alt={asset.name} loading="lazy" /> : <span aria-label={asset.name}><ImageIcon /></span>}</div>;
}

type Candidate = { file: File; selected: boolean; status: 'pending' | 'uploading' | 'done' | 'error'; error?: string };
function LocalPreview({ file }: { file: File }) {
  const [url, setUrl] = useState('');
  useEffect(() => { const u = URL.createObjectURL(file); setUrl(u); return () => URL.revokeObjectURL(u); }, [file]);
  return file.type.startsWith('image/') && url ? <img src={url} alt="" loading="lazy" /> : <ImageIcon aria-hidden="true" />;
}
export function SocialMedia({ assets, projects, admin, brandOnly = false, onRefresh }: { assets: SocialAsset[]; projects: SocialProject[]; admin: boolean; brandOnly?: boolean; onRefresh: () => Promise<void> }) {
  const { notice, data, season } = useWorkspace();
  const [query, setQuery] = useState(''), [folder, setFolder] = useState(''), [kind, setKind] = useState(''), [orientation, setOrientation] = useState(''), [favorites, setFavorites] = useState(false);
  const [shownCount, setShownCount] = useState(60);
  useEffect(() => setShownCount(60), [query, folder, kind, orientation, favorites]);
  const [selected, setSelected] = useState<SocialAsset | null>(null), [fullUrl, setFullUrl] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>([]), [uploading, setUploading] = useState(false), [collection, setCollection] = useState('SFT');
  const [driveOpen, setDriveOpen] = useState(false), [driveFiles, setDriveFiles] = useState<DriveFile[]>([]), [driveTrail, setDriveTrail] = useState<{ id: string; name: string }[]>([]), [driveBusy, setDriveBusy] = useState(false), [driveError, setDriveError] = useState('');
  const [drivePage, setDrivePage] = useState(''), [driveSelected, setDriveSelected] = useState<string[]>([]), [driveImporting, setDriveImporting] = useState(false), [driveProgress, setDriveProgress] = useState('');
  const [links, setLinks] = useState<{ id: string; name: string }[]>([]), [linkError, setLinkError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null), folderRef = useRef<HTMLInputElement>(null);
  const editable = !brandOnly || admin;
  async function refreshLibrary() { try { await onRefresh(); } catch (error) { notice((error as Error).message); } }
  useEffect(() => { let active = true; setFullUrl(''); if (selected) assetUrl(selected).then(url => { if (active) setFullUrl(url); }).catch(error => notice(error.message)); return () => { active = false; }; }, [selected, notice]);
  useEffect(() => {
    let active = true;
    import('@/lib/social-folders').then(m => m.listSocialFolders()).then(value => { if (active) setLinks(value); }).catch(error => { if (active) setLinkError(error.message); });
    return () => { active = false; };
  }, []);
  const available = assets.filter(a => brandOnly ? a.source === 'brand' : true);
  const folders = [...new Set(available.map(a => a.folder).filter(Boolean))].sort();
  const shown = useMemo(() => available.filter(a => (!folder || a.folder === folder || a.folder.startsWith(folder + '/')) && a.name.toLowerCase().includes(query.toLowerCase()) && (!favorites || a.favorite) && (!kind || (kind === 'logo' ? a.source === 'brand' || a.mime === 'image/svg+xml' : a.mime.includes(kind))) && (!orientation || (orientation === 'portrait' ? a.height > a.width : orientation === 'landscape' ? a.width > a.height : a.width === a.height))), [available, folder, query, favorites, kind, orientation]);
  function choose(files: FileList | null) {
    if (!files) return;
    setCandidates(Array.from(files).map(file => ({ file, selected: /image\/(jpeg|png|webp|svg\+xml)/.test(file.type), status: 'pending' })));
  }
  async function upload() {
    if (!editable) return;
    setUploading(true);
    for (let i = 0; i < candidates.length; i++) {
      const item = candidates[i]; if (!item.selected || item.status === 'done') continue;
      setCandidates(all => all.map((v, j) => j === i ? { ...v, status: 'uploading', error: '' } : v));
      try {
        const path = item.file.webkitRelativePath?.split('/').slice(0, -1).join('/') || 'Importati';
        const asset = await importAsset(item.file, brandOnly ? collection : path, brandOnly ? 'brand' : 'local');
        if (brandOnly) await saveAsset({ ...asset, source: 'brand', collection, seasonId: season });
        setCandidates(all => all.map((v, j) => j === i ? { ...v, status: 'done' } : v));
      } catch (error) { setCandidates(all => all.map((v, j) => j === i ? { ...v, status: 'error', error: (error as Error).message } : v)); }
    }
    setUploading(false); await refreshLibrary();
  }
  async function browse(trail: { id: string; name: string }[], append = false) {
    setDriveOpen(true); setDriveBusy(true); setDriveError(''); setDriveSelected([]);
    try {
      let next = trail;
      if (!next.length) { const status = await driveStatus('management'); if (!status.connected) throw new Error('Google Drive non è configurato.'); next = [{ id: status.folderId || 'root', name: 'Drive del team' }]; }
      const result = await sharedDriveClient().list(next[next.length - 1].id, '', append ? drivePage : '');
      setDriveTrail(next); setDriveFiles(previous => append ? [...previous, ...result.files] : result.files); setDrivePage(result.nextPageToken || '');
    } catch (error) { setDriveError((error as Error).message); }
    finally { setDriveBusy(false); }
  }
  async function importDrive() {
    setDriveImporting(true); setDriveError('');
    for (const [index, id] of driveSelected.entries()) {
      const file = driveFiles.find(f => f.id === id)!;
      setDriveProgress(`Copia privata: ${index + 1} / ${driveSelected.length} · ${file.name}`);
      try { const result = await sharedDriveClient().download(file); await importAsset(new File([result.blob], file.name, { type: file.mimeType }), driveTrail.map(f => f.name).join('/'), 'drive', file.id); }
      catch (error) { setDriveError(`${file.name}: ${(error as Error).message}`); setDriveImporting(false); await refreshLibrary(); return; }
    }
    await refreshLibrary(); setDriveImporting(false); setDriveProgress(''); setDriveSelected([]); notice('Immagini copiate nella libreria privata.');
  }
  async function connectFolder() {
    const current = driveTrail.at(-1); if (!current) return;
    try { const { saveSocialFolder } = await import('@/lib/social-folders'); const next = await saveSocialFolder(current); setLinks(next); notice('Cartella collegata. Usa Aggiorna per vedere i nuovi file.'); }
    catch (error) { setDriveError((error as Error).message); }
  }
  return <>
    <div className="social-media-actions">
      {editable && <><Button variant="outline" onClick={() => fileRef.current?.click()}><Upload size={16} />Importa file</Button><Button variant="outline" onClick={() => folderRef.current?.click()}><FolderOpen size={16} />Importa cartella</Button></>}
      {!brandOnly && <Button variant="outline" onClick={() => { void browse([]); }}><Cloud size={16} />Collega cartella Drive</Button>}
      <input ref={fileRef} type="file" multiple accept="image/jpeg,image/png,image/webp,image/svg+xml" hidden onChange={e => { choose(e.target.files); e.target.value = ''; }} />
      <input ref={folderRef} type="file" {...{ webkitdirectory: '', directory: '' } as InputHTMLAttributes<HTMLInputElement>} multiple hidden onChange={e => { choose(e.target.files); e.target.value = ''; }} />
    </div>
    {!brandOnly && links.length > 0 && <div className="social-drive-links" aria-label="Cartelle Drive collegate">{links.map(link => <Button variant="ghost" key={link.id} onClick={() => void browse([link])}><Cloud size={16} />{link.name}<RefreshCw size={14} /></Button>)}</div>}
    {linkError && <p role="alert">Cartelle collegate: {linkError}</p>}
    <Toolbar search={query} setSearch={setQuery}><select aria-label="Cartella" value={folder} onChange={e => setFolder(e.target.value)}><option value="">Tutte le cartelle</option>{folders.map(f => <option key={f}>{f}</option>)}</select><select aria-label="Tipo di immagine" value={kind} onChange={e => setKind(e.target.value)}><option value="">Tutti i formati</option><option value="logo">Loghi</option><option value="jpeg">JPG</option><option value="png">PNG</option><option value="webp">WebP</option><option value="svg">SVG</option></select><select aria-label="Orientamento" value={orientation} onChange={e => setOrientation(e.target.value)}><option value="">Ogni orientamento</option><option value="portrait">Verticale</option><option value="landscape">Orizzontale</option><option value="square">Quadrato</option></select><Button variant={favorites ? 'default' : 'outline'} aria-pressed={favorites} onClick={() => setFavorites(v => !v)}><Star size={16} />Preferiti</Button></Toolbar>
    <p className="muted">{shown.length} asset · JPG, PNG, WebP e SVG validati. Per HEIC esporta prima una copia JPG.</p>
    {!shown.length ? <Empty text="Nessuna immagine corrisponde alla ricerca." /> : <div className="social-media-grid">{shown.slice(0, shownCount).map(asset => <article className="social-asset-card" key={asset.id}><button className="social-asset-image" onClick={() => setSelected(asset)}><SocialAssetImage asset={asset} /></button><div className="social-asset-info"><button onClick={() => setSelected(asset)}>{asset.name}</button><Button variant="ghost" size="icon" aria-label={`${asset.favorite ? 'Rimuovi dai' : 'Aggiungi ai'} preferiti ${asset.name}`} aria-pressed={asset.favorite} onClick={async () => { try { await saveAsset({ ...asset, favorite: !asset.favorite }); await refreshLibrary(); } catch (e) { notice((e as Error).message); } }}><Star size={16} fill={asset.favorite ? 'currentColor' : 'none'} /></Button><small>{asset.folder || 'Senza cartella'}</small></div></article>)}</div>}
    {shown.length > shownCount && <Button variant="outline" onClick={() => setShownCount(n => n + 60)}>Mostra altre immagini ({shown.length - shownCount})</Button>}
    <Dialog open={!!selected} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="social-media-detail"><DialogTitle className="dialog-title">{selected?.name}</DialogTitle><DialogDescription className="muted">Dettagli dell’asset e progetti che lo utilizzano nella stagione corrente.</DialogDescription>{selected && <>{fullUrl && <img className="social-full-image" src={fullUrl} alt={selected.name} />}<dl className="social-asset-details"><dt>Dimensioni</dt><dd>{selected.width && selected.height ? `${selected.width} × ${selected.height} px` : 'Proporzioni originali'}</dd><dt>Origine</dt><dd>{selected.source === 'drive' ? 'Google Drive · copia privata' : selected.source === 'brand' ? 'Libreria Brand' : 'Computer · copia privata'}</dd><dt>Formato</dt><dd>{selected.mime} · {(selected.size / 1024).toFixed(0)} KB</dd><dt>Cartella</dt><dd>{selected.folder}</dd></dl><p>Usata in: {projects.filter(p => p.slides.some(s => s.elements.some(e => e.assetId === selected.id))).map(p => p.title).join(', ') || 'nessun progetto di questa stagione'}</p>{admin && selected.source === 'brand' && <label className="field">Sponsor collegato<select value={selected.sponsorId || ''} onChange={async e => { const asset = { ...selected, sponsorId: e.target.value }; try { await saveAsset(asset); setSelected(asset); await refreshLibrary(); } catch (error) { notice((error as Error).message); } }}><option value="">Nessuno sponsor</option>{data.sponsors.filter(s => s.season_id === season && !s.archived).map(s => <option value={s.id} key={s.id}>{s.title}</option>)}</select></label>}</>}</DialogContent></Dialog>
    <Dialog open={candidates.length > 0} onOpenChange={open => { if (!open && !uploading) setCandidates([]); }}><DialogContent className="social-import-dialog" onEscapeKeyDown={e => { if (uploading) e.preventDefault(); }} onInteractOutside={e => { if (uploading) e.preventDefault(); }}><DialogTitle className="dialog-title">Seleziona i file da importare</DialogTitle><DialogDescription className="muted">{candidates.filter(c => c.selected).length} selezionati su {candidates.length} · {(candidates.filter(c => c.selected).reduce((n, c) => n + c.file.size, 0) / 1024 / 1024).toFixed(1)} MB. I duplicati vengono riconosciuti dal contenuto.</DialogDescription>{brandOnly && <label className="field">Raccolta<select value={collection} onChange={e => setCollection(e.target.value)}>{['SFT', 'SuMoth', 'Sponsor', 'Collaborazioni', 'Stile'].map(c => <option key={c}>{c}</option>)}</select></label>}<div className="social-import-controls"><Button variant="ghost" disabled={uploading} onClick={() => setCandidates(all => all.map(c => ({ ...c, selected: true })))}>Seleziona tutto</Button><Button variant="ghost" disabled={uploading} onClick={() => setCandidates(all => all.map(c => ({ ...c, selected: false })))}>Deseleziona tutto</Button></div><div className="social-import-list">{candidates.map((c, i) => <label key={i} className="social-import-item"><input type="checkbox" checked={c.selected} disabled={uploading || c.status === 'done'} onChange={e => setCandidates(all => all.map((v, j) => j === i ? { ...v, selected: e.target.checked } : v))} /><LocalPreview file={c.file} /><span>{c.file.webkitRelativePath || c.file.name}<small>{(c.file.size / 1024).toFixed(0)} KB · {c.status === 'done' ? 'Importato' : c.status === 'uploading' ? 'Caricamento…' : c.error || 'Da importare'}</small></span></label>)}</div><progress max={candidates.filter(c => c.selected).length || 1} value={candidates.filter(c => c.selected && c.status === 'done').length} /><div className="dialog-footer"><Button variant="outline" disabled={uploading} onClick={() => setCandidates([])}>Chiudi</Button><Button disabled={uploading || !candidates.some(c => c.selected && c.status !== 'done')} onClick={() => void upload()}>{uploading ? 'Caricamento…' : candidates.some(c => c.status === 'error') ? 'Riprova file falliti' : 'Importa selezionati'}</Button></div></DialogContent></Dialog>
    <Dialog open={driveOpen} onOpenChange={open => { if (!driveImporting) setDriveOpen(open); }}><DialogContent className="social-import-dialog"><DialogTitle className="dialog-title">Cartelle di Google Drive</DialogTitle><DialogDescription className="muted">Collega una cartella e copia nella libreria le immagini che vuoi usare. Le copie restano disponibili se l’originale cambia.</DialogDescription>{!live && <p>Il collegamento Drive richiede una sessione CRM autenticata.</p>}<nav aria-label="Percorso Drive" className="social-drive-links">{driveTrail.map((item, i) => <Button variant="ghost" key={item.id} disabled={driveBusy || driveImporting} onClick={() => void browse(driveTrail.slice(0, i + 1))}>{item.name}</Button>)}</nav>{driveError && <p role="alert">{driveError}</p>}<div className="social-import-controls"><Button variant="outline" disabled={driveBusy || driveImporting} onClick={() => void browse(driveTrail)}><RefreshCw size={16} />Aggiorna</Button><Button variant="outline" disabled={!driveTrail.length || driveImporting} onClick={() => void connectFolder()}>Collega questa cartella</Button></div>{driveBusy ? <p role="status">Caricamento delle cartelle…</p> : <div className="social-import-list">{driveFiles.map(file => file.mimeType === DRIVE_FOLDER ? <Button variant="ghost" key={file.id} disabled={driveImporting} onClick={() => void browse([...driveTrail, { id: file.id, name: file.name }])}><FolderOpen size={16} />{file.name}</Button> : <label className="social-drive-file" key={file.id}><input type="checkbox" disabled={driveImporting || !/^image\/(jpeg|png|webp|svg\+xml)$/.test(file.mimeType)} checked={driveSelected.includes(file.id)} onChange={e => setDriveSelected(ids => e.target.checked ? [...ids, file.id] : ids.filter(id => id !== file.id))} />{file.name}<small>{file.mimeType}</small></label>)}</div>}{drivePage && <Button variant="outline" disabled={driveBusy} onClick={() => void browse(driveTrail, true)}>Carica altri file</Button>}<p role="status">{driveProgress}</p><div className="dialog-footer"><Button disabled={driveImporting || !driveSelected.length} onClick={() => void importDrive()}>Importa {driveSelected.length || ''} immagini</Button></div></DialogContent></Dialog>
  </>;
}
