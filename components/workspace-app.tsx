"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Home,
  CalendarDays,
  Settings,
  ChevronRight,
  ChevronDown,
  Sun,
  Moon,
  Menu,
  X,
  Anchor,
  ArrowUpRight,
  Layers,
  LogOut,
  Search,
  Compass,
  Users,
} from "lucide-react";
import { useWorkspace } from "./provider";
import { TEAMS, SEASONS, Collection, Workspace } from "@/lib/model";
import { live, supabase } from "@/lib/repository";
import { Button } from "./ui/button";
import { RecordEditor, newRecord } from "./record-editor";
import {
  HomeView,
  OverviewView,
  TeamView,
  SponsorsView,
  EventsView,
  CostsView,
  AgendaView,
  LibraryView,
  SettingsView,
} from "./views";
export type Edit = (k: Collection, row?: object, defaults?: object, title?: string) => void;
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
  const { data, season, setSeason, ready } = useWorkspace();
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
    setMobile(false);
  }, [path.join("/")]);
  const section = path[0] || "home";
  const team = TEAMS.find((t) => t.id === path[1]);
  const isManagement = section === "team" && team?.id === "management";
  const view = isManagement ? path[2] || "" : section;
  const open: Edit = (collection, row, defaults, title) =>
    setEditor({
      collection,
      row: row
        ? ({ ...row } as Record<string, unknown>)
        : { ...newRecord(collection, season), ...defaults },
      title: title || (row
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
  const crumb =
    section === "home"
      ? "Home"
      : section === "agenda"
        ? "Agenda e Delivery"
        : section === "impostazioni"
          ? "Impostazioni"
          : team?.name || "Pagina non trovata";
  const args = { edit: open };
  let content;
  if (section === "home") content = <HomeView {...args} />;
  else if (section === "agenda") content = <AgendaView {...args} />;
  else if (section === "impostazioni") content = <SettingsView {...args} />;
  else if (section === "team" && team) {
    if (!isManagement || view === "pagina")
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
          <div className="nav-caption">I NOSTRI SOTTOTEAM</div>
          {TEAMS.map((t) => (
            <div key={t.id}>
              <Link
                href={"/team/" + t.id}
                className={"nav-team " + (team?.id === t.id ? "active" : "")}
              >
                <span className="team-dot" style={{ background: t.color }} />
                <span>{t.name}</span>
                {t.id === "management" && <ChevronDown size={12} />}
              </Link>
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
          <Link
            href="/impostazioni"
            className={
              "nav-link " + (section === "impostazioni" ? "active" : "")
            }
          >
            <Settings size={18} />
            Impostazioni
          </Link>
          <a
            href="https://sapienzafoilingteam.com"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            <ArrowUpRight size={18} />
            Sito del team
          </a>
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
            <span className="mode-badge">
              <span />
              {live ? "Connesso" : "Modalità demo"}
            </span>
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
            <div className="avatar small">SF</div>
          </div>
        </header>
        <main id="main">
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
          {ready ? (
            content
          ) : (
            <div className="empty">Preparazione del workspace…</div>
          )}
          <footer className="page-footer">
            <span>SAPIENZA FOILING TEAM</span>
            <span>Progettiamo. Costruiamo. Navighiamo.</span>
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
