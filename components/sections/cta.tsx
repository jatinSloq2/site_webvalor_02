"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function CTA() {
  const router = useRouter()
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="relative overflow-hidden glass border-border/50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-tr from-secondary/20 to-primary/20 blur-3xl"
            />

            <CardContent className="relative z-10 p-12 md:p-16 text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="w-20 h-20 rounded-full gradient-primary text-white flex items-center justify-center mx-auto animate-pulse-glow">
                  <Sparkles className="w-10 h-10" />
                </div>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your
                  <span className="block gradient-text">Digital Presence?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                  Join 150+ businesses who have chosen Webvalor to elevate their
                  digital presence. Let&apos;s create something extraordinary
                  together that drives real results and captivates your
                  audience.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group gradient-primary text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow px-8 py-4 text-lg"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  size="lg"
                  className="glass hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 px-8 py-4 text-lg group"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <a
                    href="https://calendly.com/jatinsingh098loq2/intro-call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Call
                  </a>
                </Button>
              </motion.div>

              {/* Contact Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                {[
                  {
                    icon: MessageCircle,
                    title: "Free Consultation",
                    description:
                      "30-minute strategy session to discuss your project",
                    action: "Book Now",
                  },
                  {
                    icon: Sparkles,
                    title: "Custom Proposal",
                    description: "Detailed project proposal within 48 hours",
                    action: "Get Proposal",
                  },
                  {
                    icon: ArrowRight,
                    title: "Quick Start",
                    description: "Begin your project within 1 week",
                    action: "Start Today",
                  },
                ].map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <motion.div
                      key={option.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-6 rounded-lg bg-muted/30 hover:bg-primary/10 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {option.description}
                      </p>
                      <span className="text-sm text-primary font-medium group-hover:underline"
                        onClick={() => { router.push("/contact") }}
                      >
                        {option.action} →
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center px-4"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by industry leaders and growing startups
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-60">
            {["TechFlow", "EcoMart", "InvestTech", "MindSpace", "Luxe"].map(
              (company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="font-semibold text-lg"
                >
                  {company}
                </motion.div>
              )
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
