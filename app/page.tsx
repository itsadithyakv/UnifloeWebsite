import Link from "next/link";
import { PriceCounter } from "./components/Counter";
import { DotGrid } from "./components/DotGrid";
import { FinalCta } from "./components/FinalCta";
import { HeroProduct } from "./components/HeroProduct";
import {
  ArrowRight,
  BookOpenCheck,
  Boxes,
  Building2,
  Check,
  CloudCog,
  DatabaseZap,
  HeartHandshake,
  IndianRupee,
  Landmark,
  MessagesSquare,
  Palette,
  Presentation,
  School2,
  ShieldCheck,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { plans, productLinks, schoolProblems } from "./data/site-content";
import { createPageMetadata, serializeJsonLd, siteOrigin } from "./lib/seo";

const pitchModuleGroups = [
  { title: "Academics", Icon: BookOpenCheck },
  { title: "Communication", Icon: MessagesSquare },
  { title: "Finance", Icon: WalletCards },
  { title: "Campus operations", Icon: Building2 },
  { title: "People", Icon: UsersRound },
  { title: "Administration", Icon: Landmark },
];

const freePlan = plans[0];
const paidPlans = plans.slice(1);

const roleCards = [
  { role: "School leaders", copy: "Approvals, attendance risk, collections, staff workload and the audit trail behind every change.", Icon: School2 },
  { role: "Teachers", copy: "Today's classes, registers, assignments, mark sheets and lesson notes for assigned sections only.", Icon: Presentation },
  { role: "Parents and students", copy: "Timetable, attendance, released results, fees and receipts, library loans and school announcements.", Icon: HeartHandshake },
];

export const metadata = createPageMetadata("/");

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteOrigin}/#website`,
      url: `${siteOrigin}/`,
      name: "Unifloe",
      alternateName: ["unifloe.app"],
      publisher: { "@id": `${siteOrigin}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteOrigin}/#organization`,
      name: "Unifloe",
      url: `${siteOrigin}/`,
      logo: `${siteOrigin}/brand/logoUnifloeNoBG.png`,
      email: "mailto:adithya@unifloe.app",
      telephone: "+919686110206",
      parentOrganization: {
        "@type": "Organization",
        name: "PaperKite",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteOrigin}/#software`,
      name: "Unifloe",
      url: `${siteOrigin}/`,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "A modern school ERP and LMS for Indian schools, connecting attendance, academics, fees, communication and campus operations.",
      isPartOf: { "@id": `${siteOrigin}/#website` },
      provider: { "@id": `${siteOrigin}/#organization` },
      creator: { "@id": `${siteOrigin}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(homepageJsonLd) }} />
      <section className="hero">
        <DotGrid
          className="hero-dot-grid"
          dotSize={3}
          gap={25}
          baseColor="#e1eaf7"
          activeColor="#0057ff"
          activeScale={2.4}
          proximity={165}
        />
        <div className="hero-copy" data-reveal>
          <h1>A modern school <span>ERP and LMS</span> built for Indian schools</h1>
          <p className="hero-lead">Attendance marked on a phone, report cards from marks entered once, one fee ledger, and parents who can see all of it. Unifloe is an ERP and LMS for Indian schools, free for one class.</p>
          <div className="hero-actions">
            <a className="button" href={productLinks.demo}>Try the live demo <ArrowRight aria-hidden="true" /></a>
            <Link className="text-link" href="/get-started">How to get started <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="hero-proof" aria-label="Key platform facts">
            <span><IndianRupee aria-hidden="true" /> Free for one class, paid plans from ₹999 a month</span>
            <span><CloudCog aria-hidden="true" /> A web app that installs on any phone or laptop</span>
            <span><ShieldCheck aria-hidden="true" /> Guardian consent under the DPDP Act</span>
          </div>
        </div>
        <HeroProduct />
      </section>

      <section className="trust-strip" data-reveal-group aria-label="Unifloe platform strengths">
        <div><DatabaseZap aria-hidden="true" /><span><strong>One structure</strong><small>Classes drive every module</small></span></div>
        <div><UsersRound aria-hidden="true" /><span><strong>Ten roles</strong><small>Each sees its own work</small></span></div>
        <div><CloudCog aria-hidden="true" /><span><strong>Any device</strong><small>Browser or installed app</small></span></div>
        <div><Palette aria-hidden="true" /><span><strong>Your identity</strong><small>Logo, colours, preset</small></span></div>
      </section>

      <section className="section-shell problems-section" aria-labelledby="problems-heading">
        <div className="problems-layout">
          <div className="problems-copy" data-reveal>
            <h2 id="problems-heading">What schools tell us.</h2>
            <p>In conversations with Bengaluru schools the same problems come up again and again. Here is what we hear, and what Unifloe does about each one.</p>
            <a className="text-link" href={productLinks.demo}>See it in the demo <ArrowRight aria-hidden="true" /></a>
          </div>
          <ol className="problems-thread" data-reveal-group>
            {schoolProblems.map((item) => (
              <li key={item.heard}>
                <div className="thread-msg thread-school">
                  <span className="thread-avatar" aria-hidden="true"><School2 /></span>
                  <div><small>A school</small><p>{item.heard}</p></div>
                </div>
                <div className="thread-msg thread-unifloe">
                  <span className="thread-avatar" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/brand/logoUnifloeNoBgWhite-96.png" width="20" height="20" alt="" />
                  </span>
                  <div><small>Unifloe</small><p>{item.answer}</p></div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="platform-intro">
        <div className="section-shell">
          <div className="pitch-heading" data-reveal>
            <h2>One place for every<br /><span>school need.</span></h2>
            <p>Records, teaching, money, families and campus in one system, with the approval trail that ties them together.</p>
          </div>

          <div className="pitch-canvas" data-reveal-group>
            <article className="pitch-card pitch-identity">
              <div className="pitch-card-title"><span><Palette aria-hidden="true" /></span><div><h3>Your school. Your identity.</h3><p>Upload the logo once and it appears in the sidebar and on every receipt, report card and hall ticket.</p></div></div>
              <div className="school-brand-preview" aria-label="A configurable school branded portal preview">
                <div className="school-preview-bar">
                  <div className="school-preview-brand"><span>YS</span><div><strong>Your School</strong><small>Family view</small></div></div>
                  <div className="school-preview-themes" aria-label="Three visual presets"><i /><i /><i /></div>
                </div>
                <div className="school-preview-tabs"><span>Overview</span><span>Academics</span><span>Fees</span></div>
                <div className="school-preview-body" aria-hidden="true"><div><i /><i /><i /></div><div><span /><span /><span /><span /></div></div>
              </div>
              <div className="pitch-spec-list" aria-label="School branding options"><span>Your logo</span><span>Four brand colours</span><span>Default, Sculpt or Clay preset</span><span>Board vocabulary</span><span>Only the modules you enable</span></div>
              <p className="pitch-card-foot">Parents, students and staff see your school’s name and mark, not another software company’s.</p>
            </article>

            <article className="pitch-card pitch-value">
              <div className="value-card-top"><div className="pitch-card-title"><span><IndianRupee aria-hidden="true" /></span><div><h3>Free for one class. Forever.</h3></div></div></div>
              <div className="founding-price"><strong><PriceCounter text="₹0" /></strong><span>for one class<br />up to 100 users</span></div>
              <p className="founding-plan-name">{freePlan.accounts}</p>
              <ul className="founding-plan-list">
                {freePlan.includes.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
              </ul>
              <div className="paid-plan-row" aria-label="Paid plans">
                {paidPlans.map((plan) => <div key={plan.name}><strong><PriceCounter text={plan.monthly ?? plan.yearly} /></strong><span>{plan.name}, a month</span></div>)}
              </div>
              <Link className="button button-light" href="/pricing">See every plan <ArrowRight aria-hidden="true" /></Link>
            </article>

            <article className="pitch-card pitch-modules">
              <div className="modules-intro">
                <div className="pitch-card-title"><span><Boxes aria-hidden="true" /></span><div><h3>Enable only what you need.</h3><p>Start with attendance and notices. Switch on fees, library, hostel or front office when the school is ready.</p></div></div>
                <div className="module-count"><strong>6</strong><span>areas<br />switch on what you need</span></div>
                <Link className="text-link" href="/features">Explore the platform <ArrowRight aria-hidden="true" /></Link>
              </div>
              <div className="module-family-list">
                {pitchModuleGroups.map(({ title, Icon }) => <div className="module-family" key={title}><Icon aria-hidden="true" /><strong>{title}</strong></div>)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="roles-section">
        <div className="section-shell roles-inner">
          <div className="roles-copy" data-reveal>
            <h2>Everyone sees what matters to them.</h2>
            <p>Ten school roles, each with its own dashboard. Guardians sign in as a family and pick the child. Consent is recorded once, at the parent’s first sign in.</p>
            <a className="button button-light" href={productLinks.demo}>Open the demo as any role <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="role-stack" data-reveal-group>
            {roleCards.map(({ role, copy, Icon }) => <article className="role-card" key={role}><span className="role-card-icon"><Icon aria-hidden="true" /></span><div><h3>{role}</h3><small>{copy}</small></div></article>)}
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
