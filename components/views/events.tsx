"use client";
import {
dateLabel,
money,
totalCosts
} from "@/lib/model";
import { useViewState } from "@/lib/view-state";
import {
CalendarDays,
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
import { ArchiveButton,Badge,Empty,External,Heading,SectionTitle,Toolbar,XIcon,type Props } from "./shared";
export function EventsView({ edit }: Props) {
  const { data, season, put, busy } = useWorkspace();
  const [query, setQuery] = useViewState(`events:${season}:query`, "");
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
            <QuickChoices label="Stato evento" value={event.status} options={['Idea','In preparazione','Confermato','Concluso','Annullato'].map(value => ({ value, label: value }))} disabled={busy} onChange={status => void put('events', { ...event, status, ...(event.type === 'Colloquio recruiting' ? { archived: status === 'Annullato' } : {}) })} />
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
