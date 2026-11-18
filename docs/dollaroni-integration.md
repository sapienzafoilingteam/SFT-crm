# Dollaroni nel CRM

Dal reparto **Materiali e Sostenibilità**, aprire **Dollaroni**. “Progetti del reparto”
apre l’elenco delle barche salvate nel CRM, disponibili ai membri del team per stagione. La pagina mantiene
il selettore di stagione del CRM. “Salva nel CRM” condivide il progetto con i membri;
“Salva una copia” crea un progetto distinto. “Aggiorna” recupera l’elenco condiviso,
e “Apri” carica il progetto scelto. “Salva file” nell’app scarica il formato originale
`.dollaroni.json`. Il comando interno “Salva nel CRM” funziona anche a schermo intero;
scorciatoia Ctrl/Cmd+Shift+S. Ctrl/Cmd+S salva un file.

Le bozze automatiche appartengono al dispositivo, all’account e alla stagione.
Non costituiscono un salvataggio condiviso. In demo i progetti restano nel browser;
con Supabase si usa il salvataggio autenticato del CRM. L’anno tecnico del progetto
Dollaroni e la stagione organizzativa del CRM rimangono distinti: anche gli esempi
2026 possono essere studiati nella stagione 2026/2027.

## Funzioni conservate

Motori e dati originali: laminazioni e masse, costi SM$, listino e voci personalizzate,
regolamenti 2026/2027, Performance Rating, controlli, congelamento S1 e confronto S2,
annulla/ripeti, file originali, esportazioni XLSX/PNG/DOCX/ZIP e Brumoth. Il regolamento
2027 continua a usare il listino e il Layup Calculator 2026 provvisori dell’app
originale. Il collegamento a Google Drive non esiste nell’upstream; i progetti
condivisi sono salvati direttamente nel CRM.

## Integrazione e aggiornamenti

Route: `/team/materiali/dollaroni`. Pagina caricata su richiesta, app locale sotto
`public/tools/dollaroni`, versione e adattamenti descritti in
`public/tools/dollaroni/UPSTREAM.md`. La pagina host mantiene i permessi del CRM;
l’iframe non riceve credenziali. I messaggi controllano origine, finestra e scope.
Il tema usa i valori semantici effettivi del CRM, anche dopo un cambio tema.

I progetti sono record `reports` del reparto `materiali`, con involucro JSON
`kind: dollaroni-project`. È lo stesso meccanismo già adottato dalle richieste di
sviluppo; non serve una migrazione. Sono esclusi dai normali elenchi di report.
`apply_changes` e `put` conservano audit, accesso ai membri e controllo versione.
Un conflitto lascia la bozza locale; si può aprire la versione condivisa o salvare
una copia. Non è prevista modifica collaborativa simultanea con fusione automatica.

Il passaggio S1→S2 conserva la baseline e crea un nuovo progetto condiviso al
salvataggio, mantenendo il record S1 consegnato.

Il salvataggio rispetta un limite di 5 MB, valida struttura e baseline e non scarta
campi originali o futuri. In caso di problemi si può sempre scaricare il file.
Gli aggiornamenti di Dollaroni passano dalla pubblicazione del CRM: il vecchio
updater locale/PWA non viene avviato. L’intera applicazione offline non è garantita:
il CRM conserva la propria politica di accesso e di cache.

## Brumoth con Gemini

Brumoth usa le API Gemini tramite `/api/dollaroni/brumoth`. Il vecchio runtime Qwen
e i relativi download non fanno più parte dell’app. La modalità predefinita è
“Gemini”; “Dati del progetto” conserva le risposte deterministiche del motore.
Budget, masse, confronti e azioni da confermare continuano a essere prodotti dal
motore originale, con segnalazione di eventuali numeri non presenti nei dati.

Configurare `GEMINI_API_KEY` solo nell’ambiente server, oppure
`GOOGLE_GENERATIVE_AI_API_KEY` o `GOOGLE_API_KEY` (nome già usato in locale). Il modello è configurabile con `GEMINI_MODEL`
(predefinito `gemini-3.5-flash-lite`, verificato nella documentazione Google il 30 ottobre
2026). Mai usare una variabile `NEXT_PUBLIC_` per la chiave.

L’host verifica la sessione CRM; il server verifica nuovamente il membro attivo
prima di contattare Google. L’iframe non riceve token né chiavi. Sono limitati
dimensione della domanda, uscita, durata e concorrenza; il limite di 12 richieste
al minuto per membro vale per istanza server, non è un contatore distribuito.
Nessun prompt o risposta è registrato dall’app. Le informazioni necessarie alla
domanda sono inviate a Google: la precedente promessa di elaborazione solo locale
non si applica più. In demo e senza configurazione Gemini si vedono l’errore
esplicito e la risposta dai dati; non viene simulata una risposta AI.

Documentazione: [generateContent](https://ai.google.dev/api/generate-content) e
[modelli Gemini](https://ai.google.dev/gemini-api/docs/models).

## Efficientamenti inclusi

| Intervento | Beneficio |
| --- | --- |
| Pagina caricata su richiesta | Dollaroni non pesa sull’apertura degli altri reparti. |
| Solo dipendenze necessarie alla pagina | Carica i report condivisi, senza pagine e link non utilizzati. |
| Validazione archivio memorizzata per aggiornamento | Non ricopia tutti i progetti a ogni carattere inserito nell’editor. |
| Salvataggio e copie nel CRM | Elimina il passaggio manuale di file tra membri. |
| Versioni e protezione cambio documento | Evita che il completamento di un vecchio salvataggio associ il progetto sbagliato. |
| Bozze separate e recuperabili | Riduce il rischio di perdere il lavoro o confondere stagioni/account. |
| Tema unico e comandi espliciti | Distingue salvataggio condiviso da download locale. |

## Miglioramenti successivi proposti

| Priorità | Miglioramento | Come verificarne il valore |
| --- | --- | --- |
| Alta | Eseguire calcoli ed esportazioni pesanti in un Web Worker | Misurare latenza dei campi e blocchi durante export su progetti grandi. |
| Alta | Ricalcolo per pezzo modificato e cache dei risultati | Confrontare tempi e risultati con la suite originale su grandi distinte. |
| Media | Ricerca e filtri avanzati su pezzi e voci, duplicazione rapida | Misurare i passaggi per trovare e configurare laminati simili. |
| Media | Registro revisioni visibile e confronto prima del ripristino | Provare recupero e confronto con due membri su uno stesso progetto. |
| Completato | Stato di salvataggio e comandi semplificati | Un comando principale nel CRM e progetti del reparto in un pannello richiudibile; salvataggio interno disponibile a schermo intero. |

Queste proposte richiedono misure sui progetti reali: non sono promesse di un
incremento di prestazioni già quantificato.

## Verifiche e limiti

Passano 72 test preesistenti CRM, 3 nuovi test sul formato/isolamento dei progetti,
e 67 test originali Dollaroni. Passano inoltre 6 test del collegamento Gemini
(81 test CRM complessivi disponibili), con provider simulato: accessi, struttura, segreti,
limiti, errori e timeout. Motori, moduli di esportazione, file ufficiali verificati identici allo snapshot upstream; il runtime locale wllama è stato rimosso. Build di produzione e
controllo TypeScript superati. Prove browser in modalità demo: apertura e copie
condivise, persistenza dopo ricaricamento, generazione e download ZIP S1 e S2 (ciascuno 20 voci,
8 XLSX, 8 PNG, 1 DOCX, CRC corretto), tema chiaro/scuro, Brumoth istantaneo, schermo intero, isolamento tra stagioni
e layout mobile 390 px senza overflow orizzontale. Verificato anche che un file
locale inizialmente non valido non mantenga il precedente progetto condiviso come
destinazione dopo la correzione.

Non sono stati pubblicati i nuovi file né modificati dati sul database di produzione.
È stata verificata una chiamata reale a Gemini con la chiave locale `GOOGLE_API_KEY`
e dati sintetici, senza usare i contenuti del team. Il modello `gemini-3.5-flash-lite`
ha risposto con HTTP 200 in circa 1,5 secondi in questa singola prova; il precedente
predefinito `gemini-3.8-flash` aveva superato il timeout di 35 secondi.
La prova locale del provider usa un’identità di test al posto dell’autenticazione.

Verifiche di sola lettura sul database online: tabella `reports` e tutte le colonne
necessarie disponibili, funzione `apply_changes` esposta, reparto materiali e due
stagioni presenti; accessi anonimi a lettura e salvataggio respinti con HTTP 401.
Non emerge la necessità di una nuova migrazione per Dollaroni. Non è ancora stato
provato un salvataggio reale da una sessione utente autenticata.

Su Vercel `GEMINI_API_KEY` è presente come Secret in Production; non risulta in Preview.
La configurazione locale `vercel.json` seleziona Next.js e `npm run build`.
Il prossimo rilascio deve usare le variabili Production/Supabase. Il pacchetto
esclude anche `tmp/`, che contiene circa 1,2 GB di prove locali.

Restano la pubblicazione di una versione di collaudo, la verifica autenticata di
apertura/salvataggio/copie e Brumoth, e la promozione sul dominio del CRM.
La limitazione delle richieste Gemini è per istanza; un limite distribuito può
essere aggiunto per un uso più ampio. I dati 2027 restano provvisori come nell’upstream.


## Rilascio verificato — 30 ottobre 2026

Dollaroni è pubblicato su `https://crm.sapienzafoilingteam.com/team/materiali/dollaroni`.
Deployment Production attivo: `dpl_66kv7sJouVGsxeGwZ7kQpdiDkBQn`
(`https://sft-rn72y6xlb-nannipy-projects.vercel.app`).

Durante il rilascio Next.js è stato aggiornato a 16.4.1: il controllo dipendenze
non riporta vulnerabilità e tutti gli 82 test passano. La build Vercel è READY.
È stato verificato un salvataggio reale nel database, con versione incrementata.
La richiesta autenticata finale a `/api/dollaroni/brumoth` ha restituito HTTP 200
sul deployment attivo, senza errori nei relativi log.

La chiave Gemini Production è stata allineata a quella locale già verificata,
mantenendola Secret. Le chiavi vengono normalizzate rimuovendo spazi iniziali e
finali; timeout e annullamento usano un controller proprio per compatibilità con
il runtime Vercel, con test dedicato. La diagnostica non registra chiavi, prompt,
risposte o messaggi di eccezione. Nessuna migrazione aggiuntiva è stata necessaria.
