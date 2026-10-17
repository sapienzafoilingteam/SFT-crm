"use client";
import {
Collection,
Cost,
Workspace,
csvCosts,
safeUrl
} from "@/lib/model";
import {
Archive,
ArrowUpRight,
Download,
Layers,
Search,
SlidersHorizontal
} from "lucide-react";
import { useMobile } from "@/lib/use-mobile";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { useState } from "react";
import { useWorkspace } from "../provider";
import { Button } from "../ui/button";
import type { Edit } from "../workspace-app";
export type Props = { edit: Edit; search?: string };
export function Heading({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-heading">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="heading-actions">{children}</div>
    </div>
  );
}
export function Empty({ text, action }: { text: string; action?: React.ReactNode }) {
  return (
    <div className="empty">
      <Layers size={25} />
      <p>{text}</p>
      {action}
    </div>
  );
}
export function Badge({
  children,
  tone = "",
}: {
  children: React.ReactNode;
  tone?: string;
}) {
  return <span className={"badge " + tone}>{children}</span>;
}
export function SectionTitle({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
export function External({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  const clean = safeUrl(url);
  return clean ? (
    <a href={clean} target="_blank" rel="noreferrer" className="text-link">
      {children}
      <ArrowUpRight size={14} />
    </a>
  ) : (
    <span className="muted">Da configurare</span>
  );
}
export function Toolbar({
  search,
  setSearch,
  children,
}: {
  search: string;
  setSearch: (s: string) => void;
  children?: React.ReactNode;
}) {
  const mobile = useMobile();
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <div className="toolbar">
      <div className="search-box">
        <Search size={16} />
        <input
          aria-label="Cerca nella pagina"
          placeholder="Cerca…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {mobile && children ? <>
        <Button variant="outline" className="mobile-filter-button" onClick={() => setFiltersOpen(true)}><SlidersHorizontal size={18} />Filtri e vista</Button>
        <Dialog open={filtersOpen} onOpenChange={setFiltersOpen}><DialogContent className="mobile-filter-sheet"><DialogTitle className="dialog-title">Filtri e vista</DialogTitle><DialogDescription className="muted">Scegli cosa mostrare nella pagina.</DialogDescription><div className="mobile-filter-fields">{children}</div><div className="dialog-footer"><Button onClick={() => setFiltersOpen(false)}>Mostra risultati</Button></div></DialogContent></Dialog>
      </> : children}
    </div>
  );
}
export function DownloadCsv({ rows }: { rows: Cost[] }) {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const url = URL.createObjectURL(
          new Blob([csvCosts(rows)], { type: "text/csv;charset=utf-8;" }),
        );
        const a = document.createElement("a");
        a.href = url;
        a.download = "SFT-costi.csv";
        a.click();
        URL.revokeObjectURL(url);
      }}
    >
      <Download size={15} />
      Esporta CSV
    </Button>
  );
}
export function ArchiveButton({
  collection,
  row,
  onDone,
}: {
  collection: Collection;
  row: Workspace[Collection][number];
  onDone?: () => void;
}) {
  const { put, busy } = useWorkspace();
  const [confirm, setConfirm] = useState(false);
  return confirm ? (
    <div className="archive-confirm">
      <p>Archiviare questo elemento? Puoi ripristinarlo da Impostazioni.</p>
      <Button variant="outline" size="sm" onClick={() => setConfirm(false)}>
        Annulla
      </Button>
      <Button
        variant="destructive"
        size="sm"
        disabled={busy}
        onClick={async () => {
          if (await put(collection, { ...row, archived: true })) {
            onDone?.();
            setConfirm(false);
          }
        }}
      >
        Archivia
      </Button>
    </div>
  ) : (
    <Button
      variant="ghost"
      className="archive-button"
      size="sm"
      onClick={() => setConfirm(true)}
    >
      <Archive size={14} />
      Archivia
    </Button>
  );
}
export function XIcon() {
  return <span aria-hidden>×</span>;
}
