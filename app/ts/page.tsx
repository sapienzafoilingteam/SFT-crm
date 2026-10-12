import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Termini di servizio · SFT Workspace", description: "Condizioni di utilizzo del workspace del Sapienza Foiling Team." };

export default function TermsOfService() {
  return <LegalPage title="Termini di servizio">
    <p>Questi termini descrivono le condizioni d’uso del workspace del Sapienza Foiling Team, uno strumento per organizzare le attività e le risorse della squadra. Per assistenza scrivi a <a href="mailto:sapienzafoilingteam@gmail.com">sapienzafoilingteam@gmail.com</a>.</p>
    <section><h2>Accesso e account</h2><p>L’accesso è riservato alle persone invitate e autorizzate dal team. Usa il tuo account personale, proteggi la password e non condividere sessioni o credenziali. Segnala tempestivamente accessi sospetti. L’accesso può essere sospeso o revocato quando termina l’autorizzazione o in caso di uso improprio.</p></section>
    <section><h2>Uso consentito</h2><p>Usa il workspace per le attività del team e nei limiti dei permessi assegnati. Non tentare di aggirare i controlli di accesso, compromettere il servizio o consultare dati senza autorizzazione. Non caricare contenuti illeciti o materiali che non hai il diritto di utilizzare e condividere.</p></section>
    <section><h2>Contenuti e riservatezza</h2><p>Se inserisci o modifichi dati, verificane accuratezza, pertinenza e destinatari. I diritti sui materiali restano ai rispettivi titolari; il caricamento ne consente la gestione e la condivisione per le attività autorizzate del team. Tratta candidature, valutazioni, contatti, contratti e documenti interni come informazioni riservate. Esporta o condividi questi dati solo quando autorizzato e per una finalità pertinente.</p></section>
    <section><h2>Modifiche e integrazioni</h2><p>Le operazioni possono modificare dati condivisi e file reali. Controlla la destinazione prima di caricare, rinominare, archiviare o spostare contenuti nel cestino. Le integrazioni Google dipendono dall’autorizzazione del responsabile e dalle condizioni dei servizi esterni. La revoca dell’autorizzazione può interrompere le funzionalità collegate.</p></section>
    <section><h2>Disponibilità e responsabilità</h2><p>Il servizio può essere temporaneamente indisponibile per manutenzione, errori o problemi dei fornitori. Non è garantita una disponibilità continua. Verifica le informazioni prima di prendere decisioni operative, economiche o amministrative; le registrazioni nel CRM non sostituiscono documenti ufficiali, contratti o conferme di pagamento. Questi termini non escludono responsabilità o diritti che non possono essere esclusi dalla legge.</p></section>
    <section><h2>Privacy</h2><p>Il trattamento dei dati e l’uso delle integrazioni sono descritti nella <Link href="/privacy-policy">Privacy policy</Link>. L’utilizzo del workspace non sostituisce il consenso quando questo è richiesto per uno specifico trattamento.</p></section>
    <section><h2>Aggiornamenti e assistenza</h2><p>Le condizioni possono essere aggiornate in relazione alle funzionalità e alle esigenze del team. Per chiarimenti, problemi di accesso o segnalazioni usa il contatto indicato in questa pagina.</p></section>
  </LegalPage>;
}
