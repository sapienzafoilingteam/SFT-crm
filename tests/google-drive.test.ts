import test from "node:test";
import assert from "node:assert/strict";
import {
  createDriveClient,
  driveQuery,
  exportFormat,
  DriveError,
  DRIVE_FOLDER,
} from "../lib/google-drive";

test("ricerca Drive protegge apici e backslash nella query Google", () => {
  assert.equal(
    driveQuery("root", "l'evento\\test"),
    "'root' in parents and trashed = false and name contains 'l\\'evento\\\\test'",
  );
});
test("export documenti Google usa il formato adatto e non converte file binari", () => {
  assert.equal(
    exportFormat({
      id: "1",
      name: "Bilancio",
      mimeType: "application/vnd.google-apps.spreadsheet",
    })?.extension,
    ".xlsx",
  );
  assert.equal(
    exportFormat(
      {
        id: "1",
        name: "Bilancio",
        mimeType: "application/vnd.google-apps.spreadsheet",
      },
      true,
    )?.mime,
    "application/pdf",
  );
  assert.equal(
    exportFormat({ id: "1", name: "Foto", mimeType: "image/jpeg" }),
    null,
  );
  assert.throws(() =>
    exportFormat({ id: "1", name: "Cartella", mimeType: DRIVE_FOLDER }),
  );
});
test("rimozione Drive usa cestino e non DELETE definitivo", async () => {
  let method = "",
    body = "";
  const mock: typeof fetch = async (_url, init) => {
    method = String(init?.method);
    body = String(init?.body);
    return new Response("{}", { status: 200 });
  };
  await createDriveClient("test-token", mock).trash("file");
  assert.equal(method, "PATCH");
  assert.deepEqual(JSON.parse(body), { trashed: true });
});
test("download vietato non contatta Google e sessioni scadute sono riconosciute", async () => {
  let calls = 0;
  const mock: typeof fetch = async () => {
    calls++;
    return new Response("{}", { status: 401 });
  };
  const client = createDriveClient("test-token", mock);
  await assert.rejects(
    client.download({
      id: "1",
      name: "Documento",
      mimeType: "text/plain",
      capabilities: { canDownload: false },
    }),
  );
  assert.equal(calls, 0);
  await assert.rejects(
    client.list("root"),
    (error: unknown) => error instanceof DriveError && error.status === 401,
  );
});
test("upload non invia il token a una destinazione estranea restituita da Google", async () => {
  let calls = 0;
  const mock: typeof fetch = async () => {
    calls++;
    return new Response("", {
      status: 200,
      headers: { Location: "https://example.com/upload" },
    });
  };
  await assert.rejects(
    createDriveClient("test-token", mock).upload(
      "root",
      new File(["esempio"], "test.txt"),
    ),
  );
  assert.equal(calls, 1);
});

test("download binario conserva contenuto e nome del file", async () => {
  let requested = "";
  const mock: typeof fetch = async (url) => {
    requested = String(url);
    return new Response("Contenuto originale", { headers: { "Content-Type": "text/plain" } });
  };
  const result = await createDriveClient("test-token", mock).download({ id: "file", name: "verbale.txt", mimeType: "text/plain" });
  assert.equal(result.name, "verbale.txt");
  assert.equal(await result.blob.text(), "Contenuto originale");
  assert.ok(requested.includes("alt=media"));
});

test("upload crea nel parent scelto; sostituzione conserva nome e parent", async () => {
  const requests: {url:string; method:string; body:unknown}[] = [];
  const mock: typeof fetch = async (url, init) => {
    requests.push({url:String(url),method:String(init?.method),body:init?.body});
    if(String(url).includes("uploadType=resumable"))return new Response("",{headers:{Location:"https://www.googleapis.com/upload/session"}});
    return Response.json({id:"file",name:"test.txt",mimeType:"text/plain"});
  };
  const client=createDriveClient("test-token",mock);
  const file=new File(["Contenuto"],"test.txt",{type:"text/plain"});
  await client.upload("parent",file);
  assert.deepEqual(JSON.parse(String(requests[0].body)),{name:"test.txt",parents:["parent"]});
  assert.equal(requests[1].method,"PUT");
  assert.equal(requests[1].body,file);
  requests.length=0;
  await client.upload("parent",file,"existing-file");
  assert.equal(requests[0].method,"PATCH");
  assert.deepEqual(JSON.parse(String(requests[0].body)),{});
});
