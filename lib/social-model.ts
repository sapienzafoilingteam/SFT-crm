import extraBrand from './social-brand.json';
/** The persisted document is independent of the canvas rendering engine. Coordinates are pixels. */
export interface SocialElement {
  id: string; type: 'text' | 'image' | 'rect'; x: number; y: number; width: number; height: number;
  rotation: number; opacity: number; locked: boolean; hidden: boolean; groupId?: string;
  text?: string; fontFamily?: string; fontSize?: number; fontStyle?: string; fill?: string;
  align?: 'left' | 'center' | 'right'; assetId?: string; fit?: 'cover' | 'contain';
  cropX?: number; cropY?: number; cropScale?: number; lineHeight?: number;
}
export interface SocialSlide { id: string; background: string; elements: SocialElement[] }
export interface SocialProject {
  id: string; title: string; seasonId: string; author: string; updatedAt: string; version: number;
  width: number; height: number; caption: string; sponsorId: string; eventId: string; slides: SocialSlide[]; template?: boolean;
}
export interface SocialAsset {
  id: string; name: string; folder: string; mime: string; width: number; height: number; size: number;
  hash: string; source: 'local' | 'drive' | 'brand'; driveId?: string; favorite: boolean;
  collection?: string; storagePath?: string; thumbnailPath?: string; url?: string; sponsorId?: string; seasonId?: string;
}
export const SOCIAL_PALETTE = ['#812435', '#FFFFFF', '#F2C572', '#1A1718'];
export const TEMPLATE_FAMILIES = [
  { id: 'blank', title: 'Pagina vuota', description: 'Un nuovo spazio per la tua idea.' },
  { id: 'new-beginning', title: 'New Beginning', description: 'Titoli grandi, bordeaux e oro.' },
  { id: 'recap', title: 'Recap evento', description: 'Copertina, momenti e ringraziamenti.' },
  { id: 'team', title: 'Meet the Team', description: 'Persone, ruoli e reparti.' },
  { id: 'sponsor', title: 'Sponsor e collaborazioni', description: 'Dai spazio ai partner del team.' },
] as const;
export type TemplateFamily = typeof TEMPLATE_FAMILIES[number]['id'];
export const BUILTIN_ASSETS: SocialAsset[] = ['burgundy', 'white', 'ink', 'original'].map<SocialAsset>(variant => ({
  id: `sft-${variant}`, name: `SFT · ${variant}`, folder: 'SFT', mime: 'image/svg+xml', width: 969, height: 1280,
  size: 0, hash: `builtin-sft-${variant}`, source: 'brand', favorite: false, collection: 'SFT',
  url: `/design-system/brand/logos/sft-${variant}.svg`,
})).concat(extraBrand as SocialAsset[]);
export function newElement(type: SocialElement['type'], patch: Partial<SocialElement> = {}): SocialElement {
  return { id: crypto.randomUUID(), type, x: 80, y: 120, width: 700, height: type === 'text' ? 180 : 600,
    rotation: 0, opacity: 1, locked: false, hidden: false, fill: type === 'text' ? '#FFFFFF' : '#F2C572',
    ...(type === 'text' ? { text: 'Il nostro prossimo capitolo.', fontFamily: 'Kelson', fontSize: 88, align: 'left' as const } : {}), ...patch };
}
export function blankSlide(background = '#812435'): SocialSlide { return { id: crypto.randomUUID(), background, elements: [] }; }
export function createProject(title: string, seasonId: string, family: string = 'blank', height = 1350): SocialProject {
  const p: SocialProject = { id: crypto.randomUUID(), title: title.trim() || 'Nuovo progetto', seasonId, author: '',
    updatedAt: new Date().toISOString(), version: 0, width: 1080, height: height === 1080 ? 1080 : 1350,
    caption: '', sponsorId: '', eventId: '', slides: [blankSlide()] };
  if (family === 'blank') return p;
  const logo = () => newElement('image', { assetId: 'sft-white', x: 80, y: 65, width: 260, height: 150, fit: 'contain' });
  const text = (value: string, y: number, size = 96, color = '#FFFFFF') => newElement('text', { text: value, y, fontSize: size, fill: color, width: 920, height: 300 });
  const line = () => newElement('rect', { x: 80, y: p.height - 145, width: 170, height: 10 });
  const titleText = family === 'new-beginning' ? 'NEW\nBEGINNING.' : family === 'recap' ? 'UNA GIORNATA.\nTANTE STORIE.' : family === 'team' ? 'MEET\nTHE TEAM.' : 'INSIEME,\nPIÙ LONTANO.';
  p.slides[0].elements = [logo(), text(titleText, p.height * .31), text('SAPIENZA FOILING TEAM', p.height - 110, 28, '#F2C572'), line()];
  const second = blankSlide('#FFFFFF');
  second.elements = [newElement('image', { assetId: 'sft-burgundy', x: 80, y: 50, width: 230, height: 140, fit: 'contain' }),
    text(family === 'team' ? 'NOME COGNOME' : family === 'sponsor' ? 'IL NOSTRO PARTNER' : 'I MOMENTI DA RICORDARE', 240, 64, '#812435'),
    newElement('rect', { x: 80, y: 460, width: 920, height: p.height - 650, fill: '#F4E9EC' }),
    text(family === 'team' ? 'Ruolo · Reparto' : 'Aggiungi le foto e racconta la tua storia.', p.height - 150, 32, '#812435')];
  p.slides.push(second);
  if (family === 'recap') { const last = blankSlide(); last.elements = [logo(), text('GRAZIE\nDI ESSERCI.', 380), line()]; p.slides.push(last); }
  return p;
}
export function cloneProject(project: SocialProject): SocialProject {
  return { ...structuredClone(project), id: crypto.randomUUID(), title: project.title + ' · copia', version: 0,
    updatedAt: new Date().toISOString(), slides: project.slides.map(s => ({ ...structuredClone(s), id: crypto.randomUUID(), elements: s.elements.map(e => ({ ...e, id: crypto.randomUUID() })) })) };
}
const color = (x: unknown) => typeof x === 'string' && /^#(?:[a-f\d]{3}|[a-f\d]{4}|[a-f\d]{6}|[a-f\d]{8})$/i.test(x);
const obj = (x: unknown): x is Record<string, unknown> => Boolean(x) && typeof x === 'object' && !Array.isArray(x);
const finite = (n: unknown, min: number, max: number): n is number => typeof n === 'number' && Number.isFinite(n) && n >= min && n <= max;
const string = (s: unknown, max = 300): s is string => typeof s === 'string' && s.length <= max;
function invalid(): never { throw new Error('Progetto non valido o formato non supportato.'); }
export function validateProject(raw: unknown): SocialProject {
  if (!obj(raw)) return invalid();
  if (!string(raw.id) || !string(raw.title) || !raw.title.trim() || !string(raw.seasonId) || !string(raw.author)
    || !string(raw.updatedAt) || !finite(raw.version, 0, 2147483646) || !Number.isInteger(raw.version)
    || raw.width !== 1080 || ![1080, 1350].includes(raw.height as number) || !string(raw.caption, 30000)
    || !string(raw.sponsorId) || !string(raw.eventId) || !Array.isArray(raw.slides) || !raw.slides.length || raw.slides.length > 100) return invalid();
  const ids = new Set<string>();
  const slides = raw.slides.map(s => {
    if (!obj(s) || !string(s.id) || !color(s.background) || !Array.isArray(s.elements) || s.elements.length > 500) return invalid();
    const elements = s.elements.map(e => {
      if (!obj(e) || !string(e.id) || ids.has(e.id) || !['text', 'image', 'rect'].includes(e.type as string)
        || !finite(e.x, -10000, 10000) || !finite(e.y, -10000, 10000) || !finite(e.width, 1, 10000) || !finite(e.height, 1, 10000)
        || !finite(e.rotation, -36000, 36000) || !finite(e.opacity, 0, 1) || typeof e.locked !== 'boolean' || typeof e.hidden !== 'boolean') return invalid();
      ids.add(e.id);
      const result: SocialElement = { id: e.id, type: e.type as SocialElement['type'], x: e.x, y: e.y, width: e.width, height: e.height,
        rotation: e.rotation, opacity: e.opacity, locked: e.locked, hidden: e.hidden };
      if (e.fill !== undefined) { if (!color(e.fill)) return invalid(); result.fill = String(e.fill); }
      if (e.text !== undefined) { if (!string(e.text, 30000)) return invalid(); result.text = e.text; }
      if (e.fontFamily !== undefined) { if (!['Kelson', 'Arial', 'Georgia', 'sans-serif', 'serif'].includes(e.fontFamily as string)) return invalid(); result.fontFamily = String(e.fontFamily); }
      if (e.fontSize !== undefined) { if (!finite(e.fontSize, 1, 1000)) return invalid(); result.fontSize = e.fontSize; }
      if (e.fontStyle !== undefined) { if (!['normal', 'bold', 'italic', 'bold italic'].includes(e.fontStyle as string)) return invalid(); result.fontStyle = String(e.fontStyle); }
      if (e.align !== undefined) { if (!['left', 'center', 'right'].includes(e.align as string)) return invalid(); result.align = e.align as SocialElement['align']; }
      for (const k of ['assetId', 'groupId'] as const) if (e[k] !== undefined) { if (!string(e[k])) return invalid(); result[k] = e[k]; }
      if (e.fit !== undefined) { if (!['cover', 'contain'].includes(e.fit as string)) return invalid(); result.fit = e.fit as SocialElement['fit']; }
      for (const k of ['cropX', 'cropY'] as const) if (e[k] !== undefined) { if (!finite(e[k], 0, 1)) return invalid(); result[k] = e[k]; }
      if (e.lineHeight !== undefined) { if (!finite(e.lineHeight, .5, 5)) return invalid(); result.lineHeight = e.lineHeight; }
      if (e.cropScale !== undefined) { if (!finite(e.cropScale, 1, 10)) return invalid(); result.cropScale = e.cropScale; }
      return result;
    });
    if (ids.has('slide:' + s.id)) return invalid(); ids.add('slide:' + s.id);
    return { id: s.id, background: String(s.background), elements };
  });
  return { id: raw.id, title: raw.title, seasonId: raw.seasonId, author: raw.author, updatedAt: raw.updatedAt,
    version: raw.version, width: 1080, height: raw.height as number, caption: raw.caption, sponsorId: raw.sponsorId, eventId: raw.eventId, slides, ...(raw.template === true ? { template: true } : {}) };
}
/** Reject active and externally linked SVG. Rasterizing this restricted subset never loads third-party URLs. */
export function validateSvg(text: string) {
  if (text.length > 2_000_000 || !/<svg(?:\s|>)/i.test(text) || /<(?:script|foreignObject|iframe|object|embed|image|use|animate|set|style|a)\b|\bon[a-z]+\s*=|\bstyle\s*=|&#|\\|(?:href|src)\s*=|url\s*\(|@import|<!DOCTYPE|<!ENTITY|<\?/i.test(text.replace(/^\s*<\?xml[^?]*\?>/, '')))
    throw new Error('SVG non sicuro: usa un logo senza script, collegamenti o risorse esterne.');
}
export function boundsWarnings(project: SocialProject): string[] {
  return project.slides.flatMap((s, i) => s.elements.filter(e => !e.hidden).flatMap(e => {
    const a = e.rotation * Math.PI / 180;
    const points = [[0, 0], [e.width, 0], [0, e.height], [e.width, e.height]].map(([x, y]) => [e.x + x * Math.cos(a) - y * Math.sin(a), e.y + x * Math.sin(a) + y * Math.cos(a)]);
    return points.some(([x,y]) => x < 0 || y < 0 || x > project.width || y > project.height) ? [`Slide ${i + 1}: ${e.type === 'text' ? (e.text || 'Testo').slice(0, 35) : 'Elemento'} fuori pagina.`] : [];
  }));
}
