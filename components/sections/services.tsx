"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, CheckCircle } from "lucide-react";
import * as React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { SectionHeader } from "@/components/ui/section-header";
import { StatsGrid } from "@/components/ui/stats-grid";
import { AnimatedButton } from "@/components/layout/animated-button";
import { services, companyStats } from "@/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Services() {
  const router = useRouter();

  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div className="absolute top-32 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse" />
      <div
        className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <SectionHeader
          badge={{
            icon: Star,
            text: "Our Services",
          }}
          title="What We Do"
          subtitle="Excellence in Every Service"
          description="We build modern digital products that elevate your business. From strategic planning to final deployment, we deliver comprehensive solutions that drive real results and exceed expectations."
          size="lg"
        />

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <StatsGrid
            stats={companyStats}
            variant="default"
            animationDelay={0.1}
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              shortDescription={service.shortDescription}
              features={service.features}
              pricing={service.pricing}
              timeline={service.timeline}
              color={service.color}
              bgColor={service.bgColor}
              projects={service.projects}
              satisfaction={service.satisfaction}
              onLearnMore={() => router.push("/services")}
              variant={index === 0 ? "featured" : "default"}
              animationDelay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            <div className="relative">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                Let&apos;s Build Something Exceptional Together
              </h3>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Ready to transform your vision into reality? We combine
                technical expertise with creative innovation to deliver
                solutions that not only meet your needs but exceed your
                expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <AnimatedButton
                  size="lg"
                  className="gradient-primary text-white hover:shadow-xl hover:scale-105 px-10 py-4 text-lg transition-all duration-300 animate-pulse-glow"
                  onClick={() => router.push("/contact")}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
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
