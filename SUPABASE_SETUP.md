# Collegare il workspace a Supabase

Lo schema e il codice sono pronti; non è stato creato o modificato alcun progetto Supabase online.

## 1. Crea il progetto e applica lo schema

Crea un progetto nuovo e apri il SQL Editor. Esegui il contenuto di:

`supabase/migrations/202610010001_workspace.sql`

La migrazione è atomica, destinata a un database nuovo e si esegue una sola volta. Crea tabelle, stagioni/reparti, policy e bucket privato `team-documents`. Non contiene aziende, costi o contratti demo. Le date delle stagioni sono indicative.

Se usi Supabase CLI, collega esplicitamente il progetto corretto e applica le migrazioni con il normale flusso CLI. Non eseguire reset su database con dati reali.

## 2. Configura gli account

In Authentication → URL Configuration:

- Site URL: l'indirizzo dell'app, inizialmente `http://localhost:3000`.
- Redirect URLs: aggiungi l'indirizzo locale effettivo ed eventualmente quello di produzione.

Invita i membri da Authentication → Users. Per ogni account invitato, attiva la membership attraverso il SQL Editor, sostituendo l'email:

```sql
insert into public.members (id, display_name, active, is_admin)
select id, coalesce(raw_user_meta_data->>'full_name', email), true, false
from auth.users
where email = 'EMAIL_DEL_MEMBRO'
on conflict (id) do update set active = true;
```

Per il primo amministratore modifica `is_admin` tramite la console del proprietario del progetto. Nessun utente può autoassegnarsi privilegi. Un invito Auth da solo non autorizza l'accesso ai dati: serve una membership attiva.

L'app usa account personali e link di accesso email. I membri attivi condividono i contenuti operativi. SMTP e invio email reali vanno configurati/verificati nel progetto Supabase.

## 3. Configura l'app

Copia `.env.example` in `.env.local` e compila:

```dotenv
NEXT_PUBLIC_DATA_MODE=supabase
NEXT_PUBLIC_SUPABASE_URL=https://IL_TUO_PROGETTO.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=CHIAVE_PUBBLICA_DEL_PROGETTO
```

Usa una publishable key (o la anon key legacy del progetto), mai `service_role` o una chiave segreta. Riavvia Next.js.

Per tornare alla demo imposta `NEXT_PUBLIC_DATA_MODE=mock` e riavvia. I dati demo restano separati nel browser, non vengono importati automaticamente.

## 4. Primo utilizzo

Il database operativo parte vuoto:

1. Configura i link in Impostazioni.
2. Apri ogni sottoteam, crea la pagina e salva i blocchi.
3. Crea modelli mensili in Agenda → Modelli mensili.
4. Aggiungi template email, offerte e documenti ufficiali.
5. Inserisci o importa, dopo verifica, i dati reali del team.

Per migrare il vecchio prototipo esporta le aziende da ciascun browser e salva separatamente gli allegati IndexedDB. È necessaria una mappatura degli ID e degli stati: non importare un vecchio “Vinto” come incasso verificato. Un importatore del formato legacy non è incluso in questa prima interfaccia.

## 5. Accessi, file e conflitti

- RLS richiede membership attiva su tutte le tabelle operative.
- Storage privato: membri attivi possono caricare e leggere; documenti scaricati tramite URL firmati brevi.
- Formati: PDF, DOCX, PPTX, PNG, JPEG e WebP; massimo 20 MB.
- Archiviare i metadati non elimina il file; il ripristino mantiene il collegamento.
- La funzione `apply_changes` applica i cambi in transazione. La versione deve corrispondere a quella letta: in caso di conflitto l'intero salvataggio fallisce. Ricarica e confronta i contenuti prima di riprovare.
- L'audit viene scritto dal database e non è modificabile dai membri.

Per revocare un membro:

```sql
update public.members set active = false where id = 'UUID_DEL_MEMBRO';
```

La revoca impedisce nuove richieste a dati e Storage; un URL firmato già emesso rimane valido fino alla breve scadenza. Per esigenze di revoca immediata degli account, gestire anche la sessione Auth dalla console.

## 6. Collaudo sul progetto reale

Prima di usare dati reali verifica con due account:

- Salvataggi condivisi, entrambe le stagioni e pagine dei reparti.
- Accesso negato a utenti non membri o revocati.
- Upload e download di un file reale.
- Modifica simultanea dello stesso record: il secondo salvataggio viene respinto.
- Costi, filtri, archivio/ripristino e generazione mensile senza duplicati.
- Backup dei dati e dei file e prova di ripristino.

I test locali già presenti verificano SQL e policy in Postgres in memoria. Il servizio Auth/Storage online e l'invio dei link email restano da collaudare dopo la creazione del progetto.

## Accesso su invito con password

In Authentication → Sign In / Providers disattiva **Allow new users to sign up** e lascia attivo il provider Email. Questo blocca la registrazione pubblica anche attraverso le API: nascondere il pulsante di registrazione non sarebbe sufficiente.

Per ogni membro:

1. Da Authentication → Users usa **Invite user**, inserendo l’email personale. Il link ricevuto è individuale; non usare un link generico da distribuire a tutti.
2. Abilita lo stesso utente in `public.members` con la query indicata sopra (`active=true`).
3. Il membro apre il link di invito, trova l’email già verificata e sceglie una password di almeno 12 caratteri.
4. Dopo il primo accesso usa email e password da `https://crm.sapienzafoilingteam.com`; non deve richiedere un magic link ogni volta.

Chi ha già usato il vecchio accesso via link ed è ancora autenticato viene invitato a scegliere una password. Chi non ha più la sessione può usare **Password dimenticata?**, che invia istruzioni solo agli account esistenti e non crea utenti. Il recupero torna alla Site URL già configurata: non serve aggiungere un percorso callback nuovo. Conserva nei template Supabase il collegamento standard `{{ .ConfirmationURL }}` per Invite user e Reset password.

Il campo `password_configured` nei metadati dell’utente serve solo alla schermata di completamento; non concede permessi. L’accesso ai dati continua a dipendere dalla membership attiva e dalle policy RLS. Le password vengono gestite da Supabase Auth e non sono salvate nei record del CRM, nei log o nel browser dall’app.

Se il link scade, invia un nuovo invito o usa il recupero password per un account già creato. Dopo la configurazione verifica un invito reale, il salvataggio della password, l’uscita e un nuovo accesso con email/password.
