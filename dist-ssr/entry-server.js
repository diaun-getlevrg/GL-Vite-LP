import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { useNavigate, Routes, Route, StaticRouter } from "react-router-dom";
import React, { useRef, useState, useEffect, useLayoutEffect, useCallback } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Menu, Megaphone, Video, Globe, Target, Rocket, HeartHandshake, Layers, Check, ChevronDownIcon, Zap, CalendarDays, TrendingUp, Star, Lock, Mail, Shield, UserX, AlertTriangle, DollarSign, UserCheck, CheckCircle, ClipboardList, Users, Clock, ChevronLeft, ChevronRight, Quote, Trophy, MessageCircle, Phone, RotateCcw, Clapperboard, Play, Film, Sparkles, Palette, Briefcase, Smartphone, Eye, BookOpen, ThumbsUp, LayoutGrid, PiggyBank, Building2, CheckCircle2, XCircle, Calendar, BarChart3, Scale, Lightbulb, CalendarCheck, Heart, Share2, Activity, AlertOctagon, Settings, RefreshCw, Database, Search, Brush } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  stagger = 0
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const wasVisible = useRef(false);
  const [mounted, setMounted] = useState(false);
  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      wasVisible.current = r.top < window.innerHeight && r.bottom > 0;
    }
    setMounted(true);
  }, []);
  if (!mounted) {
    return /* @__PURE__ */ jsx("div", { ref, className, children });
  }
  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };
  const offset = directionMap[direction];
  const vis = { opacity: 1, x: 0, y: 0 };
  const hid = { opacity: 0, ...offset };
  const skip = wasVisible.current;
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      initial: skip ? vis : hid,
      animate: skip || isInView ? vis : hid,
      transition: {
        duration: 0.6,
        delay: delay + stagger,
        ease: [0.21, 0.47, 0.32, 0.98]
      },
      className,
      children
    }
  );
}
function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const wasVisible = useRef(false);
  const [mounted, setMounted] = useState(false);
  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      wasVisible.current = r.top < window.innerHeight && r.bottom > 0;
    }
    setMounted(true);
  }, []);
  if (!mounted) {
    return /* @__PURE__ */ jsx("div", { className, children });
  }
  const skip = wasVisible.current;
  const state = skip || isInView ? "visible" : "hidden";
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      initial: skip ? "visible" : "hidden",
      animate: state,
      variants: {
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } }
      },
      className,
      children
    }
  );
}
function StaggerItem({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }
        }
      },
      className,
      children
    }
  );
}
function CountUp({
  target,
  prefix = "",
  suffix = "",
  className = ""
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 2e3;
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
  return /* @__PURE__ */ jsxs("span", { ref, className, children: [
    prefix,
    count.toLocaleString(),
    suffix
  ] });
}
const trustedLogos = [
  { src: "/logos/b2b/Airtera.webp", alt: "Airtera" },
  { src: "/logos/b2b/Apiphany.webp", alt: "Apiphany" },
  { src: "/logos/b2b/Atlus.webp", alt: "Atlus" },
  { src: "/logos/b2b/BLDG.webp", alt: "BLDG" },
  { src: "/logos/b2b/Bossey.webp", alt: "Bossey" },
  { src: "/logos/b2b/CaptainJV.webp", alt: "Captain JV" },
  { src: "/logos/b2b/Finboa.webp", alt: "Finboa" },
  { src: "/logos/b2b/Flint.webp", alt: "Flint" },
  { src: "/logos/b2b/Force-Brands.webp", alt: "Force Brands" },
  { src: "/logos/b2b/Genesis.webp", alt: "Genesis" },
  { src: "/logos/b2b/Growth.webp", alt: "Growth" },
  { src: "/logos/b2b/Guideline.webp", alt: "Guideline" },
  { src: "/logos/b2b/Hostar.webp", alt: "Hostar" },
  { src: "/logos/b2b/HPBS.webp", alt: "HPBS" },
  { src: "/logos/b2b/HubSync.webp", alt: "HubSync" },
  { src: "/logos/b2b/Ixopay.webp", alt: "Ixopay" },
  { src: "/logos/b2b/Jama-Software.png", alt: "Jama Software" },
  { src: "/logos/b2b/Kairoi.webp", alt: "Kairoi" },
  { src: "/logos/b2b/Legacy-Biome.webp", alt: "Legacy Biome" },
  { src: "/logos/b2b/Message-Gears.webp", alt: "Message Gears" },
  { src: "/logos/b2b/Meta-Integration.webp", alt: "Meta Integration" },
  { src: "/logos/b2b/Minga.webp", alt: "Minga" },
  { src: "/logos/b2b/Novel-Biome.webp", alt: "Novel Biome" },
  { src: "/logos/b2b/Oleria.webp", alt: "Oleria" },
  { src: "/logos/b2b/OTM.webp", alt: "OTM" },
  { src: "/logos/b2b/Paragon.webp", alt: "Paragon" },
  { src: "/logos/b2b/Sales.webp", alt: "Sales" },
  { src: "/logos/b2b/Stealth.webp", alt: "Stealth" },
  { src: "/logos/b2b/Three-Rings.webp", alt: "Three Rings" },
  { src: "/logos/b2b/Tiliter.webp", alt: "Tiliter" },
  { src: "/logos/b2b/TSIMAGINE.webp", alt: "TSIMAGINE" },
  { src: "/logos/b2b/Usherwood.webp", alt: "Usherwood" },
  { src: "/logos/b2b/Vortex.webp", alt: "Vortex" },
  { src: "/logos/b2b/Weinberg-Gonser-LLP.webp", alt: "Weinberg Gonser LLP" },
  { src: "/logos/b2b/ZAM.webp", alt: "ZAM" },
  { src: "/logos/b2b/Zoomer.webp", alt: "Zoomer" }
];
function TrustedByMarquee() {
  const halfLength = Math.ceil(trustedLogos.length / 2);
  const firstRow = trustedLogos.slice(0, halfLength);
  const secondRow = trustedLogos.slice(halfLength);
  return /* @__PURE__ */ jsxs("section", { className: "py-10 sm:py-14 bg-gray-50 border-y border-gray-100 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-8", children: /* @__PURE__ */ jsxs("p", { className: "text-caption text-gray-400 tracking-wider", children: [
      "Trusted by ",
      trustedLogos.length,
      "+ B2B companies generating $50M+ in revenue"
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-x-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "flex w-max animate-marquee-left will-change-transform", children: [...firstRow, ...firstRow].map((logo, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center h-14 sm:h-16 w-[140px]",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: logo.src,
              alt: `${logo.alt} company logo`,
              width: 140,
              height: 56,
              className: "h-10 sm:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            }
          )
        },
        `row1-${logo.alt}-${i}`
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-x-hidden mt-6", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "flex w-max animate-marquee-right will-change-transform", children: [...secondRow, ...secondRow].map((logo, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center h-14 sm:h-16 w-[140px]",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: logo.src,
              alt: `${logo.alt} company logo`,
              width: 140,
              height: 56,
              className: "h-10 sm:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            }
          )
        },
        `row2-${logo.alt}-${i}`
      )) })
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function Header({
  navItems = [],
  ctaText = "Book My Call",
  ctaTarget = "#lead-form"
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm" : "bg-white/60 backdrop-blur-md"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "Get Levrg", width: 120, height: 32 }),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-0.5", children: navItems.map((item) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToSection(item.href),
              className: "px-3 py-1.5 text-sm-body font-medium text-gray-500 hover:text-spark-800 rounded-md hover:bg-spark-50/60 transition-colors",
              children: item.label
            },
            item.href
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center", children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "ghost",
              onClick: () => scrollToSection(ctaTarget),
              className: "bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-9 px-5 rounded-lg transition-all hover:shadow-md hover:shadow-spark-600/20",
              children: [
                ctaText,
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-3.5 w-3.5" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setMobileOpen(!mobileOpen),
              className: "md:hidden p-2 text-gray-600 hover:text-gray-900",
              "aria-label": "Toggle menu",
              children: mobileOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100",
            children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-3 space-y-0.5", children: [
              navItems.map((item) => /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => scrollToSection(item.href),
                  className: "block w-full text-left px-3 py-2.5 text-sm-body font-medium text-gray-600 hover:text-spark-800 hover:bg-spark-50/60 rounded-lg",
                  children: item.label
                },
                item.href
              )),
              /* @__PURE__ */ jsx("div", { className: "pt-2 px-3", children: /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "ghost",
                  onClick: () => scrollToSection(ctaTarget),
                  className: "w-full bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold py-2.5 rounded-lg",
                  children: [
                    ctaText,
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-3.5 w-3.5" })
                  ]
                }
              ) })
            ] })
          }
        ) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-void", children: /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "py-8 flex flex-col sm:flex-row items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsx("img", { src: "/Light Logo.png", alt: "Get Levrg", width: 120, height: 32 }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 text-caption text-gray-500", children: /* @__PURE__ */ jsx("span", { children: "© 2026 Get Levrg. All rights reserved." }) })
  ] }) }) });
}
function MarketingIllustration() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 240 180", className: "w-full h-auto", fill: "none", children: [
    /* @__PURE__ */ jsx(motion.path, { d: "M35 90 L80 60 L80 120 Z", fill: "#51B027", opacity: "0.1", initial: { scale: 0.8, opacity: 0 }, whileInView: { scale: 1, opacity: 0.1 }, viewport: { once: true }, transition: { duration: 0.5 } }),
    /* @__PURE__ */ jsx("path", { d: "M35 90 L80 60 L80 120 Z", stroke: "#51B027", strokeWidth: "1.5", opacity: "0.3" }),
    /* @__PURE__ */ jsx(motion.path, { d: "M88 65 Q108 90 88 115", stroke: "#51B027", strokeWidth: "2", fill: "none", opacity: "0.2", initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 } }),
    /* @__PURE__ */ jsx(motion.path, { d: "M102 52 Q130 90 102 128", stroke: "#51B027", strokeWidth: "2", fill: "none", opacity: "0.14", initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 } }),
    /* @__PURE__ */ jsx(motion.path, { d: "M116 39 Q155 90 116 141", stroke: "#51B027", strokeWidth: "2", fill: "none", opacity: "0.08", initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.6 } }),
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { delay: 0.8 }, children: [
      /* @__PURE__ */ jsx("circle", { cx: "160", cy: "50", r: "15", fill: "#EEF7E9", stroke: "#51B027", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsx("rect", { x: "153", y: "45", width: "14", height: "8", rx: "2", fill: "#51B027", opacity: "0.4" }),
      /* @__PURE__ */ jsx("circle", { cx: "160", cy: "56", r: "2.5", fill: "#51B027", opacity: "0.4" }),
      /* @__PURE__ */ jsx("circle", { cx: "192", cy: "70", r: "15", fill: "#EEF7E9", stroke: "#51B027", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsx("path", { d: "M186 70 L192 64 L198 70 L192 76 Z", fill: "#51B027", opacity: "0.35" }),
      /* @__PURE__ */ jsx("circle", { cx: "168", cy: "108", r: "15", fill: "#EEF7E9", stroke: "#51B027", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsx("rect", { x: "162", y: "103", width: "14", height: "8", rx: "2", fill: "#51B027", opacity: "0.35" })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { delay: 1 }, children: [
      /* @__PURE__ */ jsx("rect", { x: "152", y: "128", width: "12", height: "26", rx: "3", fill: "#51B027", opacity: "0.12" }),
      /* @__PURE__ */ jsx("rect", { x: "168", y: "116", width: "12", height: "38", rx: "3", fill: "#51B027", opacity: "0.22" }),
      /* @__PURE__ */ jsx("rect", { x: "184", y: "104", width: "12", height: "50", rx: "3", fill: "#51B027", opacity: "0.32" }),
      /* @__PURE__ */ jsx("rect", { x: "200", y: "92", width: "12", height: "62", rx: "3", fill: "#51B027", opacity: "0.42" })
    ] }),
    /* @__PURE__ */ jsx(motion.path, { d: "M152 135 L212 88", stroke: "#51B027", strokeWidth: "2", strokeDasharray: "5 4", initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true }, transition: { delay: 1.2, duration: 0.6 } })
  ] });
}
function VideoCapIllustration() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 240 180", className: "w-full h-auto", fill: "none", children: [
    /* @__PURE__ */ jsxs(motion.g, { initial: { scale: 0, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, viewport: { once: true }, transition: { delay: 0.2, type: "spring", stiffness: 120 }, children: [
      /* @__PURE__ */ jsx("rect", { x: "20", y: "25", width: "95", height: "68", rx: "12", fill: "#1A6B5C", fillOpacity: "0.06", stroke: "#1A6B5C", strokeWidth: "1.5", strokeOpacity: "0.25" }),
      /* @__PURE__ */ jsx("polygon", { points: "56,42 56,76 80,59", fill: "#1A6B5C", opacity: "0.3" })
    ] }),
    /* @__PURE__ */ jsx("rect", { x: "20", y: "25", width: "7", height: "11", rx: "2", fill: "#1A6B5C", opacity: "0.15" }),
    /* @__PURE__ */ jsx("rect", { x: "20", y: "42", width: "7", height: "11", rx: "2", fill: "#1A6B5C", opacity: "0.15" }),
    /* @__PURE__ */ jsx("rect", { x: "20", y: "62", width: "7", height: "11", rx: "2", fill: "#1A6B5C", opacity: "0.15" }),
    /* @__PURE__ */ jsx("rect", { x: "20", y: "80", width: "7", height: "11", rx: "2", fill: "#1A6B5C", opacity: "0.15" }),
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0, x: 12 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: 0.5 }, children: [
      /* @__PURE__ */ jsx("rect", { x: "130", y: "20", width: "85", height: "62", rx: "10", fill: "#E6F5F0", stroke: "#1A6B5C", strokeWidth: "1", opacity: "0.5" }),
      /* @__PURE__ */ jsx("circle", { cx: "150", cy: "40", r: "7", fill: "#1A6B5C", opacity: "0.4" }),
      /* @__PURE__ */ jsx("circle", { cx: "170", cy: "40", r: "7", fill: "#0EA5E9", opacity: "0.4" }),
      /* @__PURE__ */ jsx("circle", { cx: "190", cy: "40", r: "7", fill: "#E5A800", opacity: "0.4" }),
      /* @__PURE__ */ jsx(motion.path, { d: "M140 58 Q162 50 172 62 Q185 68 205 58", stroke: "#1A6B5C", strokeWidth: "1.5", fill: "none", initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true }, transition: { delay: 0.8, duration: 0.8 } })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { delay: 1 }, children: [
      /* @__PURE__ */ jsx("rect", { x: "32", y: "112", width: "180", height: "52", rx: "8", fill: "#1A6B5C", fillOpacity: "0.03", stroke: "#1A6B5C", strokeWidth: "1", strokeOpacity: "0.12" }),
      /* @__PURE__ */ jsx("rect", { x: "42", y: "120", width: "58", height: "7", rx: "3", fill: "#1A6B5C", opacity: "0.15" }),
      /* @__PURE__ */ jsx("rect", { x: "42", y: "132", width: "40", height: "5", rx: "2", fill: "#1A6B5C", opacity: "0.1" }),
      /* @__PURE__ */ jsx("rect", { x: "42", y: "142", width: "48", height: "5", rx: "2", fill: "#1A6B5C", opacity: "0.07" }),
      /* @__PURE__ */ jsx("rect", { x: "120", y: "128", width: "38", height: "14", rx: "5", fill: "#1A6B5C", opacity: "0.22" }),
      /* @__PURE__ */ jsx("rect", { x: "168", y: "120", width: "30", height: "30", rx: "5", fill: "#1A6B5C", opacity: "0.07" }),
      /* @__PURE__ */ jsx("circle", { cx: "183", cy: "133", r: "5", fill: "#1A6B5C", opacity: "0.1" })
    ] })
  ] });
}
function WebsiteIllustration() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 240 180", className: "w-full h-auto", fill: "none", children: [
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.2 }, children: [
      /* @__PURE__ */ jsx("rect", { x: "25", y: "18", width: "190", height: "140", rx: "12", fill: "#E0F2FE", stroke: "#0EA5E9", strokeWidth: "1.5", strokeOpacity: "0.25" }),
      /* @__PURE__ */ jsx("circle", { cx: "42", cy: "33", r: "4", fill: "#0EA5E9", opacity: "0.25" }),
      /* @__PURE__ */ jsx("circle", { cx: "54", cy: "33", r: "4", fill: "#0EA5E9", opacity: "0.18" }),
      /* @__PURE__ */ jsx("circle", { cx: "66", cy: "33", r: "4", fill: "#0EA5E9", opacity: "0.12" }),
      /* @__PURE__ */ jsx("rect", { x: "78", y: "30", width: "120", height: "7", rx: "3.5", fill: "#0EA5E9", opacity: "0.08" })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { delay: 0.5 }, children: [
      /* @__PURE__ */ jsx("rect", { x: "38", y: "50", width: "164", height: "22", rx: "5", fill: "#0EA5E9", opacity: "0.06" }),
      /* @__PURE__ */ jsx("rect", { x: "46", y: "56", width: "55", height: "5", rx: "2.5", fill: "#0EA5E9", opacity: "0.18" }),
      /* @__PURE__ */ jsx("rect", { x: "46", y: "64", width: "38", height: "4", rx: "2", fill: "#0EA5E9", opacity: "0.1" }),
      /* @__PURE__ */ jsx("rect", { x: "128", y: "56", width: "32", height: "12", rx: "5", fill: "#0EA5E9", opacity: "0.22" }),
      /* @__PURE__ */ jsx("rect", { x: "38", y: "80", width: "78", height: "38", rx: "5", fill: "#0EA5E9", opacity: "0.05" }),
      /* @__PURE__ */ jsx("rect", { x: "124", y: "80", width: "78", height: "38", rx: "5", fill: "#0EA5E9", opacity: "0.05" }),
      /* @__PURE__ */ jsx("rect", { x: "46", y: "88", width: "50", height: "4", rx: "2", fill: "#0EA5E9", opacity: "0.14" }),
      /* @__PURE__ */ jsx("rect", { x: "46", y: "96", width: "34", height: "3", rx: "1.5", fill: "#0EA5E9", opacity: "0.08" }),
      /* @__PURE__ */ jsx("rect", { x: "132", y: "88", width: "55", height: "4", rx: "2", fill: "#0EA5E9", opacity: "0.14" }),
      /* @__PURE__ */ jsx("rect", { x: "132", y: "96", width: "38", height: "3", rx: "1.5", fill: "#0EA5E9", opacity: "0.08" })
    ] }),
    /* @__PURE__ */ jsx(motion.path, { d: "M42 138 L72 128 L102 132 L132 122 L162 126 L192 116 L212 108", stroke: "#0EA5E9", strokeWidth: "2.5", fill: "none", opacity: "0.3", initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true }, transition: { delay: 0.8, duration: 1 } })
  ] });
}
function CRMIllustration() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 240 180", className: "w-full h-auto", fill: "none", children: [
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { delay: 0.2 }, children: [
      /* @__PURE__ */ jsx("path", { d: "M35 35 L205 35 L155 72 L85 72 Z", fill: "#E5A800", opacity: "0.06", stroke: "#E5A800", strokeWidth: "1.2", strokeOpacity: "0.2" }),
      /* @__PURE__ */ jsx("path", { d: "M85 72 L155 72 L135 100 L105 100 Z", fill: "#E5A800", opacity: "0.1", stroke: "#E5A800", strokeWidth: "1.2", strokeOpacity: "0.2" }),
      /* @__PURE__ */ jsx("path", { d: "M105 100 L135 100 L125 128 L115 128 Z", fill: "#E5A800", opacity: "0.16", stroke: "#E5A800", strokeWidth: "1.2", strokeOpacity: "0.2" })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0, x: -8 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: 0.5 }, children: [
      /* @__PURE__ */ jsx("rect", { x: "40", y: "42", width: "32", height: "6", rx: "3", fill: "#E5A800", opacity: "0.18" }),
      /* @__PURE__ */ jsx("rect", { x: "82", y: "80", width: "26", height: "6", rx: "3", fill: "#E5A800", opacity: "0.22" }),
      /* @__PURE__ */ jsx("rect", { x: "100", y: "108", width: "20", height: "6", rx: "3", fill: "#E5A800", opacity: "0.28" })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { animate: { opacity: [0.3, 0.6, 0.3] }, transition: { duration: 2, repeat: Infinity }, children: [
      /* @__PURE__ */ jsx("circle", { cx: "120", cy: "50", r: "4", fill: "#E5A800", opacity: "0.3" }),
      /* @__PURE__ */ jsx("circle", { cx: "95", cy: "50", r: "4", fill: "#E5A800", opacity: "0.2" }),
      /* @__PURE__ */ jsx("circle", { cx: "145", cy: "50", r: "4", fill: "#E5A800", opacity: "0.2" }),
      /* @__PURE__ */ jsx("circle", { cx: "120", cy: "86", r: "4", fill: "#E5A800", opacity: "0.3" }),
      /* @__PURE__ */ jsx("circle", { cx: "120", cy: "114", r: "4", fill: "#E5A800", opacity: "0.35" })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0, y: 8 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.8 }, children: [
      /* @__PURE__ */ jsx("rect", { x: "28", y: "142", width: "52", height: "22", rx: "6", fill: "#FEF9E7", stroke: "#E5A800", strokeWidth: "0.8", strokeOpacity: "0.25" }),
      /* @__PURE__ */ jsx("rect", { x: "36", y: "148", width: "32", height: "5", rx: "2", fill: "#E5A800", opacity: "0.18" }),
      /* @__PURE__ */ jsx("rect", { x: "36", y: "156", width: "20", height: "4", rx: "2", fill: "#E5A800", opacity: "0.1" }),
      /* @__PURE__ */ jsx("rect", { x: "92", y: "142", width: "52", height: "22", rx: "6", fill: "#FEF9E7", stroke: "#E5A800", strokeWidth: "0.8", strokeOpacity: "0.25" }),
      /* @__PURE__ */ jsx("rect", { x: "100", y: "148", width: "32", height: "5", rx: "2", fill: "#E5A800", opacity: "0.18" }),
      /* @__PURE__ */ jsx("rect", { x: "100", y: "156", width: "20", height: "4", rx: "2", fill: "#E5A800", opacity: "0.1" }),
      /* @__PURE__ */ jsx("rect", { x: "156", y: "142", width: "52", height: "22", rx: "6", fill: "#FEF9E7", stroke: "#E5A800", strokeWidth: "0.8", strokeOpacity: "0.25" }),
      /* @__PURE__ */ jsx("rect", { x: "164", y: "148", width: "32", height: "5", rx: "2", fill: "#E5A800", opacity: "0.18" }),
      /* @__PURE__ */ jsx("rect", { x: "164", y: "156", width: "20", height: "4", rx: "2", fill: "#E5A800", opacity: "0.1" })
    ] })
  ] });
}
function OutboundIllustration() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 240 180", className: "w-full h-auto", fill: "none", children: [
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.2 }, children: [
      /* @__PURE__ */ jsx("rect", { x: "22", y: "35", width: "82", height: "55", rx: "8", fill: "#FFF7ED", stroke: "#F97316", strokeWidth: "1.2", strokeOpacity: "0.25" }),
      /* @__PURE__ */ jsx("path", { d: "M22 42 L63 65 L104 42", stroke: "#F97316", strokeWidth: "1.5", strokeOpacity: "0.2", fill: "none" })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0, x: -8 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: 0.5 }, children: [
      /* @__PURE__ */ jsx("rect", { x: "130", y: "35", width: "78", height: "55", rx: "10", fill: "#FFF7ED", stroke: "#F97316", strokeWidth: "1.2", strokeOpacity: "0.25" }),
      /* @__PURE__ */ jsx("text", { x: "157", y: "68", fontSize: "18", fill: "#F97316", opacity: "0.25", fontFamily: "sans-serif", fontWeight: "bold", children: "in" })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true }, transition: { delay: 0.8, duration: 0.8 }, children: [
      /* @__PURE__ */ jsx("line", { x1: "63", y1: "100", x2: "35", y2: "130", stroke: "#F97316", strokeWidth: "1.5", strokeOpacity: "0.2", strokeDasharray: "4 3" }),
      /* @__PURE__ */ jsx("line", { x1: "63", y1: "100", x2: "63", y2: "135", stroke: "#F97316", strokeWidth: "1.5", strokeOpacity: "0.25", strokeDasharray: "4 3" }),
      /* @__PURE__ */ jsx("line", { x1: "63", y1: "100", x2: "91", y2: "130", stroke: "#F97316", strokeWidth: "1.5", strokeOpacity: "0.2", strokeDasharray: "4 3" }),
      /* @__PURE__ */ jsx("line", { x1: "168", y1: "100", x2: "145", y2: "130", stroke: "#F97316", strokeWidth: "1.5", strokeOpacity: "0.2", strokeDasharray: "4 3" }),
      /* @__PURE__ */ jsx("line", { x1: "168", y1: "100", x2: "168", y2: "135", stroke: "#F97316", strokeWidth: "1.5", strokeOpacity: "0.25", strokeDasharray: "4 3" }),
      /* @__PURE__ */ jsx("line", { x1: "168", y1: "100", x2: "191", y2: "130", stroke: "#F97316", strokeWidth: "1.5", strokeOpacity: "0.2", strokeDasharray: "4 3" })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { animate: { opacity: [0.3, 0.55, 0.3] }, transition: { duration: 2, repeat: Infinity }, children: [
      /* @__PURE__ */ jsx("circle", { cx: "35", cy: "132", r: "5", fill: "#F97316", opacity: "0.2" }),
      /* @__PURE__ */ jsx("circle", { cx: "63", cy: "137", r: "5", fill: "#F97316", opacity: "0.25" }),
      /* @__PURE__ */ jsx("circle", { cx: "91", cy: "132", r: "5", fill: "#F97316", opacity: "0.2" }),
      /* @__PURE__ */ jsx("circle", { cx: "145", cy: "132", r: "5", fill: "#F97316", opacity: "0.2" }),
      /* @__PURE__ */ jsx("circle", { cx: "168", cy: "137", r: "5", fill: "#F97316", opacity: "0.25" }),
      /* @__PURE__ */ jsx("circle", { cx: "191", cy: "132", r: "5", fill: "#F97316", opacity: "0.2" })
    ] })
  ] });
}
function SupportIllustration() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 240 180", className: "w-full h-auto", fill: "none", children: [
    /* @__PURE__ */ jsxs(motion.g, { initial: { scale: 0.85, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, viewport: { once: true }, transition: { delay: 0.2, type: "spring", stiffness: 100 }, children: [
      /* @__PURE__ */ jsx("circle", { cx: "120", cy: "52", r: "28", fill: "#0891B2", opacity: "0.05", stroke: "#0891B2", strokeWidth: "1.5", strokeOpacity: "0.18" }),
      /* @__PURE__ */ jsx("path", { d: "M92 48 Q92 25 120 25 Q148 25 148 48", stroke: "#0891B2", strokeWidth: "2.5", fill: "none", opacity: "0.22" }),
      /* @__PURE__ */ jsx("rect", { x: "85", y: "44", width: "10", height: "16", rx: "5", fill: "#0891B2", opacity: "0.18" }),
      /* @__PURE__ */ jsx("rect", { x: "145", y: "44", width: "10", height: "16", rx: "5", fill: "#0891B2", opacity: "0.18" })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.5 }, children: [
      /* @__PURE__ */ jsx("rect", { x: "18", y: "95", width: "58", height: "42", rx: "8", fill: "#ECFEFF", stroke: "#0891B2", strokeWidth: "0.8", strokeOpacity: "0.2" }),
      /* @__PURE__ */ jsx("rect", { x: "26", y: "103", width: "36", height: "5", rx: "2", fill: "#0891B2", opacity: "0.18" }),
      /* @__PURE__ */ jsx("rect", { x: "26", y: "112", width: "26", height: "4", rx: "2", fill: "#0891B2", opacity: "0.1" }),
      /* @__PURE__ */ jsx("circle", { cx: "64", cy: "128", r: "5", fill: "#0891B2", opacity: "0.18" }),
      /* @__PURE__ */ jsx("path", { d: "M62 128 L64 130 L68 126", stroke: "#0891B2", strokeWidth: "1", opacity: "0.25" }),
      /* @__PURE__ */ jsx("rect", { x: "90", y: "95", width: "58", height: "42", rx: "8", fill: "#ECFEFF", stroke: "#0891B2", strokeWidth: "0.8", strokeOpacity: "0.2" }),
      /* @__PURE__ */ jsx("rect", { x: "98", y: "103", width: "36", height: "5", rx: "2", fill: "#0891B2", opacity: "0.18" }),
      /* @__PURE__ */ jsx("rect", { x: "98", y: "112", width: "26", height: "4", rx: "2", fill: "#0891B2", opacity: "0.1" }),
      /* @__PURE__ */ jsx("circle", { cx: "136", cy: "128", r: "5", fill: "#0891B2", opacity: "0.18" }),
      /* @__PURE__ */ jsx("path", { d: "M134 128 L136 130 L140 126", stroke: "#0891B2", strokeWidth: "1", opacity: "0.25" }),
      /* @__PURE__ */ jsx("rect", { x: "162", y: "95", width: "58", height: "42", rx: "8", fill: "#ECFEFF", stroke: "#0891B2", strokeWidth: "0.8", strokeOpacity: "0.2" }),
      /* @__PURE__ */ jsx("rect", { x: "170", y: "103", width: "36", height: "5", rx: "2", fill: "#0891B2", opacity: "0.18" }),
      /* @__PURE__ */ jsx("rect", { x: "170", y: "112", width: "26", height: "4", rx: "2", fill: "#0891B2", opacity: "0.1" }),
      /* @__PURE__ */ jsx("circle", { cx: "208", cy: "128", r: "5", fill: "#0891B2", opacity: "0.18" }),
      /* @__PURE__ */ jsx("path", { d: "M206 128 L208 130 L212 126", stroke: "#0891B2", strokeWidth: "1", opacity: "0.25" })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { animate: { opacity: [0.2, 0.45, 0.2] }, transition: { duration: 3, repeat: Infinity }, children: [
      /* @__PURE__ */ jsx("path", { d: "M168 22 Q168 12 180 12 L200 12 Q212 12 212 22 L212 35 Q212 45 200 45 L188 45 L182 52 L182 45 L180 45 Q168 45 168 35 Z", fill: "#0891B2", opacity: "0.06" }),
      /* @__PURE__ */ jsx("rect", { x: "176", y: "20", width: "26", height: "4", rx: "2", fill: "#0891B2", opacity: "0.12" }),
      /* @__PURE__ */ jsx("rect", { x: "176", y: "28", width: "18", height: "3", rx: "1.5", fill: "#0891B2", opacity: "0.08" })
    ] })
  ] });
}
const serviceCapabilitiesCategories = [
  {
    id: "creative-social",
    title: "Creative Services",
    subtitle: "Social Media & Content Marketing",
    icon: Megaphone,
    color: "#51B027",
    textColor: "#3A7D1A",
    bgColor: "#EEF7E9",
    deliverables: ["Branding guidelines design", "Content calendar creation & management", "Social post templates", "Text & copywriting (posts, captions)", "Static image & graphic design", "eBook & long-form asset design", "Blog writing & SEO content", "Newsletter creation & management", "Case studies & documentation", "Web banners & digital assets", "Digital advertising creative", "Visual playbooks & brand assets", "Content publishing & scheduling", "Reporting & engagement tracking"],
    illustration: MarketingIllustration
  },
  {
    id: "video",
    title: "Video Creation",
    subtitle: "Production, editing, and distribution",
    icon: Video,
    color: "#1A6B5C",
    textColor: "#145A4E",
    bgColor: "#E6F5F0",
    deliverables: ["Short-form video editing", "Long-form video editing", "Podcast editing & production", "Sound effects & audio enhancement", "Thumbnail design", "Subtitle & caption creation", "Motion graphics & animation", "Promo videos", "Voiceover videos", "Explainer videos", "Product videos", "Video formatting & repurposing", "Platform optimization (LinkedIn, YouTube, etc.)", "Publishing & posting"],
    illustration: VideoCapIllustration
  },
  {
    id: "website",
    title: "Website Development",
    subtitle: "Build, optimize, and maintain your web presence",
    icon: Globe,
    color: "#0EA5E9",
    textColor: "#076A9A",
    bgColor: "#E0F2FE",
    deliverables: ["Website wireframing & page layout design", "Page creation & landing pages", "Website content creation & updates", "Blog creation & optimization", "On-page SEO / AEO / GEO optimization", "Technical SEO", "CRO setup & optimization", "CRM / CMS integrations", "Dynamic personalization", "Plugin & theme updates", "Security monitoring & maintenance", "Hosting & performance management", "Backup & version control", "Custom development & integrations"],
    illustration: WebsiteIllustration
  },
  {
    id: "gtm-crm",
    title: "GTM Engineering",
    subtitle: "Sales Data & CRM Optimization",
    icon: Target,
    color: "#E5A800",
    textColor: "#8A6500",
    bgColor: "#FEF9E7",
    deliverables: ["CRM setup & structure (pipelines, properties)", "CRM layout & customization", "Workflow automation", "Sales engagement workflows", "Lead & contact management", "Data enrichment (contacts & accounts)", "CRM cleansing & data hygiene", "Lead scoring", "Email logging & tracking", "Reporting & dashboards", "Pipeline management", "Meeting notes & activity tracking", "Integration support (tools, platforms)"],
    illustration: CRMIllustration
  },
  {
    id: "gtm-outbound",
    title: "GTM Orchestration",
    subtitle: "Email & LinkedIn Outbound",
    icon: Rocket,
    color: "#F97316",
    textColor: "#B85610",
    bgColor: "#FFF7ED",
    deliverables: ["Campaign playbook creation", "ICP targeting & TAM mapping", "Lead list development", "Contact research & enrichment", "Messaging & copywriting (outreach)", "Connection & outreach execution", "Response handling & follow-ups", "Content creation for campaigns", "Social posting & distribution", "White space / account analysis", "Database enrichment", "CRM uploads & syncing", "Campaign tracking & optimization"],
    illustration: OutboundIllustration
  },
  {
    id: "customer-support",
    title: "Customer Support",
    subtitle: "Operations, support, and execution",
    icon: HeartHandshake,
    color: "#0891B2",
    textColor: "#066D8A",
    bgColor: "#ECFEFF",
    deliverables: ["Customer Support Tickets", "Email campaign management", "Email automation & sequencing", "Newsletter distribution", "Prospecting support & list management", "CRM logging & data entry", "Meeting notes capture & transcription", "SOP creation & editing", "QA & deliverable reviews", "Webinar support & hosting", "Event coordination & management", "LinkedIn campaign management support", "Research (directories, partners, etc.)", "HubSpot & tool support", "Operational support & execution"],
    illustration: SupportIllustration
  }
];
function ServiceCapabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredDeliverable, setHoveredDeliverable] = useState(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % serviceCapabilitiesCategories.length);
    }, 8e3);
    return () => clearInterval(timer);
  }, [paused]);
  const active = serviceCapabilitiesCategories[activeTab];
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "services-capabilities",
      className: "py-16 sm:py-24 bg-white",
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-spark-50 rounded-full mb-4", children: [
            /* @__PURE__ */ jsx(Layers, { className: "w-4 h-4 text-spark-800" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm-body font-semibold text-spark-800", children: "Full-Service Execution" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
            "One Partner Across",
            /* @__PURE__ */ jsxs("span", { className: "text-spark-600", children: [
              /* @__PURE__ */ jsx("br", {}),
              "Content, Growth & Operations"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-body text-gray-500 max-w-2xl mx-auto", children: "Every category is staffed with dedicated specialists, managed processes, and measurable outcomes." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex sm:flex-row justify-start sm:justify-center gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:pb-0", children: serviceCapabilitiesCategories.map((cat, i) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveTab(i),
            className: `inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shrink-0 ${activeTab === i ? "text-white shadow-md" : "bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-current"}`,
            style: {
              backgroundColor: activeTab === i ? cat.color : void 0,
              borderColor: activeTab === i ? cat.color : void 0
            },
            children: [
              /* @__PURE__ */ jsx(cat.icon, { className: "w-4 h-4 shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline whitespace-nowrap", children: cat.title }),
              /* @__PURE__ */ jsx("span", { className: "sm:hidden whitespace-nowrap", children: cat.title.split(" ")[0] })
            ]
          },
          cat.id
        )) }),
        /* @__PURE__ */ jsx("div", { className: "relative min-h-[420px]", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -15 },
            transition: { duration: 0.4, ease: "easeOut" },
            className: "w-full",
            children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-8 items-start", children: [
              /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl p-6 overflow-hidden", style: { backgroundColor: active.bgColor }, children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm", style: { backgroundColor: "white" }, children: /* @__PURE__ */ jsx(active.icon, { className: "w-5 h-5", style: { color: active.color } }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: active.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-base text-gray-500", children: active.subtitle })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(active.illustration, {}) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxs("span", { className: "px-3 py-1.5 text-sm font-bold rounded-lg", style: { backgroundColor: "white", color: active.color }, children: [
                    active.deliverables.length,
                    " deliverables"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex gap-1.5", children: serviceCapabilitiesCategories.map((_, i) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "h-1.5 rounded-full transition-all duration-300",
                      style: {
                        width: i === activeTab ? 20 : 6,
                        backgroundColor: i === activeTab ? active.color : `${active.color}30`
                      }
                    },
                    i
                  )) })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3", children: active.deliverables.map((d, i) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: 10 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: i * 0.03, duration: 0.3 },
                  className: "flex items-start gap-2.5 p-2.5 rounded-lg transition-all duration-200 cursor-default",
                  style: { backgroundColor: hoveredDeliverable === i ? active.bgColor : "transparent" },
                  onMouseEnter: () => setHoveredDeliverable(i),
                  onMouseLeave: () => setHoveredDeliverable(null),
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200",
                        style: { backgroundColor: hoveredDeliverable === i ? active.color : active.bgColor },
                        children: /* @__PURE__ */ jsx(Check, { className: "w-3 h-3 transition-colors duration-200", style: { color: hoveredDeliverable === i ? "white" : active.color }, strokeWidth: 2.5 })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "text-base text-gray-500 leading-snug transition-colors duration-200",
                        style: { color: hoveredDeliverable === i ? active.textColor : void 0 },
                        children: d
                      }
                    )
                  ]
                },
                `${active.id}-${i}`
              )) }) })
            ] })
          },
          active.id
        ) }) })
      ] })
    }
  );
}
function PageShell({
  children,
  navItems,
  ctaText,
  ctaTarget,
  showCapabilities = true,
  meta
}) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    meta && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("title", { children: meta.title }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: meta.description }),
      meta.keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: meta.keywords }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: meta.ogTitle ?? meta.title }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: meta.ogDescription ?? meta.description }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Get Levrg" })
    ] }),
    /* @__PURE__ */ jsx(Header, { navItems, ctaText, ctaTarget }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 pt-16 sm:pt-20", children }),
    showCapabilities && /* @__PURE__ */ jsx(ServiceCapabilities, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ jsx(AccordionPrimitive.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}
const videoTools = [
  { src: "/logos/applogos/Adobe-Premiere-Pro.webp", alt: "Premiere Pro" },
  { src: "/logos/applogos/Adobe-After-Effects.png", alt: "After Effects" },
  { src: "/logos/applogos/Adobe-Photoshop.png", alt: "Photoshop" },
  { src: "/logos/applogos/Adobe-Illustrator.png", alt: "Illustrator" },
  { src: "/logos/applogos/Adobe-Audition.webp", alt: "Audition" },
  { src: "/logos/applogos/Adobe-Media-Encoder.webp", alt: "Media Encoder" },
  { src: "/logos/applogos/Adobe-Firefly.svg", alt: "Firefly" },
  { src: "/logos/applogos/InDesign.png", alt: "InDesign" },
  { src: "/logos/applogos/CapCut.png", alt: "CapCut" },
  { src: "/logos/applogos/Descript.png", alt: "Descript" },
  { src: "/logos/applogos/Submagic.png", alt: "Submagic" },
  { src: "/logos/applogos/HeyGen.png", alt: "HeyGen" },
  { src: "/logos/applogos/ElevenLabs.png", alt: "ElevenLabs" },
  { src: "/logos/applogos/Leonardo-AI.png", alt: "Leonardo AI" },
  { src: "/logos/applogos/Ideogram.png", alt: "Ideogram" },
  { src: "/logos/applogos/ChatGPT.webp", alt: "ChatGPT" },
  { src: "/logos/applogos/Envato.png", alt: "Envato" },
  { src: "/logos/applogos/Audacity.webp", alt: "Audacity" }
];
const videoToolsContent = {
  title: "The Tools We Use to Edit Your Videos",
  description: "Professional-grade editing software combined with AI-powered tools for speed without sacrificing quality.",
  bullets: [
    "Adobe Creative Cloud full suite",
    "AI-powered editing & caption tools",
    "Professional motion graphics & VFX",
    "Collaborative review & approval workflows"
  ]
};
function ToolsWeUseSection$2() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-spark-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: videoToolsContent.title }),
      /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600 mb-6", children: videoToolsContent.description }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: videoToolsContent.bullets.map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-[#307A0F] mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm-body text-gray-700", children: bullet })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "relative h-[420px] sm:h-[500px] overflow-hidden rounded-2xl bg-white border border-gray-200 p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-spark-50 to-transparent z-10 pointer-events-none rounded-t-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-spark-50 to-transparent z-10 pointer-events-none rounded-b-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "animate-marquee-up will-change-transform", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 sm:gap-4", children: [...videoTools, ...videoTools, ...videoTools, ...videoTools].map((tool, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex items-center justify-center rounded-xl bg-white border border-gray-100 p-3 sm:p-4 lg:p-5 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 group",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: tool.src,
              alt: tool.alt,
              width: 140,
              height: 56,
              className: "h-10 sm:h-14 lg:h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
            }
          )
        },
        i
      )) }) })
    ] }) })
  ] }) }) });
}
const videoSamples = [
  { src: "/images/work-samples/video-work-1.png", alt: "Video Editing Portfolio", label: "Editing Portfolio" },
  { src: "/images/work-samples/video-work-2.png", alt: "Motion Graphics & Reels", label: "Motion Graphics" },
  { src: "/images/work-samples/video-work-3.png", alt: "Editing Workflow", label: "Production Workflow" }
];
const videoSamplesTitle = { before: "See Our Video", accent: "Editing Work" };
function WorkSampleBentoGrid$2() {
  const carouselItems = [...videoSamples, ...videoSamples, ...videoSamples, ...videoSamples];
  return /* @__PURE__ */ jsxs("section", { className: "py-16 sm:py-24 bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
        videoSamplesTitle.before,
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#307A0F]", children: videoSamplesTitle.accent }),
        ""
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-body text-gray-500 max-w-xl mx-auto", children: "Real results from real clients. Here's a glimpse of what we deliver." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "flex w-max animate-marquee-left-slow will-change-transform", children: [...carouselItems, ...carouselItems].map((sample, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex-shrink-0 mx-3 sm:mx-4 w-[320px] sm:w-[400px] lg:w-[480px] group",
          children: /* @__PURE__ */ jsx("div", { className: "relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-300", children: /* @__PURE__ */ jsxs("div", { className: "relative h-[220px] sm:h-[260px] lg:h-[300px]", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: sample.src,
                alt: sample.alt,
                className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-sm-body font-semibold text-gray-900", children: sample.label }) })
          ] }) })
        },
        i
      )) })
    ] })
  ] });
}
const INTRO_DURATION$2 = 6e3;
function VideoAnimation() {
  const timelineClips = [
    { label: "Intro", color: "bg-sky-400", width: "15%", delay: 0.2 },
    { label: "A-Roll", color: "bg-spark-400", width: "35%", delay: 0.5 },
    { label: "B-Roll", color: "bg-rose-400", width: "20%", delay: 0.8 },
    { label: "Outro", color: "bg-amber-400", width: "12%", delay: 1.1 }
  ];
  const deliverables = [
    { icon: Film, label: "Long-form Edit", value: "4/mo", delay: 0.5, accent: "bg-sky-50 border-sky-200", iconColor: "text-sky-500", valueColor: "text-sky-700" },
    { icon: Video, label: "Shorts / Reels", value: "12/mo", delay: 0.8, accent: "bg-spark-50 border-spark-200", iconColor: "text-spark-600", valueColor: "text-[#307A0F]" },
    { icon: Sparkles, label: "Motion Graphics", value: "8/mo", delay: 1.1, accent: "bg-teal-50 border-teal-200", iconColor: "text-teal-500", valueColor: "text-teal-700" },
    { icon: Palette, label: "Thumbnails", value: "6/mo", delay: 1.4, accent: "bg-amber-50 border-amber-200", iconColor: "text-amber-500", valueColor: "text-amber-700" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03] bg-dot-pattern" }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        className: "relative flex items-center gap-2 mb-5",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-lg bg-spark-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(Clapperboard, { className: "h-3.5 w-3.5 text-spark-600" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-900 tracking-wide", children: "Video Production" }),
          /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-red-500 animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] text-red-500 font-medium", children: "REC" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, delay: 0.2 },
        className: "relative rounded-xl bg-gradient-to-br from-spark-50 to-sky-50 border border-spark-200 mb-4 overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "aspect-video flex items-center justify-center relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-spark-100/40 to-sky-100/40" }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { delay: 0.6, type: "spring", stiffness: 300 },
              className: "w-12 h-12 rounded-full bg-white border-2 border-spark-300 flex items-center justify-center shadow-lg z-10",
              children: /* @__PURE__ */ jsx(Play, { className: "h-5 w-5 text-spark-600 ml-0.5" })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.8 },
              className: "absolute bottom-2 right-2 px-2 py-0.5 rounded bg-gray-900/70 text-[10px] font-mono text-white/90",
              children: "00:02:34 / 00:08:12"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] text-gray-500 mb-2 font-medium", children: "Timeline" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-stretch gap-0.5 h-7 rounded-lg overflow-hidden bg-gray-100", children: timelineClips.map((clip, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { scaleX: 0, opacity: 0 },
            animate: { scaleX: 1, opacity: 1 },
            transition: { duration: 0.6, delay: clip.delay, ease: "easeOut" },
            style: { width: clip.width, transformOrigin: "left" },
            className: `${clip.color} flex items-center justify-center relative`,
            children: /* @__PURE__ */ jsx("span", { className: "text-[9px] font-semibold text-white/90 z-10", children: clip.label })
          },
          clip.label
        )) }),
        /* @__PURE__ */ jsx("div", { className: "relative h-0", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { left: "0%" },
            animate: { left: "82%" },
            transition: { duration: 4, delay: 1.5, ease: "linear" },
            className: "absolute -top-[34px] w-0.5 h-[34px] bg-red-500 z-20"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: deliverables.map((d, i) => {
      const Icon = d.icon;
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8, y: 10 },
          animate: { opacity: 1, scale: 1, y: 0 },
          transition: { duration: 0.5, delay: d.delay + 1.5, type: "spring", stiffness: 200 },
          className: `p-2.5 rounded-xl border ${d.accent}`,
          children: [
            /* @__PURE__ */ jsx(Icon, { className: `h-3 w-3 ${d.iconColor} mb-1` }),
            /* @__PURE__ */ jsx("p", { className: `text-sm font-bold ${d.valueColor} leading-none`, children: d.value }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] text-gray-500 mt-0.5", children: d.label })
          ]
        },
        d.label
      );
    }) })
  ] });
}
function HeroFormIntro$2({ children }) {
  const [showIntro, setShowIntro] = useState(true);
  const [introKey, setIntroKey] = useState(0);
  useEffect(() => {
    if (!showIntro) return;
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, INTRO_DURATION$2);
    return () => clearTimeout(timer);
  }, [showIntro, introKey]);
  const replayIntro = useCallback(() => {
    setShowIntro(true);
    setIntroKey((k) => k + 1);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: showIntro ? /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, x: 40, scale: 0.97 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: -30, scale: 0.97 },
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
      className: "relative min-h-[480px] sm:min-h-[520px]",
      children: /* @__PURE__ */ jsx(VideoAnimation, {})
    },
    `intro-${introKey}`
  ) : /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 30, scale: 0.97 },
      animate: { opacity: 1, x: 0, scale: 1 },
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
      className: "relative",
      children: [
        children,
        /* @__PURE__ */ jsx(
          motion.button,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.5, type: "spring", stiffness: 300 },
            onClick: replayIntro,
            className: "absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-white border border-spark-300 flex items-center justify-center hover:bg-spark-600 hover:border-spark-500 transition-all duration-300 group shadow-md",
            title: "Replay intro animation",
            "aria-label": "Replay intro animation",
            children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5 text-spark-600 group-hover:text-white transition-colors" })
          }
        )
      ]
    },
    "form"
  ) }) });
}
function HeroSection$2() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank-you?service=video-editing");
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "lead-form",
      className: "relative overflow-hidden bg-white min-h-[500px] sm:min-h-[680px]",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/hero/video-hero.webp",
            alt: "",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#061512]/95 via-[#061512]/70 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8",
                children: [
                  /* @__PURE__ */ jsx(Zap, { className: "h-3.5 w-3.5 text-spark-300" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm-body font-medium text-white", children: "Video Editing Services" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.1 },
                className: "text-h1 sm:text-display lg:text-display-sm text-white mb-6",
                children: [
                  "Managed Video Editing Services for Teams That",
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsxs("span", { className: "text-[#51B027]", children: [
                    "Need More Content ",
                    /* @__PURE__ */ jsx("br", {}),
                    " Out the Door"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "text-body sm:text-sub text-gray-300 max-w-2xl mb-8",
                children: "Get a dedicated video editing team for all your social video needs. We handle the editors, project management, quality checks, and turnaround, so your team can publish more."
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.3 },
                className: "flex flex-wrap items-center gap-3 sm:gap-4 mb-10",
                children: [
                  { icon: Zap, text: "Launch in 7 Days" },
                  { icon: CalendarDays, text: "48-Hour Standard Turnaround" },
                  { icon: TrendingUp, text: "80% Cost Savings" }
                ].map((m, i) => {
                  const Icon = m.icon;
                  return /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: "inline-flex items-center gap-2 text-sm-body font-medium text-gray-200 bg-white/10 border border-white/20 px-3.5 py-2 rounded-lg",
                      children: [
                        /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-spark-400" }),
                        m.text
                      ]
                    },
                    i
                  );
                })
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 },
                className: "relative p-5 sm:p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm max-w-2xl",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mb-3", children: [
                    [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 text-spark-500 fill-spark-500" }, i)),
                    /* @__PURE__ */ jsx("span", { className: "ml-2 text-caption text-spark-300", children: "Power Testimonial" })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm-body sm:text-body text-gray-200 italic mb-3", children: [
                    "“We went from publishing one product video a quarter to four per month. Clients have no idea the editing isn't in-house. This single service line generates",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "text-spark-400 font-semibold not-italic", children: "$12K monthly recurring" }),
                    ".”"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-spark-100 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-spark-700", children: "MK" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm-body font-semibold text-white", children: "Miles Kaiburn" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "CEO | Old Town Media" })
                    ] })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(HeroFormIntro$2, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl p-6 sm:p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900 mb-1.5", children: "Get Your Video Editing Team" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: "Custom pricing + team structure in 24 hours. Zero obligation." })
            ] }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "hero-firstName", className: "text-sm-body text-gray-700 mb-1.5", children: "First Name" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "hero-firstName",
                      placeholder: "John",
                      className: "h-10"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "hero-lastName", className: "text-sm-body text-gray-700 mb-1.5", children: "Last Name" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "hero-lastName",
                      placeholder: "Smith",
                      className: "h-10"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "hero-workEmail", className: "text-sm-body text-gray-700 mb-1.5", children: "Work Email" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "hero-workEmail",
                    type: "email",
                    placeholder: "john@company.com",
                    className: "h-10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "hero-phoneNumber", className: "text-sm-body text-gray-700 mb-1.5", children: "Phone Number" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "hero-phoneNumber",
                    type: "tel",
                    placeholder: "+1 (555) 000-0000",
                    className: "h-10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "hero-company", className: "text-sm-body text-gray-700 mb-1.5", children: "Company" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "hero-company",
                    placeholder: "Acme Inc.",
                    className: "h-10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "ghost",
                  type: "submit",
                  className: "w-full bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-11 rounded-lg text-base transition-all",
                  children: [
                    "Get Your Video Editing Team",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 pt-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: [
                  /* @__PURE__ */ jsx(Lock, { className: "h-3 w-3" }),
                  "No contracts"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3" }),
                  "No spam"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3" }),
                  "Cancel anytime"
                ] })
              ] })
            ] })
          ] }) })
        ] }) })
      ]
    }
  );
}
function ProblemSection$2() {
  const problems2 = [
    {
      icon: Video,
      title: "The Capacity Trap",
      headline: "Your Clients Want More Video",
      body: "Video demand is outpacing your team’s capacity by 3x. Every project you turn down is revenue walking out the door.",
      painPoint: "Every hour spent editing is an hour NOT spent on strategy, client relationships, or growth."
    },
    {
      icon: UserX,
      title: "The Hiring Nightmare",
      headline: "Hiring a Full-Time Editor Costs More Than You Think",
      body: "A full-time video editor in North America runs $6,500+/month with benefits, taxes, and overhead. Then there’s the 3-month ramp-up before they’re productive.",
      painPoint: "That’s $20K+ spent before your first real deliverable."
    },
    {
      icon: AlertTriangle,
      title: "The Freelancer Problem",
      headline: "Freelancers Are Unreliable at Scale",
      body: "Ghosting before deadlines. Inconsistent quality. Different styles on every project. You spend 10+ hours per week managing people who should be managing themselves.",
      painPoint: "You didn’t start an agency to become a freelance project manager."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "problems", className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-16", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 max-w-3xl mx-auto", children: [
      "You're Facing the Same Bottleneck That",
      " ",
      /* @__PURE__ */ jsxs("span", { className: "text-[#51B027]", children: [
        " ",
        /* @__PURE__ */ jsx("br", {}),
        "35+ Agencies Already Solved"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-6", staggerDelay: 0.1, children: problems2.map((problem, i) => {
      const Icon = problem.icon;
      return /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("div", { className: "relative p-6 sm:p-8 rounded-xl bg-white border border-gray-100 border-l-4 border-l-red-400 hover:shadow-lg transition-shadow duration-300 group", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-5", children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-500 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "text-caption text-gray-400 mb-1", children: problem.title }),
          /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900 mb-3", children: problem.headline }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 text-sm-body sm:text-body", children: problem.body }),
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-start gap-2 px-4 py-3 rounded-lg bg-red-50/50 border border-red-100 text-red-700 text-sm-body", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: problem.painPoint })
          ] })
        ] })
      ] }) }) }, i);
    }) })
  ] }) });
}
function SolutionSection$2() {
  const differentiators = [
    {
      icon: Shield,
      title: "Agency-Grade Output Without Agency-Level Overhead",
      desc: "Dedicated team with proven workflows refined across 35+ agency partnerships. Quality guarantees with built-in revision rounds."
    },
    {
      icon: Zap,
      title: "Live in 7 Days, Not 7 Months",
      desc: "24-hour talent matching based on your niche. Onboarding call within 48 hours. First deliverables by end of week one."
    },
    {
      icon: DollarSign,
      title: "Lower Overhead Than Hiring In-House",
      desc: "Get reliable editing capacity without payroll, benefits, recruiting delays, or full-time headcount commitments."
    },
    {
      icon: UserCheck,
      title: "Managed Team, Zero Management",
      desc: "Your dedicated project manager owns briefs, deadlines, quality checks, and delivery coordination. You stay focused on content strategy and client relationships."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "solution", className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-6", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900", children: [
      "Stop Choosing Between Speed, Cost, and Quality",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Get All Three" })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-16", delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600 max-w-2xl mx-auto", children: "We recruit the top 1% of offshore video editors with agency experience, strong portfolios, and clear communication skills. Then we manage the workflow, deadlines, and quality checks, so you get reliable output without managing another team." }) }),
    /* @__PURE__ */ jsx(StaggerContainer, { className: "grid grid-cols-1 md:grid-cols-2 gap-6", staggerDelay: 0.08, children: differentiators.map((item, i) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300 group h-full border-l-4 border-l-spark-400", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-spark-50 text-spark-600 mb-5 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900 mb-3", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-600", children: item.desc })
      ] }) }, i);
    }) })
  ] }) });
}
function SEOSection$2() {
  const capabilities = [
    "Short-form video editing for Reels, Shorts, and TikTok",
    "Long-form YouTube and podcast editing",
    "B2B product demo videos",
    "Social media video production",
    "Motion graphics and branded video assets",
    "White label video editing for agencies",
    "Ongoing video editing support for marketing teams"
  ];
  const bentoImages = [
    { src: "/images/work-samples/video-work-1.png", alt: "Video editing portfolio", span: "row-span-2" },
    { src: "/images/work-samples/video-work-2.png", alt: "Motion graphics and reels", span: "" },
    { src: "/images/hero/video-hero.webp", alt: "Video production workflow", span: "" },
    { src: "/images/work-samples/video-work-3.png", alt: "Social media video production", span: "col-span-2" }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "py-16 sm:py-24 bg-gray-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-6", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-5", children: [
        "Video Editing Services Built for ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "High-Volume Content Teams" })
      ] }) }),
      /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-16", delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600 max-w-2xl mx-auto", children: "Need more videos without adding another full-time hire? Get Levrg gives you a managed video editing team that can support recurring content production across social, YouTube, paid media, sales enablement, and client campaigns." }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(AnimatedSection, { className: "mb-8", delay: 0.2, children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600", children: "Get Levrg gives you a professional video team that can support:" }) }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-3", staggerDelay: 0.06, children: capabilities.map((cap, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 px-4 py-3.5 rounded-xl bg-spark-50 border border-spark-100 hover:border-spark-300 hover:shadow-sm transition-all duration-200", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-spark-500 mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm-body text-gray-700", children: cap })
        ] }) }, i)) }),
        /* @__PURE__ */ jsx(AnimatedSection, { className: "mt-8", delay: 0.2, children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600", children: "You bring the content goals. We bring the editors, workflow, project management, and production rhythm to keep publishing consistent." }) })
      ] }),
      /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.15, direction: "left", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 grid-rows-3 gap-3 sm:gap-4 h-[480px] sm:h-[560px]", children: bentoImages.map((img, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 group ${img.span}`,
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: img.src,
                alt: img.alt,
                className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" })
          ]
        },
        i
      )) }) })
    ] }) })
  ] });
}
function ROISection() {
  const stats = [
    {
      value: "5x",
      label: "Faster at 1/20th the Cost",
      author: "Brendan Taylor, CEO | Maverick VFX"
    },
    {
      value: "10%",
      label: "Total Employee Costs Cut",
      author: "Steven Riskey, CEO | Strop Insights"
    },
    {
      value: "$500/hr → $20/hr",
      label: "Your Strategies Executed at Scale",
      author: "Miles Kaiburn, CEO | Old Town Media"
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "results", className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-16", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900", children: [
      "What ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "35+ Agencies" }),
      " Have Already Proven"
    ] }) }),
    /* @__PURE__ */ jsx(StaggerContainer, { className: "grid grid-cols-1 md:grid-cols-3 gap-6", staggerDelay: 0.1, children: stats.map((stat, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-xl border border-gray-100 bg-white text-center group hover:shadow-lg transition-shadow duration-300", children: [
      /* @__PURE__ */ jsx("div", { className: "text-h1 sm:text-h2 lg:text-display-sm text-[#51B027] mb-4", children: stat.value }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-900 text-sub font-semibold mb-3", children: stat.label }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-500 text-sm-body", children: [
        "— ",
        stat.author
      ] })
    ] }) }, i)) })
  ] }) });
}
function ComparisonSection$1() {
  const rows = [
    { label: "Monthly Cost", na: "$6,500+", us: "Up to 80% less" },
    { label: "Setup Timeline", na: "3 months", us: "14 days" },
    { label: "Ramp-Up", na: "90 days", us: "Week 1" },
    { label: "Benefits", na: "Included (expensive)", us: "Not included (saves you)" },
    { label: "Management", na: "Full supervision required", us: "Dedicated PM owns it" },
    { label: "Scalability", na: "Fixed headcount", us: "Add roles on demand" },
    { label: "Risk", na: "Single point of failure", us: "Managed team backup" },
    { label: "Contracts", na: "2-year employment", us: "No lock-in" }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-12", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900", children: [
      "Hire in North America vs",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Partner With Us" })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-xl border border-gray-200 shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "text-left px-6 py-4 bg-gray-50 text-gray-600 font-semibold w-1/3 border-b border-gray-200", children: "Factor" }),
        /* @__PURE__ */ jsx("th", { className: "text-center px-6 py-4 bg-gray-50 text-gray-600 font-semibold w-1/3 border-b border-gray-200", children: "Hire in North America" }),
        /* @__PURE__ */ jsx("th", { className: "text-center px-6 py-4 bg-spark-50 text-sm-body text-[#51B027] font-semibold w-1/3 border-b border-spark-200", children: "Partner With Us" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxs(
        "tr",
        {
          className: "border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors",
          children: [
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 font-medium text-gray-900", children: row.label }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-center text-gray-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: row.na })
            ] }) }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-center text-sm-body text-[#51B027] font-medium bg-spark-50/50", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-spark-500 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: row.us })
            ] }) })
          ]
        },
        i
      )) })
    ] }) }) })
  ] }) });
}
function HowItWorksSection$2() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Submit Your Brief",
      timeline: "Day 1",
      desc: "10 minutes is all it takes. Share your requirements, brand guidelines, and content goals."
    },
    {
      icon: Users,
      title: "Meet Your Team",
      timeline: "Day 2-3",
      desc: "Intro call with your dedicated PM. Workflow setup, tool access, and communication channels configured."
    },
    {
      icon: CheckCircle,
      title: "First Deliverables",
      timeline: "Day 7",
      desc: "Brand-compliant edits delivered. Revision rounds included. Production-grade quality from day one."
    },
    {
      icon: TrendingUp,
      title: "Scale On Your Terms",
      timeline: "Week 2+",
      desc: "Monthly flexibility. Scale up for big campaigns or down during slow periods. No penalties."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "process", className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-16", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900", children: [
      "Live in One Week",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Not One Quarter" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-start justify-between gap-0 items-stretch", children: steps.map((step, i) => {
      const Icon = step.icon;
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxs("div", { className: "p-5 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 group h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center text-sm font-bold shrink-0", children: i + 1 }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-spark-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-spark-600" }) }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-spark-100 text-spark-700 text-[11px] font-semibold", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-2.5 w-2.5" }),
              step.timeline
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-body font-bold text-gray-900 mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sl text-gray-600 leading-relaxed", children: step.desc })
        ] }) }),
        i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "flex items-center px-1 pt-8", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-spark-300 shrink-0" }) })
      ] }, i);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:hidden space-y-4", children: steps.map((step, i) => {
      const Icon = step.icon;
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(AnimatedSection, { direction: "up", delay: i * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "p-5 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 group", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center text-sm font-bold shrink-0", children: i + 1 }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-spark-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-spark-600" }) }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-spark-100 text-spark-700 text-[11px] font-semibold", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-2.5 w-2.5" }),
              step.timeline
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-body font-bold text-gray-900 mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sl text-gray-600 leading-relaxed", children: step.desc })
        ] }) }),
        i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "flex justify-center py-1", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-spark-300 rotate-90" }) })
      ] }, i);
    }) })
  ] }) });
}
function TestimonialsSection$3() {
  const testimonials = [
    {
      quote: "We added video as a service line without hiring a single editor. Our margins went up 40% on video projects in the first quarter.",
      name: "Miles Kaiburn",
      title: "CEO",
      company: "Old Town Media"
    },
    {
      quote: "The quality is indistinguishable from our in-house team. Our clients never know the difference, and our margins have never been better.",
      name: "Brendan Taylor",
      title: "CEO",
      company: "Maverick VFX"
    },
    {
      quote: "We went from turning down video projects to fulfilling them all. This team handles everything  we just approve and deliver.",
      name: "Steven Riskey",
      title: "CEO",
      company: "Strop Insights"
    },
    {
      quote: "I was skeptical about offshore talent. After week one, I realized these editors are more skilled than most people I interviewed locally at 3x the price.",
      name: "Rachel Chen",
      title: "Creative Director",
      company: "Prism Agency"
    },
    {
      quote: "Onboarding took 3 days, not 3 months. Our first deliverables were client-ready by the end of week one. I wish we had done this sooner.",
      name: "David Park",
      title: "Founder",
      company: "Northstar Digital"
    }
  ];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5e3);
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
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 })
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900", children: [
      "Agencies Don't",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Look Back" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goPrev,
          className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors",
          "aria-label": "Previous testimonial",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5 text-gray-600" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goNext,
          className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors",
          "aria-label": "Next testimonial",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-gray-600" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", custom: direction, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          custom: direction,
          variants: slideVariants,
          initial: "enter",
          animate: "center",
          exit: "exit",
          transition: { duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] },
          className: "p-8 sm:p-10 rounded-2xl border border-gray-100 bg-white shadow-sm",
          children: [
            /* @__PURE__ */ jsx(Quote, { className: "h-10 w-10 text-spark-300 mb-5" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sub sm:text-h3 text-gray-700 italic mb-6", children: [
              "“",
              t.quote,
              "”"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-0.5 mb-5", children: [...Array(5)].map((_, j) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-spark-500 fill-spark-500" }, j)) }),
            /* @__PURE__ */ jsx("div", { className: "pt-5 border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-spark-100 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-sl font-bold text-spark-700", children: t.name.split(" ").map((n) => n[0]).join("") }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm-body font-semibold text-gray-900", children: t.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-sl text-gray-500", children: [
                  t.title,
                  " · ",
                  t.company
                ] })
              ] })
            ] }) })
          ]
        },
        current
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 mt-6", children: testimonials.map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setDirection(i > current ? 1 : -1);
            setCurrent(i);
          },
          className: `h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-spark-500" : "w-2 bg-gray-300 hover:bg-gray-400"}`,
          "aria-label": `Go to testimonial ${i + 1}`
        },
        i
      )) })
    ] })
  ] }) });
}
function WhyChooseUsSection$2() {
  const items = [
    {
      icon: Trophy,
      title: "Proven Track Record",
      desc: "35+ agencies trust us with their video output. We’ve delivered thousands of edits with a 98% satisfaction rate."
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      desc: "Your dedicated PM is a Slack message away. No ticket queues, no offshore call centers  real humans, real time."
    },
    {
      icon: UserCheck,
      title: "Vetted Talent Only",
      desc: "Every editor passes a rigorous portfolio review, skills test, and English fluency check. We hire less than 1% of applicants."
    },
    {
      icon: Rocket,
      title: "Built for Scale",
      desc: "Start with one editor. Scale to a full team. Same workflow, same PM, same quality  just more capacity when you need it."
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-16", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900", children: [
      "Not Another Freelancer Marketplace",
      " ",
      /* @__PURE__ */ jsxs("span", { className: "text-[#51B027]", children: [
        /* @__PURE__ */ jsx("br", {}),
        "This Is Your Dedicated Team"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(StaggerContainer, { className: "grid grid-cols-1 md:grid-cols-2 gap-6", staggerDelay: 0.08, children: items.map((item, i) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300 group h-full border-l-4 border-l-spark-400 bg-spark-50/30", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-spark-50 text-spark-600 mb-5 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900 mb-3", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-600", children: item.desc })
      ] }) }, i);
    }) })
  ] }) });
}
function FAQSection$1() {
  const faqs = [
    {
      q: "How fast can my video editing team be up and running?",
      a: "Most teams can start within 7 days. We use the first few days to understand your brand, content goals, editing style, review process, and publishing needs. From there, your project manager sets up the workflow and starts moving the first deliverables through production."
    },
    {
      q: "What types of videos can your team edit?",
      a: "We support short-form social videos, YouTube videos, podcast clips, product demos, B2B explainers, promotional videos, motion graphics, thumbnails, and recurring social video content. The service is built for teams that need consistent video output, not one-off editing help."
    },
    {
      q: "Is this the same as hiring a freelance video editor?",
      a: "No. A freelancer usually gives you one person to manage. Get Levrg gives you a managed video editing service with vetted editors, project management, quality checks, and backup capacity. That means fewer missed deadlines and less day-to-day coordination for your team."
    },
    {
      q: "Can agencies use this as white label video editing?",
      a: "Yes. Agencies can use Get Levrg as a white label video editing partner for client campaigns, social content, YouTube production, podcast clips, and recurring video deliverables."
    },
    {
      q: "How do you keep videos on-brand?",
      a: "We start with your brand guidelines, examples, editing preferences, and feedback loops. Your dedicated project manager keeps those standards documented, so each new edit becomes easier to brief, review, and approve."
    },
    {
      q: "Can I scale video output up or down?",
      a: "Yes. The team can scale based on campaign volume, client demand, and monthly production needs. That gives you more flexibility than fixed in-house hiring."
    }
  ];
  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3, 6);
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-12", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900", children: [
      "Common",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Questions" })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-gray-200 bg-white overflow-hidden", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: leftFaqs.map((faq, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `faq-left-${i}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "px-6 text-left text-gray-900 font-medium hover:no-underline hover:text-spark-600 transition-colors", children: faq.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "px-6 text-gray-600 leading-relaxed", children: faq.a })
      ] }, i)) }) }),
      /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-gray-200 bg-white overflow-hidden", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: rightFaqs.map((faq, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `faq-right-${i}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "px-6 text-left text-gray-900 font-medium hover:no-underline hover:text-spark-600 transition-colors", children: faq.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "px-6 text-gray-600 leading-relaxed", children: faq.a })
      ] }, i)) }) })
    ] }) })
  ] }) });
}
function FinalCTASection$2() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-spark-800", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(AnimatedSection, { children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-white mb-6", children: [
      "Ready to Stop",
      " ",
      /* @__PURE__ */ jsx("span", { children: "Managing Freelancers?" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-body text-spark-200 max-w-2xl mx-auto mb-10", children: "Your dedicated video editing team is one form away. Get custom pricing and a proposed team structure in 24 hours." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          asChild: true,
          className: "bg-white text-spark-800 hover:bg-spark-50 hover:text-spark-800 px-8 py-6 text-base rounded-xl shadow-lg transition-all hover:shadow-xl",
          children: /* @__PURE__ */ jsxs("a", { href: "#lead-form", children: [
            "Get Your Video Editing Team",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          asChild: true,
          className: "bg-void hover:bg-surface-dark text-white hover:text-white px-8 py-6 text-base rounded-xl border-0 transition-all",
          children: /* @__PURE__ */ jsxs("a", { href: "#lead-form", children: [
            /* @__PURE__ */ jsx(Phone, { className: "mr-2 h-4 w-4" }),
            "Schedule a Call"
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm-body text-spark-300 mt-6", children: "No contracts. No spam. Cancel anytime." })
  ] }) }) });
}
function VideoPage() {
  return /* @__PURE__ */ jsxs(
    PageShell,
    {
      navItems: [
        { label: "Problems", href: "#problems" },
        { label: "Solution", href: "#solution" },
        { label: "Results", href: "#results" },
        { label: "Process", href: "#process" }
      ],
      ctaText: "See How It Works",
      ctaTarget: "#lead-form",
      meta: {
        title: "White-Label Video Editing Services | Get Levrg",
        description: "Dedicated white-label video editing teams for agencies and content studios. 48-hour turnaround, client-ready quality, 80% cost savings vs hiring.",
        keywords: "white label video editing, video editing outsourcing, agency video editing, white label video production, dedicated video editors",
        ogTitle: "White-Label Video Editing | Get Levrg",
        ogDescription: "Dedicated video editors for agencies. 48-hour turnaround, client-ready quality, 80% cheaper than hiring."
      },
      children: [
        /* @__PURE__ */ jsx(HeroSection$2, {}),
        /* @__PURE__ */ jsx(TrustedByMarquee, {}),
        /* @__PURE__ */ jsx(ProblemSection$2, {}),
        /* @__PURE__ */ jsx(SolutionSection$2, {}),
        /* @__PURE__ */ jsx(SEOSection$2, {}),
        /* @__PURE__ */ jsx(ToolsWeUseSection$2, {}),
        /* @__PURE__ */ jsx(ROISection, {}),
        /* @__PURE__ */ jsx(WorkSampleBentoGrid$2, {}),
        /* @__PURE__ */ jsx(ComparisonSection$1, {}),
        /* @__PURE__ */ jsx(HowItWorksSection$2, {}),
        /* @__PURE__ */ jsx(TestimonialsSection$3, {}),
        /* @__PURE__ */ jsx(WhyChooseUsSection$2, {}),
        /* @__PURE__ */ jsx(FAQSection$1, {}),
        /* @__PURE__ */ jsx(FinalCTASection$2, {})
      ]
    }
  );
}
function ToolsWeUseSection$1() {
  const tools = [
    { src: "/logos/applogos/Canva.png", alt: "Canva" },
    { src: "/logos/applogos/Figma.png", alt: "Figma" },
    { src: "/logos/applogos/ChatGPT.webp", alt: "ChatGPT" },
    { src: "/logos/applogos/Gemini-Pro.png", alt: "Gemini Pro" },
    { src: "/logos/applogos/Taplio.png", alt: "Taplio" },
    { src: "/logos/applogos/High-Level.png", alt: "GoHighLevel" },
    { src: "/logos/applogos/Hubspot.png", alt: "HubSpot" },
    { src: "/logos/applogos/Ahrefs.png", alt: "Ahrefs" },
    { src: "/logos/applogos/Semrush.png", alt: "Semrush" },
    { src: "/logos/applogos/Slack.webp", alt: "Slack" },
    { src: "/logos/applogos/Calendly.png", alt: "Calendly" },
    { src: "/logos/applogos/Zapier.png", alt: "Zapier" },
    { src: "/logos/applogos/Klaviyo.png", alt: "Klaviyo" },
    { src: "/logos/applogos/Livestorm.png", alt: "Livestorm" },
    { src: "/logos/applogos/Google-Chat.png", alt: "Google Chat" },
    { src: "/logos/applogos/Google-Meet.webp", alt: "Google Meet" },
    { src: "/logos/applogos/Email.webp", alt: "Email" },
    { src: "/logos/applogos/Freepik.webp", alt: "Freepik" }
  ];
  const content = {
    title: "The Tools Behind the Workflow",
    description: "From content planning and design to scheduling, analytics, and reporting, we use proven tools to keep your social media workflow organized, visible, and easy to manage.",
    bullets: [
      "AI-powered content creation suite",
      "Multi-platform scheduling & publishing",
      "Advanced engagement analytics",
      "Compliance-aware content review tools"
    ]
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-spark-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: content.title }),
      /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600 mb-6", children: content.description }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: content.bullets.map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-[#307A0F] mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm-body text-gray-700", children: bullet })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "relative h-[420px] sm:h-[500px] overflow-hidden rounded-2xl bg-white border border-gray-200 p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-spark-50 to-transparent z-10 pointer-events-none rounded-t-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-spark-50 to-transparent z-10 pointer-events-none rounded-b-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "animate-marquee-up will-change-transform", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 sm:gap-4", children: [...tools, ...tools, ...tools, ...tools].map((tool, i) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center rounded-xl bg-white border border-gray-100 p-3 sm:p-4 lg:p-5 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 group", children: /* @__PURE__ */ jsx("img", { src: tool.src, alt: tool.alt, width: 140, height: 56, className: "h-10 sm:h-14 lg:h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300" }) }, i)) }) })
    ] }) })
  ] }) }) });
}
function WorkSampleBentoGrid$1() {
  const samples = [
    { src: "/images/work-samples/social-work-1.png", alt: "Content Calendar Design", label: "Content Calendar" },
    { src: "/images/work-samples/social-work-2.png", alt: "Social Media Post Designs", label: "Post Designs" },
    { src: "/images/work-samples/social-work-3.png", alt: "Engagement Analytics", label: "Engagement Analytics" }
  ];
  const title = { before: "See Our Social Media", accent: "Content Work" };
  const carouselItems = [...samples, ...samples, ...samples, ...samples];
  return /* @__PURE__ */ jsxs("section", { className: "py-16 sm:py-24 bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
        title.before,
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#307A0F]", children: title.accent }),
        ""
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-body text-gray-500 max-w-xl mx-auto", children: "Real results from real clients. Here's a glimpse of what we deliver." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "flex w-max animate-marquee-left-slow will-change-transform", children: [...carouselItems, ...carouselItems].map((sample, i) => /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mx-3 sm:mx-4 w-[320px] sm:w-[400px] lg:w-[480px] group", children: /* @__PURE__ */ jsx("div", { className: "relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-300", children: /* @__PURE__ */ jsxs("div", { className: "relative h-[220px] sm:h-[260px] lg:h-[300px]", children: [
        /* @__PURE__ */ jsx("img", { src: sample.src, alt: sample.alt, className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-sm-body font-semibold text-gray-900", children: sample.label }) })
      ] }) }) }, i)) })
    ] })
  ] });
}
const INTRO_DURATION$1 = 6e3;
function SocialAnimation() {
  const posts = [
    { platform: "LinkedIn", icon: MessageCircle, color: "text-blue-600", bg: "bg-blue-50 border-blue-200", iconBg: "bg-blue-100", content: "5 Tax Strategies Your CPA Isn't Telling You About", likes: 142, shares: 38, views: "2.4K", checkColor: "text-blue-500" },
    { platform: "Instagram", icon: Heart, color: "text-pink-600", bg: "bg-pink-50 border-pink-200", iconBg: "bg-pink-100", content: "Behind the Scenes: How We Helped a Law Firm 3x Their Inbound", likes: 89, shares: 24, views: "1.8K", checkColor: "text-pink-500" },
    { platform: "Facebook", icon: Share2, color: "text-teal-600", bg: "bg-teal-50 border-teal-200", iconBg: "bg-teal-100", content: "The Real Cost of Being Invisible Online  A CPA Firm Case Study", likes: 203, shares: 56, views: "4.1K", checkColor: "text-teal-500" }
  ];
  const platformStats = [
    { icon: Eye, label: "Monthly Impressions", value: "45K+", delay: 0.4, accent: "bg-teal-50 border-teal-200", iconColor: "text-teal-500", valueColor: "text-teal-700" },
    { icon: TrendingUp, label: "Engagement Rate", value: "4.2%", delay: 0.7, accent: "bg-spark-50 border-spark-200", iconColor: "text-spark-600", valueColor: "text-[#307A0F]" },
    { icon: Users, label: "Inbound Inquiries", value: "12/mo", delay: 1, accent: "bg-sky-50 border-sky-200", iconColor: "text-sky-500", valueColor: "text-sky-700" },
    { icon: LayoutGrid, label: "Posts Published", value: "18/mo", delay: 1.3, accent: "bg-amber-50 border-amber-200", iconColor: "text-amber-500", valueColor: "text-amber-700" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03] bg-dot-pattern" }),
    /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 }, className: "relative flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-lg bg-spark-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(LayoutGrid, { className: "h-3.5 w-3.5 text-spark-600" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-900 tracking-wide", children: "Content Calendar" }),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-spark-500 animate-pulse" }),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-spark-600 font-medium", children: "Publishing" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-4", children: posts.map((post, i) => {
      const Icon = post.icon;
      return /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 60, scale: 0.95 }, animate: { opacity: 1, x: 0, scale: 1 }, transition: { duration: 0.6, delay: 0.3 + i * 0.5, type: "spring", stiffness: 180, damping: 20 }, className: `p-3 rounded-xl border ${post.bg}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
          /* @__PURE__ */ jsx("div", { className: `w-5 h-5 rounded-md ${post.iconBg} flex items-center justify-center`, children: /* @__PURE__ */ jsx(Icon, { className: `h-3 w-3 ${post.color}` }) }),
          /* @__PURE__ */ jsx("span", { className: `text-[11px] font-semibold ${post.color}`, children: post.platform }),
          /* @__PURE__ */ jsx(CheckCircle, { className: `h-3.5 w-3.5 ${post.checkColor} ml-auto` })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed mb-2", children: post.content }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[10px] text-gray-400", children: [
            /* @__PURE__ */ jsx(Heart, { className: "h-2.5 w-2.5" }),
            " ",
            post.likes
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[10px] text-gray-400", children: [
            /* @__PURE__ */ jsx(Share2, { className: "h-2.5 w-2.5" }),
            " ",
            post.shares
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[10px] text-gray-400", children: [
            /* @__PURE__ */ jsx(Eye, { className: "h-2.5 w-2.5" }),
            " ",
            post.views
          ] })
        ] })
      ] }, i);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: platformStats.map((s) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, scale: 0.8, y: 10 }, animate: { opacity: 1, scale: 1, y: 0 }, transition: { duration: 0.5, delay: s.delay + 1.5, type: "spring", stiffness: 200 }, className: `p-2.5 rounded-xl border ${s.accent}`, children: [
        /* @__PURE__ */ jsx(Icon, { className: `h-3 w-3 ${s.iconColor} mb-1` }),
        /* @__PURE__ */ jsx("p", { className: `text-sm font-bold ${s.valueColor} leading-none`, children: s.value }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] text-gray-500 mt-0.5", children: s.label })
      ] }, s.label);
    }) })
  ] });
}
function HeroFormIntro$1({ children }) {
  const [showIntro, setShowIntro] = useState(true);
  const [introKey, setIntroKey] = useState(0);
  useEffect(() => {
    if (!showIntro) return;
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, INTRO_DURATION$1);
    return () => clearTimeout(timer);
  }, [showIntro, introKey]);
  const replayIntro = useCallback(() => {
    setShowIntro(true);
    setIntroKey((k) => k + 1);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: showIntro ? /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, x: 40, scale: 0.97 }, animate: { opacity: 1, x: 0, scale: 1 }, exit: { opacity: 0, x: -30, scale: 0.97 }, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }, className: "relative min-h-[480px] sm:min-h-[520px]", children: /* @__PURE__ */ jsx(SocialAnimation, {}) }, `intro-${introKey}`) : /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 30, scale: 0.97 }, animate: { opacity: 1, x: 0, scale: 1 }, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }, className: "relative", children: [
    children,
    /* @__PURE__ */ jsx(motion.button, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.5, type: "spring", stiffness: 300 }, onClick: replayIntro, className: "absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-white border border-spark-300 flex items-center justify-center hover:bg-spark-600 hover:border-spark-500 transition-all duration-300 group shadow-md", title: "Replay intro animation", "aria-label": "Replay intro animation", children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5 text-spark-600 group-hover:text-white transition-colors" }) })
  ] }, "form") }) });
}
function HeroSection$1() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank-you?service=social-media");
  };
  return /* @__PURE__ */ jsxs("section", { id: "lead-form", className: "relative overflow-hidden min-h-[500px] sm:min-h-[600px]", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx("img", { src: "/images/hero/social-hero.webp", alt: "", className: "absolute inset-0 w-full h-full object-cover" }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#061512]/95 via-[#061512]/70 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8", children: [
          /* @__PURE__ */ jsx(Briefcase, { className: "h-3.5 w-3.5 text-spark-300" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm-body font-medium text-white", children: "Social Media Management Services" })
        ] }),
        /* @__PURE__ */ jsxs(motion.h1, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 }, className: "text-h1 sm:text-display lg:text-display-sm text-white mb-6", children: [
          "Your Firm Should Be Visible",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-spark-400", children: "Your Partners Shouldn't Have to Post" })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "text-body sm:text-sub text-gray-300 max-w-2xl mb-8", children: "Get a dedicated social media team to optimize your LinkedIn, Facebook, and Instagram. We handle the strategy, copy, design, scheduling, reporting, and workflow, so your team can stay visible without adding another internal role." }),
        /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 }, className: "flex flex-wrap items-center gap-3 sm:gap-4 mb-10", children: [
          { icon: Smartphone, text: "12-20 Posts Monthly" },
          { icon: Clock, text: "Live in 14 Days" },
          { icon: Briefcase, text: "Strategy & Creative Managed" }
        ].map((m, i) => {
          const Icon = m.icon;
          return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm-body font-medium text-gray-200 bg-white/10 border border-white/20 px-3.5 py-2 rounded-lg", children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-spark-400" }),
            m.text
          ] }, i);
        }) }),
        /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, className: "relative p-5 sm:p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm max-w-2xl", children: [
          /* @__PURE__ */ jsx(Quote, { className: "absolute top-4 left-5 h-5 w-5 text-spark-300" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm-body sm:text-body text-gray-200 italic mb-3 pl-8", children: "“Our LinkedIn presence went from invisible to the most visible firm in our market. Not one partner had to write a post. We're getting inquiries from businesses who've been following our content for months.”" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pl-8", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-spark-100 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-spark-700", children: "MP" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm-body font-semibold text-white", children: "Managing Partner" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Regional CPA Firm (8 Employees)" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(HeroFormIntro$1, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white shadow-lg p-6 sm:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900 mb-1.5", children: "Get Your Social Media Team" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: "Custom content calendar + pricing in 24 hours. Zero obligation." })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "hero-firstName", className: "text-sm-body text-gray-700 mb-1.5", children: "First Name" }),
              /* @__PURE__ */ jsx(Input, { id: "hero-firstName", placeholder: "John", className: "h-10" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "hero-lastName", className: "text-sm-body text-gray-700 mb-1.5", children: "Last Name" }),
              /* @__PURE__ */ jsx(Input, { id: "hero-lastName", placeholder: "Smith", className: "h-10" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "hero-workEmail", className: "text-sm-body text-gray-700 mb-1.5", children: "Work Email" }),
            /* @__PURE__ */ jsx(Input, { id: "hero-workEmail", type: "email", placeholder: "john@company.com", className: "h-10" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "hero-phoneNumber", className: "text-sm-body text-gray-700 mb-1.5", children: "Phone Number" }),
            /* @__PURE__ */ jsx(Input, { id: "hero-phoneNumber", type: "tel", placeholder: "+1 (555) 000-0000", className: "h-10" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "hero-company", className: "text-sm-body text-gray-700 mb-1.5", children: "Company" }),
            /* @__PURE__ */ jsx(Input, { id: "hero-company", placeholder: "Acme Inc.", className: "h-10" })
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "ghost", type: "submit", className: "w-full bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-11 rounded-lg text-base transition-all", children: [
            "Get Your Social Media Team",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 pt-1", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: [
              /* @__PURE__ */ jsx(Lock, { className: "h-3 w-3" }),
              " No contracts"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3" }),
              " No spam"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3" }),
              " Cancel anytime"
            ] })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}
function ProblemSection$1() {
  const problems2 = [
    {
      icon: Eye,
      title: "Ideal Clients Are Researching Before They Reach Out",
      body: "Your competitors are publishing consistently, showing up in feeds, and building familiarity before the first sales conversation. If your firm is not visible, buyers may assume you are inactive, unavailable, or not the obvious choice.",
      pain: "Every day you're invisible online, you're losing clients to firms that show up consistently."
    },
    {
      icon: UserX,
      title: "Your Experts Shouldn’t Have to Become Content Managers",
      body: "Partners, advisors, lawyers, accountants, and consultants should not have to chase post ideas, write captions, format graphics, or manage publishing calendars. Their expertise should guide the content. Your social media team should turn that expertise into consistent output.",
      pain: "You can't force partners to post. And one in-house hire can't replicate a team's output."
    },
    {
      icon: BookOpen,
      title: "Your Expertise Needs a System to Reach the Market",
      body: "Your team has strong ideas, client experience, and real points of view. The problem is that most of it stays inside meetings, proposals, and client work. A managed social media system turns that expertise into visible, repeatable content.",
      pain: "Expertise that isn't visible doesn't exist in the buyer's mind."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "problems", className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-6", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
      "Professional Firms Have a Visibility Problem ",
      /* @__PURE__ */ jsxs("span", { className: "text-[#51B027]", children: [
        /* @__PURE__ */ jsx("br", {}),
        "Not an Expertise Problem "
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsxs("p", { className: "text-body text-gray-600 max-w-2xl mx-auto leading-relaxed", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: "57% of professional services buyers research providers online" }),
      " before reaching out. If you're not visible, you're not in the conversation."
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: problems2.map((problem, i) => {
      const Icon = problem.icon;
      return /* @__PURE__ */ jsx(AnimatedSection, { direction: "up", delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-xl border border-gray-100 bg-white p-6 border-l-4 border-l-red-400", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 text-red-500 mb-4", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900 mb-3", children: problem.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-600 mb-4", children: problem.body }),
        /* @__PURE__ */ jsx("div", { className: "p-3 rounded-lg bg-red-50/50", children: /* @__PURE__ */ jsx("p", { className: "text-sm-body font-medium text-red-600", children: problem.pain }) })
      ] }) }, i);
    }) })
  ] }) });
}
function SolutionSection$1() {
  const differentiators = [
    {
      icon: Target,
      title: "Industry-Specific Content Strategy",
      desc: "Compliance-aware, positioned around your specialties. We know what professional services firms can and can't say—and how to make expertise visible within those boundaries."
    },
    {
      icon: ThumbsUp,
      title: "Your Experts Provide the Insight. We Handle the Execution",
      desc: "Your partners or subject-matter experts review the direction and approve content. We handle the writing, formatting, design, scheduling, and workflow, so the content reflects their expertise without pulling them into day-to-day production."
    },
    {
      icon: LayoutGrid,
      title: "Consistent Monthly Content Across Key Social Channels",
      desc: "Get 12-20 posts per month across LinkedIn, Facebook, and Instagram, planned around your firm’s services, audience, and business goals."
    },
    {
      icon: PiggyBank,
      title: "Managed Social Media Capacity Without Adding Headcount",
      desc: "Get strategy, writing, design, publishing, and reporting support without recruiting, training, or managing a full-time internal hire. You get the output of a social media team with a simpler operating model."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "solution", className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-6", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
      "You Need a Social Media Team That Understands",
      /* @__PURE__ */ jsxs("span", { className: "text-[#51B027]", children: [
        /* @__PURE__ */ jsx("br", {}),
        " Professional Services "
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600 max-w-2xl mx-auto leading-relaxed", children: "We work with professional services firms across law, accounting, consulting, financial advisory, architecture, and B2B services. Every strategy, post, and content calendar is built around expertise, trust, and long sales cycles, not generic social media activity." }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: differentiators.map((item, i) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsx(AnimatedSection, { direction: "up", delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "h-full p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-spark-50 text-spark-600 mb-5", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900 mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-600", children: item.desc })
      ] }) }, i);
    }) })
  ] }) });
}
function SEOSection$1() {
  const capabilities = [
    "LinkedIn content strategy and posting",
    "Facebook and Instagram content management",
    "Thought leadership content for partners and subject-matter experts",
    "Social media content calendars",
    "Post copywriting and creative design",
    "Content scheduling and publishing",
    "Monthly reporting and optimization"
  ];
  const bentoImages = [
    { src: "/images/work-samples/video-work-1.png", alt: "Video editing portfolio", span: "row-span-2" },
    { src: "/images/work-samples/video-work-2.png", alt: "Motion graphics and reels", span: "" },
    { src: "/images/hero/video-hero.webp", alt: "Video production workflow", span: "" },
    { src: "/images/work-samples/video-work-3.png", alt: "Social media video production", span: "col-span-2" }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "py-16 sm:py-24 bg-gray-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-6", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-5", children: [
        "Social Media Management Services Built for ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Professional and B2B Firms" })
      ] }) }),
      /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-16", delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600 max-w-2xl mx-auto", children: "Professional firms do not need generic posting. They need social media content that builds trust, explains expertise, and keeps the firm visible before buyers are ready to reach out." }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(AnimatedSection, { className: "mb-8", delay: 0.2, children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600", children: "Get Levrg gives you a managed social media team that can support:" }) }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-3", staggerDelay: 0.06, children: capabilities.map((cap, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 px-4 py-3.5 rounded-xl bg-spark-50 border border-spark-100 hover:border-spark-300 hover:shadow-sm transition-all duration-200", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-spark-500 mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm-body text-gray-700", children: cap })
        ] }) }, i)) }),
        /* @__PURE__ */ jsx(AnimatedSection, { className: "mt-8", delay: 0.2, children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600", children: "Social media management for law firms, accounting firms, consulting firms, SaaS companies, and B2B service providers. Your team brings the expertise. We turn it into a consistent social media presence that helps buyers understand what you do, why it matters, and when to start a conversation." }) })
      ] }),
      /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.15, direction: "left", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 grid-rows-3 gap-3 sm:gap-4 h-[480px] sm:h-[560px]", children: bentoImages.map((img, i) => /* @__PURE__ */ jsxs("div", { className: `relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 group ${img.span}`, children: [
        /* @__PURE__ */ jsx("img", { src: img.src, alt: img.alt, className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" })
      ] }, i)) }) })
    ] }) })
  ] });
}
function ClientImpactSection() {
  const stats = [
    {
      value: 57,
      prefix: "",
      suffix: "%",
      label: "of Buyers Research Online First",
      source: "Hinge Research Institute, 2025"
    },
    {
      value: 0,
      displayText: "4-6 months",
      prefix: "",
      suffix: "",
      label: "Average Revenue Impact Timeline",
      source: "CPA firm added 8 advisory clients within 6 months"
    },
    {
      value: 0,
      displayText: "3-5x",
      prefix: "",
      suffix: "",
      label: "Engagement on Educational Content",
      source: "Educational posts convert better than promotional ones"
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "results", className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
      "Visibility That Turns Into ",
      /* @__PURE__ */ jsx("br", {}),
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Inquiries, Trust and Revenue" })
    ] }) }),
    /* @__PURE__ */ jsx(StaggerContainer, { className: "grid grid-cols-1 md:grid-cols-3 gap-6", staggerDelay: 0.12, children: stats.map((stat, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-xl border border-gray-100 bg-white text-center hover:shadow-md transition-shadow", children: [
      /* @__PURE__ */ jsx("div", { className: "text-h1 sm:text-display text-gray-900 mb-2", children: stat.displayText ? stat.displayText : /* @__PURE__ */ jsx(CountUp, { target: stat.value, prefix: stat.prefix, suffix: stat.suffix }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-sub font-semibold text-gray-900 mb-2", children: stat.label }),
      /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: stat.source })
    ] }) }, i)) })
  ] }) });
}
function CaseExamplesSection() {
  const cases = [
    {
      firm: "CPA Firm",
      detail: "12 partners, $6M revenue",
      story: "By month 3, we had business owners reaching out because they'd been seeing our content on LinkedIn for weeks. They already trusted us before the first call. Added 6 advisory clients in the first 6 months—revenue we would never have seen otherwise.",
      learning: "Consistent visibility creates warm inbound that outbound can't replicate."
    },
    {
      firm: "Law Firm",
      detail: "8-person, employment law",
      story: "Within 5 months, LinkedIn had become our #2 lead source. Not from ads—from organic content that positioned us as the go-to employment law authority in our region. Partners are now recognized at industry events from their posts.",
      learning: "Authority positioning compounds. Each post builds on the last, creating momentum that accelerates over time."
    },
    {
      firm: "Consulting Firm",
      detail: "5 consultants",
      story: "Inbound inquiries tripled within 6 months. We went from chasing every opportunity to choosing the ones that fit. Our content does the qualifying for us—by the time someone reaches out, they already understand our approach.",
      learning: "Educational content pre-qualifies leads. Inquiries from content readers convert at 2-3x the rate of cold leads."
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
      "How Professional Firms Are ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Using This" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: cases.map((c, i) => /* @__PURE__ */ jsx(AnimatedSection, { direction: "up", delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 p-6 rounded-xl border border-gray-100 bg-gray-50", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-10 h-10 rounded-lg bg-spark-50 text-spark-600", children: /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900", children: c.firm }),
            /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: c.detail })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-700 italic text-sm-body", children: [
          "“",
          c.story,
          "”"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 p-4 rounded-xl bg-spark-50/50 border border-spark-100 border-l-4 border-l-spark-500", children: /* @__PURE__ */ jsxs("p", { className: "text-sm-body font-medium text-[#51B027]", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Key Learning:" }),
        " ",
        c.learning
      ] }) })
    ] }) }, i)) })
  ] }) });
}
function CostComparisonSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
      "The Cost of Staying  ",
      /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "Invisible" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(AnimatedSection, { direction: "left", children: /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 rounded-xl border border-spark-200 bg-white h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-10 h-10 rounded-lg bg-spark-50 text-spark-600", children: /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-[#51B027]", children: "The Visible Firm" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-spark-500 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-900 font-medium", children: "$2,500/month" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: "Dedicated social media team" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-spark-500 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-900 font-medium", children: "10 hrs partner time" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: "Monthly review and approval only" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-spark-500 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-900 font-medium", children: "ROI 10-20x" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: "Warm inbound leads, authority positioning" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 p-4 rounded-xl bg-spark-50/50 border border-spark-100", children: /* @__PURE__ */ jsx("p", { className: "text-sm-body text-[#51B027] font-medium", children: "Total cost: ~$2,500/mo with compounding returns" }) })
      ] }) }),
      /* @__PURE__ */ jsx(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 rounded-xl border border-red-200 bg-white h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 text-red-500", children: /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-red-600", children: "The Invisible Firm" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-900 font-medium", children: "$0 social cost" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: "But 5x more spent on outbound + ads" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-900 font-medium", children: "Endless partner hours" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: "Writing posts that never get published" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-900 font-medium", children: "Declining market share" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: "Competitors visible, you're not" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 p-4 rounded-xl bg-red-50/50 border border-red-100", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600 font-medium", children: "Hidden cost: $10K-$25K/mo in lost opportunities + wasted ad spend" }) })
      ] }) })
    ] })
  ] }) });
}
function HowItWorksSection$1() {
  const steps = [
    { icon: Phone, title: "Kickoff Interview (Day 1-2)", desc: "30-min call with partners to understand your firm's expertise, ideal clients, voice, and positioning." },
    { icon: Calendar, title: "Content Strategy + Calendar (Day 3-7)", desc: "We build a 90-day content plan aligned to your specialties, compliance requirements, and growth goals." },
    { icon: CheckCircle2, title: "First Content Live (Day 8-14)", desc: "4-6 posts scheduled and published across your platforms. Your firm starts building visibility immediately." },
    { icon: BarChart3, title: "Ongoing + Monthly Optimization (Week 3+)", desc: "12-20 posts monthly. Monthly performance reviews, strategy adjustments, and continuous improvement." }
  ];
  return /* @__PURE__ */ jsx("section", { id: "process", className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
      "From Idea to ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Authority" }),
      " in 14 Days"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-start justify-between gap-0 items-stretch", children: steps.map((step, i) => {
      const Icon = step.icon;
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxs("div", { className: "p-5 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300 group h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center text-sm font-bold shrink-0", children: i + 1 }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-spark-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-spark-600" }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-body font-bold text-gray-900 mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sl text-gray-600 leading-relaxed", children: step.desc })
        ] }) }),
        i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "flex items-center px-1 pt-8", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-spark-300 shrink-0" }) })
      ] }, i);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:hidden space-y-4", children: steps.map((step, i) => {
      const Icon = step.icon;
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(AnimatedSection, { direction: "up", delay: i * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "p-5 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300 group", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center text-sm font-bold shrink-0", children: i + 1 }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-spark-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-spark-600" }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-body font-bold text-gray-900 mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sl text-gray-600 leading-relaxed", children: step.desc })
        ] }) }),
        i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "flex justify-center py-1", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-spark-300 rotate-90" }) })
      ] }, i);
    }) })
  ] }) });
}
function TestimonialsSection$2() {
  const testimonials = [
    {
      quote: "Our LinkedIn presence went from nonexistent to the most visible firm in our market. Not one partner had to write a post. We're getting inquiries from businesses who've been following our content for months.",
      name: "Sarah Thompson",
      title: "Partner",
      firm: "Thompson & Associates CPAs",
      size: "6 partners"
    },
    {
      quote: "We tried having one partner post occasionally. Never happened. Now we have consistent content that actually sounds like us. Our employment law expertise is finally visible to the people who need it.",
      name: "Michael Chen",
      title: "Managing Partner",
      firm: "Chen Employment Law",
      size: "8-person firm"
    },
    {
      quote: "We were too busy doing client work to build our own brand. That changed completely. Our consultants are now recognized as thought leaders in organizational development, and the inbound speaks for itself.",
      name: "Patricia Martinez",
      title: "Founder",
      firm: "Martinez Organizational Development",
      size: "5 consultants"
    },
    {
      quote: "Financial advisory is relationship-driven. But how do you start relationships before the first meeting? Content. Their team understands our compliance requirements and creates posts that build trust without crossing lines.",
      name: "David Rodriguez",
      title: "Wealth Advisor",
      firm: "Rodriguez Financial Group",
      size: "4 advisors"
    },
    {
      quote: "I was skeptical that anyone could capture our firm's voice. After reviewing the first batch of posts, I was convinced. Our authority positioning on LinkedIn has directly led to new client engagements.",
      name: "Jennifer Walsh",
      title: "Senior Partner",
      firm: "Walsh & Associates Law",
      size: "12 attorneys"
    }
  ];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, []);
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
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 })
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
      "Firms That Don't ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Look Back" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("button", { onClick: goPrev, className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors", "aria-label": "Previous testimonial", children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5 text-gray-600" }) }),
      /* @__PURE__ */ jsx("button", { onClick: goNext, className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors", "aria-label": "Next testimonial", children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-gray-600" }) }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", custom: direction, children: /* @__PURE__ */ jsxs(motion.div, { custom: direction, variants: slideVariants, initial: "enter", animate: "center", exit: "exit", transition: { duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }, className: "p-8 sm:p-10 rounded-2xl border border-gray-100 bg-white shadow-sm", children: [
        /* @__PURE__ */ jsx(Quote, { className: "h-10 w-10 text-spark-300 mb-5" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sub sm:text-h3 text-gray-700 italic mb-6", children: [
          "“",
          t.quote,
          "”"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-5 border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-spark-100 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-sl font-bold text-spark-700", children: t.name.split(" ").map((n) => n[0]).join("") }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm-body font-semibold text-gray-900", children: t.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-sl text-gray-500", children: [
              t.title,
              " · ",
              t.size
            ] })
          ] })
        ] }) })
      ] }, current) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 mt-6", children: testimonials.map((_, i) => /* @__PURE__ */ jsx("button", { onClick: () => {
        setDirection(i > current ? 1 : -1);
        setCurrent(i);
      }, className: `h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-spark-500" : "w-2 bg-gray-300 hover:bg-gray-400"}`, "aria-label": `Go to testimonial ${i + 1}` }, i)) })
    ] })
  ] }) });
}
function WhyChooseUsSection$1() {
  const items = [
    { icon: Scale, title: "Built for Professional Services", desc: "We don't work with restaurants, e-commerce, or lifestyle brands. Every strategy, post, and calendar is designed for firms like yours." },
    { icon: Lightbulb, title: "Content That Demonstrates Expertise", desc: "Not generic motivational quotes. Real thought leadership that positions your partners as the authorities they are." },
    { icon: Users, title: "Full Team, Not a Single Hire", desc: "Strategist, writer, designer, and account manager. A complete social media department for less than one in-house hire." },
    { icon: Target, title: "Compliance-Aware From Day One", desc: "We understand the rules professional services firms operate under. Every post is reviewed for compliance before publication." }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-6", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
      "We Specialize in ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Professional Services" }),
      /* @__PURE__ */ jsx("br", {}),
      "We Understand Your World"
    ] }) }),
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600 max-w-2xl mx-auto leading-relaxed", children: "This isn't a side service. It's our only focus. Every member of our team is trained on the nuances of professional services marketing." }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: items.map((item, i) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsx(AnimatedSection, { direction: "up", delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "h-full p-6 rounded-xl border border-gray-100 bg-white", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-spark-50 text-spark-600 mb-5", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900 mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-600", children: item.desc })
      ] }) }, i);
    }) })
  ] }) });
}
function FAQSection() {
  const faqs = [
    { q: "How much partner time is required?", a: "Your partners do not need to write posts or manage the content process. We usually need a short kickoff conversation, occasional input on key topics, and quick approval on planned content. The goal is to capture your firm’s expertise without turning your experts into content managers." },
    { q: "What platforms do you post on?", a: "We typically support LinkedIn, Facebook, and Instagram. For many professional services and B2B firms, LinkedIn is the primary channel because it is where decision-makers, referral partners, and industry peers are most active." },
    { q: "How quickly will we see results?", a: "Your first content can usually go live within 14 days. Visibility, engagement, and inbound interest usually build over time as your firm publishes consistently and your audience becomes more familiar with your expertise." },
    { q: "How is this different from hiring an in-house social media manager?", a: "An in-house hire gives you one person to recruit, train, manage, and retain. Get Levrg gives you a managed team across strategy, copy, design, publishing, and reporting, with workflow support already built in." },
    { q: "What does the content look like?", a: "The content is designed to feel professional, useful, and aligned with your firm’s voice. It can include thought leadership posts, educational carousels, service-focused posts, team credibility content, client problem breakdowns, and platform-specific social graphics." },
    { q: "Is the content compliant with professional services regulations?", a: "We build the content workflow around your approval process and industry requirements. Every post can be reviewed before publishing, and we avoid unsupported claims, risky language, or content that does not fit your professional standards." },
    { q: "What if we want to cancel?", a: "You are not locked into a long-term internal hire or a complex agency retainer. The service is designed to give your firm flexible social media capacity without adding permanent headcount." },
    { q: "Do you create content for different practice areas within one firm?", a: "Yes. We can build content around different service lines, practice areas, partner specialties, or audience segments, while keeping the firm’s overall voice and positioning consistent." }
  ];
  const col1 = faqs.slice(0, 4);
  const col2 = faqs.slice(4, 8);
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
      "Frequently Asked ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Questions" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(AnimatedSection, { direction: "left", children: /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-gray-100 bg-white p-6 sm:p-8", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: col1.map((faq, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${i}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-body font-semibold text-gray-900 hover:text-spark-600 hover:no-underline", children: faq.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-body text-gray-600 leading-relaxed", children: faq.a })
      ] }, i)) }) }) }),
      /* @__PURE__ */ jsx(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-gray-100 bg-white p-6 sm:p-8", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: col2.map((faq, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${i + 4}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-body font-semibold text-gray-900 hover:text-spark-600 hover:no-underline", children: faq.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-body text-gray-600 leading-relaxed", children: faq.a })
      ] }, i + 4)) }) }) })
    ] })
  ] }) });
}
function FinalCTASection$1() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-spark-800", children: /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(AnimatedSection, { direction: "up", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-white mb-4", children: [
      "Ready to Build a Social Presence ",
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("br", {}),
        "Your Firm Can Be Proud Of?"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-body text-spark-200 leading-relaxed mb-8 max-w-xl mx-auto", children: "Turn your firm's expertise into consistent content, stronger visibility, and more informed inbound conversations. It starts with a focused strategy call." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "lg", className: "bg-white text-spark-800 hover:bg-spark-50 hover:text-spark-800 px-8 py-6 text-base font-semibold rounded-xl shadow-lg transition-all", onClick: () => {
        var _a;
        return (_a = document.getElementById("lead-form")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      }, children: [
        "Get Your Social Media Team",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "lg", className: "bg-void hover:bg-surface-dark text-white hover:text-white px-8 py-6 text-base font-semibold rounded-xl border-0 transition-all", children: [
        /* @__PURE__ */ jsx(CalendarCheck, { className: "mr-2 h-5 w-5" }),
        "Schedule a Strategy Call"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm-body text-spark-300", children: "No contracts. No spam. Cancel anytime." })
  ] }) }) }) });
}
function SocialPage() {
  return /* @__PURE__ */ jsxs(
    PageShell,
    {
      navItems: [
        { label: "Problems", href: "#problems" },
        { label: "Solution", href: "#solution" },
        { label: "Results", href: "#results" },
        { label: "Process", href: "#process" }
      ],
      ctaText: "See How It Works",
      ctaTarget: "#lead-form",
      meta: {
        title: "Social Media Management for Law Firms & B2B Professionals | Get Levrg",
        description: "Done-for-you social media management for law firms, CPAs, consultants and B2B firms. 12–20 posts monthly, zero partner time, first posts live in 14 days.",
        keywords: "social media management for law firms, social media for accountants, B2B social media management, LinkedIn management for professionals, social media for consultants",
        ogTitle: "Social Media Management for Professional Firms | Get Levrg",
        ogDescription: "12–20 posts monthly for law firms, CPAs & consultants. No partner time required. First posts live in 14 days."
      },
      children: [
        /* @__PURE__ */ jsx(HeroSection$1, {}),
        /* @__PURE__ */ jsx(TrustedByMarquee, {}),
        /* @__PURE__ */ jsx(ProblemSection$1, {}),
        /* @__PURE__ */ jsx(SolutionSection$1, {}),
        /* @__PURE__ */ jsx(SEOSection$1, {}),
        /* @__PURE__ */ jsx(ToolsWeUseSection$1, {}),
        /* @__PURE__ */ jsx(ClientImpactSection, {}),
        /* @__PURE__ */ jsx(CaseExamplesSection, {}),
        /* @__PURE__ */ jsx(WorkSampleBentoGrid$1, {}),
        /* @__PURE__ */ jsx(CostComparisonSection, {}),
        /* @__PURE__ */ jsx(HowItWorksSection$1, {}),
        /* @__PURE__ */ jsx(TestimonialsSection$2, {}),
        /* @__PURE__ */ jsx(WhyChooseUsSection$1, {}),
        /* @__PURE__ */ jsx(FAQSection, {}),
        /* @__PURE__ */ jsx(FinalCTASection$1, {})
      ]
    }
  );
}
function ToolsWeUseSection() {
  const tools = [
    { src: "/logos/applogos/Hubspot.png", alt: "HubSpot" },
    { src: "/logos/applogos/Hubspot-CMS.png", alt: "HubSpot CMS" },
    { src: "/logos/applogos/Salesforce.png", alt: "Salesforce" },
    { src: "/logos/applogos/Sales-Navigator.png", alt: "Sales Navigator" },
    { src: "/logos/applogos/Apollo.png", alt: "Apollo" },
    { src: "/logos/applogos/ZoomInfo.png", alt: "ZoomInfo" },
    { src: "/logos/applogos/Clay.png", alt: "Clay" },
    { src: "/logos/applogos/Instantly.png", alt: "Instantly" },
    { src: "/logos/applogos/Expandi.png", alt: "Expandi" },
    { src: "/logos/applogos/Heyreach.png", alt: "HeyReach" },
    { src: "/logos/applogos/6sense.png", alt: "6sense" },
    { src: "/logos/applogos/Calendly.png", alt: "Calendly" },
    { src: "/logos/applogos/Zapier.png", alt: "Zapier" },
    { src: "/logos/applogos/Slack.webp", alt: "Slack" },
    { src: "/logos/applogos/Google-Ads.png", alt: "Google Ads" },
    { src: "/logos/applogos/Monday.png", alt: "Monday" },
    { src: "/logos/applogos/Microsoft-Dynamic.png", alt: "Microsoft Dynamics" },
    { src: "/logos/applogos/Zoho.png", alt: "Zoho" }
  ];
  const content = {
    title: "The Tools We Use to Optimize Your CRM",
    description: "We leverage industry-leading platforms to clean your data, automate workflows, and build dashboards that drive revenue.",
    bullets: [
      "HubSpot-certified optimization team",
      "Enterprise-grade data cleanup tools",
      "Automated workflow & sequence builders",
      "Custom reporting & analytics platforms"
    ]
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-spark-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: content.title }),
      /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600 mb-6", children: content.description }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: content.bullets.map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-[#307A0F] mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm-body text-gray-700", children: bullet })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "relative h-[420px] sm:h-[500px] overflow-hidden rounded-2xl bg-white border border-gray-200 p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-spark-50 to-transparent z-10 pointer-events-none rounded-t-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-spark-50 to-transparent z-10 pointer-events-none rounded-b-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "animate-marquee-up will-change-transform", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 sm:gap-4", children: [...tools, ...tools, ...tools, ...tools].map((tool, i) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center rounded-xl bg-white border border-gray-100 p-3 sm:p-4 lg:p-5 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 group", children: /* @__PURE__ */ jsx("img", { src: tool.src, alt: tool.alt, width: 140, height: 56, className: "h-10 sm:h-14 lg:h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300" }) }, i)) }) })
    ] }) })
  ] }) }) });
}
function WorkSampleBentoGrid() {
  const samples = [
    { src: "/images/work-samples/crm-work-1.png", alt: "CRM Dashboard Optimization", label: "Dashboard Optimization" },
    { src: "/images/work-samples/crm-work-2.png", alt: "Sales Pipeline Analytics", label: "Pipeline Analytics" },
    { src: "/images/work-samples/crm-work-3.png", alt: "Data Cleanup Workflow", label: "Data Cleanup Process" }
  ];
  const title = { before: "See Our CRM", accent: "Optimization Work" };
  const carouselItems = [...samples, ...samples, ...samples, ...samples];
  return /* @__PURE__ */ jsxs("section", { className: "py-16 sm:py-24 bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
        title.before,
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#307A0F]", children: title.accent }),
        ""
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-body text-gray-500 max-w-xl mx-auto", children: "Real results from real clients. Here's a glimpse of what we deliver." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "flex w-max animate-marquee-left-slow will-change-transform", children: [...carouselItems, ...carouselItems].map((sample, i) => /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mx-3 sm:mx-4 w-[320px] sm:w-[400px] lg:w-[480px] group", children: /* @__PURE__ */ jsx("div", { className: "relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-300", children: /* @__PURE__ */ jsxs("div", { className: "relative h-[220px] sm:h-[260px] lg:h-[300px]", children: [
        /* @__PURE__ */ jsx("img", { src: sample.src, alt: sample.alt, className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-sm-body font-semibold text-gray-900", children: sample.label }) })
      ] }) }) }, i)) })
    ] })
  ] });
}
const INTRO_DURATION = 6e3;
function CrmAnimation() {
  const pipelineStages = [
    { label: "Leads", count: 248, color: "bg-blue-400", pct: 100 },
    { label: "Qualified", count: 124, color: "bg-spark-400", pct: 50 },
    { label: "Proposal", count: 62, color: "bg-emerald-400", pct: 25 },
    { label: "Closed Won", count: 31, color: "bg-spark-600", pct: 12 }
  ];
  const metrics = [
    { icon: Database, label: "Duplicates Found", value: "1,247", delay: 0.3, accent: "bg-blue-50 border-blue-200", iconColor: "text-blue-500", valueColor: "text-blue-700" },
    { icon: BarChart3, label: "Pipeline Accuracy", value: "87%", delay: 0.6, accent: "bg-spark-50 border-spark-200", iconColor: "text-spark-600", valueColor: "text-[#307A0F]" },
    { icon: TrendingUp, label: "Revenue Recovered", value: "$840K", delay: 0.9, accent: "bg-emerald-50 border-emerald-200", iconColor: "text-emerald-500", valueColor: "text-emerald-700" },
    { icon: Users, label: "Deals Discovered", value: "47", delay: 1.2, accent: "bg-amber-50 border-amber-200", iconColor: "text-amber-500", valueColor: "text-amber-700" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03] bg-dot-pattern" }),
    /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 }, className: "relative flex items-center gap-2 mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-lg bg-spark-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(Database, { className: "h-3.5 w-3.5 text-spark-600" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-900 tracking-wide", children: "HubSpot CRM Audit" }),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-spark-500 animate-pulse" }),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-spark-600 font-medium", children: "Live" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative space-y-2 mb-5", children: pipelineStages.map((stage, i) => /* @__PURE__ */ jsx(motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, transition: { duration: 0.8, delay: 0.2 + i * 0.4, ease: [0.25, 0.46, 0.45, 0.94] }, children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs("div", { className: "relative flex-1 h-8 rounded-lg bg-gray-100 overflow-hidden", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: { width: 0 }, animate: { width: `${stage.pct}%` }, transition: { duration: 1.2, delay: 0.3 + i * 0.4, ease: "easeOut" }, className: `absolute inset-y-0 left-0 ${stage.color} rounded-lg opacity-70` }),
      /* @__PURE__ */ jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-700 z-10", children: stage.label }),
      /* @__PURE__ */ jsx(motion.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.8 + i * 0.4 }, className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 z-10", children: stage.count })
    ] }) }) }, stage.label)) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: metrics.map((m) => {
      const Icon = m.icon;
      return /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, scale: 0.8, x: 20 }, animate: { opacity: 1, scale: 1, x: 0 }, transition: { duration: 0.5, delay: m.delay + 1.2, type: "spring", stiffness: 200 }, className: `p-3 rounded-xl border ${m.accent}`, children: [
        /* @__PURE__ */ jsx(Icon, { className: `h-3.5 w-3.5 ${m.iconColor} mb-1.5` }),
        /* @__PURE__ */ jsx(motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: m.delay + 1.6 }, className: `text-h3 font-bold ${m.valueColor} leading-none mb-0.5`, children: m.value }),
        /* @__PURE__ */ jsx("p", { className: "text-[11px] text-gray-500", children: m.label })
      ] }, m.label);
    }) }),
    /* @__PURE__ */ jsx(motion.div, { initial: { x: "-100%" }, animate: { x: "200%" }, transition: { duration: 3, delay: 1, repeat: 1, ease: "linear" }, className: "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-spark-400 to-transparent" })
  ] });
}
function HeroFormIntro({ children }) {
  const [showIntro, setShowIntro] = useState(true);
  const [introKey, setIntroKey] = useState(0);
  useEffect(() => {
    if (!showIntro) return;
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, INTRO_DURATION);
    return () => clearTimeout(timer);
  }, [showIntro, introKey]);
  const replayIntro = useCallback(() => {
    setShowIntro(true);
    setIntroKey((k) => k + 1);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: showIntro ? /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, x: 40, scale: 0.97 }, animate: { opacity: 1, x: 0, scale: 1 }, exit: { opacity: 0, x: -30, scale: 0.97 }, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }, className: "relative min-h-[480px] sm:min-h-[520px]", children: /* @__PURE__ */ jsx(CrmAnimation, {}) }, `intro-${introKey}`) : /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 30, scale: 0.97 }, animate: { opacity: 1, x: 0, scale: 1 }, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }, className: "relative", children: [
    children,
    /* @__PURE__ */ jsx(motion.button, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.5, type: "spring", stiffness: 300 }, onClick: replayIntro, className: "absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-white border border-spark-300 flex items-center justify-center hover:bg-spark-600 hover:border-spark-500 transition-all duration-300 group shadow-md", title: "Replay intro animation", "aria-label": "Replay intro animation", children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5 text-spark-600 group-hover:text-white transition-colors" }) })
  ] }, "form") }) });
}
function DualHeading({
  before,
  accent,
  after,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("h2", { className, children: [
    before,
    " ",
    /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: accent }),
    after ? ` ${after}` : ""
  ] });
}
function HeroSection() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank-you?service=crm");
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "lead-form",
      className: "relative overflow-hidden min-h-[500px] sm:min-h-[600px]",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/hero/crm-hero.webp",
            alt: "",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#061512]/95 via-[#061512]/70 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8",
                children: [
                  /* @__PURE__ */ jsx(Activity, { className: "h-3.5 w-3.5 text-spark-300" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm-body font-medium text-white", children: "CRM & Sales Data Optimization" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.1 },
                className: "text-h1 sm:text-display lg:text-display-sm text-white mb-6",
                children: [
                  "You're Paying for HubSpot",
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "text-spark-400", children: "You're Using 20% of It" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "text-body sm:text-sub text-gray-300 max-w-2xl mb-8",
                children: "Your CRM is an expensive filing cabinet. No workflows. No clean data. No visibility. Get a dedicated team that optimizes your HubSpot instance in 14 days—so your CRM actually drives revenue."
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.3 },
                className: "flex flex-wrap items-center gap-3 sm:gap-4 mb-10",
                children: [
                  { icon: Zap, text: "14-Day Optimization" },
                  { icon: DollarSign, text: "1/3 Cost of Hiring" },
                  { icon: BarChart3, text: "100% HubSpot Utilization" }
                ].map((m, i) => {
                  const Icon = m.icon;
                  return /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: "inline-flex items-center gap-2 text-sm-body font-medium text-gray-200 bg-white/10 border border-white/20 px-3.5 py-2 rounded-lg",
                      children: [
                        /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-spark-400" }),
                        m.text
                      ]
                    },
                    i
                  );
                })
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 },
                className: "relative p-5 sm:p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm max-w-2xl",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm-body sm:text-body text-gray-200 italic mb-3", children: "“We thought we needed to upgrade our HubSpot tier. Turns out, we just needed someone to actually set it up properly. We went from 20% utilization to using 90% of features.”" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-spark-100 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-spark-700", children: "VP" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm-body font-semibold text-white", children: "VP Revenue Operations" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Series A SaaS ($15M ARR)" })
                    ] })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(HeroFormIntro, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white shadow-lg p-6 sm:p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900 mb-1.5", children: "Get Your HubSpot Audit" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: "See what's broken and how much revenue you're missing. Free audit in 24 hours." })
            ] }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "firstName", className: "text-sm-body text-gray-700 mb-1.5", children: "First Name" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "firstName",
                      placeholder: "John",
                      className: "h-10"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "lastName", className: "text-sm-body text-gray-700 mb-1.5", children: "Last Name" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "lastName",
                      placeholder: "Smith",
                      className: "h-10"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "workEmail", className: "text-sm-body text-gray-700 mb-1.5", children: "Work Email" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "workEmail",
                    type: "email",
                    placeholder: "john@company.com",
                    className: "h-10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "phoneNumber", className: "text-sm-body text-gray-700 mb-1.5", children: "Phone Number" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "phoneNumber",
                    type: "tel",
                    placeholder: "+1 (555) 000-0000",
                    className: "h-10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "company", className: "text-sm-body text-gray-700 mb-1.5", children: "Company" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "company",
                    placeholder: "Acme Inc.",
                    className: "h-10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "ghost",
                  type: "submit",
                  className: "w-full bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-11 rounded-lg text-base transition-all",
                  children: [
                    "Get Your HubSpot Audit",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 pt-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: [
                  /* @__PURE__ */ jsx(Lock, { className: "h-3 w-3" }),
                  "No contracts"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3" }),
                  "No spam"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3" }),
                  "Cancel anytime"
                ] })
              ] })
            ] })
          ] }) })
        ] }) })
      ]
    }
  );
}
const problems = [
  {
    icon: AlertOctagon,
    title: "The Data Disaster",
    bullets: [
      "1,000+ duplicate records clogging your pipeline",
      "Invalid & bounced email addresses going unchecked",
      "Missing critical fields on 80%+ of contacts",
      "Inconsistent data entry across the team"
    ],
    impact: "Your forecasting is guesswork. Your pipeline is inflated. You can't trust a single number."
  },
  {
    icon: Settings,
    title: "The Feature Graveyard",
    bullets: [
      "Workflows created and never turned on",
      "Abandoned custom fields from 3 reorgs ago",
      "Integrations nobody knows are running",
      "Dashboards nobody has looked at in months"
    ],
    impact: "You're paying for Enterprise but operating like you're on Free Features rot. Value decays"
  },
  {
    icon: RefreshCw,
    title: "The Process Chaos",
    bullets: [
      "No standardized lead qualification criteria",
      "No marketing-to-sales handoff process",
      "Missed follow-ups falling through cracks",
      "Data entry is 'optional'  so it doesn't happen"
    ],
    impact: "Your sales team does whatever they want. No two reps work the same way. Revenue leaks everywhere."
  },
  {
    icon: AlertTriangle,
    title: "The Hiring Trap",
    bullets: [
      "RevOps hire costs $78-110K/year with benefits",
      "6-month ramp-up before they're fully effective",
      "Single point of failure  what if they leave?",
      "Hard to find someone who knows sales + data + strategy"
    ],
    impact: "You'll spend $90K+ and wait 6 months to maybe fix the problem. That's $45K in lost productivity before day one."
  }
];
function ProblemSection() {
  return /* @__PURE__ */ jsx("section", { id: "problems", className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsx(
        DualHeading,
        {
          before: "Broken Data + Broken Processes =",
          accent: "Broken Revenue",
          className: "text-h2 sm:text-h1 text-gray-900 mb-4"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-body text-gray-500 max-w-2xl mx-auto", children: "Here's what we find in almost every HubSpot instance we audit." })
    ] }),
    /* @__PURE__ */ jsx(StaggerContainer, { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: problems.map((p, i) => {
      const Icon = p.icon;
      return /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "h-full p-6 rounded-xl bg-white border border-gray-100 border-l-4 border-l-red-400 shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-red-500" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900", children: p.title })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 mb-5", children: p.bullets.map((b, j) => /* @__PURE__ */ jsxs(
          "li",
          {
            className: "flex items-start gap-2 text-sm-body text-gray-600",
            children: [
              /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-red-300 shrink-0" }),
              b
            ]
          },
          j
        )) }),
        /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-red-200 bg-red-50/50 p-3", children: /* @__PURE__ */ jsxs("p", { className: "text-sm-body font-medium text-red-700", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3.5 w-3.5 inline mr-1.5 -mt-0.5" }),
          "Impact: ",
          p.impact
        ] }) })
      ] }) }, i);
    }) })
  ] }) });
}
const solutionItems = [
  {
    icon: Layers,
    title: "Complete CRM Optimization",
    description: "Full audit, data cleanup, workflows, dashboards, and training. Not a partial fix  a complete transformation."
  },
  {
    icon: Zap,
    title: "14-Day Transformation",
    description: "From chaos to fully operational in two weeks. Not months of consulting  immediate, tangible results."
  },
  {
    icon: Shield,
    title: "Ongoing Maintenance",
    description: "Monthly hygiene reviews, quarterly optimization, proactive issue resolution. Your CRM stays clean forever."
  },
  {
    icon: DollarSign,
    title: "Cost Fraction of Hiring",
    description: "~$3-4K/month vs $78-110K/year for a RevOps hire. Cancel anytime. Zero risk, zero benefits cost."
  }
];
function SolutionSection() {
  return /* @__PURE__ */ jsx("section", { id: "solution", className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-6", children: /* @__PURE__ */ jsx(
      DualHeading,
      {
        before: "Get a Fully Optimized CRM in",
        accent: "14 Days",
        after: "Then Keep It Running Without Hiring",
        className: "text-h2 sm:text-h1 text-gray-900 mb-4"
      }
    ) }),
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", delay: 0.1, children: /* @__PURE__ */ jsxs("p", { className: "text-body text-gray-600 max-w-2xl mx-auto", children: [
      "We don't sell you HubSpot licenses.",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: "We optimize what you already have." }),
      " ",
      "Clean data, automated workflows, custom dashboards  everything your team needs to close more deals."
    ] }) }),
    /* @__PURE__ */ jsx(StaggerContainer, { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: solutionItems.map((s, i) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "h-full p-6 rounded-xl bg-white border border-gray-100 border-l-4 border-l-spark-400 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-spark-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-spark-600" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900", children: s.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-600", children: s.description })
      ] }) }, i);
    }) }),
    /* @__PURE__ */ jsx(AnimatedSection, { className: "mt-12 text-center", delay: 0.3, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-spark-50 border border-spark-200", children: [
      /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-spark-600 shrink-0" }),
      /* @__PURE__ */ jsx("p", { className: "text-body font-semibold text-[#51B027]", children: "We find $500K-$2M in hidden pipeline during audits." })
    ] }) })
  ] }) });
}
function SEOSection() {
  const capabilities = [
    "HubSpot CRM setup, configuration, and custom property buildout",
    "Contact, company, and deal pipeline cleanup and deduplication",
    "Sales pipeline stage optimization and workflow automation",
    "Lead scoring, lifecycle stage mapping, and routing rules",
    "Revenue attribution reporting and custom dashboard creation",
    "Email sequence and sequence enrollment automation",
    "CRM adoption documentation and team onboarding"
  ];
  const bentoImages = [
    { src: "/images/work-samples/crm-work-1.png", alt: "HubSpot CRM dashboard optimization", span: "row-span-2" },
    { src: "/images/work-samples/crm-work-2.png", alt: "Sales pipeline configuration", span: "" },
    { src: "/images/hero/crm-hero.webp", alt: "CRM data cleanup and enrichment", span: "" },
    { src: "/images/work-samples/crm-work-3.png", alt: "Revenue reporting and attribution", span: "col-span-2" }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "py-16 sm:py-24 bg-gray-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-6", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-5", children: [
        "HubSpot CRM Optimization Services Built for ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "B2B Revenue Teams" })
      ] }) }),
      /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-16", delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600 max-w-2xl mx-auto", children: "Most HubSpot portals are only 20–30% utilized. Dirty data, broken pipelines, and zero automation mean your CRM is storing contacts — not driving revenue. We fix that in 14 days." }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(AnimatedSection, { className: "mb-8", delay: 0.2, children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600", children: "Get Levrg gives you a dedicated HubSpot optimization team that handles:" }) }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-3", staggerDelay: 0.06, children: capabilities.map((cap, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 px-4 py-3.5 rounded-xl bg-spark-50 border border-spark-100 hover:border-spark-300 hover:shadow-sm transition-all duration-200", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-spark-500 mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm-body text-gray-700", children: cap })
        ] }) }, i)) }),
        /* @__PURE__ */ jsx(AnimatedSection, { className: "mt-8", delay: 0.2, children: /* @__PURE__ */ jsx("p", { className: "text-body text-gray-600", children: "CRM optimization for SaaS companies, professional services firms, B2B agencies, and revenue teams scaling past $5M ARR. You close the deals. We make sure your HubSpot actually tracks them, automates the follow-up, and surfaces the pipeline opportunities your team is missing." }) })
      ] }),
      /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.15, direction: "left", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 grid-rows-3 gap-3 sm:gap-4 h-[480px] sm:h-[560px]", children: bentoImages.map((img, i) => /* @__PURE__ */ jsxs("div", { className: `relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 group ${img.span}`, children: [
        /* @__PURE__ */ jsx("img", { src: img.src, alt: img.alt, className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" })
      ] }, i)) }) })
    ] }) })
  ] });
}
function AuditFindingsSection() {
  return /* @__PURE__ */ jsx("section", { id: "results", className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsx(
        DualHeading,
        {
          before: "Most Companies Find",
          accent: "$500K-$2M in Hidden Revenue",
          className: "text-h2 sm:text-h1 text-gray-900 mb-4"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-body text-gray-500 max-w-xl mx-auto", children: "A real before-and-after from one of our HubSpot audits." })
    ] }),
    /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "px-6 sm:px-8 py-5 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-spark-600" }),
        /* @__PURE__ */ jsx("span", { className: "font-bold text-gray-900", children: "B2B SaaS" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "|" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm-body text-gray-600", children: "$8M ARR" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "|" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm-body text-gray-600", children: "Series A" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "|" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm-body text-gray-600", children: "35-person sales team" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-gray-100", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
            /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5 text-red-500" }),
            /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-red-700", children: "What Was Broken" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-caption text-red-500 mb-2", children: "Data Issues" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 text-sm-body text-gray-600", children: [
                "1,247 duplicates",
                "340 hard bounces",
                "156 dead deals clogging pipeline",
                "89% missing company size",
                "$18M pipeline  only $4M quality"
              ].map((t, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" }),
                t
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-caption text-red-500 mb-2", children: "Workflow & Process Issues" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 text-sm-body text-gray-600", children: [
                "2-year-old sequences still running",
                "Manual lead routing",
                "No follow-up reminders",
                "No standard qualification",
                "20 min training total"
              ].map((t, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" }),
                t
              ] }, i)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-spark-500" }),
            /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-[#51B027]", children: "What We Fixed" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-caption text-[#51B027] mb-2", children: "Data Cleanup" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 text-sm-body text-gray-600", children: [
                "Merged all duplicates",
                "Cleaned & validated emails",
                "Archived dead deals",
                "Populated missing fields",
                "Discovered 47 deals worth $840K"
              ].map((t, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-spark-500 mt-0.5 shrink-0" }),
                t
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-caption text-[#51B027] mb-2", children: "Automation & Reporting" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 text-sm-body text-gray-600", children: [
                "Set up lead routing & reminders",
                "Built custom dashboards",
                "Automated follow-up sequences",
                "Documented entire process"
              ].map((t, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-spark-500 mt-0.5 shrink-0" }),
                t
              ] }, i)) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-6 sm:px-8 py-6 bg-spark-50 border-t border-spark-200", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption text-[#51B027] mb-4", children: "Results" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6", children: [
          { value: "87%", label: "Forecast Accuracy", prev: "was 34%" },
          { value: "$840K", label: "Opportunities Found", prev: "47 missed deals" },
          { value: "40%", label: "Faster Onboarding", prev: "" },
          { value: "15 hrs", label: "Saved Per Week", prev: "" }
        ].map((r, i) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-h3 sm:text-h2 text-[#51B027]", children: r.value }),
          /* @__PURE__ */ jsx("p", { className: "text-sl text-gray-600 mt-0.5", children: r.label }),
          r.prev && /* @__PURE__ */ jsx("p", { className: "text-sl text-gray-400", children: r.prev })
        ] }, i)) })
      ] })
    ] }) })
  ] }) });
}
function RoiSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsx(
      DualHeading,
      {
        before: "What Optimization Actually",
        accent: "Returns",
        className: "text-h2 sm:text-h1 text-gray-900 mb-4"
      }
    ) }),
    /* @__PURE__ */ jsx(StaggerContainer, { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      {
        prefix: "",
        target: 14,
        suffix: " days",
        label: "Full Optimization Timeline",
        icon: Clock
      },
      {
        prefix: "$",
        target: 500,
        suffix: "K-$2M",
        label: "Hidden Pipeline Recovered",
        icon: TrendingUp
      },
      {
        prefix: "",
        target: 10,
        suffix: "-20 hrs/week",
        label: "Manual Work Eliminated",
        icon: Zap
      }
    ].map((s, i) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "text-center p-8 rounded-xl border border-gray-100 bg-white shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-spark-50 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-spark-600" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-h2 sm:text-h1 text-[#51B027] mb-2", children: /* @__PURE__ */ jsx(
          CountUp,
          {
            target: s.target,
            prefix: s.prefix,
            suffix: s.suffix
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: s.label })
      ] }) }, i);
    }) })
  ] }) });
}
const comparisonRows = [
  { category: "Pipeline Visibility", broken: "30-40%", optimized: "95%+" },
  { category: "Data Accuracy", broken: "Duplicates, errors", optimized: "Clean, standardized" },
  { category: "Forecasting Accuracy", broken: "30-50% (guesswork)", optimized: "80-95% (data-driven)" },
  { category: "Time on Manual Work", broken: "15-20 hrs/week", optimized: "2-5 hrs/week" },
  { category: "Lead Response Time", broken: "Hours to days", optimized: "Minutes (automated)" },
  { category: "Sales Efficiency", broken: "Spreadsheets + CRM", optimized: "CRM only" },
  { category: "New Rep Onboarding", broken: "4-6 weeks", optimized: "2-3 weeks" },
  { category: "Hidden Revenue", broken: "Untracked", optimized: "Discovered & pursued" },
  { category: "Team Trust", broken: '"The data is wrong"', optimized: '"We can trust this"' }
];
function ComparisonSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsx(
      DualHeading,
      {
        before: "Broken CRM vs",
        accent: "Optimized CRM",
        className: "text-h2 sm:text-h1 text-gray-900 mb-4"
      }
    ) }),
    /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 text-center border-b border-gray-200", children: [
        /* @__PURE__ */ jsx("div", { className: "py-4 px-4 bg-gray-50" }),
        /* @__PURE__ */ jsx("div", { className: "py-4 px-4 bg-red-50", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-bold text-red-700 flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4" }),
          "Broken CRM"
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "py-4 px-4 bg-spark-50", children: /* @__PURE__ */ jsxs("p", { className: "text-sm-body font-bold text-[#51B027] flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4" }),
          "Optimized CRM"
        ] }) })
      ] }),
      comparisonRows.map((row, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "grid grid-cols-3 border-b border-gray-100 last:border-0",
          children: [
            /* @__PURE__ */ jsx("div", { className: "py-3.5 px-4 text-sm-body font-medium text-gray-900", children: row.category }),
            /* @__PURE__ */ jsx("div", { className: "py-3.5 px-4 text-sm text-red-600 text-center bg-red-50/30", children: row.broken }),
            /* @__PURE__ */ jsx("div", { className: "py-3.5 px-4 text-sm-body text-[#51B027] font-medium text-center bg-spark-50/30", children: row.optimized })
          ]
        },
        i
      ))
    ] }) })
  ] }) });
}
const phases = [
  {
    num: 1,
    title: "Audit & Analysis",
    timeline: "Days 1–3",
    icon: Search,
    tasks: [
      "Audit data and workflows while interviewing sales teams to map current processes"
    ],
    output: "Comprehensive audit report",
    yourTime: "~3 hours"
  },
  {
    num: 2,
    title: "Build & Report",
    timeline: "Days 4–12",
    icon: Brush,
    tasks: [
      "Purge duplicate data, automate lead qualification, and build 5–8 performance dashboards"
    ],
    output: "Fully operational CRM with live reporting",
    yourTime: "~2.5 hours"
  },
  {
    num: 3,
    title: "Training & Handoff",
    timeline: "Days 11–14",
    icon: BookOpen,
    tasks: [
      "Conduct hands-on training sessions for reps and managers using custom playbooks"
    ],
    output: "Team fully trained",
    yourTime: "~4 hours"
  },
  {
    num: 4,
    title: "Ongoing Maintenance",
    timeline: "Month 2+",
    icon: Shield,
    tasks: [
      "Run monthly system hygiene checks and provide priority technical support"
    ],
    output: "Long-term CRM efficiency",
    yourTime: "1 hour/month"
  }
];
function HowItWorksSection() {
  return /* @__PURE__ */ jsx("section", { id: "process", className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsx(
        DualHeading,
        {
          before: "From Chaos to Clarity in",
          accent: "14 Days",
          className: "text-h2 sm:text-h1 text-gray-900 mb-4"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-body text-gray-500 max-w-xl mx-auto", children: "A proven five-phase process that transforms your CRM with minimal time investment from your team." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-start justify-between gap-0 items-stretch", children: phases.map((p, i) => {
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxs("div", { className: "p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center font-bold text-sm shrink-0", children: p.num }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-spark-50 border border-spark-200 text-[11px] font-semibold text-spark-700", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-2.5 w-2.5 text-spark-600" }),
              p.timeline
            ] })
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "text-body font-bold text-gray-900 mb-2", children: p.title }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 mb-3", children: p.tasks.map((t, j) => /* @__PURE__ */ jsx("li", { className: "flex items-start gap-1.5 text-sl text-gray-600", children: t }, j)) }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-100 pt-2 space-y-0.5", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-gray-500", children: [
              "Output: ",
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-medium", children: p.output })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-gray-500", children: [
              "Your time: ",
              /* @__PURE__ */ jsx("span", { className: "text-spark-600 font-semibold", children: p.yourTime })
            ] })
          ] })
        ] }) }),
        i < phases.length - 1 && /* @__PURE__ */ jsx("div", { className: "flex items-center px-1 pt-8", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-spark-300 shrink-0" }) })
      ] }, i);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:hidden space-y-4", children: phases.map((p, i) => {
      const Icon = p.icon;
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(AnimatedSection, { direction: "up", delay: i * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center font-bold text-sm shrink-0", children: p.num }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-spark-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-spark-600" }) }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-spark-50 border border-spark-200 text-[11px] font-semibold text-spark-700", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-2.5 w-2.5 text-spark-600" }),
              p.timeline
            ] })
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "text-body font-bold text-gray-900 mb-2", children: p.title }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 mb-3", children: p.tasks.map((t, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-1.5 text-sl text-gray-600", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-spark-500 mt-0.5 shrink-0" }),
            t
          ] }, j)) }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-100 pt-2 space-y-0.5", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-gray-500", children: [
              "Output: ",
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-medium", children: p.output })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-gray-500", children: [
              "Your time: ",
              /* @__PURE__ */ jsx("span", { className: "text-spark-600 font-semibold", children: p.yourTime })
            ] })
          ] })
        ] }) }),
        i < phases.length - 1 && /* @__PURE__ */ jsx("div", { className: "flex justify-center py-1", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-spark-300 rotate-90" }) })
      ] }, i);
    }) })
  ] }) });
}
const bentoTestimonials = [
  {
    quote: "We found $1.2M in hidden pipeline within the first week of the audit. Deals that had been sitting in 'closed-lost' for 18 months were actually still active  our reps just stopped tracking them. That discovery alone paid for five years of service.",
    name: "Rachel Morrison",
    title: "VP of Sales",
    company: "SaaS Company, $20M ARR",
    metric: "$1.2M pipeline found",
    featured: true
  },
  {
    quote: "Our data was so bad that marketing couldn't trust a single list. After the cleanup, our email deliverability jumped 40% and we finally stopped sending to bounced addresses. Clean data is the foundation everything else is built on.",
    name: "Kevin Tran",
    title: "Revenue Operations Manager",
    company: "B2B SaaS, $12M ARR",
    metric: "40% deliverability boost",
    featured: false
  },
  {
    quote: "Forecasting went from 'let me check my spreadsheet' to 'here's the real number' in two weeks. Our board meetings are completely different now  we actually trust the data we're presenting.",
    name: "Priya Sharma",
    title: "CEO",
    company: "Fintech Startup, Series A",
    metric: "87% forecast accuracy",
    featured: false
  },
  {
    quote: "New reps used to take 6 weeks to get productive. Now they're closing deals in 2.5 weeks because the CRM actually guides them through the process instead of being a blank form they have to figure out.",
    name: "Tom Henderson",
    title: "Sales Director",
    company: "Enterprise SaaS, 45 reps",
    metric: "60% faster ramp",
    featured: false
  },
  {
    quote: "We were budgeting $95K for a RevOps hire. Instead, we got a full team that started delivering in 14 days  no 6-month ramp, no benefits, no single point of failure. Better results at a third of the cost.",
    name: "Jennifer Park",
    title: "COO",
    company: "Healthcare Tech, Series B",
    metric: "1/3 cost of hiring",
    featured: false
  }
];
function TestimonialsSection$1() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % bentoTestimonials.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, []);
  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % bentoTestimonials.length);
  };
  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + bentoTestimonials.length) % bentoTestimonials.length);
  };
  const t = bentoTestimonials[current];
  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 })
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsx(
      DualHeading,
      {
        before: "Teams That Went From Chaos to",
        accent: "Clarity",
        className: "text-h2 sm:text-h1 text-gray-900 mb-4"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goPrev,
          className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors",
          "aria-label": "Previous testimonial",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5 text-gray-600" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goNext,
          className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors",
          "aria-label": "Next testimonial",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-gray-600" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", custom: direction, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          custom: direction,
          variants: slideVariants,
          initial: "enter",
          animate: "center",
          exit: "exit",
          transition: { duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] },
          className: "p-8 sm:p-10 rounded-2xl border border-gray-100 bg-white shadow-sm",
          children: [
            /* @__PURE__ */ jsx(Quote, { className: "h-10 w-10 text-spark-300 mb-5" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sub sm:text-h3 text-gray-700 italic mb-6", children: [
              "“",
              t.quote,
              "”"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-4", children: t.metric && /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-spark-50 border border-spark-200", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "h-3.5 w-3.5 text-spark-600" }),
              /* @__PURE__ */ jsx("span", { className: "text-sl font-semibold text-spark-700", children: t.metric })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "mt-5 pt-5 border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-spark-100 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-sl font-bold text-spark-700", children: t.name.split(" ").map((n) => n[0]).join("") }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm-body font-semibold text-gray-900", children: t.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-sl text-gray-500", children: [
                  t.title,
                  " · ",
                  t.company
                ] })
              ] })
            ] }) })
          ]
        },
        current
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 mt-6", children: bentoTestimonials.map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setDirection(i > current ? 1 : -1);
            setCurrent(i);
          },
          className: `h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-spark-500" : "w-2 bg-gray-300 hover:bg-gray-400"}`,
          "aria-label": `Go to testimonial ${i + 1}`
        },
        i
      )) })
    ] })
  ] }) });
}
const whyUs = [
  {
    icon: Zap,
    title: "Speed Over Slides",
    description: "No 3-month consulting engagements. We deliver a fully optimized CRM in 14 days. Your team sees results immediately, not after endless strategy sessions."
  },
  {
    icon: Shield,
    title: "Ongoing, Not One-Off",
    description: "Most consultants deliver a PDF and disappear. We stay. Monthly hygiene reviews, quarterly optimization, and priority support keep your CRM clean forever."
  },
  {
    icon: DollarSign,
    title: "Fraction of Hiring Cost",
    description: "A RevOps hire costs $78-110K/year plus benefits. We deliver more value at a third of the cost, with zero ramp-up time and zero risk."
  },
  {
    icon: CheckCircle,
    title: "Revenue-Focused, Not Feature-Focused",
    description: "We don't optimize for screenshots. Every workflow, dashboard, and process we build is designed to help your team close more deals, faster."
  }
];
function WhyChooseUsSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsx(
      DualHeading,
      {
        before: "Not Just CRM Consultants. We Specialize in",
        accent: "Revenue Operations.",
        className: "text-h2 sm:text-h1 text-gray-900 mb-4"
      }
    ) }),
    /* @__PURE__ */ jsx(StaggerContainer, { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: whyUs.map((w, i) => {
      const Icon = w.icon;
      return /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "h-full p-6 rounded-xl bg-white border border-gray-100 shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-spark-50 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-spark-600" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900 mb-2", children: w.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-600", children: w.description })
      ] }) }, i);
    }) })
  ] }) });
}
const faqItems = [
  {
    question: "How is this different from hiring a HubSpot consultant?",
    answer: "Traditional consultants deliver a report and leave. We deliver a fully operational CRM in 14 days and stay to maintain it. We're a dedicated RevOps team at a fraction of the cost  ongoing optimization, not a one-time project."
  },
  {
    question: "What exactly happens in the 14-day optimization?",
    answer: "We audit your entire HubSpot instance, clean your data (duplicates, invalid emails, missing fields), build automated workflows, create custom dashboards for every team, and train your team on the new processes. You get a fully operational CRM, not a PDF."
  },
  {
    question: "How much of my team's time is required?",
    answer: "Minimal. We need about 3 hours in week one for interviews and access, and 4 hours in week two for training. Most of the heavy lifting is done behind the scenes by our team."
  },
  {
    question: "What if we're not on HubSpot Enterprise?",
    answer: "We work with all HubSpot tiers  Starter, Professional, and Enterprise. Many teams are overpaying for features they don't use or underutilizing the tier they have. We'll optimize whatever you have."
  },
  {
    question: "Do you replace our existing CRM admin or RevOps hire?",
    answer: "We complement or replace. Many teams use us instead of hiring a full-time RevOps person (saving $78-110K/year). Others use us alongside their existing team to accelerate results. We're flexible."
  },
  {
    question: "What does 'ongoing maintenance' include?",
    answer: "Monthly data hygiene reviews, quarterly optimization sprints, priority support for issues and new feature setup, workflow monitoring, and proactive recommendations. Your CRM never decays again."
  },
  {
    question: "Can we cancel anytime?",
    answer: "Yes. No long-term contracts. We earn your business every month. Most clients stay because the ROI is obvious, but you're never locked in."
  },
  {
    question: "How do you find hidden pipeline in our CRM?",
    answer: "During our audit phase, we systematically identify stale deals that should be re-engaged, contacts with incomplete data that represent warm opportunities, and workflow gaps causing leads to fall through the cracks. Most clients discover $500K-$2M in pipeline they didn't know existed."
  }
];
function FaqSection() {
  const col1 = faqItems.slice(0, 4);
  const col2 = faqItems.slice(4, 8);
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-14", children: /* @__PURE__ */ jsx("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: "Frequently Asked Questions" }) }),
    /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-gray-200 bg-white p-6 sm:p-8", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: col1.map((item, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `faq-${i}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-sm-body sm:text-body font-semibold text-gray-900 hover:no-underline", children: item.question }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-sm-body text-gray-600", children: item.answer })
      ] }, i)) }) }),
      /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-gray-200 bg-white p-6 sm:p-8", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: col2.map((item, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `faq-${i + 4}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-sm-body sm:text-body font-semibold text-gray-900 hover:no-underline", children: item.question }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-sm-body text-gray-600", children: item.answer })
      ] }, i + 4)) }) })
    ] }) })
  ] }) });
}
function FinalCtaSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-spark-800", children: /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-white mb-4", children: [
      "Ready to Turn Your CRM Into a",
      " ",
      /* @__PURE__ */ jsx("span", { children: "Revenue Engine?" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-body text-spark-200 mb-8", children: "Stop paying for a CRM you barely use. Get a free audit and see exactly how much revenue you're leaving on the table." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          onClick: () => {
            const el = document.getElementById("lead-form");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          },
          className: "bg-white text-spark-800 hover:bg-spark-50 hover:text-spark-800 font-semibold px-8 h-12 rounded-lg text-base transition-all hover:shadow-lg",
          children: [
            "Get Your HubSpot Audit",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          className: "bg-void hover:bg-surface-dark text-white hover:text-white font-semibold px-8 h-12 rounded-lg text-base border-0 transition-all",
          children: [
            /* @__PURE__ */ jsx(Phone, { className: "mr-2 h-4 w-4" }),
            "Schedule a Call"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm-body text-spark-300", children: "No contracts. No spam. Cancel anytime." })
  ] }) }) }) });
}
function CrmPage() {
  return /* @__PURE__ */ jsxs(
    PageShell,
    {
      navItems: [
        { label: "Problems", href: "#problems" },
        { label: "Solution", href: "#solution" },
        { label: "Results", href: "#results" },
        { label: "Process", href: "#process" }
      ],
      ctaText: "See How It Works",
      ctaTarget: "#lead-form",
      meta: {
        title: "HubSpot CRM Optimization & Cleanup | Get Levrg",
        description: "HubSpot CRM optimization for B2B revenue teams. Pipeline cleanup, sales automation, and revenue attribution in 14 days. Find $500K–$2M in hidden pipeline revenue.",
        keywords: "HubSpot CRM optimization, CRM data cleanup, HubSpot setup, revenue operations, CRM automation, sales pipeline optimization, HubSpot consultant",
        ogTitle: "HubSpot CRM Optimization | Get Levrg",
        ogDescription: "Transform your HubSpot from a contact database into a revenue engine in 14 days. Cleanup, automation, and reporting built for B2B teams."
      },
      children: [
        /* @__PURE__ */ jsx(HeroSection, {}),
        /* @__PURE__ */ jsx(TrustedByMarquee, {}),
        /* @__PURE__ */ jsx(ProblemSection, {}),
        /* @__PURE__ */ jsx(SolutionSection, {}),
        /* @__PURE__ */ jsx(SEOSection, {}),
        /* @__PURE__ */ jsx(ToolsWeUseSection, {}),
        /* @__PURE__ */ jsx(AuditFindingsSection, {}),
        /* @__PURE__ */ jsx(WorkSampleBentoGrid, {}),
        /* @__PURE__ */ jsx(RoiSection, {}),
        /* @__PURE__ */ jsx(ComparisonSection, {}),
        /* @__PURE__ */ jsx(HowItWorksSection, {}),
        /* @__PURE__ */ jsx(TestimonialsSection$1, {}),
        /* @__PURE__ */ jsx(WhyChooseUsSection, {}),
        /* @__PURE__ */ jsx(FaqSection, {}),
        /* @__PURE__ */ jsx(FinalCtaSection, {})
      ]
    }
  );
}
const serviceConfigs = {
  "video-editing": {
    label: "Video Editing",
    icon: Video,
    videoTitle: "Watch the 90-Second Overview",
    videoSubtitle: "Video Editing  What Happens Next",
    rightColumnTitle: "What Happens on the Call",
    rightColumnDescription: "This isn't a sales pitch. It's a 15-minute discovery conversation where we learn about your video needs and build a custom plan around them.",
    rightColumnBullets: [
      "We'll assess your current video workflow and identify bottlenecks",
      "You'll get a custom team plan tailored to your content goals",
      "We'll share honest pricing  no surprises, no hidden fees",
      "Your dedicated video team can be live within 14 days of sign-off"
    ],
    testimonials: [
      {
        quote: "We added video as a service line without hiring a single editor. Our margins went up 40% on video projects in the first quarter.",
        name: "Miles Kaiburn",
        initials: "MK",
        title: "CEO",
        company: "Old Town Media"
      },
      {
        quote: "The quality is indistinguishable from our in-house team. Our clients never know the difference, and our margins have never been better.",
        name: "Brendan Taylor",
        initials: "BT",
        title: "CEO",
        company: "Maverick VFX"
      },
      {
        quote: "Onboarding took 3 days, not 3 months. Our first deliverables were client-ready by the end of week one.",
        name: "David Park",
        initials: "DP",
        title: "Founder",
        company: "Northstar Digital"
      }
    ]
  },
  "social-media": {
    label: "Social Media",
    icon: Share2,
    videoTitle: "Watch the 90-Second Overview",
    videoSubtitle: "Social Media  What Happens Next",
    rightColumnTitle: "What Happens on the Call",
    rightColumnDescription: "This isn't a sales pitch. It's a 15-minute discovery conversation where we learn about your firm's visibility goals and build a content strategy around them.",
    rightColumnBullets: [
      "We'll assess your current social media presence and gaps",
      "You'll get a custom content calendar tailored to your firm",
      "We'll share honest pricing  no surprises, no hidden fees",
      "Your first posts can go live within 14 days of sign-off"
    ],
    testimonials: [
      {
        quote: "Our LinkedIn presence went from nonexistent to the most visible firm in our market. Not one partner had to write a post.",
        name: "Sarah Thompson",
        initials: "ST",
        title: "Partner",
        company: "Thompson & Associates CPAs"
      },
      {
        quote: "We tried having one partner post occasionally. Never happened. Now we have consistent content that actually sounds like us.",
        name: "Michael Chen",
        initials: "MC",
        title: "Managing Partner",
        company: "Chen Employment Law"
      },
      {
        quote: "Financial advisory is relationship-driven. Their team understands our compliance requirements and creates posts that build trust without crossing lines.",
        name: "David Rodriguez",
        initials: "DR",
        title: "Wealth Advisor",
        company: "Rodriguez Financial Group"
      }
    ]
  },
  crm: {
    label: "CRM Optimization",
    icon: Database,
    videoTitle: "Watch the 90-Second Overview",
    videoSubtitle: "CRM Optimization  What Happens Next",
    rightColumnTitle: "What Happens on the Call",
    rightColumnDescription: "This isn't a sales pitch. It's a 15-minute discovery conversation where we learn about your CRM challenges and build a custom optimization plan.",
    rightColumnBullets: [
      "We'll assess your current HubSpot setup and identify what's broken",
      "You'll get a custom audit plan with prioritized fixes",
      "We'll share honest pricing  no surprises, no hidden fees",
      "Your CRM can go from chaos to fully operational within 14 days"
    ],
    testimonials: [
      {
        quote: "We thought we needed to upgrade our HubSpot tier. Turns out, we just needed someone to actually set it up properly. We went from 20% utilization to using 90% of features.",
        name: "VP Revenue Operations",
        initials: "VP",
        title: "VP RevOps",
        company: "Series A SaaS ($15M ARR)"
      },
      {
        quote: "10% total employee costs cut. Our CRM finally drives revenue instead of just storing data.",
        name: "Steven Riskey",
        initials: "SR",
        title: "CEO",
        company: "Strop Insights"
      },
      {
        quote: "The audit found $840K in opportunities we didn't know existed. That alone paid for a year of service in week one.",
        name: "Operations Lead",
        initials: "OL",
        title: "Operations Lead",
        company: "B2B SaaS ($8M ARR)"
      }
    ]
  }
};
function HubSpotCalendar() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (typeof window !== "undefined" && window.hsMeetingsEmbed) {
        try {
          window.hsMeetingsEmbed();
        } catch {
        }
      }
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "meetings-iframe-container w-full min-h-[600px] sm:min-h-[650px]",
      "data-src": "https://meetings.hubspot.com/jamie-shanks/book-a-discovery-call-with-get-levrg?embed=true"
    }
  );
}
function getServiceFromHash() {
  if (typeof window === "undefined") return "crm";
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.split("?")[1] || "");
  return params.get("service") || "crm";
}
function ThankYouBanner({ config }) {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-white border-b border-gray-100", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none select-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-[400px] h-[400px] bg-spark-50/50 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/2" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-[300px] h-[300px] bg-spark-50/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/2" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spark-50 border border-spark-200 mb-6",
          children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-spark-600" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm-body font-medium text-spark-700", children: "Request Received" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: "text-h1 sm:text-display text-gray-900 mb-4",
          children: [
            "Thanks! We'll Be",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-[#51B027]", children: [
              /* @__PURE__ */ jsx("br", {}),
              "In Touch Shortly"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.p,
        {
          initial: { opacity: 0, y: 15 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          className: "text-body sm:text-sub text-gray-500 leading-relaxed",
          children: [
            "We received your ",
            config.label.toLowerCase(),
            " request and will get back to you soon. In the meantime, book a convenient time below to receive your personalized call."
          ]
        }
      )
    ] }) })
  ] });
}
function VideoEmbed({
  config,
  ServiceIcon
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "jj7srGIWk08";
  return /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-video bg-black", children: [
    /* @__PURE__ */ jsx(
      "iframe",
      {
        src: isPlaying ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` : `https://www.youtube.com/embed/${videoId}?start=33&autoplay=0&rel=0&modestbranding=1`,
        className: "w-full h-full",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        title: "Get Levrg Overview"
      },
      isPlaying ? "playing" : "preview"
    ),
    !isPlaying && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "absolute inset-0 flex flex-col items-center justify-center gap-3 cursor-pointer bg-black",
        onClick: () => setIsPlaying(true),
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-spark-600 flex items-center justify-center shadow-lg shadow-spark-600/30 hover:bg-spark-800 transition-colors group", children: /* @__PURE__ */ jsx(Play, { className: "h-6 w-6 sm:h-7 sm:w-7 text-white ml-0.5 group-hover:scale-110 transition-transform" }) }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-body font-bold text-white drop-shadow mb-0.5", children: config.videoTitle }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm-body text-white/80 flex items-center justify-center gap-1.5 drop-shadow", children: [
              /* @__PURE__ */ jsx(ServiceIcon, { className: "h-3.5 w-3.5" }),
              config.videoSubtitle
            ] })
          ] })
        ]
      }
    )
  ] }) });
}
function CalendarAndVideoSection({
  config,
  ServiceIcon
}) {
  return /* @__PURE__ */ jsx("section", { className: "relative bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.1 },
        className: "lg:col-span-3",
        children: /* @__PURE__ */ jsxs("div", { id: "calendar", className: "rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "px-5 py-4 border-b border-gray-100 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-spark-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(CalendarDays, { className: "h-4.5 w-4.5 text-spark-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900", children: "Book a Discovery Call" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-500", children: "Pick a time that works for you" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-3", children: [
              /* @__PURE__ */ jsxs("span", { className: "hidden sm:flex items-center gap-1.5 text-sl text-gray-400", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
                "15 min"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "hidden sm:flex items-center gap-1.5 text-sl text-gray-400", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3" }),
                "No commitment"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsx(HubSpotCalendar, {}) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2 },
        className: "lg:col-span-2 space-y-6",
        children: [
          /* @__PURE__ */ jsx(VideoEmbed, { config, ServiceIcon }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sub font-bold text-gray-900 mb-3", children: config.rightColumnTitle }),
            /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-600 mb-5 leading-relaxed", children: config.rightColumnDescription }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: config.rightColumnBullets.map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "mt-1 h-5 w-5 rounded-full bg-spark-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-spark-600" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm-body text-gray-600", children: bullet })
            ] }, i)) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-x-5 gap-y-3 pt-5 mt-5 border-t border-gray-100", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex flex-col items-center gap-1 text-sl text-gray-400", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
                "15 min call"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex flex-col items-center gap-1 text-sl text-gray-400", children: [
                /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3" }),
                "Breakdown in 24 hrs"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex flex-col items-center gap-1 text-sl text-gray-400", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3" }),
                "No commitment"
              ] })
            ] })
          ] })
        ]
      }
    )
  ] }) }) });
}
function TestimonialsSection({ config }) {
  const testimonials = config.testimonials;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5e3);
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
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 })
  };
  return /* @__PURE__ */ jsx("section", { className: "py-14 sm:py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-4", children: /* @__PURE__ */ jsx("p", { className: "text-caption text-spark-600 mb-3", children: "Why operators trust us" }) }),
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mb-12", children: /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900", children: [
      "What Our ",
      /* @__PURE__ */ jsx("span", { className: "text-[#51B027]", children: "Partners" }),
      " Say"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goPrev,
          className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors",
          "aria-label": "Previous testimonial",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5 text-gray-600" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goNext,
          className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors",
          "aria-label": "Next testimonial",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-gray-600" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", custom: direction, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          custom: direction,
          variants: slideVariants,
          initial: "enter",
          animate: "center",
          exit: "exit",
          transition: { duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] },
          className: "p-8 sm:p-10 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm",
          children: [
            /* @__PURE__ */ jsx(Quote, { className: "h-10 w-10 text-spark-300 mb-5" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sub sm:text-h3 text-gray-700 italic mb-6", children: [
              "“",
              t.quote,
              "”"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-0.5 mb-5", children: [...Array(5)].map((_, j) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-spark-500 fill-spark-500" }, j)) }),
            /* @__PURE__ */ jsx("div", { className: "pt-5 border-t border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-spark-100 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-sl font-bold text-spark-700", children: t.initials }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm-body font-semibold text-gray-900", children: t.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-sl text-gray-500", children: [
                  t.title,
                  " · ",
                  t.company
                ] })
              ] })
            ] }) })
          ]
        },
        current
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 mt-6", children: testimonials.map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setDirection(i > current ? 1 : -1);
            setCurrent(i);
          },
          className: `h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-spark-500" : "w-2 bg-gray-300 hover:bg-gray-400"}`,
          "aria-label": `Go to testimonial ${i + 1}`
        },
        i
      )) })
    ] })
  ] }) });
}
function FinalCTASection({
  config,
  ServiceIcon
}) {
  const scrollToCalendar = () => {
    const el = document.querySelector(".meetings-iframe-container");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return /* @__PURE__ */ jsx("section", { className: "py-14 sm:py-20 bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl border border-spark-200 bg-white shadow-sm overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "h-1 bg-gradient-to-r from-spark-400 via-spark-500 to-spark-600" }),
    /* @__PURE__ */ jsxs("div", { className: "px-6 sm:px-10 py-10 sm:py-14 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 rounded-full bg-spark-50 mb-6", children: /* @__PURE__ */ jsx(ServiceIcon, { className: "h-6 w-6 text-spark-600" }) }),
      /* @__PURE__ */ jsxs("h2", { className: "text-h2 sm:text-h1 text-gray-900 mb-4", children: [
        "Ready to Get Your",
        " ",
        /* @__PURE__ */ jsxs("span", { className: "text-[#51B027]", children: [
          config.label,
          " Breakdown?"
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-body text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed", children: "Your custom breakdown is just one call away. Book a 15-minute discovery call and we'll deliver something tailored  not a template." }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          onClick: scrollToCalendar,
          className: "bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-12 px-8 rounded-lg text-base transition-all hover:shadow-md hover:shadow-spark-600/20",
          children: [
            /* @__PURE__ */ jsx(CalendarDays, { className: "mr-2 h-4 w-4" }),
            "Book Your Call Now",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-sm-body text-gray-400 mt-4", children: "15 minutes · No pitch deck · No commitment" })
    ] })
  ] }) }) }) });
}
function ThankYouPageContent() {
  const [serviceType] = useState(() => getServiceFromHash());
  const config = serviceConfigs[serviceType] || serviceConfigs.crm;
  const ServiceIcon = config.icon;
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(ThankYouBanner, { config }),
    /* @__PURE__ */ jsx(CalendarAndVideoSection, { config, ServiceIcon }),
    /* @__PURE__ */ jsx(ServiceCapabilities, {}),
    /* @__PURE__ */ jsx(TestimonialsSection, { config }),
    /* @__PURE__ */ jsx(FinalCTASection, { config, ServiceIcon })
  ] });
}
function ThankYouPage() {
  return /* @__PURE__ */ jsx(
    PageShell,
    {
      ctaText: "Book My Call",
      ctaTarget: "#calendar",
      showCapabilities: false,
      meta: {
        title: "Thank You — Book Your Discovery Call | Get Levrg",
        description: "Book your free 15-minute discovery call. We'll build a custom plan for your video editing, social media, or CRM needs — no pitch deck, no commitment.",
        ogTitle: "Book Your Discovery Call | Get Levrg",
        ogDescription: "15 minutes. Custom plan. No pitch deck. No commitment."
      },
      children: /* @__PURE__ */ jsx(ThankYouPageContent, {})
    }
  );
}
function AppRoutes() {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/video", element: /* @__PURE__ */ jsx(VideoPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/social", element: /* @__PURE__ */ jsx(SocialPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/crm", element: /* @__PURE__ */ jsx(CrmPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/thank-you", element: /* @__PURE__ */ jsx(ThankYouPage, {}) })
  ] });
}
function render(url) {
  return renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(AppRoutes, {}) })
  );
}
export {
  render
};
