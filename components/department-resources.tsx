'use client';
import Link from 'next/link';
import { CalendarDays, FileText, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DEPARTMENT_MEETING, PREVIOUS_SEASON_REPORTS, nextDepartmentMeeting } from '@/lib/department-resources';

export function DepartmentResources({ compact = false }: { compact?: boolean }) {
  const [meeting, setMeeting] = useState<ReturnType<typeof nextDepartmentMeeting> | null>(null);
  useEffect(() => {
    const update = () => setMeeting(nextDepartmentMeeting());
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  const date = meeting ? new Date(meeting.date + 'T12:00:00Z').toLocaleDateString('it-IT', {
    timeZone: DEPARTMENT_MEETING.timeZone, weekday: compact ? 'short' : 'long', day: 'numeric', month: 'short',
  }) : 'Ogni mercoledì';
  return <section className={'department-resources' + (compact ? ' compact' : '')} aria-label="Riunione e report del reparto">
    <Link href="/agenda" className="department-meeting">
      <CalendarDays size={16} aria-hidden="true" />
      <span><strong>{meeting?.ongoing ? 'Riunione in corso' : 'Prossima riunione'}</strong>
        <small>{date} · 15:00–19:00</small>
        {!compact && <small>Ogni mercoledì · tutti i reparti</small>}
      </span>
    </Link>
    <div className="department-report-links">
      {!compact && <span className="muted">Report consegnati · 2025 / 2026</span>}
      <div>{PREVIOUS_SEASON_REPORTS.map(report => <a key={report.stage} href={report.url} target="_blank" rel="noreferrer" className="text-link" aria-label={`Apri report ${report.stage} · stagione ${report.season}`}>
        <FileText size={14} aria-hidden="true" />Report {report.stage}<ArrowUpRight size={12} aria-hidden="true" />
      </a>)}</div>
    </div>
  </section>;
}
