"use client";
import { DriveView } from "./drive-view";
import Link from "next/link";
import { linkIcon } from "./link-icons";
import { Deadlines } from "./deadlines";
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Search,
  CalendarDays,
  Mail,
  Globe,
  FolderOpen,
  FileText,
  Instagram,
  Check,
  MoreHorizontal,
  Columns3,
  List,
  GripVertical,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Download,
  CheckCircle2,
  Flag,
  ExternalLink,
  Copy,
  Link2,
  ImageIcon,
  Type,
  Layers,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Upload,
  Archive,
  Clock,
  Anchor,
  Leaf,
  Cpu,
  Waves,
  Wind,
  Wrench,
  Megaphone,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { useWorkspace } from "./provider";
import {
  TEAMS,
  SEASONS,
  STAGES,
  DELIVERY_STATES,
  Workspace,
  Collection,
  Block,
  TeamPage,
  Sponsor,
  EventRecord,
  Delivery,
  Cost,
  Template,
  base,
  money,
  dateLabel,
  safeUrl,
  totalCosts,
  csvCosts,
  monthlyDeliveries,
} from "@/lib/model";
import { PageBlockEditor, MeetingBlock, makeBlock } from "./page-block-editor";
import { live, uploadDocument, documentUrl } from "@/lib/repository";
import type { Edit } from "./workspace-app";
type Props = { edit: Edit; search?: string };
export function Heading({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-heading">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="heading-actions">{children}</div>
    </div>
  );
}
function Empty({ text, action }: { text: string; action?: React.ReactNode }) {
  return (
    <div className="empty">
      <Layers size={25} />
      <p>{text}</p>
      {action}
    </div>
  );
}
function Badge({
  children,
  tone = "",
}: {
  children: React.ReactNode;
  tone?: string;
}) {
  return <span className={"badge " + tone}>{children}</span>;
}
function SectionTitle({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
function External({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  const clean = safeUrl(url);
  return clean ? (
    <a href={clean} target="_blank" rel="noreferrer" className="text-link">
      {children}
      <ArrowUpRight size={14} />
    </a>
  ) : (
    <span className="muted">Da configurare</span>
  );
}
function Toolbar({
  search,
  setSearch,
  children,
}: {
  search: string;
  setSearch: (s: string) => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="toolbar">
      <div className="search-box">
        <Search size={16} />
        <input
          aria-label="Cerca nella pagina"
          placeholder="Cerca…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {children}
    </div>
  );
}
function DownloadCsv({ rows }: { rows: Cost[] }) {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const url = URL.createObjectURL(
          new Blob([csvCosts(rows)], { type: "text/csv;charset=utf-8;" }),
        );
        const a = document.createElement("a");
        a.href = url;
        a.download = "SFT-costi.csv";
        a.click();
        URL.revokeObjectURL(url);
      }}
    >
      <Download size={15} />
      Esporta CSV
    </Button>
  );
}
const teamIcons = [Waves, Megaphone, Leaf, Wrench, Wind, Cpu, Anchor];
export function HomeView({ edit }: Props) {
  const { data, season } = useWorkspace();
  const links = data.links.filter(
    (x) => !x.archived && x.season_id === season && !x.team_id,
  );
  const reports = data.reports
    .filter((x) => !x.archived && x.season_id === season)
    .slice(0, 3);
  return (
    <>
      <SectionTitle title="Home">
        <Link href="/drive" className="text-link"><FolderOpen size={15}/>Drive del team</Link>
        <Button variant="ghost" size="sm" onClick={() => edit("links")}>
          <Plus size={14} />
          Aggiungi link
        </Button>
      </SectionTitle>
      <div className="quick-links">
        {links.map((l) => {
          const Icon = linkIcon(l);
          return (
            <div className="quick-link" key={l.id}>
              <button className="quick-link-edit" aria-label={`Modifica ${l.title}`} title="Modifica link e icona" onClick={() => edit("links", l)}><MoreHorizontal size={18} /></button>
              {safeUrl(l.url) ? (
                <a href={safeUrl(l.url)} target="_blank" rel="noreferrer">
                  <Icon size={21} />
                  <span>
                    {l.title}
                    <small>{l.category}</small>
                  </span>
                  <ArrowUpRight size={15} />
                </a>
              ) : (
                <button onClick={() => edit("links", l)}>
                  <Icon size={21} />
                  <span>
                    {l.title}
                    <small>Da configurare</small>
                  </span>
                  <Plus size={15} />
                </button>
              )}
            </div>
          );
        })}
      </div>
      <SectionTitle title="I nostri sottoteam">
        <span className="muted">Sette reparti. Un unico progetto.</span>
      </SectionTitle>
      <div className="team-grid">
        {TEAMS.map((t, i) => {
          const Icon = teamIcons[i];
          const page = data.pages.find(
            (p) => p.team_id === t.id && p.season_id === season && !p.archived,
          );
          const drive =
            page?.blocks.find(
              (b) =>
                b.type === "link" &&
                !!safeUrl(b.url || "") &&
                b.content.toLowerCase().includes("drive"),
            ) ||
            data.links.find(
              (l) =>
                l.season_id === season &&
                l.team_id === t.id &&
                !l.archived &&
                l.title === "Drive del reparto",
            );
          const meeting =
            page?.blocks.find(
              (b) =>
                b.type === "link" &&
                !!safeUrl(b.url || "") &&
                b.content.toLowerCase().includes("riunione"),
            ) ||
            data.links.find(
              (l) =>
                l.season_id === season &&
                l.team_id === t.id &&
                !l.archived &&
                l.title === "Riunione del reparto",
            );
          return (
            <article className="team-card" key={t.id}>
              <Link href={"/team/" + t.id} className="team-card-main">
                <div className="team-card-top">
                  <div className="team-icon" style={{ color: t.color }}>
                    <Icon size={22} />
                  </div>
                  <ArrowUpRight size={17} />
                </div>
                <h3>{t.name}</h3>
                <p>{page?.summary || t.description}</p>
              </Link>
              <div className="team-card-foot">
                <Link href={"/team/" + t.id}>
                  <span className="team-dot" style={{ background: t.color }} />
                  Pagina
                </Link>
                {safeUrl(drive?.url || "") ? (
                  <a
                    href={safeUrl(drive?.url || "")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FolderOpen size={12} />
                    Drive
                  </a>
                ) : (
                  <Link
                    href={"/team/" + t.id}
                    title="Configura il Drive nella pagina del reparto"
                  >
                    <FolderOpen size={12} />
                    Drive
                  </Link>
                )}
                {safeUrl(meeting?.url || "") ? (
                  <a
                    href={safeUrl(meeting?.url || "")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CalendarDays size={12} />
                    Riunione
                  </a>
                ) : (
                  <Link
                    href={"/team/" + t.id}
                    title="Configura la riunione nella pagina del reparto"
                  >
                    <CalendarDays size={12} />
                    Riunione
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <div className="two-col home-bottom">
        <Deadlines edit={edit} />
        <section className="panel">
          <SectionTitle title="Dal team">
            <Button variant="ghost" size="sm" onClick={() => edit("reports")}>
              <Plus size={14} />
              Report
            </Button>
          </SectionTitle>
          {reports.length ? (
            reports.map((r) => (
              <button
                className="report-row"
                key={r.id}
                onClick={() => edit("reports", r)}
              >
                <span className="report-icon">
                  <FileText size={18} />
                </span>
                <div>
                  <small>
                    {TEAMS.find((t) => t.id === r.team_id)?.name} ·{" "}
                    {dateLabel(r.date)}
                  </small>
                  <strong>{r.title}</strong>
                  <p>{r.content}</p>
                </div>
                <ArrowUpRight size={15} />
              </button>
            ))
          ) : (
            <Empty text="Gli aggiornamenti dei reparti appariranno qui." />
          )}
        </section>
      </div>
      <div className="home-hero home-hero-footer">
        <div className="hero-copy">
          <div className="eyebrow">IL NOSTRO SPAZIO DI SQUADRA</div>
          <h1>
            Una squadra.
            <br />
            Una rotta comune.
          </h1>
          <p>
            Risorse, progetti e persone.
            <br />
            Tutto quello che serve per portare Meravijosa in acqua.
          </p>
          <Link href="/team/management" className="hero-link">
            Entra nel lavoro del team <ArrowRight size={17} />
          </Link>
          <div className="hero-bottom">
            <span className="live-dot" />
            STAGIONE {SEASONS.find((s) => s.id === season)?.name}
            <span>SuMoth Challenge</span>
          </div>
        </div>
        <div className="hero-photo">
          <img
            src="/meravijosa.avif"
            alt="Meravijosa e il team durante la preparazione della barca"
          />
          <div className="photo-label">
            MERAVIJOSA <span>Progettata per volare.</span>
          </div>
        </div>
      </div>
    </>
  );
}
export function OverviewView({ edit }: Props) {
  const { data, season } = useWorkspace();
  const s = data.sponsors.filter((x) => !x.archived && x.season_id === season);
  const e = data.events.filter((x) => !x.archived && x.season_id === season);
  const d = data.deliveries.filter(
    (x) =>
      !x.archived && x.season_id === season && x.status !== DELIVERY_STATES[3],
  );
  const amount = s
    .filter((x) => x.stage === "Attivo")
    .reduce((a, x) => a + x.amount_cents, 0);
  return (
    <>
      <Heading
        eyebrow="MANAGEMENT E COMUNICAZIONE"
        title="Diamo forma alla stagione."
        description="Partnership, eventi e contenuti: il punto sul nostro lavoro."
      >
        <Button onClick={() => edit("events")}>
          <Plus size={16} />
          Nuovo evento
        </Button>
      </Heading>
      <div className="stats-grid">
        <div className="stat">
          <span>Sponsor in pipeline</span>
          <strong>{s.filter((x) => x.stage !== "Attivo").length}</strong>
          <small>
            {s.filter((x) => x.stage === "Attivo").length} collaborazioni attive
          </small>
        </div>
        <div className="stat">
          <span>Contributi cash concordati</span>
          <strong>{money(amount)}</strong>
          <small>Accordi attivi · non incassi</small>
        </div>
        <div className="stat">
          <span>Delivery da completare</span>
          <strong>{d.length}</strong>
          <small>Report, blog e social</small>
        </div>
        <div className="stat">
          <span>Costi della stagione</span>
          <strong>
            {money(
              totalCosts(data.costs.filter((x) => x.season_id === season)),
            )}
          </strong>
          <small>Spese registrate dal team</small>
        </div>
      </div>
      <div className="two-col">
        <section className="panel">
          <SectionTitle title="Prossimi passi sponsor">
            <Link href="/team/management/sponsor" className="text-link">
              Kanban <ArrowRight size={14} />
            </Link>
          </SectionTitle>
          {s.slice(0, 5).map((x) => (
            <button
              className="task-row"
              key={x.id}
              onClick={() => edit("sponsors", x)}
            >
              <div className="company-avatar">
                {x.title.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <strong>{x.title}</strong>
                <small>{x.next_action || "Definire il prossimo passo"}</small>
              </div>
              <span className="muted">{dateLabel(x.due_date)}</span>
            </button>
          ))}
        </section>
        <section className="panel">
          <SectionTitle title="Eventi in preparazione">
            <Link href="/team/management/eventi" className="text-link">
              Tutti gli eventi <ArrowRight size={14} />
            </Link>
          </SectionTitle>
          {e.map((x) => (
            <button
              className="task-row"
              key={x.id}
              onClick={() => edit("events", x)}
            >
              <div className="date-box">
                <strong>{x.date.slice(8) || "—"}</strong>
                <span>{dateLabel(x.date).split(" ")[1]}</span>
              </div>
              <div>
                <strong>{x.title}</strong>
                <small>{x.location}</small>
              </div>
              <Badge>{x.status}</Badge>
            </button>
          ))}
        </section>
      </div>
      <Deadlines edit={edit} teamId="management" />
      <section className="team-drive-section">
        <DriveView team={TEAMS.find(t => t.id === "management")!} />
      </section>
      <div className="management-shortcuts">
        {[
          [
            "Contratti e offerte",
            "Proposte chiare, accordi organizzati.",
            "contratti",
            FileText,
          ],
          [
            "Template e media",
            "Una voce comune per raccontare il team.",
            "template",
            Mail,
          ],
          ["Bilancio", "Ogni costo, in un unico registro.", "bilancio", List],
        ].map(([title, description, href, Icon]) => {
          const I = Icon as typeof FileText;
          return (
            <Link
              key={String(href)}
              href={"/team/management/" + href}
              className="panel shortcut"
            >
              <I size={25} />
              <h3>{String(title)}</h3>
              <p>{String(description)}</p>
              <ArrowUpRight size={18} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
export function TeamView({
  team,
  edit,
}: Props & { team: (typeof TEAMS)[number] }) {
  const { data, season, put, busy, notice } = useWorkspace();
  const original = data.pages.find(
    (p) => p.team_id === team.id && p.season_id === season && !p.archived,
  );
  const [draft, setDraft] = useState<TeamPage | null>(original || null);
  const [editing, setEditing] = useState(false);
  const [history, setHistory] = useState(false);
  const [focusBlock, setFocusBlock] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (!editing) return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    const navigate = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a[href]");
      if (
        link &&
        !window.confirm(
          "La pagina ha modifiche non salvate. Vuoi uscire senza salvarle?",
        )
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener("beforeunload", warn);
    document.addEventListener("click", navigate, true);
    return () => {
      window.removeEventListener("beforeunload", warn);
      document.removeEventListener("click", navigate, true);
    };
  }, [editing]);
  useEffect(() => {
    setDraft(original || null);
    setEditing(false);
  }, [team.id, season]);
  const page = editing ? draft : original;
  const save = async () => {
    if (!draft) return;
    for (const b of draft.blocks)
      if (b.url && !safeUrl(b.url)) {
        setError("Un link non è valido: usa http o https.");
        return;
      }
    const next = {
      ...draft,
      revisions: [
        ...(original?.revisions || []),
        ...(original
          ? [
              {
                at: new Date().toISOString(),
                blocks: original.blocks,
                summary: original.summary,
              },
            ]
          : []),
      ].slice(-20),
    };
    if (await put("pages", next)) {
      setEditing(false);
      setError("");
    }
  };
  const updateBlock = (id: string, patch: Partial<Block>) =>
    setDraft((d) =>
      d
        ? {
            ...d,
            blocks: d.blocks.map((b) => (b.id === id ? { ...b, ...patch } : b)),
          }
        : d,
    );
  const move = (i: number, step: number) =>
    setDraft((d) => {
      if (!d || i + step < 0 || i + step >= d.blocks.length) return d;
      const blocks = [...d.blocks];
      [blocks[i], blocks[i + step]] = [blocks[i + step], blocks[i]];
      return { ...d, blocks };
    });
  const reports = data.reports.filter(
    (r) => !r.archived && r.season_id === season && r.team_id === team.id,
  );
  return (
    <>
      <Heading
        eyebrow="SPAZIO DEL SOTTOTEAM"
        title={team.name}
        description={team.description}
      >
        {editing ? (
          <>
            <Button
              variant="outline"
              onClick={() => {
                setEditing(false);
                setDraft(original || null);
              }}
            >
              Annulla
            </Button>
            <Button disabled={busy} onClick={save}>
              <Check size={16} />
              Salva pagina
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              onClick={() => {
                const block = makeBlock("riunione");
                const current = original || {
                  ...base(season),
                  team_id: team.id,
                  summary: "",
                  blocks: [],
                  revisions: [],
                };
                setDraft({ ...current, blocks: [...current.blocks, block] });
                setFocusBlock(block.id);
                setEditing(true);
              }}
            >
              <CalendarDays size={16} />
              Nuova riunione
            </Button>
            <Button variant="outline" onClick={() => setHistory(true)}>
              <Clock size={16} />
              Revisioni
            </Button>
            <Button
              onClick={() => {
                setDraft(
                  original || {
                    ...base(season),
                    team_id: team.id,
                    summary: "",
                    blocks: [makeBlock("testo")],
                    revisions: [],
                  },
                );
                setEditing(true);
              }}
            >
              Modifica pagina
            </Button>
          </>
        )}
      </Heading>
      <div className="team-resources">
        {data.links
          .filter(
            (l) =>
              !l.archived && l.season_id === season && l.team_id === team.id,
          )
          .map((l) => (
            <div className="resource-block" key={l.id}>
              {l.title.includes("Riunione") ? (
                <CalendarDays size={18} />
              ) : (
                <FolderOpen size={18} />
              )}
              <strong>{l.title}</strong>
              {safeUrl(l.url) && <External url={l.url}>Apri</External>}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => edit("links", l)}
              >
                {l.url ? "Modifica" : "Configura link"}
              </Button>
            </div>
          ))}
      </div>
      <Deadlines key={team.id + season} edit={edit} teamId={team.id} />
      <div className="team-page">
        {editing && (
          <div className="edit-notice">
            Scrivi / per inserire un blocco · salva la pagina prima di uscire.
          </div>
        )}
        <div
          className="team-page-banner"
          style={{ borderLeftColor: team.color }}
        >
          <span className="eyebrow">DIREZIONE DELLA STAGIONE</span>
          {editing ? (
            <textarea
              aria-label="Riepilogo del reparto"
              value={draft?.summary || ""}
              onChange={(e) =>
                setDraft((d) => (d ? { ...d, summary: e.target.value } : d))
              }
            />
          ) : (
            <p>
              {page?.summary ||
                "Aggiungi gli obiettivi e il punto sul lavoro del reparto."}
            </p>
          )}
        </div>
        <div className="blocks">
          {page?.blocks.map((b, i) => (
            <div
              key={b.id}
              className={"block block-" + b.type + (editing ? " editable" : "")}
            >
              {editing ? (
                <>
                  <div className="block-tools">
                    <span>{b.type}</span>
                    <button
                      aria-label="Sposta blocco su"
                      disabled={i === 0}
                      onClick={() => move(i, -1)}
                    >
                      <ArrowUp size={14} />
                    </button>
                    <button
                      aria-label="Sposta blocco giù"
                      disabled={i === page.blocks.length - 1}
                      onClick={() => move(i, 1)}
                    >
                      <ArrowDown size={14} />
                    </button>
                    <button
                      aria-label="Duplica blocco"
                      onClick={() =>
                        setDraft((d) =>
                          d
                            ? {
                                ...d,
                                blocks: [
                                  ...d.blocks.slice(0, i + 1),
                                  { ...b, id: crypto.randomUUID() },
                                  ...d.blocks.slice(i + 1),
                                ],
                              }
                            : d,
                        )
                      }
                    >
                      <Copy size={14} />
                    </button>
                    <button
                      aria-label="Rimuovi blocco"
                      onClick={() =>
                        setDraft((d) =>
                          d
                            ? {
                                ...d,
                                blocks: d.blocks.filter((x) => x.id !== b.id),
                              }
                            : d,
                        )
                      }
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <PageBlockEditor
                    block={b}
                    autoFocus={focusBlock === b.id}
                    onChange={(patch) => updateBlock(b.id, patch)}
                    onSplit={(before, next) => {
                      setDraft((d) =>
                        d
                          ? {
                              ...d,
                              blocks: [
                                ...d.blocks.slice(0, i),
                                { ...b, content: before },
                                next,
                                ...d.blocks.slice(i + 1),
                              ],
                            }
                          : d,
                      );
                      setFocusBlock(next.id);
                    }}
                  />
                </>
              ) : b.type === "riunione" ? (
                <MeetingBlock block={b} />
              ) : b.type === "titolo" ? (
                <h2>{b.content}</h2>
              ) : b.type === "elenco" ? (
                <ul>
                  {b.content
                    .split("\n")
                    .filter(Boolean)
                    .map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                </ul>
              ) : b.type === "checklist" ? (
                <label className="check-line">
                  <input
                    type="checkbox"
                    checked={!!b.checked}
                    disabled={busy}
                    onChange={() =>
                      original &&
                      put("pages", {
                        ...original,
                        blocks: original.blocks.map((x) =>
                          x.id === b.id ? { ...x, checked: !x.checked } : x,
                        ),
                        revisions: [
                          ...original.revisions,
                          {
                            at: new Date().toISOString(),
                            blocks: original.blocks,
                            summary: original.summary,
                          },
                        ].slice(-20),
                      })
                    }
                  />
                  <span className={b.checked ? "checked" : ""}>
                    {b.content}
                  </span>
                </label>
              ) : b.type === "link" ? (
                <div className="resource-block">
                  <Link2 size={18} />
                  <strong>{b.content}</strong>
                  <External url={b.url || ""}>Apri risorsa</External>
                </div>
              ) : b.type === "immagine" ? (
                safeUrl(b.url || "") ? (
                  <figure>
                    <img src={safeUrl(b.url || "")} alt={b.content} />
                    <figcaption>{b.content}</figcaption>
                  </figure>
                ) : (
                  <p>Immagine da configurare · {b.content}</p>
                )
              ) : b.type === "tabella" ? (
                <div className="table-scroll">
                  <table>
                    <thead>
                      <tr>
                        {b.content
                          .split("\n")[0]
                          .split("|")
                          .map((x, i) => (
                            <th key={i}>{x}</th>
                          ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.content
                        .split("\n")
                        .slice(1)
                        .map((r, i) => (
                          <tr key={i}>
                            {r.split("|").map((c, j) => (
                              <td key={j}>{c}</td>
                            ))}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>{b.content}</p>
              )}
            </div>
          ))}
          {!page && !editing && (
            <Empty text="Questa stagione è ancora da scrivere." />
          )}
          {editing && (
            <div className="block-composer">
              <PageBlockEditor
                onInsert={(block) => {
                  setDraft((d) =>
                    d ? { ...d, blocks: [...d.blocks, block] } : d,
                  );
                  setFocusBlock(block.id);
                }}
              />
              <small className="muted">
                Digita / per scegliere un blocco · Invio per aggiungere un
                paragrafo
              </small>
            </div>
          )}
          {error && (
            <p role="alert" className="form-error">
              {error}
            </p>
          )}
          {editing && (
            <div className="page-save-footer">
              <span className="muted">
                Salva le modifiche alla pagina e ai verbali.
              </span>
              <div>
                <Button
                  variant="outline"
                  disabled={busy}
                  onClick={() => {
                    setEditing(false);
                    setDraft(original || null);
                  }}
                >
                  Annulla
                </Button>
                <Button disabled={busy} onClick={save}>
                  <Check size={16} />
                  {busy ? "Salvataggio…" : "Salva pagina"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <section className="team-drive-section">
        <DriveView key={team.id} team={team} />
      </section>
      <SectionTitle title="Report e aggiornamenti">
        <Button
          variant="outline"
          onClick={() => edit("reports", undefined, { team_id: team.id })}
        >
          <Plus size={15} />
          Nuovo report
        </Button>
      </SectionTitle>
      <div className="report-grid">
        {reports.map((r) => (
          <button
            key={r.id}
            className="panel report-card"
            onClick={() => edit("reports", r)}
          >
            <small>{dateLabel(r.date)}</small>
            <h3>{r.title}</h3>
            <p>{r.content}</p>
            <span className="text-link">
              Leggi e aggiorna <ArrowUpRight size={14} />
            </span>
          </button>
        ))}
      </div>
      {!reports.length && (
        <Empty text="Aggiungi il primo aggiornamento di questa stagione." />
      )}
      <Dialog open={history} onOpenChange={setHistory}>
        <DialogContent>
          <DialogTitle className="dialog-title">
            Revisioni della pagina
          </DialogTitle>
          <DialogDescription className="muted">
            Ultime 20 revisioni salvate. Il ripristino conserva anche la
            versione attuale.
          </DialogDescription>
          {original?.revisions.length ? (
            original.revisions.map((r, i) => (
              <div key={i} className="task-row">
                <div>
                  <strong>{new Date(r.at).toLocaleString("it-IT")}</strong>
                  <small>{r.blocks.length} blocchi</small>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={busy}
                  onClick={async () => {
                    if (
                      await put("pages", {
                        ...original,
                        blocks: r.blocks,
                        summary: r.summary ?? original.summary,
                        revisions: [
                          ...original.revisions,
                          {
                            at: new Date().toISOString(),
                            blocks: original.blocks,
                            summary: original.summary,
                          },
                        ].slice(-20),
                      })
                    ) {
                      setHistory(false);
                    }
                  }}
                >
                  <RotateCcw size={14} />
                  Ripristina
                </Button>
              </div>
            ))
          ) : (
            <Empty text="Nessuna versione precedente." />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
export function SponsorsView({ edit }: Props) {
  const { data, season, put, busy } = useWorkspace();
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Tutti");
  const [mode, setMode] = useState("kanban");
  useEffect(() => {
    if (window.matchMedia("(max-width:600px)").matches) setMode("lista");
  }, []);
  const [outcome, setOutcome] = useState("Pipeline");
  const [selected, setSelected] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const rows = data.sponsors.filter(
    (x) =>
      !x.archived &&
      x.season_id === season &&
      x.title.toLowerCase().includes(query.toLowerCase()) &&
      (type === "Tutti" || x.type === type) &&
      (outcome === "Tutti" ||
        (outcome === "Pipeline"
          ? STAGES.includes(x.stage as (typeof STAGES)[number])
          : x.stage === outcome)),
  );
  const detail = data.sponsors.find((x) => x.id === selected);
  const change = async (s: Sponsor, stage: string) => {
    await put("sponsors", {
      ...s,
      stage,
      activities: [
        ...s.activities,
        { at: new Date().toISOString(), text: `Fase aggiornata: ${stage}` },
      ],
    });
  };
  const active = data.sponsors.filter(
    (x) => !x.archived && x.season_id === season && x.stage === "Attivo",
  );
  return (
    <>
      <Heading
        eyebrow="RELAZIONI CHE FANNO LA DIFFERENZA"
        title="Sponsor e partnership"
        description="Dal primo contatto alla collaborazione. Un passo alla volta."
      >
        <Button onClick={() => edit("sponsors")}>
          <Plus size={16} />
          Nuova trattativa
        </Button>
      </Heading>
      <div className="compact-stats">
        <span>
          <strong>
            {
              data.sponsors.filter((x) => !x.archived && x.season_id === season)
                .length
            }
          </strong>{" "}
          trattative
        </span>
        <span>
          <strong>{active.length}</strong> sponsor attivi
        </span>
        <span>
          <strong>
            {money(active.reduce((a, x) => a + x.amount_cents, 0))}
          </strong>{" "}
          cash concordato
        </span>
        <span>
          <strong>
            {money(active.reduce((a, x) => a + x.technical_cents, 0))}
          </strong>{" "}
          valore tecnico
        </span>
      </div>
      <Toolbar search={query} setSearch={setQuery}>
        <select
          aria-label="Tipo sponsor"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {["Tutti", "Finanziario", "Tecnico", "Ibrido"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <select
          aria-label="Esito sponsor"
          value={outcome}
          onChange={(e) => setOutcome(e.target.value)}
        >
          {["Pipeline", "Tutti", "Sospeso", "Non concluso"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <div className="segmented">
          <button
            aria-pressed={mode === "kanban"}
            onClick={() => setMode("kanban")}
          >
            <Columns3 size={15} />
            Kanban
          </button>
          <button
            aria-pressed={mode === "lista"}
            onClick={() => setMode("lista")}
          >
            <List size={15} />
            Lista
          </button>
        </div>
      </Toolbar>
      {mode === "kanban" && outcome === "Pipeline" ? (
        <div className="kanban">
          {STAGES.map((stage, i) => (
            <section
              className="kanban-column"
              key={stage}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const s = rows.find(
                  (x) => x.id === e.dataTransfer.getData("text/plain"),
                );
                if (s && !busy) void change(s, stage);
              }}
            >
              <div className="column-title">
                <span className={"stage-dot stage-" + i} />
                <h2>{stage}</h2>
                <span>{rows.filter((s) => s.stage === stage).length}</span>
                <button
                  aria-label={"Aggiungi in " + stage}
                  onClick={() => edit("sponsors", undefined, { stage })}
                >
                  <Plus size={14} />
                </button>
              </div>
              {rows
                .filter((s) => s.stage === stage)
                .map((s) => (
                  <div
                    className="sponsor-card"
                    key={s.id}
                    draggable={!busy}
                    onDragStart={(e) =>
                      e.dataTransfer.setData("text/plain", s.id)
                    }
                  >
                    <button
                      className="card-open"
                      onClick={() => {
                        setSelected(s.id);
                        setNote("");
                      }}
                    >
                      <Badge
                        tone={
                          s.type === "Tecnico"
                            ? "blue"
                            : s.type === "Ibrido"
                              ? "gold"
                              : ""
                        }
                      >
                        {s.type}
                      </Badge>
                      <h3>{s.title}</h3>
                      <p>{s.next_action || "Definisci il prossimo passo"}</p>
                      <div className="sponsor-card-foot">
                        <span>
                          <CalendarDays size={12} />
                          {dateLabel(s.due_date)}
                        </span>
                        <strong>
                          {s.type === "Tecnico"
                            ? "In-kind"
                            : s.amount_cents
                              ? money(s.amount_cents)
                              : "Da definire"}
                        </strong>
                      </div>
                    </button>
                    <label className="sr-only" htmlFor={"stage-" + s.id}>
                      Fase di {s.title}
                    </label>
                    <select
                      id={"stage-" + s.id}
                      value={s.stage}
                      disabled={busy}
                      onChange={(e) => void change(s, e.target.value)}
                    >
                      {[...STAGES, "Sospeso", "Non concluso"].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                ))}
              <button
                className="column-add"
                onClick={() => edit("sponsors", undefined, { stage })}
              >
                <Plus size={14} />
                Aggiungi trattativa
              </button>
            </section>
          ))}
        </div>
      ) : (
        <div className="panel table-scroll">
          <table>
            <thead>
              <tr>
                <th>Azienda</th>
                <th>Tipo</th>
                <th>Fase</th>
                <th>Prossima azione</th>
                <th>Data</th>
                <th>Cash concordato</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((s) => (
                <tr key={s.id}>
                  <td>
                    <button
                      className="table-link"
                      onClick={() => setSelected(s.id)}
                    >
                      {s.title}
                    </button>
                  </td>
                  <td>{s.type}</td>
                  <td>
                    <Badge>{s.stage}</Badge>
                  </td>
                  <td>{s.next_action || "—"}</td>
                  <td>{dateLabel(s.due_date)}</td>
                  <td>{money(s.amount_cents)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!rows.length && (
            <Empty text="Nessuna trattativa corrisponde ai filtri." />
          )}
        </div>
      )}
      <Dialog
        open={!!detail}
        onOpenChange={(v) => {
          if (!v) setSelected(null);
        }}
      >
        {detail && (
          <DialogContent className="detail-dialog">
            <DialogTitle className="dialog-title">{detail.title}</DialogTitle>
            <DialogDescription className="muted">
              {detail.type} · {detail.stage}
            </DialogDescription>
            <div className="detail-callout">
              <Flag size={18} />
              <div>
                <small>PROSSIMO PASSO</small>
                <strong>{detail.next_action || "Da definire"}</strong>
                <span>{dateLabel(detail.due_date)}</span>
              </div>
            </div>
            <div className="detail-actions">
              <Button
                onClick={() => {
                  edit("sponsors", detail);
                  setSelected(null);
                }}
              >
                Modifica scheda
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href={
                    "/team/management/template?azienda=" +
                    encodeURIComponent(detail.title)
                  }
                >
                  Scegli template email
                </Link>
              </Button>
            </div>
            <div className="detail-grid">
              <div>
                <h3>Contatti</h3>
                <p>{detail.contact || "Referente da aggiungere"}</p>
                {detail.email ? (
                  <External
                    url={
                      "https://mail.google.com/mail/u/?authuser=sapienzafoilingteam@gmail.com&view=cm&fs=1&to=" +
                      encodeURIComponent(detail.email)
                    }
                  >
                    Apri Gmail
                  </External>
                ) : (
                  <p className="muted">Email da aggiungere</p>
                )}
              </div>
              <div>
                <h3>Proposta</h3>
                <p>
                  Cash: <strong>{money(detail.amount_cents)}</strong>
                </p>
                <p>
                  Tecnico: <strong>{money(detail.technical_cents)}</strong>
                </p>
              </div>
            </div>
            <p className="pre-line">{detail.notes}</p>
            <div className="detail-actions">
              <External url={detail.pitch_url}>Pitch dedicato</External>
              <External url={detail.document_url}>Documenti</External>
            </div>
            <SectionTitle title="Contratti e impegni">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  edit("contracts", undefined, {
                    sponsor_id: detail.id,
                    title: "Accordo · " + detail.title,
                  });
                  setSelected(null);
                }}
              >
                <Plus size={14} />
                Contratto
              </Button>
            </SectionTitle>
            {data.contracts
              .filter((c) => !c.archived && c.sponsor_id === detail.id)
              .map((c) => (
                <button
                  key={c.id}
                  className="task-row"
                  onClick={() => {
                    edit("contracts", c);
                    setSelected(null);
                  }}
                >
                  <FileText size={18} />
                  <strong>{c.title}</strong>
                  <Badge>{c.status}</Badge>
                </button>
              ))}
            <h3>Cronologia</h3>
            <div className="timeline">
              {detail.activities
                .slice()
                .reverse()
                .map((a, i) => (
                  <div key={i}>
                    <small>{new Date(a.at).toLocaleString("it-IT")}</small>
                    <p>{a.text}</p>
                  </div>
                ))}
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (
                  note.trim() &&
                  (await put("sponsors", {
                    ...detail,
                    activities: [
                      ...detail.activities,
                      { at: new Date().toISOString(), text: note.trim() },
                    ],
                  }))
                )
                  setNote("");
              }}
            >
              <label>
                Aggiungi attività
                <textarea
                  required
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Email inviata, call, risposta o impegno concordato…"
                />
              </label>
              <Button disabled={busy || !note.trim()} size="sm">
                Registra attività
              </Button>
            </form>
            <ArchiveButton
              collection="sponsors"
              row={detail}
              onDone={() => setSelected(null)}
            />
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
function ArchiveButton({
  collection,
  row,
  onDone,
}: {
  collection: Collection;
  row: Workspace[Collection][number];
  onDone?: () => void;
}) {
  const { put, busy } = useWorkspace();
  const [confirm, setConfirm] = useState(false);
  return confirm ? (
    <div className="archive-confirm">
      <p>Archiviare questo elemento? Puoi ripristinarlo da Impostazioni.</p>
      <Button variant="outline" size="sm" onClick={() => setConfirm(false)}>
        Annulla
      </Button>
      <Button
        variant="destructive"
        size="sm"
        disabled={busy}
        onClick={async () => {
          if (await put(collection, { ...row, archived: true })) {
            onDone?.();
            setConfirm(false);
          }
        }}
      >
        Archivia
      </Button>
    </div>
  ) : (
    <Button
      variant="ghost"
      className="archive-button"
      size="sm"
      onClick={() => setConfirm(true)}
    >
      <Archive size={14} />
      Archivia
    </Button>
  );
}
export function EventsView({ edit }: Props) {
  const { data, season, put, busy } = useWorkspace();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Tutti");
  const [selected, setSelected] = useState<string | null>(null);
  const [task, setTask] = useState("");
  const rows = data.events.filter(
    (x) =>
      !x.archived &&
      x.season_id === season &&
      x.title.toLowerCase().includes(query.toLowerCase()) &&
      (status === "Tutti" || x.status === status),
  );
  const event = data.events.find((x) => x.id === selected);
  return (
    <>
      <Heading
        eyebrow="INCONTRI, ESPERIENZE, OPPORTUNITÀ"
        title="Eventi del team"
        description="Dall’idea alla giornata insieme, con tutto sotto controllo."
      >
        <Button onClick={() => edit("events")}>
          <Plus size={16} />
          Nuovo evento
        </Button>
      </Heading>
      <Toolbar search={query} setSearch={setQuery}>
        <select
          aria-label="Stato evento"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {[
            "Tutti",
            "Idea",
            "In preparazione",
            "Confermato",
            "Concluso",
            "Annullato",
          ].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <Button variant="outline" asChild>
          <Link href="/agenda">
            <CalendarDays size={15} />
            Calendario
          </Link>
        </Button>
      </Toolbar>
      <div className="event-grid">
        {rows.map((e, i) => {
          const done = e.checklist.filter((c) => c.done).length;
          return (
            <button
              className="event-card panel"
              key={e.id}
              onClick={() => {
                setSelected(e.id);
                setTask("");
              }}
            >
              <div className={"event-cover cover-" + i}>
                <CalendarDays size={32} />
                <span>{e.type}</span>
                <Badge>{e.status}</Badge>
              </div>
              <div className="event-content">
                <small>
                  {dateLabel(e.date)} · {e.location || "Luogo da definire"}
                </small>
                <h2>{e.title}</h2>
                <p>{e.description}</p>
                <div className="progress-label">
                  <span>Preparazione</span>
                  <strong>
                    {done}/{e.checklist.length}
                  </strong>
                </div>
                <div className="progress">
                  <span
                    style={{
                      width:
                        (e.checklist.length
                          ? (done / e.checklist.length) * 100
                          : 0) + "%",
                    }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {!rows.length && (
        <Empty
          text="Nessun evento. Inizia da una nuova idea."
          action={<Button onClick={() => edit("events")}>Crea evento</Button>}
        />
      )}
      <Dialog
        open={!!event}
        onOpenChange={(v) => {
          if (!v) setSelected(null);
        }}
      >
        {event && (
          <DialogContent className="detail-dialog">
            <DialogTitle className="dialog-title">{event.title}</DialogTitle>
            <DialogDescription className="muted">
              {dateLabel(event.date)} · {event.location || "Luogo da definire"}
            </DialogDescription>
            <Badge>{event.status}</Badge>
            <p className="pre-line">{event.description}</p>
            <Button
              variant="outline"
              onClick={() => {
                edit("events", event);
                setSelected(null);
              }}
            >
              Modifica evento
            </Button>
            <SectionTitle title="Checklist di preparazione" />
            {event.checklist.map((c) => (
              <div className="check-task" key={c.id}>
                <label className="check-line">
                  <input
                    type="checkbox"
                    checked={c.done}
                    disabled={busy}
                    onChange={() =>
                      put("events", {
                        ...event,
                        checklist: event.checklist.map((t) =>
                          t.id === c.id ? { ...t, done: !t.done } : t,
                        ),
                      })
                    }
                  />
                  <span className={c.done ? "checked" : ""}>{c.title}</span>
                </label>
                <button
                  className="icon-button"
                  aria-label={"Rimuovi " + c.title}
                  disabled={busy}
                  onClick={() =>
                    put("events", {
                      ...event,
                      checklist: event.checklist.filter((t) => t.id !== c.id),
                    })
                  }
                >
                  <XIcon />
                </button>
              </div>
            ))}
            <form
              className="inline-form"
              onSubmit={async (e) => {
                e.preventDefault();
                if (
                  task.trim() &&
                  (await put("events", {
                    ...event,
                    checklist: [
                      ...event.checklist,
                      {
                        id: crypto.randomUUID(),
                        title: task.trim(),
                        done: false,
                      },
                    ],
                  }))
                )
                  setTask("");
              }}
            >
              <input
                aria-label="Nuova attività evento"
                placeholder="Aggiungi un’attività…"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <Button size="sm" disabled={busy || !task.trim()}>
                <Plus size={15} />
                Aggiungi
              </Button>
            </form>
            <SectionTitle title="Sponsor e materiali" />
            <p>
              {data.sponsors.find((s) => s.id === event.sponsor_id)?.title ||
                "Nessuno sponsor collegato"}
            </p>
            <External url={event.document_url}>Apri materiali evento</External>
            <SectionTitle title="Costi collegati">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  edit("costs", undefined, { event_id: event.id });
                  setSelected(null);
                }}
              >
                <Plus size={14} />
                Costo
              </Button>
            </SectionTitle>
            {data.costs
              .filter((c) => !c.archived && c.event_id === event.id)
              .map((c) => (
                <div className="task-row" key={c.id}>
                  <span>{c.title}</span>
                  <strong>{money(c.amount_cents)}</strong>
                </div>
              ))}
            <p className="muted">
              Totale:{" "}
              {money(
                totalCosts(data.costs.filter((c) => c.event_id === event.id)),
              )}
            </p>
            <h3>Resoconto</h3>
            <p className="pre-line">
              {event.recap || "Aggiungi un resoconto dopo l’evento."}
            </p>
            <ArchiveButton
              collection="events"
              row={event}
              onDone={() => setSelected(null)}
            />
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
function XIcon() {
  return <span aria-hidden>×</span>;
}
export function CostsView({ edit }: Props) {
  const { data, season } = useWorkspace();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tutte");
  const [team, setTeam] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setSort] = useState("date");
  const [selected, setSelected] = useState<string | null>(null);
  const all = data.costs.filter((c) => !c.archived && c.season_id === season);
  const rows = all
    .filter(
      (c) =>
        (c.title + " " + c.vendor)
          .toLowerCase()
          .includes(query.toLowerCase()) &&
        (category === "Tutte" || c.category === category) &&
        (!team || c.team_id === team) &&
        (!from || c.date >= from) &&
        (!to || c.date <= to),
    )
    .sort((a, b) =>
      sort === "amount"
        ? b.amount_cents - a.amount_cents
        : sort === "title"
          ? a.title.localeCompare(b.title, "it")
          : b.date.localeCompare(a.date),
    );
  const current = data.costs.find((c) => c.id === selected);
  return (
    <>
      <Heading
        eyebrow="OGNI SPESA, AL SUO POSTO"
        title="Bilancio del team"
        description="Un registro condiviso dei costi sostenuti durante la stagione."
      >
        <DownloadCsv rows={rows} />
        <Button onClick={() => edit("costs")}>
          <Plus size={16} />
          Aggiungi costo
        </Button>
      </Heading>
      <div className="cost-summary">
        <div>
          <span>COSTI DELLA STAGIONE</span>
          <strong>{money(totalCosts(all))}</strong>
          <small>{all.length} registrazioni</small>
        </div>
        <div>
          <span>TOTALE DELLA VISTA</span>
          <strong>{money(totalCosts(rows))}</strong>
          <small>{rows.length} costi con i filtri attuali</small>
        </div>
        <p>
          Qui teniamo traccia delle spese.
          <br />I contributi sponsor sono nella sezione Partnership.
        </p>
      </div>
      <Toolbar search={query} setSearch={setQuery}>
        <select
          aria-label="Categoria costo"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {[
            "Tutte",
            "Materiali",
            "Lavorazioni",
            "Elettronica",
            "Logistica",
            "Eventi",
            "Comunicazione",
            "Altro",
          ].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <select
          aria-label="Reparto costo"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        >
          <option value="">Tutti i reparti</option>
          {TEAMS.map((t) => (
            <option value={t.id} key={t.id}>
              {t.short}
            </option>
          ))}
        </select>
        <select
          aria-label="Ordina costi"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="date">Più recenti</option>
          <option value="amount">Importo decrescente</option>
          <option value="title">Descrizione A–Z</option>
        </select>
      </Toolbar>
      <div className="period-filter">
        <label>
          Dal
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </label>
        <label>
          Al
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </label>
        {(query || category !== "Tutte" || team || from || to) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setQuery("");
              setCategory("Tutte");
              setTeam("");
              setFrom("");
              setTo("");
            }}
          >
            Azzera filtri
          </Button>
        )}
      </div>
      <div className="panel table-scroll">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrizione</th>
              <th>Categoria</th>
              <th>Reparto</th>
              <th>Evento</th>
              <th className="align-right">Importo</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr key={c.id}>
                <td className="nowrap">{dateLabel(c.date)}</td>
                <td>
                  <button
                    className="table-link"
                    onClick={() => setSelected(c.id)}
                  >
                    {c.title}
                  </button>
                  <small className="table-sub">{c.vendor}</small>
                </td>
                <td>
                  <Badge>{c.category}</Badge>
                </td>
                <td>
                  {TEAMS.find((t) => t.id === c.team_id)?.short || "Team"}
                </td>
                <td>
                  {data.events.find((e) => e.id === c.event_id)?.title || "—"}
                </td>
                <td className="align-right amount">{money(c.amount_cents)}</td>
                <td>
                  <button
                    className="icon-button"
                    aria-label={"Modifica " + c.title}
                    onClick={() => edit("costs", c)}
                  >
                    <MoreHorizontal size={17} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>Totale dei costi mostrati</td>
              <td className="align-right amount">{money(totalCosts(rows))}</td>
              <td />
            </tr>
          </tfoot>
        </table>
        {!rows.length && <Empty text="Nessun costo corrisponde ai filtri." />}
      </div>
      <Dialog
        open={!!current}
        onOpenChange={(v) => {
          if (!v) setSelected(null);
        }}
      >
        {current && (
          <DialogContent>
            <DialogTitle className="dialog-title">{current.title}</DialogTitle>
            <DialogDescription className="muted">
              Costo registrato · {dateLabel(current.date)}
            </DialogDescription>
            <div className="detail-amount">{money(current.amount_cents)}</div>
            <p>
              {current.category} ·{" "}
              {TEAMS.find((t) => t.id === current.team_id)?.name || "Team"}
            </p>
            <p>Fornitore: {current.vendor || "—"}</p>
            <p>Pagato / anticipato da: {current.paid_by || "—"}</p>
            <p className="pre-line">{current.notes}</p>
            <External url={current.document_url}>Ricevuta / documento</External>
            <div className="dialog-footer">
              <Button
                onClick={() => {
                  edit("costs", current);
                  setSelected(null);
                }}
              >
                Modifica costo
              </Button>
            </div>
            <ArchiveButton
              collection="costs"
              row={current}
              onDone={() => setSelected(null)}
            />
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
export function AgendaView({ edit }: Props) {
  const { data, season, save, busy, notice } = useWorkspace();
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Tutti");
  const [team, setTeam] = useState("");
  const [mode, setMode] = useState("calendario");
  useEffect(() => {
    if (window.matchMedia("(max-width:600px)").matches) setMode("lista");
  }, []);
  const [month, setMonth] = useState("2026-10");
  const [generate, setGenerate] = useState(false);
  const [modelView, setModelView] = useState(false);
  const [y, m] = month.split("-").map(Number);
  const first = new Date(y, m - 1, 1);
  const days = new Date(y, m, 0).getDate();
  const offset = (first.getDay() + 6) % 7;
  const monthName = first.toLocaleDateString("it-IT", {
    month: "long",
    year: "numeric",
  });
  const items = [
    ...data.deliveries
      .filter((d) => !d.archived && d.season_id === season)
      .map((d) => ({ ...d, collection: "deliveries" as Collection })),
    ...data.events
      .filter((d) => !d.archived && d.season_id === season)
      .map((d) => ({
        ...d,
        team_id: "management",
        priority: "Media",
        collection: "events" as Collection,
      })),
  ]
    .filter(
      (d) =>
        d.title.toLowerCase().includes(query.toLowerCase()) &&
        (type === "Tutti" ||
          (type === "Eventi e riunioni"
            ? d.collection === "events"
            : d.type === type)) &&
        (!team || d.team_id === team),
    )
    .sort((a, b) => a.date.localeCompare(b.date));
  const pending = monthlyDeliveries(data, season, month);
  const moveMonth = (delta: number) => {
    const next = new Date(y, m - 1 + delta, 1);
    setMonth(
      `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`,
    );
  };
  return (
    <>
      <Heading
        eyebrow="LA STAGIONE, GIORNO PER GIORNO"
        title="Agenda e Delivery"
        description="Report, contenuti, eventi e riunioni. Una vista condivisa su cosa fare."
      >
        <Button variant="outline" onClick={() => setGenerate(true)}>
          <Copy size={15} />
          Prepara il mese
        </Button>
        <Button onClick={() => edit("deliveries")}>
          <Plus size={16} />
          Nuova delivery
        </Button>
      </Heading>
      <Toolbar search={query} setSearch={setQuery}>
        <select
          aria-label="Tipo agenda"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {[
            "Tutti",
            "Report",
            "Blog post",
            "Instagram",
            "Eventi e riunioni",
            "Altro",
          ].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <select
          aria-label="Reparto agenda"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        >
          <option value="">Tutti i reparti</option>
          {TEAMS.map((t) => (
            <option value={t.id} key={t.id}>
              {t.short}
            </option>
          ))}
        </select>
        <div className="segmented">
          <button
            aria-pressed={mode === "calendario"}
            onClick={() => setMode("calendario")}
          >
            <CalendarDays size={15} />
            Calendario
          </button>
          <button
            aria-pressed={mode === "lista"}
            onClick={() => setMode("lista")}
          >
            <List size={15} />
            Lista
          </button>
        </div>
      </Toolbar>
      <div className="calendar-controls">
        <h2>{monthName}</h2>
        <div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMonth("2026-10")}
          >
            Mese demo
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Mese precedente"
            onClick={() => moveMonth(-1)}
          >
            <ChevronLeft size={16} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Mese successivo"
            onClick={() => moveMonth(1)}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
      {mode === "calendario" ? (
        <div className="calendar panel">
          <div className="weekdays">
            {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="calendar-grid">
            {Array.from(
              { length: Math.ceil((offset + days) / 7) * 7 },
              (_, i) => {
                const day = i - offset + 1;
                const date = `${month}-${String(day).padStart(2, "0")}`;
                return (
                  <div
                    className={
                      "calendar-day " +
                      (day < 1 || day > days ? "outside" : "") +
                      (date === "2026-10-01" ? " today" : "")
                    }
                    key={i}
                  >
                    {day >= 1 && day <= days && (
                      <>
                        <button
                          className="day-number"
                          aria-label={"Aggiungi delivery il " + date}
                          onClick={() =>
                            edit("deliveries", undefined, { date })
                          }
                        >
                          {day}
                        </button>
                        {items
                          .filter((d) => d.date === date)
                          .map((d) => (
                            <button
                              className={
                                "calendar-item " +
                                (d.collection === "events" ? "event" : "")
                              }
                              key={d.id}
                              onClick={() => edit(d.collection, d)}
                            >
                              <span>{d.type}</span>
                              {d.title}
                            </button>
                          ))}
                      </>
                    )}
                  </div>
                );
              },
            )}
          </div>
        </div>
      ) : (
        <div className="panel">
          {items
            .filter((d) => !d.date || d.date.startsWith(month))
            .map((d) => (
              <button
                key={d.id}
                className="deadline-row"
                onClick={() => edit(d.collection, d)}
              >
                <div className="date-box">
                  <strong>{d.date.slice(8) || "—"}</strong>
                  <span>{dateLabel(d.date).split(" ")[1]}</span>
                </div>
                <div>
                  <strong>{d.title}</strong>
                  <small>
                    {d.type} ·{" "}
                    {TEAMS.find((t) => t.id === d.team_id)?.short || "Team"}
                  </small>
                </div>
                <Badge>{d.status}</Badge>
                <span className="priority">{d.priority}</span>
              </button>
            ))}
          {!items.some((d) => !d.date || d.date.startsWith(month)) && (
            <Empty text="Nessun impegno in questo mese." />
          )}
        </div>
      )}
      <div className="agenda-bottom">
        <span className="muted">
          Le date e i contenuti iniziali sono dimostrativi.
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => edit("events", undefined, { type: "Riunione" })}
        >
          <Plus size={14} />
          Nuova riunione
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setModelView(true)}>
          Modelli mensili
        </Button>
      </div>
      <Dialog open={generate} onOpenChange={setGenerate}>
        <DialogContent>
          <DialogTitle className="dialog-title">
            Prepara le delivery del mese
          </DialogTitle>
          <DialogDescription className="muted">
            Crea gli impegni dal modello. Le voci già generate non verranno
            duplicate.
          </DialogDescription>
          <label>
            Mese
            <input
              type="month"
              value={month}
              onChange={(e) => {
                if (e.target.value) setMonth(e.target.value);
              }}
            />
          </label>
          {pending.length ? (
            pending.map((d) => (
              <div className="task-row" key={d.id}>
                <div>
                  <strong>{d.title}</strong>
                  <small>{d.type}</small>
                </div>
                <span>{dateLabel(d.date)}</span>
              </div>
            ))
          ) : (
            <Empty text="Tutte le delivery dei modelli sono già presenti, oppure non ci sono modelli per questa stagione." />
          )}
          <div className="dialog-footer">
            <Button variant="outline" onClick={() => setGenerate(false)}>
              Annulla
            </Button>
            <Button
              disabled={busy || !pending.length}
              onClick={async () => {
                if (
                  await save((s) => ({
                    ...s,
                    deliveries: [
                      ...monthlyDeliveries(s, season, month),
                      ...s.deliveries,
                    ],
                  }))
                )
                  setGenerate(false);
              }}
            >
              Crea {pending.length} delivery
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={modelView} onOpenChange={setModelView}>
        <DialogContent>
          <DialogTitle className="dialog-title">Modelli mensili</DialogTitle>
          <DialogDescription className="muted">
            Giorni dimostrativi, da adattare alle vere scadenze. Le modifiche
            non alterano i mesi già creati.
          </DialogDescription>
          {data.recurrences
            .filter((r) => !r.archived && r.season_id === season)
            .map((r) => (
              <div className="task-row" key={r.id}>
                <div>
                  <strong>{r.title}</strong>
                  <small>
                    Giorno {r.day} · {r.type}
                  </small>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setModelView(false);
                    edit("recurrences", r);
                  }}
                >
                  Modifica
                </Button>
              </div>
            ))}
          <Button
            onClick={() => {
              setModelView(false);
              edit("recurrences");
            }}
          >
            <Plus size={15} />
            Aggiungi modello
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
export function LibraryView({
  mode,
  edit,
}: Props & { mode: "contracts" | "templates" }) {
  const { data, season, notice, put, busy } = useWorkspace();
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState(mode === "contracts" ? "contratti" : "email");
  const [selected, setSelected] = useState<string | null>(null);
  const [vars, setVars] = useState<Record<string, string>>({});
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [to, setTo] = useState("");
  const [compose, setCompose] = useState(false);
  const [uploading, setUploading] = useState(false);
  const template = data.templates.find((t) => t.id === selected);
  const contract = data.contracts.find((c) => c.id === selected);
  const filtered = <
    T extends { title: string; season_id: string; archived: boolean },
  >(
    rows: T[],
  ) =>
    rows.filter(
      (r) =>
        !r.archived &&
        r.season_id === season &&
        r.title.toLowerCase().includes(query.toLowerCase()),
    );
  const fill = (text: string) =>
    text.replace(/\{([^}]+)\}/g, (_, key) => vars[key] || `{${key}}`);
  const variables = template
    ? [
        ...new Set(
          (template.subject + " " + template.body).match(/\{([^}]+)\}/g) || [],
        ),
      ].map((k) => k.slice(1, -1))
    : [];
  const unresolved = (subject + " " + body).match(/\{[^}]+\}/g);
  const key: Collection =
    tab === "contratti"
      ? "contracts"
      : tab === "offerte"
        ? "offers"
        : tab === "email"
          ? "templates"
          : "documents";
  const choose = (t: Template) => {
    setSelected(t.id);
    setVars({});
    setCompose(false);
    setTo("");
  };
  return (
    <>
      <Heading
        eyebrow={
          mode === "contracts" ? "ACCORDI E OPPORTUNITÀ" : "LA VOCE DEL TEAM"
        }
        title={
          mode === "contracts" ? "Contratti e offerte" : "Template e Media"
        }
        description={
          mode === "contracts"
            ? "Quello che possiamo offrire, con proposte e documenti chiari."
            : "Messaggi pronti da adattare e risorse per raccontare il progetto."
        }
      >
        <Button onClick={() => edit(key)}>
          <Plus size={16} />
          {tab === "contratti"
            ? "Nuovo contratto"
            : tab === "offerte"
              ? "Nuova offerta"
              : tab === "email"
                ? "Nuovo template"
                : "Nuova risorsa"}
        </Button>
      </Heading>
      <div className="content-tabs">
        {(mode === "contracts"
          ? [
              ["contratti", "Contratti"],
              ["offerte", "Cosa offriamo"],
              ["modelli", "Modelli contrattuali"],
            ]
          : [
              ["email", "Template email"],
              ["media", "Media e presentazioni"],
            ]
        ).map(([k, label]) => (
          <button
            className={tab === k ? "selected" : ""}
            key={k}
            onClick={() => {
              setTab(k);
              setQuery("");
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <Toolbar search={query} setSearch={setQuery} />
      {tab === "contratti" ? (
        <div className="panel table-scroll">
          <table>
            <thead>
              <tr>
                <th>Contratto</th>
                <th>Tipo</th>
                <th>Partner</th>
                <th>Stato</th>
                <th>Documento</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {filtered(data.contracts).map((c) => (
                <tr key={c.id}>
                  <td>
                    <button
                      className="table-link"
                      onClick={() => setSelected(c.id)}
                    >
                      {c.title}
                    </button>
                  </td>
                  <td>{c.type}</td>
                  <td>
                    {data.sponsors.find((s) => s.id === c.sponsor_id)?.title ||
                      "—"}
                  </td>
                  <td>
                    <Badge tone={c.status === "Firmato" ? "green" : ""}>
                      {c.status}
                    </Badge>
                  </td>
                  <td>
                    <External url={c.url}>Apri</External>
                  </td>
                  <td>
                    <ArchiveButton collection="contracts" row={c} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!filtered(data.contracts).length && (
            <Empty text="Nessun contratto per questa stagione." />
          )}
        </div>
      ) : tab === "offerte" ? (
        <div className="library-grid">
          {filtered(data.offers).map((o) => (
            <section className="panel offer-card" key={o.id}>
              <span className="offer-icon">
                <Flag size={23} />
              </span>
              <h2>{o.title}</h2>
              <p>{o.description}</p>
              <div className="offer-conditions">
                <small>DA CONCORDARE</small>
                <p>{o.conditions}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => edit("offers", o)}
              >
                Modifica offerta
              </Button>
              <ArchiveButton collection="offers" row={o} />
            </section>
          ))}
        </div>
      ) : tab === "email" ? (
        <div className="library-grid">
          {filtered(data.templates).map((t) => (
            <section className="panel template-card" key={t.id}>
              <div className="template-top">
                <Mail size={23} />
                <Badge>{t.category}</Badge>
              </div>
              <h2>{t.title}</h2>
              <p>{t.subject}</p>
              <div className="card-footer">
                <Button variant="outline" size="sm" onClick={() => choose(t)}>
                  Usa template <ArrowRight size={14} />
                </Button>
                <button
                  className="icon-button"
                  aria-label={"Modifica " + t.title}
                  onClick={() => edit("templates", t)}
                >
                  <MoreHorizontal size={18} />
                </button>
                <ArchiveButton collection="templates" row={t} />
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="library-grid">
          {filtered(data.documents)
            .filter((d) => tab !== "modelli" || d.category === "Contratti")
            .map((d) => (
              <section className="panel document-card" key={d.id}>
                <FileText size={27} />
                <Badge>{d.category}</Badge>
                <h2>{d.title}</h2>
                <p>
                  {d.url || d.storage_path
                    ? "Risorsa del team"
                    : "Collega il documento ufficiale del team."}
                </p>
                <div className="card-footer">
                  {d.url || d.storage_path ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={async () => {
                        try {
                          const url = await documentUrl(d.url, d.storage_path);
                          if (safeUrl(url))
                            window.open(url, "_blank", "noopener,noreferrer");
                        } catch (e) {
                          notice(String(e));
                        }
                      }}
                    >
                      Apri <ArrowUpRight size={14} />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => edit("documents", d)}
                    >
                      Configura link
                    </Button>
                  )}
                  <button
                    className="icon-button"
                    aria-label={"Modifica " + d.title}
                    onClick={() => edit("documents", d)}
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                {live && (
                  <label className="upload-label">
                    <Upload size={14} />
                    {uploading ? "Caricamento…" : "Carica file"}
                    <input
                      type="file"
                      disabled={busy || uploading}
                      accept=".pdf,.docx,.pptx,.png,.jpg,.jpeg,.webp"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        setUploading(true);
                        try {
                          const result = await uploadDocument(file);
                          await put("documents", { ...d, ...result });
                        } catch (err) {
                          notice(
                            err instanceof Error ? err.message : String(err),
                          );
                        } finally {
                          setUploading(false);
                        }
                      }}
                    />
                  </label>
                )}
                <ArchiveButton collection="documents" row={d} />
              </section>
            ))}
        </div>
      )}
      <Dialog
        open={!!contract}
        onOpenChange={(v) => {
          if (!v) setSelected(null);
        }}
      >
        {contract && (
          <DialogContent className="detail-dialog">
            <DialogTitle className="dialog-title">{contract.title}</DialogTitle>
            <DialogDescription className="muted">
              {contract.type} · {contract.status}
            </DialogDescription>
            <p>
              Partner:{" "}
              {data.sponsors.find((s) => s.id === contract.sponsor_id)?.title ||
                "Da collegare"}
            </p>
            <p>
              Evento:{" "}
              {data.events.find((e) => e.id === contract.event_id)?.title ||
                "Nessuno"}
            </p>
            <p className="pre-line">{contract.notes}</p>
            <External url={contract.url}>Documento attuale</External>
            <div className="detail-actions">
              <Button
                onClick={() => {
                  setSelected(null);
                  edit("contracts", contract);
                }}
              >
                Modifica contratto
              </Button>
            </div>
            <h3>Versioni precedenti</h3>
            {contract.versions?.length ? (
              contract.versions
                .slice()
                .reverse()
                .map((v, i) => (
                  <div className="task-row" key={i}>
                    <div>
                      <strong>{v.status}</strong>
                      <small>{new Date(v.at).toLocaleString("it-IT")}</small>
                      <p>{v.notes}</p>
                    </div>
                    <External url={v.url}>Documento</External>
                  </div>
                ))
            ) : (
              <p className="muted">
                Le modifiche conservano i riferimenti alle versioni precedenti.
              </p>
            )}
            <ArchiveButton
              collection="contracts"
              row={contract}
              onDone={() => setSelected(null)}
            />
          </DialogContent>
        )}
      </Dialog>
      <Dialog
        open={!!template}
        onOpenChange={(v) => {
          if (!v) setSelected(null);
        }}
      >
        {template && (
          <DialogContent className="detail-dialog">
            <DialogTitle className="dialog-title">{template.title}</DialogTitle>
            <DialogDescription className="muted">
              Personalizza i campi, controlla il messaggio e aprilo in Gmail.
              L’invio resta manuale.
            </DialogDescription>
            {!compose ? (
              <>
                <div className="form-grid">
                  {variables.map((k) => (
                    <label key={k}>
                      {k.replaceAll("_", " ")}
                      <input
                        value={vars[k] || ""}
                        onChange={(e) =>
                          setVars((v) => ({ ...v, [k]: e.target.value }))
                        }
                      />
                    </label>
                  ))}
                </div>
                <h3>Anteprima</h3>
                <strong>{fill(template.subject)}</strong>
                <p className="email-preview">{fill(template.body)}</p>
                <Button
                  onClick={() => {
                    setSubject(fill(template.subject));
                    setBody(fill(template.body));
                    setCompose(true);
                  }}
                >
                  Personalizza messaggio <ArrowRight size={15} />
                </Button>
              </>
            ) : (
              <>
                <label>
                  Destinatario
                  <input
                    type="email"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="referente@azienda.it"
                  />
                </label>
                <label>
                  Oggetto
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </label>
                <label>
                  Messaggio
                  <textarea
                    rows={10}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </label>
                {unresolved && (
                  <p className="form-error">
                    Completa le variabili: {[...new Set(unresolved)].join(", ")}
                  </p>
                )}
                <div className="detail-actions">
                  <Button
                    disabled={
                      !!unresolved ||
                      !subject ||
                      !body ||
                      (!!to && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to))
                    }
                    onClick={() =>
                      window.open(
                        "https://mail.google.com/mail/u/?authuser=sapienzafoilingteam@gmail.com&view=cm&fs=1&to=" +
                          encodeURIComponent(to) +
                          "&su=" +
                          encodeURIComponent(subject) +
                          "&body=" +
                          encodeURIComponent(body),
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    <Mail size={15} />
                    Apri in Gmail
                  </Button>
                  <Button
                    variant="outline"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(
                          subject + "\n\n" + body,
                        );
                        notice("Messaggio copiato");
                      } catch {
                        notice("Copia il testo direttamente dai campi.");
                      }
                    }}
                  >
                    <Copy size={15} />
                    Copia testo
                  </Button>
                </div>
                <small className="muted">
                  Aggiungi manualmente gli allegati in Gmail.
                </small>
              </>
            )}
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
export function SettingsView({ edit }: Props) {
  const { data, season, put, busy, notice } = useWorkspace();
  const [tab, setTab] = useState("link");
  const archived = Object.entries(data).flatMap(([k, rows]) =>
    (rows as Workspace[Collection])
      .filter((r) => r.archived)
      .map((row) => ({ collection: k as Collection, row })),
  );
  return (
    <>
      <Heading
        eyebrow="UN WORKSPACE CONDIVISO"
        title="Impostazioni"
        description="Risorse del team, configurazione e contenuti archiviati."
      />
      <div className="content-tabs">
        {[
          ["link", "Link utili"],
          ["database", "Database e accessi"],
          ["archivio", "Archivio"],
        ].map(([k, t]) => (
          <button
            key={k}
            className={tab === k ? "selected" : ""}
            onClick={() => setTab(k)}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "link" ? (
        <section className="panel settings-links">
          <SectionTitle title="Link della stagione">
            <Button onClick={() => edit("links")}>
              <Plus size={15} />
              Nuovo link
            </Button>
          </SectionTitle>
          {data.links
            .filter((l) => !l.archived && l.season_id === season)
            .map((l) => (
              <div className="settings-link-row" key={l.id}>
                <FolderOpen size={19} />
                <div className="settings-link-copy">
                  <strong>{l.title}</strong>
                  <span className="muted">
                    {TEAMS.find((t) => t.id === l.team_id)?.name ||
                      "Tutto il team"}
                  </span>
                  <small>{l.url || "URL da configurare"}</small>
                </div>
                <div className="settings-link-actions">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => edit("links", l)}
                  >
                    Modifica
                  </Button>
                  <ArchiveButton collection="links" row={l} />
                </div>
              </div>
            ))}
        </section>
      ) : tab === "database" ? (
        <div className="two-col">
          <section className="panel settings-panel">
            <Badge tone={live ? "green" : "gold"}>
              {live ? "Supabase collegato" : "Modalità demo"}
            </Badge>
            <h2>
              {live
                ? "Dati condivisi con il team"
                : "Pronto per il tuo database."}
            </h2>
            <p>
              {live
                ? "Le modifiche vengono salvate nel database Supabase."
                : "Puoi già provare tutte le pagine. I dati di esempio e le modifiche vengono conservati in questo browser."}
            </p>
            <ol>
              <li>Crea il progetto Supabase.</li>
              <li>Applica la migrazione nella cartella supabase.</li>
              <li>Invita gli utenti e attiva i membri.</li>
              <li>Configura URL e chiave pubblica in .env.local.</li>
              <li>Imposta la modalità supabase e riavvia l’app.</li>
            </ol>
            <p className="muted">
              La demo non viene importata automaticamente nei dati reali.
            </p>
          </section>
          <section className="panel settings-panel">
            <h2>Accessi del team</h2>
            <p>
              Tutti i membri attivi possono collaborare alle pagine, agli
              sponsor e ai contenuti.
            </p>
            <p>
              Gli account sono personali. Inviti e revoche vengono gestiti da
              Supabase finché non sarà configurato un accesso amministrativo.
            </p>
            <h3>Salvataggio e recupero</h3>
            <p>
              Le pagine conservano le ultime 20 revisioni. Gli elementi
              archiviati possono essere ripristinati da questa sezione.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                const a = document.createElement("a");
                const url = URL.createObjectURL(
                  new Blob([JSON.stringify({ version: 1, data }, null, 2)], {
                    type: "application/json",
                  }),
                );
                a.href = url;
                a.download = "SFT-workspace-backup.json";
                a.click();
                URL.revokeObjectURL(url);
                notice(
                  "Backup scaricato. I file caricati in Storage vanno conservati separatamente.",
                );
              }}
            >
              <Download size={15} />
              Esporta dati
            </Button>
          </section>
        </div>
      ) : (
        <section className="panel settings-links">
          <SectionTitle title="Elementi archiviati" />
          {archived.map(({ collection, row }) => (
            <div className="task-row" key={row.id}>
              <Archive size={18} />
              <div>
                <strong>{"title" in row ? row.title : "Pagina reparto"}</strong>
                <small>{collection}</small>
              </div>
              <Button
                size="sm"
                variant="outline"
                disabled={busy}
                onClick={() => put(collection, { ...row, archived: false })}
              >
                <RotateCcw size={14} />
                Ripristina
              </Button>
            </div>
          ))}
          {!archived.length && <Empty text="Nessun elemento archiviato." />}
        </section>
      )}
    </>
  );
}
