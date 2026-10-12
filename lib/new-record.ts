import { Collection, base, STAGES } from "./model";
export function newRecord(k: Collection, season: string): Record<string, unknown> {
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
