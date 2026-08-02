import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { ScrollMotion } from "./components/ScrollMotion";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: "Unifloe | One platform to run your entire school",
      template: "%s | Unifloe",
    },
    description:
      "A connected ERP and LMS for modern Indian schools, built around DPDP-aligned controls, APAAR-ready records, and India-hosted data.",
    applicationName: "Unifloe",
    keywords: ["school ERP India", "school LMS", "APAAR-ready school software", "DPDP school software"],
    icons: {
      icon: "/brand/logoUnifloeNoBG.png",
      shortcut: "/brand/logoUnifloeNoBG.png",
      apple: "/brand/logoUnifloeNoBG.png",
    },
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
