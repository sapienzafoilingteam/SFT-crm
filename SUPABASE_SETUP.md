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

Con la migrazione `202611110001_attendance.sql` il trigger `on_auth_user_created` crea automaticamente una membership per ogni nuovo account (invitato o registrato), che diventa attiva quando la mail viene confermata o l'invito accettato. La query sopra resta valida per attivare a mano un account.

Per il primo amministratore modifica `is_admin` tramite la console del proprietario del progetto. Nessun utente può autoassegnarsi privilegi. L'accesso ai dati richiede una membership attiva, che si attiva quando l'invito viene accettato o la mail di registrazione confermata.

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

## Registrazione e presenze alle riunioni

Migrazione: `supabase/migrations/202611110001_attendance.sql` (da eseguire dopo le precedenti, prima di pubblicare la nuova versione dell'app: l'accesso legge `members.full_name` e `members.team_id`).

- **Registrazione:** dalla schermata di accesso, "Non hai un account? Registrati" chiede email, password (almeno 12 caratteri), Nome Cognome con iniziali maiuscole e reparto. Abilita in Authentication → Providers → Email l'opzione *Allow new users to sign up* e lascia attiva la conferma email. La mail `cognome.matricola@studenti.uniroma1.it` è consigliata, non obbligatoria.
- **Password del team per registrarsi:** con `supabase/migrations/202611120001_registration_gate.sql` la registrazione si apre solo dopo aver inserito la password dell'account `sapienzafoilingteam@gmail.com`. Il database la confronta con l'hash già salvato da Supabase Auth (nessuna copia): se cambi la password di quell'account, cambia anche quella per registrarsi. La verifica rilascia un codice monouso valido 30 minuti; il trigger `registration_gate` su `auth.users` rifiuta ogni nuovo account senza codice valido, anche se creato chiamando Supabase direttamente. Dopo 5 tentativi errati dallo stesso indirizzo (o 50 in totale) la verifica si blocca per 15 minuti. Gli inviti da Authentication → Users → **Invite user** restano consentiti; **Add user** dalla console invece viene rifiutato, quindi per aggiungere qualcuno a mano usa l'invito.
- **Attivazione:** un nuovo account diventa attivo da solo quando la persona clicca il link di conferma nella mail (trigger `on_auth_user_confirmed`). Da Impostazioni → Account del team un amministratore o il Team Captain può disattivare chi lascia il team (il reparto lo corregge solo il Team Captain, vedi sotto); un account disattivato non si riattiva da solo. L'utente non può cambiare da solo nome o reparto.
- **Account esistenti:** al primo accesso dopo la migrazione chi non ha nome e reparto vede "Completa il profilo" (una sola volta).
- **Presenze:** nella pagina del reparto, sotto "Riunione in corso". Chi appartiene al reparto può segnare o togliere la presenza di qualsiasi membro del proprio reparto, in qualsiasi giorno; chi è di un altro reparto vede solo lo stato. Le regole sono applicate dalla funzione `set_attendance` nel database; ogni modifica è registrata in `audit_log`.
- **Pagina Presenze:** vedi sotto, "Elenco dei nomi". Si aggiorna con Supabase Realtime (la migrazione aggiunge `attendance` alla pubblicazione `supabase_realtime` se esiste) e, in mancanza, al ritorno sulla scheda e ogni 30 secondi.

## Ruoli: Team Captain e Capo Progetto

Migrazione: `supabase/migrations/202611130001_roles.sql` (dopo `202611120001_registration_gate.sql`, prima di pubblicare l'app: l'accesso legge `members.role`).

- **Registrazione:** oltre ai reparti si può scegliere **Team Captain** e spuntare **Capo Progetto**. Combinazioni ammesse: un reparto; un reparto + Capo Progetto; Team Captain da solo. Vietate: due reparti, reparto + Team Captain, Team Captain + Capo Progetto. Il database applica le stesse regole (vincolo `members_role_team` e funzione `member_assignment`); dati non validi lasciano il profilo da completare al primo accesso.
- **Team Captain:** vale come membro di ogni reparto: segna e toglie le presenze di chiunque in tutte le pagine dei reparti (`set_attendance`). È l'unico che, da Impostazioni → Account del team, può cambiare reparto e ruolo di un membro (`set_member_assignment`, registrato in `audit_log`). L'ultimo Team Captain attivo non può togliersi il ruolo da solo.
- **Amministratori:** possono ancora abilitare/disattivare gli account, ma non modificare reparto o ruolo (né dall'app né con update diretti: il permesso di update su `members` è limitato a `display_name`, `active`, `is_admin`).
- **Abilitazione:** con `supabase/migrations/202611130002_member_active.sql` (dopo quella dei ruoli) anche il Team Captain può abilitare o disattivare gli account da Impostazioni → Account del team, tramite la funzione `set_member_active` (registrata in `audit_log`). Nessuno può disattivare sé stesso né un account amministratore da qui.
- **Presenza del Team Captain:** con `supabase/migrations/202611130003_captain_attendance.sql` (dopo `202611130002_member_active.sql`) il Team Captain ha nella Home il riquadro "La tua presenza": una presenza al giorno senza reparto, che solo lui può segnare o togliere. Nella pagina Presenze compare in cima con "Team Captain" come reparto, e non compare quando si filtra un singolo reparto.

### Elenco dei nomi e tabella mensile

Migrazione: `supabase/migrations/202611150001_team_names.sql` (dopo `202611130003_captain_attendance.sql`, prima di pubblicare l'app: registrazione e Presenze leggono `available_names` e `team_name_list`).

- **Elenco:** la tabella `team_names` contiene i Nomi Cognomi del team. In registrazione (dopo la password del team) e in "Completa il profilo" si sceglie il proprio nome da un menù con i soli nomi liberi: ogni nome vale per un solo account. L'elenco non è leggibile senza codice di registrazione o account attivo.
- **Account esistenti:** un nome uguale a uno dell'elenco a meno di maiuscole e spazi viene allineato; un nome fuori elenco viene svuotato e l'interessato lo sceglie al prossimo accesso, mantenendo reparto, ruolo e presenze.
- **Pagina Presenze:** un mese per pagina (menù a tendina dei mesi, dalla prima riunione del 14 ottobre 2026; la data è `FIRST_MEETING` in `lib/attendance.ts`), tutti i nomi in ordine alfabetico e una colonna per ogni mercoledì. Ognuno parte "Assente" e diventa "Presente" quando la presenza viene segnata nella sezione del reparto; chi non si è ancora registrato risulta sempre assente. Le presenze segnate in giorni diversi dal mercoledì restano salvate ma non compaiono nella tabella.
- **Aggiungere o correggere un nome:** dall'SQL Editor, `insert into public.team_names values ('Nome Cognome');`. Per correggerne uno già usato: `update public.team_names set full_name = 'Nuovo' where full_name = 'Vecchio';` e `update public.members set full_name = 'Nuovo', display_name = 'Nuovo' where full_name = 'Vecchio';`.
- **Team Captain dalla tabella:** con `supabase/migrations/202611150002_captain_sheet.sql` (dopo `202611150001_team_names.sql`) il Team Captain segna o toglie le presenze con un clic direttamente nella tabella mensile, per tutti tranne gli altri Team Captain. Per chi non ha ancora un account la presenza si salva sul nome (`name_attendance`); quando quella persona si registra con quel nome e l'account diventa attivo, le presenze passano al suo account con il suo reparto. Gli altri membri continuano a segnare solo dalla sezione del proprio reparto.
- **Account del team visibili a tutti:** con `supabase/migrations/202611160001_members_visible.sql` ogni membro attivo vede in Impostazioni → Account del team l'elenco degli account (nome, email, reparto, ruolo, stato), in sola lettura. Solo il Team Captain ha i comandi per abilitare/disattivare e correggere reparto e ruolo.
- **Capo Progetto:** etichetta mostrata nelle presenze del reparto; non dà permessi aggiuntivi.
- Per nominare il primo Team Captain di un account esistente: `update public.members set role = 'team_captain', team_id = null where email = 'EMAIL';`
