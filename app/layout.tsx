import type { Metadata } from "next";
import { Provider } from "@/components/provider";
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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
