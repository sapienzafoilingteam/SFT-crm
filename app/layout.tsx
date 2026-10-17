import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./sft-workspace.css";
import "./sft-mobile.css";
import { PwaRuntime } from "@/components/pwa";
import { WorkspaceRoot } from "@/components/workspace-root";
export const metadata: Metadata = {
  title: "SFT · Workspace",
  description: "Lo spazio condiviso del Sapienza Foiling Team",
  icons: { icon: "/logo.svg", apple: "/pwa/apple-touch-icon.png" },
  appleWebApp: { capable: true, title: "SFT", statusBarStyle: "default" },
};
export const viewport: Viewport = {
  width: "device-width", initialScale: 1, viewportFit: "cover",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f5f5f7" }, { media: "(prefers-color-scheme: dark)", color: "#0a0808" }],
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body>
        <PwaRuntime />
        <WorkspaceRoot>{children}</WorkspaceRoot>
      </body>
    </html>
  );
}
