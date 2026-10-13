import { DEPARTMENT_MEETING } from './department-resources';
import { googleId, romeDateTime, type GoogleEvent } from './calendar';

export interface RecurringCalendarSeries {
  key: string;
  seasonId: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  timeZone: string;
  recurrence: string[];
}
export const recurringCalendarSeries: RecurringCalendarSeries[] = [{
  key: 'department-meeting:' + DEPARTMENT_MEETING.seasonId,
  seasonId: DEPARTMENT_MEETING.seasonId,
  title: DEPARTMENT_MEETING.title,
  description: 'Riunione settimanale di tutti i reparti · Ogni mercoledì, 15:00–19:00 · Ora di Roma',
  date: DEPARTMENT_MEETING.startDate,
  startTime: DEPARTMENT_MEETING.startTime,
  endTime: DEPARTMENT_MEETING.endTime,
  timeZone: DEPARTMENT_MEETING.timeZone,
  recurrence: ['RRULE:FREQ=WEEKLY;BYDAY=WE'],
}];

export function recurringSeriesBody(series: RecurringCalendarSeries): GoogleEvent {
  if (series.timeZone !== 'Europe/Rome') throw new Error('Fuso della ricorrenza non supportato.');
  return {
    id: googleId('events', series.key), summary: series.title, description: series.description,
    start: { dateTime: romeDateTime(series.date, series.startTime), timeZone: series.timeZone },
    end: { dateTime: romeDateTime(series.date, series.endTime), timeZone: series.timeZone },
    recurrence: [...series.recurrence],
    extendedProperties: { private: { sft_series: series.key } },
  };
}
function sameSeries(expected: GoogleEvent, remote: GoogleEvent) {
  const sameTime = (a: GoogleEvent['start'], b: GoogleEvent['start']) =>
    !!a?.dateTime && !!b?.dateTime && Date.parse(a.dateTime) === Date.parse(b.dateTime) && a.timeZone === b.timeZone;
  return remote.status !== 'cancelled' && !remote.recurringEventId &&
    remote.summary === expected.summary && (remote.description || '') === expected.description &&
    sameTime(expected.start, remote.start) && sameTime(expected.end, remote.end) &&
    JSON.stringify([...(remote.recurrence || [])].sort()) === JSON.stringify([...(expected.recurrence || [])].sort()) &&
    remote.extendedProperties?.private?.sft_series === expected.extendedProperties?.private?.sft_series;
}
export interface RecurringCalendarStore {
  get(id: string): Promise<GoogleEvent | null>;
  create(event: GoogleEvent): Promise<GoogleEvent | null>;
}
/** Native Google series, with stable IDs across interactive sync, cron and retries. */
export async function syncRecurringCalendarSeries(series: readonly RecurringCalendarSeries[], store: RecurringCalendarStore) {
  const result = { exported: 0, conflicts: [] as string[], events: [] as GoogleEvent[] };
  for (const item of series) {
    const expected = recurringSeriesBody(item);
    // Read the master directly, including cancelled masters; never recreate a deleted series.
    let event = await store.get(expected.id);
    let created = false;
    if (!event) {
      event = await store.create(expected);
      created = !!event;
      // A concurrent insert can return 409; recover by reading the deterministic ID.
      if (!event) event = await store.get(expected.id);
    }
    if (event) result.events.push(event);
    if (!event || !sameSeries(expected, event)) {
      result.conflicts.push(item.title + ' (serie ricorrente modificata su Google Calendar: verifica ricorrenza, orari e cancellazione)');
      continue;
    }
    if (created) result.exported++;
  }
  return result;
}
