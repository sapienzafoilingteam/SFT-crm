"use client";
import {
SEASONS,
TEAMS,
dateLabel,
safeUrl
} from "@/lib/model";
import {
Anchor,
ArrowRight,
ArrowUpRight,
CalendarDays,
Cpu,
FileText,
FolderOpen,
Leaf,
Megaphone,
MoreHorizontal,
Plus,
Waves,
Wind,
Wrench
} from "lucide-react";
import Link from "next/link";
import { Deadlines } from "../deadlines";
import { linkIcon } from "../link-icons";
import { useWorkspace } from "../provider";
import { Button } from "../ui/button";
import { Empty,SectionTitle,type Props } from "./shared";
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
      <SectionTitle title="Risorse del team">
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
                <Link href={"/team/" + t.id + (t.id === "management" ? "/pagina" : "") + "#file-reparto"}>
                  <FolderOpen size={12} />
                  File
                </Link>
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
