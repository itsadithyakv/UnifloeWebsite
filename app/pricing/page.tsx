import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CircleHelp, Layers3, Plus, Sparkles, UsersRound } from "lucide-react";
import { PriceCounter } from "../components/Counter";
import { pilotPlans, standardPlans } from "../data/site-content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Explore Unifloe’s one-year pilot offers and annual Starter, Growth, and Enterprise plans for Indian schools.",
};

export default function PricingPage() {
  return (
    <main id="main-content">
      <section className="features-hero pricing-hero">
        <div className="features-hero-shape pricing-hero-shape" aria-hidden="true" />
        <div className="features-hero-inner pricing-hero-inner section-shell">
          <div className="features-hero-copy pricing-hero-copy" data-reveal>
            <h1>Start with a pilot.<br /><span>Scale with confidence.</span></h1>
            <p>One year to prove the fit. A clear path when you are ready.</p>
          </div>
          <div className="pricing-path-card" data-reveal aria-label="A path from the Unifloe pilot to annual school plans">
            <div className="pricing-path-head"><span>Your path with Unifloe</span><strong>Pilot to rollout</strong></div>
            <div className="pricing-path">
              <article>
                <span>01</span>
                <div><small>Pilot</small><strong><PriceCounter text="₹0" /> <i>or</i> <PriceCounter text="₹8,000" /></strong></div>
              </article>
              <i className="pricing-path-line" aria-hidden="true" />
              <article>
                <span>02</span>
                <div><small>Starter</small><strong><PriceCounter text="₹30,000" /></strong><p>700 students</p></div>
              </article>
              <i className="pricing-path-line" aria-hidden="true" />
              <article>
                <span>03</span>
                <div><small>Growth</small><strong><PriceCounter text="₹80,000" /></strong><p>2,500 students</p></div>
              </article>
            </div>
            <Link className="pricing-path-foot" href="/contact"><span>Enterprise</span><strong>Built around your school</strong><ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section-shell pricing-section" id="pilot">
        <div className="pricing-section-heading" data-reveal><div className="heading-lockup"><div className="heading-icon"><Sparkles aria-hidden="true" /></div><h2>One year to experience the difference.</h2></div><p>Pilot and standard pricing stay clearly separate.</p></div>
        <div className="pilot-grid pricing-pilot-grid" data-reveal-group>
          {pilotPlans.map((plan) => <article className={`pilot-card ${plan.featured ? "featured" : ""}`} key={plan.name}><p className="plan-name">{plan.name}</p><div className="plan-price"><strong><PriceCounter text={plan.price} /></strong><span>{plan.cadence}</span></div><p>{plan.audience}</p><div className="capacity-line"><UsersRound aria-hidden="true" />{plan.capacity}</div><ul>{plan.highlights.map((item) => <li key={item}><Check aria-hidden="true" />{item.includes("₹") ? <PriceCounter text={item} /> : item}</li>)}</ul><Link className={plan.featured ? "button" : "button button-secondary"} href={plan.href}>{plan.cta}<ArrowRight aria-hidden="true" /></Link></article>)}
        </div>
        <p className="pricing-note"><CircleHelp aria-hidden="true" /> Pilot modules and rollout scope are agreed with each participating school before onboarding.</p>
      </section>

      <section className="standard-pricing-wrap" id="standard-plans">
        <div className="section-shell pricing-section">
          <div className="pricing-section-heading" data-reveal><div className="heading-lockup"><div className="heading-icon"><Layers3 aria-hidden="true" /></div><h2>Pricing for the next chapter.</h2></div><p>Annual plans for established everyday use.</p></div>
          <div className="standard-plan-grid" data-reveal-group>
            {standardPlans.map((plan) => <article className={`standard-plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}><p className="plan-name">{plan.name}</p><div className="plan-price"><strong><PriceCounter text={plan.price} /></strong><span>{plan.cadence}</span></div><p>{plan.audience}</p><div className="capacity-line"><UsersRound aria-hidden="true" />{plan.capacity}</div><ul>{plan.highlights.map((item) => <li key={item}><Check aria-hidden="true" />{item.includes("₹") ? <PriceCounter text={item} /> : item}</li>)}</ul><Link className={plan.featured ? "button" : "button button-secondary"} href={plan.href}>{plan.cta}<ArrowRight aria-hidden="true" /></Link></article>)}
          </div>
          <div className="addon-card" data-reveal><div className="addon-icon"><Plus aria-hidden="true" /></div><div><h3>Add 100 students for <PriceCounter text="₹300/month" /></h3><p>Starter and Growth can each add up to 1,000 students.</p></div><div className="addon-numbers"><div><strong>+1,000</strong><span>maximum students</span></div><div><strong><PriceCounter text="₹3,600" /></strong><span>per 100 / year</span></div></div></div>
        </div>
      </section>

      <section className="section-shell pricing-clarity"><p>Prices are shown exactly as provided. Final plan scope, participating modules, and rollout are confirmed with each school before purchase.</p><Link className="text-link" href="/contact">Talk through the right plan <ArrowRight aria-hidden="true" /></Link></section>
    </main>
  );
}
