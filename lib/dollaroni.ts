import { base, type Report } from './model';

export interface DollaroniProject {
  schema: 'dollaroni/1';
  name: string;
  season: number;
  stage: 'S1' | 'S2';
  parts: Record<string, unknown>[];
  lines: Record<string, unknown>[];
  catalogExtras: Record<string, unknown>[];
  [key: string]: unknown;
}
export const DOLLARONI_MAX_BYTES = 5 * 1024 * 1024;
const KIND = 'dollaroni-project';

/** Preserve the original project format, including baseline, custom catalog and future fields. */
export function validateDollaroniProject(value: unknown): DollaroniProject {
  const text = JSON.stringify(value);
  if (!text || new TextEncoder().encode(text).length > DOLLARONI_MAX_BYTES)
    throw new Error('Il progetto supera il limite di 5 MB. Salvalo su file.');
  const check = (input: unknown, depth = 0): DollaroniProject => {
    if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Progetto Dollaroni non valido.');
    const p = input as Record<string, unknown>;
    if (p.schema !== 'dollaroni/1' || typeof p.name !== 'string' || !p.name.trim() || p.name.length > 200 ||
      !Number.isInteger(p.season) || Number(p.season) < 2000 || Number(p.season) > 2200 || !['S1', 'S2'].includes(String(p.stage)))
      throw new Error('Controlla formato, nome, stagione e fase del progetto Dollaroni.');
    for (const key of ['parts', 'lines', 'catalogExtras']) {
      if (!Array.isArray(p[key]) || p[key].length > 10000 || p[key].some(row => !row || typeof row !== 'object' || Array.isArray(row)))
        throw new Error(`La sezione ${key} del progetto non è valida.`);
    }
    if (p.baseline != null) {
      if (depth > 0 || typeof p.baseline !== 'object' || Array.isArray(p.baseline)) throw new Error('Il riferimento S1 non è valido.');
      check((p.baseline as Record<string, unknown>).project, depth + 1);
    }
    return p as unknown as DollaroniProject;
  };
  return check(JSON.parse(text));
}

/** Projects reuse the CRM's versioned, member-only reports storage, like feature requests. */
export function isDollaroniReport(report: Report): boolean {
  if (report.team_id !== 'materiali') return false;
  try { return JSON.parse(report.content)?.kind === KIND; } catch { return false; }
}
export function readDollaroni(report: Report): { kind: 'dollaroni-project'; project: DollaroniProject } | null {
  if (!isDollaroniReport(report)) return null;
  try { return { kind: KIND, project: validateDollaroniProject(JSON.parse(report.content).project) }; }
  catch { return null; }
}
export function makeDollaroniReport(project: DollaroniProject, season: string, existing?: Report): Report {
  const checked = validateDollaroniProject(project);
  if (existing && (!isDollaroniReport(existing) || existing.season_id !== season || existing.archived))
    throw new Error('Il progetto condiviso appartiene a un’altra stagione o non è più disponibile.');
  return {
    ...(existing || base(season)), team_id: 'materiali',
    title: `Dollaroni · ${checked.name} · ${checked.stage}`,
    content: JSON.stringify({ kind: KIND, project: checked }),
    date: new Date().toISOString().slice(0, 10), url: '',
  };
}
