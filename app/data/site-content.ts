export type NavItem = { label: string; href: string };

export const productAppUrl = "https://go.unifloe.app";

export const productLinks = {
  demo: `${productAppUrl}/demo`,
  signIn: `${productAppUrl}/login`,
  getUnifloe: `${productAppUrl}/getunifloe`,
  register: `${productAppUrl}/register`,
} as const;


export type FeatureModule = {
  name: string;
  summary: string;
  features: string[];
};

export type FeatureGroup = {
  title: string;
  description: string;
  icon: "academics" | "communication" | "finance" | "campus" | "people" | "administration";
  modules: FeatureModule[];
};

export type PricingPlan = {
  key: string;
  name: string;
  audience: string;
  accounts: string;
  capacity: string;
  monthly: string | null;
  yearly: string;
  priceNote: string;
  includes: string[];
  comingSoon?: string[];
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
      { label: "Pricing", href: "/pricing" },
      { label: "About Unifloe", href: "/about" },
      { label: "Talk to us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of use", href: "/terms" },
      { label: "How school data is handled", href: "/data-privacy" },
    ],
  },
];

// TODO(human): the promise we make about how quickly a free school is set up
// once we have called back. Keep it to one clause that follows "we call back
// within a working day, and ...". It is read by the get started page and the
// contact page so the two never disagree again.
export const setupPromise = "we set it up with you";

export const schoolProblems = [
  {
    heard: "Attendance is on paper, then typed up, and parents hear about an absence days later.",
    answer: "Teachers mark the register on a phone. A parent sees the absence the same day.",
  },
  {
    heard: "Report cards are built in spreadsheets every term, by hand, with mistakes.",
    answer: "Marks go in once. Report cards and hall tickets print from them in the school's own format.",
  },
  {
    heard: "Fee receipts, concessions and dues live in three different registers.",
    answer: "One ledger. A payment recorded at the counter updates dues and issues the receipt in one step.",
  },
  {
    heard: "UDISE+, APAAR consent and the DPDP Act are a pile of paper nobody owns.",
    answer: "Parent consent is recorded once at sign in, and the records UDISE+ needs export in one go.",
  },
] as const;

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
      },
      {
        name: "Subjects",
        summary: "The subject catalogue, faculty mapping, sections and syllabus ownership that every other academic module reads.",
        features: ["Subjects mapped to classes and sections", "Faculty assignments and class teachers", "Elective and stream groups", "Assignments decide who may open a register"],
      },
      {
        name: "Timetable",
        summary: "Period templates, subject requirements and a generated draft that leadership edits and publishes.",
        features: ["Today, weekly view and room plan", "Generated candidate versions with conflict checks", "Change requests approved by Head Admin or Principal", "Students see their own section only"],
      },
      {
        name: "Attendance",
        summary: "Registers by period, once a day or twice a day, with policies that are dated so history keeps its meaning.",
        features: ["Effective dated collection policies", "Registers opened by the assigned teacher", "Correction requests decided by leadership", "Attendance threshold set by the school, 75 percent by default", "Excel export of confirmed sessions"],
      },
      {
        name: "Materials",
        summary: "Teacher material, student notes and learning resources for a class.",
        features: ["Materials tied to subject and section", "Student notes", "Review queue for submitted work"],
      },
      {
        name: "Assignments",
        summary: "Assignments, quizzes, tests and submissions with grading, feedback and release.",
        features: ["Assignments, quizzes, tests and essays", "Submissions and server controlled attempts", "Grading, feedback and release", "Live sessions with a plain refresh fallback"],
      },
      {
        name: "Exams and Results",
        summary: "Exam plans, announced timetables, teacher mark sheets and results released in batches.",
        features: ["Exam plans with slots per subject and section", "Timetable announcement into the role inbox", "Mark sheets checked against the plan", "Staggered result release", "Hall tickets in four layouts, only after the timetable is announced"],
      },
      {
        name: "Marks",
        summary: "Student progress, assessment marks and trends, shown in the school's own assessment columns.",
        features: ["Columns follow the school's report card template", "Weighted totals per component", "Corrections after release are leadership only and audited"],
      },
      {
        name: "Report Cards",
        summary: "A single page A4 report card in the school's document theme, built from released marks only.",
        features: ["Graded on the school's own board scale", "Families see only released results", "Teachers print only their sections", "School logo on every document"],
      },
      {
        name: "Lesson Plans",
        summary: "Lesson notes, unit progress and teaching reminders that feed the Teaching workspace.",
        features: ["Lesson notes and unit progress", "Reminders and resources", "Mapped into Teaching activities"],
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
      },
      {
        name: "Calendar",
        summary: "Holidays, vacations, half days, events and academic dates, published as versions.",
        features: ["Drafts validated before publication", "Optional approval before publishing", "Library due dates and timetable items merged in", "A half day changes what the register expects"],
      },
      {
        name: "Notes and Tasks",
        summary: "Private notes for staff, and tasks assigned to people, departments, roles or groups.",
        features: ["Private notes with reminders", "Group tasks with per person progress", "Extension requests decided by the assigner", "Due dates projected into the calendar"],
      },
      {
        name: "Requests",
        summary: "Tickets routed by category, plus time bound choices such as polls, acknowledgements and permission responses.",
        features: ["Categories routed to an owner or role queue", "Replies, ownership changes and escalation", "Polls and acknowledgements with CSV export", "Visible to every school role"],
      },
      {
        name: "Guardian",
        summary: "Linked children, consent history, development reports and family requests.",
        features: ["Up to three guardians per student", "One account for a parent with several children", "Consent recorded under the DPDP Act", "Development reports published to the family"],
      },
      {
        name: "Chat",
        summary: "Direct and support chat between registered people in the school.",
        features: ["Only permitted school contacts", "Cold messages archived with legal hold support", "The PaperKite support thread is always reachable"],
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
      },
      {
        name: "Payments",
        summary: "Payments recorded at the school, with a separate verification step.",
        features: ["Recorded by authorised staff", "Allocated against dues in one step", "The recorder cannot verify their own entry", "No card or bank details are stored"],
      },
      {
        name: "Dues",
        summary: "Pending dues, overdue amounts, reminders and fines.",
        features: ["Reminders record what was actually sent", "Library and hostel fines settle here", "Families see their own statement"],
      },
      {
        name: "Receipts",
        summary: "Numbered receipts from a per school sequence, downloadable as PDF.",
        features: ["Issued with the payment", "Families download their own receipts", "Correction requests", "Charge lines and totals can never be removed from a receipt"],
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
        summary: "Catalogue, borrowing, loans, returns, fines, borrower history and a digital library in one desk.",
        features: ["A borrow request becomes a loan when the librarian issues it", "Renewals, returns, reminders and overdue fines", "Fines settle on the family statement", "PDFs and papers with private file access"],
      },
      {
        name: "Hostel",
        summary: "Rooms and beds, residents, staged leave, roll call, requests and fines.",
        features: ["Allocation, room moves and checkout with history", "Leave goes student, then guardian, then warden", "Blocked dates and an explicit emergency route", "Fine proposals published by Finance"],
      },
      {
        name: "Front Office",
        summary: "A phone first visitor desk for Security, with a view only overview for leadership.",
        features: ["Check in with purpose, host and optional photo", "Policy driven approval before access", "Check out and escalation", "Expected arrivals"],
      },
      {
        name: "Inventory",
        summary: "Consumables, reusable items and fixed assets across campuses.",
        features: ["Receive, issue, count corrections and returns", "Request, optional approval, reservation, checkout, return", "Damaged or lost items never go back on the shelf by themselves", "Asset units for expensive equipment"],
      },
      {
        name: "Leave",
        summary: "Staff leave requests, balances, substitutes and approval status.",
        features: ["Requests against policy and balance", "HR or leadership review", "Substitute planning"],
      },
      {
        name: "HR",
        summary: "Workforce status, onboarding, missing documents and HR reports.",
        features: ["Workforce records and documents", "Staff attendance", "Onboarding checklist"],
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
        features: ["Bulk import from the Unifloe workbook", "A record for every child, with a login only where the school wants one", "Service entitlements for hostel and bus"],
      },
      {
        name: "Faculty",
        summary: "Faculty records, teaching load and ownership.",
        features: ["Subject and section assignments", "Class teacher responsibility", "Teaching load"],
      },
      {
        name: "Staff",
        summary: "Staff records, designations, documents and status.",
        features: ["Documents and verification state", "Designation and department", "Linked login management"],
      },
      {
        name: "Classes",
        summary: "Classes, sections and student groups for the board format the school chose.",
        features: ["CBSE, ICSE, state board or Karnataka PU", "Sections and student groups", "Roll number policy"],
      },
      {
        name: "Profile",
        summary: "Personal profile, documents, contacts and preferences for every account.",
        features: ["Self service fields separated from official records", "Theme and notification preferences", "Raised tickets and documents"],
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
      },
      {
        name: "Module settings",
        summary: "Turn areas of Unifloe on or off for the school and decide which roles see them.",
        features: ["Turn modules on and off", "Role overrides"],
      },
      {
        name: "Permissions",
        summary: "Role profiles, module access and action controls.",
        features: ["Six permissions: view, create, edit, approve, manage, report", "No full access role exists"],
      },
      {
        name: "Settings",
        summary: "Branding, academic defaults, school controls and module policy.",
        features: ["Logo, colours and one of three presets", "Consent basis and student login switch", "Whole areas the Head Admin can switch off school wide", "Hostel, inventory and visitor policy"],
      },
      {
        name: "Billing",
        summary: "Plan, licensed accounts, seat packs, invoices and renewal status.",
        features: ["Invoice PDFs", "Seat packs never create users on their own"],
      },
      {
        name: "Reports",
        summary: "Exports and summaries scoped to the current role.",
        features: ["Report card, hall ticket, receipt and invoice PDFs", "Attendance workbook", "Activation link and import templates"],
      },
    ],
  },
];

export const totalModuleCount = featureGroups.reduce((count, group) => count + group.modules.length, 0);

export const plans: PricingPlan[] = [
  {
    key: "free",
    name: "Free",
    audience: "A teacher or a school trying it with one class.",
    accounts: "Up to 100 users, students, teachers and parents together",
    capacity: "One class",
    monthly: null,
    yearly: "₹0",
    priceNote: "forever",
    includes: ["Attendance", "Homework", "Notices to parents", "Basic marks"],
    cta: "Request free setup",
    href: "/contact?interest=free",
  },
  {
    key: "junior",
    name: "Junior",
    audience: "A small school or PU college.",
    accounts: "Unlimited accounts",
    capacity: "Up to 250 students on roll",
    monthly: "₹999",
    yearly: "₹9,999",
    priceNote: "a month, or ₹9,999 a year",
    includes: ["Students and classes", "Attendance and timetable", "Marks and report cards", "Fee ledger and receipts", "Calendar and notices", "Excel exports"],
    cta: "Choose Junior",
    href: "/contact?interest=junior",
  },
  {
    key: "standard",
    name: "Standard",
    audience: "A typical Bengaluru school or PU college.",
    accounts: "Unlimited accounts",
    capacity: "Up to 700 students on roll",
    monthly: "₹1,999",
    yearly: "₹19,999",
    priceNote: "a month, or ₹19,999 a year",
    includes: ["Everything in Junior", "Library, hostel and inventory", "Branded documents", "Priority support"],
    comingSoon: ["WhatsApp notices to parents", "Online admissions"],
    cta: "Choose Standard",
    href: "/contact?interest=standard",
    featured: true,
  },
  {
    key: "growth",
    name: "Growth",
    audience: "A larger school or two campuses.",
    accounts: "Unlimited accounts",
    capacity: "Up to 2,100 students on roll",
    monthly: "₹5,999",
    yearly: "₹59,999",
    priceNote: "a month, or ₹59,999 a year",
    includes: ["Everything in Standard", "Multi campus view"],
    comingSoon: ["Audit log exports"],
    cta: "Choose Growth",
    href: "/contact?interest=growth",
  },
];

export const pricingFaq = [
  { q: "Is GST included?", a: "Prices are shown before GST. Where GST applies it is added on the invoice at the applicable rate." },
  { q: "Who counts as a user on the Free plan?", a: "Everyone who signs in: students, teachers, admin staff and parents. The Free plan covers up to 100 of them for one class." },
  { q: "What happens when we pass the student limit?", a: "You move to the next plan. PaperKite tells you before it happens, and nothing is switched off in the meantime." },
  { q: "Can we pay monthly and change later?", a: "Yes. A monthly plan runs to the end of the paid month. A yearly plan runs to the end of the year and works out to two months free." },
  { q: "What if we stop?", a: "Your school's data is exported for you before the account is closed. Closing a school is staged and reversible until the final step." },
  { q: "How do we pay?", a: "PaperKite invoices the school directly, monthly or yearly, and records the payment. There is no online checkout and no card details are stored." },
] as const;
