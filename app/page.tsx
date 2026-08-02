import type { Metadata } from "next";
import Link from "next/link";
import { PriceCounter } from "./components/Counter";
import { DotGrid } from "./components/DotGrid";
import { HeroProduct } from "./components/HeroProduct";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Boxes,
  BusFront,
  Check,
  CloudCog,
  DatabaseZap,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  IndianRupee,
  MessagesSquare,
  Palette,
  Presentation,
  School2,
  ShieldCheck,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { pilotPlans } from "./data/site-content";

const pitchModuleGroups = [
  { title: "Academics & LMS", Icon: BookOpenCheck },
  { title: "Students & families", Icon: UsersRound },
  { title: "Administration & finance", Icon: WalletCards },
  { title: "Communication", Icon: MessagesSquare },
  { title: "Campus operations", Icon: BusFront },
  { title: "Compliance & reporting", Icon: FileCheck2 },
];

const foundingPlanHighlights = [
  "Up to 700 family and staff units",
  "School branding included",
  "Five starter themes",
  "Configurable modules and terminology",
  "Free onboarding and initial setup",
  "Direct founder support",
  "Continuous platform updates",
];

const roleCards = [
  { role: "School leaders", title: "Whole-school clarity", copy: "Academic, financial, operational, and compliance insight.", Icon: School2 },
  { role: "Teachers", title: "More time to teach", copy: "Planning, attendance, assessment, and communication.", Icon: Presentation },
  { role: "Parents & students", title: "A calmer experience", copy: "Learning, progress, payments, and official updates.", Icon: HeartHandshake },
];

export const metadata: Metadata = {
  title: "One platform to run your entire school",
  description:
    "Connect academics, administration, communication, finance, compliance, and digital learning with Unifloe.",
};

export default function Home() {
  return (
    <main id="main-content">
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
          <h1>One platform to run your <span>entire school.</span></h1>
          <p className="hero-lead">One connected ERP + LMS for academics, administration, communication, and compliance.</p>
          <div className="hero-actions">
            <Link className="button" href="/contact">Book a free demo <ArrowRight aria-hidden="true" /></Link>
            <Link className="text-link" href="/features">Explore the platform <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="hero-proof" aria-label="Key platform commitments">
            <span><ShieldCheck aria-hidden="true" /> DPDP-aligned design</span>
            <span><DatabaseZap aria-hidden="true" /> Data hosted in India</span>
            <span><GraduationCap aria-hidden="true" /> APAAR-ready records</span>
          </div>
        </div>
        <HeroProduct />
      </section>

      <section className="trust-strip" data-reveal-group aria-label="Unifloe platform strengths">
        <div><DatabaseZap aria-hidden="true" /><span><strong>One source</strong><small>Connected data</small></span></div>
        <div><UsersRound aria-hidden="true" /><span><strong>Every role</strong><small>Focused views</small></span></div>
        <div><CloudCog aria-hidden="true" /><span><strong>Any device</strong><small>Work anywhere</small></span></div>
        <div><ShieldCheck aria-hidden="true" /><span><strong>Your identity</strong><small>White-labelled</small></span></div>
      </section>

      <section className="platform-intro">
        <div className="section-shell">
          <div className="pitch-heading" data-reveal>
            <h2>One place for every<br /><span>school need.</span></h2>
            <p>Your identity, records, learning, operations and growth—connected without stitching together separate tools.</p>
          </div>

          <div className="pitch-canvas" data-reveal-group>
            <article className="pitch-card pitch-identity">
              <div className="pitch-card-title"><span><Palette aria-hidden="true" /></span><div><h3>Your school. Your identity.</h3><p>Adapt Unifloe until it feels like your school’s own platform.</p></div></div>
              <div className="school-brand-preview" aria-label="A configurable school-branded portal preview">
                <div className="school-preview-bar">
                  <div className="school-preview-brand"><span>YS</span><div><strong>Your School</strong><small>Family portal</small></div></div>
                  <div className="school-preview-themes" aria-label="Five visual theme colours"><i /><i /><i /><i /><i /></div>
                </div>
                <div className="school-preview-tabs"><span>Overview</span><span>Academics</span><span>Payments</span></div>
                <div className="school-preview-body" aria-hidden="true"><div><i /><i /><i /></div><div><span /><span /><span /><span /></div></div>
              </div>
              <div className="pitch-spec-list" aria-label="School branding options"><span>Custom logo</span><span>School colours</span><span>Custom terminology</span><span>Five visual themes</span><span>Selected modules</span></div>
              <p className="pitch-card-foot">Parents, students and staff experience your school’s brand—not another generic software company.</p>
            </article>

            <article className="pitch-card pitch-compliance">
              <div className="pitch-card-title"><span><ShieldCheck aria-hidden="true" /></span><div><h3>Compliance-ready by design.</h3></div></div>
                <div className="student-record-preview">
                  <div className="student-record-head">
                    <div className="record-avatar-stack" aria-hidden="true">
                      {/* Pre-sized local assets avoid an image-optimization runtime for these tiny, lazy avatars. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/unifloe_avatar_01_lavender-192.jpg" width="48" height="48" alt="" loading="lazy" decoding="async" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/unifloe_avatar_02_mint-192.jpg" width="48" height="48" alt="" loading="lazy" decoding="async" />
                    </div>
                    <div><strong>Structured profiles</strong><small>Student and guardian records</small></div>
                    <BadgeCheck aria-hidden="true" />
                  </div>
                <div className="student-record-row"><span>Academic records</span><strong>Organised</strong></div>
                <div className="student-record-row"><span>Consent & permissions</span><strong>Traceable</strong></div>
                <div className="student-record-row"><span>Approvals & history</span><strong>Recorded</strong></div>
              </div>
              <div className="pitch-spec-list pitch-spec-light"><span>APAAR-ready records</span><span>UDISE+</span><span>Holistic Progress Cards</span><span>Consent records</span><span>Approvals</span><span>Audit trails</span></div>
            </article>

            <article className="pitch-card pitch-modules">
              <div className="modules-intro">
                <div className="pitch-card-title"><span><Boxes aria-hidden="true" /></span><div><h3>Enable only what you need.</h3></div></div>
                <div className="module-count"><strong>65</strong><span>available<br />modules</span></div>
                <Link className="text-link" href="/features">Explore the platform <ArrowRight aria-hidden="true" /></Link>
              </div>
              <div className="module-family-list">
                {pitchModuleGroups.map(({ title, Icon }) => <div className="module-family" key={title}><Icon aria-hidden="true" /><strong>{title}</strong></div>)}
              </div>
            </article>

            <article className="pitch-card pitch-value">
              <div className="value-card-top"><div className="pitch-card-title"><span><IndianRupee aria-hidden="true" /></span><div><h3>Powerful without being expensive.</h3></div></div><div className="start-free-badge">Start at <PriceCounter text="₹0" /></div></div>
              <div className="founding-price"><strong><PriceCounter text="₹8,000" /></strong><span>per year</span></div>
              <p className="founding-plan-name">Founding School Starter Plan</p>
              <ul className="founding-plan-list">
                {foundingPlanHighlights.map((highlight) => <li key={highlight}><Check aria-hidden="true" />{highlight}</li>)}
              </ul>
              <Link className="button button-light" href="/pricing#pilot">See the founding offer <ArrowRight aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="roles-section">
        <div className="section-shell roles-inner">
          <div className="roles-copy" data-reveal>
            <h2>Everyone sees what matters to them.</h2>
            <p>Clear, role-focused views. Less training and less searching.</p>
            <Link className="button button-light" href="/contact">See Unifloe for your school <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="role-stack" data-reveal-group>
            {roleCards.map(({ role, title, copy, Icon }) => <article className="role-card" key={role}><span className="role-card-icon"><Icon aria-hidden="true" /></span><div><p>{role}</p><h3>{title}</h3><small>{copy}</small></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-shell compliance-section">
        <div className="compliance-panel" data-reveal>
          <div className="compliance-copy">
            <h2>Built around responsible school data.</h2>
            <p>Clear access, organised consent, structured records, and India-based data residency.</p>
            <div className="compliance-points"><span>DPDP-aligned</span><span>APAAR-ready</span><span>UDISE+ support</span><span>Role-based access</span></div>
          </div>
          <div className="compliance-orb" aria-hidden="true"><ShieldCheck /><span className="orb-ring orb-ring-one" /><span className="orb-ring orb-ring-two" /></div>
        </div>
      </section>

      <section className="section-shell pilot-preview" id="pilot">
        <div className="section-heading centered-heading" data-reveal><h2>Start small. Prove the value.<br />Build from there.</h2><p>A full year to experience Unifloe.</p></div>
        <div className="pilot-grid" data-reveal-group>
          {pilotPlans.map((plan) => <article className={`pilot-card ${plan.featured ? "featured" : ""}`} key={plan.name}><p className="plan-name">{plan.name}</p><div className="plan-price"><strong><PriceCounter text={plan.price} /></strong><span>{plan.cadence}</span></div><p>{plan.audience}</p><div className="capacity-line"><UsersRound aria-hidden="true" />{plan.capacity}</div><ul>{plan.highlights.map((item) => <li key={item}><Check aria-hidden="true" />{item.includes("₹") ? <PriceCounter text={item} /> : item}</li>)}</ul><Link className={plan.featured ? "button" : "button button-secondary"} href={plan.href}>{plan.cta}<ArrowRight aria-hidden="true" /></Link></article>)}
        </div>
        <p className="pilot-footnote">Pilot scope and participating modules are agreed with each school before onboarding.</p>
      </section>

      <section className="section-shell final-cta" data-reveal>
        <div className="final-cta-copy"><h2>Unifloe brings all of it together.</h2><p>Let’s map the platform to your school.</p></div>
        <Link className="button button-light" href="/contact">Book a free demo <ArrowRight aria-hidden="true" /></Link>
        <div className="final-cta-clay" aria-hidden="true"><span /><span /><span /></div>
      </section>
    </main>
  );
}
