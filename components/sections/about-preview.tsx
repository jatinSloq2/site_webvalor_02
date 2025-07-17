"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Zap, Target } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "Pushing boundaries with cutting-edge technology and creative solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients as partners in their digital success.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Delivering lightning-fast, high-performing digital experiences.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to delivering nothing less than exceptional results.",
  },
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge variant="outline" className="mb-4">
                About Webvalor
              </Badge>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Crafting Digital Excellence
                <span className="block gradient-text">Since 2019</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We&apos;re a team of passionate designers, developers, and
                strategists who believe in the power of exceptional digital
                experiences. Our mission is to help businesses thrive in the
                digital world through innovative design and cutting-edge
                technology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "5+", label: "Years Experience" },
                { number: "150+", label: "Projects Delivered" },
                { number: "50+", label: "Happy Clients" },
                { number: "15+", label: "Team Members" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg bg-muted/30"
                >
                  <div className="font-brand text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/about">
                <Button className="group gradient-primary text-white hover:shadow-lg transition-all duration-300">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full glass hover:glass-dark dark:hover:glass transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
