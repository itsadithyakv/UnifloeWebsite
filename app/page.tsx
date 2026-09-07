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
  KeyRound,
  Landmark,
  MessagesSquare,
  Palette,
  Presentation,
  School2,
  ShieldCheck,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { plans, productLinks, schoolProblems, totalModuleCount } from "./data/site-content";
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
          <p className="hero-lead">Unifloe is a modern school ERP and LMS built for Indian schools. Attendance, marks, fees, guardians, library, hostel and front office run in one place at go.unifloe.app.</p>
          <div className="hero-actions">
            <a className="button" href={productLinks.demo}>Try the live demo <ArrowRight aria-hidden="true" /></a>
            <Link className="text-link" href="/get-started">How to get started <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="hero-proof" aria-label="Key platform facts">
            <span><IndianRupee aria-hidden="true" /> Free forever for one class</span>
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
        <div className="section-heading" data-reveal>
          <h2 id="problems-heading">What schools tell us.</h2>
          <p>In conversations with Bengaluru schools the same problems come up again and again. This is what Unifloe does about each one.</p>
        </div>
        <div className="problems-grid" data-reveal-group>
          {schoolProblems.map((item) => (
            <article key={item.heard}>
              <blockquote>{item.heard}</blockquote>
              <p><Check aria-hidden="true" />{item.answer}</p>
            </article>
          ))}
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
                {paidPlans.map((plan) => <li key={plan.name}><Check aria-hidden="true" />{plan.name} from <PriceCounter text={plan.monthly ?? plan.yearly} /> a month</li>)}
              </ul>
              <Link className="button button-light" href="/pricing">See every plan <ArrowRight aria-hidden="true" /></Link>
            </article>

            <article className="pitch-card pitch-modules">
              <div className="modules-intro">
                <div className="pitch-card-title"><span><Boxes aria-hidden="true" /></span><div><h3>Enable only what you need.</h3><p>Start with attendance and notices. Switch on fees, library, hostel or front office when the school is ready.</p></div></div>
                <div className="module-count"><strong>{totalModuleCount}</strong><span>modules<br />in six groups</span></div>
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

      <section className="section-shell pilot-preview" id="plans">
        <div className="section-heading centered-heading" data-reveal><h2>Start with one class.<br />Pay when the whole school comes on.</h2><p>Plans are priced by students on roll, monthly or yearly. Every paid plan has unlimited accounts.</p></div>
        <div className="plan-grid" data-reveal-group>
          {plans.map((plan) => <article className={`pilot-card ${plan.featured ? "featured" : ""}`} key={plan.name}><p className="plan-name">{plan.name}</p><div className="plan-price"><strong><PriceCounter text={plan.monthly ?? plan.yearly} /></strong><span>{plan.priceNote}</span></div><p>{plan.audience}</p><div className="capacity-line"><UsersRound aria-hidden="true" />{plan.capacity}</div><div className="capacity-line plan-accounts"><KeyRound aria-hidden="true" />{plan.accounts}</div><ul>{plan.includes.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul><Link className={plan.featured ? "button" : "button button-secondary"} href={plan.href}>{plan.cta}<ArrowRight aria-hidden="true" /></Link></article>)}
        </div>
        <p className="pilot-footnote">Enabled modules and rollout are confirmed with each school before onboarding.</p>
      </section>

      <FinalCta />
    </main>
  );
}
