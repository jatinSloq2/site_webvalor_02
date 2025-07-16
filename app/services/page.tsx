"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  Rocket,
  Zap,
  Globe,
  Smartphone,
  ChevronDown,
  Check,
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

const services = [
  {
    icon: Code,
    title: "Web Development",
    shortDescription:
      "Custom websites and web applications built with modern technologies.",
    longDescription:
      "We create responsive, fast, and scalable web applications using the latest technologies. Our development process ensures your website not only looks great but performs exceptionally across all devices and browsers.",
    features: [
      "React/Next.js Development",
      "Node.js Backend Services",
      "TypeScript Implementation",
      "API Integration & Development",
      "Database Design & Optimization",
      "Performance Optimization",
      "SEO Implementation",
      "Security Best Practices",
    ],
    process: [
      "Requirements Analysis",
      "Technical Architecture",
      "Development & Testing",
      "Deployment & Launch",
    ],
    pricing: "Starting from $5,000",
    timeline: "4-12 weeks",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    shortDescription:
      "Beautiful, intuitive interfaces that provide exceptional user experiences.",
    longDescription:
      "Our design team creates user-centered designs that not only look stunning but also provide intuitive and engaging experiences. We focus on usability, accessibility, and conversion optimization.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Interactive Prototypes",
      "Usability Testing",
      "Responsive Design",
      "Accessibility Compliance",
      "Design Documentation",
    ],
    process: [
      "User Research",
      "Design Strategy",
      "Visual Design",
      "Testing & Iteration",
    ],
    pricing: "Starting from $3,000",
    timeline: "3-8 weeks",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    title: "Brand Identity",
    shortDescription:
      "Complete brand packages that tell your story and connect with your audience.",
    longDescription:
      "We help businesses establish a strong brand presence with comprehensive identity packages that include logo design, brand guidelines, and marketing materials that resonate with your target audience.",
    features: [
      "Logo Design & Variations",
      "Brand Guidelines",
      "Color Palette Development",
      "Typography Selection",
      "Business Card Design",
      "Marketing Materials",
      "Brand Application Guidelines",
      "Digital Asset Library",
    ],
    process: [
      "Brand Discovery",
      "Concept Development",
      "Design Refinement",
      "Final Delivery",
    ],
    pricing: "Starting from $2,500",
    timeline: "2-6 weeks",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    shortDescription:
      "Lightning-fast websites that rank well and convert visitors into customers.",
    longDescription:
      "We optimize your website's performance to ensure fast loading times, better search engine rankings, and improved user experience. Our optimization strategies focus on speed, SEO, and conversion rates.",
    features: [
      "Page Speed Optimization",
      "Core Web Vitals Improvement",
      "SEO Optimization",
      "Image & Asset Optimization",
      "Caching Implementation",
      "CDN Configuration",
      "Performance Monitoring",
      "Analytics Setup",
    ],
    process: [
      "Performance Audit",
      "Optimization Strategy",
      "Implementation",
      "Monitoring & Reporting",
    ],
    pricing: "Starting from $1,500",
    timeline: "1-4 weeks",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    shortDescription:
      "Complete online stores with secure payments and inventory management.",
    longDescription:
      "We build robust e-commerce platforms that drive sales and provide seamless shopping experiences. Our solutions include everything from product catalogs to payment processing and order management.",
    features: [
      "Custom Online Stores",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing System",
      "Customer Account Portal",
      "Mobile-Responsive Design",
      "SSL Security Implementation",
      "Analytics & Reporting",
    ],
    process: [
      "Store Planning",
      "Development & Integration",
      "Testing & Security",
      "Launch & Training",
    ],
    pricing: "Starting from $8,000",
    timeline: "6-16 weeks",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    shortDescription:
      "Native and cross-platform mobile apps that engage users on any device.",
    longDescription:
      "We develop mobile applications that provide native performance and user experience. Whether you need iOS, Android, or cross-platform solutions, we deliver apps that users love.",
    features: [
      "iOS App Development",
      "Android App Development",
      "React Native Solutions",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "API Integration",
      "App Analytics",
    ],
    process: [
      "App Strategy",
      "Design & Development",
      "Testing & QA",
      "App Store Submission",
    ],
    pricing: "Starting from $10,000",
    timeline: "8-20 weeks",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
];

export default function ServicesPage() {
  const [expandedCard, setExpandedCard] = React.useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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
                Our Services
              </Badge>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Comprehensive
                <span className="block gradient-text">Digital Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From concept to launch, we provide end-to-end digital services
                that help your business thrive in the modern digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isExpanded = expandedCard === index;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    layout
                  >
                    <Card className="h-full glass hover:glass-dark dark:hover:glass transition-all duration-300 hover:shadow-2xl border-border/50 hover:border-primary/50 cursor-pointer">
                      <CardHeader
                        onClick={() => toggleCard(index)}
                        className="pb-4"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center`}
                            >
                              <Icon className={`w-8 h-8 ${service.color}`} />
                            </motion.div>
                            <div>
                              <CardTitle className="font-serif text-xl text-left">
                                {service.title}
                              </CardTitle>
                              <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                                <span>{service.pricing}</span>
                                <span>•</span>
                                <span>{service.timeline}</span>
                              </div>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown
                              className={`w-5 h-5 ${service.color}`}
                            />
                          </motion.div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <CardDescription className="text-base mb-4">
                          {service.shortDescription}
                        </CardDescription>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-6"
                            >
                              <p className="text-muted-foreground">
                                {service.longDescription}
                              </p>

                              {/* Features */}
                              <div>
                                <h4 className="font-semibold mb-3">
                                  What's Included:
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {service.features.map(
                                    (feature, featureIndex) => (
                                      <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          duration: 0.3,
                                          delay: featureIndex * 0.05,
                                        }}
                                        className="flex items-center space-x-2"
                                      >
                                        <Check
                                          className={`w-4 h-4 ${service.color}`}
                                        />
                                        <span className="text-sm">
                                          {feature}
                                        </span>
                                      </motion.div>
                                    ),
                                  )}
                                </div>
                              </div>

                              {/* Process */}
                              <div>
                                <h4 className="font-semibold mb-3">
                                  Our Process:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {service.process.map((step, stepIndex) => (
                                    <Badge
                                      key={step}
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {stepIndex + 1}. {step}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* CTA */}
                              <div className="pt-4 border-t border-border">
                                <Button className="w-full gradient-primary text-white">
                                  Get Started with {service.title}
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a proven methodology that ensures successful project
                delivery and exceptional results for every client.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We learn about your business, goals, and requirements.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description:
                    "We develop a comprehensive plan and timeline for your project.",
                },
                {
                  step: "03",
                  title: "Design & Development",
                  description:
                    "We bring your vision to life with beautiful design and clean code.",
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description:
                    "We deploy your project and provide ongoing support and maintenance.",
                },
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full gradient-primary text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                Ready to get started?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss your project and create a custom solution that
                meets your needs and exceeds your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-primary text-white px-8 py-4 text-lg hover:shadow-lg transition-shadow animate-pulse-glow">
                  Start Your Project
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg">
                  Schedule a Call
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
