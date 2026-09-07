export type SeoPageContent = {
  name: string;
  intro: string;
  highlights: Array<{ title: string; copy: string }>;
  sections: Array<{
    id?: string;
    title: string;
    lead?: string;
    points: string[];
  }>;
  notice?: string;
  related: Array<{ href: string; label: string; copy: string }>;
};

export const seoPages = {
  about: {
    name: "About Unifloe",
    intro:
      "PaperKite creates and operates Unifloe, a school ERP and LMS built for Indian schools. One product, run by each school at go.unifloe.app.",
    highlights: [
      { title: "One deployment, many schools", copy: "Each school has its own identity, modules, branding, structure, users and data boundary." },
      { title: "Roles that match a school", copy: "Ten school roles from Student to Security, plus guardian access for parents." },
      { title: "Free for one class", copy: "Any teacher or school can start with one class at no cost, forever, and grow from there." },
    ],
    sections: [
      {
        title: "PaperKite creates and operates Unifloe",
        lead: "PaperKite builds and runs the product. Schools use it to connect teaching, attendance, marks, fees, requests and campus services around one shared structure.",
        points: [
          "A web app that installs on a phone or laptop, with no separate mobile app",
          "Sign in at go.unifloe.app with your school code",
          "PaperKite is a platform role, never a school superuser",
          "The PaperKite support thread is inside the product",
        ],
      },
      {
        title: "Built around real responsibility boundaries",
        lead: "Visibility on screen is never authorisation. Every request is checked against the person, the school, the role, the module and the record before anything is read or written.",
        points: [
          "The requester never performs the decision",
          "A decision is a record with reason, context and outcome",
          "The final authority check lives in the service, not the screen",
          "High impact changes carry an approval or a confirmation",
        ],
      },
      {
        title: "Board formats the product understands",
        lead: "A school picks its board format first. The format decides the vocabulary, the class bands, the assessment modes and the report card template.",
        points: [
          "CBSE from Nursery to Class 12",
          "ICSE and ISC with Groups I to III and SUPW",
          "State board with the school's own class bands and terms",
          "Karnataka PU with I PUC, II PUC, lecturers and college created subject combinations",
        ],
      },
      {
        title: "Practical progress, not inflated claims",
        lead: "Every plan runs the same product. What a school pays for is students on roll and which areas are switched on.",
        points: [
          "The features page shows every module by group",
          "Onboarding starts from the workflows a school will actually use",
          "A realistic rollout order, so the first term is calm rather than crowded",
        ],
      },
    ],
    related: [
      { href: "/features", label: "Explore the platform", copy: "The modules by group, in plain words." },
      { href: "/get-started", label: "How a school gets started", copy: "From the live demo to the first parent signing in." },
      { href: "/data-privacy", label: "How school data is handled", copy: "Who is responsible for what under the DPDP Act." },
    ],
  },
  schoolErpIndia: {
    name: "School ERP software for India",
    intro:
      "Unifloe connects academic, administrative, financial, communication and campus work for CBSE, ICSE, state board and Karnataka PU institutions.",
    highlights: [
      { title: "ERP and LMS together", copy: "Attendance, marks, fees and requests share the same classes, people and permissions as assignments." },
      { title: "Built for Indian schools", copy: "Board formats, the 75 percent attendance threshold, hall tickets, receipts in rupees and DPDP consent." },
      { title: "Configurable by school", copy: "Logo, colours, terminology, enabled modules and academic structure adapt to each institution." },
    ],
    sections: [
      {
        title: "Replace fragmented school operations with connected workflows",
        lead: "Attendance, fees, assignments, requests and announcements depend on the same students, families, staff and classes. Unifloe keeps them in one role aware system.",
        points: [
          "Classes, sections, subjects, timetables and attendance",
          "Assignments, materials, quizzes and feedback",
          "Fees, dues, receipts and concessions",
          "Announcements, requests and approvals",
        ],
      },
      {
        title: "Start from school structure and responsibility",
        lead: "Each school has its own separate space, and authority comes from assignments rather than broad labels.",
        points: [
          "Own branding, modules, users and data boundary",
          "Server side checks even when the screen already hid an action",
          "Class teacher, subject and ownership authority from assignments",
          "Leadership sees whole school exceptions; families see only their own records",
        ],
      },
      {
        title: "Roll out the workflows your school is ready to adopt",
        lead: "A school does not need every module on day one.",
        points: [
          "The basics cover the teaching day, communication, finance, people and administration",
          "Library, hostel, front office and inventory switch on when the school needs them",
          "Scope and onboarding milestones agreed before rollout",
        ],
      },
      {
        id: "bengaluru-pilot",
        title: "Bengaluru onboarding support",
        lead: "PaperKite is in Bengaluru and does the first steps alongside each school, in person where that helps.",
        points: [
          "Direct workflow discovery conversations",
          "School structure and capacity review",
          "A plan chosen for the school's size",
          "Onboarding milestones and a review point",
        ],
      },
    ],
    related: [
      { href: "/get-started", label: "How to get started", copy: "The steps from the demo to a live school." },
      { href: "/for-cbse-schools", label: "Unifloe for CBSE schools", copy: "Stages, registers, attendance and board readiness." },
      { href: "/pricing", label: "Review pricing", copy: "Free for one class, then Junior, Standard and Growth by students on roll." },
    ],
  },
  schoolLms: {
    name: "Connected school LMS",
    intro:
      "Assignments, learning materials, quizzes, tests, submissions, grading and feedback, connected to the school's classes, people and communication.",
    highlights: [
      { title: "Built around assignments", copy: "Faculty create due work for the classes they teach. Students see it in urgency order." },
      { title: "Connected context", copy: "Class, subject, timetable and announcements come from the same school structure." },
      { title: "Role scoped access", copy: "Faculty work within assigned classes. Students see only their own work and feedback." },
    ],
    sections: [
      {
        title: "Keep teaching and learning connected to the school day",
        lead: "LMS activity sits alongside subjects, sections, faculty assignments and the role inbox, not in a separate portal.",
        points: [
          "Assignments, quizzes, tests, essays and materials",
          "Student submissions and teacher feedback",
          "Due work, completed work and progress context",
          "Class and subject aware access controls",
        ],
      },
      {
        title: "Assessments with server controlled attempts",
        lead: "Attempts are controlled by the server, not the browser, so a retried submission cannot bypass the rules.",
        points: [
          "Draft content hidden until published",
          "Grade, return feedback, release and close",
          "Live sessions use a realtime channel when configured and an ordinary refresh when it is not",
          "Authorisation never depends on a live connection",
        ],
      },
      {
        title: "Use LMS data responsibly",
        lead: "Learning records are private school data and stay inside the school's own space.",
        points: [
          "Never on public pages, offline caches or search engines",
          "Uploads kept in private, per school storage",
          "Restricted files re authorised on every read",
          "The installed app uses the same HTTPS API as the browser",
        ],
      },
    ],
    related: [
      { href: "/features#assessment-workflows", label: "Exams and results", copy: "Mark sheets, staggered release, report cards and hall tickets." },
      { href: "/features#attendance-workflows", label: "Attendance workflows", copy: "Registers, dated policies, corrections and student leave." },
      { href: "/features", label: "All platform features", copy: "The wider academic and school operations catalogue." },
    ],
  },
  cbseSchools: {
    name: "For CBSE schools",
    intro:
      "Nursery, LKG and UKG through Classes 1 to 12, across the Foundational, Preparatory, Middle and Secondary stages, with the registers and thresholds the affiliation bye laws expect.",
    highlights: [
      { title: "Nursery to Class 12", copy: "Pre primary, primary, middle, secondary and senior secondary bands in one structure." },
      { title: "Connected academics", copy: "Classes, sections, subjects, timetables, attendance and assessment share one structure." },
      { title: "School configured", copy: "The live structure comes from your own records during setup." },
    ],
    sections: [
      {
        title: "Model the academic structure your school actually uses",
        lead: "Classes, sections, stages, subjects and faculty assignments drive timetables, attendance, marks, calendars and reporting.",
        points: [
          "Stage, class, section and subject structures",
          "Faculty assignment and class teacher context",
          "Explore Nursery to Class 12 in the public demo",
          "Production structure configured from your own records",
        ],
      },
      {
        title: "Connect assessment, attendance and family communication",
        lead: "Faculty authority follows class and subject assignments, so every register and mark sheet stays with the right section.",
        points: [
          "Attendance threshold of 75 percent by default, set by the school",
          "Report cards graded on the school's own scale",
          "Hall tickets only once the exam timetable is announced",
          "Guardian communication and consent records",
        ],
      },
      {
        title: "Registers and records a CBSE school keeps",
        lead: "The bye laws expect an admission and withdrawal register, a daily attendance register, a cumulative record per student and staff records.",
        points: [
          "Roster, attendance history, released marks and staff documents",
          "Attendance exported as a workbook",
          "UDISE+ returns prepared from the school's own exports",
          "No Aadhaar numbers stored, no live government integration",
        ],
      },
    ],
    notice: "Unifloe is an independent PaperKite product. It is not affiliated with or approved by CBSE, the Government of India, APAAR or UDISE+.",
    related: [
      { href: "/apaar-readiness", label: "APAAR consent and UDISE+", copy: "What Unifloe records, and what it deliberately does not." },
      { href: "/features#assessment-workflows", label: "Exams and results", copy: "Mark sheets, staggered release, report cards and hall tickets." },
      { href: "/school-erp-software-india", label: "School ERP for India", copy: "The wider operating system for Indian schools." },
    ],
  },
  apaar: {
    name: "APAAR readiness",
    intro:
      "APAAR is voluntary and needs a parent's consent. Unifloe records that consent on its own, keeps the identity records a school needs for UDISE+, and stores no Aadhaar number.",
    highlights: [
      { title: "Separate consent", copy: "APAAR generation has its own consent type. A parent can decline it and still use Unifloe." },
      { title: "No Aadhaar stored", copy: "No Aadhaar number anywhere, and never in a log, an export or a link." },
      { title: "Exports, not integrations", copy: "UDISE+ returns come from the school's own extracts. No live government connection." },
    ],
    sections: [
      {
        title: "Consent that is recorded on its own",
        lead: "Every consent record carries a type. Platform terms and data processing are needed to sign in; APAAR generation is a third, separate type.",
        points: [
          "Three consent types, recorded independently",
          "Verification method and notice version on every record",
          "Withdrawal recorded, never silently deleted",
          "Full consent history per student",
        ],
      },
      {
        title: "What Unifloe keeps for UDISE+",
        lead: "Every recognised school files annual data into UDISE+ keyed to the Permanent Education Number.",
        points: [
          "Roster, class placement and attendance history",
          "Guardian links and consent",
          "Exports the school downloads, checks and submits",
          "No live connection to a government system",
        ],
      },
      {
        title: "Use readiness language accurately",
        lead: "Unifloe helps a school organise records and consent around APAAR. It does not issue APAAR IDs, certify a school, guarantee acceptance or replace official guidance.",
        points: [
          "Hold a masked reference and a verification outcome, never the Aadhaar number",
          "Verify current requirements before regulatory decisions",
          "Take appropriate professional or government guidance",
        ],
      },
    ],
    notice: "Unifloe is not APAAR certified, government approved or affiliated with the Government of India. This page describes product behaviour, not legal or regulatory advice.",
    related: [
      { href: "/data-privacy", label: "How school data is handled", copy: "Responsibilities, consent, safeguards and retention under the DPDP Act." },
      { href: "/for-cbse-schools", label: "CBSE school workflows", copy: "The academic structure around these records." },
      { href: "/features", label: "All features", copy: "Explore the modules by group." },
    ],
  },
  dataPrivacy: {
    name: "School data privacy",
    intro:
      "Under the Digital Personal Data Protection Act the school is the Data Fiduciary and PaperKite is the Data Processor. Here is what each side carries and what Unifloe does about it.",
    highlights: [
      { title: "Consent from the parent", copy: "A child's data needs a parent's own verifiable consent. No administrator can consent on their behalf." },
      { title: "Safeguards in the product", copy: "Hashed passwords, encrypted secrets, private files, one separate space per school, rate limits and a strict content security policy." },
      { title: "No tracking of children", copy: "No advertising, no third party analytics, no session replay, no cross site tracking." },
    ],
    sections: [
      {
        title: "Who is responsible for what",
        lead: "The school decides the purpose and means of processing. PaperKite processes only on the school's instructions, under a written agreement settled before go live.",
        points: [
          "School: notice, consent, retention, grievance officer",
          "PaperKite: safeguards, contract, deletion on instruction",
          "Parent or guardian: consent for the child",
          "Every school student is a child under the Act",
        ],
      },
      {
        title: "Consent the way the Act describes it",
        lead: "By default the parent consents inside the product and is held at that step until it is recorded.",
        points: [
          "Parent in app consent by default",
          "Signed admission form as a declared alternative, only if it carries the notice",
          "Verification method, notice version and purposes on every record",
          "Withdrawal as easy as giving, with full history",
          "APAAR consent kept separate and optional",
        ],
      },
      {
        title: "Security safeguards that are in the product",
        lead: "Every school record is read and written through a repository that cannot build a query without the school identity.",
        points: [
          "Passwords hashed, secrets encrypted at rest",
          "Uploads size limited, type checked, private and re authorised on read",
          "Per request content security policy, no framing, rate limits before any lookup",
          "No card or bank details, no Aadhaar numbers, no biometrics",
          "Encrypted backups with restore drills before a school is admitted",
        ],
      },
      {
        title: "What is retained, and for how long",
        lead: "Short lived things expire quickly. School records stay for as long as the subscription is active.",
        points: [
          "Email delivery history compacted after 90 days",
          "Password reset links 30 minutes, one time codes 10 minutes",
          "Demo changes live in your browser for 24 hours",
          "Archives purged only after a verified backup, never under legal hold",
          "Statutory retention of financial and admission records stays with the school",
        ],
      },
      {
        title: "What stays with the school",
        lead: "Technology controls are one part of data governance. These remain the school's own duties.",
        points: [
          "Publish the privacy notice and name a grievance officer",
          "Decide the consent basis against your own admission form",
          "Answer access, correction and erasure requests",
          "Notify the Data Protection Board and affected people after a breach, with facts from PaperKite",
        ],
      },
      {
        title: "Services Unifloe relies on",
        lead: "Unifloe runs as one application at go.unifloe.app. These services are named as sub processors in the agreement.",
        points: [
          "MongoDB Atlas for records",
          "Cloudflare R2 for private files, archives and backups",
          "Resend for one time codes, and the school's own Google account for outbound mail",
          "Sentry for scrubbed error reports, Ably for optional live updates",
          "Hosting regions confirmed with each school",
        ],
      },
    ],
    notice: "This page describes product controls that support a school's data governance under the DPDP Act. It is not legal advice or a certification of complete compliance.",
    related: [
      { href: "/apaar-readiness", label: "APAAR consent and UDISE+", copy: "What is recorded, what is exported and what is never stored." },
      { href: "/about", label: "About PaperKite and Unifloe", copy: "The operating and responsibility model." },
      { href: "/get-started", label: "How to get started", copy: "From the live demo to the first parent signing in." },
    ],
  },
} as const satisfies Record<string, SeoPageContent>;
