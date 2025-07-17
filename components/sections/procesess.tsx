"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Rocket, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    description:
      "We start by diving deep into your business goals, target audience, and project requirements to create a solid foundation.",
    icon: Search,
    highlights: [
      "Business Analysis",
      "User Research",
      "Competitor Analysis",
      "Goal Setting",
    ],
  },
  {
    step: "02",
    title: "Strategy",
    subtitle: "Planning for Success",
    description:
      "We develop a comprehensive strategy and roadmap that aligns with your objectives and ensures project success.",
    icon: Lightbulb,
    highlights: [
      "Project Planning",
      "Technical Architecture",
      "Design Strategy",
      "Timeline Creation",
    ],
  },
  {
    step: "03",
    title: "Design & Development",
    subtitle: "Bringing Ideas to Life",
    description:
      "Our team combines creative design with cutting-edge development to build exceptional digital experiences.",
    icon: Code,
    highlights: [
      "UI/UX Design",
      "Frontend Development",
      "Backend Integration",
      "Quality Assurance",
    ],
  },
  {
    step: "04",
    title: "Launch & Optimize",
    subtitle: "Delivering Results",
    description:
      "We deploy your project and provide ongoing support to ensure optimal performance and continuous improvement.",
    icon: Rocket,
    highlights: [
      "Deployment",
      "Performance Optimization",
      "User Training",
      "Ongoing Support",
    ],
  },
];

export function Process() {
  const router = useRouter()
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4">
            Our Process
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery and
            exceptional results for every client, every time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-24">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? "" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full gradient-primary text-white flex items-center justify-center font-bold text-2xl">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                        {step.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3">
                    {step.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1 * highlightIndex,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} className="relative">
                    {/* Large Icon Background */}
                    <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                      {/* Animated Background Pattern */}
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 opacity-10"
                      >
                        <div className="w-full h-full bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-45" />
                      </motion.div>

                      {/* Main Icon */}
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-24 h-24 text-primary relative z-10" />
                      </motion.div>

                      {/* Step Number */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
                        <span className="font-bold text-primary">
                          {step.step}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="font-serif text-2xl font-semibold mb-4">
            Ready to start your journey?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how our proven process can bring
            your vision to life.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="gradient-primary text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-shadow animate-pulse-glow"
              onClick={() => { router.push("/contact") }}
            >
              Get Started Today
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
