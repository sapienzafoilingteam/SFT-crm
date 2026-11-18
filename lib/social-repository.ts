'use client';
import { live, supabase } from './repository';
import { BUILTIN_ASSETS, cloneProject, validateProject, validateSvg, type SocialProject, type SocialAsset } from './social-model';
export interface SocialAccess { allowed: boolean; admin: boolean; userId: string; displayName: string }
export class SocialConflict extends Error { constructor() { super('Questo progetto è stato modificato da un’altra persona. Le tue modifiche sono conservate: ricarica la versione condivisa o salva una copia.'); this.name = 'SocialConflict'; } }
let database: Promise<IDBDatabase> | undefined;
function db() {
  if (!database) database = new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('sft-social-studio-v1', 2);
    request.onupgradeneeded = () => { for (const name of ['projects','assets','blobs']) if (!request.result.objectStoreNames.contains(name)) request.result.createObjectStore(name, { keyPath: 'id' }); };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => { database = undefined; reject(new Error('Il browser non consente il salvataggio locale.')); };
  });
  return database;
}
async function readLocal<T>(store: string, id?: string): Promise<T> {
  const database = await db();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(store, 'readonly');
    const request = id ? transaction.objectStore(store).get(id) : transaction.objectStore(store).getAll();
    request.onsuccess = () => resolve(request.result as T);
    request.onerror = () => reject(new Error('Lettura locale non riuscita.'));
  });
}
async function writeLocal(store: string, value: unknown) {
  const database = await db();
  return new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(store, 'readwrite'); transaction.objectStore(store).put(value);
    transaction.oncomplete = () => resolve(); transaction.onabort = transaction.onerror = () => reject(new Error('Salvataggio locale non riuscito: verifica lo spazio disponibile.'));
  });
}
export async function getAccess(): Promise<SocialAccess> {
  if (!live) return { allowed: true, admin: true, userId: 'demo', displayName: 'Demo locale' };
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) throw new Error('Accedi nuovamente al CRM.');
  const { data, error: memberError } = await supabase.from('members').select('active,is_admin,social_enabled,display_name').eq('id', user.id).single();
  if (memberError) throw new Error('Social non disponibile: verifica che la migrazione Social Studio sia stata applicata.');
  return { allowed: Boolean(data.active && (data.is_admin || data.social_enabled)), admin: Boolean(data.active && data.is_admin), userId: user.id, displayName: data.display_name || user.email || 'Membro del team' };
}
interface ProjectRow { document: unknown; id: string; season_id: string; title: string; author_name: string; updated_at: string; version: number; is_template: boolean }
function fromRow(row: ProjectRow): SocialProject {
  return validateProject({ ...(row.document as object), id: row.id, seasonId: row.season_id, title: row.title, author: row.author_name, updatedAt: row.updated_at, version: row.version, template: row.is_template });
}
export async function listProjects(seasonId: string): Promise<SocialProject[]> {
  if (!live) return (await readLocal<SocialProject[]>('projects')).filter(p => p.seasonId === seasonId && !p.template).sort((a,b) => b.updatedAt.localeCompare(a.updatedAt));
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const rows: SocialProject[] = [];
  for (let offset = 0; ; offset += 100) {
    const { data, error } = await supabase.from('social_projects').select('*').eq('season_id', seasonId).eq('is_template', false).order('updated_at', { ascending: false }).order('id').range(offset, offset + 99);
    if (error) throw new Error('Impossibile caricare i progetti Social. Riprova.');
    rows.push(...(data as ProjectRow[]).map(fromRow)); if (data.length < 100) return rows;
  }
}
export async function getProject(id: string): Promise<SocialProject | null> {
  if (!live) return (await readLocal<SocialProject | undefined>('projects', id)) || null;
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const { data, error } = await supabase.from('social_projects').select('*').eq('id', id).maybeSingle();
  if (error) throw new Error('Impossibile aprire questo progetto.');
  return data ? fromRow(data as ProjectRow) : null;
}
export async function saveProject(input: SocialProject, expectedVersion = input.version): Promise<SocialProject> {
  const project = validateProject(input);
  if (!Number.isInteger(expectedVersion) || expectedVersion < 0) throw new Error('Versione del progetto non valida.');
  if (!live) {
    const database = await db();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction('projects', 'readwrite');
      const store = transaction.objectStore('projects'); const request = store.get(project.id);
      let saved: SocialProject; let conflict = false;
      request.onsuccess = () => {
        const previous = request.result as SocialProject | undefined;
        if ((previous?.version || 0) !== expectedVersion) { conflict = true; transaction.abort(); return; }
        saved = { ...project, author: previous?.author || project.author || 'Demo locale', version: expectedVersion + 1, updatedAt: new Date().toISOString() };
        store.put(saved);
      };
      transaction.oncomplete = () => resolve(saved);
      transaction.onabort = transaction.onerror = () => reject(conflict ? new SocialConflict() : new Error('Salvataggio non riuscito. Verifica lo spazio del browser.'));
    });
  }
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const { data, error } = await supabase.rpc('save_social_project', { p_document: project, p_expected: expectedVersion });
  if (error) { if (error.code === '40001' || error.message.includes('SOCIAL_CONFLICT')) throw new SocialConflict(); throw new Error('Salvataggio non riuscito. Verifica la connessione e i permessi Social.'); }
  return fromRow(data as ProjectRow);
}
export async function deleteProject(id: string, expectedVersion: number) {
  if (!live) {
    const database = await db(); return new Promise<void>((resolve, reject) => {
      const t = database.transaction('projects','readwrite'); const s = t.objectStore('projects'); let conflict = false;
      const r = s.get(id); r.onsuccess = () => { if (r.result?.version !== expectedVersion) { conflict = true; t.abort(); } else s.delete(id); };
      t.oncomplete = () => resolve(); t.onabort = t.onerror = () => reject(conflict ? new SocialConflict() : new Error('Eliminazione non riuscita.'));
    });
  }
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const { error } = await supabase.rpc('delete_social_project', { p_id: id, p_expected: expectedVersion });
  if (error) { if (error.code === '40001') throw new SocialConflict(); throw new Error('Eliminazione non riuscita.'); }
}
export async function listTemplates(): Promise<SocialProject[]> {
  if (!live) return (await readLocal<SocialProject[]>('projects')).filter(p => p.template);
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const projects: SocialProject[] = [];
  for (let offset = 0; ; offset += 100) {
    const { data, error } = await supabase.from('social_projects').select('*').eq('is_template',true).order('updated_at',{ascending:false}).order('id').range(offset,offset+99);
    if (error) throw new Error('Impossibile caricare i template.'); projects.push(...(data as ProjectRow[]).map(fromRow));
    if (data.length < 100) return projects;
  }
}
export async function saveTemplate(project: SocialProject) {
  return saveProject({ ...cloneProject(project), title: project.title, template: true }, 0);
}
function fromAsset(row: Record<string, unknown>): SocialAsset {
  return { id: String(row.id), name: String(row.name), folder: String(row.folder || ''), mime: String(row.mime), width: Number(row.width), height: Number(row.height),
    size: Number(row.size), hash: String(row.hash), source: row.source as SocialAsset['source'], favorite: Boolean(row.favorite), storagePath: String(row.storage_path || ''),
    ...(row.thumbnail_path ? { thumbnailPath: String(row.thumbnail_path) } : {}), ...(row.drive_id ? { driveId: String(row.drive_id) } : {}), ...(row.collection ? { collection: String(row.collection) } : {}),
    ...(row.sponsor_id ? { sponsorId: String(row.sponsor_id) } : {}), ...(row.season_id ? { seasonId: String(row.season_id) } : {}) };
}
export async function listAssets(): Promise<SocialAsset[]> {
  if (!live) { const saved = await readLocal<SocialAsset[]>('assets'); return [...BUILTIN_ASSETS.map(a => saved.find(s => s.id===a.id) || a), ...saved.filter(s => !BUILTIN_ASSETS.some(a => a.id===s.id))]; }
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const rows: SocialAsset[] = [];
  for (let offset = 0; ; offset += 100) {
    const { data, error } = await supabase.from('social_assets').select('*').order('created_at', { ascending: false }).order('id').range(offset, offset + 99);
    if (error) throw new Error('Impossibile caricare i media Social.');
    rows.push(...data.map(fromAsset)); if (data.length < 100) {
      const [{data:overrides,error:overridesError},{data:favorites,error:favoritesError}] = await Promise.all([supabase.from('social_brand_overrides').select('*'),supabase.from('social_asset_favorites').select('asset_id,favorite')]);
      if(overridesError || favoritesError) throw new Error('Impossibile caricare le preferenze dei media.');
      const favorite = new Map((favorites || []).map(f => [f.asset_id, f.favorite]));
      return [...BUILTIN_ASSETS.map(a=>{const o=overrides?.find(o=>o.id===a.id); return o ? {...a,name:o.name,folder:o.folder,collection:o.collection || undefined,sponsorId:o.sponsor_id || undefined,seasonId:o.season_id || undefined} : {...a};}), ...rows].map(a=>({...a,favorite:favorite.get(a.id) ?? false}));
    }
  }
}
const localUrls = new Map<string,string>();
const thumbnailUrls = new Map<string,string>();
export async function assetThumbnailUrl(asset: SocialAsset): Promise<string> {
  if (BUILTIN_ASSETS.some(a => a.id === asset.id)) return assetUrl(asset);
  if (!live) {
    if (thumbnailUrls.has(asset.id)) return thumbnailUrls.get(asset.id)!;
    const saved = await readLocal<{ id: string; blob: Blob; thumbnail?: Blob } | undefined>('blobs',asset.id);
    if (!saved?.thumbnail) return assetUrl(asset);
    const url = URL.createObjectURL(saved.thumbnail); thumbnailUrls.set(asset.id,url); return url;
  }
  if (!supabase || !asset.thumbnailPath) return assetUrl(asset);
  const { data,error } = await supabase.storage.from('social-media').createSignedUrl(asset.thumbnailPath,3600);
  if (error) return assetUrl(asset); return data.signedUrl;
}
async function makeThumbnail(file: File): Promise<Blob | undefined> {
  const url = URL.createObjectURL(file);
  try { const image = new Image(); image.src=url; await image.decode(); const scale=Math.min(1,320/Math.max(image.naturalWidth,image.naturalHeight));
    const c=document.createElement('canvas');c.width=Math.max(1,Math.round(image.naturalWidth*scale));c.height=Math.max(1,Math.round(image.naturalHeight*scale));
    c.getContext('2d')?.drawImage(image,0,0,c.width,c.height);return await new Promise<Blob | undefined>(resolve=>c.toBlob(b=>resolve(b || undefined),'image/webp',.8));
  } catch {return undefined;} finally {URL.revokeObjectURL(url);}
}
export async function assetUrl(asset: SocialAsset, thumbnail = false): Promise<string> {
  if (thumbnail) return assetThumbnailUrl(asset);
  // Imported documents never supply arbitrary URLs; built-in URLs are controlled by source code.
  const builtin = BUILTIN_ASSETS.find(a => a.id === asset.id); if (builtin?.url) return builtin.url;
  if (!live) {
    if (localUrls.has(asset.id)) return localUrls.get(asset.id)!;
    const saved = await readLocal<{ id: string; blob: Blob; thumbnail?: Blob } | undefined>('blobs',asset.id);
    if (!saved?.blob) throw new Error(`Media non disponibile: ${asset.name}`);
    const url = URL.createObjectURL(saved.blob); localUrls.set(asset.id,url); return url;
  }
  if (!supabase || !asset.storagePath) throw new Error(`Media non disponibile: ${asset.name}`);
  const { data, error } = await supabase.storage.from('social-media').createSignedUrl(asset.storagePath,3600);
  if (error) throw new Error(`Impossibile caricare ${asset.name}`); return data.signedUrl;
}
export async function assetBlob(asset: SocialAsset): Promise<Blob> {
  if (!live && !BUILTIN_ASSETS.some(a => a.id === asset.id)) {
    const saved = await readLocal<{ id: string; blob: Blob; thumbnail?: Blob } | undefined>('blobs',asset.id);
    if (!saved?.blob) throw new Error(`Media non disponibile: ${asset.name}`); return saved.blob;
  }
  const response = await fetch(await assetUrl(asset)); if (!response.ok) throw new Error(`Impossibile scaricare ${asset.name}`); return response.blob();
}
export async function importAsset(file: File, folder = '', source: SocialAsset['source'] = 'local', driveId?: string): Promise<SocialAsset> {
  if (!['image/png','image/jpeg','image/webp','image/svg+xml'].includes(file.type)) throw new Error('Usa JPG, PNG, WebP o SVG. Converti le foto HEIC in JPG prima di importarle.');
  if (!file.size || file.size > 20 * 1024 * 1024) throw new Error('Ogni immagine deve essere inferiore a 20 MB.');
  if (file.type === 'image/svg+xml') validateSvg(await file.text());
  const hash = [...new Uint8Array(await crypto.subtle.digest('SHA-256',await file.arrayBuffer()))].map(x => x.toString(16).padStart(2,'0')).join('');
  const assets = await listAssets(); const duplicate = assets.find(a => a.hash === hash && (a.source === 'brand') === (source === 'brand'));
  if (duplicate) return duplicate;
  const access = await getAccess(); if (!access.allowed || (source === 'brand' && !access.admin)) throw new Error('Non hai i permessi per importare in questa libreria.');
  const url = URL.createObjectURL(file);
  let width = 0, height = 0;
  try { const image = new Image(); image.src = url; await image.decode(); width = image.naturalWidth; height = image.naturalHeight; }
  catch { throw new Error('Immagine danneggiata o formato non riconosciuto.'); } finally { URL.revokeObjectURL(url); }
  if (!width || !height || width > 40000 || height > 40000 || width * height > 100_000_000) throw new Error('Dimensioni immagine eccessive. Riduci la risoluzione prima di importare.');
  const id = crypto.randomUUID();
  const asset: SocialAsset = { id, name: file.name.slice(0,300), folder: folder.slice(0,2000), mime: file.type, size: file.size, width,height,hash,source,favorite:false,
    ...(driveId ? { driveId } : {}), ...(source === 'brand' ? { collection: folder.split('/')[0] || 'Brand' } : {}) };
  const thumbnail = await makeThumbnail(file);
  if (!live) { await writeLocal('blobs',{ id:asset.id,blob:file,thumbnail }); await writeLocal('assets',asset); return asset; }
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const storagePath = `${source === 'brand' ? 'brand' : access.userId}/${id}/${file.name.replace(/[^a-zA-Z0-9._-]/g,'_')}`;
  const { error: uploadError } = await supabase.storage.from('social-media').upload(storagePath,file,{contentType:file.type,upsert:false});
  if (uploadError) throw new Error('Caricamento immagine non riuscito. Riprova.');
  let thumbnailPath: string | undefined;
  if (thumbnail) { const path = `${source === 'brand' ? 'brand' : access.userId}/${id}/thumbnail.webp`; const {error: thumbError} = await supabase.storage.from('social-media').upload(path,thumbnail,{contentType:'image/webp',upsert:false}); if (!thumbError) thumbnailPath=path; }
  const { error } = await supabase.from('social_assets').insert({ id,name:asset.name,folder:asset.folder,mime:asset.mime,size:asset.size,width,height,hash,source,
    drive_id:driveId || null,collection:asset.collection || null,favorite:false,storage_path:storagePath,thumbnail_path:thumbnailPath || null,created_by:access.userId });
  if (error) throw new Error('Immagine caricata ma registrazione non riuscita. Riprova l’importazione.');
  return { ...asset,storagePath,thumbnailPath };
}
export async function saveAsset(asset: SocialAsset): Promise<SocialAsset> {
  const builtin = BUILTIN_ASSETS.find(a => a.id === asset.id);
  if (builtin) {
    if (!live) { await writeLocal('assets',asset); return asset; }
    if (!supabase) throw new Error('Configurazione Supabase mancante.');
    const access = await getAccess();
    if (access.admin) {
      const {error} = await supabase.from('social_brand_overrides').upsert({id:asset.id,name:asset.name,folder:asset.folder,collection:asset.collection || null,sponsor_id:asset.sponsorId || null,season_id:asset.seasonId || null});
      if (error) throw new Error('Aggiornamento brand non riuscito.');
    }
    const {error} = await supabase.from('social_asset_favorites').upsert({user_id:access.userId,asset_id:asset.id,favorite:asset.favorite});
    if (error) throw new Error('Aggiornamento preferiti non riuscito.');return asset;
  }
  if (!live) { const previous = await readLocal<SocialAsset & {blob?:Blob}>('assets',asset.id); if (!previous) throw new Error('Media non disponibile.'); await writeLocal('assets',{ ...previous,name:asset.name,folder:asset.folder,favorite:asset.favorite,collection:asset.collection,sponsorId:asset.sponsorId,seasonId:asset.seasonId }); return asset; }
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const access=await getAccess();
  if (asset.source === 'brand' && !access.admin) {
    const {data:previous,error} = await supabase.from('social_assets').select('name,folder,collection,sponsor_id,season_id').eq('id',asset.id).single();
    if(error || !previous || previous.name!==asset.name || previous.folder!==asset.folder || (previous.collection || '')!==(asset.collection || '') || (previous.sponsor_id || '')!==(asset.sponsorId || '') || (previous.season_id || '')!==(asset.seasonId || '')) throw new Error('La gestione Brand è riservata ai responsabili.');
  } else {
    const { error } = await supabase.from('social_assets').update({ name:asset.name,folder:asset.folder,collection:asset.collection || null,sponsor_id:asset.sponsorId || null,season_id:asset.seasonId || null }).eq('id',asset.id).select('id').single();
    if (error) throw new Error('Aggiornamento media non riuscito.');
  }
  const {error:favoriteError}=await supabase.from('social_asset_favorites').upsert({user_id:access.userId,asset_id:asset.id,favorite:asset.favorite});
  if(favoriteError) throw new Error('Aggiornamento preferiti non riuscito.'); return asset;
}
