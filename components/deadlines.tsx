"use client";
import { DeliveryActions } from "./delivery-actions";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CalendarDays, Plus } from "lucide-react";
import { DELIVERY_STATES, TEAMS, dateLabel } from "@/lib/model";
import { useWorkspace } from "./provider";
import { Button } from "./ui/button";
import type { Edit } from "./workspace-app";

export function Deadlines({ edit, teamId }: { edit: Edit; teamId?: string }) {
  const { data, season } = useWorkspace();
  const [expanded, setExpanded] = useState(false);
  const today = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Rome" }).format(new Date());
  const rows = data.deliveries
    .filter((row) => !row.archived && row.season_id === season && row.status !== DELIVERY_STATES[3] && (!teamId || row.team_id === teamId))
    .sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));
  const overdue = rows.filter((row) => row.date < today).length;
  const shown = expanded ? rows : rows.slice(0, 6);
  return (
    <section className="panel deadlines-panel" aria-label={teamId ? "Scadenze del reparto" : "Scadenze del team"}>
      <div className="section-title deadlines-heading">
        <div><h2>Scadenze</h2><p>{rows.length} da completare{overdue ? ` · ${overdue} in ritardo` : ""}</p></div>
        <Button variant="outline" size="sm" onClick={() => edit("deliveries", undefined, { team_id: teamId || "", type: "Altro" }, "Nuova scadenza")}><Plus size={14} />Nuova scadenza</Button>
      </div>
      {shown.length ? shown.map((row) => (
        <div className="deadline-action-row" key={row.id}><button className="deadline-row" onClick={() => edit("deliveries", row, undefined, "Modifica scadenza")} aria-label={`Modifica scadenza: ${row.title}`}>
          <div className="date-box"><strong>{row.date.slice(8)}</strong><span>{dateLabel(row.date).split(" ")[1]}</span></div>
          <div className="deadline-content"><strong>{row.title}</strong><small>{dateLabel(row.date)} · {teamId ? row.type : TEAMS.find((team) => team.id === row.team_id)?.short || "Tutto il team"} · Priorità {row.priority.toLowerCase()}</small></div>
          <div className="deadline-status"><span className="badge">{row.status}</span>{row.date < today ? <span className="deadline-late">In ritardo</span> : row.date === today ? <span className="deadline-today">Oggi</span> : null}</div>
        </button><DeliveryActions row={row} /></div>
      )) : <div className="empty"><CalendarDays size={25} /><p>{teamId ? "Nessuna scadenza aperta per questo reparto." : "Nessuna scadenza aperta per questa stagione."}</p></div>}
      <div className="deadlines-footer">
        {rows.length > 6 && <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>{expanded ? "Mostra meno" : `Mostra tutte (${rows.length})`}</Button>}
        <Link href="/agenda" className="text-link">Apri agenda <ArrowRight size={14} /></Link>
      </div>
    </section>
  );
}
