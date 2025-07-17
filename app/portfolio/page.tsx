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
import { portfolioItems } from "@/constants";


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
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
                Showcasing our
                <span className="block gradient-text">best work</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our portfolio of successful projects that demonstrate
                our expertise in creating exceptional digital experiences across
                various industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="pb-10 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
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
                  // onClick={() => setSelectedProject(item)}
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
                Let&apos;s work together to bring your vision to life and create
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
