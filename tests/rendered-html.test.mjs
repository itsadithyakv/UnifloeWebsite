import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import {
  buildEmailPayload,
  isLikelyBot,
  validateContactForm,
} from "../app/lib/contact-form.mjs";

const root = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const isMetadataRoute = pathname.endsWith(".txt") || pathname.endsWith(".xml");
  const canonicalPathname = pathname === "/" || pathname.endsWith("/") || isMetadataRoute ? pathname : `${pathname}/`;
  return requestUrl(new URL(canonicalPathname, "http://localhost"));
}

async function requestUrl(url, headers = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${url.toString()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(url, {
      headers: { accept: "text/html", ...headers },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

const routeCases = [
  ["/", "A modern school", "Book a free demo", "Unifloe | Modern School ERP &amp; LMS for Indian Schools"],
  ["/features", "Every school workflow", "Academics &amp; LMS", "Features for School ERP &amp; LMS | Unifloe"],
  ["/pricing", "Start with a pilot", "₹30,000", "School ERP Pricing &amp; Pilot Plans | Unifloe"],
  ["/contact", "Let’s map Unifloe", "Start a useful conversation", "Book a School ERP Demo | Unifloe"],
  ["/about", "built and operated by PaperKite", "Practical progress", "About Unifloe and PaperKite | Unifloe"],
  ["/school-erp-software-india", "School ERP software built", "Roll out the workflows", "School ERP Software for Indian Schools | Unifloe"],
  ["/school-lms", "school LMS connected", "Keep teaching and learning connected", "School LMS for Connected Learning | Unifloe"],
  ["/for-cbse-schools", "connected ERP and LMS for CBSE", "Nursery to Grade 12", "ERP &amp; LMS for CBSE Schools | Unifloe"],
  ["/apaar-readiness", "Support APAAR readiness", "Consent-aware", "APAAR Readiness for Schools | Unifloe"],
  ["/data-privacy", "Privacy-conscious workflows", "Tenant boundaries", "School Data Privacy &amp; DPDP Readiness | Unifloe"],
];

for (const [pathname, heading, detail, title] of routeCases) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, new RegExp(heading));
    assert.match(html, new RegExp(detail));
    assert.match(html, new RegExp(`<title>${title.replace(/[|]/g, "\\|")}<\\/title>`));
    assert.match(html, /Unifloe/);
    assert.match(html, /Book a free demo/);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
  });
}

test("renders exact pilot and standard pricing", async () => {
  const response = await render("/pricing");
  const html = await response.text();
  for (const value of ["₹0", "₹8,000", "₹30,000", "₹80,000", "₹300/month", "₹3,600", "+1,000"]) {
    assert.match(html, new RegExp(value.replace(/[+]/g, "\\+")));
  }
});

test("uses a stable blurred count-up treatment for displayed prices", async () => {
  const [homeSource, pricingSource, counterSource, counterCss, globalCss, packageJson] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/pricing/page.tsx", root), "utf8"),
    readFile(new URL("app/components/Counter.tsx", root), "utf8"),
    readFile(new URL("app/components/Counter.module.css", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("package.json", root), "utf8"),
  ]);
  assert.match(packageJson, /"motion"/);
  assert.match(counterSource, /animate\(0, parsed\.value/);
  assert.match(counterSource, /useInView/);
  assert.match(counterSource, /useReducedMotion/);
  assert.match(counterSource, /Intl\.NumberFormat\("en-IN"/);
  assert.match(counterSource, /duration:\s*0\.78/);
  assert.doesNotMatch(counterSource, /RollingNumber|useSpring|ResizeObserver/);
  assert.match(counterCss, /@keyframes count-up-speed/);
  assert.match(counterCss, /filter:\s*blur\(5px\)/);
  assert.match(counterCss, /transform:\s*translateY\(11px\)/);
  assert.match(counterCss, /\.sizer\s*\{[\s\S]*?visibility:\s*hidden/);
  assert.match(counterCss, /font-size:\s*inherit\s*!important/);
  assert.match(globalCss, /\.plan-price\s*>\s*span/);
  assert.doesNotMatch(globalCss, /\.plan-price\s+span\s*\{/);
  assert.match(homeSource, /<PriceCounter text=\{plan\.price\}/);
  assert.match(pricingSource, /<PriceCounter text=\{plan\.price\}/);
  assert.match(pricingSource, /<PriceCounter text="₹300\/month"/);
  assert.match(pricingSource, /<PriceCounter text="₹3,600"/);
  assert.doesNotMatch(`${homeSource}\n${pricingSource}`, /<strong>\{plan\.price\}<\/strong>/);
});

test("keeps the visual hierarchy free of promotional pre-heading pills", async () => {
  const pages = await Promise.all(routeCases.map(([path]) => render(path).then((response) => response.text())));
  const html = pages.join("\n");
  assert.doesNotMatch(html, /Built for modern Indian schools|Everything working together|Tell us about your school|section-chip|plan-badge|class="kicker"/i);
  assert.match(html, /data-reveal/);
});

test("serves both logo variants directly and renders the staggered navigation shell", async () => {
  const response = await render("/");
  const html = await response.text();
  assert.match(html, /src="\/brand\/logoUnifloeNoBG-96\.png"/);
  assert.match(html, /src="\/brand\/logoUnifloeNoBgWhite-96\.png"/);
  assert.match(html, /aria-controls="staggered-menu-panel"/);
  assert.match(html, />Menu</);
  assert.doesNotMatch(html, /_vinext\/image|_next\/image/);
});

test("emits unique metadata, self-canonicals, one H1, and indexable robots on every public page", async () => {
  const pages = await Promise.all(routeCases.map(([path]) => render(path).then((response) => response.text())));
  await Promise.all([
    access(new URL("public/favicon.ico", root)),
    access(new URL("public/favicon.png", root)),
    access(new URL("public/apple-touch-icon.png", root)),
  ]);
  const titles = new Set();
  const descriptions = new Set();
  for (const [index, html] of pages.entries()) {
    const [pathname, , , expectedTitle] = routeCases[index];
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
    const description = html.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/)?.[1];
    const canonicalPath = pathname === "/" ? "/" : `${pathname}/`;
    assert.equal(title, expectedTitle);
    assert.ok(description);
    assert.equal((description ?? "").length >= 120, true);
    assert.match(html, new RegExp(`<link[^>]+rel="canonical"[^>]+href="https:\/\/unifloe\\.app${canonicalPath.replace(/\//g, "\\/")}"`));
    assert.match(html, /<meta[^>]+name="robots"[^>]+content="[^"]*index[^"]*follow[^"]*"/);
    assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) ?? []).length, 1);
    assert.match(html, /href="https:\/\/unifloe\.app\/favicon\.ico\?v=3"/);
    assert.match(html, /href="https:\/\/unifloe\.app\/favicon\.png\?v=3"/);
    assert.doesNotMatch(html, /name="keywords"/);
    titles.add(title);
    descriptions.add(description);
  }
  assert.equal(titles.size, routeCases.length);
  assert.equal(descriptions.size, routeCases.length);
});

test("serves a public robots policy and a canonical-only sitemap", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([render("/robots.txt"), render("/sitemap.xml")]);
  assert.equal(robotsResponse.status, 200);
  assert.match(robotsResponse.headers.get("content-type") ?? "", /^text\/plain\b/i);
  const robots = await robotsResponse.text();
  assert.match(robots, /User-Agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Disallow: \/api\//);
  assert.doesNotMatch(robots, /^Host:/m);
  assert.match(robots, /Sitemap: https:\/\/unifloe\.app\/sitemap\.xml/);
  assert.doesNotMatch(robots, /Disallow: \/(?:\r?\n|$)/);

  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapResponse.headers.get("content-type") ?? "", /application\/xml/i);
  const sitemap = await sitemapResponse.text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  const expected = routeCases.map(([pathname]) => `https://unifloe.app${pathname === "/" ? "/" : `${pathname}/`}`);
  assert.deepEqual(urls, expected);
  assert.equal(new Set(urls).size, routeCases.length);
  assert.doesNotMatch(sitemap, /\/api\/|\/login\/|\/dashboard\/|\/workspace\/|\/modules\/|\/admin\//);
  assert.doesNotMatch(sitemap, /<lastmod>|<changefreq>|<priority>/);
});

test("emits valid homepage Organization and SoftwareApplication JSON-LD", async () => {
  const html = await render("/").then((response) => response.text());
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  assert.equal(blocks.length, 2);
  assert.deepEqual(blocks.map((block) => block["@type"]), ["Organization", "SoftwareApplication"]);
  assert.equal(blocks[0].url, "https://unifloe.app/");
  assert.equal(blocks[0].parentOrganization.name, "PaperKite");
  assert.equal(blocks[0].email, "mailto:adithya@unifloe.app");
  assert.equal(blocks[0].telephone, "+919686110206");
  assert.equal(blocks[1].provider["@id"], "https://unifloe.app/#organization");
  assert.doesNotMatch(JSON.stringify(blocks), /aggregateRating|review|award|sameAs|certif/i);
});

test("keeps the LMS and CBSE pages only with distinct, substantive product content", async () => {
  const [lms, cbse] = await Promise.all([
    render("/school-lms").then((response) => response.text()),
    render("/for-cbse-schools").then((response) => response.text()),
  ]);
  for (const value of [
    "Assignments, quizzes, tests, essays and materials",
    "Student submissions and teacher feedback",
    "non-realtime fallback",
    "private, tenant-prefixed storage",
  ]) assert.match(lms, new RegExp(value));
  for (const value of [
    "Nursery, LKG, UKG and Grades 1",
    "Foundational, Preparatory, Middle and Secondary",
    "Faculty assignment and class-teacher context",
    "not affiliated with or approved by CBSE",
  ]) assert.match(cbse, new RegExp(value));
  assert.equal((lms.match(/<section class="seo-content-section"/g) ?? []).length >= 3, true);
  assert.equal((cbse.match(/<section class="seo-content-section"/g) ?? []).length >= 3, true);
});

test("keeps internal marketing links within the canonical public route set", async () => {
  const allowed = new Set(routeCases.map(([pathname]) => pathname));
  for (const [pathname] of routeCases) {
    const html = await render(pathname).then((response) => response.text());
    const hrefs = [...html.matchAll(/<a[^>]+href="(\/[^"#?]*)[^\"]*"/g)].map((match) => match[1]);
    for (const href of hrefs) {
      const normalized = href === "/" ? "/" : href.replace(/\/$/, "");
      assert.ok(allowed.has(normalized), `${pathname} links to unknown marketing route ${href}`);
    }
  }
});

test("redirects exact HTTP and www production hosts to apex HTTPS without affecting previews", async () => {
  const cases = [
    ["http://unifloe.app/features/?source=test", "https://unifloe.app/features/?source=test"],
    ["http://www.unifloe.app/pricing/", "https://unifloe.app/pricing/"],
    ["https://www.unifloe.app/contact/", "https://unifloe.app/contact/"],
  ];
  for (const [source, destination] of cases) {
    const response = await requestUrl(new URL(source));
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), destination);
  }
  const caddyForwarded = await requestUrl(new URL("http://unifloe.app/features/"), { "x-forwarded-proto": "https" });
  assert.equal(caddyForwarded.status, 200);
  assert.equal((await requestUrl(new URL("https://preview.example/about/"))).status, 200);
});

test("permanently redirects consolidated routes to the closest retained content", async () => {
  const cases = [
    ["http://localhost/attendance-management/", "http://localhost/features/#attendance-workflows"],
    ["http://localhost/fee-management/", "http://localhost/features/#fee-workflows"],
    ["http://localhost/exam-management/", "http://localhost/features/#assessment-workflows"],
    ["http://localhost/school-erp-bengaluru/", "http://localhost/school-erp-software-india/#bengaluru-pilot"],
    ["https://www.unifloe.app/attendance-management/?source=old", "https://unifloe.app/features/?source=old#attendance-workflows"],
  ];
  for (const [source, destination] of cases) {
    const response = await requestUrl(new URL(source));
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), destination);
  }
});

test("returns a useful noindex 404 without a homepage canonical", async () => {
  const response = await render("/missing-seo-audit-page");
  assert.equal(response.status, 404);
  const html = await response.text();
  assert.match(html, /This page has moved beyond the timetable/);
  assert.match(html, /<meta[^>]+(?:name="robots"[^>]+content="noindex, nofollow"|content="noindex, nofollow"[^>]+name="robots")/);
  assert.doesNotMatch(html, /rel="canonical"/);
  assert.match(html, /href="\/features"/);
  assert.match(html, /href="\/contact"/);
});

test("renders the four-part home pitch and compact contact privacy treatment", async () => {
  const [home, contact] = await Promise.all([
    render("/").then((response) => response.text()),
    render("/contact").then((response) => response.text()),
  ]);
  for (const value of [
    "One place for every", "Your school. Your identity.", "Readiness-focused by design.",
    "Enable only what you need.", "Powerful without being expensive.",
    "APAAR readiness", "Founding School Starter Plan",
    "Direct founder support", "Start at",
  ]) assert.match(home, new RegExp(value.replace(/[.]/g, "\\.")));
  assert.match(home, /₹1[\s\S]*?per student[\s\S]*?per month[\s\S]*?₹8,000[\s\S]*?per year/);
  assert.doesNotMatch(home, /APAAR certified|official APAAR certification/i);
  assert.doesNotMatch(home, /Data hosted in India|India-hosted|DPDP-aligned/i);
  assert.doesNotMatch(home, /Structured for the evolving|Modern school software for practical|Supports APAAR-related workflows|Attendance, timetables, assignments/);
  assert.doesNotMatch(home, /Connected operating map|School pulse/);
  assert.doesNotMatch(home, /Not another tool/);
  assert.match(contact, /Your enquiry stays an enquiry/);
  assert.match(contact, /What happens after you contact PaperKite/);
  assert.match(contact, /Bengaluru is Unifloe(?:'|&#x27;)s initial pilot focus/);
  assert.doesNotMatch(contact, /Clear purpose\. Minimal information/);
});

test("renders direct Unifloe contact details on contact and footer surfaces", async () => {
  const [home, contact] = await Promise.all([
    render("/").then((response) => response.text()),
    render("/contact").then((response) => response.text()),
  ]);
  for (const html of [home, contact]) {
    assert.match(html, /href="tel:\+919686110206"/);
    assert.match(html, /href="mailto:adithya@unifloe\.app"/);
    assert.match(html, /\+91 9686110206/);
    assert.match(html, /adithya@unifloe\.app/);
  }
});

test("uses the real product capture in a full-width home hero", async () => {
  const [home, pageSource, dotGridSource, heroProductSource, globalCss] = await Promise.all([
    render("/").then((response) => response.text()),
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/components/DotGrid.tsx", root), "utf8"),
    readFile(new URL("app/components/HeroProduct.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);
  await Promise.all([
    access(new URL("public/herosectionphoto-960.webp", root)),
    access(new URL("public/herosectionphoto-1600.webp", root)),
  ]);
  assert.match(home, /src="\/herosectionphoto-1600\.webp"/);
  assert.match(home, /srcSet="\/herosectionphoto-960\.webp 960w, \/herosectionphoto-1600\.webp 1600w"/);
  assert.match(home, /width="1600" height="871"/);
  assert.doesNotMatch(home, /Actual Unifloe workspace|One connected view|Built around DPDP/);
  assert.match(pageSource, /<section className="hero">/);
  assert.match(pageSource, /className="hero-dot-grid"[\s\S]*?dotSize=\{3\}[\s\S]*?baseColor="#e1eaf7"[\s\S]*?activeColor="#0057ff"[\s\S]*?activeScale=\{2\.4\}[\s\S]*?proximity=\{165\}/);
  assert.match(dotGridSource, /prefers-reduced-motion/);
  assert.match(dotGridSource, /ResizeObserver/);
  assert.match(dotGridSource, /\(pointer: fine\)/);
  assert.match(dotGridSource, /frameRef/);
  assert.match(dotGridSource, /\(activeScale - 1\) \* strength/);
  assert.doesNotMatch(dotGridSource, /gsap|pointerdown/);
  assert.equal(dotGridSource.match(/requestAnimationFrame\(draw\)/g)?.length, 1);
  assert.match(heroProductSource, /pointermove/);
  assert.match(heroProductSource, /requestAnimationFrame\(applyTilt\)/);
  assert.match(heroProductSource, /prefers-reduced-motion/);
  assert.match(heroProductSource, /\(pointer: fine\)/);
  assert.match(globalCss, /--hero-tilt-x/);
  assert.match(globalCss, /--hero-tilt-y/);
  assert.doesNotMatch(pageSource, /hero section-shell/);
  assert.match(globalCss, /\.hero\s*\{[\s\S]*?width:\s*100%/);
  assert.match(globalCss, /\.hero::after\s*\{[\s\S]*?height:\s*clamp\(120px, 15vw, 190px\)[\s\S]*?linear-gradient\(180deg/);
  assert.match(globalCss, /\.hero-dot-grid\s*\{[\s\S]*?mask-image:\s*linear-gradient\(180deg/);
  assert.match(globalCss, /\.trust-strip\s*\{[\s\S]*?position:\s*relative;[\s\S]*?margin:\s*-46px auto 112px/);
});

test("uses optimized profile avatars and defers below-fold rendering work", async () => {
  const [home, pageSource, globalCss, menuSource, packageJson] = await Promise.all([
    render("/").then((response) => response.text()),
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/components/StaggeredMenu.tsx", root), "utf8"),
    readFile(new URL("package.json", root), "utf8"),
  ]);
  await Promise.all([
    access(new URL("public/unifloe_avatar_01_lavender-192.jpg", root)),
    access(new URL("public/unifloe_avatar_02_mint-192.jpg", root)),
  ]);
  assert.match(home, /unifloe_avatar_01_lavender-192\.jpg/);
  assert.match(home, /unifloe_avatar_02_mint-192\.jpg/);
  assert.match(pageSource, /loading="lazy" decoding="async"/);
  assert.match(globalCss, /\.pitch-identity\s*\{[^}]*justify-content:\s*center/);
  assert.match(globalCss, /\.pitch-compliance\s*\{[^}]*justify-content:\s*center/);
  assert.match(globalCss, /content-visibility:\s*auto/);
  assert.doesNotMatch(menuSource, /gsap/);
  assert.doesNotMatch(packageJson, /"gsap"/);
});

test("gives pricing the feature hero art direction and a visual plan path", async () => {
  const [pricing, pricingSource] = await Promise.all([
    render("/pricing").then((response) => response.text()),
    readFile(new URL("app/pricing/page.tsx", root), "utf8"),
  ]);
  assert.match(pricingSource, /features-hero pricing-hero/);
  assert.match(pricing, /Your path with Unifloe/);
  assert.match(pricing, /Pilot to rollout/);
  assert.match(pricing, /Built around your school/);
});

test("reinitializes reveal motion and opens the menu without pulling the page upward", async () => {
  const [motion, menuCss, menuSource, globalCss] = await Promise.all([
    readFile(new URL("app/components/ScrollMotion.tsx", root), "utf8"),
    readFile(new URL("app/components/StaggeredMenu.module.css", root), "utf8"),
    readFile(new URL("app/components/StaggeredMenu.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);
  assert.match(motion, /usePathname/);
  assert.match(motion, /requestAnimationFrame/);
  assert.match(menuCss, /\.preLayers,\s*\.panel\s*\{[\s\S]*?position:\s*fixed;[\s\S]*?top:\s*var\(--menu-viewport-top/);
  assert.match(menuCss, /width:\s*min\(1520px, calc\(100% - 40px\)\)/);
  assert.match(menuSource, /getBoundingClientRect\(\)\.bottom/);
  assert.match(menuSource, /const headerHeight = wrapper\.offsetHeight/);
  assert.match(menuSource, /Math\.max\(headerHeight, bottom\)/);
  assert.match(menuCss, /\.wrapper\s*\{[\s\S]*?position:\s*sticky/);
  assert.doesNotMatch(menuCss, /\.wrapper\[data-open\]/);
  assert.match(menuCss, /overflow-x:\s*clip/);
  assert.match(globalCss, /overflow-x:\s*(?:hidden|clip)/);
  assert.doesNotMatch(menuCss, /logoTile/);
});

test("keeps the phone layout spaced and the mobile menu viewport-safe", async () => {
  const [globalCss, menuCss, menuSource, headerSource] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/components/StaggeredMenu.module.css", root), "utf8"),
    readFile(new URL("app/components/StaggeredMenu.tsx", root), "utf8"),
    readFile(new URL("app/components/SiteHeader.tsx", root), "utf8"),
  ]);
  assert.match(globalCss, /@media \(max-width: 420px\)/);
  assert.match(globalCss, /@media \(max-width: 1180px\) and \(orientation: portrait\)/);
  assert.doesNotMatch(headerSource, /pilot-bar|pilot-pulse|Pilot applications are open/);
  assert.doesNotMatch(globalCss, /\.pilot-bar|\.pilot-pulse/);
  assert.match(globalCss, /@media \(max-width: 1180px\) and \(orientation: portrait\)[\s\S]*?\.final-cta\s*\{[^}]*margin-bottom:\s*56px/);
  assert.match(globalCss, /@media \(max-width: 760px\)[\s\S]*?\.final-cta\s*\{[^}]*margin-bottom:\s*48px/);
  assert.doesNotMatch(globalCss, /\.split-heading h2 br\s*\{\s*display:\s*none/);
  assert.match(menuCss, /height:\s*calc\(100dvh - var\(--menu-viewport-top/);
  assert.match(menuCss, /\(max-width: 1180px\) and \(orientation: portrait\)/);
  assert.match(menuCss, /\.preLayers,\s*\.panel\s*\{[\s\S]*?top:\s*0;[\s\S]*?height:\s*100dvh/);
  assert.match(menuCss, /\.preLayers\s*\{\s*display:\s*none/);
  assert.match(menuCss, /overscroll-behavior:\s*contain/);
  assert.match(menuSource, /Pilot applications are open/);
  assert.match(menuSource, /event\.key === "Tab"/);
});

test("uses a purpose-built portrait layout instead of a compressed desktop hero", async () => {
  const globalCss = await readFile(new URL("app/globals.css", root), "utf8");
  assert.match(globalCss, /@media \(max-width: 1180px\) and \(orientation: portrait\)[\s\S]*?\.hero\s*\{[\s\S]*?grid-template-columns:\s*1fr;[\s\S]*?background:\s*#fff/);
  assert.match(globalCss, /\.hero-dot-grid,\s*\.hero::before,\s*\.hero-product-aura\s*\{\s*display:\s*none/);
  assert.match(globalCss, /\.trust-strip\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2/);
  assert.match(globalCss, /\.features-hero::before,\s*\.features-hero-shape\s*\{\s*display:\s*none/);
  assert.match(globalCss, /\[data-reveal\]\.reveal-ready\s*\{[\s\S]*?filter:\s*blur\(5px\)/);
  assert.doesNotMatch(globalCss, /@media \(max-width: 1180px\) and \(orientation: portrait\)[\s\S]*?filter:\s*none/);
});

test("keeps product and compliance language present", async () => {
  const [home, features] = await Promise.all([render("/").then((response) => response.text()), render("/features").then((response) => response.text())]);
  for (const value of ["Privacy-conscious workflows", "DPDP readiness", "Supports APAAR readiness", "Role-based access"]) assert.match(home, new RegExp(value));
  assert.doesNotMatch(home, /DPDP-aligned|APAAR-ready|Data hosted in India|India-hosted/i);
  for (const value of ["Paper Set", "Hostel management", "Health &amp; wellbeing", "Custom school workflows", "Institution-branded experience"]) assert.match(features, new RegExp(value));
});

test("renders the feature system hero, aligned selector, and animated disclosures", async () => {
  const [html, pageSource, accordionSource, globalCss] = await Promise.all([
    render("/features").then((response) => response.text()),
    readFile(new URL("app/features/page.tsx", root), "utf8"),
    readFile(new URL("app/components/FeatureAccordion.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);
  assert.match(html, /Unifloe platform/);
  assert.match(html, /65<small>modules/);
  assert.match(html, /65(?:<!-- -->)? registered modules/);
  assert.match(html, /Implementation scope stays explicit/);
  assert.match(html, /How connected workflows operate/);
  assert.match(html, /Attendance, corrections and student leave/);
  assert.match(html, /School-owned fees and collection boundaries/);
  assert.match(html, /Exams, question papers and result publication/);
  assert.match(html, /id="attendance-workflows"/);
  assert.match(html, /id="fee-workflows"/);
  assert.match(html, /id="assessment-workflows"/);
  assert.doesNotMatch(html, /24<small>modules/);
  assert.doesNotMatch(pageSource, /<details/);
  assert.match(accordionSource, /AnimatePresence/);
  assert.match(accordionSource, /blur\(9px\)/);
  assert.match(accordionSource, /useReducedMotion/);
  assert.match(globalCss, /\.feature-jump\s*\{[\s\S]*?grid-template-columns:\s*repeat\(3/);
});

test("validates contact form values", () => {
  const blankErrors = validateContactForm({});
  for (const field of ["schoolName", "contactName", "role", "email", "phone", "location", "studentStrength", "interest", "consent"]) assert.ok(blankErrors[field]);

  const invalidErrors = validateContactForm({
    schoolName: "Riverdale School", contactName: "Aditi", role: "Principal", email: "invalid", phone: "123", location: "Pune, Maharashtra", studentStrength: "701–1,700", interest: "growth", consent: true,
  });
  assert.match(invalidErrors.email, /valid email/);
  assert.match(invalidErrors.phone, /valid phone/);
});

test("shows useful contact examples without pre-filling visitor data", async () => {
  const [contact, formSource] = await Promise.all([
    render("/contact").then((response) => response.text()),
    readFile(new URL("app/components/ContactForm.tsx", root), "utf8"),
  ]);
  for (const value of [
    "Demo Public School",
    "Ananya Sharma",
    "ananya@demopublicschool.example",
    "+91 98765 43210",
    "Bengaluru, Karnataka",
  ]) assert.match(contact, new RegExp(value.replace(/[+]/g, "\\+")));
  assert.match(formSource, /interest:\s*interestOptions\.includes\(initialInterest\) \? initialInterest : "general-demo"/);
  assert.match(formSource, /consent:\s*false/);
  assert.match(formSource, /schoolName:\s*""/);
  assert.match(formSource, /contactName:\s*""/);
});

test("builds a fixed EmailJS payload and detects honeypot submissions", () => {
  const values = {
    schoolName: " Riverdale School ", contactName: " Aditi ", role: "Principal", email: " admin@example.org ", phone: " +91 99999 99999 ", location: " Pune, Maharashtra ", studentStrength: "701–1,700", interest: "growth", message: " Improve admissions ", consent: true, website: "",
  };
  const payload = buildEmailPayload(values, "https://example.org/contact", "2026-08-02T12:00:00.000Z");
  assert.deepEqual(payload, {
    school_name: "Riverdale School", contact_name: "Aditi", role: "Principal", reply_to: "admin@example.org", phone: "+91 99999 99999", location: "Pune, Maharashtra", student_strength: "701–1,700", plan_interest: "growth", message: "Improve admissions", consent_timestamp: "2026-08-02T12:00:00.000Z", page_url: "https://example.org/contact",
  });
  assert.equal(Object.hasOwn(payload, "recipient"), false);
  assert.equal(isLikelyBot(values), false);
  assert.equal(isLikelyBot({ ...values, website: "spam.example" }), true);
});

test("removes disposable starter files and keeps brand assets", async () => {
  await assert.rejects(access(new URL("app/_sites-preview", root)));
  await Promise.all([
    access(new URL("public/brand/logoUnifloeNoBG.png", root)),
    access(new URL("public/brand/logoUnifloeNoBG-96.png", root)),
    access(new URL("public/brand/logoUnifloeNoBgWhite-96.png", root)),
    access(new URL("public/fonts/Gilroy-Regular.woff", root)),
    access(new URL("public/og.jpg", root)),
    access(new URL("public/og-seo.png", root)),
  ]);
  const [layout, seoSource, packageJson] = await Promise.all([
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/lib/seo.ts", root), "utf8"),
    readFile(new URL("package.json", root), "utf8"),
  ]);
  assert.match(seoSource, /og-seo\.png/);
  assert.match(layout, /width: 1200, height: 630/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("configures a request-independent static production export", async () => {
  const [nextConfig, layout, seoSource] = await Promise.all([
    readFile(new URL("next.config.ts", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/lib/seo.ts", root), "utf8"),
  ]);
  assert.match(nextConfig, /output:\s*"export"/);
  assert.match(nextConfig, /trailingSlash:\s*true/);
  assert.match(seoSource, /siteOrigin = "https:\/\/unifloe\.app"/);
  assert.match(layout, /export const metadata:\s*Metadata/);
  assert.doesNotMatch(layout, /next\/headers|headers\(\)|generateMetadata/);
});

test("exports retained pages while Caddy proxies all requests through the Worker", async () => {
  const exportedPages = [
    ["dist/client/index.html", "A modern school"],
    ["dist/client/features/index.html", "Every school workflow"],
    ["dist/client/pricing/index.html", "Start with a pilot"],
    ["dist/client/contact/index.html", "Start a useful conversation"],
    ["dist/client/about/index.html", "built and operated by PaperKite"],
    ["dist/client/school-erp-software-india/index.html", "School ERP software built"],
    ["dist/client/school-lms/index.html", "school LMS connected"],
    ["dist/client/for-cbse-schools/index.html", "ERP and LMS for CBSE"],
    ["dist/client/apaar-readiness/index.html", "Support APAAR readiness"],
    ["dist/client/data-privacy/index.html", "Privacy-conscious workflows"],
  ];
  for (const [path, expectedText] of exportedPages) {
    const html = await readFile(new URL(path, root), "utf8");
    assert.match(html, new RegExp(expectedText));
  }
  for (const path of [
    "dist/client/attendance-management/index.html",
    "dist/client/fee-management/index.html",
    "dist/client/exam-management/index.html",
    "dist/client/school-erp-bengaluru/index.html",
    "public/robots.txt",
    "public/sitemap.xml",
  ]) await assert.rejects(access(new URL(path, root)));

  const [caddyfile, packageJson] = await Promise.all([
    readFile(new URL("Caddyfile", root), "utf8"),
    readFile(new URL("package.json", root), "utf8"),
  ]);
  assert.match(caddyfile, /reverse_proxy 127\.0\.0\.1:3000/);
  assert.doesNotMatch(caddyfile, /file_server|root\s+\*?\s*dist\/client/);
  assert.match(packageJson, /vinext start --host 127\.0\.0\.1 --port 3000/);
  const notFound = await readFile(new URL("dist/client/404.html", root), "utf8");
  assert.match(notFound, /This page has moved beyond the timetable/);
  assert.match(notFound, /noindex, nofollow/);
});
