/* ---------------------------------------------------------------------------
   Central site configuration & content for Cubitous Infotech.
   Edit company details, services, nav, and contact info here.
--------------------------------------------------------------------------- */

export const company = {
  name: "Cubitous Infotech",
  shortName: "Cubitous",
  tagline: "Your Salesforce Growth Partner",
  description:
    "Cubitous Infotech is a Salesforce consulting and implementation partner helping businesses design, build, and scale on the Salesforce platform — from Sales & Service Cloud to Revenue Cloud, Conga CPQ/CLM, and Experience Cloud.",
  founded: 2021,
  email: "contact@cubitous.com",
  careersEmail: "careers@cubitous.com",
  phone: "+91 90236 29508",
  address: {
    line1: "711, Sun Central Place",
    line2: "Ambli, Ahmedabad",
    region: "Gujarat, India",
    full: "711, Sun Central Place, Ambli, Ahmedabad, Gujarat, India",
  },
  founders: [
    {
      name: "Brijesh Mistry",
      role: "Founder & CEO",
      bio: "Salesforce practice leader driving delivery excellence, client success, and long-term platform strategy for Cubitous Infotech.",
      initials: "BM",
    },
    {
      name: "Dharmesh Mistry",
      role: "Co-Founder & CTO",
      bio: "Technology and solution architecture lead focused on scalable Salesforce implementations, integrations, and revenue tooling.",
      initials: "DM",
    },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/cubitous-infotech/?originalSubdomain=in", icon: "linkedin" },
    { label: "X (Twitter)", href: "#", icon: "twitter" },
    { label: "GitHub", href: "#", icon: "github" },
  ],
  // Flip to true after you add /public/logo.svg (or update Logo.astro for .png).
  hasLogoImage: false,
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [], // populated from `services` below at build time in Header
  },
  { label: "Projects", href: "/projects" },
  { label: "Training", href: "/training" },
  { label: "Careers", href: "/careers" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // maps to Icon.astro `name`
  category: "Salesforce Clouds" | "Revenue & CPQ" | "Platform & Advisory";
  overview: string;
  features: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "salesforce-crm",
    title: "Salesforce CRM Implementation",
    short: "End-to-end CRM setup tailored to how your teams actually sell and serve.",
    icon: "cloud",
    category: "Salesforce Clouds",
    overview:
      "We implement Salesforce CRM from the ground up — discovery, org design, data model, automation, and user adoption — so you get a single source of truth across sales, service, and marketing.",
    features: [
      "Business discovery & CRM roadmap",
      "Org setup, security model & profiles/permission sets",
      "Custom objects, flows & automation",
      "Data migration & de-duplication",
      "Dashboards, reports & KPIs",
      "User training & adoption enablement",
    ],
    outcomes: [
      "Unified customer 360 view",
      "Higher sales productivity",
      "Cleaner, trustworthy data",
    ],
  },
  {
    slug: "sales-cloud",
    title: "Sales Cloud",
    short: "Accelerate pipeline, forecasting, and rep productivity.",
    icon: "chart",
    category: "Salesforce Clouds",
    overview:
      "Configure Sales Cloud to streamline lead-to-cash — lead & opportunity management, guided selling, forecasting, and automation that removes busywork for your reps.",
    features: [
      "Lead, account & opportunity management",
      "Sales pipeline & stage automation",
      "Forecasting & territory management",
      "Guided selling & sales paths",
      "Email, calendar & activity capture",
      "Sales analytics & dashboards",
    ],
    outcomes: [
      "Shorter sales cycles",
      "Accurate forecasting",
      "More time selling, less admin",
    ],
  },
  {
    slug: "service-cloud",
    title: "Service Cloud",
    short: "Deliver fast, connected, omni-channel customer support.",
    icon: "headset",
    category: "Salesforce Clouds",
    overview:
      "Turn support into a strength with Service Cloud — case management, omni-channel routing, knowledge base, and AI-assisted agents that resolve issues faster.",
    features: [
      "Case management & escalation rules",
      "Omni-channel routing (email, chat, phone)",
      "Knowledge base & self-service",
      "Service console & agent productivity",
      "SLAs, entitlements & milestones",
      "CSAT tracking & service analytics",
    ],
    outcomes: [
      "Faster case resolution",
      "Higher CSAT scores",
      "Lower cost per interaction",
    ],
  },
  {
    slug: "revenue-cloud-advanced",
    title: "Revenue Cloud Advanced (RCA)",
    short: "Modern quote-to-cash on Salesforce's next-gen revenue platform.",
    icon: "revenue",
    category: "Revenue & CPQ",
    overview:
      "Implement Revenue Cloud Advanced to unify CPQ, billing, and revenue lifecycle management on a single, API-first platform — built for complex, recurring, and usage-based models.",
    features: [
      "Product catalog & pricing setup",
      "Configuration, pricing & quoting (CPQ)",
      "Contract & subscription management",
      "Billing, invoicing & revenue schedules",
      "Usage & consumption-based pricing",
      "Quote-to-cash process automation",
    ],
    outcomes: [
      "Faster, error-free quotes",
      "Automated recurring revenue",
      "Clear revenue visibility",
    ],
  },
  {
    slug: "experience-cloud",
    title: "Experience Cloud",
    short: "Branded portals, communities, and self-service for customers & partners.",
    icon: "community",
    category: "Salesforce Clouds",
    overview:
      "Build engaging, secure digital experiences — customer portals, partner communities, and self-service sites — powered by your Salesforce data.",
    features: [
      "Customer & partner portals",
      "Self-service help centers",
      "Branded, responsive site design",
      "Access control & sharing sets",
      "Lightning Web Components (LWC)",
      "Single sign-on & authentication",
    ],
    outcomes: [
      "Lower support volume",
      "Engaged partners & customers",
      "24/7 self-service",
    ],
  },
  {
    slug: "conga-cpq",
    title: "Conga CPQ",
    short: "Configure, price, and quote complex deals with speed and accuracy.",
    icon: "config",
    category: "Revenue & CPQ",
    overview:
      "We implement and optimize Conga CPQ so sales teams generate accurate, on-brand quotes for even the most complex product and pricing scenarios — directly inside Salesforce.",
    features: [
      "Product & pricing rule configuration",
      "Guided selling & bundle logic",
      "Discounting & approval workflows",
      "Quote & proposal generation",
      "Renewals & amendments",
      "CRM-native quoting experience",
    ],
    outcomes: [
      "Quote accuracy at scale",
      "Faster deal turnaround",
      "Controlled, compliant discounting",
    ],
  },
  {
    slug: "conga-clm",
    title: "Conga CLM",
    short: "Streamline the full contract lifecycle — request to renewal.",
    icon: "document",
    category: "Revenue & CPQ",
    overview:
      "Implement Conga Contract Lifecycle Management to automate contract creation, negotiation, approvals, e-signature, and obligation tracking with full visibility and compliance.",
    features: [
      "Contract templates & clause library",
      "Automated generation & assembly",
      "Redlining & negotiation tracking",
      "Approval workflows & e-signature",
      "Obligation & renewal management",
      "Central, searchable contract repository",
    ],
    outcomes: [
      "Faster contract cycles",
      "Reduced legal & compliance risk",
      "No missed renewals",
    ],
  },
  {
    slug: "integration-services",
    title: "Integration & Data Migration",
    short: "Connect Salesforce with your ERP, apps, and legacy systems.",
    icon: "plug",
    category: "Platform & Advisory",
    overview:
      "Integrate Salesforce with the rest of your stack using APIs, middleware (MuleSoft & others), and proven migration methodology — so data flows cleanly across systems.",
    features: [
      "REST/SOAP API integrations",
      "MuleSoft & middleware connectors",
      "ERP, payment & marketing integrations",
      "Data migration & cleansing",
      "Real-time & batch sync",
      "Integration monitoring & error handling",
    ],
    outcomes: [
      "Connected systems, one source of truth",
      "Clean, migrated data",
      "Automated cross-system workflows",
    ],
  },
  {
    slug: "agentforce-ai",
    title: "Agentforce & Einstein AI",
    short: "Put Salesforce AI and autonomous agents to work for your business.",
    icon: "bolt",
    category: "Platform & Advisory",
    overview:
      "Leverage the latest Salesforce AI — Agentforce autonomous agents and Einstein — to automate service, assist sales, and surface predictive insights across your org.",
    features: [
      "Agentforce agent design & deployment",
      "Einstein predictions & scoring",
      "AI-assisted service & sales replies",
      "Prompt & data grounding setup",
      "Trust, guardrails & monitoring",
      "Adoption & change management",
    ],
    outcomes: [
      "Automated routine work",
      "Smarter, faster decisions",
      "Scalable customer engagement",
    ],
  },
  {
    slug: "managed-services",
    title: "Managed Services & Support",
    short: "Ongoing admin, optimization, and support for your Salesforce org.",
    icon: "shield",
    category: "Platform & Advisory",
    overview:
      "Keep your Salesforce investment healthy with flexible managed services — proactive administration, enhancements, release readiness, and on-demand support.",
    features: [
      "Proactive org administration",
      "Enhancement & backlog delivery",
      "Release readiness & testing",
      "Performance & security reviews",
      "User support & training refreshers",
      "Flexible support packages",
    ],
    outcomes: [
      "A healthy, evolving org",
      "Predictable support costs",
      "Continuous improvement",
    ],
  },
];

/**
 * Team members. Avatar images use pravatar.cc placeholders — replace `image`
 * with real photos (e.g. /team/name.jpg placed in /public/team/).
 */
export const team = [
  { name: "Devanshi Shah", role: "Manager and Senior Salesforce Developer", image: "https://i.pravatar.cc/400?img=12" },
  { name: "Rishabh Tiwari", role: "Senior Conga CLM Expert", image: "https://i.pravatar.cc/400?img=45" },
  { name: "Jainam", role: "Senior Salesforce Developer", image: "https://i.pravatar.cc/400?img=33" },
  { name: "Meet Patel", role: "Salesforce Developer & Administrator", image: "https://i.pravatar.cc/400?img=47" },
  { name: "Prashant Chopra", role: "Salesforce Developer & Conga CPQ", image: "https://i.pravatar.cc/400?img=15" },
  { name: "Vraj Patel", role: "Salesforce Developer", image: "https://i.pravatar.cc/400?img=44" },
  { name: "Vaibhav Shinde", role: "Salesforce Developer", image: "https://i.pravatar.cc/400?img=52" },
  { name: "Dipanshi", role: "Jr. Salesforce Developer", image: "https://i.pravatar.cc/400?img=32" },
];

export const stats = [
  { value: "50+", label: "Projects Delivered", icon: "chart", hint: "Across CPQ, Sales, Service & Experience Cloud" },
  { value: "30+", label: "Happy Clients", icon: "community", hint: "Long-term partnerships across industries" },
  { value: "10+", label: "Developers Trained", icon: "graduation", hint: "Mentor-led, job-ready Salesforce talent" },
  { value: "7+", label: "Salesforce Clouds & Products", icon: "cloud", hint: "Deep expertise across the ecosystem" },
];

export const industries = [
  "Financial Services",
  "Healthcare & Life Sciences",
  "Manufacturing",
  "Retail & E-commerce",
  "Technology & SaaS",
  "Professional Services",
  "Education",
  "Real Estate",
];

export const values = [
  {
    title: "Client Success First",
    desc: "We measure our success by the outcomes we create for our clients — not just the features we ship.",
    icon: "target",
  },
  {
    title: "Certified Expertise",
    desc: "A team of Salesforce-skilled consultants and developers committed to platform best practices.",
    icon: "badge",
  },
  {
    title: "Transparency",
    desc: "Clear scope, honest timelines, and open communication at every stage of delivery.",
    icon: "eye",
  },
  {
    title: "Build to Scale",
    desc: "Solutions architected to grow with your business, not to be rebuilt in a year.",
    icon: "cube",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    desc: "We learn your goals, processes, and pain points to define a clear, prioritized roadmap.",
  },
  {
    step: "02",
    title: "Design",
    desc: "We architect a scalable Salesforce solution and align stakeholders before a line is built.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Agile, iterative delivery with regular demos so you see progress and give feedback early.",
  },
  {
    step: "04",
    title: "Deploy & Adopt",
    desc: "Smooth go-live, user training, and adoption support to drive real usage from day one.",
  },
  {
    step: "05",
    title: "Optimize",
    desc: "Ongoing managed services keep your org healthy and evolving with your business.",
  },
];

export const testimonials = [
  {
    quote:
      "Cubitous Infotech understood our sales process quickly and delivered a Salesforce setup our team actually enjoys using. Adoption was the smoothest we've seen.",
    name: "VP of Sales",
    role: "B2B SaaS Company",
  },
  {
    quote:
      "Their Conga CPQ implementation cut our quoting time dramatically and eliminated pricing errors. A genuinely knowledgeable, responsive team.",
    name: "Revenue Operations Lead",
    role: "Manufacturing",
  },
  {
    quote:
      "From integration to managed support, Cubitous has been a reliable long-term partner. They treat our org like it's their own.",
    name: "Director of IT",
    role: "Financial Services",
  },
];

export const trainingTracks = [
  {
    title: "Salesforce Administrator",
    desc: "Org setup, security, automation (Flow), reports & dashboards — everything to become a job-ready admin.",
    duration: "8–10 weeks",
    icon: "gear",
  },
  {
    title: "Salesforce Developer",
    desc: "Apex, Lightning Web Components (LWC), triggers, integrations, and best-practice coding on the platform.",
    duration: "10–12 weeks",
    icon: "code",
  },
  {
    title: "Revenue & CPQ Specialist",
    desc: "Hands-on with Conga CPQ/CLM and Revenue Cloud — configuration, pricing, and quote-to-cash flows.",
    duration: "6–8 weeks",
    icon: "revenue",
  },
];

export const trainingFeatures = [
  "Live, mentor-led sessions with Real practitioners",
  "Hands-on Projects on Real Salesforce orgs",
  "Certification Exam Preparation & Guidance",
  "Interview Preparation & Resume Support",
  "Internship with Live-Project Exposure",
  "Placement Assistance for Top Performers",
];

export const openRoles = [
  {
    title: "Salesforce Developer",
    type: "Full-time",
    location: "Ahmedabad (On-site / Hybrid)",
    experience: "1–4 years",
    tags: ["Apex", "LWC", "Integrations"],
  },
  {
    title: "Salesforce Administrator",
    type: "Full-time",
    location: "Ahmedabad (On-site / Hybrid)",
    experience: "1–3 years",
    tags: ["Flow", "Security", "Config"],
  },
  {
    title: "CPQ / Revenue Cloud Consultant",
    type: "Full-time",
    location: "Ahmedabad / Remote",
    experience: "2–5 years",
    tags: ["Conga CPQ", "CLM", "RCA"],
  },
  {
    title: "Salesforce Intern / Trainee",
    type: "Internship",
    location: "Ahmedabad (On-site)",
    experience: "Freshers welcome",
    tags: ["Training", "Live projects"],
  },
];

export const faqs = [
  {
    q: "Which Salesforce products do you work with?",
    a: "We work across Sales Cloud, Service Cloud, Experience Cloud, Revenue Cloud Advanced (RCA), Conga CPQ, Conga CLM, integrations, data migration, managed services, and Salesforce AI.",
  },
  {
    q: "Can you fix or improve an existing Salesforce org?",
    a: "Yes. We help teams clean up, optimize, or re-architect existing Salesforce orgs by improving automation, data quality, reporting, security, and user adoption.",
  },
  {
    q: "How long does a typical Salesforce project take?",
    a: "Smaller implementations can go live in a few weeks, while larger multi-cloud rollouts often take 2-4 months. We scope work in clear phases so you know the timeline before we begin.",
  },
  {
    q: "Do you provide ongoing support after go-live?",
    a: "Yes. Our managed services cover proactive administration, enhancements, release readiness, and on-demand support with flexible packages.",
  },
  {
    q: "How much does a Salesforce implementation cost?",
    a: "Pricing depends on the products, complexity, integrations, data migration, and support needs. After a free consultation, we share a clear estimate and recommended roadmap.",
  },
  {
    q: "Do you offer training and internships?",
    a: "Yes. We offer mentor-led Salesforce training and internship programs for freshers and career-switchers who want to become job-ready Salesforce professionals.",
  },
  {
    q: "Can you help with Conga CPQ and Conga CLM implementations?",
    a: "Yes. We support Conga CPQ and CLM setup, configuration, approvals, templates, quote and contract flows, and optimization for teams that need faster, more controlled revenue operations.",
  },
  {
    q: "Do you handle Salesforce data migration and integrations?",
    a: "Yes. We migrate data from legacy systems and connect Salesforce with ERPs, websites, marketing tools, payment systems, and other business applications using secure integration patterns.",
  },
  {
    q: "Can you build customer or partner portals?",
    a: "Yes. We build Experience Cloud portals for customers, partners, and internal teams with branded UI, secure access, self-service features, and Salesforce-backed data.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Yes. We work with growing companies as well as established teams. We can start with a focused CRM rollout and expand into automation, reporting, integrations, and support as your business grows.",
  },
  {
    q: "How do we start a project with Cubitous?",
    a: "Start by contacting us for a free consultation. We will understand your goals, current process, Salesforce setup, timeline, and budget, then recommend a practical roadmap.",
  },
];
