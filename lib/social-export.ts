'use client';
import { strToU8, strFromU8, zipSync, unzipSync } from 'fflate';
import { assetBlob, assetUrl, importAsset } from './social-repository';
import { BUILTIN_ASSETS, cloneProject, validateProject, type SocialAsset, type SocialElement, type SocialProject } from './social-model';
export { boundsWarnings } from './social-model';
export function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 30000);
}
/** Crop and editor share normalized focal coordinates; cropScale changes the image inside its fixed frame. */
export function imagePlacement(element: SocialElement, iw: number, ih: number) {
  const w = element.width, h = element.height;
  if (element.fit === 'contain') {
    const ratio = Math.min(w / iw,h / ih);
    return { x:(w-iw*ratio)/2,y:(h-ih*ratio)/2,width:iw*ratio,height:ih*ratio };
  }
  const ratio = Math.max(w / iw,h / ih) * (element.cropScale || 1);
  const cw = w / ratio, ch = h / ratio;
  return { x:0,y:0,width:w,height:h,crop:{x:(iw-cw)*(element.cropX ?? .5),y:(ih-ch)*(element.cropY ?? .5),width:cw,height:ch} };
}
async function loadedImage(asset: SocialAsset) {
  const url = await assetUrl(asset);
  const response = await fetch(url,{signal:AbortSignal.timeout(30000)});
  if (!response.ok) throw new Error(`Media non disponibile: ${asset.name}`);
  const blob = await response.blob(); const local = URL.createObjectURL(blob);
  try { const image = new Image(); image.src = local; await image.decode(); return image; }
  catch { throw new Error(`Immagine non caricata: ${asset.name}`); }
  finally { URL.revokeObjectURL(local); }
}
export async function exportSlide(project: SocialProject, slideIndex: number, assets: SocialAsset[]): Promise<Blob> {
  validateProject(project);
  const slide = project.slides[slideIndex]; if (!slide) throw new Error('Slide non disponibile.');
  const visible = slide.elements.filter(e => !e.hidden);
  if (visible.some(e => e.type === 'image' && (!e.assetId || !assets.some(a => a.id === e.assetId)))) throw new Error('Completa i riquadri fotografici e carica le immagini mancanti prima di esportare il PNG.');
  await Promise.all([...new Set(visible.filter(e => e.type === 'text').map(e => `${e.fontStyle?.includes('italic') ? 'italic ' : ''}${e.fontStyle?.includes('bold') ? 'bold ' : ''}${e.fontSize || 64}px ${e.fontFamily || 'Kelson'}`))].map(font => document.fonts.load(font)));
  await document.fonts.ready;
  const imageIds = [...new Set(visible.filter(e => e.type === 'image').map(e => e.assetId))];
  const images = new Map(await Promise.all(imageIds.map(async id => {
    const asset = assets.find(a => a.id === id); if (!asset) throw new Error('Un’immagine usata nella slide non è disponibile.');
    return [id, await loadedImage(asset)] as const;
  })));
  const { default: Konva } = await import('konva');
  const container = document.createElement('div'); container.style.cssText = 'position:fixed;left:-20000px;top:0'; document.body.append(container);
  const stage = new Konva.Stage({container,width:project.width,height:project.height});
  try {
    const layer = new Konva.Layer(); stage.add(layer); layer.add(new Konva.Rect({x:0,y:0,width:project.width,height:project.height,fill:slide.background}));
    for (const e of visible) {
      const common = {x:e.x,y:e.y,width:e.width,height:e.height,rotation:e.rotation,opacity:e.opacity};
      if (e.type === 'text') layer.add(new Konva.Text({...common,text:e.text || '',fontFamily:e.fontFamily || 'Kelson',fontSize:e.fontSize || 64,fontStyle:e.fontStyle || 'normal',fill:e.fill || '#FFFFFF',align:e.align || 'left',lineHeight:e.lineHeight || 1,wrap:'word'}));
      else if (e.type === 'rect') layer.add(new Konva.Rect({...common,fill:e.fill || '#F2C572'}));
      else { const image = images.get(e.assetId)!; const group = new Konva.Group({...common,clipX:0,clipY:0,clipWidth:e.width,clipHeight:e.height});
        group.add(new Konva.Image({image,...imagePlacement(e,image.naturalWidth,image.naturalHeight)})); layer.add(group); }
    }
    layer.draw(); const blob = await stage.toBlob({mimeType:'image/png',pixelRatio:1});
    if (!blob) throw new Error('Esportazione PNG non riuscita.'); return blob;
  } finally { stage.destroy(); container.remove(); }
}
export async function exportCarousel(project: SocialProject,assets: SocialAsset[]): Promise<Blob> {
  const files: Record<string,Uint8Array> = {};
  // Sequential rendering avoids allocating all full-resolution canvas surfaces at once.
  for (let i=0;i<project.slides.length;i++) files[`${String(i+1).padStart(2,'0')}.png`] = new Uint8Array(await (await exportSlide(project,i,assets)).arrayBuffer());
  files['caption.txt'] = strToU8(project.caption);
  return new Blob([zipSync(files,{level:0}).buffer as ArrayBuffer],{type:'application/zip'});
}
export async function exportPackage(project: SocialProject,assets: SocialAsset[]): Promise<Blob> {
  const ids = new Set(project.slides.flatMap(s => s.elements.filter(e => e.type === 'image').map(e => e.assetId)).filter((id): id is string => Boolean(id)));
  const used = assets.filter(a => ids.has(a.id));
  if ([...ids].some(id => !used.some(a => a.id === id))) throw new Error('Il progetto contiene media mancanti.');
  const files: Record<string,Uint8Array> = {};
  const manifest: { id:string;name:string;folder:string;mime:string;path:string }[] = [];
  for (let i=0;i<used.length;i++) { const a = used[i]; const path = `assets/${String(i).padStart(4,'0')}`;
    files[path] = new Uint8Array(await (await assetBlob(a)).arrayBuffer()); manifest.push({id:a.id,name:a.name,folder:a.folder,mime:a.mime,path}); }
  files['project.json'] = strToU8(JSON.stringify({format:'sft-social-studio',version:1,project,assets:manifest},null,2));
  files['caption.txt'] = strToU8(project.caption);
  return new Blob([zipSync(files,{level:0}).buffer as ArrayBuffer],{type:'application/zip'});
}
/** Portable packages accept embedded images only. No URL from a package is ever fetched. */
export async function importPackage(file: File,seasonId: string): Promise<SocialProject> {
  if (file.size>250*1024*1024) throw new Error('Il pacchetto supera 250 MB.');
  let total = 0, entryCount = 0;
  const files = unzipSync(new Uint8Array(await file.arrayBuffer()),{filter:entry => {
    total += entry.originalSize; entryCount++;
    if (entryCount>5002) throw new Error('Il pacchetto contiene troppi file.');
    if (total>250*1024*1024 || entry.originalSize>20*1024*1024) throw new Error('Pacchetto troppo grande dopo l’estrazione.');
    return entry.name === 'project.json' || /^assets\/\d{4}$/.test(entry.name);
  }});
  if (!files['project.json']) throw new Error('Il pacchetto non contiene un progetto Social Studio.');
  const raw = JSON.parse(strFromU8(files['project.json']));
  if (raw.format !== 'sft-social-studio' || raw.version !== 1 || !Array.isArray(raw.assets) || raw.assets.length>5000) throw new Error('Formato pacchetto non supportato.');
  const project = cloneProject(validateProject(raw.project)); project.seasonId = seasonId; delete project.template;
  const ids = new Map<string,string>();
  for (const asset of raw.assets) {
    if (typeof asset.id !== 'string' || typeof asset.name !== 'string' || typeof asset.folder !== 'string' || typeof asset.mime !== 'string' || !/^assets\/\d{4}$/.test(asset.path) || !files[asset.path]) throw new Error('Media del pacchetto non valido.');
    // Existing immutable brand assets retain their IDs; all other bytes go through normal validation.
    if (BUILTIN_ASSETS.some(a => a.id === asset.id)) { ids.set(asset.id,asset.id); continue; }
    const imported = await importAsset(new File([files[asset.path].buffer as ArrayBuffer],asset.name,{type:asset.mime}),asset.folder);
    ids.set(asset.id,imported.id);
  }
  for (const slide of project.slides) for (const e of slide.elements) if (e.type === 'image' && e.assetId) { const id = ids.get(e.assetId); if (!id) throw new Error('Il pacchetto è incompleto: immagine mancante.'); e.assetId = id; }
  return project;
}
