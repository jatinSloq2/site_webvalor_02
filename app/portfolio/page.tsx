"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Users,
  Award,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const portfolioItems = [
  {
    id: 1,
    title: "TechFlow SaaS Platform",
    category: "web-development",
    description:
      "A comprehensive SaaS platform for project management with real-time collaboration features.",
    longDescription:
      "Built a complete project management SaaS platform with real-time collaboration, file sharing, time tracking, and advanced analytics. The platform serves over 10,000 users and handles millions of tasks.",
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
      "Sustainable e-commerce platform with advanced filtering and recommendation system.",
    longDescription:
      "Created a modern e-commerce platform focused on sustainable products with AI-powered recommendations, advanced filtering, and seamless checkout experience.",
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
      "Mental health and wellness mobile app with guided meditation and mood tracking.",
    longDescription:
      "Designed and developed a comprehensive mental health app featuring guided meditations, mood tracking, progress analytics, and community support features.",
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
      "Complete brand identity and design system for luxury fashion brand.",
    longDescription:
      "Created a comprehensive brand identity for a luxury fashion brand including logo design, brand guidelines, packaging design, and digital brand assets.",
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
      "Advanced financial analytics dashboard with real-time data visualization.",
    longDescription:
      "Built a sophisticated financial dashboard for investment management with real-time market data, portfolio analytics, and risk assessment tools.",
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
      "Interactive online learning platform with video streaming and progress tracking.",
    longDescription:
      "Developed a comprehensive e-learning platform with video streaming, interactive quizzes, progress tracking, and certification management for online education.",
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

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web-development", name: "Web Development" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "design", name: "Design & Branding" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory,
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge variant="outline" className="mb-4">
                Our Portfolio
              </Badge>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Showcasing our
                <span className="block gradient-text">best work</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our portfolio of successful projects that demonstrate
                our expertise in creating exceptional digital experiences across
                various industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-12 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <AnimatePresence mode="wait">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    layout
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(item)}
                  >
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/50">
                      {/* Project Image */}
                      <div className="relative h-64 lg:h-80 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <div className="text-8xl font-brand font-bold text-primary/30">
                            {item.title.charAt(0)}
                          </div>
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(item.liveUrl, "_blank");
                            }}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Live
                          </Button>
                          {item.githubUrl !== "#" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(item.githubUrl, "_blank");
                              }}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          )}
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">
                            {
                              categories.find((c) => c.id === item.category)
                                ?.name
                            }
                          </Badge>
                        </div>

                        {/* Year Badge */}
                        <div className="absolute top-4 right-4">
                          <Badge
                            variant="outline"
                            className="bg-white/10 border-white/20 text-white"
                          >
                            {item.year}
                          </Badge>
                        </div>
                      </div>

                      {/* Project Info */}
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                              {item.title}
                            </CardTitle>
                            <CardDescription className="mt-2">
                              {item.description}
                            </CardDescription>
                          </div>
                          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </CardHeader>

                      <CardContent>
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.technologies.slice(0, 4).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {item.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{item.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>

                        {/* Project Stats */}
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{item.teamSize}</span>
                          </div>
                          {item.awards.length > 0 && (
                            <div className="flex items-center space-x-1">
                              <Award className="w-4 h-4" />
                              <span>
                                {item.awards.length} award
                                {item.awards.length > 1 ? "s" : ""}
                              </span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                Ready to create your success story?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's work together to bring your vision to life and create
                something that stands out in your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-primary text-white px-8 py-4 text-lg hover:shadow-lg transition-shadow animate-pulse-glow">
                  Start Your Project
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg">
                  View More Work
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
