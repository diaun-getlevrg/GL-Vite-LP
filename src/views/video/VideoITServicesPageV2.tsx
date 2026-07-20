import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Zap, TrendingUp, Star, CalendarDays,
  Trophy, MessageCircle, UserCheck, Rocket, Volume2, VolumeX, Play, Pause,
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
    quote: "Always responsive and reliable, Levrg has been a tremendous partner to our team. Get Levrg handled our marketing so we could focus on growth.",
    name: "James McGrath",
    title: "Brand & Social Media Manager | Empellor CRM",
    image: "/images/client/james-mcgrath.webp",
  },
  {
    quote: "We added video as a service line without hiring a single editor. Our margins went up 40% on video projects in the first quarter.",
    name: "Miles Kaiburn",
    title: "CEO | Old Town Media",
    image: "/images/client/miles-kaiburn.webp",
  },
  {
    quote: "The quality is indistinguishable from our in-house team. Our clients never know the difference, and our margins have never been better.",
    name: "Brendan Taylor",
    title: "CEO | Maverick VFX",
    image: "/images/client/brendan-taylor.webp",
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
          poster="/images/hero/video-it-services-hero.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/intro3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#061512]/95 via-[#061512]/85 to-[#061512]/95" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
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
   Video Showcase — tilted, floating video card with proof chips orbiting it,
   paired with a short quantified pitch. A deliberately different treatment
   from the plain centered video block used elsewhere.
   ──────────────────────────────────────────────────────────────────────── */

function VideoSection() {
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = false;
          setMuted(false);
          video.play().catch(() => {
            video.muted = true;
            setMuted(true);
            video.play().catch(() => {});
          });
        } else {
          video.pause();
          video.muted = true;
          setMuted(true);
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

  const quickStats = [
    { label: "Product Demos Produced", value: "6/mo" },
    { label: "Average Turnaround", value: "48 Hrs" },
    { label: "Client Satisfaction", value: "98%" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <AnimatedSection>
            <h2 className="text-h2 sm:text-h1 text-gray-900 mb-4">
              See The Quality <span className="text-[#51B027]">For Yourself</span>
            </h2>
            <p className="text-body text-gray-600 mb-8 max-w-md">
              A real sample of the product and service videos our team produces for IT and technical companies &mdash; no stock footage, no templates.
            </p>
            <div className="space-y-3">
              {quickStats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50"
                >
                  <span className="text-sm-body text-gray-600 font-medium">{stat.label}</span>
                  <span className="text-sub font-bold text-[#51B027]">{stat.value}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} direction="left">
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
                  <source src="/video/intro2.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => setMuted((m) => !m)}
                    aria-label={muted ? "Unmute" : "Mute"}
                    className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-5 -left-5 sm:-left-8 bg-white rounded-xl shadow-lg border border-gray-100 px-3.5 py-2.5 flex items-center gap-2"
              >
                <Zap className="h-4 w-4 text-spark-500 shrink-0" />
                <p className="text-xs font-bold text-gray-900 whitespace-nowrap">14-Day Launch</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-5 -right-3 sm:-right-6 bg-white rounded-xl shadow-lg border border-gray-100 px-3.5 py-2.5 flex items-center gap-2"
              >
                <Star className="h-4 w-4 text-spark-500 fill-spark-500 shrink-0" />
                <p className="text-xs font-bold text-gray-900 whitespace-nowrap">40+ Clients Trust Us</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
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

  const nextSteps = [
    {
      icon: Zap,
      timeframe: "Day 1",
      title: "Submit Your Brief",
      desc: "10 minutes is all it takes. Share your goals, brand guidelines, and content targets.",
    },
    {
      icon: MessageCircle,
      timeframe: "Day 2-3",
      title: "Meet Your Dedicated PM",
      desc: "We set up your workflow, tool access, and communication channels together.",
    },
    {
      icon: UserCheck,
      timeframe: "Week 1",
      title: "First Deliverables Land",
      desc: "Brand-compliant edits hit your inbox, revisions included, production-grade from day one.",
    },
    {
      icon: Rocket,
      timeframe: "Week 2+",
      title: "Scale On Your Terms",
      desc: "Add editors for big campaigns or scale down in slow periods. No penalties, no lock-in.",
    },
  ];

  return (
    <section id="get-started" className="relative overflow-hidden py-16 sm:py-24 bg-[#061512]">
      <div className="absolute inset-0">
        <img
          src="/images/hero/video-it-services-hero.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#061512]/95 via-[#061512]/90 to-[#061512]/95" />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection>
            <h2 className="text-h2 sm:text-h1 text-white mb-3">
              What Happens <span className="text-[#51B027]">After You Submit</span>
            </h2>
            <p className="text-body text-gray-300 mb-10 max-w-md">
              No black box. Here&apos;s exactly what to expect once your brief comes in.
            </p>

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
                  Claim Your Free Custom Pricing
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
                  Get Your Video Team
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

export function VideoITServicesPageV2() {
  return (
    <PageShell
      navItems={[]}
      showHeader={false}
      showFooter={false}
      meta={{
        title: "Video Editing for IT Service Providers | Get Levrg",
        description: "Professional product and service videos for IT companies. Dedicated video team for walkthroughs, explainers, and testimonials — no in-house editors needed.",
        keywords: "video editing for IT services, product walkthrough video, tech service explainer video",
        ogTitle: "Video Editing for IT Service Providers | Get Levrg",
        ogDescription: "Product and service videos for IT companies without an in-house team.",
      }}
    >
      <HeroSection />
      <VideoSection />
      <ProofAndReasonsSection />
      <FormSection />
    </PageShell>
  );
}
