'use client';
import { useEffect, type RefObject } from 'react';
import { live, supabase } from '@/lib/repository';
const CHANNEL = 'sft-dollaroni';

/** The authenticated shell proxies Gemini; no session token or API key enters the iframe. */
export function BrumothBridge({ iframe, scope }: { iframe: RefObject<HTMLIFrameElement | null>; scope: string }) {
  useEffect(() => {
    if (!scope) return;
    let active = true;
    const requests = new Map<string, AbortController>();
    const send = (message: Record<string, unknown>) => {
      if (active) iframe.current?.contentWindow?.postMessage({ channel: CHANNEL, scope, ...message }, location.origin);
    };
    const display = () => send({ type: 'display', fullscreen: Boolean(document.fullscreenElement) });
    const receive = (event: MessageEvent) => {
      if (event.origin !== location.origin || event.source !== iframe.current?.contentWindow || event.data?.channel !== CHANNEL) return;
      const message = event.data;
      if (message.type === 'ready') { display(); return; }
      if (message.scope !== scope || typeof message.requestId !== 'string' || message.requestId.length > 100) return;
      const id = message.requestId;
      if (message.type === 'ai-cancel') { requests.get(id)?.abort(); return; }
      if (message.type !== 'ai') return;
      if (requests.has(id)) return;
      if (requests.size >= 2) { send({ type: 'ai-result', requestId: id, ok: false, error: 'Una risposta è già in preparazione. Attendi un momento.' }); return; }
      const controller = new AbortController(); requests.set(id, controller);
      void (async () => {
        try {
          const body = JSON.stringify({ task: message.task, messages: message.messages });
          if (new TextEncoder().encode(body).length > 64000) throw new Error('La domanda è troppo lunga. Inizia una nuova conversazione.');
          if (!live || !supabase) throw new Error('Per usare Gemini accedi al CRM. Nella demo puoi consultare i dati calcolati del progetto.');
          const { data, error } = await supabase.auth.getSession();
          if (controller.signal.aborted) return;
          if (error || !data.session?.access_token) throw new Error('La sessione è scaduta. Accedi di nuovo al CRM.');
          const response = await fetch('/api/dollaroni/brumoth', {
            method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.session.access_token}` },
            body, signal: controller.signal, cache: 'no-store',
          });
          const result = await response.json();
          if (!response.ok) throw new Error(typeof result.error === 'string' ? result.error : 'Gemini non è disponibile. Riprova.');
          send({ type: 'ai-result', requestId: id, ok: true, text: result.text, model: result.model });
        } catch (error) {
          if (!controller.signal.aborted) send({ type: 'ai-result', requestId: id, ok: false, error: error instanceof Error ? error.message : 'Brumoth non riesce a contattare Gemini.' });
        } finally { requests.delete(id); }
      })();
    };
    window.addEventListener('message', receive);
    document.addEventListener('fullscreenchange', display);
    display();
    return () => {
      active = false; requests.forEach(controller => controller.abort()); requests.clear();
      window.removeEventListener('message', receive); document.removeEventListener('fullscreenchange', display);
    };
  }, [iframe, scope]);
  return null;
}
