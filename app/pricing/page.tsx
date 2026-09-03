import Link from "next/link";
import { ArrowRight, Check, CircleHelp, Plus, Receipt, UsersRound } from "lucide-react";
import { PriceCounter } from "../components/Counter";
import { coreModuleCount, pilotPlans, pilotSchoolLimit, standardPlans } from "../data/site-content";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/pricing/");

const editionCards = [
  { name: "Core edition", copy: `${coreModuleCount} modules enabled for every school, and a cap on active Student and Faculty accounts.` },
  { name: "Optional sets", copy: "Library, Hostel with Front Office, and Inventory. A school turns on a whole set." },
  { name: "Full edition", copy: "Every module, including Chat, Reports, HR and Lesson Plans." },
];

export default function PricingPage() {
  return (
    <main id="main-content">
      <section className="features-hero pricing-hero">
        <div className="features-hero-shape pricing-hero-shape" aria-hidden="true" />
        <div className="features-hero-inner pricing-hero-inner section-shell">
          <div className="features-hero-copy pricing-hero-copy" data-reveal>
            <h1>Start with a pilot.<br /><span>Scale with confidence.</span></h1>
            <p>One year to prove the fit on your own records. A clear annual plan when you are ready.</p>
          </div>
          <div className="pricing-path-card" data-reveal aria-label="A path from the Unifloe pilot to annual school plans">
            <div className="pricing-path-head"><strong>Pilot to rollout</strong></div>
            <div className="pricing-path">
              <article>
                <span>1</span>
                <div><small>Pilot</small><strong><PriceCounter text="₹0" /> <i>or</i> <PriceCounter text="₹8,000" /></strong><p>one year</p></div>
              </article>
              <article>
                <span>2</span>
                <div><small>Starter</small><strong><PriceCounter text="₹30,000" /></strong><p>700 students</p></div>
              </article>
              <article>
                <span>3</span>
                <div><small>Growth</small><strong><PriceCounter text="₹80,000" /></strong><p>2,500 students</p></div>
              </article>
            </div>
            <Link className="pricing-path-foot" href="/contact"><span>Enterprise</span><strong>Built around your school</strong><ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section-shell pricing-section" id="pilot">
        <div className="pricing-section-heading" data-reveal><h2>One year to experience the difference.</h2><p>Pilot and standard pricing stay clearly separate. The founding offer covers the pilot cohort of {pilotSchoolLimit} schools.</p></div>
        <div className="pilot-grid pricing-pilot-grid" data-reveal-group>
          {pilotPlans.map((plan) => <article className={`pilot-card ${plan.featured ? "featured" : ""}`} key={plan.name}><p className="plan-name">{plan.name}</p><div className="plan-price"><strong><PriceCounter text={plan.price} /></strong><span>{plan.cadence}</span></div><p>{plan.audience}</p><div className="capacity-line"><UsersRound aria-hidden="true" />{plan.capacity}</div><ul>{plan.highlights.map((item) => <li key={item}><Check aria-hidden="true" />{item.includes("₹") ? <PriceCounter text={item} /> : item}</li>)}</ul><Link className={plan.featured ? "button" : "button button-secondary"} href={plan.href}>{plan.cta}<ArrowRight aria-hidden="true" /></Link></article>)}
        </div>
        <p className="pricing-note"><CircleHelp aria-hidden="true" /> Pilot modules, edition and rollout scope are agreed with each participating school before onboarding.</p>
      </section>

      <section className="section-shell editions-section pricing-editions" aria-labelledby="pricing-editions-heading">
        <div className="section-heading" data-reveal>
          <h2 id="pricing-editions-heading">What a plan actually turns on.</h2>
          <p>Core and Full share the same services and the same data. The difference is which modules are enabled and how many accounts may be active.</p>
        </div>
        <div className="editions-grid" data-reveal-group>
          {editionCards.map((edition) => <article key={edition.name}><h3>{edition.name}</h3><p>{edition.copy}</p></article>)}
        </div>
      </section>

      <section className="standard-pricing-wrap" id="standard-plans">
        <div className="section-shell pricing-section">
          <div className="pricing-section-heading" data-reveal><h2>Pricing for the next chapter.</h2><p>Annual plans for established everyday use.</p></div>
          <div className="standard-plan-grid" data-reveal-group>
            {standardPlans.map((plan) => <article className={`standard-plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}><p className="plan-name">{plan.name}</p><div className="plan-price"><strong><PriceCounter text={plan.price} /></strong><span>{plan.cadence}</span></div><p>{plan.audience}</p><div className="capacity-line"><UsersRound aria-hidden="true" />{plan.capacity}</div><ul>{plan.highlights.map((item) => <li key={item}><Check aria-hidden="true" />{item.includes("₹") ? <PriceCounter text={item} /> : item}</li>)}</ul><Link className={plan.featured ? "button" : "button button-secondary"} href={plan.href}>{plan.cta}<ArrowRight aria-hidden="true" /></Link></article>)}
          </div>
          <div className="addon-card" data-reveal><div className="addon-icon"><Plus aria-hidden="true" /></div><div><h3>Add 100 students for <PriceCounter text="₹300/month" /></h3><p>Starter and Growth can each add up to 1,000 students. Seat packs raise how many accounts may be active; they never create users on their own.</p></div><div className="addon-numbers"><div><strong>+1,000</strong><span>maximum students</span></div><div><strong><PriceCounter text="₹3,600" /></strong><span>per 100 a year</span></div></div></div>
          <div className="addon-card invoice-card" data-reveal><div className="addon-icon"><Receipt aria-hidden="true" /></div><div><h3>How you pay</h3><p>PaperKite invoices the school directly and records the payment. There is no online checkout, no card details are stored, and every invoice is available as a PDF from the Billing screen.</p></div></div>
        </div>
      </section>

      <section className="section-shell pricing-clarity"><p>Prices are shown exactly as provided. Final plan scope, enabled modules and rollout are confirmed with each school before purchase.</p><Link className="text-link" href="/contact">Talk through the right plan <ArrowRight aria-hidden="true" /></Link></section>
    </main>
  );
}
