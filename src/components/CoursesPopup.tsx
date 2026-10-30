"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";

const STORAGE_KEY = "cbpdWidePopupSeen";

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

    // Allow re-opening anytime via custom event (e.g. from banner, footer or test action)
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
      id="cbwPopup"
      className={`cbw-popup ${isOpen ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cbwTitle"
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="cbw-card">
        <button
          ref={closeBtnRef}
          className="cbw-close"
          id="cbwClose"
          aria-label="Close pop-up"
          onClick={handleClose}
        >
          &times;
        </button>

        <div className="cbw-row">
          {/* Brand Panel */}
          <div className="cbw-brand">
            <div className="cbw-ring" aria-hidden="true">
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
            </div>
            <div>
              <div className="cbw-word">
                CBPD<span>UK</span>
              </div>
              <small>
                Central Board of<br />Professional Development
              </small>
            </div>
          </div>

          {/* Main Body */}
          <div className="cbw-body">
            <p className="cbw-eyebrow rv" style={{ "--i": 0 } as React.CSSProperties}>
              CBPD UK &middot; New Course Offerings
            </p>
            <h2 className="cbw-title rv" id="cbwTitle" style={{ "--i": 1 } as React.CSSProperties}>
              <span className="l1">Explore our</span>{" "}
              <span className="cbw-band">Ofqual-Aligned</span>{" "}
              <span className="l3">Courses</span>
            </h2>
            <p className="cbw-text rv" style={{ "--i": 2 } as React.CSSProperties}>
              Discover professional courses across a range of industries, designed to support skills development and professional growth.
            </p>
            <div className="cbw-cta rv" style={{ "--i": 3 } as React.CSSProperties}>
              <Link
                className="cbw-btn"
                href="/programs"
                id="cbwCta"
                onClick={handleClose}
              >
                View All Courses
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
              <span className="cbw-note">
                Explore our available courses and programme details.
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="cbw-feats">
            <div className="cbw-feat" style={{ "--i": 0 } as React.CSSProperties}>
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
              <span>Ofqual-aligned courses</span>
            </div>

            <div className="cbw-feat" style={{ "--i": 1 } as React.CSSProperties}>
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
              </svg>
              <span>Practical learning for real-world success</span>
            </div>

            <div className="cbw-feat" style={{ "--i": 2 } as React.CSSProperties}>
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
              <span>Professional growth and career progression</span>
            </div>

            <div className="cbw-feat" style={{ "--i": 3 } as React.CSSProperties}>
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
              <span>Global opportunities and international reach</span>
            </div>
          </div>
        </div>

        {/* Bottom Motto Bar */}
        <div className="cbw-bar">
          <b>
            Gain recognised qualifications &middot; Build your skills &middot; Unlock global opportunities
          </b>
          <span className="cbw-motto">Your Future, Our Focus</span>
        </div>
      </div>
    </div>
  );
}
