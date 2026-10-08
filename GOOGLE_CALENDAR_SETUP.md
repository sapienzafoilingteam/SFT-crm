# Collegare l’agenda a Google Calendar

Il CRM sincronizza eventi e delivery con il calendario principale di **sapienzafoilingteam@gmail.com**, in entrambe le direzioni. L’attivazione dell’API nella console Google è necessaria, ma servono anche il consenso OAuth, la migrazione Supabase e le variabili sul server.

## Attivazione

1. Nel SQL Editor del progetto Supabase usato dal CRM, eseguire **solo** `supabase/migrations/202610050001_calendar_sync.sql`. La migrazione è atomica e aggiunge collegamenti e un blocco per evitare esecuzioni simultanee; non modifica i dati dell’agenda. Non rieseguire le migrazioni iniziali su un database già attivo.
2. Nel client OAuth Web già usato per Drive, verificare il redirect `http://localhost:4387/callback`. Google Calendar API deve essere abilitata nello stesso progetto Cloud del client.
3. Dopo avere confermato il consenso, dalla cartella del CRM eseguire:

   ```sh
   node scripts/connect-calendar.mjs '/percorso/client_secret.json' --confirm-calendar-access
   ```

   Aprire il link stampato, scegliere **sapienzafoilingteam@gmail.com** e autorizzare la lettura e modifica degli eventi dei calendari posseduti (`calendar.events.owned`) e la verifica dell’indirizzo email (`userinfo.email`). Lo script controlla account, state OAuth e PKCE, e salva `GOOGLE_CALENDAR_REFRESH_TOKEN` in `.env.local` con permessi 0600. Non condividere questo file o i token.
4. Sul server impostare `GOOGLE_CALENDAR_REFRESH_TOKEN`, mantenendo `GOOGLE_DRIVE_CLIENT_ID` e `GOOGLE_DRIVE_CLIENT_SECRET` del medesimo client OAuth. Il token Calendar è separato dal token Drive. Riavviare in locale; su Vercel eseguire un nuovo deploy dopo la configurazione.
5. Aprire l’agenda: il collegamento si attiva automaticamente, senza pulsanti. Verificare una nuova voce dal CRM, una da Google e una modifica in ogni direzione prima di considerare il collegamento verificato sul sistema reale.

## Sincronizzazione automatica

Quando l’agenda è aperta, la sincronizzazione parte dopo le modifiche e ogni minuto. Il collegamento è implicito: non ci sono pulsanti o notifiche di aggiornamento ordinario; restano visibili gli errori e i conflitti da risolvere. In demo non contatta Google. Le credenziali Google rimangono sul server e l’endpoint interattivo verifica la sessione e l’abilitazione del membro.

Per continuare anche a CRM chiuso, configurare **sul server soltanto**:

- `SUPABASE_SERVICE_ROLE_KEY`: chiave privilegiata del progetto Supabase; mai usare un prefisso `NEXT_PUBLIC_`.
- `CRON_SECRET`: segreto casuale sufficientemente lungo.

Collegare uno scheduler alla richiesta `GET /api/calendar/cron` con header `Authorization: Bearer <CRON_SECRET>`, per esempio ogni cinque minuti. È possibile usare Vercel Cron se il piano consente la frequenza scelta, oppure uno scheduler esterno. **Nessuno scheduler è installato automaticamente da queste modifiche.** L’endpoint usa un blocco condiviso con le sincronizzazioni interattive e controlla le versioni dei record prima di aggiornarli. Le modifiche automatiche hanno attore nullo nell’audit, mentre quelle interattive registrano l’utente CRM.

## Dati e conflitti

- Nuove voci dal CRM: eventi di giornata intera; sincronizzati titolo, data, descrizione/note e luogo degli eventi.
- Nuovi eventi Google: importati come eventi del team nella stagione che comprende la data. I nuovi eventi Google non diventano delivery automaticamente.
- Orari e durata già presenti su Google sono conservati, anche quando il CRM sposta la data. Il cambio dell’ora legale usa il fuso dell’evento (Europe/Rome se assente). Un orario inesistente durante il cambio dell’ora va corretto su Google.
- Il CRM mostra la data iniziale. Invitati, Meet, allegati, durata e altri dati Google restano su Google; le modifiche usano PATCH e non sostituiscono l’intero evento.
- Serie ricorrenti, istanze di serie, eventi speciali e nuovi eventi fuori dalle stagioni configurate non vengono importati.
- Stato, reparto, priorità e altri dati gestionali restano nel CRM. Il completamento di una delivery non equivale a cancellazione.
- Archiviare una voce nel CRM elimina il corrispondente evento Google. Eliminare un evento Google archivia la voce nel CRM, mantenendone la storia e l’audit. I collegamenti sono conservati.
- Modifiche contemporanee ai campi sincronizzati producono un conflitto: nessun lato viene sovrascritto. Uniformare titolo, data, descrizione e luogo sui due lati e riprovare. Per una cancellazione in conflitto, archiviare anche il lato CRM se la cancellazione è voluta. I ripristini di eventi eliminati su Google e la rimozione della data di voci collegate richiedono gestione manuale.
- Le nuove voci usano ID deterministici: un errore o un nuovo tentativo non crea automaticamente duplicati. La prima attivazione non unisce per titolo voci già create indipendentemente sui due lati: controllare eventuali duplicati preesistenti.
- Le letture sono paginate. Le richieste hanno un limite di tempo; un risultato parziale indica altre voci da sincronizzare. Per agende molto grandi serve un’elaborazione a lotti con un cursore persistente.

## Verifica e disattivazione

Eseguire `npm test`, `npm run typecheck` e `npm run build`. I test coprono conflitti, duplicati, cancellazioni, ora legale, permessi e il blocco PostgreSQL; non sostituiscono il test con l’account reale.

Per fermare il collegamento, disabilitare lo scheduler e rimuovere `GOOGLE_CALENDAR_REFRESH_TOKEN` dal server, quindi ridistribuire. Revocare l’accesso Google può revocare anche altri permessi dello stesso client OAuth: verificare l’effetto su Drive. Conservare `calendar_links` e l’agenda per mantenere storia e associazioni.

Fonti: [permessi Calendar](https://developers.google.com/workspace/calendar/api/auth), [creazione eventi](https://developers.google.com/workspace/calendar/api/v3/reference/events/insert), [aggiornamenti](https://developers.google.com/workspace/calendar/api/v3/reference/events/patch).
