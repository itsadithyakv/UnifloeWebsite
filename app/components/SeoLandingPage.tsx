import Link from "next/link";
import { ArrowRight, Check, Layers3 } from "lucide-react";
import type { SeoPageContent } from "../data/seo-pages";
import { getPublicRoute } from "../lib/seo";
import { FinalCta } from "./FinalCta";
import { PageHero } from "./PageHero";

export function SeoLandingPage({ path, content }: { path: string; content: SeoPageContent }) {
  const route = getPublicRoute(path);

  return (
    <main id="main-content" className="seo-landing">
      <PageHero
        title={route.h1}
        lead={content.intro}
        aside={
          <div className="seo-highlight-stack" data-reveal-group aria-label={`${content.name} highlights`}>
            {content.highlights.map((highlight) => (
              <article key={highlight.title}>
                <Check aria-hidden="true" />
                <div><h2>{highlight.title}</h2><p>{highlight.copy}</p></div>
              </article>
            ))}
          </div>
        }
      />

      <div className="section-shell seo-content">
        {content.sections.map((section) => (
          <section className="seo-content-section" id={section.id} key={section.title} data-reveal>
            <div className="seo-section-heading">
              <h2>{section.title}</h2>
              {section.lead ? <p>{section.lead}</p> : null}
            </div>
            <ul className="seo-section-points">
              {section.points.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}
            </ul>
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

      <FinalCta />
    </main>
  );
}
