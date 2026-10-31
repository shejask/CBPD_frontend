"use client";

import { useEffect, useState, useRef } from "react";
import { Play, Pause, LayoutGrid, Layers, Globe2, Sparkles } from "lucide-react";

export default function GlobalPartners() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Row 1 Partners (13 items, moving Left)
  const partnersRow1 = [
    { name: "Anglia Ruskin University", url: "/images/external/anglia.webp" },
    { name: "Bloomsbury Institute London", url: "/images/external/bloomsberry.webp" },
    { name: "Brooks University", url: "/images/external/brooks.webp" },
    { name: "Allen Logistics Learning Institute", url: "/images/external/allen-logistics.webp" },
    { name: "Deakin University", url: "/images/external/deakin.webp" },
    { name: "University of East London", url: "/images/external/eastlondon.webp" },
    { name: "Emirates College", url: "/images/external/emirates.webp" },
    { name: "Folofit Wellness & Fitness", url: "/images/external/folofit.webp" },
    { name: "Sheffield Hallam University", url: "/images/external/hallam.webp" },
    { name: "University of Hertfordshire", url: "/images/external/hertfort.webp" },
    { name: "University of Leicester", url: "/images/external/leicester.webp" },
    { name: "Midland College", url: "/images/external/midland.webp" },
    { name: "SRJ Digital", url: "/images/external/srj-digital.webp" },
  ];

  // Row 2 Partners (13 items, moving Right)
  const partnersRow2 = [
    { name: "Northumbria University", url: "/images/external/northum.webp" },
    { name: "University of Portsmouth", url: "/images/external/portsmouth.webp" },
    { name: "Tax Internship Centre", url: "/images/external/tax-internship-centre.webp" },
    { name: "London South Bank University", url: "/images/external/south-bank.webp" },
    { name: "Staffordshire University", url: "/images/external/stafford.webp" },
    { name: "University College Birmingham (UCB)", url: "/images/external/ucb.webp" },
    { name: "University of the West of Scotland (UWS)", url: "/images/external/uws.webp" },
    { name: "7K Global", url: "/images/external/7k-global.png" },
    { name: "University of Westminster", url: "/images/external/westminister.webp" },
    { name: "Wrexham University", url: "/images/external/wrexham.webp" },
    { name: "Yorkville University", url: "/images/external/yorkville.webp" },
    { name: "Aston University", url: "/images/external/aston.webp" },
    { name: "Vexta International", url: "/images/external/vexta.webp" },
  ];

  // Combine for grid view
  const allPartners = [...partnersRow1, ...partnersRow2];

  // Duplicate for seamless infinite marquee loop
  const row1Logos = [...partnersRow1, ...partnersRow1];
  const row2Logos = [...partnersRow2, ...partnersRow2];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-primary-900 dark:via-[#071329] dark:to-primary-900 border-t border-slate-100 dark:border-primary-800 overflow-hidden relative"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-blue/5 dark:bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 text-center mb-12 relative z-10">
        {/* Eyebrow Pill */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 dark:bg-white/[0.08] border border-brand-blue/20 dark:border-white/10 text-brand-blue dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Globe2 className="w-3.5 h-3.5" />
          <span>Worldwide Academic &amp; Industry Network</span>
        </div>

        {/* Heading */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Our <span className="text-brand-blue dark:text-brand-red">Global Partners</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-blue via-brand-red to-teal-500 mx-auto mb-6 rounded-full" />

        {/* Narrative Description */}
        <p
          className={`text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Collaborating with premier progression universities, accredited learning centres, and global industry institutions to deliver recognised qualifications worldwide.
        </p>

        {/* Design Controls: View Mode Switcher + Play/Pause Button */}
        <div
          className={`mt-8 inline-flex items-center gap-2 p-1.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 shadow-inner backdrop-blur-md transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            onClick={() => setViewMode("slider")}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              viewMode === "slider"
                ? "bg-white dark:bg-primary-800 text-brand-blue dark:text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
            aria-label="View as Two-Row Continuous Slider"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>2-Row Infinite Slider</span>
          </button>

          <button
            onClick={() => setViewMode("grid")}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              viewMode === "grid"
                ? "bg-white dark:bg-primary-800 text-brand-blue dark:text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
            aria-label="View as Full Grid"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>All Partners Grid ({allPartners.length})</span>
          </button>

          {viewMode === "slider" && (
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-l border-slate-200 dark:border-white/10 ml-1 transition-colors"
              title={isPaused ? "Resume slider animation" : "Pause slider animation"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
                  <span className="hidden sm:inline">Play</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* ========================================================
          OPTION 1: DUAL-ROW MULTI-DIRECTIONAL INFINITE SLIDER
          ======================================================== */}
      {viewMode === "slider" && (
        <div
          className={`relative space-y-4 sm:space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left & Right Smooth Vignette Fade Gradients */}
          <div className="absolute top-0 left-0 w-20 sm:w-36 md:w-56 h-full bg-gradient-to-r from-white via-white/80 dark:from-primary-900 dark:via-primary-900/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 sm:w-36 md:w-56 h-full bg-gradient-to-l from-white via-white/80 dark:from-primary-900 dark:via-primary-900/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1: Sliding Left */}
          <div className="relative flex overflow-x-hidden group">
            <div
              className={`flex whitespace-nowrap items-center py-2 ${
                isPaused ? "[animation-play-state:paused]" : ""
              } group-hover:[animation-play-state:paused]`}
              style={{ animation: "marquee 34s linear infinite" }}
            >
              {row1Logos.map((partner, index) => (
                <div
                  key={`r1-${index}`}
                  className="group/card mx-2.5 sm:mx-3 flex items-center justify-center bg-white dark:bg-slate-50/95 rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_rgba(30,64,175,0.18)] hover:-translate-y-1.5 border border-slate-100 dark:border-white/20 transition-all duration-300 w-[180px] sm:w-[220px] md:w-[240px] h-[90px] sm:h-[100px] md:h-[108px] shrink-0 cursor-pointer overflow-hidden"
                  title={partner.name}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={partner.url}
                      alt={`${partner.name} Logo`}
                      loading="lazy"
                      className="w-full h-full max-h-[76px] sm:max-h-[84px] md:max-h-[92px] object-contain filter group-hover/card:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Sliding Right (Reverse Direction) */}
          <div className="relative flex overflow-x-hidden group">
            <div
              className={`flex whitespace-nowrap items-center py-2 ${
                isPaused ? "[animation-play-state:paused]" : ""
              } group-hover:[animation-play-state:paused]`}
              style={{ animation: "marqueeReverse 38s linear infinite" }}
            >
              {row2Logos.map((partner, index) => (
                <div
                  key={`r2-${index}`}
                  className="group/card mx-2.5 sm:mx-3 flex items-center justify-center bg-white dark:bg-slate-50/95 rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_rgba(215,38,61,0.18)] hover:-translate-y-1.5 border border-slate-100 dark:border-white/20 transition-all duration-300 w-[180px] sm:w-[220px] md:w-[240px] h-[90px] sm:h-[100px] md:h-[108px] shrink-0 cursor-pointer overflow-hidden"
                  title={partner.name}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={partner.url}
                      alt={`${partner.name} Logo`}
                      loading="lazy"
                      className="w-full h-full max-h-[76px] sm:max-h-[84px] md:max-h-[92px] object-contain filter group-hover/card:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          OPTION 2: INTERACTIVE COMPREHENSIVE GRID VIEW
          ======================================================== */}
      {viewMode === "grid" && (
        <div className="container mx-auto px-6 md:px-12 relative z-10 animate-in fade-in zoom-in-95 duration-500">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-5">
            {allPartners.map((partner, index) => (
              <div
                key={`grid-${index}`}
                className="group/grid flex items-center justify-center bg-white dark:bg-slate-50/95 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_rgba(30,64,175,0.16)] hover:-translate-y-1.5 border border-slate-100 dark:border-white/20 transition-all duration-300 h-[90px] sm:h-[105px] overflow-hidden"
                title={partner.name}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={partner.url}
                    alt={`${partner.name} Logo`}
                    loading="lazy"
                    className="w-full h-full max-h-[76px] sm:max-h-[85px] object-contain filter group-hover/grid:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subtle Bottom Caption */}
      <div className="text-center mt-12 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-brand-red" />
        <span>Hover over any partner card to pause motion and inspect accreditation details</span>
      </div>
    </section>
  );
}
