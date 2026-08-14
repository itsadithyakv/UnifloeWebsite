export type SeoPageContent = {
  eyebrow: string;
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
    eyebrow: "About Unifloe",
    intro:
      "PaperKite creates and operates Unifloe, a school ERP and LMS built for Indian schools. Unifloe brings academic, administrative, financial, communication and campus work into one role-aware product.",
    highlights: [
      { title: "School-first product", copy: "Workflows start with the people, structures and responsibilities found inside a school." },
      { title: "Role-aware by design", copy: "Students, faculty, leaders and operational teams receive focused views backed by server-side permission checks." },
      { title: "Gradual rollout", copy: "Schools can begin with the workflows that matter most and expand their enabled modules over time." },
    ],
    sections: [
      {
        title: "PaperKite creates and operates Unifloe",
        paragraphs: [
          "Unifloe is PaperKite's school ERP and LMS for Indian schools. PaperKite develops and operates the product, while schools use Unifloe to connect teaching, attendance, fees, requests, communication and campus services around a shared school structure.",
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
      { href: "/pricing", label: "Compare pilot paths", copy: "Start with a defined school pilot before a wider rollout." },
      { href: "/contact", label: "Talk to PaperKite", copy: "Discuss your school priorities and the workflows to include first." },
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
      {
        id: "bengaluru-pilot",
        title: "Bengaluru pilot and onboarding support",
        paragraphs: [
          "Bengaluru is Unifloe's initial region for guided school pilots. PaperKite uses those conversations to map each school's board and stage structure, student capacity, current systems, highest-friction workflows and the people responsible for each process.",
          "Pilot modules, implementation shape, onboarding responsibilities and review milestones are agreed before work begins. Availability and timelines are confirmed directly; Unifloe does not claim a physical Bengaluru office or unpublished customer network.",
        ],
        points: [
          "Direct workflow-discovery conversations",
          "School structure and capacity review",
          "Defined pilot modules and responsibilities",
          "Onboarding milestones and success review",
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
      { href: "/features#assessment-workflows", label: "Assessment workflows", copy: "Connect questions, marks and report-card decisions to academic records." },
      { href: "/features#attendance-workflows", label: "Attendance workflows", copy: "Use class, assignment, correction and leave context across the academic day." },
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
      { href: "/features#assessment-workflows", label: "Assessment workflows", copy: "See connected assessment, marks and report-card decisions." },
      { href: "/school-erp-software-india", label: "School ERP for India", copy: "Explore the wider operating system for Indian schools." },
    ],
    cta: { title: "Map Unifloe to your CBSE school.", copy: "Discuss stages, sections, subjects and the workflows to include first.", href: "/contact", label: "Book a CBSE school demo" },
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
} as const satisfies Record<string, SeoPageContent>;
