# Unifloe marketing website

The public-facing website for Unifloe, a connected ERP and LMS for modern Indian schools.

## Pages

- `/` : platform overview, the path to a live school, and the pilot programme
- `/features` : the modules by group, with the edition that includes each one
- `/pricing` : the four plans (Free, Junior, Standard, Growth) priced by students on roll, monthly or yearly
- `/get-started` : how a school starts, from the live demo and the pilot invite to registration at go.unifloe.app, setup, student import and guardian activation
- `/contact` : tailored demo and pilot enquiry form
- `/about` : PaperKite and Unifloe operating model
- `/school-erp-software-india` : connected ERP and LMS for Indian schools
- `/school-lms` : assignments, materials, assessment, and feedback
- `/for-cbse-schools` : CBSE stages, registers and thresholds
- `/apaar-readiness` : APAAR consent and UDISE+ preparation, described honestly
- `/data-privacy` : responsibilities, consent, safeguards and retention under the DPDP Act

The product itself lives at `https://go.unifloe.app` (`productAppUrl` in `app/data/site-content.ts`). The site links to its public demo (`/demo`), sign in (`/login`) and invite registration (`/register`); those are the only external links the marketing pages may carry.

Product facts on the site (module counts, editions, workflows, consent handling) come from the product reference at `D:/Unifloe/reference`. When that reference changes, update `app/data/site-content.ts`, `app/data/seo-pages.ts` and the page copy in the same change.

Copy rules enforced by the tests: no dashes of any kind in visible text, no eyebrow or kicker labels above headings, and no decorative counters or lines.

Detailed attendance, fee, and exam workflows are consolidated into `/features`. Bengaluru pilot and onboarding information is consolidated into `/school-erp-software-india`. Their previously deployed URLs return permanent redirects.

SEO conventions, canonical routes, robots, sitemap, structured data, and Search Console verification are documented in [`reference/seo.md`](./reference/seo.md).

## Analytics

The site uses Cloudflare Web Analytics, which is free, sets no cookies and needs no consent banner. Create a site in the Cloudflare dashboard under Analytics and Logs, then Web Analytics, copy the beacon token, and set `NEXT_PUBLIC_CF_BEACON_TOKEN` in `.env.local` before building. Without the token no analytics script is emitted.

## Local setup

```bash
npm install
npm run dev
```

The site uses EmailJS for real enquiry delivery. Copy `.env.example` to `.env.local` and set the service ID, template ID, and public key. Keep the receiving inbox fixed inside the EmailJS template.

## Validation

```bash
npm run lint
npx tsc --noEmit --incremental false
npm test
npm run build
```

Production Caddy deployments run `npm start` on `127.0.0.1:3000` and use the checked-in `Caddyfile` to proxy every request through the vinext Worker. This keeps metadata routes and permanent redirects on the same application path as the rendered pages.
