"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { CalendarDays, Check, Lock, UserCheck } from 'lucide-react';
import { TEAMS } from '@/lib/model';
import {
  ROLE_LABEL, attendanceMonths, canMarkTeam, hasCaptainPowers, dayLabel, initials, loadAttendance, monthLabel, monthSheet, setAttendance, setNameAttendance, subscribeAttendance, todayInRome, wednesdays,
  type AttendanceSnapshot, type RosterMember, type SheetRow,
} from '@/lib/attendance';
import { useWorkspace } from './provider';
import { Button } from './ui/button';
import { Heading } from './views/shared';

function useAttendance() {
  const { notice } = useWorkspace();
  const [snapshot, setSnapshot] = useState<AttendanceSnapshot | null>(null);
  const [error, setError] = useState('');
  const pending = useRef(0);
  const reload = useCallback(async () => {
    if (pending.current) return;
    try { const next = await loadAttendance(); if (!pending.current) setSnapshot(next); setError(''); }
    catch (e) { setError(e instanceof Error ? e.message : 'Presenze non disponibili.'); }
  }, []);
  useEffect(() => {
    void reload();
    let timer: ReturnType<typeof setTimeout> | undefined;
    const stop = subscribeAttendance(() => { clearTimeout(timer); timer = setTimeout(() => void reload(), 300); });
    return () => { clearTimeout(timer); stop(); };
  }, [reload]);
  const toggle = useCallback(async (member: RosterMember, date: string, present: boolean) => {
    const before = snapshot;
    if (!before?.me) return;
    pending.current++;
    setSnapshot({
      ...before,
      records: present
        ? [...before.records, { member_id: member.id, meeting_date: date, team_id: member.team_id, marked_by: before.me.id, marked_at: new Date().toISOString() }]
        : before.records.filter(r => !(r.member_id === member.id && r.meeting_date === date)),
    });
    try { await setAttendance(member, date, present, before.me.id); }
    catch (e) { setSnapshot(before); notice('Presenza non salvata: ' + (e instanceof Error ? e.message : String(e))); }
    finally { pending.current--; void reload(); }
  }, [snapshot, notice, reload]);
  /** Solo con i poteri del Team Captain: presenza sul nome di chi non ha ancora un account. */
  const toggleName = useCallback(async (fullName: string, date: string, present: boolean) => {
    const before = snapshot;
    if (!before?.me) return;
    pending.current++;
    setSnapshot({
      ...before,
      nameRecords: present
        ? [...before.nameRecords, { full_name: fullName, meeting_date: date }]
        : before.nameRecords.filter(r => !(r.full_name === fullName && r.meeting_date === date)),
    });
    try { await setNameAttendance(fullName, date, present); }
    catch (e) { setSnapshot(before); notice('Presenza non salvata: ' + (e instanceof Error ? e.message : String(e))); }
    finally { pending.current--; void reload(); }
  }, [snapshot, notice, reload]);
  return { snapshot, error, reload, toggle, toggleName };
}

/** Sezione della pagina del reparto: solo le presenze di oggi; lo storico è nella pagina "Presenze". */
export function DepartmentAttendance({ team }: { team: (typeof TEAMS)[number] }) {
  const { snapshot, error, reload, toggle } = useAttendance();
  const date = todayInRome();
  if (error) return <section className="attendance-panel" role="alert"><p>{error}</p><Button variant="outline" size="sm" onClick={() => void reload()}>Riprova</Button></section>;
  if (!snapshot) return <section className="attendance-panel" aria-busy="true"><p className="muted">Caricamento presenze…</p></section>;
  const members = snapshot.roster.filter(m => m.team_id === team.id);
  const present = new Set(snapshot.records.filter(r => r.meeting_date === date && r.team_id === team.id).map(r => r.member_id));
  const canMark = canMarkTeam(snapshot.me, team.id);
  return <section className="attendance-panel" aria-labelledby={`attendance-${team.id}`}>
    <header className="attendance-head">
      <div>
        <span className="eyebrow">PRESENZE ALLA RIUNIONE</span>
        <h2 id={`attendance-${team.id}`}>Presenti oggi</h2>
      </div>
      <Link href="/presenze" className="attendance-history-link"><CalendarDays size={15} />Storico presenze</Link>
    </header>
    <p className="attendance-summary" role="status"><strong>{present.size}</strong> su {members.length} presenti · {dayLabel(date)}</p>
    {members.length ? <ul className="attendance-list">
      {members.map(m => {
        const here = present.has(m.id);
        return <li key={m.id} className={here ? 'present' : ''}>
          <span className={"attendance-avatar" + (initials(m.full_name).length > 2 ? " three" : "")} aria-hidden="true">{initials(m.full_name)}</span>
          <span className="attendance-name">{m.full_name}{m.role === 'capo_progetto' && <small> · {ROLE_LABEL.capo_progetto}</small>}{m.id === snapshot.me?.id && <small> · tu</small>}</span>
          {canMark
            ? <button type="button" className="attendance-toggle" aria-pressed={here} onClick={() => void toggle(m, date, !here)}
                aria-label={here ? `Togli la presenza di ${m.full_name}` : `Segna presente ${m.full_name}`}>
                {here ? <><Check size={14} />Presente</> : 'Segna presenza'}
              </button>
            : <span className={'attendance-status' + (here ? ' present' : '')}>{here ? <><Check size={14} />Presente</> : 'Assente'}</span>}
        </li>;
      })}
    </ul> : <p className="muted attendance-empty">Nessun membro registrato in questo reparto. I nomi compaiono qui dopo la registrazione al CRM.</p>}
    {!canMark && members.length > 0 && <p className="attendance-note"><Lock size={13} />Solo i membri di {team.short} e il Team Captain possono segnare le presenze di questo reparto.</p>}
  </section>;
}

/**
 * Riquadro della Home: ognuno segna o toglie la propria presenza di oggi (come nella sezione del
 * proprio reparto). Il Team Captain, senza reparto, la segna solo da qui.
 */
export function MyAttendance() {
  const { snapshot, error, reload, toggle } = useAttendance();
  const date = todayInRome();
  const me = snapshot?.me;
  if (error) return <section className="attendance-panel" role="alert"><p>{error}</p><Button variant="outline" size="sm" onClick={() => void reload()}>Riprova</Button></section>;
  if (!snapshot) return <section className="attendance-panel" aria-busy="true"><p className="muted">Caricamento presenza…</p></section>;
  const captain = me?.role === 'team_captain';
  const team = TEAMS.find(t => t.id === me?.team_id);
  // Account senza nome o senza reparto (es. account condiviso del team): nessuna presenza da segnare.
  if (!me || !me.full_name || (!captain && !team)) return null;
  const self = snapshot.roster.find(m => m.id === me.id) || { id: me.id, full_name: me.full_name, team_id: captain ? null : me.team_id, role: me.role };
  const here = snapshot.records.some(r => r.member_id === me.id && r.meeting_date === date);
  return <section className="attendance-panel captain-attendance" aria-labelledby="captain-attendance">
    <header className="attendance-head">
      <div>
        <span className="eyebrow">{captain ? 'TEAM CAPTAIN' : team!.name.toUpperCase()}</span>
        <h2 id="captain-attendance">La tua presenza</h2>
      </div>
      <Link href="/presenze" className="attendance-history-link"><CalendarDays size={15} />Storico presenze</Link>
    </header>
    <ul className="attendance-list">
      <li className={here ? 'present' : ''}>
        <span className={"attendance-avatar" + (initials(self.full_name).length > 2 ? " three" : "")} aria-hidden="true">{initials(self.full_name)}</span>
        <span className="attendance-name">{self.full_name}<small> · {dayLabel(date)}</small></span>
        <button type="button" className="attendance-toggle" aria-pressed={here} onClick={() => void toggle(self, date, !here)}
          aria-label={here ? 'Togli la tua presenza di oggi' : 'Segna la tua presenza di oggi'}>
          {here ? <><Check size={14} />Presente</> : 'Segna presenza'}
        </button>
      </li>
    </ul>
    <p className="attendance-note">{captain
      ? 'Vale per tutti i reparti: nello storico compari come Team Captain.'
      : 'Puoi segnare la presenza da qui o dalla pagina del reparto.'}</p>
  </section>;
}

/** Pagina "Presenze": un mese per pagina, tutti i nomi del team per riga e una colonna per ogni mercoledì. */
export function AttendanceView() {
  const { snapshot, error, reload, toggle, toggleName } = useAttendance();
  const today = todayInRome();
  const [month, setMonth] = useState(today.slice(0, 7));
  const months = useMemo(() => attendanceMonths(today), [today]);
  const days = useMemo(() => wednesdays(month), [month]);
  const rows = useMemo(() => snapshot ? monthSheet(snapshot.names, snapshot.roster, snapshot.records, month, snapshot.nameRecords) : [], [snapshot, month]);
  const me = snapshot?.me;
  // Con i poteri del Team Captain si segna dalla tabella chiunque, anche chi non ha un account; non un altro Team Captain.
  const powers = hasCaptainPowers(me);
  const editable = (r: SheetRow) => powers && (!r.member || r.member.role !== 'team_captain' || r.member.id === me?.id);
  const flip = (r: SheetRow, d: string) => { const here = r.present.has(d); void (r.member ? toggle(r.member, d, !here) : toggleName(r.full_name, d, !here)); };
  const team = (m: RosterMember | null) => m && (m.role === 'team_captain' ? ROLE_LABEL.team_captain : TEAMS.find(t => t.id === m.team_id)?.short);
  return <div className="attendance-page">
    <Heading eyebrow="RIUNIONI DEL MERCOLEDÌ" title="Presenze" />
    {error ? <div className="empty" role="alert"><p>{error}</p><Button onClick={() => void reload()}>Riprova</Button></div> : !snapshot ? <div className="empty" role="status">Caricamento presenze…</div> :
      <section className="attendance-day panel" aria-labelledby="attendance-month-title">
        <header className="attendance-day-head">
          <h2 id="attendance-month-title">{monthLabel(month)}</h2>
          <label className="attendance-month">
            <span className="sr-only">Mese</span>
            <select value={month} onChange={e => setMonth(e.target.value)}>
              {months.map(m => <option key={m} value={m}>{monthLabel(m)}</option>)}
            </select>
          </label>
        </header>
        <div className="attendance-table attendance-sheet" tabIndex={0} aria-label={`Presenze di ${monthLabel(month)}`}>
          <table>
            <caption className="sr-only">Presenze alle riunioni del mercoledì, {monthLabel(month)}</caption>
            <thead><tr>
              <th scope="col">Nome e Cognome</th>
              {days.map(d => <th key={d} scope="col" className={d === today ? 'today' : ''}>{dayLabel(d).replace(/\/\d{4}$/, '')}</th>)}
            </tr></thead>
            <tbody>{rows.map(r => <tr key={r.full_name}>
              <th scope="row">
                <span className="attendance-chip">
                  <span className={'attendance-avatar' + (initials(r.full_name).length > 2 ? ' three' : '')} aria-hidden="true">{initials(r.full_name)}</span>
                  <span>{r.full_name}<small>{team(r.member) || 'Non registrato'}</small></span>
                </span>
              </th>
              {days.map(d => d > today
                ? <td key={d} className="future"><span aria-label="Riunione futura">—</span></td>
                : <td key={d} className={r.present.has(d) ? 'present' : ''}>{editable(r)
                  ? <button type="button" className="attendance-cell" aria-pressed={r.present.has(d)} onClick={() => flip(r, d)}
                      aria-label={`${r.full_name}, ${dayLabel(d)}: ${r.present.has(d) ? 'presente, togli la presenza' : 'assente, segna presente'}`}>
                      {r.present.has(d) ? 'Presente' : 'Assente'}
                    </button>
                  : r.present.has(d) ? 'Presente' : 'Assente'}</td>)}
            </tr>)}</tbody>
            <tfoot><tr>
              <th scope="row">Presenti</th>
              {days.map(d => <td key={d}>{d > today ? '—' : <><strong>{rows.filter(r => r.present.has(d)).length}</strong> / {rows.length}</>}</td>)}
            </tr></tfoot>
          </table>
        </div>
        <p className="attendance-note attendance-sheet-note"><UserCheck size={13} />{powers
          ? 'Ognuno parte assente. Con i poteri del Team Captain puoi segnare o togliere la presenza da qui con un clic, anche per chi non ha ancora un account: quando si registra con quel nome, le presenze passano al suo account.'
          : 'Ognuno parte assente: diventa presente quando la presenza viene segnata nella sezione del suo reparto.'}</p>
      </section>}
  </div>;
}
