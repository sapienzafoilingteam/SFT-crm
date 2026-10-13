# Adozione visiva SFT nel CRM

Riferimenti: Design System SFT 1.1.1 (`02_Software/Design_System/sft-design-system`) e sito del team (`02_Software/Sito_Web/sapienza-foiling-team`).

## Fondazioni

`app/sft-tokens.css` contiene una copia dei token del sistema, inclusi i temi light/dark. I due token aggiuntivi `destructive-soft` descrivono le superfici degli errori. Aggiornare questa copia quando cambia il riferimento; confrontare i valori prima di sostituirla.

Il CSS operativo usa `muted-foreground` per il testo, `muted` per le superfici e `secondary` per gli accenti tenui. Non conserva gli alias ambigui del vecchio tema. `app/sft-workspace.css`, caricato dopo gli stili applicativi, definisce le composizioni condivise senza sostituire gli editor o i componenti Radix.

Kelson per titoli e marchio, Geist per controlli e testo, Geist Mono per metriche. Font mono e logo bianco provengono dal design system; la licenza Geist è in `public/fonts/Geist-OFL.txt`.

## Interazioni

- Azioni principali e controlli touch alti almeno 44 px; varianti compatte desktop da 36 px.
- Testo dei campi mobile da 16 px, focus visibile, metadati da 12 px.
- Tabelle con scorrimento interno; intestazioni e azioni che si distribuiscono su più righe.
- Salvataggio e annullamento rimangono visibili durante lo scorrimento dei moduli lunghi.
- Stati semantici con colori coordinati nei due temi; reparti identificati da nomi e icone con accento SFT condiviso.
- Movimento ridotto quando richiesto dal dispositivo.

Operazioni, gestione dei dati, API, permessi e integrazioni mantengono il comportamento precedente. I quattro componenti modificati perdono esclusivamente i colori inline dei reparti.

## Verifica locale, 14 ottobre 2026

69 test esistenti passati, controllo TypeScript e build di produzione riusciti. Controllate le viste principali in demo a 1280 px e la larghezza delle 13 viste principali a 390 px: nessuna espansione orizzontale della pagina. Ispezionati visivamente home, sponsor, bilancio, eventi, agenda, Recruiting dimostrativo, reparto Elettronica, richieste e dialogo sponsor. Homepage pubblica controllata separatamente con credenziali disabilitate; nessun accesso ai dati condivisi.

Queste verifiche non equivalgono a una verifica delle integrazioni reali o di ogni possibile record. Nessun push o deployment eseguito.
