import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  MessageCircle,
  Heart,
  Share2,
  TrendingUp,
  RotateCcw,
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
import { AnimatedSection, StaggerContainer, StaggerItem, CountUp } from "@/components/shared/AnimatedSection";
import { TrustedByMarquee } from "@/components/shared/TrustedByMarquee";
import { PageShell } from "@/components/layout/PageShell";


// ─── Inline ToolsWeUseSection (Social Only) ───
function ToolsWeUseSection() {
  const tools = [
    { src: "/logos/applogos/Canva.webp", alt: "Canva" }, { src: "/logos/applogos/Figma.webp", alt: "Figma" },
    { src: "/logos/applogos/ChatGPT.webp", alt: "ChatGPT" }, { src: "/logos/applogos/Gemini-Pro.webp", alt: "Gemini Pro" },
    { src: "/logos/applogos/Taplio.webp", alt: "Taplio" }, { src: "/logos/applogos/High-Level.webp", alt: "GoHighLevel" },
    { src: "/logos/applogos/Hubspot.webp", alt: "HubSpot" }, { src: "/logos/applogos/Ahrefs.webp", alt: "Ahrefs" },
    { src: "/logos/applogos/Semrush.webp", alt: "Semrush" }, { src: "/logos/applogos/Slack.webp", alt: "Slack" },
    { src: "/logos/applogos/Calendly.webp", alt: "Calendly" }, { src: "/logos/applogos/Zapier.webp", alt: "Zapier" },
    { src: "/logos/applogos/Klaviyo.webp", alt: "Klaviyo" }, { src: "/logos/applogos/Livestorm.webp", alt: "Livestorm" },
    { src: "/logos/applogos/Google-Chat.webp", alt: "Google Chat" }, { src: "/logos/applogos/Google-Meet.webp", alt: "Google Meet" },
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
                    <div key={i} className="flex items-center justify-center rounded-xl bg-white border border-gray-100 p-3 sm:p-4 lg:p-5 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 group">
                      <img src={tool.src} alt={tool.alt} width={140} height={56} loading="lazy" decoding="async" className="h-10 sm:h-14 lg:h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300" />
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
    { src: "/images/work-samples/social-work-1.webp", alt: "Content Calendar Design", label: "Content Calendar" },
    { src: "/images/work-samples/social-work-2.webp", alt: "Social Media Post Designs", label: "Post Designs" },
    { src: "/images/work-samples/social-work-3.webp", alt: "Engagement Analytics", label: "Engagement Analytics" },
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
                  <img src={sample.src} alt={sample.alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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

/* ────────────────────────────────────────────
   SECTION 1  HERO (2-column layout with form)
   ──────────────────────────────────────────── */
function HeroSection() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/thank-you?service=social-media");
  };

  return (
    <section id="lead-form" className="relative overflow-hidden min-h-[500px] sm:min-h-[600px]">
      <div className="absolute inset-0">
        <img src="/images/hero/social-hero.webp" alt="" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" decoding="async" />
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
                <h3 className="text-sub font-bold text-gray-900 mb-1.5">Claim Free Content Calendar</h3>
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
    { src: "/images/work-samples/video-work-1.webp", alt: "Video editing portfolio", span: "row-span-2" },
    { src: "/images/work-samples/video-work-2.webp", alt: "Motion graphics and reels", span: "" },
    { src: "/images/hero/video-hero.webp", alt: "Video production workflow", span: "" },
    { src: "/images/work-samples/video-work-3.webp", alt: "Social media video production", span: "col-span-2" },
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
                  <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              <Button variant="ghost" size="lg" className="bg-void hover:bg-surface-dark text-white hover:text-white px-8 py-6 text-base font-semibold rounded-xl border-0 transition-all" onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}>
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
export function SocialPage() {
  return (
    <PageShell
      navItems={[
        { label: "Problems", href: "#problems" },
        { label: "Solution", href: "#solution" },
        { label: "Results", href: "#results" },
        { label: "Process", href: "#process" },
      ]}
      ctaText="See How It Works"
      ctaTarget="#lead-form"
      meta={{
        title: "Social Media Management for Law Firms & B2B Professionals | Get Levrg",
        description:
          "Done-for-you social media management for law firms, CPAs, consultants and B2B firms. 12–20 posts monthly, zero partner time, first posts live in 14 days.",
        keywords:
          "social media management for law firms, social media for accountants, B2B social media management, LinkedIn management for professionals, social media for consultants",
        ogTitle: "Social Media Management for Professional Firms | Get Levrg",
        ogDescription:
          "12–20 posts monthly for law firms, CPAs & consultants. No partner time required. First posts live in 14 days.",
      }}
    >
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
    </PageShell>
  );
}
