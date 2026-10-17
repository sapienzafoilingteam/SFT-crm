# SFT mobile / PWA

## Direzione e mappa

Interfaccia mobile sobria, con gerarchie iOS, identità SFT e cinque destinazioni persistenti. Le composizioni mobile si attivano fino a 800 px. Sidebar, homepage e tabelle desktop conservano la loro struttura. Il tema scuro condiviso usa un accento rosso al posto del rosa.

| Destinazione | Primo livello | Dettaglio e azioni |
| --- | --- | --- |
| Home | Oggi, scadenze, risorse rapide | Modifica scadenza, avanzamento stato e prova di consegna |
| Agenda | Impegni raggruppati per giorno | Filtri e vista in pannello; editor a schermo intero |
| Reparti | Elenco dei sette reparti | Pagine, riunioni, file; sezioni Management e progetti Elettronica |
| Drive | Ricerca, cartelle, lista/griglia | Menu azioni per file, anteprima e operazioni esistenti |
| Altro | Strumenti, preferenze e installazione | Recruiting, sponsor, bilancio, contratti, impostazioni, stagione e tema |

Composizione delle schermate:

```text
HOME                 AGENDA               REPARTI
SFT / stagione       SFT / stagione       SFT / stagione
Il tuo workspace     Agenda e Delivery    Reparti
[Oggi          ↗]    [+ Nuova delivery]   [Scafo           >]
Scadenze             [Cerca] [Filtri]     [Management      >]
[Scadenza/stato]     Ottobre      < >     [Materiali       >]
[Azioni rapide]      20 ottobre           [...             >]
Accesso rapido       [Impegno / stato]   Risorse condivise
───────────────────────────────────────────────────────
Home · Agenda · Reparti · Drive · Altro

DRIVE                ALTRO                DETTAGLIO / MODULO
SFT / stagione       SFT / stagione        [Chiudi]
Drive del team       Altro                Titolo
[Carica / Crea]      [Strumenti       >]  Campi essenziali
[Percorso cartelle]  Preferenze           Dettagli espandibili
[Cerca] [Lista/▦]    [Stagione        ⌄]  Errori contestuali
[File          …]    [Aspetto         ⌄]  ...
[Cartella      …]    Installa sul telefono [Annulla] [Salva]
```

Filtri e scelte brevi usano un pannello dal basso; dettagli e moduli usano tutto lo schermo. La chiusura mantiene il contesto della pagina. Le preferenze delle viste restano in memoria nella sessione, come nel gestionale esistente. Lo scorrimento è conservato nel cambio di sezione mobile, per pagina e stagione.

## PWA e connessione

- `app/manifest.ts`: nome, scope, modalità standalone, colori e icone PNG, inclusa icona maskable e Apple touch icon.
- `components/pwa.tsx`: installazione guidata in Altro, stato offline e aggiornamento su scelta dell'utente.
- `public/sw.js`: registrato solo nelle build di produzione, con cache limitata a `/offline.html` e al suo script pubblico. Dati CRM, HTML autenticato, API, token, allegati e risposte di Drive non entrano nella cache del service worker.
- I dati già caricati restano nella sessione esistente; non sono una copia offline sincronizzata. I salvataggi live vengono bloccati quando il browser segnala assenza di rete.
- Gli aggiornamenti non forzano il ricaricamento. Prima di aggiornare occorre salvare; il pulsante evita il reload mentre un dialog o un'operazione con `aria-busy` è aperto.
- La prima versione non implementa modifiche offline, push o sincronizzazione differita.

## Verifica e rilascio

Anteprima isolata con dati demo:

```sh
NEXT_PUBLIC_DATA_MODE=demo CRM_BUILD_DIR=/tmp/sft-crm-mobile-preview npm run dev -- --port 3012
```

Il service worker va verificato su build di produzione e origine sicura (localhost per QA locale, HTTPS per il sito pubblicato). Verificare anche Safari/iPhone reale: installazione dalla schermata Home, riapertura con sessione esistente, tastiera, aree sicure, rotazione, navigazione, cambio tema e riconnessione.

Controlli locali e limiti effettivamente osservati sono riportati in `validation.md`. Non confondere la verifica nel browser desktop a viewport mobile con un collaudo su iPhone fisico.
