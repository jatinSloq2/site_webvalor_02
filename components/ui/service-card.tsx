"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, LucideIcon, Star } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  features: string[];
  pricing: string;
  timeline: string;
  color: string;
  bgColor: string;
  projects: string;
  satisfaction: string;
  onLearnMore?: () => void;
  className?: string;
  variant?: "default" | "featured" | "compact";
  showStats?: boolean;
  showFeatures?: boolean;
  animationDelay?: number;
}

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
      ease: "easeOut",
    },
  },
};

export function ServiceCard({
  icon: Icon,
  title,
  shortDescription,
  features,
  pricing,
  timeline,
  color,
  bgColor,
  projects,
  satisfaction,
  onLearnMore,
  className = "",
  variant = "default",
  showStats = true,
  showFeatures = true,
  animationDelay = 0,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const cardClasses = {
    default:
      "h-full border border-border/20 rounded-2xl p-6 transition duration-500 hover:shadow-xl hover:ring-2 hover:ring-primary/40 dark:hover:shadow-2xl cursor-pointer group",
    featured:
      "h-full border-2 border-primary/50 rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-secondary/5 transition duration-500 hover:shadow-2xl hover:ring-2 hover:ring-primary/60 cursor-pointer group relative overflow-hidden",
    compact:
      "h-full border border-border/20 rounded-xl p-4 transition duration-300 hover:shadow-lg hover:border-primary/50 cursor-pointer group",
  };

  const contentLayout = {
    default: "space-y-6",
    featured: "space-y-8",
    compact: "space-y-4",
  };

  return (
    <TooltipProvider>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: animationDelay }}
        whileHover={{
          scale: variant === "compact" ? 1.02 : 1.03,
          rotateX: 1,
          rotateY: -1,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={className}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Card className={cardClasses[variant]}>
              {/* Featured Badge */}
              {variant === "featured" && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}

              <CardHeader
                className={`text-center ${variant === "compact" ? "pb-4" : "pb-6"}`}
              >
                {/* Animated Icon */}
                <motion.div
                  animate={{
                    rotate: isHovered ? 360 : 0,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`mx-auto ${variant === "compact" ? "w-12 h-12" : "w-16 h-16"} rounded-full ${bgColor} flex items-center justify-center ${variant === "compact" ? "mb-3" : "mb-6"} relative`}
                >
                  <Icon
                    className={`${variant === "compact" ? "w-6 h-6" : "w-8 h-8"} ${color}`}
                  />
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"
                    />
                  )}
                </motion.div>

                {/* Title */}
                <CardTitle
                  className={`font-serif ${variant === "compact" ? "text-lg" : variant === "featured" ? "text-3xl" : "text-2xl"} font-bold group-hover:text-primary transition-colors mb-2`}
                >
                  {title}
                </CardTitle>

                {/* Pricing and Timeline */}
                <div
                  className={`flex items-center justify-center space-x-4 ${variant === "compact" ? "text-xs" : "text-sm"} text-muted-foreground mb-4`}
                >
                  <Badge
                    variant="outline"
                    className={variant === "compact" ? "text-xs" : "text-xs"}
                  >
                    {pricing}
                  </Badge>
                  <span>•</span>
                  <span>{timeline}</span>
                </div>
              </CardHeader>

              <CardContent className={`pt-0 ${contentLayout[variant]}`}>
                {/* Description */}
                <CardDescription
                  className={`text-center ${variant === "compact" ? "text-sm" : "text-base"} leading-relaxed`}
                >
                  {shortDescription}
                </CardDescription>

                {/* Features List */}
                {showFeatures && (
                  <ul
                    className={`space-y-${variant === "compact" ? "2" : "3"}`}
                  >
                    {features
                      .slice(
                        0,
                        variant === "compact"
                          ? 4
                          : variant === "featured"
                            ? 6
                            : 5,
                      )
                      .map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: animationDelay + i * 0.1,
                            duration: 0.3,
                          }}
                          viewport={{ once: true }}
                          className={`flex items-center ${variant === "compact" ? "text-xs" : "text-sm"} text-muted-foreground`}
                        >
                          <CheckCircle
                            className={`${variant === "compact" ? "w-3 h-3 mr-2" : "w-4 h-4 mr-3"} ${color} flex-shrink-0`}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    {features.length >
                      (variant === "compact"
                        ? 4
                        : variant === "featured"
                          ? 6
                          : 5) && (
                      <li
                        className={`${variant === "compact" ? "text-xs" : "text-sm"} text-muted-foreground pl-${variant === "compact" ? "5" : "7"}`}
                      >
                        +
                        {features.length -
                          (variant === "compact"
                            ? 4
                            : variant === "featured"
                              ? 6
                              : 5)}{" "}
                        more features
                      </li>
                    )}
                  </ul>
                )}

                {/* Project Stats */}
                {/* {showStats && (
                  <div
                    className={`grid grid-cols-2 gap-4 pt-4 border-t border-border/50`}
                  >
                    <div className="text-center">
                      <div
                        className={`font-bold text-primary ${variant === "compact" ? "text-sm" : ""}`}
                      >
                        {projects}
                      </div>
                      <div
                        className={`${variant === "compact" ? "text-xs" : "text-xs"} text-muted-foreground`}
                      >
                        Projects
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`font-bold text-primary ${variant === "compact" ? "text-sm" : ""}`}
                      >
                        {satisfaction}
                      </div>
                      <div
                        className={`${variant === "compact" ? "text-xs" : "text-xs"} text-muted-foreground`}
                      >
                        Satisfaction
                      </div>
                    </div>
                  </div>
                )} */}

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={variant === "compact" ? "pt-2" : "pt-4"}
                >
                  <Button
                    variant={variant === "featured" ? "default" : "outline"}
                    className={`w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 ${
                      variant === "featured"
                        ? "gradient-primary text-white shadow-lg"
                        : ""
                    } ${variant === "compact" ? "py-2 text-sm" : ""}`}
                    onClick={onLearnMore}
                  >
                    {variant === "featured" ? "Get Started" : "Learn More"}
                    <ArrowRight
                      className={`${variant === "compact" ? "w-3 h-3" : "w-4 h-4"} ml-2`}
                    />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </TooltipTrigger>
          <TooltipContent>
            <p>Explore {title} in detail</p>
          </TooltipContent>
        </Tooltip>
      </motion.div>
    </TooltipProvider>
  );
}

export default ServiceCard;
