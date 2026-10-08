# Recruiting

La pagina `/recruiting` importa automaticamente le risposte del modulo della stagione 2026/2027, mostra tutte le domande e gestisce selezione, valutazioni, note, responsabili, scadenze, archivio, esportazione e colloqui nell'agenda.

## Attivazione

1. Applica `supabase/migrations/202610080001_recruiting.sql` al progetto Supabase del CRM. È una migrazione aggiuntiva: non richiede che Calendar sia attivo. Per lo scheduler Supabase applica anche `202610080002_recruiting_scheduler.sql`.
2. Configura `SUPABASE_SERVICE_ROLE_KEY` esclusivamente sul server. Non usare il prefisso `NEXT_PUBLIC_` e non inserirla nei commit. Le tabelle recruiting non sono leggibili o modificabili con le chiavi pubbliche, neppure da un membro autenticato.
3. Esegui `node scripts/setup-recruiting.mjs` in un terminale interattivo. Scegli la password condivisa; il setup salva soltanto il suo hash scrypt e prepara `.env.recruiting.vercel`, escluso da Git, con le quattro variabili da copiare su Vercel come Secret: `SUPABASE_SERVICE_ROLE_KEY`, `RECRUITING_PASSWORD_HASH`, `RECRUITING_SESSION_SECRET`, `RECRUITING_CRON_SECRET`. Il file contiene credenziali: non inviarlo in chat e non pubblicarlo. Copia i valori senza le virgolette esterne del file. Rilancia il setup per cambiare password: tutte le sessioni già sbloccate verranno invalidate. I segreti della sessione e dello scheduler già configurati vengono mantenuti, così la rotazione della password non interrompe il job Supabase.
4. Attiva Google Sheets API nel progetto Google del collegamento Drive esistente. Il refresh token Drive del team, già autorizzato con scope `drive`, viene riutilizzato esclusivamente sul server. L'integrazione accede soltanto al foglio configurato.
5. Distribuisci la nuova versione, accedi al CRM e sblocca Recruiting. Controlla l'importazione, gli allegati e il contatore dell'ultimo aggiornamento. In caso di errore restano disponibili i dati dell'ultima importazione riuscita.
6. Lo scheduler Supabase richiama l'endpoint ogni cinque minuti tramite `pg_cron` e `pg_net`. Il Vault conserva i segreti con nome `recruiting_endpoint` (URL completo `https://crm.sapienzafoilingteam.com/api/recruiting/cron`) e `recruiting_cron_secret` (stesso valore di `RECRUITING_CRON_SECRET` su Vercel). Le due voci e il job sono già configurati nel progetto CRM. Verifica che il timestamp avanzi a CRM chiuso dopo il deploy. Prima di configurare le variabili e distribuire la nuova versione, le chiamate possono restituire 401/404: non importano dati. Per sospendere il job: `select cron.alter_job(jobid,active:=false) from cron.job where jobname='recruiting-sync';`.

In alternativa, per un progetto che non usa lo scheduler Supabase, è disponibile `scripts/recruiting-scheduler.gs`: le Proprietà dello script richiedono `CRM_BASE_URL` e `RECRUITING_CRON_SECRET`, quindi si esegue `installRecruitingScheduler`. Usare un solo scheduler. La soluzione Supabase segue la [documentazione ufficiale](https://supabase.com/docs/guides/functions/schedule-functions). Il token dedicato può solo avviare l'import e non leggere candidature; Vault lo conserva cifrato, mentre la coda HTTP contiene temporaneamente l'header della richiesta, accessibile ai ruoli con connessione SQL diretta secondo i [limiti di pg_net](https://supabase.com/docs/guides/troubleshooting/database-roles-can-read-request-headers-queued-by-pg_net-ad6357).

### Parametri facoltativi

| Variabile server | Default |
| --- | --- |
| `RECRUITING_SPREADSHEET_ID` | `1VsWkktKRPBPs9rkZR5XDok8OZllv1JPB4QkdjKue46A` |
| `RECRUITING_SHEET_GID` | `1212892271` |
| `RECRUITING_SEASON_ID` | `00000000-0000-4000-8000-000000000001` |

Il primo import aggiunge in coda una colonna tecnica `CRM_ID` e assegna un UUID alle risposte. La colonna va mantenuta insieme alla riga quando si ordina il foglio; non modificarla, duplicarla o eliminarla. La sincronizzazione non riscrive le risposte del form. I titoli ripetuti delle domande sono distinti tramite la loro posizione nel modulo. Se si spostano colonne o si cambia il modulo, verificare la mappatura di `lib/recruiting.ts` prima dell'importazione; le nuove domande aggiunte in coda sono conservate come risposte aggiuntive.

La firma delle prime 32 intestazioni viene conservata dopo il primo import: se cambiano, l'importazione si ferma conservando lo snapshot precedente. Dopo avere verificato e aggiornato la mappatura, un amministratore può azzerare `recruiting_sync.header_hash` per accettare la nuova struttura al prossimo aggiornamento. Non azzerare la firma senza verificare il modulo.

## Protezione

- Login al CRM e membership attiva vengono verificati ad ogni richiesta; la password aggiuntiva sblocca una sessione di quattro ore, legata al token personale. Un rinnovo del token può richiedere di inserire di nuovo la password.
- Cookie HttpOnly, SameSite Strict, Secure in HTTPS. La password non arriva al database o al browser come valore memorizzato; il suo hash resta sul server.
- Limite distribuito di cinque tentativi in quindici minuti per account. Disattivando la membership si revoca immediatamente l'accesso.
- Note, esiti, storico e collegamento candidato/evento restano nelle tabelle private. Nessun trigger copia queste informazioni nell'audit generale del workspace.
- L'API Drive condivisa nasconde il foglio e gli allegati importati e impedisce operazioni su di essi finché il recruiting è bloccato. Le due cartelle antenate degli allegati vengono protette: controllare che siano le cartelle degli upload Google Forms e non cartelle operative condivise. Gli allegati già importati restano protetti anche quando la risposta viene rimossa dal foglio. Eventuali permessi di accesso diretto su Google rimangono gestiti da Google; la password CRM non revoca tali permessi.
- Le risposte non vengono salvate nel localStorage del workspace, nei suoi export o nei log pubblici. La demo usa esclusivamente una candidatura inventata e indica esplicitamente che non applica la password ai dati fittizi.

## Colloqui e agenda

Il colloquio crea un evento `Colloquio recruiting · [Reparto]`, con data, inizio/fine in Europe/Rome, selezionatori e luogo/link della call. Questi dati sono visibili nell'agenda condivisa. Nome del candidato, email, telefono, appunti e valutazione non vengono copiati nell'evento. Evitare di inserire dati del candidato nei campi pubblici "Selezionatori" e "Luogo/link".

Evento e collegamento privato sono salvati in una sola transazione. Le modifiche in agenda vengono lette dalla scheda; il controllo delle versioni impedisce di sovrascrivere uno spostamento concorrente. Annullare il colloquio archivia l'evento pubblico e conserva lo storico. Archiviare una candidatura conserva i colloqui: annullare separatamente quelli ancora da svolgere.

Se Calendar è attivo, il normale collegamento dell'agenda esporta anche i colloqui con i loro orari. I dettagli privati non vengono esportati. L'invio di inviti ai candidati o di email non è automatico: i contatti mail e telefono sono disponibili nella scheda e le comunicazioni restano manuali.

## Verifiche e recupero

Verifica dell'8 ottobre 2026: 31 test superati e build di produzione riuscita. Nell'anteprima con dati inventati sono stati verificati elenco, Kanban, scheda, salvataggi e colloqui creati dal recruiting e spostati dall'agenda, oltre al layout su telefono a 390 px. Successivamente Sheets API è stata abilitata e verificata con risposta 200; le migrazioni recruiting sono state applicate al progetto `lztgyiokkxninchwgqbc`. Il primo import reale ha caricato 30 candidature e protetto 61 identificativi Drive. Un secondo import ha mantenuto invariati numero di candidature e versioni, senza duplicazioni. I controlli sul database reale confermano RLS e assenza di permessi di lettura/esecuzione per anon e authenticated sulle tabelle e sulle funzioni private. La cronologia delle tre migrazioni precedenti, già presenti nello schema ma non registrate, è stata allineata senza rieseguirle. Lo scheduler ogni cinque minuti è installato con segreto nel Vault. Restano la scelta della password, le quattro variabili su Vercel e la verifica dell'aggiornamento da produzione dopo il deploy.

Prima di usare dati reali: verificare password errata e scadenza, richieste API bloccate, isolamento del database, import ripetuto senza duplicazioni, correzione nel foglio senza perdita di note, riga rimossa senza cancellazione, PDF, colloquio creato/spostato/annullato, assenza di identità nell'agenda e funzionamento del trigger a CRM chiuso.

In caso di errore di sincronizzazione, correggere accesso Google o schema e attendere l'aggiornamento successivo. Lo snapshot importato viene salvato atomicamente. Un rollback del frontend non elimina candidature o ID nel foglio; non rimuovere colonne o tabelle per annullare un deploy. Per la cancellazione effettiva dei dati servono operazioni specifiche di gestione e conservazione, distinte dall'archivio reversibile dell'interfaccia.
