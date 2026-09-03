import Link from "next/link";
import { PriceCounter } from "./components/Counter";
import { DotGrid } from "./components/DotGrid";
import { HeroProduct } from "./components/HeroProduct";
import {
  ArrowRight,
  BadgeCheck,
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
import { coreModuleCount, plans, productLinks, totalModuleCount } from "./data/site-content";
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

const startSteps = [
  { title: "Try the live demo", copy: "Open go.unifloe.app as any role. Nothing you change is saved." },
  { title: "Agree the pilot", copy: "Board format, edition, optional sets and the consent basis for your parents." },
  { title: "Register the school", copy: "Use your invite at go.unifloe.app. The Head Admin account and the school's own database are created together." },
  { title: "Import and activate", copy: "Fill the student workbook, then activate parents with one link each. Parents consent when they first sign in." },
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
            <span><CloudCog aria-hidden="true" /> A web app that installs on any phone or laptop</span>
            <span><ShieldCheck aria-hidden="true" /> Guardian consent under the DPDP Act</span>
            <span><BookOpenCheck aria-hidden="true" /> CBSE, ICSE, state board and Karnataka PU</span>
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

            <article className="pitch-card pitch-compliance">
                <div className="pitch-card-title"><span><ShieldCheck aria-hidden="true" /></span><div><h3>Built for the DPDP Act.</h3></div></div>
                <div className="student-record-preview">
                  <div className="student-record-head">
                    <div className="record-avatar-stack" aria-hidden="true">
                      {/* Pre-sized local assets avoid an image-optimization runtime for these tiny, lazy avatars. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/unifloe_avatar_01_lavender-192.jpg" width="48" height="48" alt="" loading="lazy" decoding="async" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/unifloe_avatar_02_mint-192.jpg" width="48" height="48" alt="" loading="lazy" decoding="async" />
                    </div>
                    <div><strong>Student and guardian</strong><small>Linked, with consent on record</small></div>
                    <BadgeCheck aria-hidden="true" />
                  </div>
                <div className="student-record-row"><span>Guardian consent</span><strong>Recorded by the parent</strong></div>
                <div className="student-record-row"><span>Withdrawal</span><strong>As easy as giving</strong></div>
                <div className="student-record-row"><span>High impact changes</span><strong>Approved and audited</strong></div>
              </div>
              <div className="pitch-spec-list pitch-spec-light"><span>Parent consent</span><span>Purpose on every record</span><span>No advertising</span><span>No tracking</span><span>Encrypted secrets</span><span>Private files</span></div>
            </article>

            <article className="pitch-card pitch-modules">
              <div className="modules-intro">
                <div className="pitch-card-title"><span><Boxes aria-hidden="true" /></span><div><h3>Enable only what you need.</h3><p>A Core school runs {coreModuleCount} modules. Library, Hostel and Inventory are sets you turn on as a whole.</p></div></div>
                <div className="module-count"><strong>{totalModuleCount}</strong><span>registered<br />modules</span></div>
                <Link className="text-link" href="/features">Explore the platform <ArrowRight aria-hidden="true" /></Link>
              </div>
              <div className="module-family-list">
                {pitchModuleGroups.map(({ title, Icon }) => <div className="module-family" key={title}><Icon aria-hidden="true" /><strong>{title}</strong></div>)}
              </div>
            </article>

            <article className="pitch-card pitch-value">
              <div className="value-card-top"><div className="pitch-card-title"><span><IndianRupee aria-hidden="true" /></span><div><h3>Free for one class. Forever.</h3></div></div></div>
              <div className="founding-price"><strong><PriceCounter text="₹0" /></strong><span>for one section<br />up to 60 students</span></div>
              <p className="founding-plan-name">{freePlan.accounts}</p>
              <ul className="founding-plan-list">
                {freePlan.includes.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
                {paidPlans.map((plan) => <li key={plan.name}><Check aria-hidden="true" />{plan.name} from <PriceCounter text={plan.monthly ?? plan.yearly} /> a month</li>)}
              </ul>
              <Link className="button button-light" href="/pricing">See every plan <ArrowRight aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="roles-section">
        <div className="section-shell roles-inner">
          <div className="roles-copy" data-reveal>
            <h2>Everyone sees what matters to them.</h2>
            <p>Ten school roles, each with its own dashboard and navigation. Guardians sign in as a family and pick the child. Nobody gets a full access role, because none exists.</p>
            <a className="button button-light" href={productLinks.demo}>Open the demo as any role <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="role-stack" data-reveal-group>
            {roleCards.map(({ role, copy, Icon }) => <article className="role-card" key={role}><span className="role-card-icon"><Icon aria-hidden="true" /></span><div><h3>{role}</h3><small>{copy}</small></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-shell start-section" id="start">
        <div className="start-panel" data-reveal>
          <div className="start-copy">
            <h2>From the demo to your first parent signing in.</h2>
            <p>Getting a school onto Unifloe is a short, defined sequence. Each step has a page or a template behind it, and PaperKite does the first one with you.</p>
            <div className="start-actions">
              <Link className="button" href="/get-started">See every step <ArrowRight aria-hidden="true" /></Link>
              <a className="text-link" href={productLinks.signIn}>Already on Unifloe? Sign in <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
          <ol className="start-steps" data-reveal-group>
            {startSteps.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                <div><strong>{step.title}</strong><p>{step.copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell pilot-preview" id="plans">
        <div className="section-heading centered-heading" data-reveal><h2>Start with one class.<br />Pay when the whole school comes on.</h2><p>Plans are priced by students on roll, monthly or yearly. Every paid plan has unlimited accounts.</p></div>
        <div className="plan-grid" data-reveal-group>
          {plans.map((plan) => <article className={`pilot-card ${plan.featured ? "featured" : ""}`} key={plan.name}><p className="plan-name">{plan.name}</p><div className="plan-price"><strong><PriceCounter text={plan.monthly ?? plan.yearly} /></strong><span>{plan.priceNote}</span></div><p>{plan.audience}</p><div className="capacity-line"><UsersRound aria-hidden="true" />{plan.capacity}</div><div className="capacity-line plan-accounts"><KeyRound aria-hidden="true" />{plan.accounts}</div><ul>{plan.includes.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul><Link className={plan.featured ? "button" : "button button-secondary"} href={plan.href}>{plan.cta}<ArrowRight aria-hidden="true" /></Link></article>)}
        </div>
        <p className="pilot-footnote">Enabled modules and rollout are confirmed with each school before onboarding.</p>
      </section>

      <section className="section-shell final-cta" data-reveal>
        <div className="final-cta-copy"><h2>See it running before you decide.</h2><p>The demo is the real product on a synthetic school. Open it as a principal, a teacher or a parent.</p></div>
        <div className="final-cta-actions">
          <a className="button button-light" href={productLinks.demo}>Try the live demo <ArrowRight aria-hidden="true" /></a>
          <Link className="final-cta-link" href="/contact">Talk to PaperKite <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="final-cta-clay" aria-hidden="true"><span /><span /><span /></div>
      </section>
    </main>
  );
}
