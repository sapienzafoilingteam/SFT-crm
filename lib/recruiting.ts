import { TEAMS, type EventRecord } from './model';

export const RECRUITING_SHEET = '1VsWkktKRPBPs9rkZR5XDok8OZllv1JPB4QkdjKue46A';
export const RECRUITING_TAB = 1212892271;
export const RECRUITING_STATES = ['Nuova', 'Da contattare', 'Colloquio da fissare', 'Colloquio fissato', 'In valutazione', 'Accettata', 'Non selezionata', 'Ritirata'] as const;
export type RecruitingState = typeof RECRUITING_STATES[number];
export interface RecruitingAnswer { column: number; question: string; answer: string; group: string }
export interface Candidate {
  id: string; source_id: string; season_id: string; submitted_at: string; first_name: string; last_name: string;
  email: string; phone: string; degree: string; year: string; discovery: string; sailing: string;
  requested_team: string; interests: string; answers: RecruitingAnswer[];
  attachments: { id: string; kind: string }[]; source_hash: string; source_missing: boolean;
  stage: RecruitingState; owner: string; assigned_team: string; next_action: string; due_date: string;
  notes: string; evaluation: string; archived: boolean; version: number; updated_at: string;
}
export interface RecruitingActivity { id: string; candidate_id: string; actor: string; text: string; at: string }
export interface RecruitingInterview { id: string; candidate_id: string; event_id: string; notes: string; outcome: string; version: number; event: EventRecord }
export interface RecruitingData { candidates: Candidate[]; activities: RecruitingActivity[]; interviews: RecruitingInterview[]; last_sync: string | null; sync_error: string | null }

export function answerGroup(index: number) {
  if (index < 9) return 'Dati e percorso';
  if (index < 11) return 'Motivazione e documenti';
  if (index < 14) return 'Interessi';
  if (index < 18) return 'Materiali e sostenibilità';
  if (index < 22) return 'Manufacturing e cantiere';
  if (index < 26) return 'Foil e controllo di volo';
  if (index < 29) return 'Elettronica e data analysis';
  return 'Altre risposte';
}
export function teamFromAnswer(value: string) {
  const text = value.toLowerCase();
  return TEAMS.find(t => text.includes(t.id) || text.includes(t.short.toLowerCase()))?.id || '';
}
export function attachmentIds(value: string) {
  return [...new Set([...value.matchAll(/https:\/\/(?:drive|docs)\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=)([a-zA-Z0-9_-]+)/g)].map(m => m[1]))];
}
export function parseCandidate(headers: string[], row: string[], source_id: string, season_id: string) {
  const get = (i: number) => String(row[i] || '').trim();
  if (!get(1) || !get(2) || !get(3)) throw new Error('Candidatura priva di nome, cognome o email: controlla il foglio.');
  return {
    source_id, season_id, submitted_at: get(0), first_name: get(1), last_name: get(2), email: get(3), phone: get(4),
    degree: get(5), year: get(6), discovery: get(7), sailing: get(8), requested_team: get(11),
    interests: [12, 13, 29, 30].map(get).filter(Boolean).join(' · '),
    answers: headers.map((question, index) => ({ column: index + 1, question: question.trim(), answer: get(index), group: answerGroup(index) })).filter(a => a.question && a.question !== 'CRM_ID'),
    attachments: [9, 10].flatMap(i => attachmentIds(get(i)).map(id => ({ id, kind: i === 9 ? 'Lettera motivazionale' : 'Curriculum' }))),
  };
}
export function interviewTitle(team: string) { return 'Colloquio recruiting · ' + (TEAMS.find(t => t.id === team)?.short || 'Team'); }
export function submissionTime(value: string) {
  const parts = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
  return parts ? Date.UTC(Number(parts[3]),Number(parts[2])-1,Number(parts[1]),Number(parts[4] || 0),Number(parts[5] || 0),Number(parts[6] || 0)) : Date.parse(value) || 0;
}
export function csvCell(value: unknown) {
  const text = String(value ?? '');
  return '"' + (/^[\s]*[=+@-]/.test(text) ? "'" : '') + text.replaceAll('"', '""') + '"';
}
export function recruitingCsv(candidates: Candidate[]) {
  const fields: [string, keyof Candidate][] = [['Nome','first_name'],['Cognome','last_name'],['Email','email'],['Telefono','phone'],['Corso','degree'],['Anno','year'],['Reparto richiesto','requested_team'],['Reparto assegnato','assigned_team'],['Stato','stage'],['Responsabile','owner'],['Prossima azione','next_action'],['Scadenza','due_date']];
  return '\uFEFF' + [fields.map(([label]) => csvCell(label)).join(';'), ...candidates.map(c => fields.map(([,key]) => csvCell(c[key])).join(';'))].join('\r\n');
}
export function demoRecruiting(): RecruitingData {
  const c = parseCandidate(['Data','Nome','Cognome','Email','Telefono','Corso','Anno','Provenienza','Esperienze veliche','Lettera','CV','Reparto'], ['08/10/2026 10:00','Alex','Esempio','alex@example.invalid','','Ingegneria elettronica','2','Presentazione in università','Corso di vela','','','Elettronica e Data Analysis'], 'demo-1', '00000000-0000-4000-8000-000000000001');
  return { candidates: [{ ...c, id: '10000000-0000-4000-8000-000000000001', source_hash: '', source_missing: false, stage: 'Nuova', owner: '', assigned_team: '', next_action: '', due_date: '', notes: '', evaluation: '', archived: false, version: 1, updated_at: new Date().toISOString() }], activities: [], interviews: [], last_sync: null, sync_error: null };
}
