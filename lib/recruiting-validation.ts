import { RECRUITING_STATES, interviewTitle } from './recruiting';
import { TEAMS } from './model';
export function uuid(value: unknown): value is string { return typeof value === 'string' && /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value); }
export function version(value: unknown) { if (!Number.isInteger(value) || Number(value) < 1) throw new Error('Versione non valida.'); return Number(value); }
function text(value: unknown, max = 12000) { if (typeof value !== 'string' || value.length > max) throw new Error('Testo non valido o troppo lungo.'); return value; }
function date(value: unknown) {
  const t = text(value, 10);
  if (t && (!/^\d{4}-\d{2}-\d{2}$/.test(t) || !Number.isFinite(Date.parse(t + 'T12:00:00Z')) || new Date(t + 'T12:00:00Z').toISOString().slice(0, 10) !== t)) throw new Error('Data non valida.');
  return t;
}
export function candidateFields(input: unknown) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Modifiche non valide.');
  const fields = input as Record<string, unknown>, output: Record<string, string | boolean> = {};
  for (const [key, value] of Object.entries(fields)) {
    if (key === 'archived') { if (typeof value !== 'boolean') throw new Error('Archivio non valido.'); output[key] = value; }
    else if (['stage','owner','assigned_team','next_action','due_date','notes','evaluation'].includes(key)) output[key] = text(value, ['notes','evaluation'].includes(key) ? 12000 : 500);
    else throw new Error('Campo non modificabile.');
  }
  if (output.stage && !RECRUITING_STATES.includes(output.stage as typeof RECRUITING_STATES[number])) throw new Error('Stato non valido.');
  if (output.assigned_team && !TEAMS.some(t => t.id === output.assigned_team)) throw new Error('Reparto non valido.');
  if ('due_date' in output) date(output.due_date);
  return output;
}
export function interviewFields(input: Record<string, unknown>) {
  if (!TEAMS.some(t => t.id === input.team_id)) throw new Error('Seleziona il reparto del colloquio.');
  const day = date(input.date);
  const start = text(input.start_time, 5), end = text(input.end_time, 5);
  if (!day || !/^([01]\d|2[0-3]):[0-5]\d$/.test(start) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(end) || end <= start) throw new Error('Inserisci data e orari validi; la fine deve seguire l’inizio nello stesso giorno.');
  const status = text(input.status, 20);
  if (!['Confermato','Concluso','Annullato'].includes(status)) throw new Error('Stato del colloquio non valido.');
  return { title: interviewTitle(String(input.team_id)), team_id: String(input.team_id), date: day, start_time: start, end_time: end,
    location: text(input.location, 1000), description: 'Selezionatori: ' + text(input.interviewers, 500), status,
    notes: text(input.notes), outcome: text(input.outcome, 2000) };
}
