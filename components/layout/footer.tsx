"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import axios, { AxiosError } from "axios";
import { Button } from "@/components/ui/button";

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services#web-development" },
    { name: "UI/UX Design", href: "/services#ui-ux-design" },
    { name: "Brand Identity", href: "/services#brand-identity" },
    { name: "Digital Marketing", href: "/services#digital-marketing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
  { name: "Email", href: "mailto:hello@webvalor.com", icon: Mail },
];

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [success, setSuccess] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("/api/newsletter", { email }, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setSuccess(true);
        setEmail("");
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      setErrors({
        general:
          (axiosError.response?.data as { error?: string })?.error ||
          "Failed to submit form. Please try again.",
      });
    }
  };

  return (
    <footer className="relative bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 items-start">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-brand text-2xl font-bold gradient-text">
                  Webvalor
                </span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground max-w-md">
                Creating premium web experiences through motion-first design and cutting-edge technology. We bring your digital vision to life.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={social.href}
                        aria-label={social.name}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        <Icon className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-2xl font-semibold">Services</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-2xl font-semibold">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-2xl font-semibold">Stay Updated</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form className="mt-4 space-y-2" onSubmit={handleSubmit}>
                <div className="flex space-x-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-md bg-background px-2 w-full py-2 text-sm border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <Button size="sm" className="gradient-primary text-white" type="submit">
                    Subscribe
                  </Button>
                </div>
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                {errors.general && <p className="text-sm text-red-500">{errors.general}</p>}
                {success && <p className="text-sm text-green-600">Subscribed successfully!</p>}
              </form>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 sm:flex-row"
          >
            <div className="flex flex-wrap items-start gap-4 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Webvalor. All rights reserved.</span>
              <div className="flex gap-4">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Scroll to Top */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 sm:mt-0"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="hover:gradient-primary hover:text-white hover:border-transparent transition-all"
              >
                <ArrowUp className="h-4 w-4" />
                <span className="sr-only">Scroll to top</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
