import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Zap, TrendingUp, Star, CalendarDays,
  Trophy, MessageCircle, UserCheck, Rocket,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/* ════════════════════════════════════════════════════════════════════════════
   VARIANT 2 — "Form Isolated"
   Hero carries the pitch only (no form). One section does both the proof
   (stats) and the reasoning (differentiators) job. The form gets its own
   dedicated, undistracted section at the bottom.
   ════════════════════════════════════════════════════════════════════════════ */

function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-white min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="/images/hero/video-it-services-hero.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#061512]/95 via-[#061512]/85 to-[#061512]/95" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8"
        >
          <Zap className="h-3.5 w-3.5 text-spark-300" />
          <span className="text-sm-body font-medium text-white">
            Video for IT Service Providers
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-h1 sm:text-display lg:text-display-sm text-white mb-6"
        >
          Product And Service Videos
          <br />
          <span className="text-[#51B027]">
            Without An In-House Team
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body sm:text-sub text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Get a dedicated video team that creates product walkthroughs, service explainers, and client testimonial videos so prospects understand your value before the first call.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          {[
            { icon: Zap, text: "Launch in 14 Days" },
            { icon: CalendarDays, text: "48-Hour Turnaround" },
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative p-5 sm:p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm max-w-xl mx-auto mb-10"
        >
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 text-spark-500 fill-spark-500" />
            ))}
          </div>
          <p className="text-sm-body sm:text-body text-gray-200 italic mb-3">
            &ldquo;Always responsive and reliable, Levrg has been a tremendous partner to our team. Get Levrg handled our marketing so we could focus on growth.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <img
              src="/images/client/james-mcgrath.webp"
              alt="James McGrath"
              loading="lazy"
              decoding="async"
              className="w-9 h-9 rounded-full object-cover shrink-0"
            />
            <div className="text-left">
              <p className="text-sm-body font-semibold text-white">James McGrath</p>
              <p className="text-xs text-gray-400">Brand &amp; Social Media Manager | Empellor CRM</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={scrollToForm}
            className="bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold px-8 py-6 text-base rounded-xl shadow-lg transition-all hover:shadow-xl"
          >
            Get Your Video Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-caption text-gray-400 tracking-wide mt-6">
            Trusted by 40+ B2B companies generating $50M+ in revenue
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Proof + Reasoning — one section, stats row on top, differentiators below
   ──────────────────────────────────────────────────────────────────────── */

function ProofAndReasonsSection() {
  const stats = [
    { value: "Up to 80%", label: "Lower Cost Than an In-House Hire" },
    { value: "2×", label: "Demo Request Rate Doubled" },
    { value: "40+", label: "B2B Partnerships Across North America" },
  ];

  const reasons = [
    {
      icon: Trophy,
      title: "Proven Track Record",
      desc: "40+ B2B teams trust us with their video output. We've delivered videos with a 98% satisfaction and 99% on-time publish rate.",
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      desc: "Your dedicated PM is a Slack message away.",
    },
    {
      icon: UserCheck,
      title: "Vetted Talent Only",
      desc: "Every editor passes a rigorous portfolio review, skills test, and English fluency check.",
    },
    {
      icon: Rocket,
      title: "Built for Scale",
      desc: "As your video starts performing, you'll want more of it. Add editors and expand your team on demand; same PM, same workflow, same quality, just more output.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-h2 sm:text-h1 text-gray-900">
            Why Our <span className="text-[#51B027]">Clients</span> Work With Us
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14" staggerDelay={0.1}>
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="h-full p-6 rounded-xl border border-gray-100 bg-white text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
                <div className="text-h1 sm:text-h2 text-[#51B027] mb-2">{stat.value}</div>
                <p className="text-gray-900 text-sm-body font-semibold">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={i}>
                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300 group h-full border-l-4 border-l-spark-400">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-spark-50 text-spark-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sub font-bold text-gray-900 mb-2">{item.title}</h3>
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

/* ────────────────────────────────────────────────────────────────────────────
   Dedicated Form Section — undistracted, risk-reducer right at the CTA
   ──────────────────────────────────────────────────────────────────────── */

function FormSection() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/thank-you?service=video-editing");
  };

  return (
    <section id="get-started" className="py-16 sm:py-24 bg-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-3">
            Claim Your <span className="text-[#51B027]">Free Custom Pricing</span>
          </h2>
          <p className="text-body text-gray-500">
            Get a proposed team structure and pricing in 24 hours. No obligation.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="form-firstName" className="text-sm-body text-gray-700 mb-1.5">First Name</Label>
                  <Input id="form-firstName" placeholder="John" className="h-10" />
                </div>
                <div>
                  <Label htmlFor="form-lastName" className="text-sm-body text-gray-700 mb-1.5">Last Name</Label>
                  <Input id="form-lastName" placeholder="Smith" className="h-10" />
                </div>
              </div>
              <div>
                <Label htmlFor="form-workEmail" className="text-sm-body text-gray-700 mb-1.5">Work Email</Label>
                <Input id="form-workEmail" type="email" placeholder="john@company.com" className="h-10" />
              </div>
              <div>
                <Label htmlFor="form-phoneNumber" className="text-sm-body text-gray-700 mb-1.5">Phone Number</Label>
                <Input id="form-phoneNumber" type="tel" placeholder="+1 (555) 000-0000" className="h-10" />
              </div>
              <div>
                <Label htmlFor="form-company" className="text-sm-body text-gray-700 mb-1.5">Company</Label>
                <Input id="form-company" placeholder="Acme Inc." className="h-10" />
              </div>
              <Button
                variant="ghost"
                type="submit"
                className="w-full bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-11 rounded-lg text-base transition-all"
              >
                Get Your Video Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-center text-sm-body text-gray-400 pt-1">
                No contracts &middot; No spam &middot; Cancel anytime
              </p>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export function VideoITServicesPageV2() {
  return (
    <PageShell
      navItems={[]}
      ctaText="Get Your Video Team"
      ctaTarget="#get-started"
      meta={{
        title: "Video Editing for IT Service Providers | Get Levrg",
        description: "Professional product and service videos for IT companies. Dedicated video team for walkthroughs, explainers, and testimonials — no in-house editors needed.",
        keywords: "video editing for IT services, product walkthrough video, tech service explainer video",
        ogTitle: "Video Editing for IT Service Providers | Get Levrg",
        ogDescription: "Product and service videos for IT companies without an in-house team.",
      }}
    >
      <HeroSection />
      <ProofAndReasonsSection />
      <FormSection />
    </PageShell>
  );
}
