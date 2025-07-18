"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge?: {
    icon?: LucideIcon;
    text: string;
  };
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
  centered?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: {
    title: "text-3xl sm:text-4xl",
    subtitle: "text-2xl sm:text-3xl",
    description: "text-lg",
  },
  md: {
    title: "text-4xl sm:text-5xl",
    subtitle: "text-3xl sm:text-4xl",
    description: "text-xl",
  },
  lg: {
    title: "text-5xl sm:text-6xl",
    subtitle: "text-4xl sm:text-5xl",
    description: "text-xl sm:text-2xl",
  },
  xl: {
    title: "text-5xl sm:text-6xl md:text-8xl",
    subtitle: "text-4xl sm:text-5xl md:text-6xl",
    description: "text-xl sm:text-2xl",
  },
};

export function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  className = "",
  centered = true,
  size = "md",
}: SectionHeaderProps) {
  const BadgeIcon = badge?.icon;
  const classes = sizeClasses[size];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${centered ? "text-center" : ""} mb-16 ${className}`}
    >
      {/* Badge */}
      {badge && (
        <Badge variant="outline" className="mb-6 px-4 py-2">
          {BadgeIcon && <BadgeIcon className="w-4 h-4 mr-2" />}
          {badge.text}
        </Badge>
      )}

      {/* Title */}
      <h2
        className={`font-serif ${classes.title} font-bold mb-6 leading-tight`}
      >
        {title}
        {subtitle && (
          <span
            className={`block ${classes.subtitle} text-muted-foreground mt-4`}
          >
            {subtitle}
          </span>
        )}
      </h2>

      {/* Description */}
      <p
        className={`${classes.description} text-muted-foreground ${centered ? "max-w-4xl mx-auto" : "max-w-4xl"} leading-relaxed`}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default SectionHeader;
