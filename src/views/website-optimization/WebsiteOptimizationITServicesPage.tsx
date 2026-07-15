import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, TrendingUp, Quote, Lock, Mail, Shield, Monitor } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { TrustedByMarquee } from "@/components/shared/TrustedByMarquee";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  HeroFormIntro,
  ProblemSection,
  SolutionSection,
  DeliverablesSection,
  ToolsWeUseSection,
  AuditFindingsSection,
  WorkSampleBentoGrid,
  RoiSection,
  ComparisonSection,
  HowItWorksSection,
  TestimonialsSection,
  WhyChooseUsSection,
  FAQSection,
  FinalCTASection,
} from "./WebsiteOptimizationPage";

/* ════════════════════════════════════════════════════════════════════════════
   1. HERO SECTION
   ════════════════════════════════════════════════════════════════════════════ */

function HeroSection() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/thank-you?service=website-optimization");
  };

  return (
    <section id="lead-form" className="relative overflow-hidden min-h-[500px] sm:min-h-[600px]">
      <div className="absolute inset-0">
        <img src="/images/hero/website-optimization-it-services-hero.webp" alt="" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" decoding="async" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#061512]/95 via-[#061512]/70 to-transparent" />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8">
              <Monitor className="h-3.5 w-3.5 text-spark-300" />
              <span className="text-sm-body font-medium text-white">Website Optimization for IT Service Providers</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-h1 sm:text-display lg:text-display-sm text-white mb-6">
              A Website That Generates IT Service Leads On Autopilot
              <br />
              <span className="text-spark-400">Your Website Explains Your Services. It Doesn&apos;t Generate Leads.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-body sm:text-sub text-gray-300 max-w-4xl mb-8">
              Get a team that transforms your IT services website into a lead generation engine service pages that convert, trust signals that build confidence, and a design that positions your firm ahead of the competition.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              {[
                { icon: Zap, text: "30-Day Launch" },
                { icon: BarChart3, text: "14 Deliverables Included" },
                { icon: TrendingUp, text: "3x More Leads on Average" },
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

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="relative p-5 sm:p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm max-w-4xl">
              <Quote className="absolute top-4 left-5 h-5 w-5 text-spark-300" />
              <p className="text-sm-body sm:text-body text-gray-200 italic mb-3 pl-8">
                &ldquo;We rebuilt on Webflow, integrated HubSpot, launched a blog, and went from zero organic traffic to 4,200 monthly visits in 5 months. Lead quality improved because the right people are finding us now.&rdquo;
              </p>
              <div className="flex items-center gap-3 pl-8">
                <img
                  src="/images/client/brendan-taylor.webp"
                  alt="Tony Reyes"
                  loading="lazy"
                  decoding="async"
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-sm-body font-semibold text-white">Tony Reyes</p>
                  <p className="text-xs text-gray-400">CEO, Managed IT Services Provider</p>
                </div>
              </div>
            </motion.div>
          </div>

          <HeroFormIntro>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-lg p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-sub font-bold text-gray-900 mb-1.5">Get Your Free Website Audit</h3>
                <p className="text-sm-body text-gray-500">See what&apos;s holding your site back. Free audit with actionable findings in 24 hours.</p>
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
                  Get My Free Website Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </HeroFormIntro>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   EXPORT: WebsiteOptimizationITServicesPage
   ════════════════════════════════════════════════════════════════════════════ */

export function WebsiteOptimizationITServicesPage() {
  return (
    <PageShell
      navItems={[
        { label: "Problems", href: "#problems" },
        { label: "Solution", href: "#solution" },
        { label: "Results", href: "#results" },
        { label: "Process", href: "#process" },
      ]}
      ctaText="Get Free Audit"
      ctaTarget="#lead-form"
      meta={{
        title: "Website Optimization for IT Service Providers | Get Levrg",
        description: "Transform your IT services website into a lead generation engine. Service pages that convert, trust signals that build confidence, launch in 30 days.",
        keywords: "website optimization for IT companies, managed services provider website, IT services website design",
        ogTitle: "Website Optimization for IT Service Providers | Get Levrg",
        ogDescription: "Your website explains your services. It should be generating leads.",
      }}
    >
      <HeroSection />
      <TrustedByMarquee />
      <ProblemSection />
      <SolutionSection />
      <DeliverablesSection />
      <ToolsWeUseSection />
      <AuditFindingsSection />
      <WorkSampleBentoGrid />
      <RoiSection />
      <ComparisonSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </PageShell>
  );
}
