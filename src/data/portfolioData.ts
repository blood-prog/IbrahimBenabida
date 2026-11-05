import { Project, ServiceItem, CityTime } from '../types';

export const personalInfo = {
  name: "Ibrahim Benabida",
  shortName: "ibrahim.",
  age: 19,
  title: "Data Science Undergraduate & Digital Designer",
  institution: "USTHB",
  location: "Algiers, Algeria",
  bioShort: "Data science student at USTHB and digital designer based in Algiers. I combine analytical computing with clean visual design to build fast, thoughtful web applications and brand systems.",
  website: "https://ibrahimbenabida.online",
  domain: "ibrahimbenabida.online",
  email: "email.me@ibrahimbenabida.online",
  github: "https://github.com/blood-prog",
  instagram: "https://www.instagram.com/benabida.ibrahim",
  whatsapp: "https://wa.me/213561481082",
  whatsappNumber: "+213 561 48 10 82",
};

export const citiesConfig: CityTime[] = [
  { city: "ALGIERS", timezone: "Africa/Algiers", code: "CET", isBase: true },
  { city: "LONDON", timezone: "Europe/London", code: "BST" },
  { city: "BERLIN", timezone: "Europe/Berlin", code: "CEST" },
  { city: "NEW YORK", timezone: "America/New_York", code: "EDT" },
  { city: "LOS ANGELES", timezone: "America/Los_Angeles", code: "PDT" },
  { city: "BRISBANE", timezone: "Australia/Brisbane", code: "AEST" },
  { city: "SYDNEY", timezone: "Australia/Sydney", code: "AEDT" },
  { city: "TOKYO", timezone: "Asia/Tokyo", code: "JST" },
];

export const analyticalMindPillars = [
  {
    title: "Mathematical Modeling",
    description: "Statistical distributions, probability, and algorithmic logic.",
  },
  {
    title: "Technical Communication",
    description: "Clear articulation of metrics and data models for team collaboration.",
  },
  {
    title: "USTHB CS Foundation",
    description: "Rigorous coursework in calculus, linear algebra, and data structures.",
  },
  {
    title: "Information Architecture",
    description: "Structuring complex data into intuitive, readable layouts.",
  },
];

export const designAestheticsPillars = [
  {
    title: "Brand Systems",
    description: "Typography scales, color tokens, and visual guidelines.",
  },
  {
    title: "Interface Motion",
    description: "Purposeful transitions that guide attention and confirm actions.",
  },
  {
    title: "Typographic Detail",
    description: "Carefully calibrated proportions, line height, and screen contrast.",
  },
];

export const developmentTechPillars = [
  {
    title: "Frontend Engineering",
    description: "Modern production web apps with React 19, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Responsive Ergonomics",
    description: "Zero horizontal overflow, fluid clamp() scales, and touch targets.",
  },
  {
    title: "AI Workflows",
    description: "Accelerating prototyping and test scaffolding with modern LLM tools.",
  },
];

export const projectsData: Project[] = [
  {
    id: "ibrahim-brand-identity",
    title: "Golden Angle Identity System",
    subtitle: "Mathematical Spiral & Brand Guidelines",
    category: "BRANDING & DATA SCIENCE",
    tags: ["GOLDEN ANGLE", "DATA SCIENCE", "BRAND GUIDELINES", "LOGO SYSTEM"],
    description: "Official brand identity and guidelines for Ibrahim Benabida. Rooted in the 137.5° phyllotaxis golden angle, uniting computational data science with architectural typography.",
    highlights: [
      "137.5° phyllotaxis golden angle spiral uniting data science and digital design",
      "Soft Linen (#E8E3D9) and Black Cherry (#5A1212) brand color tokens",
      "Comprehensive typography, clear-space rules, and SVG vector system",
    ],
    metrics: "Complete Brand Manual & Golden Angle Vector System",
    linkText: "VIEW BRAND IDENTITY",
    image: "/brand/golden-angle-clear-space.svg",
    status: "COMPLETED",
    gallery: [
      { image: "/brand/golden-angle-badge-light.svg", title: "Golden Angle Symbol Mark", caption: "Phyllotaxis spiral based on the 137.5° golden ratio angle" },
      { image: "/brand/ibrahim-full-logo.svg", title: "Full Brand Wordmark & Emblem", caption: "Harmonious lockup pairing the golden angle symbol with Plus Jakarta Sans geometry" },
      { image: "/brand/golden-angle-clear-space.svg", title: "Logo Clear Space & Isolation Grid", caption: "Proportional construction rules and optical margins ensuring brand integrity" },
      { image: "/brand/golden-angle-badge-dark.svg", title: "Dark Mode Inversion & Color Tokens", caption: "Black Cherry (#5A1212) grounding paired with Soft Linen (#E8E3D9) high-contrast data nodes" },
      { image: "/brand/golden-angle-detailed.svg", title: "High-Density Spiral Matrix", caption: "Algorithmic point dispersion mapping mathematical sequence progression" },
    ],
  },
  {
    id: "tektoflow-agency",
    title: "TektoFlow Agency",
    subtitle: "Web Platform & Brand System",
    category: "FRONT-END & BRANDING",
    tags: ["REACT", "TAILWIND CSS", "BRAND GUIDELINES", "TYPOGRAPHY"],
    description: "Production web platform and brand guidelines for TektoFlow Agency, featuring responsive architectural grids, type scales, and direct inquiry funnels.",
    highlights: [
      "Responsive grid layout built with React and Tailwind CSS",
      "Brand manual defining type scale, hex tokens, and contrast ratios",
      "Direct client inquiry form with accessible states",
    ],
    metrics: "Production website & 24-page brand guidelines",
    linkText: "VIEW PROJECT",
    image: "/works/tektoflow-web-1.webp",
    status: "COMPLETED",
    gallery: [
      { image: "/works/tektoflow-web-1.webp", title: "TektoFlow Agency Viewport", caption: "Hero section with responsive architectural grid" },
      { image: "/works/tektoflow-brand-1.webp", title: "Visual Identity & Brand Architecture", caption: "Typography hierarchy & color palette (with logo designer Moadh)" },
      { image: "/works/tektoflow-web-2.webp", title: "Agency Services", caption: "Modular responsive service grid" },
      { image: "/works/tektoflow-brand-2.webp", title: "Official Brand Guidelines", caption: "Color specifications and layout rules" },
      { image: "/works/tektoflow-web-3.webp", title: "Case Studies Gallery", caption: "Client deliverables showcase" },
      { image: "/works/tektoflow-web-4.webp", title: "Capabilities", caption: "High-contrast layout detailing agency services" },
      { image: "/works/tektoflow-web-5.webp", title: "Inquiry Flow", caption: "Inbound contact form with validation" },
    ],
  },
  {
    id: "algo1-course",
    title: "ALGO 1 Course",
    subtitle: "Algorithm & Education Platform",
    category: "DATA SCIENCE & EDUCATION",
    tags: ["ALGORITHMS", "DATA STRUCTURES", "USTHB CS", "EDUCATION"],
    description: "Educational platform structuring the USTHB computer science ALGO 1 curriculum, translating theoretical complexity into step-by-step visual modules.",
    highlights: [
      "Modular breakdown of sorting algorithms and pointers",
      "Aligned with USTHB undergraduate CS coursework",
      "Fast, mobile-friendly interface for exam review",
    ],
    metrics: "Full 8-chapter syllabus & 50+ problem breakdowns",
    linkText: "VIEW PLATFORM",
    image: "/works/algo1-course-1.webp",
    status: "COMPLETED",
    gallery: [
      { image: "/works/algo1-course-1.webp", title: "Course Architecture & Syllabus", caption: "8 chapters covering the complete USTHB ALGO 1 curriculum" },
      { image: "/works/algo1-course-2.webp", title: "Big-O Complexity & Proofs", caption: "Time and space complexity visualization" },
      { image: "/works/algo1-course-3.webp", title: "Data Structures", caption: "Memory indexing and pointer manipulation" },
      { image: "/works/algo1-course-4.webp", title: "Sorting Algorithms", caption: "Bubble, insertion, quicksort, and binary search logic" },
      { image: "/works/algo1-course-5.webp", title: "Syntax Breakdowns", caption: "Pseudocode and structured implementation" },
      { image: "/works/algo1-course-6.webp", title: "Exam Prep Modules", caption: "50+ curated exam questions with step-by-step breakdown" },
      { image: "/works/algo1-course-7.webp", title: "Interactive Exercises", caption: "Self-assessment quiz modules" },
      { image: "/works/algo1-course-8.webp", title: "Mobile Learning", caption: "Touch-friendly reading layout for mobile study" },
    ],
  },
  {
    id: "dental-clinic-template",
    title: "Dental Clinic Experience",
    subtitle: "Healthcare UI/UX & Booking",
    category: "FRONT-END & UI DESIGN",
    tags: ["HEALTHCARE", "BOOKING FLOW", "MOBILE FIRST", "ACCESSIBLE"],
    description: "Modern healthcare web template providing clear procedure pricing, doctor credentials, and a frictionless appointment booking funnel.",
    highlights: [
      "Multi-step consultation booking flow with inline validation",
      "Structured procedure catalog showing pricing and recovery timelines",
      "Accessible typography meeting WCAG AA standards",
    ],
    metrics: "8 responsive viewports with end-to-end booking states",
    linkText: "VIEW TEMPLATE",
    image: "/works/dental-clinic-1.webp",
    status: "COMPLETED",
    gallery: [
      { image: "/works/dental-clinic-1.webp", title: "Homepage Hero", caption: "Medical presentation with booking CTA" },
      { image: "/works/dental-clinic-2.webp", title: "Treatment Catalog", caption: "Breakdown of procedures and care steps" },
      { image: "/works/dental-clinic-3.webp", title: "Medical Staff", caption: "Clinician biographies and accreditations" },
      { image: "/works/dental-clinic-4.webp", title: "Appointment Scheduler", caption: "Calendar interaction with real-time slot selection" },
      { image: "/works/dental-clinic-5.webp", title: "Patient Reviews", caption: "Verified reviews establishing trust" },
      { image: "/works/dental-clinic-6.webp", title: "Pricing & Coverage", caption: "Procedure costs and insurance compatibility" },
      { image: "/works/dental-clinic-7.webp", title: "Emergency Care", caption: "Direct hotline for urgent trauma cases" },
      { image: "/works/dental-clinic-8.webp", title: "Mobile Booking Flow", caption: "One-thumb mobile interaction" },
    ],
  },
  {
    id: "oussama-academic-portfolio",
    title: "Oussama Benabida Portfolio",
    subtitle: "Academic Portfolio & Google #1",
    category: "FRONT-END & TECHNICAL SEO",
    tags: ["RANKED #1 ON GOOGLE", "ACADEMIC RESEARCH", "TECHNICAL SEO"],
    description: "Academic portfolio built for researcher Oussama Benabida, highlighting peer-reviewed publications, symposium talks, and research credentials.",
    highlights: [
      "Ranked #1 organically on Google Search for target scholar queries",
      "Semantic HTML5 schema markup and sub-second load times",
      "Clean typographic layout for scholarly reading",
    ],
    metrics: "Ranked #1 on Google Search Engine",
    linkText: "VIEW CASE STUDY",
    image: "/works/oussama-portfolio-2.webp",
    status: "COMPLETED",
    gallery: [
      { image: "/works/oussama-portfolio-1.webp", title: "Google Search Ranking", caption: "Verified #1 organic position for scholar queries" },
      { image: "/works/oussama-portfolio-2.webp", title: "Scholarly Profile", caption: "Academic appointments and institutional affiliations" },
      { image: "/works/oussama-portfolio-3.webp", title: "Publications Index", caption: "Direct DOI links and citations" },
      { image: "/works/oussama-portfolio-4.webp", title: "Conferences & Talks", caption: "Symposium presentations and lecture recordings" },
      { image: "/works/oussama-portfolio-5.webp", title: "Academic Credentials", caption: "Doctoral research summary and university milestones" },
      { image: "/works/oussama-portfolio-6.webp", title: "Research Labs", caption: "Cross-institution partnerships" },
      { image: "/works/oussama-portfolio-7.webp", title: "Curriculum Vitae", caption: "Teaching experience and academic awards" },
      { image: "/works/oussama-portfolio-8.webp", title: "Inquiry Portal", caption: "Direct outreach form for peer inquiries" },
      { image: "/works/oussama-portfolio-9.webp", title: "Mobile Reading Layout", caption: "Optimized line length for mobile reading" },
    ],
  },
  {
    id: "product-design-transformation",
    title: "Rudy's Studio Retouch",
    subtitle: "Commercial Product Overhaul & Color Grading",
    category: "PRODUCT DESIGN",
    tags: ["PRODUCT RETOUCH", "STUDIO LIGHTING", "COLOR GRADING", "COMMERCIAL"],
    description: "Complete studio retouching and dynamic contrast overhaul for Rudy's No. 1 hair styling collection.",
    highlights: [
      "Dynamic contrast grading and surface highlight restoration",
      "Studio lighting correction for e-commerce catalog display",
      "High-resolution color fidelity meeting print standards",
    ],
    metrics: "Commercial studio collection with complete before/after grade",
    linkText: "VIEW CASE STUDY",
    image: "/works/rudys-shampoo-after.webp",
    status: "COMPLETED",
    gallery: [
      { image: "/works/rudys-shampoo-after.webp", title: "Rudy's No. 1 Shampoo — Final Overhaul", caption: "Deep color grading, surface illumination, and luxury contrast" },
      { image: "/works/rudys-shampoo-before.webp", title: "Rudy's No. 1 Shampoo — Raw Studio Capture", caption: "Flat unedited studio capture before digital overhaul" },
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "data science.",
    pillar: "DATA SCIENCE",
    skills: ["Python & SQL", "Statistical Analysis", "Data Modeling"],
    description: "Statistical analysis, predictive modeling, and data pipelines built with Python and SQL.",
    details: ["Mathematical models", "Data visualization", "Algorithmic analysis"],
  },
  {
    number: "02",
    title: "brand & ui design.",
    pillar: "DESIGN & SYSTEMS",
    skills: ["Design Systems", "Figma Prototyping", "Typography Scales"],
    description: "Design systems, typography scales, Figma components, and brand guidelines crafted for production.",
    details: ["Typography scales", "Color guidelines", "Component systems"],
  },
  {
    number: "03",
    title: "frontend engineering.",
    pillar: "ENGINEERING",
    skills: ["React 19 & Next.js", "TypeScript", "Tailwind CSS"],
    description: "Production web applications built with TypeScript, React 19, Next.js, and responsive Tailwind CSS.",
    details: ["Production React code", "Mobile ergonomics", "Fast page performance"],
  },
];
