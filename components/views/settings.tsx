"use client";
import {
COLLECTIONS,
Collection,
TEAMS,
Workspace
} from "@/lib/model";
import { live,loadRemote } from "@/lib/repository";
import { useViewState } from "@/lib/view-state";
import {
Archive,
Download,
FolderOpen,
Plus,
RotateCcw
} from "lucide-react";
import { useEffect,useState } from "react";
import { useWorkspace } from "../provider";
import { Button } from "../ui/button";
import { ArchiveButton,Badge,Empty,Heading,SectionTitle,type Props } from "./shared";
export function SettingsView({ edit }: Props) {
  const { data, season, put, busy, notice, ensure, isLoaded } = useWorkspace();
  const [tab, setTab] = useViewState(`settings:${season}:tab`, "link");
  const [exporting, setExporting] = useState(false), [archiveError, setArchiveError] = useState('');
  useEffect(() => {
    if (tab !== 'archivio') return;
    setArchiveError(''); void ensure(COLLECTIONS).catch(error => setArchiveError(error.message));
  }, [tab, season, ensure]);
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
            .filter((l) => !l.archived && l.season_id === season && !(l.team_id && l.title === "Drive del reparto"))
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
              disabled={busy || exporting}
              onClick={async () => {
                setExporting(true);
                try {
                const snapshot = live ? await loadRemote() : data;
                const a = document.createElement("a");
                const url = URL.createObjectURL(
                  new Blob([JSON.stringify({ version: 1, data: snapshot }, null, 2)], {
                    type: "application/json",
                  }),
                );
                a.href = url;
                a.download = "SFT-workspace-backup.json";
                a.click();
                URL.revokeObjectURL(url);
                notice(
                  "Backup di tutte le stagioni scaricato. Conserva i file caricati separatamente.",
                );
                } catch (error) { notice(error instanceof Error ? error.message : String(error)); }
                finally { setExporting(false); }
              }}
            >
              <Download size={15} />
              {exporting ? 'Preparazione del backup…' : 'Esporta dati di tutte le stagioni'}
            </Button>
          </section>
        </div>
      ) : (
        <section className="panel settings-links">
          <SectionTitle title="Elementi archiviati della stagione" />
          {archiveError ? <div role="alert"><p>{archiveError}</p><Button onClick={() => { setArchiveError(''); void ensure(COLLECTIONS).catch(error => setArchiveError(error.message)); }}>Riprova</Button></div> : !isLoaded(COLLECTIONS) ? <p role="status">Caricamento dell’archivio…</p> : null}
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
          {isLoaded(COLLECTIONS) && !archived.length && <Empty text="Nessun elemento archiviato." />}
        </section>
      )}
    </>
  );
}
