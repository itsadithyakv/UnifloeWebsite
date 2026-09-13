# /data-privacy/

Title tag: School Data Privacy & DPDP Readiness | Unifloe

Meta description: How Unifloe handles school data under the DPDP Act: who is responsible for what, guardian consent, security safeguards, retention and what stays with the school.

Generated from the built page. Edit the source in app/, not this file.

## H1: How Unifloe handles school data

Under the Digital Personal Data Protection Act the school is the Data Fiduciary and PaperKite is the Data Processor. Here is what each side carries and what Unifloe does about it.

## Consent from the parent

A child's data needs a parent's own verifiable consent. No administrator can consent on their behalf.

## Safeguards in the product

Hashed passwords, encrypted secrets, private files, one separate space per school, rate limits and a strict content security policy.

## No tracking of children

No advertising, no third party analytics, no session replay, no cross site tracking.

## Who is responsible for what

The school decides the purpose and means of processing. PaperKite processes only on the school's instructions, under a written agreement settled before go live.

- School: notice, consent, retention, grievance officer
- PaperKite: safeguards, contract, deletion on instruction
- Parent or guardian: consent for the child
- Every school student is a child under the Act
## Consent the way the Act describes it

By default the parent consents inside the product and is held at that step until it is recorded.

- Parent in app consent by default
- Signed admission form as a declared alternative, only if it carries the notice
- Verification method, notice version and purposes on every record
- Withdrawal as easy as giving, with full history
- APAAR consent kept separate and optional
## Security safeguards that are in the product

Every school record is read and written through a repository that cannot build a query without the school identity.

- Passwords hashed, secrets encrypted at rest
- Uploads size limited, type checked, private and re authorised on read
- Per request content security policy, no framing, rate limits before any lookup
- No card or bank details, no Aadhaar numbers, no biometrics
- Encrypted backups, with a restore rehearsed before a school goes live
## What is retained, and for how long

Short lived things expire quickly. School records stay for as long as the subscription is active.

- Email delivery history compacted after 90 days
- Password reset links 30 minutes, one time codes 10 minutes
- Demo changes live in your browser for 24 hours
- Archives purged only after a verified backup, never under legal hold
- Statutory retention of financial and admission records stays with the school
## What stays with the school

Technology controls are one part of data governance. These remain the school's own duties.

- Publish the privacy notice and name a grievance officer
- Decide the consent basis against your own admission form
- Answer access, correction and erasure requests
- Notify the Data Protection Board and affected people after a breach, with facts from PaperKite
## Services Unifloe relies on

Unifloe runs as one application at go.unifloe.app. These services are named as sub processors in the agreement.

- MongoDB Atlas for records
- Cloudflare R2 for private files, archives and backups
- Resend for one time codes, and the school's own Google account for outbound mail
- Sentry for scrubbed error reports, Ably for optional live updates
- Hosting regions confirmed with each school
This page describes product controls that support a school's data governance under the DPDP Act. It is not legal advice or a certification of complete compliance.

## Related Unifloe pages

What is recorded, what is exported and what is never stored.

The operating and responsibility model.

From the live demo to the first parent signing in.

## See it running before you decide.

The demo is the real product on a synthetic school. Open it as a principal, a teacher or a parent.

