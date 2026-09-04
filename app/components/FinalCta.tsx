import { HeroActions } from "./PageHero";

type FinalCtaProps = {
  title?: string;
  copy?: string;
};

export function FinalCta({
  title = "See it running before you decide.",
  copy = "The demo is the real product on a synthetic school. Open it as a principal, a teacher or a parent.",
}: FinalCtaProps) {
  return (
    <section className="section-shell final-cta" data-reveal>
      <div className="final-cta-copy"><h2>{title}</h2><p>{copy}</p></div>
      <HeroActions light />
      <div className="final-cta-clay" aria-hidden="true"><span /><span /><span /></div>
    </section>
  );
}
