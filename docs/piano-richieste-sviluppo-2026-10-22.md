# Piano di implementazione delle richieste di sviluppo CRM

Data: 22 ottobre 2026. Stato: proposta di lavoro, nessuna implementazione o modifica ai dati di produzione effettuata durante l'analisi.

## 1. Obiettivo e raccomandazione

Implementare tutte e tre le richieste presenti nella sezione **Richieste di sviluppo**, mantenendo dati, accessi e integrazioni esistenti durante la transizione.

La sequenza raccomandata è:

1. definire e introdurre identità, amministrazione e permessi;
2. estendere il calendario a più sorgenti, partendo dal calendario Cantiere;
3. portare l'aggiornamento sponsor in un servizio richiamabile dal CRM e da un processo automatico;
4. collegare i calendari personali con consenso esplicito e prove sui dispositivi;
5. estendere il rilascio dopo un pilota con utenti di reparti diversi.

Le tre richieste sono collegate. Gli account determinano chi può aggiornare gli sponsor, chi può amministrare un calendario e quali calendari proporre a una persona. Il calendario personale dipende dalla corretta separazione tra eventi generali, di reparto e riservati.

Non serve riscrivere il gestionale, cambiare framework o introdurre microservizi. La base consigliata resta Next.js, Supabase Auth/Postgres e integrazioni Google sul server. I processi lunghi devono però essere riprendibili e avere uno stato persistente, senza dipendere dal fatto che qualcuno tenga aperta una pagina.

## 2. Richieste lette dal database reale

Lettura del 22 ottobre 2026, circa le 19:22, ora di Roma. La ricerca ha incluso i report di Elettronica senza filtro di stagione o archiviazione: sono presenti tre record, tutti richieste strutturate valide, attive e della stagione 2026/2027. Tutte hanno priorità Normale, stato In programma e risposta sviluppatori vuota. Autore indicato: Matteo Valabrega.

| Riferimento | Titolo originale | Bisogno da soddisfare |
| --- | --- | --- |
| R1 — `8766bfe2-e3dd-4210-88e6-8526b277a841` | Calendari dedicati | Ogni reparto deve vedere nel CRM calendario generale e calendario specifico; riutilizzare il calendario Cantiere già citato nella richiesta. |
| R2 — `758d7530-f7e7-44e2-ae4e-3e931c9f3923` | Richiesta aggiornamento dati sponsor | Un pulsante deve acquisire le ultime interazioni email e aggiornare le schede sponsor, mantenendo l'aggiornamento automatico. |
| R3 — `c2e9598a-3445-4436-90c5-30a9a3970589` | Creazione di account personali | Accesso con email istituzionale e password personale; accessi differenziati; modifiche attribuibili; calendario personale aggiornato con gli eventi di interesse. |

R2 parla di aggiornamento manuale come **avvio manuale dell'importazione da email**. L'aggiunta manuale di una nota esiste già nella scheda sponsor: non risolve da sola questa richiesta.

## 3. Cosa esiste davvero oggi

### 3.1 Accesso e identità

- `components/auth-panel.tsx` implementa email/password, primo accesso con scelta password e recupero password.
- `lib/repository.ts` verifica utente Supabase e appartenenza attiva a `members`.
- La tabella `members` prevede `display_name`, `active` e `is_admin`, ma non appartenenze ai reparti o autorizzazioni per modulo.
- Le migrazioni locali consentono ai membri attivi lettura e modifica dei normali dati operativi. Nascondere una voce del menu non cambierebbe queste autorizzazioni.
- Il database reale contiene **2 utenti confermati, entrambi Gmail, 2 membri attivi e nessun membro con `is_admin=true`**. Questo non dimostra se le credenziali siano condivise tra persone: va accertato prima della transizione.
- Le impostazioni Auth pubbliche confermano registrazione libera disabilitata e conferma email richiesta. Configurazione SMTP, recapito istituzionale e lista redirect non sono stati verificati.
- Esistono `created_by`, `updated_by` e `audit_log` nelle tabelle operative. Il log reale contiene **374 voci**; solo **20 delle ultime 100** hanno `actor_id` valorizzato. I vecchi record senza autore non permettono una ricostruzione certa della persona responsabile.

### 3.2 Calendario

- `lib/calendar-server.ts` sincronizza eventi e delivery con un solo calendario, identificato da una costante: `sapienzafoilingteam@gmail.com`.
- Esistono protezione dalla concorrenza, confronto di impronte dei dati, controllo delle versioni, ID stabili e collegamenti in `calendar_links`.
- Il database reale contiene **13 collegamenti Calendar**, tutti alla stessa sorgente: 12 eventi e 1 delivery. Dei 12 eventi CRM, 6 sono archiviati e nessuno ha un reparto associato.
- La vista Agenda ha un filtro reparto, ma non è una configurazione di calendari Google distinti. Le pagine reparto non incorporano oggi il calendario generale più quello specifico.
- La sincronizzazione salta le serie ricorrenti generiche e le loro eccezioni. La riunione settimanale dei reparti è un caso speciale: una serie Google e una rappresentazione locale generata dal codice.
- L'attuale modello eventi ha una data e orari nello stesso giorno: non rappresenta completamente eventi a cavallo della mezzanotte o di più giorni.
- La lettura diretta del calendario principale ha restituito **18 elementi, inclusi 11 cancellati e 1 serie ricorrente**. Esistono anche eventi con inizio/fine in giorni diversi: la gestione multigiorno è quindi un caso reale da preservare.
- Il feed pubblico generale risponde HTTP 200 e contiene 7 eventi: la sua pubblicità è stata verificata in lettura anonima. Non è stata svolta una revisione del contenuto dei singoli eventi pubblicati.
- Il token Google attuale include `calendar.events.owned`, ma non gli scope per elencare i calendari. `calendarList.list` ha restituito HTTP 403. **Esistenza, ID, proprietà e permessi del calendario Cantiere non sono stati verificati.** Il 403 non significa che quel calendario sia assente.
- Il browser avvia la sincronizzazione nelle viste Agenda/Recruiting. Esiste un endpoint per esecuzioni automatiche, ma `vercel.json` non contiene una pianificazione cron; non è stata verificata una configurazione esterna di quel processo.

### 3.3 Sponsor e posta

- Il CRM permette note manuali, cambio fase e cronologia delle attività.
- Nei sorgenti applicativi esaminati non c'è un servizio Gmail che il pulsante richiesto possa già richiamare.
- È presente una configurazione locale di automazione Codex chiamata **Aggiorna sponsor e partnership da Gmail**, indicata come ACTIVE e pianificata alle 09:00 di Roma. Legge Gmail tramite plugin e aggiorna direttamente il CRM con cautele su prove, deduplicazione e versioni. La configurazione non prova l'esito dell'ultima esecuzione: quello non è stato verificato.
- `scripts/legacy/SFT_Gmail_Drive_Sync.gs` è materiale storico: scrive su Sheets/Drive, applica etichette e usa euristiche. Non è il servizio di sincronizzazione dell'applicazione attuale e non va semplicemente collegato a un bottone.
- Il database reale ha **84 schede sponsor non archiviate e 187 attività**. Le attività hanno solo `at` e `text`: gli eventuali riferimenti Gmail sono testo, non chiavi strutturate con vincoli di unicità.
- Le credenziali applicative ispezionate non includono un collegamento Gmail dedicato al nuovo servizio. Il plugin disponibile in Codex e un'applicazione pubblicata sono due ambienti distinti: il sito non acquisisce automaticamente l'accesso Gmail del plugin.

### 3.4 Confini della verifica

L'analisi ha confrontato dati reali, codice locale, migrazioni e test. Non ha attestato che il codice pubblicato coincida con questo checkout, né ricostruito dal catalogo Postgres tutte le policy realmente applicate. Prima del rilascio serviranno confronto dello schema live, verifica della versione distribuita e test con utenti reali a privilegi differenti.

Controlli locali eseguiti: **72 test superati**, nessun errore TypeScript. Non è stata eseguita una nuova build o una prova browser delle funzionalità proposte, che ancora non esistono.

## 4. Decisioni progettuali consigliate

| Decisione | Scelta consigliata | Alternativa e limite |
| --- | --- | --- |
| Identità | Estendere Supabase Auth e mantenere gli UUID esistenti. | Un secondo sistema di login complicherebbe recupero password, sessioni e audit. |
| Attivazione | Invito nominativo a email istituzionale verificata, con eccezioni amministrative esplicite. | Registrazione aperta con approvazione è possibile, ma introduce spam e lavoro di moderazione non richiesti. |
| Permessi | Appartenenze a uno o più reparti e capacità per modulo, applicate in DB e API. | Un solo campo reparto non copre persone trasversali e recruiting. |
| Calendari | Registro delle sorgenti Google e un calendario canonico per ogni evento. | Copiare ogni evento nel generale e nel reparto aumenta duplicati e conflitti. |
| Integrazione personale | Calendari condivisi aggiornati alla fonte; collegamento Google facoltativo per aggiungerli automaticamente all'account. | Copie nel calendario personale richiedono sincronizzazione per utente e gestione di modifiche/cancellazioni molto più complesse. |
| Aggiornamento sponsor | Un unico servizio persistente, avviabile da bottone e pianificazione. | Un semplice refresh della pagina legge solo i dati già nel database. |
| Interpretazione email | Importazione verificabile delle attività; proposte separate per decisioni commerciali ambigue. | Cambiare lo stato commerciale con sole parole chiave produce errori difficili da notare. |
| Processi automatici | Stato e cursori in Postgres; esecuzione a piccoli lotti con ripresa. | Una richiesta HTTP lunga, oppure una cache solo in memoria, non dà garanzie tra riavvii. |

Queste sono proposte per rendere il lavoro eseguibile. Non costituiscono autorizzazione a cambiare ruoli, condividere calendari o inviare inviti durante questa analisi.

## 5. R3 — Account personali e autorizzazioni

### 5.1 Esperienza utente

1. Un amministratore inserisce nome, email istituzionale, reparto/i e autorizzazioni iniziali.
2. La persona riceve l'invito e sceglie una password personale; non esistono password assegnate o leggibili dal responsabile.
3. Il profilo mostra nome, reparti, impostazioni calendario e stato del collegamento personale.
4. Le sezioni disponibili e le azioni ammesse corrispondono ai permessi effettivi.
5. Il responsabile può cambiare reparto, sospendere accesso e vedere lo storico delle operazioni amministrative.
6. Il cambio stagione non cancella l'identità; le assegnazioni operative possono avere una stagione di validità.

L'email istituzionale va verificata sia nell'invito sia nella conferma. Il dominio ammesso va configurato dopo aver accertato gli indirizzi effettivamente usati dal team, senza presumere che tutti abbiano lo stesso suffisso. Il dominio da solo non dà diritto di entrare nel CRM. Alumni, docenti e collaboratori esterni richiedono eccezioni nominative.

### 5.2 Matrice iniziale proposta

I ruoli sono cumulabili; amministrare gli account non deve dare implicitamente accesso a tutte le valutazioni dei candidati.

| Profilo/capacità | Spazi comuni e reparti | Sponsor, contratti e bilancio | Recruiting | Account e configurazioni |
| --- | --- | --- | --- | --- |
| Membro | Legge i contenuti condivisi; modifica il proprio reparto e le attività assegnate. | Nessun accesso ai dettagli riservati, salvo abilitazione. | Nessuno. | Profilo proprio e preferenze. |
| Responsabile reparto | Come membro; gestisce operazioni e calendario del reparto. | Solo capacità aggiunte esplicitamente. | Solo capacità aggiunta esplicitamente. | Nessuna autoassegnazione di privilegi. |
| Management | Accesso comune; scrittura Management. | Gestione sponsor; contratti e bilancio possono essere capacità distinte. | Non automatico. | Nessuna amministrazione generale implicita. |
| Recruiter | Accesso comune in base al proprio reparto. | Non automatico. | Candidati e colloqui autorizzati. | Nessuna amministrazione generale implicita. |
| Amministratore | Gestione organizzativa e possibilità di attribuire capacità. | Accesso operativo se assegnato. | Accesso operativo se assegnato. | Inviti, sospensioni, reparti, sorgenti, processi e diagnostica. |

Assunzione di prodotto: preservare la collaborazione consentendo la lettura delle pagine tecniche condivise tra reparti e limitando la modifica. Per spazi che richiedono anche lettura riservata, introdurre una visibilità esplicita; non derivarla automaticamente dal semplice `team_id`.

### 5.3 Modello e punti di controllo

Proposta di dati, da tradurre in migrazioni additive dopo il confronto con lo schema live:

- `members`: conservare l'identità esistente, aggiungere solo gli attributi di profilo realmente necessari.
- `member_team_assignments`: membro, reparto, stagione o validità, ruolo operativo.
- `member_capabilities`: abilitazioni ristrette come `sponsors.write`, `finance.read`, `recruiting.manage`, con ambito quando necessario.
- Registro delle operazioni amministrative e degli inviti, distinto dai contenuti operativi.
- Funzioni centrali di autorizzazione nel DB e corrispondenti controlli server per le API.

Le autorizzazioni non devono dipendere da `user_metadata`, modificabile dall'utente. Usare dati amministrati nel database; eventuali claim nel token sono un'ottimizzazione, con una strategia di aggiornamento/revoca. [Riferimento Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security).

La revisione deve comprendere:

- SELECT, INSERT, UPDATE e archiviazione/ripristino, comprese le chiamate REST dirette;
- `apply_changes`: nessun cambio di reparto, stagione o visibilità che permetta di aggirare i controlli;
- chiavi esterne tra sponsor, contratti, costi ed eventi, per evitare collegamenti verso record non accessibili;
- export e archivio delle Impostazioni: un utente non deve esportare dati che non può leggere;
- `audit_log`: contiene intere copie prima/dopo dei record; la policy attuale nei sorgenti è troppo ampia per un futuro CRM con aree riservate;
- richieste sviluppo: sono report di Elettronica, ma devono restare presentabili da tutti; gestione stato/risposta riservata agli sviluppatori abilitati;
- `withDefaultLinks` nel provider: oggi può scrivere link durante il caricamento; separare inizializzazione amministrativa e letture degli utenti;
- API Drive, file caricati su Storage, allegati, URL firmati e file Recruiting;
- sottoscrizioni Realtime, cache delle collezioni e svuotamento dei dati quando i permessi cambiano;
- processi con chiave server: verificare il chiamante prima dell'accesso privilegiato e applicare ambiti espliciti. La chiave server non applica le normali RLS.

Per Drive non basta nascondere la cartella nel browser. Il proxy attuale lavora con l'account del team e controlla soprattutto l'appartenenza generale e i file Recruiting. Le nuove operazioni devono identificare il file/cartella autorizzato sul server, controllare gli antenati necessari e gestire spostamenti, ricerca, upload ed export. Evitare un proxy generico in cui il client scelga liberamente query o cartelle fuori ambito.

Per le richieste sviluppo, associare il nuovo autore all'UUID verificato della sessione e distinguere i campi compilabili dal richiedente da stato/risposta degli sviluppatori. Il nome libero attuale resta come dato storico; un valore `kind` nel JSON inviato dal browser non deve concedere da solo accesso in scrittura ai report riservati di Elettronica. Una tabella dedicata o un'operazione server vincolata è preferibile a una generica eccezione alle policy di tutti i report.

### 5.4 Transizione e audit

1. Identificare il proprietario del primo account amministrativo e predisporre un'attivazione controllata dal proprietario del progetto: oggi nessuno può amministrare `members` dalle normali policy.
2. Impedire la rimozione accidentale dell'ultimo amministratore attivo; tenere una procedura di recupero esterna al normale menu.
3. Se gli account esistenti sono personali, valutarne il cambio email mantenendo UUID e storia. Se sono condivisi, creare nuovi utenti nominativi e poi ritirare gli accessi condivisi.
4. Non assegnare retroattivamente a una persona le modifiche fatte da un account condiviso o senza autore.
5. Distinguere nei nuovi log `persona`, `processo automatico` e `amministrazione`, con iniziatore e ID esecuzione quando disponibili.
6. Esporre agli utenti una cronologia leggibile solo dei record autorizzati. Non serve rendere consultabile il contenuto integrale del log amministrativo a tutto il team.
7. Sospensione: bloccare le richieste successive anche con token già emesso; invalidare il contesto autorizzativo in memoria e gestire la revoca dei collegamenti Google personali.

Il trasporto degli inviti è un requisito operativo: verificare SMTP, mittente, redirect e consegna su una casella istituzionale prima degli inviti in massa. Il servizio email predefinito Supabase ha limitazioni che lo rendono inadatto come presupposto per il rollout del team. [Documentazione SMTP](https://supabase.com/docs/guides/auth/auth-smtp).

### 5.5 Criteri di accettazione

- Invito, primo accesso e recupero password funzionano su casella istituzionale reale.
- Un membro non può promuoversi o scrivere fuori ambito né dall'interfaccia né chiamando direttamente API/DB.
- Uno stesso membro può appartenere a due reparti senza account duplicati.
- Un utente sospeso non recupera dati con una sessione già aperta; una variazione di permessi elimina i dati non più consentiti dalla cache.
- Sponsor, allegati Recruiting, audit ed export rispettano la matrice.
- Modifiche nuove mostrano autore o processo; quelle storiche rimangono fedeli ai dati disponibili.

## 6. R1 — Calendari generale e di reparto

### 6.1 Esperienza proposta

- In ciascun reparto, una sezione calendario mostra **Generale + Reparto** con legenda e interruttori separati.
- Agenda permette di scegliere generale, uno o più reparti, oppure “I miei reparti”. Una vista globale di più calendari resta una somma di sorgenti, senza duplicare gli eventi nel calendario generale Google.
- Ogni evento indica provenienza, orario, eventuale ricorrenza, luogo e possibilità di modifica.
- Eventi esterni in sola lettura hanno un collegamento “Apri in Google Calendar”. Gli eventi modificabili espongono azioni coerenti con ruolo e proprietà della sorgente.
- I calendari non configurati mostrano uno stato chiaro; un errore Google non svuota i calendari già caricati.
- Anche Management deve avere il calendario coerente con la sua panoramica dedicata, non solo con la pagina tecnica standard.

### 6.2 Registro delle sorgenti e proprietà dei dati

Introdurre `calendar_sources` con ID Google univoco, nome, ambito generale/reparto/riservato, reparto, fuso, modalità lettura/scrittura, stato e regola di pubblicazione. Non inserire credenziali o link ICS segreti nei metadati leggibili dagli utenti.

Per Cantiere, prima acquisire ID e verificare che l'account collegato sia proprietario o abbia il livello richiesto. Riutilizzarlo; non creare un calendario omonimo solo perché manca nell'elenco API. Collegare un ID manuale può evitare lo scope di elenco, ma non risolve eventuali permessi insufficienti sugli eventi.

Separare tre concetti:

1. **reparto responsabile** dell'attività;
2. **visibilità** del contenuto;
3. **calendario canonico** su cui viene pubblicato.

Un evento organizzato da Cantiere può interessare tutto il team. Un colloquio può riguardare un reparto e restare riservato. Un campo reparto, da solo, non rappresenta queste differenze.

Gli eventi CRM esistenti mantengono calendario e collegamenti attuali durante la prima migrazione. Nessuno spostamento massivo automatico; l'eventuale riclassificazione va proposta come elenco verificabile con gestione di conflitti e vecchie sottoscrizioni.

### 6.3 Sincronizzazione di più calendari

L'estensione deve intervenire oltre la costante del calendario:

- rendere la sorgente un parametro esplicito del servizio e delle operazioni autorizzate;
- persistire stato, lock, ultimo successo e avanzamento per sorgente;
- sostituire la cache singola che oggi viene svuotata con `calendarFeeds.clear()`; nessuna interferenza tra sorgenti;
- mantenere l'identità composta calendario + evento Google e una regola univoca sulla destinazione canonica del record CRM;
- impedire che un evento importato da un reparto venga esportato nel calendario generale alla sincronizzazione successiva;
- includere le nuove informazioni di destinazione nel confronto pertinente, senza trattare un cambio di calendario come un normale aggiornamento di testo;
- distinguere cancellazione dell'evento, perdita di permessi e calendario scollegato; solo la prima può produrre l'archiviazione prevista;
- rendere esplicito lo spostamento tra calendari: non è equivalente a creare una seconda copia e lasciare la prima;
- gestire timeout, rate limit, scritture parziali e ripresa. Un errore di una sorgente non deve bloccare tutte le altre.

Il modello temporale va esteso con inizio e fine completi, eventi giornalieri con fine esclusiva e fuso originale. Gli orari locali attuali restano compatibili durante la transizione. Non appiattire un evento di più giorni alla sola data iniziale.

### 6.4 Ricorrenze e vista delle occorrenze

Per la prima versione completa, Google rimane l'editor delle serie arbitrarie. Il CRM visualizza correttamente serie, singole eccezioni e cancellazioni. La modifica avanzata di una serie nel CRM può essere una successiva estensione, non è necessaria alla richiesta di consultare i calendari.

Proposta: mantenere uno specchio dei record Google, con serie ed eccezioni, e una proiezione delle occorrenze nell'intervallo richiesto dalla vista. Si può iniziare usando l'espansione lato Google per intervalli limitati e memorizzare il risultato; non trasformare ogni occorrenza in una delivery modificabile.

Tenere separati il cursore di sincronizzazione dei record sorgente e la cache delle occorrenze per intervallo. Le chiavi devono considerare calendario, serie e `originalStartTime`; una riunione spostata non deve apparire due volte. Google documenta espressamente questa identità per le eccezioni. [Ricorrenze](https://developers.google.com/workspace/calendar/api/guides/recurringevents).

Il `syncToken` deve avanzare solo dopo la completa acquisizione delle pagine e il salvataggio dei dati. Alla scadenza HTTP 410 effettuare una ricostruzione della sorgente interessata, preservando i record locali e distinguendo la ricostruzione da una cancellazione. [Sincronizzazione incrementale](https://developers.google.com/workspace/calendar/api/guides/sync).

La riunione settimanale oggi generata dal codice deve avere un'unica rappresentazione nella nuova vista: quando proviene da Google, escludere il duplicato sintetico. Le modifiche e le cancellazioni fatte sul calendario devono arrivare alla vista reparto.

### 6.5 Visibilità e pubblicazione

Il calendario generale attuale è pubblico. Un controllo di accesso nel CRM non può rendere privato un evento già pubblicato lì.

- Separare esplicitamente eventi pubblicabili e dati interni.
- Calendari di reparto privati per impostazione iniziale; eventuale pubblicazione è una decisione esplicita.
- Le valutazioni candidati restano nel Recruiting protetto. Se serve un blocco orario comune, il suo contenuto deve essere minimo e intenzionale; non esportare automaticamente dettagli riservati.
- Per operazioni server privilegiate, selezionare solo sorgenti e campi ammessi. Non riutilizzare un endpoint utente con ambito parziale per una sincronizzazione globale.
- Non inviare automaticamente inviti Google a partecipanti come effetto collaterale della sincronizzazione.

### 6.6 Scope Google e alternative

La soluzione più contenuta è configurare sorgenti esistenti per ID e lavorare solo con i permessi necessari. Per una schermata che elenca i calendari occorre autorizzare anche `calendar.calendarlist.readonly`. Se il calendario Cantiere è solo condiviso con l'account del team, `calendar.events.owned` potrebbe non bastare: verificare proprietà e scegliere lo scope eventi adeguato. Creazione di calendari e gestione ACL sono capacità ulteriori, non implicite nel permesso di modificare eventi. [Scope Google Calendar](https://developers.google.com/workspace/calendar/api/auth).

Alternative valutate:

- **Solo filtro reparto nel calendario unico:** economico, ma non soddisfa il collegamento dei calendari Google distinti esistenti.
- **Embed Google nelle pagine:** veloce per consultazione, meno controllabile per privacy, login, mobile e integrazione con delivery; utile come fallback temporaneo.
- **Sorgenti Google nel CRM:** più lavoro iniziale, ma soddisfa consultazione integrata, permessi, riuso dei calendari e futuro collegamento personale. Scelta consigliata.

### 6.7 Criteri di accettazione

- Cantiere vede generale + calendario Cantiere verificato, e può spegnere ciascuna sorgente.
- Un evento creato nel calendario Cantiere resta su quella sorgente dopo più sincronizzazioni; non compare anche come copia nel generale.
- Serie settimanale, eccezione spostata, cancellazione singola, evento giornaliero e multigiorno sono corretti anche nel cambio d'ora.
- Un calendario non autorizzato o non disponibile dà un errore circoscritto, senza archiviazioni improprie.
- I collegamenti attuali e gli eventi esistenti mantengono la loro identità.
- Il job automatico aggiorna i dati anche senza browser aperto, con stato consultabile.

## 7. R2 — Pulsante “Aggiorna da email” per gli sponsor

### 7.1 Esperienza proposta

In “Sponsor e partnership”, vicino a “Nuova trattativa”:

- **Aggiorna da email**, visibile agli utenti abilitati;
- ultimo aggiornamento riuscito e stato corrente del collegamento;
- avanzamento persistente, consultabile anche dopo aver chiuso e riaperto la pagina;
- esito comprensibile: attività aggiunte, schede aggiornate, elementi da verificare ed errori;
- risultato distinto “Nessuna novità” quando non ci sono nuovi scambi.

Un secondo clic durante un'esecuzione mostra il processo già attivo. La conclusione aggiorna solo le raccolte interessate e mantiene filtro, ordinamento e scheda aperta. Se una persona sta modificando una scheda, l'importazione non deve cancellarne la bozza.

Un'azione “Aggiorna questa azienda” può riusare lo stesso servizio con ambito ristretto, dopo il primo rilascio. Non serve un'infrastruttura diversa.

### 7.2 Servizio unico e processo persistente

Proposta di interfacce applicative:

- `POST /api/sponsors/sync`: verifica permesso, acquisisce o riusa il job, restituisce `202` e ID esecuzione;
- `GET /api/sponsors/sync/<run-id>`: mostra stato e riepilogo accessibile al chiamante;
- endpoint o worker separato per elaborare i lotti, autenticato come processo;
- pianificazione automatica che usa lo stesso motore e lo stesso lock del pulsante.

L'invio `202` non basta a far continuare il lavoro: serve un esecutore reale. Per il volume iniziale usare una coda di job in Postgres e un processo pianificato/invocato con autenticazione, che lavori entro il limite temporale della piattaforma e riprenda dal cursore. Verificare frequenza e limiti del piano di hosting. Passare a una coda gestita solo se volume e tempi lo rendono necessario.

Stati: in coda, in lettura, in elaborazione, completato, completato con elementi da verificare, parziale/riprendibile, fallito. Salvare distintamente l'ultimo tentativo e l'ultimo successo.

### 7.3 Collegamento Gmail

Serve un consenso Google dedicato per la casella del team, con credenziale conservata sul server, separata dal collegamento Calendar. Per leggere i contenuti usare lo scope minimo appropriato, normalmente `gmail.readonly`; non è necessario richiedere invio, modifica di etichette o gestione bozze.

`gmail.readonly` è classificato da Google come scope ristretto. Prima di stimare il go-live, verificare il tipo di applicazione OAuth, l'eventuale eccezione applicabile e i requisiti di verifica/valutazione per dati elaborati sul server. Non presumere che una casella `@gmail.com` sia un'app interna al dominio universitario. [Scope Gmail](https://developers.google.com/workspace/gmail/api/auth/scopes), [requisiti Google](https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification).

Il collegamento attuale del plugin può continuare a sostenere il processo esistente durante lo sviluppo. Non costituisce però una credenziale riutilizzabile liberamente dal sito.

### 7.4 Acquisizione e qualità delle informazioni

1. Primo recupero controllato delle conversazioni aziendali, usando i riferimenti delle 84 schede e una finestra iniziale verificabile. La finestra di due mesi dell'automazione attuale è una base per recuperare le novità, non una prova che non esistano conversazioni precedenti.
2. Leggere i thread pertinenti completi, compresi messaggi inviati e risposte in thread separati; escludere bozze non inviate, recruiting, newsletter e notifiche di account.
3. Identificare azienda attraverso indirizzi, alias, dominio e collegamenti già confermati. Un dominio generico, un distributore o una conversazione con più aziende non consente un'associazione automatica certa.
4. Registrare ID messaggio, thread, timestamp effettivo, mittente/destinatari essenziali e riferimento all'evidenza. Non usare la data dell'importazione come data dell'interazione.
5. Aggiungere automaticamente attività verificabili per i messaggi nuovi e associati con certezza.
6. Conservare note manuali, importi, accordi e decisioni più recenti. Non riscrivere interi campi narrativi a ogni sincronizzazione.
7. Distinguere messaggio inviato, risposta automatica, risposta concreta, rifiuto esplicito e mancata consegna. Un bounce non è un rifiuto commerciale; supporto tecnico o uno sconto non sono automaticamente una sponsorizzazione attiva.
8. Per variazioni di stato, scadenza o prossimo passo non determinate con certezza, creare una proposta con prova e possibilità di accettarla o respingerla. L'importazione delle altre attività prosegue.
9. Creare nuove schede solo quando l'associazione e il contesto partnership sono chiari; aziende potenziali o omonime restano da verificare.

Se si usa un modello linguistico per sintetizzare conversazioni, la sua uscita è una proposta validata, non una chiamata diretta al database. Le email sono contenuto non attendibile: eventuali istruzioni nel testo o negli allegati non possono cambiare le regole del processo. Valutare dati inviati al fornitore, minimizzazione e conservazione; il primo importatore può funzionare anche senza sintesi automatica, con estratti verificabili e revisione.

### 7.5 Modello dati e concorrenza

Proposta:

- `sponsor_email_messages`: casella, Gmail message ID e thread ID, dati essenziali ed evidenza; unicità casella + messaggio;
- collegamenti messaggio/sponsor separati, per consentire una conversazione con più controparti senza duplicare il messaggio;
- attività strutturate con origine manuale/email, autore o processo, riferimento messaggio e data;
- `sponsor_sync_runs`: stato, iniziatore, cursore, conteggi, errori sintetici;
- `sponsor_sync_state`: checkpoint Gmail e lock;
- `sponsor_update_proposals`: differenze proposte, evidenza, versione base e decisione di revisione.

La cronologia JSON esistente va conservata. Migrare in modo additivo e riconciliare i link Gmail già presenti prima di importare: altrimenti i primi messaggi strutturati raddoppierebbero le 187 attività storiche. Non inferire collegamenti incerti da un testo simile.

L'inserimento dell'evidenza, dell'attività e dell'aggiornamento accettato deve essere atomico per unità di lavoro. Se la versione dello sponsor cambia, rileggere e riconciliare le aggiunte; non ripetere un aggiornamento con la versione nuova ignorando la modifica della persona.

Avanzare il checkpoint solo dopo aver salvato ciò che consente una ripresa senza perdere messaggi. Per la sincronizzazione incrementale usare la cronologia Gmail con fallback: un `historyId` scaduto può restituire HTTP 404 e richiede un nuovo recupero, sempre deduplicato. [Sincronizzazione Gmail](https://developers.google.com/workspace/gmail/api/guides/sync).

Limitare contenuti sensibili memorizzati, renderizzare il testo in modo sicuro e non aprire o eseguire allegati durante l'importazione. Il link Gmail può richiedere accesso alla casella originale: il CRM deve comunque offrire evidenza sufficiente agli utenti autorizzati, senza promettere che ogni link sia apribile da tutti.

### 7.6 Passaggio dall'automazione attuale

1. Documentare le regole del processo esistente e preservarle nel nuovo servizio.
2. Far lavorare il nuovo importatore in anteprima, senza scritture, su un campione noto e poi sull'insieme rilevante.
3. Confrontare risultati, duplicati, associazioni e campi preservati.
4. Eseguire un pilota con scritture controllate e rilettura delle schede.
5. Coordinare il passaggio a un unico autore delle scritture. Il vecchio processo non usa automaticamente i nuovi lock: un lock nel nuovo servizio non lo protegge dalla vecchia automazione.
6. Solo dopo il collaudo, sospendere o adattare la vecchia automazione e attivare la pianificazione definitiva del servizio comune.

Per il rollback non basta riaccendere il vecchio processo: verificare quali messaggi ha già acquisito il nuovo sistema e come il vecchio riconosce le attività strutturate. Evitare un periodo in cui entrambi scrivono le stesse novità.

### 7.7 Criteri di accettazione

- Un clic importa una nuova risposta reale di prova e aggiorna la scheda corretta.
- Ripetere il clic o eseguire il job automatico non produce altre attività per lo stesso messaggio.
- Una nota manuale contemporanea sopravvive e un conflitto è visibile.
- Un bounce, un autoresponder e un rifiuto hanno classificazioni diverse; nessun “Attivo” senza prova adeguata.
- Un'interruzione a metà riprende senza perdere o duplicare interazioni.
- La pagina distingue nessuna novità, credenziale scaduta, limite temporaneo e lavoro parziale.
- Nessuna operazione di invio email o modifica bozze è necessaria al servizio.

## 8. R3 — Aggiornamento del calendario personale

Questa parte completa la richiesta account, ma dipende dal registro calendari di R1.

### 8.1 Due livelli espliciti

**Livello iniziale:** nel profilo, elenco dei calendari pertinenti e azione per aggiungerli. Dopo l'iscrizione, gli eventi continuano ad aggiornarsi dalla sorgente. È un risultato utile, ma non va presentato come aggiunta completamente automatica al primo login.

**Completamento dell'automatismo richiesto:** la persona collega facoltativamente il proprio Google Calendar; dopo consenso e verifica dell'accesso alle sorgenti, il CRM può aggiungere i calendari generale e dei reparti scelti alla sua lista. Non deve leggere tutti gli eventi privati personali né creare copie di ogni evento.

L'accesso al CRM con password non autorizza modifiche sull'account Google personale. La API `calendarList.insert` richiede un'autorizzazione dell'utente con scope dedicato; inoltre aggiungere una sorgente alla lista non concede da solo accesso a un calendario privato. [API CalendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert).

### 8.2 Comportamento e ciclo di vita

- Preferenze: generale, propri reparti e calendari ulteriori consentiti. Appartenenza al reparto e preferenza di sottoscrizione restano concetti distinti.
- Token personali cifrati, server-side, con chiave di cifratura gestita e procedura di scollegamento.
- Verificare separatamente account CRM e account Google collegato: possono avere email diverse; nessuna sostituzione silenziosa dell'identità del membro.
- Per calendari privati, concedere accesso soltanto alle persone autorizzate e revocarlo all'uscita. Le ACL sono una configurazione ulteriore rispetto alle RLS del CRM.
- Non eliminare eventi personali. La rimozione automatica deve riguardare soltanto sottoscrizioni gestite dal CRM, riconoscibili come tali; non quelle aggiunte autonomamente dall'utente.
- Il calendario generale, finché pubblico, resta leggibile anche a un ex membro: togliere la sottoscrizione non revoca l'accesso pubblico. I contenuti che richiedono revoca effettiva devono risiedere in sorgenti private.
- Rispettare i limiti dell'account universitario sulle applicazioni esterne. Un blocco dell'amministratore Google non deve impedire l'uso ordinario del CRM.
- Per Apple/Outlook, prevedere sottoscrizione ICS appropriata. Se il feed è personale/privato, URL revocabile con token conservato come credenziale, senza cache pubblica o log dell'URL completo.
- I calendari esterni possono aggiornarsi con ritardi propri del client. Non promettere sincronizzazione immediata o notifiche identiche su ogni dispositivo.

### 8.3 Criteri di accettazione

- Un membro di due reparti vede la selezione corretta e non riceve copie duplicate degli eventi.
- Dopo consenso personale Google, le sorgenti vengono aggiunte senza toccare eventi privati.
- Una modifica alla fonte arriva sia al CRM sia alla vista Google personale.
- La revoca del collegamento e la sospensione del membro bloccano accessi futuri gestiti dal CRM; non si promette di cancellare copie già scaricate dal dispositivo.
- Prova reale su Google Calendar web e almeno un telefono; prova della sottoscrizione ICS sul client alternativo scelto.

## 9. Sequenza esecutiva, dipendenze e stime

Le stime sono intervalli preliminari di **giornate-persona di lavoro concentrato**, non scadenze di calendario. Includono sviluppo e verifiche mirate; escludono attese OAuth, recapito inviti, decisioni sui ruoli e coordinamento degli utenti. Sono riferite alla soluzione descritta, con lettura delle ricorrenze ed editor avanzato lasciato a Google.

| Fase | Contenuto | Dipende da | Stima | Uscita verificabile |
| --- | --- | --- | --- | --- |
| F0 | Confronto schema/deploy, decisioni sugli accessi, identificazione Cantiere, verifica SMTP/OAuth, dataset di collaudo | — | 1–2 gg | Matrice e configurazioni operative definite, nessuna supposizione sui collegamenti. |
| F1 | Primo amministratore, profili, inviti, appartenenze multiple, gestione membri | F0 | 2–4 gg | Accessi nominativi funzionanti e transizione documentata. |
| F2 | Autorizzazioni DB/API, Drive/Storage, audit, export, cache e richieste sviluppo | F1 | 4–6 gg | Matrice collaudata anche con chiamate dirette e tentativi negativi. |
| F3 | Registro sorgenti, estensione multi-calendario, ricorrenze/multigiorno, stato persistente, vista reparto/Agenda | F0; F2 per rollout riservato | 4–6 gg | Pilota Cantiere senza duplicati o regressioni sul generale. |
| F4 | Collegamento Gmail, importatore, job, deduplicazione, riconciliazione storica, bottone e risultati | F0; F2 per rollout | 5–8 gg | Aggiornamento manuale/automatico con lo stesso servizio e passaggio dal vecchio processo. |
| F5 | Preferenze, collegamento Google personale, sottoscrizioni e revoca, fallback ICS | F1–F3 | 2–4 gg | Flusso personale verificato sul web e su dispositivo. |
| F6 | Pilota trasversale, test integrazione, documentazione operativa e rilascio graduale | F2–F5 | 2–3 gg | Evidenze di accettazione per R1, R2 e R3. |

Totale preliminare: **20–33 giornate-persona**. Prevedere un margine del 20–30% se le verifiche iniziali rivelano differenze di schema, policy Google o casi storici problematici. L'attesa per eventuali verifiche Google non è stimabile da questo checkout.

Queste dimensioni non sono una somma di tre bottoni: la parte principale è rendere affidabili permessi e sincronizzazioni. Una volta fissati i controlli comuni, F3 e F4 possono essere sviluppate indipendentemente, senza condividere migrazioni concorrenti o fare due rollout sulle stesse integrazioni.

Ordine dei risultati fruibili:

1. Account nominativi e gestione accessi.
2. Calendario Cantiere con generale nella pagina reparto.
3. Pulsante sponsor e aggiornamento automatico comune.
4. Collegamento personale automatico facoltativo, con alternativa per altri client.

La scoperta OAuth Gmail va fatta subito in F0, anche se F4 arriva dopo: è il principale rischio di attesa esterna.

## 10. Registro dei rischi

| Rischio | Impatto | Riduzione del rischio e comportamento in errore |
| --- | --- | --- |
| Tutti esclusi dal CRM durante il cambio ruoli | Alto | Primo amministratore e recupero verificati prima delle restrizioni; pilota; impedire perdita dell'ultimo amministratore. |
| Restrizioni solo nel menu | Alto | RLS, API, Storage, proxy Drive, audit/export e test su chiamate dirette. |
| Dati interni in calendario pubblico | Alto | Separazione sorgenti, politica di pubblicazione, confronto dei dati prima dell'export. |
| Interazioni sponsor perse o duplicate | Alto | Vincoli su message ID, migrazione storica, transazioni e ripresa dei job. |
| Vecchia automazione e nuovo servizio si sovrascrivono | Alto | Anteprima, cutover esplicito, unico autore delle scritture e rollback coordinato. |
| Email attribuita all'azienda o stagione sbagliata | Alto | Alias confermati, thread completi, log delle associazioni, casi dubbi in revisione; nessun routing soltanto per data. |
| Stato commerciale dedotto male | Alto | Evidenza e validazione; preservare decisioni manuali, distinguere supporto/sconto/sponsorizzazione. |
| Eventi duplicati tra generale e reparto | Alto | Sorgente canonica, identità composta e regole di pubblicazione; migrazione senza ricopie massive. |
| Serie o orari sbagliati | Medio/alto | Eccezioni e cancellazioni, fine esclusiva, multigiorno e prove sul cambio d'ora. |
| Token Google revocato, scope o proprietà insufficienti | Medio/alto | Diagnostica per collegamento; ricollegamento; conservare dati precedenti e non interpretare 403 come cancellazione. |
| Timeout o rate limit | Medio | Lotti, checkpoint, tentativi progressivi, esito parziale e ripresa; cursore mai avanzato su lavoro perso. |
| Inviti non consegnati | Medio | SMTP e prova reale istituzionale prima del rollout; reinvio controllato e limiti di frequenza. |
| Dati già caricati restano visibili dopo revoca | Alto | Versione del contesto permessi, svuotamento cache, chiusura delle sottoscrizioni e nuova verifica server/DB. |
| Costi o requisiti OAuth sottostimati | Medio/alto | Verifica preliminare, scope minimi e niente dipendenza dal plugin come backend del sito. |
| Storico senza autore reinterpretato come certo | Medio | Etichette fedeli a origine disponibile, nessuna attribuzione retroattiva inventata. |

## 11. Verifica e rilascio

### Ambiente di collaudo

Usare database di test e calendari/casella dedicati o un insieme di dati esplicitamente controllato. Non provare migrazioni distruttive sui dati reali e non usare il calendario pubblico come ambiente di esperimento.

Il backup JSON attuale del CRM è utile per i dati operativi, ma non comprende da solo Auth, ruoli, Storage, segreti, configurazioni Google o tutte le nuove tabelle. Preparare un recupero coerente con le modifiche effettive e provarlo in ambiente isolato.

### Test richiesti

1. **Database:** matrice lettura/scrittura, autoescalation, revoche, cambio reparto/visibilità, transazioni, audit autorizzato, vincoli contro duplicati e migrazioni con dati esistenti.
2. **API:** sessioni mancanti/scadute, utenti sospesi, ambiti non consentiti, input modificati, chiamate concorrenti e nessuna esposizione di credenziali.
3. **Calendari:** due sorgenti, stesso ID remoto in sorgenti diverse, nuovo evento, modifica concorrente, cancellazione, errore 403/410/429, paginazione, riavvio e spostamento esplicito di destinazione.
4. **Tempo:** serie con eccezione spostata/cancellata, riunione dei reparti senza doppioni, evento giornaliero, fine esclusiva, multigiorno e ora legale/solare.
5. **Sponsor:** ripetizione dell'import, thread separati della stessa azienda, inoltri, più aziende nel thread, bozze, bounce, risposte automatiche, rifiuti, stato ambiguo e cronologia storica già importata.
6. **Concorrenza:** una persona modifica una nota mentre arriva un'email; due clic; job manuale insieme a quello automatico; interruzione tra evidenza e applicazione.
7. **Interfaccia:** desktop e telefono, ruolo senza permessi, cambio account e reparto, mantenimento delle bozze, progressi persistenti, errori e azioni accessibili da tastiera.
8. **Prove esterne:** invito su email istituzionale, calendario Cantiere reale, email di prova reale e sottoscrizione personale su dispositivo. I mock non sostituiscono queste verifiche.

### Rilascio e recupero

- Migrazioni additive e compatibilità con i client aperti; applicare le nuove restrizioni solo quando il codice e le assegnazioni sono pronti.
- Confrontare lo schema live e verificare gli indici/permessi prima del deploy.
- Abilitazioni separate per account/permessi, sorgenti calendario, sponsor sync e collegamento personale.
- Pilota con amministratore, membro Cantiere, Management, persona con due reparti e utente privo di accessi speciali.
- Per il calendario, iniziare con lettura e confronto; attivare scritture solo dopo aver verificato identità e destinazioni.
- Per sponsor, iniziare con anteprima e poi un solo processo di scrittura.
- Se compaiono perdite di visibilità, duplicati o dati pubblicati impropriamente: fermare l'esportazione/importazione interessata, conservare i job e riconciliare le differenze prima di ripartire.
- Una disabilitazione della funzionalità non deve allargare i permessi. Non usare come rollback delle RLS il ritorno indiscriminato all'accesso di tutti a tutto.
- Correggere dati importati tramite provenienza e versioni, senza ripristinare un'intera scheda sopra modifiche manuali successive.

Una richiesta passa a **Completata** solo dopo verifica del comportamento richiesto nell'ambiente pubblicato e, dove necessario, nell'account/dispositivo esterno. “Codice scritto”, “test locale superato” e “collegamento personale verificato” sono risultati distinti.

## 12. Decisioni da fissare prima dell'implementazione dipendente

Non servono per proseguire l'analisi; servono al momento di configurare accessi e sistemi esterni.

| Decisione | Proposta di partenza | Conseguenza |
| --- | --- | --- |
| Chi è il primo amministratore? | Proprietario identificato, con secondo referente di recupero. | Evita di attribuire arbitrariamente privilegi a uno dei due account attuali. |
| Quali email istituzionali e quali eccezioni? | Inviti nominativi, domini verificati e deroghe esplicite. | Permette studenti, alumni e collaboratori senza apertura a tutto il dominio. |
| Cosa è leggibile tra reparti? | Pagine tecniche condivise; modifica per reparto; aree sensibili abilitate separatamente. | Determina RLS, Drive, audit, export e navigazione. |
| Qual è il calendario Cantiere? | Riutilizzare quello esistente dopo verifica di ID e proprietà. | Decide scope, accesso e possibilità di modifica. |
| Quali eventi possono essere pubblici? | Solo eventi approvati per il calendario pubblico; reparti privati come impostazione iniziale. | Impedisce che i nuovi permessi CRM siano aggirati da Google Calendar pubblico. |
| Quale account personale collegare? | Google facoltativo; alternativa ICS; autenticazione CRM indipendente. | Completa l'automatismo senza richiedere lettura della vita privata dell'utente. |
| Quali campi sponsor possono essere aggiornati automaticamente? | Attività certe automatiche; decisioni commerciali dubbie proposte per revisione. | Conserva velocità senza sovrascrivere accordi e decisioni manuali. |
| Quale processo scriverà dopo il pilota? | Servizio applicativo unico per pulsante e pianificazione. | Richiede passaggio coordinato dall'automazione esterna esistente. |

## 13. Mappa dei sorgenti per l'implementazione

| Area | Sorgenti principali attuali | Lavoro previsto |
| --- | --- | --- |
| Login e contesto | `components/auth-panel.tsx`, `components/provider.tsx`, `lib/repository.ts` | Profilo, contesto permessi, transizione identità, invalidazione cache. |
| Persistenza e schema | `lib/model.ts`, `supabase/migrations/202610010001_workspace.sql` | Migrazioni additive, autorizzazioni e audit coerente. Non modificare retroattivamente le migrazioni già applicate. |
| Caricamento per vista | `lib/workspace-resources.ts`, `components/workspace-app.tsx` | Dipendenze calendario nelle pagine reparto, caricamenti e navigazione autorizzati. |
| File | `app/api/drive/route.ts`, `lib/drive-server.ts`, `lib/drive-proxy-policy.ts`, `lib/recruiting-drive-policy.ts`, `lib/repository.ts` | Ambiti server dei file, Storage e allegati coerenti con i permessi. |
| Agenda | `components/views/agenda.tsx`, `components/views/team.tsx`, `components/views/overview.tsx` | Vista generale/reparto riusabile, scelta sorgenti e provenienza. |
| Sincronizzazione calendario | `lib/calendar-server.ts`, `lib/calendar.ts`, `components/calendar-sync.tsx`, `app/api/calendar/route.ts`, `app/api/calendar/cron/route.ts` | Più sorgenti, modello temporale completo, job/stato e controlli per ambito. |
| Riunioni ricorrenti | `lib/calendar-recurring.ts`, `lib/department-resources.ts` | Compatibilità della serie esistente e rimozione dei doppioni nella proiezione. |
| Sponsor | `components/views/sponsors.tsx`, modello `Sponsor` | Bottone, esiti e nuove attività strutturate con riconciliazione della cronologia. |
| Richieste sviluppo | `lib/feature-requests.ts`, `components/views/feature-requests.tsx` | Conservare invio condiviso e gestione riservata con i nuovi permessi. |
| Export/archivio | `components/views/settings.tsx` | Dati autorizzati e recupero adeguato al nuovo schema. |
| Verifiche | `tests/database.test.ts`, `tests/member-access.test.ts`, `tests/calendar.test.ts`, `tests/calendar-recurring.test.ts`, `tests/workspace-resources.test.ts` | Estendere casi di sicurezza, concorrenza e sincronizzazione; nuovi test per account e sponsor. |

Durante l'implementazione seguire `AGENTS.md` e la documentazione Next.js installata. Per questa analisi sono state consultate anche le guide locali su sicurezza dei dati e Route Handlers; i nuovi servizi devono verificare autorizzazione sul server e restituire solo i dati necessari.
