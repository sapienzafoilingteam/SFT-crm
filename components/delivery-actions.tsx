'use client';
import { useState } from 'react';
import { DELIVERY_STATES, safeUrl, type Delivery } from '@/lib/model';
import { useWorkspace } from './provider';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

export function DeliveryActions({ row }: { row: Delivery }) {
  const { data, put, busy } = useWorkspace();
  const [pending, setPending] = useState<Delivery | null>(null);
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const index = DELIVERY_STATES.indexOf(row.status);
  const next = index >= 0 && index < 2 ? DELIVERY_STATES[index + 1] : '';
  async function finish(record: Delivery, link: string) {
    if (data.deliveries.find(item => item.id === record.id)?.version !== record.version) { setError('La scadenza è stata aggiornata. Riaprila prima di confermare la consegna.'); return; }
    if (!safeUrl(link)) { setError('Inserisci un link http o https alla consegna.'); return; }
    if (await put('deliveries', { ...record, status: DELIVERY_STATES[3], completion_url: link, completed_at: new Date().toISOString() })) setPending(null);
  }
  return <><div className="delivery-quick-actions" aria-label={'Azioni per ' + row.title}>
    {next && <Button size="sm" variant="ghost" disabled={busy} onClick={() => void put('deliveries', { ...row, status: next })}>{next === 'In preparazione' ? 'Inizia' : 'Da verificare'}</Button>}
    {row.status !== DELIVERY_STATES[3] && <Button size="sm" variant="outline" disabled={busy} onClick={() => {
      if (safeUrl(row.completion_url)) void finish(row, row.completion_url);
      else { setPending(row); setUrl(row.completion_url || row.url || ''); setError(''); }
    }}>✓ Completa</Button>}
    {row.status === DELIVERY_STATES[3] && <Button size="sm" variant="ghost" disabled={busy} onClick={() => void put('deliveries', { ...row, status: DELIVERY_STATES[0], completed_at: '' })}>Riapri</Button>}
  </div><Dialog open={Boolean(pending)} onOpenChange={open => { if (!open) setPending(null); }}><DialogContent className="compact-editor"><DialogTitle className="dialog-title">Completa la scadenza</DialogTitle><DialogDescription className="muted">{pending?.title}</DialogDescription><form className="record-form" onSubmit={e => { e.preventDefault(); if (pending) void finish(pending, url.trim()); }}><label><span className="field-label">Link alla consegna o pubblicazione</span><input required type="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://…" /></label>{error && <p role="alert" className="form-error">{error}</p>}<div className="dialog-footer"><Button type="button" variant="outline" onClick={() => setPending(null)}>Annulla</Button><Button disabled={busy}>Conferma consegna</Button></div></form></DialogContent></Dialog></>;
}
