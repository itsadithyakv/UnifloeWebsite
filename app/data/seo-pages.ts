export type SeoPageContent = {
  name: string;
  intro: string;
  highlights: Array<{ title: string; copy: string }>;
  sections: Array<{
    id?: string;
    title: string;
    paragraphs: string[];
    points?: string[];
  }>;
  notice?: string;
  related: Array<{ href: string; label: string; copy: string }>;
  cta: { title: string; copy: string; href: string; label: string };
};

export const seoPages = {
  about: {
    name: "About Unifloe",
    intro:
      "PaperKite creates and operates Unifloe, a school ERP and LMS built for Indian schools. Unifloe brings academic, administrative, financial, communication and campus work into one role aware product that a school runs at go.unifloe.app.",
    highlights: [
      { title: "One deployment, many schools", copy: "Each school is a tenant with its own identity, enabled modules, branding, academic structure, users and data boundary." },
      { title: "Roles that match a school", copy: "Ten school roles from Student to Security, plus guardian access on top of the student identity. PaperKite is a platform role, not a school superuser." },
      { title: "A pilot of three schools", copy: "The current build is scoped to a pilot of up to three schools, run from Bengaluru, with the founder doing the onboarding." },
    ],
    sections: [
      {
        title: "PaperKite creates and operates Unifloe",
        paragraphs: [
          "Unifloe is PaperKite's school ERP and LMS for Indian schools. PaperKite develops and operates the product, while schools use Unifloe to connect teaching, attendance, marks, fees, requests, communication and campus services around one shared school structure.",
          "The product is a web application that installs as a PWA on a phone or laptop. There is no separate mobile app to download and no device connector to maintain. A school signs in at go.unifloe.app with its school code.",
        ],
      },
      {
        title: "Built around real responsibility boundaries",
        paragraphs: [
          "Visibility in the interface is never treated as authorisation. Every protected request resolves the signed in person, the school, the role, the module, the commercial capability, the school's own control policy and then ownership or assignment before anything is read or written.",
          "Almost every consequential action starts with one role and finishes with another, joined by a record. A teacher proposes a timetable change and leadership publishes it. An admin records a payment and someone else verifies it. A warden proposes a fine and Finance owns the ledger.",
        ],
        points: [
          "The requester never performs the decision",
          "A decision is a record with reason, context and outcome",
          "The final authority check lives in the service, not the screen",
          "High impact changes carry an approval or a confirmation",
        ],
      },
      {
        title: "Board formats the product understands",
        paragraphs: [
          "A school picks its board format first: CBSE, ICSE, state board or Karnataka Pre University. The format decides the vocabulary, the class bands, the assessment modes and the report card template shape.",
          "A Karnataka PU college is the same product, not a fork. It gets I PUC and II PUC, lecturers and class in charges, marks based assessment throughout, a pass mark of 35, and subject combinations the college creates itself, with the common Karnataka sets offered as quick picks.",
        ],
      },
      {
        title: "Practical progress, not inflated claims",
        paragraphs: [
          "Unifloe registers 45 modules. A Core school runs 29 of them plus any optional set it turns on. Some modules have dedicated workspaces, some share a grouped workspace, and a few are plain manifest driven screens. The features page says which is which.",
          "Some things are deliberately not in this build: payroll, online fee collection, a transport module, a chat app for every school, and any face or biometric attendance. Demo and onboarding conversations start from what exists today and a realistic rollout order.",
        ],
      },
    ],
    related: [
      { href: "/features", label: "Explore the platform", copy: "The registered modules by group, with the edition that includes each one." },
      { href: "/get-started", label: "How a school gets started", copy: "From the live demo to the first parent signing in." },
      { href: "/data-privacy", label: "How school data is handled", copy: "Who is responsible for what under the DPDP Act, and what Unifloe does about it." },
    ],
    cta: { title: "See how PaperKite can map Unifloe to your school.", copy: "Share your priorities and receive a focused product conversation.", href: "/contact", label: "Book a school demo" },
  },
  schoolErpIndia: {
    name: "School ERP software for India",
    intro:
      "Unifloe connects academic, administrative, financial, communication and campus workflows for Indian schools without forcing every role into the same generic screen. It is built for CBSE, ICSE, state board and Karnataka PU institutions.",
    highlights: [
      { title: "ERP and LMS together", copy: "Attendance, marks, fees and requests share the same classes, sections, people and permissions as assignments and materials." },
      { title: "Built for Indian schools", copy: "Board formats, the 75 percent attendance threshold, hall tickets, receipts in rupees and guardian consent under the DPDP Act." },
      { title: "Configurable by school", copy: "Logo, colours, terminology, enabled modules and academic structure adapt to each institution." },
    ],
    sections: [
      {
        title: "Replace fragmented school operations with connected workflows",
        paragraphs: [
          "Attendance, fees, assignments, requests, announcements and campus services depend on the same students, families, staff, classes and permissions. Unifloe brings these workflows into one role aware system so information moves through the school without repeated spreadsheets and informal handoffs.",
          "Leadership sees whole school exceptions. Faculty work from their assigned classes and subjects. Students and guardians see only the records and services connected to them.",
        ],
        points: [
          "Classes, sections, subjects, timetables and attendance",
          "Assignments, materials, quizzes and feedback",
          "Fees, dues, receipts and concessions",
          "Announcements, requests and approvals",
        ],
      },
      {
        title: "Start from school structure and responsibility",
        paragraphs: [
          "Each school is a tenant with its own branding, enabled modules, capabilities, users and data boundary. The server repeats tenant and actor checks even when the interface has already hidden an unavailable action.",
          "Class teacher, subject and ownership authority comes from assignments rather than broad labels. Attendance registers, marks entry, calendars and assignments follow the people who are responsible for a specific class or learner.",
        ],
      },
      {
        title: "Roll out the workflows your school is ready to adopt",
        paragraphs: [
          "A school does not need to activate every registered module on day one. The Core edition covers the teaching day, communication, finance, people and administration. Library, Hostel with Front Office, and Inventory are optional sets a school turns on as a whole.",
          "Final scope, enabled modules and onboarding milestones are agreed before rollout. Generic catalogue surfaces are not presented as completed specialised implementations.",
        ],
      },
      {
        id: "bengaluru-pilot",
        title: "Bengaluru pilot and onboarding support",
        paragraphs: [
          "Bengaluru is where the current pilot of up to three schools runs. PaperKite uses those conversations to map each school's board and stage structure, student capacity, current systems, highest friction workflows and the people responsible for each process.",
          "Onboarding is a defined sequence: try the demo, agree the scope, register the school with a pilot invite, set up classes and subjects, import students from the Unifloe workbook, and activate guardians. Unifloe does not claim a physical Bengaluru office or an unpublished customer network.",
        ],
        points: [
          "Direct workflow discovery conversations",
          "School structure and capacity review",
          "Defined edition, sets and responsibilities",
          "Onboarding milestones and a review point",
        ],
      },
    ],
    related: [
      { href: "/get-started", label: "How to get started", copy: "The steps from the demo to a live school." },
      { href: "/for-cbse-schools", label: "Unifloe for CBSE schools", copy: "Stages, registers, attendance and board readiness." },
      { href: "/pricing", label: "Review pilot pricing", copy: "Compare pilot and annual paths for different school sizes." },
    ],
    cta: { title: "Plan a connected school rollout.", copy: "Tell PaperKite which workflows create the most friction today.", href: "/contact", label: "Discuss your school" },
  },
  schoolLms: {
    name: "Connected school LMS",
    intro:
      "The Unifloe LMS covers assignments, learning materials, quizzes, tests, submissions, grading and feedback, and it stays connected to the school's classes, people and communication.",
    highlights: [
      { title: "Built around assignments", copy: "Faculty create due work and materials for the classes they teach. Students see current and completed work in urgency order." },
      { title: "Connected context", copy: "Class, subject, timetable and announcement context comes from the same school structure as everything else." },
      { title: "Role scoped access", copy: "Faculty work within assigned classes. Students see only their own submission, feedback and completed state." },
    ],
    sections: [
      {
        title: "Keep teaching and learning connected to the school day",
        paragraphs: [
          "A standalone learning portal becomes another place teachers and families must keep in sync. Unifloe connects LMS activity to subjects, sections, faculty assignments and the role inbox so learning tasks sit alongside the rest of school life.",
          "Faculty open an assigned class and create a material, assignment, quiz or test. Draft content stays hidden until its publish state permits student access. Students open due work, submit the allowed response or file, and later see the released grade and feedback.",
        ],
        points: [
          "Assignments, quizzes, tests, essays and materials",
          "Student submissions and teacher feedback",
          "Due work, completed work and progress context",
          "Class and subject aware access controls",
        ],
      },
      {
        title: "Assessments with server controlled attempts",
        paragraphs: [
          "Quiz and test attempts are controlled by the server, not the browser, so a retried submission cannot bypass the rules. Faculty review submissions, grade or return feedback, release results and close the activity.",
          "Live sessions can use a realtime channel when the school has it configured, and they still work through an ordinary refresh when it is not. Authorisation and the persisted workflow never depend on a live connection.",
        ],
      },
      {
        title: "Use LMS data responsibly",
        paragraphs: [
          "Learning records are authenticated school data. They stay inside tenant aware services and never appear on public pages, in offline caches or on search engine surfaces.",
          "Uploads go to private, tenant prefixed storage and restricted files are re authorised on every read. The installed PWA uses the same HTTPS API as the browser and never receives database credentials.",
        ],
      },
    ],
    related: [
      { href: "/features#assessment-workflows", label: "Exams and results", copy: "Exam plans, mark sheets, staggered release, report cards and hall tickets." },
      { href: "/features#attendance-workflows", label: "Attendance workflows", copy: "Registers, dated policies, corrections and student leave." },
      { href: "/features", label: "All platform features", copy: "Review the wider academic and school operations catalogue." },
    ],
    cta: { title: "See the LMS in your school's context.", copy: "Choose the classes and learning workflows that should lead a pilot.", href: "/contact", label: "Book an LMS demo" },
  },
  cbseSchools: {
    name: "For CBSE schools",
    intro:
      "Unifloe models the CBSE school shape from Nursery, LKG and UKG through Classes 1 to 12, across the Foundational, Preparatory, Middle and Secondary stages, with the registers and thresholds the affiliation bye laws expect.",
    highlights: [
      { title: "Nursery to Class 12", copy: "Pre primary, primary, middle, secondary and senior secondary bands in one structure." },
      { title: "Connected academics", copy: "Classes, sections, subjects, timetables, attendance and assessment share one structure." },
      { title: "School configured", copy: "The live structure comes from the school's own records during setup, not from a fixed demo." },
    ],
    sections: [
      {
        title: "Model the academic structure your school actually uses",
        paragraphs: [
          "Classes, sections, stages, subjects, faculty assignments and term context form the foundation for academic workflows. Unifloe uses those records as authorisation and routing inputs for timetables, attendance, marks, calendars, assignments and reporting.",
          "The public demo lets you explore school stages from Nursery through Class 12. During onboarding the production structure is configured from the school's own authorised records.",
        ],
      },
      {
        title: "Connect assessment, attendance and family communication",
        paragraphs: [
          "Faculty authority follows class and subject assignments. Attendance registers, academic calendars, assignments and marks stay connected to the correct section without giving every teacher blanket access.",
          "The attendance threshold defaults to 75 percent, the figure a CBSE school works to for board eligibility, and it is a school setting rather than a constant. Report cards are graded on the school's own scale, and hall tickets are only issued once the exam timetable is announced.",
        ],
        points: [
          "Stage, class, section and subject structures",
          "Faculty assignment and class teacher context",
          "Attendance, assessment and report workflows",
          "Guardian communication and consent records",
        ],
      },
      {
        title: "Registers and records a CBSE school keeps",
        paragraphs: [
          "The bye laws expect an admission and withdrawal register, a daily attendance register, a cumulative record for each student and staff records. Unifloe keeps the roster, the attendance history, released marks and staff documents, and exports attendance as a workbook.",
          "UDISE+ returns are prepared from the school's own exports. Unifloe does not integrate live with UDISE+ or APAAR, does not store Aadhaar numbers, and is not a government authority or certification body. Regulatory decisions and official submissions remain the school's.",
        ],
      },
    ],
    notice: "Unifloe is an independent PaperKite product. It is not affiliated with or approved by CBSE, the Government of India, APAAR or UDISE+.",
    related: [
      { href: "/apaar-readiness", label: "APAAR consent and UDISE+", copy: "What Unifloe records, and what it deliberately does not." },
      { href: "/features#assessment-workflows", label: "Exams and results", copy: "Mark sheets, staggered release, report cards and hall tickets." },
      { href: "/school-erp-software-india", label: "School ERP for India", copy: "Explore the wider operating system for Indian schools." },
    ],
    cta: { title: "Map Unifloe to your CBSE school.", copy: "Discuss stages, sections, subjects and the workflows to include first.", href: "/contact", label: "Book a CBSE school demo" },
  },
  apaar: {
    name: "APAAR readiness",
    intro:
      "APAAR is voluntary and needs a parent's consent. Unifloe records that consent separately from everything else, keeps the student identity records a school needs for UDISE+, and stores no Aadhaar number anywhere.",
    highlights: [
      { title: "Separate consent", copy: "APAAR generation has its own consent type, so a parent can consent to the school running on Unifloe and still decline APAAR." },
      { title: "No Aadhaar stored", copy: "Unifloe holds no Aadhaar number and never places one in a log, an export or a link." },
      { title: "Exports, not integrations", copy: "A UDISE+ return is prepared from the school's own extracts. There is no live connection to a government system." },
    ],
    sections: [
      {
        title: "Consent that is recorded on its own",
        paragraphs: [
          "Every consent record in Unifloe carries a type. Platform terms and data processing consent are needed to sign in. APAAR generation is a third, separate type, recorded only when a parent chooses it.",
          "Each record stores who consented, the verification method, the notice version, the purposes and the data categories. Withdrawal is a first class action and the whole history for a student can be reviewed.",
        ],
        points: [
          "Three consent types, recorded independently",
          "Verification method and notice version on every record",
          "Withdrawal recorded, never silently deleted",
          "Full consent history per student",
        ],
      },
      {
        title: "What Unifloe keeps for UDISE+",
        paragraphs: [
          "Every recognised school files annual data into UDISE+ with student level records keyed to the Permanent Education Number. Unifloe keeps the roster, class placement, attendance history and guardian links a school draws on for that return.",
          "The return itself is produced from exports. An earlier compliance module that generated UDISE+ and APAAR outputs was removed because nothing used it; if it returns, it returns as an export, not a live integration.",
        ],
      },
      {
        title: "Use readiness language accurately",
        paragraphs: [
          "Unifloe helps a school organise records and consent around APAAR. It does not issue APAAR IDs, certify a school, guarantee acceptance or replace official guidance.",
          "If a school collects Aadhaar for UDISE+ or APAAR, it should hold a masked reference and a verification outcome in Unifloe, never the number. Schools should verify current requirements and take appropriate guidance before making regulatory decisions.",
        ],
      },
    ],
    notice: "Unifloe is not APAAR certified, government approved or affiliated with the Government of India. This page describes product behaviour, not legal or regulatory advice.",
    related: [
      { href: "/data-privacy", label: "How school data is handled", copy: "Responsibilities, consent, safeguards and retention under the DPDP Act." },
      { href: "/for-cbse-schools", label: "CBSE school workflows", copy: "The academic structure around these records." },
      { href: "/features", label: "All features", copy: "Explore the registered modules by group." },
    ],
    cta: { title: "Review your school's consent and records workflow.", copy: "Discuss what is recorded, what is exported and what stays with the school.", href: "/contact", label: "Book a readiness conversation" },
  },
  dataPrivacy: {
    name: "School data privacy",
    intro:
      "Under the Digital Personal Data Protection Act the school is the Data Fiduciary and PaperKite is the Data Processor. This page says what each side carries, what Unifloe implements, and what remains the school's own job.",
    highlights: [
      { title: "Consent from the parent", copy: "A child's data needs a parent's own verifiable consent. There is deliberately no option for an administrator to consent on a parent's behalf." },
      { title: "Safeguards in the product", copy: "Hashed passwords, encrypted secrets, private tenant scoped files, structural tenant isolation, rate limits and a strict content security policy." },
      { title: "No tracking of children", copy: "No advertising, no third party analytics, no session replay and no cross site tracking anywhere in the product." },
    ],
    sections: [
      {
        title: "Who is responsible for what",
        paragraphs: [
          "The school decides the purpose and means of processing student, guardian and staff data, so it carries notice, consent, purpose limitation, accuracy, retention, responding to requests, breach notification and grievance redressal.",
          "PaperKite processes only on the school's instructions. It carries security safeguards, processing only under a written contract, assisting the school with requests and breach facts, deleting on instruction, and never using school data for its own purposes. A data processing agreement naming purposes, safeguards and the services Unifloe relies on is settled with each school before it goes live.",
        ],
        points: [
          "School: notice, consent, retention, grievance officer",
          "PaperKite: safeguards, contract, deletion on instruction",
          "Parent or guardian: consent for the child",
          "Every pilot student is a child under the Act",
        ],
      },
      {
        title: "Consent the way the Act describes it",
        paragraphs: [
          "The default basis is the parent's own act inside the product. A parent signs in and is held at the consent step until platform terms and data processing consent are both recorded. A school may instead rely on a signed admission form, but only if that form carries the DPDP notice, and each row must declare it.",
          "Every consent record stores the verification method, the notice version, the purposes and the data categories. Withdrawal is as easy as giving consent, and the full history for a student can be reviewed at any time.",
        ],
        points: [
          "Parent in app consent by default",
          "Signed admission form as a declared alternative",
          "Withdrawal recorded as a first class action",
          "APAAR consent kept separate and optional",
        ],
      },
      {
        title: "Security safeguards that are in the product",
        paragraphs: [
          "Passwords are hashed. Connection strings and integration secrets are encrypted at rest. Uploads are size limited, type checked, tenant prefixed, private and re authorised on every read. Every school record is read and written through a repository that cannot build a query without the school identity.",
          "The content security policy uses a per request nonce and blocks framing. Rate limits sit before any account lookup. Every authenticated response is marked private and never stored by a cache. Audit and error reports exclude passwords, tokens, request bodies, student names and guardian emails.",
        ],
        points: [
          "No card or bank details stored; payments are recorded at the school",
          "No Aadhaar numbers and no biometrics",
          "Blood group is the only health field, and the school can decide not to collect it",
          "Backups are encrypted and restore drills are part of admitting a school",
        ],
      },
      {
        title: "What is retained, and for how long",
        paragraphs: [
          "Email delivery history is compacted after 90 days. Password reset links last 30 minutes. One time codes last 10 minutes. Public demo changes live in the visitor's browser for 24 hours and never touch a real school. Sessions last 30 days by default.",
          "Chat messages and cold module history are archived on the school's rules and purged only after a verified backup exists, never while a legal hold is active. Statutory retention of financial, employment and admission records remains the school's own obligation.",
        ],
      },
      {
        title: "What stays with the school",
        paragraphs: [
          "The school publishes the privacy notice, names a grievance officer, decides the consent basis against its own admission form, and answers access, correction and erasure requests. Unifloe gives every person a view of their own data and lets the school correct records with an audit trail, but a formal request is still answered by the school.",
          "Breach notification to the Data Protection Board and to affected people is the school's duty. PaperKite provides the facts and monitoring, and the timelines are written into the agreement with each school. This page is engineering guidance, not legal advice, and it does not describe the product as automatically or completely DPDP compliant.",
        ],
      },
      {
        title: "Services Unifloe relies on",
        paragraphs: [
          "Unifloe runs as one application behind Nginx at go.unifloe.app. Records are stored in MongoDB Atlas, private files, archives and backups in Cloudflare R2, transactional email goes through Resend, school outbound email through the school's own Google account, error reporting through Sentry with scrubbing, and optional live updates through Ably.",
          "These are named as sub processors in the data processing agreement. Hosting regions are confirmed with each school against the residency requirements that apply to it.",
        ],
      },
    ],
    notice: "This page describes product controls that support a school's data governance under the DPDP Act. It is not legal advice or a certification of complete compliance, and dates, thresholds and commencement status should be confirmed with counsel.",
    related: [
      { href: "/apaar-readiness", label: "APAAR consent and UDISE+", copy: "What is recorded, what is exported and what is never stored." },
      { href: "/about", label: "About PaperKite and Unifloe", copy: "The operating and responsibility model." },
      { href: "/contact", label: "Discuss your requirements", copy: "Bring your school's privacy and governance questions to a focused conversation." },
    ],
    cta: { title: "Make data governance part of the demo.", copy: "Discuss consent basis, safeguards, retention and who does what.", href: "/contact", label: "Talk to PaperKite" },
  },
} as const satisfies Record<string, SeoPageContent>;
