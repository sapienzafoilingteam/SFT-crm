'use client';
import { useEffect, useState } from 'react';
import { supabase, live } from '@/lib/repository';
import { Button } from './ui/button';
type Member = { id: string; display_name: string; active: boolean; is_admin: boolean; social_enabled: boolean };
export function SocialAccessPanel() {
  const [members, setMembers] = useState<Member[]>([]), [error, setError] = useState(''), [busy, setBusy] = useState(''), [reload, setReload] = useState(0), [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!supabase || !live) { setLoading(false); return; }
    let active = true; setLoading(true); setError('');
    void supabase.from('members').select('id,display_name,active,is_admin,social_enabled').order('display_name').then(({ data, error }) => { if (!active) return; if (error) setError('Impossibile caricare gli accessi Social.'); else setMembers(data as Member[]); setLoading(false); });
    return () => { active = false; };
  }, [reload]);
  if (!live) return null;
  return <details className="social-access-panel panel"><summary>Accessi a Social Studio</summary><p className="muted">Abilita le persone dell’area Management. Gli amministratori attivi hanno già accesso e gestiscono il Brand.</p>{loading && <p role="status">Caricamento degli accessi…</p>}{error && <p role="alert">{error} <Button variant="ghost" onClick={() => setReload(n => n + 1)}>Riprova</Button></p>}<div>{members.map(member => <label key={member.id} className="social-access-row"><span>{member.display_name || `Membro ${member.id.slice(-8)}`}<small>{!member.active ? 'Account CRM non attivo' : member.is_admin ? 'Amministratore' : 'Membro del team'}</small></span><input type="checkbox" aria-label={`Accesso Social per ${member.display_name || member.id.slice(-8)}`} checked={member.is_admin || member.social_enabled} disabled={!!busy || !member.active || member.is_admin} onChange={async e => { const enabled = e.target.checked; if (!supabase) return; setBusy(member.id); setError(''); const { data, error } = await supabase.from('members').update({ social_enabled: enabled }).eq('id', member.id).select('id').single(); if (error || !data) setError('Aggiornamento accesso non riuscito. Riprova.'); else setMembers(all => all.map(m => m.id === member.id ? { ...m, social_enabled: enabled } : m)); setBusy(''); }} /></label>)}</div></details>;
}
