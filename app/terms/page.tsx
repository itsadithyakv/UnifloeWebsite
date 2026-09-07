import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/terms/");

export default function TermsPage() {
  return (
    <main id="main-content">
      <PageHero
        title={<>Terms of use <span>for this website.</span></>}
        lead="Short, in plain words. These terms cover unifloe.app and the public demo. A school that signs up agrees a separate service agreement with PaperKite."
        actions={false}
      />
      <div className="section-shell legal-page">
        <p className="legal-updated">Last updated 4 September 2026. Operated by PaperKite, Bengaluru.</p>
        <section>
          <h2>The website</h2>
          <p>The pages on unifloe.app describe Unifloe as it exists today. Prices, plans and features are shown as provided by PaperKite and are confirmed with each school before anything is signed. Where a feature is marked coming soon, it is not available yet.</p>
        </section>
        <section>
          <h2>The public demo</h2>
          <ul>
            <li>The demo at go.unifloe.app runs on a synthetic school. No real student, parent or staff data is in it.</li>
            <li>Changes you make stay in your own browser for 24 hours and are never written anywhere else.</li>
            <li>Please do not enter real personal data into the demo.</li>
          </ul>
        </section>
        <section>
          <h2>Using the service</h2>
          <p>A school starts using Unifloe by agreeing a plan with PaperKite. The service agreement, the data processing agreement and the privacy notice for parents are settled then, and they govern the product. Nothing on this website replaces them.</p>
        </section>
        <section>
          <h2>Content and marks</h2>
          <p>Unifloe, the Unifloe mark and the content of this website belong to PaperKite. You may quote the website to describe Unifloe to your school. Board names such as CBSE and government programmes such as APAAR and UDISE+ belong to their owners, and Unifloe is not affiliated with them.</p>
        </section>
        <section>
          <h2>Questions and complaints</h2>
          <p>Write to adithya@unifloe.app or call +91 9686110206. Privacy for this website is covered on the <Link href="/privacy-policy">privacy policy</Link> page.</p>
        </section>
      </div>
    </main>
  );
}
