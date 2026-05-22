import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Eye,
  UserX,
  BookOpen,
  Phone,
  Calendar,
  CheckCircle2,
  BarChart3,
  Scale,
  Lightbulb,
  Users,
  Target,
  ArrowRight,
  ThumbsUp,
  LayoutGrid,
  PiggyBank,
  Quote,
  Briefcase,
  Building2,
  Shield,
  XCircle,
  Clock,
  Smartphone,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Lock,
  Mail,
  Check,
  Menu,
  X,
  MessageCircle,
  Heart,
  Share2,
  TrendingUp,
  RotateCcw,
  Globe,
  Send,
  Database,
  Layers,
  Megaphone,
  Video,
  Rocket,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

// ─── Inline ToolsWeUseSection (Social Only) ───
function ToolsWeUseSection() {
  const tools = [
    { src: "/logos/applogos/Canva.png", alt: "Canva" }, { src: "/logos/applogos/Figma.png", alt: "Figma" },
    { src: "/logos/applogos/ChatGPT.webp", alt: "ChatGPT" }, { src: "/logos/applogos/Gemini-Pro.png", alt: "Gemini Pro" },
    { src: "/logos/applogos/Taplio.png", alt: "Taplio" }, { src: "/logos/applogos/High-Level.png", alt: "GoHighLevel" },
    { src: "/logos/applogos/Hubspot.png", alt: "HubSpot" }, { src: "/logos/applogos/Ahrefs.png", alt: "Ahrefs" },
    { src: "/logos/applogos/Semrush.png", alt: "Semrush" }, { src: "/logos/applogos/Slack.webp", alt: "Slack" },
    { src: "/logos/applogos/Calendly.png", alt: "Calendly" }, { src: "/logos/applogos/Zapier.png", alt: "Zapier" },
    { src: "/logos/applogos/Klaviyo.png", alt: "Klaviyo" }, { src: "/logos/applogos/Livestorm.png", alt: "Livestorm" },
    { src: "/logos/applogos/Google-Chat.png", alt: "Google Chat" }, { src: "/logos/applogos/Google-Meet.webp", alt: "Google Meet" },
    { src: "/logos/applogos/Email.webp", alt: "Email" }, { src: "/logos/applogos/Freepik.webp", alt: "Freepik" },
  ];
  const content = {
    title: "The Tools Behind the Workflow",
    description: "From content planning and design to scheduling, analytics, and reporting, we use proven tools to keep your social media workflow organized, visible, and easy to manage.",
    bullets: [
      "AI-powered content creation suite",
      "Multi-platform scheduling & publishing",
      "Advanced engagement analytics",
      "Compliance-aware content review tools",
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

// ─── Inline WorkSampleBentoGrid (Social Only) ───
function WorkSampleBentoGrid() {
  const samples = [
    { src: "/images/work-samples/social-work-1.png", alt: "Content Calendar Design", label: "Content Calendar" },
    { src: "/images/work-samples/social-work-2.png", alt: "Social Media Post Designs", label: "Post Designs" },
    { src: "/images/work-samples/social-work-3.png", alt: "Engagement Analytics", label: "Engagement Analytics" },
  ];
  const title = { before: "See Our Social Media", accent: "Content Work", after: "" };
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

// ─── Inline HeroFormIntro (Social Only) ───
const INTRO_DURATION = 6000;

function SocialAnimation() {
  const posts = [
    { platform: "LinkedIn", icon: MessageCircle, color: "text-blue-600", bg: "bg-blue-50 border-blue-200", iconBg: "bg-blue-100", content: "5 Tax Strategies Your CPA Isn't Telling You About", likes: 142, shares: 38, views: "2.4K", checkColor: "text-blue-500" },
    { platform: "Instagram", icon: Heart, color: "text-pink-600", bg: "bg-pink-50 border-pink-200", iconBg: "bg-pink-100", content: "Behind the Scenes: How We Helped a Law Firm 3x Their Inbound", likes: 89, shares: 24, views: "1.8K", checkColor: "text-pink-500" },
    { platform: "Facebook", icon: Share2, color: "text-teal-600", bg: "bg-teal-50 border-teal-200", iconBg: "bg-teal-100", content: "The Real Cost of Being Invisible Online  A CPA Firm Case Study", likes: 203, shares: 56, views: "4.1K", checkColor: "text-teal-500" },
  ];
  const platformStats = [
    { icon: Eye, label: "Monthly Impressions", value: "45K+", delay: 0.4, accent: "bg-teal-50 border-teal-200", iconColor: "text-teal-500", valueColor: "text-teal-700" },
    { icon: TrendingUp, label: "Engagement Rate", value: "4.2%", delay: 0.7, accent: "bg-spark-50 border-spark-200", iconColor: "text-spark-600", valueColor: "text-[#307A0F]" },
    { icon: Users, label: "Inbound Inquiries", value: "12/mo", delay: 1.0, accent: "bg-sky-50 border-sky-200", iconColor: "text-sky-500", valueColor: "text-sky-700" },
    { icon: LayoutGrid, label: "Posts Published", value: "18/mo", delay: 1.3, accent: "bg-amber-50 border-amber-200", iconColor: "text-amber-500", valueColor: "text-amber-700" },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
      <div className="absolute inset-0 opacity-[0.03] bg-dot-pattern" />
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="relative flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-spark-100 flex items-center justify-center"><LayoutGrid className="h-3.5 w-3.5 text-spark-600" /></div>
        <span className="text-sm font-semibold text-gray-900 tracking-wide">Content Calendar</span>
        <div className="ml-auto flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-spark-500 animate-pulse" /><span className="text-[11px] text-spark-600 font-medium">Publishing</span></div>
      </motion.div>
      <div className="space-y-2 mb-4">
        {posts.map((post, i) => {
          const Icon = post.icon;
          return (
            <motion.div key={i} initial={{ opacity: 0, x: 60, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 + i * 0.5, type: "spring", stiffness: 180, damping: 20 }} className={`p-3 rounded-xl border ${post.bg}`}>
              <div className="flex items-center gap-2 mb-1.5">
                <div className={`w-5 h-5 rounded-md ${post.iconBg} flex items-center justify-center`}><Icon className={`h-3 w-3 ${post.color}`} /></div>
                <span className={`text-[11px] font-semibold ${post.color}`}>{post.platform}</span>
                <CheckCircle className={`h-3.5 w-3.5 ${post.checkColor} ml-auto`} />
              </div>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">{post.content}</p>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[10px] text-gray-400"><Heart className="h-2.5 w-2.5" /> {post.likes}</span>
                <span className="flex items-center gap-1 text-[10px] text-gray-400"><Share2 className="h-2.5 w-2.5" /> {post.shares}</span>
                <span className="flex items-center gap-1 text-[10px] text-gray-400"><Eye className="h-2.5 w-2.5" /> {post.views}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {platformStats.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div key={s.label} initial={{ opacity: 0, scale: 0.8, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: s.delay + 1.5, type: "spring", stiffness: 200 }} className={`p-2.5 rounded-xl border ${s.accent}`}>
              <Icon className={`h-3 w-3 ${s.iconColor} mb-1`} />
              <p className={`text-sm font-bold ${s.valueColor} leading-none`}>{s.value}</p>
              <p className="text-[10px] text-gray-500 mt-0.5">{s.label}</p>
            </motion.div>
          );
        })}
      </div>
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
            <SocialAnimation />
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
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % serviceCapabilitiesCategories.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [paused]);

  const active = serviceCapabilitiesCategories[activeTab];

  return (
    <section
      id="services-capabilities"
      className="py-16 sm:py-24 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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

/* ────────────────────────────────────────────
   SECTION 1  HERO (2-column layout with form)
   ──────────────────────────────────────────── */
function HeroSection() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you?service=social-media");
  };

  return (
    <section id="lead-form" className="relative overflow-hidden min-h-[600px]">
      <div className="absolute inset-0">
        <img src="/images/hero/social-hero.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#061512]/95 via-[#061512]/70 to-transparent" />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8">
              <Briefcase className="h-3.5 w-3.5 text-spark-300" />
              <span className="text-sm-body font-medium text-white">Social Media Management Services</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-h1 sm:text-display lg:text-display-sm text-white mb-6">
              Your Firm Should Be Visible
              <br />
              <span className="text-spark-400">Your Partners Shouldn&apos;t Have to Post</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-body sm:text-sub text-gray-300 max-w-2xl mb-8">
              Get a dedicated social media team to optimize your LinkedIn, Facebook, and Instagram. We handle the strategy, copy, design, scheduling, reporting, and workflow, so your team can stay visible without adding another internal role.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              {[
                { icon: Smartphone, text: "12-20 Posts Monthly" },
                { icon: Clock, text: "Live in 14 Days" },
                { icon: Briefcase, text: "Strategy & Creative Managed" },
              ].map((m, i) => {
                const Icon = m.icon;
                return (
                  <span key={i} className="inline-flex items-center gap-2 text-sm-body font-medium text-gray-200 bg-white/10 border border-white/20 px-3.5 py-2 rounded-lg">
                    <Icon className="h-4 w-4 text-spark-400" />
                    {m.text}
                  </span>
                );
              })}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="relative p-5 sm:p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm max-w-2xl">
              <Quote className="absolute top-4 left-5 h-5 w-5 text-spark-300" />
              <p className="text-sm-body sm:text-body text-gray-200 italic mb-3 pl-8">
                &ldquo;Our LinkedIn presence went from invisible to the most visible firm in our market. Not one partner had to write a post. We&apos;re getting inquiries from businesses who&apos;ve been following our content for months.&rdquo;
              </p>
              <div className="flex items-center gap-3 pl-8">
                <div className="w-9 h-9 rounded-full bg-spark-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-spark-700">MP</span>
                </div>
                <div>
                  <p className="text-sm-body font-semibold text-white">Managing Partner</p>
                  <p className="text-xs text-gray-400">Regional CPA Firm (8 Employees)</p>
                </div>
              </div>
            </motion.div>
          </div>

          <HeroFormIntro>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-lg p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-sub font-bold text-gray-900 mb-1.5">Get Your Social Media Team</h3>
                <p className="text-sm-body text-gray-500">Custom content calendar + pricing in 24 hours. Zero obligation.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="hero-firstName" className="text-sm-body text-gray-700 mb-1.5">First Name</Label>
                    <Input id="hero-firstName" placeholder="John" className="h-10" />
                  </div>
                  <div>
                    <Label htmlFor="hero-lastName" className="text-sm-body text-gray-700 mb-1.5">Last Name</Label>
                    <Input id="hero-lastName" placeholder="Smith" className="h-10" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="hero-workEmail" className="text-sm-body text-gray-700 mb-1.5">Work Email</Label>
                  <Input id="hero-workEmail" type="email" placeholder="john@company.com" className="h-10" />
                </div>
                <div>
                  <Label htmlFor="hero-phoneNumber" className="text-sm-body text-gray-700 mb-1.5">Phone Number</Label>
                  <Input id="hero-phoneNumber" type="tel" placeholder="+1 (555) 000-0000" className="h-10" />
                </div>
                <div>
                  <Label htmlFor="hero-company" className="text-sm-body text-gray-700 mb-1.5">Company</Label>
                  <Input id="hero-company" placeholder="Acme Inc." className="h-10" />
                </div>
                <Button variant="ghost" type="submit" className="w-full bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-11 rounded-lg text-base transition-all">
                  Get Your Social Media Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="flex items-center justify-center gap-4 pt-1">
                  <span className="flex items-center gap-1.5 text-xs text-gray-400"><Lock className="h-3 w-3" /> No contracts</span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400"><Mail className="h-3 w-3" /> No spam</span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400"><Shield className="h-3 w-3" /> Cancel anytime</span>
                </div>
              </form>
            </div>
          </HeroFormIntro>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   SECTION 2  PROBLEMS
   ──────────────────────────────────────────── */
function ProblemSection() {
  const problems = [
    {
      icon: Eye,
      title: "Ideal Clients Are Researching Before They Reach Out",
      body: "Your competitors are publishing consistently, showing up in feeds, and building familiarity before the first sales conversation. If your firm is not visible, buyers may assume you are inactive, unavailable, or not the obvious choice.",
      pain: "Every day you're invisible online, you're losing clients to firms that show up consistently.",
    },
    {
      icon: UserX,
      title: "Your Experts Shouldn\u2019t Have to Become Content Managers",
      body: "Partners, advisors, lawyers, accountants, and consultants should not have to chase post ideas, write captions, format graphics, or manage publishing calendars. Their expertise should guide the content. Your social media team should turn that expertise into consistent output.",
      pain: "You can't force partners to post. And one in-house hire can't replicate a team's output.",
    },
    {
      icon: BookOpen,
      title: "Your Expertise Needs a System to Reach the Market",
      body: "Your team has strong ideas, client experience, and real points of view. The problem is that most of it stays inside meetings, proposals, and client work. A managed social media system turns that expertise into visible, repeatable content.",
      pain: "Expertise that isn't visible doesn't exist in the buyer's mind.",
    },
  ];

  return (
    <section id="problems" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            Professional Firms Have a Visibility Problem <span className="text-[#51B027]"><br />Not an Expertise Problem </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="text-center mb-14">
          <p className="text-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-gray-900">57% of professional services buyers research providers online</span> before reaching out. If you&apos;re not visible, you&apos;re not in the conversation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                <div className="h-full rounded-xl border border-gray-100 bg-white p-6 border-l-4 border-l-red-400">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 text-red-500 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sub font-bold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-sm-body text-gray-600 mb-4">{problem.body}</p>
                  <div className="p-3 rounded-lg bg-red-50/50">
                    <p className="text-sm-body font-medium text-red-600">{problem.pain}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   SECTION 3  SOLUTION
   ──────────────────────────────────────────── */
function SolutionSection() {
  const differentiators = [
    {
      icon: Target,
      title: "Industry-Specific Content Strategy",
      desc: "Compliance-aware, positioned around your specialties. We know what professional services firms can and can't say\u2014and how to make expertise visible within those boundaries.",
    },
    {
      icon: ThumbsUp,
      title: "Your Experts Provide the Insight. We Handle the Execution",
      desc: "Your partners or subject-matter experts review the direction and approve content. We handle the writing, formatting, design, scheduling, and workflow, so the content reflects their expertise without pulling them into day-to-day production.",
    },
    {
      icon: LayoutGrid,
      title: "Consistent Monthly Content Across Key Social Channels",
      desc: "Get 12-20 posts per month across LinkedIn, Facebook, and Instagram, planned around your firm\u2019s services, audience, and business goals.",
    },
    {
      icon: PiggyBank,
      title: "Managed Social Media Capacity Without Adding Headcount",
      desc: "Get strategy, writing, design, publishing, and reporting support without recruiting, training, or managing a full-time internal hire. You get the output of a social media team with a simpler operating model.",
    },
  ];

  return (
    <section id="solution" className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            You Need a Social Media Team That Understands<span className="text-[#51B027]"><br /> Professional Services </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="text-center mb-14">
          <p className="text-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We work with professional services firms across law, accounting, consulting, financial advisory, architecture, and B2B services. Every strategy, post, and content calendar is built around expertise, trust, and long sales cycles, not generic social media activity.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                <div className="h-full p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-spark-50 text-spark-600 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sub font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm-body text-gray-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   3b. SEO SECTION  2-col: checklist left + bento image grid right
   ════════════════════════════════════════════════════════════════════════════ */
function SEOSection() {
  const capabilities = [
    "LinkedIn content strategy and posting",
    "Facebook and Instagram content management",
    "Thought leadership content for partners and subject-matter experts",
    "Social media content calendars",
    "Post copywriting and creative design",
    "Content scheduling and publishing",
    "Monthly reporting and optimization",
  ];

  const bentoImages = [
    { src: "/images/work-samples/video-work-1.png", alt: "Video editing portfolio", span: "row-span-2" },
    { src: "/images/work-samples/video-work-2.png", alt: "Motion graphics and reels", span: "" },
    { src: "/images/hero/video-hero.webp", alt: "Video production workflow", span: "" },
    { src: "/images/work-samples/video-work-3.png", alt: "Social media video production", span: "col-span-2" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-5">
            Social Media Management Services Built for <br />
            <span className="text-[#51B027]">Professional and B2B Firms</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="text-center mb-16" delay={0.1}>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Professional firms do not need generic posting. They need social media content that builds trust, explains expertise, and keeps the firm visible before buyers are ready to reach out.
          </p>
        </AnimatedSection>
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <AnimatedSection className="mb-8" delay={0.2}>
              <p className="text-body text-gray-600">
                Get Levrg gives you a managed social media team that can support:
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-3" staggerDelay={0.06}>
              {capabilities.map((cap, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-spark-50 border border-spark-100 hover:border-spark-300 hover:shadow-sm transition-all duration-200">
                    <CheckCircle className="h-5 w-5 text-spark-500 mt-0.5 shrink-0" />
                    <span className="text-sm-body text-gray-700">{cap}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection className="mt-8" delay={0.2}>
              <p className="text-body text-gray-600">
                Social media management for law firms, accounting firms, consulting firms, SaaS companies, and B2B service providers. Your team brings the expertise. We turn it into a consistent social media presence that helps buyers understand what you do, why it matters, and when to start a conversation.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.15} direction="left">
            <div className="grid grid-cols-2 grid-rows-3 gap-3 sm:gap-4 h-[480px] sm:h-[560px]">
              {bentoImages.map((img, i) => (
                <div key={i} className={`relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 group ${img.span}`}>
                  <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   SECTION 4  CLIENT IMPACT
   ──────────────────────────────────────────── */
function ClientImpactSection() {
  const stats = [
    {
      value: 57,
      prefix: "",
      suffix: "%",
      label: "of Buyers Research Online First",
      source: "Hinge Research Institute, 2025",
    },
    {
      value: 0,
      displayText: "4-6 months",
      prefix: "",
      suffix: "",
      label: "Average Revenue Impact Timeline",
      source: "CPA firm added 8 advisory clients within 6 months",
    },
    {
      value: 0,
      displayText: "3-5x",
      prefix: "",
      suffix: "",
      label: "Engagement on Educational Content",
      source: "Educational posts convert better than promotional ones",
    },
  ];

  return (
    <section id="results" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            Visibility That Turns Into <br /> <span className="text-[#51B027]">Inquiries, Trust and Revenue</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="p-8 rounded-xl border border-gray-100 bg-white text-center hover:shadow-md transition-shadow">
                <div className="text-h1 sm:text-display text-gray-900 mb-2">
                  {stat.displayText ? (
                    stat.displayText
                  ) : (
                    <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  )}
                </div>
                <h3 className="text-sub font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-sm-body text-gray-500">{stat.source}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   SECTION 5  CASE EXAMPLES
   ──────────────────────────────────────────── */
function CaseExamplesSection() {
  const cases = [
    {
      firm: "CPA Firm",
      detail: "12 partners, $6M revenue",
      story: "By month 3, we had business owners reaching out because they'd been seeing our content on LinkedIn for weeks. They already trusted us before the first call. Added 6 advisory clients in the first 6 months\u2014revenue we would never have seen otherwise.",
      learning: "Consistent visibility creates warm inbound that outbound can't replicate.",
    },
    {
      firm: "Law Firm",
      detail: "8-person, employment law",
      story: "Within 5 months, LinkedIn had become our #2 lead source. Not from ads\u2014from organic content that positioned us as the go-to employment law authority in our region. Partners are now recognized at industry events from their posts.",
      learning: "Authority positioning compounds. Each post builds on the last, creating momentum that accelerates over time.",
    },
    {
      firm: "Consulting Firm",
      detail: "5 consultants",
      story: "Inbound inquiries tripled within 6 months. We went from chasing every opportunity to choosing the ones that fit. Our content does the qualifying for us\u2014by the time someone reaches out, they already understand our approach.",
      learning: "Educational content pre-qualifies leads. Inquiries from content readers convert at 2-3x the rate of cold leads.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            How Professional Firms Are <span className="text-[#51B027]">Using This</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <AnimatedSection key={i} direction="up" delay={i * 0.1}>
              <div className="h-full flex flex-col">
                <div className="flex-1 p-6 rounded-xl border border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-spark-50 text-spark-600">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{c.firm}</h3>
                      <p className="text-sm-body text-gray-500">{c.detail}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-sm-body">&ldquo;{c.story}&rdquo;</p>
                </div>
                <div className="mt-3 p-4 rounded-xl bg-spark-50/50 border border-spark-100 border-l-4 border-l-spark-500">
                  <p className="text-sm-body font-medium text-[#51B027]">
                    <span className="font-bold">Key Learning:</span> {c.learning}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   SECTION 6  COST COMPARISON
   ──────────────────────────────────────────── */
function CostComparisonSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            The Cost of Staying  <span className="text-red-500">Invisible</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection direction="left">
            <div className="p-6 sm:p-8 rounded-xl border border-spark-200 bg-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-spark-50 text-spark-600">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-sub font-bold text-[#51B027]">The Visible Firm</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-spark-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">$2,500/month</p>
                    <p className="text-sm-body text-gray-500">Dedicated social media team</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-spark-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">10 hrs partner time</p>
                    <p className="text-sm-body text-gray-500">Monthly review and approval only</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-spark-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">ROI 10-20x</p>
                    <p className="text-sm-body text-gray-500">Warm inbound leads, authority positioning</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 rounded-xl bg-spark-50/50 border border-spark-100">
                <p className="text-sm-body text-[#51B027] font-medium">Total cost: ~$2,500/mo with compounding returns</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="p-6 sm:p-8 rounded-xl border border-red-200 bg-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 text-red-500">
                  <XCircle className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-red-600">The Invisible Firm</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">$0 social cost</p>
                    <p className="text-sm-body text-gray-500">But 5x more spent on outbound + ads</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">Endless partner hours</p>
                    <p className="text-sm-body text-gray-500">Writing posts that never get published</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">Declining market share</p>
                    <p className="text-sm-body text-gray-500">Competitors visible, you&apos;re not</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 rounded-xl bg-red-50/50 border border-red-100">
                <p className="text-sm text-red-600 font-medium">Hidden cost: $10K-$25K/mo in lost opportunities + wasted ad spend</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   SECTION 7  HOW IT WORKS
   ──────────────────────────────────────────── */
function HowItWorksSection() {
  const steps = [
    { icon: Phone, title: "Kickoff Interview (Day 1-2)", desc: "30-min call with partners to understand your firm's expertise, ideal clients, voice, and positioning." },
    { icon: Calendar, title: "Content Strategy + Calendar (Day 3-7)", desc: "We build a 90-day content plan aligned to your specialties, compliance requirements, and growth goals." },
    { icon: CheckCircle2, title: "First Content Live (Day 8-14)", desc: "4-6 posts scheduled and published across your platforms. Your firm starts building visibility immediately." },
    { icon: BarChart3, title: "Ongoing + Monthly Optimization (Week 3+)", desc: "12-20 posts monthly. Monthly performance reviews, strategy adjustments, and continuous improvement." },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            From Idea to <span className="text-[#51B027]">Authority</span> in 14 Days
          </h2>
        </AnimatedSection>

        <div className="hidden lg:flex items-start justify-between gap-0 items-stretch">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={i}>
                <div className="flex-1 min-w-0">
                  <div className="p-5 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300 group h-full">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                      <div className="w-8 h-8 rounded-lg bg-spark-50 flex items-center justify-center shrink-0"><Icon className="h-4 w-4 text-spark-600" /></div>
                    </div>
                    <h3 className="text-body font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sl text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex items-center px-1 pt-8">
                    <ArrowRight className="h-5 w-5 text-spark-300 shrink-0" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={i}>
                <AnimatedSection direction="up" delay={i * 0.08}>
                  <div className="p-5 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300 group">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                      <div className="w-8 h-8 rounded-lg bg-spark-50 flex items-center justify-center shrink-0"><Icon className="h-4 w-4 text-spark-600" /></div>
                    </div>
                    <h3 className="text-body font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sl text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedSection>
                {i < steps.length - 1 && (
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

/* ────────────────────────────────────────────
   SECTION 9  TESTIMONIALS
   ──────────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Our LinkedIn presence went from nonexistent to the most visible firm in our market. Not one partner had to write a post. We're getting inquiries from businesses who've been following our content for months.",
      name: "Sarah Thompson",
      title: "Partner",
      firm: "Thompson & Associates CPAs",
      size: "6 partners",
    },
    {
      quote: "We tried having one partner post occasionally. Never happened. Now we have consistent content that actually sounds like us. Our employment law expertise is finally visible to the people who need it.",
      name: "Michael Chen",
      title: "Managing Partner",
      firm: "Chen Employment Law",
      size: "8-person firm",
    },
    {
      quote: "We were too busy doing client work to build our own brand. That changed completely. Our consultants are now recognized as thought leaders in organizational development, and the inbound speaks for itself.",
      name: "Patricia Martinez",
      title: "Founder",
      firm: "Martinez Organizational Development",
      size: "5 consultants",
    },
    {
      quote: "Financial advisory is relationship-driven. But how do you start relationships before the first meeting? Content. Their team understands our compliance requirements and creates posts that build trust without crossing lines.",
      name: "David Rodriguez",
      title: "Wealth Advisor",
      firm: "Rodriguez Financial Group",
      size: "4 advisors",
    },
    {
      quote: "I was skeptical that anyone could capture our firm's voice. After reviewing the first batch of posts, I was convinced. Our authority positioning on LinkedIn has directly led to new client engagements.",
      name: "Jennifer Walsh",
      title: "Senior Partner",
      firm: "Walsh & Associates Law",
      size: "12 attorneys",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
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
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            Firms That Don&apos;t <span className="text-[#51B027]">Look Back</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <button onClick={goPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors" aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button onClick={goNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-spark-50 hover:border-spark-200 transition-colors" aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={current} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }} className="p-8 sm:p-10 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <Quote className="h-10 w-10 text-spark-300 mb-5" />
                <p className="text-sub sm:text-h3 text-gray-700 italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-spark-100 flex items-center justify-center">
                      <span className="text-sl font-bold text-spark-700">{t.name.split(" ").map((n: string) => n[0]).join("")}</span>
                    </div>
                    <div>
                      <p className="text-sm-body font-semibold text-gray-900">{t.name}</p>
                      <p className="text-sl text-gray-500">{t.title} &middot; {t.size}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-spark-500" : "w-2 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   SECTION 10  WHY CHOOSE US
   ──────────────────────────────────────────── */
function WhyChooseUsSection() {
  const items = [
    { icon: Scale, title: "Built for Professional Services", desc: "We don't work with restaurants, e-commerce, or lifestyle brands. Every strategy, post, and calendar is designed for firms like yours." },
    { icon: Lightbulb, title: "Content That Demonstrates Expertise", desc: "Not generic motivational quotes. Real thought leadership that positions your partners as the authorities they are." },
    { icon: Users, title: "Full Team, Not a Single Hire", desc: "Strategist, writer, designer, and account manager. A complete social media department for less than one in-house hire." },
    { icon: Target, title: "Compliance-Aware From Day One", desc: "We understand the rules professional services firms operate under. Every post is reviewed for compliance before publication." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            We Specialize in <span className="text-[#51B027]">Professional Services</span><br />We Understand Your World
          </h2>
        </AnimatedSection>

        <AnimatedSection className="text-center mb-14">
          <p className="text-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
            This isn&apos;t a side service. It&apos;s our only focus. Every member of our team is trained on the nuances of professional services marketing.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                <div className="h-full p-6 rounded-xl border border-gray-100 bg-white">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-spark-50 text-spark-600 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sub font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm-body text-gray-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   SECTION 11  FAQ
   ──────────────────────────────────────────── */
function FAQSection() {
  const faqs = [
    { q: "How much partner time is required?", a: "Your partners do not need to write posts or manage the content process. We usually need a short kickoff conversation, occasional input on key topics, and quick approval on planned content. The goal is to capture your firm\u2019s expertise without turning your experts into content managers." },
    { q: "What platforms do you post on?", a: "We typically support LinkedIn, Facebook, and Instagram. For many professional services and B2B firms, LinkedIn is the primary channel because it is where decision-makers, referral partners, and industry peers are most active." },
    { q: "How quickly will we see results?", a: "Your first content can usually go live within 14 days. Visibility, engagement, and inbound interest usually build over time as your firm publishes consistently and your audience becomes more familiar with your expertise." },
    { q: "How is this different from hiring an in-house social media manager?", a: "An in-house hire gives you one person to recruit, train, manage, and retain. Get Levrg gives you a managed team across strategy, copy, design, publishing, and reporting, with workflow support already built in." },
    { q: "What does the content look like?", a: "The content is designed to feel professional, useful, and aligned with your firm\u2019s voice. It can include thought leadership posts, educational carousels, service-focused posts, team credibility content, client problem breakdowns, and platform-specific social graphics." },
    { q: "Is the content compliant with professional services regulations?", a: "We build the content workflow around your approval process and industry requirements. Every post can be reviewed before publishing, and we avoid unsupported claims, risky language, or content that does not fit your professional standards." },
    { q: "What if we want to cancel?", a: "You are not locked into a long-term internal hire or a complex agency retainer. The service is designed to give your firm flexible social media capacity without adding permanent headcount." },
    { q: "Do you create content for different practice areas within one firm?", a: "Yes. We can build content around different service lines, practice areas, partner specialties, or audience segments, while keeping the firm\u2019s overall voice and positioning consistent." },
  ];

  const col1 = faqs.slice(0, 4);
  const col2 = faqs.slice(4, 8);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            Frequently Asked <span className="text-[#51B027]">Questions</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection direction="left">
            <div className="rounded-xl border border-gray-100 bg-white p-6 sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                {col1.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-body font-semibold text-gray-900 hover:text-spark-600 hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-body text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="rounded-xl border border-gray-100 bg-white p-6 sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                {col2.map((faq, i) => (
                  <AccordionItem key={i + 4} value={`item-${i + 4}`}>
                    <AccordionTrigger className="text-left text-body font-semibold text-gray-900 hover:text-spark-600 hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-body text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   SECTION 12  FINAL CTA
   ──────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section className="py-16 sm:py-24 bg-spark-800">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 sm:text-h1 text-white mb-4">
              Ready to Build a Social Presence <span><br />Your Firm Can Be Proud Of?</span>
            </h2>
            <p className="text-body text-spark-200 leading-relaxed mb-8 max-w-xl mx-auto">
              Turn your firm&apos;s expertise into consistent content, stronger visibility, and more informed inbound conversations. It starts with a focused strategy call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="ghost" size="lg" className="bg-white text-spark-800 hover:bg-spark-50 hover:text-spark-800 px-8 py-6 text-base font-semibold rounded-xl shadow-lg transition-all" onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}>
                Get Your Social Media Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="ghost" size="lg" className="bg-void hover:bg-surface-dark text-white hover:text-white px-8 py-6 text-base font-semibold rounded-xl border-0 transition-all">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Schedule a Strategy Call
              </Button>
            </div>
            <p className="mt-6 text-sm-body text-spark-300">No contracts. No spam. Cancel anytime.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// // ─── Inline Fractional Team Section ───
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

/* ────────────────────────────────────────────
   MAIN EXPORT
   ──────────────────────────────────────────── */
function SocialPageContent() {
  return (
    <main>
      <HeroSection />
      <TrustedByMarquee />
      <ProblemSection />
      <SolutionSection />
      <SEOSection />
      <ToolsWeUseSection />
      <ClientImpactSection />
      <CaseExamplesSection />
      <WorkSampleBentoGrid />
      <CostComparisonSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <FAQSection />
      <FinalCTASection />
      {/* <FractionalTeamSection /> */}
    </main>
  );
}

export function SocialPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20">
        <SocialPageContent />
      </main>
      <ServiceCapabilities />
      <Footer />
    </div>
  );
}
