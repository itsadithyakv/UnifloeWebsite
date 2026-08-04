export type SeoPageContent = {
  eyebrow: string;
  intro: string;
  highlights: Array<{ title: string; copy: string }>;
  sections: Array<{
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
    eyebrow: "About Unifloe",
    intro:
      "Unifloe is a multi-tenant school operating system built and operated by PaperKite. It brings academic, administrative, financial, communication and campus work into one role-aware product.",
    highlights: [
      { title: "School-first product", copy: "Workflows start with the people, structures and responsibilities found inside a school." },
      { title: "Role-aware by design", copy: "Students, faculty, leaders and operational teams receive focused views backed by server-side permission checks." },
      { title: "Gradual rollout", copy: "Schools can begin with the workflows that matter most and expand their enabled modules over time." },
    ],
    sections: [
      {
        title: "One connected operating system for schools",
        paragraphs: [
          "Schools often manage teaching, attendance, fees, requests, communication and campus services in separate tools. Unifloe is designed to connect those areas around a shared school structure instead of asking teams to repeatedly reconcile the same information.",
          "The platform covers web and installable PWA experiences, with selected mobile journeys using the same authenticated school APIs. Each school retains its own identity, enabled modules, academic structure and data boundary.",
        ],
      },
      {
        title: "Built around real responsibility boundaries",
        paragraphs: [
          "Visibility in the interface is not treated as authorization. Product services evaluate the signed-in actor, school tenant, role, module entitlement, assignment, ownership and workflow state before protected actions are allowed.",
          "PaperKite operates the platform control plane for institution onboarding, module entitlements, subscription administration and approved support communication. School-owned academic and operational decisions remain inside authorized school workflows.",
        ],
        points: [
          "Tenant-aware school records and platform records",
          "Role, assignment and ownership checks",
          "Audited high-impact changes and approvals",
          "Private school uploads and controlled delivery",
        ],
      },
      {
        title: "Practical progress, not inflated claims",
        paragraphs: [
          "Unifloe has a catalogue of 65 registered modules. Some have dedicated workspaces and domain services, some share richer grouped workspaces, and some remain configurable manifest-driven surfaces until a school needs a specialized flow.",
          "Demo and onboarding conversations therefore focus on the workflows a school intends to use, the current implementation shape, required integrations and a realistic rollout sequence.",
        ],
      },
    ],
    related: [
      { href: "/features", label: "Explore the platform", copy: "Review Unifloe's registered academic, finance, campus and governance modules." },
      { href: "/data-privacy", label: "Review data practices", copy: "See the product controls that support privacy-conscious school workflows." },
      { href: "/pricing", label: "Compare pilot paths", copy: "Start with a defined school pilot before a wider rollout." },
    ],
    cta: { title: "See how PaperKite can map Unifloe to your school.", copy: "Share your priorities and receive a focused product conversation.", href: "/contact", label: "Book a school demo" },
  },
  schoolErpIndia: {
    eyebrow: "School ERP software for India",
    intro:
      "Unifloe connects academic, administrative, financial, communication and campus workflows for Indian schools without forcing every role into the same generic screen.",
    highlights: [
      { title: "ERP and LMS together", copy: "School operations and digital learning work from a connected academic and identity structure." },
      { title: "Built for Indian schools", copy: "CBSE-first demo structures, Indian pricing and readiness workflows reflect local school operations." },
      { title: "Configurable by school", copy: "Branding, terminology, modules and academic structures can be adapted to each institution." },
    ],
    sections: [
      {
        title: "Replace fragmented school operations with connected workflows",
        paragraphs: [
          "Attendance, fees, assignments, requests, announcements and campus services depend on many of the same students, families, staff, classes and permissions. Unifloe brings these workflows into one role-aware system so information can move through the school without repeated spreadsheets and informal handoffs.",
          "Leadership receives aggregate operational views, faculty work from their assigned classes and subjects, and students or guardians see only the records and services connected to them.",
        ],
        points: [
          "Academic structures, timetables and attendance",
          "Assignments, materials, assessment and feedback",
          "Fees, dues, receipts and concessions",
          "Announcements, requests and school services",
        ],
      },
      {
        title: "Start from school structure and responsibility",
        paragraphs: [
          "Each school is treated as a tenant with its own branding, enabled modules, capabilities, users and data boundary. Server-side policies repeat tenant and actor checks even when the interface has already hidden an unavailable action.",
          "Class-teacher, subject and ownership authority comes from assignments rather than broad labels. This allows attendance, marks, calendars and LMS work to follow the people who are responsible for a specific class or learner.",
        ],
      },
      {
        title: "Roll out the workflows your school is ready to adopt",
        paragraphs: [
          "A school does not need to activate every registered module on day one. A pilot can begin with a defined set of workflows, confirm the school structure and responsibilities, and expand once staff are comfortable.",
          "Final scope, configured modules, integrations and onboarding milestones are agreed before rollout. Generic catalogue surfaces are not presented as completed specialized implementations.",
        ],
      },
    ],
    related: [
      { href: "/features", label: "Explore ERP and LMS features", copy: "See how registered modules are grouped across the school." },
      { href: "/for-cbse-schools", label: "Unifloe for CBSE schools", copy: "Review CBSE-first academic structures and use cases." },
      { href: "/pricing", label: "Review pilot pricing", copy: "Compare pilot and annual paths for different school sizes." },
    ],
    cta: { title: "Plan a connected school rollout.", copy: "Tell PaperKite which workflows create the most friction today.", href: "/contact", label: "Discuss your school" },
  },
  schoolLms: {
    eyebrow: "Connected school LMS",
    intro:
      "Unifloe's LMS supports assignments, learning materials, submissions, quizzes, assessment and feedback while staying connected to the school's classes, people and communication workflows.",
    highlights: [
      { title: "Built around assignments", copy: "Faculty create due work and materials while students see current and completed activity." },
      { title: "Connected context", copy: "Class, subject, timetable and communication context come from the same school structure." },
      { title: "Role-scoped access", copy: "Faculty work within assigned classes and students access their own learning activity." },
    ],
    sections: [
      {
        title: "Keep teaching and learning connected to the school day",
        paragraphs: [
          "A standalone learning portal can become another place that teachers and families must keep in sync. Unifloe connects LMS activity to subjects, class sections, faculty assignments and the role inbox so learning tasks sit alongside the rest of school life.",
          "Students can find due work and completed submissions while faculty create assignments, quizzes, tests, essays and materials for the classes they are authorized to teach.",
        ],
        points: [
          "Assignments, quizzes, tests, essays and materials",
          "Student submissions and teacher feedback",
          "Due work, completed work and progress context",
          "Class- and subject-aware access controls",
        ],
      },
      {
        title: "Support a clearer learning workflow",
        paragraphs: [
          "Faculty can move from lesson context to learning activity without rebuilding the same class and subject information. Students receive a focused view of what requires attention rather than an administrative workspace.",
          "When configured, realtime updates can support active assessment state. The product retains a non-realtime fallback so the underlying authorization and persisted workflow do not depend on a live connection.",
        ],
      },
      {
        title: "Use LMS data responsibly",
        paragraphs: [
          "Learning records are authenticated school data. They remain inside tenant-aware services and are not included in public marketing pages, offline public caches or search-engine surfaces.",
          "Uploads use private, tenant-prefixed storage and restricted files require authenticated reads. Mobile and PWA clients use the same HTTPS API boundaries rather than receiving database credentials.",
        ],
      },
    ],
    related: [
      { href: "/exam-management", label: "Exam management", copy: "Connect question, assessment, marks and report-card workflows." },
      { href: "/attendance-management", label: "Attendance management", copy: "Use class and assignment context across the academic day." },
      { href: "/features", label: "All platform features", copy: "Review the wider academic and school operations catalogue." },
    ],
    cta: { title: "See the LMS in your school's context.", copy: "Choose the classes and learning workflows that should lead a pilot.", href: "/contact", label: "Book an LMS demo" },
  },
  cbseSchools: {
    eyebrow: "For CBSE schools",
    intro:
      "Unifloe uses a CBSE-first school structure covering Nursery, LKG, UKG and Grades 1–12 across Foundational, Preparatory, Middle and Secondary stages.",
    highlights: [
      { title: "Nursery to Grade 12", copy: "Demo structures span pre-primary, primary, middle and secondary school journeys." },
      { title: "Connected academics", copy: "Classes, sections, subjects, timetables, attendance and assessment share one structure." },
      { title: "School-configured", copy: "Production structure comes from each school's authorized records, not a fixed demo selector." },
    ],
    sections: [
      {
        title: "Model the academic structure your school actually uses",
        paragraphs: [
          "Classes, sections, stages, subjects, faculty assignments and term context form the foundation for academic workflows. Unifloe uses those records as authorization and routing inputs for timetables, attendance, marks, calendars, LMS activity and reporting.",
          "The CBSE-first demo makes it possible to explore age-appropriate school stages from Nursery through Grade 12. During onboarding, the production structure is configured from the school's own authorized records.",
        ],
      },
      {
        title: "Connect assessment, attendance and family communication",
        paragraphs: [
          "Faculty authority follows class and subject assignments. Attendance registers, academic calendars, assignments and marks can therefore stay connected to the correct section without giving every teacher blanket access.",
          "Published announcements, due work, timetable changes and progress information can reach the relevant role inbox and dashboard while remaining scoped to authorized recipients.",
        ],
        points: [
          "Stage, class, section and subject structures",
          "Faculty assignment and class-teacher context",
          "Attendance, assessment and report workflows",
          "Guardian communication and consent records",
        ],
      },
      {
        title: "Support readiness without overstating affiliation",
        paragraphs: [
          "Unifloe includes workflows for curriculum readiness, UDISE+, APAAR and Holistic Progress Card operations. These tools organize school records, validation and authorized decisions; they do not make Unifloe a government authority or certification body.",
          "Schools remain responsible for their regulatory decisions, official submissions and interpretation of applicable requirements.",
        ],
      },
    ],
    notice: "Unifloe is an independent PaperKite product. It is not affiliated with or approved by CBSE, the Government of India, APAAR or UDISE+.",
    related: [
      { href: "/apaar-readiness", label: "APAAR readiness", copy: "Review structured records, consent and readiness checks." },
      { href: "/exam-management", label: "Exam management", copy: "See connected assessment and report-card workflows." },
      { href: "/school-erp-software-india", label: "School ERP for India", copy: "Explore the wider operating system for Indian schools." },
    ],
    cta: { title: "Map Unifloe to your CBSE school.", copy: "Discuss stages, sections, subjects and the workflows to include first.", href: "/contact", label: "Book a CBSE school demo" },
  },
  attendance: {
    eyebrow: "Attendance management",
    intro:
      "Unifloe connects attendance registers, collection policies, correction approvals, student leave and role-scoped reports to the school's academic structure.",
    highlights: [
      { title: "Policy-aware registers", copy: "Collection windows can reflect hourly, morning-only or split-day attendance policies." },
      { title: "Assignment-scoped faculty", copy: "Register ownership follows authorized class, section and subject assignments." },
      { title: "Audited corrections", copy: "Disputed records move through a leadership decision instead of silent editing." },
    ],
    sections: [
      {
        title: "Give each register the right academic context",
        paragraphs: [
          "Attendance sessions carry their policy version, collection window, section, subject or period coverage and owning teacher. This preserves the meaning of historical records when a school changes its future attendance policy.",
          "Faculty open registers for the students and teaching context they are assigned. Leadership roles can review broader patterns without turning a convenient dashboard into unrestricted raw-record access.",
        ],
      },
      {
        title: "Handle corrections and leave as real workflows",
        paragraphs: [
          "A correction request records the disputed session and supporting details. Head Admin or Principal roles can approve or reject it, and an approved change updates the authorized record with audit history.",
          "Student attendance leave is kept separate from staff and hostel leave. A school can configure whether student leave requires approval while preserving the school, student and decision context.",
        ],
        points: [
          "Effective-dated attendance policies",
          "Register confirmation and ownership",
          "Correction requests and leadership review",
          "Student leave applications and reports",
        ],
      },
      {
        title: "Make attendance useful to each role",
        paragraphs: [
          "Students see only their own totals, subject breakdown, dated absence history, threshold guidance and permitted reports. Faculty focus on the registers they own, while leaders can review patterns and pending decisions.",
          "Attendance context can also support dashboards, reporting and school communications without exposing student-level records on public or unauthenticated routes.",
        ],
      },
    ],
    related: [
      { href: "/school-erp-software-india", label: "Connected school ERP", copy: "See how attendance fits the wider school structure." },
      { href: "/for-cbse-schools", label: "CBSE school workflows", copy: "Review stages, classes and academic context." },
      { href: "/data-privacy", label: "School data privacy", copy: "Understand tenant, role and audit boundaries." },
    ],
    cta: { title: "Review your school's attendance workflow.", copy: "Bring your current policy, register structure and correction process to a focused demo.", href: "/contact", label: "Book an attendance demo" },
  },
  fees: {
    eyebrow: "Fee management",
    intro:
      "Unifloe supports school-owned fee obligations, dues, payments, receipts, concessions and reporting while keeping family-fee money separate from PaperKite subscription billing.",
    highlights: [
      { title: "School-owned collections", copy: "A school's family-fee gateway and reconciliation remain distinct from Unifloe subscription billing." },
      { title: "Clear obligations", copy: "Charges, dues, concessions, receipts and payment history stay connected to authorized student records." },
      { title: "Audited decisions", copy: "High-impact concessions and financial actions can use explicit approval and audit history." },
    ],
    sections: [
      {
        title: "Follow the full school fee journey",
        paragraphs: [
          "Authorized finance staff can create a student charge or derive a valid school fee obligation, then track dues, payments, receipts and outstanding balances. Family-facing views can show the records connected to the signed-in student without opening the wider finance workspace.",
          "Concessions and other sensitive adjustments can follow school policy, approval and audit requirements rather than being handled as untraceable edits.",
        ],
        points: [
          "Fee obligations and due schedules",
          "Payments, receipts and outstanding balances",
          "Concessions, approvals and audit context",
          "School-scoped collection reporting",
        ],
      },
      {
        title: "Keep school money and platform billing separate",
        paragraphs: [
          "PaperKite subscription billing pays for the Unifloe platform. Family-fee payments belong to the school and use a separately configured, school-owned payment scope.",
          "Platform billing credentials never authorize school fee collection. This separation is part of the product boundary and should remain clear during integration and onboarding discussions.",
        ],
      },
      {
        title: "Connect finance without broadening access",
        paragraphs: [
          "Financial views are role-aware and tenant-scoped. A dashboard summary does not grant access to every underlying transaction, and clients never receive payment secrets or database credentials.",
          "Final gateway configuration, settlement behavior and participating finance workflows are confirmed with each school before rollout.",
        ],
      },
    ],
    related: [
      { href: "/pricing", label: "Unifloe pricing", copy: "Compare platform pilot and annual subscription plans." },
      { href: "/data-privacy", label: "Financial data boundaries", copy: "Review role, tenant and audit protections." },
      { href: "/features", label: "Administration features", copy: "Explore finance alongside approvals and people workflows." },
    ],
    cta: { title: "Map fees and collections to your school policy.", copy: "Discuss obligations, approvals, family views and the required gateway boundary.", href: "/contact", label: "Book a fee workflow demo" },
  },
  exams: {
    eyebrow: "Exam management",
    intro:
      "Unifloe connects exam planning, assessments, question workflows, marks, publication decisions and report cards to authorized classes and student records.",
    highlights: [
      { title: "Assessment planning", copy: "Organize exam calendars, subjects, components and academic context." },
      { title: "Question workflows", copy: "Build reusable question libraries and prepare school-owned paper sets." },
      { title: "Controlled publication", copy: "Marks and reports move through authorized release decisions and audit context." },
    ],
    sections: [
      {
        title: "Move from assessment structure to published results",
        paragraphs: [
          "Exam, gradebook, marks and report-card modules work from the school's academic structure. Faculty access follows assigned subjects and sections, while leadership receives the broader review and publication authority configured for the workflow.",
          "Assessment components, marks and student history remain connected instead of being repeatedly transferred between paper registers and isolated files.",
        ],
      },
      {
        title: "Build school-owned questions and papers",
        paragraphs: [
          "Question libraries can classify content by grade, subject, chapter, topic, difficulty and marks. Review and approval steps help schools prepare reusable questions, editable paper sets, answer keys and marking guidance.",
          "The product should be evaluated against the exact paper-setting and assessment flow a school intends to use. Registered catalogue surfaces are not assumed to be identical to every school's specialized process.",
        ],
        points: [
          "Question classification and reusable libraries",
          "Paper structures, answer keys and marking guides",
          "Marks entry, grade calculations and history",
          "Authorized result and report-card publication",
        ],
      },
      {
        title: "Protect student assessment records",
        paragraphs: [
          "Marks and reports are sensitive school data. Students read their own permitted records, faculty work within assignment scope, and protected corrections or releases use server-side authority checks.",
          "High-impact academic changes create audit context so the school can review who acted, which learner or assessment was affected, and the outcome.",
        ],
      },
    ],
    related: [
      { href: "/school-lms", label: "Connected school LMS", copy: "Link assessments to assignments, submissions and feedback." },
      { href: "/for-cbse-schools", label: "CBSE school use cases", copy: "See assessment in a Nursery-to-Grade-12 structure." },
      { href: "/features", label: "Academic modules", copy: "Review the wider academics and reporting catalogue." },
    ],
    cta: { title: "Walk through your exam cycle.", copy: "Use a demo to review planning, papers, marks, approvals and reports.", href: "/contact", label: "Book an exam workflow demo" },
  },
  apaar: {
    eyebrow: "APAAR readiness",
    intro:
      "Unifloe supports school workflows around structured student records, UDISE+ readiness, guardian consent and APAAR status tracking without presenting itself as a certification authority.",
    highlights: [
      { title: "Structured records", copy: "Organize identity and academic information used by authorized readiness workflows." },
      { title: "Consent-aware", copy: "Track guardian consent as a separate requirement before an APAAR status can be marked generated." },
      { title: "Readiness checks", copy: "Identify missing student, teacher and infrastructure fields before preparing an export." },
    ],
    sections: [
      {
        title: "Prepare the records before the submission step",
        paragraphs: [
          "Readiness begins with the quality and completeness of school records. Unifloe's compliance services can identify missing student, teacher and infrastructure information used by the school's UDISE+ preparation workflow.",
          "An export is prepared only after the configured readiness validation succeeds. Official submission, acceptance and interpretation remain the responsibility of the school and the applicable government system.",
        ],
      },
      {
        title: "Keep APAAR consent and status visible",
        paragraphs: [
          "APAAR status tracking can distinguish not started, pending match review, pending consent, generated and failed states. A generated status requires readiness checks, active guardian APAAR consent and a valid identifier in the authorized workflow.",
          "Consent records are stored separately from a general platform agreement so the school can review the purpose and status relevant to APAAR generation.",
        ],
        points: [
          "UDISE+ readiness validation",
          "Guardian APAAR consent records",
          "Student status and match-review tracking",
          "Authorized export and audit context",
        ],
      },
      {
        title: "Use readiness language accurately",
        paragraphs: [
          "Unifloe can help organize the data and workflow a school uses when preparing for APAAR-related operations. It does not issue APAAR IDs, certify a school, guarantee acceptance or replace official guidance.",
          "Schools should verify current requirements and obtain appropriate professional or government guidance before making regulatory decisions.",
        ],
      },
    ],
    notice: "Unifloe is not APAAR certified, government approved or affiliated with the Government of India. This page describes product workflow support, not legal or regulatory advice.",
    related: [
      { href: "/data-privacy", label: "Data privacy and DPDP readiness", copy: "Review consent, tenant and access-control boundaries." },
      { href: "/for-cbse-schools", label: "CBSE school workflows", copy: "See the academic structure surrounding readiness records." },
      { href: "/features", label: "Compliance features", copy: "Explore governance, reporting and school-record modules." },
    ],
    cta: { title: "Review your school's readiness workflow.", copy: "Discuss records, consent and operational steps without unsupported certification claims.", href: "/contact", label: "Book a readiness demo" },
  },
  dataPrivacy: {
    eyebrow: "School data privacy",
    intro:
      "Unifloe supports privacy-conscious school data workflows through tenant boundaries, server-side authorization, guardian consent, audit history and controlled file delivery.",
    highlights: [
      { title: "Tenant boundaries", copy: "School-owned records are scoped to the authenticated institution instead of caller-supplied identifiers." },
      { title: "Server authorization", copy: "Roles, assignments, ownership and entitlements are checked behind the interface." },
      { title: "Purposeful records", copy: "Consent, audit and private-upload workflows preserve relevant context without publishing school data." },
    ],
    sections: [
      {
        title: "Treat visibility and authorization as different concerns",
        paragraphs: [
          "A hidden link is not a security boundary. Unifloe's protected services resolve the authenticated actor and school, then evaluate roles, enabled modules, permissions, assignments, ownership, guardian links and workflow state as applicable.",
          "Sensitive services repeat school and actor checks even when a shared route wrapper has already performed a broader authorization step.",
        ],
      },
      {
        title: "Keep school, platform and mixed data in the right scope",
        paragraphs: [
          "School academic, financial, people and operations data belongs to a school tenant. PaperKite institution and subscription administration stays in platform scope, while carefully defined mixed workflows coordinate identity with school-owned records.",
          "Private uploads use tenant-prefixed storage and restricted files require authenticated delivery. Clients receive controlled application responses, not database credentials or unrestricted object-store access.",
        ],
        points: [
          "Tenant-aware repositories and private uploads",
          "Guardian links and purpose-specific consent",
          "Audited marks, attendance and permission changes",
          "Network-only authenticated PWA data",
        ],
      },
      {
        title: "Support DPDP readiness without claiming complete compliance",
        paragraphs: [
          "Technology controls are only one part of a school's data-governance responsibilities. Unifloe provides tools that can support consent, access, correction, audit and controlled data handling processes.",
          "Configuration, school policy, contractual terms, operational practice and applicable legal interpretation remain necessary. PaperKite does not describe the product as automatically or completely DPDP compliant.",
        ],
      },
    ],
    notice: "This page describes product controls that may support school data-governance and DPDP-readiness processes. It is not legal advice or a certification of complete DPDP compliance.",
    related: [
      { href: "/apaar-readiness", label: "APAAR readiness", copy: "See how guardian consent and structured records support readiness work." },
      { href: "/about", label: "About PaperKite and Unifloe", copy: "Review the product's operating and responsibility model." },
      { href: "/contact", label: "Discuss your requirements", copy: "Bring your school's privacy and governance questions to a focused conversation." },
    ],
    cta: { title: "Make data-governance questions part of the demo.", copy: "Discuss tenant scope, access, consent, audit and rollout responsibilities.", href: "/contact", label: "Talk to PaperKite" },
  },
  bengaluru: {
    eyebrow: "Bengaluru school pilot",
    intro:
      "Unifloe is initially focusing its school pilot and onboarding availability on Bengaluru, with direct PaperKite guidance from workflow discovery through rollout planning.",
    highlights: [
      { title: "Initial pilot region", copy: "Bengaluru schools are the first local focus for guided product conversations and pilot planning." },
      { title: "Direct support", copy: "Schools can speak with PaperKite about their structure, priorities and rollout sequence." },
      { title: "Defined pilot scope", copy: "Participating modules, capacity and onboarding steps are agreed before the pilot begins." },
    ],
    sections: [
      {
        title: "A local starting point for a connected school platform",
        paragraphs: [
          "Bengaluru schools often combine established academic processes with rapidly changing expectations for digital learning, family communication and operational visibility. Unifloe brings these areas into one configurable ERP and LMS.",
          "The initial Bengaluru focus lets PaperKite keep early onboarding conversations direct and practical without claiming an office location, customer count or network of pilot schools that has not been published.",
        ],
      },
      {
        title: "Build the pilot around the school's priorities",
        paragraphs: [
          "A pilot conversation starts with the school board and stage structure, student strength, current systems, highest-friction workflows and the staff who own each process.",
          "PaperKite then maps a realistic first set of modules, confirms what is dedicated, grouped or configurable in the current product, and agrees the onboarding scope before work begins.",
        ],
        points: [
          "School structure and student capacity",
          "Priority academic and operational workflows",
          "Staff responsibility and approval paths",
          "Pilot modules, onboarding and success review",
        ],
      },
      {
        title: "Contact Unifloe directly",
        paragraphs: [
          "Schools can call +91 9686110206 or email adithya@unifloe.app to discuss current Bengaluru onboarding availability. The public enquiry form asks only for business contact and school-fit information, not student records.",
          "Availability, timelines and final scope are confirmed directly. This page does not claim a physical Bengaluru office or LocalBusiness presence.",
        ],
      },
    ],
    related: [
      { href: "/school-erp-software-india", label: "School ERP for India", copy: "Explore the wider product and operating model." },
      { href: "/pricing", label: "Pilot and annual pricing", copy: "Compare current capacity and rollout paths." },
      { href: "/for-cbse-schools", label: "CBSE school use cases", copy: "Review CBSE-first academic structures and workflows." },
    ],
    cta: { title: "Check Bengaluru pilot availability.", copy: "Share your school size, priorities and preferred time for a product conversation.", href: "/contact", label: "Contact Unifloe" },
  },
} as const satisfies Record<string, SeoPageContent>;
