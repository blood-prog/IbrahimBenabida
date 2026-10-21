import { WorkSlide } from '../types';

export interface WorkItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  categories: string[];
  tags: string[];
  year: string;
  client?: string;
  externalUrl?: string;
  image?: string;
  gallery?: WorkSlide[];
  status?: 'COMPLETED' | 'IN_PROGRESS' | 'COMING_SOON' | 'PRIVATE';
  metric?: string;
  span?: string; // Responsive bento span e.g. 'col-span-1', 'sm:col-span-2'
}

export const WORK_CATEGORIES = [
  'ALL',
  'FRONT-END',
  'DATA SCIENCE',
  'BRANDING',
  'SOCIAL MEDIA',
  'EDUCATION',
  'UI DESIGN',
  'WEB DEVELOPMENT',
  'SEO',
] as const;

export type WorkCategory = typeof WORK_CATEGORIES[number];

// Featured Spotlight Work (TektoFlow Agency Website & Brand System)
export const featuredWork: WorkItem = {
  id: 'tektoflow-agency',
  title: 'TektoFlow Agency Platform & Identity',
  subtitle: 'AGENCY WEB EXPERIENCE & VISUAL IDENTITY',
  description:
    'Complete web architecture and brand identity system for TektoFlow Agency. Engineered a modern, high-contrast web experience highlighting agency services, and co-crafted the visual identity—typography scales, brand guidelines, and color theory.',
  categories: ['FRONT-END', 'BRANDING', 'WEB DEVELOPMENT', 'UI DESIGN'],
  tags: ['TEKTOFLOW', 'AGENCY PLATFORM', 'BRAND SYSTEM', 'REACT & TAILWIND'],
  year: '2024',
  client: 'TektoFlow Agency',
  image: '/works/tektoflow-web-1.png',
  status: 'COMPLETED',
  metric: 'Full Web Experience & Brand Guidelines Delivered',
  gallery: [
    {
      image: '/works/tektoflow-web-1.png',
      title: 'Agency Web Viewport',
      caption: 'Full-spectrum digital craft & growth solutions hero section',
      alt: 'TektoFlow Agency Homepage Hero',
    },
    {
      image: '/works/tektoflow-brand-1.png',
      title: 'Visual Identity & System',
      caption: 'Typography hierarchy & color palette (in collaboration with Moadh who designed the logo)',
      alt: 'TektoFlow Brand Identity Guidelines',
    },
    {
      image: '/works/tektoflow-web-2.png',
      title: 'Capabilities & Workflow',
      caption: 'Tailwind CSS architecture with high-contrast dark/light responsive layout',
      alt: 'TektoFlow Agency Services Section',
    },
    {
      image: '/works/tektoflow-brand-2.png',
      title: 'Official Brand Guidelines',
      caption: 'Codified color scales, typography tokens, and spacing metrics',
      alt: 'TektoFlow Style Guide',
    },
    {
      image: '/works/tektoflow-web-3.png',
      title: 'Selected Client Work',
      caption: 'Dynamic case study presentation and modular interactive showcase',
      alt: 'TektoFlow Work Portfolio',
    },
    {
      image: '/works/tektoflow-web-4.png',
      title: 'Metrics & Production Value',
      caption: 'Clear ROI communication and conversion-focused architecture',
      alt: 'TektoFlow Metrics',
    },
    {
      image: '/works/tektoflow-web-5.png',
      title: 'Conversion Funnel & Inquiries',
      caption: 'Streamlined contact flow and automated appointment inquiry funnels',
      alt: 'TektoFlow Contact Form',
    },
  ],
};

// All Curated Projects with ALL images and Bento Spans
export const allWorksData: WorkItem[] = [
  {
    id: 'tektoflow-agency-web',
    title: 'TektoFlow Agency Website',
    subtitle: 'MODERN AGENCY WEB PLATFORM',
    description:
      'High-impact agency web experience engineered with architectural grid styling, responsive service workflows, and high-conversion client inquiry funnels.',
    categories: ['FRONT-END', 'WEB DEVELOPMENT', 'UI DESIGN'],
    tags: ['AGENCY WEB', 'TAILWIND CSS', 'INTERACTIVE', 'FRONTEND'],
    year: '2024',
    client: 'TektoFlow Agency',
    image: '/works/tektoflow-web-1.png',
    status: 'COMPLETED',
    span: 'sm:col-span-2',
    gallery: [
      {
        image: '/works/tektoflow-web-1.png',
        title: 'Production Hero Section',
        caption: 'Dark architectural aesthetic with dynamic service overview',
      },
      {
        image: '/works/tektoflow-web-2.png',
        title: 'Agency Capabilities & Solutions',
        caption: 'Modular service matrix explaining engineering and design workflows',
      },
      {
        image: '/works/tektoflow-web-3.png',
        title: 'Client Case Studies & Showcase',
        caption: 'High-contrast portfolio showcase with responsive hover physics',
      },
      {
        image: '/works/tektoflow-web-4.png',
        title: 'Value Proposition & Metrics',
        caption: 'Performance marketing metrics and production guarantees',
      },
      {
        image: '/works/tektoflow-web-5.png',
        title: 'Client Inquiry & Conversion Flow',
        caption: 'Direct outreach mechanism built for frictionless inbound queries',
      },
    ],
  },
  {
    id: 'tektoflow-branding',
    title: 'TektoFlow Brand Identity System',
    subtitle: 'VISUAL GUIDELINES & ART DIRECTION',
    description:
      'Crafted the brand identity system, defining primary & secondary typography scales, color palettes, and authoring the official brand showcase guidelines (in collaboration with Moadh who crafted the logo).',
    categories: ['BRANDING', 'UI DESIGN'],
    tags: ['BRAND GUIDELINES', 'TYPOGRAPHY', 'COLOR THEORY', 'COLLABORATION'],
    year: '2024',
    client: 'TektoFlow Agency',
    image: '/works/tektoflow-brand-1.png',
    status: 'COMPLETED',
    span: 'col-span-1',
    gallery: [
      {
        image: '/works/tektoflow-brand-1.png',
        title: 'Brand Identity Mockups & Palette',
        caption: 'Logo application across physical apparel and digital interfaces',
      },
      {
        image: '/works/tektoflow-brand-2.png',
        title: 'Official Brand System Guidelines',
        caption: 'Color theory, hexadecimal tokens, and typographic hierarchy',
      },
    ],
  },
  {
    id: 'algo1-course',
    title: 'ALGO 1 Course Educational Platform',
    subtitle: 'DATA STRUCTURES & ALGORITHM SUITE',
    description:
      'Interactive educational platform tailored to the official USTHB computer science curriculum. Structures complex algorithmic theories, code syntax breakdowns, and interactive lecture modules.',
    categories: ['FRONT-END', 'EDUCATION', 'DATA SCIENCE'],
    tags: ['ALGORITHMS', 'DATA STRUCTURES', 'USTHB CS', 'EDUCATION'],
    year: '2024',
    client: 'USTHB Computer Science',
    image: '/works/algo1-course-1.png',
    status: 'COMPLETED',
    span: 'sm:col-span-2',
    gallery: [
      {
        image: '/works/algo1-course-1.png',
        title: 'Course Architecture & Syllabus',
        caption: '8 structured chapters covering the complete USTHB ALGO 1 program',
      },
      {
        image: '/works/algo1-course-2.png',
        title: 'Big-O Complexity & Proofs',
        caption: 'Time and space complexity visualization with mathematical rigor',
      },
      {
        image: '/works/algo1-course-3.png',
        title: 'Data Structures: Arrays & Pointers',
        caption: 'Memory indexing, multidimensional structures, and pointer manipulation',
      },
      {
        image: '/works/algo1-course-4.png',
        title: 'Sorting Algorithms Suite',
        caption: 'Bubble, insertion, quicksort, and binary search logic diagrams',
      },
      {
        image: '/works/algo1-course-5.png',
        title: 'Syntax & Code Breakdowns',
        caption: 'Side-by-side pseudocode and structured algorithmic implementation',
      },
      {
        image: '/works/algo1-course-6.png',
        title: 'Exam Preparation Modules',
        caption: '50+ curated exam questions with step-by-step breakdown',
      },
      {
        image: '/works/algo1-course-7.png',
        title: 'Interactive Exercise Bank',
        caption: 'Self-assessment quiz modules designed for CS undergraduate intuition',
      },
      {
        image: '/works/algo1-course-8.png',
        title: 'Mobile Learning Viewport',
        caption: 'Optimized touch-friendly reading experience for on-the-go review',
      },
    ],
  },
  {
    id: 'dental-clinic-template',
    title: 'Dental Clinic Web Experience (Templates)',
    subtitle: 'HEALTHCARE UI/UX & BOOKING FLOW',
    description:
      'Modern clinic template series with patient-friendly navigation, structured treatment catalogs, doctor credentials, and clean appointment booking workflows.',
    categories: ['FRONT-END', 'UI DESIGN', 'WEB DEVELOPMENT'],
    tags: ['HEALTHCARE', 'CLINIC TEMPLATE', 'BOOKING FLOW', 'RESPONSIVE'],
    year: '2024',
    client: 'Medical Practice Template',
    image: '/works/dental-clinic-1.png',
    status: 'COMPLETED',
    span: 'sm:col-span-2',
    gallery: [
      {
        image: '/works/dental-clinic-1.png',
        title: 'Homepage Hero & Trust Building',
        caption: 'Warm, reassuring medical aesthetics with prominent booking CTA',
      },
      {
        image: '/works/dental-clinic-2.png',
        title: 'Treatment Catalog & Procedures',
        caption: 'Clear descriptions of dental implants, whitening, and preventive care',
      },
      {
        image: '/works/dental-clinic-3.png',
        title: 'Medical Staff & Credentials',
        caption: 'Doctor biographies, clinical accreditations, and certifications',
      },
      {
        image: '/works/dental-clinic-4.png',
        title: 'Interactive Consultation Scheduler',
        caption: 'Step-by-step appointment calendar with real-time slot selection',
      },
      {
        image: '/works/dental-clinic-5.png',
        title: 'Patient Reviews & Social Proof',
        caption: 'Verified testimonials establishing patient confidence and satisfaction',
      },
      {
        image: '/works/dental-clinic-6.png',
        title: 'Pricing Transparency & Plans',
        caption: 'Clear pricing tiers and insurance compatibility guidelines',
      },
      {
        image: '/works/dental-clinic-7.png',
        title: 'Emergency Dental Assistance',
        caption: 'Rapid response hotline for urgent dental trauma and pain relief',
      },
      {
        image: '/works/dental-clinic-8.png',
        title: 'Mobile Viewport Booking Funnel',
        caption: 'Frictionless one-thumb mobile booking interaction',
      },
    ],
  },
  {
    id: 'oussama-benabida-portfolio',
    title: 'Oussama Benabida Academic Portfolio',
    subtitle: 'RESEARCH SHOWCASE & TOP-RANKED SEO',
    description:
      'Academic portfolio engineered for researcher Oussama Benabida. Highlighting publications, research interests, and academic credentials. Ranked #1 on Google Search Engine.',
    categories: ['FRONT-END', 'SEO', 'EDUCATION', 'WEB DEVELOPMENT'],
    tags: ['RANKED #1 ON GOOGLE', 'ACADEMIC PORTFOLIO', 'TECHNICAL SEO', 'CLEAN UI'],
    year: '2024',
    client: 'Oussama Benabida',
    image: '/works/oussama-portfolio-1.png',
    status: 'COMPLETED',
    metric: 'Ranked #1 on Google Search Engine',
    span: 'col-span-1',
    gallery: [
      {
        image: '/works/oussama-portfolio-1.png',
        title: 'Ranked #1 on Google Search Engine',
        caption: 'Verified #1 organic position for scholar and postdoctoral queries',
      },
      {
        image: '/works/oussama-portfolio-2.png',
        title: 'Scholarly Profile & Affiliations',
        caption: 'University of British Columbia & Université de Montréal postdoctoral overview',
      },
      {
        image: '/works/oussama-portfolio-3.png',
        title: 'Peer-Reviewed Publications Index',
        caption: 'Comprehensive list of academic papers, journals, and DOI links',
      },
      {
        image: '/works/oussama-portfolio-4.png',
        title: 'International Conferences & Talks',
        caption: 'Symposium presentations and academic lecture keynotes',
      },
      {
        image: '/works/oussama-portfolio-5.png',
        title: 'Academic Credentials & Thesis',
        caption: 'Doctoral achievements and university milestones',
      },
      {
        image: '/works/oussama-portfolio-6.png',
        title: 'Collaborative Research Labs',
        caption: 'Cross-institution partnerships and research grants',
      },
      {
        image: '/works/oussama-portfolio-7.png',
        title: 'Comprehensive Curriculum Vitae',
        caption: 'Academic achievements, teaching experience, and scholarly awards',
      },
      {
        image: '/works/oussama-portfolio-8.png',
        title: 'Direct Academic Inquiry Portal',
        caption: 'Clean, distraction-free outreach channel for peer inquiries',
      },
      {
        image: '/works/oussama-portfolio-9.png',
        title: 'Responsive Reading Layout',
        caption: 'Optimized typography for scholarly paper review on mobile devices',
      },
    ],
  },
  {
    id: 'old-ibrahim-portfolio',
    title: 'Ibrahim Benabida Portfolio (Archive)',
    subtitle: 'PREVIOUS ITERATION & SEO BENCHMARK',
    description:
      'The previous version of personal web portfolio. Featured early interactive web experiments, bespoke editorial layouts, and solid search engine ranking (#1 on Google for personal brand query).',
    categories: ['FRONT-END', 'WEB DEVELOPMENT', 'SEO'],
    tags: ['RANKED #1 ON GOOGLE', 'PORTFOLIO ARCHIVE', 'SEO ARCHITECTURE'],
    year: '2023 - 2024',
    client: 'Self-Initiated',
    image: '/works/old-portfolio-1.png',
    status: 'COMPLETED',
    metric: 'Ranked #1 on Google Search Engine',
    span: 'col-span-1',
    gallery: [
      {
        image: '/works/old-portfolio-1.png',
        title: 'Google #1 Organic Search Rank',
        caption: 'Search engine proof ranking #1 on Google search engine for personal brand',
      },
      {
        image: '/works/old-portfolio-2.png',
        title: 'Editorial Hero Archive',
        caption: 'Typographic hero layout and early monogram visual exploration',
      },
      {
        image: '/works/old-portfolio-3.png',
        title: 'Works Showcase Grid',
        caption: 'Previous case study layout and design project listings',
      },
      {
        image: '/works/old-portfolio-4.png',
        title: 'Mathematical Thinking & Logic',
        caption: 'Philosophy bridging USTHB data science with modern creative design',
      },
      {
        image: '/works/old-portfolio-5.png',
        title: 'Interactive Web Experiments',
        caption: 'Physics-based experiments and dynamic interface prototyping',
      },
      {
        image: '/works/old-portfolio-6.png',
        title: 'Inquiry & Contact System',
        caption: 'Direct outreach workflow with minimalist typography',
      },
      {
        image: '/works/old-portfolio-7.png',
        title: 'Monochrome Palette & Type Scales',
        caption: 'High-contrast black & white aesthetic study',
      },
      {
        image: '/works/old-portfolio-8.png',
        title: 'Colophon & Technical Specs',
        caption: 'Documentation of architecture, hosting, and performance tuning',
      },
      {
        image: '/works/old-portfolio-9.png',
        title: 'Mobile Experience Archive',
        caption: 'Ultra-lightweight mobile rendering and fast touch response',
      },
    ],
  },
  {
    id: 'usthb-tic-website',
    title: 'USTHB TIC Platform',
    subtitle: 'STUDENT TECH CLUB PORTAL',
    description:
      'Official web platform for USTHB TIC (Technologies de l\'Information et de la Communication), showcasing student tech events, club divisions, hackathons, and registrations.',
    categories: ['FRONT-END', 'EDUCATION', 'WEB DEVELOPMENT'],
    tags: ['USTHB TIC', 'CAMPUS TECH', 'COMMUNITY PORTAL', 'EVENT REGISTRATION'],
    year: '2024',
    client: 'USTHB TIC Club',
    image: '/works/usthb-tic-1.png',
    status: 'COMPLETED',
    span: 'col-span-1',
    gallery: [
      {
        image: '/works/usthb-tic-1.png',
        title: 'Student Tech Portal Hero',
        caption: 'Hero interface connecting USTHB tech students with community opportunities',
      },
      {
        image: '/works/usthb-tic-2.png',
        title: 'Club Divisions & Technical Teams',
        caption: 'Web Dev, Mobile, AI/Data, and Design sub-teams overview',
      },
      {
        image: '/works/usthb-tic-3.png',
        title: 'Hackathons & Workshop Signups',
        caption: 'Interactive event registration workflows for campus tech hackathons',
      },
      {
        image: '/works/usthb-tic-4.png',
        title: 'Community Projects Hub',
        caption: 'Showcasing open-source student initiatives and mentor networks',
      },
    ],
  },
  {
    id: 'smily-social-media',
    title: 'Smily Dental Social Media Suite',
    subtitle: 'POSTS & CAROUSEL VISUAL SYSTEM',
    description:
      'High-conversion social media campaign visuals and informational carousels designed for modern dental healthcare, hygiene tips, and clinic promotion.',
    categories: ['SOCIAL MEDIA', 'BRANDING'],
    tags: ['CAROUSELS', 'INSTAGRAM', 'HEALTHCARE PROMO', 'VISUAL DESIGN'],
    year: '2024',
    client: 'Smily (Concept Clinic)',
    image: '/works/smily-clinic-1.jpg',
    status: 'COMPLETED',
    span: 'col-span-1',
    gallery: [
      {
        image: '/works/smily-clinic-1.jpg',
        title: 'Campaign Series: The Future Of Your Smile',
        caption: '4-part visual campaign collection: The Future of Smile & Crafted Aesthetics',
        alt: 'Smily Dental 4-Poster Campaign Grid',
      },
      {
        image: '/works/smily-clinic-2.jpg',
        title: 'Modern Care, Without The Boring Part',
        caption: 'Lifestyle patient engagement flyer with fresh editorial typography and brand voice',
        alt: 'Smily Modern Care Poster',
      },
      {
        image: '/works/smily-clinic-3.jpg',
        title: 'Your Natural Smile, Carefully Crafted',
        caption: 'Premium clinic positioning poster emphasizing gentle aesthetic care',
        alt: 'Smily Carefully Crafted Poster',
      },
      {
        image: '/works/smily-clinic-4.jpg',
        title: 'The Future Of Your Smile',
        caption: 'Next-generation dental clinic hero poster with clean minimal layout',
        alt: 'Smily Future of Your Smile Poster',
      },
    ],
  },
  {
    id: 'ascend-social-media',
    title: 'ASCEND Academy Social Media Kit',
    subtitle: 'CAMPAIGN POSTERS & CAROUSELS',
    description:
      'Dynamic educational social media graphics created for student announcements, course highlights, and promotional enrollment flyers.',
    categories: ['SOCIAL MEDIA', 'EDUCATION'],
    tags: ['ACADEMY', 'SOCIAL MEDIA', 'CAMPAIGN FLYERS', 'CAROUSELS'],
    year: '2024',
    client: 'ASCEND (Concept School)',
    image: '/works/ascend-school-1.jpg',
    status: 'COMPLETED',
    span: 'col-span-1',
    gallery: [
      {
        image: '/works/ascend-school-1.jpg',
        title: 'Rewrite Your Grades Campaign',
        caption: 'High-contrast motivational campaign poster with bold typography',
      },
      {
        image: '/works/ascend-school-2.jpg',
        title: 'Welcome Back Announcement',
        caption: 'School re-opening event poster with dynamic visual composition',
      },
      {
        image: '/works/ascend-school-3.jpg',
        title: 'Free Intro Session Flyer',
        caption: 'High-converting trial enrollment creative with booking incentive',
      },
      {
        image: '/works/ascend-school-4.jpg',
        title: 'Course Catalog & Curriculum',
        caption: 'Clean informational layout highlighting academic courses',
      },
      {
        image: '/works/ascend-school-5.jpg',
        title: 'Exam Preparation Bootcamp',
        caption: 'Urgency-driven promotion for intensive exam tutoring sessions',
      },
      {
        image: '/works/ascend-school-6.jpg',
        title: 'Student Success Testimonials',
        caption: 'Outcome-oriented social proof graphics for student enrollment',
      },
    ],
  },
  {
    id: 'product-design-transformation',
    title: 'Product Design Visual Transformation',
    subtitle: 'BEFORE & AFTER RETOUCHING',
    description:
      'Art direction and commercial retouching converting initial studio captures into luxury packaging presentations (LUMIO Alluring Attitude Hair Ritual & Rudy\'s No. 1 Shampoo).',
    categories: ['SOCIAL MEDIA', 'UI DESIGN'],
    tags: ['BEFORE & AFTER', 'PRODUCT DESIGN', 'LUMIO COSMETICS', 'RUDYS SHAMPOO', 'RETOUCHING'],
    year: '2024',
    client: 'Commercial Showcase',
    image: '/works/lumio-after.jpg',
    status: 'COMPLETED',
    span: 'col-span-1',
    gallery: [
      {
        image: '/works/lumio-after.jpg',
        title: 'LUMIO Hair Ritual — After Overhaul',
        caption: 'Commercial-grade cosmetics presentation with editorial studio lighting & glass reflections',
        alt: 'LUMIO Alluring Attitude Hair Ritual After Overhaul',
      },
      {
        image: '/works/lumio-before.jpg',
        title: 'LUMIO Hair Ritual — Before Retouching',
        caption: 'Raw baseline photograph prior to lighting overhaul and digital packaging cleanup',
        alt: 'LUMIO Hair Ritual Before Retouching',
      },
      {
        image: '/works/rudys-shampoo-after.jpg',
        title: "Rudy's No. 1 Shampoo — After Overhaul",
        caption: 'Deep realistic shadows, specular reflections, and commercial bottle label illumination',
        alt: "Rudy's No. 1 Shampoo After Overhaul",
      },
      {
        image: '/works/rudys-shampoo-before.jpg',
        title: "Rudy's No. 1 Shampoo — Before Retouching",
        caption: 'Flat unedited studio capture before digital overhaul and contrast grading',
        alt: "Rudy's No. 1 Shampoo Before Retouching",
      },
    ],
  },
  {
    id: 'ibrahim-personal-identity',
    title: 'Ibrahim Personal Brand & System',
    subtitle: 'ARCHITECTURAL GRID & MONOGRAM IDENTITY',
    description:
      'Bespoke personal brand identity unifying the signature hand-drawn mark, geometric "B." monogram, Black Cherry (#5A1212) and Soft Linen (#E8E3D9) architectural language.',
    categories: ['BRANDING', 'UI DESIGN'],
    tags: ['PERSONAL BRAND', 'SIGNATURE LOGO', 'MONOGRAM', 'IDENTITY SYSTEM'],
    year: '2024',
    client: 'Ibrahim Benabida',
    image: '/logo-ibrahim.jpg',
    status: 'COMPLETED',
    span: 'col-span-1',
    gallery: [
      {
        image: '/logo-ibrahim.jpg',
        title: 'Signature Hand-Drawn Monogram & Mark',
        caption: 'Unifying algorithmic logic with artistic expression in an iconic visual mark',
      },
    ],
  },
  {
    id: 'zero-dom-scraper',
    title: 'Zero-DOM Auto-Healing Scraper',
    subtitle: 'HEURISTIC RESILIENT DATA EXTRACTION',
    description:
      'Resilient web scraping engine engineered with mutation-resilient algorithms and self-healing selectors that automatically adapt to DOM alterations without pipeline disruption.',
    categories: ['DATA SCIENCE', 'WEB DEVELOPMENT'],
    tags: ['DATA SCIENCE', 'AUTONOMOUS AGENTS', 'PYTHON', 'HEURISTIC SCRAPER'],
    year: '2024 - 2025',
    client: 'Active Engineering Lab',
    status: 'IN_PROGRESS',
    metric: 'Active Development // Files & Architecture in Progress',
    span: 'col-span-1',
  },
  {
    id: 'kairos-studio-ai',
    title: 'Kairos Studio (Social Media Design AI)',
    subtitle: 'AUTONOMOUS GENERATIVE WORKFLOW',
    description:
      'Proprietary generative system that orchestrates AI vision models and layout engines to produce platform-native social media carousels and graphics automatically.',
    categories: ['DATA SCIENCE', 'SOCIAL MEDIA', 'BRANDING'],
    tags: ['GENERATIVE AI', 'DATA SCIENCE', 'AUTOMATED GRAPHICS', 'PRIVATE VENTURE'],
    year: '2024',
    client: 'Private Venture',
    status: 'PRIVATE',
    metric: 'Private Laboratory Project // Details Confidential',
    span: 'col-span-1',
  },
  {
    id: 'academic-support-web',
    title: 'Academic Support Platform',
    subtitle: 'PEER MENTORSHIP & RESOURCE PORTAL',
    description:
      'Collaborative web platform interface designed for peer mentorship, course resource exchanges, and university study groups.',
    categories: ['FRONT-END', 'EDUCATION', 'UI DESIGN'],
    tags: ['ACADEMIC SUPPORT', 'EDUCATION', 'PEER PORTAL', 'COMING SOON'],
    year: '2024 - 2025',
    client: 'University Support Network',
    status: 'COMING_SOON',
    metric: 'Space Reserved // Details & Media Coming Soon',
    span: 'col-span-1',
  },
  {
    id: 'portfolio-remake-2026',
    title: 'Ibrahim Benabida 2026 Portfolio',
    subtitle: 'ARCHITECTURAL GRID & MOTION SYSTEM',
    description:
      'The current production portfolio: real-time multi-timezone marquee ticker, interactive generative waveform canvas, dynamic expanding scroll physics, and multi-page routing.',
    categories: ['FRONT-END', 'UI DESIGN', 'WEB DEVELOPMENT'],
    tags: ['REACT 19', 'TAILWIND', 'VITE', 'MOTION PHYSICS', 'LIVE NOW'],
    year: '2026',
    client: 'Self-Initiated',
    image: '/profile/usthb-facade.jpg',
    status: 'COMPLETED',
    span: 'sm:col-span-2',
    gallery: [
      {
        image: '/profile/usthb-facade.jpg',
        title: 'USTHB Monumental Arches',
        caption: 'Iconic brutalist concrete arches under golden sunset clouds at USTHB Algiers',
      },
      {
        image: '/profile/usthb-campus.jpg',
        title: 'USTHB Faculty Campus Grounds',
        caption: 'Modern academic architecture, palm trees, and university lawns in Bab Ezzouar',
      },
      {
        image: '/profile/park-sunset.jpg',
        title: 'Golden Hour Park Bench',
        caption: 'Low-angle golden sunlight illuminating the meadow and architectural curved bench',
      },
      {
        image: '/profile/lake-twilight.jpg',
        title: 'Twilight Reflections & Waterfront',
        caption: 'Atmospheric evening view across the water with duck silhouettes and night city lights',
      },
      {
        image: '/profile/golden-forest.jpg',
        title: 'Pine Forest Grove Canopy',
        caption: 'Sunlight filtering through tree trunks into an open golden meadow',
      },
    ],
  },
];
