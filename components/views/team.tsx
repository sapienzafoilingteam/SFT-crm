"use client";
import {
Block,
TEAMS,
TeamPage,
base,
dateLabel,
safeUrl
} from "@/lib/model";
import {
ArrowDown,
ArrowUp,
ArrowUpRight,
CalendarDays,
Check,
Clock,
Copy,
FolderOpen,
Link2,
Plus,
RotateCcw,
Trash2
} from "lucide-react";
import { useEffect,useState } from "react";
import { SoftwareProjects } from "../software-projects";
import { Deadlines } from "../deadlines";
import { DriveView } from "../drive-view";
import { MeetingBlock,PageBlockEditor,makeBlock } from "../page-block-editor";
import { useWorkspace } from "../provider";
import { Button } from "../ui/button";
import {
Dialog,
DialogContent,
DialogDescription,
DialogTitle,
} from "../ui/dialog";
import { Empty,External,Heading,SectionTitle,type Props } from "./shared";
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
      {team.id === "elettronica" && <SoftwareProjects />}
      <div className="team-resources">
        {data.links
          .filter(
            (l) =>
              !l.archived && l.season_id === season && l.team_id === team.id && l.title !== "Drive del reparto",
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
          {page?.blocks.map((b, i) => b.type === "link" && b.content.trim() === "Drive del reparto" ? null : (
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
      <section id="file-reparto" className="team-drive-section">
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
