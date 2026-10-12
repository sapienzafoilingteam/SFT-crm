import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "SFT · Workspace",
  description: "Lo spazio condiviso del Sapienza Foiling Team",
  icons: { icon: "/logo.svg" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
