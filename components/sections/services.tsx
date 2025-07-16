"use client";

import * as React from "react";
import { easeOut, motion } from "framer-motion";
import { Code, Palette, Rocket, Zap, Globe, Smartphone } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies and best practices.",
    features: ["React/Next.js", "Node.js", "TypeScript", "API Integration"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that provide exceptional user experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    title: "Brand Identity",
    description:
      "Complete brand packages that tell your story and connect with your audience.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Marketing Materials",
    ],
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lightning-fast websites that rank well and convert visitors into customers.",
    features: ["Speed Optimization", "SEO", "Core Web Vitals", "Analytics"],
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description:
      "Complete online stores with secure payments and inventory management.",
    features: [
      "Online Stores",
      "Payment Integration",
      "Inventory Management",
      "CMS",
    ],
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that engage users on any device.",
    features: [
      "React Native",
      "iOS Development",
      "Android Development",
      "App Store Optimization",
    ],
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
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
            Our Services
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions that help businesses thrive
            in the modern world. From concept to launch, we&apos;re your partner in
            digital success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <TooltipProvider>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div key={service.title} variants={cardVariants}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card className="group h-full glass hover:glass-dark dark:hover:glass transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border/50 hover:border-primary/50">
                        <CardHeader className="text-center pb-4">
                          <motion.div
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`mx-auto w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center mb-4`}
                          >
                            <Icon className={`w-8 h-8 ${service.color}`} />
                          </motion.div>
                          <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-center mb-6 text-base">
                            {service.description}
                          </CardDescription>

                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.1 * featureIndex,
                                }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2"
                              >
                                <div
                                  className={`w-1.5 h-1.5 rounded-full ${service.color.replace("text-", "bg-")}`}
                                />
                                <span className="text-sm text-muted-foreground">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to learn more about {service.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              );
            })}
          </motion.div>
        </TooltipProvider>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="font-serif text-2xl font-semibold mb-4">
            Ready to transform your digital presence?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something amazing together.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="gradient-primary text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-shadow animate-pulse-glow">
              Get Started Today
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
