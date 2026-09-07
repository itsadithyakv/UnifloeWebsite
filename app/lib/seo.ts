import type { Metadata, MetadataRoute } from "next";

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
      "Explore the 45 registered Unifloe modules across academics, communication, finance, campus operations, people and administration, and see which edition includes each one.",
    h1: "Every school workflow. One connected system.",
  },
  {
    path: "/pricing/",
    title: "School ERP Pricing & Pilot Plans | Unifloe",
    description:
      "Unifloe pricing for Indian schools: free forever for one class with up to 100 users, then Junior, Standard and Growth by students on roll, monthly or yearly.",
    h1: "Free for one class. Clear plans for the whole school.",
  },
  {
    path: "/get-started/",
    title: "Get Started with Unifloe | Unifloe",
    description:
      "How a school starts using Unifloe: try the live demo, start free with one class, set up classes and subjects, import students from a workbook and activate parents.",
    h1: "Start using Unifloe in a few clear steps",
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
      "Learn how PaperKite builds and operates Unifloe, a role aware school ERP and LMS designed around Indian school workflows, guardian consent and gradual rollout.",
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
      "Support CBSE school workflows from Nursery to Class 12 with connected academics, attendance, assessments, communication and structured records.",
    h1: "A connected ERP and LMS for CBSE schools",
  },
  {
    path: "/apaar-readiness/",
    title: "APAAR Readiness for Schools | Unifloe",
    description:
      "How Unifloe handles APAAR consent, UDISE+ preparation and student identity records honestly, with separate guardian consent and no Aadhaar numbers stored.",
    h1: "APAAR consent and UDISE+ preparation, described honestly",
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy | Unifloe",
    description:
      "What the Unifloe website collects when you visit or send an enquiry, how PaperKite uses it, the services involved, and how to ask for it to be corrected or deleted.",
    h1: "Privacy policy for this website",
  },
  {
    path: "/terms/",
    title: "Terms of Use | Unifloe",
    description:
      "The terms on which PaperKite provides the Unifloe website and the public demo, what the site content means, and how to reach PaperKite with a question or a complaint.",
    h1: "Terms of use",
  },
  {
    path: "/data-privacy/",
    title: "School Data Privacy & DPDP Readiness | Unifloe",
    description:
      "How Unifloe handles school data under the DPDP Act: who is responsible for what, guardian consent, security safeguards, retention and what stays with the school.",
    h1: "How Unifloe handles school data",
  },
] as const satisfies readonly PublicRoute[];

export const permanentRedirects = {
  "/attendance-management/": "/features/#attendance-workflows",
  "/fee-management/": "/features/#fee-workflows",
  "/exam-management/": "/features/#assessment-workflows",
  "/school-erp-bengaluru/": "/school-erp-software-india/#bengaluru-pilot",
} as const satisfies Record<`/${string}/`, `/${string}`>;

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

export const robotsPolicy = {
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/"],
  },
  sitemap: `${siteOrigin}/sitemap.xml`,
} satisfies MetadataRoute.Robots;

export const sitemapEntries = publicRoutes.map((route) => ({
  url: canonicalUrl(route.path),
})) satisfies MetadataRoute.Sitemap;

export const robotsText = [
  `User-Agent: ${robotsPolicy.rules.userAgent}`,
  `Allow: ${robotsPolicy.rules.allow}`,
  ...robotsPolicy.rules.disallow.map((path) => `Disallow: ${path}`),
  `Sitemap: ${robotsPolicy.sitemap}`,
  "",
].join("\n");

export const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapEntries.map((entry) => `  <url><loc>${entry.url}</loc></url>`),
  "</urlset>",
  "",
].join("\n");
