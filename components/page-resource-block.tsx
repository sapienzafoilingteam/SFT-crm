"use client";
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Image as ImageIcon, Link2, Pencil } from 'lucide-react';
import { safeUrl, type Block } from '@/lib/model';
import { useAutosizeTextarea } from './use-autosize-textarea';

export function PageResourceBlock({ block, onChange, autoFocus }: {
  block: Block;
  onChange?: (patch: Partial<Block>) => void;
  autoFocus?: boolean;
}) {
  const image = block.type === 'immagine';
  const url = safeUrl(block.url || '');
  const host = url ? new URL(url).hostname.replace(/^www\./, '') : '';
  const [failedUrl, setFailedUrl] = useState('');
  const [editing, setEditing] = useState(!url);
  const settings = useRef<HTMLDetailsElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const caption = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextarea(caption, block.content, image && url ? 'image' : '');
  useEffect(() => {
    if (autoFocus && !url) { setEditing(true); address.current?.focus(); }
  }, [autoFocus, image]);
  const Icon = image ? ImageIcon : Link2;
  return <div className={'page-resource ' + (image ? 'page-image' : 'page-link')}>
    {url ? image ? <figure>
      {failedUrl === url ? <div className="resource-placeholder" role="status"><ImageIcon size={24} /><span>Impossibile visualizzare l’immagine. Verifica che l’indirizzo punti al file dell’immagine e sia accessibile.</span><button type="button" onClick={() => setFailedUrl('')}>Riprova</button></div> : <img src={url} alt={block.content || 'Immagine del reparto'} loading="lazy" decoding="async" onError={() => setFailedUrl(url)} />}
      <figcaption><textarea ref={caption} rows={1} aria-label="Didascalia immagine" className="image-caption" placeholder="Aggiungi una didascalia…" value={block.content} onChange={event => onChange?.({ content: event.target.value })} /></figcaption>
    </figure> : <a className="resource-preview-card" href={url} target="_blank" rel="noopener noreferrer">
      <Link2 size={22} /><span><strong>{block.content.trim() || host}</strong><small>{host}</small></span><ArrowUpRight size={18} />
    </a> : <div className="resource-placeholder"><Icon size={22} /><span>{image ? 'Incolla l’indirizzo di un’immagine per visualizzarla qui.' : 'Incolla un indirizzo per aggiungere il collegamento.'}</span></div>}
    <details className="resource-settings" ref={settings} open={editing} onToggle={event => setEditing(event.currentTarget.open)}>
      <summary><Pencil size={13} />{url ? image ? 'Modifica immagine' : 'Modifica link' : image ? 'Indirizzo immagine' : 'Indirizzo link'}</summary>
      <div className="resource-setting-fields">
        <label>{image ? 'URL dell’immagine' : 'URL del collegamento'}<input ref={address} type="url" aria-label={image ? 'Indirizzo immagine' : 'Indirizzo link'} placeholder="https://…" value={block.url || ''} onChange={event => onChange?.({ url: event.target.value })} onKeyDown={event => {
          if (event.key === 'Enter' && url) { event.preventDefault(); setEditing(false); }
        }} /></label>
        {!image && <label>Nome del link<input aria-label="Nome del link" placeholder={host || 'Nome della risorsa'} value={block.content} onChange={event => onChange?.({ content: event.target.value })} /></label>}
        {block.url && !url && <p className="form-error" role="status">Usa un indirizzo completo che inizi con https:// o http://.</p>}
      </div>
    </details>
  </div>;
}
