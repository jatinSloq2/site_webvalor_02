"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Heart,
  Zap,
  Globe,
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Trophy,
  TrendingUp,
  Lightbulb,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  Quote,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { useRouter } from "next/navigation";

const timeline = [
  {
    month: "July",
    year: "2025",
    title: "The Vision Takes Shape",
    description:
      "WebValor was born from a simple yet powerful vision: to democratize high-quality web development for businesses of all sizes. Our founders recognized the gap between affordable web solutions and premium digital experiences.",
    milestone: "Company Founded",
    icon: Lightbulb,
  },
  {
    month: "July",
    year: "2025",
    title: "First Client Success",
    description:
      "Delivered our inaugural project — a sleek, responsive website for a local startup that exceeded performance benchmarks and drove 200% increase in user engagement within the first month.",
    milestone: "Project Delivered",
    icon: Trophy,
  },
  {
    month: "August",
    year: "2025",
    title: "Digital Presence Established",
    description:
      "Launched our comprehensive digital ecosystem including our agency website, brand identity, and strategic partnerships. Began building our reputation in the digital community through thought leadership.",
    milestone: "Brand Launch",
    icon: Globe,
  },
  {
    month: "August",
    year: "2025",
    title: "Team Formation & Growth",
    description:
      "Assembled our core team of passionate developers, designers, and strategists. Each member brings unique expertise and shares our commitment to delivering exceptional digital experiences.",
    milestone: "Team Expansion",
    icon: Users,
  },
  {
    month: "September",
    year: "2025",
    title: "Technology Stack Mastery",
    description:
      "Established our cutting-edge technology stack and development methodologies. Implemented best practices for performance, security, and scalability across all our projects.",
    milestone: "Tech Excellence",
    icon: Zap,
  },
];

const team = [
  {
    name: "Jatin Singh",
    role: "Founder & Full-Stack Developer",
    description:
      "Visionary leader with expertise in modern web technologies, system architecture, and user experience design. Passionate about transforming business ideas into powerful digital realities.",
    image: "/api/placeholder/400/400",
    skills: ["React/Next.js", "Node.js", "System Design", "UI/UX", "DevOps"],
    social: {
      linkedin: "#",
      github: "#",
      email: "jatin@webvalor.com",
    },
    experience: "5+ Years",
    projects: "50+ Projects",
  },
  {
    name: "Parth Jat",
    role: "Co-Founder & Creative Strategist",
    description:
      "Strategic mastermind specializing in brand development, client relations, and creative direction. Ensures every project aligns with business objectives and brand vision.",
    image: "/api/placeholder/400/400",
    skills: [
      "Brand Strategy",
      "Creative Direction",
      "Client Relations",
      "Marketing",
      "Business Development",
    ],
    social: {
      linkedin: "#",
      github: "#",
      email: "parth@webvalor.com",
    },
    experience: "4+ Years",
    projects: "40+ Campaigns",
  },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible, embracing cutting-edge technologies and methodologies to deliver solutions that are ahead of the curve.",
    stats: "Latest Tech Stack",
  },
  {
    icon: Heart,
    title: "Passion-Driven",
    description:
      "Every line of code, every design element, and every strategy is crafted with genuine passion and attention to detail that shows in our exceptional results.",
    stats: "100% Commitment",
  },
  {
    icon: Users,
    title: "Collaborative Excellence",
    description:
      "We work closely with our clients as true partners, fostering relationships built on trust, transparency, and shared success.",
    stats: "95% Client Retention",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description:
      "Speed, efficiency, and optimization are at the core of everything we build. We're committed to delivering blazing-fast, highly-performant solutions.",
    stats: "Sub-2s Load Times",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Creating digital experiences that transcend borders and inspire audiences worldwide, making technology accessible to businesses everywhere.",
    stats: "International Reach",
  },
  {
    icon: Award,
    title: "Excellence Standard",
    description:
      "We don't just meet expectations—we exceed them. Our commitment to quality ensures every project meets the highest industry standards.",
    stats: "Zero Compromises",
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Industry Recognition",
    description: "Featured in top web development showcases",
    value: "Top 1%",
  },
  {
    icon: TrendingUp,
    title: "Client Growth",
    description: "Average business growth after our solutions",
    value: "300%",
  },
  {
    icon: Clock,
    title: "Delivery Speed",
    description: "Faster than industry average delivery",
    value: "40%",
  },
  {
    icon: Shield,
    title: "Security Score",
    description: "Perfect security compliance rate",
    value: "100%",
  },
];

const companyMission = {
  mission:
    "To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, and create lasting competitive advantages in the digital landscape.",
  vision:
    "To become the global leader in innovative web development, setting new standards for creativity, performance, and client success in the digital agency space.",
  approach:
    "We combine technical excellence with creative innovation, ensuring every solution is not just functional, but transformative for our clients' businesses.",
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "WebValor didn't just build us a website—they transformed our entire digital presence. The team's expertise and dedication are unmatched.",
    company: "TechStart Inc.",
    project: "Complete Digital Transformation",
    result: "300% increase in conversions",
  },
  {
    name: "Michael Chen",
    role: "Founder, EcoMart",
    content:
      "Working with WebValor was a game-changer. Their attention to detail and innovative approach helped us stand out in a crowded market.",
    company: "EcoMart",
    project: "E-commerce Platform",
    result: "150% sales growth",
  },
];

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge variant="outline" className="mb-6 px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                About WebValor
              </Badge>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-tight">
                We&apos;re passionate about
                <span className="block gradient-text">digital excellence</span>
                <span className="block text-4xl sm:text-5xl md:text-6xl text-muted-foreground mt-4">
                  & your success
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
                Founded on the belief that exceptional digital experiences
                should be accessible to every business, we combine cutting-edge
                technology with creative innovation to deliver solutions that
                transform brands and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="gradient-primary text-white px-8 py-4 text-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => router.push("/contact")}
                >
                  Work With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg"
                >
                  Our Portfolio
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision & Approach */}
        <section className="py-24 bg-muted/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                Our Foundation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles and beliefs that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Mission",
                  content: companyMission.mission,
                  icon: Target,
                },
                {
                  title: "Vision",
                  content: companyMission.vision,
                  icon: Globe,
                },
                {
                  title: "Approach",
                  content: companyMission.approach,
                  icon: Lightbulb,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50">
                      <CardHeader className="text-center pb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                        >
                          <Icon className="w-8 h-8 text-primary" />
                        </motion.div>
                        <CardTitle className="font-serif text-2xl font-bold">
                          Our {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {item.content}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Timeline Section */}
        <section className="py-24 bg-muted/20 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From ambitious startup to trusted digital partner — here&apos;s
                how we&apos;ve grown and the milestones that shaped our story.
              </p>
            </motion.div>

            <div className="relative">
              {/* Vertical Progress Line */}
              <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary z-0">
                <motion.div
                  className="w-full h-full bg-background origin-top"
                  style={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </div>

              <div className="space-y-16 pl-1">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start gap-8 group"
                    >
                      {/* Timeline Dot & Icon */}
                      <div className="absolute left-6 top-8 z-10">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-8 h-8 rounded-full bg-primary border-4 border-background group-hover:ring-4 group-hover:ring-primary/20 transition-all duration-300 flex items-center justify-center"
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </motion.div>
                      </div>

                      {/* Content Card */}
                      <div className="ml-16 w-full">
                        <Card className="glass hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50">
                          <CardHeader>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div>
                                <CardTitle className="text-2xl font-bold text-primary font-serif">
                                  {item.month} {item.year}
                                </CardTitle>
                                <Badge variant="outline" className="mt-2 w-fit">
                                  {item.milestone}
                                </Badge>
                              </div>
                              <Badge className="w-fit bg-primary/10 text-primary">
                                {item.title}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Team Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The passionate minds behind WebValor, each bringing unique
                expertise, creativity, and dedication to every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden">
                    <CardHeader className="text-center pb-6">
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
                      <CardTitle className="font-serif text-2xl font-bold mb-2">
                        {member.name}
                      </CardTitle>
                      <Badge className="bg-primary/10 text-primary mb-4">
                        {member.role}
                      </Badge>
                      <CardDescription className="text-base leading-relaxed">
                        {member.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold mb-3">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div className="text-center">
                          <div className="font-bold text-primary">
                            {member.experience}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Experience
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-primary">
                            {member.projects}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Completed
                          </div>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center space-x-4 pt-4">
                        <Button size="sm" variant="outline" className="p-2">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="p-2">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
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
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and
                shape how we work with our clients and each other.
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
                    <Card className="h-full text-center hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 p-6">
                      <CardHeader className="pb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                        >
                          <Icon className="w-8 h-8 text-primary" />
                        </motion.div>
                        <CardTitle className="font-serif text-xl mb-2">
                          {value.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-primary mb-4">
                          {value.stats}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
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

        {/* Achievements Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                Achievements & Recognition
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Metrics that matter and recognition that motivates us to keep
                pushing boundaries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                        >
                          <Icon className="w-8 h-8 text-primary" />
                        </motion.div>
                        <div className="font-brand text-4xl font-bold gradient-text mb-2">
                          {achievement.value}
                        </div>
                        <CardTitle className="text-lg font-semibold">
                          {achievement.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">
                          {achievement.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-24 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real feedback from real clients who've transformed their
                businesses with our solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-8 hover:shadow-xl transition-shadow">
                    <CardHeader className="pb-6">
                      <Quote className="w-8 h-8 text-primary/50 mb-4" />
                      <CardDescription className="text-lg italic leading-relaxed">
                        "{testimonial.content}"
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border-t pt-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-semibold text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-muted-foreground">
                              {testimonial.role}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.company}
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">
                              {testimonial.project}
                            </Badge>
                            <div className="text-sm font-semibold text-green-600">
                              {testimonial.result}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-serif text-4xl sm:text-6xl font-bold mb-8">
                Ready to Work Together?
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                Whether you're a startup with a big vision or an established
                business ready for digital transformation, we're here to make it
                happen. Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="gradient-primary text-white px-10 py-5 text-xl hover:shadow-xl transition-all duration-300 animate-pulse-glow"
                  onClick={() => router.push("/contact")}
                >
                  Start a Project
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-5 text-xl"
                >
                  Schedule a Call
                </Button>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Free initial consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Custom project proposal
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Transparent pricing
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
