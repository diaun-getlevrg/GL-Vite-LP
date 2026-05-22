import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  Video,
  AlertTriangle,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Users,
  CheckCircle,
  X,
  Trophy,
  MessageCircle,
  UserCheck,
  Rocket,
  Star,
  DollarSign,
  CalendarDays,
  Quote,
  ClipboardList,
  UserX,
  Phone,
  Lock,
  Mail,
  ChevronLeft,
  ChevronRight,
  Menu,
  Check,
  Film,
  Clapperboard,
  Palette,
  Sparkles,
  Play,
  RotateCcw,
  Share2,
  Globe,
  Send,
  Database,
  Layers,
  Megaphone,
  Target,
  HeartHandshake,
  ArrowUpRight,
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

function FloatingElement({
  children,
  className = "",
  amplitude = 8,
  duration = 4,
}: {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
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
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
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
   INLINE: TrustedByMarquee
   ════════════════════════════════════════════════════════════════════════════ */

interface Logo {
  src: string;
  alt: string;
}

const trustedLogos: Logo[] = [
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
  { src: "/logos/b2b/Zoomer.webp", alt: "Zoomer" },
];

function TrustedByMarquee() {
  const halfLength = Math.ceil(trustedLogos.length / 2);
  const firstRow = trustedLogos.slice(0, halfLength);
  const secondRow = trustedLogos.slice(halfLength);

  return (
    <section className="py-10 sm:py-14 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8">
          <p className="text-caption text-gray-400 tracking-wider">
            Trusted by {trustedLogos.length}+ B2B companies generating $50M+ in revenue
          </p>
        </AnimatedSection>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative w-full overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-left will-change-transform">
          {[...firstRow, ...firstRow].map((logo, i) => (
            <div
              key={`row1-${logo.alt}-${i}`}
              className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center h-14 sm:h-16 w-[140px]"
            >
              <img
                src={logo.src}
                alt={`${logo.alt} company logo`}
                width={140}
                height={56}
                className="h-10 sm:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative w-full overflow-x-hidden mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-right will-change-transform">
          {[...secondRow, ...secondRow].map((logo, i) => (
            <div
              key={`row2-${logo.alt}-${i}`}
              className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center h-14 sm:h-16 w-[140px]"
            >
              <img
                src={logo.src}
                alt={`${logo.alt} company logo`}
                width={140}
                height={56}
                className="h-10 sm:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   INLINE: ToolsWeUseSection (Video only)
   ════════════════════════════════════════════════════════════════════════════ */

interface ToolItem {
  src: string;
  alt: string;
}

const videoTools: ToolItem[] = [
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
  { src: "/logos/applogos/Audacity.webp", alt: "Audacity" },
];

const videoToolsContent = {
  title: "The Tools We Use to Edit Your Videos",
  description:
    "Professional-grade editing software combined with AI-powered tools for speed without sacrificing quality.",
  bullets: [
    "Adobe Creative Cloud full suite",
    "AI-powered editing & caption tools",
    "Professional motion graphics & VFX",
    "Collaborative review & approval workflows",
  ],
};

function ToolsWeUseSection() {
  return (
    <section className="py-16 sm:py-24 bg-spark-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* LEFT  40%  CTA Info */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
                {videoToolsContent.title}
              </h2>
              <p className="text-body text-gray-600 mb-6">
                {videoToolsContent.description}
              </p>
              <ul className="space-y-3">
                {videoToolsContent.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#307A0F] mt-0.5 shrink-0" />
                    <span className="text-sm-body text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* RIGHT  60%  3x4 Logo Marquee (bottom-to-top) */}
          <div className="lg:col-span-3">
            <div className="relative h-[420px] sm:h-[500px] overflow-hidden rounded-2xl bg-white border border-gray-200 p-6">
              {/* Fade overlay  top */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-spark-50 to-transparent z-10 pointer-events-none rounded-t-2xl" />
              {/* Fade overlay  bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-spark-50 to-transparent z-10 pointer-events-none rounded-b-2xl" />

              {/* Logo grid  3 columns, scrolling up */}
              <div className="animate-marquee-up will-change-transform">
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {[...videoTools, ...videoTools, ...videoTools, ...videoTools].map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center rounded-xl bg-white border border-gray-100 p-4 sm:p-5 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 group"
                    >
                      <img
                        src={tool.src}
                        alt={tool.alt}
                        width={140}
                        height={56}
                        className="h-16 sm:h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                      />
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

/* ════════════════════════════════════════════════════════════════════════════
   INLINE: WorkSampleBentoGrid (Video only)
   ════════════════════════════════════════════════════════════════════════════ */

interface WorkSample {
  src: string;
  alt: string;
  label: string;
}

const videoSamples: WorkSample[] = [
  { src: "/images/work-samples/video-work-1.png", alt: "Video Editing Portfolio", label: "Editing Portfolio" },
  { src: "/images/work-samples/video-work-2.png", alt: "Motion Graphics & Reels", label: "Motion Graphics" },
  { src: "/images/work-samples/video-work-3.png", alt: "Editing Workflow", label: "Production Workflow" },
];

const videoSamplesTitle = { before: "See Our Video", accent: "Editing Work", after: "" };

function WorkSampleBentoGrid() {
  const carouselItems = [...videoSamples, ...videoSamples, ...videoSamples, ...videoSamples];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
            {videoSamplesTitle.before} <span className="text-[#307A0F]">{videoSamplesTitle.accent}</span>
            {videoSamplesTitle.after ? ` ${videoSamplesTitle.after}` : ""}
          </h2>
          <p className="text-body text-gray-500 max-w-xl mx-auto">
            Real results from real clients. Here&apos;s a glimpse of what we deliver.
          </p>
        </AnimatedSection>
      </div>

      {/* Full-width continuous carousel */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-left-slow will-change-transform">
          {[...carouselItems, ...carouselItems].map((sample, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-3 sm:mx-4 w-[320px] sm:w-[400px] lg:w-[480px] group"
            >
              <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-[220px] sm:h-[260px] lg:h-[300px]">
                  <img
                    src={sample.src}
                    alt={sample.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-sm-body font-semibold text-gray-900">
                      {sample.label}
                    </span>
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

/* ════════════════════════════════════════════════════════════════════════════
   INLINE: HeroFormIntro (Video only — VideoAnimation + Form swap)
   ════════════════════════════════════════════════════════════════════════════ */

const INTRO_DURATION = 6000;

function VideoAnimation() {
  const timelineClips = [
    { label: "Intro", color: "bg-sky-400", width: "15%", delay: 0.2 },
    { label: "A-Roll", color: "bg-spark-400", width: "35%", delay: 0.5 },
    { label: "B-Roll", color: "bg-rose-400", width: "20%", delay: 0.8 },
    { label: "Outro", color: "bg-amber-400", width: "12%", delay: 1.1 },
  ];

  const deliverables = [
    { icon: Film, label: "Long-form Edit", value: "4/mo", delay: 0.5, accent: "bg-sky-50 border-sky-200", iconColor: "text-sky-500", valueColor: "text-sky-700" },
    { icon: Video, label: "Shorts / Reels", value: "12/mo", delay: 0.8, accent: "bg-spark-50 border-spark-200", iconColor: "text-spark-600", valueColor: "text-[#307A0F]" },
    { icon: Sparkles, label: "Motion Graphics", value: "8/mo", delay: 1.1, accent: "bg-teal-50 border-teal-200", iconColor: "text-teal-500", valueColor: "text-teal-700" },
    { icon: Palette, label: "Thumbnails", value: "6/mo", delay: 1.4, accent: "bg-amber-50 border-amber-200", iconColor: "text-amber-500", valueColor: "text-amber-700" },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
      {/* Subtle pattern bg */}
      <div className="absolute inset-0 opacity-[0.03] bg-dot-pattern" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative flex items-center gap-2 mb-5"
      >
        <div className="w-7 h-7 rounded-lg bg-spark-100 flex items-center justify-center">
          <Clapperboard className="h-3.5 w-3.5 text-spark-600" />
        </div>
        <span className="text-sm font-semibold text-gray-900 tracking-wide">Video Production</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[11px] text-red-500 font-medium">REC</span>
        </div>
      </motion.div>

      {/* Video Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative rounded-xl bg-gradient-to-br from-spark-50 to-sky-50 border border-spark-200 mb-4 overflow-hidden"
      >
        <div className="aspect-video flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-spark-100/40 to-sky-100/40" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-full bg-white border-2 border-spark-300 flex items-center justify-center shadow-lg z-10"
          >
            <Play className="h-5 w-5 text-spark-600 ml-0.5" />
          </motion.div>
          {/* Timecode */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-gray-900/70 text-[10px] font-mono text-white/90"
          >
            00:02:34 / 00:08:12
          </motion.div>
        </div>
      </motion.div>

      {/* Editing Timeline */}
      <div className="mb-4">
        <p className="text-[11px] text-gray-500 mb-2 font-medium">Timeline</p>
        <div className="relative">
          <div className="flex items-stretch gap-0.5 h-7 rounded-lg overflow-hidden bg-gray-100">
            {timelineClips.map((clip, i) => (
              <motion.div
                key={clip.label}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: clip.delay, ease: "easeOut" }}
                style={{ width: clip.width, transformOrigin: "left" }}
                className={`${clip.color} flex items-center justify-center relative`}
              >
                <span className="text-[9px] font-semibold text-white/90 z-10">{clip.label}</span>
              </motion.div>
            ))}
          </div>
          {/* Playhead */}
          <div className="relative h-0">
            <motion.div
              initial={{ left: "0%" }}
              animate={{ left: "82%" }}
              transition={{ duration: 4, delay: 1.5, ease: "linear" }}
              className="absolute -top-[34px] w-0.5 h-[34px] bg-red-500 z-20"
            />
          </div>
        </div>
      </div>

      {/* Deliverable Stats */}
      <div className="grid grid-cols-2 gap-2">
        {deliverables.map((d, i) => {
          const Icon = d.icon;
          return (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: d.delay + 1.5, type: "spring", stiffness: 200 }}
              className={`p-2.5 rounded-xl border ${d.accent}`}
            >
              <Icon className={`h-3 w-3 ${d.iconColor} mb-1`} />
              <p className={`text-sm font-bold ${d.valueColor} leading-none`}>{d.value}</p>
              <p className="text-[10px] text-gray-500 mt-0.5">{d.label}</p>
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
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, INTRO_DURATION);
    return () => clearTimeout(timer);
  }, [showIntro, introKey]);

  const replayIntro = useCallback(() => {
    setShowIntro(true);
    setIntroKey((k) => k + 1);
  }, []);

  return (
    <div className="lg:col-span-2">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key={`intro-${introKey}`}
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative min-h-[480px] sm:min-h-[520px]"
          >
            <VideoAnimation />
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {children}

            {/* Floating Replay Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
              onClick={replayIntro}
              className="absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-white border border-spark-300 flex items-center justify-center hover:bg-spark-600 hover:border-spark-500 transition-all duration-300 group shadow-md"
              title="Replay intro animation"
              aria-label="Replay intro animation"
            >
              <RotateCcw className="h-3.5 w-3.5 text-spark-600 group-hover:text-white transition-colors" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   INLINE: Header (Video page specific)
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

  const navItems = [
    { label: "Problems", href: "#problems" },
    { label: "Solution", href: "#solution" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
  ];
  const ctaText = "See How It Works";
  const ctaTarget = "#lead-form";

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
   INLINE: Footer
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

/* ════════════════════════════════════════════════════════════════════════════
   1. HERO SECTION
   ════════════════════════════════════════════════════════════════════════════ */

function HeroSection() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you?service=video-editing");
  };

  return (
    <section
      id="lead-form"
      className="relative overflow-hidden bg-white min-h-[680px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/video-hero.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061512]/95 via-[#061512]/70 to-transparent" />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-3">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8"
            >
              <Zap className="h-3.5 w-3.5 text-spark-300" />
              <span className="text-sm-body font-medium text-white">
                Video Editing Services
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-h1 sm:text-display lg:text-display-sm text-white mb-6"
            >
              Managed Video Editing Services for Teams That

              <br />
              <span className="text-[#51B027]">
                Need More Content <br /> Out the Door
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body sm:text-sub text-gray-300 max-w-2xl mb-8"
            >
              Get a dedicated video editing team for all your social video needs. We handle the editors, project management, quality checks, and turnaround, so your team can publish more.
            </motion.p>

            {/* Metrics bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10"
            >
              {[
                { icon: Zap, text: "Launch in 7 Days" },
                { icon: CalendarDays, text: "48-Hour Standard Turnaround" },
                { icon: TrendingUp, text: "80% Cost Savings" },
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

            {/* Power testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative p-5 sm:p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm max-w-2xl"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-spark-500 fill-spark-500" />
                ))}
                <span className="ml-2 text-caption text-spark-300">
                  Power Testimonial
                </span>
              </div>
              <p className="text-sm-body sm:text-body text-gray-200 italic mb-3">
                &ldquo;We went from publishing one product video a quarter to four
                per month. Clients have no idea the editing isn&apos;t in-house. This
                single service line generates{" "}
                <span className="text-spark-400 font-semibold not-italic">$12K monthly recurring</span>.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-spark-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-spark-700">MK</span>
                </div>
                <div>
                  <p className="text-sm-body font-semibold text-white">Miles Kaiburn</p>
                  <p className="text-xs text-gray-400">CEO | Old Town Media</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — FORM WITH INTRO ANIMATION */}
          <HeroFormIntro>
            <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl p-6 sm:p-8">

              <div className="mb-6">
                <h3 className="text-sub font-bold text-gray-900 mb-1.5">
                  Get Your Video Editing Team
                </h3>

                <p className="text-sm-body text-gray-500">
                  Custom pricing + team structure in 24 hours. Zero obligation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="hero-firstName" className="text-sm-body text-gray-700 mb-1.5">
                      First Name
                    </Label>
                    <Input
                      id="hero-firstName"
                      placeholder="John"
                      className="h-10"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-lastName" className="text-sm-body text-gray-700 mb-1.5">
                      Last Name
                    </Label>
                    <Input
                      id="hero-lastName"
                      placeholder="Smith"
                      className="h-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="hero-workEmail" className="text-sm-body text-gray-700 mb-1.5">
                    Work Email
                  </Label>
                  <Input
                    id="hero-workEmail"
                    type="email"
                    placeholder="john@company.com"
                    className="h-10"
                  />
                </div>

                <div>
                  <Label htmlFor="hero-phoneNumber" className="text-sm-body text-gray-700 mb-1.5">
                    Phone Number
                  </Label>
                  <Input
                    id="hero-phoneNumber"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="h-10"
                  />
                </div>

                <div>
                  <Label htmlFor="hero-company" className="text-sm-body text-gray-700 mb-1.5">
                    Company
                  </Label>
                  <Input
                    id="hero-company"
                    placeholder="Acme Inc."
                    className="h-10"
                  />
                </div>

                <Button
                  variant="ghost"
                  type="submit"
                  className="w-full bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-11 rounded-lg text-base transition-all"
                >
                  Get Your Video Editing Team
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

/* ════════════════════════════════════════════════════════════════════════════
   2. PROBLEMS SECTION
   ════════════════════════════════════════════════════════════════════════════ */
function ProblemSection() {
  const problems = [
    {
      icon: Video,
      title: "The Capacity Trap",
      headline: "Your Clients Want More Video",
      body: "Video demand is outpacing your team\u2019s capacity by 3x. Every project you turn down is revenue walking out the door.",
      painPoint: "Every hour spent editing is an hour NOT spent on strategy, client relationships, or growth.",
    },
    {
      icon: UserX,
      title: "The Hiring Nightmare",
      headline: "Hiring a Full-Time Editor Costs More Than You Think",
      body: "A full-time video editor in North America runs $6,500+/month with benefits, taxes, and overhead. Then there\u2019s the 3-month ramp-up before they\u2019re productive.",
      painPoint: "That\u2019s $20K+ spent before your first real deliverable.",
    },
    {
      icon: AlertTriangle,
      title: "The Freelancer Problem",
      headline: "Freelancers Are Unreliable at Scale",
      body: "Ghosting before deadlines. Inconsistent quality. Different styles on every project. You spend 10+ hours per week managing people who should be managing themselves.",
      painPoint: "You didn\u2019t start an agency to become a freelance project manager.",
    },
  ];

  return (
    <section id="problems" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-h2 sm:text-h1 text-gray-900 max-w-3xl mx-auto">
            You&apos;re Facing the Same Bottleneck That{" "}
            <span className="text-[#51B027]"> <br />35+ Agencies Already Solved</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="space-y-6" staggerDelay={0.1}>
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <StaggerItem key={i}>
                <div className="relative p-6 sm:p-8 rounded-xl bg-white border border-gray-100 border-l-4 border-l-red-400 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-500 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-caption text-gray-400 mb-1">
                        {problem.title}
                      </p>
                      <h3 className="text-sub font-bold text-gray-900 mb-3">{problem.headline}</h3>
                      <p className="text-gray-600 mb-4 text-sm-body sm:text-body">
                        {problem.body}
                      </p>
                      <div className="inline-flex items-start gap-2 px-4 py-3 rounded-lg bg-red-50/50 border border-red-100 text-red-700 text-sm-body">
                        <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                        <span className="font-medium">{problem.painPoint}</span>
                      </div>
                    </div>
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

/* ════════════════════════════════════════════════════════════════════════════
   3. SOLUTION SECTION
   ════════════════════════════════════════════════════════════════════════════ */
function SolutionSection() {
  const differentiators = [
    {
      icon: Shield,
      title: "Agency-Grade Output Without Agency-Level Overhead",
      desc: "Dedicated team with proven workflows refined across 35+ agency partnerships. Quality guarantees with built-in revision rounds.",
    },
    {
      icon: Zap,
      title: "Live in 7 Days, Not 7 Months",
      desc: "24-hour talent matching based on your niche. Onboarding call within 48 hours. First deliverables by end of week one.",
    },
    {
      icon: DollarSign,
      title: "Lower Overhead Than Hiring In-House",
      desc: "Get reliable editing capacity without payroll, benefits, recruiting delays, or full-time headcount commitments.",
    },
    {
      icon: UserCheck,
      title: "Managed Team, Zero Management",
      desc: "Your dedicated project manager owns briefs, deadlines, quality checks, and delivery coordination. You stay focused on content strategy and client relationships.",
    },
  ];

  return (
    <section id="solution" className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <h2 className="text-h2 sm:text-h1 text-gray-900">
            Stop Choosing Between Speed, Cost, and Quality
            <br />
            <span className="text-[#51B027]">Get All Three</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="text-center mb-16" delay={0.1}>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            We recruit the top 1% of offshore video editors with agency experience, strong portfolios, and clear communication skills. Then we manage the workflow, deadlines, and quality checks, so you get reliable output without managing another team.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={i}>
                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300 group h-full border-l-4 border-l-spark-400">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-spark-50 text-spark-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sub font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm-body text-gray-600">{item.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   3b. SEO SECTION  2-col: checklist left + bento image grid right
   ════════════════════════════════════════════════════════════════════════════ */
function SEOSection() {
  const capabilities = [
    "Short-form video editing for Reels, Shorts, and TikTok",
    "Long-form YouTube and podcast editing",
    "B2B product demo videos",
    "Social media video production",
    "Motion graphics and branded video assets",
    "White label video editing for agencies",
    "Ongoing video editing support for marketing teams",
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
            Video Editing Services Built for <br />
            <span className="text-[#51B027]">High-Volume Content Teams</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="text-center mb-16" delay={0.1}>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Need more videos without adding another full-time hire? Get Levrg gives you a
            managed video editing team that can support recurring content production across
            social, YouTube, paid media, sales enablement, and client campaigns.
          </p>
        </AnimatedSection>
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT — content + checklist */}
          <div>
            <AnimatedSection className="mb-8" delay={0.2}>
              <p className="text-body text-gray-600">
                Get Levrg gives you a professional video team that can support:
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
                You bring the content goals. We bring the editors, workflow, project management,
                and production rhythm to keep publishing consistent.
              </p>
            </AnimatedSection>
          </div>

          {/* RIGHT — bento image grid */}
          <AnimatedSection delay={0.15} direction="left">
            <div className="grid grid-cols-2 grid-rows-3 gap-3 sm:gap-4 h-[480px] sm:h-[560px]">
              {bentoImages.map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 group ${img.span}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* subtle gradient overlay */}
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

/* ════════════════════════════════════════════════════════════════════════════
   4. ROI / RESULTS SECTION
   ════════════════════════════════════════════════════════════════════════════ */
function ROISection() {
  const stats = [
    {
      value: "5x",
      label: "Faster at 1/20th the Cost",
      author: "Brendan Taylor, CEO | Maverick VFX",
    },
    {
      value: "10%",
      label: "Total Employee Costs Cut",
      author: "Steven Riskey, CEO | Strop Insights",
    },
    {
      value: "$500/hr \u2192 $20/hr",
      label: "Your Strategies Executed at Scale",
      author: "Miles Kaiburn, CEO | Old Town Media",
    },
  ];

  return (
    <section id="results" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-h2 sm:text-h1 text-gray-900">
            What <span className="text-[#51B027]">35+ Agencies</span> Have Already Proven
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="p-8 rounded-xl border border-gray-100 bg-white text-center group hover:shadow-lg transition-shadow duration-300">
                <div className="text-h1 sm:text-h2 lg:text-display-sm text-[#51B027] mb-4">
                  {stat.value}
                </div>
                <p className="text-gray-900 text-sub font-semibold mb-3">{stat.label}</p>
                <p className="text-gray-500 text-sm-body">&mdash; {stat.author}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   5. COMPARISON SECTION
   ════════════════════════════════════════════════════════════════════════════ */
function ComparisonSection() {
  const rows = [
    { label: "Monthly Cost", na: "$6,500+", us: "Up to 80% less" },
    { label: "Setup Timeline", na: "3 months", us: "14 days" },
    { label: "Ramp-Up", na: "90 days", us: "Week 1" },
    { label: "Benefits", na: "Included (expensive)", us: "Not included (saves you)" },
    { label: "Management", na: "Full supervision required", us: "Dedicated PM owns it" },
    { label: "Scalability", na: "Fixed headcount", us: "Add roles on demand" },
    { label: "Risk", na: "Single point of failure", us: "Managed team backup" },
    { label: "Contracts", na: "2-year employment", us: "No lock-in" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-h2 sm:text-h1 text-gray-900">
            Hire in North America vs{" "}
            <span className="text-[#51B027]">Partner With Us</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left px-6 py-4 bg-gray-50 text-gray-600 font-semibold w-1/3 border-b border-gray-200">
                    Factor
                  </th>
                  <th className="text-center px-6 py-4 bg-gray-50 text-gray-600 font-semibold w-1/3 border-b border-gray-200">
                    Hire in North America
                  </th>
                  <th className="text-center px-6 py-4 bg-spark-50 text-sm-body text-[#51B027] font-semibold w-1/3 border-b border-spark-200">
                    Partner With Us
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">{row.label}</td>
                    <td className="px-6 py-4 text-center text-gray-500">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-4 w-4 text-red-400 shrink-0" />
                        <span>{row.na}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm-body text-[#51B027] font-medium bg-spark-50/50">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-4 w-4 text-spark-500 shrink-0" />
                        <span>{row.us}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   6. HOW IT WORKS SECTION
   ════════════════════════════════════════════════════════════════════════════ */
function HowItWorksSection() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Submit Your Brief",
      timeline: "Day 1",
      desc: "10 minutes is all it takes. Share your requirements, brand guidelines, and content goals.",
    },
    {
      icon: Users,
      title: "Meet Your Team",
      timeline: "Day 2-3",
      desc: "Intro call with your dedicated PM. Workflow setup, tool access, and communication channels configured.",
    },
    {
      icon: CheckCircle,
      title: "First Deliverables",
      timeline: "Day 7",
      desc: "Brand-compliant edits delivered. Revision rounds included. Production-grade quality from day one.",
    },
    {
      icon: TrendingUp,
      title: "Scale On Your Terms",
      timeline: "Week 2+",
      desc: "Monthly flexibility. Scale up for big campaigns or down during slow periods. No penalties.",
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-h2 sm:text-h1 text-gray-900">
            Live in One Week{" "}
            <span className="text-[#51B027]">Not One Quarter</span>
          </h2>
        </AnimatedSection>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex items-start justify-between gap-0 items-stretch">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={i}>
                <div className="flex-1 min-w-0">
                  <div className="p-5 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 group h-full">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-spark-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-4 w-4 text-spark-600" />
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-spark-100 text-spark-700 text-[11px] font-semibold">
                        <Clock className="h-2.5 w-2.5" />
                        {step.timeline}
                      </span>
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

        {/* Mobile/Tablet: vertical stack */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={i}>
                <AnimatedSection direction="up" delay={i * 0.08}>
                  <div className="p-5 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 group">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-full bg-spark-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-spark-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-4 w-4 text-spark-600" />
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-spark-100 text-spark-700 text-[11px] font-semibold">
                        <Clock className="h-2.5 w-2.5" />
                        {step.timeline}
                      </span>
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

/* ════════════════════════════════════════════════════════════════════════════
   7. TESTIMONIALS SECTION
   ════════════════════════════════════════════════════════════════════════════ */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We added video as a service line without hiring a single editor. Our margins went up 40% on video projects in the first quarter.",
      name: "Miles Kaiburn",
      title: "CEO",
      company: "Old Town Media",
    },
    {
      quote: "The quality is indistinguishable from our in-house team. Our clients never know the difference, and our margins have never been better.",
      name: "Brendan Taylor",
      title: "CEO",
      company: "Maverick VFX",
    },
    {
      quote: "We went from turning down video projects to fulfilling them all. This team handles everything  we just approve and deliver.",
      name: "Steven Riskey",
      title: "CEO",
      company: "Strop Insights",
    },
    {
      quote: "I was skeptical about offshore talent. After week one, I realized these editors are more skilled than most people I interviewed locally at 3x the price.",
      name: "Rachel Chen",
      title: "Creative Director",
      company: "Prism Agency",
    },
    {
      quote: "Onboarding took 3 days, not 3 months. Our first deliverables were client-ready by the end of week one. I wish we had done this sooner.",
      name: "David Park",
      title: "Founder",
      company: "Northstar Digital",
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
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-h2 sm:text-h1 text-gray-900">
            Agencies Don&apos;t{" "}
            <span className="text-[#51B027]">Look Back</span>
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
                className="p-8 sm:p-10 rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <Quote className="h-10 w-10 text-spark-300 mb-5" />
                <p className="text-sub sm:text-h3 text-gray-700 italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-spark-500 fill-spark-500" />
                  ))}
                </div>
                <div className="pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-spark-100 flex items-center justify-center">
                      <span className="text-sl font-bold text-spark-700">{t.name.split(" ").map((n: string) => n[0]).join("")}</span>
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

/* ════════════════════════════════════════════════════════════════════════════
   8. WHY CHOOSE US SECTION
   ════════════════════════════════════════════════════════════════════════════ */
function WhyChooseUsSection() {
  const items = [
    {
      icon: Trophy,
      title: "Proven Track Record",
      desc: "35+ agencies trust us with their video output. We\u2019ve delivered thousands of edits with a 98% satisfaction rate.",
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      desc: "Your dedicated PM is a Slack message away. No ticket queues, no offshore call centers  real humans, real time.",
    },
    {
      icon: UserCheck,
      title: "Vetted Talent Only",
      desc: "Every editor passes a rigorous portfolio review, skills test, and English fluency check. We hire less than 1% of applicants.",
    },
    {
      icon: Rocket,
      title: "Built for Scale",
      desc: "Start with one editor. Scale to a full team. Same workflow, same PM, same quality  just more capacity when you need it.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-h2 sm:text-h1 text-gray-900">
            Not Another Freelancer Marketplace{" "}
            <span className="text-[#51B027]"><br />This Is Your Dedicated Team</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={i}>
                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300 group h-full border-l-4 border-l-spark-400 bg-spark-50/30">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-spark-50 text-spark-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sub font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm-body text-gray-600">{item.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   9. FAQ SECTION
   ════════════════════════════════════════════════════════════════════════════ */
function FAQSection() {
  const faqs = [
    {
      q: "How fast can my video editing team be up and running?",
      a: "Most teams can start within 7 days. We use the first few days to understand your brand, content goals, editing style, review process, and publishing needs. From there, your project manager sets up the workflow and starts moving the first deliverables through production.",
    },
    {
      q: "What types of videos can your team edit?",
      a: "We support short-form social videos, YouTube videos, podcast clips, product demos, B2B explainers, promotional videos, motion graphics, thumbnails, and recurring social video content. The service is built for teams that need consistent video output, not one-off editing help.",
    },
    {
      q: "Is this the same as hiring a freelance video editor?",
      a: "No. A freelancer usually gives you one person to manage. Get Levrg gives you a managed video editing service with vetted editors, project management, quality checks, and backup capacity. That means fewer missed deadlines and less day-to-day coordination for your team.",
    },
    {
      q: "Can agencies use this as white label video editing?",
      a: "Yes. Agencies can use Get Levrg as a white label video editing partner for client campaigns, social content, YouTube production, podcast clips, and recurring video deliverables.",
    },
    {
      q: "How do you keep videos on-brand?",
      a: "We start with your brand guidelines, examples, editing preferences, and feedback loops. Your dedicated project manager keeps those standards documented, so each new edit becomes easier to brief, review, and approve.",
    },
    {
      q: "Can I scale video output up or down?",
      a: "Yes. The team can scale based on campaign volume, client demand, and monthly production needs. That gives you more flexibility than fixed in-house hiring.",
    },
  ];

  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3, 6);

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-h2 sm:text-h1 text-gray-900">
            Common{" "}
            <span className="text-[#51B027]">Questions</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {leftFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-left-${i}`}>
                    <AccordionTrigger className="px-6 text-left text-gray-900 font-medium hover:no-underline hover:text-spark-600 transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 text-gray-600 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {rightFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-right-${i}`}>
                    <AccordionTrigger className="px-6 text-left text-gray-900 font-medium hover:no-underline hover:text-spark-600 transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 text-gray-600 leading-relaxed">
                      {faq.a}
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

/* ════════════════════════════════════════════════════════════════════════════
   10. FINAL CTA SECTION
   ════════════════════════════════════════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <section className="py-16 sm:py-24 bg-spark-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-h2 sm:text-h1 text-white mb-6">
            Ready to Stop{" "}
            <span>Managing Freelancers?</span>
          </h2>
          <p className="text-body text-spark-200 max-w-2xl mx-auto mb-10">
            Your dedicated video editing team is one form away. Get custom pricing
            and a proposed team structure in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="ghost"
              asChild
              className="bg-white text-spark-800 hover:bg-spark-50 hover:text-spark-800 px-8 py-6 text-base rounded-xl shadow-lg transition-all hover:shadow-xl"
            >
              <a href="#lead-form">
                Get Your Video Editing Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="bg-void hover:bg-surface-dark text-white hover:text-white px-8 py-6 text-base rounded-xl border-0 transition-all"
            >
              <a href="#lead-form">
                <Phone className="mr-2 h-4 w-4" />
                Schedule a Call
              </a>
            </Button>
          </div>
          <p className="text-sm-body text-spark-300 mt-6">
            No contracts. No spam. Cancel anytime.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   INLINE: Fractional Team Section
   ════════════════════════════════════════════════════════════════════════════ */

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

/* ════════════════════════════════════════════════════════════════════════════
   EXPORT: VideoPage
   ════════════════════════════════════════════════════════════════════════════ */

export function VideoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20">
        <HeroSection />
        <TrustedByMarquee />
        <ProblemSection />
        <SolutionSection />
        <SEOSection />
        <ToolsWeUseSection />
        <ROISection />
        <WorkSampleBentoGrid />
        <ComparisonSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <FAQSection />
        <FinalCTASection />
        {/* <FractionalTeamSection /> */}
        <ServiceCapabilities />
      </main>
      <Footer />
    </div>
  );
}
