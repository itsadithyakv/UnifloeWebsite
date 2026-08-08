export type NavItem = { label: string; href: string };

export const totalModuleCount = 65;

export type FeatureModule = {
  name: string;
  summary: string;
  features: string[];
};

export type FeatureGroup = {
  title: string;
  description: string;
  icon: "academics" | "student" | "admin" | "community" | "campus" | "governance";
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
  { label: "ERP for India", href: "/school-erp-software-india" },
  { label: "School LMS", href: "/school-lms" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigationGroups: Array<{ title: string; links: NavItem[] }> = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing & pilots", href: "/pricing" },
      { label: "School ERP for India", href: "/school-erp-software-india" },
      { label: "Connected school LMS", href: "/school-lms" },
      { label: "About Unifloe", href: "/about" },
    ],
  },
  {
    title: "Schools & readiness",
    links: [
      { label: "For CBSE schools", href: "/for-cbse-schools" },
      { label: "APAAR readiness", href: "/apaar-readiness" },
      { label: "School data privacy", href: "/data-privacy" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
];

export const featureGroups: FeatureGroup[] = [
  {
    title: "Academics & LMS",
    description: "Teaching, learning, assessment, and academic progress in one place.",
    icon: "academics",
    modules: [
      {
        name: "Academic management",
        summary: "Run the complete academic journey without duplicating information between registers, files, and disconnected tools.",
        features: ["Student and teacher attendance", "Grades, sections and subjects", "Academic calendars", "Class and teacher timetables", "Lesson planning and syllabus tracking", "Homework and assignments", "Study materials", "Student progress and performance reports", "Remedial and improvement tracking", "Promotion and graduation management"],
      },
      {
        name: "Learning management system",
        summary: "Extend structured learning beyond the classroom with courses, resources, assessment, and feedback.",
        features: ["Digital classes and courses", "Video and document lessons", "Online assignments", "Quizzes and assessments", "Student submissions", "Teacher feedback", "Course progress tracking", "Skill-development courses", "Revision and supplementary resources", "Certificates for completed courses", "Built-in educational content"],
      },
      {
        name: "Examination management",
        summary: "Plan assessments, capture results, and create consistent report cards around the school’s academic model.",
        features: ["Exam calendars and schedules", "Subject-wise and internal assessments", "Practical examinations", "Marks entry", "Grade calculations", "Weightage management", "Report cards", "Rank and performance analysis", "Student result history", "Re-evaluation records", "Promotion decisions"],
      },
      {
        name: "Paper Set & question bank",
        summary: "Build reusable school-owned question libraries and generate papers to an approved structure.",
        features: ["Grade, subject, chapter and topic classification", "Difficulty and marks tagging", "Images and diagrams", "Teacher-created questions", "Administrator review and approval", "Automatic paper generation", "Custom sections and mark combinations", "Multiple editable paper sets", "Answer keys and marking guides", "School-specific paper templates"],
      },
    ],
  },
  {
    title: "Student Journey",
    description: "One evolving record from enquiry to graduation.",
    icon: "student",
    modules: [
      {
        name: "Student information management",
        summary: "Maintain a complete student record that grows throughout the learner’s time at school.",
        features: ["Personal and family information", "Admission details", "Academic and attendance history", "Results and certificates", "Scholarships and awards", "Sports, cultural and club participation", "Health and behaviour records", "Uploaded documents", "Transfer and leaving records"],
      },
      {
        name: "Admissions & enrolment",
        summary: "Manage the admission journey from first enquiry through review, selection, and enrolment.",
        features: ["Admission enquiries", "Online applications", "Applicant tracking", "Document collection and verification", "Entrance assessments", "Interview management", "Selection and rejection tracking", "Admission fee collection", "Waiting lists", "Enrolment and admission reports"],
      },
      {
        name: "Certificates & achievements",
        summary: "Preserve academic, cultural, sporting, leadership, and skill achievements as part of the learner profile.",
        features: ["Academic awards", "Competition participation", "Sports and cultural achievements", "Club participation", "Leadership roles", "Volunteering", "Skill certifications", "Workshops and training", "School-issued and external certificates"],
      },
      {
        name: "Documents & digital records",
        summary: "Organise important student, staff, school, vehicle, vendor, and compliance records with controlled access.",
        features: ["Student identification", "Birth and transfer certificates", "Academic certificates", "Staff documents", "Recognition documents", "Vehicle and vendor records", "Consent and medical forms", "Policies and circulars", "Compliance records"],
      },
    ],
  },
  {
    title: "Administration & Finance",
    description: "Fees, people, requests, and approvals without scattered handoffs.",
    icon: "admin",
    modules: [
      {
        name: "Fees & finance",
        summary: "Define fee structures, track collections, and give families and administrators a reliable financial view.",
        features: ["Tuition, transport, hostel and activity fees", "Discounts, concessions and scholarships", "Instalment plans", "Online and offline payments", "Receipts and reminders", "Late fees and refunds", "Outstanding payment reports", "Income and expense records", "Financial reports"],
      },
      {
        name: "Teacher & staff management",
        summary: "Support the staff lifecycle from recruitment and onboarding through attendance, performance, and exit.",
        features: ["Employee profiles and documents", "Recruitment records", "Attendance and leave", "Schedules and departments", "Teacher workloads", "Substitute allocation", "Payroll information", "Performance reviews", "Training records", "Internal requests and exit management"],
      },
      {
        name: "Requests & approvals",
        summary: "Replace informal follow-ups with clear, traceable approvals that reflect school policy.",
        features: ["Student and staff leave", "Bonafide and transfer certificates", "Document requests", "Fee concessions", "Purchase and maintenance requests", "Event approvals", "Transport changes", "Gate passes and visitor permissions", "Reimbursements", "Academic corrections and custom requests"],
      },
    ],
  },
  {
    title: "Community & Wellbeing",
    description: "Communication, participation, wellbeing, and support around every learner.",
    icon: "community",
    modules: [
      {
        name: "Parent communication",
        summary: "Create an official, organised connection between the school and families without scattered message groups.",
        features: ["Announcements and notices", "Emergency alerts", "Attendance and assignment updates", "Exam and fee reminders", "Event invitations", "Progress updates", "Teacher-parent communication", "Meeting scheduling", "Permissions, circulars, surveys and feedback"],
      },
      {
        name: "Events & activities",
        summary: "Plan academic, sporting, cultural, and institutional events and preserve participation outcomes.",
        features: ["School calendars", "Event planning and registration", "Student participation", "Staff responsibilities", "Parent invitations", "Permission collection", "Attendance", "Results and awards", "Announcements, certificates and reports"],
      },
      {
        name: "Clubs, sports & co-curriculars",
        summary: "Recognise the complete development of students across teams, houses, clubs, leadership, and competitions.",
        features: ["Clubs and societies", "Sports teams and house systems", "Student leadership", "Competitions and training", "Participation and attendance", "Achievements", "Mentors and coaches", "Certificates and inter-school events"],
      },
      {
        name: "Health & wellbeing",
        summary: "Securely maintain sensitive health and wellbeing information for authorised staff.",
        features: ["Medical information and allergies", "Emergency contacts", "Health incidents and infirmary visits", "Medication and vaccination records", "Health documents", "Counselling records", "Wellbeing observations", "Parent notifications and emergency reports"],
      },
      {
        name: "Discipline & student support",
        summary: "Record concerns, interventions, and positive progress with a focus on student improvement.",
        features: ["Behaviour observations", "Disciplinary incidents and warnings", "Parent communication", "Counselling referrals", "Corrective actions", "Improvement plans", "Follow-up records", "Positive behaviour recognition"],
      },
    ],
  },
  {
    title: "Campus Operations",
    description: "Campus resources and services connected to the wider school.",
    icon: "campus",
    modules: [
      {
        name: "Library management",
        summary: "Manage physical and digital library resources as part of the wider school system.",
        features: ["Book catalogues", "Issue and return", "Student and staff borrowing", "Due-date tracking", "Fine management", "Lost and damaged books", "Reservations and membership", "Digital resources", "Reading history and inventory reports"],
      },
      {
        name: "Transport management",
        summary: "Organise routes, vehicles, staff, students, documents, and parent transport updates.",
        features: ["Bus and vehicle records", "Routes and stops", "Driver and attendant records", "Student assignments", "Transport fees", "Vehicle documents and maintenance", "Transport attendance", "Parent updates", "Route changes and emergency communication"],
      },
      {
        name: "Hostel management",
        summary: "Run residential operations alongside each student’s academic and administrative record.",
        features: ["Buildings, rooms and beds", "Student allocation", "Hostel attendance", "Warden management", "Visitor records", "Leave requests", "Meal information", "Hostel fees", "Maintenance, complaints and incidents", "Room changes"],
      },
      {
        name: "Campus & facility management",
        summary: "Give leadership visibility into spaces, assets, inventory, maintenance, purchasing, and campus safety.",
        features: ["Rooms and facility bookings", "Asset and equipment tracking", "Maintenance and repairs", "Inventory and consumables", "Vendors and purchase requests", "Security and visitor records", "Gate passes", "Lost and found", "Incident reporting", "Cleaning and maintenance schedules"],
      },
    ],
  },
  {
    title: "Governance, Compliance & Insights",
    description: "Structured records, permissions, insight, and adaptable workflows.",
    icon: "governance",
    modules: [
      {
        name: "Compliance & school records",
        summary: "Support organised workflows around APAAR, UDISE+, NEP 2020, consent, access, and the DPDP framework.",
        features: ["Structured student and institutional records", "Identity and academic history", "Certificates, achievements and scholarships", "Consent and parent permissions", "Data access controls", "Record correction workflows", "Document expiry tracking", "Institutional reporting", "Audit records", "Data export and reminders"],
      },
      {
        name: "Reports & school insights",
        summary: "Turn connected school information into useful operational and management views.",
        features: ["Attendance and academic trends", "Fee collections and outstanding payments", "Admissions and student strength", "Teacher workloads and staff attendance", "Exam and subject performance", "Student improvement", "Transport and library usage", "Campus requests", "Compliance readiness", "Department performance"],
      },
      {
        name: "Custom school workflows",
        summary: "Adapt Unifloe to the institution’s own structure, terminology, permissions, and processes.",
        features: ["Approval levels", "Academic structures", "Roles and departments", "Forms and requests", "Notifications and reports", "Permissions", "School terminology", "Custom modules and workflows"],
      },
      {
        name: "Institution-branded experience",
        summary: "Present a focused platform that feels like a natural extension of the school.",
        features: ["School logo, name and colours", "Configurable modules", "School terminology and workflows", "Five ready-made themes", "Desktop, tablet and mobile access", "Role-focused experiences", "Progressive rollout as the school grows"],
      },
    ],
  },
];

export const pilotPlans: PricingPlan[] = [
  {
    name: "Pilot Free",
    price: "₹0",
    cadence: "for one full year",
    audience: "A focused first step for one grade.",
    capacity: "Up to 100 students",
    highlights: ["One grade", "12-month pilot", "Agreed pilot modules", "Guided evaluation"],
    cta: "Apply for the free pilot",
    href: "/contact?interest=pilot-free",
  },
  {
    name: "Pilot Starter",
    price: "₹8,000",
    cadence: "for one full year",
    audience: "Pilot the platform across a larger school cohort.",
    capacity: "Up to 700 students",
    highlights: ["12-month pilot", "About ₹0.95/student/month", "Connected ERP + LMS", "Pilot onboarding"],
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
    audience: "For modern schools building one connected operating layer.",
    capacity: "700 students included",
    highlights: ["Core ERP + LMS platform", "Role-based experiences", "Privacy-conscious workflows", "Add up to 1,000 students"],
    cta: "Discuss Starter",
    href: "/contact?interest=starter",
  },
  {
    name: "Growth",
    price: "₹80,000",
    cadence: "per year",
    audience: "For larger schools ready to connect more learners and workflows.",
    capacity: "2,500 students included",
    highlights: ["Expanded school scale", "Connected governance and insights", "Custom workflows", "Add up to 1,000 students"],
    cta: "Discuss Growth",
    href: "/contact?interest=growth",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Let’s talk",
    cadence: "custom annual scope",
    audience: "For groups, complex institutions, and tailored operating models.",
    capacity: "Capacity designed together",
    highlights: ["Custom scope", "Institution-specific workflows", "Tailored rollout", "Contact-only pricing"],
    cta: "Contact our team",
    href: "/contact?interest=enterprise",
  },
];
