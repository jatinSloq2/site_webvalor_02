"use client";

import { easeInOut, easeOut, motion } from "framer-motion";
import {
  Brain,
  CheckCircle,
  Cloud,
  Code,
  Globe,
  Palette,
  Rocket,
  Shield,
  Smartphone,
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import { AnimatedButton } from "../layout/animated-button";
import * as React from "react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built for speed, security, and scalability.",
    features: ["Next.js", "Node.js", "GraphQL", "TypeScript", "Progressive Web Apps"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    pricing: "From ₹25k",
    timeline: "4-12 weeks",
    projects: "50+",
    satisfaction: "98%"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning interfaces for optimal user engagement.",
    features: ["Figma", "Prototyping", "Design Systems", "Usability Testing", "Accessibility"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    pricing: "From ₹20k",
    timeline: "3-8 weeks",
    projects: "40+",
    satisfaction: "99%"
  },
  {
    icon: Rocket,
    title: "Brand Identity",
    description: "Creating memorable visual identities that build trust and recognition.",
    features: ["Logo Design", "Brand Guidelines", "Digital Assets", "Print Collateral", "Brand Strategy"],
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    pricing: "From ₹15k",
    timeline: "2-6 weeks",
    projects: "30+",
    satisfaction: "100%"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Boosting site speed, SEO, and Core Web Vitals for top-tier performance.",
    features: ["PageSpeed Insights", "SEO Audits", "Image Optimization", "Lazy Loading", "Caching"],
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    pricing: "From ₹10k",
    timeline: "1-4 weeks",
    projects: "35+",
    satisfaction: "97%"
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Building secure, scalable online stores optimized for conversions.",
    features: ["Shopify", "Stripe Payments", "Headless CMS", "Inventory Sync", "Analytics"],
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    pricing: "From ₹40k",
    timeline: "6-16 weeks",
    projects: "25+",
    satisfaction: "100%"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Developing cross-platform and native mobile apps for seamless experiences.",
    features: ["React Native", "Swift", "Kotlin", "App Store Deployment", "Push Notifications"],
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    pricing: "From ₹50k",
    timeline: "8-20 weeks",
    projects: "20+",
    satisfaction: "95%"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Deploying scalable and secure cloud infrastructure for your business.",
    features: ["AWS", "Azure", "Serverless", "CI/CD Pipelines", "Microservices"],
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    pricing: "From ₹30k",
    timeline: "4-10 weeks",
    projects: "15+",
    satisfaction: "96%"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protecting your digital assets with robust security measures and audits.",
    features: ["Penetration Testing", "SSL/TLS", "Data Encryption", "Compliance Audits", "Firewalls"],
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    pricing: "From ₹20k",
    timeline: "3-8 weeks",
    projects: "12+",
    satisfaction: "100%"
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Enhancing applications with AI-driven features for smarter interactions.",
    features: ["Machine Learning", "Chatbots", "Data Analysis", "Personalization", "NLP"],
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    pricing: "From ₹35k",
    timeline: "6-14 weeks",
    projects: "8+",
    satisfaction: "98%"
  }
];

const stats = [
  {
    icon: Award,
    value: "150+",
    label: "Projects Delivered",
    description: "Successfully completed projects"
  },
  {
    icon: Users,
    value: "100+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide"
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
    description: "Project completion success"
  },
  {
    icon: Star,
    value: "5.0",
    label: "Client Rating",
    description: "Average client satisfaction"
  }
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export function Services() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div className="absolute top-32 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Our Services
          </Badge>
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
            What We Do
            <span className="block text-3xl md:text-5xl text-muted-foreground mt-4">
              Excellence in Every Service
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We build modern digital products that elevate your business. From strategic planning
            to final deployment, we deliver comprehensive solutions that drive real results.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="text-center p-5 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardHeader className="">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="font-brand text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {stat.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Enhanced Services Grid */}
        <TooltipProvider>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredCard === index;

              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, rotateX: 1, rotateY: -1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card className="group h-full  border border-border/20 rounded-2xl p-6 transition duration-500 hover:shadow-xl hover:ring-2 hover:ring-primary/40 dark:hover:shadow-2xl cursor-pointer">
                        <CardHeader className="text-center pb-6">
                          <motion.div
                            animate={{
                              rotate: isHovered ? 360 : 0,
                              scale: isHovered ? 1.1 : 1
                            }}
                            transition={{ duration: 0.6, ease: easeInOut }}
                            className={`mx-auto w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center mb-6 relative`}
                          >
                            <Icon className={`w-8 h-8 ${service.color}`} />
                            {isHovered && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"
                              />
                            )}
                          </motion.div>
                          <CardTitle className="font-serif text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                            {service.title}
                          </CardTitle>
                          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-4">
                            <Badge variant="outline" className="text-xs">
                              {service.pricing}
                            </Badge>
                            <span>•</span>
                            <span>{service.timeline}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-6">
                          <CardDescription className="text-center text-base leading-relaxed">
                            {service.description}
                          </CardDescription>

                          {/* Features List */}
                          <ul className="space-y-3">
                            {service.features.map((feature, i) => (
                              <motion.li
                                key={feature}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: i * 0.1,
                                  duration: 0.3,
                                }}
                                viewport={{ once: true }}
                                className="flex items-center text-sm text-muted-foreground"
                              >
                                <CheckCircle
                                  className={`w-4 h-4 mr-3 ${service.color} flex-shrink-0`}
                                />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>

                          {/* Project Stats */}
                          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                            <div className="text-center">
                              <div className="font-bold text-primary">{service.projects}</div>
                              <div className="text-xs text-muted-foreground">Projects</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-primary">{service.satisfaction}</div>
                              <div className="text-xs text-muted-foreground">Satisfaction</div>
                            </div>
                          </div>

                          {/* CTA Button */}
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="pt-4"
                          >
                            <Button
                              variant="outline"
                              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                              onClick={() => router.push("/services")}
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Explore {service.title} in detail</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              );
            })}
          </motion.div>
        </TooltipProvider>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            <div className="relative">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                Let&apos;s Build Something Exceptional Together
              </h3>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Ready to transform your vision into reality? We combine technical expertise with creative innovation
                to deliver solutions that not only meet your needs but exceed your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <AnimatedButton
                  size="lg"
                  className="gradient-primary text-white hover:shadow-xl hover:scale-105 px-10 py-4 text-lg transition-all duration-300 animate-pulse-glow"
                  onClick={() => router.push("/contact")}
                >
                  Start Your Project
                </AnimatedButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-4 text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => router.push("/portfolio")}
                >
                  View Our Work
                </Button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Free consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Custom solutions
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Guaranteed satisfaction
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
