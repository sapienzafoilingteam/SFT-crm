"use client";
import {
STAGES,
Sponsor,
dateLabel,
money
} from "@/lib/model";
import { useMobile } from "@/lib/use-mobile";
import { MobileRecordList } from "../mobile-record-list";
import { useViewState } from "@/lib/view-state";
import {
CalendarDays,
Columns3,
FileText,
Flag,
List,
Plus
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useWorkspace } from "../provider";
import { QuickChoices } from "../quick-choices";
import { Button } from "../ui/button";
import {
Dialog,
DialogContent,
DialogDescription,
DialogTitle,
} from "../ui/dialog";
import { ArchiveButton,Badge,Empty,External,Heading,SectionTitle,Toolbar,type Props } from "./shared";
export function SponsorsView({ edit }: Props) {
  const { data, season, put, busy } = useWorkspace();
  const [query, setQuery] = useViewState(`sponsors:${season}:query`, "");
  const [type, setType] = useViewState(`sponsors:${season}:type`, "Tutti");
  const isMobile = useMobile();
  const [savedMode, setMode] = useViewState(`sponsors:${season}:mode`, "");
  const mode = savedMode || (isMobile ? "lista" : "kanban");
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
      ) : isMobile ? <MobileRecordList items={rows.map(s => ({ id: s.id, title: s.title, subtitle: `${s.next_action || s.type} · ${dateLabel(s.due_date)}`, value: money(s.amount_cents), status: s.stage }))} onOpen={setSelected} empty="Nessuna trattativa corrisponde ai filtri." /> : (
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
            <QuickChoices label="Fase della trattativa" value={detail.stage} options={[...STAGES, 'Sospeso', 'Non concluso'].map(value => ({ value, label: value }))} disabled={busy} onChange={value => void change(detail, value)} />
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
