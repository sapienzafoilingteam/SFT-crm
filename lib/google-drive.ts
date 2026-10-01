export const DRIVE_FOLDER = "application/vnd.google-apps.folder";
export const GOOGLE_PREFIX = "application/vnd.google-apps.";
export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  modifiedTime?: string;
  webViewLink?: string;
  parents?: string[];
  capabilities?: {
    canEdit?: boolean;
    canTrash?: boolean;
    canDownload?: boolean;
    canAddChildren?: boolean;
  };
}
export const DRIVE_FIELDS =
  "id,name,mimeType,size,modifiedTime,webViewLink,parents,capabilities(canEdit,canTrash,canDownload,canAddChildren)";
export class DriveError extends Error {
  constructor(
    message: string,
    public status = 0,
  ) {
    super(message);
  }
}
export function driveQuery(folderId: string, search = "") {
  const escape = (value: string) =>
    value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
  return `'${escape(folderId)}' in parents and trashed = false${search.trim() ? ` and name contains '${escape(search.trim())}'` : ""}`;
}
export function exportFormat(file: DriveFile, preview = false) {
  if (!file.mimeType.startsWith(GOOGLE_PREFIX)) return null;
  if (
    ["document", "spreadsheet", "presentation", "drawing"].some(
      (type) => file.mimeType === GOOGLE_PREFIX + type,
    )
  ) {
    if (preview) return { mime: "application/pdf", extension: ".pdf" };
    if (file.mimeType === GOOGLE_PREFIX + "spreadsheet")
      return {
        mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        extension: ".xlsx",
      };
    if (file.mimeType === GOOGLE_PREFIX + "document")
      return {
        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        extension: ".docx",
      };
    if (file.mimeType === GOOGLE_PREFIX + "presentation")
      return {
        mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        extension: ".pptx",
      };
    return { mime: "application/pdf", extension: ".pdf" };
  }
  throw new DriveError("Questo formato va aperto nell’app Google.");
}
export function createDriveClient(
  token: string,
  request: typeof fetch = fetch,
) {
  const api = "https://www.googleapis.com/drive/v3/files";
  async function call(url: string, init: RequestInit = {}) {
    const response = await request(url, {
      ...init,
      headers: {
        ...Object.fromEntries(new Headers(init.headers).entries()),
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      if (response.status === 401)
        throw new DriveError(
          "Il collegamento Google è scaduto. Premi Connetti Google per continuare.",
          401,
        );
      if (response.status === 403)
        throw new DriveError(
          "Google non consente questa operazione. Controlla i permessi sul file e l’abilitazione di Drive API.",
          403,
        );
      if (response.status === 404)
        throw new DriveError(
          "File o cartella non disponibile per questo account Google.",
          404,
        );
      throw new DriveError(
        "Google Drive non ha completato l’operazione. Riprova.",
        response.status,
      );
    }
    return response;
  }
  async function metadata(id: string) {
    return (
      await call(
        `${api}/${encodeURIComponent(id)}?${new URLSearchParams({ fields: DRIVE_FIELDS, supportsAllDrives: "true" })}`,
      )
    ).json() as Promise<DriveFile>;
  }
  return {
    metadata,
    async list(folder: string, search = "", pageToken = "") {
      const params = new URLSearchParams({
        q: driveQuery(folder, search),
        pageSize: "100",
        fields: `nextPageToken,files(${DRIVE_FIELDS})`,
        orderBy: "folder,name",
        supportsAllDrives: "true",
        includeItemsFromAllDrives: "true",
      });
      if (pageToken) params.set("pageToken", pageToken);
      return (await call(`${api}?${params}`)).json() as Promise<{
        files: DriveFile[];
        nextPageToken?: string;
      }>;
    },
    async createFolder(parent: string, name: string) {
      return (
        await call(
          `${api}?supportsAllDrives=true&fields=${encodeURIComponent(DRIVE_FIELDS)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              mimeType: DRIVE_FOLDER,
              parents: [parent],
            }),
          },
        )
      ).json() as Promise<DriveFile>;
    },
    async rename(id: string, name: string) {
      await call(`${api}/${encodeURIComponent(id)}?supportsAllDrives=true`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
    },
    async trash(id: string) {
      await call(`${api}/${encodeURIComponent(id)}?supportsAllDrives=true`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trashed: true }),
      });
    },
    async upload(parent: string, file: File, replaceId?: string) {
      if (file.size > 100 * 1024 * 1024)
        throw new DriveError("Per file oltre 100 MB usa Google Drive.");
      const endpoint = `https://www.googleapis.com/upload/drive/v3/files${replaceId ? "/" + encodeURIComponent(replaceId) : ""}?uploadType=resumable&supportsAllDrives=true&fields=${encodeURIComponent(DRIVE_FIELDS)}`;
      const start = await call(endpoint, {
        method: replaceId ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Upload-Content-Type": file.type || "application/octet-stream",
        },
        body: JSON.stringify(
          replaceId ? {} : { name: file.name, parents: [parent] },
        ),
      });
      const location = start.headers.get("Location");
      if (
        !location ||
        new URL(location).origin !== "https://www.googleapis.com"
      )
        throw new DriveError(
          "Google non ha aperto la sessione di caricamento.",
        );
      return (
        await call(location, {
          method: "PUT",
          headers: { "Content-Type": file.type || "application/octet-stream" },
          body: file,
        })
      ).json() as Promise<DriveFile>;
    },
    async download(file: DriveFile, preview = false) {
      if (file.capabilities?.canDownload === false)
        throw new DriveError(
          "Il proprietario ha disabilitato il download di questo file.",
        );
      if (Number(file.size || 0) > 100 * 1024 * 1024)
        throw new DriveError(
          "Per scaricare file oltre 100 MB apri Google Drive.",
        );
      const format = exportFormat(file, preview);
      const path = format
        ? `${api}/${encodeURIComponent(file.id)}/export?${new URLSearchParams({ mimeType: format.mime })}`
        : `${api}/${encodeURIComponent(file.id)}?alt=media&supportsAllDrives=true`;
      return {
        blob: await (await call(path)).blob(),
        name: file.name + (format?.extension || ""),
      };
    },
  };
}
