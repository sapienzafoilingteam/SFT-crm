import test from 'node:test';
import assert from 'node:assert/strict';
import { recurringCalendarSeries, recurringSeriesBody, syncRecurringCalendarSeries } from '../lib/calendar-recurring';
import type { GoogleEvent } from '../lib/calendar';

test('weekly master has native recurrence, a stable ID and Rome wall-clock times', () => {
  const series = recurringCalendarSeries[0];
  const event = recurringSeriesBody(series);
  assert.match(event.id, /^[0-9a-v]{5,1024}$/);
  assert.deepEqual(event.recurrence, ['RRULE:FREQ=WEEKLY;BYDAY=WE']);
  assert.deepEqual(event.start, { dateTime: '2026-10-14T13:00:00.000Z', timeZone: 'Europe/Rome' });
  assert.deepEqual(event.end, { dateTime: '2026-10-14T17:00:00.000Z', timeZone: 'Europe/Rome' });
  const winter = recurringSeriesBody({ ...series, date: '2026-10-28' });
  assert.equal(winter.start?.dateTime, '2026-10-28T14:00:00.000Z');
  assert.equal(winter.end?.dateTime, '2026-10-28T18:00:00.000Z');
  assert.equal(winter.id, event.id);
});
test('reruns, restarts and an uncertain insertion create only one master', async () => {
  let event: GoogleEvent | null = null, inserts = 0;
  const store = { get: async () => event, create: async (body: GoogleEvent) => { inserts++; event = structuredClone(body); return event; } };
  assert.equal((await syncRecurringCalendarSeries(recurringCalendarSeries, store)).exported, 1);
  assert.equal((await syncRecurringCalendarSeries(recurringCalendarSeries, store)).exported, 0);
  assert.equal(inserts, 1);
  // Equivalent date-time formatting returned by Google must not cause false conflicts.
  event!.start!.dateTime = '2026-10-14T15:00:00+02:00';
  assert.deepEqual((await syncRecurringCalendarSeries(recurringCalendarSeries, store)).conflicts, []);
  let firstRead = true;
  const uncertain = { get: async () => { if (firstRead) { firstRead = false; return null; } return event; }, create: async () => null };
  assert.deepEqual((await syncRecurringCalendarSeries(recurringCalendarSeries, uncertain)).conflicts, []);
});
test('Google edits and cancellations are retained and reported instead of being overwritten or recreated', async () => {
  const expected = recurringSeriesBody(recurringCalendarSeries[0]);
  let inserts = 0;
  for (const change of [{ status: 'cancelled' }, { summary: 'Modificata' }, { recurrence: ['RRULE:FREQ=MONTHLY'] }, { start: { dateTime: '2026-10-14T14:00:00Z', timeZone: 'Europe/Rome' } }]) {
    const modified = { ...expected, ...change };
    const result = await syncRecurringCalendarSeries(recurringCalendarSeries, { get: async () => modified, create: async () => { inserts++; return null; } });
    assert.equal(result.conflicts.length, 1);
    assert.equal(result.exported, 0);
    assert.deepEqual(result.events[0], modified);
  }
  assert.equal(inserts, 0);
});
