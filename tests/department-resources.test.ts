import { test } from 'node:test';
import assert from 'node:assert/strict';
import { departmentMeetingsForMonth, nextDepartmentMeeting } from '../lib/department-resources';
import { SEASONS } from '../lib/model';

test('next weekly meeting uses Rome time, keeps an ongoing meeting and advances at 19:00', () => {
  assert.deepEqual(nextDepartmentMeeting(new Date('2026-10-13T12:00:00Z')), { date: '2026-10-14', ongoing: false });
  assert.deepEqual(nextDepartmentMeeting(new Date('2026-10-14T13:00:00Z')), { date: '2026-10-14', ongoing: true });
  assert.deepEqual(nextDepartmentMeeting(new Date('2026-10-14T17:00:00Z')), { date: '2026-10-21', ongoing: false });
  // After the DST change, 15:00 Rome is 14:00 UTC.
  assert.deepEqual(nextDepartmentMeeting(new Date('2026-10-28T13:59:00Z')), { date: '2026-10-28', ongoing: false });
  assert.deepEqual(nextDepartmentMeeting(new Date('2026-10-28T14:00:00Z')), { date: '2026-10-28', ongoing: true });
  assert.deepEqual(nextDepartmentMeeting(new Date('2026-12-30T18:00:00Z')), { date: '2027-01-06', ongoing: false });
});

test('agenda expands the shared series across months, with stable identities and no historical-season occurrences', () => {
  const october = departmentMeetingsForMonth(SEASONS[0].id, '2026-10');
  assert.deepEqual(october.map(row => row.date), ['2026-10-14', '2026-10-21', '2026-10-28']);
  assert.equal(new Set(october.map(row => row.id)).size, 3);
  assert.ok(october.every(row => row.start_time === '15:00' && row.end_time === '19:00' && row.team_id === ''));
  assert.deepEqual(departmentMeetingsForMonth(SEASONS[0].id, '2026-10'), october);
  assert.equal(departmentMeetingsForMonth(SEASONS[0].id, '2026-11').length, 4);
  assert.equal(departmentMeetingsForMonth(SEASONS[0].id, '2027-03').length, 5);
  assert.deepEqual(departmentMeetingsForMonth(SEASONS[1].id, '2026-10'), []);
  assert.deepEqual(departmentMeetingsForMonth(SEASONS[0].id, '2026-09'), []);
  assert.deepEqual(departmentMeetingsForMonth(SEASONS[0].id, 'invalid'), []);
});
