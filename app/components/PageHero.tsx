import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { productLinks } from "../data/site-content";
import { DotGrid } from "./DotGrid";

type PageHeroProps = {
  title: ReactNode;
  lead: string;
  aside?: ReactNode;
  actions?: boolean;
  children?: ReactNode;
};

export function HeroActions({ light = false }: { light?: boolean }) {
  return (
    <div className="hero-actions">
      <a className={light ? "button button-light" : "button"} href={productLinks.demo}>Try the live demo <ArrowRight aria-hidden="true" /></a>
      <Link className={light ? "button button-ghost" : "button button-secondary"} href="/contact">Talk to PaperKite <ArrowRight aria-hidden="true" /></Link>
    </div>
  );
}

export function PageHero({ title, lead, aside, actions = true, children }: PageHeroProps) {
  return (
    <section className={aside ? "page-hero has-aside" : "page-hero"}>
      <DotGrid
        className="hero-dot-grid page-hero-grid"
        dotSize={3}
        gap={25}
        baseColor="#e1eaf7"
        activeColor="#0057ff"
        activeScale={2.4}
        proximity={165}
      />
      <div className="page-hero-inner section-shell">
        <div className="page-hero-copy" data-reveal>
          <h1>{title}</h1>
          <p>{lead}</p>
          {actions ? <HeroActions /> : null}
          {children}
        </div>
        {aside ? <div className="page-hero-aside" data-reveal>{aside}</div> : null}
      </div>
    </section>
  );
}
