"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import { ScrollCue } from "@/components/animations/scroll-cue";

// Dynamically import 3D blob to avoid SSR issues
const ThreeDBlob = dynamic(
  () => import("@/components/sections/3d-blob").then((mod) => mod.ThreeDBlob),
  { ssr: false },
);

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      {/* 3D Blob Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-96 h-96 md:w-[600px] md:h-[600px]">
          {/* <ThreeDBlob /> */}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <motion.div variants={textVariants}>
          <h1 className="font-brand text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block">Creative</span>
            <span className="block gradient-text">Web Agency</span>
            <span className="block font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
              that brings ideas to life
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={textVariants}
          className="mt-8 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          We craft premium digital experiences through motion-first design,
          cutting-edge technology, and storytelling that captivates your
          audience.
        </motion.p>

        <motion.div
          variants={textVariants}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="gradient-primary text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow px-8 py-4 text-lg"
          >
            Start Your Project
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="glass hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 px-8 py-4 text-lg"
          >
            View Our Work
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={textVariants}
          className="mt-16 flex items-center justify-center gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: "150+", label: "Projects Delivered" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
              className="text-center"
            >
              <div className="font-brand text-2xl sm:text-3xl font-bold gradient-text">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Cue */}
      <ScrollCue targetId="services" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div className="absolute top-32 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse" />
      <div
        className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-20 right-1/3 w-1 h-1 bg-secondary rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
}
