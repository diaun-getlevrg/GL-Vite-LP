import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Volume2, VolumeX, Star } from "lucide-react";
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

const videos = ["/video/intro1.mp4", "/video/intro2.mp4"];

const stats = [
  { value: "Up to 80%", label: "Lower Cost Than an In-House Hire" },
  { value: "2×", label: "Demo Request Rate Doubled" },
  { value: "40+", label: "B2Bs Across North America" },
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
  const [clipIndex, setClipIndex] = useState(0);
  const [muted, setMuted] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/thank-you?service=video-editing");
  };

  const handleEnded = () => {
    setClipIndex((i) => (i + 1) % videos.length);
  };

  return (
    <section
      id="lead-form"
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] lg:overflow-hidden bg-[#061512]"
    >
      <div className="absolute inset-0 opacity-40">
        <img
          src="/images/hero/video-it-services-hero.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061512]/90 via-[#061512]/70 to-[#061512]" />
      </div>

      <div className="relative z-10 lg:h-full flex flex-col">
        {/* Top: centered headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="shrink-0 text-[clamp(1.5rem,3.6vh,2.75rem)] font-extrabold tracking-tight text-white text-center leading-tight px-6 pt-10 sm:pt-14 pb-3 sm:pb-4"
        >
          Product And Service Videos
          <br />
          <span className="text-[#51B027]">Without An In-House Team</span>
        </motion.h1>

        {/* Middle: video (left) + form (right) — same row height, no overflow */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:flex-1 lg:min-h-0 gap-6 lg:gap-10 px-6 sm:px-10 lg:px-16 max-w-container mx-auto w-full">
          <div className="flex flex-col w-full">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <video
                key={clipIndex}
                autoPlay
                muted={muted}
                playsInline
                onEnded={handleEnded}
                className="w-full h-full object-cover"
              >
                <source src={videos[clipIndex]} type="video/mp4" />
              </video>

              <button
                onClick={() => setMuted((m) => !m)}
                aria-label={muted ? "Unmute" : "Mute"}
                className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full mt-2.5 p-3 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-spark-500 fill-spark-500" />
                ))}
              </div>
              <p className="text-xs sm:text-sm-body text-gray-300 italic mb-2.5">
                &ldquo;Always responsive and reliable, Levrg has been a tremendous partner to our team. Get Levrg handled our marketing so we could focus on growth.&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/client/james-mcgrath.webp"
                  alt="James McGrath"
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-xs font-semibold text-white leading-tight">James McGrath</p>
                  <p className="text-[10px] text-gray-400 leading-tight">Brand &amp; Social Media Manager | Empellor CRM</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full"
          >
            <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-2xl p-4 sm:p-5">
              <h3 className="text-sub font-bold text-gray-900 mb-2.5">
                Claim Free Custom Pricing
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
                  Get Your Video Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mt-2.5">
              {stats.map((stat, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                  <div className="text-sub sm:text-h3 text-[#51B027] font-bold">{stat.value}</div>
                  <p className="text-[10px] text-gray-400 leading-snug mt-0.5">{stat.label}</p>
                </div>
              ))}
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
          Get a dedicated video team that creates product walkthroughs, service explainers,
          <br />
          and client testimonial videos.
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
                    <div className="w-6 h-6 rounded-full bg-spark-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                      {i + 1}
                    </div>
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

export function VideoITServicesPageV1() {
  return (
    <PageShell
      navItems={[]}
      ctaText="Get Your Video Team"
      ctaTarget="#lead-form"
      centerLogo
      hideCta
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
    </PageShell>
  );
}
