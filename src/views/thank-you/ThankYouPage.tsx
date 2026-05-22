import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  CalendarDays,
  Video,
  Share2,
  Database,
  Globe,
  Send,
  Layers,
  Check,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Shield,
  Play,
  Menu,
  X,
  Megaphone,
  Target,
  Rocket,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ════════════════════════════════════════════════════════════════════════════
   INLINE: AnimatedSection Components
   ════════════════════════════════════════════════════════════════════════════ */

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  stagger?: number;
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  stagger = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration: 0.6,
        delay: delay + stagger,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({
  target,
  prefix = "",
  suffix = "",
  className = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   INLINE: Header Component
   - Hardcoded for thank-you page: empty nav items, ctaText: "Book My Call",
     ctaTarget: "#calendar"
   - Logo links to home using React Router navigate
   ════════════════════════════════════════════════════════════════════════════ */

function Header() {
  const navigate = useNavigate();
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
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMobileOpen(false);
  };

  // Hardcoded for thank-you page
  const navItems: { label: string; href: string }[] = [];
  const ctaText = "Book My Call";
  const ctaTarget = "#calendar";

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
          {/* Logo */}
          {/* <a
            href="#/"
            className="flex items-center group shrink-0"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          > */}
            <img
              src="/logo.png"
              alt="Get Levrg"
              width={120}
              height={32}
            />
          {/* </a> */}

          {/* Desktop Nav */}
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

          {/* CTA Button */}
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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

/* ════════════════════════════════════════════════════════════════════════════
   INLINE: Footer Component
   ════════════════════════════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="bg-void">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img
            src="/Light Logo.png"
            alt="Get Levrg"
            width={120}
            height={32}
          />

          {/* Single line: copyright + links */}
          <div className="flex items-center gap-3 text-caption text-gray-500">
            <span>&copy; 2026 Get Levrg. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   INLINE: ServiceCapabilities Section
   ════════════════════════════════════════════════════════════════════════════ */

function MarketingIllustration() {
  return (
    <svg viewBox="0 0 240 180" className="w-full h-auto" fill="none">
      <motion.path d="M35 90 L80 60 L80 120 Z" fill="#51B027" opacity="0.1" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 0.1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} />
      <path d="M35 90 L80 60 L80 120 Z" stroke="#51B027" strokeWidth="1.5" opacity="0.3" />
      <motion.path d="M88 65 Q108 90 88 115" stroke="#51B027" strokeWidth="2" fill="none" opacity="0.2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} />
      <motion.path d="M102 52 Q130 90 102 128" stroke="#51B027" strokeWidth="2" fill="none" opacity="0.14" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} />
      <motion.path d="M116 39 Q155 90 116 141" stroke="#51B027" strokeWidth="2" fill="none" opacity="0.08" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} />
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
        <circle cx="160" cy="50" r="15" fill="#EEF7E9" stroke="#51B027" strokeWidth="1.2" />
        <rect x="153" y="45" width="14" height="8" rx="2" fill="#51B027" opacity="0.4" />
        <circle cx="160" cy="56" r="2.5" fill="#51B027" opacity="0.4" />
        <circle cx="192" cy="70" r="15" fill="#EEF7E9" stroke="#51B027" strokeWidth="1.2" />
        <path d="M186 70 L192 64 L198 70 L192 76 Z" fill="#51B027" opacity="0.35" />
        <circle cx="168" cy="108" r="15" fill="#EEF7E9" stroke="#51B027" strokeWidth="1.2" />
        <rect x="162" y="103" width="14" height="8" rx="2" fill="#51B027" opacity="0.35" />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}>
        <rect x="152" y="128" width="12" height="26" rx="3" fill="#51B027" opacity="0.12" />
        <rect x="168" y="116" width="12" height="38" rx="3" fill="#51B027" opacity="0.22" />
        <rect x="184" y="104" width="12" height="50" rx="3" fill="#51B027" opacity="0.32" />
        <rect x="200" y="92" width="12" height="62" rx="3" fill="#51B027" opacity="0.42" />
      </motion.g>
      <motion.path d="M152 135 L212 88" stroke="#51B027" strokeWidth="2" strokeDasharray="5 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.6 }} />
    </svg>
  );
}

function VideoCapIllustration() {
  return (
    <svg viewBox="0 0 240 180" className="w-full h-auto" fill="none">
      <motion.g initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}>
        <rect x="20" y="25" width="95" height="68" rx="12" fill="#1A6B5C" fillOpacity="0.06" stroke="#1A6B5C" strokeWidth="1.5" strokeOpacity="0.25" />
        <polygon points="56,42 56,76 80,59" fill="#1A6B5C" opacity="0.3" />
      </motion.g>
      <rect x="20" y="25" width="7" height="11" rx="2" fill="#1A6B5C" opacity="0.15" />
      <rect x="20" y="42" width="7" height="11" rx="2" fill="#1A6B5C" opacity="0.15" />
      <rect x="20" y="62" width="7" height="11" rx="2" fill="#1A6B5C" opacity="0.15" />
      <rect x="20" y="80" width="7" height="11" rx="2" fill="#1A6B5C" opacity="0.15" />
      <motion.g initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
        <rect x="130" y="20" width="85" height="62" rx="10" fill="#E6F5F0" stroke="#1A6B5C" strokeWidth="1" opacity="0.5" />
        <circle cx="150" cy="40" r="7" fill="#1A6B5C" opacity="0.4" />
        <circle cx="170" cy="40" r="7" fill="#0EA5E9" opacity="0.4" />
        <circle cx="190" cy="40" r="7" fill="#E5A800" opacity="0.4" />
        <motion.path d="M140 58 Q162 50 172 62 Q185 68 205 58" stroke="#1A6B5C" strokeWidth="1.5" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.8 }} />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}>
        <rect x="32" y="112" width="180" height="52" rx="8" fill="#1A6B5C" fillOpacity="0.03" stroke="#1A6B5C" strokeWidth="1" strokeOpacity="0.12" />
        <rect x="42" y="120" width="58" height="7" rx="3" fill="#1A6B5C" opacity="0.15" />
        <rect x="42" y="132" width="40" height="5" rx="2" fill="#1A6B5C" opacity="0.1" />
        <rect x="42" y="142" width="48" height="5" rx="2" fill="#1A6B5C" opacity="0.07" />
        <rect x="120" y="128" width="38" height="14" rx="5" fill="#1A6B5C" opacity="0.22" />
        <rect x="168" y="120" width="30" height="30" rx="5" fill="#1A6B5C" opacity="0.07" />
        <circle cx="183" cy="133" r="5" fill="#1A6B5C" opacity="0.1" />
      </motion.g>
    </svg>
  );
}

function WebsiteIllustration() {
  return (
    <svg viewBox="0 0 240 180" className="w-full h-auto" fill="none">
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <rect x="25" y="18" width="190" height="140" rx="12" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="1.5" strokeOpacity="0.25" />
        <circle cx="42" cy="33" r="4" fill="#0EA5E9" opacity="0.25" />
        <circle cx="54" cy="33" r="4" fill="#0EA5E9" opacity="0.18" />
        <circle cx="66" cy="33" r="4" fill="#0EA5E9" opacity="0.12" />
        <rect x="78" y="30" width="120" height="7" rx="3.5" fill="#0EA5E9" opacity="0.08" />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
        <rect x="38" y="50" width="164" height="22" rx="5" fill="#0EA5E9" opacity="0.06" />
        <rect x="46" y="56" width="55" height="5" rx="2.5" fill="#0EA5E9" opacity="0.18" />
        <rect x="46" y="64" width="38" height="4" rx="2" fill="#0EA5E9" opacity="0.1" />
        <rect x="128" y="56" width="32" height="12" rx="5" fill="#0EA5E9" opacity="0.22" />
        <rect x="38" y="80" width="78" height="38" rx="5" fill="#0EA5E9" opacity="0.05" />
        <rect x="124" y="80" width="78" height="38" rx="5" fill="#0EA5E9" opacity="0.05" />
        <rect x="46" y="88" width="50" height="4" rx="2" fill="#0EA5E9" opacity="0.14" />
        <rect x="46" y="96" width="34" height="3" rx="1.5" fill="#0EA5E9" opacity="0.08" />
        <rect x="132" y="88" width="55" height="4" rx="2" fill="#0EA5E9" opacity="0.14" />
        <rect x="132" y="96" width="38" height="3" rx="1.5" fill="#0EA5E9" opacity="0.08" />
      </motion.g>
      <motion.path d="M42 138 L72 128 L102 132 L132 122 L162 126 L192 116 L212 108" stroke="#0EA5E9" strokeWidth="2.5" fill="none" opacity="0.3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 1 }} />
    </svg>
  );
}

function CRMIllustration() {
  return (
    <svg viewBox="0 0 240 180" className="w-full h-auto" fill="none">
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <path d="M35 35 L205 35 L155 72 L85 72 Z" fill="#E5A800" opacity="0.06" stroke="#E5A800" strokeWidth="1.2" strokeOpacity="0.2" />
        <path d="M85 72 L155 72 L135 100 L105 100 Z" fill="#E5A800" opacity="0.1" stroke="#E5A800" strokeWidth="1.2" strokeOpacity="0.2" />
        <path d="M105 100 L135 100 L125 128 L115 128 Z" fill="#E5A800" opacity="0.16" stroke="#E5A800" strokeWidth="1.2" strokeOpacity="0.2" />
      </motion.g>
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
        <rect x="40" y="42" width="32" height="6" rx="3" fill="#E5A800" opacity="0.18" />
        <rect x="82" y="80" width="26" height="6" rx="3" fill="#E5A800" opacity="0.22" />
        <rect x="100" y="108" width="20" height="6" rx="3" fill="#E5A800" opacity="0.28" />
      </motion.g>
      <motion.g animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
        <circle cx="120" cy="50" r="4" fill="#E5A800" opacity="0.3" />
        <circle cx="95" cy="50" r="4" fill="#E5A800" opacity="0.2" />
        <circle cx="145" cy="50" r="4" fill="#E5A800" opacity="0.2" />
        <circle cx="120" cy="86" r="4" fill="#E5A800" opacity="0.3" />
        <circle cx="120" cy="114" r="4" fill="#E5A800" opacity="0.35" />
      </motion.g>
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
        <rect x="28" y="142" width="52" height="22" rx="6" fill="#FEF9E7" stroke="#E5A800" strokeWidth="0.8" strokeOpacity="0.25" />
        <rect x="36" y="148" width="32" height="5" rx="2" fill="#E5A800" opacity="0.18" />
        <rect x="36" y="156" width="20" height="4" rx="2" fill="#E5A800" opacity="0.1" />
        <rect x="92" y="142" width="52" height="22" rx="6" fill="#FEF9E7" stroke="#E5A800" strokeWidth="0.8" strokeOpacity="0.25" />
        <rect x="100" y="148" width="32" height="5" rx="2" fill="#E5A800" opacity="0.18" />
        <rect x="100" y="156" width="20" height="4" rx="2" fill="#E5A800" opacity="0.1" />
        <rect x="156" y="142" width="52" height="22" rx="6" fill="#FEF9E7" stroke="#E5A800" strokeWidth="0.8" strokeOpacity="0.25" />
        <rect x="164" y="148" width="32" height="5" rx="2" fill="#E5A800" opacity="0.18" />
        <rect x="164" y="156" width="20" height="4" rx="2" fill="#E5A800" opacity="0.1" />
      </motion.g>
    </svg>
  );
}

function OutboundIllustration() {
  return (
    <svg viewBox="0 0 240 180" className="w-full h-auto" fill="none">
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <rect x="22" y="35" width="82" height="55" rx="8" fill="#FFF7ED" stroke="#F97316" strokeWidth="1.2" strokeOpacity="0.25" />
        <path d="M22 42 L63 65 L104 42" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
      </motion.g>
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
        <rect x="130" y="35" width="78" height="55" rx="10" fill="#FFF7ED" stroke="#F97316" strokeWidth="1.2" strokeOpacity="0.25" />
        <text x="157" y="68" fontSize="18" fill="#F97316" opacity="0.25" fontFamily="sans-serif" fontWeight="bold">in</text>
      </motion.g>
      <motion.g initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.8 }}>
        <line x1="63" y1="100" x2="35" y2="130" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="4 3" />
        <line x1="63" y1="100" x2="63" y2="135" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 3" />
        <line x1="63" y1="100" x2="91" y2="130" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="4 3" />
        <line x1="168" y1="100" x2="145" y2="130" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="4 3" />
        <line x1="168" y1="100" x2="168" y2="135" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 3" />
        <line x1="168" y1="100" x2="191" y2="130" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="4 3" />
      </motion.g>
      <motion.g animate={{ opacity: [0.3, 0.55, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
        <circle cx="35" cy="132" r="5" fill="#F97316" opacity="0.2" />
        <circle cx="63" cy="137" r="5" fill="#F97316" opacity="0.25" />
        <circle cx="91" cy="132" r="5" fill="#F97316" opacity="0.2" />
        <circle cx="145" cy="132" r="5" fill="#F97316" opacity="0.2" />
        <circle cx="168" cy="137" r="5" fill="#F97316" opacity="0.25" />
        <circle cx="191" cy="132" r="5" fill="#F97316" opacity="0.2" />
      </motion.g>
    </svg>
  );
}

function SupportIllustration() {
  return (
    <svg viewBox="0 0 240 180" className="w-full h-auto" fill="none">
      <motion.g initial={{ scale: 0.85, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}>
        <circle cx="120" cy="52" r="28" fill="#0891B2" opacity="0.05" stroke="#0891B2" strokeWidth="1.5" strokeOpacity="0.18" />
        <path d="M92 48 Q92 25 120 25 Q148 25 148 48" stroke="#0891B2" strokeWidth="2.5" fill="none" opacity="0.22" />
        <rect x="85" y="44" width="10" height="16" rx="5" fill="#0891B2" opacity="0.18" />
        <rect x="145" y="44" width="10" height="16" rx="5" fill="#0891B2" opacity="0.18" />
      </motion.g>
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
        <rect x="18" y="95" width="58" height="42" rx="8" fill="#ECFEFF" stroke="#0891B2" strokeWidth="0.8" strokeOpacity="0.2" />
        <rect x="26" y="103" width="36" height="5" rx="2" fill="#0891B2" opacity="0.18" />
        <rect x="26" y="112" width="26" height="4" rx="2" fill="#0891B2" opacity="0.1" />
        <circle cx="64" cy="128" r="5" fill="#0891B2" opacity="0.18" />
        <path d="M62 128 L64 130 L68 126" stroke="#0891B2" strokeWidth="1" opacity="0.25" />
        <rect x="90" y="95" width="58" height="42" rx="8" fill="#ECFEFF" stroke="#0891B2" strokeWidth="0.8" strokeOpacity="0.2" />
        <rect x="98" y="103" width="36" height="5" rx="2" fill="#0891B2" opacity="0.18" />
        <rect x="98" y="112" width="26" height="4" rx="2" fill="#0891B2" opacity="0.1" />
        <circle cx="136" cy="128" r="5" fill="#0891B2" opacity="0.18" />
        <path d="M134 128 L136 130 L140 126" stroke="#0891B2" strokeWidth="1" opacity="0.25" />
        <rect x="162" y="95" width="58" height="42" rx="8" fill="#ECFEFF" stroke="#0891B2" strokeWidth="0.8" strokeOpacity="0.2" />
        <rect x="170" y="103" width="36" height="5" rx="2" fill="#0891B2" opacity="0.18" />
        <rect x="170" y="112" width="26" height="4" rx="2" fill="#0891B2" opacity="0.1" />
        <circle cx="208" cy="128" r="5" fill="#0891B2" opacity="0.18" />
        <path d="M206 128 L208 130 L212 126" stroke="#0891B2" strokeWidth="1" opacity="0.25" />
      </motion.g>
      <motion.g animate={{ opacity: [0.2, 0.45, 0.2] }} transition={{ duration: 3, repeat: Infinity }}>
        <path d="M168 22 Q168 12 180 12 L200 12 Q212 12 212 22 L212 35 Q212 45 200 45 L188 45 L182 52 L182 45 L180 45 Q168 45 168 35 Z" fill="#0891B2" opacity="0.06" />
        <rect x="176" y="20" width="26" height="4" rx="2" fill="#0891B2" opacity="0.12" />
        <rect x="176" y="28" width="18" height="3" rx="1.5" fill="#0891B2" opacity="0.08" />
      </motion.g>
    </svg>
  );
}

const serviceCapabilitiesCategories = [
  { id: 'creative-social', title: 'Creative Services', subtitle: 'Social Media & Content Marketing', icon: Megaphone, color: '#51B027', textColor: '#3A7D1A', bgColor: '#EEF7E9', deliverables: ['Branding guidelines design','Content calendar creation & management','Social post templates','Text & copywriting (posts, captions)','Static image & graphic design','eBook & long-form asset design','Blog writing & SEO content','Newsletter creation & management','Case studies & documentation','Web banners & digital assets','Digital advertising creative','Visual playbooks & brand assets','Content publishing & scheduling','Reporting & engagement tracking'], illustration: MarketingIllustration },
  { id: 'video', title: 'Video Creation', subtitle: 'Production, editing, and distribution', icon: Video, color: '#1A6B5C', textColor: '#145A4E', bgColor: '#E6F5F0', deliverables: ['Short-form video editing','Long-form video editing','Podcast editing & production','Sound effects & audio enhancement','Thumbnail design','Subtitle & caption creation','Motion graphics & animation','Promo videos','Voiceover videos','Explainer videos','Product videos','Video formatting & repurposing','Platform optimization (LinkedIn, YouTube, etc.)','Publishing & posting'], illustration: VideoCapIllustration },
  { id: 'website', title: 'Website Development', subtitle: 'Build, optimize, and maintain your web presence', icon: Globe, color: '#0EA5E9', textColor: '#076A9A', bgColor: '#E0F2FE', deliverables: ['Website wireframing & page layout design','Page creation & landing pages','Website content creation & updates','Blog creation & optimization','On-page SEO / AEO / GEO optimization','Technical SEO','CRO setup & optimization','CRM / CMS integrations','Dynamic personalization','Plugin & theme updates','Security monitoring & maintenance','Hosting & performance management','Backup & version control','Custom development & integrations'], illustration: WebsiteIllustration },
  { id: 'gtm-crm', title: 'GTM Engineering', subtitle: 'Sales Data & CRM Optimization', icon: Target, color: '#E5A800', textColor: '#8A6500', bgColor: '#FEF9E7', deliverables: ['CRM setup & structure (pipelines, properties)','CRM layout & customization','Workflow automation','Sales engagement workflows','Lead & contact management','Data enrichment (contacts & accounts)','CRM cleansing & data hygiene','Lead scoring','Email logging & tracking','Reporting & dashboards','Pipeline management','Meeting notes & activity tracking','Integration support (tools, platforms)'], illustration: CRMIllustration },
  { id: 'gtm-outbound', title: 'GTM Orchestration', subtitle: 'Email & LinkedIn Outbound', icon: Rocket, color: '#F97316', textColor: '#B85610', bgColor: '#FFF7ED', deliverables: ['Campaign playbook creation','ICP targeting & TAM mapping','Lead list development','Contact research & enrichment','Messaging & copywriting (outreach)','Connection & outreach execution','Response handling & follow-ups','Content creation for campaigns','Social posting & distribution','White space / account analysis','Database enrichment','CRM uploads & syncing','Campaign tracking & optimization'], illustration: OutboundIllustration },
  { id: 'customer-support', title: 'Customer Support', subtitle: 'Operations, support, and execution', icon: HeartHandshake, color: '#0891B2', textColor: '#066D8A', bgColor: '#ECFEFF', deliverables: ['Customer Support Tickets','Email campaign management','Email automation & sequencing','Newsletter distribution','Prospecting support & list management','CRM logging & data entry','Meeting notes capture & transcription','SOP creation & editing','QA & deliverable reviews','Webinar support & hosting','Event coordination & management','LinkedIn campaign management support','Research (directories, partners, etc.)','HubSpot & tool support','Operational support & execution'], illustration: SupportIllustration },
];

function ServiceCapabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredDeliverable, setHoveredDeliverable] = useState<number | null>(null);
  useEffect(() => {
    const timer = setInterval(() => { setActiveTab((prev) => (prev + 1) % serviceCapabilitiesCategories.length); }, 6000);
    return () => clearInterval(timer);
  }, []);
  const active = serviceCapabilitiesCategories[activeTab];
  return (
    <section id="services-capabilities" className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-spark-50 rounded-full mb-4">
            <Layers className="w-4 h-4 text-spark-800" />
            <span className="text-sm-body font-semibold text-spark-800">Full-Service Execution</span>
          </div>
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">One Partner Across<span className="text-spark-600"><br />Content, Growth & Operations </span></h2>
          <p className="text-body text-gray-500 max-w-2xl mx-auto">Every category is staffed with dedicated specialists, managed processes, and measurable outcomes.</p>
        </AnimatedSection>
        <div className="flex sm:flex-row justify-start sm:justify-center gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:pb-0">
          {serviceCapabilitiesCategories.map((cat, i) => (
            <button key={cat.id} onClick={() => setActiveTab(i)} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shrink-0 ${activeTab === i ? 'text-white shadow-md' : 'bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-current'}`} style={{ backgroundColor: activeTab === i ? cat.color : undefined, borderColor: activeTab === i ? cat.color : undefined }}>
              <cat.icon className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">{cat.title}</span>
              <span className="sm:hidden whitespace-nowrap">{cat.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div key={active.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4, ease: 'easeOut' }} className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="rounded-2xl p-6 overflow-hidden" style={{ backgroundColor: active.bgColor }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: 'white' }}><active.icon className="w-5 h-5" style={{ color: active.color }} /></div>
                      <div><h3 className="text-xl font-bold text-gray-900">{active.title}</h3><p className="text-base text-gray-500">{active.subtitle}</p></div>
                    </div>
                    <div className="mt-2"><active.illustration /></div>
                    <div className="mt-5 flex items-center gap-3">
                      <span className="px-3 py-1.5 text-sm font-bold rounded-lg" style={{ backgroundColor: 'white', color: active.color }}>{active.deliverables.length} deliverables</span>
                      <div className="flex gap-1.5">{serviceCapabilitiesCategories.map((_, i) => (<div key={i} className="h-1.5 rounded-full transition-all duration-300" style={{ width: i === activeTab ? 20 : 6, backgroundColor: i === activeTab ? active.color : `${active.color}30` }} />))}</div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                    {active.deliverables.map((d, i) => (
                      <motion.div key={`${active.id}-${i}`} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03, duration: 0.3 }} className="flex items-start gap-2.5 p-2.5 rounded-lg transition-all duration-200 cursor-default" style={{ backgroundColor: hoveredDeliverable === i ? active.bgColor : 'transparent' }} onMouseEnter={() => setHoveredDeliverable(i)} onMouseLeave={() => setHoveredDeliverable(null)}>
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200" style={{ backgroundColor: hoveredDeliverable === i ? active.color : active.bgColor }}><Check className="w-3 h-3 transition-colors duration-200" style={{ color: hoveredDeliverable === i ? 'white' : active.color }} strokeWidth={2.5} /></div>
                        <span className="text-base text-gray-500 leading-snug transition-colors duration-200" style={{ color: hoveredDeliverable === i ? active.textColor : undefined }}>{d}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* <AnimatedSection className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-white rounded-2xl border border-gray-200">
            <p className="text-lg text-gray-500 text-center sm:text-left"><span className="font-bold text-gray-900">6 service categories.</span>{' '}<span className="font-bold text-spark-600">82+ deliverables.</span> One dedicated offshore team.</p>
            <a href="#/video" className="inline-flex items-center gap-2 px-5 py-2.5 bg-spark-600 hover:bg-spark-800 text-white font-semibold text-base rounded-xl transition-all duration-200 shrink-0 whitespace-nowrap">Get Started<ArrowUpRight className="w-4 h-4" /></a>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE-SPECIFIC CONFIG
   ════════════════════════════════════════════════════════════════════════════ */

type ServiceType = "video-editing" | "social-media" | "crm";

interface ServiceConfig {
  label: string;
  icon: React.ElementType;
  videoTitle: string;
  videoSubtitle: string;
  rightColumnTitle: string;
  rightColumnDescription: string;
  rightColumnBullets: string[];
  testimonials: {
    quote: string;
    name: string;
    initials: string;
    title: string;
    company: string;
  }[];
}

const serviceConfigs: Record<ServiceType, ServiceConfig> = {
  "video-editing": {
    label: "Video Editing",
    icon: Video,
    videoTitle: "Watch the 90-Second Overview",
    videoSubtitle: "Video Editing  What Happens Next",
    rightColumnTitle: "What Happens on the Call",
    rightColumnDescription:
      "This isn't a sales pitch. It's a 15-minute discovery conversation where we learn about your video needs and build a custom plan around them.",
    rightColumnBullets: [
      "We'll assess your current video workflow and identify bottlenecks",
      "You'll get a custom team plan tailored to your content goals",
      "We'll share honest pricing  no surprises, no hidden fees",
      "Your dedicated video team can be live within 14 days of sign-off",
    ],
    testimonials: [
      {
        quote:
          "We added video as a service line without hiring a single editor. Our margins went up 40% on video projects in the first quarter.",
        name: "Miles Kaiburn",
        initials: "MK",
        title: "CEO",
        company: "Old Town Media",
      },
      {
        quote:
          "The quality is indistinguishable from our in-house team. Our clients never know the difference, and our margins have never been better.",
        name: "Brendan Taylor",
        initials: "BT",
        title: "CEO",
        company: "Maverick VFX",
      },
      {
        quote:
          "Onboarding took 3 days, not 3 months. Our first deliverables were client-ready by the end of week one.",
        name: "David Park",
        initials: "DP",
        title: "Founder",
        company: "Northstar Digital",
      },
    ],
  },
  "social-media": {
    label: "Social Media",
    icon: Share2,
    videoTitle: "Watch the 90-Second Overview",
    videoSubtitle: "Social Media  What Happens Next",
    rightColumnTitle: "What Happens on the Call",
    rightColumnDescription:
      "This isn't a sales pitch. It's a 15-minute discovery conversation where we learn about your firm's visibility goals and build a content strategy around them.",
    rightColumnBullets: [
      "We'll assess your current social media presence and gaps",
      "You'll get a custom content calendar tailored to your firm",
      "We'll share honest pricing  no surprises, no hidden fees",
      "Your first posts can go live within 14 days of sign-off",
    ],
    testimonials: [
      {
        quote:
          "Our LinkedIn presence went from nonexistent to the most visible firm in our market. Not one partner had to write a post.",
        name: "Sarah Thompson",
        initials: "ST",
        title: "Partner",
        company: "Thompson & Associates CPAs",
      },
      {
        quote:
          "We tried having one partner post occasionally. Never happened. Now we have consistent content that actually sounds like us.",
        name: "Michael Chen",
        initials: "MC",
        title: "Managing Partner",
        company: "Chen Employment Law",
      },
      {
        quote:
          "Financial advisory is relationship-driven. Their team understands our compliance requirements and creates posts that build trust without crossing lines.",
        name: "David Rodriguez",
        initials: "DR",
        title: "Wealth Advisor",
        company: "Rodriguez Financial Group",
      },
    ],
  },
  crm: {
    label: "CRM Optimization",
    icon: Database,
    videoTitle: "Watch the 90-Second Overview",
    videoSubtitle: "CRM Optimization  What Happens Next",
    rightColumnTitle: "What Happens on the Call",
    rightColumnDescription:
      "This isn't a sales pitch. It's a 15-minute discovery conversation where we learn about your CRM challenges and build a custom optimization plan.",
    rightColumnBullets: [
      "We'll assess your current HubSpot setup and identify what's broken",
      "You'll get a custom audit plan with prioritized fixes",
      "We'll share honest pricing  no surprises, no hidden fees",
      "Your CRM can go from chaos to fully operational within 14 days",
    ],
    testimonials: [
      {
        quote:
          "We thought we needed to upgrade our HubSpot tier. Turns out, we just needed someone to actually set it up properly. We went from 20% utilization to using 90% of features.",
        name: "VP Revenue Operations",
        initials: "VP",
        title: "VP RevOps",
        company: "Series A SaaS ($15M ARR)",
      },
      {
        quote:
          "10% total employee costs cut. Our CRM finally drives revenue instead of just storing data.",
        name: "Steven Riskey",
        initials: "SR",
        title: "CEO",
        company: "Strop Insights",
      },
      {
        quote:
          "The audit found $840K in opportunities we didn't know existed. That alone paid for a year of service in week one.",
        name: "Operations Lead",
        initials: "OL",
        title: "Operations Lead",
        company: "B2B SaaS ($8M ARR)",
      },
    ],
  },
};

/* ════════════════════════════════════════════════════════════════════════════
   HUBSPOT CALENDAR EMBED
   ════════════════════════════════════════════════════════════════════════════ */

function HubSpotCalendar() {
  useEffect(() => {
    // Load HubSpot Meetings embed script
    const existingScript = document.querySelector(
      'script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, re-trigger embed rendering
      if (typeof window !== "undefined" && (window as any).hsMeetingsEmbed) {
        try {
          ((window as any).hsMeetingsEmbed as () => void)();
        } catch {
          // silently fail
        }
      }
    }
  }, []);

  return (
    <div
      className="meetings-iframe-container w-full min-h-[600px] sm:min-h-[650px]"
      data-src="https://meetings.hubspot.com/jamie-shanks/book-a-discovery-call-with-get-levrg?embed=true"
    />
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   GET SERVICE FROM HASH
   ════════════════════════════════════════════════════════════════════════════ */

function getServiceFromHash(): ServiceType {
  if (typeof window === "undefined") return "crm";
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.split("?")[1] || "");
  return (params.get("service") || "crm") as ServiceType;
}

/* ════════════════════════════════════════════════════════════════════════════
   1. THANK YOU BANNER  short, warm confirmation
   ════════════════════════════════════════════════════════════════════════════ */

function ThankYouBanner({ config }: { config: ServiceConfig }) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-spark-50/50 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-spark-50/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center max-w-3xl mx-auto">
          {/* Confirmation badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spark-50 border border-spark-200 mb-6"
          >
            <CheckCircle className="h-4 w-4 text-spark-600" />
            <span className="text-sm-body font-medium text-spark-700">
              Request Received
            </span>
          </motion.div>

          {/* Thank you headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h1 sm:text-display text-gray-900 mb-4"
          >
            Thanks! We&apos;ll Be{" "}
            <span className="text-[#51B027]">In Touch Shortly</span>
          </motion.h1>

          {/* Short description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body sm:text-sub text-gray-500 leading-relaxed"
          >
            We received your {config.label.toLowerCase()} request and will get
            back to you soon. In the meantime, book a convenient time below to
            receive your personalized call.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   2. CALENDAR + VIDEO  Two-column layout
   ════════════════════════════════════════════════════════════════════════════ */

function CalendarAndVideoSection({
  config,
  ServiceIcon,
}: {
  config: ServiceConfig;
  ServiceIcon: React.ElementType;
}) {
  return (
    <section className="relative bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN  60%  HUBSPOT CALENDAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div id="calendar" className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              {/* Calendar header */}
              <div className="px-5 py-4 border-b border-gray-100 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-spark-50 flex items-center justify-center shrink-0">
                    <CalendarDays className="h-4.5 w-4.5 text-spark-600" />
                  </div>
                  <div>
                    <h3 className="text-sub font-bold text-gray-900">
                      Book a Discovery Call
                    </h3>
                    <p className="text-sm-body text-gray-500">
                      Pick a time that works for you
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-3">
                    <span className="hidden sm:flex items-center gap-1.5 text-sl text-gray-400">
                      <Clock className="h-3 w-3" />
                      15 min
                    </span>
                    <span className="hidden sm:flex items-center gap-1.5 text-sl text-gray-400">
                      <Shield className="h-3 w-3" />
                      No commitment
                    </span>
                  </div>
                </div>
              </div>
              {/* HubSpot embed */}
              <div className="bg-white">
                <HubSpotCalendar />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN  40%  VIDEO + EXPLANATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Video placeholder */}
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
              <div className="relative aspect-video bg-gradient-to-br from-spark-100/40 via-spark-50/20 to-gray-100">
                {/* Play button overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-spark-600 flex items-center justify-center shadow-lg shadow-spark-600/30 hover:bg-spark-800 transition-colors cursor-pointer group">
                    <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white ml-0.5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-center">
                    <p className="text-body font-bold text-gray-900 mb-0.5">
                      {config.videoTitle}
                    </p>
                    <p className="text-sm-body text-gray-500 flex items-center justify-center gap-1.5">
                      <ServiceIcon className="h-3.5 w-3.5 text-spark-500" />
                      {config.videoSubtitle}
                    </p>
                  </div>
                </div>
                {/* Ribbon */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-sl font-semibold text-gray-500">
                  Video Coming Soon
                </div>
              </div>
            </div>

            {/* Explanation card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
              <h3 className="text-sub font-bold text-gray-900 mb-3">
                {config.rightColumnTitle}
              </h3>
              <p className="text-sm-body text-gray-600 mb-5 leading-relaxed">
                {config.rightColumnDescription}
              </p>
              <ul className="space-y-3">
                {config.rightColumnBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-spark-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="h-3 w-3 text-spark-600" />
                    </div>
                    <span className="text-sm-body text-gray-600">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Trust signals */}
              <div className="flex items-center justify-center gap-4 pt-5 mt-5 border-t border-gray-100">
                <span className="flex items-center gap-1.5 text-sl text-gray-400" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <Clock className="h-3 w-3" />
                  15 min call
                </span>
                <span className="flex items-center gap-1.5 text-sl text-gray-400" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <Mail className="h-3 w-3" />
                  Breakdown in 24 hrs
                </span>
                <span className="flex items-center gap-1.5 text-sl text-gray-400" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <Shield className="h-3 w-3" />
                  No commitment
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   3. TESTIMONIALS (carousel)
   ════════════════════════════════════════════════════════════════════════════ */

function TestimonialsSection({ config }: { config: ServiceConfig }) {
  const testimonials = config.testimonials;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-4">
          <p className="text-caption text-spark-600 mb-3">
            Why operators trust us
          </p>
        </AnimatedSection>
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-h2 sm:text-h1 text-gray-900">
            What Our <span className="text-[#51B027]">Partners</span> Say
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Arrow buttons */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Testimonial card */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="p-8 sm:p-10 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm"
              >
                <Quote className="h-10 w-10 text-spark-300 mb-5" />
                <p className="text-sub sm:text-h3 text-gray-700 italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 text-spark-500 fill-spark-500"
                    />
                  ))}
                </div>
                <div className="pt-5 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-spark-100 flex items-center justify-center">
                      <span className="text-sl font-bold text-spark-700">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm-body font-semibold text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-sl text-gray-500">
                        {t.title} &middot; {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-spark-500"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   4. FINAL CTA
   ════════════════════════════════════════════════════════════════════════════ */

function FinalCTASection({
  config,
  ServiceIcon,
}: {
  config: ServiceConfig;
  ServiceIcon: React.ElementType;
}) {
  const scrollToCalendar = () => {
    const el = document.querySelector(".meetings-iframe-container");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-2xl border border-spark-200 bg-white shadow-sm overflow-hidden">
            {/* Green accent bar top */}
            <div className="h-1 bg-gradient-to-r from-spark-400 via-spark-500 to-spark-600" />

            <div className="px-6 sm:px-10 py-10 sm:py-14 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-spark-50 mb-6">
                <ServiceIcon className="h-6 w-6 text-spark-600" />
              </div>

              <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
                Ready to Get Your{" "}
                <span className="text-[#51B027]">
                  {config.label} Breakdown?
                </span>
              </h2>

              <p className="text-body text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
                Your custom breakdown is just one call away. Book a 15-minute
                discovery call and we&apos;ll deliver something tailored  not a
                template.
              </p>

              <Button
                variant="ghost"
                onClick={scrollToCalendar}
                className="bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-12 px-8 rounded-lg text-base transition-all hover:shadow-md hover:shadow-spark-600/20"
              >
                <CalendarDays className="mr-2 h-4 w-4" />
                Book Your Call Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-sm-body text-gray-400 mt-4">
                15 minutes &middot; No pitch deck &middot; No commitment
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   INLINE: Fractional Team Section
   ════════════════════════════════════════════════════════════════════════════ */

// function FractionalTeamSection() {
//   const capabilities = [
//     {
//       icon: Share2,
//       title: "Social Media & Content Marketing",
//       subtitle: "Stay Consistent Across Every Channel",
//       items: ["Content planning & scheduling", "Social post creation", "Engagement & publishing", "Performance tracking"],
//     },
//     {
//       icon: Globe,
//       title: "Website Development & CRO",
//       subtitle: "Turn More Traffic Into Revenue",
//       items: ["Landing page development", "Website optimization", "Technical improvements", "Conversion-focused updates"],
//     },
//     {
//       icon: Send,
//       title: "GTM Outbound & LinkedIn",
//       subtitle: "Keep Pipeline Generation Running",
//       items: ["LinkedIn management", "Cold email outreach", "Prospect research", "Inbox & reply handling"],
//     },
//     {
//       icon: Database,
//       title: "CRM & Sales Operations",
//       subtitle: "Clean Systems. Better Decisions.",
//       items: ["CRM management", "Workflow automation", "Dashboard reporting", "Pipeline organization"],
//     },
//     {
//       icon: Layers,
//       title: "Marketing Operations Support",
//       subtitle: "Execution Without the Chaos",
//       items: ["Campaign coordination", "Asset organization", "Timeline management", "Cross-team execution support"],
//     },
//   ];

//   return (
//     <section className="py-16 sm:py-24 bg-gray-50">
//       <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatedSection className="text-center mb-14">
//           <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
//             More Than Video Editing. Your <span className="text-[#307A0F]">Fractional Marketing Execution Team.</span>
//           </h2>
//           <p className="text-body text-gray-500 max-w-2xl mx-auto">
//             Scale content, outbound, websites, and operations with dedicated support teams that plug directly into your workflow without adding full-time overhead.
//           </p>
//         </AnimatedSection>
//         <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6" staggerDelay={0.06}>
//           {capabilities.map((cap, i) => {
//             const Icon = cap.icon;
//             return (
//               <StaggerItem key={i}>
//                 <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-gray-100 hover:border-spark-300 hover:shadow-lg hover:shadow-spark-100/50 transition-all duration-300">
//                   <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-spark-50 text-spark-600 mb-4">
//                     <Icon className="h-5 w-5" />
//                   </div>
//                   <h3 className="text-sub font-bold text-gray-900 mb-1">{cap.title}</h3>
//                   <p className="text-sm-body text-spark-700 font-medium mb-4">{cap.subtitle}</p>
//                   <ul className="space-y-2">
//                     {cap.items.map((item, j) => (
//                       <li key={j} className="flex items-start gap-2 text-sm-body text-gray-600">
//                         <Check className="h-4 w-4 text-[#307A0F] mt-0.5 shrink-0" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </StaggerItem>
//             );
//           })}
//         </StaggerContainer>
//       </div>
//     </section>
//   );
// }

/* ════════════════════════════════════════════════════════════════════════════
   PAGE CONTENT (reads service type from hash)
   ════════════════════════════════════════════════════════════════════════════ */

function ThankYouPageContent() {
  const [serviceType] = useState<ServiceType>(() => getServiceFromHash());

  const config = serviceConfigs[serviceType] || serviceConfigs.crm;
  const ServiceIcon = config.icon;

  return (
    <div className="relative">
      <ThankYouBanner config={config} />
      <CalendarAndVideoSection config={config} ServiceIcon={ServiceIcon} />
      <TestimonialsSection config={config} />
      <FinalCTASection config={config} ServiceIcon={ServiceIcon} />
      {/* <FractionalTeamSection /> */}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   EXPORT: ThankYouPage
   - Header (fixed), main content (flex-1 pt-16 sm:pt-20), Footer
   ════════════════════════════════════════════════════════════════════════════ */

export function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20">
        <ThankYouPageContent />
      </main>
      <ServiceCapabilities />
      <Footer />
    </div>
  );
}
