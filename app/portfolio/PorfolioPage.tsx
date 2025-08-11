"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  Code,
  ExternalLink,
  Eye,
  Github,
  Globe,
  Palette,
  Search,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import * as React from "react";

import {
  CTASection,
  PageHero,
  PageSection,
} from "@/components/layout/page-layout";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { portfolioItems } from "@/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PortfolioItemType, PortfolioResponseType } from "@/components/sections/portfolio";
import axios from "axios";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Stripe",
  "Firebase",
  "React Native",
  "Figma",
  "D3.js",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedProject, setSelectedProject] = React.useState<number | null>(
    null,
  );
  const [portfolioItems, setPortfolioItems] = React.useState<PortfolioItemType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get<PortfolioResponseType>("/api/get/projects");
        if (res.data.success) {
          setPortfolioItems(res.data.data);
          console.log(res)
        } else {
          throw new Error("Failed to fetch projects");
        }
      } catch (err: any) {
        setError(err.response?.data?.error || err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    return matchesCategory && matchesSearch;
  });

  const projectStats = {
    totalProjects: portfolioItems.length,
    totalClients: new Set(portfolioItems.map((item) => item.client)).size,
    averageProjectDuration: "12 weeks",
    successRate: "100%",
  };

  const categories = [
    {
      id: "all",
      name: "All Projects",
      count: portfolioItems.length,
      icon: Globe,
      color: "text-primary",
    },
    {
      id: "web-development",
      name: "Web Development",
      count: portfolioItems.filter((item) => item.category === "web-development")
        .length,
      icon: Code,
      color: "text-blue-500",
    },
    {
      id: "mobile",
      name: "Mobile Apps",
      count: portfolioItems.filter((item) => item.category === "mobile").length,
      icon: Smartphone,
      color: "text-green-500",
    },
    {
      id: "design",
      name: "Design & Branding",
      count: portfolioItems.filter((item) => item.category === "design").length,
      icon: Palette,
      color: "text-purple-500",
    },
  ];


  return (
    <PageWrapper>
      <PageHero
        badge={{
          icon: Award,
          text: "Our Portfolio",
        }}
        title="Showcasing our exceptional work"
        subtitle="& client success"
        description="Explore our comprehensive portfolio of successful projects that demonstrate our expertise in creating exceptional digital experiences across various industries and technologies."
        primaryAction={{
          text: "Start Your Project",
          onClick: () => router.push("/contact"),
          icon: ArrowRight,
        }}
        secondaryAction={{
          text: "View Case Studies",
          onClick: () => { },
        }}
      />

      <PageSection background="muted">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              label: "Projects Completed",
              value: projectStats.totalProjects,
              icon: Target,
            },
            {
              label: "Happy Clients",
              value: projectStats.totalClients,
              icon: Users,
            },
            {
              label: "Avg. Duration",
              value: projectStats.averageProjectDuration,
              icon: Clock,
            },
            {
              label: "Success Rate",
              value: projectStats.successRate,
              icon: TrendingUp,
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="mx-auto w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3"
                    >
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                    </motion.div>
                    <div className="font-brand text-2xl sm:text-3xl font-bold gradient-text">
                      {stat.value}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-muted-foreground font-medium text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Browse Our Work
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Filter by category or search for specific technologies and projects
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
                <Badge
                  variant="outline"
                  className={`ml-2 text-xs ${activeCategory === category.id ? "border-primary-foreground text-primary-foreground" : ""}`}
                >
                  {category.count}
                </Badge>
              </motion.button>
            );
          })}
        </div>
      </PageSection>

      {/* Technology Tags */}
      <PageSection background="muted" padding="sm">
        <div className="text-center mb-6">
          <h3 className="font-semibold text-base sm:text-lg mb-4">
            Technologies We Use
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => setSearchTerm(tech)}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Enhanced Portfolio Grid */}
      <PageSection>
        {filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              No projects found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  layout
                  className="group cursor-pointer"
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === item.id ? null : item.id,
                    )
                  }
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50">
                    {/* Project Image/Placeholder */}
                    <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                      <div className="w-full h-full relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="100vw"
                          priority={false} // or true if this is above the fold
                        />
                      </div>

                      {/* Overlay with Actions */}
                      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
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
                          Live Demo
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
                        <Badge
                          variant="secondary"
                          className="bg-black/50 text-white text-xs sm:text-sm"
                        >
                          {categories.find((c) => c.id === item.category)?.name}
                        </Badge>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant="outline"
                          className="bg-black/50 border-white/20 text-white text-xs sm:text-sm"
                        >
                          {item.year}
                        </Badge>
                      </div>

                      {/* Awards Badge */}
                      {item.awards.length > 0 && (
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            {item.awards.length} Award
                            {item.awards.length > 1 ? "s" : ""}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="font-serif text-xl sm:text-2xl group-hover:text-primary transition-colors mb-2">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-sm sm:text-base leading-relaxed">
                            {item.description}
                          </CardDescription>
                        </div>
                        <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors ml-4 flex-shrink-0" />
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wide">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.slice(0, 6).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {item.technologies.length > 6 && (
                            <Badge variant="outline" className="text-xs">
                              +{item.technologies.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Project Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="text-xs sm:text-sm font-medium">
                            {item.duration}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Duration
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="text-xs sm:text-sm font-medium">
                            {item.teamSize}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Team
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                          </div>
                          <div className="text-xs sm:text-sm font-medium">
                            {item.client}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Client
                          </div>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {selectedProject === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6 pt-6 border-t"
                          >
                            {/* Detailed Description */}
                            <div>
                              <h4 className="font-semibold mb-3">
                                Project Overview
                              </h4>
                              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                {item.longDescription}
                              </p>
                            </div>

                            {/* Results/Impact */}
                            {item.results && (
                              <div>
                                <h4 className="font-semibold mb-3">Project Results</h4>
                                <p className="bg-muted/50 text-muted-foreground text-sm p-4 rounded">
                                  {item.results}
                                </p>
                              </div>
                            )}

                            {/* All Technologies */}
                            <div>
                              <h4 className="font-semibold mb-3">
                                Complete Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Awards */}
                            {item.awards.length > 0 && (
                              <div>
                                <h4 className="font-semibold mb-3">
                                  Awards & Recognition
                                </h4>
                                <div className="space-y-2">
                                  {item.awards.map((award) => (
                                    <div
                                      key={award}
                                      className="flex items-center"
                                    >
                                      <Award className="w-4 h-4 mr-2 text-yellow-500" />
                                      <span className="text-sm">{award}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                              <Button
                                className="flex-1 gradient-primary text-white"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(item.liveUrl, "_blank");
                                }}
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                View Live Project
                              </Button>
                              {item.githubUrl !== "#" && (
                                <Button
                                  variant="outline"
                                  className="flex-1"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(item.githubUrl, "_blank");
                                  }}
                                >
                                  <Github className="w-4 h-4 mr-2" />
                                  View Code
                                </Button>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </PageSection>

      <CTASection
        title="Ready to Create Your Success Story?"
        description="Let's work together to bring your vision to life and create something that stands out in your industry. Join our portfolio of successful clients."
        primaryAction={{
          text: "Start Your Project",
          onClick: () => router.push("/contact"),
          icon: ArrowRight,
        }}
        secondaryAction={{
          text: "Download Portfolio PDF",
          onClick: () => { },
        }}
        features={[
          "Free project consultation",
          "Custom solution proposal",
          "Guaranteed satisfaction",
        ]}
      />
    </PageWrapper>
  );
}
