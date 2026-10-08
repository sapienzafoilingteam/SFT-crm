"use client";
import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Type,
  List,
  CheckSquare,
  Link2,
  Table2,
  Image,
  MessageSquare,
  Heading2,
} from "lucide-react";
import { Block } from "@/lib/model";

const commands = [
  {
    type: "testo",
    label: "Testo",
    description: "Un paragrafo libero",
    icon: Type,
  },
  {
    type: "titolo",
    label: "Titolo",
    description: "Organizza le sezioni della pagina",
    icon: Heading2,
  },
  {
    type: "elenco",
    label: "Elenco",
    description: "Una voce per riga",
    icon: List,
  },
  {
    type: "checklist",
    label: "Checklist",
    description: "Un’attività da completare",
    icon: CheckSquare,
  },
  {
    type: "link",
    label: "Link",
    description: "Drive, documenti o altre risorse",
    icon: Link2,
  },
  {
    type: "tabella",
    label: "Tabella",
    description: "Righe e colonne semplici",
    icon: Table2,
  },
  {
    type: "immagine",
    label: "Immagine",
    description: "Un’immagine da URL",
    icon: Image,
  },
  {
    type: "richiamo",
    label: "Richiamo",
    description: "Metti in evidenza una nota",
    icon: MessageSquare,
  },
  {
    type: "riunione",
    label: "Riunione",
    description: "Partecipanti, verbale, decisioni e azioni",
    icon: CalendarDays,
  },
] as const;
export const emptyMeeting = () => ({
  date: new Date().toLocaleDateString("en-CA", { timeZone: "Europe/Rome" }),
  attendees: "",
  agenda: "",
  minutes: "",
  decisions: "",
  actions: "",
});
export function makeBlock(type: Block["type"], content = ""): Block {
  return {
    id: crypto.randomUUID(),
    type,
    content:
      content ||
      (type === "tabella" ? "Colonna 1 | Colonna 2\nValore | Valore" : ""),
    ...(type === "riunione" ? { meeting: emptyMeeting() } : {}),
  };
}
export function PageBlockEditor({
  block,
  onChange,
  onInsert,
  autoFocus,
  onSplit,
}: {
  block?: Block;
  onChange?: (patch: Partial<Block>) => void;
  onInsert?: (block: Block) => void;
  autoFocus?: boolean;
  onSplit?: (before: string, next: Block) => void;
}) {
  const [composer, setComposer] = useState("");
  const [query, setQuery] = useState<string | null>(null);
  const [selected, setSelected] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);
  const value = block ? block.content : composer;
  useEffect(() => {
    if (autoFocus && input.current) {
      input.current.focus();
      const end = input.current.value.length;
      input.current.setSelectionRange(end, end);
    }
  }, [autoFocus]);
  const options = commands.filter((c) =>
    (c.label + " " + c.description)
      .toLocaleLowerCase("it")
      .includes((query || "").toLocaleLowerCase("it")),
  );
  useEffect(() => {
    setSelected(0);
  }, [query]);
  useEffect(() => {
    if (query !== null)
      root.current
        ?.querySelector(".slash-menu .selected")
        ?.scrollIntoView({ block: "nearest" });
  }, [selected, query]);
  useEffect(() => {
    if (query === null) return;
    const close = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setQuery(null);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [query]);
  const change = (text: string, caret: number) => {
    if (block) onChange?.({ content: text });
    else setComposer(text);
    const prefix = text.slice(0, caret);
    const match = prefix.match(/(?:^|\n)\/([^\n/]*)$/);
    setQuery(match ? match[1] : null);
  };
  const choose = (type: Block["type"]) => {
    const caret = input.current?.selectionStart ?? value.length;
    const prefix = value.slice(0, caret).replace(/(?:^|\n)\/[^\n/]*$/, "");
    const content = (prefix + value.slice(caret)).trim();
    if (block)
      onChange?.({
        type,
        content,
        ...(type === "riunione"
          ? { meeting: block.meeting || emptyMeeting() }
          : {}),
      });
    else {
      onInsert?.(makeBlock(type, content));
      setComposer("");
    }
    setQuery(null);
    input.current?.focus();
  };
  const meeting = block?.meeting || emptyMeeting();
  return (
    <div className="page-block-editor" ref={root}>
      <textarea
        ref={input}
        autoFocus={autoFocus}
        className={
          "notion-input " + (block?.type === "titolo" ? "notion-heading" : "")
        }
        aria-label={block ? `Contenuto ${block.type}` : "Nuovo blocco"}
        placeholder={
          block?.type === "riunione"
            ? "Titolo della riunione"
            : "Scrivi qualcosa, oppure / per inserire un blocco…"
        }
        rows={
          block?.type === "titolo" || !block || block?.type === "riunione"
            ? 1
            : 3
        }
        value={value}
        aria-expanded={query !== null}
        aria-controls={
          query !== null ? `slash-${block?.id || "new"}` : undefined
        }
        onChange={(e) => change(e.target.value, e.target.selectionStart)}
        onKeyDown={(e) => {
          if (query !== null) {
            if (e.key === "Escape") {
              e.preventDefault();
              setQuery(null);
            }
            if (
              options.length &&
              ["ArrowDown", "ArrowUp", "Enter"].includes(e.key)
            ) {
              e.preventDefault();
              if (e.key === "Enter")
                choose(options[selected % options.length].type);
              else
                setSelected(
                  (i) =>
                    (i + (e.key === "ArrowDown" ? 1 : -1) + options.length) %
                    options.length,
                );
            }
          } else if (
            block &&
            onSplit &&
            ["testo", "titolo", "checklist"].includes(block.type) &&
            e.key === "Enter" &&
            !e.shiftKey
          ) {
            e.preventDefault();
            onSplit(
              value.slice(0, e.currentTarget.selectionStart),
              makeBlock(
                block.type === "checklist" ? "checklist" : "testo",
                value.slice(e.currentTarget.selectionEnd),
              ),
            );
          } else if (
            !block &&
            e.key === "Enter" &&
            !e.shiftKey &&
            value.trim()
          ) {
            e.preventDefault();
            onInsert?.(makeBlock("testo", value));
            setComposer("");
          }
        }}
      />
      {query !== null && (
        <div
          className="slash-menu"
          id={`slash-${block?.id || "new"}`}
          role="group"
          aria-label="Inserisci un blocco"
        >
          <small>INSERISCI UN BLOCCO · ↑ ↓ INVIO</small>
          {options.map((c, i) => (
            <button
              type="button"
              key={c.type}
              className={i === selected ? "selected" : ""}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={() => setSelected(i)}
              onClick={() => choose(c.type)}
            >
              <c.icon size={20} />
              <span>
                <strong>{c.label}</strong>
                <small>{c.description}</small>
              </span>
            </button>
          ))}
          {!options.length && (
            <p>Nessun blocco trovato. Prova “riunione” o “testo”.</p>
          )}
        </div>
      )}
      {block && ["link", "immagine"].includes(block.type) && (
        <input
          aria-label="URL blocco"
          placeholder="https://… (puoi lasciarlo vuoto)"
          value={block.url || ""}
          onChange={(e) => onChange?.({ url: e.target.value })}
        />
      )}
      {block?.type === "tabella" && (
        <small className="muted">
          Una riga per linea; separa le colonne con |. La prima riga contiene le
          intestazioni.
        </small>
      )}
      {block?.type === "riunione" && <>
        <div className="meeting-fields"><label>Data<input type="date" value={meeting.date} onChange={e => onChange?.({ meeting: { ...meeting, date: e.target.value } })} /></label>
        <label className="wide">Verbale<textarea rows={4} placeholder="Che cosa è stato discusso?" value={meeting.minutes} onChange={e => onChange?.({ meeting: { ...meeting, minutes: e.target.value } })} /></label></div>
        <details className="progressive-section"><summary>Partecipanti e ordine del giorno<span>Apri</span></summary><div className="meeting-fields"><label>Partecipanti<input value={meeting.attendees} placeholder="Nomi delle persone presenti" onChange={e => onChange?.({ meeting: { ...meeting, attendees: e.target.value } })} /></label><label className="wide">Ordine del giorno<textarea rows={3} value={meeting.agenda} onChange={e => onChange?.({ meeting: { ...meeting, agenda: e.target.value } })} /></label></div></details>
        <details className="progressive-section"><summary>Decisioni e prossime azioni<span>Apri</span></summary><div className="meeting-fields">{([['decisions','Decisioni prese'],['actions','Prossime azioni · responsabili e scadenze']] as const).map(([key,label]) => <label className="wide" key={key}>{label}<textarea rows={3} value={meeting[key]} onChange={e => onChange?.({ meeting: { ...meeting, [key]: e.target.value } })} /></label>)}</div></details>
      </>}
    </div>
  );
}
export function MeetingBlock({ block }: { block: Block }) {
  const m = block.meeting;
  return (
    <section className="meeting-block">
      <header>
        <CalendarDays size={20} />
        <div>
          <h3>{block.content || "Riunione del reparto"}</h3>
          <small>
            {m?.date
              ? new Date(m.date + "T12:00:00").toLocaleDateString("it-IT")
              : "Data da definire"}
            {m?.attendees ? " · " + m.attendees : ""}
          </small>
        </div>
      </header>
      {(
        [
          ["agenda", "Ordine del giorno"],
          ["minutes", "Verbale"],
          ["decisions", "Decisioni"],
          ["actions", "Prossime azioni"],
        ] as const
      ).map(([key, label]) =>
        m?.[key] ? (
          <div key={key}>
            <h4>{label}</h4>
            <p>{m[key]}</p>
          </div>
        ) : null,
      )}
      {!m?.minutes && (
        <p className="muted">Il verbale è ancora da compilare.</p>
      )}
    </section>
  );
}
