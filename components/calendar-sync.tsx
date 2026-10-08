'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { live, supabase } from '@/lib/repository';
import { useWorkspace } from './provider';
export function CalendarSync() {
  const { data, busy, refresh } = useWorkspace();
  const [configured, setConfigured] = useState(false);
  const [message, setMessage] = useState('');
  const inFlight = useRef(false);
  const busyRef = useRef(busy);
  busyRef.current = busy;
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
    inFlight.current = true;
    try {
      const result = await request('POST');
      if (result.imported || result.updated || result.archived) await refresh();
      setMessage(result.conflicts.length
        ? `Conflitti: ${result.conflicts.join(', ')}. Uniforma i dati sui due calendari per risolverli.`
        : '');
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Sincronizzazione non riuscita.'); }
    finally { inFlight.current = false; }
  }, [request, refresh]);
  useEffect(() => {
    if (!live || !supabase) return;
    let cancelled = false;
    request('GET').then(result => {
      if (!cancelled) { setConfigured(result.configured); if (!result.configured) setMessage('Collega Google Calendar per attivare la sincronizzazione.'); }
    }).catch(error => { if (!cancelled) setMessage(error.message); });
    return () => { cancelled = true; };
  }, [request]);
  useEffect(() => {
    if (!configured || busy) return;
    const timer = setTimeout(() => void sync(), 1500);
    return () => clearTimeout(timer);
  }, [configured, busy, signature, sync]);
  useEffect(() => {
    if (!configured) return;
    const timer = setInterval(() => { if (document.visibilityState === 'visible') void sync(); }, 60000);
    return () => clearInterval(timer);
  }, [configured, sync]);
  if (!live || !message) return null;
  return <p className="muted" role="alert" style={{ marginBottom: 16 }}>{message}</p>;
}
