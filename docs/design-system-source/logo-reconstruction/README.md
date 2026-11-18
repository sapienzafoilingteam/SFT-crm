# Ricostruzione dei loghi SFT — 22 ottobre 2026

Il precedente SVG ha 68 path e 68 wrapper. La variante originale contiene numerose tinte vicine al bordeaux e piccoli frammenti quasi bianchi; il ricalco presenta ondulazioni spurie, microsegmenti e raccordi discontinui. Il PDF del sito contiene una sola immagine raster e nessun disegno vettoriale, quindi non offre curve più pulite. La copia originale è conservata in sft-original-before.svg.

La nuova geometria è disegnata manualmente, senza riutilizzare i vecchi dati path: sei sagome chiuse e un cerchio. Conserva la composizione vela/velista/SFT e il viewBox 969 × 1280, con raccordi regolari, elementi nominati, title e desc. Le curve e alcuni dettagli sono stati regolarizzati: è una ricostruzione del marchio, non una conversione geometricamente identica. Tutte le varianti condividono esattamente la stessa geometria e un solo colore per file. Nessun font, raster incorporato, maschera o risorsa esterna.

Colori: original #802431, burgundy #822433, ink #1a1718, white #ffffff. Esportazioni PNG trasparenti a 2560 px di altezza. I percorsi pubblici esistenti sono conservati. Il generatore è scripts/rebuild-logo.mjs nel progetto autorevole; una copia è conservata nella cartella superiore. La build rigenera SVG, PNG e ZIP.

Verifiche: validità XML, sagome chiuse, assenza di dipendenze esterne, geometria uguale nelle quattro varianti, trasparenza e assenza di tagli ai bordi del PNG, stessa maschera alpha fra i colori, corrispondenza del contenuto ZIP. Confronto visivo in comparison.png.
