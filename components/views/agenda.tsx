"use client";
import {
Collection,
Delivery,
TEAMS,
dateLabel
} from "@/lib/model";
import { departmentMeetingsForMonth, isDepartmentMeeting } from "@/lib/department-resources";
import { useViewState } from "@/lib/view-state";
import {
CalendarDays,
ChevronLeft,
ChevronRight,
CalendarPlus,
List,
Plus
} from "lucide-react";
import { useEffect,useMemo,useState } from "react";
import { DeliveryActions } from "../delivery-actions";
import { useWorkspace } from "../provider";
import { Button } from "../ui/button";
import {
Dialog,
DialogContent,
DialogDescription,
DialogTitle,
} from "../ui/dialog";
import { Badge,Empty,Heading,Toolbar,type Props } from "./shared";
export function AgendaView({ edit }: Props) {
  const { data, season } = useWorkspace();
  const [query, setQuery] = useViewState(`agenda:${season}:query`, "");
  const [type, setType] = useViewState(`agenda:${season}:type`, "Tutti");
  const [team, setTeam] = useViewState(`agenda:${season}:team`, "");
  const [mode, setMode] = useViewState(`agenda:${season}:mode`, "calendario");
  useEffect(() => {
    if (window.matchMedia("(max-width:600px)").matches) setMode("lista");
  }, []);
  const [month, setMonth] = useViewState(`agenda:${season}:month`, () => new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Rome" }).format(new Date()).slice(0, 7));
  const [meetingDetail, setMeetingDetail] = useState<ReturnType<typeof departmentMeetingsForMonth>[number] | null>(null);
  const [modelView, setModelView] = useState(false);
  const [y, m] = month.split("-").map(Number);
  const first = new Date(y, m - 1, 1);
  const days = new Date(y, m, 0).getDate();
  const offset = (first.getDay() + 6) % 7;
  const monthName = first.toLocaleDateString("it-IT", {
    month: "long",
    year: "numeric",
  });
  const items = useMemo(() => [
    ...data.deliveries
      .filter((d) => !d.archived && d.season_id === season)
      .map((d) => ({ ...d, collection: "deliveries" as Collection })),
    ...departmentMeetingsForMonth(season, month).map(d => ({ ...d, priority: "Media", collection: "events" as Collection })),
    ...data.events
      .filter((d) => !d.archived && d.season_id === season)
      .map((d) => ({
        ...d,
        team_id: d.team_id || "",
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
        (!team || d.team_id === team || isDepartmentMeeting(d.id)),
    )
    .sort((a, b) => a.date.localeCompare(b.date)), [data.deliveries, data.events, season, month, query, type, team]);
  const byDate = useMemo(() => { const index = new Map<string, typeof items>(); for (const item of items) { const rows = index.get(item.date) || []; rows.push(item); index.set(item.date, rows); } return index; }, [items]);
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
        <Button variant="outline" asChild>
          <a
            href="https://calendar.google.com/calendar/u/1?cid=c2FwaWVuemFmb2lsaW5ndGVhbUBnbWFpbC5jb20"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="calendar-subscribe-help"
          >
            <CalendarPlus size={15} />
            Aggiungi il calendario del team
          </a>
        </Button>
        <Button onClick={() => edit("deliveries")}>
          <Plus size={16} />
          Nuova delivery
        </Button>
      </Heading>
      <p id="calendar-subscribe-help" className="muted">
        Apri Google Calendar con il tuo account personale e aggiungi il calendario di sapienzafoilingteam@gmail.com per vedere gli impegni SFT e i loro aggiornamenti anche sul telefono e sul computer. Il calendario è pubblico: non serve richiedere accesso.
      </p>
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
            "Colloquio recruiting",
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
                        {(byDate.get(date) || [])
                          .map((d) => (
                            <button
                              className={
                                "calendar-item " +
                                (d.collection === "events" ? "event" : "")
                              }
                              key={d.id}
                              onClick={() => isDepartmentMeeting(d.id) ? setMeetingDetail(d as NonNullable<typeof meetingDetail>) : edit(d.collection, d)}
                            >
                              <span>{isDepartmentMeeting(d.id) ? '15:00–19:00 · Ogni mercoledì' : ('start_time' in d && d.start_time ? d.start_time + ' · ' : '') + d.type}</span>
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
              <div className="deadline-action-row" key={d.id}><button
                className="deadline-row"
                onClick={() => isDepartmentMeeting(d.id) ? setMeetingDetail(d as NonNullable<typeof meetingDetail>) : edit(d.collection, d)}
              >
                <div className="date-box">
                  <strong>{d.date.slice(8) || "—"}</strong>
                  <span>{dateLabel(d.date).split(" ")[1]}</span>
                </div>
                <div>
                  <strong>{d.title}</strong>
                  <small>
                    {'start_time' in d && d.start_time ? d.start_time + ('end_time' in d && d.end_time ? '–' + d.end_time : '') + ' · ' : ''}{d.type} ·{" "}
                    {isDepartmentMeeting(d.id) ? "Tutti i reparti · Ogni mercoledì" : TEAMS.find((t) => t.id === d.team_id)?.short || "Team"}
                  </small>
                </div>
                <Badge>{d.status}</Badge>
                <span className="priority">{d.priority}</span>
              </button>{d.collection === 'deliveries' && <DeliveryActions row={d as Delivery} />}</div>
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
      <Dialog open={!!meetingDetail} onOpenChange={open => { if (!open) setMeetingDetail(null); }}>
        <DialogContent>
          <DialogTitle className="dialog-title">Riunione dei reparti</DialogTitle>
          <DialogDescription className="muted">Ogni mercoledì, dalle 15:00 alle 19:00 · Ora di Roma</DialogDescription>
          {meetingDetail && <p>{dateLabel(meetingDetail.date)} · 15:00–19:00</p>}
          <p>Riunione settimanale di tutti i reparti.</p>
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
