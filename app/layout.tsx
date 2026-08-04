import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ScrollMotion } from "./components/ScrollMotion";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { operatorName, siteName, siteUrl, socialImagePath } from "./lib/seo";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Unifloe | Modern School ERP & LMS for Indian Schools",
    template: "%s | Unifloe",
  },
  description:
    "Unifloe is a modern school ERP and LMS for Indian schools, bringing attendance, academics, fees, communication and campus operations into one platform.",
  applicationName: siteName,
  creator: operatorName,
  publisher: operatorName,
  category: "education",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    title: "Unifloe | Modern School ERP & LMS for Indian Schools",
    description: "A modern school ERP and LMS for Indian schools.",
    images: [{ url: new URL(socialImagePath, siteUrl), width: 1200, height: 630, alt: "Unifloe school ERP and LMS for Indian schools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unifloe | Modern School ERP & LMS for Indian Schools",
    description: "A modern school ERP and LMS for Indian schools.",
    images: [new URL(socialImagePath, siteUrl)],
  },
};

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
        <Link className="floating-demo" href="/contact">Book a free demo</Link>
        <ScrollMotion />
      </body>
    </html>
  );
}
