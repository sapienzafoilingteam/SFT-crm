import { TEAMS } from "./model";
import { DriveFile, DRIVE_FOLDER } from "./google-drive";
export interface DemoFile extends DriveFile {
  demoText?: string;
}
export function driveDemo(): DemoFile[] {
  const folder = (
    id: string,
    name: string,
    parent = "demo-root",
  ): DemoFile => ({
    id,
    name,
    parents: [parent],
    mimeType: DRIVE_FOLDER,
    capabilities: { canEdit: true, canTrash: true, canAddChildren: true },
  });
  const text = (
    id: string,
    name: string,
    parent: string,
    demoText: string,
  ): DemoFile => ({
    id,
    name,
    parents: [parent],
    mimeType: "text/plain",
    modifiedTime: "2026-10-01T08:00:00Z",
    size: String(new Blob([demoText]).size),
    demoText,
    capabilities: { canEdit: true, canTrash: true, canDownload: true },
  });
  return [
    ...TEAMS.map(team => folder(`demo-${team.id}`, team.name)),
    folder("demo-media", "Media"),
    folder("demo-sponsor", "Sponsor e contratti", "demo-management"),
    text(
      "demo-readme",
      "Leggimi.txt",
      "demo-root",
      "Drive dimostrativo del Sapienza Foiling Team.\nQuesti file sono esempi, non sono collegati al Drive reale.",
    ),
    text(
      "demo-plan",
      "Piano della stagione.txt",
      "demo-management",
      "Esempio di piano della stagione.\nObiettivi, eventi e preparazione dei contenuti.",
    ),
    text(
      "demo-notes",
      "Verbale riunione.txt",
      "demo-scafo",
      "Verbale dimostrativo.\nDecisioni e prossime attività del reparto.",
    ),
  ];
}
