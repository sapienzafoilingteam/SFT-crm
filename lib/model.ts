export const SEASONS = [
  { id: "00000000-0000-4000-8000-000000000001", name: "2026 / 2027" },
  { id: "00000000-0000-4000-8000-000000000002", name: "2025 / 2026" },
];
export const TEAMS = [
  {
    id: "scafo",
    name: "Scafo e terrazze",
    short: "Scafo",
    description: "Forma, struttura e performance sull’acqua.",
    color: "#9c5964",
    icon: "waves",
  },
  {
    id: "management",
    name: "Management e Comunicazione",
    short: "Management",
    description: "Le relazioni e le storie che ci portano lontano.",
    color: "#843c45",
    icon: "megaphone",
  },
  {
    id: "materiali",
    name: "Materiali e Sostenibilità",
    short: "Materiali",
    description: "Innovare i materiali, ridurre la nostra impronta.",
    color: "#6d8b73",
    icon: "leaf",
  },
  {
    id: "manufacturing",
    name: "Manufacturing e Cantiere",
    short: "Cantiere",
    description: "Dai progetti alla barca, un dettaglio alla volta.",
    color: "#b68452",
    icon: "wrench",
  },
  {
    id: "foil",
    name: "Foil e Controllo di Volo",
    short: "Foil",
    description: "Trovare l’equilibrio tra velocità e stabilità.",
    color: "#638c9f",
    icon: "wind",
  },
  {
    id: "elettronica",
    name: "Elettronica e Data Analysis",
    short: "Elettronica",
    description: "Misurare, comprendere, migliorare.",
    color: "#81769c",
    icon: "cpu",
  },
  {
    id: "shore",
    name: "Shore Team e Logistica",
    short: "Shore team",
    description: "Tutto pronto, a terra e in acqua.",
    color: "#8c8d67",
    icon: "anchor",
  },
];
export const STAGES = [
  "Da contattare",
  "Contatto avviato",
  "In trattativa",
  "Contratto",
  "Attivo",
] as const;
export const DELIVERY_STATES = [
  "Da fare",
  "In preparazione",
  "Da verificare",
  "Consegnato / Pubblicato",
];
export interface Base {
  id: string;
  version: number;
  season_id: string;
  archived: boolean;
  updated_at: string;
}
export interface LinkRecord extends Base {
  icon?: string | null;
  title: string;
  url: string;
  category: string;
  team_id: string;
}
export interface Checklist {
  id: string;
  title: string;
  done: boolean;
}
export interface Block {
  id: string;
  type:
    | "titolo"
    | "testo"
    | "elenco"
    | "checklist"
    | "link"
    | "tabella"
    | "immagine"
    | "richiamo"
    | "riunione";
  content: string;
  url?: string;
  checked?: boolean;
  meeting?: {
    date: string;
    attendees: string;
    agenda: string;
    minutes: string;
    decisions: string;
    actions: string;
  };
}
export interface Revision {
  at: string;
  blocks: Block[];
  summary?: string;
}
export interface TeamPage extends Base {
  team_id: string;
  summary: string;
  blocks: Block[];
  revisions: Revision[];
}
export interface Report extends Base {
  team_id: string;
  title: string;
  content: string;
  date: string;
  url: string;
}
export interface Sponsor extends Base {
  title: string;
  type: string;
  stage: string;
  contact: string;
  email: string;
  amount_cents: number;
  technical_cents: number;
  next_action: string;
  due_date: string;
  notes: string;
  pitch_url: string;
  document_url: string;
  activities: { at: string; text: string }[];
}
export interface EventRecord extends Base {
  title: string;
  type: string;
  status: string;
  date: string;
  location: string;
  description: string;
  checklist: Checklist[];
  sponsor_id: string;
  document_url: string;
  recap: string;
}
export interface Delivery extends Base {
  title: string;
  type: string;
  status: string;
  date: string;
  team_id: string;
  priority: string;
  url: string;
  notes: string;
  completion_url: string;
  completed_at: string;
  recurrence_key: string | null;
}
export interface Cost extends Base {
  title: string;
  date: string;
  amount_cents: number;
  category: string;
  team_id: string;
  event_id: string;
  vendor: string;
  paid_by: string;
  document_url: string;
  notes: string;
}
export interface Contract extends Base {
  versions: { at: string; url: string; status: string; notes: string }[];
  title: string;
  sponsor_id: string;
  event_id: string;
  type: string;
  status: string;
  date: string;
  url: string;
  notes: string;
}
export interface Template extends Base {
  title: string;
  category: string;
  subject: string;
  body: string;
  url: string;
}
export interface Offer extends Base {
  title: string;
  description: string;
  conditions: string;
}
export interface DocumentRecord extends Base {
  title: string;
  category: string;
  url: string;
  storage_path: string;
}
export interface Recurrence extends Base {
  title: string;
  type: string;
  day: number;
  team_id: string;
  priority: string;
}
export interface Workspace {
  links: LinkRecord[];
  pages: TeamPage[];
  reports: Report[];
  sponsors: Sponsor[];
  events: EventRecord[];
  deliveries: Delivery[];
  costs: Cost[];
  contracts: Contract[];
  templates: Template[];
  offers: Offer[];
  documents: DocumentRecord[];
  recurrences: Recurrence[];
}
export type Collection = keyof Workspace;
export const COLLECTIONS: Collection[] = [
  "links",
  "pages",
  "reports",
  "sponsors",
  "events",
  "deliveries",
  "costs",
  "contracts",
  "templates",
  "offers",
  "documents",
  "recurrences",
];
export function base(season_id: string): Base {
  return {
    id: crypto.randomUUID(),
    version: 1,
    season_id,
    archived: false,
    updated_at: new Date().toISOString(),
  };
}
export function money(cents: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(cents / 100);
}
export function cents(value: string) {
  const normalized = value.trim().replace(",", ".");
  if (!/^\d+(\.\d{1,2})?$/.test(normalized))
    throw new Error("Inserisci un importo valido con al massimo due decimali.");
  const [a, b = ""] = normalized.split(".");
  const result = Number(a) * 100 + Number(b.padEnd(2, "0"));
  if (!Number.isSafeInteger(result) || result <= 0)
    throw new Error("L’importo deve essere positivo.");
  return result;
}
export function dateLabel(value: string) {
  return value
    ? new Date(value + "T12:00:00").toLocaleDateString("it-IT", {
        day: "numeric",
        month: "short",
      })
    : "Da definire";
}
export function safeUrl(value: string) {
  if (!value) return "";
  try {
    const u = new URL(value);
    return u.protocol === "https:" || u.protocol === "http:" ? u.href : "";
  } catch {
    return "";
  }
}
export function totalCosts(rows: Cost[]) {
  return rows
    .filter((r) => !r.archived)
    .reduce((sum, r) => sum + r.amount_cents, 0);
}
export function monthlyDeliveries(
  state: Workspace,
  season: string,
  month: string,
): Delivery[] {
  if (!/^\d{4}-\d{2}$/.test(month)) throw new Error("Mese non valido");
  const [y, m] = month.split("-").map(Number);
  if (m < 1 || m > 12) throw new Error("Mese non valido");
  const last = new Date(y, m, 0).getDate();
  return state.recurrences
    .filter((r) => !r.archived && r.season_id === season)
    .filter(
      (r) =>
        !state.deliveries.some(
          (d) =>
            d.recurrence_key === `${r.id}:${month}` && d.season_id === season,
        ),
    )
    .map((r) => ({
      ...base(season),
      title: r.title,
      type: r.type,
      status: "Da fare",
      date: `${month}-${String(Math.min(r.day, last)).padStart(2, "0")}`,
      team_id: r.team_id,
      priority: r.priority,
      url: "",
      notes: "",
      completion_url: "",
      completed_at: "",
      recurrence_key: `${r.id}:${month}`,
    }));
}
export function csvCosts(rows: Cost[]) {
  const cell = (v: unknown) => {
    let s = String(v ?? "");
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
    return '"' + s.replaceAll('"', '""') + '"';
  };
  return (
    "\uFEFF" +
    [
      [
        "Data",
        "Descrizione",
        "Categoria",
        "Reparto",
        "Importo EUR",
        "Fornitore",
      ],
      ...rows
        .filter((r) => !r.archived)
        .map((r) => [
          r.date,
          r.title,
          r.category,
          r.team_id,
          (r.amount_cents / 100).toFixed(2).replace(".", ","),
          r.vendor,
        ]),
    ]
      .map((r) => r.map(cell).join(";"))
      .join("\r\n")
  );
}
