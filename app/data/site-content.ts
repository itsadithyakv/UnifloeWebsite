export type NavItem = { label: string; href: string };

export const productAppUrl = "https://go.unifloe.app";

export const productLinks = {
  demo: `${productAppUrl}/demo`,
  signIn: `${productAppUrl}/login`,
  getUnifloe: `${productAppUrl}/getunifloe`,
  register: `${productAppUrl}/register`,
} as const;

export const totalModuleCount = 45;
export const coreModuleCount = 29;
export const pilotSchoolLimit = 3;

export type ModuleEdition = "core" | "library" | "hostel" | "inventory" | "full";

export const editionLabels: Record<ModuleEdition, string> = {
  core: "Core",
  library: "Library set",
  hostel: "Hostel set",
  inventory: "Inventory set",
  full: "Full edition",
};

export type FeatureModule = {
  name: string;
  summary: string;
  features: string[];
  edition: ModuleEdition;
};

export type FeatureGroup = {
  title: string;
  description: string;
  icon: "academics" | "communication" | "finance" | "campus" | "people" | "administration";
  modules: FeatureModule[];
};

export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  audience: string;
  capacity: string;
  highlights: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Get started", href: "/get-started" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigationGroups: Array<{ title: string; links: NavItem[] }> = [
  {
    title: "Product",
    links: [
      { label: "Try the live demo", href: productLinks.demo },
      { label: "Sign in to your school", href: productLinks.signIn },
      { label: "Get started", href: "/get-started" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing and pilots", href: "/pricing" },
      { label: "About Unifloe", href: "/about" },
      { label: "Talk to PaperKite", href: "/contact" },
    ],
  },
];

export const boardFormats = [
  { name: "CBSE", copy: "Nursery to Class 12 across the foundational, preparatory, middle and secondary stages." },
  { name: "ICSE and ISC", copy: "Groups I to III, SUPW and the senior secondary streams." },
  { name: "State board", copy: "The same school shape with the school's own class bands and terms." },
  { name: "Karnataka PU", copy: "I PUC and II PUC as a college, with lecturers, class in charges and the subject combinations the college creates." },
] as const;

export const featureGroups: FeatureGroup[] = [
  {
    title: "Academics",
    description: "The teaching day, from the timetable to the report card.",
    icon: "academics",
    modules: [
      {
        name: "Teaching",
        summary: "The faculty workspace: today's classes, the planner, the review queue and materials for the classes a teacher is assigned to.",
        features: ["Today, planner, reviews and materials screens", "Scoped to assigned classes, sections and subjects", "Assignments and lesson notes in one place"],
        edition: "core",
      },
      {
        name: "Subjects",
        summary: "The subject catalogue, faculty mapping, sections and syllabus ownership that every other academic module reads.",
        features: ["Subjects mapped to classes and sections", "Faculty assignments and class teachers", "Elective and stream groups", "Assignments decide who may open a register"],
        edition: "core",
      },
      {
        name: "Timetable",
        summary: "Period templates, subject requirements and a generated draft that leadership edits and publishes.",
        features: ["Today, weekly view and room plan", "Generated candidate versions with conflict checks", "Change requests approved by Head Admin or Principal", "Students see their own section only"],
        edition: "core",
      },
      {
        name: "Attendance",
        summary: "Registers by period, once a day or twice a day, with policies that are dated so history keeps its meaning.",
        features: ["Effective dated collection policies", "Registers opened by the assigned teacher", "Correction requests decided by leadership", "Attendance threshold set by the school, 75 percent by default", "Excel export of confirmed sessions"],
        edition: "core",
      },
      {
        name: "Materials",
        summary: "Teacher material, student notes and learning resources for a class.",
        features: ["Materials tied to subject and section", "Student notes", "Review queue for submitted work"],
        edition: "core",
      },
      {
        name: "Assignments",
        summary: "Assignments, quizzes, tests and submissions with grading, feedback and release.",
        features: ["Assignments, quizzes, tests and essays", "Submissions and server controlled attempts", "Grading, feedback and release", "Live sessions with a plain refresh fallback"],
        edition: "core",
      },
      {
        name: "Exams and Results",
        summary: "Exam plans, announced timetables, teacher mark sheets and results released in batches.",
        features: ["Exam plans with slots per subject and section", "Timetable announcement into the role inbox", "Mark sheets checked against the plan", "Staggered result release", "Hall tickets in four layouts, only after the timetable is announced"],
        edition: "core",
      },
      {
        name: "Marks",
        summary: "Student progress, assessment marks and trends, shown in the school's own assessment columns.",
        features: ["Columns follow the school's report card template", "Weighted totals per component", "Corrections after release are leadership only and audited"],
        edition: "core",
      },
      {
        name: "Report Cards",
        summary: "A single page A4 report card in the school's document theme, built from released marks only.",
        features: ["Graded on the school's own board scale", "Families see only released results", "Teachers print only their sections", "School logo on every document"],
        edition: "core",
      },
      {
        name: "Lesson Plans",
        summary: "Lesson notes, unit progress and teaching reminders that feed the Teaching workspace.",
        features: ["Lesson notes and unit progress", "Reminders and resources", "Mapped into Teaching activities"],
        edition: "full",
      },
    ],
  },
  {
    title: "Communication",
    description: "Announcements, calendar, requests and the family link, without a separate chat app.",
    icon: "communication",
    modules: [
      {
        name: "Role Inbox",
        summary: "Announcements and school messages scoped by role, class, department or the whole school.",
        features: ["Audience rules by role and class", "School wide publication goes through approval", "Scheduled, pending and published states", "Feeds the dashboard and notifications"],
        edition: "core",
      },
      {
        name: "Calendar",
        summary: "Holidays, vacations, half days, events and academic dates, published as versions.",
        features: ["Drafts validated before publication", "Optional approval before publishing", "Library due dates and timetable items merged in", "A half day changes what the register expects"],
        edition: "core",
      },
      {
        name: "Notes and Tasks",
        summary: "Private notes for staff, and tasks assigned to people, departments, roles or groups.",
        features: ["Private notes with reminders", "Group tasks with per person progress", "Extension requests decided by the assigner", "Due dates projected into the calendar"],
        edition: "core",
      },
      {
        name: "Requests",
        summary: "Tickets routed by category, plus time bound choices such as polls, acknowledgements and permission responses.",
        features: ["Categories routed to an owner or role queue", "Replies, ownership changes and escalation", "Polls and acknowledgements with CSV export", "Visible to every school role"],
        edition: "core",
      },
      {
        name: "Guardian",
        summary: "Linked children, consent history, development reports and family requests.",
        features: ["Up to three guardians per student", "One account for a parent with several children", "Consent recorded under the DPDP Act", "Development reports published to the family"],
        edition: "core",
      },
      {
        name: "Chat",
        summary: "Direct and support chat between registered people in the school.",
        features: ["Only permitted school contacts", "Cold messages archived with legal hold support", "The PaperKite support thread stays reachable on every edition"],
        edition: "full",
      },
    ],
  },
  {
    title: "Finance",
    description: "One ledger for fees, dues, payments and receipts.",
    icon: "finance",
    modules: [
      {
        name: "Finance",
        summary: "Billing, payments, accounting, approvals and family statements in one role aware workspace.",
        features: ["Fee structures published to derive charges", "Charge requests from teachers, wardens and librarians", "Family statements with concessions and balances", "Chart of accounts, journals and budgets"],
        edition: "core",
      },
      {
        name: "Payments",
        summary: "Payments recorded at the school, with a separate verification step.",
        features: ["Recorded by authorised staff", "Allocated against dues in one step", "The recorder cannot verify their own entry", "No card or bank details are stored"],
        edition: "core",
      },
      {
        name: "Dues",
        summary: "Pending dues, overdue amounts, reminders and fines.",
        features: ["Reminders record what was actually sent", "Library and hostel fines settle here", "Families see their own statement"],
        edition: "core",
      },
      {
        name: "Receipts",
        summary: "Numbered receipts from a per school sequence, downloadable as PDF.",
        features: ["Issued with the payment", "Families download their own receipts", "Correction requests", "Charge lines and totals can never be removed from a receipt"],
        edition: "core",
      },
    ],
  },
  {
    title: "Campus operations",
    description: "Library, hostel, front office, inventory and staff leave.",
    icon: "campus",
    modules: [
      {
        name: "Library",
        summary: "Borrowing for students and faculty: requests, due dates, fines and borrower support.",
        features: ["A borrow request becomes a loan when the librarian issues it", "Renewals, returns and reminders", "Overdue state raises a fine"],
        edition: "library",
      },
      {
        name: "Catalogue",
        summary: "The library catalogue and live availability.",
        features: ["Search and availability", "Pending requests do not reduce available copies"],
        edition: "library",
      },
      {
        name: "Loans",
        summary: "Active loans, the issue flow and renewals for the librarian.",
        features: ["Issue at the desk", "Renew and desk actions", "Unclaimed reservations expire automatically"],
        edition: "library",
      },
      {
        name: "Returns",
        summary: "Due today, returned and overdue.",
        features: ["Return updates availability and history"],
        edition: "library",
      },
      {
        name: "Fines",
        summary: "Pending fines, payments, waivers and borrower history, settled through Finance.",
        features: ["Waivers by the librarian", "Visible to the borrower", "Settles on the family statement"],
        edition: "library",
      },
      {
        name: "Digital Library",
        summary: "PDFs, papers and study archives with authorised file access.",
        features: ["Private, tenant scoped files", "No loan state"],
        edition: "library",
      },
      {
        name: "Borrowers",
        summary: "Borrower profiles, current loans and return history.",
        features: ["Search borrowers", "Loan and return history"],
        edition: "library",
      },
      {
        name: "Hostel",
        summary: "Rooms and beds, residents, staged leave, roll call, requests and fines.",
        features: ["Allocation, room moves and checkout with history", "Leave goes student, then guardian, then warden", "Blocked dates and an explicit emergency route", "Fine proposals published by Finance"],
        edition: "hostel",
      },
      {
        name: "Front Office",
        summary: "A phone first visitor desk for Security, with a view only overview for leadership.",
        features: ["Check in with purpose, host and optional photo", "Policy driven approval before access", "Check out and escalation", "Expected arrivals"],
        edition: "hostel",
      },
      {
        name: "Inventory",
        summary: "Consumables, reusable items and fixed assets across campuses.",
        features: ["Receive, issue, count corrections and returns", "Request, optional approval, reservation, checkout, return", "Damaged or lost items never go back on the shelf by themselves", "Asset units for expensive equipment"],
        edition: "inventory",
      },
      {
        name: "Leave",
        summary: "Staff leave requests, balances, substitutes and approval status.",
        features: ["Requests against policy and balance", "HR or leadership review", "Substitute planning"],
        edition: "core",
      },
      {
        name: "HR",
        summary: "Workforce status, onboarding, missing documents and HR reports.",
        features: ["Workforce records and documents", "Staff attendance", "Onboarding checklist"],
        edition: "full",
      },
    ],
  },
  {
    title: "People",
    description: "Students, faculty, staff and the class structure behind them.",
    icon: "people",
    modules: [
      {
        name: "Students",
        summary: "Student records, service flags, class membership and request history.",
        features: ["Bulk import from the Unifloe workbook", "Roster rows for every child, logins only where the school wants them", "Service entitlements for hostel and bus"],
        edition: "core",
      },
      {
        name: "Faculty",
        summary: "Faculty records, teaching load and ownership.",
        features: ["Subject and section assignments", "Class teacher responsibility", "Teaching load"],
        edition: "core",
      },
      {
        name: "Staff",
        summary: "Staff records, designations, documents and status.",
        features: ["Documents and verification state", "Designation and department", "Linked login management"],
        edition: "core",
      },
      {
        name: "Classes",
        summary: "Classes, sections and student groups for the board format the school chose.",
        features: ["CBSE, ICSE, state board or Karnataka PU", "Sections and student groups", "Roll number policy"],
        edition: "core",
      },
      {
        name: "Profile",
        summary: "Personal profile, documents, contacts and preferences for every account.",
        features: ["Self service fields separated from official records", "Theme and notification preferences", "Raised tickets and documents"],
        edition: "core",
      },
    ],
  },
  {
    title: "Administration and insights",
    description: "Approvals, permissions, settings and exports.",
    icon: "administration",
    modules: [
      {
        name: "Approvals",
        summary: "One queue for every decision the school raises: timetables, calendars, corrections, marks release, charges, leave and announcements.",
        features: ["The requester never decides", "A decision is a record with reason, context and outcome", "A request decided by someone else is never reported as success"],
        edition: "core",
      },
      {
        name: "Modules",
        summary: "Enabled modules, role mapping and module health for the Head Admin.",
        features: ["Turn modules on and off", "Role overrides"],
        edition: "core",
      },
      {
        name: "Permissions",
        summary: "Role profiles, module access and action controls.",
        features: ["Six permissions: view, create, edit, approve, manage, report", "No full access role exists"],
        edition: "core",
      },
      {
        name: "Settings",
        summary: "Branding, academic defaults, school controls and module policy.",
        features: ["Logo, colours and one of three presets", "Consent basis and student login switch", "Capability groups the Head Admin can switch off school wide", "Hostel, inventory and visitor policy"],
        edition: "core",
      },
      {
        name: "Billing",
        summary: "Plan, licensed accounts, seat packs, invoices and renewal status.",
        features: ["Invoice PDFs", "Seat packs never create users on their own"],
        edition: "core",
      },
      {
        name: "Reports",
        summary: "Exports and summaries scoped to the current role.",
        features: ["Report card, hall ticket, receipt and invoice PDFs", "Attendance workbook", "Activation link and import templates"],
        edition: "full",
      },
    ],
  },
];

export const pilotPlans: PricingPlan[] = [
  {
    name: "Pilot Free",
    price: "₹0",
    cadence: "for one full year",
    audience: "One grade on the Core edition, to see the product on your own records.",
    capacity: "Up to 100 students",
    highlights: ["One grade", "12 month pilot", "Core edition modules", "Guided setup"],
    cta: "Apply for the free pilot",
    href: "/contact?interest=pilot-free",
  },
  {
    name: "Pilot Starter",
    price: "₹8,000",
    cadence: "for one full year",
    audience: "The founding school plan for a larger cohort, with the sets you choose.",
    capacity: "Up to 700 students",
    highlights: ["12 month pilot", "About ₹0.95 per student per month", "Core edition plus optional sets", "Founder led onboarding"],
    cta: "Start a pilot conversation",
    href: "/contact?interest=pilot-starter",
    featured: true,
  },
];

export const standardPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹30,000",
    cadence: "per year",
    audience: "For a school running its day on the Core edition.",
    capacity: "700 students included",
    highlights: ["Core edition", "Optional Library, Hostel and Inventory sets", "Your own logo and colours", "Add up to 1,000 students"],
    cta: "Discuss Starter",
    href: "/contact?interest=starter",
  },
  {
    name: "Growth",
    price: "₹80,000",
    cadence: "per year",
    audience: "For a larger school connecting more learners and workflows.",
    capacity: "2,500 students included",
    highlights: ["Larger school scale", "Edition and optional sets agreed with the school", "Your own logo and colours", "Add up to 1,000 students"],
    cta: "Discuss Growth",
    href: "/contact?interest=growth",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Let’s talk",
    cadence: "custom annual scope",
    audience: "For groups of schools and institutions with their own operating model.",
    capacity: "Capacity agreed together",
    highlights: ["Custom scope", "Groups of schools", "Tailored rollout", "Priced on request"],
    cta: "Contact our team",
    href: "/contact?interest=enterprise",
  },
];
