# Content shared by every page

The generated page files cover what sits inside each page's main area. This
file covers the frame around it, which is identical on every page and lives
in three components.

## Header (`app/components/StaggeredMenu.tsx`)

- Brand: Unifloe mark and word, linking home.
- Quick links on desktop: Features, Pricing, About. Hidden on phones and
  portrait tablets.
- Sign in: text link to https://go.unifloe.app/login.
- Get started: filled button to /get-started.
- Menu: opens the panel below. The page behind it stops scrolling.

## Menu panel

- Two product rows: "Try the live demo. Any role, changes stay in your
  browser" (https://go.unifloe.app/demo) and "Sign in. For schools already on
  Unifloe" (https://go.unifloe.app/login).
- Primary navigation, in order: Home, Features, Pricing, Get started, About,
  Contact.
- Closing prompt: "Want to see it on your own school's records?" with a
  "How to get started" button.

## Hero on inner pages (`app/components/PageHero.tsx`)

Every page except the home page opens with the same hero: a heading with a
blue second phrase, one lead sentence, a blue "Try the live demo" button
(https://go.unifloe.app/demo) and a white "Talk to us" button (/contact), with
an optional card on the right. The contact page hides the two buttons because
the form is the action.

## Closing panel (`app/components/FinalCta.tsx`)

On every page except contact, privacy policy and terms: "See it running
before you decide. The demo is the real product on a synthetic school. Open it
as a principal, a teacher or a parent." with the same two buttons as the hero.
The get started page uses its own heading, "Ready when you are."

## Footer (`app/components/SiteFooter.tsx`, links in `app/data/site-content.ts`)

- Brand line: "One platform for the busy, brilliant work of running a
  school." with phone +91 9686110206 and adithya@unifloe.app.
- Product: Try the live demo, Sign in to your school, Get started.
- Explore: Features, Pricing, About Unifloe, Talk to us.
- Legal: Privacy policy, Terms of use, How school data is handled.
- Action: "Ready when you are." with a "Get started" button.
- Bottom line: copyright year, "Unifloe, a PaperKite product", "Guardian
  consent under the DPDP Act · No advertising or tracking", and the statement
  that Unifloe is independent and not affiliated with the Government of
  India, CBSE, CISCE, APAAR or UDISE+.

## Analytics (`app/layout.tsx`)

Cloudflare Web Analytics loads on every page when `NEXT_PUBLIC_CF_BEACON_TOKEN`
is set at build time. It sets no cookies. The privacy policy page describes
it.

## Contact details

The phone number, WhatsApp link and email address appear on the contact page,
the about page and the footer. They are typed in each place; if they change,
search the repository for `9686110206` and `adithya@unifloe.app`.
