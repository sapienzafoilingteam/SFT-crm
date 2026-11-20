"use client";
import { useCallback, useEffect, useState } from 'react';
import { TEAMS } from '@/lib/model';
import { live, supabase } from '@/lib/repository';
import { CAPTAIN, PROJECT_MANAGER_LABEL, hasCaptainPowers, roleTags, setMemberAssignment, type Role, ROLE_LABEL } from '@/lib/attendance';
import { useWorkspace } from './provider';
import { Button } from './ui/button';
import { Badge, Empty, SectionTitle } from './views/shared';

interface MemberRow { id: string; email: string; full_name: string; display_name: string; team_id: string | null; role: Role; project_manager: boolean; active: boolean; is_admin: boolean; created_at: string }

/** Valore unico per reparto + ruolo: "scafo", "scafo:capo_progetto" oppure "team_captain". */
const encode = (r: Pick<MemberRow, 'team_id' | 'role'>) => r.role === 'team_captain' ? CAPTAIN : r.team_id ? (r.role === 'capo_progetto' ? `${r.team_id}:capo_progetto` : r.team_id) : '';
function decode(value: string): { team_id: string | null; role: Role } {
  if (value === CAPTAIN) return { team_id: null, role: 'team_captain' };
  const [team, role] = value.split(':');
  return { team_id: team, role: role === 'capo_progetto' ? 'capo_progetto' : 'membro' };
}
const roleLabel = (r: MemberRow) => r.role === 'team_captain' ? ROLE_LABEL.team_captain
  : [TEAMS.find(t => t.id === r.team_id)?.short || 'Nessun reparto', ...roleTags(r)].join(' · ');

/**
 * Gli account si attivano alla conferma della mail. Tutti i membri vedono l'elenco;
 * solo chi ha i poteri del Team Captain abilita o disattiva gli account e corregge reparto e ruolo.
 */
export function MembersAdmin() {
  const { notice } = useWorkspace();
  const [rows, setRows] = useState<MemberRow[] | null>(null);
  const [me, setMe] = useState<MemberRow | null>(null);
  const [error, setError] = useState(''), [saving, setSaving] = useState('');
  const load = useCallback(async () => {
    if (!supabase) return;
    const { data: { user } } = await supabase.auth.getUser();
    const { data, error: loadError } = await supabase.from('members').select('id,email,full_name,display_name,team_id,role,project_manager,active,is_admin,created_at').order('created_at', { ascending: false });
    if (loadError) { setError(loadError.message); return; }
    const list = (data || []) as MemberRow[];
    setMe(list.find(m => m.id === user?.id) || null);
    setRows(list);
  }, []);
  useEffect(() => { void load(); }, [load]);
  if (!live) return <section className="panel settings-links"><SectionTitle title="Account del team" /><Empty text="La gestione degli account è disponibile con Supabase collegato." /></section>;
  if (error) return <section className="panel settings-links" role="alert"><p>{error}</p><Button onClick={() => { setError(''); void load(); }}>Riprova</Button></section>;
  if (!rows) return <section className="panel settings-links"><p role="status">Caricamento degli account…</p></section>;
  const captain = hasCaptainPowers(me);
  const run = async (row: MemberRow, action: () => Promise<void>) => {
    setSaving(row.id);
    try { await action(); notice('Account aggiornato'); void load(); }
    catch (e) { notice('Account non aggiornato: ' + (e instanceof Error ? e.message : String(e))); }
    finally { setSaving(''); }
  };
  const toggleActive = (row: MemberRow) => run(row, async () => {
    const { error: saveError } = await supabase!.rpc('set_member_active', { p_member: row.id, p_active: !row.active });
    if (saveError) throw new Error(saveError.message);
  });
  // Cambiando reparto il Project Manager resta (non con Team Captain); la spunta lo aggiunge o toglie.
  const reassign = (row: MemberRow, value: string, projectManager = row.project_manager) => run(row, async () => {
    const next = decode(value);
    await setMemberAssignment(row.id, next.team_id, next.role, Boolean(next.team_id && projectManager));
  });
  const pending = rows.filter(r => !r.active);
  return <section className="panel settings-links">
    <SectionTitle title="Account del team"><span className="muted">{pending.length} non attivi</span></SectionTitle>
    {[...pending, ...rows.filter(r => r.active)].map(r => <div className="task-row member-row" key={r.id}>
      <div>
        <strong>{r.full_name || r.display_name || 'Profilo da completare'}</strong>
        <small>{r.email}{r.is_admin ? ' · amministratore' : ''}{!captain ? ' · ' + roleLabel(r) : ''}</small>
      </div>
      {captain && <>
        <label className="sr-only" htmlFor={`team-${r.id}`}>Reparto e ruolo di {r.full_name || r.email}</label>
        <select id={`team-${r.id}`} value={encode(r)} disabled={saving === r.id} onChange={e => void reassign(r, e.target.value)}>
          {!encode(r) && <option value="" disabled>Nessun reparto</option>}
          <optgroup label="Reparto">{TEAMS.map(t => <option key={t.id} value={t.id}>{t.short}</option>)}</optgroup>
          <optgroup label={`Reparto + ${ROLE_LABEL.capo_progetto}`}>{TEAMS.map(t => <option key={t.id} value={`${t.id}:capo_progetto`}>{t.short} · {ROLE_LABEL.capo_progetto}</option>)}</optgroup>
          <optgroup label="Tutti i reparti"><option value={CAPTAIN}>Team Captain</option></optgroup>
        </select>
        <label className="member-pm">
          <input type="checkbox" checked={r.project_manager} disabled={saving === r.id || !r.team_id || r.role === 'team_captain'}
            onChange={e => void reassign(r, encode(r), e.target.checked)} />
          {PROJECT_MANAGER_LABEL}
        </label>
      </>}
      {r.active ? <Badge tone="green">Attivo</Badge> : <Badge tone="gold">Non attivo</Badge>}
      {captain && <Button size="sm" variant={r.active ? 'outline' : 'default'} disabled={saving === r.id || r.is_admin || r.id === me?.id} onClick={() => void toggleActive(r)}>
        {r.active ? 'Disattiva' : 'Abilita'}
      </Button>}
    </div>)}
  </section>;
}
