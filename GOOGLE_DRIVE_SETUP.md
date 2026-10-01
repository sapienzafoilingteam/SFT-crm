# Drive del team nel CRM

La pagina `/drive` usa Google Drive come archivio. Supabase continua a gestire l’accesso al CRM, senza copiare i file o le autorizzazioni Google.

## Configurazione richiesta

1. Accedi alla [console Google Cloud](https://console.cloud.google.com/) con l’account del team, crea o scegli un progetto e abilita **Google Drive API**.
2. In **Google Auth Platform**, configura nome dell’app e contatti. Se il progetto è in modalità Testing, aggiungi `sapienzafoilingteam@gmail.com` ai test users. Per un’app External pubblicata, lo scope completo Drive è restricted e Google può richiedere verifica. La configurazione Internal è disponibile solo se l’organizzazione Google Workspace la supporta.
3. In **Clients**, crea un client OAuth di tipo **Web application**. Aggiungi alle Authorized JavaScript origins:
   - `https://crm.sapienzafoilingteam.com`
   - `https://sft-crm.vercel.app`
   - `http://127.0.0.1:3000` e `http://localhost:3000` per lo sviluppo.
4. Copia il **Client ID**, non il Client Secret. Questo flusso browser non usa un secret né redirect URI applicative.
5. Configura localmente e su Vercel Production/Preview:

```dotenv
NEXT_PUBLIC_GOOGLE_DRIVE_CLIENT_ID=CLIENT_ID.apps.googleusercontent.com
NEXT_PUBLIC_GOOGLE_DRIVE_ROOT_ID=root
NEXT_PUBLIC_GOOGLE_DRIVE_ACCOUNT_EMAIL=sapienzafoilingteam@gmail.com
```

Le tre variabili sono configurazione pubblica, non credenziali. Non inserire token o client secret in variabili `NEXT_PUBLIC_*`. Dopo una modifica alle variabili ridistribuisci l’app.

## Account e permessi

Il link `https://drive.google.com/drive/u/1/my-drive` è una vista dell’account attivo nel browser: `/u/1` non identifica il Drive del team. Per questo il CRM verifica che l’account autorizzato sia `sapienzafoilingteam@gmail.com`, poi apre la sua radice `root`.

Ogni persona deve poter autorizzare questo account; un invito al CRM non concede accesso a Google. Per membri che usano account individuali, è preferibile configurare un ID di cartella condivisa con i loro account e lasciare `NEXT_PUBLIC_GOOGLE_DRIVE_ACCOUNT_EMAIL` vuoto. Non distribuire password Google tramite il CRM.

Il browser richiede gli scope Drive completo e email: Drive completo consente gestione dei file già esistenti; `drive.file` limita invece l’app ai file creati o selezionati per l’app e non replica tutto Il mio Drive. Il token resta in memoria per la durata della pagina, non viene memorizzato su Supabase, localStorage o nei log. Alla scadenza occorre premere Connetti Google. Scollega rimuove il token dalla pagina; per revocare il consenso anche su Google usare la pagina delle autorizzazioni del proprio account Google.

## Operazioni

- Elenco paginato di cartelle/file, navigazione a breadcrumb, ricerca nella cartella, lista/griglia.
- Nuova cartella, caricamento e sostituzione di file binari con sessione di upload Google; limite 100 MB per file nel CRM.
- Rinomina e spostamento nel cestino, rispettando capabilities Google. Non è disponibile l’eliminazione definitiva.
- Download file ed export Docs in DOCX, Sheets in XLSX, Slides in PPTX, Drawings in PDF. Per la preview i documenti Google vengono esportati in PDF, secondo i limiti Google (export fino a 10 MB).
- Anteprima testo (fino a 2 MB), immagini, PDF, audio e video. Per formati non supportati, Apri in Google o Scarica.
- Modifica del contenuto di documenti Google nell’editor Google, tramite link; nessun editor Docs/Sheets viene ricreato nel CRM.
- Le shortcuts Google e navigazione del cestino non sono implementate. Le cartelle sono mostrate entro il percorso configurato. I permessi Google restano l’autorità; il percorso non è una nuova barriera di sicurezza.

In modalità demo le operazioni sono solo nella sessione del browser. In modalità Supabase senza Client ID appare lo stato “Collega il Drive del team”; nessun file dimostrativo viene presentato come file reale.

## Collaudo reale

Dopo la configurazione: un membro attivo apre Drive, autorizza Google, naviga in una cartella di prova, carica un file di prova, rinomina, visualizza, scarica e sposta nel cestino lo stesso file. Verificare anche account errato, permessi read-only e scadenza del token. Questo collaudo richiede l’account reale e deve essere completato dall’utente: l’agente non inserisce password Google né concede il consenso al posto dell’utente.

Fonti: [Google token model](https://developers.google.com/identity/oauth2/web/guides/use-token-model), [upload](https://developers.google.com/workspace/drive/api/guides/manage-uploads), [download/export](https://developers.google.com/workspace/drive/api/guides/manage-downloads), [scope Drive](https://developers.google.com/workspace/drive/api/guides/api-specific-auth).
