# ⛵ Sapienza Foiling Team - Sponsor & Partner CRM

Applicazione gestionale autonoma a singola pagina (Single Page Application) sviluppata appositamente per il **Sapienza Foiling Team** (progetto **SuMoth Challenge** / barca foiling **Meravijosa**).

Il gestionale è concepito per gestire a 360° sia gli **Sponsor Finanziari (Cash)** che i **Partner Tecnici (Forniture di materiali, componenti, lavorazioni meccaniche e software)** oltre alle collaborazioni **Ibride**.

La grafica è interamente armonizzata con il design ufficiale del sito [sapienzafoilingteam.com](https://www.sapienzafoilingteam.com/):
- **Palette Identitaria**: Carbon Void (`#0a0808`), Rosso Chermes Sapienza / Burgundy (`#843c45`), Bianco Vela (`#ffffff`) e dettagli Gold / Foil Cyan aerodinamici.
- **Logo Ufficiale**: Include il file vettoriale originale [`logosft.svg`](./logosft.svg).
- **Elementi Stile**: Bottoni e filtri sagomati a capsula (`rounded-full`) e sfocature glassmorphism.

---

## 🚀 Come Avviare il Gestionale

1. Fai doppio clic sul file **`Avvia-Gestionale.bat`** (oppure apri **`index.html`** in qualsiasi browser moderno come Chrome, Edge o Firefox).
2. L'applicazione caricherà istantaneamente le **70 aziende con tipologia (Cash / Tecnico / Ibrido) e rispettive email ufficiali di contatto** già pronte!
3. **Nessuna installazione richiesta**: non servono Node.js, Python o database remoti. I dati rimangono salvati sul tuo computer anche a browser chiuso.

---

## 🧭 Esperienza Utente & Navigazione Rapida (User-Friendly)

1. **Barra di Navigazione Rapida (Quick Nav Bar)**:
   - Fissa in alto sotto l'header, permette con un solo clic di saltare tra:
     - **Dashboard & KPI**
     - **Scheda Sponsor**
     - **Centro Documentale**
     - **Registro & Tabella**
   - Include il pulsante **"Guida Rapida ℹ"** per mostrare/nascondere un riassunto a schede del flusso di lavoro in 4 passi.
2. **KPI e Funnel Interattivi (Click-to-Filter)**:
   - Cliccando su qualsiasi tessera KPI (es. *Cash Confermato*, *Forniture Tecniche*, *Target 20k€*) o sulle pillole del funnel (*1° Contatto*, *In Trattativa*, *Accordo Chiuso*), la tabella in basso **si filtra immediatamente sui record corrispondenti** e la vista vi scorre fluidamente.
3. **Ricerca Istantanea nel Form**:
   - Sopra il menu a tendina dello sponsor è presente un campo di ricerca rapida in tempo reale: digitando le prime lettere (es. `Pirelli`, `Enel`, `Brembo`), la lista viene filtrata all'istante senza dover scorrere 70 opzioni.
4. **Banner "Azienda in Modifica"**:
   - Quando uno sponsor è attivo nel form, compare in evidenza un banner elegante che mostra il nome dell'azienda, la tipologia (Cash / Tecnico / Ibrido), la fase di trattativa, e due pulsanti d'azione rapida: **"Scrivi Email"** e **"Deseleziona"**.

---

## 🎯 Pitch Deck Dedicati per Singolo Sponsor (Novità)

Oltre al **Pitch Deck Master Istituzionale di Squadra**, ciascun partner può avere la propria presentazione personalizzata e calibrata:

1. **Nel Form dello Sponsor**:
   - Riquadro dedicato **"Pitch Deck Dedicato a questo Sponsor"** con:
     - **Link Diretto Cloud / Canva**: campo URL per presentazioni online su Google Drive o Canva con pulsante di apertura immediata ↗.
     - **Caricamento File Locale (IndexedDB)**: dropzone drag-and-drop per file PDF o PPTX, memorizzati direttamente nel browser senza limiti.
     - **Badge di Stato in Tempo Reale**: indica visivamente se il pitch è *Non Caricato* (grigio), *Pitch PDF Disponibile* (oro) o *Link Canva/Drive Attivo* (ciano).
2. **Nel Centro Documentale (Sezione 3)**:
   - **Box "Pitch Deck Dedicati per Singolo Sponsor"**: mostra l'elenco di tutte le presentazioni personalizzate caricate per i partner, con conteggio "pronti", barra di ricerca rapida, pulsanti di download, apertura cloud e il tasto **"Scheda"** che apre lo sponsor nel form con un bagliore luminoso di attenzione.
3. **Nella Tabella Generale (Sezione 4)**:
   - Nuova colonna ordinabile **"Pitch Deck ↕"**:
     - Mostra se il pitch è pronto (*PDF*, *Cloud*, o entrambi).
     - Se mancante, presenta il pulsante **"+ Pitch"**: cliccandolo, la pagina scorre verso il form, seleziona l'azienda ed evidenzia il riquadro di caricamento con una pulsazione dorata.

---

## ✉️ Composizione Email con Gmail di Squadra (Risolto problema mailto)

Il pulsante **"Scrivi Email"** (presente sia nel form di gestione che in ciascuna riga della tabella):
- **Apre direttamente la schermata di composizione di Gmail Web** (`mail.google.com/mail/u/?authuser=sapienzafoilingteam@gmail.com&view=cm&fs=1`).
- Non si blocca se sul PC Windows non è configurato un client desktop come Outlook.
- Seleziona in automatico l'account di posta del Team (`sapienzafoilingteam@gmail.com`).
- Compila in automatico il destinatario, l'oggetto personalizzato con il nome dell'azienda e il tipo di partnership, e una bozza formale di presentazione di *Meravijosa* per il SuMoth Challenge.

---

## 📎 Allegati Aziendali & Archivio Documentale

Nella scheda di ciascun sponsor è presente il riquadro **"Allegati & Documenti Sponsor"**:
- **Archiviazione Sicura**: Trascina o seleziona file (PDF, PPTX, DOCX, scansioni di contratti, preventivi o specifiche tecniche) che vengono salvati in modo permanente nel database locale protetto (IndexedDB).
- **Accesso Diretto Drive**: Il pulsante **"Cartella Drive Sponsor"** apre direttamente il link della cartella Google Drive dedicata oppure esegue una ricerca istantanea su Drive per il nome dell'azienda.

---

## 🧠 Analizzatore Intelligente Risposte Email (Smart AI Parser)

Il pulsante **"🧠 Analizza Risposta Email"** (disponibile sia nel form sia in ogni riga della tabella) consente di aggiornare il gestionale in 1 clic:
1. **Incolla il testo dell'email** o del thread ricevuto dal referente aziendale.
2. Clicca su **"⚡ Analizza Risposta ed Estrai Dati"**:
   - **Riconoscimento Offerte in Denaro (€)**: Identifica automaticamente importi e contributi monetari deliberati o proposti (es. `5.000 €`, `ticket da 3000 euro`).
   - **Riconoscimento Valore Forniture Tecniche (€)**: Rileva il controvalore commerciale stimato di materiali o servizi in-kind.
   - **Riconoscimento Categorie Tecniche**: Assegna automaticamente i tag per compositi/carbonio, lavorazioni CNC, vele, elettronica, ecc.
   - **Riconoscimento Fase Trattativa**: Identifica in base al linguaggio se l'accordo è *Vinto* (es. "abbiamo deliberato", "lieti di confermare"), *In Trattativa* (es. "fissiamo una call conoscitiva"), o *Perso*.
   - **Generazione Verbale Datato**: Compila un resoconto sintetico pronto per essere inserito nelle note aziendali con data e ora.
3. Clicca su **"🚀 Applica Subito al Profilo Sponsor & Salva"**: tutti i campi, gli importi e i contatori finanziari si aggiornano all'istante!
4. Include tasti rapidi **"💡 Test Vinto"** e **"💡 Test Trattativa"** per provare immediatamente l'algoritmo.

---

## ☁️ Automazione 24/7 in Google Cloud: `SFT_Gmail_Drive_Sync.gs`

Per automatizzare il salvataggio degli allegati e la scansione della posta **anche a computer spento**, è incluso lo script Google Apps Script **`SFT_Gmail_Drive_Sync.gs`**:
1. Accedi a [script.google.com](https://script.google.com/) con l'account `sapienzafoilingteam@gmail.com`.
2. Crea un nuovo progetto e incolla il codice del file `SFT_Gmail_Drive_Sync.gs`.
3. Esegui la funzione `installAutomaticTrigger`:
   - Ogni 5 minuti, lo script legge le email in arrivo dagli sponsor.
   - Crea automaticamente la cartella `Sapienza Foiling Team - Archivio Sponsor / [Nome Azienda] / Allegati/` su Google Drive.
   - Salva gli allegati direttamente nella cartella dell'azienda.
   - Se l'allegato è un Pitch Deck, ne crea una copia in `00_Pitch Deck Ufficiale`.
   - Registra le proposte economiche in un Google Sheet di sincronizzazione nel Drive.
   - Applica l'etichetta `SFT-Archiviato` per evitare duplicati.

---

## ⚙️ Sponsor Tecnici & Selezione Multipla delle Categorie

1. **💰 Sponsor Finanziario (Cash)**: concorre direttamente all'**Obiettivo Stagionale Cash (20.000 €)**.
2. **⚙️ Sponsor Tecnico (Materiali & Servizi / In-Kind)**:
   - **Valore Stimato Fornitura (€)**: valore commerciale equivalente del materiale o servizio.
   - **Categorie Fornitura (Selezione Multipla a Pillola)**:
     - 🧪 *Materiali Compositi (Carbonio, Resina, Tessuti)*
     - ⚙️ *Lavorazioni Meccaniche & Stampi CNC*
     - ⛵ *Vele, Corde & Rigging*
     - ⚡ *Elettronica, Sensori & Telemetria*
     - 💻 *Software & Simulazione (CFD, FEM, CAD)*
     - 🦺 *Abbigliamento Tecnico Team*
     - 🔧 *Componentistica & Ferramenta Nautica*
     - 🚚 *Logistica, Spedizioni & Trasporti*
     - 📐 *Consulenza Ingegneristica & Test*
     - 📦 *Altro Materiale Tecnico*
3. **🔄 Sponsor Ibrido (Cash + Materiali)**: mostra e calcola entrambi gli importi.

---

## 📊 Dashboard Finanziaria & KPI

- **Target Cash**: Obiettivo monetario fisso a **20.000 €** (modificabile con l'icona ✏️).
- **Cash Raccolto**: Totale dei ticket monetari ottenuti dalle aziende "Vinto".
- **Cash Mancante**: Quanto manca per centrare il target di 20.000 € (con indicazione della pipeline in trattativa).
- **Valore Forniture Tecniche**: Somma del valore in-kind stimato dei materiali e servizi confermati ("Vinto").
- **Valore Totale Supporto**: Somma globale di Cash Raccolto + Valore Tecnico dei materiali ottenuti!
- **Barra di Progresso**: Monitoraggio visivo dell'obiettivo con traguardi intermedi (25%, 50%, 75%, 100%).
- **Contatori Funnel & Tipologie**: Conteggio in tempo reale di sponsor Cash, Tecnici e Ibridi.

---

## 💾 Salvataggio, Esportazione & Backup

1. **Salvataggio Continuo in Locale**: Ogni modifica viene memorizzata istantaneamente in `localStorage` e IndexedDB.
2. **Esporta Excel (CSV)**: Esporta l'intero database in formato `.csv` compatibile con Microsoft Excel (con separatore `;` e codifica UTF-8 BOM).
3. **Backup JSON**: Permette di scaricare e importare backup completi per sincronizzare il lavoro tra i membri del team.
