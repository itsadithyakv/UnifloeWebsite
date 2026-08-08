# Unifloe marketing website

The public-facing website for Unifloe, a connected ERP and LMS for modern Indian schools.

## Pages

- `/` — platform overview and pilot programme
- `/features` — complete feature catalogue
- `/pricing` — pilot and standard annual plans
- `/contact` — tailored demo and pilot enquiry form
- `/about` — PaperKite and Unifloe operating model
- `/school-erp-software-india` — connected ERP and LMS for Indian schools
- `/school-lms` — assignments, materials, assessment, and feedback
- `/for-cbse-schools` — CBSE-first academic use cases
- `/apaar-readiness` — readiness, consent, and status workflows
- `/data-privacy` — privacy-conscious school data controls

Detailed attendance, fee, and exam workflows are consolidated into `/features`. Bengaluru pilot and onboarding information is consolidated into `/school-erp-software-india`. Their previously deployed URLs return permanent redirects.

SEO conventions, canonical routes, robots, sitemap, structured data, and Search Console verification are documented in [`reference/seo.md`](./reference/seo.md).

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
