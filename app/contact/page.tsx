import { Mail, MessageCircleMore, Phone } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/PageHero";
import { setupPromise } from "../data/site-content";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/contact/");

const nextSteps = [
  { title: "We call you back", copy: "Within a working day, to hear your board, your size and what is slowing the school down today." },
  { title: "Your school is set up", copy: `PaperKite creates the school at go.unifloe.app with your logo, classes and sections, hands you the Head Admin sign in, and ${setupPromise}.` },
  { title: "You import and go", copy: "Fill the student workbook, activate parents with one link each, and take the first register. Free for one class, for as long as you like." },
];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string | string[] }> }) {
  const params = await searchParams;
  const initialInterest = typeof params.interest === "string" ? params.interest : "general-demo";

  return (
    <main id="main-content">
      <PageHero
        title={<>Start free, <span>or ask us anything.</span></>}
        lead="Four fields and we call you back within a working day. If you would rather look first, the live demo is open now with a guided tour."
        actions={false}
        aside={<ContactForm initialInterest={initialInterest} />}
      >
        <div className="contact-reach" data-reveal-group>
          <a href="https://wa.me/919686110206"><MessageCircleMore aria-hidden="true" /><span><small>WhatsApp</small><strong>+91 9686110206</strong></span></a>
          <a href="tel:+919686110206"><Phone aria-hidden="true" /><span><small>Call</small><strong>+91 9686110206</strong></span></a>
          <a href="mailto:adithya@unifloe.app"><Mail aria-hidden="true" /><span><small>Email</small><strong>adithya@unifloe.app</strong></span></a>
        </div>
      </PageHero>
      <section className="section-shell contact-next" aria-labelledby="contact-next-heading">
        <div className="section-heading" data-reveal>
          <h2 id="contact-next-heading">What happens after you send this?</h2>
          <p>Three steps, and the first one is ours.</p>
        </div>
        <div className="contact-next-grid" data-reveal-group>
          {nextSteps.map((step) => <article key={step.title}><h3>{step.title}</h3><p>{step.copy}</p></article>)}
        </div>
        <p className="contact-region-note">Your enquiry stays an enquiry. It goes only to the Unifloe inbox, and the form never asks for student data.</p>
      </section>
    </main>
  );
}
