"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  CheckCircle2,
  Clock,
  Globe,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";
import * as React from "react";

import { PageHero, PageSection } from "@/components/layout/page-layout";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TooltipProvider } from "@/components/ui/tooltip";
import { faqItems } from "@/constants";
import axios from "axios";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    details: "webvalor@outlook.com",
    link: "mailto:webvalor@outlook.com",
    responseTime: "Within 4 hours",
    availability: "24/7",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    details: "+91 7240440461",
    link: "tel:+917240440461",
    responseTime: "Immediate",
    availability: "Mon-Fri, 9 AM - 6 PM IST",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Real-time support & consultation",
    details: "Chat with our experts",
    link: "#",
    responseTime: "Instant",
    availability: "Mon-Fri, 9 AM - 6 PM IST",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a free consultation",
    details: "30-minute strategy session",
    link: "https://calendly.com/jatinsingh098loq2/intro-call",
    responseTime: "Same day",
    availability: "Flexible scheduling",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const officeInfo = {
  address: "Jaipur, Rajasthan, India",
  mapLink:
    "https://www.google.com/maps/place/jaipur/data=!4m2!3m1!1s0x396c4adf4c57e281:0xce1c63a0cf22e09?sa=X&ved=1t:155783&ictx=111",
  timezone: "IST (GMT+5:30)",
  workingHours: "Monday - Friday: 9:00 AM - 6:00 PM",
  languages: ["English", "Hindi"],
};

const projectTypes = [
  { value: "web-development", label: "Web Development", icon: Globe },
  { value: "mobile-app", label: "Mobile App", icon: Phone },
  { value: "ui-ux-design", label: "UI/UX Design", icon: Users },
  { value: "e-commerce", label: "E-commerce", icon: Shield },
  { value: "brand-identity", label: "Brand Identity", icon: Star },
  { value: "consultation", label: "Consultation", icon: MessageSquare },
  { value: "other", label: "Other", icon: Zap },
];

const budgetRanges = [
  { value: "15k-25k", label: "₹15k - ₹25k", description: "Small projects" },
  { value: "25k-50k", label: "₹25k - ₹50k", description: "Medium projects" },
  { value: "50k-100k", label: "₹50k - ₹100k", description: "Large projects" },
  { value: "100k+", label: "₹100k+", description: "Enterprise solutions" },
  { value: "not-sure", label: "Not sure", description: "Let's discuss" },
];



export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await axios.post("/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            projectType: "",
            budget: "",
            timeline: "",
            message: "",
          });
        }, 3000);
      }
    } catch (error: unknown) {
      if (error.response) {
        setErrors({
          general:
            (error.response?.data as { error?: string })?.error ||
            "Failed to submit form. Please try again.",
        });
      } else {
        setErrors({ general: "An error occurred. Please try again." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <PageWrapper>
      <PageHero
        badge={{
          icon: Headphones,
          text: "Get In Touch",
        }}
        title="Let's create something amazing together"
        description="Ready to transform your vision into reality? We'd love to hear about your project and discuss how we can help you achieve your goals with cutting-edge digital solutions."
        primaryAction={{
          text: "Start a Project",
          onClick: () =>
            document
              .getElementById("contact-form")
              ?.scrollIntoView({ behavior: "smooth" }),
          icon: ArrowRight,
        }}
        secondaryAction={{
          text: "Schedule a Free Call",
          href: "https://calendly.com/jatinsingh098loq2/intro-call",
          icon: Calendar,
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
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re available through multiple channels to ensure you can reach us
            in the way that works best for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 cursor-pointer group"
                  onClick={() =>
                    method.link !== "#" &&
                    window.open(
                      method.link,
                      method.link.startsWith("http") ? "_blank" : "_self",
                    )
                  }
                >
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`mx-auto w-12 sm:w-16 h-12 sm:h-16 rounded-full ${method.bgColor} flex items-center justify-center mb-4`}
                    >
                      <Icon
                        className={`w-6 sm:w-8 h-6 sm:h-8 ${method.color}`}
                      />
                    </motion.div>
                    <CardTitle className="font-serif text-lg sm:text-xl group-hover:text-primary transition-colors">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="font-semibold text-primary text-sm sm:text-base">
                      {method.details}
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Response: {method.responseTime}
                      </div>
                      <div className="text-xs">{method.availability}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </PageSection>

      {/* Main Contact Section */}
      <PageSection id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Info & Office Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8 text-base sm:text-lg leading-relaxed">
              We&apos;re here to help and answer any questions you might have. We
              look forward to hearing from you and discussing your project.
            </p>

            {/* Office Information */}
            <Card className="mb-8 glass">
              <CardHeader>
                <CardTitle className="flex items-center font-serif text-lg sm:text-xl">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-primary" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    Address
                  </div>
                  <div className="text-muted-foreground text-sm sm:text-base">
                    {officeInfo.address}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    Working Hours
                  </div>
                  <div className="text-muted-foreground text-sm sm:text-base">
                    {officeInfo.workingHours}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    Timezone
                  </div>
                  <div className="text-muted-foreground text-sm sm:text-base">
                    {officeInfo.timezone}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    Languages
                  </div>
                  <div className="text-muted-foreground text-sm sm:text-base">
                    {officeInfo.languages.join(", ")}
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <a
                    href={officeInfo.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full"
                  >
                    View on Map
                    <MapPin className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Response Time Guarantee */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center font-serif text-lg sm:text-xl">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-green-500" />
                  Our Commitment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  Response within 24 hours
                </div>
                <div className="flex items-center text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  Free initial consultation
                </div>
                <div className="flex items-center text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  Transparent project proposal
                </div>
                <div className="flex items-center text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  No obligation, no pressure
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-serif text-2xl sm:text-3xl">
                  Start Your Project
                </CardTitle>
                <CardDescription className="text-base sm:text-lg">
                  Tell us about your project and we&apos;ll get back to you within 24
                  hours with a detailed proposal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 sm:w-20 h-16 sm:h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-4">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg">
                      We&apos;ve received your message and will get back to you
                      within 24 hours with a detailed response.
                    </p>
                  </motion.div>
                ) : errors.general ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 text-red-500"
                  >
                    <Send className="w-12 sm:w-16 h-12 sm:h-16 text-red-500 mx-auto mb-6" />
                    <h3 className="font-serif text-lg sm:text-xl font-semibold mb-4">
                      Oops! Something went wrong
                    </h3>
                    <p className="text-muted-foreground">{errors.general}</p>
                  </motion.div>
                ) : (
                  <TooltipProvider>
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6 sm:space-y-8"
                    >
                      {/* Personal Information */}
                      <div className="space-y-4 sm:space-y-6">
                        <h4 className="font-semibold text-base sm:text-lg">
                          Personal Information
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Label
                              htmlFor="name"
                              className="text-sm sm:text-base"
                            >
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) =>
                                handleChange("name", e.target.value)
                              }
                              className={`mt-2 ${errors.name ? "border-red-500" : ""}`}
                              placeholder="John Doe"
                            />
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 text-xs sm:text-sm mt-1"
                              >
                                {errors.name}
                              </motion.p>
                            )}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <Label
                              htmlFor="email"
                              className="text-sm sm:text-base"
                            >
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                handleChange("email", e.target.value)
                              }
                              className={`mt-2 ${errors.email ? "border-red-500" : ""}`}
                              placeholder="john@example.com"
                            />
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 text-xs sm:text-sm mt-1"
                              >
                                {errors.email}
                              </motion.p>
                            )}
                          </motion.div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            <Label
                              htmlFor="company"
                              className="text-sm sm:text-base"
                            >
                              Company/Organization
                            </Label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) =>
                                handleChange("company", e.target.value)
                              }
                              className="mt-2"
                              placeholder="Your Company Name"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            <Label
                              htmlFor="phone"
                              className="text-sm sm:text-base"
                            >
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) =>
                                handleChange("phone", e.target.value)
                              }
                              className="mt-2"
                              placeholder="+1 (555) 123-4567"
                            />
                          </motion.div>
                        </div>
                      </div>

                      {/* Project Information */}
                      <div className="space-y-4 sm:space-y-6">
                        <h4 className="font-semibold text-base sm:text-lg">
                          Project Information
                        </h4>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          <Label className="text-sm sm:text-base">
                            Project Type
                          </Label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 mt-2">
                            {projectTypes.map((type) => {
                              const Icon = type.icon;
                              return (
                                <motion.div
                                  key={type.value}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <label
                                    className={`flex flex-col items-center p-2 sm:p-3 border rounded-lg cursor-pointer transition-all hover:border-primary ${formData.projectType === type.value
                                        ? "border-primary bg-primary/5"
                                        : "border-border"
                                      }`}
                                  >
                                    <input
                                      type="radio"
                                      name="projectType"
                                      value={type.value}
                                      checked={
                                        formData.projectType === type.value
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          "projectType",
                                          e.target.value,
                                        )
                                      }
                                      className="sr-only"
                                    />
                                    <Icon className="w-4 sm:w-6 h-4 sm:h-6 mb-1 sm:mb-2 text-primary" />
                                    <span className="text-xs text-center">
                                      {type.label}
                                    </span>
                                  </label>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                          >
                            <Label
                              htmlFor="budget"
                              className="text-sm sm:text-base"
                            >
                              Budget Range
                            </Label>
                            <select
                              id="budget"
                              value={formData.budget}
                              onChange={(e) =>
                                handleChange("budget", e.target.value)
                              }
                              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm sm:text-base"
                            >
                              <option value="">Select budget range</option>
                              {budgetRanges.map((range) => (
                                <option key={range.value} value={range.value}>
                                  {range.label} - {range.description}
                                </option>
                              ))}
                            </select>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                          >
                            <Label
                              htmlFor="timeline"
                              className="text-sm sm:text-base"
                            >
                              Timeline
                            </Label>
                            <select
                              id="timeline"
                              value={formData.timeline}
                              onChange={(e) =>
                                handleChange("timeline", e.target.value)
                              }
                              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm sm:text-base"
                            >
                              <option value="">Select timeline</option>
                              <option value="asap">ASAP (Rush job)</option>
                              <option value="1-month">Within 1 month</option>
                              <option value="2-3-months">2-3 months</option>
                              <option value="3-6-months">3-6 months</option>
                              <option value="flexible">Flexible</option>
                            </select>
                          </motion.div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                      >
                        <Label
                          htmlFor="message"
                          className="text-sm sm:text-base"
                        >
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                          }
                          className={`mt-2 min-h-[120px] sm:min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                          placeholder="Tell us about your project, goals, specific requirements, and any other details that would help us understand your needs better..."
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-500 text-xs sm:text-sm mt-1"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full gradient-primary text-white hover:shadow-xl transition-all duration-300 py-3 sm:py-4 text-base sm:text-lg"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 sm:w-6 h-5 sm:h-6 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              <Send className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                              Send Project Details
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </TooltipProvider>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </PageSection>

      {/* FAQ Section */}
      <PageSection background="muted">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Quick answers to common questions about our process, timeline, and
            services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-lg sm:text-xl">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </PageSection>
    </PageWrapper>
  );
}
