"use client";
import { useEffect, useRef, useState } from "react";
import { editorLayout } from "@/lib/editor-layout";
import { interviewEnd } from "@/lib/recruiting";
import { QuickChoices } from "./quick-choices";
import { LINK_ICONS } from "./link-icons";
import { interviewTitle } from "@/lib/recruiting";
import {
  Collection,
  Workspace,
  base,
  TEAMS,
  STAGES,
  DELIVERY_STATES,
  cents,
  safeUrl,
} from "@/lib/model";
import { useWorkspace } from "./provider";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
export interface Field {
  key: string;
  label: string;
  type?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
}
const options = (arr: string[]) =>
  arr.map((value) => ({ value, label: value }));
const team: Field = {
  key: "team_id",
  label: "Sottoteam",
  type: "select",
  options: [
    { value: "", label: "Tutto il team" },
    ...TEAMS.map((t) => ({ value: t.id, label: t.name })),
  ],
};
export function fieldsFor(k: Collection, data: Workspace): Field[] {
  const title: Field = {
    key: "title",
    label: k === "sponsors" ? "Azienda" : "Titolo / descrizione",
    required: true,
  };
  const url: Field = {
    key: "url",
    label: "Link documento / risorsa",
    type: "url",
  };
  const date: Field = { key: "date", label: "Data", type: "date" };
  const notes: Field = { key: "notes", label: "Note", type: "textarea" };
  const sponsor: Field = {
    key: "sponsor_id",
    label: "Sponsor collegato",
    type: "select",
    options: [
      { value: "", label: "Nessuno" },
      ...data.sponsors
        .filter((s) => !s.archived)
        .map((s) => ({ value: s.id, label: s.title })),
    ],
  };
  const event: Field = {
    key: "event_id",
    label: "Evento collegato",
    type: "select",
    options: [
      { value: "", label: "Nessuno" },
      ...data.events
        .filter((s) => !s.archived)
        .map((s) => ({ value: s.id, label: s.title })),
    ],
  };
  switch (k) {
    case "sponsors":
      return [
        title,
        {
          key: "type",
          label: "Tipo",
          type: "select",
          options: options(["Finanziario", "Tecnico", "Ibrido"]),
        },
        {
          key: "stage",
          label: "Fase",
          type: "select",
          options: options([...STAGES, "Sospeso", "Non concluso"]),
        },
        { key: "contact", label: "Referente aziendale" },
        { key: "email", label: "Email", type: "email" },
        { key: "amount_cents", label: "Contributo cash (€)", type: "money" },
        { key: "technical_cents", label: "Valore tecnico (€)", type: "money" },
        { key: "next_action", label: "Prossima azione" },
        { key: "due_date", label: "Data follow-up", type: "date" },
        { key: "pitch_url", label: "Link pitch", type: "url" },
        { key: "document_url", label: "Link documenti", type: "url" },
        notes,
      ];
    case "events":
      return [
        title,
        {
          key: "type",
          label: "Tipo evento",
          type: "select",
          options: options([
            "Evento team",
            "Presentazione",
            "Evento con sponsor",
            "Attività promozionale",
            "Riunione",
            "Colloquio recruiting",
          ]),
        },
        {
          key: "status",
          label: "Stato",
          type: "select",
          options: options([
            "Idea",
            "In preparazione",
            "Confermato",
            "Concluso",
            "Annullato",
          ]),
        },
        date,
        { key: "start_time", label: "Ora inizio · Europe/Rome", type: "time" },
        { key: "end_time", label: "Ora fine · Europe/Rome", type: "time" },
        team,
        { key: "location", label: "Luogo / link call" },
        {
          key: "description",
          label: "Obiettivo e descrizione",
          type: "textarea",
        },
        sponsor,
        { key: "document_url", label: "Link materiali", type: "url" },
        { key: "recap", label: "Resoconto finale", type: "textarea" },
      ];
    case "deliveries":
      return [
        title,
        {
          key: "type",
          label: "Tipo",
          type: "select",
          options: options(["Report", "Blog post", "Instagram", "Altro"]),
        },
        { ...date, required: true },
        team,
        {
          key: "priority",
          label: "Priorità",
          type: "select",
          options: options(["Alta", "Media", "Bassa"]),
        },
        {
          key: "status",
          label: "Stato",
          type: "select",
          options: options(DELIVERY_STATES),
        },
        url,
        {
          key: "completion_url",
          label: "Prova di consegna / pubblicazione",
          type: "url",
        },
        notes,
      ];
    case "costs":
      return [
        title,
        { ...date, required: true },
        {
          key: "amount_cents",
          label: "Importo (€)",
          type: "money",
          required: true,
        },
        {
          key: "category",
          label: "Categoria",
          type: "select",
          options: options([
            "Materiali",
            "Lavorazioni",
            "Elettronica",
            "Logistica",
            "Eventi",
            "Comunicazione",
            "Altro",
          ]),
        },
        team,
        event,
        { key: "vendor", label: "Fornitore" },
        { key: "paid_by", label: "Pagato / anticipato da" },
        { key: "document_url", label: "Link ricevuta", type: "url" },
        notes,
      ];
    case "contracts":
      return [
        title,
        {
          key: "type",
          label: "Tipo",
          type: "select",
          options: options([
            "Sponsor finanziario",
            "Sponsor tecnico",
            "Sponsor ibrido",
            "Evento congiunto",
          ]),
        },
        {
          key: "status",
          label: "Stato",
          type: "select",
          options: options(["Bozza", "Inviato", "Firmato", "Annullato"]),
        },
        date,
        sponsor,
        event,
        url,
        notes,
      ];
    case "templates":
      return [
        title,
        {
          key: "category",
          label: "Categoria",
          type: "select",
          options: options([
            "Sponsor",
            "Eventi",
            "Contratti",
            "Presentazioni",
            "Media",
          ]),
        },
        { key: "subject", label: "Oggetto", required: true },
        {
          key: "body",
          label: "Testo email · usa {variabili}",
          type: "textarea",
          required: true,
        },
      ];
    case "offers":
      return [
        title,
        {
          key: "description",
          label: "Cosa offriamo",
          type: "textarea",
          required: true,
        },
        { key: "conditions", label: "Condizioni e limiti", type: "textarea" },
      ];
    case "documents":
      return [
        title,
        {
          key: "category",
          label: "Categoria",
          type: "select",
          options: options([
            "Presentazioni",
            "Media",
            "Identità",
            "Contratti",
            "Altro",
          ]),
        },
        url,
      ];
    case "links":
      return [
        title,
        { key: "icon", label: "Icona", type: "icon" },
        url,
        {
          key: "category",
          label: "Categoria",
          type: "select",
          options: options(["Team", "Media", "SuMoth", "Reparto"]),
        },
        team,
      ];
    case "reports":
      return [
        title,
        {
          ...team,
          required: true,
          options: team.options?.filter((o) => o.value),
        },
        { ...date, required: true },
        {
          key: "content",
          label: "Aggiornamento / report",
          type: "textarea",
          required: true,
        },
        url,
      ];
    case "recurrences":
      return [
        title,
        {
          key: "type",
          label: "Tipo",
          type: "select",
          options: options(["Report", "Blog post", "Instagram", "Altro"]),
        },
        {
          key: "day",
          label: "Giorno del mese (1–31)",
          type: "number",
          required: true,
        },
        team,
        {
          key: "priority",
          label: "Priorità",
          type: "select",
          options: options(["Alta", "Media", "Bassa"]),
        },
      ];
    default:
      return [];
  }
}
export function newRecord(
  k: Collection,
  season: string,
): Record<string, unknown> {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Rome",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const common = { ...base(season), title: "" };
  switch (k) {
    case "sponsors":
      return {
        ...common,
        type: "Finanziario",
        stage: STAGES[0],
        contact: "",
        email: "",
        amount_cents: 0,
        technical_cents: 0,
        next_action: "",
        due_date: "",
        notes: "",
        pitch_url: "",
        document_url: "",
        activities: [],
      };
    case "events":
      return {
        ...common,
        type: "Evento team",
        status: "Idea",
        date: today,
        start_time: "",
        end_time: "",
        team_id: "",
        location: "",
        description: "",
        sponsor_id: "",
        document_url: "",
        recap: "",
        checklist: [
          "Definire programma",
          "Confermare spazio",
          "Preparare materiali",
          "Organizzare comunicazione",
        ].map((title) => ({ id: crypto.randomUUID(), title, done: false })),
      };
    case "deliveries":
      return {
        ...common,
        type: "Report",
        status: "Da fare",
        date: today,
        team_id: "",
        priority: "Media",
        url: "",
        notes: "",
        completion_url: "",
        completed_at: "",
        recurrence_key: null,
      };
    case "costs":
      return {
        ...common,
        date: today,
        amount_cents: 0,
        category: "Materiali",
        team_id: "",
        event_id: "",
        vendor: "",
        paid_by: "",
        document_url: "",
        notes: "",
      };
    case "contracts":
      return {
        ...common,
        versions: [],
        sponsor_id: "",
        event_id: "",
        type: "Sponsor finanziario",
        status: "Bozza",
        date: "",
        url: "",
        notes: "",
      };
    case "templates":
      return { ...common, category: "Sponsor", subject: "", body: "", url: "" };
    case "offers":
      return { ...common, description: "", conditions: "" };
    case "documents":
      return { ...common, category: "Media", url: "", storage_path: "" };
    case "links":
      return { ...common, url: "", category: "Team", team_id: "", icon: "" };
    case "reports":
      return {
        ...common,
        team_id: "management",
        content: "",
        date: today,
        url: "",
      };
    case "recurrences":
      return {
        ...common,
        type: "Report",
        day: 10,
        team_id: "management",
        priority: "Media",
      };
    default:
      return common;
  }
}
export function RecordEditor({
  collection,
  row,
  onClose,
  title,
}: {
  collection: Collection;
  row: Record<string, unknown>;
  onClose: () => void;
  title: string;
}) {
  const { data, put, busy } = useWorkspace();
  const recruitingEvent = collection === "events" && row.type === "Colloquio recruiting";
  const fields = fieldsFor(collection, data).filter(f => !recruitingEvent || ["status","date","start_time","end_time","team_id","location","description"].includes(f.key)).map(f => recruitingEvent && f.key === "description" ? { ...f, label: "Selezionatori · visibili nell’agenda" } : recruitingEvent && ["date","start_time","end_time","team_id"].includes(f.key) ? { ...f, required: true } : f);
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      fields.map((f) => [
        f.key,
        f.type === "money"
          ? String(Number(row[f.key] || 0) / 100)
          : String(row[f.key] ?? ""),
      ]),
    ),
  );
  const [initialValues] = useState(values);
  const [error, setError] = useState("");
  const [archive, setArchive] = useState(false);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [errorField, setErrorField] = useState('');
  const form = useRef<HTMLFormElement>(null);
  const visibleFields = fields.filter(f => collection !== 'sponsors' || ((f.key !== 'amount_cents' || values.type !== 'Tecnico') && (f.key !== 'technical_cents' || values.type !== 'Finanziario')));
  const [newRecordDefault] = useState(() => newRecord(collection, String(row.season_id)));
  const layout = editorLayout(collection, visibleFields, values, data[collection].some(x => x.id === row.id), recruitingEvent, initialValues);
  useEffect(() => {
    if (!errorField) return;
    (form.current?.elements.namedItem(errorField) as HTMLElement | null)?.focus();
  }, [errorField, expanded]);
  function update(key: string, value: string) {
    setValues(v => {
      if (collection === 'events' && key === 'start_time') {
        const duration = v.start_time && v.end_time ? Number(v.end_time.slice(0,2)) * 60 + Number(v.end_time.slice(3)) - Number(v.start_time.slice(0,2)) * 60 - Number(v.start_time.slice(3)) : recruitingEvent ? 30 : 60;
        return { ...v, start_time: value, end_time: value ? interviewEnd(value, duration > 0 ? duration : 60) : '' };
      }
      return { ...v, [key]: value };
    });
  }
  function reveal(key: string) {
    setExpanded(layout.groups.filter(g => g.fields.some(f => f.key === key)).map(g => g.id));
    setErrorField(key);
  }
  function renderField(f: Field) {
    const required = f.required || (collection === 'deliveries' && f.key === 'completion_url' && values.status === 'Consegnato / Pubblicato');
    if (f.type === 'icon') return <fieldset key={f.key} className="wide link-icon-picker"><legend>Icona</legend><div className="link-icon-options"><button type="button" aria-pressed={!values.icon} onClick={() => update('icon', '')}>Automatica</button>{LINK_ICONS.map(({value, label, Icon}) => <button type="button" key={value} aria-pressed={values.icon === value} onClick={() => update('icon', value)}><Icon size={20} aria-hidden /><span>{label}</span></button>)}</div></fieldset>;
    if (f.type === 'select' && ['type','stage','status','priority','category'].includes(f.key)) return <div className="wide" key={f.key}><QuickChoices label={f.label} value={values[f.key]} options={f.options || []} disabled={busy} onChange={value => update(f.key, value)} /></div>;
    return <label key={f.key} className={f.type === 'textarea' || f.key === 'title' ? 'wide' : ''}><span className="field-label">{f.label}{required && <span className="required-marker" aria-hidden> *</span>}</span>
      {f.type === 'select' ? <select name={f.key} aria-label={f.label} aria-invalid={Boolean(error && errorField === f.key)} aria-describedby={error && errorField === f.key ? "record-error" : undefined} required={required} value={values[f.key]} disabled={busy} onChange={e => update(f.key,e.target.value)}>{f.options?.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select>
      : f.type === 'textarea' ? <textarea name={f.key} aria-label={f.label} aria-invalid={Boolean(error && errorField === f.key)} aria-describedby={error && errorField === f.key ? "record-error" : undefined} rows={f.key === 'body' ? 6 : 3} required={required} value={values[f.key]} disabled={busy} onChange={e => update(f.key,e.target.value)} />
      : <input name={f.key} aria-label={f.label} aria-invalid={Boolean(error && errorField === f.key)} aria-describedby={error && errorField === f.key ? "record-error" : undefined} type={f.type === 'money' ? 'text' : f.type || 'text'} inputMode={f.type === 'money' ? 'decimal' : undefined} min={f.type === 'number' ? 1 : undefined} max={f.type === 'number' ? 31 : undefined} required={required} value={values[f.key]} disabled={busy} autoComplete={f.type === 'email' ? 'email' : undefined} onInput={['date','time','month','number'].includes(f.type || '') ? e => update(f.key,e.currentTarget.value) : undefined} onChange={e => update(f.key,e.target.value)} />}
    </label>;
  }
  const existing = data[collection].some((x) => x.id === row.id);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    let activeField = '';
    try {
      if (existing && data[collection].find(item => item.id === row.id)?.version !== row.version) throw new Error('Questa scheda è stata aggiornata. Riaprila prima di salvare le modifiche.');
      const patch: Record<string, unknown> = { ...row };
      for (const f of fields) {
        activeField = f.key;
        const input = form.current?.elements.namedItem(f.key) as HTMLInputElement | null;
        if (input && 'checkValidity' in input && !input.checkValidity()) throw new Error(`${f.label}: controlla il valore inserito`);
        if (
          collection === "sponsors" &&
          ((f.key === "amount_cents" && values.type === "Tecnico") ||
            (f.key === "technical_cents" && values.type === "Finanziario"))
        ) {
          patch[f.key] = 0;
          continue;
        }
        const val = values[f.key]?.trim() || "";
        if (f.required && !val)
          throw new Error(`${f.label}: campo obbligatorio`);
        if (f.type === "url" && val && !safeUrl(val))
          throw new Error(`${f.label}: usa un link http o https valido`);
        patch[f.key] =
          f.type === "money"
            ? val === "" || val === "0"
              ? 0
              : cents(val)
            : f.type === "number"
              ? Number(val)
              : val;
      }
      activeField = "amount_cents";
      if (collection === "costs" && Number(patch.amount_cents) <= 0)
        throw new Error("Inserisci un costo maggiore di zero");
      activeField = "end_time";
      if (collection === "events") {
        const start = String(patch.start_time || ""), end = String(patch.end_time || "");
        if ((start || end) && (!start || !end || end <= start)) throw new Error("L’ora di fine deve seguire l’inizio nello stesso giorno.");
        if (recruitingEvent) { patch.title = interviewTitle(String(patch.team_id || "")); patch.archived = patch.status === "Annullato"; }
      }
      activeField = "day";
      if (
        collection === "recurrences" &&
        (!Number.isInteger(patch.day) ||
          Number(patch.day) < 1 ||
          Number(patch.day) > 31)
      )
        throw new Error("Scegli un giorno da 1 a 31");
      activeField = "completion_url";
      if (
        collection === "deliveries" &&
        patch.status === "Consegnato / Pubblicato"
      ) {
        if (!patch.completion_url)
          throw new Error(
            "Aggiungi un link come prova di consegna o pubblicazione",
          );
        patch.completed_at = row.status === patch.status && row.completed_at ? row.completed_at : new Date().toISOString();
      }
      if (collection === "sponsors") {
        if (patch.type === "Tecnico") patch.amount_cents = 0;
        if (patch.type === "Finanziario") patch.technical_cents = 0;
        const old = data.sponsors.find((x) => x.id === row.id);
        patch.activities = [
          ...(old?.activities || []),
          {
            at: new Date().toISOString(),
            text: old
              ? `Scheda aggiornata · ${patch.stage}`
              : "Trattativa creata",
          },
        ];
      }
      if (collection === "contracts") {
        const old = data.contracts.find((x) => x.id === row.id);
        patch.versions = old
          ? [
              ...(old.versions || []),
              {
                at: old.updated_at,
                url: old.url,
                status: old.status,
                notes: old.notes,
              },
            ].slice(-30)
          : [];
      }
      if (
        await put(collection, patch as unknown as Workspace[Collection][number])
      )
        onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      reveal(activeField);
    }
  };
  return (
    <Dialog
      open
      onOpenChange={(v) => {
        if (!v) onClose();
      }}
    >
      <DialogContent className="compact-editor">
        <DialogTitle className="dialog-title">{title}</DialogTitle>
        <DialogDescription className="muted">
          {recruitingEvent ? "Qui modifichi i dati visibili nell’agenda. Appunti ed esito si gestiscono nella scheda recruiting protetta." : "Parti dall’essenziale. Gli altri dettagli si possono aggiungere quando servono."}
        </DialogDescription>
        <form ref={form} noValidate onSubmit={submit} className="record-form">
          <div className="form-grid">{layout.primary.map(renderField)}</div>
          <div className="editor-context">{values.team_id && !layout.primary.some(f => f.key === 'team_id') && <span>Reparto: {TEAMS.find(t => t.id === values.team_id)?.short}</span>}{['type', existing ? '' : 'status', existing ? '' : 'stage'].filter(key => key && values[key]).map(key => <span key={key}>{values[key]}</span>)}</div>
          {layout.groups.map(group => <details className="progressive-section" key={group.id} open={expanded.includes(group.id)} onToggle={e => {
            const open = e.currentTarget.open;
            setExpanded(current => open ? current.includes(group.id) ? current : [...current, group.id] : current.filter(id => id !== group.id));
          }}><summary>{group.label}<span>{group.fields.filter(f => values[f.key] && values[f.key] !== String(newRecordDefault[f.key] ?? '')).length ? 'Dettagli presenti' : 'Apri'}</span></summary><div className="form-grid">{group.fields.map(renderField)}</div></details>)}
          {error && (
            <p id="record-error" role="alert" className="form-error">
              {error}
            </p>
          )}
          <div className="dialog-footer">
            {existing && (
              <Button
                type="button"
                variant="ghost"
                onClick={() => setArchive((v) => !v)}
              >
                Archivia
              </Button>
            )}
            <Button type="button" variant="outline" onClick={onClose}>
              Annulla
            </Button>
            <Button disabled={busy}>{busy ? "Salvataggio…" : "Salva"}</Button>
          </div>
          {archive && (
            <div className="archive-confirm">
              <p>
                Archiviare questo elemento? Sarà recuperabile da Impostazioni.
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={() => setArchive(false)}
              >
                Annulla
              </Button>
              <Button
                type="button"
                variant="destructive"
                disabled={busy}
                onClick={async () => {
                  if (
                    await put(collection, {
                      ...row,
                      archived: true,
                    } as unknown as Workspace[Collection][number])
                  )
                    onClose();
                }}
              >
                Conferma archiviazione
              </Button>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
