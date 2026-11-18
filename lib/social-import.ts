import { createProject, newElement, validateProject, type SocialProject } from './social-model';
import { importAsset } from './social-repository';
import legacyLayout from './social-legacy-layout.json';

/** Converts the actual SFT Day editor v1/v2 document, never evaluating HTML or scripts. */
export async function importLegacy(raw: unknown, seasonId: string, progress?: (message: string) => void): Promise<SocialProject> {
  if (!raw || typeof raw !== 'object') throw new Error('Progetto non valido.');
  const doc = raw as Record<string, unknown>;
  if (doc.format !== 'sft-day-editor' || ![1, 2].includes(Number(doc.version)) || !Array.isArray(doc.slides) || doc.slides.length !== 5) throw new Error('Formato SFT Day non riconosciuto.');
  if (typeof doc.caption !== 'string' || doc.caption.length > 30000) throw new Error('Caption non valida.');
  const project = createProject('SFT Day · Recap', seasonId); project.caption = doc.caption;
  project.slides = [];
  for (let index = 0; index < doc.slides.length; index++) {
    progress?.(`Importazione SFT Day: slide ${index + 1} / 5`);
    const rawSlide = doc.slides[index];
    if (!rawSlide || typeof rawSlide !== 'object') throw new Error('Slide incompleta.');
    const s = rawSlide as Record<string, unknown>;
    const defaults = legacyLayout.slides[index];
    if (!Array.isArray(s.photos) || !Array.isArray(s.logos) || !Array.isArray(s.texts) || s.photos.length > 100 || s.logos.length > 100 || s.texts.length > 100) throw new Error('Elementi della slide non validi.');
    const slide = { id: crypto.randomUUID(), background: String(s.background || defaults.background), elements: [] as ReturnType<typeof newElement>[] };
    if (s.waves ?? defaults.waves) {
      const paths = Array.from({ length: 15 }, (_, n) => { const y = -60 + n * 110; return `<path d="M-120 ${y} C310 ${y + 200} 710 ${y - 210} 1200 ${y - 90}"/>`; }).join('');
      const waves = new File([`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350"><g fill="none" stroke="#ffffff" stroke-width="2" opacity="0.045">${paths}</g></svg>`], 'Onde SFT.svg', { type: 'image/svg+xml' });
      const stored = await importAsset(waves, 'SFT Day');
      slide.elements.push(newElement('image', { assetId: stored.id, x: 0, y: 0, width: 1080, height: 1350, fit: 'contain', locked: true }));
    }
    for (const type of ['photos', 'logos'] as const) {
      for (let j = 0; j < (s[type] as unknown[]).length; j++) {
        const asset = (s[type] as Record<string, unknown>[])[j];
        if (!asset || typeof asset.src !== 'string' || !/^data:image\/(?:jpeg|png|webp|svg\+xml);base64,[a-zA-Z0-9+/=\s]+$/.test(asset.src)) throw new Error('Il vecchio progetto contiene un’immagine non valida.');
        let blob = await (await fetch(asset.src)).blob();
        if (blob.type === 'image/svg+xml') {
          // Old SFT logo uses inline opacity declarations. Strip CSS; the normal SVG validator still rejects scripts and links.
          const xml = new DOMParser().parseFromString(await blob.text(), 'image/svg+xml');
          if (xml.querySelector('parsererror')) throw new Error('Logo SVG non valido.');
          xml.querySelectorAll('[style]').forEach(node => node.removeAttribute('style'));
          blob = new Blob([new XMLSerializer().serializeToString(xml)], { type: 'image/svg+xml' });
        }
        const extension = blob.type === 'image/svg+xml' ? 'svg' : blob.type.split('/')[1];
        const stored = await importAsset(new File([blob], `${String(asset.label || type + j).slice(0, 90)}.${extension}`, { type: blob.type }), 'SFT Day');
        const fallback = defaults[type][j] || { x: 78, y: 404, w: 400, h: 400 };
        slide.elements.push(newElement('image', { assetId: stored.id, x: Number(asset.x ?? fallback.x), y: Number(asset.y ?? fallback.y), width: Number(asset.w ?? fallback.w), height: Number(asset.h ?? fallback.h), fit: type === 'logos' ? 'contain' : 'cover', cropX: Number(asset.cx ?? .5), cropY: Number(asset.cy ?? .5), cropScale: Number(asset.zoom ?? 1) }));
      }
    }
    for (let j = 0; j < s.texts.length; j++) {
      const text = s.texts[j] as Record<string, unknown>;
      const fallback = defaults.texts[j];
      if (!text || typeof text.text !== 'string' || !fallback) throw new Error('Testo della slide non valido.');
      slide.elements.push(newElement('text', { text: text.text, x: Number(text.x ?? fallback.x), y: Number(text.y ?? fallback.y), width: Number(text.w ?? fallback.w), height: Number(text.h ?? fallback.h), fontSize: Number(text.size ?? fallback.size), fill: String(text.color ?? fallback.color), fontStyle: Number(text.weight ?? fallback.weight) >= 700 ? 'bold' : 'normal', lineHeight: Number(text.leading ?? fallback.leading) }));
    }
    slide.elements.push(newElement('text', { text: 'SAPIENZA FOILING TEAM', x: 78, y: 1286, width: 750, height: 30, fontSize: 18, fill: String(s.footer || defaults.footer) }), newElement('text', { text: `${String(index + 1).padStart(2, '0')} / 05`, x: 920, y: 1286, width: 110, height: 30, fontSize: 18, fill: String(s.footer || defaults.footer) }));
    project.slides.push(slide);
  }
  return validateProject(project);
}

export async function importStudioFile(file: File, seasonId: string, progress?: (message: string) => void): Promise<SocialProject> {
  if (file.size > 220 * 1024 * 1024) throw new Error('Il progetto supera 220 MB.');
  let raw: unknown;
  if (file.name.toLowerCase().endsWith('.zip')) {
    const { importPackage } = await import('./social-export');
    return importPackage(file, seasonId);
  }
  if (file.name.toLowerCase().endsWith('.html')) {
    const match = (await file.text()).match(/<script\b[^>]*id=["']initial-data["'][^>]*>([\s\S]*?)<\/script>/i);
    if (!match) throw new Error('Usa il JSON del progetto o il file editor.html di SFT Day.');
    raw = JSON.parse(match[1]);
  } else raw = JSON.parse(await file.text());
  if ((raw as Record<string, unknown>)?.format === 'sft-day-editor') return importLegacy(raw, seasonId, progress);
  const project = validateProject(raw); project.id = crypto.randomUUID(); project.version = 0; project.seasonId = seasonId;
  return project;
}
