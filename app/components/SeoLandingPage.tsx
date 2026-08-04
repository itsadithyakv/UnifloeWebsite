import Link from "next/link";
import { ArrowRight, Check, Layers3 } from "lucide-react";
import type { SeoPageContent } from "../data/seo-pages";
import { getPublicRoute } from "../lib/seo";

export function SeoLandingPage({ path, content }: { path: string; content: SeoPageContent }) {
  const route = getPublicRoute(path);

  return (
    <main id="main-content" className="seo-landing">
      <section className="seo-hero">
        <div className="seo-hero-shape" aria-hidden="true" />
        <div className="section-shell seo-hero-inner">
          <div className="seo-hero-copy" data-reveal>
            <p className="seo-eyebrow">{content.eyebrow}</p>
            <h1>{route.h1}</h1>
            <p>{content.intro}</p>
            <div className="seo-hero-actions">
              <Link className="button" href={content.cta.href}>{content.cta.label}<ArrowRight aria-hidden="true" /></Link>
              <Link className="text-link" href="/features">Explore the platform<ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="seo-highlight-stack" data-reveal-group aria-label={`${content.eyebrow} highlights`}>
            {content.highlights.map((highlight, index) => (
              <article key={highlight.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h2>{highlight.title}</h2><p>{highlight.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-shell seo-content">
        {content.sections.map((section, index) => (
          <section className="seo-content-section" key={section.title} data-reveal>
            <div className="seo-section-heading">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{content.eyebrow}</p><h2>{section.title}</h2></div>
            </div>
            <div className="seo-section-body">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points ? (
                <ul>
                  {section.points.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </div>

      {content.notice ? (
        <aside className="section-shell seo-notice" aria-label="Important information" data-reveal>
          <Layers3 aria-hidden="true" />
          <p>{content.notice}</p>
        </aside>
      ) : null}

      <section className="section-shell seo-related" aria-labelledby="related-pages-heading">
        <div className="seo-related-heading" data-reveal>
          <p>Continue exploring</p>
          <h2 id="related-pages-heading">Related Unifloe pages</h2>
        </div>
        <div className="seo-related-grid" data-reveal-group>
          {content.related.map((item) => (
            <Link href={item.href} key={item.href}>
              <span>{item.label}</span>
              <p>{item.copy}</p>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell final-cta seo-final-cta" data-reveal>
        <div className="final-cta-copy"><h2>{content.cta.title}</h2><p>{content.cta.copy}</p></div>
        <Link className="button button-light" href={content.cta.href}>{content.cta.label}<ArrowRight aria-hidden="true" /></Link>
        <div className="final-cta-clay" aria-hidden="true"><span /><span /><span /></div>
      </section>
    </main>
  );
}
