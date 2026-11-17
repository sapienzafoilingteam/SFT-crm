import { TEAMS } from './model';
import { romeClock } from './department-resources';
import { live, supabase } from './repository';

export type Role = 'membro' | 'capo_progetto' | 'team_captain';
export const ROLE_LABEL: Record<Role, string> = { membro: 'Membro', capo_progetto: 'Capo Progetto', team_captain: 'Team Captain' };
/** Scelta in registrazione: un reparto (eventualmente con "Capo Progetto") oppure "Team Captain", da solo. */
export const CAPTAIN = 'team_captain';
export function assignment(choice: string, projectLead: boolean): { team_id: string | null; role: Role } {
  if (choice === CAPTAIN) return { team_id: null, role: 'team_captain' };
  return { team_id: choice || null, role: projectLead ? 'capo_progetto' : 'membro' };
}
/** Stesse regole di public.member_assignment. */
export function validAssignment(teamId: string | null, role: Role) {
  return role === 'team_captain' ? !teamId : Boolean(teamId && TEAMS.some(t => t.id === teamId));
}
/** Il Team Captain vale come membro di ogni reparto. */
export const canMarkTeam = (me: Pick<Profile, 'team_id' | 'role'> | null | undefined, teamId: string) =>
  Boolean(me && (me.role === 'team_captain' || me.team_id === teamId));
/** team_id è null solo per il Team Captain, che vale per tutti i reparti. */
export interface RosterMember { id: string; full_name: string; team_id: string | null; role?: Role }
export interface AttendanceRecord { member_id: string; meeting_date: string; team_id: string | null; marked_by: string | null; marked_at: string }
export interface Profile { id: string; full_name: string; team_id: string | null; role: Role; is_admin: boolean }
/** Presenza segnata dal Team Captain sul nome di chi non ha ancora un account. */
export interface NameAttendanceRecord { full_name: string; meeting_date: string }
/** names: l'elenco dei Nomi Cognomi del team, compresi quelli non ancora registrati. */
export interface AttendanceSnapshot { names: string[]; roster: RosterMember[]; records: AttendanceRecord[]; nameRecords: NameAttendanceRecord[]; me: Profile | null }

export const INSTITUTIONAL_EMAIL = /^[a-z'-]+(\.[a-z'-]+)*\.\d{7}@studenti\.uniroma1\.it$/i;
export const normalizeName = (value: string) => value.replace(/\s+/g, ' ').trim();
/** Un'iniziale per parola, al massimo tre ("Anna Maria Rossi" → "AMR"; oltre tre: prime due e ultima). */
export function initials(fullName: string) {
  const words = normalizeName(fullName).split(' ').filter(Boolean);
  const picked = words.length > 3 ? [...words.slice(0, 2), words[words.length - 1]] : words;
  return picked.map(w => w[0]).join('').toUpperCase();
}
export const todayInRome = () => romeClock(new Date()).date;

export function dayLabel(date: string) {
  const d = new Date(date + 'T12:00:00Z');
  const weekday = d.toLocaleDateString('it-IT', { weekday: 'short', timeZone: 'UTC' }).replace('.', '');
  return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)} ${d.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' })}`;
}
export function shiftDate(date: string, days: number) {
  const d = new Date(date + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + days); return d.toISOString().slice(0, 10);
}
/** Prima riunione registrata: prima di questa data non ci sono state riunioni. */
export const FIRST_MEETING = '2026-10-14';
/** Riunioni: ogni mercoledì, dalla prima riunione. Date (YYYY-MM-DD) dei mercoledì del mese. */
export function wednesdays(month: string) {
  const first = new Date(month + '-01T12:00:00Z');
  const days = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0)).getUTCDate();
  const firstWednesday = 1 + (3 - first.getUTCDay() + 7) % 7;
  const out: string[] = [];
  for (let d = firstWednesday; d <= days; d += 7) out.push(`${month}-${String(d).padStart(2, '0')}`);
  return out.filter(d => d >= FIRST_MEETING);
}
/** Mesi del menù, dal più recente: dal mese della prima riunione fino al mese corrente. */
export function attendanceMonths(today: string) {
  const months: string[] = [];
  for (let month = today.slice(0, 7); month >= FIRST_MEETING.slice(0, 7); month = shiftMonth(month, -1)) months.push(month);
  return months;
}
export interface SheetRow { full_name: string; member: RosterMember | null; present: Set<string> }
/**
 * Righe della tabella mensile: tutti i nomi dell'elenco in ordine alfabetico, registrati o no.
 * Senza presenza registrata il membro risulta assente; chi non si è registrato è sempre assente.
 */
export function monthSheet(names: readonly string[], roster: readonly RosterMember[], records: readonly AttendanceRecord[], month: string, nameRecords: readonly NameAttendanceRecord[] = []): SheetRow[] {
  const byName = new Map(roster.map(m => [m.full_name, m]));
  const days = new Set(wednesdays(month));
  const present = new Map<string, Set<string>>();
  for (const r of records) if (days.has(r.meeting_date)) {
    if (!present.has(r.member_id)) present.set(r.member_id, new Set());
    present.get(r.member_id)!.add(r.meeting_date);
  }
  const byNameRecords = new Map<string, Set<string>>();
  for (const r of nameRecords) if (days.has(r.meeting_date)) {
    if (!byNameRecords.has(r.full_name)) byNameRecords.set(r.full_name, new Set());
    byNameRecords.get(r.full_name)!.add(r.meeting_date);
  }
  const all = [...new Set([...names, ...roster.map(m => m.full_name)])].sort((a, b) => a.localeCompare(b, 'it'));
  return all.map(full_name => {
    const member = byName.get(full_name) || null;
    return { full_name, member, present: new Set([...((member && present.get(member.id)) || []), ...(member ? [] : byNameRecords.get(full_name) || [])]) };
  });
}
export function shiftMonth(month: string, delta: number) {
  const d = new Date(month + '-01T12:00:00Z'); d.setUTCMonth(d.getUTCMonth() + delta); return d.toISOString().slice(0, 7);
}
export const monthLabel = (month: string) => {
  const label = new Date(month + '-01T12:00:00Z').toLocaleDateString('it-IT', { month: 'long', year: 'numeric', timeZone: 'UTC' });
  return label.charAt(0).toUpperCase() + label.slice(1);
};

// --- Demo locale (NEXT_PUBLIC_DATA_MODE=mock) ---
const DEMO_KEY = 'sft-attendance-demo-v1';
const DEMO_NAMES_KEY = 'sft-attendance-demo-names-v1';
const DEMO_NAMES = ['Giulia Romano', 'Marco Bianchi', 'Sara Esposito', 'Luca Ferri', 'Chiara De Santis', 'Andrea Conti', 'Elena Marino', 'Davide Greco', 'Francesca Rizzo', 'Matteo Gallo', 'Alessia Costa', 'Simone Fontana', 'Martina Moretti', 'Tommaso Ricci'];
const DEMO_UNREGISTERED = ['Nome Non Registrato'];
const DEMO_CAPTAIN: RosterMember = { id: 'demo-captain', full_name: 'Team Captain Demo', team_id: null, role: 'team_captain' };
function demoRoster(): RosterMember[] {
  return [DEMO_CAPTAIN, ...TEAMS.flatMap((t, ti) => [0, 1].map(i => ({ id: `demo-${t.id}-${i}`, full_name: DEMO_NAMES[(ti * 2 + i) % DEMO_NAMES.length], team_id: t.id, role: (i ? 'membro' : 'capo_progetto') as Role })))];
}
function demoRecords(key = DEMO_KEY): unknown[] {
  try { const raw = localStorage.getItem(key); if (raw) { const parsed = JSON.parse(raw); if (Array.isArray(parsed)) return parsed; } } catch { /* demo vuota */ }
  return [];
}

export async function loadAttendance(): Promise<AttendanceSnapshot> {
  if (!live) {
    const roster = demoRoster();
    return { names: [...roster.map(m => m.full_name), ...DEMO_UNREGISTERED], roster, records: demoRecords() as AttendanceRecord[], nameRecords: demoRecords(DEMO_NAMES_KEY) as NameAttendanceRecord[], me: { ...DEMO_CAPTAIN, team_id: null, role: 'team_captain', is_admin: true } };
  }
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const { data: { user } } = await supabase.auth.getUser();
  const [names, nameRecords, roster, records, me] = await Promise.all([
    supabase.rpc('team_name_list'),
    supabase.from('name_attendance').select('full_name,meeting_date'),
    supabase.rpc('attendance_roster'),
    (async () => {
      const rows: AttendanceRecord[] = [];
      for (let offset = 0; ; offset += 1000) {
        const { data, error } = await supabase!.from('attendance').select('*').order('meeting_date', { ascending: false }).order('member_id').range(offset, offset + 999);
        if (error) throw error;
        rows.push(...(data as AttendanceRecord[]));
        if (!data || data.length < 1000) return rows;
      }
    })(),
    user ? supabase.from('members').select('id,full_name,team_id,role,is_admin').eq('id', user.id).maybeSingle() : Promise.resolve({ data: null, error: null }),
  ]);
  if (names.error) throw names.error;
  if (nameRecords.error) throw nameRecords.error;
  if (roster.error) throw roster.error;
  if (me.error) throw me.error;
  return { names: (names.data || []) as string[], nameRecords: (nameRecords.data || []) as NameAttendanceRecord[], roster: (roster.data || []) as RosterMember[], records, me: (me.data as Profile | null) };
}

export async function setAttendance(member: RosterMember, date: string, present: boolean, by: string) {
  if (!live) {
    const rest = (demoRecords() as AttendanceRecord[]).filter(r => !(r.member_id === member.id && r.meeting_date === date));
    if (present) rest.push({ member_id: member.id, meeting_date: date, team_id: member.team_id, marked_by: by, marked_at: new Date().toISOString() });
    localStorage.setItem(DEMO_KEY, JSON.stringify(rest));
    window.dispatchEvent(new Event('sft:attendance'));
    return;
  }
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const { error } = await supabase.rpc('set_attendance', { p_member: member.id, p_date: date, p_present: present });
  if (error) throw new Error(error.message);
}

/** Presenza sul nome di chi non ha un account: solo il Team Captain (verificato dal database). */
export async function setNameAttendance(fullName: string, date: string, present: boolean) {
  if (!live) {
    const rest = (demoRecords(DEMO_NAMES_KEY) as NameAttendanceRecord[]).filter(r => !(r.full_name === fullName && r.meeting_date === date));
    if (present) rest.push({ full_name: fullName, meeting_date: date });
    localStorage.setItem(DEMO_NAMES_KEY, JSON.stringify(rest));
    window.dispatchEvent(new Event('sft:attendance'));
    return;
  }
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const { error } = await supabase.rpc('set_name_attendance', { p_name: fullName, p_date: date, p_present: present });
  if (error) throw new Error(error.message);
}

/** Avvisa a ogni modifica: Realtime se attivo, altrimenti evento locale, focus e polling. */
export function subscribeAttendance(onChange: () => void) {
  const local = () => onChange();
  window.addEventListener('sft:attendance', local);
  const focus = () => { if (document.visibilityState === 'visible') onChange(); };
  window.addEventListener('focus', focus);
  const poll = setInterval(focus, 30000);
  const channel = live && supabase ? supabase.channel('attendance').on('postgres_changes', { event: '*', schema: 'public', table: 'attendance' }, local).on('postgres_changes', { event: '*', schema: 'public', table: 'name_attendance' }, local).subscribe() : null;
  return () => {
    window.removeEventListener('sft:attendance', local);
    window.removeEventListener('focus', focus);
    clearInterval(poll);
    if (channel) void supabase!.removeChannel(channel);
  };
}

/** Nomi dell'elenco non ancora usati: con il codice della password del team (registrazione) o da membro attivo. */
export async function availableNames(token?: string) {
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const { data, error } = await supabase.rpc('available_names', token ? { p_token: token } : {});
  if (error) throw new Error(error.message);
  return ((data || []) as string[]).sort((a, b) => a.localeCompare(b, 'it'));
}

export async function completeProfile(fullName: string, teamId: string | null, role: Role) {
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const { error } = await supabase.rpc('complete_profile', { p_full_name: normalizeName(fullName), p_team_id: teamId || '', p_role: role });
  if (error) throw new Error(error.message);
}

/** Correzione di reparto e ruolo di un membro: solo il Team Captain (verificato dal database). */
export async function setMemberAssignment(memberId: string, teamId: string | null, role: Role) {
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const { error } = await supabase.rpc('set_member_assignment', { p_member: memberId, p_team_id: teamId || '', p_role: role });
  if (error) throw new Error(error.message);
}
