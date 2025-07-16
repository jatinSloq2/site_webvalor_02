"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Modern e-commerce solution with advanced features and seamless user experience.",
    category: "web-development",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description:
      "Complete brand identity package for a tech startup including logo and guidelines.",
    category: "design",
    image: "/api/placeholder/600/400",
    technologies: ["Figma", "Adobe Creative Suite", "Brand Guidelines"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure and intuitive mobile banking application with modern UI/UX design.",
    category: "mobile",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Node.js", "PostgreSQL", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard for SaaS businesses with real-time data visualization.",
    category: "web-development",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "Node.js", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Restaurant Website",
    description:
      "Beautiful restaurant website with online ordering and reservation system.",
    category: "web-development",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Sanity CMS", "Stripe", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Fitness App UI",
    description:
      "Modern fitness tracking app interface with engaging animations and interactions.",
    category: "design",
    image: "/api/placeholder/600/400",
    technologies: ["Figma", "Prototyping", "Motion Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web-development", name: "Web Development" },
  { id: "design", name: "Design" },
  { id: "mobile", name: "Mobile" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};

export function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory,
  );

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Our Work
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Explore our portfolio of successful projects that showcase our
            expertise in creating exceptional digital experiences.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="group relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl font-brand font-bold text-primary/30">
                      {item.title.charAt(0)}
                    </div>
                  </div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-xl font-semibold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {item.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="font-serif text-2xl font-semibold mb-4">
            Have a project in mind?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with our expertise
            and creativity.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="gradient-primary text-white px-8 py-4 text-lg hover:shadow-lg transition-shadow animate-pulse-glow">
              Start Your Project
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
