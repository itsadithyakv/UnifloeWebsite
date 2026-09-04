import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { productLinks } from "../data/site-content";

type PageHeroProps = {
  title: ReactNode;
  lead: string;
  aside?: ReactNode;
  actions?: boolean;
};

export function HeroActions({ light = false }: { light?: boolean }) {
  return (
    <div className="hero-actions">
      <a className={light ? "button button-light" : "button"} href={productLinks.demo}>Try the live demo <ArrowRight aria-hidden="true" /></a>
      <Link className={light ? "final-cta-link" : "text-link"} href="/contact">Talk to PaperKite <ArrowRight aria-hidden="true" /></Link>
    </div>
  );
}

export function PageHero({ title, lead, aside, actions = true }: PageHeroProps) {
  return (
    <section className={`page-hero ${aside ? "has-aside" : ""}`}>
      <div className="page-hero-inner section-shell">
        <div className="page-hero-copy" data-reveal>
          <h1>{title}</h1>
          <p>{lead}</p>
          {actions ? <HeroActions /> : null}
        </div>
        {aside ? <div className="page-hero-aside">{aside}</div> : null}
      </div>
    </section>
  );
}
