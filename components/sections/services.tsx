"use client";

import { easeOut, motion } from "framer-motion";
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
  Zap
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
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

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built for speed, security, and scalability.",
    features: ["Next.js", "Node.js", "GraphQL", "TypeScript", "Progressive Web Apps"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning interfaces for optimal user engagement.",
    features: ["Figma", "Prototyping", "Design Systems", "Usability Testing", "Accessibility"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    title: "Brand Identity",
    description:
      "Creating memorable visual identities that build trust and recognition.",
    features: ["Logo Design", "Brand Guidelines", "Digital Assets", "Print Collateral", "Brand Strategy"],
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Boosting site speed, SEO, and Core Web Vitals for top-tier performance.",
    features: ["PageSpeed Insights", "SEO Audits", "Image Optimization", "Lazy Loading", "Caching"],
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description:
      "Building secure, scalable online stores optimized for conversions.",
    features: ["Shopify", "Stripe Payments", "Headless CMS", "Inventory Sync", "Analytics"],
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Developing cross-platform and native mobile apps for seamless experiences.",
    features: ["React Native", "Swift", "Kotlin", "App Store Deployment", "Push Notifications"],
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Deploying scalable and secure cloud infrastructure for your business.",
    features: ["AWS", "Azure", "Serverless", "CI/CD Pipelines", "Microservices"],
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protecting your digital assets with robust security measures and audits.",
    features: ["Penetration Testing", "SSL/TLS", "Data Encryption", "Compliance Audits", "Firewalls"],
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Enhancing applications with AI-driven features for smarter interactions.",
    features: ["Machine Learning", "Chatbots", "Data Analysis", "Personalization", "NLP"],
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  // {
  //   icon: BookOpen,
  //   title: "Content Strategy",
  //   description:
  //     "Developing compelling content strategies to engage and convert audiences.",
  //   features: ["Content Planning", "SEO Copywriting", "Social Media", "Blog Management", "Analytics"],
  //   color: "text-cyan-500",
  //   bgColor: "bg-cyan-500/10",
  // },
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
  const router = useRouter()
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
          <h2 className="font-serif text-4xl md:text-7xl font-bold mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We build modern digital products that elevate your business. From
            design to deployment, we deliver excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <TooltipProvider>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{ scale: 1.04, rotateX: 1, rotateY: -2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card className="group bg-white/5 backdrop-blur-md border border-border/20 rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:ring-2 hover:ring-primary/40 dark:hover:shadow-2xl">
                        <CardHeader className="text-center pb-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 1, ease: "linear" }}
                            className={`mx-auto w-14 h-14 rounded-full ${service.bgColor} flex items-center justify-center mb-4`}
                          >
                            <Icon className={`w-7 h-7 ${service.color}`} />
                          </motion.div>
                          <CardTitle className="font-serif text-3xl font-bold group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-center mb-6 text-base">
                            {service.description}
                          </CardDescription>
                          <ul className="space-y-2 mt-4">
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
                                className="flex items-center text-md text-muted-foreground"
                              >
                                <CheckCircle
                                  className={`w-4 h-4 mr-2 ${service.color}`}
                                />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Learn more about {service.title}</p>
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
          className="text-center mt-20"
        >
          <h3 className="font-serif text-2xl font-semibold mb-4">
            Let’s Build Something Beautiful Together
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We turn your ideas into powerful digital experiences. Start your
            journey today.
          </p>
          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          > */}
            <AnimatedButton
              size="lg"
              className="gradient-primary text-white hover:shadow-xl hover:scale-105 px-8 py-4 text-lg transition-all duration-300"
              onClick={() => router.push("/contact")}
            >
              Start Your Project
            </AnimatedButton>
          </motion.div>
        {/* </motion.div> */}
      </div>
    </section>
  );
}
