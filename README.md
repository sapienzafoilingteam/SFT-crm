# Sapienza Foiling Team · Workspace

CRM del Sapienza Foiling Team, sviluppato con Next.js/React e Supabase.

Produzione: https://crm.sapienzafoilingteam.com · Repository: https://github.com/sapienzafoilingteam/SFT-crm

Senza configurazione Supabase il progetto parte in modalità demo.

## Avvio

Richiede Node.js 22 o successivo.

```sh
npm install
npm run dev
```

Apri l'indirizzo indicato dal server, normalmente http://localhost:3000. Su macOS puoi usare `Avvia-Workspace.command`; su Windows `Avvia-Gestionale.bat`.

Il vecchio prototipo rimane disponibile in `index.html`, con la sua documentazione in `README_PROTOTIPO.md` e il suo avvio Windows in `Avvia-Prototipo.bat`.

## Funzioni disponibili

- Home con collegamenti e icone configurabili, quadro della stagione e scadenze condivise.
- Sette sottoteam con editor a blocchi: menu `/` ricercabile e navigabile da tastiera, checklist, link, immagini, tabelle, verbali di riunione, report e revisioni recuperabili.
- Management: panorama operativo, eventi con checklist, Kanban sponsor e vista lista.
- Sponsor: anagrafica, contatto, fase, attività, prossimo passo, valori cash/tecnici e collegamenti ai contratti.
- Contratti e catalogo delle offerte; modelli documentali da collegare ai documenti ufficiali.
- Template email con variabili, anteprima modificabile, copia testo e apertura Gmail. Nessun invio automatico.
- Agenda con calendario/lista e generazione idempotente delle delivery mensili da modelli. Scadenze nella Home e nei reparti, filtrate per stagione e sottoteam, con priorità e segnalazioni di ritardo.
- Bilancio: registro costi, filtri, totali esatti ed export CSV protetto dalle formule.
- Archiviazione e ripristino; tema chiaro/scuro; layout responsive e controlli da tastiera.

## Modalità demo

Non servono credenziali. I record iniziali sono esempi; aziende, date, valori e attività non descrivono accordi reali. Le modifiche si salvano nel browser alla chiave `sft-workspace-demo-v1`. La demo non è condivisa tra persone o dispositivi.

I link non noti restano “Da configurare”. Il caricamento file in Storage si attiva soltanto in modalità Supabase; in demo si possono usare link. I dati del prototipo originale non vengono letti o modificati automaticamente.

Le stagioni e i nomi dei reparti sono configurati in `lib/model.ts`; lo schema SQL include gli stessi identificativi. Sono disponibili una stagione corrente dimostrativa e una precedente vuota. Per aggiungerne altre occorre mantenere allineati configurazione e database.

## Collegamento Supabase

Segui [SUPABASE_SETUP.md](SUPABASE_SETUP.md). Il codice del repository è già presente; il passaggio è esplicito e non trasferisce i mock nel database reale.

## Verifica

```sh
npm run typecheck
npm test
npm run build
```

I test eseguono le regole monetarie e di ricorrenza e applicano la migrazione su Postgres in memoria (PGlite). Verificano tabelle, relazioni, RLS, revoca membri, audit, batch atomici e conflitti. L'ambiente riproduce le interfacce Auth/Storage necessarie alle policy, ma non sostituisce un collaudo del progetto Supabase online, del servizio email e degli upload reali.

## Struttura

- `app/`: layout, routing e stile.
- `components/`: interfaccia e componenti shadcn/ui locali (Button e Dialog su Radix).
- `lib/model.ts`: tipi, importi, date, CSV e generazione mensile.
- `lib/mock.ts`: dati dimostrativi.
- `lib/repository.ts`: salvataggio locale oppure Supabase.
- `supabase/migrations/`: schema, vincoli, policy e funzione transazionale.
- `PIANO_CRM_SFT.md`: piano concordato.

Logo, foto e caratteri sono stati recuperati dal sito ufficiale sapienzafoilingteam.com per questo workspace del team. Provenienza in `public/ASSETS.md`.

## Limiti della prima versione

L'editor è a blocchi semplici: non offre collaborazione simultanea carattere per carattere, formule o un clone completo di Notion. Inviti e revoche avvengono dalla console Supabase. L’accesso avviene tramite invito personale e scelta iniziale della password, poi email/password. Gmail non è sincronizzato; firma e redazione finale dei contratti avvengono negli strumenti del team. Il bilancio registra costi, senza presumere saldo di cassa o incassi sponsor. I file Storage e i dati SQL devono essere inclusi separatamente nella strategia di backup.

## Scrivere una pagina di reparto

Apri il reparto e scegli **Modifica pagina**. Digita `/` all’inizio di un blocco o di una nuova riga per scegliere il tipo; puoi filtrare scrivendo, per esempio, `/riunione`. Frecce e Invio selezionano il blocco, Esc chiude il menu. Nei paragrafi, nei titoli e nelle checklist, Invio aggiunge un nuovo blocco; Maiusc+Invio va a capo nello stesso blocco.

Il blocco **Riunione**, disponibile anche dal pulsante **Nuova riunione**, contiene titolo, data, partecipanti, ordine del giorno, verbale, decisioni e azioni con responsabili/scadenze. Salva pagina conserva tutto su Supabase (o nel browser in demo), con lo storico delle revisioni. Non vengono creati automaticamente eventi o task dalle azioni testuali del verbale.

Al primo caricamento autorizzato vengono aggiunti i link utili mancanti per le due stagioni: sito, Gmail, media, SuMoth, presentazioni, eventi, riunioni e due risorse per reparto. Gli URL non conosciuti rimangono vuoti. Le risorse esistenti, anche archiviate, non vengono sovrascritte o ricreate. Configura i link della home da Impostazioni e quelli dei reparti dai pulsanti **Configura link**. I verbali sono contenuti nei blocchi JSON della pagina: non serve una nuova migrazione del database.
