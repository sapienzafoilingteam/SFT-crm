"use client";
import { TEAMS, dateLabel, safeUrl } from "@/lib/model";
import { ArrowUpRight, CalendarDays, FolderOpen, Plus } from "lucide-react";
import { readRequest } from "@/lib/feature-requests";
import { SoftwareProjects } from "../software-projects";
import { DepartmentResources } from "../department-resources";
import { DepartmentPage } from "../department-page";
import { Deadlines } from "../deadlines";
import { DriveView } from "../drive-view";
import { useWorkspace } from "../provider";
import { Button } from "../ui/button";
import { Empty, External, Heading, SectionTitle, type Props } from "./shared";
export function TeamView({
  team,
  edit,
}: Props & { team: (typeof TEAMS)[number] }) {
  const { data, season } = useWorkspace();
  const reports = data.reports.filter(
    (r) => !r.archived && r.season_id === season && r.team_id === team.id && !readRequest(r),
  );
  return (
    <>
      <Heading eyebrow="SPAZIO DEL REPARTO" title={team.name} description={team.description} />
      <DepartmentResources />
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
      <DepartmentPage key={"page:" + team.id + season} team={team} />
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
    </>
  );
}
