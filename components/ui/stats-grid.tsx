"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  color?: string;
}

interface StatsGridProps {
  stats: StatItem[];
  className?: string;
  columns?: 2 | 3 | 4;
  variant?: "default" | "minimal" | "featured";
  animationDelay?: number;
}

const gridClasses = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

export function StatsGrid({
  stats,
  className = "",
  columns = 4,
  variant = "default",
  animationDelay = 0,
}: StatsGridProps) {
  return (
    <div className={`grid ${gridClasses[columns]} gap-6 ${className}`}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.6,
              delay: animationDelay + index * 0.1,
            }}
            viewport={{ once: true }}
            className="text-center"
          >
            {variant === "minimal" ? (
              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`mx-auto w-12 h-12 rounded-full ${stat.color ? `bg-${stat.color}/10` : "bg-primary/10"} flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${stat.color || "text-primary"}`} />
                </motion.div>
                <div className="font-brand text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="font-semibold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ) : (
              <Card
                className={`
                h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50
                ${variant === "featured" ? "glass hover:glass-dark" : ""}
              `}
              >
                <CardHeader className={variant === "featured" ? "pb-4" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`mx-auto w-12 h-12 rounded-full ${stat.color ? `bg-${stat.color}/10` : "bg-primary/10"} flex items-center justify-center mb-3`}
                  >
                    <Icon
                      className={`w-6 h-6 ${stat.color || "text-primary"}`}
                    />
                  </motion.div>
                  <div className="font-brand text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                {variant !== "featured" && (
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                )}
              </Card>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default StatsGrid;
