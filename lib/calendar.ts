import { createHash } from 'node:crypto';
import type { Delivery, EventRecord } from './model';
export type AgendaTable = 'events' | 'deliveries';
export type AgendaRow = EventRecord | Delivery;
export interface GoogleEvent {
  id: string; etag?: string; status?: string; summary?: string; description?: string; location?: string;
  start?: { date?: string; dateTime?: string; timeZone?: string };
  end?: { date?: string; dateTime?: string; timeZone?: string };
  recurrence?: string[]; recurringEventId?: string; eventType?: string;
  extendedProperties?: { private?: Record<string, string> };
}
export interface CalendarLink {
  calendar_id: string; google_id: string; collection: AgendaTable; record_id: string;
  local_hash: string; google_hash: string;
}
function hash(value: unknown) { return createHash('sha256').update(JSON.stringify(value)).digest('hex'); }
export function localFields(table: AgendaTable, row: AgendaRow) {
  return { title: row.title, date: row.date, description: table === 'events' ? (row as EventRecord).description : (row as Delivery).notes,
    location: table === 'events' ? (row as EventRecord).location : '', archived: row.archived,
    ...(table === 'events' && (row as EventRecord).start_time && (row as EventRecord).end_time ? { start_time: (row as EventRecord).start_time, end_time: (row as EventRecord).end_time } : {}) };
}
export const localHash = (table: AgendaTable, row: AgendaRow) => hash(localFields(table, row));
export const googleHash = (event: GoogleEvent) => hash(event.status === 'cancelled' ? { deleted: true } : { title: event.summary || '', description: event.description || '',
  location: event.location || '', start: event.start, end: event.end, deleted: event.status === 'cancelled' });
export function googleDate(event: GoogleEvent) {
  if (event.start?.date) return event.start.date;
  if (!event.start?.dateTime) return '';
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: event.start.timeZone || 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date(event.start.dateTime));
  const get = (type: string) => parts.find(p => p.type === type)!.value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
export function nextDay(date: string, delta = 1) {
  return new Date(Date.parse(date + 'T12:00:00Z') + delta * 86400000).toISOString().slice(0, 10);
}
export function googleId(table: AgendaTable, id: string) { return 'sft' + hash([table, id]).slice(0, 48); }
export function importId(calendar: string, id: string) {
  const h = hash([calendar, id]); return `${h.slice(0, 8)}-${h.slice(8, 12)}-4${h.slice(13, 16)}-a${h.slice(17, 20)}-${h.slice(20, 32)}`;
}
export function direction(link: CalendarLink, table: AgendaTable, row: AgendaRow, event: GoogleEvent) {
  const local = localHash(table, row) !== link.local_hash;
  const google = googleHash(event) !== link.google_hash;
  return local && google ? 'conflict' : local ? 'push' : google ? 'pull' : 'none';
}
// Resolve a wall-clock time in its IANA zone, including daylight saving changes.
function shiftTime(value: string, zone: string, delta: number) {
  const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
  const parts = formatter.formatToParts(new Date(value));
  const get = (type: string) => Number(parts.find(p => p.type === type)!.value);
  const desired = Date.UTC(get('year'), get('month') - 1, get('day') + delta, get('hour'), get('minute'), get('second'));
  let instant = desired;
  for (let i = 0; i < 4; i++) {
    const p = formatter.formatToParts(new Date(instant));
    const n = (type: string) => Number(p.find(x => x.type === type)!.value);
    const rendered = Date.UTC(n('year'), n('month') - 1, n('day'), n('hour'), n('minute'), n('second'));
    if (rendered === desired) return new Date(instant).toISOString();
    instant += desired - rendered;
  }
  throw new Error('L’orario spostato non esiste nel cambio di ora legale. Modifica la data su Google Calendar.');
}
export function romeDateTime(date: string, time: string) {
  const desired = Date.parse(`${date}T${time}:00Z`);
  if (!Number.isFinite(desired)) throw new Error('Data o orario non validi.');
  const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  let instant = desired;
  for (let i = 0; i < 4; i++) {
    const p = formatter.formatToParts(new Date(instant));
    const get = (type: string) => p.find(x => x.type === type)!.value;
    const rendered = Date.parse(`${get('year')}-${get('month')}-${get('day')}T${get('hour')}:${get('minute')}:00Z`);
    if (rendered === desired) return new Date(instant).toISOString();
    instant += desired - rendered;
  }
  throw new Error('Questo orario non esiste nel cambio di ora legale. Scegli un altro orario.');
}
function romeTime(value?: string) {
  return value ? new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(new Date(value)) : '';
}
export function googleBody(table: AgendaTable, row: AgendaRow, previous?: GoogleEvent) {
  const fields = localFields(table, row);
  let start = previous?.start, end = previous?.end;
  const oldDate = previous ? googleDate(previous) : '';
  if (table === 'events' && (row as EventRecord).start_time && (row as EventRecord).end_time) {
    start = { dateTime: romeDateTime(row.date, (row as EventRecord).start_time!), timeZone: 'Europe/Rome' };
    end = { dateTime: romeDateTime(row.date, (row as EventRecord).end_time!), timeZone: 'Europe/Rome' };
  }
  else if (!start || !end) { start = { date: row.date }; end = { date: nextDay(row.date) }; }
  else if (oldDate !== row.date) {
    const delta = Math.round((Date.parse(row.date) - Date.parse(oldDate)) / 86400000);
    if (start.date && end.date) { start = { date: row.date }; end = { date: nextDay(end.date, delta) }; }
    else if (start.dateTime && end.dateTime) {
      const zone = start.timeZone || 'Europe/Rome';
      start = { dateTime: shiftTime(start.dateTime, zone, delta), timeZone: zone };
      end = { dateTime: shiftTime(end.dateTime, end.timeZone || zone, delta), timeZone: end.timeZone || zone };
    }
  }
  return { summary: fields.title, description: fields.description, ...(table === 'events' ? { location: fields.location } : {}), start, end,
    extendedProperties: { private: { ...previous?.extendedProperties?.private, sft_collection: table, sft_record: row.id } } };
}
export function pullFields(table: AgendaTable, event: GoogleEvent) {
  if (event.status === 'cancelled') return { archived: true };
  return { title: event.summary || '(Senza titolo)', date: googleDate(event), archived: false,
    ...(table === 'events' ? { description: event.description || '', location: event.location || '',
      start_time: event.start?.dateTime && event.end?.dateTime && googleDate({ id: event.id, start: { dateTime: event.end.dateTime, timeZone: 'Europe/Rome' } }) === googleDate({ id: event.id, start: { dateTime: event.start.dateTime, timeZone: 'Europe/Rome' } }) ? romeTime(event.start.dateTime) : '',
      end_time: event.start?.dateTime && event.end?.dateTime && googleDate({ id: event.id, start: { dateTime: event.end.dateTime, timeZone: 'Europe/Rome' } }) === googleDate({ id: event.id, start: { dateTime: event.start.dateTime, timeZone: 'Europe/Rome' } }) ? romeTime(event.end.dateTime) : '',
    } : { notes: event.description || '' }) };
}
