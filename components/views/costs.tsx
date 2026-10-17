"use client";
import {
TEAMS,
dateLabel,
money,
totalCosts
} from "@/lib/model";
import { MobileRecordList } from "../mobile-record-list";
import { useMobile } from "@/lib/use-mobile";
import { useViewState } from "@/lib/view-state";
import {
MoreHorizontal,
Plus
} from "lucide-react";
import { useState } from "react";
import { useWorkspace } from "../provider";
import { Button } from "../ui/button";
import {
Dialog,
DialogContent,
DialogDescription,
DialogTitle,
} from "../ui/dialog";
import { ArchiveButton,Badge,DownloadCsv,Empty,External,Heading,Toolbar,type Props } from "./shared";
export function CostsView({ edit }: Props) {
  const { data, season } = useWorkspace();
  const isMobile = useMobile();
  const [query, setQuery] = useViewState(`costs:${season}:query`, "");
  const [category, setCategory] = useViewState(`costs:${season}:category`, "Tutte");
  const [team, setTeam] = useViewState(`costs:${season}:team`, "");
  const [from, setFrom] = useViewState(`costs:${season}:from`, "");
  const [to, setTo] = useViewState(`costs:${season}:to`, "");
  const [sort, setSort] = useViewState(`costs:${season}:sort`, "date");
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
      {isMobile ? <MobileRecordList items={rows.map(c => ({ id: c.id, title: c.title, subtitle: `${dateLabel(c.date)} · ${c.vendor || c.category}`, value: money(c.amount_cents), status: TEAMS.find(t => t.id === c.team_id)?.short || 'Team' }))} onOpen={setSelected} empty="Nessun costo corrisponde ai filtri." /> : <div className="panel table-scroll">
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
      </div>}
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
