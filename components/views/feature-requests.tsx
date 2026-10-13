"use client";
import { useState } from 'react';
import { base, TEAMS, type Report } from '@/lib/model';
import { readRequest, REQUEST_STATUSES, type FeatureRequest, type RequestStatus } from '@/lib/feature-requests';
import { useWorkspace } from '../provider';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog';
import { Empty, Heading } from './shared';

export function FeatureRequestsView() {
  const { data, season, put, busy } = useWorkspace();
  const [creating, setCreating] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [filter, setFilter] = useState('');
  const [status, setStatus] = useState<RequestStatus>('Da valutare');
  const [response, setResponse] = useState('');
  const [expectedVersion, setExpectedVersion] = useState(0);
  const rows = data.reports.filter(r => !r.archived && r.season_id === season && readRequest(r));
  const selected = rows.find(r => r.id === selectedId);
  const request = selected && readRequest(selected);
  const open = (row: Report) => {
    const value = readRequest(row)!;
    setStatus(value.status); setResponse(value.response); setSelectedId(row.id); setExpectedVersion(row.version);
  };
  return <>
    <Heading eyebrow="SVILUPPO DEL CRM" title="Richieste di sviluppo" description="Proponi una modifica al CRM. Il reparto Elettronica può consultare le richieste, aggiornarne lo stato e lasciare una risposta.">
      <Button onClick={() => setCreating(true)}>Richiedi una funzionalità</Button>
    </Heading>
    <label className="request-filter">Stato<select value={filter} onChange={e => setFilter(e.target.value)}><option value="">Tutte le richieste</option>{REQUEST_STATUSES.map(s => <option key={s}>{s}</option>)}</select></label>
    <div className="report-grid">{rows.filter(r => !filter || readRequest(r)?.status === filter).map(row => { const req = readRequest(row)!; return <button key={row.id} className="panel report-card" onClick={() => open(row)}><small>{req.status} · Priorità {req.priority}</small><h2>{row.title}</h2><p>{req.problem}</p><span className="muted">{req.requester} · {TEAMS.find(t => t.id === req.team)?.short || 'Team'} · {row.date}</span></button>; })}</div>
    {!rows.filter(r => !filter || readRequest(r)?.status === filter).length && <Empty text="Nessuna richiesta in questa vista." />}
    <Dialog open={creating} onOpenChange={setCreating}><DialogContent><DialogTitle className="dialog-title">Richiedi una funzionalità</DialogTitle><DialogDescription className="muted">La richiesta sarà salvata nel CRM e visibile al team. Gli sviluppatori la consulteranno qui.</DialogDescription>
      <form className="feature-form" onSubmit={async e => {
        e.preventDefault(); if (busy) return;
        const fields = new FormData(e.currentTarget);
        const text = (key: string) => String(fields.get(key) || '').trim();
        if (!text('title') || !text('requester') || !text('problem') || !text('proposal')) return;
        const value: FeatureRequest = { kind: 'crm-feature-request', requester: text('requester'), team: text('team'), problem: text('problem'), proposal: text('proposal'), priority: text('priority') === 'Alta' ? 'Alta' : 'Normale', status: 'Da valutare', response: '' };
        if (await put('reports', { ...base(season), team_id: 'elettronica', title: text('title'), content: JSON.stringify(value), date: new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Rome' }), url: '' })) setCreating(false);
      }}>
        <label>Titolo<input name="title" required maxLength={160} autoFocus placeholder="Es. Assegnare le delivery a una persona" /></label>
        <label>Il tuo nome<input name="requester" required maxLength={120} autoComplete="name" /></label>
        <label>Reparto<select name="team"><option value="">Tutto il team</option>{TEAMS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}</select></label>
        <label>Quale problema vuoi risolvere?<textarea name="problem" required maxLength={4000} /></label>
        <label>Come dovrebbe funzionare?<textarea name="proposal" required maxLength={4000} /></label>
        <label>Priorità<select name="priority"><option>Normale</option><option>Alta</option></select></label>
        <Button type="submit" disabled={busy}>{busy ? 'Salvataggio…' : 'Salva richiesta per gli sviluppatori'}</Button>
      </form>
    </DialogContent></Dialog>
    <Dialog open={!!selected} onOpenChange={open => { if (!open) setSelectedId(''); }}><DialogContent><DialogTitle className="dialog-title">{selected?.title || 'Richiesta'}</DialogTitle><DialogDescription className="muted">{request?.requester} · {TEAMS.find(t => t.id === request?.team)?.name || 'Tutto il team'}</DialogDescription>
      {request && selected && <><h3>Problema</h3><p className="request-text">{request.problem}</p><h3>Funzionalità proposta</h3><p className="request-text">{request.proposal}</p>
      <form className="feature-form" onSubmit={async e => { e.preventDefault(); if (busy) return; if (await put('reports', { ...selected, version: expectedVersion, content: JSON.stringify({ ...request, status, response: response.trim() }) })) setSelectedId(''); }}>
        <label>Stato<select value={status} onChange={e => setStatus(e.target.value as RequestStatus)}>{REQUEST_STATUSES.map(s => <option key={s}>{s}</option>)}</select></label>
        <label>Risposta degli sviluppatori<textarea value={response} onChange={e => setResponse(e.target.value)} maxLength={4000} /></label>
        <Button type="submit" disabled={busy}>Salva aggiornamento</Button>
      </form></>}
    </DialogContent></Dialog>
  </>;
}
