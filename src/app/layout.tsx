import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hub-suite.co.uk"),
  title: "HubSuite — Operational oversight across compliance, care, and facilities",
  description:
    "Three connected hubs, one operating system. Statutory compliance, residential care, and facility management — under one brand, one login, one source of truth.",
  openGraph: {
    title: "HubSuite — Compliance · Care · FM Control",
    description: "One operating system across every site.",
    url: "https://hub-suite.co.uk",
    siteName: "HubSuite",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HubSuite",
    description: "One operating system across every site.",
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#20b2b2" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1226" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeBootScript = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='dark'||s==='light')?s:(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
