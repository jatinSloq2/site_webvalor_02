"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Calendar, LucideIcon } from "lucide-react";
import * as React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
  showBenefits?: boolean;
  benefits?: string[];
  className?: string;
  variant?: "default" | "gradient" | "minimal";
}

export function CTASection({
  title,
  subtitle,
  description,
  primaryButtonText = "Start Your Project",
  primaryButtonAction,
  secondaryButtonText = "Schedule a Call",
  secondaryButtonAction,
  showBenefits = true,
  benefits = [
    "Free consultation & quote",
    "No obligation, no pressure",
    "Response within 24 hours",
  ],
  className = "",
  variant = "default",
}: CTASectionProps) {
  const router = useRouter();

  const handlePrimaryAction = () => {
    if (primaryButtonAction) {
      primaryButtonAction();
    } else {
      router.push("/contact");
    }
  };

  const handleSecondaryAction = () => {
    if (secondaryButtonAction) {
      secondaryButtonAction();
    } else {
      window.open(
        "https://calendly.com/jatinsingh098loq2/intro-call",
        "_blank",
      );
    }
  };

  const sectionClasses = {
    default: "py-32 relative overflow-hidden",
    gradient:
      "py-32 relative overflow-hidden bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20",
    minimal: "py-24 bg-muted/10",
  };

  const backgroundElements = variant !== "minimal" && (
    <>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
      )}
    </>
  );

  return (
    <section className={`${sectionClasses[variant]} ${className}`}>
      {backgroundElements}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Title */}
          <h2
            className={`font-serif ${variant === "minimal" ? "text-3xl sm:text-4xl" : "text-4xl sm:text-6xl"} font-bold mb-8`}
          >
            {title}
            {subtitle && (
              <span
                className={`block ${variant === "minimal" ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"} text-muted-foreground mt-4`}
              >
                {subtitle}
              </span>
            )}
          </h2>

          {/* Description */}
          <p
            className={`${variant === "minimal" ? "text-lg" : "text-xl sm:text-2xl"} text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed`}
          >
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className={`gradient-primary text-white ${variant === "minimal" ? "px-8 py-3 text-lg" : "px-10 py-5 text-xl"} hover:shadow-xl transition-all duration-300 animate-pulse-glow`}
              onClick={handlePrimaryAction}
            >
              {primaryButtonText}
              <ArrowRight
                className={`${variant === "minimal" ? "w-5 h-5" : "w-6 h-6"} ml-2`}
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`${variant === "minimal" ? "px-8 py-3 text-lg" : "px-10 py-5 text-xl"}`}
              onClick={handleSecondaryAction}
            >
              {secondaryButtonText}
              <Calendar
                className={`${variant === "minimal" ? "w-5 h-5" : "w-6 h-6"} ml-2`}
              />
            </Button>
          </div>

          {/* Benefits */}
          {showBenefits && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  {benefit}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
