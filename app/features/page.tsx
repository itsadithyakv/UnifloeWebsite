import Link from "next/link";
import { ArrowRight, BadgeIndianRupee, BookOpenCheck, Building2, CalendarCheck2, ClipboardCheck, FileCheck2, GraduationCap, Landmark, UsersRound } from "lucide-react";
import { FeatureAccordion } from "../components/FeatureAccordion";
import { featureGroups, totalModuleCount } from "../data/site-content";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/features/");

const groupIcons = {
  academics: BookOpenCheck,
  student: GraduationCap,
  admin: ClipboardCheck,
  community: UsersRound,
  campus: Building2,
  governance: Landmark,
};

const workflowDeepDives = [
  {
    id: "attendance-workflows",
    icon: CalendarCheck2,
    title: "Attendance, corrections and student leave",
    copy: "Attendance sessions retain their policy version, collection window, section, subject or period context and owning teacher. Faculty work within assigned registers; disputed records move through a Head Admin or Principal decision with audit history instead of silent editing.",
    points: ["Effective-dated attendance policies", "Assignment-scoped registers", "Correction approval history", "Student leave separated from staff and hostel leave"],
  },
  {
    id: "fee-workflows",
    icon: BadgeIndianRupee,
    title: "School-owned fees and collection boundaries",
    copy: "Authorized finance teams can manage obligations, schedules, dues, payments, receipts, concessions and outstanding balances. Family-fee collections remain in a separately configured school-owned payment scope, distinct from PaperKite subscription billing.",
    points: ["Fee obligations and due schedules", "Payments and receipts", "Concession approvals", "School-scoped collection reporting"],
  },
  {
    id: "assessment-workflows",
    icon: FileCheck2,
    title: "Exams, question papers and result publication",
    copy: "Academic structure connects exam planning, assessment components, question libraries, marks and report cards. Faculty authority follows assigned subjects and sections, while broader review, correction and publication decisions remain controlled and auditable.",
    points: ["Reusable question classification", "Paper sets and marking guides", "Marks and grade history", "Authorized report-card publication"],
  },
] as const;

export default function FeaturesPage() {
  return (
    <main id="main-content">
      <section className="features-hero">
        <div className="features-hero-shape" aria-hidden="true" />
        <div className="features-hero-inner section-shell">
          <div className="features-hero-copy" data-reveal>
            <h1>Every school workflow.<br /><span>One connected system.</span></h1>
            <p>Explore {totalModuleCount} registered modules across six connected areas.</p>
          </div>
          <div className="features-platform-card" data-reveal aria-label={`${totalModuleCount} Unifloe modules across six connected areas`}>
            <div className="features-platform-head">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/logoUnifloeNoBG.png" width="30" height="30" alt="" />
                Unifloe platform
              </span>
              <strong>{totalModuleCount}<small>modules</small></strong>
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
      <aside className="section-shell feature-scope-note" data-reveal>
        <p><strong>Implementation scope stays explicit.</strong> Some modules use dedicated workspaces, others share grouped workflows, and configurable catalogue surfaces are confirmed during onboarding.</p>
        <Link className="text-link" href="/about">How Unifloe describes product maturity <ArrowRight aria-hidden="true" /></Link>
      </aside>
      <section className="section-shell workflow-deep-dives" aria-labelledby="workflow-deep-dives-heading">
        <div className="section-heading" data-reveal>
          <h2 id="workflow-deep-dives-heading">How connected workflows operate</h2>
          <p>Detailed product boundaries for three high-value school processes.</p>
        </div>
        <div className="workflow-deep-dive-grid" data-reveal-group>
          {workflowDeepDives.map((workflow) => {
            const Icon = workflow.icon;
            return (
              <article id={workflow.id} key={workflow.id}>
                <div className="icon-tile"><Icon aria-hidden="true" /></div>
                <h3>{workflow.title}</h3>
                <p>{workflow.copy}</p>
                <ul>{workflow.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section-shell inline-cta" data-reveal><div><h2>Choose the workflows that matter first.</h2><p>Begin with essentials. Expand when ready.</p></div><Link className="button" href="/contact">Build your Unifloe roadmap <ArrowRight aria-hidden="true" /></Link></section>
    </main>
  );
}
