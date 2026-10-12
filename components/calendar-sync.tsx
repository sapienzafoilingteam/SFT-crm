'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { live, supabase } from '@/lib/repository';
import { useWorkspace } from './provider';
export function CalendarSync({ enabled = true }: { enabled?: boolean }) {
  const { data, busy, refresh, isLoaded } = useWorkspace();
  const [configured, setConfigured] = useState(false), [message, setMessage] = useState('');
  const inFlight = useRef(false), busyRef = useRef(busy), lastRun = useRef(0);
  busyRef.current = busy;
  const available = enabled && isLoaded(['events', 'deliveries']);
  const signature = [...data.events, ...data.deliveries].map(r => `${r.id}:${r.version}`).sort().join('|');
  const request = useCallback(async (method: string) => {
    const { data: session } = await supabase!.auth.getSession();
    if (!session.session) throw new Error('Accedi al CRM per sincronizzare il calendario.');
    const response = await fetch('/api/calendar', { method, headers: { Authorization: `Bearer ${session.session.access_token}` }, cache: 'no-store' });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Sincronizzazione non riuscita.');
    return result;
  }, []);
  const sync = useCallback(async () => {
    if (inFlight.current || busyRef.current) return;
    inFlight.current = true; lastRun.current = Date.now();
    try {
      const result = await request('POST');
      if (result.imported || result.updated || result.archived) await refresh(['events', 'deliveries']);
      setMessage(result.conflicts.length ? `Conflitti: ${result.conflicts.join(', ')}. Uniforma i dati sui due calendari per risolverli.` : '');
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Sincronizzazione non riuscita.'); }
    finally { inFlight.current = false; }
  }, [request, refresh]);
  useEffect(() => {
    if (!live || !supabase || !available || configured) return;
    let cancelled = false;
    request('GET').then(result => { if (!cancelled) { setConfigured(result.configured); if (!result.configured) setMessage('Collega Google Calendar per attivare la sincronizzazione.'); } }).catch(error => { if (!cancelled) setMessage(error.message); });
    return () => { cancelled = true; };
  }, [request, available, configured]);
  useEffect(() => {
    if (!configured || !available) return;
    let timer: ReturnType<typeof setTimeout>;
    const run = () => { if (busyRef.current || inFlight.current) { timer = setTimeout(run, 1000); return; } void sync(); };
    timer = setTimeout(run, Math.max(1500, 5000 - (Date.now() - lastRun.current)));
    return () => clearTimeout(timer);
  }, [configured, available, signature, sync]);
  useEffect(() => {
    if (!configured || !available) return;
    const timer = setInterval(() => { if (document.visibilityState === 'visible') void sync(); }, 60000);
    return () => clearInterval(timer);
  }, [configured, available, sync]);
  if (!live || !enabled || !message) return null;
  return <p className="muted" role="alert" style={{ marginBottom: 16 }}>{message}</p>;
}
