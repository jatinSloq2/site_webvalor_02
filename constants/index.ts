import {
  Award,
  Brain,
  Clock,
  Cloud,
  Code,
  Folder,
  Globe,
  Heart,
  Lightbulb,
  Palette,
  Rocket,
  Shield,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

// ===== SERVICES DATA =====
export const services = [
  {
    icon: Code,
    title: "Web Development",
    shortDescription:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    longDescription:
      "We create responsive, fast, and scalable web applications using cutting-edge technologies like React, Next.js, and Node.js. Our development process ensures your website is visually stunning, performs seamlessly across devices, and is optimized for security, speed, and search engines.",
    features: [
      "React/Next.js Development",
      "Node.js Backend Services",
      "TypeScript Implementation",
      "GraphQL API Integration",
      "Database Design & Optimization",
      "Progressive Web Apps",
      "SEO Implementation",
      "Security Best Practices",
    ],
    process: [
      "Requirements Analysis",
      "Technical Architecture",
      "Development & Testing",
      "Deployment & Launch",
    ],
    pricing: "From ₹25k",
    timeline: "4-12 weeks",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    projects: "50+",
    satisfaction: "98%",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    shortDescription:
      "Intuitive, user-centered interfaces designed for exceptional user experiences and optimal conversions.",
    longDescription:
      "Our design team crafts visually stunning and intuitive interfaces that prioritize usability, accessibility, and user engagement. We focus on creating designs that not only look beautiful but also drive conversions and delight users across all platforms and devices.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Figma Design Systems",
      "Interactive Prototypes",
      "Usability Testing",
      "Responsive Design",
      "Accessibility Compliance (WCAG)",
      "Design Documentation",
    ],
    process: [
      "User Research",
      "Design Strategy",
      "Visual Design",
      "Testing & Iteration",
    ],
    pricing: "From ₹20k",
    timeline: "3-8 weeks",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    projects: "40+",
    satisfaction: "99%",
  },
  {
    icon: Rocket,
    title: "Brand Identity",
    shortDescription:
      "Memorable brand packages that resonate with your audience and build lasting recognition.",
    longDescription:
      "We build strong brand identities that foster recognition and trust. Our comprehensive packages include logo design, brand guidelines, and marketing materials tailored to your business's unique story and goals, ensuring consistency across all touchpoints.",
    features: [
      "Logo Design & Variations",
      "Brand Guidelines",
      "Color Palette Development",
      "Typography Selection",
      "Business Card Design",
      "Marketing Collateral",
      "Digital Asset Library",
      "Brand Strategy Consulting",
    ],
    process: [
      "Brand Discovery",
      "Concept Development",
      "Design Refinement",
      "Final Delivery",
    ],
    pricing: "From ₹15k",
    timeline: "2-6 weeks",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    projects: "30+",
    satisfaction: "100%",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    shortDescription:
      "Lightning-fast websites optimized for SEO, Core Web Vitals, and maximum conversions.",
    longDescription:
      "We enhance your website's performance to ensure fast load times, high search engine rankings, and superior user experiences. Our optimization strategies focus on speed, SEO, and Core Web Vitals to maximize conversions and improve user satisfaction.",
    features: [
      "PageSpeed Insights Optimization",
      "Core Web Vitals Improvement",
      "SEO Audits & Optimization",
      "Image & Asset Compression",
      "Caching Implementation",
      "CDN Configuration",
      "Performance Monitoring",
      "Analytics Integration",
    ],
    process: [
      "Performance Audit",
      "Optimization Strategy",
      "Implementation",
      "Monitoring & Reporting",
    ],
    pricing: "From ₹10k",
    timeline: "1-4 weeks",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    projects: "35+",
    satisfaction: "97%",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    shortDescription:
      "Secure, scalable online stores designed to drive sales and provide seamless shopping experiences.",
    longDescription:
      "We develop robust e-commerce platforms with seamless payment processing, inventory management, and user-friendly interfaces. Our solutions are designed to scale with your business, optimize conversions, and provide exceptional shopping experiences.",
    features: [
      "Shopify/WooCommerce Development",
      "Stripe/PayPal Integration",
      "Headless CMS Implementation",
      "Inventory Management Systems",
      "Customer Account Portals",
      "Mobile-Responsive Stores",
      "SSL Security Implementation",
      "E-commerce Analytics",
    ],
    process: [
      "Store Planning",
      "Development & Integration",
      "Testing & Security",
      "Launch & Training",
    ],
    pricing: "From ₹40k",
    timeline: "6-16 weeks",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    projects: "25+",
    satisfaction: "100%",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    shortDescription:
      "Engaging mobile apps for iOS, Android, and cross-platform that deliver exceptional user experiences.",
    longDescription:
      "We create high-performance mobile apps tailored to your needs, offering native and cross-platform solutions. Our apps deliver seamless user experiences, are optimized for performance, and are designed for maximum discoverability in app stores.",
    features: [
      "iOS Development (Swift)",
      "Android Development (Kotlin)",
      "React Native Cross-Platform",
      "App Store Optimization",
      "Push Notification Systems",
      "Offline Functionality",
      "API Integrations",
      "App Analytics",
    ],
    process: [
      "App Strategy",
      "Design & Development",
      "Testing & QA",
      "App Store Submission",
    ],
    pricing: "From ₹50k",
    timeline: "8-20 weeks",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    projects: "20+",
    satisfaction: "95%",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    shortDescription:
      "Scalable and secure cloud infrastructure designed for business growth and reliability.",
    longDescription:
      "We design and deploy cloud-based solutions to ensure scalability, reliability, and cost-efficiency. From serverless architectures to CI/CD pipelines, we empower your business with modern cloud technologies that grow with your needs.",
    features: [
      "AWS/Azure/GCP Deployment",
      "Serverless Architecture",
      "Microservices Design",
      "CI/CD Pipeline Setup",
      "Cloud Security",
      "Database Migration",
      "Cost Optimization",
      "Monitoring & Alerts",
    ],
    process: [
      "Cloud Strategy",
      "Architecture Design",
      "Implementation & Testing",
      "Ongoing Management",
    ],
    pricing: "From ₹30k",
    timeline: "4-10 weeks",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    projects: "15+",
    satisfaction: "96%",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    shortDescription:
      "Robust security measures to protect your digital assets and ensure compliance with industry standards.",
    longDescription:
      "Our cybersecurity services safeguard your applications and data with comprehensive audits, secure coding practices, and ongoing monitoring to protect against threats and ensure compliance with industry regulations.",
    features: [
      "Penetration Testing",
      "SSL/TLS Implementation",
      "Data Encryption",
      "Compliance Audits (GDPR, HIPAA)",
      "Firewall Configuration",
      "Vulnerability Assessments",
      "Security Training",
      "Incident Response",
    ],
    process: [
      "Security Assessment",
      "Strategy & Planning",
      "Implementation",
      "Monitoring & Support",
    ],
    pricing: "From ₹20k",
    timeline: "3-8 weeks",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    projects: "12+",
    satisfaction: "100%",
  },
  {
    icon: Brain,
    title: "AI Integration",
    shortDescription:
      "Smart AI-driven features to enhance your applications with intelligent automation and insights.",
    longDescription:
      "We integrate AI-driven features like chatbots, personalization engines, and data analytics to make your applications smarter and more engaging, leveraging machine learning and natural language processing for enhanced user experiences.",
    features: [
      "Machine Learning Models",
      "AI Chatbot Development",
      "Personalization Engines",
      "Natural Language Processing",
      "Predictive Analytics",
      "AI API Integration",
      "Model Training",
      "Performance Monitoring",
    ],
    process: [
      "AI Strategy",
      "Model Development",
      "Integration & Testing",
      "Deployment & Optimization",
    ],
    pricing: "From ₹35k",
    timeline: "6-14 weeks",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    projects: "8+",
    satisfaction: "98%",
  },
];

// ===== DESIGN TOKENS =====
export const designTokens = {
  colors: {
    primary: {
      blue: "text-blue-500",
      purple: "text-purple-500",
      green: "text-green-500",
      yellow: "text-yellow-500",
      red: "text-red-500",
      indigo: "text-indigo-500",
      teal: "text-teal-500",
      orange: "text-orange-500",
      pink: "text-pink-500",
    },
    backgrounds: {
      blue: "bg-blue-500/10",
      purple: "bg-purple-500/10",
      green: "bg-green-500/10",
      yellow: "bg-yellow-500/10",
      red: "bg-red-500/10",
      indigo: "bg-indigo-500/10",
      teal: "bg-teal-500/10",
      orange: "bg-orange-500/10",
      pink: "bg-pink-500/10",
    },
  },
  animations: {
    cardHover:
      "hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50",
    iconHover: "whileHover={{ scale: 1.1, rotate: 5 }}",
    buttonHover: "hover:shadow-xl transition-all duration-300",
    scaleAnimation: "whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}",
  },
  spacing: {
    cardPadding: "p-6",
    sectionPadding: "py-24",
    containerPadding: "px-4 sm:px-6 lg:px-8",
    maxWidth: "mx-auto max-w-7xl",
  },
};

// ===== STATISTICS =====
export const companyStats = [
  {
    icon: Folder,
    value: "15+",
    label: "Projects Delivered",
    description: "Completed freelance and personal projects across web and UI design",
    color: "text-primary",
  },
  {
    icon: Users,
    value: "10+",
    label: "Happy Clients",
    description: "Clients served with successful results in various domains",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Success Rate",
    description: "Timely and quality delivery on most projects",
    color: "text-primary",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Client Rating",
    description: "Average rating based on direct client feedback and testimonials",
    color: "text-primary",
  },
];

// ===== PORTFOLIO DATA =====
export const portfolioItems = [
  {
    id: 1,
    title: "TechFlow SaaS Platform",
    category: "web-development",
    description:
      "A comprehensive SaaS platform for project management with real-time collaboration features.",
    longDescription:
      "Built a complete project management SaaS platform with real-time collaboration, file sharing, time tracking, and advanced analytics. The platform serves over 10,000 users and handles millions of tasks efficiently with 99.9% uptime.",
    image: "/api/placeholder/800/600",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "WebSocket",
      "Stripe",
    ],
    liveUrl: "https://techflow.example.com",
    githubUrl: "https://github.com/example/techflow",
    year: "2024",
    client: "TechFlow Inc.",
    duration: "12 weeks",
    teamSize: "5 members",
    awards: ["Best SaaS Design 2024"],
    results: {
      userGrowth: "300%",
      performanceImprovement: "60%",
      conversionRate: "25%",
    },
  },
  {
    id: 2,
    title: "EcoMart E-commerce",
    category: "web-development",
    description:
      "Sustainable e-commerce platform with advanced filtering and AI-powered recommendation system.",
    longDescription:
      "Created a modern e-commerce platform focused on sustainable products with AI-powered recommendations, advanced filtering, seamless checkout experience, and comprehensive inventory management system.",
    image: "/api/placeholder/800/600",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "AWS",
      "ElasticSearch",
    ],
    liveUrl: "https://ecomart.example.com",
    githubUrl: "https://github.com/example/ecomart",
    year: "2023",
    client: "EcoMart",
    duration: "16 weeks",
    teamSize: "6 members",
    awards: ["E-commerce Excellence Award"],
    results: {
      salesIncrease: "150%",
      pageLoadSpeed: "2.1s",
      customerSatisfaction: "95%",
    },
  },
  {
    id: 3,
    title: "MindSpace Mobile App",
    category: "mobile",
    description:
      "Mental health and wellness mobile app with guided meditation and comprehensive mood tracking.",
    longDescription:
      "Designed and developed a comprehensive mental health app featuring guided meditations, mood tracking, progress analytics, community support features, and personalized wellness plans based on user behavior.",
    image: "/api/placeholder/800/600",
    technologies: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "Stripe",
    ],
    liveUrl: "https://apps.apple.com/mindspace",
    githubUrl: "https://github.com/example/mindspace",
    year: "2023",
    client: "MindSpace Wellness",
    duration: "20 weeks",
    teamSize: "4 members",
    awards: ["Best Health App 2023"],
    results: {
      downloads: "100K+",
      userRetention: "85%",
      appRating: "4.8/5",
    },
  },
  {
    id: 4,
    title: "Luxe Brand Identity",
    category: "design",
    description:
      "Complete brand identity and design system for luxury fashion brand with international appeal.",
    longDescription:
      "Created a comprehensive brand identity for a luxury fashion brand including logo design, brand guidelines, packaging design, digital brand assets, and marketing materials that elevated their market presence significantly.",
    image: "/api/placeholder/800/600",
    technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision"],
    liveUrl: "https://luxefashion.example.com",
    githubUrl: "#",
    year: "2024",
    client: "Luxe Fashion House",
    duration: "8 weeks",
    teamSize: "3 members",
    awards: ["Design Excellence Award"],
    results: {
      brandRecognition: "200%",
      customerEngagement: "180%",
      salesImpact: "120%",
    },
  },
  {
    id: 5,
    title: "FinTech Dashboard",
    category: "web-development",
    description:
      "Advanced financial analytics dashboard with real-time data visualization and risk assessment tools.",
    longDescription:
      "Built a sophisticated financial dashboard for investment management with real-time market data, portfolio analytics, risk assessment tools, and automated reporting features for institutional clients.",
    image: "/api/placeholder/800/600",
    technologies: [
      "React",
      "D3.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "WebSocket",
    ],
    liveUrl: "https://fintech-dashboard.example.com",
    githubUrl: "https://github.com/example/fintech",
    year: "2023",
    client: "InvestTech Solutions",
    duration: "14 weeks",
    teamSize: "7 members",
    awards: ["FinTech Innovation Award"],
    results: {
      dataProcessing: "10x faster",
      userProductivity: "40%",
      decisionSpeed: "60%",
    },
  },
  {
    id: 6,
    title: "EduLearn Platform",
    category: "web-development",
    description:
      "Interactive online learning platform with video streaming, progress tracking, and certification management.",
    longDescription:
      "Developed a comprehensive e-learning platform with video streaming, interactive quizzes, progress tracking, certification management, and collaborative learning features for online education providers.",
    image: "/api/placeholder/800/600",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "Stripe",
      "Socket.io",
    ],
    liveUrl: "https://edulearn.example.com",
    githubUrl: "https://github.com/example/edulearn",
    year: "2024",
    client: "EduLearn Academy",
    duration: "18 weeks",
    teamSize: "8 members",
    awards: ["EdTech Excellence Award"],
    results: {
      studentEnrollment: "500%",
      completionRate: "78%",
      userEngagement: "300%",
    },
  },
];

// ===== SERVICE CATEGORIES =====
export const serviceCategories = [
  {
    title: "Digital Strategy",
    description: "Foundation for digital success and growth",
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    services: ["Web Development", "Performance Optimization", "AI Integration"],
  },
  {
    title: "Creative Design",
    description: "Visual excellence that converts and engages",
    icon: Lightbulb,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    services: ["UI/UX Design", "Brand Identity"],
  },
  {
    title: "Technology Solutions",
    description: "Advanced technical implementation and infrastructure",
    icon: Zap,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    services: [
      "E-commerce Solutions",
      "Mobile Development",
      "Cloud Solutions",
      "Cybersecurity",
    ],
  },
];

// ===== COMMON FEATURES FOR REUSABILITY =====
export const commonFeatures = {
  checkmarks: [
    "Free consultation",
    "Custom solutions",
    "Guaranteed satisfaction",
    "24/7 support",
    "Agile methodology",
    "Quality assurance",
  ],
  processSteps: [
    {
      phase: "01",
      title: "Discovery & Strategy",
      duration: "1-2 weeks",
      description:
        "Deep dive into your business goals, user needs, and market landscape to create a comprehensive project roadmap.",
      deliverables: [
        "Project Roadmap",
        "User Personas",
        "Technical Architecture",
        "Timeline & Budget",
      ],
      icon: Target,
    },
    {
      phase: "02",
      title: "Design & Planning",
      duration: "2-4 weeks",
      description:
        "Create stunning designs and detailed technical specifications that align with your brand and objectives.",
      deliverables: [
        "Wireframes",
        "Visual Designs",
        "Interactive Prototypes",
        "Design System",
      ],
      icon: Lightbulb,
    },
    {
      phase: "03",
      title: "Development & Testing",
      duration: "4-12 weeks",
      description:
        "Build, test, and refine your digital solution with precision using modern development practices.",
      deliverables: [
        "MVP Development",
        "Quality Assurance",
        "Performance Testing",
        "Security Audits",
      ],
      icon: Zap,
    },
    {
      phase: "04",
      title: "Launch & Growth",
      duration: "Ongoing",
      description:
        "Deploy, monitor, and continuously optimize for success with ongoing support and maintenance.",
      deliverables: [
        "Production Deployment",
        "Performance Monitoring",
        "User Analytics",
        "Ongoing Support",
      ],
      icon: TrendingUp,
    },
  ],
};

// ===== COMPANY VALUES =====
export const companyValues = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible, embracing cutting-edge technologies and methodologies to deliver solutions that are ahead of the curve.",
    stats: "Latest Tech Stack",
  },
  {
    icon: Heart,
    title: "Passion-Driven",
    description:
      "Every line of code, every design element, and every strategy is crafted with genuine passion and attention to detail that shows in our exceptional results.",
    stats: "100% Commitment",
  },
  {
    icon: Users,
    title: "Collaborative Excellence",
    description:
      "We work closely with our clients as true partners, fostering relationships built on trust, transparency, and shared success.",
    stats: "95% Client Retention",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description:
      "Speed, efficiency, and optimization are at the core of everything we build. We're committed to delivering blazing-fast, highly-performant solutions.",
    stats: "Sub-2s Load Times",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Creating digital experiences that transcend borders and inspire audiences worldwide, making technology accessible to businesses everywhere.",
    stats: "International Reach",
  },
  {
    icon: Award,
    title: "Excellence Standard",
    description:
      "We don't just meet expectations—we exceed them. Our commitment to quality ensures every project meets the highest industry standards.",
    stats: "Zero Compromises",
  },
];

// ===== WHY CHOOSE US =====
export const whyChooseUs = [
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Deep knowledge across multiple industries and cutting-edge technologies with proven track record of success.",
    stats: "5+ Years Experience",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Expert developers, designers, and strategists focused on your success with personalized attention to every project.",
    stats: "2+ Team Members",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Proven track record of delivering high-quality projects on schedule without compromising on quality or features.",
    stats: "98% On-Time Rate",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description:
      "Rigorous testing and quality assurance for every project with ongoing support and maintenance included.",
    stats: "100% Quality Assured",
  },
];


export const faqItems = [
  {
    question: "How quickly can you start my project?",
    answer:
      "We typically begin new projects within 1–2 weeks after contract signing, depending on our current workload and the complexity of your project.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes! We provide comprehensive post-launch support including maintenance, updates, security monitoring, and technical assistance to keep your website or application performing optimally.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "Timelines depend on scope and complexity. Simple business websites take 2–4 weeks, while complex web applications can take 8–16 weeks. We provide a detailed project plan during the consultation stage.",
  },
  {
    question: "Can you work with my existing team?",
    answer:
      "Absolutely! We collaborate seamlessly with in-house teams, marketing agencies, and other stakeholders to ensure smooth project delivery and efficient knowledge transfer.",
  },
  {
    question: "Do you work with both startups and established businesses?",
    answer:
      "Yes, we work with clients of all sizes — from startups looking to establish an online presence to large enterprises in need of custom solutions.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies such as HTML5, CSS3, JavaScript (React, Vue, Angular), Node.js, Express.js, PHP, Laravel, and CMS platforms like WordPress and Shopify.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Of course! We can modernize your website’s design, improve its performance, and optimize it for SEO and mobile responsiveness without losing your brand identity.",
  },
  {
    question: "Do you provide SEO and performance optimization?",
    answer:
      "Yes, all our projects follow best practices for SEO and site speed. We also offer dedicated SEO services to help improve your search engine rankings.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, every website we create is fully responsive, ensuring it looks and works perfectly on all devices — desktops, tablets, and smartphones.",
  },
  {
    question: "Can you integrate third-party tools and APIs?",
    answer:
      "Yes, we have extensive experience integrating payment gateways, CRMs, analytics tools, social media platforms, and other third-party APIs to extend your website’s functionality.",
  },
];

export default {
  faqItems,
  services,
  designTokens,
  companyStats,
  portfolioItems,
  serviceCategories,
  commonFeatures,
  companyValues,
  whyChooseUs,
};
