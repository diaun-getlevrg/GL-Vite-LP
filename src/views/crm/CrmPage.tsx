import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  AlertOctagon,
  Settings,
  RefreshCw,
  AlertTriangle,
  Search,
  Brush,
  BarChart3,
  BookOpen,
  Shield,
  Zap,
  DollarSign,
  Check,
  X,
  ArrowRight,
  Activity,
  Database,
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  Layers,
  Phone,
  Mail,
  Building2,
  User,
  Lock,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  RotateCcw,
  Users,
  Share2,
  Globe,
  Send,
  Megaphone,
  Target,
  Rocket,
  HeartHandshake,
  ArrowUpRight,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// ─── Inline AnimatedSection Components ───

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  stagger?: number;
}

function AnimatedSection({
  children, className = "", delay = 0, direction = "up", once = true, stagger = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const directionMap = { up: { y: 40, x: 0 }, down: { y: -40, x: 0 }, left: { x: 40, y: 0 }, right: { x: -40, y: 0 }, none: { x: 0, y: 0 } };
  const offset = directionMap[direction];
  return (
    <motion.div ref={ref} initial={{ opacity: 0, ...offset }} animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }} transition={{ duration: 0.6, delay: delay + stagger, ease: [0.21, 0.47, 0.32, 0.98] }} className={className}>
      {children}
    </motion.div>
  );
}

function StaggerContainer({ children, className = "", staggerDelay = 0.1 }: { children: React.ReactNode; className?: string; staggerDelay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }} className={className}>
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } } }} className={className}>
      {children}
    </motion.div>
  );
}

function CountUp({ target, prefix = "", suffix = "", className = "" }: { target: number; prefix?: string; suffix?: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0; const end = target; const duration = 2000; const stepTime = 20; const steps = duration / stepTime; const increment = end / steps;
    const timer = setInterval(() => { start += increment; if (start >= end) { setCount(end); clearInterval(timer); } else { setCount(Math.floor(start)); } }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return <span ref={ref} className={className}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

function FloatingElement({ children, className = "", amplitude = 10, duration = 3 }: { children: React.ReactNode; className?: string; amplitude?: number; duration?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// ─── Inline TrustedByMarquee Component ───
function TrustedByMarquee() {
  const navigate = useNavigate();
  const trustedLogos = [
    { src: "/logos/b2b/Airtera.webp", alt: "Airtera" }, { src: "/logos/b2b/Apiphany.webp", alt: "Apiphany" }, { src: "/logos/b2b/Atlus.webp", alt: "Atlus" }, { src: "/logos/b2b/BLDG.webp", alt: "BLDG" },
    { src: "/logos/b2b/Bossey.webp", alt: "Bossey" }, { src: "/logos/b2b/CaptainJV.webp", alt: "Captain JV" }, { src: "/logos/b2b/Finboa.webp", alt: "Finboa" }, { src: "/logos/b2b/Flint.webp", alt: "Flint" },
    { src: "/logos/b2b/Force-Brands.webp", alt: "Force Brands" }, { src: "/logos/b2b/Genesis.webp", alt: "Genesis" }, { src: "/logos/b2b/Growth.webp", alt: "Growth" }, { src: "/logos/b2b/Guideline.webp", alt: "Guideline" },
    { src: "/logos/b2b/Hostar.webp", alt: "Hostar" }, { src: "/logos/b2b/HPBS.webp", alt: "HPBS" }, { src: "/logos/b2b/HubSync.webp", alt: "HubSync" }, { src: "/logos/b2b/Ixopay.webp", alt: "Ixopay" },
    { src: "/logos/b2b/Jama-Software.png", alt: "Jama Software" }, { src: "/logos/b2b/Kairoi.webp", alt: "Kairoi" }, { src: "/logos/b2b/Legacy-Biome.webp", alt: "Legacy Biome" }, { src: "/logos/b2b/Message-Gears.webp", alt: "Message Gears" },
    { src: "/logos/b2b/Meta-Integration.webp", alt: "Meta Integration" }, { src: "/logos/b2b/Minga.webp", alt: "Minga" }, { src: "/logos/b2b/Novel-Biome.webp", alt: "Novel Biome" }, { src: "/logos/b2b/Oleria.webp", alt: "Oleria" },
    { src: "/logos/b2b/OTM.webp", alt: "OTM" }, { src: "/logos/b2b/Paragon.webp", alt: "Paragon" }, { src: "/logos/b2b/Sales.webp", alt: "Sales" }, { src: "/logos/b2b/Stealth.webp", alt: "Stealth" },
    { src: "/logos/b2b/Three-Rings.webp", alt: "Three Rings" }, { src: "/logos/b2b/Tiliter.webp", alt: "Tiliter" }, { src: "/logos/b2b/TSIMAGINE.webp", alt: "TSIMAGINE" }, { src: "/logos/b2b/Usherwood.webp", alt: "Usherwood" },
    { src: "/logos/b2b/Vortex.webp", alt: "Vortex" }, { src: "/logos/b2b/Weinberg-Gonser-LLP.webp", alt: "Weinberg Gonser LLP" }, { src: "/logos/b2b/ZAM.webp", alt: "ZAM" }, { src: "/logos/b2b/Zoomer.webp", alt: "Zoomer" },
  ];
  const halfLength = Math.ceil(trustedLogos.length / 2);
  const firstRow = trustedLogos.slice(0, halfLength);
  const secondRow = trustedLogos.slice(halfLength);
  return (
    <section id="clients" className="py-10 sm:py-14 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8"><p className="text-caption text-gray-400 tracking-wider">Trusted by {trustedLogos.length}+ B2B companies generating $50M+ in revenue</p></AnimatedSection>
      </div>
      <div className="relative w-full overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="flex w-max animate-marquee-left will-change-transform">
          {[...firstRow, ...firstRow].map((logo, i) => (
            <div key={`row1-${logo.alt}-${i}`} className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center h-14 sm:h-16 w-[140px]">
              <img src={logo.src} alt={`${logo.alt} company logo`} width={140} height={56} className="h-10 sm:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full overflow-x-hidden mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="flex w-max animate-marquee-right will-change-transform">
          {[...secondRow, ...secondRow].map((logo, i) => (
            <div key={`row2-${logo.alt}-${i}`} className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center h-14 sm:h-16 w-[140px]">
              <img src={logo.src} alt={`${logo.alt} company logo`} width={140} height={56} className="h-10 sm:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Inline Header Component ───
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
    if (href.startsWith("#")) { const el = document.getElementById(href.slice(1)); if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); } }
    setMobileOpen(false);
  };
  const navItems = [
    { label: "Problems", href: "#problems" },
    { label: "Solution", href: "#solution" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
  ];
  const ctaText = "See How It Works";
  const ctaTarget = "#lead-form";
  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm" : "bg-white/60 backdrop-blur-md"}`}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <a href="#/" className="flex items-center group shrink-0" onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}> */}
            <img src="/logo.png" alt="Get Levrg" width={120} height={32} />
          {/* </a> */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => scrollToSection(item.href)} className="px-3 py-1.5 text-sm-body font-medium text-gray-500 hover:text-spark-800 rounded-md hover:bg-spark-50/60 transition-colors">{item.label}</button>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <Button variant="ghost" onClick={() => scrollToSection(ctaTarget)} className="bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-9 px-5 rounded-lg transition-all hover:shadow-md hover:shadow-spark-600/20">{ctaText}<ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-600 hover:text-gray-900" aria-label="Toggle menu">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>
      <AnimatePresence>{mobileOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100">
          <div className="px-4 py-3 space-y-0.5">
            {navItems.map((item) => (<button key={item.href} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-3 py-2.5 text-sm-body font-medium text-gray-600 hover:text-spark-800 hover:bg-spark-50/60 rounded-lg">{item.label}</button>))}
            <div className="pt-2 px-3"><Button variant="ghost" onClick={() => scrollToSection(ctaTarget)} className="w-full bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold py-2.5 rounded-lg">{ctaText}<ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Button></div>
          </div>
        </motion.div>
      )}</AnimatePresence>
    </motion.header>
  );
}

// ─── Inline Footer Component ───
function Footer() {
  return (
    <footer className="bg-void">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <img src="/Light Logo.png" alt="Get Levrg" width={120} height={32} />
          <div className="flex items-center gap-3 text-caption text-gray-500"><span>&copy; 2026 Get Levrg. All rights reserved.</span></div>
        </div>
      </div>
    </footer>
  );
}

// ─── Inline ToolsWeUseSection (CRM) ───
function ToolsWeUseSection() {
  const tools = [
    { src: "/logos/applogos/Hubspot.png", alt: "HubSpot" }, { src: "/logos/applogos/Hubspot-CMS.png", alt: "HubSpot CMS" },
    { src: "/logos/applogos/Salesforce.png", alt: "Salesforce" }, { src: "/logos/applogos/Sales-Navigator.png", alt: "Sales Navigator" },
    { src: "/logos/applogos/Apollo.png", alt: "Apollo" }, { src: "/logos/applogos/ZoomInfo.png", alt: "ZoomInfo" },
    { src: "/logos/applogos/Clay.png", alt: "Clay" }, { src: "/logos/applogos/Instantly.png", alt: "Instantly" },
    { src: "/logos/applogos/Expandi.png", alt: "Expandi" }, { src: "/logos/applogos/Heyreach.png", alt: "HeyReach" },
    { src: "/logos/applogos/6sense.png", alt: "6sense" }, { src: "/logos/applogos/Calendly.png", alt: "Calendly" },
    { src: "/logos/applogos/Zapier.png", alt: "Zapier" }, { src: "/logos/applogos/Slack.webp", alt: "Slack" },
    { src: "/logos/applogos/Google-Ads.png", alt: "Google Ads" }, { src: "/logos/applogos/Monday.png", alt: "Monday" },
    { src: "/logos/applogos/Microsoft-Dynamic.png", alt: "Microsoft Dynamics" }, { src: "/logos/applogos/Zoho.png", alt: "Zoho" },
  ];
  const content = {
    title: "The Tools We Use to Optimize Your CRM",
    description: "We leverage industry-leading platforms to clean your data, automate workflows, and build dashboards that drive revenue.",
    bullets: [
      "HubSpot-certified optimization team",
      "Enterprise-grade data cleanup tools",
      "Automated workflow & sequence builders",
      "Custom reporting & analytics platforms",
    ],
  };
  return (
    <section className="py-16 sm:py-24 bg-spark-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">{content.title}</h2>
              <p className="text-body text-gray-600 mb-6">{content.description}</p>
              <ul className="space-y-3">
                {content.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#307A0F] mt-0.5 shrink-0" />
                    <span className="text-sm-body text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-3">
            <div className="relative h-[420px] sm:h-[500px] overflow-hidden rounded-2xl bg-white border border-gray-200 p-6">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-spark-50 to-transparent z-10 pointer-events-none rounded-t-2xl" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-spark-50 to-transparent z-10 pointer-events-none rounded-b-2xl" />
              <div className="animate-marquee-up will-change-transform">
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
                    <div key={i} className="flex items-center justify-center rounded-xl bg-white border border-gray-100 p-4 sm:p-5 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 group">
                      <img src={tool.src} alt={tool.alt} width={140} height={56} className="h-16 sm:h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Inline WorkSampleBentoGrid (CRM) ───
function WorkSampleBentoGrid() {
  const samples = [
    { src: "/images/work-samples/crm-work-1.png", alt: "CRM Dashboard Optimization", label: "Dashboard Optimization" },
    { src: "/images/work-samples/crm-work-2.png", alt: "Sales Pipeline Analytics", label: "Pipeline Analytics" },
    { src: "/images/work-samples/crm-work-3.png", alt: "Data Cleanup Workflow", label: "Data Cleanup Process" },
  ];
  const title = { before: "See Our CRM", accent: "Optimization Work", after: "" };
  const carouselItems = [...samples, ...samples, ...samples, ...samples];
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">{title.before} <span className="text-[#307A0F]">{title.accent}</span>{title.after ? ` ${title.after}` : ""}</h2>
          <p className="text-body text-gray-500 max-w-xl mx-auto">Real results from real clients. Here&apos;s a glimpse of what we deliver.</p>
        </AnimatedSection>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex w-max animate-marquee-left-slow will-change-transform">
          {[...carouselItems, ...carouselItems].map((sample, i) => (
            <div key={i} className="flex-shrink-0 mx-3 sm:mx-4 w-[320px] sm:w-[400px] lg:w-[480px] group">
              <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-[220px] sm:h-[260px] lg:h-[300px]">
                  <img src={sample.src} alt={sample.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-sm-body font-semibold text-gray-900">{sample.label}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Inline HeroFormIntro (CRM) ───
const INTRO_DURATION = 6000;

function CrmAnimation() {
  const pipelineStages = [
    { label: "Leads", count: 248, color: "bg-blue-400", pct: 100 },
    { label: "Qualified", count: 124, color: "bg-spark-400", pct: 50 },
    { label: "Proposal", count: 62, color: "bg-emerald-400", pct: 25 },
    { label: "Closed Won", count: 31, color: "bg-spark-600", pct: 12 },
  ];
  const metrics = [
    { icon: Database, label: "Duplicates Found", value: "1,247", delay: 0.3, accent: "bg-blue-50 border-blue-200", iconColor: "text-blue-500", valueColor: "text-blue-700" },
    { icon: BarChart3, label: "Pipeline Accuracy", value: "87%", delay: 0.6, accent: "bg-spark-50 border-spark-200", iconColor: "text-spark-600", valueColor: "text-[#307A0F]" },
    { icon: TrendingUp, label: "Revenue Recovered", value: "$840K", delay: 0.9, accent: "bg-emerald-50 border-emerald-200", iconColor: "text-emerald-500", valueColor: "text-emerald-700" },
    { icon: Users, label: "Deals Discovered", value: "47", delay: 1.2, accent: "bg-amber-50 border-amber-200", iconColor: "text-amber-500", valueColor: "text-amber-700" },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
      <div className="absolute inset-0 opacity-[0.03] bg-dot-pattern" />
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="relative flex items-center gap-2 mb-5">
        <div className="w-7 h-7 rounded-lg bg-spark-100 flex items-center justify-center"><Database className="h-3.5 w-3.5 text-spark-600" /></div>
        <span className="text-sm font-semibold text-gray-900 tracking-wide">HubSpot CRM Audit</span>
        <div className="ml-auto flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-spark-500 animate-pulse" /><span className="text-[11px] text-spark-600 font-medium">Live</span></div>
      </motion.div>
      <div className="relative space-y-2 mb-5">
        {pipelineStages.map((stage, i) => (
          <motion.div key={stage.label} initial={{ width: 0, opacity: 0 }} animate={{ width: "100%", opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 + i * 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <div className="flex items-center gap-2">
              <div className="relative flex-1 h-8 rounded-lg bg-gray-100 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${stage.pct}%` }} transition={{ duration: 1.2, delay: 0.3 + i * 0.4, ease: "easeOut" }} className={`absolute inset-y-0 left-0 ${stage.color} rounded-lg opacity-70`} />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-700 z-10">{stage.label}</span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.4 }} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 z-10">{stage.count}</motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <motion.div key={m.label} initial={{ opacity: 0, scale: 0.8, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.5, delay: m.delay + 1.2, type: "spring", stiffness: 200 }} className={`p-3 rounded-xl border ${m.accent}`}>
              <Icon className={`h-3.5 w-3.5 ${m.iconColor} mb-1.5`} />
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: m.delay + 1.6 }} className={`text-h3 font-bold ${m.valueColor} leading-none mb-0.5`}>{m.value}</motion.p>
              <p className="text-[11px] text-gray-500">{m.label}</p>
            </motion.div>
          );
        })}
      </div>
      <motion.div initial={{ x: "-100%" }} animate={{ x: "200%" }} transition={{ duration: 3, delay: 1, repeat: 1, ease: "linear" }} className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-spark-400 to-transparent" />
    </div>
  );
}

function HeroFormIntro({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [introKey, setIntroKey] = useState(0);
  useEffect(() => {
    if (!showIntro) return;
    const timer = setTimeout(() => { setShowIntro(false); }, INTRO_DURATION);
    return () => clearTimeout(timer);
  }, [showIntro, introKey]);
  const replayIntro = useCallback(() => { setShowIntro(true); setIntroKey((k) => k + 1); }, []);
  return (
    <div className="lg:col-span-2">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div key={`intro-${introKey}`} initial={{ opacity: 0, x: 40, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -30, scale: 0.97 }} transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} className="relative min-h-[480px] sm:min-h-[520px]">
            <CrmAnimation />
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0, x: 30, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} className="relative">
            {children}
            <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 300 }} onClick={replayIntro} className="absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-white border border-spark-300 flex items-center justify-center hover:bg-spark-600 hover:border-spark-500 transition-all duration-300 group shadow-md" title="Replay intro animation" aria-label="Replay intro animation">
              <RotateCcw className="h-3.5 w-3.5 text-spark-600 group-hover:text-white transition-colors" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page Content ───

/* ─── dual-tone heading helper ─── */
function DualHeading({
  before,
  accent,
  after,
  className = "",
}: {
  before: string;
  accent: string;
  after?: string;
  className?: string;
}) {
  return (
    <h2 className={className}>
      {before} <span className="text-[#51B027]">{accent}</span>
      {after ? ` ${after}` : ""}
    </h2>
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
  {
    id: 'creative-social',
    title: 'Creative Services',
    subtitle: 'Social Media & Content Marketing',
    icon: Megaphone,
    color: '#51B027',
    textColor: '#3A7D1A',
    bgColor: '#EEF7E9',
    deliverables: [
      'Branding guidelines design',
      'Content calendar creation & management',
      'Social post templates',
      'Text & copywriting (posts, captions)',
      'Static image & graphic design',
      'eBook & long-form asset design',
      'Blog writing & SEO content',
      'Newsletter creation & management',
      'Case studies & documentation',
      'Web banners & digital assets',
      'Digital advertising creative',
      'Visual playbooks & brand assets',
      'Content publishing & scheduling',
      'Reporting & engagement tracking',
    ],
    illustration: MarketingIllustration,
  },
  {
    id: 'video',
    title: 'Video Creation',
    subtitle: 'Production, editing, and distribution',
    icon: Video,
    color: '#1A6B5C',
    textColor: '#145A4E',
    bgColor: '#E6F5F0',
    deliverables: [
      'Short-form video editing',
      'Long-form video editing',
      'Podcast editing & production',
      'Sound effects & audio enhancement',
      'Thumbnail design',
      'Subtitle & caption creation',
      'Motion graphics & animation',
      'Promo videos',
      'Voiceover videos',
      'Explainer videos',
      'Product videos',
      'Video formatting & repurposing',
      'Platform optimization (LinkedIn, YouTube, etc.)',
      'Publishing & posting',
    ],
    illustration: VideoCapIllustration,
  },
  {
    id: 'website',
    title: 'Website Development',
    subtitle: 'Build, optimize, and maintain your web presence',
    icon: Globe,
    color: '#0EA5E9',
    textColor: '#076A9A',
    bgColor: '#E0F2FE',
    deliverables: [
      'Website wireframing & page layout design',
      'Page creation & landing pages',
      'Website content creation & updates',
      'Blog creation & optimization',
      'On-page SEO / AEO / GEO optimization',
      'Technical SEO',
      'CRO setup & optimization',
      'CRM / CMS integrations',
      'Dynamic personalization',
      'Plugin & theme updates',
      'Security monitoring & maintenance',
      'Hosting & performance management',
      'Backup & version control',
      'Custom development & integrations',
    ],
    illustration: WebsiteIllustration,
  },
  {
    id: 'gtm-crm',
    title: 'GTM Engineering',
    subtitle: 'Sales Data & CRM Optimization',
    icon: Target,
    color: '#E5A800',
    textColor: '#8A6500',
    bgColor: '#FEF9E7',
    deliverables: [
      'CRM setup & structure (pipelines, properties)',
      'CRM layout & customization',
      'Workflow automation',
      'Sales engagement workflows',
      'Lead & contact management',
      'Data enrichment (contacts & accounts)',
      'CRM cleansing & data hygiene',
      'Lead scoring',
      'Email logging & tracking',
      'Reporting & dashboards',
      'Pipeline management',
      'Meeting notes & activity tracking',
      'Integration support (tools, platforms)',
    ],
    illustration: CRMIllustration,
  },
  {
    id: 'gtm-outbound',
    title: 'GTM Orchestration',
    subtitle: 'Email & LinkedIn Outbound',
    icon: Rocket,
    color: '#F97316',
    textColor: '#B85610',
    bgColor: '#FFF7ED',
    deliverables: [
      'Campaign playbook creation',
      'ICP targeting & TAM mapping',
      'Lead list development',
      'Contact research & enrichment',
      'Messaging & copywriting (outreach)',
      'Connection & outreach execution',
      'Response handling & follow-ups',
      'Content creation for campaigns',
      'Social posting & distribution',
      'White space / account analysis',
      'Database enrichment',
      'CRM uploads & syncing',
      'Campaign tracking & optimization',
    ],
    illustration: OutboundIllustration,
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    subtitle: 'Operations, support, and execution',
    icon: HeartHandshake,
    color: '#0891B2',
    textColor: '#066D8A',
    bgColor: '#ECFEFF',
    deliverables: [
      'Customer Support Tickets',
      'Email campaign management',
      'Email automation & sequencing',
      'Newsletter distribution',
      'Prospecting support & list management',
      'CRM logging & data entry',
      'Meeting notes capture & transcription',
      'SOP creation & editing',
      'QA & deliverable reviews',
      'Webinar support & hosting',
      'Event coordination & management',
      'LinkedIn campaign management support',
      'Research (directories, partners, etc.)',
      'HubSpot & tool support',
      'Operational support & execution',
    ],
    illustration: SupportIllustration,
  },
];

function ServiceCapabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredDeliverable, setHoveredDeliverable] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % serviceCapabilitiesCategories.length);
    }, 6000);
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
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            One Partner Across<span className="text-spark-600"><br />Content, Growth & Operations </span>
          </h2>
          <p className="text-body text-gray-500 max-w-2xl mx-auto">
            Every category is staffed with dedicated specialists, managed processes, and measurable outcomes.
          </p>
        </AnimatedSection>

        <div className="flex sm:flex-row justify-start sm:justify-center gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:pb-0">
          {serviceCapabilitiesCategories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(i)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shrink-0 ${
                activeTab === i
                  ? 'text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-current'
              }`}
              style={{
                backgroundColor: activeTab === i ? cat.color : undefined,
                borderColor: activeTab === i ? cat.color : undefined,
              }}
            >
              <cat.icon className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">{cat.title}</span>
              <span className="sm:hidden whitespace-nowrap">{cat.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="rounded-2xl p-6 overflow-hidden" style={{ backgroundColor: active.bgColor }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: 'white' }}>
                        <active.icon className="w-5 h-5" style={{ color: active.color }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{active.title}</h3>
                        <p className="text-base text-gray-500">{active.subtitle}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <active.illustration />
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                      <span className="px-3 py-1.5 text-sm font-bold rounded-lg" style={{ backgroundColor: 'white', color: active.color }}>
                        {active.deliverables.length} deliverables
                      </span>
                      <div className="flex gap-1.5">
                        {serviceCapabilitiesCategories.map((_, i) => (
                          <div
                            key={i}
                            className="h-1.5 rounded-full transition-all duration-300"
                            style={{
                              width: i === activeTab ? 20 : 6,
                              backgroundColor: i === activeTab ? active.color : `${active.color}30`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                    {active.deliverables.map((d, i) => (
                      <motion.div
                        key={`${active.id}-${i}`}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.3 }}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg transition-all duration-200 cursor-default"
                        style={{ backgroundColor: hoveredDeliverable === i ? active.bgColor : 'transparent' }}
                        onMouseEnter={() => setHoveredDeliverable(i)}
                        onMouseLeave={() => setHoveredDeliverable(null)}
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200"
                          style={{ backgroundColor: hoveredDeliverable === i ? active.color : active.bgColor }}
                        >
                          <Check className="w-3 h-3 transition-colors duration-200" style={{ color: hoveredDeliverable === i ? 'white' : active.color }} strokeWidth={2.5} />
                        </div>
                        <span className="text-base text-gray-500 leading-snug transition-colors duration-200" style={{ color: hoveredDeliverable === i ? active.textColor : undefined }}>
                          {d}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   1. HERO  2-column layout with form on right
   ════════════════════════════════════════════════════════════════════════ */
function HeroSection() {

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you?service=crm");
  };

  return (
    <section
      id="lead-form"
      className="relative overflow-hidden min-h-[600px]"
    >

      <div className="absolute inset-0">
        <img
          src="/images/hero/crm-hero.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>


      <div className="absolute inset-0 bg-gradient-to-r from-[#061512]/95 via-[#061512]/70 to-transparent" />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-3">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8"
            >
              <Activity className="h-3.5 w-3.5 text-spark-300" />
              <span className="text-sm-body font-medium text-white">
                CRM &amp; Sales Data Optimization
              </span>
            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-h1 sm:text-display lg:text-display-sm text-white mb-6"
            >
              You&apos;re Paying for HubSpot
              <br />
              <span className="text-spark-400">You&apos;re Using 20% of It</span>
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body sm:text-sub text-gray-300 max-w-2xl mb-8"
            >
              Your CRM is an expensive filing cabinet. No workflows. No clean
              data. No visibility. Get a dedicated team that optimizes your
              HubSpot instance in 14 days—so your CRM actually drives revenue.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10"
            >
              {[
                { icon: Zap, text: "14-Day Optimization" },
                { icon: DollarSign, text: "1/3 Cost of Hiring" },
                { icon: BarChart3, text: "100% HubSpot Utilization" },
              ].map((m, i) => {
                const Icon = m.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 text-sm-body font-medium text-gray-200 bg-white/10 border border-white/20 px-3.5 py-2 rounded-lg"
                  >
                    <Icon className="h-4 w-4 text-spark-400" />
                    {m.text}
                  </span>
                );
              })}
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative p-5 sm:p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm max-w-2xl"
            >
              <p className="text-sm-body sm:text-body text-gray-200 italic mb-3">
                &ldquo;We thought we needed to upgrade our HubSpot tier. Turns out,
                we just needed someone to actually set it up properly. We went from
                20% utilization to using 90% of features.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-spark-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-spark-700">VP</span>
                </div>
                <div>
                  <p className="text-sm-body font-semibold text-white">
                    VP Revenue Operations
                  </p>
                  <p className="text-xs text-gray-400">
                    Series A SaaS ($15M ARR)
                  </p>
                </div>
              </div>
            </motion.div>


          </div>


          <HeroFormIntro>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-lg p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-sub font-bold text-gray-900 mb-1.5">
                  Get Your HubSpot Audit
                </h3>
                <p className="text-sm-body text-gray-500">
                  See what&apos;s broken and how much revenue you&apos;re missing.
                  Free audit in 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="firstName" className="text-sm-body text-gray-700 mb-1.5">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="h-10"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm-body text-gray-700 mb-1.5">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Smith"
                        className="h-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="workEmail" className="text-sm-body text-gray-700 mb-1.5">
                      Work Email
                    </Label>
                    <Input
                      id="workEmail"
                      type="email"
                      placeholder="john@company.com"
                      className="h-10"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phoneNumber" className="text-sm-body text-gray-700 mb-1.5">
                      Phone Number
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="h-10"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-sm-body text-gray-700 mb-1.5">
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      className="h-10"
                    />
                  </div>

                  <Button
                    variant="ghost"
                    type="submit"
                    className="w-full bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-11 rounded-lg text-base transition-all"
                  >
                    Get Your HubSpot Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <div className="flex items-center justify-center gap-4 pt-1">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Lock className="h-3 w-3" />
                      No contracts
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Mail className="h-3 w-3" />
                      No spam
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Shield className="h-3 w-3" />
                      Cancel anytime
                    </span>
                  </div>
                </form>
            </div>
          </HeroFormIntro>
        </div>
      </div>
    </section>
  );
}


/* ════════════════════════════════════════════════════════════════════════
   2. PROBLEMS SECTION (id="problems", bg-gray-50)
   ════════════════════════════════════════════════════════════════════════ */
const problems = [
  {
    icon: AlertOctagon,
    title: "The Data Disaster",
    bullets: [
      "1,000+ duplicate records clogging your pipeline",
      "Invalid & bounced email addresses going unchecked",
      "Missing critical fields on 80%+ of contacts",
      "Inconsistent data entry across the team",
    ],
    impact:
      "Your forecasting is guesswork. Your pipeline is inflated. You can't trust a single number.",
  },
  {
    icon: Settings,
    title: "The Feature Graveyard",
    bullets: [
      "Workflows created and never turned on",
      "Abandoned custom fields from 3 reorgs ago",
      "Integrations nobody knows are running",
      "Dashboards nobody has looked at in months",
    ],
    impact:
      "You're paying for Enterprise but operating like you're on Free Features rot. Value decays",
  },
  {
    icon: RefreshCw,
    title: "The Process Chaos",
    bullets: [
      "No standardized lead qualification criteria",
      "No marketing-to-sales handoff process",
      "Missed follow-ups falling through cracks",
      "Data entry is 'optional'  so it doesn't happen",
    ],
    impact:
      "Your sales team does whatever they want. No two reps work the same way. Revenue leaks everywhere.",
  },
  {
    icon: AlertTriangle,
    title: "The Hiring Trap",
    bullets: [
      "RevOps hire costs $78-110K/year with benefits",
      "6-month ramp-up before they're fully effective",
      "Single point of failure  what if they leave?",
      "Hard to find someone who knows sales + data + strategy",
    ],
    impact:
      "You'll spend $90K+ and wait 6 months to maybe fix the problem. That's $45K in lost productivity before day one.",
  },
];

function ProblemSection() {
  return (
    <section id="problems" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <DualHeading
            before="Broken Data + Broken Processes ="
            accent="Broken Revenue"
            className="text-h2 sm:text-h1 text-gray-900 mb-4"
          />
          <p className="text-body text-gray-500 max-w-2xl mx-auto">
            Here&apos;s what we find in almost every HubSpot instance we audit.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={i}>
                <div className="h-full p-6 rounded-xl bg-white border border-gray-100 border-l-4 border-l-red-400 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="text-sub font-bold text-gray-900">
                      {p.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {p.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm-body text-gray-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-300 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-lg border border-red-200 bg-red-50/50 p-3">
                    <p className="text-sm-body font-medium text-red-700">
                      <AlertTriangle className="h-3.5 w-3.5 inline mr-1.5 -mt-0.5" />
                      Impact: {p.impact}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   3. SOLUTION SECTION (id="solution", white bg)
   ════════════════════════════════════════════════════════════════════════ */
const solutionItems = [
  {
    icon: Layers,
    title: "Complete CRM Optimization",
    description:
      "Full audit, data cleanup, workflows, dashboards, and training. Not a partial fix  a complete transformation.",
  },
  {
    icon: Zap,
    title: "14-Day Transformation",
    description:
      "From chaos to fully operational in two weeks. Not months of consulting  immediate, tangible results.",
  },
  {
    icon: Shield,
    title: "Ongoing Maintenance",
    description:
      "Monthly hygiene reviews, quarterly optimization, proactive issue resolution. Your CRM stays clean forever.",
  },
  {
    icon: DollarSign,
    title: "Cost Fraction of Hiring",
    description:
      "~$3-4K/month vs $78-110K/year for a RevOps hire. Cancel anytime. Zero risk, zero benefits cost.",
  },
];

function SolutionSection() {
  return (
    <section id="solution" className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <DualHeading
            before="Get a Fully Optimized CRM in"
            accent="14 Days"
            after="Then Keep It Running Without Hiring"
            className="text-h2 sm:text-h1 text-gray-900 mb-4"
          />
        </AnimatedSection>
        <AnimatedSection className="text-center mb-14" delay={0.1}>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            We don&apos;t sell you HubSpot licenses.{" "}
            <span className="font-semibold text-gray-900">
              We optimize what you already have.
            </span>{" "}
            Clean data, automated workflows, custom dashboards  everything your
            team needs to close more deals.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutionItems.map((s, i) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={i}>
                <div className="h-full p-6 rounded-xl bg-white border border-gray-100 border-l-4 border-l-spark-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-spark-50 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-spark-600" />
                    </div>
                    <h3 className="text-sub font-bold text-gray-900">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm-body text-gray-600">
                    {s.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>


        <AnimatedSection className="mt-12 text-center" delay={0.3}>
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-spark-50 border border-spark-200">
            <TrendingUp className="h-5 w-5 text-spark-600 shrink-0" />
            <p className="text-body font-semibold text-[#51B027]">
              We find $500K-$2M in hidden pipeline during audits.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   4. AUDIT FINDINGS / CASE STUDY (id="results", bg-gray-50)
   ════════════════════════════════════════════════════════════════════════ */
function AuditFindingsSection() {
  return (
    <section id="results" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <DualHeading
            before="Most Companies Find"
            accent="$500K-$2M in Hidden Revenue"
            className="text-h2 sm:text-h1 text-gray-900 mb-4"
          />
          <p className="text-body text-gray-500 max-w-xl mx-auto">
            A real before-and-after from one of our HubSpot audits.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

            <div className="px-6 sm:px-8 py-5 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center gap-3">
              <Database className="h-5 w-5 text-spark-600" />
              <span className="font-bold text-gray-900">B2B SaaS</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm-body text-gray-600">$8M ARR</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm-body text-gray-600">Series A</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm-body text-gray-600">35-person sales team</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">

              <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <h3 className="text-sub font-bold text-red-700">
                    What Was Broken
                  </h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-caption text-red-500 mb-2">
                      Data Issues
                    </p>
                    <ul className="space-y-1.5 text-sm-body text-gray-600">
                      {[
                        "1,247 duplicates",
                        "340 hard bounces",
                        "156 dead deals clogging pipeline",
                        "89% missing company size",
                        "$18M pipeline  only $4M quality",
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-caption text-red-500 mb-2">
                      Workflow & Process Issues
                    </p>
                    <ul className="space-y-1.5 text-sm-body text-gray-600">
                      {[
                        "2-year-old sequences still running",
                        "Manual lead routing",
                        "No follow-up reminders",
                        "No standard qualification",
                        "20 min training total",
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>


              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle className="h-5 w-5 text-spark-500" />
                  <h3 className="text-sub font-bold text-[#51B027]">
                    What We Fixed
                  </h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-caption text-[#51B027] mb-2">
                      Data Cleanup
                    </p>
                    <ul className="space-y-1.5 text-sm-body text-gray-600">
                      {[
                        "Merged all duplicates",
                        "Cleaned & validated emails",
                        "Archived dead deals",
                        "Populated missing fields",
                        "Discovered 47 deals worth $840K",
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-spark-500 mt-0.5 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-caption text-[#51B027] mb-2">
                      Automation & Reporting
                    </p>
                    <ul className="space-y-1.5 text-sm-body text-gray-600">
                      {[
                        "Set up lead routing & reminders",
                        "Built custom dashboards",
                        "Automated follow-up sequences",
                        "Documented entire process",
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-spark-500 mt-0.5 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <div className="px-6 sm:px-8 py-6 bg-spark-50 border-t border-spark-200">
              <p className="text-caption text-[#51B027] mb-4">
                Results
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { value: "87%", label: "Forecast Accuracy", prev: "was 34%" },
                  { value: "$840K", label: "Opportunities Found", prev: "47 missed deals" },
                  { value: "40%", label: "Faster Onboarding", prev: "" },
                  { value: "15 hrs", label: "Saved Per Week", prev: "" },
                ].map((r, i) => (
                  <div key={i} className="text-center">
                    <p className="text-h3 sm:text-h2 text-[#51B027]">
                      {r.value}
                    </p>
                    <p className="text-sl text-gray-600 mt-0.5">{r.label}</p>
                    {r.prev && (
                      <p className="text-sl text-gray-400">{r.prev}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   5. ROI STATS (white bg)
   ════════════════════════════════════════════════════════════════════════ */
function RoiSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <DualHeading
            before="What Optimization Actually"
            accent="Returns"
            className="text-h2 sm:text-h1 text-gray-900 mb-4"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              prefix: "",
              target: 14,
              suffix: " days",
              label: "Full Optimization Timeline",
              icon: Clock,
            },
            {
              prefix: "$",
              target: 500,
              suffix: "K-$2M",
              label: "Hidden Pipeline Recovered",
              icon: TrendingUp,
            },
            {
              prefix: "",
              target: 10,
              suffix: "-20 hrs/week",
              label: "Manual Work Eliminated",
              icon: Zap,
            },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={i}>
                <div className="text-center p-8 rounded-xl border border-gray-100 bg-white shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-spark-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-5 w-5 text-spark-600" />
                  </div>
                  <p className="text-h2 sm:text-h1 text-[#51B027] mb-2">
                    <CountUp
                      target={s.target}
                      prefix={s.prefix}
                      suffix={s.suffix}
                    />
                  </p>
                  <p className="text-sm-body text-gray-500">{s.label}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   6. COMPARISON TABLE (bg-gray-50)
   ════════════════════════════════════════════════════════════════════════ */
const comparisonRows = [
  { category: "Pipeline Visibility", broken: "30-40%", optimized: "95%+" },
  { category: "Data Accuracy", broken: "Duplicates, errors", optimized: "Clean, standardized" },
  { category: "Forecasting Accuracy", broken: "30-50% (guesswork)", optimized: "80-95% (data-driven)" },
  { category: "Time on Manual Work", broken: "15-20 hrs/week", optimized: "2-5 hrs/week" },
  { category: "Lead Response Time", broken: "Hours to days", optimized: "Minutes (automated)" },
  { category: "Sales Efficiency", broken: "Spreadsheets + CRM", optimized: "CRM only" },
  { category: "New Rep Onboarding", broken: "4-6 weeks", optimized: "2-3 weeks" },
  { category: "Hidden Revenue", broken: "Untracked", optimized: "Discovered & pursued" },
  { category: "Team Trust", broken: '"The data is wrong"', optimized: '"We can trust this"' },
];

function ComparisonSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <DualHeading
            before="Broken CRM vs"
            accent="Optimized CRM"
            className="text-h2 sm:text-h1 text-gray-900 mb-4"
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">

            <div className="grid grid-cols-3 text-center border-b border-gray-200">
              <div className="py-4 px-4 bg-gray-50" />
              <div className="py-4 px-4 bg-red-50">
                <p className="text-sm font-bold text-red-700 flex items-center justify-center gap-1.5">
                  <XCircle className="h-4 w-4" />
                  Broken CRM
                </p>
              </div>
              <div className="py-4 px-4 bg-spark-50">
                <p className="text-sm-body font-bold text-[#51B027] flex items-center justify-center gap-1.5">
                  <CheckCircle className="h-4 w-4" />
                  Optimized CRM
                </p>
              </div>
            </div>


            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-gray-100 last:border-0"
              >
                <div className="py-3.5 px-4 text-sm-body font-medium text-gray-900">
                  {row.category}
                </div>
                <div className="py-3.5 px-4 text-sm text-red-600 text-center bg-red-50/30">
                  {row.broken}
                </div>
                <div className="py-3.5 px-4 text-sm-body text-[#51B027] font-medium text-center bg-spark-50/30">
                  {row.optimized}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   7. HOW IT WORKS (id="process", white bg)
   ════════════════════════════════════════════════════════════════════════ */
const phases = [
  {
    num: 1,
    title: "Audit & Analysis",
    timeline: "Days 1–3",
    icon: Search,
    tasks: [
      "Audit data and workflows while interviewing sales teams to map current processes",
    ],
    output: "Comprehensive audit report",
    yourTime: "~3 hours",
  },
  {
    num: 2,
    title: "Build & Report",
    timeline: "Days 4–12",
    icon: Brush,
    tasks: [
      "Purge duplicate data, automate lead qualification, and build 5–8 performance dashboards",
    ],
    output: "Fully operational CRM with live reporting",
    yourTime: "~2.5 hours",
  },
  {
    num: 3,
    title: "Training & Handoff",
    timeline: "Days 11–14",
    icon: BookOpen,
    tasks: [
      "Conduct hands-on training sessions for reps and managers using custom playbooks",
    ],
    output: "Team fully trained",
    yourTime: "~4 hours",
  },
  {
    num: 4,
    title: "Ongoing Maintenance",
    timeline: "Month 2+",
    icon: Shield,
    tasks: [
      "Run monthly system hygiene checks and provide priority technical support",
    ],
    output: "Long-term CRM efficiency",
    yourTime: "1 hour/month",
  },
];

function HowItWorksSection() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <DualHeading
            before="From Chaos to Clarity in"
            accent="14 Days"
            className="text-h2 sm:text-h1 text-gray-900 mb-4"
          />
          <p className="text-body text-gray-500 max-w-xl mx-auto">
            A proven five-phase process that transforms your CRM with minimal time investment from your team.
          </p>
        </AnimatedSection>


        <div className="hidden lg:flex items-start justify-between gap-0 items-stretch">
          {phases.map((p, i) => {
            const Icon = p.icon;
            return (
              <React.Fragment key={i}>

                <div className="flex-1 min-w-0">
                  <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {p.num}
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-spark-50 border border-spark-200 text-[11px] font-semibold text-spark-700">
                        <Clock className="h-2.5 w-2.5 text-spark-600" />
                        {p.timeline}
                      </span>
                    </div>
                    <h4 className="text-body font-bold text-gray-900 mb-2">{p.title}</h4>
                    <ul className="space-y-1.5 mb-3">
                      {p.tasks.map((t, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-sl text-gray-600">

                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-100 pt-2 space-y-0.5">
                      <p className="text-[11px] text-gray-500">
                        Output: <span className="text-gray-700 font-medium">{p.output}</span>
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Your time: <span className="text-spark-600 font-semibold">{p.yourTime}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {i < phases.length - 1 && (
                  <div className="flex items-center px-1 pt-8">
                    <ArrowRight className="h-5 w-5 text-spark-300 shrink-0" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>


        <div className="lg:hidden space-y-4">
          {phases.map((p, i) => {
            const Icon = p.icon;
            return (
              <React.Fragment key={i}>
                <AnimatedSection direction="up" delay={i * 0.08}>
                  <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {p.num}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-spark-50 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-spark-600" />
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-spark-50 border border-spark-200 text-[11px] font-semibold text-spark-700">
                        <Clock className="h-2.5 w-2.5 text-spark-600" />
                        {p.timeline}
                      </span>
                    </div>
                    <h4 className="text-body font-bold text-gray-900 mb-2">{p.title}</h4>
                    <ul className="space-y-1.5 mb-3">
                      {p.tasks.map((t, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-sl text-gray-600">
                          <Check className="h-3 w-3 text-spark-500 mt-0.5 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-100 pt-2 space-y-0.5">
                      <p className="text-[11px] text-gray-500">
                        Output: <span className="text-gray-700 font-medium">{p.output}</span>
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Your time: <span className="text-spark-600 font-semibold">{p.yourTime}</span>
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                {i < phases.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowRight className="h-5 w-5 text-spark-300 rotate-90" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   8. TESTIMONIALS (bg-gray-50)
   ════════════════════════════════════════════════════════════════════════ */
const bentoTestimonials = [
  {
    quote:
      "We found $1.2M in hidden pipeline within the first week of the audit. Deals that had been sitting in 'closed-lost' for 18 months were actually still active  our reps just stopped tracking them. That discovery alone paid for five years of service.",
    name: "Rachel Morrison",
    title: "VP of Sales",
    company: "SaaS Company, $20M ARR",
    metric: "$1.2M pipeline found",
    featured: true,
  },
  {
    quote:
      "Our data was so bad that marketing couldn't trust a single list. After the cleanup, our email deliverability jumped 40% and we finally stopped sending to bounced addresses. Clean data is the foundation everything else is built on.",
    name: "Kevin Tran",
    title: "Revenue Operations Manager",
    company: "B2B SaaS, $12M ARR",
    metric: "40% deliverability boost",
    featured: false,
  },
  {
    quote:
      "Forecasting went from 'let me check my spreadsheet' to 'here's the real number' in two weeks. Our board meetings are completely different now  we actually trust the data we're presenting.",
    name: "Priya Sharma",
    title: "CEO",
    company: "Fintech Startup, Series A",
    metric: "87% forecast accuracy",
    featured: false,
  },
  {
    quote:
      "New reps used to take 6 weeks to get productive. Now they're closing deals in 2.5 weeks because the CRM actually guides them through the process instead of being a blank form they have to figure out.",
    name: "Tom Henderson",
    title: "Sales Director",
    company: "Enterprise SaaS, 45 reps",
    metric: "60% faster ramp",
    featured: false,
  },
  {
    quote:
      "We were budgeting $95K for a RevOps hire. Instead, we got a full team that started delivering in 14 days  no 6-month ramp, no benefits, no single point of failure. Better results at a third of the cost.",
    name: "Jennifer Park",
    title: "COO",
    company: "Healthcare Tech, Series B",
    metric: "1/3 cost of hiring",
    featured: false,
  },
];

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % bentoTestimonials.length);
    }, 5000);
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
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <DualHeading
            before="Teams That Went From Chaos to"
            accent="Clarity"
            className="text-h2 sm:text-h1 text-gray-900 mb-4"
          />
        </AnimatedSection>

        <div className="relative">

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
                className="p-8 sm:p-10 rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <Quote className="h-10 w-10 text-spark-300 mb-5" />
                <p className="text-sub sm:text-h3 text-gray-700 italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  {t.metric && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-spark-50 border border-spark-200">
                      <TrendingUp className="h-3.5 w-3.5 text-spark-600" />
                      <span className="text-sl font-semibold text-spark-700">{t.metric}</span>
                    </div>
                  )}
                </div>
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-spark-100 flex items-center justify-center">
                      <span className="text-sl font-bold text-spark-700">{t.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="text-sm-body font-semibold text-gray-900">{t.name}</p>
                      <p className="text-sl text-gray-500">{t.title} &middot; {t.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>


          <div className="flex items-center justify-center gap-2 mt-6">
            {bentoTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-spark-500" : "w-2 bg-gray-300 hover:bg-gray-400"
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

/* ════════════════════════════════════════════════════════════════════════
   9. WHY CHOOSE US (white bg)
   ════════════════════════════════════════════════════════════════════════ */
const whyUs = [
  {
    icon: Zap,
    title: "Speed Over Slides",
    description:
      "No 3-month consulting engagements. We deliver a fully optimized CRM in 14 days. Your team sees results immediately, not after endless strategy sessions.",
  },
  {
    icon: Shield,
    title: "Ongoing, Not One-Off",
    description:
      "Most consultants deliver a PDF and disappear. We stay. Monthly hygiene reviews, quarterly optimization, and priority support keep your CRM clean forever.",
  },
  {
    icon: DollarSign,
    title: "Fraction of Hiring Cost",
    description:
      "A RevOps hire costs $78-110K/year plus benefits. We deliver more value at a third of the cost, with zero ramp-up time and zero risk.",
  },
  {
    icon: CheckCircle,
    title: "Revenue-Focused, Not Feature-Focused",
    description:
      "We don't optimize for screenshots. Every workflow, dashboard, and process we build is designed to help your team close more deals, faster.",
  },
];

function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <DualHeading
            before="Not Just CRM Consultants. We Specialize in"
            accent="Revenue Operations."
            className="text-h2 sm:text-h1 text-gray-900 mb-4"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyUs.map((w, i) => {
            const Icon = w.icon;
            return (
              <StaggerItem key={i}>
                <div className="h-full p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-spark-50 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-spark-600" />
                  </div>
                  <h3 className="text-sub font-bold text-gray-900 mb-2">
                    {w.title}
                  </h3>
                  <p className="text-sm-body text-gray-600">
                    {w.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   10. FAQ (bg-gray-50)
   ════════════════════════════════════════════════════════════════════════ */
const faqItems = [
  {
    question: "How is this different from hiring a HubSpot consultant?",
    answer:
      "Traditional consultants deliver a report and leave. We deliver a fully operational CRM in 14 days and stay to maintain it. We're a dedicated RevOps team at a fraction of the cost  ongoing optimization, not a one-time project.",
  },
  {
    question: "What exactly happens in the 14-day optimization?",
    answer:
      "We audit your entire HubSpot instance, clean your data (duplicates, invalid emails, missing fields), build automated workflows, create custom dashboards for every team, and train your team on the new processes. You get a fully operational CRM, not a PDF.",
  },
  {
    question: "How much of my team's time is required?",
    answer:
      "Minimal. We need about 3 hours in week one for interviews and access, and 4 hours in week two for training. Most of the heavy lifting is done behind the scenes by our team.",
  },
  {
    question: "What if we're not on HubSpot Enterprise?",
    answer:
      "We work with all HubSpot tiers  Starter, Professional, and Enterprise. Many teams are overpaying for features they don't use or underutilizing the tier they have. We'll optimize whatever you have.",
  },
  {
    question: "Do you replace our existing CRM admin or RevOps hire?",
    answer:
      "We complement or replace. Many teams use us instead of hiring a full-time RevOps person (saving $78-110K/year). Others use us alongside their existing team to accelerate results. We're flexible.",
  },
  {
    question: "What does 'ongoing maintenance' include?",
    answer:
      "Monthly data hygiene reviews, quarterly optimization sprints, priority support for issues and new feature setup, workflow monitoring, and proactive recommendations. Your CRM never decays again.",
  },
  {
    question: "Can we cancel anytime?",
    answer:
      "Yes. No long-term contracts. We earn your business every month. Most clients stay because the ROI is obvious, but you're never locked in.",
  },
  {
    question: "How do you find hidden pipeline in our CRM?",
    answer:
      "During our audit phase, we systematically identify stale deals that should be re-engaged, contacts with incomplete data that represent warm opportunities, and workflow gaps causing leads to fall through the cracks. Most clients discover $500K-$2M in pipeline they didn't know existed.",
  },
];

function FaqSection() {
  const col1 = faqItems.slice(0, 4);
  const col2 = faqItems.slice(4, 8);

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                {col1.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-sm-body sm:text-body font-semibold text-gray-900 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm-body text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>


            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                {col2.map((item, i) => (
                  <AccordionItem key={i + 4} value={`faq-${i + 4}`}>
                    <AccordionTrigger className="text-left text-sm-body sm:text-body font-semibold text-gray-900 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm-body text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   11. FINAL CTA (white bg)
   ════════════════════════════════════════════════════════════════════════ */
function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-spark-800">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-h2 sm:text-h1 text-white mb-4">
              Ready to Turn Your CRM Into a{" "}
              <span>Revenue Engine?</span>
            </h2>
            <p className="text-body text-spark-200 mb-8">
              Stop paying for a CRM you barely use. Get a free audit and see
              exactly how much revenue you&apos;re leaving on the table.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="ghost"
                onClick={() => {
                  const el = document.getElementById("lead-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-spark-800 hover:bg-spark-50 hover:text-spark-800 font-semibold px-8 h-12 rounded-lg text-base transition-all hover:shadow-lg"
              >
                Get Your HubSpot Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="bg-void hover:bg-surface-dark text-white hover:text-white font-semibold px-8 h-12 rounded-lg text-base border-0 transition-all"
              >
                <Phone className="mr-2 h-4 w-4" />
                Schedule a Call
              </Button>
            </div>
            <p className="mt-6 text-sm-body text-spark-300">No contracts. No spam. Cancel anytime.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Inline Fractional Team Section ───
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

/* ════════════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ════════════════════════════════════════════════════════════════════════ */
export function CrmPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20">
        <HeroSection />
        <TrustedByMarquee />
        <ProblemSection />
        <SolutionSection />
        <ToolsWeUseSection />
        <AuditFindingsSection />
        <WorkSampleBentoGrid />
        <RoiSection />
        <ComparisonSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <FaqSection />
        <FinalCtaSection />
        {/* <FractionalTeamSection /> */}
        <ServiceCapabilities />
      </main>
      <Footer />
    </div>
  );
}
