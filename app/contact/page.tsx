import { ArrowRight, Clock3, Mail, MapPin, MessageCircleMore, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { productLinks } from "../data/site-content";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/contact/");

const nextSteps = [
  { title: "Share the school context", copy: "Your board, location, student strength, current tools and the workflows creating the most friction." },
  { title: "See a relevant product path", copy: "PaperKite walks the demo through your priorities and says plainly which surfaces are dedicated, grouped or generic." },
  { title: "Agree scope, then register", copy: "If there is a fit, the edition, optional sets, consent basis and rollout steps are confirmed. You receive a pilot invite and register the school at go.unifloe.app." },
];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string | string[] }> }) {
  const params = await searchParams;
  const initialInterest = typeof params.interest === "string" ? params.interest : "general-demo";

  return (
    <main id="main-content">
      <section className="contact-hero section-shell">
        <div className="contact-intro" data-reveal>
          <h1>Let’s map Unifloe<br /><span>to your school.</span></h1>
          <p>A focused conversation around your workflows, scale and priorities. If you would rather look first, the live demo is open now.</p>
          <a className="text-link contact-demo-link" href={productLinks.demo}>Try the live demo <ArrowRight aria-hidden="true" /></a>
          <div className="contact-benefits" data-reveal-group>
            <div><span><Clock3 aria-hidden="true" /></span><div><strong>Relevant from the start</strong><p>Your priorities, not a generic tour.</p></div></div>
            <div><span><MapPin aria-hidden="true" /></span><div><strong>Built for Indian schools</strong><p>CBSE, ICSE, state board and Karnataka PU, priced in rupees.</p></div></div>
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
        <ul className="privacy-commitments">
          <li><div><strong>No student data</strong><p>Keep learner information out of this form.</p></div></li>
          <li><div><strong>Fixed recipient</strong><p>Sent only to the configured Unifloe inbox.</p></div></li>
          <li><div><strong>Your consent</strong><p>Required before an enquiry can be submitted.</p></div></li>
        </ul>
      </section>
      <section className="section-shell contact-next" aria-labelledby="contact-next-heading">
        <div className="section-heading" data-reveal>
          <h2 id="contact-next-heading">What happens after you contact PaperKite?</h2>
          <p>A useful first conversation, followed by a clearly defined next step.</p>
        </div>
        <ol className="contact-next-grid" data-reveal-group>
          {nextSteps.map((step, index) => <li key={step.title}><span>{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}
        </ol>
        <p className="contact-region-note">Bengaluru is Unifloe&apos;s initial pilot focus. Availability and onboarding timelines are confirmed during the product conversation.</p>
      </section>
    </main>
  );
}
