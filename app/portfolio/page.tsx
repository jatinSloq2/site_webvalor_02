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
  ArrowRight,
  Filter,
  Search,
  TrendingUp,
  Clock,
  Target,
  Star,
  CheckCircle2,
  Zap,
  Globe,
  Code,
  Palette,
  Smartphone
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
import { Input } from "@/components/ui/input";
import { portfolioItems } from "@/constants";
import { useRouter } from "next/navigation";

const categories = [
  { 
    id: "all", 
    name: "All Projects", 
    count: portfolioItems.length,
    icon: Globe,
    color: "text-primary"
  },
  { 
    id: "web-development", 
    name: "Web Development", 
    count: portfolioItems.filter(item => item.category === "web-development").length,
    icon: Code,
    color: "text-blue-500"
  },
  { 
    id: "mobile", 
    name: "Mobile Apps", 
    count: portfolioItems.filter(item => item.category === "mobile").length,
    icon: Smartphone,
    color: "text-green-500"
  },
  { 
    id: "design", 
    name: "Design & Branding", 
    count: portfolioItems.filter(item => item.category === "design").length,
    icon: Palette,
    color: "text-purple-500"
  },
];

const projectStats = {
  totalProjects: portfolioItems.length,
  totalClients: new Set(portfolioItems.map(item => item.client)).size,
  averageProjectDuration: "12 weeks",
  successRate: "100%"
};

const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL",
  "AWS", "Stripe", "Firebase", "React Native", "Figma", "D3.js"
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedProject, setSelectedProject] = React.useState<number | null>(null);
  const router = useRouter();

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge variant="outline" className="mb-6 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Our Portfolio
              </Badge>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-tight">
                Showcasing our
                <span className="block gradient-text">exceptional work</span>
                <span className="block text-4xl sm:text-5xl md:text-6xl text-muted-foreground mt-4">
                  & client success
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
                Explore our comprehensive portfolio of successful projects that demonstrate our expertise 
                in creating exceptional digital experiences across various industries and technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg"
                  className="gradient-primary text-white px-8 py-4 text-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => router.push("/contact")}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  View Case Studies
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Stats */}
        <section className="py-16 bg-muted/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Projects Completed", value: projectStats.totalProjects, icon: Target },
                { label: "Happy Clients", value: projectStats.totalClients, icon: Users },
                { label: "Avg. Duration", value: projectStats.averageProjectDuration, icon: Clock },
                { label: "Success Rate", value: projectStats.successRate, icon: TrendingUp }
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
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3"
                        >
                          <Icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div className="font-brand text-3xl font-bold gradient-text">
                          {stat.value}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-muted-foreground font-medium text-sm">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filter and Search */}
        <section className="py-16 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                Browse Our Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category.id
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
                      className={`ml-2 ${activeCategory === category.id ? 'border-primary-foreground text-primary-foreground' : ''}`}
                    >
                      {category.count}
                    </Badge>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Tags */}
        <section className="py-8 bg-muted/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h3 className="font-semibold text-lg mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {technologies.map((tech) => (
                  <motion.button
                    key={tech}
                    onClick={() => setSearchTerm(tech)}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Portfolio Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filteredItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
                  Clear Filters
                </Button>
              </motion.div>
            ) : (
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
                      onClick={() => setSelectedProject(selectedProject === item.id ? null : item.id)}
                    >
                      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50">
                        {/* Project Image/Placeholder */}
                        <div className="relative h-64 lg:h-80 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <div className="text-8xl font-brand font-bold text-primary/30">
                              {item.title.charAt(0)}
                            </div>
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
                            <Badge variant="secondary" className="bg-black/50 text-white">
                              {categories.find((c) => c.id === item.category)?.name}
                            </Badge>
                          </div>

                          {/* Year Badge */}
                          <div className="absolute top-4 right-4">
                            <Badge
                              variant="outline"
                              className="bg-black/50 border-white/20 text-white"
                            >
                              {item.year}
                            </Badge>
                          </div>

                          {/* Awards Badge */}
                          {item.awards.length > 0 && (
                            <div className="absolute bottom-4 left-4">
                              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                                <Award className="w-3 h-3 mr-1" />
                                {item.awards.length} Award{item.awards.length > 1 ? 's' : ''}
                              </Badge>
                            </div>
                          )}
                        </div>

                        {/* Project Info */}
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors mb-2">
                                {item.title}
                              </CardTitle>
                              <CardDescription className="text-base leading-relaxed">
                                {item.description}
                              </CardDescription>
                            </div>
                            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors ml-4 flex-shrink-0" />
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies Used</h4>
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
                              <div className="text-sm font-medium">{item.duration}</div>
                              <div className="text-xs text-muted-foreground">Duration</div>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center justify-center mb-1">
                                <Users className="w-4 h-4 text-muted-foreground" />
                              </div>
                              <div className="text-sm font-medium">{item.teamSize}</div>
                              <div className="text-xs text-muted-foreground">Team</div>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center justify-center mb-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                              </div>
                              <div className="text-sm font-medium">{item.client}</div>
                              <div className="text-xs text-muted-foreground">Client</div>
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
                                  <h4 className="font-semibold mb-3">Project Overview</h4>
                                  <p className="text-muted-foreground leading-relaxed">
                                    {item.longDescription}
                                  </p>
                                </div>

                                {/* Results/Impact */}
                                {item.results && (
                                  <div>
                                    <h4 className="font-semibold mb-3">Project Results</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                      {Object.entries(item.results).map(([key, value]) => (
                                        <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                                          <div className="font-bold text-primary text-lg">{value}</div>
                                          <div className="text-xs text-muted-foreground capitalize">
                                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* All Technologies */}
                                <div>
                                  <h4 className="font-semibold mb-3">Complete Tech Stack</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {item.technologies.map((tech) => (
                                      <Badge key={tech} variant="outline" className="text-xs">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                {/* Awards */}
                                {item.awards.length > 0 && (
                                  <div>
                                    <h4 className="font-semibold mb-3">Awards & Recognition</h4>
                                    <div className="space-y-2">
                                      {item.awards.map((award) => (
                                        <div key={award} className="flex items-center">
                                          <Award className="w-4 h-4 mr-2 text-yellow-500" />
                                          <span className="text-sm">{award}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-4">
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
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-32 bg-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-serif text-4xl sm:text-6xl font-bold mb-8">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                Let&apos;s work together to bring your vision to life and create something that stands out 
                in your industry. Join our portfolio of successful clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg"
                  className="gradient-primary text-white px-10 py-5 text-xl hover:shadow-xl transition-all duration-300 animate-pulse-glow"
                  onClick={() => router.push("/contact")}
                >
                  Start Your Project
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="px-10 py-5 text-xl">
                  Download Portfolio PDF
                </Button>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Free project consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Custom solution proposal
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Guaranteed satisfaction
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
