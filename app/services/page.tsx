"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Lightbulb,
  Target,
  Zap,
  Shield,
  Award,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import * as React from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
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
import { ServiceCard } from "@/components/ui/service-card";
import {
  services,
  serviceCategories,
  commonFeatures,
  whyChooseUs,
} from "@/constants";
import { useRouter } from "next/navigation";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "WebValor transformed our vision into a beautiful, high-performing platform that exceeded our expectations.",
    rating: 5,
    project: "SaaS Platform Development",
  },
  {
    name: "Michael Chen",
    role: "Founder, EcoMart",
    content:
      "The team's attention to detail and technical expertise helped us launch our e-commerce platform successfully.",
    rating: 5,
    project: "E-commerce Development",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Luxe Brand",
    content:
      "Our new brand identity and website have significantly improved our market presence and customer engagement.",
    rating: 5,
    project: "Brand Identity & Web Design",
  },
];

export default function ServicesPage() {
  const [expandedCard, setExpandedCard] = React.useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const router = useRouter();

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) =>
          serviceCategories.find(
            (cat) =>
              cat.services.includes(service.title) &&
              cat.title.toLowerCase().replace(" ", "-") === selectedCategory,
          ),
        );

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <SectionHeader
              badge={{
                icon: Star,
                text: "Premium Digital Services",
              }}
              title="Comprehensive"
              subtitle="Digital Solutions That Drive Results"
              description="From concept to launch, we provide end-to-end digital services that help your business thrive in the modern digital landscape. Our expertise spans strategy, design, development, and growth optimization."
              size="xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button
                size="lg"
                className="gradient-primary text-white px-8 py-4 text-lg hover:shadow-xl transition-all duration-300"
                onClick={() => router.push("/contact")}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <a
                  href="https://calendly.com/jatinsingh098loq2/intro-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Schedule Consultation
                  <Calendar className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-24 bg-muted/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Service Categories"
              description="Choose from our comprehensive range of services, organized by expertise area to help you find exactly what you need for your project."
              size="lg"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 cursor-pointer group"
                      onClick={() =>
                        setSelectedCategory(
                          category.title.toLowerCase().replace(" ", "-"),
                        )
                      }
                    >
                      <CardHeader className="text-center pb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`mx-auto w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center mb-4`}
                        >
                          <Icon className={`w-8 h-8 ${category.color}`} />
                        </motion.div>
                        <CardTitle className="font-serif text-2xl font-bold group-hover:text-primary transition-colors">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {category.services.map((service) => (
                            <div
                              key={service}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <CheckCircle2
                                className={`w-4 h-4 mr-2 ${category.color}`}
                              />
                              {service}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className="px-6 py-2"
              >
                All Services
              </Button>
              {serviceCategories.map((category) => (
                <Button
                  key={category.title}
                  variant={
                    selectedCategory ===
                    category.title.toLowerCase().replace(" ", "-")
                      ? "default"
                      : "outline"
                  }
                  onClick={() =>
                    setSelectedCategory(
                      category.title.toLowerCase().replace(" ", "-"),
                    )
                  }
                  className="px-6 py-2"
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Our Complete Service Offering"
              description="Comprehensive digital solutions designed to transform your business and drive sustainable growth through innovative technology and creative excellence."
              className="mb-12"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredServices.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    shortDescription={service.longDescription}
                    features={service.features}
                    pricing={service.pricing}
                    timeline={service.timeline}
                    color={service.color}
                    bgColor={service.bgColor}
                    projects={`${Math.floor(Math.random() * 50) + 10}+`}
                    satisfaction={`${Math.floor(Math.random() * 5) + 95}%`}
                    onLearnMore={() => router.push("/contact")}
                    variant={index === 0 ? "featured" : "default"}
                    animationDelay={index * 0.1}
                    showFeatures={true}
                    showStats={true}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Detailed Process Section */}
        <section className="py-24 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Our Proven Process"
              description="We follow a comprehensive methodology that ensures successful project delivery and exceptional results for every client, every time. From discovery to deployment, every step is carefully planned and executed."
            />

            <div className="space-y-12">
              {commonFeatures.processSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className="flex-1">
                      <Card className="glass p-8 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Phase {step.phase}
                            </div>
                            <h3 className="font-serif text-2xl font-bold">
                              {step.title}
                            </h3>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <Clock className="w-4 h-4 mr-1" />
                              {step.duration}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6 text-lg">
                          {step.description}
                        </p>
                        <div>
                          <h4 className="font-semibold mb-3">
                            Key Deliverables:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {step.deliverables.map((deliverable) => (
                              <div
                                key={deliverable}
                                className="flex items-center"
                              >
                                <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                                <span className="text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full gradient-primary text-white flex items-center justify-center font-bold text-3xl shadow-2xl">
                        {step.phase}
                      </div>
                      {index < commonFeatures.processSteps.length - 1 && (
                        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-primary to-transparent" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Why Choose WebValor?"
              description="We combine technical expertise with creative vision to deliver exceptional results. Our commitment to excellence and client success sets us apart in the digital agency landscape."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                        >
                          <Icon className="w-8 h-8 text-primary" />
                        </motion.div>
                        <CardTitle className="font-serif text-xl">
                          {reason.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardDescription className="text-base mb-4">
                          {reason.description}
                        </CardDescription>
                        <Badge variant="outline" className="text-primary">
                          {reason.stats}
                        </Badge>
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
            <SectionHeader
              title="Client Success Stories"
              description="Don't just take our word for it - hear from clients who've transformed their business with our services and achieved remarkable results."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <CardDescription className="text-base italic">
                        "{testimonial.content}"
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border-t pt-4">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {testimonial.project}
                        </Badge>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                Let's discuss your project and create a custom solution that
                meets your needs, exceeds your expectations, and drives
                measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="gradient-primary text-white px-10 py-5 text-xl hover:shadow-xl transition-all duration-300 animate-pulse-glow"
                  onClick={() => router.push("/contact")}
                >
                  Start Your Project Today
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-5 text-xl"
                >
                  <a
                    href="https://calendly.com/jatinsingh098loq2/intro-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Schedule a Free Consultation
                    <Calendar className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Free consultation & quote
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  No obligation, no pressure
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Response within 24 hours
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
