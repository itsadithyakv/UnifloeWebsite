import Link from "next/link";
import { ArrowRight, Check, KeyRound, LogIn, MonitorPlay, Users } from "lucide-react";
import { FinalCta } from "../components/FinalCta";
import { PageHero } from "../components/PageHero";
import { boardFormats, productLinks } from "../data/site-content";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/get-started/");

const entryPoints = [
  {
    Icon: MonitorPlay,
    title: "Look first",
    copy: "Open the live demo as a principal, teacher, parent, librarian or warden. It has a guided tour, and nothing you change is saved.",
    href: productLinks.demo,
    label: "Try the live demo",
    external: true,
  },
  {
    Icon: KeyRound,
    title: "Start free",
    copy: "One class, up to 100 users, at no cost for as long as you like. Tell us the school and we set it up within a working day.",
    href: "/contact?interest=free",
    label: "Start free",
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
    copy: "Open go.unifloe.app/demo and pick a role. The tour walks you through the screens your school will use. Changes stay in your browser for 24 hours.",
    points: ["Any school role, switch whenever you like", "No account needed", "A guided tour inside the demo"],
    link: { href: productLinks.demo, label: "Open the demo", external: true },
  },
  {
    title: "Tell us about your school",
    copy: "Four fields on the contact page, or a WhatsApp message. We call back within a working day to confirm the board format, the classes you run and the plan that fits.",
    points: ["Board format: CBSE, ICSE, state board or Karnataka PU", "Free for one class, or a plan by students on roll", "How your parents will give consent"],
    link: { href: "/contact", label: "Tell us about your school", external: false },
  },
  {
    title: "Your school is created",
    copy: "PaperKite creates the school at go.unifloe.app with its own separate space, your logo and your school code, and hands you the Head Admin sign in.",
    points: ["One Head Admin account to begin with", "Your own space, kept apart from every other school", "You are asked to set your own password on first sign in"],
  },
  {
    title: "Set up the structure",
    copy: "The Head Admin defines classes, sections, subjects and which teacher takes which class. Those assignments are what decide who may open a register or enter marks.",
    points: ["Classes, sections and student groups", "Subjects mapped to teachers and class teachers", "Attendance policy and the academic calendar"],
  },
  {
    title: "Import students from the workbook",
    copy: "Download the Unifloe workbook, fill one row per child, and preview it. Every problem is shown against its row before anything is written.",
    points: ["Excel or CSV, checked row by row", "An unknown class is flagged, never skipped", "Student logins are optional, on or off for the school"],
  },
  {
    title: "Activate parents",
    copy: "Export one activation link per parent for your own mail merge, or use the Excel import that activates them outright. A parent with several children gets one account.",
    points: ["Up to three guardians per student", "One link per parent, single use", "Consent recorded at the parent's first sign in"],
  },
  {
    title: "Go live",
    copy: "Staff sign in at go.unifloe.app with the school code, publish the timetable, open the first registers and send the first notice. Anyone can install Unifloe from the browser as an app.",
    points: ["Password sign in for every school role", "Installs as an app on Android, iPhone and desktop", "PaperKite support inside the product"],
    link: { href: productLinks.signIn, label: "Sign in", external: true },
  },
];

const readyList = [
  "One person to hold the Head Admin account",
  "Your admission register or roster as a spreadsheet",
  "A phone number and email for each parent you want to activate",
  "Your logo as a PNG, JPEG or WebP",
  "The classes and sections you run this year",
  "Your fee structure for the year, if fees are in scope",
];

const settledList = [
  "A data processing agreement between PaperKite and the school",
  "The privacy notice your school publishes to parents",
  "A named grievance officer on the school side",
  "How parents give consent, decided against your own admission form",
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
      <PageHero
        title={<>Start using Unifloe <span>in a few clear steps.</span></>}
        lead="From the live demo to the first parent signing in. Free for one class, and PaperKite does the first steps with you."
        aside={
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
        }
      />

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

      <FinalCta title="Ready when you are." copy="Look at the demo now, or tell us about your school and start free with one class." />
    </main>
  );
}
