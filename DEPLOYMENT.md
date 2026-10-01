# CRM online

Pubblicato il 1 ottobre 2026 su https://sft-crm.vercel.app.

- Progetto Vercel: `nannipy-projects/sft-crm`, separato dal sito pubblico del team.
- Build: Next.js con `npm run build`, installazione `npm ci`.
- Modalità: Supabase; le tre variabili pubbliche sono configurate su Vercel in produzione e preview. File `.env*` esclusi dall’upload e dai commit.
- L’utente ha confermato Site URL e Redirect URL Supabase impostati su `https://sft-crm.vercel.app`.
- I membri devono essere invitati in Supabase Auth e abilitati in `public.members` con `active=true`. La verifica email da sola non concede accesso al CRM.

## Verifiche

Build locale e online riuscite, sei test passati. Impostazioni verificate su desktop e a 390px senza overflow orizzontale. Il pulsante Salva pagina in fondo usa la stessa funzione del pulsante iniziale ed è stato verificato nella demo. La pagina online mostra il form di accesso; il servizio Supabase Auth risponde. La prova completa con due utenti reali (accesso via email, salvataggi condivisi, allegati) richiede i loro account e resta da svolgere.

## Aggiornamenti

Dalla cartella collegata: `vercel deploy --prod --scope nannipy-projects`. Le variabili sono già presenti su Vercel. Modificarle nel pannello Vercel e ridistribuire se cambia il progetto Supabase. `scripts/configure-vercel-env.cjs` serve alla prima configurazione e non mostra i valori locali.

Per un problema dopo un aggiornamento, ripromuovere una precedente versione funzionante dal pannello Deployments di Vercel; le modifiche ai dati Supabase non vengono annullate dal rollback del frontend. Nessuna migrazione nuova è stata applicata durante questo deploy.

## Sottodominio del team

`crm.sapienzafoilingteam.com` è collegato al progetto Vercel `sft-crm`. DNS verificato correttamente da Vercel il 1 ottobre 2026. Il record configurato su Cloudflare è:

| Tipo | Nome | Destinazione | Proxy | TTL |
| --- | --- | --- | --- | --- |
| CNAME | crm | 211f3cc273047cb0.vercel-dns-017.com | Solo DNS | Auto |

Dopo aver aggiunto il record: verificare con `vercel domains verify crm.sapienzafoilingteam.com --scope nannipy-projects` e aprire il sito in HTTPS. Impostare Site URL Supabase su `https://crm.sapienzafoilingteam.com` e aggiungere lo stesso indirizzo alle Redirect URLs. Conservare la vecchia URL Vercel tra gli indirizzi autorizzati per i link già condivisi. Il sito principale rimane associato al suo progetto Vercel.

L’utente ha confermato anche Site URL e Redirect URL Supabase aggiornati al sottodominio.

## Autenticazione aggiornata

Il CRM usa invito personale iniziale e password per gli accessi successivi, con recupero password per account esistenti. La disattivazione della registrazione pubblica è stata verificata sul servizio Auth collegato (`disable_signup=true`). Il deploy `dpl_3dkwasiBXu9EZJnp4YFRQjNh8qM7` è pubblicato in produzione. Sul sottodominio sono stati verificati il modulo email/password e la schermata di recupero password. Nessun invito reale è stato inviato dall’agente e nessuna password di un utente è stata inserita o modificata durante le verifiche; la prova completa invito → scelta password → nuovo accesso resta da svolgere con un membro reale.

## Icone della Home

Pubblicato il deploy `dpl_4Tjvm1LPWjkjRSkegsA8ePww2zmv`: la sezione “A portata di mano” si chiama “Home”. Ogni link ha un pulsante di modifica e un selettore di 18 icone, oltre alla scelta automatica basata sul contenuto. La migrazione `202610010002_link_icons.sql` aggiunge `links.icon`; l’utente ha confermato l’esecuzione e il servizio collegato riconosce la colonna. Build, TypeScript e sei test passati. Selezione, salvataggio e persistenza dopo ricaricamento verificati in demo; selettore controllato anche a 390px. Il salvataggio online con un membro autenticato resta da verificare.

## Scadenze condivise

La Home usa il componente Scadenze per tutte le attività aperte della stagione. Le sette pagine reparto e la panoramica Management usano lo stesso componente filtrato per reparto. Il pulsante Nuova scadenza precompila il reparto; data, priorità, stato e note vengono salvati nella tabella deliveries esistente, senza migrazioni. Sono mostrati anche Oggi e In ritardo; le attività completate e archiviate non compaiono. Verificati in demo creazione dal reparto, presenza nella Home, isolamento da un altro reparto e layout a 390px. TypeScript, build e sei test passati. Il salvataggio live autenticato resta da verificare con un membro. In caso di problemi al componente, ripromuovere il deploy precedente da Vercel; i dati rimangono conservati.

## Drive del team

La pagina `/drive` integra direttamente Google Drive tramite OAuth nel browser. Configurati Client ID pubblico, radice `root` e account `sapienzafoilingteam@gmail.com` su Vercel Production e Preview. Nessun token Google o client secret è salvato nel repository o in Supabase. Sono disponibili navigazione, ricerca nella cartella, vista lista/griglia, cartelle, upload/sostituzione, rinomina, cestino, anteprima e download/export. Docs e Sheets si modificano nell’editor Google.

TypeScript, build locale e 13 test passati. In demo verificati navigazione, creazione cartella, upload, preview testo, rinomina e rimozione. L’evento download non è stato rilevato dal browser di anteprima; il contenuto del download è stato verificato nei test del client API. Rimane da verificare il download effettivo nel browser e il flusso completo sul Drive reale dopo l’autorizzazione Google dell’utente. Non sono stati modificati file Google reali dall’agente. La configurazione Google Cloud (Drive API, origini autorizzate, test users/scopes) deve essere completata come in GOOGLE_DRIVE_SETUP.md. Nessuna migrazione Supabase necessaria.
