"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import axios from "axios";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "webvalor@outlook.com",
    link: "mailto:webvalor@outlook.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+91 7240440461",
    link: "tel:+917240440461",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Jaipur, Rajasthan, India",
    link: "https://www.google.com/maps/place/jaipur/data=!4m2!3m1!1s0x396c4adf4c57e281:0xce1c63a0cf22e09?sa=X&ved=1t:155783&ictx=111",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    budget: "",
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
      const response = await axios.post('/api/contact', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 201) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            budget: 'Not sure',
            message: '',
          });
        }, 3000);
      }
    } catch (error: any) {
      if (error.response) {
        setErrors({ general: (error.response?.data as { error?: string })?.error || 'Failed to submit form. Please try again.' });
      } else {
        setErrors({ general: 'An error occurred. Please try again.' });
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
                Get In Touch
              </Badge>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
                Let&apos;s create something
                <span className="block gradient-text">amazing together</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to bring your vision to life? We&apos;d love to hear about your
                project and discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-4xl font-bold mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  We&apos;re here to help and answer any questions you might have. We
                  look forward to hearing from you.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{info.title}</h3>
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.description}
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">
                      Start Your Project
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we&apos;ll get back to you within
                      24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="font-serif text-xl font-semibold mb-2">
                          Thank you!
                        </h3>
                        <p className="text-muted-foreground">
                          We&apos;ve received your message and will get back to you soon.
                        </p>
                      </motion.div>
                    ) : errors.general ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8 text-red-500"
                      >
                        <Send className="w-10 h-10 text-red-500 mx-auto mb-4" />
                        <h3 className="font-serif text-xl font-semibold mb-2">Oops!</h3>
                        <p className="text-muted-foreground">{errors.general}</p>
                      </motion.div>
                    ) : (
                      <TooltipProvider>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Label htmlFor="name">Name *</Label>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) =>
                                      handleChange("name", e.target.value)
                                    }
                                    className={`mt-1 ${errors.name ? "border-red-500" : ""}`}
                                    placeholder="Your full name"
                                  />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Enter your full name</p>
                                </TooltipContent>
                              </Tooltip>
                              {errors.name && (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-red-500 text-sm mt-1"
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
                              <Label htmlFor="email">Email *</Label>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                      handleChange("email", e.target.value)
                                    }
                                    className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
                                    placeholder="your@email.com"
                                  />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>We&apos;ll use this to get back to you</p>
                                </TooltipContent>
                              </Tooltip>
                              {errors.email && (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-red-500 text-sm mt-1"
                                >
                                  {errors.email}
                                </motion.p>
                              )}
                            </motion.div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                            >
                              <Label htmlFor="company">Company</Label>
                              <Input
                                id="company"
                                value={formData.company}
                                onChange={(e) =>
                                  handleChange("company", e.target.value)
                                }
                                className="mt-1"
                                placeholder="Your company name"
                              />
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 }}
                            >
                              <Label htmlFor="budget">Budget Range</Label>
                              <select
                                id="budget"
                                value={formData.budget}
                                onChange={(e) =>
                                  handleChange("budget", e.target.value)
                                }
                                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                              >
                                <option value="">Select budget range</option>
                                <option value="5k-10k">₹15k - ₹20k</option>
                                <option value="10k-25k">₹20k - ₹35k</option>
                                <option value="25k-50k">₹35k - ₹50k</option>
                                <option value="50k+">₹50k+</option>
                              </select>
                            </motion.div>
                          </div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                          >
                            <Label htmlFor="message">Message *</Label>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Textarea
                                  id="message"
                                  value={formData.message}
                                  onChange={(e) =>
                                    handleChange("message", e.target.value)
                                  }
                                  className={`mt-1 min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                                  placeholder="Tell us about your project..."
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Describe your project in detail</p>
                              </TooltipContent>
                            </Tooltip>
                            {errors.message && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 text-sm mt-1"
                              >
                                {errors.message}
                              </motion.p>
                            )}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                          >
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full gradient-primary text-white hover:shadow-lg transition-shadow"
                            >
                              {isSubmitting ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                />
                              ) : (
                                <>
                                  <Send className="w-4 h-4 mr-2" />
                                  Send Message
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
