"""Scarica la libreria di SuMoth Agora (prezzi e frazioni di resina per le regole 2027) in data/official/.

Uso (dalla cartella del CRM):  python scripts/update-dollaroni-agora.py
Stampa la versione nuova e i valori cambiati; poi lanciare i test (alcuni totali 2027 possono cambiare).
"""
import json
import pathlib
import urllib.request

URL = 'https://agora.sumoth.org/library.json'
DEST = pathlib.Path(__file__).resolve().parent.parent / 'public' / 'tools' / 'dollaroni' / 'data' / 'official' / '2027_SuMoth_Agora_library.json'


def flat(x, path=''):
    if isinstance(x, dict):
        for k, v in x.items():
            yield from flat(v, f'{path}/{k}')
    else:
        yield path, x


def main():
    req = urllib.request.Request(URL, headers={'User-Agent': 'Dollaroni'})
    raw = urllib.request.urlopen(req, timeout=30).read()
    new = json.loads(raw)
    if new.get('app') != 'sumoth-agora' or new.get('kind') != 'library' or 'fibers' not in new.get('lib', {}):
        raise SystemExit('File inatteso: non è la libreria di SuMoth Agora')
    old = json.loads(DEST.read_text(encoding='utf-8')) if DEST.exists() else {'lib': {}}
    a, b = dict(flat(old['lib'])), dict(flat(new['lib']))
    changes = [f'  {k}: {a.get(k, "-")} -> {b.get(k, "-")}' for k in sorted(a.keys() | b.keys()) if a.get(k) != b.get(k)]
    DEST.write_bytes(raw)
    print(f"Libreria Agora {old.get('version', '-')} -> {new['version']} ({new.get('updated', '')})")
    print('\n'.join(changes) if changes else '  nessun valore cambiato')


if __name__ == '__main__':
    main()
