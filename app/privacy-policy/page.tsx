import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/privacy-policy/");

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      <PageHero
        title={<>Privacy policy <span>for this website.</span></>}
        lead="This page covers unifloe.app, the public website. How school data is handled inside the product is described on its own page."
        actions={false}
      />
      <div className="section-shell legal-page">
        <p className="legal-updated">Last updated 4 September 2026. Operated by PaperKite, Bengaluru.</p>
        <section>
          <h2>What we collect</h2>
          <ul>
            <li>When you send an enquiry: school name, your name, phone number, the plan you chose, and anything you type in the message box. Email is optional.</li>
            <li>When you visit: anonymous page view counts through Cloudflare Web Analytics. No cookies are set, no personal identifier is stored, and no data is sold or shared for advertising.</li>
            <li>Nothing else. The website has no user accounts and never asks for student or child data.</li>
          </ul>
        </section>
        <section>
          <h2>Why we collect it</h2>
          <ul>
            <li>To call or write back about your enquiry and set up your school if you ask us to.</li>
            <li>To see which pages are read, so the website can be improved.</li>
          </ul>
        </section>
        <section>
          <h2>Who handles it</h2>
          <ul>
            <li>Enquiries are delivered to the Unifloe inbox through EmailJS and stored in that mailbox.</li>
            <li>Page view counts are processed by Cloudflare.</li>
            <li>The website itself is served by PaperKite from its own server.</li>
          </ul>
        </section>
        <section>
          <h2>How long we keep it</h2>
          <p>Enquiries are kept for as long as the conversation with your school is open, and deleted on request at any time.</p>
        </section>
        <section>
          <h2>Your rights</h2>
          <p>You can ask to see, correct or delete anything you sent us by writing to adithya@unifloe.app. We answer within a working week.</p>
        </section>
        <section>
          <h2>The product is different</h2>
          <p>Inside Unifloe the school is the Data Fiduciary and PaperKite is the Data Processor under the Digital Personal Data Protection Act. That relationship, guardian consent, safeguards and retention are described on the <Link href="/data-privacy">school data page</Link>.</p>
        </section>
      </div>
    </main>
  );
}
