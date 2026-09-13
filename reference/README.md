# Website reference

What unifloe.app says, page by page, and where each product fact comes from.
Use it to keep the website consistent with the product whose reference lives
in the product repository at `D:\Unifloe\reference`.

## Files

| File | What it is | How it is kept current |
|---|---|---|
| [claims.md](./claims.md) | Every product fact the site states, grouped by topic, with the pages that state it and the product reference section that backs it. Also lists what is Coming soon and what the site deliberately does not say. | By hand. Update it in the same commit as a copy change. |
| [shared.md](./shared.md) | The header, menu, hero, closing panel and footer that wrap every page. | By hand. |
| [pages/](./pages/) | One file per public page with its title tag, meta description, headings, paragraphs, list items and table cells, in reading order. | Generated from the built HTML. Run `npm run reference:pages` after a content change and commit the result. |
| [seo.md](./seo.md) | Canonical domain, indexable routes, redirects, metadata conventions. | By hand. |

## Pages

| Route | File | Purpose |
|---|---|---|
| / | pages/home.md | What Unifloe is, what schools tell us, identity and pricing cards, roles |
| /features/ | pages/features.md | Six areas, six workflow explanations, every module by name |
| /pricing/ | pages/pricing.md | Four plans, comparison table, questions schools ask |
| /get-started/ | pages/get-started.md | Three ways in, seven steps, what to have ready, board formats |
| /contact/ | pages/contact.md | Four field form, direct contact, what happens next |
| /about/ | pages/about.md | Why Unifloe exists, who you deal with, how we work, what we will not do |
| /school-erp-software-india/ | pages/school-erp-software-india.md | Search landing page for the ERP category |
| /school-lms/ | pages/school-lms.md | Search landing page for the LMS |
| /for-cbse-schools/ | pages/for-cbse-schools.md | Search landing page for CBSE schools |
| /apaar-readiness/ | pages/apaar-readiness.md | APAAR consent and UDISE+ preparation, described honestly |
| /data-privacy/ | pages/data-privacy.md | Responsibilities, consent, safeguards, retention, sub processors |
| /privacy-policy/ | pages/privacy-policy.md | The website's own privacy policy |
| /terms/ | pages/terms.md | Terms of use for the website and the public demo |

## Where the copy lives in code

| Content | File |
|---|---|
| Navigation, footer links, plans, FAQ, school problems, board formats, feature groups and modules, the setup promise | `app/data/site-content.ts` |
| About, school ERP, LMS, CBSE, APAAR and data privacy page content | `app/data/seo-pages.ts` |
| Title tags, meta descriptions and H1 text | `app/lib/seo.ts` |
| Home, features, pricing, get started, contact, privacy policy and terms page bodies | `app/<route>/page.tsx` |
| Contact form fields, options and messages | `app/components/ContactForm.tsx`, `app/lib/contact-form.mjs` |

## Rules the tests enforce on copy

`tests/rendered-html.test.mjs` fails the build when a page:

- contains a dash of any kind in visible text;
- puts an eyebrow or kicker label above a heading;
- uses pilot, invite, edition or optional set language, or a module count;
- says "not listed", "not built" or "payroll" on the features page;
- repeats the closing line, or uses a phrase the copy audit retired;
- links to an external origin other than go.unifloe.app or the WhatsApp number.

When a deliberate copy change trips one of these, change the test in the same
commit and say why in the commit message.

## Checking the site against the product

1. Read the product change in `D:\Unifloe\reference`.
2. Find the topic in [claims.md](./claims.md) and note which pages repeat it.
3. Edit the source file named in the table above.
4. Run `npm run reference:pages`, then `npm test`.
5. Update the claim row, and commit the code, the tests and the reference
   together.
