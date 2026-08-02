# Unifloe marketing website

The public-facing website for Unifloe, a connected ERP and LMS for modern Indian schools.

## Pages

- `/` — platform overview and pilot programme
- `/features` — complete feature catalogue
- `/pricing` — pilot and standard annual plans
- `/contact` — tailored demo and pilot enquiry form

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
```
