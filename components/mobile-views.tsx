'use client';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, ChevronRight, FolderOpen, Globe, Lightbulb, LogOut, Plus, Settings, Users } from 'lucide-react';
import { useTheme } from 'next-themes';
import { departmentMeetingsForMonth } from '@/lib/department-resources';
import { SEASONS, TEAMS, dateLabel, safeUrl } from '@/lib/model';
import { live, supabase } from '@/lib/repository';
import { useWorkspace } from './provider';
import { Deadlines } from './deadlines';
import { DepartmentResources } from './department-resources';
import { Button } from './ui/button';
import { Heading } from './views/shared';
import { linkIcon } from './link-icons';
import { useNavigationAppearance } from '@/lib/navigation-appearance';
import { PwaInstall } from './pwa';
import type { Edit } from './workspace-app';

export function MobileHome({ edit }: { edit: Edit }) {
  const { data, season } = useWorkspace();
  const today = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Rome' }).format(new Date());
  const links = data.links.filter(l => !l.archived && l.season_id === season && !l.team_id);
  const todayItems = [...data.deliveries, ...data.events].filter(d => !d.archived && d.season_id === season && d.date === today);
  const todayCount = todayItems.length + departmentMeetingsForMonth(season, today.slice(0, 7)).filter(d => d.date === today).length;
  return <div className="mobile-home">
    <div className="mobile-welcome"><div><h1>Il tuo workspace</h1><p>{dateLabel(today)} · Stagione {SEASONS.find(s => s.id === season)?.name}</p></div></div>
    <section className="mobile-today"><div><span>Oggi</span><strong>{todayCount ? `${todayCount} ${todayCount === 1 ? 'impegno' : 'impegni'} in agenda` : 'La giornata del team'}</strong></div><Link href="/agenda" aria-label="Apri agenda"><CalendarDays size={22} /></Link></section>
    <Deadlines edit={edit} />
    <div className="mobile-section-title"><h2>Accesso rapido</h2><Button variant="ghost" size="icon" aria-label="Aggiungi link" onClick={() => edit('links')}><Plus size={20} /></Button></div>
    <div className="mobile-group">
      {links.map(link => { const Icon = linkIcon(link); const url = safeUrl(link.url); const content = <><Icon size={20} /><span>{link.title}<small>{url ? link.category : 'Da configurare'}</small></span>{url ? <ArrowUpRight size={16} /> : <Plus size={16} />}</>; return <div className="mobile-resource" key={link.id}>{url ? <a href={url} target="_blank" rel="noreferrer">{content}</a> : <button className="mobile-resource-configure" onClick={() => edit('links', link)}>{content}</button>}<button aria-label={`Modifica ${link.title}`} onClick={() => edit('links', link)}><Settings size={17} /></button></div>; })}
      {!links.length && <p className="muted">Aggiungi un collegamento alle risorse del team.</p>}
    </div>
    <div className="mobile-section-title"><h2>Lavora con il team</h2></div>
    <div className="mobile-group"><Link className="mobile-row" href="/reparti"><Users size={21} /><span>Reparti<small>Pagine, riunioni e risorse</small></span><ChevronRight size={18} /></Link><Link className="mobile-row" href="/drive"><FolderOpen size={21} /><span>Drive del team<small>File e cartelle condivisi</small></span><ChevronRight size={18} /></Link></div>
  </div>;
}
export function DepartmentsView() {
  return <><Heading title="Reparti" description="Pagine, risorse e lavoro dei sette reparti." /><div className="mobile-group departments-list">{TEAMS.map(team => <Link className="mobile-row" href={`/team/${team.id}`} key={team.id}><span className="department-monogram" aria-hidden="true">{team.short.slice(0, 2).toUpperCase()}</span><span>{team.name}<small>{team.description}</small></span><ChevronRight size={18} /></Link>)}</div><DepartmentResources compact /></>;
}
export function MoreView() {
  const { season, setSeason } = useWorkspace();
  const { theme, setTheme } = useTheme();
  const { preference, setPreference } = useNavigationAppearance();
  return <><Heading title="Altro" description="Strumenti e preferenze del workspace." />
    <div className="mobile-group">{[
      ['/recruiting', 'Recruiting', Users], ['/team/management/sponsor', 'Sponsor e partnership', Users],
      ['/team/management/bilancio', 'Bilancio', FolderOpen], ['/team/management/contratti', 'Contratti', FolderOpen],
      ['/richieste-crm', 'Richieste di sviluppo', Lightbulb], ['/impostazioni', 'Impostazioni', Settings],
    ].map(([href, label, Icon]) => { const ItemIcon = Icon as typeof Users; return <Link className="mobile-row" href={href as string} key={href as string}><ItemIcon size={21} /><span>{label as string}</span><ChevronRight size={18} /></Link>; })}</div>
    <div className="mobile-section-title"><h2>Preferenze</h2></div>
    <div className="mobile-group mobile-preferences"><label>Stagione<select aria-label="Stagione del workspace" value={season} onChange={e => setSeason(e.target.value)}>{SEASONS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select></label><label>Aspetto<select aria-label="Aspetto" value={theme || 'system'} onChange={e => setTheme(e.target.value)}><option value="system">Automatico</option><option value="light">Chiaro</option><option value="dark">Scuro</option></select></label><label>Barra di navigazione<select aria-label="Stile della barra di navigazione" value={preference} onChange={e => setPreference(e.target.value as typeof preference)}><option value="auto">Automatica</option><option value="ios">iOS · Liquid Glass</option><option value="android">Android · Material 3</option></select></label></div>
    <PwaInstall />
    <div className="mobile-section-title"><h2>Sapienza Foiling Team</h2></div>
    <div className="mobile-group"><a className="mobile-row" href="/design-system/index.html"><Settings size={21} /><span>Design system</span><ChevronRight size={18} /></a><a className="mobile-row" href="https://sapienzafoilingteam.com" target="_blank" rel="noreferrer"><Globe size={21} /><span>Sito del team</span><ArrowUpRight size={18} /></a>{live && <button className="mobile-row" onClick={async () => { await supabase?.auth.signOut(); window.location.reload(); }}><LogOut size={21} /><span>Esci dal workspace</span></button>}</div>
  </>;
}
