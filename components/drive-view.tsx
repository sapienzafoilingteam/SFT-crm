"use client";
import { useEffect, useRef, useState } from "react";
import {
  FolderOpen,
  FileText,
  Upload,
  Plus,
  Download,
  Pencil,
  Trash2,
  Search,
  ArrowUpRight,
  ChevronRight,
  LayoutGrid,
  List,
  RefreshCw,
  Eye,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { live } from "@/lib/repository";
import { sharedDriveClient, driveStatus, driveStorage, DriveStorage } from "@/lib/drive-browser";
import {
  DriveError,
  DriveFile,
  DRIVE_FOLDER,
  GOOGLE_PREFIX,
} from "@/lib/google-drive";
import { driveDemo, DemoFile } from "@/lib/drive-demo";

const rootId = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_ROOT_ID || "root";
function storageBytes(value?: string) {
  if (value === undefined) return "non disponibile";
  const bytes = Number(value);
  if (!Number.isFinite(bytes)) return "non disponibile";
  return bytes >= 1073741824 ? `${(bytes / 1073741824).toFixed(1)} GB` : `${(bytes / 1048576).toFixed(1)} MB`;
}
function fileSize(size?: string) {
  const bytes = Number(size || 0);
  return bytes
    ? bytes >= 1048576
      ? `${(bytes / 1048576).toFixed(1)} MB`
      : `${Math.max(1, Math.round(bytes / 1024))} KB`
    : "—";
}
function googleLink(file: DriveFile) {
  const fallback = `https://drive.google.com/file/d/${encodeURIComponent(file.id)}/view`;
  try {
    const url = new URL(file.webViewLink || fallback);
    return ["drive.google.com", "docs.google.com"].includes(url.hostname) &&
      url.protocol === "https:"
      ? url.href
      : fallback;
  } catch {
    return fallback;
  }
}
export function DriveView({ team }: { team?: { id: string; name: string } } = {}) {
  const demo = !live;
  const [ready, setReady] = useState(false);
  const [checking, setChecking] = useState(!demo);
  const [storage, setStorage] = useState<DriveStorage | null>(null);
  const [path, setPath] = useState([
    { id: demo ? (team ? `demo-${team.id}` : "demo-root") : rootId, name: team?.name || "Drive del team" },
  ]);
  const folder = path[path.length - 1];
  const [rows, setRows] = useState<DriveFile[]>([]);
  const [folderMeta, setFolderMeta] = useState<DriveFile | null>(null);
  const [demoFiles, setDemoFiles] = useState<DemoFile[]>(driveDemo);
  const demoBlobs = useRef(new Map<string, Blob>());
  const [inputSearch, setInputSearch] = useState("");
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const dragDepth = useRef(0);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [pageToken, setPageToken] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [dialog, setDialog] = useState<{
    kind: "folder" | "rename" | "trash";
    file?: DriveFile;
  } | null>(null);
  const [name, setName] = useState("");
  const [preview, setPreview] = useState<{
    file: DriveFile;
    url?: string;
    text?: string;
    mime?: string;
  } | null>(null);
  const uploadInput = useRef<HTMLInputElement>(null);
  const replaceInput = useRef<HTMLInputElement>(null);
  const replaceTarget = useRef<DriveFile | null>(null);
  const connected = demo || ready;
  const canAdd = demo || folderMeta?.capabilities?.canAddChildren === true;
  const api = ready ? sharedDriveClient() : null;
  useEffect(() => {
    const timeout = setTimeout(() => setSearch(inputSearch.trim()), 300);
    return () => clearTimeout(timeout);
  }, [inputSearch]);
  useEffect(() => {
    if (demo) return;
    let active = true;
    driveStatus(team?.id).then(value => { if (active) {
      if (team && value.folderId) setPath([{ id: value.folderId, name: team.name }]);
      setReady(value.connected);
    } })
      .catch(e => { if (active) setError(e.message); })
      .finally(() => { if (active) setChecking(false); });
    return () => { active = false; };
  }, [demo, team?.id, team?.name]);
  useEffect(() => {
    if (!ready || team) return;
    let active = true;
    driveStorage().then(value => { if (active) setStorage(value); })
      .catch(() => { if (active) setStorage(null); });
    return () => { active = false; };
  }, [ready, refresh, team]);
  useEffect(
    () => () => {
      if (preview?.url) URL.revokeObjectURL(preview.url);
    },
    [preview],
  );
  useEffect(() => {
    setInputSearch("");
    setSearch("");
    setPageToken("");
    setPreview(null);
  }, [folder.id]);
  useEffect(() => {
    if (demo) {
      setRows(
        demoFiles
          .filter(
            (f) =>
              f.parents?.includes(folder.id) &&
              f.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
          )
          .sort(
            (a, b) =>
              Number(b.mimeType === DRIVE_FOLDER) -
                Number(a.mimeType === DRIVE_FOLDER) ||
              a.name.localeCompare(b.name),
          ),
      );
      return;
    }
    if (!ready) return;
    let active = true;
    setLoading(true);
    setError("");
    setRows([]);
    setPageToken("");
    setFolderMeta(null);
    const client = sharedDriveClient();
    Promise.all([client.metadata(folder.id), client.list(folder.id, search)])
      .then(([metadata, result]) => {
        if (active) {
          setFolderMeta(metadata);
          setRows(result.files);
          setPageToken(result.nextPageToken || "");
        }
      })
      .catch((e) => {
        if (active) {
          setError(e.message);
          if (e instanceof DriveError && e.status === 401) setReady(false);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [demo, ready, folder.id, search, refresh, demoFiles]);
  async function perform(action: () => Promise<void>) {
    if (busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      await action();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Operazione non riuscita.");
      if (e instanceof DriveError && e.status === 401) {
        setReady(false);
        setRows([]);
      }
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  }
  async function content(file: DriveFile, forPreview = false) {
    if (!demo) {
      if (!api) throw new Error("Drive del team non disponibile.");
      return api.download(file, forPreview);
    }
    const existing = demoBlobs.current.get(file.id);
    const text = demoFiles.find((f) => f.id === file.id)?.demoText;
    if (!existing && text === undefined)
      throw new Error("Contenuto non disponibile nella demo.");
    return {
      blob: existing || new Blob([text!], { type: "text/plain" }),
      name: file.name,
    };
  }
  function download(file: DriveFile) {
    void perform(async () => {
      const result = await content(file);
      const url = URL.createObjectURL(result.blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = result.name;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setNotice("Download avviato.");
    });
  }
  function openPreview(file: DriveFile) {
    void perform(async () => {
      const result = await content(file, true);
      const mime = result.blob.type || file.mimeType;
      if (mime.startsWith("text/") && result.blob.size < 2 * 1024 * 1024)
        setPreview({ file, text: await result.blob.text(), mime });
      else if (
        mime.startsWith("image/") ||
        mime === "application/pdf" ||
        mime.startsWith("video/") ||
        mime.startsWith("audio/")
      )
        setPreview({ file, url: URL.createObjectURL(result.blob), mime });
      else setPreview({ file, mime });
    });
  }
  function upload(files: FileList | File[] | null, target?: DriveFile | null) {
    if (!files?.length) return;
    const selected = Array.from(files);
    void perform(async () => {
      let count = 0;
      try {
        for (const file of selected) {
          if (file.size > 100 * 1024 * 1024)
            throw new Error("Limite di caricamento: 100 MB per file.");
          if (demo) {
            const id = target?.id || crypto.randomUUID();
            demoBlobs.current.set(id, file);
            setDemoFiles((old) => [
              ...old.filter((f) => f.id !== id),
              {
                id,
                name: target?.name || file.name,
                mimeType: file.type || "application/octet-stream",
                size: String(file.size),
                modifiedTime: new Date().toISOString(),
                parents: [folder.id],
                capabilities: {
                  canDownload: true,
                  canEdit: true,
                  canTrash: true,
                },
              },
            ]);
          } else {
            if (!api) throw new Error("Drive del team non disponibile.");
            await api.upload(folder.id, file, target?.id);
          }
          count++;
        }
        setNotice(`${count} file ${target ? "aggiornato" : count === 1 ? "caricato" : "caricati"}.`);
      } catch (error) {
        if (count) setNotice(`${count} file caricati prima dell’interruzione. Gli altri non sono stati caricati.`);
        throw error;
      } finally {
        setRefresh((n) => n + 1);
        if (uploadInput.current) uploadInput.current.value = "";
        if (replaceInput.current) replaceInput.current.value = "";
        replaceTarget.current = null;
      }
    });
  }
  function dropFiles(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    dragDepth.current = 0;
    setDragging(false);
    if (!event.dataTransfer.types.includes("Files")) return;
    if (!canAdd || busyRef.current || loading) {
      setError(loading || busyRef.current ? "Attendi la fine dell’operazione prima di caricare altri file." : "Non hai il permesso di caricare file in questa cartella.");
      return;
    }
    const items = Array.from(event.dataTransfer.items);
    if (items.some(item => item.webkitGetAsEntry?.()?.isDirectory)) {
      setError("Trascina i file, non le cartelle. Puoi creare le sottocartelle con Nuova cartella.");
      return;
    }
    upload(Array.from(event.dataTransfer.files));
  }
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const current = dialog;
    if (!current) return;
    const clean = name.trim();
    if (current.kind !== "trash" && !clean) {
      setError("Inserisci un nome.");
      return;
    }
    await perform(async () => {
      if (demo) {
        if (current.kind === "folder")
          setDemoFiles((old) => [
            ...old,
            {
              id: crypto.randomUUID(),
              name: clean,
              mimeType: DRIVE_FOLDER,
              parents: [folder.id],
              capabilities: {
                canEdit: true,
                canTrash: true,
                canAddChildren: true,
              },
            },
          ]);
        if (current.kind === "rename")
          setDemoFiles((old) =>
            old.map((f) =>
              f.id === current.file?.id ? { ...f, name: clean } : f,
            ),
          );
        if (current.kind === "trash")
          setDemoFiles((old) => old.filter((f) => f.id !== current.file?.id));
      } else {
        if (!api) throw new Error("Drive del team non disponibile.");
        if (current.kind === "folder") await api.createFolder(folder.id, clean);
        if (current.kind === "rename")
          await api.rename(current.file!.id, clean);
        if (current.kind === "trash") await api.trash(current.file!.id);
      }
      setDialog(null);
      setRefresh((n) => n + 1);
      setNotice(
        current.kind === "trash"
          ? (demo ? "Elemento rimosso dalla demo." : "Elemento spostato nel cestino di Drive.")
          : "Modifiche salvate.",
      );
    });
  }
  const controls = (file: DriveFile) => (
    <div className="drive-file-actions">
      {file.mimeType !== DRIVE_FOLDER && (
        <>
          <button
            disabled={busy || file.capabilities?.canDownload === false}
            aria-label={`Anteprima ${file.name}`}
            title="Anteprima"
            onClick={() => openPreview(file)}
          >
            <Eye size={16} />
          </button>
          <button
            disabled={busy || file.capabilities?.canDownload === false}
            aria-label={`Scarica ${file.name}`}
            title="Scarica"
            onClick={() => download(file)}
          >
            <Download size={16} />
          </button>
        </>
      )}
      <button
        disabled={busy || !file.capabilities?.canEdit}
        aria-label={`Rinomina ${file.name}`}
        title="Rinomina"
        onClick={() => {
          setDialog({ kind: "rename", file });
          setName(file.name);
          setError("");
        }}
      >
        <Pencil size={16} />
      </button>
      {file.mimeType !== DRIVE_FOLDER &&
        !file.mimeType.startsWith(GOOGLE_PREFIX) && (
          <button
            disabled={busy || !file.capabilities?.canEdit}
            aria-label={`Sostituisci ${file.name}`}
            title="Sostituisci contenuto"
            onClick={() => {
              replaceTarget.current = file;
              replaceInput.current?.click();
            }}
          >
            <Upload size={16} />
          </button>
        )}
      {!demo && (
        <a
          href={googleLink(file)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Apri ${file.name} in Google`}
          title={
            file.mimeType.startsWith(GOOGLE_PREFIX)
              ? "Apri / modifica in Google"
              : "Apri in Google Drive"
          }
        >
          <ArrowUpRight size={16} />
        </a>
      )}
      <button
        disabled={busy || !file.capabilities?.canTrash}
        aria-label={`Sposta ${file.name} nel cestino`}
        title="Sposta nel cestino"
        onClick={() => {
          setDialog({ kind: "trash", file });
          setError("");
        }}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
  return (
    <>
      <div className={team ? "page-heading drive-team-heading" : "page-heading"}>
        <div>
          <div className="eyebrow">FILE E CARTELLE CONDIVISI</div>
          {team ? <h2>File del reparto</h2> : <h1>Drive del team</h1>}
          <p>{team ? `La cartella condivisa di ${team.name}.` : "I documenti del Sapienza Foiling Team, in un unico spazio."}</p>
        </div>
        <div className="heading-actions">
          {connected && (
            <>
              <Button
                variant="outline"
                disabled={busy || loading || !canAdd}
                onClick={() => {
                  setDialog({ kind: "folder" });
                  setName("");
                  setError("");
                }}
              >
                <Plus size={16} />
                Nuova cartella
              </Button>
              <Button
                disabled={busy || loading || !canAdd}
                onClick={() => uploadInput.current?.click()}
              >
                <Upload size={16} />
                {busy ? "Operazione in corso…" : "Carica file"}
              </Button>
            </>
          )}
        </div>
      </div>
      <input
        className="sr-only"
        type="file"
        multiple
        ref={uploadInput}
        aria-label="Carica file su Drive"
        onChange={(e) => upload(e.target.files)}
      />
      <input
        className="sr-only"
        type="file"
        ref={replaceInput}
        aria-label="Sostituisci contenuto del file"
        onChange={(e) => upload(e.target.files, replaceTarget.current)}
      />
      {demo && (
        <div className="drive-info">
          Anteprima dimostrativa. Le operazioni modificano solo questa sessione,
          non il Drive reale.
        </div>
      )}
      {!demo && !ready && (
        <div className="panel drive-connection">
          <FolderOpen size={36} />
          <h2>{checking ? "Apertura del Drive…" : "Drive in attesa di collegamento"}</h2>
          <p>{checking ? "Verifica dell’accesso del team in corso." : "Il responsabile deve completare il collegamento Google. I membri accedono direttamente dal CRM."}</p>
        </div>
      )}
      {connected && !demo && !team && (
        <div className="drive-storage" aria-label="Spazio Google utilizzato">
          {storage ? <>
            <div><strong>Spazio dell’account Google</strong><span>{storageBytes(storage.usage)} utilizzati{storage.limit ? ` su ${storageBytes(storage.limit)}` : " · limite non comunicato da Google"}</span></div>
            {storage.limit && <progress aria-label="Spazio utilizzato" value={Math.min(Number(storage.usage || 0), Number(storage.limit))} max={Number(storage.limit) || 1} />}
            <p>{storage.limit ? `${storageBytes(String(Math.max(0, Number(storage.limit) - Number(storage.usage || 0))))} disponibili · ` : ""}Drive: {storageBytes(storage.usageInDrive)} · Cestino Drive: {storageBytes(storage.usageInDriveTrash)}</p>
            <small>Il totale include anche Gmail e Google Foto.</small>
          </> : <span>Informazioni sullo spazio non disponibili.</span>}
        </div>
      )}
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {notice && (
        <p className="drive-info" role="status">
          {notice}
        </p>
      )}
      {connected && (
        <div className={`panel drive-browser${dragging ? " drive-dragging" : ""}`} aria-busy={loading || busy}
          aria-label={team ? `Drive ${team.name}` : "Drive del team"}
          onDragEnter={event => {
            if (!event.dataTransfer.types.includes("Files")) return;
            event.preventDefault();
            dragDepth.current++;
            if (canAdd && !busyRef.current && !loading) setDragging(true);
          }}
          onDragOver={event => {
            if (!event.dataTransfer.types.includes("Files")) return;
            event.preventDefault();
            event.dataTransfer.dropEffect = canAdd && !busyRef.current && !loading ? "copy" : "none";
          }}
          onDragLeave={event => {
            if (!event.dataTransfer.types.includes("Files")) return;
            dragDepth.current = Math.max(0, dragDepth.current - 1);
            if (!dragDepth.current) setDragging(false);
          }}
          onDrop={dropFiles}>
          {dragging && <div className="drive-drop-overlay" role="status"><Upload size={32} /><strong>Rilascia i file qui</strong><span>Caricamento nella cartella {folder.name}</span></div>}
          {canAdd && <p className="drive-drop-hint">Trascina qui i file oppure usa Carica file · massimo 100 MB per file</p>}
          <div className="drive-toolbar">
            <nav className="drive-path" aria-label="Percorso Drive">
              {path.map((part, i) => (
                <span key={part.id}>
                  {i > 0 && <ChevronRight size={14} />}
                  <button
                    disabled={busy || i === path.length - 1}
                    aria-current={i === path.length - 1 ? "page" : undefined}
                    onClick={() => setPath(path.slice(0, i + 1))}
                  >
                    {part.name}
                  </button>
                </span>
              ))}
            </nav>
            <div className="drive-view-controls">
              <Button
                variant="ghost"
                size="icon"
                disabled={busy || loading}
                aria-label="Aggiorna cartella"
                onClick={() => setRefresh((n) => n + 1)}
              >
                <RefreshCw size={16} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Vista lista"
                aria-pressed={!grid}
                onClick={() => setGrid(false)}
              >
                <List size={16} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Vista griglia"
                aria-pressed={grid}
                onClick={() => setGrid(true)}
              >
                <LayoutGrid size={16} />
              </Button>
            </div>
          </div>
          <div className="search-box drive-search">
            <Search size={16} />
            <input
              disabled={busy}
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              aria-label="Cerca nella cartella Drive"
              placeholder="Cerca in questa cartella…"
            />
          </div>
          {loading ? (
            <div className="empty" role="status">
              Caricamento dei file…
            </div>
          ) : rows.length ? (
            <div
              className={
                grid ? "drive-files drive-grid" : "drive-files drive-list"
              }
            >
              {rows.map((file) => (
                <article className="drive-file" key={file.id}>
                  <button
                    className="drive-file-main"
                    disabled={busy}
                    onClick={() =>
                      file.mimeType === DRIVE_FOLDER
                        ? setPath([...path, { id: file.id, name: file.name }])
                        : openPreview(file)
                    }
                  >
                    {file.mimeType === DRIVE_FOLDER ? (
                      <FolderOpen size={26} />
                    ) : (
                      <FileText size={26} />
                    )}
                    <span>
                      <strong>{file.name}</strong>
                      <small>
                        {file.mimeType === DRIVE_FOLDER
                          ? "Cartella"
                          : fileSize(file.size)}
                        {file.modifiedTime
                          ? ` · ${new Date(file.modifiedTime).toLocaleDateString("it-IT")}`
                          : ""}
                      </small>
                    </span>
                  </button>
                  {controls(file)}
                </article>
              ))}
            </div>
          ) : (
            <div className="empty">
              <FolderOpen size={28} />
              <p>
                {error
                  ? "Non riesco a mostrare i file. Aggiorna la cartella per riprovare."
                  : search
                  ? "Nessun file corrisponde alla ricerca."
                  : "Questa cartella è vuota."}
              </p>
            </div>
          )}
          {pageToken && (
            <Button
              variant="outline"
              disabled={busy || loading}
              onClick={() =>
                void perform(async () => {
                  const result = await api!.list(folder.id, search, pageToken);
                  setRows((old) => [...old, ...result.files]);
                  setPageToken(result.nextPageToken || "");
                })
              }
            >
              Carica altri file
            </Button>
          )}
        </div>
      )}
      {dialog && (
        <Dialog
          open
          onOpenChange={(v) => {
            if (!v && !busy) setDialog(null);
          }}
        >
          <DialogContent>
            <DialogTitle>
              {dialog.kind === "folder"
                ? "Nuova cartella"
                : dialog.kind === "rename"
                  ? "Rinomina"
                  : "Sposta nel cestino"}
            </DialogTitle>
            <DialogDescription>
              {dialog.kind === "trash"
                ? (demo ? `“${dialog.file?.name}” verrà rimosso soltanto dalla demo.` : `“${dialog.file?.name}” verrà spostato nel cestino di Google Drive${dialog.file?.mimeType === DRIVE_FOLDER ? ", insieme ai contenuti" : ""}. Potrai recuperarlo da Google Drive.`)
                : "Scegli un nome per questo elemento."}
            </DialogDescription>
            <form onSubmit={submit}>
              {dialog.kind !== "trash" && (
                <label>
                  <span className="field-label">Nome</span>
                  <input
                    required
                    maxLength={255}
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-label="Nome elemento Drive"
                  />
                </label>
              )}
              {error && (
                <p role="alert" className="form-error">
                  {error}
                </p>
              )}
              <div className="dialog-footer">
                <Button
                  type="button"
                  variant="outline"
                  disabled={busy}
                  onClick={() => setDialog(null)}
                >
                  Annulla
                </Button>
                <Button disabled={busy}>
                  {busy
                    ? "Attendi…"
                    : dialog.kind === "trash"
                      ? "Sposta nel cestino"
                      : "Salva"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
      {preview && (
        <Dialog
          open
          onOpenChange={(v) => {
            if (!v) setPreview(null);
          }}
        >
          <DialogContent className="drive-preview">
            <DialogTitle>{preview.file.name}</DialogTitle>
            <DialogDescription>Anteprima del documento</DialogDescription>
            {preview.text !== undefined ? (
              <pre>{preview.text}</pre>
            ) : preview.url && preview.mime?.startsWith("image/") ? (
              <img src={preview.url} alt={preview.file.name} />
            ) : preview.url && preview.mime === "application/pdf" ? (
              <iframe src={preview.url} title={preview.file.name} sandbox="" />
            ) : preview.url && preview.mime?.startsWith("video/") ? (
              <video src={preview.url} controls />
            ) : preview.url && preview.mime?.startsWith("audio/") ? (
              <audio src={preview.url} controls />
            ) : (
              <p>
                Anteprima non disponibile per questo formato. Scarica il file o
                aprilo in Google.
              </p>
            )}
            <div className="dialog-footer">
              <Button
                variant="outline"
                disabled={busy}
                onClick={() => download(preview.file)}
              >
                <Download size={15} />
                Scarica
              </Button>
              {!demo && (
                <a
                  className="btn"
                  href={googleLink(preview.file)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Apri / modifica in Google <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
