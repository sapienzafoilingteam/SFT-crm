'use client';
import { useEffect, useState } from 'react';
import { Download, WifiOff } from 'lucide-react';
import { Button } from './ui/button';

/** Cache only a public fallback; workspace responses always come from the network. */
export function PwaRuntime() {
  const [offline, setOffline] = useState(false);
  const [waiting, setWaiting] = useState<ServiceWorker | null>(null);
  useEffect(() => {
    const sync = () => setOffline(!navigator.onLine);
    sync();
    window.addEventListener('online', sync);
    window.addEventListener('offline', sync);
    let disposed = false;
    let registration: ServiceWorkerRegistration | undefined;
    const check = () => {
      if (disposed) return;
      const worker = registration?.waiting;
      setWaiting(navigator.serviceWorker.controller && worker?.state === 'installed' ? worker : null);
    };
    const update = () => {
      const worker = registration?.installing;
      if (worker) worker.addEventListener('statechange', check);
    };
    const controlled = () => { if (!disposed) setWaiting(null); };
    if ('serviceWorker' in navigator) navigator.serviceWorker.addEventListener('controllerchange', controlled);
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      void navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' }).then(value => {
        if (disposed) return;
        registration = value;
        check();
        value.addEventListener('updatefound', update);
      }).catch(() => { /* Installation remains available without offline fallback. */ });
    }
    return () => { disposed = true; window.removeEventListener('online', sync); window.removeEventListener('offline', sync); registration?.removeEventListener('updatefound', update); if ('serviceWorker' in navigator) navigator.serviceWorker.removeEventListener('controllerchange', controlled); };
  }, []);
  return <div className="pwa-notices">
    {offline && <div className="connection-notice" role="status"><WifiOff size={18} /><span>Sei offline. Riconnettiti per caricare e salvare le modifiche.</span></div>}
    {waiting && <div className="connection-notice" role="status"><span>È disponibile un aggiornamento. Salva le modifiche prima di aggiornare.</span><Button variant="outline" size="sm" onClick={() => {
      // Do not interrupt an editor or file operation still open in another part of the UI.
      if (document.querySelector('[role="dialog"], [aria-busy="true"]')) return;
      navigator.serviceWorker.addEventListener('controllerchange', () => window.location.reload(), { once: true });
      waiting.postMessage({ type: 'ACTIVATE_UPDATE' });
    }}>Aggiorna</Button></div>}
  </div>;
}
export function PwaInstall() {
  const [standalone, setStandalone] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(display-mode: standalone)');
    const sync = () => setStandalone(media.matches || !!(navigator as Navigator & { standalone?: boolean }).standalone);
    sync(); media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  return <section className="mobile-install"><Download size={22} /><div><h2>{standalone ? 'SFT sul tuo telefono' : 'Aggiungi alla schermata Home'}</h2><p>{standalone ? 'Stai usando il workspace come app. È necessaria una connessione per caricare e salvare i dati.' : 'Su iPhone apri il menu Condividi di Safari e scegli “Aggiungi alla schermata Home”. Negli altri browser cerca “Installa app” o “Aggiungi alla schermata Home” nel menu.'}</p></div></section>;
}
