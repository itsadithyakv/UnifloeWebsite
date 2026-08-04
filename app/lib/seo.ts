import type { Metadata } from "next";

export const siteOrigin = "https://unifloe.app";
export const siteUrl = new URL(siteOrigin);
export const siteName = "Unifloe";
export const operatorName = "PaperKite";
export const socialImagePath = "/og-seo.png";

export type PublicRoute = {
  path: `/${string}`;
  title: string;
  description: string;
  h1: string;
};

export const publicRoutes = [
  {
    path: "/",
    title: "Unifloe | Modern School ERP & LMS for Indian Schools",
    description:
      "Unifloe is a modern school ERP and LMS for Indian schools, bringing attendance, academics, fees, communication and campus operations into one platform.",
    h1: "A modern school ERP and LMS built for Indian schools",
  },
  {
    path: "/features/",
    title: "Features for School ERP & LMS | Unifloe",
    description:
      "Explore Unifloe's 65 registered school ERP and LMS modules across academics, attendance, fees, communication, campus operations and governance.",
    h1: "Every school workflow. One connected system.",
  },
  {
    path: "/pricing/",
    title: "School ERP Pricing & Pilot Plans | Unifloe",
    description:
      "Compare Unifloe's one-year pilot offers and annual school ERP and LMS plans, with clear capacity, onboarding scope and options for growing schools.",
    h1: "Start with a pilot. Scale with confidence.",
  },
  {
    path: "/contact/",
    title: "Book a School ERP Demo | Unifloe",
    description:
      "Book a tailored Unifloe demo for your school. Share your priorities, size and location, then speak with PaperKite about fit, pilot scope and next steps.",
    h1: "Let's map Unifloe to your school.",
  },
  {
    path: "/about/",
    title: "About Unifloe and PaperKite | Unifloe",
    description:
      "Learn how PaperKite builds and operates Unifloe, a role-aware school ERP and LMS designed around Indian school workflows, privacy and gradual rollout.",
    h1: "Unifloe is built and operated by PaperKite",
  },
  {
    path: "/school-erp-software-india/",
    title: "School ERP Software for Indian Schools | Unifloe",
    description:
      "Unifloe connects attendance, academics, fees, communication, campus operations and governance in one school ERP and LMS for Indian schools.",
    h1: "School ERP software built for Indian school operations",
  },
  {
    path: "/school-lms/",
    title: "School LMS for Connected Learning | Unifloe",
    description:
      "Manage assignments, learning materials, quizzes, submissions, feedback and progress in a school LMS connected to academics and communication.",
    h1: "A school LMS connected to everyday school operations",
  },
  {
    path: "/for-cbse-schools/",
    title: "ERP & LMS for CBSE Schools | Unifloe",
    description:
      "Support CBSE school workflows from Nursery to Grade 12 with connected academics, attendance, assessments, communication and structured records.",
    h1: "A connected ERP and LMS for CBSE schools",
  },
  {
    path: "/attendance-management/",
    title: "School Attendance Management Software | Unifloe",
    description:
      "Manage class registers, attendance policies, corrections, student leave and reports with role-aware workflows connected to academic structure.",
    h1: "Attendance workflows connected to the whole school",
  },
  {
    path: "/fee-management/",
    title: "School Fee Management Software | Unifloe",
    description:
      "Create school fee obligations, track dues and payments, issue receipts, manage concessions and report collections with role-aware workflows.",
    h1: "School fee management with clearer financial workflows",
  },
  {
    path: "/exam-management/",
    title: "School Exam Management Software | Unifloe",
    description:
      "Plan school exams, manage assessments and marks, build question papers, publish results and connect report-card workflows to student records.",
    h1: "Exam and assessment workflows connected to student records",
  },
  {
    path: "/apaar-readiness/",
    title: "APAAR Readiness for Schools | Unifloe",
    description:
      "Support APAAR readiness with structured student records, guardian consent, UDISE+ readiness checks and status tracking without claiming certification.",
    h1: "Support APAAR readiness with structured school records",
  },
  {
    path: "/data-privacy/",
    title: "School Data Privacy & DPDP Readiness | Unifloe",
    description:
      "Explore privacy-conscious school data workflows with tenant boundaries, role-based access, consent records, audit history and private files.",
    h1: "Privacy-conscious workflows for school data",
  },
  {
    path: "/school-erp-bengaluru/",
    title: "School ERP Software in Bengaluru | Unifloe",
    description:
      "Explore Unifloe's Bengaluru pilot and onboarding support for schools seeking a connected ERP and LMS with direct PaperKite guidance.",
    h1: "School ERP and LMS support for Bengaluru schools",
  },
] as const satisfies readonly PublicRoute[];

const publicRouteMap = new Map<string, PublicRoute>(publicRoutes.map((route) => [route.path, route]));

export function normalizePublicPath(path: string) {
  if (path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}/`;
}

export function canonicalUrl(path: string) {
  return new URL(normalizePublicPath(path), siteUrl).toString();
}

export function getPublicRoute(path: string) {
  const route = publicRouteMap.get(normalizePublicPath(path) as PublicRoute["path"]);
  if (!route) throw new Error(`Unknown public route: ${path}`);
  return route;
}

export function createPageMetadata(path: string): Metadata {
  const route = getPublicRoute(path);
  const url = canonicalUrl(route.path);

  return {
    title: { absolute: route.title },
    description: route.description,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName,
      url,
      title: route.title,
      description: route.description,
      images: [
        {
          url: new URL(socialImagePath, siteUrl),
          width: 1200,
          height: 630,
          alt: "Unifloe school ERP and LMS for Indian schools",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [new URL(socialImagePath, siteUrl)],
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export const robotsText = [
  "User-Agent: *",
  "Allow: /",
  "Disallow: /api/",
  `Host: ${siteOrigin}`,
  `Sitemap: ${siteOrigin}/sitemap.xml`,
  "",
].join("\n");

export const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...publicRoutes.map((route) => `  <url><loc>${canonicalUrl(route.path)}</loc></url>`),
  "</urlset>",
  "",
].join("\n");
