"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    Clock,
    Github,
    Globe,
    Heart,
    Lightbulb,
    Linkedin,
    Mail,
    Quote,
    Shield,
    Target,
    TrendingUp,
    Trophy,
    Users,
    Zap
} from "lucide-react";

import {
    CTASection,
    PageHero,
    PageSection,
} from "@/components/layout/page-layout";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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

export const team = [
  {
    name: "Jatin Singh",
    role: "Founder & Full-Stack Developer",
    description:
      "Full-stack developer passionate about building impactful digital products. Specializes in modern web stacks, user-first design, and scalable architecture. Focused on delivering clean, efficient, and maintainable solutions.",
    image: "/api/placeholder/400/400", // You can swap this with a real image later
    skills: ["React", "Next.js", "Node.js", "UI/UX", "MongoDB"],
    social: {
      linkedin: "https://linkedin.com/in/jatin-singh", // Replace with actual URL
      github: "https://github.com/yourusername",        // Replace with actual username
      email: "jatin@webvalor.com",
    },
    experience: "2+ Years",
    projects: "15+ Projects",
  },
  {
    name: "Parth Jat",
    role: "Co-Founder & Creative Strategist",
    description:
      "Creative thinker with a strong sense for brand identity, user behavior, and digital storytelling. Helps shape project direction to align design with business goals and customer needs.",
    image: "/api/placeholder/400/400", // Replace when available
    skills: [
      "Brand Strategy",
      "Content Direction",
      "Marketing Fundamentals",
      "Client Communication",
    ],
    social: {
      linkedin: "https://linkedin.com/in/parth-jat", // Replace with actual URL
      github: "#", // Can be removed if not relevant
      email: "parth@webvalor.com",
    },
    experience: "1.5+ Years",
    projects: "10+ Campaigns",
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
    <PageWrapper>
      <PageHero
        badge={{
          icon: Heart,
          text: "About WebValor",
        }}
        title="We're passionate about digital excellence"
        subtitle="& your success"
        description="Founded on the belief that exceptional digital experiences should be accessible to every business, we combine cutting-edge technology with creative innovation to deliver solutions that transform brands and drive growth."
        primaryAction={{
          text: "Work With Us",
          onClick: () => router.push("/contact"),
          icon: ArrowRight,
        }}
        secondaryAction={{
          text: "Our Portfolio",
          onClick: () => router.push("/portfolio"),
        }}
      />

      <PageSection background="muted">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Foundation
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles and beliefs that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
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
                <Card className="h-full p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardHeader className="text-center pb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mx-auto w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                    >
                      <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    </motion.div>
                    <CardTitle className="font-serif text-xl sm:text-2xl font-bold">
                      Our {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {item.content}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </PageSection>

      {/* Enhanced Timeline Section */}
      <PageSection background="muted" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Journey
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From ambitious startup to trusted digital partner — here&apos;s how we&apos;ve
            grown and the milestones that shaped our story.
          </p>
        </motion.div>

       
          <div className="space-y-12 sm:space-y-16 pl-1">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6 sm:gap-8 group"
                >
                  {/* Timeline Dot & Icon */}
                  <div className="absolute left-5 top-6 sm:top-8 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-primary border-4 border-background group-hover:ring-4 group-hover:ring-primary/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <Icon className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-16 w-full">
                    <Card className="glass hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl sm:text-2xl font-bold text-primary font-serif">
                              {item.month} {item.year}
                            </CardTitle>
                            <Badge
                              variant="outline"
                              className="mt-2 w-fit text-xs sm:text-sm"
                            >
                              {item.milestone}
                            </Badge>
                          </div>
                          <Badge className="w-fit bg-primary/10 text-primary text-xs sm:text-sm">
                            {item.title}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
      </PageSection>

      {/* Enhanced Team Section */}
      <PageSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate minds behind WebValor, each bringing unique
            expertise, creativity, and dedication to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
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
                    className="relative mb-6 mx-auto w-32 sm:w-48 h-32 sm:h-48 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl sm:text-6xl font-brand font-bold text-primary/50">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </motion.div>
                  <CardTitle className="font-serif text-xl sm:text-2xl font-bold mb-2">
                    {member.name}
                  </CardTitle>
                  <Badge className="bg-primary/10 text-primary mb-4 text-xs sm:text-sm mx-auto">
                    {member.role}
                  </Badge>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
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
                      <div className="font-bold text-primary text-sm sm:text-base">
                        {member.experience}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary text-sm sm:text-base">
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
      </PageSection>

      {/* Values Section */}
      <PageSection background="muted">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Core Values
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            These fundamental principles guide every decision we make and shape
            how we work with our clients and each other.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 p-4 sm:p-6">
                  <CardHeader className="pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mx-auto w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                    >
                      <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    </motion.div>
                    <CardTitle className="font-serif text-lg sm:text-xl mb-2">
                      {value.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="text-primary mb-4 text-xs sm:text-sm mx-auto"
                    >
                      {value.stats}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </PageSection>

      {/* Achievements Section */}
      <PageSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Metrics that matter and recognition that motivates us to keep
            pushing boundaries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="mx-auto w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                    >
                      <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    </motion.div>
                    <div className="font-brand text-3xl sm:text-4xl font-bold gradient-text mb-2">
                      {achievement.value}
                    </div>
                    <CardTitle className="text-base sm:text-lg font-semibold">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm">
                      {achievement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </PageSection>

      {/* Client Testimonials */}
      <PageSection background="muted">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from real clients who&apos;ve transformed their businesses
            with our solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 sm:p-8 hover:shadow-xl transition-shadow">
                <CardHeader className="pb-6">
                  <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-primary/50 mb-4" />
                  <CardDescription className="text-base sm:text-lg italic leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div>
                        <div className="font-semibold text-base sm:text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-muted-foreground text-sm sm:text-base">
                          {testimonial.role}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          {testimonial.company}
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <Badge
                          variant="outline"
                          className="mb-2 text-xs sm:text-sm"
                        >
                          {testimonial.project}
                        </Badge>
                        <div className="text-xs sm:text-sm font-semibold text-green-600">
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
      </PageSection>

      <CTASection
        title="Ready to Work Together?"
        description="Whether you're a startup with a big vision or an established business ready for digital transformation, we're here to make it happen. Let's create something amazing together."
        primaryAction={{
          text: "Start a Project",
          onClick: () => router.push("/contact"),
          icon: ArrowRight,
        }}
        secondaryAction={{
          text: "Schedule a Call",
          href: "https://calendly.com/jatinsingh098loq2/intro-call",
        }}
        features={[
          "Free initial consultation",
          "Custom project proposal",
          "Transparent pricing",
        ]}
      />
    </PageWrapper>
  );
}
