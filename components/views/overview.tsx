"use client";
import {
DELIVERY_STATES,
TEAMS,
dateLabel,
money,
totalCosts
} from "@/lib/model";
import {
ArrowRight,
ArrowUpRight,
FileText,
List,
Mail,
Plus
} from "lucide-react";
import Link from "next/link";
import { DepartmentResources } from "../department-resources";
import { Deadlines } from "../deadlines";
import { DriveView } from "../drive-view";
import { useWorkspace } from "../provider";
import { Button } from "../ui/button";
import { Badge,Heading,SectionTitle,type Props } from "./shared";
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
      <DepartmentResources />
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
      <section id="file-reparto" className="team-drive-section">
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
