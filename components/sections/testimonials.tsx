"use client";

import * as React from "react";
import { easeOut, motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { companyStats } from "@/constants";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechFlow Solutions",
    company: "TechFlow",
    content:
      "Webvalor completely transformed our digital presence. Their attention to detail and innovative approach exceeded all our expectations. The results speak for themselves - 300% increase in conversions!",
    rating: 5,
    image: "/api/placeholder/80/80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, EcoMart",
    company: "EcoMart",
    content:
      "Working with Webvalor was a game-changer. They didn&apos;t just build us a website, they created a complete digital experience that our customers love. Professional, creative, and results-driven.",
    rating: 5,
    image: "/api/placeholder/80/80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, InvestTech",
    company: "InvestTech",
    content:
      "The team at Webvalor delivered beyond what we imagined. Their motion-first approach and attention to user experience resulted in a 200% increase in user engagement. Highly recommended!",
    rating: 5,
    image: "/api/placeholder/80/80",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Co-founder, MindSpace",
    company: "MindSpace",
    content:
      "Exceptional work from start to finish. Webvalor understood our vision and brought it to life with stunning animations and flawless functionality. Our app now has over 100k downloads!",
    rating: 5,
    image: "/api/placeholder/80/80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Client Stories
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
            about working with Webvalor and the results we&apos;ve achieved together.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group"
            >
              <Card className="h-full glass hover:glass-dark dark:hover:glass transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border/50 hover:border-primary/50">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-primary opacity-50" />
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-brand text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
