# Sorgenti del catalogo SFT nel CRM

Il progetto autorevole è `02_Software/Design_System/sft-design-system`.
Questa cartella conserva i sorgenti delle personalizzazioni servite dal CRM, con estensione `.txt` per non includerli nella compilazione Next.js.

Il media kit si trova in `/design-system/index.html#media-kit`. I dati editoriali e i testi scaricabili sono in `public/design-system/media-kit/`. Le risorse fotografiche e i marchi restano sotto `public/design-system/brand/`.

Per ricostruire: riporta App.tsx, MediaKit.tsx e catalog.css in src/ del progetto autorevole, build-media-kit.py in scripts/ e i file del media kit in public/media-kit/. Esegui `python3 scripts/build-media-kit.py` e `npm run build`; copia dist/index.html, i nuovi bundle dist/assets/index-* e dist/media-kit/ in public/design-system/ del CRM. Il progetto autorevole esegue già il generatore ZIP nel comando build.

I loghi sono ricostruiti dal generatore `rebuild-logo.mjs.txt` (da collocare in scripts/rebuild-logo.mjs nel progetto autorevole). Eseguirlo prima di generare lo ZIP. Analisi e confronto prima/dopo in `logo-reconstruction/`.
