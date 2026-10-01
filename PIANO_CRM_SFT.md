# Sapienza Foiling Team — Dashboard stagionale e CRM

**Data:** 1 ottobre 2026  
**Versione:** 0.3 — piano e stato della prima implementazione  
**Stato:** frontend implementato in modalità demo; schema e repository Supabase predisposti, progetto online ancora da creare  
**Stack scelto:** Next.js, React, TypeScript, Supabase, shadcn/ui, temi light e dark.

## 1. Obiettivo e scelte confermate

Una dashboard condivisa per organizzare il lavoro della stagione, accedere alle risorse, descrivere l'avanzamento dei sottoteam e gestire operativamente comunicazione, eventi e sponsor. Il bilancio è un registro semplice dei costi sostenuti.

### Decisioni recepite

| Punto | Scelta |
|---|---|
| Dimensioni | Circa 10 utenti abituali, fino a circa 30 utenti occasionali |
| Accesso ai contenuti | Tutti i membri del CRM possono accedere alle sezioni; responsabilità condivise nella prima versione |
| Organizzazione | Lavoro per stagione, obiettivi, aggiornamenti e report dei sottoteam |
| Pagine reparti | Una pagina componibile per ogni sottoteam, ispirata a Notion |
| Area più sviluppata | Management e Comunicazione: eventi, sponsor, contratti, template, media e bilancio |
| Sponsor | Kanban: Da contattare → Contatto avviato → In trattativa → Contratto → Attivo |
| Bilancio | Form di inserimento e tabella simile a Excel, per i costi affrontati |
| Email | Collegamento diretto a Gmail e template; sincronizzazione rimandata |
| Delivery | Report, blog post e post Instagram mensili, con calendario e stato |
| Frontend | Next.js e React; componenti shadcn/ui, interpretando così “ChatCM” |
| Aspetto | Vicino al sito del team, con light e dark |

Queste risposte sostituiscono le precedenti ipotesi su assegnatari obbligatori, ruoli specialistici, contabilità articolata e frontend Vite.

### Dettagli ancora da completare, senza fermare il progetto

- URL reali di Drive, riunioni, sito, media e destinazioni SuMoth.
- Nome e date della stagione iniziale.
- Modalità di accesso: account personali a invito è la proposta; scegliere Google o email in configurazione.
- Riferimento grafico confermato: [sapienzafoilingteam.com](https://sapienzafoilingteam.com). Verificare la grafica attuale prima del prototipo.
- Conservare provvisoriamente il nome “Scafo e terrazze”, come comunicato; etichette dei reparti modificabili per correggere eventuali trascrizioni.
- Verifica dei dati reali e allegati da importare dal prototipo.

## 2. Base attuale e cosa recuperare

La copia in questa cartella contiene HTML, CSS, JavaScript e uno script Google Apps Script. Non contiene ancora un progetto Next.js o un backend Supabase: Next.js è lo stack scelto per la nuova applicazione.

Il prototipo ha anagrafiche sponsor, tipi cash/tecnico/ibrido, pitch, note, link Gmail/Drive, documenti e import/export. Salva aziende nel `localStorage` e allegati in IndexedDB. I contenuti dei browser non sono inclusi nei file sorgente del progetto.

Da recuperare: logo, identità visiva, anagrafiche verificate, note, documenti e link. Da sostituire: pagina unica molto lunga, form sempre esposto e scambio di backup per lavorare insieme.

Due limiti importanti emersi dall'ispezione:

1. `computeFinancials()` considera gli importi degli sponsor “Vinto” come cash raccolto. Il nuovo CRM deve chiamarli contributi concordati, senza presumere un incasso.
2. `exportBackupJSON()` non include i file IndexedDB. Per migrare serve un inventario e un trasferimento separato degli allegati.

Lo script Gmail/Drive e il parser email non diventano parte obbligatoria della prima versione. La loro installazione e il funzionamento reale non sono stati verificati. Questa valutazione è basata sul codice, non su un collaudo visuale completo.

## 3. Architettura delle pagine

### Navigazione

```text
Home
Sottoteam
  Scafo e terrazze
  Management e Comunicazione
  Materiali e Sostenibilità
  Manufacturing e Cantiere
  Foil e Controllo di Volo
  Elettronica e Data Analysis
  Shore Team e Logistica
Agenda e Delivery
Impostazioni
```

Dentro Management e Comunicazione:

```text
Panoramica · Pagina del reparto · Eventi · Sponsor
Contratti · Template e Media · Bilancio
```

Management mantiene la sua pagina componibile come gli altri reparti e aggiunge viste operative dedicate. Ogni vista ha un URL diretto; non è una sequenza di sezioni da raggiungere scorrendo una pagina enorme.

Sidebar su desktop, menu compatto su mobile; indicazione del reparto e della sezione corrente. Stagione selezionata nell'intestazione. Collegamenti diretti dalla Home a sponsor, eventi e costi, senza ripetere i dati in moduli separati.

## 4. Home: accessi rapidi e quadro della stagione

### Ordine dei contenuti

1. Identità del team e stagione corrente.
2. **Link utili:** sito, Gmail team, Drive media, calendario/eventi e SuMoth deliveries.
3. **Sottoteam:** nome, breve aggiornamento, accesso alla pagina, Drive e riunione.
4. **Prossime scadenze:** delivery, eventi e riunioni della settimana.
5. **Aggiornamenti recenti:** ultimi report o aggiornamenti pubblicati dai reparti.

La Home privilegia i collegamenti richiesti. I numeri degli sponsor e il dettaglio dei costi restano in Management; un richiamo sintetico può rimandare a quell'area.

### Schema indicativo

```text
Home                                  Stagione ▾   Tema ◐
Sito · Gmail · Drive media · Eventi · SuMoth

Sottoteam
Nome                 Ultimo aggiornamento     Pagina  Drive  Riunione
...

Prossime scadenze                    Aggiornamenti dei reparti
```

Link con etichette leggibili, icone secondarie e apertura esterna riconoscibile. Se manca un URL, mostrare “Da configurare”. I permessi sui Drive continuano a essere gestiti da Google.

## 5. Pagine dei sottoteam: componibili e orientate alla stagione

### Struttura iniziale comune

Ogni reparto parte da una pagina già utile:

- Titolo, breve descrizione e stagione.
- Collegamenti al Drive, alle riunioni e ai documenti principali.
- Obiettivi della stagione.
- “Cosa stiamo facendo”: attività correnti e avanzamento.
- Criticità, decisioni e prossimi passi.
- Aggiornamenti e report datati.

Questa è una struttura iniziale modificabile: il reparto può aggiungere, spostare o rimuovere sezioni. Il registro dei report rimane riconoscibile e consultabile per stagione.

### Editor minimo ispirato a Notion

Blocchi disponibili nella prima versione:

| Blocco | Uso |
|---|---|
| Testo e titoli | Descrivere attività, scelte e risultati |
| Elenchi | Organizzare informazioni |
| Checklist | Obiettivi e attività semplici |
| Link e documenti | Drive, report, presentazioni e risorse |
| Tabella semplice | Dati di lavoro del reparto, senza formule da foglio di calcolo |
| Immagine | Foto, schemi e risultati, con testo alternativo |
| Richiamo | Evidenziare una criticità o una decisione |

Azioni: “Aggiungi blocco”, modifica, duplica, sposta su/giù e rimuovi. Trascinamento eventualmente disponibile come scorciatoia; deve esserci un'alternativa da tastiera. Editor testuale mantenuto da una libreria esistente, da scegliere in prototipazione senza costruire un editor da zero.

L'ispirazione a Notion riguarda composizione e semplicità. Nella prima versione non servono database arbitrari, formule, pagine infinitamente annidate o collaborazione simultanea carattere per carattere.

### Salvataggio e collaborazione

Bozza locale durante la modifica, salvataggio esplicito, indicatore di modifiche non salvate e avviso prima di uscire. Controllo della versione della pagina: se un altro membro ha salvato, chiedere di ricaricare o recuperare la propria bozza prima di sovrascrivere. Storico delle revisioni e recupero dell'ultima versione precedente.

Report datati con autore e titolo, mantenuti nello storico anche a cambio stagione. Collegare un report a una delivery invece di crearne una seconda copia.

## 6. Management e Comunicazione: centro operativo

### Panoramica

Mostrare prima le cose da fare:

- Delivery imminenti o in ritardo.
- Eventi in preparazione e checklist incomplete.
- Sponsor da ricontattare e contratti da completare.
- Accessi rapidi a pitch, media kit, Gmail e Drive media.

Sotto: conteggi sponsor per fase, contributi concordati cash e tecnici distinti, costi della stagione. Nessuna assegnazione obbligatoria per lavorare: tutti collaborano; autore e data rendono leggibili gli aggiornamenti.

### Eventi: creazione, preparazione e chiusura

Lista e calendario degli eventi, con stato **Idea → In preparazione → Confermato → Concluso**; annullamento come esito separato.

Form iniziale: titolo, tipologia, obiettivo, data o periodo indicativo, luogo/link, descrizione. Tipologie proposte: evento team, presentazione, evento con sponsor, attività promozionale. Un'idea senza data definitiva rimane visibile nella lista ma non genera una falsa scadenza nel calendario.

Scheda evento:

- Informazioni principali e collegamenti.
- Checklist di preparazione: programma, spazio, materiali, barca/logistica, comunicazione, invitati e follow-up.
- Sponsor/contatti coinvolti e promesse concordate.
- Documenti, presentazioni e media.
- Costi collegati dal registro Bilancio.
- Resoconto finale, foto e risultati.

Creare una checklist da modello modificabile per tipo di evento. Persone coinvolte facoltative e multiple; nessun vincolo di proprietario unico. Riunioni semplici nell'Agenda, senza obbligare a compilare tutta una scheda evento.

## 7. Sponsor: Kanban confermato

Una card rappresenta una trattativa per stagione; l'azienda conserva anagrafica e storico delle collaborazioni. Contatti distinti dall'azienda, perché possono esserci più referenti.

| Fase | Significato | Prossima azione tipica |
|---|---|---|
| Da contattare | Azienda individuata | Preparare richiesta e contatto |
| Contatto avviato | Primo contatto realmente effettuato | Registrare risposta o follow-up |
| In trattativa | Dialogo attivo | Definire proposta e contropartite |
| Contratto | Formalizzazione dell'accordo | Preparare e raccogliere documento finale |
| Attivo | Collaborazione confermata | Seguire impegni, eventi e forniture |

Esiti “Non concluso” e “Sospeso” fuori dalle colonne principali, recuperabili con filtri. Archiviazione con storico, senza cancellare le aziende.

### Card e comandi

Card: azienda, tipo cash/tecnico/ibrido, prossima azione, data, importo richiesto quando disponibile. Persone coinvolte opzionali. Non segnalare come errore l'assenza di un responsabile.

Ricerca, filtri stagione/tipo/fase, selettore Kanban/Lista e “Nuova trattativa”. Filtro “Da seguire oggi”; nessuna vista “Le mie” obbligatoria nella prima versione. Su mobile lista compatta o selezione della fase. “Cambia fase” disponibile senza trascinare.

Creazione breve: azienda, tipo, contatto se noto, prossima azione facoltativa. Dettaglio con riepilogo, cronologia, proposta, contratti, documenti e impegni. Richiedere i dati solo nella fase in cui servono.

### Flusso

1. Cercare o creare azienda, evitando doppioni.
2. Scegliere template email e pitch; aprire Gmail.
3. Dopo l'invio reale, registrare il contatto e la data. Aprire Gmail non equivale a inviare.
4. Registrare risposte e call; aggiornare prossimo passo e scadenza.
5. Definire richiesta e contributo concordato cash/tecnico, con contropartite.
6. Preparare contratto dal template scelto e archiviare la versione finale.
7. Attivare la collaborazione con conferma esplicita; proposta iniziale: documento firmato o altra evidenza registrata accettata dal team.
8. Seguire pubblicità, eventi congiunti, forniture e altre attività promesse.

I contributi concordati non diventano automaticamente incassi. La prima versione non introduce un sistema di rate o riconciliazione bancaria.

## 8. Contratti, offerte e template

### Offerte del team

Catalogo modificabile di ciò che il team può proporre. Idee iniziali da validare, senza prezzi o disponibilità inventati:

- Visibilità del marchio sulla barca, dove consentita.
- Presenza su sito, presentazioni, materiali e contenuti social.
- Post dedicati e racconto delle collaborazioni.
- Eventi congiunti, presentazioni e incontri con gli studenti.
- Esposizione o dimostrazione della barca quando possibile.
- Collaborazioni tecniche con racconto di materiali, lavorazioni e risultati.

Ogni voce: descrizione, condizioni operative, materiali necessari e limiti. Possibilità di creare pacchetti semplici e modificabili. Una proposta usa una copia dei contenuti scelti: cambiare il catalogo non modifica accordi già conclusi.

### Libreria contratti

Modelli distinti per sponsor finanziario, tecnico/ibrido ed evento congiunto. Ogni modello contiene sezioni da compilare: parti, durata, contributo, contropartite, calendario, uso dei marchi e allegati. I testi definitivi e chi firma per il team devono essere forniti o validati dal team; il piano non presume accordi già approvati.

Contratti con stato **Bozza → Inviato → Firmato**, più annullato, titolo, azienda, trattativa/evento collegato, date e versioni dei documenti. Prima versione: collegamento a un modello Drive, duplicazione/modifica negli strumenti già usati e caricamento o link al risultato. Nessuna firma elettronica interna o generazione automatica di documenti complessi.

### Template email e media

Categorie: primo contatto sponsor, follow-up, invio proposta, invio contratto, invito evento, presentazione team, ringraziamento e richiesta materiali media.

Ogni template ha titolo, situazione d'uso, oggetto, corpo e variabili esplicite, come `{azienda}`, `{nome_contatto}`, `{evento}`, `{data}`, `{link_pitch}`. Anteprima modificabile; segnalare variabili non compilate. “Apri in Gmail” e “Copia testo” come alternativa. Allegati aggiunti manualmente in Gmail; nessuna promessa di allegare automaticamente file tramite un semplice link.

Area Media: link al Drive, pitch generale, media kit, loghi, presentazioni e risorse ufficiali. Conservare metadati e collegamenti; caricare in Storage solo i file che serve archiviare nel CRM.

## 9. Bilancio: registro dei costi, semplice come richiesto

Il titolo di navigazione rimane **Bilancio**; il contenuto è un registro delle spese sostenute. Non mostrare “saldo disponibile” senza avere un registro completo delle entrate.

### Form “Aggiungi costo”

Obbligatori: data, descrizione e importo positivo in euro. Stagione impostata dal contesto.

Facoltativi: categoria, sottoteam, evento, fornitore, chi ha anticipato/pagato, ricevuta o link al documento, note. Categorie iniziali modificabili: materiali, lavorazioni, elettronica, logistica, eventi, comunicazione e altro.

### Tabella

Colonne: data, descrizione, categoria, reparto, importo, evento, documento. Ricerca, ordinamento, filtri stagione/periodo/reparto/categoria, totale dei risultati filtrati e totale della stagione chiaramente distinti.

“Aggiungi costo”, modifica riga tramite form compatto, archivia con conferma e recupero, export CSV compatibile con Excel. Su telefono mostrare prima data, descrizione e importo; i dettagli si aprono dalla riga.

La somiglianza con Excel riguarda densità, leggibilità, ordinamento e facilità di inserimento. La prima versione non richiede formule libere, celle collaborative o importazione arbitraria di fogli.

### Affidabilità

Importi in centesimi interi o `numeric` Postgres, nessuna somma floating point. Totali solo su costi non archiviati. Storico di creazione e modifica con autore. Costi collegati a un evento o reparto rimangono una sola registrazione nel Bilancio.

Esempio: 120 € materiali + 80 € logistica = 200 € di costi. Filtro materiali = 120 €. Un accordo sponsor da 3.000 € non cambia questi totali; una fornitura tecnica non crea automaticamente una spesa.

Rimandati: preventivi, workflow acquisti, rimborsi approvati, budget multilivello, contabilità formale, incassi/rate, conti e sincronizzazione bancaria.

## 10. Agenda, delivery SuMoth e calendario editoriale

Un'unica Agenda aggrega eventi, riunioni e delivery. Le viste nelle altre pagine leggono gli stessi record.

Viste **Calendario mensile** e **Lista**, filtri per stagione, tipo, reparto e stato. Evidenziare scadenze imminenti/in ritardo; stato leggibile anche senza colore.

### Delivery

Campi: titolo, tipo (report/blog/Instagram/altro), scadenza, stagione, sottoteam facoltativo, priorità, stato, link di lavoro, note e prova di consegna/pubblicazione. Persone coinvolte opzionali.

Stati: **Da fare → In preparazione → Da verificare → Consegnato/Pubblicato**. Aggiungere il file non conclude la delivery: completamento esplicito con data e link/evidenza.

### Cadenza mensile

Template modificabile con le delivery ricorrenti concordate: report, blog post e post Instagram. Quantità e giorni non sono stati specificati: configurarli senza inventarli.

Comando “Prepara delivery del mese”: anteprima delle voci e delle date, poi creazione. Chiave univoca modello/stagione/mese per evitare duplicati se il comando viene ripetuto. Le modifiche a un modello non alterano i mesi già creati. Nessun cron necessario per iniziare.

Gli impegni verso sponsor possono essere collegati a eventi o delivery già presenti. Completare una delivery aggiorna la vista collegata senza creare un secondo task.

## 11. Utenti e Supabase

### Accesso condiviso

Circa 10–30 persone non richiedono una gerarchia articolata. Proposta iniziale: tutti i membri attivi possono leggere e modificare contenuti operativi. Account personali a invito per sapere chi ha aggiornato cosa. Il ruolo amministratore serve per inviti, revoche e configurazione, senza introdurre tesorieri o responsabili obbligatori.

Responsabilità condivisa non significa accesso pubblico: utente non autenticato o revocato non legge dati e allegati. Le assegnazioni future potranno essere introdotte senza modificare lo storico.

### Architettura

Next.js App Router + React + TypeScript, componenti shadcn/ui e tema chiaro/scuro; Supabase Auth, Postgres con RLS e Storage privato. Usare Server Components per letture iniziali e Client Components per editor, Kanban, calendario e form. Operazioni sensibili autorizzate lato server e nel database; evitare un secondo backend separato.

Sessioni secondo le indicazioni Supabase per Next.js; client browser/server distinti. Nessuna chiave segreta nel frontend. Controllo di membro attivo anche per richieste dirette ai dati.

### Modello dati essenziale

| Gruppo | Entità e relazione |
|---|---|
| Accessi | Profili collegati ad Auth; membership attiva e amministrazione |
| Organizzazione | Stagioni, sottoteam, link utili |
| Pagine | Pagina sottoteam per stagione, blocchi JSON versionati, revisioni |
| Report | Report datati del sottoteam, con contenuto/link e delivery facoltativa |
| Sponsor | Aziende → contatti; aziende → trattative per stagione; cronologia attività |
| Offerte e contratti | Catalogo offerte, contratti collegati a trattativa/evento, impegni e documenti |
| Comunicazione | Template email e riferimenti media |
| Eventi | Eventi, checklist e collegamenti a sponsor |
| Agenda | Riunioni, delivery, modelli mensili e collegamenti a impegni |
| Bilancio | Costi con stagione, reparto/evento facoltativo e ricevuta |
| Archiviazione | Documenti con metadati, URL Drive o percorso Storage |

Dati operativi strutturati in tabelle; JSON limitato ai blocchi delle pagine e ai semplici modelli/checklist. Non nascondere spese, sponsor e scadenze dentro il contenuto dell'editor.

### Integrità

- RLS basata sui membri attivi; modifica dei privilegi solo amministrativa.
- Foreign key, stati validi, importi positivi e chiavi contro duplicati.
- Timestamp, autore e versione sui record collaborativi.
- Storico e archiviazione per pagine, contratti e costi.
- Storage privato, limiti di file e accesso coerente con i membri attivi.
- Testo e blocchi renderizzati senza HTML arbitrario; URL validati.
- Migrazioni versionate, ambiente di prova e ripristino verificato per dati e file.
- Realtime facoltativo; controllo dei conflitti prima di aggiungere aggiornamenti in tempo reale.

Riferimenti: [Auth lato server](https://supabase.com/docs/guides/auth/server-side), [client SSR Next.js](https://supabase.com/docs/guides/auth/server-side/creating-a-client), [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [Storage access control](https://supabase.com/docs/guides/storage/security/access-control). Le fonti descrivono la piattaforma; questo modello dati è la proposta per SFT.

## 12. Design e componenti

Riferimento grafico confermato dall’utente: [sapienzafoilingteam.com](https://sapienzafoilingteam.com), con fedeltà visiva da verificare prima del prototipo. Durante l’implementazione il sito è stato verificato nel browser; logo, foto e caratteri ufficiali sono stati recuperati per la dashboard. Il progetto locale indica bordeaux `#843c45`, fondo scuro `#0a0808`, bianco e logo SFT: base provvisoria, non prova di fedeltà al sito attuale.

- Logo e bordeaux come elementi di identità; superfici ordinate, tipografia coerente col sito una volta verificata.
- Light e dark completi: sfondi, card, tabelle, editor, dialoghi, focus e stati. Preferenza iniziale di sistema e scelta manuale persistente.
- Sidebar, breadcrumb, card, tab, sheet/dialog, form, select, badge, tabella e notifiche dai componenti shadcn/ui, personalizzati con token condivisi.
- Kanban, editor e calendario come componenti funzionali dedicati: shadcn/ui fornisce i controlli, non sostituisce la loro logica.
- Testi italiani, date e valuta locali; orari Europe/Rome.
- Un'azione primaria per contesto; strumenti secondari in menu.
- Focus visibile, tastiera, contrasto, target touch comodi, alternative al drag e stati non affidati soltanto al colore.
- Stati vuoti utili, caricamento stabile, errori recuperabili e conferma di salvataggio.

Riferimenti: [theming shadcn/ui](https://ui.shadcn.com/docs/theming), [dark mode su Next.js](https://ui.shadcn.com/docs/dark-mode/next).

## 13. Sequenza di realizzazione e verifiche

| Fase | Risultato | Verifica |
|---|---|---|
| 1 — Prototipo | Home, pagina reparto, Management, Sponsor, Costi e Agenda in entrambi i temi | Percorsi chiari su PC e telefono |
| 2 — Fondamenta | Next.js, Auth, Supabase, stagioni, reparti, navigazione e link | Dati condivisi; accesso negato agli estranei |
| 3 — Pagine reparti | Blocchi, obiettivi, aggiornamenti, report e revisioni | Due editor non perdono lavoro per sovrascrittura |
| 4 — Management | Sponsor, offerte, contratti, template, eventi e checklist | Da contatto a collaborazione; da idea a evento concluso |
| 5 — Agenda e Bilancio | Delivery mensili, calendario, registro costi e CSV | Nessun doppione; totali e filtri corretti |
| 6 — Passaggio | Import dati/allegati e prova con il team | Conteggi e documenti preservati; ripristino possibile |

Tutti i moduli richiesti fanno parte della prima versione di prodotto. Le fasi indicano l'ordine di lavoro, non lo spostamento di eventi, pagine reparti o delivery a un futuro indefinito. Integrazioni email e automazioni avanzate restano successive.

### Accettazione concreta

- Home: mail e Drive del reparto raggiungibili in uno o due passaggi.
- Tutti e sette i reparti hanno una pagina modificabile e uno storico stagionale.
- Un membro aggiunge titolo, checklist, link e aggiornamento senza intervento tecnico.
- Nessun campo “responsabile” impedisce di creare sponsor, evento o delivery.
- Sponsor con Kanban/lista, cronologia, Gmail e template; apertura Gmail non modifica automaticamente la fase.
- Contratti e offerte visibili e modificabili senza alterare accordi precedenti.
- Eventi con checklist, sponsor, documenti e costi collegati.
- Delivery mensili nel calendario; creazione ripetuta dello stesso mese senza doppioni.
- Costi 120 € + 80 € = 200 €; filtro di una categoria con totale coerente; record archiviati esclusi.
- Light e dark leggibili, tastiera e mobile utilizzabili.
- Revoca membro efficace per pagine, dati e file; salvataggi falliti o simultanei senza perdita silenziosa.

## 14. Migrazione e limiti consapevoli

Inventariare browser con dati reali; esportare JSON e documenti separatamente; verificare le anagrafiche precompilate; importare con anteprima, mappa degli ID e risoluzione dei duplicati. Preservare note e contratti. Lo stato “Vinto” è una collaborazione storica da verificare e non genera incassi o spese.

Confrontare conteggi e file, provare con pochi utenti e concordare il passaggio definitivo. Conservare il prototipo e backup per consultazione. Nessuna importazione, connessione Supabase o pubblicazione effettuata durante la pianificazione.

Ponytail applicato: una sola organizzazione, pochi ruoli, pagine a blocchi finite, registro costi semplice, Gmail per link, delivery create da modello, contratti con strumenti esistenti. Non servono microservizi, code, motori di workflow, firme interne o un clone completo di Notion.

## 15. ADR-001 — Stack e perimetro

**Stato:** stack scelto dall'utente; dettagli implementativi proposti.  
**Data:** 1 ottobre 2026.  
**Decisione:** Next.js/React/TypeScript, shadcn/ui, Supabase; light e dark. Tutti i membri accedono ai contenuti operativi, responsabilità inizialmente condivise.

**Motivo:** dashboard stagionale con pagine componibili e moduli strutturati; gestione utenti e dati condivisi con strumenti standard.

**Alternative superate:** Vite o mantenimento della SPA locale non sono più le opzioni guida dopo la scelta esplicita di Next.js. La copia attuale rimane materiale da cui recuperare dati e identità.

**Conseguenze:** ricostruzione del frontend e migrazione dal browser al backend; necessità di mantenere policy, documenti e revisioni. Bilancio limitato ai costi; editor limitato a blocchi utili; Gmail senza sincronizzazione.

**Prossimo risultato reviewabile:** prototipo delle pagine principali con dati dimostrativi, prima di collegare dati reali. Il piano non equivale ad autorizzazione a pubblicare o a dichiarare il CRM già funzionante.


## 16. Stato della prima implementazione

La prima interfaccia è disponibile con Next.js, React, shadcn/ui e temi light/dark. Home, sottoteam con blocchi e revisioni, Management, eventi/checklist, sponsor Kanban/lista, contratti/versioni, offerte, template Gmail, media, Agenda e registro costi sono navigabili e modificabili. I mock vengono conservati nel browser.

Schema SQL e repository Supabase sono inclusi; il progetto reale non è stato creato o collegato. Auth email, membership, RLS, Storage e salvataggi atomici saranno attivati con la configurazione descritta in `SUPABASE_SETUP.md`. I test applicano la migrazione su Postgres locale in memoria; il collaudo del servizio online avverrà dopo la creazione del progetto.

Scelte deliberate: editor a blocchi semplici, contratto finale tramite documenti/link del team, inviti dalla console Supabase, stagioni configurate nel codice, nessuna sincronizzazione Gmail né importazione automatica del prototipo. La migrazione dei dati reali resta un passaggio separato: il vecchio sito e gli allegati locali sono stati preservati.

Vedi `README.md` per avvio e funzionalità e `VERIFICA.md` per il riepilogo dei controlli effettuati.
