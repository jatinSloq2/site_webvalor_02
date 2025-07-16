"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Users, Target, Heart, Zap, Globe } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const timeline = [
  {
    year: "2019",
    title: "Founded",
    description:
      "Started as a small design studio with a vision to create beautiful digital experiences.",
  },
  {
    year: "2020",
    title: "Team Expansion",
    description:
      "Grew to 10 talented designers and developers, expanding our service offerings.",
  },
  {
    year: "2021",
    title: "100+ Projects",
    description:
      "Completed over 100 successful projects for clients around the world.",
  },
  {
    year: "2022",
    title: "Award Recognition",
    description:
      "Received multiple design awards and recognition from industry leaders.",
  },
  {
    year: "2023",
    title: "Global Reach",
    description:
      "Expanded our services globally, working with Fortune 500 companies.",
  },
  {
    year: "2024",
    title: "Innovation Focus",
    description:
      "Leading the industry with AI-powered design tools and cutting-edge technology.",
  },
];

const team = [
  {
    name: "Alex Rivera",
    role: "CEO & Creative Director",
    description:
      "Visionary leader with 10+ years in digital design and strategy.",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    description:
      "Full-stack developer specializing in modern web technologies.",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Marcus Johnson",
    role: "UX Designer",
    description:
      "User experience expert focused on creating intuitive interfaces.",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Emily Davis",
    role: "Brand Strategist",
    description:
      "Brand expert helping companies tell their stories effectively.",
    image: "/api/placeholder/300/300",
  },
];

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "We push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Every project is crafted with love and attention to detail that shows in the final result.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in working closely with our clients as partners in their success.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Speed and efficiency are at the core of everything we build and design.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Creating digital experiences that reach and inspire audiences worldwide.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for perfection in every detail, delivering nothing less than excellence.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge variant="outline" className="mb-4">
                About Webvalor
              </Badge>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                We&apos;re passionate about
                <span className="block gradient-text">digital excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our mission is to transform businesses through innovative design
                and development, creating digital experiences that inspire,
                engage, and drive results.
              </p>
            </motion.div>
          </div>
        </section>

       {/* Timeline Section */}
<section className="py-24 bg-muted/20 relative">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
        Our Journey
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        From a small startup to an award-winning agency, here&apos;s how we&apos;ve grown.
      </p>
    </motion.div>

    {/* Timeline Container */}
    <div className="relative">
      {/* Vertical Line on the Left with progress animation */}
      <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary z-0 overflow-hidden">
        <motion.div
          className="w-full h-full bg-white dark:bg-gray-900 origin-top"
          style={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <div className="space-y-16 pl-1">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-start gap-6 group"
            id={`timeline-item-${index}`}
            data-timeline-item
          >
            {/* Interactive Dot */}
            <div className="absolute left-3 top-8 z-10 group cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`w-5 h-5 rounded-full border-4 border-background transition-all duration-300 ${
                  index === 0 ? "bg-primary" : "bg-primary/70"
                } group-hover:ring-4 group-hover:ring-primary/20`}
                title={item.title}
                onClick={() =>
                  document
                    .getElementById(`timeline-item-${index}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              />
            </div>

            {/* Card Content */}
            <div className="ml-10 w-full">
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-primary">
                      {item.year}
                    </CardTitle>
                    <Badge variant="outline">{item.title}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


        {/* Team Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The creative minds behind Webvalor, each bringing unique
                expertise and passion.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl font-brand font-bold text-primary/50">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </motion.div>
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do and shape how we
                work with our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <Card className="h-full text-center hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                        >
                          <Icon className="w-8 h-8 text-primary" />
                        </motion.div>
                        <CardTitle className="font-serif text-xl">
                          {value.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {value.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "5", label: "Years Experience" },
                { number: "15+", label: "Team Members" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="font-brand text-4xl sm:text-5xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
