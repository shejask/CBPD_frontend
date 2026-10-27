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
          {/* Academic Seal / Medallion */}
          <div className="relative mb-3.5 sm:mb-4 group cursor-default" aria-hidden="true">
            {/* Pulsing Aura Ring */}
            <div className="absolute inset-0 rounded-full bg-[#D62839]/30 blur-md animate-popup-seal-ring" />
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-[1.5px] border-[#D62839] bg-[#D62839]/20 text-white shadow-[0_0_22px_rgba(214,40,57,0.45)] transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]"
              >
                <path d="M2 9l10-5 10 5-10 5L2 9z" />
                <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" />
                <path d="M22 9v6" />
              </svg>
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
            <span>View All Courses</span>
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
