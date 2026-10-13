import { SEASONS, type EventRecord } from './model';

// Final team reports from the 2025/2026 season, verified in the shared Drive.
export const PREVIOUS_SEASON_REPORTS = [
  { stage: 'S1', season: '2025 / 2026', url: 'https://drive.google.com/file/d/1DPbQ_1NFargHWS6wsLFea8sM6b7M0a77/view' },
  { stage: 'S2', season: '2025 / 2026', url: 'https://docs.google.com/document/d/1KFk6f-kUFV7cVsmQVs1G6jipr16qMsbJi10zx7Wg80E/edit' },
] as const;

// A single shared weekly series, expanded for the month being viewed.
export const DEPARTMENT_MEETING = {
  title: 'Riunione dei reparti', startDate: '2026-10-14',
  startTime: '15:00', endTime: '19:00', timeZone: 'Europe/Rome',
  seasonId: SEASONS[0].id,
} as const;

export function romeClock(now: Date) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: DEPARTMENT_MEETING.timeZone, year: 'numeric', month: '2-digit',
    day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(now);
  const get = (type: string) => parts.find(p => p.type === type)!.value;
  return { date: `${get('year')}-${get('month')}-${get('day')}`, time: `${get('hour')}:${get('minute')}` };
}
function addDays(date: string, days: number) {
  const value = new Date(date + 'T12:00:00Z');
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}
export function nextDepartmentMeeting(now = new Date()) {
  const clock = romeClock(now);
  let date = clock.date < DEPARTMENT_MEETING.startDate ? DEPARTMENT_MEETING.startDate : clock.date;
  const weekday = new Date(date + 'T12:00:00Z').getUTCDay();
  date = addDays(date, (3 - weekday + 7) % 7);
  if (date === clock.date && clock.time >= DEPARTMENT_MEETING.endTime) date = addDays(date, 7);
  return { date, ongoing: date === clock.date && clock.time >= DEPARTMENT_MEETING.startTime && clock.time < DEPARTMENT_MEETING.endTime };
}
export function departmentMeetingsForMonth(seasonId: string, month: string): EventRecord[] {
  if (seasonId !== DEPARTMENT_MEETING.seasonId || !/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) return [];
  const rows: EventRecord[] = [];
  let date = month + '-01';
  date = addDays(date, (3 - new Date(date + 'T12:00:00Z').getUTCDay() + 7) % 7);
  while (date.startsWith(month)) {
    if (date >= DEPARTMENT_MEETING.startDate) rows.push({
      id: `department-meeting:${date}`, version: 1, season_id: seasonId, archived: false,
      updated_at: '', title: DEPARTMENT_MEETING.title, type: 'Riunione', status: 'Programmato',
      date, start_time: DEPARTMENT_MEETING.startTime, end_time: DEPARTMENT_MEETING.endTime,
      team_id: '', location: '', description: 'Ogni mercoledì, dalle 15:00 alle 19:00 · Tutti i reparti · Ora di Roma',
      checklist: [], sponsor_id: '', document_url: '', recap: '',
    });
    date = addDays(date, 7);
  }
  return rows;
}
export const isDepartmentMeeting = (id: string) => id.startsWith('department-meeting:');
