import Link from "next/link";
import { LegalLinks } from "./legal-page";

export function PublicHome() {
  return <main className="public-home">
    <header className="public-header">
      <Link href="/" className="legal-brand"><img src="/logo.svg" width="48" height="48" alt="" /><span>Sapienza Foiling Team · Workspace</span></Link>
      <Link href="/accesso" className="public-access">Accedi al CRM</Link>
    </header>
    <section className="public-intro">
      <p className="muted">Il workspace del Sapienza Foiling Team</p>
      <h1>Attività, documenti e agenda della squadra, in un unico spazio.</h1>
      <p>SFT Workspace è il CRM del Sapienza Foiling Team. Aiuta i membri a coordinare il lavoro dei reparti, seguire scadenze e riunioni, gestire sponsor e risorse e organizzare la selezione dei nuovi membri.</p>
      <p>Questa presentazione e le informazioni sulla privacy sono pubbliche. I dati operativi, i documenti e le candidature richiedono un account invitato dal team.</p>
      <Link href="/accesso" className="public-access">Accedi con il tuo account del team</Link>
    </section>
    <section className="public-features" aria-label="Funzionalità del workspace">
      <div><h2>Reparti e attività</h2><p>Pagine condivise, verbali, report e scadenze per coordinare il lavoro della stagione.</p></div>
      <div><h2>Agenda e documenti</h2><p>File del team in Google Drive e un’agenda collegata a Google Calendar, consultabili dal CRM.</p></div>
      <div><h2>Management e recruiting</h2><p>Sponsor, contratti, eventi e costi; candidature, valutazioni e colloqui in una sezione con protezione aggiuntiva.</p></div>
    </section>
    <section className="public-google"><h2>Perché il CRM richiede l’accesso ai dati Google</h2>
      <p>Il responsabile collega l’account Google del team per permettere ai membri autorizzati di leggere e gestire i file in Drive, sincronizzare gli eventi del calendario e importare le candidature dal foglio Google Sheets collegato al modulo recruiting. L’indirizzo email Google viene verificato durante il collegamento per confermare l’account del team.</p>
      <p>I dati servono a queste funzionalità: non vengono venduti né utilizzati per pubblicità o per addestrare modelli di intelligenza artificiale. La <Link href="/privacy-policy">Privacy policy</Link> descrive i dati consultati, dove vengono conservati, chi può accedervi e come richiederne la cancellazione.</p>
    </section>
    <footer><LegalLinks /><p>Contatti: <a href="mailto:sapienzafoilingteam@gmail.com">sapienzafoilingteam@gmail.com</a></p></footer>
  </main>;
}
