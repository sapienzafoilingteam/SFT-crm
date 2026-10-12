import Link from "next/link";
import type { ReactNode } from "react";

export function LegalLinks() {
  return <nav className="legal-links" aria-label="Informazioni legali">
    <Link href="/privacy-policy">Privacy policy</Link>
    <Link href="/ts">Termini di servizio</Link>
  </nav>;
}

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return <main className="legal-page">
    <header>
      <Link className="legal-brand" href="/">
        <img src="/logo.svg" alt="" width="48" height="48" />
        <span>Sapienza Foiling Team · Workspace</span>
      </Link>
      <h1>{title}</h1>
      <p className="muted">Ultimo aggiornamento: 12 ottobre 2026</p>
    </header>
    <article>{children}</article>
    <footer><LegalLinks /><Link href="/">Torna al workspace</Link></footer>
  </main>;
}
