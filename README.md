# Sapienza Foiling Team · CRM

Workspace condiviso del Sapienza Foiling Team per organizzare la stagione, il lavoro dei reparti, sponsor, eventi, contratti, documenti e costi. Realizzato con Next.js, React e Supabase, con accesso al Google Drive del team tramite il server del CRM.

- **CRM online:** [crm.sapienzafoilingteam.com](https://crm.sapienzafoilingteam.com)
- **Indirizzo alternativo:** [sft-crm.vercel.app](https://sft-crm.vercel.app)
- **Repository:** [sapienzafoilingteam/SFT-crm](https://github.com/sapienzafoilingteam/SFT-crm)
- **Sito del team:** [sapienzafoilingteam.com](https://sapienzafoilingteam.com)

Il progetto offre una modalità **Supabase**, con dati condivisi e account personali, e una modalità **demo**, utilizzabile senza servizi esterni. Le funzionalità descritte di seguito corrispondono all'interfaccia attuale.

## Indice

- [Pagine e navigazione](#pagine-e-navigazione)
- [Funzionalità](#funzionalità)
- [Accesso e permessi](#accesso-e-permessi)
- [Avvio locale](#avvio-locale)
- [Configurazione Supabase e Google Drive](#configurazione-supabase-e-google-drive)
- [Dati, salvataggio e recupero](#dati-salvataggio-e-recupero)
- [Deploy](#deploy)
- [Verifiche](#verifiche)
- [Struttura del progetto](#struttura-del-progetto)
- [Limiti attuali](#limiti-attuali)

## Pagine e navigazione

| Pagina | Percorso | Contenuti |
| --- | --- | --- |
| Home | `/` | Link utili, icone configurabili, reparti, scadenze e quadro della stagione. |
| Drive del team | `/drive` | File e cartelle del Drive condiviso, operazioni sui file e spazio Google utilizzato. |
| Agenda e Delivery | `/agenda` | Calendario e lista di delivery ed eventi, modelli mensili e scadenze. |
| Pagina reparto | `/team/<id>` | Obiettivi, blocchi, riunioni, report, scadenze e cartella Drive del reparto. |
| Management · Panoramica | `/team/management` | Situazione operativa, sponsor, eventi, attività e file di Management. |
| Management · Pagina del reparto | `/team/management/pagina` | Pagina componibile con gli stessi strumenti degli altri reparti. |
| Management · Eventi | `/team/management/eventi` | Preparazione, checklist e resoconti degli eventi. |
| Management · Sponsor | `/team/management/sponsor` | Kanban, lista e schede delle trattative. |
| Management · Contratti | `/team/management/contratti` | Contratti, versioni e catalogo delle offerte. |
| Management · Template e Media | `/team/management/template` | Modelli email e risorse documentali. |
| Management · Bilancio | `/team/management/bilancio` | Registro costi, filtri, totali ed export CSV. |
| Impostazioni | `/impostazioni` | Link, informazioni sul workspace, export dati e archivio. |

Il selettore di stagione cambia il contesto dei dati operativi. Sono configurate le stagioni **2026 / 2027** e **2025 / 2026**. Le cartelle Google Drive sono condivise tra stagioni: cambiare stagione non cambia la destinazione dei file.

### Reparti

| Reparto | Identificativo |
| --- | --- |
| Scafo e terrazze | `scafo` |
| Management e Comunicazione | `management` |
| Materiali e Sostenibilità | `materiali` |
| Manufacturing e Cantiere | `manufacturing` |
| Foil e Controllo di Volo | `foil` |
| Elettronica e Data Analysis | `elettronica` |
| Shore Team e Logistica | `shore` |

Ogni reparto dispone di una pagina componibile e di una cartella Drive associata. Management include anche le sezioni operative dedicate.

## Funzionalità

### Home e collegamenti utili

- Collegamenti al sito, alla posta, ai media, alle delivery SuMoth, alle presentazioni, agli eventi e alle riunioni.
- Creazione e modifica di titolo, URL, categoria, reparto e icona dei link.
- Selettore di **18 icone**, oltre all'icona automatica basata sul contenuto.
- URL sconosciuti lasciati vuoti, da configurare con le destinazioni reali del team.
- Accesso alle pagine dei sette reparti e collegamento **File** alla sezione documenti del reparto.
- Scadenze aperte della stagione, con priorità e indicazione **Oggi** o **In ritardo**.

Il vecchio collegamento configurabile **Drive del reparto** è stato rimosso dall'interfaccia: i file sono gestiti direttamente nella sezione **File del reparto**.

### Pagine dei reparti ed editor a blocchi

Ogni pagina raccoglie la descrizione del lavoro, gli obiettivi, gli aggiornamenti e le risorse del reparto.

L'editor comprende nove tipi di blocco: **titolo, testo, elenco, checklist, link, tabella, immagine, richiamo e riunione**. Le immagini si inseriscono tramite URL; le tabelle sono blocchi semplici, senza formule da foglio di calcolo.

Per modificare una pagina:

1. Apri il reparto e premi **Modifica pagina**.
2. Digita `/` all'inizio di un blocco o di una nuova riga per aprire il menu dei tipi di contenuto. Puoi filtrarlo scrivendo, per esempio, `/riunione`.
3. Usa le frecce e Invio per selezionare; Esc chiude il menu. Nei titoli, paragrafi e checklist, Invio aggiunge un blocco e Maiusc+Invio va a capo nello stesso blocco.
4. Riordina, duplica o rimuovi i blocchi usando i controlli dell'editor.
5. Premi **Salva pagina**, disponibile sia all'inizio sia in fondo alla pagina.

La pagina conserva le **ultime 20 revisioni**, consultabili e ripristinabili. Il ripristino conserva anche la versione sostituita. L'editor avvisa quando si tenta di uscire con modifiche non salvate.

### Riunioni e report

Il pulsante **Nuova riunione** e il blocco `/riunione` permettono di registrare:

- Titolo, data e partecipanti.
- Ordine del giorno e verbale.
- Decisioni e azioni, con eventuali responsabili e scadenze descritti nel testo.

I verbali sono salvati nella pagina del reparto e inclusi nelle sue revisioni. Le azioni del verbale non generano automaticamente task, scadenze o eventi in agenda.

Ogni reparto dispone inoltre di **report e aggiornamenti** separati, con titolo, data, contenuto e link a materiale di supporto, filtrati per stagione e reparto.

### Scadenze, agenda e delivery

Il componente **Scadenze** è presente nella Home, nelle pagine reparto e nella panoramica Management. Mostra le attività aperte in ordine di data, inizialmente fino a sei voci, con la possibilità di espandere la lista.

- Creazione e modifica di scadenze con titolo, data, tipo, reparto, priorità, note e collegamenti.
- Reparto precompilato quando la scadenza viene creata dalla sua pagina.
- Priorità **Alta, Media o Bassa**.
- Stati: **Da fare → In preparazione → Da verificare → Consegnato / Pubblicato**.
- Collegamento alla prova di consegna o pubblicazione.
- Le attività completate e archiviate non compaiono tra le scadenze aperte.

**Agenda e Delivery** offre calendario mensile e vista lista, ricerca e filtri per tipo e reparto. Riunisce delivery ed eventi; gli eventi sono associati a Management. I verbali inseriti nelle pagine restano separati dal calendario.

I **modelli mensili** definiscono titolo, tipo di contenuto, giorno del mese, reparto e priorità. **Prepara il mese** mostra le attività da generare e le crea dopo conferma, senza duplicare quelle già generate. I giorni vengono adattati ai mesi più brevi; modificare un modello non riscrive le delivery dei mesi già preparati. La generazione è avviata dall'utente, senza un processo automatico in background.

### Sponsor e partnership

La gestione sponsor è centrata sulla prossima azione da svolgere, con **Kanban** e **vista lista**.

```text
Da contattare → Contatto avviato → In trattativa → Contratto → Attivo
```

Sono disponibili anche gli esiti **Sospeso** e **Non concluso**.

- Cambio fase tramite trascinamento delle schede o selettore.
- Ricerca e filtri delle trattative.
- Scheda con azienda, tipo di sponsor **Finanziario / Tecnico / Ibrido**, referente ed email.
- Contributo cash e valore delle forniture tecniche registrati separatamente.
- Prossima azione, data di follow-up, note, pitch e documenti.
- Storico delle attività e dei cambi di fase.
- Collegamenti ai contratti associati e apertura di Gmail per contattare il referente.
- Accesso alla libreria dei template email.

I valori registrati nelle schede sponsor descrivono la partnership: non costituiscono conferma dell'avvenuto incasso.

### Eventi

Creazione e gestione di eventi del team, presentazioni, attività promozionali, eventi con sponsor e riunioni.

- Titolo, tipo, data, luogo o link alla call, obiettivo e descrizione.
- Stati **Idea, In preparazione, Confermato, Concluso, Annullato**.
- Checklist di preparazione modificabile.
- Associazione a uno sponsor, link ai materiali e resoconto finale.
- Ricerca, filtro per stato e visualizzazione nell'agenda.
- Consultazione dei costi collegati all'evento.

### Contratti, offerte, template e media

**Contratti e offerte** comprende:

- Contratti di sponsorizzazione finanziaria, tecnica, ibrida o per eventi congiunti.
- Stati **Bozza, Inviato, Firmato, Annullato**.
- Data, collegamento al documento, note e associazione a sponsor o evento.
- Storico delle versioni del contratto.
- Catalogo delle offerte del team, con descrizione, condizioni e limiti.

**Template e Media** comprende:

- Modelli email per sponsor, eventi, contratti, presentazioni e media.
- Oggetto e testo con variabili nel formato `{nome_variabile}`.
- Compilazione delle variabili, anteprima modificabile e segnalazione di quelle ancora incomplete.
- Copia del messaggio e apertura della composizione in **Gmail del team**.
- Risorse documentali e materiali con titolo, categoria, link o allegato privato in Supabase Storage.

Le email si inviano da Gmail; il CRM non le invia autonomamente e non sincronizza la casella di posta. Gli allegati alla mail si aggiungono in Gmail. Il contenuto dei contratti si redige e si firma negli strumenti documentali del team.

### Drive condiviso e file dei reparti

La pagina **Drive del team** accede al Drive di `sapienzafoilingteam@gmail.com`. Il responsabile autorizza il collegamento Google iniziale; i membri attivi accedono con la sola sessione CRM, senza collegare individualmente un account Google.

Le stesse operazioni sono disponibili nella sezione **File del reparto** di ciascuna pagina, incluse la panoramica Management e la sua pagina componibile:

- Navigazione nelle cartelle e sottocartelle con percorso cliccabile.
- Ricerca per nome nella cartella corrente, vista lista o griglia e aggiornamento dei contenuti.
- Creazione di sottocartelle.
- Caricamento di uno o più file con **Carica file** o tramite **trascinamento diretto** nel gestore.
- Rinomina, sostituzione del contenuto e spostamento nel cestino con conferma.
- Download di file ed esportazione dei documenti Google in formati adatti.
- Anteprima di testo, immagini, PDF, audio e video supportati; gli altri formati possono essere scaricati o aperti su Google.
- Apertura dei documenti nell'editor Google per modificarne il contenuto.

Il caricamento avviene nella **cartella attualmente aperta**. Il limite dell'interfaccia è **100 MB per file** per upload e download; il trascinamento di intere cartelle non è supportato. L'esportazione dei documenti Google è soggetta ai limiti del servizio.

Ogni reparto ha una cartella identificata tramite il suo ID Google: la rinomina non interrompe l'associazione. La navigazione della pagina reparto parte da quella cartella e dalle sue sottocartelle. Le cartelle organizzano i contenuti; **tutti i membri attivi possono accedere a tutti i reparti**.

La pagina Drive principale mostra lo **spazio dell'account Google** utilizzato, il limite e lo spazio disponibile quando comunicati da Google, oltre al dettaglio di Drive e cestino. Il totale include anche Gmail e Google Foto. Il cestino si gestisce e si ripristina da Google Drive; il CRM non elimina definitivamente i file.

Client Secret, refresh token e access token Google rimangono sul server. Ogni richiesta al server verifica la sessione CRM e la membership attiva. Gli upload usano una sessione Google riservata al singolo caricamento, senza inviare un token OAuth Google al browser. L'apertura nell'editor Google richiede invece un account Google con i permessi sul documento.

Guida completa: [GOOGLE_DRIVE_SETUP.md](GOOGLE_DRIVE_SETUP.md).

### Bilancio

Il bilancio è un **registro condiviso delle spese della stagione**, con form di inserimento e tabella consultabile.

- Titolo, data, importo, categoria, reparto, evento, fornitore, persona che ha pagato o anticipato, ricevuta e note.
- Categorie: Materiali, Lavorazioni, Elettronica, Logistica, Eventi, Comunicazione, Altro.
- Ricerca per descrizione o fornitore e filtri per categoria, reparto e intervallo di date.
- Ordinamento per data, importo o titolo.
- Totale della stagione e totale delle righe filtrate.
- Importi memorizzati in centesimi per evitare errori di arrotondamento nei totali.
- Export **CSV delle righe filtrate**, apribile nei fogli di calcolo, con protezione dai valori interpretati come formule.

Non sono inclusi contabilità generale, saldo di cassa, riconciliazione bancaria, gestione dei rimborsi o contabilizzazione automatica dei contributi sponsor.

### Impostazioni e uso quotidiano

- Gestione dei collegamenti e delle loro icone.
- Informazioni sulla modalità di lavoro e sugli accessi.
- Elenco degli elementi archiviati e ripristino.
- **Esporta dati** per scaricare un backup JSON dei dati presenti nel workspace caricato.
- Tema **chiaro e scuro** e navigazione adattata a desktop e mobile.
- Etichette dei campi, controlli da tastiera, indicazioni di caricamento ed errori di salvataggio.

L'export JSON non include il contenuto dei file Google Drive o Supabase Storage e non è un backup completo del database. Non è presente un'importazione del backup dall'interfaccia.

## Accesso e permessi

L'accesso è riservato ai membri invitati:

1. Il responsabile invita l'email personale da **Supabase Authentication → Users → Invite user**.
2. Lo stesso account deve essere presente in `public.members` con `active=true`.
3. Il membro apre il link individuale ricevuto via email e sceglie una password di almeno **12 caratteri**.
4. Dagli accessi successivi usa **email e password**, senza richiedere ogni volta un magic link.

È disponibile **Password dimenticata?** per gli account esistenti. La registrazione pubblica deve essere disabilitata nel progetto Supabase, mantenendo attivo il provider Email.

La sola creazione dell'utente in Authentication o la verifica dell'email non concede accesso al CRM. Le policy RLS richiedono una membership attiva per i dati operativi e gli allegati privati. Il server Drive esegue la stessa verifica prima di contattare Google.

I membri attivi collaborano sui contenuti condivisi. Il campo `is_admin` permette la gestione della membership nelle policy database; inviti, attivazioni e revoche vengono attualmente gestiti dalla console Supabase, senza una schermata utenti nel CRM. Non sono implementati ruoli granulari di sola lettura o restrizioni per reparto.

Disattivare un membro blocca le nuove richieste autorizzate. Un URL Storage firmato già emesso o una sessione di upload Drive già autorizzata può rimanere utilizzabile fino alla sua scadenza o conclusione.

## Avvio locale

Prerequisiti: **Node.js 22 o successivo** e npm.

```sh
npm ci
npm run dev
```

Apri l'indirizzo indicato dal server, normalmente [http://127.0.0.1:3000](http://127.0.0.1:3000). Sono disponibili anche `Avvia-Workspace.command` per macOS e `Avvia-Gestionale.bat` per Windows.

Per avviare esplicitamente la demo, crea `.env.local` nella root del progetto:

```dotenv
NEXT_PUBLIC_DATA_MODE=mock
```

Riavvia il server dopo una modifica alle variabili. Per eseguire localmente la build di produzione:

```sh
npm run build
npm start
```

### Modalità demo

In assenza di `NEXT_PUBLIC_DATA_MODE=supabase`, il progetto usa i dati dimostrativi. Se la modalità Supabase è attiva ma mancano le credenziali, occorre completare la configurazione: non si passa automaticamente alla demo.

- I record iniziali sono esempi e non descrivono accordi, aziende o spese reali del team.
- I dati CRM della demo vengono salvati nel browser con la chiave `sft-workspace-demo-v1`, separatamente dai dati Supabase.
- La demo non è condivisa tra persone, browser o dispositivi.
- Il Drive demo usa file dimostrativi; caricamenti e modifiche rimangono in memoria nella vista aperta e non vengono salvati nel Drive reale o mantenuti dopo il ricaricamento.
- La demo Drive non mostra dati fittizi sullo spazio Google.
- Gli allegati Supabase Storage richiedono la modalità Supabase; nella libreria demo si possono usare link.
- I dati del prototipo originale non vengono importati automaticamente.

## Configurazione Supabase e Google Drive

### Variabili d'ambiente

Creare `.env.local` e inserire i valori del proprio ambiente. I seguenti sono **segnaposto**, non credenziali del progetto:

```dotenv
NEXT_PUBLIC_DATA_MODE=supabase
NEXT_PUBLIC_SUPABASE_URL=https://IL_TUO_PROGETTO.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=LA_CHIAVE_PUBBLICA

NEXT_PUBLIC_GOOGLE_DRIVE_ROOT_ID=root
GOOGLE_DRIVE_CLIENT_ID=IL_CLIENT_ID_GOOGLE
GOOGLE_DRIVE_CLIENT_SECRET=IL_CLIENT_SECRET_GOOGLE
GOOGLE_DRIVE_REFRESH_TOKEN=IL_REFRESH_TOKEN_GOOGLE
GOOGLE_DRIVE_TEAM_FOLDERS={"scafo":"ID_CARTELLA","management":"ID_CARTELLA","materiali":"ID_CARTELLA","manufacturing":"ID_CARTELLA","foil":"ID_CARTELLA","elettronica":"ID_CARTELLA","shore":"ID_CARTELLA"}
```

| Variabile | Scopo |
| --- | --- |
| `NEXT_PUBLIC_DATA_MODE` | `mock` per la demo, `supabase` per il workspace condiviso. |
| `NEXT_PUBLIC_SUPABASE_URL` | URL del progetto Supabase. |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Publishable key o anon key legacy; mai una service-role key. |
| `NEXT_PUBLIC_GOOGLE_DRIVE_ROOT_ID` | Root della pagina Drive: `root` per My Drive dell'account autorizzato. |
| `GOOGLE_DRIVE_CLIENT_ID` | Identificativo del client OAuth Web usato dal server. |
| `GOOGLE_DRIVE_CLIENT_SECRET` | Segreto OAuth, esclusivamente server. |
| `GOOGLE_DRIVE_REFRESH_TOKEN` | Autorizzazione rinnovabile dell'account Google del team, esclusivamente server. |
| `GOOGLE_DRIVE_TEAM_FOLDERS` | Mappa JSON degli ID delle cartelle dei sette reparti, generata dallo script di configurazione. |

I file `.env*`, i JSON `client_secret*.json` e la cartella `secrets/` sono esclusi da Git e dall'upload Vercel. Non salvare credenziali in documenti, screenshot o codice e non usare `NEXT_PUBLIC_` per i segreti Google.

### Supabase

Per configurare un **nuovo database**, applicare nell'ordine:

1. [202610010001_workspace.sql](supabase/migrations/202610010001_workspace.sql): schema, relazioni, policy, audit, salvataggi transazionali, stagioni/reparti e bucket privato.
2. [202610010002_link_icons.sql](supabase/migrations/202610010002_link_icons.sql): colonna delle icone dei link.

La prima migrazione è destinata a un database nuovo; non va rieseguita su quello operativo. I dati demo non vengono inseriti nel database. Configurare inoltre inviti, membership, provider Email, invio email e URL di ritorno.

In produzione, usare `https://crm.sapienzafoilingteam.com` come Site URL e tra le Redirect URLs di Supabase; mantenere l'indirizzo Vercel alternativo se utilizzato. In sviluppo autorizzare l'indirizzo locale effettivamente usato.

Per SQL di abilitazione/revoca, Storage e configurazione dettagliata, consultare [SUPABASE_SETUP.md](SUPABASE_SETUP.md), in particolare **Accesso su invito con password**.

### Google Drive

Il collegamento va configurato dal responsabile dell'account del team, non da ciascun membro:

1. Abilitare Drive API e configurare il client OAuth Web nel progetto Google Cloud.
2. Aggiungere `http://localhost:4387/callback` agli **URI di reindirizzamento autorizzati** del client.
3. Eseguire `node scripts/connect-drive.mjs /percorso/client_secret.json` e completare l'autorizzazione con l'account del team. Il comando salva i segreti in `.env.local` senza stamparli.
4. Eseguire `node --import tsx scripts/provision-drive.ts` per creare o riutilizzare le sette cartelle e salvare `GOOGLE_DRIVE_TEAM_FOLDERS`. Cartelle con nomi ambigui richiedono una verifica prima di procedere.
5. Configurare le variabili server su Vercel e distribuire nuovamente l'app.

La creazione delle cartelle è una procedura di configurazione, non avviene a ogni apertura del reparto. Il collegamento resta valido finché Google mantiene l'autorizzazione; revoche o scadenze richiedono un rinnovo dal responsabile. Per stato Testing, requisiti Google e dettagli operativi consultare [GOOGLE_DRIVE_SETUP.md](GOOGLE_DRIVE_SETUP.md).

## Dati, salvataggio e recupero

Il database comprende `members`, `teams`, `seasons`, `audit_log` e dodici collezioni operative:

| Collezione | Dati |
| --- | --- |
| `links` | Collegamenti e icone. |
| `pages` | Pagine dei reparti, blocchi, verbali e revisioni. |
| `reports` | Aggiornamenti dei reparti. |
| `sponsors` | Trattative, contatti, valori e attività. |
| `events` | Eventi, checklist e resoconti. |
| `deliveries` | Scadenze e consegne. |
| `costs` | Registro spese. |
| `contracts` | Contratti e versioni. |
| `templates` | Modelli email. |
| `offers` | Catalogo offerte. |
| `documents` | Risorse e riferimenti agli allegati. |
| `recurrences` | Modelli delle delivery mensili. |

I dati CRM vengono salvati attraverso `apply_changes`, che applica il gruppo di modifiche in una transazione e controlla la versione dei record. Un conflitto con un salvataggio di un altro membro interrompe l'intero gruppo di modifiche: ricaricare e confrontare i contenuti prima di riprovare. L'audit è scritto dal database e non è modificabile dai membri.

L'archiviazione nasconde i record dalle viste operative senza eliminarli; il ripristino si effettua da Impostazioni. Le revisioni delle pagine e le versioni dei contratti forniscono inoltre uno storico specifico.

Gli allegati della libreria usano il bucket privato **`team-documents`**: PDF, DOCX, PPTX, PNG, JPEG e WebP, fino a **20 MB**. L'apertura avviene tramite URL firmato valido per 60 secondi. Archiviare il record non elimina il file.

I file Google Drive restano sul servizio Google, separati dal database e da Supabase Storage. Per un recupero completo servono backup distinti di **database, Storage e Drive**; l'export JSON del CRM non li sostituisce.

## Deploy

L'app è configurata per **Vercel**, progetto `nannipy-projects/sft-crm`, con installazione `npm ci` e build `npm run build`.

Da una checkout già collegata al progetto Vercel:

```sh
vercel deploy --prod --yes --scope nannipy-projects
```

Configurare le variabili negli ambienti Vercel interessati, senza caricare i file `.env`. Una modifica delle variabili richiede un nuovo deploy. `scripts/configure-vercel-env.cjs` gestisce la configurazione iniziale delle tre variabili pubbliche Supabase; le variabili Google vanno configurate separatamente.

Il push su GitHub conserva il codice; il deploy è un passaggio distinto, salvo una configurazione esplicita dell'integrazione Git di Vercel. Un rollback dell'app ripristina il codice precedente, ma non annulla modifiche ai dati o ai file.

Riferimenti di pubblicazione e verifiche effettuate: [DEPLOYMENT.md](DEPLOYMENT.md).

## Verifiche

```sh
npm run typecheck
npm test
npm run build
```

La suite comprende attualmente **17 test**, dedicati a:

- Importi, totali, CSV e generazione delle delivery mensili senza duplicati.
- Link iniziali, URL e conservazione delle risorse esistenti.
- Schema SQL, policy, revoca membri, audit, salvataggi atomici e conflitti su Postgres in memoria tramite PGlite.
- Query, export, upload, download e cestino Google Drive.
- Autenticazione del server Drive, membership attiva, rifiuto di destinazioni estranee e assenza di token nelle risposte.
- Creazione e riutilizzo delle sette cartelle, rinomina e gestione dei nomi duplicati.

I test usano Postgres in memoria e risposte Google simulate: non sostituiscono le prove di Supabase Auth/Storage, email e browser autenticato in produzione. Sono state inoltre verificate sul Drive reale le sette cartelle e le operazioni di upload/download con un file temporaneo, poi spostato nel cestino. L'interfaccia reparto è stata provata in demo per caricamento e creazione sottocartella; il trascinamento non è stato simulato nel browser di anteprima.

## Struttura del progetto

| Percorso | Responsabilità |
| --- | --- |
| `app/` | Layout, routing Next.js e stili globali. |
| `app/api/drive/route.ts` | API server Drive protetta dalla sessione CRM. |
| `components/workspace-app.tsx` | Navigazione e composizione delle pagine. |
| `components/views.tsx` | Home, reparti, sponsor, eventi, agenda, bilancio e librerie. |
| `components/page-block-editor.tsx` | Editor a blocchi e menu `/`. |
| `components/drive-view.tsx` | Gestore Drive principale e incorporato nei reparti. |
| `components/deadlines.tsx` | Scadenze della Home e dei reparti. |
| `components/auth-panel.tsx` | Accesso, password iniziale e recupero. |
| `components/provider.tsx` | Stato del workspace, stagione e salvataggi. |
| `components/record-editor.tsx` | Form delle collezioni operative. |
| `components/link-icons.tsx` | Icone configurabili dei collegamenti. |
| `components/ui/` | Componenti locali shadcn/ui, con Button e Dialog basati su Radix. |
| `lib/model.ts` | Tipi, reparti, stagioni, importi, CSV e ricorrenze. |
| `lib/repository.ts` | Persistenza demo/Supabase e allegati Storage. |
| `lib/workspace-defaults.ts` | Collegamenti iniziali mancanti, senza sovrascrivere quelli esistenti. |
| `lib/mock.ts`, `lib/drive-demo.ts` | Dati dimostrativi CRM e Drive. |
| `lib/google-drive.ts` | Operazioni REST ed export Google Drive. |
| `lib/drive-browser.ts` | Collegamento del browser all'API CRM e upload diretto. |
| `lib/drive-server.ts`, `lib/drive-proxy-policy.ts` | Verifica membri, rinnovo token e restrizioni delle richieste Google. |
| `lib/drive-team-folders.ts` | Associazioni e configurazione delle cartelle reparto. |
| `scripts/` | Configurazione OAuth, cartelle reparto e variabili Vercel. |
| `supabase/migrations/` | Schema e migrazioni SQL. |
| `tests/` | Test del modello, del database e del Drive. |
| `public/` | Logo, immagini e caratteri; provenienza in [ASSETS.md](public/ASSETS.md). |

Tecnologie: **Next.js App Router, React, TypeScript, Tailwind CSS, Radix/shadcn/ui, Lucide, next-themes e Supabase JS**. Google Drive viene chiamato tramite REST. Per i test si usano Node.js, tsx e PGlite.

Documenti complementari: [piano del CRM](PIANO_CRM_SFT.md), [configurazione Supabase](SUPABASE_SETUP.md), [configurazione Drive](GOOGLE_DRIVE_SETUP.md), [deploy](DEPLOYMENT.md) e [verifiche iniziali](VERIFICA.md). Il piano e i resoconti iniziali possono descrivere fasi precedenti: per le funzionalità attuali fare riferimento a questo README e al codice.

### Prototipo e script separati

Il prototipo originale è conservato in `index.html`, `app.js` e `styles.css`, con [README_PROTOTIPO.md](README_PROTOTIPO.md) e avvio Windows `Avvia-Prototipo.bat`. Non viene usato dalle pagine Next.js e i suoi dati non vengono migrati automaticamente.

`SFT_Gmail_Drive_Sync.gs` è uno script Google Apps Script separato per elaborare email e allegati sponsor. La sua presenza nella repository **non significa che sia attivo**: richiede una configurazione autonoma su Google e non è collegato alla persistenza Supabase del CRM. La dashboard attuale non usa questo script per aggiornare automaticamente trattative o documenti.

## Limiti attuali

- Editor a blocchi semplice, senza collaborazione simultanea carattere per carattere, formule o database componibili alla Notion.
- I dati condivisi vengono caricati all'apertura; non è presente una sottoscrizione Realtime alle modifiche degli altri membri. Ricaricare per vedere aggiornamenti effettuati da un altro utente.
- Inviti, attivazioni e revoche dalla console Supabase; nessuna gestione utenti completa nell'interfaccia.
- Nessuna sincronizzazione Gmail, invio email automatico, firma elettronica o invio automatico delle delivery ai canali social/SuMoth.
- Il bilancio tiene traccia dei costi; gli importi sponsor restano separati dagli incassi effettivi.
- Drive: ricerca limitata alla cartella corrente, niente upload di intere cartelle, gestione del cestino o supporto completo ai collegamenti rapidi; i documenti Google si modificano nel loro editor.
- I sette reparti e le stagioni sono definiti nel codice e nel database: per aggiungerne altri occorre allineare la configurazione e, per i reparti, le cartelle Drive.
- Nessuna importazione automatica del prototipo o del backup JSON. File e dati richiedono una strategia di backup separata.

## Contribuire

Mantenere separati dati demo e dati reali, non versionare credenziali e documentare eventuali nuove variabili o migrazioni. Per modifiche al comportamento eseguire i controlli pertinenti e verificare l'interfaccia coinvolta. Aggiornare questo README quando cambiano funzionalità, permessi o configurazione; distinguere sempre ciò che è implementato da ciò che è previsto nel piano.
