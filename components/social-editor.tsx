'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties, type DragEvent as ReactDragEvent } from 'react';
import Link from 'next/link';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Image as CanvasImage, Transformer, Line, Group as CanvasGroup } from 'react-konva';
import { ArrowLeft, Undo2, Redo2, Type, Square, ImagePlus, Layers, Copy, Trash2, Plus, Lock, Unlock, Eye, EyeOff, ArrowUp, ArrowDown, Download, ZoomIn, ZoomOut, Group, Ungroup, Upload } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import { type SocialAsset, type SocialElement, type SocialProject, type SocialSlide, TEMPLATE_FAMILIES, createProject, validateProject } from '@/lib/social-model';
import { assetUrl, importAsset, listAssets, saveProject, getAccess, assetThumbnailUrl, SocialConflict } from '@/lib/social-repository';
import { boundsWarnings, downloadBlob, exportCarousel, exportPackage, exportSlide, imagePlacement } from '@/lib/social-export';

type Tab = 'testi' | 'forme' | 'media' | 'brand' | 'template';
type SaveState = 'saved' | 'pending' | 'saving' | 'error' | 'conflict';
type EditorProps = { project: SocialProject; onBack: () => void; onSaved?: (project: SocialProject) => void };
const uid = () => crypto.randomUUID();
const clone = <T,>(value: T): T => structuredClone(value);
const COLORS = ['#812435', '#ffffff', '#F2C572', '#1a1718'];
const FONT_FAMILIES = ['Kelson', 'Arial', 'Georgia'];

function Photo({ element, image, ...events }: { element: SocialElement; image?: HTMLImageElement } & Record<string, unknown>) {
  const placement = imagePlacement(element, image?.naturalWidth || 1, image?.naturalHeight || 1);
  return <CanvasGroup {...events} id={element.id} x={element.x} y={element.y} width={element.width} height={element.height}
    rotation={element.rotation} opacity={element.opacity} visible={!element.hidden} clipX={0} clipY={0} clipWidth={element.width} clipHeight={element.height}>
    <Rect width={element.width} height={element.height} fill={image ? 'rgba(0,0,0,0.001)' : '#F4E9EC'} />
    {!image && <Text text={element.assetId ? 'Caricamento immagine…' : 'Trascina una foto'} x={24} y={Math.max(24, element.height / 2 - 20)} width={Math.max(8, element.width - 48)} fontFamily="Kelson" fontSize={Math.min(36, element.width / 10)} fill="#812435" align="center" listening={false} />}
    <CanvasImage image={image} {...placement} listening={false} />
  </CanvasGroup>;
}

function SlideThumbnail({ slide, width, height, urls, images }: { slide: SocialSlide; width: number; height: number; urls: Record<string, string>; images: Record<string, HTMLImageElement> }) {
  return <div className="social-slide-preview" style={{ background: slide.background, aspectRatio: `${width}/${height}` }} aria-hidden="true">
    {slide.elements.filter(e => !e.hidden).map(e => {
      const style: CSSProperties = { position: 'absolute', left: `${e.x / width * 100}%`, top: `${e.y / height * 100}%`, width: `${e.width / width * 100}%`, height: `${e.height / height * 100}%`, transform: `rotate(${e.rotation}deg)`, transformOrigin: 'top left', opacity: e.opacity, color: e.fill, overflow: 'hidden' };
      if (e.type === 'image') {
        if (!e.assetId) return <div key={e.id} style={{ ...style, background: '#F4E9EC', display: 'grid', placeItems: 'center', color: '#812435', fontSize: '3cqw' }}>Foto</div>;
        const image = images[e.assetId || ''];
        const placement = imagePlacement(e, image?.naturalWidth || e.width, image?.naturalHeight || e.height);
        const crop = placement.crop;
        const iw = image?.naturalWidth || e.width, ih = image?.naturalHeight || e.height;
        const rect = crop ? { x: -crop.x * e.width / crop.width, y: -crop.y * e.height / crop.height, width: iw * e.width / crop.width, height: ih * e.height / crop.height } : placement;
        return <div key={e.id} style={style}><img src={urls[e.assetId || '']} alt="" draggable={false} style={{ position: 'absolute', maxWidth: 'none', left: `${rect.x / e.width * 100}%`, top: `${rect.y / e.height * 100}%`, width: `${rect.width / e.width * 100}%`, height: `${rect.height / e.height * 100}%` }} /></div>;
      }
      if (e.type === 'rect') return <div key={e.id} style={{ ...style, background: e.fill }} />;
      return <div key={e.id} style={{ ...style, fontFamily: e.fontFamily || 'Kelson', fontWeight: e.fontStyle?.includes('bold') ? 'bold' : 'normal', fontStyle: e.fontStyle?.includes('italic') ? 'italic' : 'normal', textAlign: (e.align || 'left') as CSSProperties['textAlign'], fontSize: `${(e.fontSize || 48) / width * 100}cqw`, whiteSpace: 'pre-wrap', lineHeight: e.lineHeight || 1 }}>{e.text}</div>;
    })}
  </div>;
}

export function SocialEditor({ project: initial, onBack, onSaved }: EditorProps) {
  const [project, setProject] = useState(() => clone(initial));
  const doc = useRef(project); doc.current = project;
  const [assets, setAssets] = useState<SocialAsset[]>([]);
  const assetsRef = useRef(assets); assetsRef.current = assets;
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({});
  const [images, setImages] = useState<Record<string, HTMLImageElement>>({});
  const [assetError, setAssetError] = useState('');
  const [tab, setTab] = useState<Tab>('testi');
  const [query, setQuery] = useState('');
  const [assetLimit, setAssetLimit] = useState(60);
  useEffect(() => setAssetLimit(60), [tab, query]);
  const [replaceTarget, setReplaceTarget] = useState<string | null>(null);
  const [slideId, setSlideId] = useState(project.slides[0]?.id || '');
  const [selected, setSelected] = useState<string[]>([]);
  const [zoom, setZoom] = useState(.36);
  const [guides, setGuides] = useState(true);
  const [preview, setPreview] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SaveState>('saved');
  const [saveError, setSaveError] = useState('');
  const [recovery, setRecovery] = useState<SocialProject | null>(null);
  const [editing, setEditing] = useState<{ id: string; text: string } | null>(null);
  const [historyState, setHistoryState] = useState({ past: 0, future: 0 });
  const history = useRef<{ past: SocialProject[]; future: SocialProject[] }>({ past: [], future: [] });
  const clipboard = useRef<SocialElement[]>([]);
  const stage = useRef<Konva.Stage>(null);
  const transformer = useRef<Konva.Transformer>(null);
  const dragPositions = useRef(new Map<string, { x: number; y: number }>());
  const dragSlide = useRef('');
  const root = useRef<HTMLElement>(null);
  const workarea = useRef<HTMLDivElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const version = useRef(initial.version);
  const lastSaved = useRef(JSON.stringify(initial));
  const saving = useRef(false);
  const conflict = useRef(false);
  const mounted = useRef(true);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [recoveryKey, setRecoveryKey] = useState('');
  const slide = project.slides.find(s => s.id === slideId) || project.slides[0];
  const selection = slide?.elements.filter(e => selected.includes(e.id)) || [];
  const first = selection.length === 1 ? selection[0] : undefined;
  const slideIndex = project.slides.findIndex(s => s.id === slide?.id);

  useEffect(() => {
    if (!project.slides.some(s => s.id === slideId)) { setSlideId(project.slides[0].id); setSelected([]); setEditing(null); }
  }, [project.slides, slideId]);

  const commit = useCallback((change: (current: SocialProject) => SocialProject) => {
    const before = doc.current, next = change(clone(before));
    if (JSON.stringify(before) === JSON.stringify(next)) return;
    history.current.past.push(clone(before));
    if (history.current.past.length > 80) history.current.past.shift();
    history.current.future = [];
    setHistoryState({ past: history.current.past.length, future: 0 });
    doc.current = next; setProject(next);
    if (!conflict.current) setStatus('pending');
  }, []);

  const updateElements = useCallback((ids: string[], patch: Partial<SocialElement> | ((e: SocialElement) => SocialElement)) => {
    commit(p => ({ ...p, slides: p.slides.map(s => s.id === slide?.id ? { ...s, elements: s.elements.map(e => ids.includes(e.id) && (!e.locked || (typeof patch !== 'function' && Object.keys(patch).every(key => key === 'locked' || key === 'hidden'))) ? typeof patch === 'function' ? patch(e) : { ...e, ...patch } : e) } : s) }));
  }, [commit, slide?.id]);

  const undo = useCallback(() => {
    const previous = history.current.past.pop(); if (!previous) return;
    history.current.future.push(clone(doc.current)); doc.current = previous; setProject(previous);
    setHistoryState({ past: history.current.past.length, future: history.current.future.length });
    setSelected([]); if (!conflict.current) setStatus('pending');
  }, []);
  const redo = useCallback(() => {
    const next = history.current.future.pop(); if (!next) return;
    history.current.past.push(clone(doc.current)); doc.current = next; setProject(next);
    setHistoryState({ past: history.current.past.length, future: history.current.future.length });
    setSelected([]); if (!conflict.current) setStatus('pending');
  }, []);

  const persist = useCallback(async () => {
    if (saving.current || conflict.current || JSON.stringify(doc.current) === lastSaved.current) return;
    saving.current = true; if (mounted.current) setStatus('saving');
    const pending = clone(doc.current);
    try {
      const saved = await saveProject({ ...pending, version: version.current }, version.current);
      version.current = saved.version;
      const unchanged = JSON.stringify(doc.current) === JSON.stringify(pending);
      lastSaved.current = JSON.stringify(saved);
      if (unchanged) { doc.current = saved; if (mounted.current) setProject(saved); }
      else { doc.current = { ...doc.current, version: saved.version, updatedAt: saved.updatedAt }; if (mounted.current) setProject(doc.current); }
      if (mounted.current) { setSaveError(''); setStatus(unchanged ? 'saved' : 'pending'); onSaved?.(saved); }
      if (unchanged && recoveryKey) { try { localStorage.removeItem(recoveryKey); } catch { /* Persistence succeeded even if local storage is unavailable. */ } }
    } catch (error) {
      const reason = error instanceof Error ? error.message : 'Salvataggio non riuscito.';
      if (error instanceof SocialConflict) { conflict.current = true; if (mounted.current) setStatus('conflict'); }
      else if (mounted.current) setStatus('error');
      if (mounted.current) setSaveError(reason);
    } finally { saving.current = false; }
  }, [onSaved, recoveryKey]);

  useEffect(() => {
    mounted.current = true;
    void getAccess().then(access => {
      if (!mounted.current) return;
      const key = `sft-social-recovery:${access.userId}:${initial.id}`; setRecoveryKey(key);
      try { const raw = localStorage.getItem(key); if (raw) { const parsed = validateProject(JSON.parse(raw)); if (parsed.id === initial.id && JSON.stringify(parsed) !== JSON.stringify(initial)) setRecovery(parsed); } } catch { /* A broken recovery never replaces the persisted project. */ }
    }).catch(() => { if (mounted.current) setMessage('Copia di recupero non disponibile. Scarica il pacchetto modificabile se la connessione non funziona.'); });
    return () => { mounted.current = false; clearTimeout(saveTimer.current); };
  }, [initial.id]); // The route keys this editor by project ID.

  useEffect(() => {
    if (JSON.stringify(project) === lastSaved.current) return;
    try { if (recoveryKey) localStorage.setItem(recoveryKey, JSON.stringify(project)); } catch { setMessage('Spazio locale esaurito: scarica un pacchetto modificabile per conservare le modifiche.'); }
    clearTimeout(saveTimer.current);
    if (!conflict.current && status !== 'error') saveTimer.current = setTimeout(() => void persist(), 900);
    const beforeUnload = (event: BeforeUnloadEvent) => { event.preventDefault(); };
    window.addEventListener('beforeunload', beforeUnload);
    return () => { clearTimeout(saveTimer.current); window.removeEventListener('beforeunload', beforeUnload); };
  }, [project, persist, recoveryKey, status]);

  const reloadAssets = useCallback(async () => {
    setAssetError('');
    try { setAssets(await listAssets()); } catch (error) { setAssetError(error instanceof Error ? error.message : 'Impossibile caricare i media.'); }
  }, []);
  useEffect(() => { void reloadAssets(); }, [reloadAssets]);
  useEffect(() => {
    let active = true;
    // Full images are loaded only for the document, not every item in a large library.
    const used = new Set(project.slides.flatMap(s => s.elements.filter(e => e.type === 'image').map(e => e.assetId)));
    const previewIds = new Set((tab === 'media' || tab === 'brand' ? assets.filter(a => (tab === 'brand' ? a.source === 'brand' || !!a.collection : a.source !== 'brand') && a.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())).slice(0, assetLimit) : []).map(a => a.id));
    void Promise.all(assets.filter(a => previewIds.has(a.id) || used.has(a.id)).map(async asset => {
      try {
        const inLibrary = previewIds.has(asset.id);
        if (inLibrary) { const thumbnail = await assetThumbnailUrl(asset); if (!active) return; setThumbnails(current => ({ ...current, [asset.id]: thumbnail })); }
        if (!used.has(asset.id)) return;
        const url = await assetUrl(asset); if (!active) return;
        setUrls(current => ({ ...current, [asset.id]: url }));
        const img = new window.Image(); img.crossOrigin = 'anonymous'; img.src = url;
        await img.decode(); if (active) setImages(current => ({ ...current, [asset.id]: img }));
      } catch { if (active) setAssetError('Uno o più media non sono disponibili. Aggiorna la libreria prima di esportare.'); }
    }));
    return () => { active = false; };
  }, [assets, tab, query, assetLimit, project.slides.map(s => s.elements.filter(e => e.type === 'image').map(e => e.assetId).join(',')).join('|')]);
  useEffect(() => {
    let active = true;
    const fonts = new Set(project.slides.flatMap(s => s.elements.filter(e => e.type === 'text').map(e => `${e.fontStyle?.includes('italic') ? 'italic ' : ''}${e.fontStyle?.includes('bold') ? 'bold ' : ''}${e.fontSize || 48}px ${e.fontFamily || 'Kelson'}`)));
    void Promise.all([...fonts].map(font => document.fonts.load(font))).then(() => { if (active) stage.current?.batchDraw(); }).catch(() => { if (active) setMessage('Carattere non disponibile. Verifica i font prima di esportare.'); });
    return () => { active = false; };
  }, [project.slides]);
  useEffect(() => {
    if (!workarea.current) return;
    const area = workarea.current;
    const resize = () => setZoom(Math.max(.12, Math.min(.48, (area.clientWidth - 48) / project.width)));
    resize(); const observer = new ResizeObserver(resize); observer.observe(area); return () => observer.disconnect();
  }, [project.width]);
  useEffect(() => {
    const nodes = selected.map(id => stage.current?.findOne(`#${id}`)).filter((node): node is Konva.Node => !!node && !slide?.elements.find(e => e.id === node.id())?.locked && !slide?.elements.find(e => e.id === node.id())?.hidden);
    transformer.current?.nodes(nodes); transformer.current?.getLayer()?.batchDraw();
  }, [selected, slide, zoom]);

  const addElement = useCallback((type: SocialElement['type'], asset?: SocialAsset, at?: { x: number; y: number }) => {
    const element: SocialElement = { id: uid(), type, x: at?.x ?? 96, y: at?.y ?? 160, width: type === 'text' ? 780 : 600, height: type === 'text' ? 200 : 500,
      rotation: 0, opacity: 1, locked: false, hidden: false,
      ...(type === 'text' ? { text: 'La nostra storia,\nsull’acqua.', fontFamily: 'Kelson', fontSize: 76, lineHeight: 1, fontStyle: 'bold', fill: slide?.background.toLowerCase() === '#ffffff' ? '#812435' : '#ffffff', align: 'left' as const } : type === 'rect' ? { fill: '#F2C572' } : { assetId: asset?.id, fit: asset?.source === 'brand' ? 'contain' as const : 'cover' as const, cropX: .5, cropY: .5, cropScale: 1 }) };
    if (asset?.source === 'brand') { element.width = 320; const natural = images[asset.id]; const ratio = asset.width > 0 && asset.height > 0 ? asset.height / asset.width : natural?.naturalWidth ? natural.naturalHeight / natural.naturalWidth : .625; element.height = Math.max(8, Math.min(2000, Math.round(320 * ratio))); }
    commit(p => ({ ...p, slides: p.slides.map(s => s.id === slide?.id ? { ...s, elements: [...s.elements, element] } : s) })); setSelected([element.id]);
  }, [commit, slide, images]);

  const remove = useCallback(() => {
    const ids = selected.filter(id => !slide?.elements.find(e => e.id === id)?.locked);
    commit(p => ({ ...p, slides: p.slides.map(s => s.id === slide?.id ? { ...s, elements: s.elements.filter(e => !ids.includes(e.id)) } : s) })); setSelected([]);
  }, [commit, selected, slide]);
  const paste = useCallback(() => {
    const groups = new Map<string, string>();
    const elements = clipboard.current.map(e => ({ ...clone(e), id: uid(), x: e.x + 24, y: e.y + 24, locked: false, ...(e.groupId ? { groupId: groups.get(e.groupId) || (() => { const id = uid(); groups.set(e.groupId!, id); return id; })() } : {}) }));
    if (!elements.length) return;
    commit(p => ({ ...p, slides: p.slides.map(s => s.id === slide?.id ? { ...s, elements: [...s.elements, ...elements] } : s) })); setSelected(elements.map(e => e.id));
  }, [commit, slide?.id]);
  const duplicate = useCallback(() => { clipboard.current = clone(selection); paste(); }, [selection, paste]);

  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('input,textarea,select,[contenteditable="true"],[role="dialog"]')) return;
      if (!root.current?.contains(document.activeElement) && document.activeElement !== document.body) return;
      const mod = event.ctrlKey || event.metaKey;
      if (mod && event.key.toLowerCase() === 'z') { event.preventDefault(); event.shiftKey ? redo() : undo(); }
      else if (mod && event.key.toLowerCase() === 'y') { event.preventDefault(); redo(); }
      else if (mod && event.key.toLowerCase() === 's') { event.preventDefault(); void persist(); }
      else if (mod && event.key.toLowerCase() === 'c' && selection.length) { event.preventDefault(); clipboard.current = clone(selection); }
      else if (mod && event.key.toLowerCase() === 'v') { event.preventDefault(); paste(); }
      else if (mod && event.key.toLowerCase() === 'd') { event.preventDefault(); duplicate(); }
      else if (mod && event.key.toLowerCase() === 'a') { event.preventDefault(); setSelected(slide.elements.filter(e => !e.locked && !e.hidden).map(e => e.id)); }
      else if (event.key === 'Delete' || event.key === 'Backspace') { event.preventDefault(); remove(); }
      else if (event.key === 'Escape') { setSelected([]); setEditing(null); }
      else if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key) && selection.length) {
        event.preventDefault(); const step = event.shiftKey ? 10 : 1;
        updateElements(selection.filter(e => !e.locked).map(e => e.id), e => ({ ...e, x: e.x + (event.key === 'ArrowLeft' ? -step : event.key === 'ArrowRight' ? step : 0), y: e.y + (event.key === 'ArrowUp' ? -step : event.key === 'ArrowDown' ? step : 0) }));
      }
    };
    window.addEventListener('keydown', handle); return () => window.removeEventListener('keydown', handle);
  }, [selection, slide, duplicate, paste, remove, undo, redo, updateElements, persist]);

  function selectElement(element: SocialElement, additive = false) {
    const ids = element.groupId ? slide.elements.filter(e => e.groupId === element.groupId && !e.hidden).map(e => e.id) : [element.id];
    setSelected(current => additive ? current.includes(element.id) ? current.filter(id => !ids.includes(id)) : [...new Set([...current, ...ids])] : ids);
  }
  function shapeEvents(element: SocialElement) {
    return {
      draggable: !element.locked && !editing,
      onClick: (e: Konva.KonvaEventObject<MouseEvent>) => { e.cancelBubble = true; selectElement(element, e.evt.shiftKey || e.evt.metaKey); },
      onTap: () => selectElement(element),
      onDblClick: () => { if (element.type === 'text' && !element.locked) setEditing({ id: element.id, text: element.text || '' }); },
      onDblTap: () => { if (element.type === 'text' && !element.locked) setEditing({ id: element.id, text: element.text || '' }); },
      onDragStart: () => {
        const ids = selected.includes(element.id) ? selected : element.groupId ? slide.elements.filter(e => e.groupId === element.groupId).map(e => e.id) : [element.id];
        setSelected(ids); dragPositions.current = new Map(slide.elements.filter(e => ids.includes(e.id) && !e.locked).map(e => [e.id, { x: e.x, y: e.y }]));
      },
      onDragMove: (e: Konva.KonvaEventObject<DragEvent>) => {
        const origin = dragPositions.current.get(element.id); if (!origin) return;
        let x = e.target.x(), y = e.target.y();
        if (guides) { if (Math.abs(x + element.width / 2 - project.width / 2) < 12) x = (project.width - element.width) / 2; if (Math.abs(y + element.height / 2 - project.height / 2) < 12) y = (project.height - element.height) / 2; if (Math.abs(x - 64) < 12) x = 64; if (Math.abs(y - 64) < 12) y = 64; }
        e.target.position({ x, y });
        dragPositions.current.forEach((pos, id) => { if (id !== element.id) stage.current?.findOne(`#${id}`)?.position({ x: pos.x + x - origin.x, y: pos.y + y - origin.y }); });
      },
      onDragEnd: () => {
        const positions = new Map<string, { x: number; y: number }>();
        dragPositions.current.forEach((_, id) => { const node = stage.current?.findOne(`#${id}`); if (node) positions.set(id, { x: Math.round(node.x()), y: Math.round(node.y()) }); });
        updateElements([...positions.keys()], e => ({ ...e, ...positions.get(e.id) })); dragPositions.current.clear();
      },

    };
  }

  function finishTransform() {
        const nodes = transformer.current?.nodes() || [];
        const changes = new Map(nodes.map(node => { const patch = { x: Math.round(node.x()), y: Math.round(node.y()), width: Math.max(8, Math.round(node.width() * node.scaleX())), height: Math.max(8, Math.round(node.height() * node.scaleY())), rotation: Math.round(node.rotation()) }; node.scale({ x: 1, y: 1 }); return [node.id(), patch]; }));
        updateElements([...changes.keys()], e => ({ ...e, ...changes.get(e.id) }));
      }
  function changeSlide(next: string) { setSlideId(next); setSelected([]); setEditing(null); setReplaceTarget(null); }
  function addSlide() { const next: SocialSlide = { id: uid(), background: slide.background, elements: [] }; commit(p => ({ ...p, slides: [...p.slides, next] })); changeSlide(next.id); }
  function duplicateSlide() {
    const groups = new Map<string, string>();
    const next = { ...clone(slide), id: uid(), elements: slide.elements.map(e => ({ ...clone(e), id: uid(), groupId: e.groupId ? groups.get(e.groupId) || (() => { const id = uid(); groups.set(e.groupId!, id); return id; })() : undefined })) };
    commit(p => { p.slides.splice(slideIndex + 1, 0, next); return p; }); changeSlide(next.id);
  }
  function deleteSlide() { if (project.slides.length <= 1) return; const nextId = project.slides[slideIndex === 0 ? 1 : slideIndex - 1].id; commit(p => ({ ...p, slides: p.slides.filter(s => s.id !== slide.id) })); changeSlide(nextId); }
  function reorderSlide(from: string, to: string) { if (from === to) return; commit(p => { const i = p.slides.findIndex(s => s.id === from), j = p.slides.findIndex(s => s.id === to); if (i >= 0 && j >= 0) { const [moved] = p.slides.splice(i, 1); p.slides.splice(j, 0, moved); } return p; }); }
  function reorderLayers(direction: -1 | 1) {
    commit(p => ({ ...p, slides: p.slides.map(s => { if (s.id !== slide.id) return s; const elements = [...s.elements]; const indices = direction === 1 ? elements.map((_, i) => i).reverse() : elements.map((_, i) => i); for (const i of indices) { const j = i + direction; if (selected.includes(elements[i]?.id) && !elements[i].locked && j >= 0 && j < elements.length && !selected.includes(elements[j].id)) [elements[i], elements[j]] = [elements[j], elements[i]]; } return { ...s, elements }; }) }));
  }
  function align(mode: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom' | 'distribute') {
    const editable = selection.filter(e => !e.locked); if (!editable.length) return;
    const bounds = selection.length === 1 ? { left: 0, top: 0, right: project.width, bottom: project.height } : { left: Math.min(...editable.map(e => e.x)), top: Math.min(...editable.map(e => e.y)), right: Math.max(...editable.map(e => e.x + e.width)), bottom: Math.max(...editable.map(e => e.y + e.height)) };
    const ordered = [...editable].sort((a, b) => a.x - b.x); const total = ordered.reduce((n, e) => n + e.width, 0); const gap = ordered.length > 1 ? (bounds.right - bounds.left - total) / (ordered.length - 1) : 0;
    const positions = new Map<string, number>(); let cursor = bounds.left; ordered.forEach(e => { positions.set(e.id, cursor); cursor += e.width + gap; });
    updateElements(editable.map(e => e.id), e => ({ ...e, x: mode === 'left' ? bounds.left : mode === 'center' ? (bounds.left + bounds.right - e.width) / 2 : mode === 'right' ? bounds.right - e.width : mode === 'distribute' ? positions.get(e.id)! : e.x, y: mode === 'top' ? bounds.top : mode === 'middle' ? (bounds.top + bounds.bottom - e.height) / 2 : mode === 'bottom' ? bounds.bottom - e.height : e.y }));
  }
  async function uploadFiles(files: FileList | null) {
    if (!files?.length) return; setUploading(true); setMessage('');
    try { const imported: SocialAsset[] = []; for (const file of Array.from(files)) imported.push(await importAsset(file, 'Editor')); await reloadAssets(); if (imported[0]) addElement('image', imported[0]); setTab('media'); }
    catch (error) { setMessage(error instanceof Error ? error.message : 'Importazione non riuscita.'); }
    finally { setUploading(false); if (fileInput.current) fileInput.current.value = ''; }
  }
  function dropAsset(event: ReactDragEvent<HTMLDivElement>) {
    event.preventDefault(); const id = event.dataTransfer.getData('application/sft-social-asset'); const asset = assets.find(a => a.id === id); if (!asset || !stage.current) return;
    const rect = stage.current.container().getBoundingClientRect(); const x = (event.clientX - rect.left) / zoom, y = (event.clientY - rect.top) / zoom;
    const hit = stage.current.getIntersection({ x: x * zoom, y: y * zoom }); const hitId = hit?.id() || hit?.getParent()?.id(); const target = slide.elements.find(e => e.id === hitId && e.type === 'image' && !e.locked);
    if (target) updateElements([target.id], { assetId: asset.id, cropX: .5, cropY: .5, cropScale: 1 }); else addElement('image', asset, { x, y });
  }
  async function runExport(kind: 'slide' | 'carousel' | 'package' | 'caption') {
    setExporting(true); setMessage('');
    try {
      const safeName = project.title.replace(/[^\p{L}\p{N} _-]/gu, '').trim() || 'SFT-Social';
      if (kind === 'caption') downloadBlob(new Blob([project.caption], { type: 'text/plain;charset=utf-8' }), `${safeName}-caption.txt`);
      else if (kind === 'slide') downloadBlob(await exportSlide(project, slideIndex, assets), `${safeName}-${String(slideIndex + 1).padStart(2, '0')}.png`);
      else if (kind === 'carousel') downloadBlob(await exportCarousel(project, assets), `${safeName}-carosello.zip`);
      else downloadBlob(await exportPackage(project, assets), `${safeName}-modificabile.zip`);
      setMessage('Download preparato.');
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Esportazione non riuscita.'); }
    finally { setExporting(false); }
  }
  function applyTemplate(family: string, layout = 0) {
    const source = createProject(project.title, project.seasonId, family, project.height);
    const next = clone(source.slides[layout] || source.slides[0]); next.id = slide.id;
    commit(p => ({ ...p, slides: p.slides.map(s => s.id === slide.id ? next : s) })); setSelected([]);
  }
  function applyPhotoLayout(count: 1 | 2 | 3) {
    const common: Partial<SocialElement> = { rotation: 0, opacity: 1, locked: false, hidden: false };
    const frame = (x: number, y: number, width: number, height: number): SocialElement => ({ id: uid(), type: 'image', x, y, width, height, ...common, fit: 'cover', cropX: .5, cropY: .5, cropScale: 1 } as SocialElement);
    const bodyHeight = project.height - 600;
    const frames = count === 1 ? [frame(80, 420, 920, bodyHeight)] : count === 2 ? [frame(80, 420, 448, bodyHeight), frame(552, 420, 448, bodyHeight)] : [frame(80, 420, 920, Math.round((bodyHeight - 24) * .55)), frame(80, 444 + Math.round((bodyHeight - 24) * .55), 448, Math.round((bodyHeight - 24) * .45)), frame(552, 444 + Math.round((bodyHeight - 24) * .55), 448, Math.round((bodyHeight - 24) * .45))];
    const light = slide.background.toLowerCase() === '#ffffff';
    const elements: SocialElement[] = [
      { ...common, id: uid(), type: 'image', x: 80, y: 64, width: 230, height: 140, assetId: light ? 'sft-burgundy' : 'sft-white', fit: 'contain' } as SocialElement,
      { ...common, id: uid(), type: 'text', x: 80, y: 248, width: 920, height: 140, text: 'I NOSTRI MOMENTI.', fontFamily: 'Kelson', fontStyle: 'bold', fontSize: 64, lineHeight: 1, fill: light ? '#812435' : '#FFFFFF', align: 'left' } as SocialElement,
      ...frames,
    ];
    commit(p => ({ ...p, slides: p.slides.map(s => s.id === slide.id ? { ...s, elements } : s) })); setSelected([frames[0].id]);
  }

  const warnings = [...boundsWarnings(project), ...project.slides.flatMap((s, i) => s.elements.filter(e => e.type === 'image' && !e.assetId && !e.hidden).map(() => `Slide ${i + 1}: riquadro fotografico da riempire.`))];
  const visibleAssets = assets.filter(a => (tab === 'brand' ? a.source === 'brand' || !!a.collection : a.source !== 'brand') && a.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  const editingElement = editing ? slide.elements.find(e => e.id === editing.id) : undefined;
  const statusText: Record<SaveState, string> = { saved: 'Salvato', pending: 'Modifiche da salvare', saving: 'Salvataggio…', error: 'Salvataggio non riuscito', conflict: 'Versione in conflitto' };
  const numeric = (label: string, field: 'x' | 'y' | 'width' | 'height' | 'rotation' | 'fontSize', min?: number) => first && <label className="social-property">{label}<input type="number" min={min} value={Math.round((first[field] as number) || 0)} disabled={first.locked} onChange={e => { const value = Number(e.target.value); if (Number.isFinite(value) && (min === undefined || value >= min)) updateElements([first.id], { [field]: value }); }} /></label>;

  return <section ref={root} className="social-editor" aria-label="Editor SFT Social Studio" tabIndex={-1}>
    <header className="social-editor-topbar">
      <Button variant="ghost" size="icon" aria-label="Torna ai progetti" onClick={async () => { await persist(); if (JSON.stringify(doc.current) === lastSaved.current || window.confirm('Ci sono modifiche non sincronizzate. La copia di recupero resta in questo browser. Vuoi uscire?')) onBack(); }}><ArrowLeft size={18} /></Button>
      <div className="social-editor-project"><label className="sr-only" htmlFor="social-title">Titolo del progetto</label><input id="social-title" value={project.title} maxLength={180} onChange={e => commit(p => ({ ...p, title: e.target.value }))} /><span role="status" data-status={status}>{statusText[status]}</span></div>
      <div className="social-editor-actions"><Button variant="ghost" size="icon" aria-label="Annulla" disabled={!historyState.past} onClick={undo}><Undo2 size={18} /></Button><Button variant="ghost" size="icon" aria-label="Ripristina" disabled={!historyState.future} onClick={redo}><Redo2 size={18} /></Button>
        <Button variant="outline" onClick={() => setPreview(true)}><Eye size={16} />Anteprima</Button>
        <details className="social-export-menu"><summary className="btn btn-primary"><Download size={16} />{exporting ? 'Preparazione…' : 'Esporta'}</summary><div>{[['slide', 'PNG della slide'], ['carousel', 'ZIP del carosello'], ['caption', 'Caption .txt'], ['package', 'Pacchetto modificabile']].map(([kind, label]) => <button key={kind} disabled={exporting} onClick={() => void runExport(kind as 'slide')}>{label}</button>)}</div></details>
      </div>
    </header>
    {recovery && <div className="social-editor-alert" role="status"><span>È disponibile una copia locale con modifiche non sincronizzate.</span><Button size="sm" onClick={() => { if (recovery.version !== version.current) { conflict.current = true; setStatus('conflict'); setSaveError('La copia locale si basa su una versione precedente del progetto condiviso. Salvala come nuovo progetto per conservare entrambi i lavori.'); } commit(() => ({ ...recovery, version: version.current })); setRecovery(null); }}>Recupera modifiche</Button><Button size="sm" variant="ghost" onClick={() => { setRecovery(null); localStorage.removeItem(recoveryKey); }}>Ignora copia</Button></div>}
    {(status === 'error' || status === 'conflict') && <div className="social-editor-alert" role="alert"><span>{saveError}{status === 'conflict' && ' Le tue modifiche sono conservate. Salva una copia per evitare di sovrascrivere il lavoro altrui.'}</span>{status === 'error' ? <Button size="sm" onClick={() => { setStatus('pending'); void persist(); }}>Riprova</Button> : <Button size="sm" onClick={async () => { try { const fork = { ...clone(doc.current), id: uid(), title: `${doc.current.title} · copia recuperata`, version: 0 }; const saved = await saveProject(fork, 0); localStorage.removeItem(recoveryKey); window.location.assign(`/team/management/social/progetti/${saved.id}`); } catch (error) { setMessage(error instanceof Error ? error.message : 'Impossibile creare la copia.'); } }}>Salva come nuovo progetto</Button>}</div>}
    {message && <div className="social-editor-alert" role="status"><span>{message}</span><Button size="sm" variant="ghost" aria-label="Chiudi messaggio" onClick={() => setMessage('')}>×</Button></div>}
    <div className="social-editor-body">
      <aside className="social-editor-tools" aria-label="Strumenti">
        <nav className="social-editor-tool-tabs" aria-label="Elementi da inserire">{([['testi', Type, 'Testi'], ['forme', Square, 'Forme'], ['media', ImagePlus, 'Media'], ['brand', Layers, 'Brand'], ['template', Copy, 'Layout']] as const).map(([id, Icon, title]) => <button key={id} aria-pressed={tab === id} onClick={() => setTab(id)}><Icon size={18} /><span>{title}</span></button>)}</nav>
        <div className="social-editor-tool-content">
          <h2>{tab === 'testi' ? 'Racconta il team' : tab === 'forme' ? 'Forme e colori' : tab === 'template' ? 'Layout della slide' : tab === 'brand' ? 'Identità del team' : 'La tua libreria'}</h2>
          {tab === 'testi' && <><p className="muted">Doppio clic sul testo per modificarlo sulla slide.</p><Button variant="outline" onClick={() => addElement('text')}><Type size={18} />Aggiungi testo</Button><div className="social-text-presets">{[['Titolo', 96, 'bold'], ['Sottotitolo', 56, 'normal'], ['Corpo del testo', 36, 'normal']].map(([text, size, weight]) => <button key={text} style={{ fontSize: Number(size) / 4, fontWeight: String(weight) }} onClick={() => { const id = uid(); commit(p => ({ ...p, slides: p.slides.map(s => s.id === slide.id ? { ...s, elements: [...s.elements, { id, type: 'text', x: 80, y: 160, width: 900, height: Number(size) * 2.8, rotation: 0, opacity: 1, locked: false, hidden: false, text: String(text), fontSize: Number(size), fontFamily: 'Kelson', fontStyle: String(weight), fill: slide.background.toLowerCase() === '#ffffff' ? '#812435' : '#ffffff', align: 'left' }] } : s) })); setSelected([id]); }}>{text}</button>)}</div></>}
          {tab === 'forme' && <><Button variant="outline" onClick={() => addElement('rect')}><Square size={18} />Rettangolo</Button><h3>Palette SFT</h3><div className="social-palette">{COLORS.map(color => <button key={color} style={{ background: color }} aria-label={`Usa ${color}`} onClick={() => { if (selection.length) updateElements(selected, { fill: color }); else commit(p => ({ ...p, slides: p.slides.map(s => s.id === slide.id ? { ...s, background: color } : s) })); }} />)}</div><p className="muted">Con una selezione cambi il colore dell’elemento; senza selezione cambi lo sfondo.</p></>}
          {(tab === 'media' || tab === 'brand') && <>{replaceTarget && <p className="muted">Scegli la foto che sostituirà il riquadro selezionato. <button onClick={() => setReplaceTarget(null)} className="text-link">Annulla sostituzione</button></p>}<label className="sr-only" htmlFor="social-asset-search">Cerca media</label><input id="social-asset-search" placeholder="Cerca nella libreria…" value={query} onChange={e => setQuery(e.target.value)} /><Button size="sm" variant="outline" onClick={() => fileInput.current?.click()} disabled={uploading}><Upload size={15} />{uploading ? 'Importazione…' : 'Importa immagine'}</Button><input ref={fileInput} type="file" hidden accept="image/png,image/jpeg,image/webp,image/svg+xml" multiple onChange={e => void uploadFiles(e.target.files)} /><Link href="/team/management/social/media" className="text-link">Apri libreria e cartelle Drive</Link><Button size="sm" variant="ghost" onClick={() => void reloadAssets()}>Aggiorna libreria</Button>{assetError && <p role="alert">{assetError}</p>}<div className="social-editor-asset-grid">{visibleAssets.slice(0, assetLimit).map(asset => <button key={asset.id} draggable onDragStart={e => e.dataTransfer.setData('application/sft-social-asset', asset.id)} onClick={() => { const target = slide.elements.find(e => e.id === replaceTarget && !e.locked); if (target) { updateElements([target.id], { assetId: asset.id, cropX: .5, cropY: .5, cropScale: 1 }); setSelected([target.id]); setReplaceTarget(null); } else addElement('image', asset); }} title={asset.name}>{thumbnails[asset.id] ? <img src={thumbnails[asset.id]} alt="" loading="lazy" /> : <ImagePlus size={24} />}<span>{asset.name}</span></button>)}</div>{visibleAssets.length > assetLimit && <Button variant="outline" size="sm" onClick={() => setAssetLimit(n => n + 60)}>Mostra altre immagini</Button>}{!visibleAssets.length && <p className="muted">Nessun media trovato. Importa un’immagine o apri la libreria.</p>}<p className="muted">Trascina un media sulla slide. Sopra una foto sostituisce l’immagine mantenendo il riquadro.</p></>}
          {tab === 'template' && <><h3>Composizioni fotografiche</h3><div className="social-layout-options">{([1, 2, 3] as const).map(count => <button key={count} onClick={() => applyPhotoLayout(count)}>{count === 1 ? 'Una foto grande' : count === 2 ? 'Due foto affiancate' : 'Tre riquadri'}</button>)}</div><p className="muted">Il layout sostituisce il contenuto di questa slide. Puoi annullare l’operazione.</p>{TEMPLATE_FAMILIES.map(family => <div className="social-layout-choice" key={family.id}><strong>{family.title}</strong><span>{family.description}</span><div className="social-layout-options">{createProject('', project.seasonId, family.id, project.height).slides.map((_, index) => <button key={index} onClick={() => applyTemplate(family.id, index)}>{index === 0 ? 'Copertina' : index === 1 ? 'Contenuti' : 'Chiusura'}</button>)}</div></div>)}</>}
        </div>
      </aside>
      <div className="social-editor-main">
        <div className="social-editor-canvas-toolbar"><span>Slide {slideIndex + 1} di {project.slides.length} · {project.width} × {project.height}</span><div><label><input type="checkbox" checked={guides} onChange={e => setGuides(e.target.checked)} />Guide</label><Button size="icon" variant="ghost" aria-label="Riduci zoom" onClick={() => setZoom(z => Math.max(.1, z - .05))}><ZoomOut size={16} /></Button><output aria-label="Zoom">{Math.round(zoom * 100)}%</output><Button size="icon" variant="ghost" aria-label="Aumenta zoom" onClick={() => setZoom(z => Math.min(1.5, z + .05))}><ZoomIn size={16} /></Button></div></div>
        <div className="social-editor-workarea" ref={workarea}>
          <div className="social-editor-canvas" style={{ width: project.width * zoom, height: project.height * zoom }} onDragOver={e => e.preventDefault()} onDrop={dropAsset}>
            <Stage ref={stage} width={project.width * zoom} height={project.height * zoom} scaleX={zoom} scaleY={zoom} onMouseDown={e => { if (e.target === e.target.getStage() || e.target.name() === 'background') setSelected([]); }} onTouchStart={e => { if (e.target === e.target.getStage() || e.target.name() === 'background') setSelected([]); }}>
              <Layer><Rect name="background" width={project.width} height={project.height} fill={slide.background} />
                {slide.elements.map(element => element.type === 'image' ? <Photo key={element.id} element={element} image={images[element.assetId || '']} {...shapeEvents(element)} /> : element.type === 'text' ? <Text key={element.id} {...shapeEvents(element)} id={element.id} x={element.x} y={element.y} width={element.width} height={element.height} rotation={element.rotation} opacity={editing?.id === element.id ? 0 : element.opacity} visible={!element.hidden} text={element.text || ''} fontFamily={element.fontFamily || 'Kelson'} fontSize={element.fontSize || 48} fontStyle={element.fontStyle || 'normal'} fill={element.fill || '#ffffff'} align={element.align || 'left'} lineHeight={element.lineHeight || 1} wrap="word" /> : <Rect key={element.id} {...shapeEvents(element)} id={element.id} x={element.x} y={element.y} width={element.width} height={element.height} rotation={element.rotation} opacity={element.opacity} visible={!element.hidden} fill={element.fill || '#F2C572'} />)}
                {guides && <><Rect x={64} y={64} width={project.width - 128} height={project.height - 128} stroke="#F2C572" strokeWidth={1 / zoom} dash={[8, 8]} opacity={.6} listening={false} /><Line points={[project.width / 2, 0, project.width / 2, project.height]} stroke="#F2C572" strokeWidth={1 / zoom} dash={[6, 10]} opacity={.25} listening={false} /><Line points={[0, project.height / 2, project.width, project.height / 2]} stroke="#F2C572" strokeWidth={1 / zoom} dash={[6, 10]} opacity={.25} listening={false} /></>}
                <Transformer ref={transformer} onTransformEnd={finishTransform} rotateEnabled flipEnabled={false} keepRatio={selection.some(e => e.type === 'image' && (assets.find(a => a.id === e.assetId)?.source === 'brand' || e.fit === 'contain'))} borderStroke="#812435" anchorStroke="#812435" anchorFill="#ffffff" anchorSize={9} boundBoxFunc={(old, next) => Math.abs(next.width) < 8 || Math.abs(next.height) < 8 ? old : next} />
              </Layer>
            </Stage>
            {editing && editingElement && <textarea autoFocus aria-label="Modifica il testo" className="social-inline-text" style={{ left: editingElement.x * zoom, top: editingElement.y * zoom, width: editingElement.width * zoom, height: editingElement.height * zoom, transform: `rotate(${editingElement.rotation}deg)`, fontSize: (editingElement.fontSize || 48) * zoom, fontFamily: editingElement.fontFamily, color: editingElement.fill, lineHeight: editingElement.lineHeight || 1, fontWeight: editingElement.fontStyle?.includes('bold') ? 'bold' : 'normal', textAlign: (editingElement.align || 'left') as CSSProperties['textAlign'] }} value={editing.text} onChange={e => setEditing({ ...editing, text: e.target.value })} onBlur={() => { updateElements([editing.id], { text: editing.text }); setEditing(null); }} onKeyDown={e => { if (e.key === 'Escape') { setEditing(null); e.stopPropagation(); } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { updateElements([editing.id], { text: editing.text }); setEditing(null); } }} />}
          </div>
        </div>
        <div className="social-slide-strip"><div className="social-slide-list" aria-label="Slide del progetto">{project.slides.map((s, index) => <div key={s.id} className={'social-slide-item ' + (s.id === slide.id ? 'active' : '')} draggable onDragStart={() => { dragSlide.current = s.id; }} onDragOver={e => e.preventDefault()} onDrop={e => { e.preventDefault(); reorderSlide(dragSlide.current, s.id); }}><button onClick={() => changeSlide(s.id)} aria-label={`Apri slide ${index + 1}`} aria-pressed={s.id === slide.id}><SlideThumbnail slide={s} width={project.width} height={project.height} urls={urls} images={images} /><span>{String(index + 1).padStart(2, '0')}</span></button></div>)}</div><div className="social-slide-actions"><Button variant="ghost" size="icon" aria-label="Aggiungi slide" onClick={addSlide}><Plus size={18} /></Button><Button variant="ghost" size="icon" aria-label="Duplica slide" onClick={duplicateSlide}><Copy size={16} /></Button><Button variant="ghost" size="icon" aria-label="Elimina slide" onClick={deleteSlide} disabled={project.slides.length < 2}><Trash2 size={16} /></Button><Button variant="ghost" size="icon" aria-label="Sposta slide prima" disabled={slideIndex === 0} onClick={() => reorderSlide(slide.id, project.slides[slideIndex - 1].id)}><ArrowLeft size={16} /></Button><Button variant="ghost" size="icon" aria-label="Sposta slide dopo" disabled={slideIndex === project.slides.length - 1} onClick={() => reorderSlide(slide.id, project.slides[slideIndex + 1].id)}><ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} /></Button></div></div>
      </div>
      <aside className="social-editor-properties" aria-label="Proprietà e livelli">
        <h2>{selection.length ? `${selection.length === 1 ? first?.type === 'text' ? 'Testo' : first?.type === 'image' ? 'Immagine' : 'Forma' : `${selection.length} elementi`}` : 'La slide'}</h2>
        {!selection.length && <><label className="social-property">Colore di sfondo<input type="color" value={/^#[\da-f]{6}$/i.test(slide.background) ? slide.background : '#812435'} onChange={e => commit(p => ({ ...p, slides: p.slides.map(s => s.id === slide.id ? { ...s, background: e.target.value } : s) }))} /></label><p className="muted">Seleziona un elemento sulla slide o nell’elenco dei livelli.</p></>}
        {selection.length > 0 && <><div className="social-selection-actions"><Button variant="ghost" size="icon" aria-label="Duplica selezione" onClick={duplicate}><Copy size={16} /></Button><Button variant="ghost" size="icon" aria-label="Elimina selezione" onClick={remove}><Trash2 size={16} /></Button><Button variant="ghost" size="icon" aria-label="Porta avanti" onClick={() => reorderLayers(1)}><ArrowUp size={16} /></Button><Button variant="ghost" size="icon" aria-label="Porta indietro" onClick={() => reorderLayers(-1)}><ArrowDown size={16} /></Button><Button variant="ghost" size="icon" aria-label="Raggruppa selezione" disabled={selection.length < 2} onClick={() => updateElements(selected, { groupId: uid() })}><Group size={16} /></Button><Button variant="ghost" size="icon" aria-label="Separa gruppo" disabled={!selection.some(e => e.groupId)} onClick={() => updateElements(selected, { groupId: undefined })}><Ungroup size={16} /></Button></div><div className="social-align-actions">{[['left', 'Sinistra'], ['center', 'Centro'], ['right', 'Destra'], ['top', 'Alto'], ['middle', 'Metà'], ['bottom', 'Basso'], ['distribute', 'Distribuisci']].map(([mode, title]) => <button key={mode} disabled={mode === 'distribute' && selection.length < 3} onClick={() => align(mode as 'left')}>{title}</button>)}</div></>}
        {first && <><div className="social-property-grid">{numeric('X', 'x')}{numeric('Y', 'y')}{numeric('Larghezza', 'width', 8)}{numeric('Altezza', 'height', 8)}{numeric('Rotazione °', 'rotation')}<label className="social-property">Opacità %<input type="number" min={0} max={100} value={Math.round(first.opacity * 100)} disabled={first.locked} onChange={e => updateElements([first.id], { opacity: Math.min(1, Math.max(0, Number(e.target.value) / 100)) })} /></label></div>
          {first.type === 'text' && <><label className="social-property">Contenuto<textarea value={first.text || ''} disabled={first.locked} onChange={e => updateElements([first.id], { text: e.target.value })} rows={4} /></label><label className="social-property">Carattere<select value={first.fontFamily || 'Kelson'} disabled={first.locked} onChange={e => updateElements([first.id], { fontFamily: e.target.value })}>{FONT_FAMILIES.map(font => <option key={font}>{font}</option>)}</select></label>{numeric('Dimensione testo', 'fontSize', 8)}<label className="social-property">Stile<select value={first.fontStyle || 'normal'} disabled={first.locked} onChange={e => updateElements([first.id], { fontStyle: e.target.value })}><option value="normal">Regolare</option><option value="bold">Grassetto</option><option value="italic">Corsivo</option><option value="bold italic">Grassetto corsivo</option></select></label><label className="social-property">Allineamento<select value={first.align || 'left'} disabled={first.locked} onChange={e => updateElements([first.id], { align: e.target.value as 'left' })}><option value="left">Sinistra</option><option value="center">Centro</option><option value="right">Destra</option></select></label></>}
          {first.type !== 'image' && <label className="social-property">Colore<input type="color" value={/^#[\da-f]{6}$/i.test(first.fill || '') ? first.fill : '#812435'} disabled={first.locked} onChange={e => updateElements([first.id], { fill: e.target.value })} /></label>}
          {first.type === 'image' && <><h3>Ritaglio interno</h3><label className="social-property">Adattamento<select value={first.fit || 'cover'} disabled={first.locked} onChange={e => updateElements([first.id], { fit: e.target.value as 'cover' })}><option value="cover">Riempi il riquadro</option><option value="contain">Mantieni immagine intera</option></select></label>{first.fit !== 'contain' && <>{(['cropX', 'cropY', 'cropScale'] as const).map((field, i) => <label key={field} className="social-property">{['Posizione orizzontale', 'Posizione verticale', 'Zoom foto'][i]}<input type="range" min={field === 'cropScale' ? 1 : 0} max={field === 'cropScale' ? 5 : 1} step={.01} value={first[field] ?? (field === 'cropScale' ? 1 : .5)} disabled={first.locked} onChange={e => updateElements([first.id], { [field]: Number(e.target.value) })} /></label>)}</>}<Button size="sm" variant="outline" onClick={() => { setReplaceTarget(first.id); setTab('media'); }}>Sostituisci dalla libreria</Button></>}
        </>}
        <details className="social-layers" open><summary><Layers size={16} />Livelli · {slide.elements.length}</summary><div>{[...slide.elements].reverse().map(element => <div key={element.id} className={'social-layer ' + (selected.includes(element.id) ? 'selected' : '')}><button className="social-layer-title" aria-pressed={selected.includes(element.id)} onClick={e => selectElement(element, e.shiftKey)}>{element.type === 'text' ? <Type size={14} /> : element.type === 'image' ? <ImagePlus size={14} /> : <Square size={14} />}<span>{element.type === 'text' ? element.text || 'Testo' : element.type === 'image' ? assets.find(a => a.id === element.assetId)?.name || 'Immagine' : 'Rettangolo'}</span></button><button aria-label={element.hidden ? 'Mostra livello' : 'Nascondi livello'} onClick={() => updateElements([element.id], { hidden: !element.hidden })}>{element.hidden ? <EyeOff size={14} /> : <Eye size={14} />}</button><button aria-label={element.locked ? 'Sblocca livello' : 'Blocca livello'} onClick={() => updateElements([element.id], { locked: !element.locked })}>{element.locked ? <Lock size={14} /> : <Unlock size={14} />}</button></div>)}</div></details>
        <details className="social-caption"><summary>Caption del carosello</summary><label className="sr-only" htmlFor="social-caption">Caption</label><textarea id="social-caption" value={project.caption} rows={6} onChange={e => commit(p => ({ ...p, caption: e.target.value }))} placeholder="Scrivi il testo del post…" /></details>
        {warnings.length > 0 && <details className="social-export-warnings"><summary>{warnings.length} avvisi per l’esportazione</summary><ul>{warnings.map((warning, index) => <li key={index}>{warning}</li>)}</ul></details>}
        <p className="social-editor-shortcuts">⇧ clic: selezione multipla · ⌘/Ctrl D: duplica · Frecce: sposta · ⇧ frecce: 10 px</p>
      </aside>
    </div>
    <Dialog open={preview} onOpenChange={setPreview}><DialogContent className="social-preview-dialog"><DialogTitle>Anteprima del carosello</DialogTitle><DialogDescription>{project.title} · {project.slides.length} slide · {project.width} × {project.height} px</DialogDescription><div className="social-preview-grid">{project.slides.map((s, index) => <div key={s.id}><SlideThumbnail slide={s} width={project.width} height={project.height} urls={urls} images={images} /><p>Slide {index + 1}</p></div>)}</div>{project.caption && <p className="social-caption-preview">{project.caption}</p>}</DialogContent></Dialog>
  </section>;
}
