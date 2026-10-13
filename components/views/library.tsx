"use client";
import {
Collection,
Template,
safeUrl
} from "@/lib/model";
import { documentUrl,live,uploadDocument } from "@/lib/repository";
import { useViewState } from "@/lib/view-state";
import {
ArrowRight,
ArrowUpRight,
Copy,
FileText,
Flag,
Mail,
MoreHorizontal,
Plus,
Upload
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
import { ArchiveButton,Badge,Empty,External,Heading,Toolbar,type Props } from "./shared";
export function LibraryView({
  mode,
  edit,
}: Props & { mode: "contracts" | "templates" }) {
  const { data, season, notice, put, busy } = useWorkspace();
  const [query, setQuery] = useViewState(`library:${season}:query`, "");
  const [tab, setTab] = useViewState(`library:${season}:tab`, mode === "contracts" ? "contratti" : "email");
  const [selected, setSelected] = useState<string | null>(null);
  const [vars, setVars] = useState<Record<string, string>>({});
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [to, setTo] = useViewState(`library:${season}:to`, "");
  const [compose, setCompose] = useState(false);
  const [uploading, setUploading] = useState(false);
  const template = data.templates.find((t) => t.id === selected);
  const contract = data.contracts.find((c) => c.id === selected);
  const filtered = <
    T extends { title: string; season_id: string; archived: boolean },
  >(
    rows: T[],
  ) =>
    rows.filter(
      (r) =>
        !r.archived &&
        r.season_id === season &&
        r.title.toLowerCase().includes(query.toLowerCase()),
    );
  const fill = (text: string) =>
    text.replace(/\{([^}]+)\}/g, (_, key) => vars[key] || `{${key}}`);
  const variables = template
    ? [
        ...new Set(
          (template.subject + " " + template.body).match(/\{([^}]+)\}/g) || [],
        ),
      ].map((k) => k.slice(1, -1))
    : [];
  const unresolved = (subject + " " + body).match(/\{[^}]+\}/g);
  const key: Collection =
    tab === "contratti"
      ? "contracts"
      : tab === "offerte"
        ? "offers"
        : tab === "email"
          ? "templates"
          : "documents";
  const choose = (t: Template) => {
    setSelected(t.id);
    setVars({});
    setCompose(false);
    setTo("");
  };
  return (
    <>
      <Heading
        eyebrow={
          mode === "contracts" ? "ACCORDI E OPPORTUNITÀ" : "LA VOCE DEL TEAM"
        }
        title={
          mode === "contracts" ? "Contratti e offerte" : "Template e Media"
        }
        description={
          mode === "contracts"
            ? "Quello che possiamo offrire, con proposte e documenti chiari."
            : "Messaggi pronti da adattare e risorse per raccontare il progetto."
        }
      >
        <Button onClick={() => edit(key)}>
          <Plus size={16} />
          {tab === "contratti"
            ? "Nuovo contratto"
            : tab === "offerte"
              ? "Nuova offerta"
              : tab === "email"
                ? "Nuovo template"
                : "Nuova risorsa"}
        </Button>
      </Heading>
      <div className="content-tabs">
        {(mode === "contracts"
          ? [
              ["contratti", "Contratti"],
              ["offerte", "Cosa offriamo"],
              ["modelli", "Modelli contrattuali"],
            ]
          : [
              ["email", "Template email"],
              ["media", "Media e presentazioni"],
            ]
        ).map(([k, label]) => (
          <button
            className={tab === k ? "selected" : ""}
            key={k}
            onClick={() => {
              setTab(k);
              setQuery("");
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {mode === "templates" && <p><Link href="/design-system/index.html">Apri il design system completo →</Link></p>}
      <Toolbar search={query} setSearch={setQuery} />
      {tab === "contratti" ? (
        <div className="panel table-scroll">
          <table>
            <thead>
              <tr>
                <th>Contratto</th>
                <th>Tipo</th>
                <th>Partner</th>
                <th>Stato</th>
                <th>Documento</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {filtered(data.contracts).map((c) => (
                <tr key={c.id}>
                  <td>
                    <button
                      className="table-link"
                      onClick={() => setSelected(c.id)}
                    >
                      {c.title}
                    </button>
                  </td>
                  <td>{c.type}</td>
                  <td>
                    {data.sponsors.find((s) => s.id === c.sponsor_id)?.title ||
                      "—"}
                  </td>
                  <td>
                    <Badge tone={c.status === "Firmato" ? "green" : ""}>
                      {c.status}
                    </Badge>
                  </td>
                  <td>
                    <External url={c.url}>Apri</External>
                  </td>
                  <td>
                    <ArchiveButton collection="contracts" row={c} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!filtered(data.contracts).length && (
            <Empty text="Nessun contratto per questa stagione." />
          )}
        </div>
      ) : tab === "offerte" ? (
        <div className="library-grid">
          {filtered(data.offers).map((o) => (
            <section className="panel offer-card" key={o.id}>
              <span className="offer-icon">
                <Flag size={23} />
              </span>
              <h2>{o.title}</h2>
              <p>{o.description}</p>
              <div className="offer-conditions">
                <small>DA CONCORDARE</small>
                <p>{o.conditions}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => edit("offers", o)}
              >
                Modifica offerta
              </Button>
              <ArchiveButton collection="offers" row={o} />
            </section>
          ))}
        </div>
      ) : tab === "email" ? (
        <div className="library-grid">
          {filtered(data.templates).map((t) => (
            <section className="panel template-card" key={t.id}>
              <div className="template-top">
                <Mail size={23} />
                <Badge>{t.category}</Badge>
              </div>
              <h2>{t.title}</h2>
              <p>{t.subject}</p>
              <div className="card-footer">
                <Button variant="outline" size="sm" onClick={() => choose(t)}>
                  Usa template <ArrowRight size={14} />
                </Button>
                <button
                  className="icon-button"
                  aria-label={"Modifica " + t.title}
                  onClick={() => edit("templates", t)}
                >
                  <MoreHorizontal size={18} />
                </button>
                <ArchiveButton collection="templates" row={t} />
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="library-grid">
          {filtered(data.documents)
            .filter((d) => tab !== "modelli" || d.category === "Contratti")
            .map((d) => (
              <section className="panel document-card" key={d.id}>
                <FileText size={27} />
                <Badge>{d.category}</Badge>
                <h2>{d.title}</h2>
                <p>
                  {d.url || d.storage_path
                    ? "Risorsa del team"
                    : "Collega il documento ufficiale del team."}
                </p>
                <div className="card-footer">
                  {d.url || d.storage_path ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={async () => {
                        try {
                          const url = await documentUrl(d.url, d.storage_path);
                          if (safeUrl(url))
                            window.open(url, "_blank", "noopener,noreferrer");
                        } catch (e) {
                          notice(String(e));
                        }
                      }}
                    >
                      Apri <ArrowUpRight size={14} />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => edit("documents", d)}
                    >
                      Configura link
                    </Button>
                  )}
                  <button
                    className="icon-button"
                    aria-label={"Modifica " + d.title}
                    onClick={() => edit("documents", d)}
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                {live && (
                  <label className="upload-label">
                    <Upload size={14} />
                    {uploading ? "Caricamento…" : "Carica file"}
                    <input
                      type="file"
                      disabled={busy || uploading}
                      accept=".pdf,.docx,.pptx,.png,.jpg,.jpeg,.webp"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        setUploading(true);
                        try {
                          const result = await uploadDocument(file);
                          await put("documents", { ...d, ...result });
                        } catch (err) {
                          notice(
                            err instanceof Error ? err.message : String(err),
                          );
                        } finally {
                          setUploading(false);
                        }
                      }}
                    />
                  </label>
                )}
                <ArchiveButton collection="documents" row={d} />
              </section>
            ))}
        </div>
      )}
      <Dialog
        open={!!contract}
        onOpenChange={(v) => {
          if (!v) setSelected(null);
        }}
      >
        {contract && (
          <DialogContent className="detail-dialog">
            <DialogTitle className="dialog-title">{contract.title}</DialogTitle>
            <DialogDescription className="muted">
              {contract.type} · {contract.status}
            </DialogDescription>
            <QuickChoices label="Stato contratto" value={contract.status} options={['Bozza','Inviato','Firmato','Annullato'].map(value => ({ value, label: value }))} disabled={busy} onChange={status => void put('contracts', { ...contract, status, versions: [...(contract.versions || []), { at: contract.updated_at, url: contract.url, status: contract.status, notes: contract.notes }].slice(-30) })} />
            <p>
              Partner:{" "}
              {data.sponsors.find((s) => s.id === contract.sponsor_id)?.title ||
                "Da collegare"}
            </p>
            <p>
              Evento:{" "}
              {data.events.find((e) => e.id === contract.event_id)?.title ||
                "Nessuno"}
            </p>
            <p className="pre-line">{contract.notes}</p>
            <External url={contract.url}>Documento attuale</External>
            <div className="detail-actions">
              <Button
                onClick={() => {
                  setSelected(null);
                  edit("contracts", contract);
                }}
              >
                Modifica contratto
              </Button>
            </div>
            <h3>Versioni precedenti</h3>
            {contract.versions?.length ? (
              contract.versions
                .slice()
                .reverse()
                .map((v, i) => (
                  <div className="task-row" key={i}>
                    <div>
                      <strong>{v.status}</strong>
                      <small>{new Date(v.at).toLocaleString("it-IT")}</small>
                      <p>{v.notes}</p>
                    </div>
                    <External url={v.url}>Documento</External>
                  </div>
                ))
            ) : (
              <p className="muted">
                Le modifiche conservano i riferimenti alle versioni precedenti.
              </p>
            )}
            <ArchiveButton
              collection="contracts"
              row={contract}
              onDone={() => setSelected(null)}
            />
          </DialogContent>
        )}
      </Dialog>
      <Dialog
        open={!!template}
        onOpenChange={(v) => {
          if (!v) setSelected(null);
        }}
      >
        {template && (
          <DialogContent className="detail-dialog">
            <DialogTitle className="dialog-title">{template.title}</DialogTitle>
            <DialogDescription className="muted">
              Personalizza i campi, controlla il messaggio e aprilo in Gmail.
              L’invio resta manuale.
            </DialogDescription>
            {!compose ? (
              <>
                <div className="form-grid">{variables.slice(0,3).map(k => <label key={k}>{k.replaceAll('_',' ')}<input value={vars[k] || ''} onChange={e => setVars(v => ({ ...v, [k]: e.target.value }))} /></label>)}</div>
                {variables.length > 3 && <details className="progressive-section"><summary>Altre informazioni<span>{variables.slice(3).filter(k => !vars[k]).length} da completare</span></summary><div className="form-grid">{variables.slice(3).map(k => <label key={k}>{k.replaceAll('_',' ')}<input value={vars[k] || ''} onChange={e => setVars(v => ({ ...v, [k]: e.target.value }))} /></label>)}</div></details>}
                <h3>Anteprima</h3>
                <strong>{fill(template.subject)}</strong>
                <p className="email-preview">{fill(template.body)}</p>
                <Button
                  onClick={() => {
                    setSubject(fill(template.subject));
                    setBody(fill(template.body));
                    setCompose(true);
                  }}
                >
                  Personalizza messaggio <ArrowRight size={15} />
                </Button>
              </>
            ) : (
              <>
                <label>
                  Destinatario
                  <input
                    type="email"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="referente@azienda.it"
                  />
                </label>
                <label>
                  Oggetto
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </label>
                <label>
                  Messaggio
                  <textarea
                    rows={10}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </label>
                {unresolved && (
                  <p className="form-error">
                    Completa le variabili: {[...new Set(unresolved)].join(", ")}
                  </p>
                )}
                <div className="detail-actions">
                  <Button
                    disabled={
                      !!unresolved ||
                      !subject ||
                      !body ||
                      (!!to && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to))
                    }
                    onClick={() =>
                      window.open(
                        "https://mail.google.com/mail/u/?authuser=sapienzafoilingteam@gmail.com&view=cm&fs=1&to=" +
                          encodeURIComponent(to) +
                          "&su=" +
                          encodeURIComponent(subject) +
                          "&body=" +
                          encodeURIComponent(body),
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    <Mail size={15} />
                    Apri in Gmail
                  </Button>
                  <Button
                    variant="outline"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(
                          subject + "\n\n" + body,
                        );
                        notice("Messaggio copiato");
                      } catch {
                        notice("Copia il testo direttamente dai campi.");
                      }
                    }}
                  >
                    <Copy size={15} />
                    Copia testo
                  </Button>
                </div>
                <small className="muted">
                  Aggiungi manualmente gli allegati in Gmail.
                </small>
              </>
            )}
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
