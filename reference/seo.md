# Unifloe marketing-site SEO

## Canonical domain

The only canonical production origin is `https://unifloe.app`. Canonical page URLs use a trailing slash because the site is built with `trailingSlash: true`.

Requests for `http://unifloe.app`, `http://www.unifloe.app`, and `https://www.unifloe.app` are redirected by the Worker to the equivalent apex HTTPS URL. The checked-in Caddy configuration proxies both hosts to that Worker and forwards the original protocol, so apex HTTPS requests render normally while HTTP and `www` requests receive the canonical redirect.

## Indexable public routes

- `https://unifloe.app/`
- `https://unifloe.app/features/`
- `https://unifloe.app/pricing/`
- `https://unifloe.app/contact/`
- `https://unifloe.app/about/`
- `https://unifloe.app/school-erp-software-india/`
- `https://unifloe.app/school-lms/`
- `https://unifloe.app/for-cbse-schools/`
- `https://unifloe.app/apaar-readiness/`
- `https://unifloe.app/data-privacy/`

The LMS route remains indexable because it documents distinct assignment, submission, feedback, class/subject authorization, realtime-fallback, and protected-learning-data behavior. The CBSE route remains indexable because it documents a distinct Nursery-to-Grade-12 stage model, CBSE-first demo structure, assignment-scoped academics, and board/government-affiliation disclaimers.

## Primary visitor navigation

The global header presents exactly five primary pages: Home, Features, Pricing, About, and Contact. The footer reinforces the same compact information architecture through the home logo plus links to Features, Pricing, About, and Contact.

The five specialist SEO pages remain useful, indexable, canonical and listed in the sitemap, but they are intentionally excluded from the global header and footer so they do not crowd normal visitor navigation. They must remain substantial, server rendered and reachable directly; do not disguise them with hidden text or create additional doorway pages.

## Consolidated routes and permanent redirects

The following previously deployed pages were merged because their useful content was stronger as part of a broader product page:

- `/attendance-management/` → `/features/#attendance-workflows`
- `/fee-management/` → `/features/#fee-workflows`
- `/exam-management/` → `/features/#assessment-workflows`
- `/school-erp-bengaluru/` → `/school-erp-software-india/#bengaluru-pilot`

These URLs return `308 Permanent Redirect`, are absent from `publicRoutes` and the sitemap, and are not linked as standalone navigation destinations.

The sitemap is generated from the typed `publicRoutes` registry in `app/lib/seo.ts`. It intentionally omits `lastModified`, change frequency, and priority values because the repository does not have a reliable content-publication timestamp source.

## Excluded and non-indexable surfaces

- `/api/` is disallowed in `app/robots.ts` because APIs have no search value.
- The custom 404 response is explicitly `noindex, nofollow` and is not listed in the sitemap.
- Error responses render a `noindex, nofollow` directive and retain a non-success HTTP status.
- This repository contains no authenticated dashboards, school workspaces, tenant pages, login pages, callbacks, billing portals, or internal operational routes.
- The authenticated product is a separate repository at `D:\Unifloe` and is outside this marketing-site change. Its indexing policy must be handled in that repository.

Robots directives are crawl preferences, not authorization. Private product data must remain protected by authenticated server-side tenant and role checks.

## Metadata conventions

- `app/layout.tsx` defines `metadataBase`, the product title template, creator/publisher, default robots policy, icons, Open Graph, and X metadata.
- Every indexable page calls `createPageMetadata()` with its registered path. That helper supplies the unique title, description, self-referencing canonical, Open Graph URL, social image, and index/follow policy.
- Do not add a `keywords` meta tag or manipulate metadata in client-side effects.
- Canonicals, sitemap URLs, and structured-data URLs must use the apex HTTPS origin.
- Use static metadata unless a future route's metadata genuinely depends on route data.

To add a new marketing page:

1. Add its path, unique title, description, and H1 to `publicRoutes` in `app/lib/seo.ts`.
2. Create a server-rendered page and export `createPageMetadata("/new-route/")`.
3. Add substantial visible content and useful contextual links; do not create a thin location or keyword variant.
4. Add it to the appropriate header or footer navigation group only when it improves visitor navigation.
5. Extend the rendered-route and internal-link tests.

## Robots and sitemap

- Robots URL: `https://unifloe.app/robots.txt`
- Sitemap URL: `https://unifloe.app/sitemap.xml`
- Robots policy: allow the public site, disallow `/api/`, and reference the sitemap. It intentionally has no `Host` directive; canonical URLs and permanent redirects enforce the preferred origin.
- Sitemap policy: include exactly the canonical public route registry and no API, private, redirect, error, or duplicate URL.

The Next.js metadata routes are served by the built vinext Worker. `npm start` binds that Worker to `127.0.0.1:3000`, and the checked-in `Caddyfile` reverse-proxies both `unifloe.app` and `www.unifloe.app` to it. Caddy must not serve `dist/client` directly: proxying every request ensures `/robots.txt`, `/sitemap.xml`, canonical-host redirects, consolidated-route redirects, pages and assets all use the same Worker entry point.

The repository does not keep handwritten `public/robots.txt` or `public/sitemap.xml` copies. `app/robots.ts`, `app/sitemap.ts` and the shared typed SEO registry remain the metadata sources; the Worker adapter emits them before trailing-slash normalization.

## Structured data

The homepage emits visible-content-supported JSON-LD for:

- `WebSite` - Unifloe at `https://unifloe.app/`, with `unifloe.app` as its domain alternate name and the Unifloe organization as publisher.
- `Organization` — Unifloe, its canonical URL, real logo, verified phone/email, and PaperKite parent organization.
- `SoftwareApplication` — Unifloe as a web educational application, part of the website and created/provided by that organization.

These entities share one `@graph` and the stable IDs `https://unifloe.app/#website`, `https://unifloe.app/#organization`, and `https://unifloe.app/#software`. JSON-LD is serialized with `<` escaped. Do not add ratings, reviews, awards, certifications, fabricated pricing, unsupported integrations, government affiliation, or social profiles.

## Brand entity signals

- The official product spelling is `Unifloe` and the official domain is `https://unifloe.app/`.
- The homepage `WebSite`, `Organization`, and `SoftwareApplication` graph identifies Unifloe consistently and connects the product to its operator: PaperKite creates and operates Unifloe, a school ERP and LMS for Indian schools.
- Consistent genuine third-party mentions help search engines establish Unifloe as a distinct entity. Every official profile should use the exact `Unifloe` spelling and link to `https://unifloe.app/`.
- No verified official social or company-profile URL is currently stored in this repository, so the Organization has no `sameAs` entries. Add only verified URLs.
- Useful future signals include a PaperKite website linking to Unifloe, an Unifloe LinkedIn company profile, PaperKite and founder LinkedIn profiles that mention and link to Unifloe, a PaperKite GitHub profile linking to the canonical site, and genuine pilot-school or partner mentions when they exist.
- Never use `Uniflow` or `uniFLOW` as an alias, and never manufacture profiles, backlinks, testimonials or reviews.

## Verification

Run:

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run test
npm run build
```

After deployment, verify:

```bash
curl -I https://unifloe.app/
curl -I https://www.unifloe.app/
curl https://unifloe.app/robots.txt
curl https://unifloe.app/sitemap.xml
```

`https://www.unifloe.app/` must return a permanent redirect to `https://unifloe.app/`, not a duplicate `200` response.

## Google Search Console

1. Submit `https://unifloe.app/sitemap.xml` once.
2. After deploying the brand-entity update to `unifloe.app`, inspect `https://unifloe.app/` and test the live URL.
3. Request re-indexing of the homepage once.
4. Allow Google to discover the remaining indexable pages through the sitemap and internal links.

Verify `robots.txt`, but do not submit it for indexing. Do not request indexing for the permanent-redirect URLs.

Structured data and consistent entity references are only some of the signals Google uses. They strengthen brand recognition but cannot guarantee that spelling correction changes immediately.
