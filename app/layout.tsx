import type { Metadata } from "next";
import "./globals.css";
import { ScrollMotion } from "./components/ScrollMotion";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const metadataBase = new URL("https://unifloe.app");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Unifloe",
    template: "%s | Unifloe",
  },
  description:
    "A connected ERP and LMS for modern Indian schools, built around DPDP-aligned controls, APAAR-ready records, and India-hosted data.",
  applicationName: "Unifloe",
  keywords: ["school ERP India", "school LMS", "APAAR-ready school software", "DPDP school software"],
  openGraph: {
    type: "website",
    siteName: "Unifloe",
    title: "Unifloe | One platform to run your entire school",
    description: "A connected ERP + LMS for modern Indian schools.",
    images: [{ url: new URL("/og.png", metadataBase), width: 1536, height: 1024, alt: "Unifloe — one platform to run your entire school" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unifloe | One platform to run your entire school",
    description: "A connected ERP + LMS for modern Indian schools.",
    images: [new URL("/og.png", metadataBase)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="32x32" type="image/x-icon" />
        <link rel="icon" href="/favicon.png?v=3" sizes="512x512" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" sizes="180x180" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <a className="floating-demo" href="/contact">Book a free demo</a>
        <ScrollMotion />
      </body>
    </html>
  );
}
