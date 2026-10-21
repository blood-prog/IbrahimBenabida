import { Project, ServiceItem, CityTime } from '../types';

export const personalInfo = {
  name: "Ibrahim Benabida",
  shortName: "ibrahim.",
  age: 19,
  title: "Data Science Undergraduate & Digital Designer",
  institution: "USTHB (University of Science and Technology Houari Boumediene)",
  location: "Algiers, Algeria",
  bioShort: "I’m a 19-year-old Data Science undergraduate at USTHB and a Digital Designer. Grounded in mathematical analysis, statistics, and logic, I bridge rigorous analytical precision with bold, modern aesthetics. Rather than separating code, data, and design, I bring them together to turn complex systems into intuitive, human-centered experiences.",
  email: "contact@ibrahimbenabida.me",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
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
    title: "Complex Data Simplification",
    description: "Adept at breaking down complex mathematical concepts, algorithms, and data sets into simple, highly digestible ideas.",
  },
  {
    title: "Clear Articulation & Engagement",
    description: "Strong background in direct client communication and negotiation, translating into an ability to capture attention, build engaging environments, and deliver ideas with clarity.",
  },
  {
    title: "Solid Analytical Foundation",
    description: "Grounded in a rigorous academic background in mathematical analysis, statistics, and logic at USTHB, ensuring absolute precision in problem-solving and content delivery.",
  },
  {
    title: "Visual-Empowered Communication",
    description: "Leveraging a keen eye for aesthetics to organize information and design visual aids that make complex topics intuitive and engaging.",
  },
];

export const designAestheticsPillars = [
  {
    title: "Brand Identity & Social Media",
    description: "Crafting tailored visual identities, marketing assets, and social media designs that drive engagement.",
  },
  {
    title: "Motion Graphics & Interaction",
    description: "Creating dynamic, interactive content and fluid animations using modern motion tools to elevate the user experience.",
  },
  {
    title: "Sharp Eye for Detail",
    description: "Deep appreciation for visual balance, proportions, typography, and color theory, ensuring every design is both modern and visually comforting.",
  },
];

export const developmentTechPillars = [
  {
    title: "Modern Frontend Development",
    description: "Building fast, interactive, and responsive web experiences using React, TypeScript, Next.js, and Tailwind CSS.",
  },
  {
    title: "UX/UI Animations",
    description: "Implementing smooth, professional web animations that enhance digital storytelling.",
  },
  {
    title: "AI-Driven Productivity (Vibe Coding)",
    description: "Utilizing advanced AI development tools to accelerate workflows, bringing creative concepts to life with unprecedented speed and efficiency.",
  },
];

export const projectsData: Project[] = [
  {
    id: "tektoflow-agency",
    title: "TektoFlow Agency.",
    subtitle: "PLATFORM & BRAND IDENTITY",
    category: "FRONT-END & BRANDING",
    tags: ["AGENCY PLATFORM", "BRAND GUIDELINES", "TYPOGRAPHY", "REACT & TAILWIND"],
    description: "Comprehensive agency web architecture and visual identity guidelines crafted for TektoFlow Agency. Co-created brand color hierarchy and typography with Moadh who designed the logo.",
    highlights: [
      "Modern dark/light architectural grid layout engineered with reactive Tailwind CSS",
      "Full typography hierarchy and color system codified in official brand guidelines",
      "High-converting service showcase and client engagement funnels",
    ],
    metrics: "Production agency web platform & brand guidelines delivered",
    linkText: "EXPLORE PROJECT",
    image: "/works/tektoflow-web-1.png",
    status: "COMPLETED",
    gallery: [
      { image: "/works/tektoflow-web-1.png", title: "TektoFlow Agency Viewport", caption: "Full-spectrum digital craft & growth solutions hero section" },
      { image: "/works/tektoflow-brand-1.png", title: "Visual Identity & Brand Architecture", caption: "Typography hierarchy & color palette (in collaboration with Moadh)" },
      { image: "/works/tektoflow-web-2.png", title: "Agency Services & Tech Stack", caption: "Responsive layout & modular interaction" },
      { image: "/works/tektoflow-brand-2.png", title: "Official Brand Guidelines", caption: "Color codes, contrast ratios, and design specifications" },
      { image: "/works/tektoflow-web-3.png", title: "Selected Case Studies", caption: "Client deliverables showcase & grid system" },
      { image: "/works/tektoflow-web-4.png", title: "Performance Metrics & Scaling", caption: "High-contrast aesthetic with clear business value" },
      { image: "/works/tektoflow-web-5.png", title: "Client Conversion Funnel", caption: "Direct contact workflows & inquiry forms" },
    ],
  },
  {
    id: "algo1-course",
    title: "ALGO 1 Course.",
    subtitle: "ALGORITHM & EDUCATION PLATFORM",
    category: "DATA SCIENCE & EDUCATION",
    tags: ["ALGORITHMS", "DATA STRUCTURES", "USTHB CS", "EDUCATIONAL UX"],
    description: "Interactive educational platform structuring the University USTHB ALGO 1 computer science curriculum. Translates complex algorithmic theory into accessible visual modules.",
    highlights: [
      "Modular breakdown of sorting algorithms, complexity analysis, and data structures",
      "Tailored for USTHB computer science undergraduate intuition and coursework review",
      "Clean, high-performance responsive interface designed for desktop and mobile study",
    ],
    metrics: "Complete academic year algorithmic syllabus digitized and structured",
    linkText: "VIEW PLATFORM",
    image: "/works/algo1-course-1.png",
    status: "COMPLETED",
    gallery: [
      { image: "/works/algo1-course-1.png", title: "Course Architecture & Syllabus", caption: "8 chapters covering the complete USTHB ALGO 1 curriculum" },
      { image: "/works/algo1-course-2.png", title: "Big-O Complexity & Proofs", caption: "Time and space complexity visualization with mathematical rigor" },
      { image: "/works/algo1-course-3.png", title: "Data Structures: Arrays & Pointers", caption: "Memory indexing and pointer manipulation" },
      { image: "/works/algo1-course-4.png", title: "Sorting Algorithms Suite", caption: "Bubble, insertion, quicksort, and binary search logic diagrams" },
      { image: "/works/algo1-course-5.png", title: "Syntax & Code Breakdowns", caption: "Side-by-side pseudocode and algorithmic implementation" },
      { image: "/works/algo1-course-6.png", title: "Exam Preparation Modules", caption: "50+ curated exam questions with step-by-step breakdown" },
      { image: "/works/algo1-course-7.png", title: "Interactive Exercise Bank", caption: "Self-assessment quiz modules designed for CS intuition" },
      { image: "/works/algo1-course-8.png", title: "Mobile Learning Viewport", caption: "Optimized touch-friendly reading experience for on-the-go review" },
    ],
  },
  {
    id: "dental-clinic-template",
    title: "Dental Clinic Experience.",
    subtitle: "HEALTHCARE UI/UX & BOOKING FLOW",
    category: "FRONT-END & UI DESIGN",
    tags: ["HEALTHCARE TEMPLATE", "BOOKING FUNNEL", "MOBILE FIRST", "CONVERSION UX"],
    description: "Modern healthcare web design template engineered for patient trust, treatment transparency, doctor credentials, and clean appointment booking workflows.",
    highlights: [
      "Streamlined multi-step patient consultation booking interaction",
      "Categorized treatment menu with clear pricing and procedure overviews",
      "High-contrast accessible typography optimized for all patient age groups",
    ],
    metrics: "Designed across 8 full responsive viewports with complete UI flows",
    linkText: "VIEW TEMPLATE",
    image: "/works/dental-clinic-1.png",
    status: "COMPLETED",
    gallery: [
      { image: "/works/dental-clinic-1.png", title: "Homepage Hero & Trust Building", caption: "Reassuring medical aesthetics with prominent booking CTA" },
      { image: "/works/dental-clinic-2.png", title: "Treatment Catalog & Procedures", caption: "Clear descriptions of dental implants, whitening, and care" },
      { image: "/works/dental-clinic-3.png", title: "Medical Staff & Credentials", caption: "Doctor biographies, clinical accreditations, and certifications" },
      { image: "/works/dental-clinic-4.png", title: "Online Appointment Scheduler", caption: "Step-by-step appointment calendar with real-time slot selection" },
      { image: "/works/dental-clinic-5.png", title: "Patient Reviews & Social Proof", caption: "Verified testimonials establishing patient confidence" },
      { image: "/works/dental-clinic-6.png", title: "Pricing Transparency & Plans", caption: "Clear pricing tiers and insurance compatibility guidelines" },
      { image: "/works/dental-clinic-7.png", title: "Emergency Dental Assistance", caption: "Rapid response hotline for urgent dental trauma" },
      { image: "/works/dental-clinic-8.png", title: "Mobile Viewport Booking Funnel", caption: "Frictionless one-thumb mobile booking interaction" },
    ],
  },
  {
    id: "oussama-academic-portfolio",
    title: "Oussama Benabida Portfolio.",
    subtitle: "ACADEMIC PORTFOLIO & SEO #1",
    category: "FRONT-END & TECHNICAL SEO",
    tags: ["RANKED #1 ON GOOGLE", "ACADEMIC RESEARCH", "TECHNICAL SEO", "WEB ARCHITECTURE"],
    description: "High-performance academic portfolio built for researcher Oussama Benabida, highlighting publications, research milestones, and credentials with top-tier search engine indexing.",
    highlights: [
      "Ranked #1 on Google Search Engine for author queries",
      "Semantic HTML5 schema markup and lightning-fast loading speeds",
      "Clean, distraction-free reading typography tailored to scholarly audiences",
    ],
    metrics: "Achieved #1 organic Google search ranking position",
    linkText: "VIEW CASE STUDY",
    image: "/works/oussama-portfolio-1.png",
    status: "COMPLETED",
    gallery: [
      { image: "/works/oussama-portfolio-1.png", title: "Ranked #1 on Google Search Engine", caption: "Verified #1 organic position for scholar and postdoctoral queries" },
      { image: "/works/oussama-portfolio-2.png", title: "Scholarly Profile & Affiliations", caption: "University of British Columbia & Université de Montréal overview" },
      { image: "/works/oussama-portfolio-3.png", title: "Peer-Reviewed Publications Index", caption: "Comprehensive list of academic papers, journals, and DOI links" },
      { image: "/works/oussama-portfolio-4.png", title: "International Conferences & Talks", caption: "Symposium presentations and academic lecture keynotes" },
      { image: "/works/oussama-portfolio-5.png", title: "Academic Credentials & Thesis", caption: "Doctoral achievements and university milestones" },
      { image: "/works/oussama-portfolio-6.png", title: "Collaborative Research Labs", caption: "Cross-institution partnerships and research grants" },
      { image: "/works/oussama-portfolio-7.png", title: "Comprehensive Curriculum Vitae", caption: "Academic achievements, teaching experience, and scholarly awards" },
      { image: "/works/oussama-portfolio-8.png", title: "Direct Academic Inquiry Portal", caption: "Clean, distraction-free outreach channel for peer inquiries" },
      { image: "/works/oussama-portfolio-9.png", title: "Responsive Reading Layout", caption: "Optimized typography for scholarly paper review on mobile devices" },
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "the analytical mind.",
    pillar: "DATA SCIENCE & COMMUNICATION",
    skills: [
      "COMPLEX DATA SIMPLIFICATION",
      "STATISTICAL ANALYSIS & LOGIC",
      "USTHB RIGOROUS FOUNDATION",
      "VISUAL-EMPOWERED EXPLANATION",
      "CLIENT ENGAGEMENT & NEGOTIATION",
    ],
    description: "Breaking down intricate algorithms, mathematical proofs, and noisy datasets into elegant, digestible narratives.",
    details: [
      "Translating multidimensional data into intuitive visual artifacts",
      "Bridging the gap between technical researchers and business stakeholders",
      "Structuring logical arguments with mathematical precision",
    ],
  },
  {
    number: "02",
    title: "design & aesthetics.",
    pillar: "CREATIVE EDGE & IDENTITY",
    skills: [
      "BRAND IDENTITY & SYSTEMS",
      "SOCIAL MEDIA VISUAL ASSETS",
      "MOTION GRAPHICS & KINETICS",
      "TYPOGRAPHY & PROPORTIONS",
      "SHARP EYE FOR DETAIL",
    ],
    description: "Creating tailored visual identities, marketing assets, and fluid animations that delight viewers while maintaining structural harmony.",
    details: [
      "Architectural grid systems with calibrated contrast and color harmony",
      "Motion graphics elevating social media presence and user attention",
      "Rooted aesthetic blending classical warmth (linen & terracotta) with modern edge",
    ],
  },
  {
    number: "03",
    title: "development & tech.",
    pillar: "EXECUTION & VIBE CODING",
    skills: [
      "MODERN FRONTEND (REACT / NEXT.JS)",
      "TYPESCRIPT & TAILWIND CSS",
      "UX/UI WEB ANIMATIONS",
      "AI-DRIVEN WORKFLOWS (VIBE CODING)",
      "RESPONSIVE SWISS ARCHITECTURE",
    ],
    description: "Transforming design mockups into blazingly fast, accessible, and reactive web applications with cutting-edge AI-assisted velocity.",
    details: [
      "Production-grade frontend engineered for speed, responsiveness, and fluid interaction",
      "Crafting tactile micro-interactions that make interfaces feel organic and alive",
      "Harnessing AI coding tools to prototype and deploy with unprecedented efficiency",
    ],
  },
];
