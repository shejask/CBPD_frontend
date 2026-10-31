"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const STORAGE_KEY = "cbpdLondonPopupSeen";

export default function CoursesPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore private mode storage restrictions
    }
    if (lastActiveElementRef.current && typeof lastActiveElementRef.current.focus === "function") {
      lastActiveElementRef.current.focus();
    }
  }, []);

  const handleOpen = useCallback(() => {
    if (typeof document !== "undefined") {
      lastActiveElementRef.current = document.activeElement as HTMLElement | null;
    }
    setIsOpen(true);
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 150);
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }

    let timer: NodeJS.Timeout | null = null;
    if (!seen) {
      timer = setTimeout(() => {
        handleOpen();
      }, 800);
    }

    // Allow re-opening anytime via custom event (e.g. from banner, footer or action button)
    const handleCustomOpen = () => handleOpen();
    window.addEventListener("openCoursesPopup", handleCustomOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("openCoursesPopup", handleCustomOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleOpen, handleClose, isOpen]);

  // Lock body scroll while modal is open
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

  return (
    <div
      ref={popupRef}
      id="cbcPopup"
      className={`cbc-popup ${isOpen ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cbcTitle"
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="cbc-card">
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          className="cbc-close"
          id="cbcClose"
          aria-label="Close pop-up"
          onClick={handleClose}
        >
          &times;
        </button>

        <div className="cbc-main">
          {/* Left Column: Course Offering Content */}
          <div className="cbc-left">
            {/* Brand Header: Ofqual Lockup */}
            <div className="cbc-brand rv" style={{ "--i": 0 } as React.CSSProperties}>
              <div className="cbc-ofqual-lockup" aria-label="Ofqual Aligned Courses">
                <span className="cbc-ofqual-word">ofqual</span>
                <span className="cbc-ofqual-bar" />
                <span className="cbc-ofqual-sub">ALIGNED COURSES</span>
              </div>
            </div>

            {/* Eyebrow */}
            <p className="cbc-eyebrow rv" style={{ "--i": 1 } as React.CSSProperties}>
              <span className="cbc-new">New</span>
              Ofqual-Aligned &middot; Course Offerings
            </p>

            {/* Title */}
            <h2 className="cbc-title rv" id="cbcTitle" style={{ "--i": 2 } as React.CSSProperties}>
              <span className="l1">Explore our</span>
              <span className="cbc-band">Ofqual-Aligned</span>
              <span className="l3">Courses</span>
            </h2>

            {/* Narrative */}
            <p className="cbc-text rv" style={{ "--i": 3 } as React.CSSProperties}>
              Discover professional courses across a range of industries, designed to support skills development and professional growth.
            </p>

            {/* CTA Button and Detail Note */}
            <div className="cbc-cta rv" style={{ "--i": 4 } as React.CSSProperties}>
              <Link
                className="cbc-btn"
                href="/programs"
                id="cbcCta"
                onClick={handleClose}
              >
                <span>View All Courses</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <span className="cbc-note">
                Explore our available courses and programme details.
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Diagonal Scene with Big Ben London Photo */}
          <div className="cbc-right" aria-hidden="true">
            <div className="cbc-scene">
              {/* Big Ben London Landmark Photo */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/cbpd-london-bigben.webp"
                  alt="CBPD UK - Big Ben London"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 860px) 100vw, 550px"
                  className="object-cover object-center w-full h-full"
                />
              </div>

              {/* CSS fallback layer */}
              <div className="cbc-photo" />

              {/* Bottom Right Motto Ribbon */}
              <div className="cbc-motto">
                Your Future, <b>Our Focus</b>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Column Feature List */}
        <div className="cbc-feats">
          <div className="cbc-feat" style={{ "--i": 0 } as React.CSSProperties}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="9" r="6" />
              <path d="M8.5 14l-1.5 8 5-3 5 3-1.5-8" />
            </svg>
            <span>
              Ofqual-aligned<br />courses
            </span>
          </div>

          <div className="cbc-feat" style={{ "--i": 1 } as React.CSSProperties}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 9l10-5 10 5-10 5L2 9z" />
              <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" />
              <path d="M22 9v6" />
            </svg>
            <span>
              Practical learning<br />for real-world success
            </span>
          </div>

          <div className="cbc-feat" style={{ "--i": 2 } as React.CSSProperties}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M15 7h6v6" />
            </svg>
            <span>
              Professional growth<br />and career progression
            </span>
          </div>

          <div className="cbc-feat" style={{ "--i": 3 } as React.CSSProperties}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2c3 3 4.5 6.5 4.5 10S15 19 12 22c-3-3-4.5-6.5-4.5-10S9 5 12 2z" />
            </svg>
            <span>
              Global opportunities<br />and international reach
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
