import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircleMore, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a tailored Unifloe demo or apply for the one-year school pilot programme.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string | string[] }> }) {
  const params = await searchParams;
  const initialInterest = typeof params.interest === "string" ? params.interest : "general-demo";

  return (
    <main id="main-content">
      <section className="contact-hero section-shell">
        <div className="contact-intro" data-reveal>
          <h1>Let’s map Unifloe<br /><span>to your school.</span></h1>
          <p>A focused conversation around your workflows, scale, and priorities.</p>
          <div className="contact-benefits" data-reveal-group>
            <div><span><Clock3 aria-hidden="true" /></span><div><strong>Relevant from the start</strong><p>Your priorities, not a generic tour.</p></div></div>
            <div><span><MapPin aria-hidden="true" /></span><div><strong>Built for Indian schools</strong><p>Local structures, pricing, and data residency.</p></div></div>
            <div><span><MessageCircleMore aria-hidden="true" /></span><div><strong>A practical path</strong><p>Pilot first, then scale when ready.</p></div></div>
          </div>
          <div className="contact-direct" data-reveal>
            <a href="tel:+919686110206"><Phone aria-hidden="true" /><span><small>Call Unifloe</small><strong>+91 9686110206</strong></span></a>
            <a href="mailto:adithya@unifloe.app"><Mail aria-hidden="true" /><span><small>Email Unifloe</small><strong>adithya@unifloe.app</strong></span></a>
          </div>
          <div className="contact-assurance"><ShieldCheck aria-hidden="true" /><p><strong>Responsible enquiry handling</strong>Sent only to the configured Unifloe inbox.</p></div>
        </div>
        <ContactForm initialInterest={initialInterest} />
      </section>
      <section className="section-shell privacy-panel" id="privacy" data-reveal>
        <div className="privacy-copy">
          <h2>Your enquiry stays an enquiry.</h2>
          <p>We collect only what the Unifloe team needs to respond. Never student records or child data.</p>
        </div>
        <ol className="privacy-commitments">
          <li><span>01</span><div><strong>No student data</strong><p>Keep learner information out of this form.</p></div></li>
          <li><span>02</span><div><strong>Fixed recipient</strong><p>Sent only to the configured Unifloe inbox.</p></div></li>
          <li><span>03</span><div><strong>Your consent</strong><p>Required before an enquiry can be submitted.</p></div></li>
        </ol>
      </section>
    </main>
  );
}
