# Drive condiviso nel CRM

Il CRM accede al Drive di `sapienzafoilingteam@gmail.com` tramite il proprio server. I membri attivi accedono con la sola sessione Supabase: non devono usare un account Google o conoscere le credenziali del team. Ogni chiamata verifica la sessione presso Supabase e `members.active`, comprese lettura, download, ricerca e modifiche. Tutti i membri attivi possono usare le operazioni disponibili nel Drive del team.

## Configurazione del responsabile

1. Abilitare Google Drive API nel progetto Google Cloud del client OAuth Web.
2. Aggiungere agli URI di reindirizzamento autorizzati del client `http://localhost:4387/callback`.
3. Se l'app è in Testing, aggiungere solo l'account Google del team ai test users.
4. Eseguire dalla cartella del progetto:

   ```sh
   node scripts/connect-drive.mjs /percorso/client_secret.json
   ```

5. Aprire il link generato e autorizzare **sapienzafoilingteam@gmail.com**. Il server locale verifica state, PKCE, account e scope. Il collegamento termina dopo 15 minuti se non completato.
6. Il comando importa Client ID e Client Secret e salva il refresh token in `.env.local`, con permessi `0600`, senza stamparli. Il JSON deve rimanere fuori dalla repository.
7. Configurare su Vercel, come variabili **server**, `GOOGLE_DRIVE_CLIENT_ID`, `GOOGLE_DRIVE_CLIENT_SECRET`, `GOOGLE_DRIVE_REFRESH_TOKEN`, poi effettuare un nuovo deploy. Nessuna di queste variabili deve avere il prefisso `NEXT_PUBLIC_`.

Restano necessari `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` e `NEXT_PUBLIC_DATA_MODE=supabase`. La root è `NEXT_PUBLIC_GOOGLE_DRIVE_ROOT_ID=root` per il My Drive del team. Nessuna migrazione Supabase aggiuntiva è richiesta.

**Google in Testing:** con lo scope Drive il refresh token scade normalmente dopo sette giorni. Per evitare il rinnovo settimanale il responsabile deve passare l'app a In production; lo scope Drive è ristretto e rimangono applicabili i requisiti Google di verifica e i limiti per app non verificate. Anche fuori dal Testing una revoca dell'autorizzazione può richiedere un nuovo collegamento del responsabile. I membri non devono effettuare OAuth.

## File e spazio

- Navigazione, ricerca nella cartella, cartelle nuove, upload, rinomina, sostituzione del contenuto, cestino, anteprima e download.
- I documenti Google possono essere esportati. Per modificarne il contenuto si apre l'editor Google, che richiede un account Google con i propri permessi sul documento.
- Lo spazio arriva da `about.storageQuota`: il totale usato e il limite riguardano l'account Google (Drive, Gmail e Foto); vengono mostrati separatamente uso di Drive e cestino. Un limite omesso non viene presentato come zero o come illimitato.
- La barra dello spazio si aggiorna entrando nella pagina e premendo Aggiorna.
- I file eliminati vengono spostati nel cestino, non cancellati definitivamente.
- Limite dell'interfaccia: 100 MB per upload/download; export Google Docs limitato da Google. Upload oltre il limite: usare Google Drive.

## Confine di sicurezza

`/api/drive` verifica JWT e membership prima di contattare Google. Usa solo URL HTTPS del dominio Google e percorsi Drive consentiti; rifiuta DELETE e destinazioni esterne. Client Secret, refresh token e access token restano sul server. Le risposte non vengono memorizzate in cache. Non vengono registrati token, risposte OAuth o contenuti di file.

Gli upload usano sessioni resumable: il server autorizza la creazione/sostituzione, poi il browser invia il file direttamente all'URL della singola sessione Google, senza token OAuth e senza passare dal limite di payload Vercel. L'URL di sessione consente solo quell'upload ed è riservato all'utente che lo avvia: non condividerlo. Una sessione già concessa può completarsi anche se il membro viene disattivato successivamente; le nuove operazioni richiedono sempre membership attiva.

Il browser non può fare operazioni generali su Google attraverso questo URL. Le anteprime rimangono Blob locali; i PDF sono visualizzati in un iframe isolato. La modalità mock continua a funzionare senza Google, ma non inventa dati di spazio.

## Collaudo

Verificare con un membro attivo lettura, upload piccolo, download, anteprima, rinomina e cestino di un file di prova. Verificare che un secondo membro apra il Drive senza autorizzazione Google. Un membro disattivato e una richiesta anonima devono essere rifiutati. I test automatici coprono questi controlli del server e le operazioni REST; l'autorizzazione reale richiede l'account del responsabile.

## Cartelle dei reparti

Il comando `node --import tsx scripts/provision-drive.ts` crea le sette cartelle dei reparti nella root configurata, riutilizza quelle marcate con `appProperties.sftTeam` oppure una cartella dal nome esatto e non crea duplicati a ogni apertura della pagina. In caso di nomi ambigui si ferma per evitare di scegliere file sbagliati. Salva la mappa in `GOOGLE_DRIVE_TEAM_FOLDERS`, variabile server JSON da configurare su Vercel insieme alle credenziali Google.

La pagina di ogni reparto mostra esclusivamente la propria cartella come punto di partenza e permette di navigare nelle sottocartelle. Il percorso si ferma alla root del reparto; la pagina Drive principale rimane il punto di accesso all'intero Drive. Queste cartelle organizzano i contenuti: tutti i membri attivi mantengono accesso a tutti i reparti, come richiesto per il CRM.

Trascinamento dei file disponibile sia nella pagina Drive sia nei reparti, anche per più file insieme. La destinazione è la cartella attualmente aperta; cartelle trascinate non sono accettate. Sono gestiti permessi, caricamento in corso, limite 100 MB e fallimenti parziali. L'associazione rimane valida anche se si rinomina la cartella su Google Drive. Dopo spostamento nel cestino serve il ripristino su Drive prima di usare nuovamente il reparto.
