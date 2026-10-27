"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { X, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const STORAGE_KEY = "cbpdCoursesPopupSeen";

export default function CoursesPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage errors in private/restricted mode
    }

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      if (lastActiveElementRef.current && typeof lastActiveElementRef.current.focus === "function") {
        lastActiveElementRef.current.focus();
      }
    }, 320);
  }, []);

  const handleOpen = useCallback(() => {
    if (typeof document !== "undefined") {
      lastActiveElementRef.current = document.activeElement as HTMLElement | null;
    }
    setIsOpen(true);
    setIsClosing(false);
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 150);
  }, []);

  useEffect(() => {
    setHasMounted(true);

    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }

    let timer: NodeJS.Timeout | null = null;
    if (!seen) {
      // Open after a smooth delay so the page loads first
      timer = setTimeout(() => {
        handleOpen();
      }, 900);
    }

    // Allow re-opening anytime via custom event (e.g. from banner or test button)
    const handleCustomOpen = () => handleOpen();
    window.addEventListener("openCoursesPopup", handleCustomOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isClosing) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("openCoursesPopup", handleCustomOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleOpen, handleClose, isOpen, isClosing]);

  // Lock body scroll when modal is open on small screens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!hasMounted || !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-6 transition-all duration-300 ${
        isClosing
          ? "opacity-0 backdrop-blur-none"
          : "opacity-100 backdrop-blur-md bg-slate-950/70"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cbpdCoursePopupTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* Pop-up Card */}
      <div
        ref={popupRef}
        className={`relative w-full max-w-[560px] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#071a3d] text-white shadow-[0_25px_80px_rgba(0,0,0,0.65),0_0_60px_rgba(23,71,163,0.35)] transition-all duration-350 transform ${
          isClosing
            ? "scale-95 translate-y-3 opacity-0"
            : "scale-100 translate-y-0 opacity-100 animate-in fade-in zoom-in-95"
        }`}
      >
        {/* Animated Background Shade 1: Royal Blue Ambient Orb */}
        <div
          className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-gradient-to-br from-[#1747A3]/75 via-[#0A2A5E]/40 to-transparent blur-3xl pointer-events-none animate-popup-shade-1"
          aria-hidden="true"
        />

        {/* Animated Background Shade 2: Crimson Accent Ambient Orb */}
        <div
          className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-gradient-to-tr from-[#D62839]/35 via-[#E8404F]/15 to-transparent blur-3xl pointer-events-none animate-popup-shade-2"
          aria-hidden="true"
        />

        {/* Central Radial Base Glow */}
        <div
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(23,71,163,0.45)_0%,transparent_65%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Diagonal Luxury Foil Light Sweep Animation */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-popup-shine" />
        </div>

        {/* Certificate Style Inset Frame with Corner Ornaments */}
        <div
          className="absolute inset-2.5 sm:inset-3.5 border border-[#D62839]/40 rounded-xl sm:rounded-2xl pointer-events-none"
          aria-hidden="true"
        >
          {/* Subtle Corner Pips */}
          <span className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-[#FF6B77]/80 shadow-[0_0_4px_#FF6B77]" />
          <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#FF6B77]/80 shadow-[0_0_4px_#FF6B77]" />
          <span className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-[#FF6B77]/80 shadow-[0_0_4px_#FF6B77]" />
          <span className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-[#FF6B77]/80 shadow-[0_0_4px_#FF6B77]" />
        </div>

        {/* Close Button */}
        <button
          ref={closeBtnRef}
          onClick={handleClose}
          aria-label="Close pop-up"
          className="group absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
        </button>

        {/* Modal Main Content */}
        <div className="relative z-10 p-5 sm:p-9 md:py-11 md:px-10 text-center flex flex-col items-center">
          {/* Academic Seal / Prestigious Graduation Cap Medallion */}
          <div className="relative mb-3.5 sm:mb-4.5 group cursor-default select-none" aria-hidden="true">
            {/* Ambient Breathing Aura */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#D62839]/40 via-[#FF6B77]/30 to-[#F59E0B]/35 blur-xl animate-cap-glow" />

            {/* Orbiting Star Ring with Traveling Gem */}
            <div className="absolute -inset-2 sm:-inset-2.5 rounded-full border border-dashed border-[#FBBF24]/30 animate-cap-orbit pointer-events-none">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FBBF24] shadow-[0_0_8px_#FBBF24,0_0_14px_#FFF]" />
            </div>

            {/* Sparkling Accent Stars */}
            <div className="absolute -top-1.5 -right-2 z-20 text-[#FBBF24] animate-sparkle-twinkle">
              <svg className="w-4 h-4 fill-current drop-shadow-[0_0_6px_#FBBF24]" viewBox="0 0 24 24">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -left-2 z-20 text-[#FF6B77] animate-sparkle-twinkle [animation-delay:1.2s]">
              <svg className="w-3.5 h-3.5 fill-current drop-shadow-[0_0_6px_#FF6B77]" viewBox="0 0 24 24">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            {/* Multi-Ring Luxury Seal Case */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-b from-[#FBBF24]/90 via-[#D62839] to-[#800F1C] shadow-[0_10px_28px_rgba(0,0,0,0.5),0_0_24px_rgba(214,40,57,0.45)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_36px_rgba(214,40,57,0.6)]">
              {/* Inner Bezel with radial depth */}
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#0e2756] via-[#07183d] to-[#040e24] p-1 flex items-center justify-center border border-white/10 relative overflow-hidden">
                {/* Background radial sheen inside medallion */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(251,191,36,0.2)_0%,rgba(214,40,57,0.15)_40%,transparent_70%)]" />

                {/* Subtle fine concentric academic inner borders */}
                <div className="absolute inset-1 rounded-full border border-white/15" />
                <div className="absolute inset-1.5 rounded-full border border-[#D62839]/30 border-dotted" />

                {/* Graduation Cap Artwork (Floating + Animated Tassel) */}
                <div className="relative z-10 w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center animate-cap-float">
                  <svg
                    viewBox="0 0 64 64"
                    className="w-full h-full overflow-visible drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="capDiamondGrad" x1="32" y1="10" x2="32" y2="34" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1E3A8A" />
                        <stop offset="50%" stopColor="#0F172A" />
                        <stop offset="100%" stopColor="#0B1120" />
                      </linearGradient>

                      <linearGradient id="capRimGold" x1="6" y1="22" x2="58" y2="22" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="30%" stopColor="#FDE68A" />
                        <stop offset="50%" stopColor="#F59E0B" />
                        <stop offset="70%" stopColor="#FDE68A" />
                        <stop offset="100%" stopColor="#D97706" />
                      </linearGradient>

                      <linearGradient id="skullCapGrad" x1="32" y1="28" x2="32" y2="45" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="70%" stopColor="#0F172A" />
                        <stop offset="100%" stopColor="#020617" />
                      </linearGradient>

                      <linearGradient id="tasselGold" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFFBEB" />
                        <stop offset="40%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#D97706" />
                      </linearGradient>

                      <linearGradient id="laurelGrad" x1="16" y1="46" x2="48" y2="54" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.85" />
                        <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#D97706" stopOpacity="0.85" />
                      </linearGradient>
                    </defs>

                    {/* Underlay: British Academic Laurel Wreath Arc */}
                    <g opacity="0.85">
                      <path d="M 17 48 C 20 52, 26 55, 32 55" stroke="url(#laurelGrad)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                      <path d="M 18 46 C 17 44, 20 44, 21 46 C 22 47, 20 49, 18 46 Z" fill="url(#laurelGrad)" />
                      <path d="M 23 49 C 23 47, 26 47, 27 49 C 27 51, 24 52, 23 49 Z" fill="url(#laurelGrad)" />
                      <path d="M 28 52 C 29 50, 31 51, 32 52.5 C 32 54, 29 54, 28 52 Z" fill="url(#laurelGrad)" />

                      <path d="M 47 48 C 44 52, 38 55, 32 55" stroke="url(#laurelGrad)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                      <path d="M 46 46 C 47 44, 44 44, 43 46 C 42 47, 44 49, 46 46 Z" fill="url(#laurelGrad)" />
                      <path d="M 41 49 C 41 47, 38 47, 37 49 C 37 51, 40 52, 41 49 Z" fill="url(#laurelGrad)" />
                      <path d="M 36 52 C 35 50, 33 51, 32 52.5 C 32 54, 35 54, 36 52 Z" fill="url(#laurelGrad)" />
                      <circle cx="32" cy="55" r="1.5" fill="#FDE68A" />
                    </g>

                    {/* Skull Cap Body (Underneath the Mortarboard) */}
                    <path
                      d="M 19 28 L 19 36 C 19 41.5 24.8 45 32 45 C 39.2 45 45 41.5 45 36 L 45 28 Z"
                      fill="url(#skullCapGrad)"
                      stroke="url(#capRimGold)"
                      strokeWidth="0.8"
                      strokeOpacity="0.75"
                    />

                    {/* Skull Cap Trim Ribbing */}
                    <path
                      d="M 21 34 C 24 37 40 37 43 34"
                      stroke="rgba(255,255,255,0.18)"
                      strokeWidth="0.75"
                      fill="none"
                    />

                    {/* 3D Mortarboard Underlayer Shadow */}
                    <polygon
                      points="32,24 58,15.5 32,7 6,15.5"
                      fill="#050B14"
                      transform="translate(0, 2)"
                    />

                    {/* Main Mortarboard Diamond Top */}
                    <polygon
                      points="32,24 58,15.5 32,7 6,15.5"
                      fill="url(#capDiamondGrad)"
                      stroke="url(#capRimGold)"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />

                    {/* Diamond Top Inner Facet Highlight */}
                    <polygon
                      points="32,22 55,15.5 32,9 9,15.5"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="0.6"
                      fill="none"
                    />

                    {/* Front Center Crease / Light Catcher */}
                    <line
                      x1="32"
                      y1="7"
                      x2="32"
                      y2="24"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="0.8"
                    />

                    {/* Centre Stud Button */}
                    <ellipse cx="32" cy="15.5" rx="2.5" ry="1.8" fill="url(#tasselGold)" stroke="#92400E" strokeWidth="0.5" />
                    <ellipse cx="31.6" cy="15" rx="0.9" ry="0.6" fill="#FFFFFF" />

                    {/* Animated Silk Tassel Group */}
                    <g className="animate-cap-tassel">
                      {/* Tassel Cord draped over the edge */}
                      <path
                        d="M 32 15.5 C 39 16.5, 47 18, 49 22 C 50 24, 49 27, 48.5 31"
                        stroke="url(#tasselGold)"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Tassel Bell / Retaining Ring */}
                      <ellipse cx="48.5" cy="31.5" rx="2" ry="1.2" fill="#D97706" stroke="#FEF3C7" strokeWidth="0.4" />

                      {/* Flowing Tassel Fringe Skirt */}
                      <path
                        d="M 46.5 32 C 46 38, 45.5 42, 46 45 C 47.5 45.5, 49.5 45.5, 51 45 C 51.5 42, 51 38, 50.5 32 Z"
                        fill="url(#tasselGold)"
                        stroke="#B45309"
                        strokeWidth="0.4"
                      />
                      {/* Individual Silk Thread Highlights */}
                      <line x1="47.5" y1="33" x2="47" y2="44" stroke="#FEF3C7" strokeWidth="0.5" strokeOpacity="0.85" />
                      <line x1="48.5" y1="33" x2="48.5" y2="44.5" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.95" />
                      <line x1="49.5" y1="33" x2="50" y2="44" stroke="#D97706" strokeWidth="0.5" />
                    </g>
                  </svg>
                </div>

                {/* Glassmorphic Light Catch Bevel over the medallion */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 sm:mb-3 rounded-full bg-[#D62839]/15 border border-[#D62839]/35 text-[#FF6B77] text-[10.5px] sm:text-xs font-semibold tracking-[0.14em] uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D62839] animate-pulse" />
            <span>CBPD UK · New Course Offerings</span>
          </div>

          {/* Title with Cormorant Garamond / Serif typography */}
          <h2
            id="cbpdCoursePopupTitle"
            className="font-serif text-[23px] xs:text-2xl sm:text-3xl md:text-[37px] font-bold text-white leading-[1.15] mb-3 tracking-tight max-w-[480px]"
          >
            Explore Our Ofqual-Aligned Courses
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mb-3.5 sm:mb-4 w-full max-w-[140px]" aria-hidden="true">
            <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-[#D62839]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D62839] shadow-[0_0_6px_#D62839]" />
            <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-[#D62839]" />
          </div>

          {/* Description */}
          <p className="text-[#C9D4E6] text-[13.5px] sm:text-[15.5px] leading-relaxed max-w-[440px] mb-4 sm:mb-5 font-normal">
            Discover professional courses across a range of industries, designed to support skills development and professional growth.
          </p>

          {/* Key Course Strengths Pill Tags */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-5 sm:mb-6 max-w-md">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/[0.07] border border-white/10 text-slate-200 text-[11px] sm:text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              UK Standards
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/[0.07] border border-white/10 text-slate-200 text-[11px] sm:text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B77]" />
              Industry Aligned
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/[0.07] border border-white/10 text-slate-200 text-[11px] sm:text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Flexible Progression
            </span>
          </div>

          {/* CTA Button */}
          <Link
            href="/programs"
            onClick={handleClose}
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#D62839] via-[#E8404F] to-[#D62839] bg-[length:200%_auto] hover:bg-[position:right_center] text-white font-semibold text-xs sm:text-sm tracking-[0.08em] uppercase transition-all duration-300 shadow-[0_8px_24px_rgba(214,40,57,0.45)] hover:shadow-[0_12px_32px_rgba(214,40,57,0.65)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Explore All Qualifications</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>

          {/* Sub-note */}
          <p className="mt-4 sm:mt-5 text-[11.5px] sm:text-[12.5px] text-[#C9D4E6]/80 font-normal">
            Explore our available courses and programme details.
          </p>
        </div>
      </div>
    </div>
  );
}
