import {
  AlarmClock,
  BadgeIndianRupee,
  BarChart3,
  BedDouble,
  BookOpen,
  BookOpenCheck,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  CalendarDays,
  CalendarOff,
  CalendarRange,
  ClipboardCheck,
  ClipboardList,
  DoorOpen,
  FileCheck2,
  FileText,
  FolderOpen,
  GraduationCap,
  IdCard,
  Inbox,
  KeyRound,
  Landmark,
  LayoutGrid,
  Library,
  ListChecks,
  MessageSquareText,
  MessagesSquare,
  NotebookPen,
  Presentation,
  Receipt,
  ReceiptText,
  Settings2,
  ToggleRight,
  UserRound,
  UserRoundCheck,
  Users,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { FinalCta } from "../components/FinalCta";
import { PageHero } from "../components/PageHero";
import { featureGroups } from "../data/site-content";
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

const moduleIcons: Record<string, typeof BookOpen> = {
  Teaching: Presentation,
  Subjects: BookOpen,
  Timetable: CalendarRange,
  Attendance: CalendarCheck2,
  Materials: FolderOpen,
  Assignments: ClipboardList,
  "Exams and Results": FileCheck2,
  Marks: BarChart3,
  "Report Cards": FileText,
  "Lesson Plans": NotebookPen,
  "Role Inbox": Inbox,
  Calendar: CalendarDays,
  "Notes and Tasks": ListChecks,
  Requests: MessageSquareText,
  Guardian: Users,
  Chat: MessagesSquare,
  Finance: WalletCards,
  Payments: BadgeIndianRupee,
  Dues: AlarmClock,
  Receipts: Receipt,
  Library: Library,
  Hostel: BedDouble,
  "Front Office": DoorOpen,
  Inventory: Boxes,
  Leave: CalendarOff,
  HR: BriefcaseBusiness,
  Students: GraduationCap,
  Faculty: UserRoundCheck,
  Staff: IdCard,
  Classes: LayoutGrid,
  Profile: UserRound,
  Approvals: ClipboardCheck,
  Modules: ToggleRight,
  Permissions: KeyRound,
  Settings: Settings2,
  Billing: ReceiptText,
  Reports: BarChart3,
};

const workflowDeepDives = [
  {
    id: "attendance-workflows",
    icon: CalendarCheck2,
    title: "Attendance, corrections and student leave",
    copy: "The Head Admin sets how attendance is taken: by period, once a day, or morning and after lunch. The assigned teacher opens the register on a phone, marks it and confirms it.",
    points: ["Dated policies, so old registers keep their meaning", "Registers opened by the assigned teacher, or by the Principal", "Correction requests decided by Head Admin or Principal, with history", "Student leave applications, separate from staff and hostel leave", "A workbook export that counts only confirmed periods"],
  },
  {
    id: "fee-workflows",
    icon: BadgeIndianRupee,
    title: "Fees, payments and receipts",
    copy: "A published fee structure sets each student's charges. Families pay at the school and staff record it. Recording allocates the payment, updates dues and issues the numbered receipt in one step.",
    points: ["Charges proposed by staff, published once by Finance", "Payment recorded and verified by different people", "Receipt PDFs from a per school sequence", "Adjustments with maker and checker", "No online collection and no card details stored"],
  },
  {
    id: "assessment-workflows",
    icon: FileCheck2,
    title: "Exams, marks, report cards and hall tickets",
    copy: "Leadership creates an exam plan and announces the timetable. Each subject teacher submits a mark sheet. Results are released in batches, and report cards print from released marks in the school's own format.",
    points: ["Release refused until every mark sheet is in", "Staggered release by section and roll number", "Report cards graded on the school's board scale", "Hall tickets in four layouts, per student or per section", "No hall ticket until the timetable is announced"],
  },
  {
    id: "guardian-workflows",
    icon: UsersRound,
    title: "Guardians, consent and family sign in",
    copy: "A child has a record whether or not they have a login. Up to three guardians link to a student, and a parent with several children gets one account. Parents record consent under the DPDP Act when they first sign in.",
    points: ["One parent account across all their children", "Activation links for your own mail merge, or an Excel import", "Consent held at sign in until the parent gives it", "Withdrawal recorded, full history reviewable", "One time codes for approvals and payment requests"],
  },
  {
    id: "timetable-workflows",
    icon: CalendarRange,
    title: "Timetable, calendar and publication",
    copy: "Leadership defines period templates and subject requirements, generates a draft, edits it and publishes. A teacher may propose a change but never publish it. A half day on the calendar changes what the register expects.",
    points: ["Generated draft checked for conflicts", "Faculty proposals decided by Head Admin or Principal", "Calendar drafts validated before publishing", "The published timetable decides who may open a register"],
  },
  {
    id: "approval-workflows",
    icon: ClipboardCheck,
    title: "Approvals and the audit trail",
    copy: "One queue collects every decision the school raises: timetables, calendars, attendance corrections, marks release, charges, leave and announcements. The person who asked never decides.",
    points: ["The requester never decides", "A decided request cannot be decided again", "A lost update is reported, never shown as success", "Every sensitive change is logged with who, what and when"],
  },
] as const;

export default function FeaturesPage() {
  return (
    <main id="main-content">
      <PageHero
        title={<>Every school workflow. <span>One connected system.</span></>}
        lead="Six areas of school life, organised by the work people actually do. Start with attendance and notices, and switch on the rest when the school is ready."
        aside={
          <div className="features-platform-card" data-reveal aria-label="The six areas of Unifloe">
            <div className="features-platform-head">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/logoUnifloeNoBG.png" width="30" height="30" alt="" />
                Unifloe platform
              </span>
              <strong>6<small>areas</small></strong>
            </div>
            <div className="features-platform-grid">
              {featureGroups.map((group) => {
                const Icon = groupIcons[group.icon];
                return <a href={`#${group.icon}`} key={group.icon}><Icon aria-hidden="true" /><span>{group.title}</span><strong>{group.modules.length}</strong></a>;
              })}
            </div>
          </div>
        }
      />
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
      <div className="feature-groups section-shell">
        {featureGroups.map((group) => {
          const Icon = groupIcons[group.icon];
          return (
            <section className="feature-group" id={group.icon} key={group.title} data-reveal>
              <div className="feature-group-heading">
                <div className="icon-tile icon-tile-large"><Icon aria-hidden="true" /></div>
                <div><h2>{group.title}</h2><p>{group.description}</p></div>
              </div>
              <div className="module-table">
                {group.modules.map((module) => {
                  const ModuleIcon = moduleIcons[module.name] ?? Icon;
                  return (
                    <article key={module.name}>
                      <span className="module-icon"><ModuleIcon aria-hidden="true" /></span>
                      <strong>{module.name}</strong>
                      <p>{module.summary}</p>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
      <FinalCta />
    </main>
  );
}
