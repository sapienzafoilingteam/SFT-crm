# Dollaroni embedded in SFT CRM

Source: https://github.com/val4mario-sketch/dollaroni-app
Commit: e163fd5521ad67069cbf8bce367a30cf16e1de8d
Version: 0.5.0. Imported 2026-10-30.

The original `src/engine`, `src/io` and `data` are byte-for-byte retained.
Preact and JSZip remain under `vendor`. The local Qwen/wllama runtime was removed
at the user’s request; Brumoth now calls Gemini through the authenticated CRM.

CRM adaptations:
- index.html: no separate PWA registration/manifest; add theme adapter.
- main.js: initialize CRM bridge before mounting, safe text-only boot errors.
- crm.js (new): origin/source checked messages, account/season draft scope, project load/change/save handshake and Gemini request/cancellation bridge.
- app.js: shared project load/save, explicit local-file save, replacement confirmation and Ctrl+Shift+S.
- store.js: scoped autosave, flush on pagehide/visibility/unmount, cancellable file-input fallback.
- ai/llm.js: Gemini bridge client, no model downloads or API key in browser.
- app/views/assistant.js: Gemini modes/status, deterministic fallback, explicit action confirmations.
- styles/crm.css (new): semantic tokens, neutral editing surfaces, compact controls and responsive corrections.
- updates.js: version information remains; updates are deployed with the CRM, never self-installed.

Do not overwrite these adaptations blindly when updating the upstream snapshot.
The CRM's own service worker remains responsible for offline behavior; no Dollaroni
service worker or local updater is registered by the embedded entry point.

## 0.5.0-crm.4 (Mario, 16/11/2026)

- crm.3: protezione del lavoro non salvato con copia di recupero, avviso se il file locale è cambiato, nuovi controlli sui conti (valori negativi, id duplicati, voci a costo zero, carbonio su voci a mano, foil senza gruppo).
- crm.4: interfaccia per il telefono (fino a 760 px): `styles/mobile.css` (nuovo, caricato dopo `crm.css`), etichette `data-label` e classi nelle viste Voci, Listino, Performance Rating, barra in alto con testi brevi, `go()` porta in vista la sezione scelta. Sopra 760 px l'aspetto non cambia.
- Nessuna modifica a `crm.js`, `crm.css`, protocollo `postMessage` o pagina host. Test di Dollaroni 81/81.

## 0.7.0-crm.1 (Mario, 16/11/2026)

- Dalla 0.7.0 di `val4mario-sketch/dollaroni-app` (commit `3414efc`): regole 2027 con la libreria di SuMoth Agora (`data/official/2027_SuMoth_Agora_library.json`, v2026.01): prezzi, frazione di resina in massa per processo × famiglia di fibra, prepreg, densità standard delle anime; sconti di provenienza applicati come su Agora; nel 2027 niente xlsx del Layup Calculator, solo le tabelle di layup come immagini. Messaggi tradotti in italiano.
- Dalla 0.6.0: Brumoth riconosce anche le domande in inglese (solo le parole chiave in `src/engine/assistant.js` e `actions.js`; le risposte restano in italiano).
- Aggiornare la libreria quando Agora la cambia: `python scripts/update-dollaroni-agora.py`, poi i test di Dollaroni.
- Nessuna modifica a `crm.js`, `crm.css`, `llm.js`, pagina host o endpoint Gemini. Test di Dollaroni 83/83.
