# Unifloe marketing-site SEO

## Canonical domain

The only canonical production origin is `https://unifloe.app`. Canonical page URLs use a trailing slash because the site is built with `trailingSlash: true`.

Requests for `http://unifloe.app`, `http://www.unifloe.app`, and `https://www.unifloe.app` are redirected by the Cloudflare Worker to the equivalent apex HTTPS URL. The current Caddy deployment must apply the same host redirect before the apex domain can be considered fully canonical.

## Indexable public routes

- `https://unifloe.app/`
- `https://unifloe.app/features/`
- `https://unifloe.app/pricing/`
- `https://unifloe.app/contact/`
- `https://unifloe.app/about/`
- `https://unifloe.app/school-erp-software-india/`
- `https://unifloe.app/school-lms/`
- `https://unifloe.app/for-cbse-schools/`
- `https://unifloe.app/attendance-management/`
- `https://unifloe.app/fee-management/`
- `https://unifloe.app/exam-management/`
- `https://unifloe.app/apaar-readiness/`
- `https://unifloe.app/data-privacy/`
- `https://unifloe.app/school-erp-bengaluru/`

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
- Robots policy: allow the public site, disallow `/api/`, declare the canonical host, and reference the sitemap.
- Sitemap policy: include exactly the canonical public route registry and no API, private, redirect, error, or duplicate URL.

The Next.js metadata routes are served by the built Worker. A deployment that serves only `dist/client` through Caddy must be updated to run or proxy the Worker metadata routes; do not maintain a second handwritten XML file.

## Structured data

The homepage emits visible-content-supported JSON-LD for:

- `Organization` — Unifloe, its canonical URL, real logo, verified phone/email, and PaperKite parent organization.
- `SoftwareApplication` — Unifloe as a web educational application operated by that organization.

JSON-LD is serialized with `<` escaped. Do not add ratings, reviews, awards, certifications, fabricated pricing, unsupported integrations, government affiliation, or social profiles.

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

Submit `https://unifloe.app/sitemap.xml`. Use URL Inspection and request indexing for the 14 canonical public URLs listed above. Verify `robots.txt`, but do not request indexing for it.
