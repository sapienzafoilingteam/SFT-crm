"use client";
import { PROJECTS, findProject, projectPath } from '@/lib/software-projects';
import { Collection, SEASONS, TEAMS } from "@/lib/model";
import { newRecord } from "@/lib/new-record";
import { live, supabase } from "@/lib/repository";
import { routeCollections } from '@/lib/workspace-resources';
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Compass,
  FolderOpen,
  Home,
  Lightbulb,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
  Users,
  X
} from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarSync } from "./calendar-sync";
import { LegalLinks } from "./legal-page";
import { useWorkspace } from "./provider";
import { Button } from "./ui/button";
const DriveView = dynamic(() => import("./drive-view").then(m => m.DriveView), { loading: () => <div className="empty" role="status">Caricamento Drive…</div> });
const RecruitingView = dynamic(() => import("./recruiting-view").then(m => m.RecruitingView));
const ViewLoading = () => <div className="empty" role="status">Caricamento della pagina…</div>;
const RecordEditor = dynamic(() => import('./record-editor').then(m => m.RecordEditor));
const SoftwareProjectPage = dynamic(() => import("./software-projects").then(m => m.SoftwareProjectPage), { loading: ViewLoading });
const HomeView = dynamic(() => import("./views/home").then(m => m.HomeView), { loading: ViewLoading });
const OverviewView = dynamic(() => import("./views/overview").then(m => m.OverviewView), { loading: ViewLoading });
const TeamView = dynamic(() => import("./views/team").then(m => m.TeamView), { loading: ViewLoading });
const SponsorsView = dynamic(() => import("./views/sponsors").then(m => m.SponsorsView), { loading: ViewLoading });
const EventsView = dynamic(() => import("./views/events").then(m => m.EventsView), { loading: ViewLoading });
const CostsView = dynamic(() => import("./views/costs").then(m => m.CostsView), { loading: ViewLoading });
const AgendaView = dynamic(() => import("./views/agenda").then(m => m.AgendaView), { loading: ViewLoading });
const LibraryView = dynamic(() => import("./views/library").then(m => m.LibraryView), { loading: ViewLoading });
const FeatureRequestsView = dynamic(() => import("./views/feature-requests").then(m => m.FeatureRequestsView), { loading: ViewLoading });
const SettingsView = dynamic(() => import("./views/settings").then(m => m.SettingsView), { loading: ViewLoading });
export type Edit = (
  k: Collection,
  row?: object,
  defaults?: object,
  title?: string,
) => void;
const management = [
  ["", "Panoramica"],
  ["pagina", "Pagina del reparto"],
  ["eventi", "Eventi"],
  ["sponsor", "Sponsor"],
  ["contratti", "Contratti"],
  ["template", "Template e Media"],
  ["bilancio", "Bilancio"],
];
export function WorkspaceApp({ path }: { path: string[] }) {
  const { data, season, setSeason, ready, ensure, isLoaded, notice } = useWorkspace();
  const routeKey = path.join('/');
  const currentView = useRef(routeKey + season); currentView.current = routeKey + season;
  const required = useMemo(() => routeCollections(routeKey.split('/').filter(Boolean)), [routeKey]);
  const [loadError, setLoadError] = useState('');
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    if (!ready) return;
    let active = true; setLoadError('');
    void ensure(required).catch(error => { if (active) setLoadError(error.message); });
    return () => { active = false; };
  }, [ready, required, season, ensure, retry]);
  const { resolvedTheme, setTheme } = useTheme();
  const [mobile, setMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [editor, setEditor] = useState<{
    collection: Collection;
    row: Record<string, unknown>;
    title: string;
  } | null>(null);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    setEditor(null);
    setMobile(false);
  }, [path.join("/"), season]);
  const section = path[0] || "home";
  const team = TEAMS.find((t) => t.id === path[1]);
  const isSoftwareProject = section === "team" && team?.id === "elettronica" && path[2] === "progetti";
  const softwareProject = isSoftwareProject ? findProject(path[3] || "") : undefined;
  const isManagement = section === "team" && team?.id === "management";
  const view = isManagement ? path[2] || "" : section;
  const open: Edit = (collection, row, defaults, title) => {
    if (!isLoaded([collection, 'sponsors', 'events'])) {
      const requestedView = currentView.current;
      void ensure([collection, 'sponsors', 'events']).then(() => { if (requestedView === currentView.current && isLoaded([collection, 'sponsors', 'events'])) open(collection, row, defaults, title); }).catch(error => notice(error.message));
      return;
    }
    const fresh = row ? row : newRecord(collection, season);
    setEditor({
      collection,
      row: row
        ? ({ ...row } as Record<string, unknown>)
        : { ...fresh, ...(team && (!isManagement || view === "pagina") && "team_id" in fresh ? { team_id: team.id } : {}), ...defaults },
      title:
        title ||
        (row
          ? "Modifica dettagli"
          : (
            {
              sponsors: "Nuova trattativa",
              events: "Nuovo evento",
              costs: "Aggiungi costo",
              deliveries: "Nuova delivery",
              reports: "Nuovo report",
              templates: "Nuovo template",
              contracts: "Nuovo contratto",
              documents: "Nuova risorsa",
              links: "Nuovo link",
              offers: "Nuova offerta",
              recurrences: "Nuovo modello mensile",
            } as Record<string, string>
          )[collection] || "Nuovo elemento"),
    });
  };
  const crumb =
    section === "home"
      ? "Home"
      : section === "richieste-crm" ? "Richieste di sviluppo"
      : section === "agenda"
        ? "Agenda e Delivery"
        : section === "recruiting"
          ? "Recruiting"
          : section === "drive"
            ? "Drive del team"
            : section === "impostazioni"
              ? "Impostazioni"
              : (softwareProject ? `${team?.name} / ${softwareProject.title}` : team?.name) || "Pagina non trovata";
  const args = { edit: open };
  let content;
  if (section === "home") content = <HomeView {...args} />;
  else if (section === "richieste-crm") content = <FeatureRequestsView />;
  else if (section === "agenda") content = <AgendaView {...args} />;
  else if (section === "drive") content = <DriveView />;
  else if (section === "recruiting") content = <RecruitingView />;
  else if (section === "impostazioni") content = <SettingsView {...args} />;
  else if (section === "team" && team) {
    if (isSoftwareProject) content = <SoftwareProjectPage key={path[3]} slug={path[3] || ""} />;
    else if (!isManagement || view === "pagina")
      content = <TeamView team={team} {...args} />;
    else if (view === "") content = <OverviewView {...args} />;
    else if (view === "sponsor") content = <SponsorsView {...args} />;
    else if (view === "eventi") content = <EventsView {...args} />;
    else if (view === "bilancio") content = <CostsView {...args} />;
    else if (view === "contratti")
      content = <LibraryView mode="contracts" {...args} />;
    else if (view === "template")
      content = <LibraryView mode="templates" {...args} />;
  }
  if (!content)
    content = (
      <div className="empty">
        <h1>Pagina non trovata</h1>
        <Link href="/">Torna alla Home</Link>
      </div>
    );
  return (
    <div className="workspace">
      <a className="skip-link" href="#main">
        Vai al contenuto
      </a>
      {mobile && (
        <button
          className="nav-scrim"
          aria-label="Chiudi navigazione"
          onClick={() => setMobile(false)}
        />
      )}
      <aside className={"sidebar " + (mobile ? "open" : "")}>
        <Link href="/" className="brand">
          <img src="/logo.svg" alt="" />
          <div>
            SAPIENZA<span>FOILING TEAM</span>
            <small>TEAM WORKSPACE</small>
          </div>
        </Link>
        <button
          className="mobile-close btn-icon"
          aria-label="Chiudi menu"
          onClick={() => setMobile(false)}
        >
          <X size={18} />
        </button>
        <div className="season-switch">
          <span className="season-dot" />
          <label className="sr-only" htmlFor="season">
            Stagione
          </label>
          <select
            id="season"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          >
            {SEASONS.map((s) => (
              <option key={s.id} value={s.id}>
                Stagione {s.name}
              </option>
            ))}
          </select>
          <ChevronDown size={14} />
        </div>
        <nav aria-label="Navigazione principale">
          <Link
            href="/"
            className={section === "home" ? "nav-link active" : "nav-link"}
          >
            <Home size={18} />
            Home
          </Link>
          <Link
            href="/drive"
            className={section === "drive" ? "nav-link active" : "nav-link"}
          >
            <FolderOpen size={18} />
            Drive del team
          </Link>
          <Link
            href="/agenda"
            className={section === "agenda" ? "nav-link active" : "nav-link"}
          >
            <CalendarDays size={18} />
            Agenda e Delivery
            <span className="nav-count">
              {
                data.deliveries.filter(
                  (d) =>
                    d.season_id === season &&
                    !d.archived &&
                    d.status !== "Consegnato / Pubblicato",
                ).length
              }
            </span>
          </Link>
          <Link href="/recruiting" className={section === "recruiting" ? "nav-link active" : "nav-link"}>
            <Users size={18} />Recruiting
          </Link>
          <div className="nav-caption">I NOSTRI SOTTOTEAM</div>
          {TEAMS.map((t) => (
            <div key={t.id}>
              <Link
                href={"/team/" + t.id}
                className={"nav-team " + (team?.id === t.id ? "active" : "")}
              >
                <span className="team-dot" style={{ background: t.color }} />
                <span>{t.name}</span>
                {["management", "elettronica"].includes(t.id) && <ChevronDown size={12} />}
              </Link>
              {t.id === "elettronica" && team?.id === "elettronica" && <div className="subnav"><Link className={!isSoftwareProject ? "selected" : ""} href="/team/elettronica">Pagina del reparto</Link>{PROJECTS.map(project => <Link key={project.slug} className={softwareProject?.slug === project.slug ? "selected" : ""} href={projectPath(project)}>{project.title}</Link>)}</div>}
              {t.id === "management" && isManagement && (
                <div className="subnav">
                  {management.map(([p, label]) => (
                    <Link
                      className={view === p ? "selected" : ""}
                      key={p}
                      href={"/team/management" + (p ? "/" + p : "")}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="profile">
            <div className="avatar">SF</div>
            <div>
              <strong>Workspace condiviso</strong>
              <small>{live ? "Team connesso" : "Anteprima dimostrativa"}</small>
            </div>
            {live && (
              <button
                className="icon-button"
                aria-label="Esci"
                onClick={async () => {
                  await supabase?.auth.signOut();
                  window.location.reload();
                }}
              >
                <LogOut size={16} />
              </button>
            )}
          </div>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <div className="breadcrumb">
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu"
              aria-label="Apri menu"
              onClick={() => setMobile(true)}
            >
              <Menu size={20} />
            </Button>
            <span className="crumb-root">Workspace</span>
            <ChevronRight size={13} />
            <span>{crumb}</span>
          </div>
          <div className="top-actions">
          <Link
            href="/impostazioni"
            className={
              "topbar-link " + (section === "impostazioni" ? "active" : "")
            }
          >
            <Settings size={16} />
            Impostazioni
          </Link>
          <Link
            href="/richieste-crm"
            className={
              "topbar-link " + (section === "richieste-crm" ? "active" : "")
            }
          >
            <Lightbulb size={16} />
            Richieste di sviluppo
          </Link>
          <a
            href="https://sapienzafoilingteam.com"
            target="_blank"
            rel="noreferrer"
            className="topbar-link"
          >
            <ArrowUpRight size={16} />
            Sito del team
          </a>
            <Button
              variant="ghost"
              size="icon"
              aria-label={
                mounted && resolvedTheme === "dark"
                  ? "Attiva tema chiaro"
                  : "Attiva tema scuro"
              }
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </Button>
          </div>
        </header>
        <main id="main">
          <CalendarSync enabled={section === "agenda" || section === "recruiting"} />
          <div className="page-context">
            <span>
              <Compass size={14} /> STAGIONE{" "}
              {SEASONS.find((s) => s.id === season)?.name}
            </span>
            <span className="context-date">
              Il nostro lavoro, una rotta comune.
            </span>
          </div>
          {isManagement && (
            <div className="management-tabs">
              {management.map(([p, label]) => (
                <Link
                  className={view === p ? "selected" : ""}
                  key={p}
                  href={"/team/management" + (p ? "/" + p : "")}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
          {loadError ? <div className="empty" role="alert"><p>{loadError}</p><Button onClick={() => setRetry(n => n + 1)}>Riprova</Button></div> : ready && isLoaded(required) ? <div key={routeKey + season}>{content}</div> : <ViewLoading />}
          <footer className="page-footer">
            <span>SAPIENZA FOILING TEAM</span>
            <span>Progettiamo. Costruiamo. Navighiamo.</span>
            <nav className="footer-actions" aria-label="Collegamenti del workspace">
          <Link
            href="/impostazioni"
            className={
              "footer-link " + (section === "impostazioni" ? "active" : "")
            }
          >
            <Settings size={16} />
            Impostazioni
          </Link>
          <Link
            href="/richieste-crm"
            className={
              "footer-link " + (section === "richieste-crm" ? "active" : "")
            }
          >
            <Lightbulb size={16} />
            Richieste di sviluppo
          </Link>
          <a
            href="https://sapienzafoilingteam.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <ArrowUpRight size={16} />
            Sito del team
          </a>
            </nav>
            <LegalLinks />
          </footer>
        </main>
      </div>
      {editor && (
        <RecordEditor
          key={editor.row.id as string}
          {...editor}
          onClose={() => setEditor(null)}
        />
      )}
    </div>
  );
}
