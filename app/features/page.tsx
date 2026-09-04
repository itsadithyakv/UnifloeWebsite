import { ArrowRight, BadgeIndianRupee, BookOpenCheck, Building2, CalendarCheck2, CalendarRange, ClipboardCheck, FileCheck2, Landmark, MessagesSquare, UsersRound, WalletCards } from "lucide-react";
import { FeatureAccordion } from "../components/FeatureAccordion";
import { coreModuleCount, editionLabels, featureGroups, productLinks, totalModuleCount } from "../data/site-content";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/features/");

const groupIcons = {
  academics: BookOpenCheck,
  communication: MessagesSquare,
  finance: WalletCards,
  campus: Building2,
  people: UsersRound,
  administration: Landmark,
};

const editions = [
  { name: "Core", copy: `${coreModuleCount} modules enabled for every school: the teaching day, communication, finance, people and administration.` },
  { name: "Optional sets", copy: "Library (seven modules), Hostel with Front Office, and Inventory. A school turns on a whole set, not a single key." },
  { name: "Full", copy: "Every module, including Chat, Reports, HR and Lesson Plans." },
];

const workflowDeepDives = [
  {
    id: "attendance-workflows",
    icon: CalendarCheck2,
    title: "Attendance, corrections and student leave",
    copy: "Head Admin sets a collection policy: by period, once a day, or morning and after lunch. A future policy is added as a new version, so old registers keep their meaning. The assigned teacher opens the register, marks it and confirms it.",
    points: ["Dated policies, never rewritten", "Registers opened by the assigned teacher, or by the Principal", "Correction requests decided by Head Admin or Principal, with history", "Student leave applications, separate from staff and hostel leave", "A workbook export that counts only confirmed periods"],
  },
  {
    id: "fee-workflows",
    icon: BadgeIndianRupee,
    title: "Fees, payments and receipts",
    copy: "A published fee structure derives each student's charges. Teachers, wardens and librarians can only propose a charge; Finance publishes it to the family statement. Families pay at the school and staff record it. Recording allocates the payment, updates dues and issues the numbered receipt in one step.",
    points: ["Charges proposed, then published once", "Payment recorded and verified by different people", "Receipt PDFs from a per school sequence", "Adjustments with maker and checker", "No online collection and no card details stored"],
  },
  {
    id: "assessment-workflows",
    icon: FileCheck2,
    title: "Exams, marks, report cards and hall tickets",
    copy: "Leadership creates an exam plan and announces the timetable. Each subject teacher submits a mark sheet. Results are released in batches so a whole school opening results at once does not stall. Report cards are built only from released marks, in the school's own document theme.",
    points: ["Release refused until every mark sheet is submitted", "Staggered release by section and roll number", "Report cards graded on the school's board scale", "Hall tickets in four layouts, per student or per section", "No hall ticket until the timetable is announced"],
  },
  {
    id: "guardian-workflows",
    icon: UsersRound,
    title: "Guardians, consent and family sign in",
    copy: "A child exists as a roster row whether or not they have a login. Up to three guardians link to a student, and a parent with several children gets one account. Parents are activated by a single use link or an Excel import, and record consent under the DPDP Act when they first sign in.",
    points: ["One parent account across all their children", "Activation links for your own mail merge", "Consent held at sign in until the parent gives it", "Withdrawal recorded, full history reviewable", "One time codes for approvals and payment requests"],
  },
  {
    id: "timetable-workflows",
    icon: CalendarRange,
    title: "Timetable, calendar and publication",
    copy: "Leadership defines period templates and subject requirements, generates a draft, edits it and publishes. A teacher may propose a change but never publish it. The academic calendar is versioned and validated before publication, and a half day changes what the register expects.",
    points: ["Generated draft checked for conflicts", "Faculty proposals decided by Head Admin or Principal", "Calendar drafts validated before publishing", "Published timetable decides who may open a register"],
  },
  {
    id: "approval-workflows",
    icon: ClipboardCheck,
    title: "Approvals and the audit trail",
    copy: "One queue collects every decision the school raises: timetables, calendars, attendance corrections, marks release, charges, adjustments, inventory, leave and announcements. The owning service makes the final authority check; the queue only shows it.",
    points: ["The requester never decides", "A decided request cannot be decided again", "A lost update is reported, never shown as success", "Every sensitive change writes an audit row with actor, role and record"],
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
            <p>{totalModuleCount} modules across six groups. A Core school runs {coreModuleCount} of them, plus the sets it turns on.</p>
          </div>
          <div className="features-platform-card" data-reveal aria-label={`${totalModuleCount} Unifloe modules across six groups`}>
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
                return <a href={`#${group.icon}`} key={group.icon}><Icon aria-hidden="true" /><span>{group.title}</span><strong>{group.modules.length}</strong></a>;
              })}
            </div>
          </div>
        </div>
      </section>
      <nav className="feature-jump section-shell" aria-label="Feature groups" data-reveal-group>
        {featureGroups.map((group) => {
          const Icon = groupIcons[group.icon];
          return <a href={`#${group.icon}`} key={group.icon}><span className="feature-jump-icon"><Icon aria-hidden="true" /></span><span><strong>{group.title}</strong><small>{group.modules.length} modules</small></span><ArrowRight aria-hidden="true" /></a>;
        })}
      </nav>
      <section className="section-shell editions-section" aria-labelledby="editions-heading">
        <div className="section-heading" data-reveal>
          <h2 id="editions-heading">Two editions and three optional sets.</h2>
          <p>Core and Full share the same services and data model. Core enables fewer modules and caps active Student and Faculty accounts.</p>
        </div>
        <div className="editions-grid" data-reveal-group>
          {editions.map((edition) => <article key={edition.name}><h3>{edition.name}</h3><p>{edition.copy}</p></article>)}
        </div>
      </section>
      <div className="feature-groups section-shell">
        {featureGroups.map((group, index) => {
          const Icon = groupIcons[group.icon];
          return (
            <section className="feature-group" id={group.icon} key={group.title} data-reveal>
              <div className="feature-group-heading">
                <div className="icon-tile icon-tile-large"><Icon aria-hidden="true" /></div>
                <div><h2>{group.title}</h2><p>{group.description}</p></div>
              </div>
              <div className="module-list" data-reveal-group>
                {group.modules.map((module, moduleIndex) => (
                  <FeatureAccordion
                    tag={editionLabels[module.edition]}
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
      <section className="section-shell workflow-deep-dives" aria-labelledby="workflow-deep-dives-heading">
        <div className="section-heading" data-reveal>
          <h2 id="workflow-deep-dives-heading">How connected workflows operate</h2>
          <p>Who starts each process, who decides, and what is refused.</p>
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
      <section className="section-shell inline-cta" data-reveal><div><h2>Try any of this right now.</h2><p>The demo runs the real product on a synthetic school. Nothing you change is saved.</p></div><a className="button" href={productLinks.demo}>Try the live demo <ArrowRight aria-hidden="true" /></a></section>
    </main>
  );
}
