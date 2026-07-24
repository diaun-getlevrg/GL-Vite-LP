import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Briefcase, Smartphone, Clock, Star, CheckCircle,
  Shield, Zap, LayoutGrid, PiggyBank, Rocket, TrendingUp, Play, Pause,
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

const testimonials = [
  {
    quote: "The team elevated our content game and streamlined publishing across platforms.",
    name: "Leslie Heller",
    title: "Director of Marketing | Factor AE",
    image: "/images/client/leslie-heller.webp",
  },
  {
    quote: "We got our Sundays back. Levrg took LinkedIn tasks completely off our plate.",
    name: "Thomas Buchanan",
    title: "CRO | Sales Tempo",
    image: "/images/client/thomas-buchanan.webp",
  },
  {
    quote: "A responsive and insightful team that meaningfully elevated our brand strategy.",
    name: "Shahrokh Sheikh",
    title: "Partner & Litigation Attorney | Wgcounsel",
    image: "/images/client/shahrokh-sheikh.webp",
  },
];

function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/social-hero.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/social-general-targeting.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#061512]/95 via-[#061512]/85 to-[#061512]/95" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-20 sm:pb-28 text-center">
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/Light Logo.webp"
          alt="Get Levrg"
          width={120}
          height={32}
          decoding="async"
          className="h-8 w-auto mx-auto mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8"
        >
          <Briefcase className="h-3.5 w-3.5 text-spark-300" />
          <span className="text-sm-body font-medium text-white">
            Social Media Management
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-h1 sm:text-display lg:text-display-sm text-white mb-6"
        >
          Stay Consistent on Social Platforms Without
          <br />
          <span className="text-[#51B027]">
            Hiring a Team
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body sm:text-sub text-gray-300 max-w-6xl mx-auto mb-8"
        >
          Get a dedicated social media team to handle strategy, copy, design, scheduling, and reporting across LinkedIn, Instagram, and Facebook. You focus on the business. We keep your presence consistent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          {[
            { icon: Smartphone, text: "12-20 Posts Monthly" },
            { icon: Clock, text: "Live in 14 Days" },
            { icon: Briefcase, text: "Strategy & Creative Managed" },
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
          className="relative p-5 sm:p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm max-w-xl mx-auto mb-10 overflow-hidden min-h-[168px] sm:min-h-[152px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-spark-500 fill-spark-500" />
                ))}
              </div>
              <p className="text-sm-body sm:text-body text-gray-200 italic mb-3">
                &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={testimonials[testimonialIndex].image}
                  alt={testimonials[testimonialIndex].name}
                  loading="lazy"
                  decoding="async"
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <div className="text-left">
                  <p className="text-sm-body font-semibold text-white">{testimonials[testimonialIndex].name}</p>
                  <p className="text-xs text-gray-400">{testimonials[testimonialIndex].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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
            Get Your Social Media Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-caption text-gray-400 tracking-wide mt-6">
            Trusted by 40+ companies generating $50M+ in revenue
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Video Showcase — matches the "Social Media Management Built for Teams
   That Need to Stay Visible" section, video + CTA instead of the bento grid.
   ──────────────────────────────────────────────────────────────────────── */

function VideoSection() {
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryUnmutedPlay = () => {
      video.muted = false;
      setMuted(false);
      video.play().catch(() => {
        video.muted = true;
        setMuted(true);
      });
    };

    // Browsers block unmuted autoplay until the user has interacted with the
    // page, so retry unmuted the instant that first gesture happens.
    tryUnmutedPlay();

    const gestureEvents = ["pointerdown", "keydown", "touchstart"] as const;
    const handleGesture = (e: Event) => {
      // Don't hijack a deliberate click on the video's own controls.
      if ((e.target as HTMLElement | null)?.closest("[data-video-controls]")) return;
      tryUnmutedPlay();
      gestureEvents.forEach((evt) => window.removeEventListener(evt, handleGesture));
    };
    gestureEvents.forEach((evt) => window.addEventListener(evt, handleGesture, { passive: true }));

    return () => {
      gestureEvents.forEach((evt) => window.removeEventListener(evt, handleGesture));
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const capabilities = [
    "LinkedIn content strategy and posting",
    "Instagram and Facebook content management",
    "Content calendars planned around your goals",
    "Post copywriting and creative design",
    "Thought leadership and founder or personal-brand content",
    "Short-form and social video editing",
    "Monthly reporting and optimization",
    "Social media management for SaaS, B2B services, agencies, and professional firms",
  ];

  const scrollToForm = () => {
    document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <h2 className="text-h2 sm:text-h1 text-gray-900 mb-5">
            Social Media Management Built for <br />
            <span className="text-[#51B027]">Teams That Need to Stay Visible</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="text-center mb-16" delay={0.1}>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re a SaaS company, a B2B service business, an agency, or a professional firm, staying consistent on social is a full-time job. Get Levrg gives you a managed social media team that turns your ideas and expertise into a steady, on-brand presence.
          </p>
        </AnimatedSection>
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* RIGHT (desktop) / first (mobile): video showcase + CTA, in place of the bento image grid */}
          <AnimatedSection delay={0.15} direction="left" className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-8 bg-gradient-to-tr from-spark-200/50 via-spark-100/30 to-transparent rounded-[2.5rem] blur-2xl -z-10" />

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-black rotate-2 hover:rotate-0 transition-transform duration-500">
                <video
                  ref={videoRef}
                  autoPlay
                  muted={muted}
                  loop
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                >
                  <source src="/video/social-general-targeting.mp4" type="video/mp4" />
                </video>
                <div data-video-controls className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 sm:mt-12 flex justify-center"
            >
              <Button
                variant="ghost"
                onClick={scrollToForm}
                className="bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold px-8 py-6 text-base rounded-xl shadow-lg transition-all hover:shadow-xl"
              >
                Get Your Social Media Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </AnimatedSection>

          {/* LEFT (desktop) / second (mobile): content + checklist */}
          <div className="order-2 lg:order-1">
            <AnimatedSection className="mb-8" delay={0.2}>
              <p className="text-body text-gray-600">
                Get Levrg gives you a professional social media team that can support:
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
                You bring the goals and the point of view. We bring the strategy, content, design,
                and publishing rhythm to keep your brand showing up.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Proof + Reasoning — matches "Why Choose Between Strategy, Consistency and
   Quality? Get All Three" from the main social page.
   ──────────────────────────────────────────────────────────────────────── */

function ProofAndReasonsSection() {
  const differentiators = [
    {
      icon: Shield,
      title: "A Team That Learns Your Brand",
      desc: "The same strategist, writer, designer, and account manager own your account, so your voice stays consistent across every post.",
    },
    {
      icon: Zap,
      title: "Live in 14 Days",
      desc: "Strategy and calendar built in the first week. First posts published within two weeks.",
    },
    {
      icon: LayoutGrid,
      title: "Strategy and Creative, Handled",
      desc: "Planning, copy, design, scheduling, and reporting run on one workflow. You review and approve; we do the rest.",
    },
    {
      icon: PiggyBank,
      title: "Lower Overhead Than In-House",
      desc: "A full social team for less than the cost and commitment of a single full-time hire. No recruiting, no ramp, no payroll.",
    },
  ];

  return (
    <section id="solution" className="py-16 sm:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <h2 className="text-h2 sm:text-h1 text-gray-900">
            Why Choose Between Strategy, Consistency and Quality?
            <br />
            <span className="text-[#51B027]">Get All Three</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="text-center mb-16" delay={0.1}>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            We build the strategy, produce the content, and run the calendar, so your brand stays visible without one more person to manage. You bring the direction. We handle the output.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={i}>
                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300 group h-full border-l-4 border-l-spark-400">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-spark-50 text-spark-600 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sub font-bold text-gray-900">{item.title}</h3>
                  </div>
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
   Dedicated Form Section — undistracted, process content pulled from
   "From Idea to Identity in 14 Days" on the main social page.
   ──────────────────────────────────────────────────────────────────────── */

function FormSection() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  const nextSteps = [
    {
      icon: Zap,
      timeframe: "Day 1-2",
      title: "Kickoff",
      desc: "A short call to capture your brand, voice, audience, and goals. No lengthy setup required.",
    },
    {
      icon: LayoutGrid,
      timeframe: "Day 3-7",
      title: "Strategy + Calendar",
      desc: "We build a 90-day content plan aligned to your positioning, channels, and growth goals.",
    },
    {
      icon: Rocket,
      timeframe: "Day 8-14",
      title: "First Posts Live",
      desc: "Your first posts are scheduled and published. Your brand starts building visibility immediately.",
    },
    {
      icon: TrendingUp,
      timeframe: "Week 3+",
      title: "Ongoing + Optimization",
      desc: "12-20 posts monthly, plus monthly performance reviews and continuous improvement.",
    },
  ];

  return (
    <section id="get-started" className="relative overflow-hidden py-16 sm:py-24 bg-[#061512]">
      <div className="absolute inset-0">
        <img
          src="/images/hero/social-hero.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#061512]/95 via-[#061512]/90 to-[#061512]/95" />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <h2 className="text-h2 sm:text-h1 text-white mb-8">
              From Idea to <span className="text-[#51B027]">Identity in 14 Days</span>
            </h2>

            <StaggerContainer className="space-y-5" staggerDelay={0.1}>
              {nextSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/20 text-spark-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0 pt-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-sub font-bold text-white">{step.title}</h3>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold text-gray-300">
                            {step.timeframe}
                          </span>
                        </div>
                        <p className="text-sm-body text-gray-300">{step.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-xl p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-sub font-bold text-gray-900">
                  Let's Start Here
                </h3>
              </div>
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
                  Get Your Social Media Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export function SocialPageV2() {
  return (
    <PageShell
      navItems={[]}
      showHeader={false}
      showFooter={false}
      meta={{
        title: "Social Media Management | Get Levrg",
        description: "A dedicated social media team to handle strategy, copy, design, scheduling, and reporting across LinkedIn, Instagram, and Facebook.",
        keywords: "social media management, social media management services, outsource social media, B2B social media management, managed social media team, LinkedIn management",
        ogTitle: "Social Media Management | Get Levrg",
        ogDescription: "A dedicated social media team to handle strategy, copy, design, scheduling, and reporting across LinkedIn, Instagram, and Facebook.",
      }}
    >
      <HeroSection />
      <VideoSection />
      <ProofAndReasonsSection />
      <FormSection />
    </PageShell>
  );
}
