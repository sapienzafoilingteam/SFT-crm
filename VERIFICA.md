# Verifica della prima interfaccia — 1 ottobre 2026

## Controlli automatici

- TypeScript: nessun errore.
- Build di produzione Next.js: completata.
- Cinque test passati: importi esatti, totali/CSV, ricorrenze mensili, URL sicuri e migrazione Postgres.
- La prova del database crea tutte le tabelle ed inserisce record di ogni tipo; controlla relazioni, membership/RLS, impossibilità di autoassegnare privilegi, audit, archiviazione senza DELETE, vincolo delle ricorrenze, revoca e rollback di un batch con conflitto di versione.

Il test usa Postgres in memoria con interfacce Auth e Storage simulate. Non certifica servizi online, consegna email, upload reali o configurazione del progetto Supabase che deve ancora essere creato.

## Controlli nel browser

- Home, Management, Kanban sponsor, schede eventi/contratti, template, sottoteam, Bilancio, Agenda e Impostazioni visualizzati.
- Inserimento costo di 12,50 €: totale da 410,50 € a 423,00 €; archiviazione, ripristino e nuova archiviazione; ritorno a 410,50 €.
- Pagina Scafo: modifica del riepilogo, salvataggio, comparsa della revisione e ripristino manuale del contenuto dimostrativo originale.
- Cambio fase RINA e ritorno alla fase iniziale.
- Checklist evento: completamento e riapertura dell'attività “Confermare spazio”.
- Tre delivery create dal modello mensile: secondo tentativo propone zero nuovi record. Gli elementi creati per il test sono stati archiviati, restano recuperabili.
- Template sponsor: variabili compilate e messaggio editabile pronto per Gmail; nessuna email inviata.
- Persistenza dopo navigazione/ricaricamento.
- Home light/dark, Home e Agenda a 390 px; navigazione mobile funzionante. Nessun overflow della pagina rilevato nella verifica mobile dell'Agenda. Su telefono Sponsor e Agenda aprono la vista lista.

## Da verificare con il progetto Supabase reale

Login email e redirect, autorizzazioni con due utenti reali, upload/download, salvataggi condivisi e conflitti tra sessioni, backup/ripristino. Link Drive, date definitive, modelli contrattuali e dati della stagione vanno configurati dal team.
