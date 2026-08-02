import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, Building2, ClipboardCheck, GraduationCap, Landmark, UsersRound } from "lucide-react";
import { FeatureAccordion } from "../components/FeatureAccordion";
import { featureGroups } from "../data/site-content";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore Unifloe’s connected academic, administrative, campus, communication, compliance, and LMS capabilities.",
};

const groupIcons = {
  academics: BookOpenCheck,
  student: GraduationCap,
  admin: ClipboardCheck,
  community: UsersRound,
  campus: Building2,
  governance: Landmark,
};

const moduleCount = featureGroups.reduce((total, group) => total + group.modules.length, 0);

export default function FeaturesPage() {
  return (
    <main id="main-content">
      <section className="features-hero">
        <div className="features-hero-shape" aria-hidden="true" />
        <div className="features-hero-inner section-shell">
          <div className="features-hero-copy" data-reveal>
            <h1>Every school workflow.<br /><span>One connected system.</span></h1>
            <p>Explore {moduleCount} modules across six connected areas.</p>
          </div>
          <div className="features-platform-card" data-reveal aria-label={`${moduleCount} Unifloe modules across six connected areas`}>
            <div className="features-platform-head">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/logoUnifloeNoBG.png" width="30" height="30" alt="" />
                Unifloe platform
              </span>
              <strong>{moduleCount}<small>modules</small></strong>
            </div>
            <div className="features-platform-grid">
              {featureGroups.map((group) => {
                const Icon = groupIcons[group.icon];
                return <a href={`#${group.icon}`} key={group.icon}><Icon aria-hidden="true" /><span>{group.title}</span><strong>{String(group.modules.length).padStart(2, "0")}</strong></a>;
              })}
            </div>
            <div className="features-platform-foot"><span>ERP</span><i /><span>LMS</span><i /><span>Governance</span></div>
          </div>
        </div>
      </section>
      <nav className="feature-jump section-shell" aria-label="Feature categories" data-reveal-group>
        {featureGroups.map((group, index) => {
          const Icon = groupIcons[group.icon];
          return <a href={`#${group.icon}`} key={group.icon}><span className="feature-jump-icon"><Icon aria-hidden="true" /></span><span><small>{String(index + 1).padStart(2, "0")}</small><strong>{group.title}</strong></span><ArrowRight aria-hidden="true" /></a>;
        })}
      </nav>
      <div className="feature-groups section-shell">
        {featureGroups.map((group, index) => {
          const Icon = groupIcons[group.icon];
          return (
            <section className="feature-group" id={group.icon} key={group.title} data-reveal>
              <div className="feature-group-heading">
                <div className="feature-group-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="icon-tile icon-tile-large"><Icon aria-hidden="true" /></div>
                <div><h2>{group.title}</h2><p>{group.description}</p></div>
              </div>
              <div className="module-list" data-reveal-group>
                {group.modules.map((module, moduleIndex) => (
                  <FeatureAccordion
                    index={String(moduleIndex + 1).padStart(2, "0")}
                    name={module.name}
                    summary={module.summary}
                    features={module.features}
                    defaultOpen={index === 0 && moduleIndex === 0}
                    key={module.name}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <section className="section-shell inline-cta" data-reveal><div><h2>Choose the workflows that matter first.</h2><p>Begin with essentials. Expand when ready.</p></div><Link className="button" href="/contact">Build your Unifloe roadmap <ArrowRight aria-hidden="true" /></Link></section>
    </main>
  );
}
