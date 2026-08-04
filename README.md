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
- `/attendance-management` — attendance policy, registers, corrections, and leave
- `/fee-management` — school-owned fee and collection workflows
- `/exam-management` — exams, question papers, marks, and reports
- `/apaar-readiness` — readiness, consent, and status workflows
- `/data-privacy` — privacy-conscious school data controls
- `/school-erp-bengaluru` — initial Bengaluru pilot and onboarding availability

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
