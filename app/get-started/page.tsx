import Link from "next/link";
import { ArrowRight, Check, KeyRound, LogIn, MonitorPlay, Users } from "lucide-react";
import { boardFormats, productLinks } from "../data/site-content";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/get-started/");

const entryPoints = [
  {
    Icon: MonitorPlay,
    title: "Look first",
    copy: "Open the live demo as a principal, teacher, parent, librarian or warden. It is the real product on a synthetic school, and nothing you change is saved.",
    href: productLinks.demo,
    label: "Try the live demo",
    external: true,
  },
  {
    Icon: KeyRound,
    title: "Start a pilot",
    copy: "Tell PaperKite about your school. You get a pilot invite code and register the school yourself at go.unifloe.app.",
    href: "/contact",
    label: "Talk to PaperKite",
    external: false,
  },
  {
    Icon: LogIn,
    title: "Already on Unifloe",
    copy: "Staff, students and parents sign in with the school code. The same address installs as an app on a phone or laptop.",
    href: productLinks.signIn,
    label: "Sign in",
    external: true,
  },
];

const steps = [
  {
    title: "Try the live demo",
    copy: "Open go.unifloe.app/demo and pick a role. You are looking at the same screens your school will use. Changes stay in your browser for 24 hours and never touch a real school.",
    points: ["Any school role, switch whenever you like", "No account needed", "Reset the demo from inside it"],
    link: { href: productLinks.demo, label: "Open the demo", external: true },
  },
  {
    title: "Agree the pilot with PaperKite",
    copy: "One conversation settles the board format, the edition, any optional sets, the number of accounts, and the consent basis for your parents. PaperKite then issues a pilot invite code and reserves a database slot for your school.",
    points: ["Board format: CBSE, ICSE, state board or Karnataka PU", "Core edition plus Library, Hostel or Inventory sets", "Consent basis chosen against your own admission form"],
    link: { href: "/contact", label: "Talk to PaperKite", external: false },
  },
  {
    title: "Register the school",
    copy: "Enter the invite code at go.unifloe.app/register. The school's routing is created first, then the Head Admin account, and the slot becomes the school's own database. Registration is safe to retry.",
    points: ["One Head Admin account to begin with", "The school's own database, assigned permanently", "Head Admin signs in and is asked to change the password"],
    link: { href: productLinks.register, label: "Register with an invite", external: true },
  },
  {
    title: "Set up the structure",
    copy: "The Head Admin picks the board format, then defines classes, sections, subjects, elective groups and faculty assignments. Those assignments are what decide who may open a register or enter marks.",
    points: ["Classes, sections and student groups", "Subjects mapped to faculty and class teachers", "Attendance policy, academic calendar and school logo"],
  },
  {
    title: "Import students from the workbook",
    copy: "Download the Unifloe workbook, fill one row per child, and preview it. Every problem is shown against its row before anything is written. Committing creates a roster row for every child and a login only where the school wants one.",
    points: ["Excel or CSV, checked row by row", "An unknown class is an error, never a silent skip", "Student logins are a school setting, off or on"],
  },
  {
    title: "Activate guardians",
    copy: "Export activation links for your own mail merge, or use the Excel import that activates parents outright. A parent with several children gets one account. On first sign in the parent sets a password and records consent under the DPDP Act.",
    points: ["Up to three guardians per student", "One link per parent, single use", "Consent held at sign in until the parent gives it"],
  },
  {
    title: "Go live",
    copy: "Staff sign in at go.unifloe.app/login with the school code. Publish the timetable, open the first registers, and send the first announcement. Anyone can install Unifloe from the browser as an app.",
    points: ["Password sign in for every school role", "Installs as an app on Android, iPhone and desktop", "PaperKite support thread inside the product"],
    link: { href: productLinks.signIn, label: "Sign in", external: true },
  },
];

const readyList = [
  "One person to hold the Head Admin account",
  "Your admission register or roster as a spreadsheet",
  "A phone number and email for each parent you want to activate",
  "Your logo as a PNG, JPEG or WebP",
  "Your board format and the classes and sections you run this year",
  "Your fee structure for the year, if Finance is in scope",
];

const settledList = [
  "A data processing agreement between PaperKite and the school",
  "The privacy notice your school publishes to parents",
  "A named grievance officer on the school side",
  "The consent basis, decided against your own admission form",
  "Hosting regions confirmed against the requirements that apply to you",
];

function StepLink({ link }: { link: { href: string; label: string; external: boolean } }) {
  return link.external ? (
    <a className="text-link" href={link.href}>{link.label} <ArrowRight aria-hidden="true" /></a>
  ) : (
    <Link className="text-link" href={link.href}>{link.label} <ArrowRight aria-hidden="true" /></Link>
  );
}

export default function GetStartedPage() {
  return (
    <main id="main-content">
      <section className="features-hero start-hero">
        <div className="features-hero-shape" aria-hidden="true" />
        <div className="features-hero-inner section-shell">
          <div className="features-hero-copy" data-reveal>
            <h1>Start using Unifloe<br /><span>in a few clear steps.</span></h1>
            <p>From the live demo to the first parent signing in. Every step has a page or a template behind it, and PaperKite does the first ones with you.</p>
            <div className="hero-actions">
              <a className="button" href={productLinks.demo}>Try the live demo <ArrowRight aria-hidden="true" /></a>
              <Link className="text-link start-hero-link" href="/contact">Talk to PaperKite <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="entry-grid" data-reveal-group>
            {entryPoints.map(({ Icon, title, copy, href, label, external }) => (
              <article key={title}>
                <div className="icon-tile"><Icon aria-hidden="true" /></div>
                <h2>{title}</h2>
                <p>{copy}</p>
                {external ? <a className="text-link" href={href}>{label} <ArrowRight aria-hidden="true" /></a> : <Link className="text-link" href={href}>{label} <ArrowRight aria-hidden="true" /></Link>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell steps-section" aria-labelledby="steps-heading">
        <div className="section-heading" data-reveal>
          <h2 id="steps-heading">The seven steps to a live school</h2>
          <p>Steps one to three happen with PaperKite. Steps four to seven are the Head Admin’s, with guidance inside the product.</p>
        </div>
        <ol className="steps-list">
          {steps.map((step, index) => (
            <li key={step.title} data-reveal>
              <span className="step-number">{index + 1}</span>
              <div className="step-body">
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <ul>{step.points.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}</ul>
                {step.link ? <StepLink link={step.link} /> : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell ready-section" aria-labelledby="ready-heading">
        <div className="ready-grid" data-reveal-group>
          <article>
            <h2 id="ready-heading">What to have ready</h2>
            <ul>{readyList.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
          </article>
          <article>
            <h2>Settled before go live</h2>
            <p>These are agreed between PaperKite and the school, because the school is the Data Fiduciary under the DPDP Act and PaperKite is its processor.</p>
            <ul>{settledList.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
            <Link className="text-link" href="/data-privacy">How school data is handled <ArrowRight aria-hidden="true" /></Link>
          </article>
        </div>
      </section>

      <section className="section-shell boards-section" aria-labelledby="boards-heading">
        <div className="section-heading" data-reveal>
          <h2 id="boards-heading">Pick the board format first</h2>
          <p>The format decides the vocabulary, the class bands, the assessment modes and the report card template. Everything else follows from it.</p>
        </div>
        <div className="boards-grid" data-reveal-group>
          {boardFormats.map((board) => <article key={board.name}><Users aria-hidden="true" /><h3>{board.name}</h3><p>{board.copy}</p></article>)}
        </div>
      </section>

      <section className="section-shell final-cta" data-reveal>
        <div className="final-cta-copy"><h2>Ready when you are.</h2><p>Look at the demo now, or tell PaperKite about your school and get an invite.</p></div>
        <div className="final-cta-actions">
          <a className="button button-light" href={productLinks.demo}>Try the live demo <ArrowRight aria-hidden="true" /></a>
          <Link className="final-cta-link" href="/contact">Talk to PaperKite <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="final-cta-clay" aria-hidden="true"><span /><span /><span /></div>
      </section>
    </main>
  );
}
