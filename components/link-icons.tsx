import { Globe, Mail, FolderOpen, Instagram, FileText, Layers, CalendarDays, Users, Video, Handshake, Wallet, Link2, Anchor, Megaphone, Wrench, Leaf, Cpu, Waves } from "lucide-react";
import type { LinkRecord } from "@/lib/model";

export const LINK_ICONS = [
  { value: "globe", label: "Sito web", Icon: Globe },
  { value: "mail", label: "Email", Icon: Mail },
  { value: "folder", label: "Drive", Icon: FolderOpen },
  { value: "instagram", label: "Instagram", Icon: Instagram },
  { value: "file", label: "Documento", Icon: FileText },
  { value: "layers", label: "Risorse", Icon: Layers },
  { value: "calendar", label: "Eventi", Icon: CalendarDays },
  { value: "users", label: "Team", Icon: Users },
  { value: "video", label: "Riunione", Icon: Video },
  { value: "handshake", label: "Sponsor", Icon: Handshake },
  { value: "wallet", label: "Bilancio", Icon: Wallet },
  { value: "link", label: "Link", Icon: Link2 },
  { value: "anchor", label: "Logistica", Icon: Anchor },
  { value: "megaphone", label: "Comunicazione", Icon: Megaphone },
  { value: "wrench", label: "Cantiere", Icon: Wrench },
  { value: "leaf", label: "Sostenibilità", Icon: Leaf },
  { value: "cpu", label: "Elettronica", Icon: Cpu },
  { value: "waves", label: "Barca", Icon: Waves },
];
export function linkIcon(link: Pick<LinkRecord, "title" | "url" | "icon">) {
  const custom = LINK_ICONS.find((option) => option.value === link.icon);
  if (custom) return custom.Icon;
  const text = `${link.title} ${link.url}`.toLowerCase();
  if (/mail|gmail/.test(text)) return Mail;
  if (/drive|cartella/.test(text)) return FolderOpen;
  if (/instagram/.test(text)) return Instagram;
  if (/riunion|meet/.test(text)) return Video;
  if (/event|calend/.test(text)) return CalendarDays;
  if (/sponsor/.test(text)) return Handshake;
  if (/bilancio|cost/.test(text)) return Wallet;
  if (/delivery|deliveries|report|sumoth/.test(text)) return FileText;
  return Globe;
}
