# Product claims made on unifloe.app

Every fact the website states about the product, grouped by topic, with the
page that states it and the product reference that backs it. The product
reference lives in the product repository at `D:\Unifloe\reference` (six
files: README, modules, workflows, runtime, compliance, working-limits).

Use this file in two directions:

- **Product changed.** Find the topic, see which pages repeat the fact, and
  edit `app/data/site-content.ts`, `app/data/seo-pages.ts` or the page file.
- **Website says something new.** Add the row here first and name the
  product reference section that supports it. If none does, it is a promise,
  not a fact, and belongs under Coming soon.

Pricing is the one topic whose source is not the product reference. Plans,
prices, limits and includes come from the founder directly and are recorded in
`app/data/site-content.ts` under `plans`.

## Product and company

| Claim on the site | Pages | Backed by |
|---|---|---|
| Unifloe is a school ERP and LMS for Indian schools, made and operated by PaperKite | every page | README §1 |
| The product runs at go.unifloe.app; the demo is at /demo, sign in at /login | every page, get started | README §1, runtime §5 |
| One deployment serves many schools; each school has its own identity, modules, branding, structure, users and data boundary | about, school erp | README §1, runtime §6 |
| A web app that installs as a PWA on phone or laptop; no separate mobile app | home, about, get started | README §3, runtime §7 |
| PaperKite is a small team in Bengaluru; the person who answers the contact page builds the product and sets up every school | about, contact | founder statement, not in the product reference |
| Board formats: CBSE, ICSE, state board, Karnataka PU (I PUC and II PUC, lecturers, class in charges, college created subject combinations, pass mark 35) | about, get started, CBSE page, school erp | README §1, workflows §3, compliance §4.6 |
| Ten school roles plus guardian access; no full access role exists | home, about, features | modules §7 |
| Attendance threshold defaults to 75 percent and is a school setting | features, CBSE page, school erp | workflows §9, compliance §4.4 |
| Six areas: Academics, Communication, Finance, Campus operations, People, Administration | home, features | modules §2 to §6 (the site groups the manifest's eight groups into six) |

## The demo

| Claim | Pages | Backed by |
|---|---|---|
| The demo is the real product on a synthetic school, any role, no account, with a guided tour | home, get started, closing panel on every page | workflows §26, modules §12 |
| Changes stay in the visitor's browser for 24 hours and never reach a real school | get started, terms, menu, data privacy | workflows §26, compliance §7 |

## Getting started

| Claim | Pages | Backed by |
|---|---|---|
| Free for one class, up to 100 users, at no cost for as long as you like | home, pricing, get started, about, contact | founder pricing |
| Four fields on the contact page, callback within a working day | contact, get started, about | founder promise |
| PaperKite creates the school with its own separate space, logo and school code, and hands over the Head Admin sign in | get started, contact | workflows §2 (invite and registration flow), §22 (logo) |
| The Head Admin defines classes, sections, subjects and faculty assignments; assignments decide who may open a register | get started, features | workflows §3 |
| Students import from the Unifloe workbook, checked row by row; roster rows for every child, logins only where the school wants them | get started, features | workflows §4 |
| Parents activate by single use link or Excel import; one parent account across children; consent recorded at first sign in | get started, features | workflows §5 |
| Staff sign in with password and school code; installs as an app | get started | workflows §6, runtime §7 |
| Support continues inside the product after go live (PaperKite support thread) | about, get started | workflows §13 |

## Academics

| Claim | Pages | Backed by |
|---|---|---|
| Attendance by period, once a day, or morning and after lunch; policies are dated so old registers keep their meaning | features | workflows §9 |
| Registers opened by the assigned teacher or the Principal; correction requests decided by Head Admin or Principal | features | workflows §9, modules §2 |
| Student leave applications separate from staff and hostel leave | features | workflows §9 |
| Attendance workbook export counts only confirmed periods | features | workflows §9 |
| Exam plan, announced timetable, mark sheets, release refused until every sheet is submitted, staggered release | features | workflows §11 |
| Report cards from released marks only, single page A4, on the school's board scale | features, CBSE page | workflows §11 |
| Hall tickets in four layouts, per student or section, only after the timetable is announced | features, CBSE page | workflows §11, working-limits §2 |
| Timetable templates, generated draft, conflict check, teacher proposals decided by leadership | features | workflows §7 |
| Calendar versions validated before publishing; a half day changes what the register expects | features | workflows §8, §9 |
| Assignments, quizzes, tests, essays, materials, server controlled attempts, live sessions with an ordinary refresh fallback | features, LMS page | workflows §10 |

## Communication and families

| Claim | Pages | Backed by |
|---|---|---|
| Role Inbox announcements scoped by role, class, department or school; school wide publication goes through approval | features | workflows §12 |
| Requests: tickets routed by category, polls, acknowledgements, permission responses | features | workflows §14 |
| Notes and tasks for staff, projected into the calendar | features | workflows §8 |
| Up to three guardians per student; a parent with several children gets one account | features, get started | workflows §5 |
| Consent held at sign in until given; withdrawal recorded; full history reviewable | features, data privacy | workflows §5, compliance §3.1 |
| One time codes for parent approvals and payment requests | features | workflows §5 |
| Chat exists and is direct and support chat between registered people | features | workflows §13 |

## Finance

| Claim | Pages | Backed by |
|---|---|---|
| Published fee structure derives charges; staff propose charges, Finance publishes once | features | workflows §15 |
| Families pay at the school; staff record it; recording allocates, updates dues and issues the numbered receipt in one step | features, home | workflows §15 |
| The recorder cannot verify their own entry; adjustments have maker and checker | features | workflows §15 |
| No online collection and no card or bank details stored | features, pricing FAQ, data privacy, about | workflows §15, compliance §6.4 |
| PaperKite invoices the school directly and records payment; invoices available as PDF from Billing | pricing | workflows §2 |

## Campus operations and people

| Claim | Pages | Backed by |
|---|---|---|
| Library: catalogue, borrowing, loans, returns, fines, borrower history, digital library; fines settle on the family statement | features | workflows §18 |
| Hostel: rooms and beds, staged leave (student, guardian, warden), roll call, requests, fine proposals | features | workflows §17 |
| Front Office: phone first visitor desk, policy driven approval, check out, escalation | features | workflows §20 |
| Inventory: consumables, reusable items, fixed assets; damaged items never return to stock automatically | features | workflows §19 |
| Staff leave, substitutes, HR workforce records | features | workflows §21 |
| Students, Faculty, Staff, Classes, Profile records | features | modules §6 |

## Administration

| Claim | Pages | Backed by |
|---|---|---|
| One approvals queue; the requester never decides; a decided request cannot be decided again; a lost update is never shown as success | features, about | workflows §23 |
| Every sensitive change is logged with who, what and when | features | workflows §23 (written; no read surface yet, which is why "Audit log exports" is Coming soon) |
| Logo uploaded once appears in the sidebar and on every document; four brand colours; three presets Default, Sculpt and Clay | home | runtime §13, workflows §22 |
| Module settings, permissions with six actions, no full access role | features | modules §7, §9 |

## Data protection

| Claim | Pages | Backed by |
|---|---|---|
| School is Data Fiduciary, PaperKite is Data Processor; written agreement before go live | data privacy, get started, terms | compliance §1, §9 |
| Parent in app consent by default; signed admission form as declared alternative only if it carries the notice | data privacy | workflows §5, compliance §3.1 |
| Every pilot student is a child under the Act | data privacy | compliance §1 |
| Passwords hashed, secrets encrypted, uploads private and re authorised, per request CSP, rate limits before lookup | data privacy | runtime §8 |
| No advertising, no third party analytics, no session replay, no tracking of children in the product | data privacy, footer, about | compliance §2 |
| No Aadhaar numbers, no biometrics, blood group the only health field | data privacy, APAAR page | compliance §3.2, §3.5 |
| Retention: email history 90 days, reset links 30 minutes, codes 10 minutes, sessions 30 days, archives purged only after a verified backup and never under legal hold | data privacy | compliance §7 |
| Sub processors: MongoDB Atlas, Cloudflare R2, Resend, Google, Sentry, Ably | data privacy | compliance §1, runtime §1 |
| What stays with the school: notice, grievance officer, consent basis, access and erasure requests, breach notification | data privacy | compliance §2, §9 |
| APAAR consent is a separate, optional consent type; UDISE+ returns are prepared from exports; no live government integration | APAAR page, CBSE page | compliance §4.2, §4.3 |
| Unifloe is not affiliated with or approved by CBSE, CISCE, the Government of India, APAAR or UDISE+ | footer, CBSE page, APAAR page | compliance §4 |

## The website itself

| Claim | Pages | Backed by |
|---|---|---|
| The website sets no cookies and uses Cloudflare Web Analytics, which sets no cookies and identifies nobody | privacy policy | `app/layout.tsx` |
| The enquiry form sends to one inbox through EmailJS; never student data | contact, privacy policy | `app/components/ContactForm.tsx` |
| Legal pages last updated 4 September 2026 | privacy policy, terms | `app/privacy-policy/page.tsx`, `app/terms/page.tsx` |

## Coming soon

Named on the pricing page, separated from what a plan includes. None of
these exist in the product reference as shipped features.

| Item | Plan | What the product reference says today |
|---|---|---|
| WhatsApp notices to parents | Standard | No SMS or WhatsApp channel exists (compliance §9). Outbound email needs an operator to connect a mailbox (workflows §25) |
| Online admissions | Standard | The admissions pipeline is built but has no navigation entry and no parent facing form (modules §10) |
| Audit log exports | Growth | Audit rows are written but nothing reads them (working-limits §5) |

## Things the site deliberately does not say

Kept off the site because the product reference records them as not built,
withdrawn or unreachable. Do not add them back without a product change.

- Payroll, transport, clubs, face or biometric attendance, ID cards,
  transfer certificates.
- Online fee collection through a gateway (withdrawn; payments are recorded at
  the school).
- Any module count. The manifest registers 45 keys; the site describes six
  areas and lists 37 modules by name after folding the seven library screens
  into one.
- Pilot, invite code, founding offer, three school cohort. The current story
  is the free plan.
- Edition names (Core, Full) and optional set language. Plans replaced them.
