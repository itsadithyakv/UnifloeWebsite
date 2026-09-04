import Link from "next/link";
import { ArrowRight, Check, CircleHelp, KeyRound, Receipt, UsersRound } from "lucide-react";
import { PriceCounter } from "../components/Counter";
import { FinalCta } from "../components/FinalCta";
import { PageHero } from "../components/PageHero";
import { plans } from "../data/site-content";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/pricing/");

const pathSteps = plans.map((plan, index) => ({ step: index + 1, name: plan.name, price: plan.monthly ?? plan.yearly, note: plan.monthly ? "a month" : "forever", capacity: plan.capacity }));

export default function PricingPage() {
  return (
    <main id="main-content">
      <PageHero
        title={<>Free for one class.<br /><span>Clear plans for the whole school.</span></>}
        lead="Start with one section at no cost, for as long as you like. When the whole school comes on, pick the plan by students on roll and pay monthly or yearly."
        aside={
          <div className="pricing-path-card" data-reveal aria-label="The four Unifloe plans from Free to Growth">
            <div className="pricing-path-head"><strong>Free to Growth</strong></div>
            <div className="pricing-path">
              {pathSteps.map((step) => (
                <article key={step.name}>
                  <span>{step.step}</span>
                  <div><small>{step.name}</small><strong><PriceCounter text={step.price} /> <i>{step.note}</i></strong><p>{step.capacity}</p></div>
                </article>
              ))}
            </div>
            <Link className="pricing-path-foot" href="/contact"><span>Two campuses or more</span><strong>Talk to PaperKite about scope</strong><ArrowRight aria-hidden="true" /></Link>
          </div>
        }
      />

      <section className="section-shell pricing-section" id="plans">
        <div className="pricing-section-heading" data-reveal><h2>Four plans. One product.</h2><p>Every plan runs the same product at go.unifloe.app. The difference is students on roll and what is switched on.</p></div>
        <div className="plan-grid" data-reveal-group>
          {plans.map((plan) => (
            <article className={`pilot-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
              <p className="plan-name">{plan.name}</p>
              <div className="plan-price"><strong><PriceCounter text={plan.monthly ?? plan.yearly} /></strong><span>{plan.priceNote}</span></div>
              <p>{plan.audience}</p>
              <div className="capacity-line"><UsersRound aria-hidden="true" />{plan.capacity}</div>
              <div className="capacity-line plan-accounts"><KeyRound aria-hidden="true" />{plan.accounts}</div>
              <ul>{plan.includes.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
              <Link className={plan.featured ? "button" : "button button-secondary"} href={plan.href}>{plan.cta}<ArrowRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        <p className="pricing-note"><CircleHelp aria-hidden="true" /> Yearly billing works out to two months free on every paid plan.</p>
      </section>

      <section className="standard-pricing-wrap" id="compare">
        <div className="section-shell pricing-section">
          <div className="pricing-section-heading" data-reveal><h2>Compare the plans.</h2><p>Who each plan is for, how many accounts and students it covers, and what it includes.</p></div>
          <div className="plan-table-wrap" data-reveal>
            <table className="plan-table">
              <thead>
                <tr><th scope="col">Plan</th><th scope="col">For whom</th><th scope="col">Accounts</th><th scope="col">Students on roll</th><th scope="col">Price</th><th scope="col">Includes</th></tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.name}>
                    <th scope="row">{plan.name}</th>
                    <td>{plan.audience}</td>
                    <td>{plan.accounts}</td>
                    <td>{plan.capacity}</td>
                    <td><strong>{plan.monthly ? <><PriceCounter text={plan.monthly} /> a month or <PriceCounter text={plan.yearly} /> a year</> : <><PriceCounter text={plan.yearly} />, forever</>}</strong></td>
                    <td>{plan.includes.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="addon-card invoice-card" data-reveal><div className="addon-icon"><Receipt aria-hidden="true" /></div><div><h3>How you pay</h3><p>PaperKite invoices the school directly, monthly or yearly, and records the payment. There is no online checkout, no card details are stored, and every invoice is available as a PDF from the Billing screen.</p></div></div>
        </div>
      </section>

      <section className="section-shell pricing-clarity"><p>Prices are shown exactly as provided. Enabled modules and rollout are confirmed with each school before onboarding.</p></section>
      <FinalCta />
    </main>
  );
}
