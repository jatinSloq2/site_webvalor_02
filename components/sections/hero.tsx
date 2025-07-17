"use client";

import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { ScrollCue } from "@/components/animations/scroll-cue";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { AnimatedButton } from "../layout/animated-button";
import { useRouter } from "next/navigation";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const router = useRouter()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

      {/* Placeholder for future 3D blob or animation */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
          {/* Optional: Add <ThreeDBlob /> here */}
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 text-primary text-sm font-medium shadow-md"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="flex-shrink-0"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </motion.div>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Premium Web Development Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold leading-tight mt-6"
        >
          We Build{" "}
          <motion.span
            className="gradient-text inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Confident
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Websites
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={textVariants}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          We craft premium digital experiences through motion-first design,
          cutting-edge technology, and captivating storytelling.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={textVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AnimatedButton
            size="lg"
            className="gradient-primary text-white hover:shadow-xl hover:scale-105 px-8 py-4 text-lg transition-all duration-300"
            onClick={() => router.push("/contact")}
          >
            Start Your Project
          </AnimatedButton>
          <Button
          onClick={() => router.push("/portfolio")}
            variant="outline"
            size="lg"
            className="glass px-8 py-4 text-lg transition-colors duration-500  hover:border-primary"
          >
            View Our Work
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={textVariants}
          className="mt-14 flex gap-6 justify-center items-center max-w-3xl mx-auto"
        >
          {[
            { number: "150+", label: "Projects Delivered" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
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
