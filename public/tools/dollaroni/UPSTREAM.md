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
