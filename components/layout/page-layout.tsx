"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  badge?: {
    icon: LucideIcon;
    text: string;
  };
  title: string;
  subtitle?: string;
  description: string;
  primaryAction?: {
    text: string;
    onClick: () => void;
    icon?: LucideIcon;
  };
  secondaryAction?: {
    text: string;
    onClick?: () => void;
    href?: string;
    icon?: LucideIcon;
  };
  backgroundPattern?: boolean;
  className?: string;
}

export function PageHero({
  badge,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundPattern = true,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative py-20 sm:py-32 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden ${className}`}
    >
      {backgroundPattern && (
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {badge && (
            <Badge variant="outline" className="mb-4 sm:mb-6 px-3 sm:px-4 py-2">
              <badge.icon className="w-4 h-4 mr-2" />
              {badge.text}
            </Badge>
          )}

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
            {title}
            {subtitle && (
              <span className="block gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4">
                {subtitle}
              </span>
            )}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              {primaryAction && (
                <Button
                  size="lg"
                  className="gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.text}
                  {primaryAction.icon && (
                    <primaryAction.icon className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                  )}
                </Button>
              )}

              {secondaryAction && (
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.href ? (
                    <a
                      href={secondaryAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full"
                    >
                      {secondaryAction.text}
                      {secondaryAction.icon && (
                        <secondaryAction.icon className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                      )}
                    </a>
                  ) : (
                    <>
                      {secondaryAction.text}
                      {secondaryAction.icon && (
                        <secondaryAction.icon className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                      )}
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "muted" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
  id?: string;
}

export function PageSection({
  children,
  className = "",
  background = "default",
  padding = "lg",
  id,
}: PageSectionProps) {
  const backgroundClass = {
    default: "",
    muted: "bg-muted/10",
    gradient: "bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10",
  }[background];

  const paddingClass = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20",
    lg: "py-20 sm:py-24",
    xl: "py-24 sm:py-32",
  }[padding];

  return (
    <section
      id={id}
      className={`${paddingClass} ${backgroundClass} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionContentWrapperProps {
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  center?: boolean;
  className?: string;
}

export function SectionContentWrapper({
  children,
  maxWidth = "full",
  center = false,
  className = "",
}: SectionContentWrapperProps) {
  const maxWidthClass = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  }[maxWidth];

  return (
    <div className={`${maxWidthClass} ${center ? "mx-auto" : ""} ${className}`}>
      {children}
    </div>
  );
}

interface ResponsiveGridProps {
  children: ReactNode;
  columns?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
  className?: string;
}

export function ResponsiveGrid({
  children,
  columns = { base: 1, md: 2, lg: 3 },
  gap = 8,
  className = "",
}: ResponsiveGridProps) {
  const { base = 1, sm, md, lg, xl } = columns;

  const gridClasses = [
    `grid-cols-${base}`,
    sm && `sm:grid-cols-${sm}`,
    md && `md:grid-cols-${md}`,
    lg && `lg:grid-cols-${lg}`,
    xl && `xl:grid-cols-${xl}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`grid ${gridClasses} gap-${gap} ${className}`}>
      {children}
    </div>
  );
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    onClick: () => void;
    icon?: LucideIcon;
  };
  secondaryAction?: {
    text: string;
    onClick?: () => void;
    href?: string;
    icon?: LucideIcon;
  };
  features?: string[];
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  features = [],
  className = "",
}: CTASectionProps) {
  return (
    <PageSection background="gradient" padding="xl" className={className}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8">
          {title}
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
          <Button
            size="lg"
            className="gradient-primary text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl hover:shadow-xl transition-all duration-300 animate-pulse-glow w-full sm:w-auto"
            onClick={primaryAction.onClick}
          >
            {primaryAction.text}
            {primaryAction.icon && (
              <primaryAction.icon className="w-5 sm:w-6 h-5 sm:h-6 ml-2" />
            )}
          </Button>

          {secondaryAction && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl w-full sm:w-auto"
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.href ? (
                <a
                  href={secondaryAction.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full"
                >
                  {secondaryAction.text}
                  {secondaryAction.icon && (
                    <secondaryAction.icon className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                  )}
                </a>
              ) : (
                <>
                  {secondaryAction.text}
                  {secondaryAction.icon && (
                    <secondaryAction.icon className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                  )}
                </>
              )}
            </Button>
          )}
        </div>

        {features.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted-foreground px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-sm sm:text-base"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                {feature}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </PageSection>
  );
}
