import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Star, Play, Pause, Zap, CalendarDays, TrendingUp, VolumeX } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/* ════════════════════════════════════════════════════════════════════════════
   VARIANT 1 — "Watch, Then Convert"
   Lands directly in the settled layout: a centered headline on top, video
   left / form right (same height, no scroll) below it, a short description,
   and a single left-to-right process row anchors the bottom. Everything fits
   in one screen — no footer, no scrolling. The reel loops in the background.
   ════════════════════════════════════════════════════════════════════════════ */

const testimonials = [
  {
    quote: "The team elevated our content game and streamlined publishing across platforms.",
    name: "Leslie Heller",
    title: "Director of Marketing | Factor AE",
    image: "/images/client/leslie-heller.webp",
  },
  {
    quote: "We started on Wednesday and Get Levrg was delivering real value by Monday. That speed changed everything.",
    name: "Phil Wittmer",
    title: "Director of Marketing | Velosio",
    image: "/images/client/phil-wittmer.webp",
  },
  {
    quote: "Flawless teamwork. Get Levrg made everything smooth and effortless.",
    name: "Aizat Paharodzi",
    title: "Creative Video Lead | 2X",
    image: "/images/client/aizat-paharodzi.webp",
  },
];

const metrics = [
  { icon: Zap, text: "Launch in 14 Days" },
  { icon: CalendarDays, text: "48-Hour Turnaround" },
  { icon: TrendingUp, text: "80% Cost Savings" },
];

const processSteps = [
  { title: "Submit Your Brief", timeline: "Day 1" },
  { title: "Meet Your PM", timeline: "Day 2-3" },
  { title: "Processes Go Live", timeline: "End of Week 1" },
  { title: "First Deliverables", timeline: "Week 2" },
  { title: "Scale On Your Terms", timeline: "Week 2+" },
];

function HeroSection() {
  const navigate = useNavigate();
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Unmuted autoplay succeeds automatically if the browser already has
    // "user activation" from the click that navigated here; otherwise it's
    // blocked, so fall back to muted and let the visitor tap to unmute.
    video.muted = false;
    video.play()
      .then(() => setMuted(false))
      .catch(() => {
        video.muted = true;
        setMuted(true);
      });
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

  const unmute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    setMuted(false);
    v.play().catch(() => {});
  };

  return (
    <section
      id="lead-form"
      className="relative min-h-screen lg:h-screen lg:overflow-hidden bg-[#061512]"
    >
      <div className="absolute inset-0 opacity-40">
        <img
          src="/images/hero/video-hero.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061512]/90 via-[#061512]/70 to-[#061512]" />
      </div>

      <div className="relative z-10 lg:h-full flex flex-col">
        {/* Top: logo + centered headline */}
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/Light Logo.webp"
          alt="Get Levrg"
          width={120}
          height={32}
          decoding="async"
          className="shrink-0 h-7 w-auto mx-auto mt-6 sm:mt-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="shrink-0 text-[clamp(1.5rem,3.6vh,2.75rem)] font-extrabold tracking-tight text-white text-center leading-tight px-6 pt-6 sm:pt-8 pb-3 sm:pb-4"
        >
          Managed Video Editing for Teams
          <br />
          <span className="text-[#51B027]">That Need More Content Out the Door</span>
        </motion.h1>

        {/* Middle: video (left) + form (right) — same row height, no overflow */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:flex-1 lg:min-h-0 gap-6 lg:gap-10 px-6 sm:px-10 lg:px-16 max-w-container mx-auto w-full">
          <div className="flex flex-col w-full">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
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
                <source src="/video/video-general-targeting.mp4" type="video/mp4" />
              </video>

              {muted && (
                <button
                  onClick={unmute}
                  aria-label="Unmute video"
                  className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors group"
                >
                  <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-white shadow-2xl group-hover:bg-black/70 group-hover:scale-110 transition-all duration-300">
                    <VolumeX className="h-7 w-7 sm:h-8 sm:w-8" />
                  </span>
                </button>
              )}

              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full mt-2.5 p-3 rounded-xl bg-white/5 border border-white/10 overflow-hidden min-h-[104px]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-spark-500 fill-spark-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm-body text-gray-300 italic mb-2.5">
                    &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2.5">
                    <img
                      src={testimonials[testimonialIndex].image}
                      alt={testimonials[testimonialIndex].name}
                      loading="lazy"
                      decoding="async"
                      className="w-7 h-7 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">{testimonials[testimonialIndex].name}</p>
                      <p className="text-[10px] text-gray-400 leading-tight">{testimonials[testimonialIndex].title}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full"
          >
            <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-2xl p-4 sm:p-5">
              <h3 className="text-sub font-bold text-gray-900 mb-2.5 text-center">
                Let's Start Here
              </h3>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="hero-firstName" className="text-sm-body text-gray-700 mb-1">First Name</Label>
                    <Input id="hero-firstName" placeholder="John" className="h-9" />
                  </div>
                  <div>
                    <Label htmlFor="hero-lastName" className="text-sm-body text-gray-700 mb-1">Last Name</Label>
                    <Input id="hero-lastName" placeholder="Smith" className="h-9" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="hero-workEmail" className="text-sm-body text-gray-700 mb-1">Work Email</Label>
                  <Input id="hero-workEmail" type="email" placeholder="john@company.com" className="h-9" />
                </div>
                <div>
                  <Label htmlFor="hero-phoneNumber" className="text-sm-body text-gray-700 mb-1">Phone Number</Label>
                  <Input id="hero-phoneNumber" type="tel" placeholder="+1 (555) 000-0000" className="h-9" />
                </div>
                <div>
                  <Label htmlFor="hero-company" className="text-sm-body text-gray-700 mb-1">Company</Label>
                  <Input id="hero-company" placeholder="Acme Inc." className="h-9" />
                </div>
                <Button
                  variant="ghost"
                  type="submit"
                  className="w-full bg-spark-600 hover:bg-spark-800 text-white hover:text-white font-semibold h-10 rounded-lg text-base transition-all"
                >
                  Get Your Video Editing Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mt-2.5">
              {metrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center flex flex-col items-center justify-center gap-1.5">
                    <Icon className="h-5 w-5 text-spark-400" />
                    <p className="text-xs text-gray-300 leading-snug font-medium">{m.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Short description, right above the process row */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="shrink-0 text-center text-[clamp(0.9375rem,2vh,1.25rem)] text-gray-300 px-6 pb-3 sm:pb-4"
        >
          Get a dedicated video editing team that handles the editing, project management,
          <br />
          quality checks, and turnaround. You bring the footage and the goals, we keep it shipping.
        </motion.p>

        {/* Bottom: the whole process, left to right, one row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="shrink-0 mt-2 pt-2 border-t border-white/10 px-6 sm:px-10 lg:px-16 pb-3 sm:pb-4"
        >
          <div className="max-w-container mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4 lg:justify-between">
              {processSteps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-2 shrink-0">
                    <motion.div
                      animate={{ opacity: [1, 0.35, 1], scale: [1, 1.15, 1] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                      className="w-6 h-6 rounded-full bg-spark-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0"
                    >
                      {i + 1}
                    </motion.div>
                    <div>
                      <p className="text-xs sm:text-sm-body font-semibold text-white leading-tight">{step.title}</p>
                      <p className="text-[10px] sm:text-[11px] text-gray-400 flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5" />
                        {step.timeline}
                      </p>
                    </div>
                  </div>
                  {i < processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block h-3.5 w-3.5 text-spark-300/50 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function VideoPageV1() {
  return (
    <PageShell
      navItems={[]}
      showHeader={false}
      showFooter={false}
      meta={{
        title: "Managed Video Editing Services | Get Levrg",
        description: "A dedicated video editing team that handles the editors, project management, quality checks, and turnaround, so your team publishes more.",
        keywords: "video editing services, video editing outsourcing, hire a video editor, social media video editing, managed video editing team",
        ogTitle: "Managed Video Editing Services | Get Levrg",
        ogDescription: "A dedicated video editing team that handles the editors, project management, quality checks, and turnaround, so your team publishes more.",
      }}
    >
      <HeroSection />
    </PageShell>
  );
}
