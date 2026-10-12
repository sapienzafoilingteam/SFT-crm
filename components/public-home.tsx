import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, CalendarDays, FolderOpen, Users, ShieldCheck, Layers, Mail } from 'lucide-react';
import { LegalLinks } from './legal-page';

const features = [
  { icon: Layers, title: 'Il lavoro dei reparti', text: 'Pagine condivise, verbali e report. Ogni reparto ritrova le proprie risorse e le attività della stagione.', tag: 'Reparti' },
  { icon: CalendarDays, title: 'Le prossime scadenze', text: 'Delivery, riunioni ed eventi in un’agenda collegata a Google Calendar, con priorità e stato di avanzamento.', tag: 'Agenda' },
  { icon: FolderOpen, title: 'I documenti del team', text: 'File e cartelle in Google Drive, organizzati per reparto e consultabili direttamente dal workspace.', tag: 'Drive' },
  { icon: Users, title: 'Le relazioni e le persone', text: 'Sponsor, contratti, eventi e costi. Candidature, valutazioni e colloqui in un’area recruiting con protezione aggiuntiva.', tag: 'Management e recruiting' },
];
export function PublicHome() {
  return <main className="public-home" id="public-main">
    <header className="public-header">
      <Link href="/" className="public-brand" aria-label="Sapienza Foiling Team · Workspace"><img src="/logo.svg" width="50" height="50" alt="" /><span>SAPIENZA<small>FOILING TEAM / WORKSPACE</small></span></Link>
      <nav aria-label="Navigazione homepage"><a href="#workspace">Il workspace</a><Link href="/accesso" className="public-access">Accedi al CRM <ArrowUpRight size={17} /></Link></nav>
    </header>
    <section className="public-hero" aria-labelledby="public-title">
      <div className="public-hero-copy"><p className="public-eyebrow"><span /> Lo spazio di lavoro della squadra</p>
        <h1 id="public-title">Dietro la barca,<br />il lavoro di una <em>squadra.</em></h1>
        <p className="public-lead">Reparti, attività e documenti del Sapienza Foiling Team. Uno spazio condiviso per organizzare il lavoro, dalla progettazione alle prossime scadenze.</p>
        <div className="public-hero-actions"><Link href="/accesso" className="public-access public-access-primary">Entra nel workspace <ArrowRight size={18} /></Link><a href="#workspace" className="public-text-link">Scopri come è organizzato <ArrowUpRight size={16} /></a></div>
        <p className="public-access-note"><ShieldCheck size={16} /> Accesso riservato ai membri invitati dal team.</p>
      </div>
      <figure className="public-hero-visual"><Image src="/images/home/vertical-rig.webp" alt="La barca del Sapienza Foiling Team in acqua, con la vela e i loghi del team." fill sizes="(max-width: 700px) 100vw, 47vw" preload className="public-hero-photo" /><figcaption><span>SAPIENZA FOILING TEAM</span><strong>Dalla progettazione all’acqua.</strong><small>Foto © Emma Bortoluzzi · SuMoth Challenge 2026</small></figcaption></figure>
    </section>
    <section className="public-workspace" id="workspace" aria-labelledby="workspace-title">
      <div className="public-section-heading"><p className="public-eyebrow">Dentro il workspace</p><h2 id="workspace-title">Ogni attività ha<br />il suo spazio.</h2><p>SFT Workspace è il CRM della squadra: raccoglie gli strumenti per coordinare i reparti, gestire le risorse e organizzare la selezione dei nuovi membri.</p></div>
      <div className="public-features">{features.map(({ icon: Icon, title, text, tag }) => <article key={tag}><div className="public-feature-top"><Icon size={25} strokeWidth={1.5} /><span>{tag}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className="public-team-photos" aria-label="La squadra e il lavoro a terra">
      <figure><div className="public-team-photo"><Image src="/images/home/squadra.webp" alt="I membri del Sapienza Foiling Team riuniti accanto alla barca." fill sizes="(max-width: 700px) 100vw, 54vw" /></div><figcaption>La squadra, insieme alla barca.</figcaption></figure>
      <figure><div className="public-team-photo"><Image src="/images/home/preparazione.webp" alt="Il team prepara la barca e l’attrezzatura nel paddock." fill sizes="(max-width: 700px) 100vw, 34vw" /></div><figcaption>Il lavoro a terra, prima di entrare in acqua.</figcaption></figure>
    </section>
    <section className="public-google" aria-labelledby="google-title"><div><p className="public-eyebrow">Collegamenti e dati</p><h2 id="google-title">Gli strumenti del team,<br />collegati con uno scopo.</h2><div className="public-service-labels"><span>Google Drive</span><span>Google Calendar</span><span>Google Sheets</span></div></div><div className="public-google-copy">
      <p>Il responsabile collega l’account Google del team per consentire ai membri autorizzati di gestire i file in Drive, sincronizzare gli eventi del calendario e importare le candidature dal foglio Google Sheets collegato al recruiting. L’indirizzo email Google viene verificato durante il collegamento per confermare l’account del team.</p>
      <p>I dati vengono usati per queste funzionalità: non vengono venduti, utilizzati per pubblicità o per addestrare modelli di intelligenza artificiale.</p>
      <Link href="/privacy-policy" className="public-text-link">Leggi come vengono trattati i dati <ArrowUpRight size={16} /></Link>
    </div></section>
    <section className="public-entry" aria-labelledby="entry-title"><div><ShieldCheck size={23} /><h2 id="entry-title">Hai un account del team?</h2><p>Accedi con le credenziali del tuo invito. Se non hai ancora un account, contatta il responsabile del team.</p></div><Link href="/accesso" className="public-access public-access-primary">Accedi al CRM <ArrowRight size={18} /></Link></section>
    <footer><div><strong>Sapienza Foiling Team</strong><p>Questa presentazione e le informazioni sulla privacy sono pubbliche. Dati operativi, documenti e candidature richiedono un account invitato.</p></div><div><LegalLinks /><a className="public-contact" href="mailto:sapienzafoilingteam@gmail.com"><Mail size={15} />sapienzafoilingteam@gmail.com</a><a className="public-text-link" href="https://sapienzafoilingteam.com" target="_blank" rel="noreferrer">Sito del team <ArrowUpRight size={15} /></a></div></footer>
  </main>;
}
