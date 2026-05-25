import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  navItems?: NavItem[];
  ctaText?: string;
  ctaTarget?: string;
}

export function Header({
  navItems = [],
  ctaText = "Book My Call",
  ctaTarget = "#lead-form",
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img src="/logo.webp" alt="Get Levrg" width={120} height={32} decoding="async" />

          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-1.5 text-sm-body font-medium text-gray-500 hover:text-spark-800 rounded-md hover:bg-spark-50/60 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              variant="ghost"
              onClick={() => scrollToSection(ctaTarget)}
              className="bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-9 px-5 rounded-lg transition-all hover:shadow-md hover:shadow-spark-600/20"
            >
              {ctaText}
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100"
          >
            <div className="px-4 py-3 space-y-0.5">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2.5 text-sm-body font-medium text-gray-600 hover:text-spark-800 hover:bg-spark-50/60 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 px-3">
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(ctaTarget)}
                  className="w-full bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold py-2.5 rounded-lg"
                >
                  {ctaText}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
