"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

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

  // Lock body scroll when modal is open
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
      className={`fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-8 transition-all duration-300 ${
        isClosing
          ? "opacity-0 backdrop-blur-none"
          : "opacity-100 backdrop-blur-md bg-slate-950/75"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cbpdCoursePopupTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* Pop-up Card Container */}
      <div
        ref={popupRef}
        className={`relative w-full max-w-[960px] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white text-slate-900 shadow-[0_25px_80px_rgba(0,0,0,0.7),0_0_60px_rgba(0,168,143,0.35)] transition-all duration-350 transform ${
          isClosing
            ? "scale-95 translate-y-3 opacity-0"
            : "scale-100 translate-y-0 opacity-100 animate-in fade-in zoom-in-95"
        }`}
      >
        {/* Screen Reader Title */}
        <h2 id="cbpdCoursePopupTitle" className="sr-only">
          Explore Our Ofqual-Aligned Courses - Central Board of Professional Development (CBPD UK)
        </h2>

        {/* Animated Background Ambient Orbs */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-[#00A88F]/50 via-[#0A2A5E]/40 to-transparent blur-3xl pointer-events-none animate-popup-shade-1"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-[#1747A3]/45 via-[#00A88F]/30 to-transparent blur-3xl pointer-events-none animate-popup-shade-2"
          aria-hidden="true"
        />

        {/* Close Button */}
        <button
          ref={closeBtnRef}
          onClick={handleClose}
          aria-label="Close pop-up"
          className="group absolute top-3 right-3 sm:top-4 sm:right-4 z-40 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-950/70 hover:bg-slate-950/90 active:scale-90 text-white flex items-center justify-center transition-all duration-300 border border-white/25 backdrop-blur-md shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-90" />
        </button>

        {/* Banner Graphic wrapped in interactive Link */}
        <Link
          href="/coming-soon"
          onClick={handleClose}
          className="block relative group cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-500"
          aria-label="Explore Our Ofqual-Aligned Courses"
        >
          <div className="relative w-full aspect-[1024/409] bg-slate-100">
            <Image
              src="/images/cbpd-ofqual-popup-banner.jpg"
              alt="CBPD UK - Explore Our Ofqual-Aligned Courses. Gain recognised qualifications. Build your skills. Unlock global opportunities."
              fill
              priority
              unoptimized
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 960px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.012]"
            />

            {/* Subtle Luxury Sheen Sweep on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
          </div>
        </Link>

        {/* Mobile Quick Action Strip (< 640px) */}
        <div className="sm:hidden px-4 py-3 bg-[#071C3D] text-white flex items-center justify-between gap-3 border-t border-teal-500/30">
          <div className="text-[11px] leading-tight text-slate-200">
            <span className="font-semibold text-white block">Ofqual-Aligned Qualifications</span>
            <span className="text-teal-300 text-[10px]">Build skills &bull; Global reach</span>
          </div>
          <Link
            href="/coming-soon"
            onClick={handleClose}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00A88F] to-[#008B74] hover:from-[#008B74] hover:to-[#007461] text-white text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
