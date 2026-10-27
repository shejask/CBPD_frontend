"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck, 
  BookOpen, 
  Globe2, 
  Building2, 
  CheckCircle2, 
  Mail, 
  Home, 
  BellRing
} from "lucide-react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#071638] text-white relative overflow-hidden flex flex-col justify-between pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Dynamic Background Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#1747A3]/30 blur-[150px] animate-popup-shade-1" />
        <div className="absolute top-1/2 -left-32 w-[550px] h-[550px] rounded-full bg-[#D62839]/25 blur-[160px] animate-popup-shade-2" />
        <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#1747A3]/25 blur-[140px]" />
        
        {/* Certificate Style Framing Border with Corner Points */}
        <div className="absolute inset-4 sm:inset-8 md:inset-12 border border-white/10 rounded-2xl md:rounded-3xl pointer-events-none">
          <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#FF6B77] shadow-[0_0_6px_#FF6B77]" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#FF6B77] shadow-[0_0_6px_#FF6B77]" />
          <span className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#FF6B77] shadow-[0_0_6px_#FF6B77]" />
          <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#FF6B77] shadow-[0_0_6px_#FF6B77]" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex justify-center">
          <ol className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md text-xs sm:text-sm text-slate-300">
            <li>
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </li>
            <li className="text-slate-400">Qualifications</li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </li>
            <li className="text-[#FF6B77] font-semibold">Directory Coming Soon</li>
          </ol>
        </nav>

        {/* Hero Section Container */}
        <div className="text-center flex flex-col items-center">
          
          {/* Animated 3D Graduation Medallion */}
          <div className="relative mb-6 group cursor-default select-none" aria-hidden="true">
            {/* Ambient Breathing Halo */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#D62839]/45 via-[#FF6B77]/35 to-[#F59E0B]/40 blur-2xl animate-cap-glow" />

            {/* Orbiting Starlight Ring */}
            <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-[#FBBF24]/35 animate-cap-orbit pointer-events-none">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#FBBF24] shadow-[0_0_10px_#FBBF24,0_0_18px_#FFF]" />
            </div>

            {/* Accent Sparkles */}
            <div className="absolute -top-2 -right-3 z-20 text-[#FBBF24] animate-sparkle-twinkle">
              <svg className="w-5 h-5 fill-current drop-shadow-[0_0_8px_#FBBF24]" viewBox="0 0 24 24">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            <div className="absolute -bottom-2 -left-3 z-20 text-[#FF6B77] animate-sparkle-twinkle [animation-delay:1.3s]">
              <svg className="w-4 h-4 fill-current drop-shadow-[0_0_8px_#FF6B77]" viewBox="0 0 24 24">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            {/* Luxury Concentric Medallion Shell */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[2.5px] bg-gradient-to-b from-[#FBBF24]/90 via-[#D62839] to-[#7f1d1d] shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(214,40,57,0.5)] transition-all duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#0c2450] via-[#07183d] to-[#040e24] p-1.5 flex items-center justify-center border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(251,191,36,0.25)_0%,rgba(214,40,57,0.2)_40%,transparent_70%)]" />
                <div className="absolute inset-1.5 rounded-full border border-white/20" />
                <div className="absolute inset-2 rounded-full border border-[#D62839]/35 border-dotted" />

                {/* Floating Mortarboard Cap */}
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center animate-cap-float">
                  <svg
                    viewBox="0 0 64 64"
                    className="w-full h-full overflow-visible drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="pageCapDiamondGrad" x1="32" y1="10" x2="32" y2="34" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1E3A8A" />
                        <stop offset="50%" stopColor="#0F172A" />
                        <stop offset="100%" stopColor="#0B1120" />
                      </linearGradient>

                      <linearGradient id="pageCapRimGold" x1="6" y1="22" x2="58" y2="22" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="30%" stopColor="#FDE68A" />
                        <stop offset="50%" stopColor="#F59E0B" />
                        <stop offset="70%" stopColor="#FDE68A" />
                        <stop offset="100%" stopColor="#D97706" />
                      </linearGradient>

                      <linearGradient id="pageSkullCapGrad" x1="32" y1="28" x2="32" y2="45" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="70%" stopColor="#0F172A" />
                        <stop offset="100%" stopColor="#020617" />
                      </linearGradient>

                      <linearGradient id="pageTasselGold" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFFBEB" />
                        <stop offset="40%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#D97706" />
                      </linearGradient>

                      <linearGradient id="pageLaurelGrad" x1="16" y1="46" x2="48" y2="54" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.85" />
                        <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#D97706" stopOpacity="0.85" />
                      </linearGradient>
                    </defs>

                    {/* Academic Laurel Arc */}
                    <g opacity="0.9">
                      <path d="M 17 48 C 20 52, 26 55, 32 55" stroke="url(#pageLaurelGrad)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                      <path d="M 18 46 C 17 44, 20 44, 21 46 C 22 47, 20 49, 18 46 Z" fill="url(#pageLaurelGrad)" />
                      <path d="M 23 49 C 23 47, 26 47, 27 49 C 27 51, 24 52, 23 49 Z" fill="url(#pageLaurelGrad)" />
                      <path d="M 28 52 C 29 50, 31 51, 32 52.5 C 32 54, 29 54, 28 52 Z" fill="url(#pageLaurelGrad)" />

                      <path d="M 47 48 C 44 52, 38 55, 32 55" stroke="url(#pageLaurelGrad)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                      <path d="M 46 46 C 47 44, 44 44, 43 46 C 42 47, 44 49, 46 46 Z" fill="url(#pageLaurelGrad)" />
                      <path d="M 41 49 C 41 47, 38 47, 37 49 C 37 51, 40 52, 41 49 Z" fill="url(#pageLaurelGrad)" />
                      <path d="M 36 52 C 35 50, 33 51, 32 52.5 C 32 54, 35 54, 36 52 Z" fill="url(#pageLaurelGrad)" />
                      <circle cx="32" cy="55" r="1.5" fill="#FDE68A" />
                    </g>

                    {/* Skull Cap Body */}
                    <path
                      d="M 19 28 L 19 36 C 19 41.5 24.8 45 32 45 C 39.2 45 45 41.5 45 36 L 45 28 Z"
                      fill="url(#pageSkullCapGrad)"
                      stroke="url(#pageCapRimGold)"
                      strokeWidth="0.8"
                      strokeOpacity="0.75"
                    />

                    {/* Mortarboard Diamond */}
                    <polygon
                      points="32,24 58,15.5 32,7 6,15.5"
                      fill="url(#pageCapDiamondGrad)"
                      stroke="url(#pageCapRimGold)"
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />

                    {/* Diamond Top Inner Facet */}
                    <polygon
                      points="32,22 55,15.5 32,9 9,15.5"
                      stroke="rgba(255,255,255,0.22)"
                      strokeWidth="0.7"
                      fill="none"
                    />

                    <line x1="32" y1="7" x2="32" y2="24" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
                    <ellipse cx="32" cy="15.5" rx="2.5" ry="1.8" fill="url(#pageTasselGold)" stroke="#92400E" strokeWidth="0.5" />

                    {/* Animated Tassel */}
                    <g className="animate-cap-tassel">
                      <path
                        d="M 32 15.5 C 39 16.5, 47 18, 49 22 C 50 24, 49 27, 48.5 31"
                        stroke="url(#pageTasselGold)"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <ellipse cx="48.5" cy="31.5" rx="2" ry="1.2" fill="#D97706" stroke="#FEF3C7" strokeWidth="0.4" />
                      <path
                        d="M 46.5 32 C 46 38, 45.5 42, 46 45 C 47.5 45.5, 49.5 45.5, 51 45 C 51.5 42, 51 38, 50.5 32 Z"
                        fill="url(#pageTasselGold)"
                        stroke="#B45309"
                        strokeWidth="0.4"
                      />
                      <line x1="47.5" y1="33" x2="47" y2="44" stroke="#FEF3C7" strokeWidth="0.5" strokeOpacity="0.85" />
                      <line x1="48.5" y1="33" x2="48.5" y2="44.5" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.95" />
                      <line x1="49.5" y1="33" x2="50" y2="44" stroke="#D97706" strokeWidth="0.5" />
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D62839]/15 border border-[#D62839]/30 text-[#FF6B77] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D62839] animate-ping" />
            <span>Under Active Development · Launching Soon</span>
          </div>

          {/* Page Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.12] mb-5">
            Full Qualifications &amp; Course Directory{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B77] via-[#FBBF24] to-[#E8404F]">
              Launching Soon
            </span>
          </h1>

          {/* Subtitle / Narrative */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            We are curating an extensive catalogue of Ofqual-aligned qualifications, CQF Level 1–8 diploma pathways, and accredited institutional certifications. Our full interactive portal will open shortly.
          </p>

          {/* Early Access / Notify Me Form */}
          <div className="w-full max-w-md p-2 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-2xl mb-12">
            {submitted ? (
              <div className="p-4 text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you! You have been registered.
                </div>
                <p className="text-xs text-slate-300">
                  We will notify you at <strong className="text-white">{email}</strong> as soon as the Qualifications Directory goes live.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email for launch alerts"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#D62839] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D62839] to-[#E8404F] hover:from-[#c22232] hover:to-[#d62839] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#D62839]/30 hover:shadow-[#D62839]/50 transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
                >
                  <BellRing className="w-4 h-4" />
                  Notify Me
                </button>
              </form>
            )}
          </div>

          {/* 4 Feature Preview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-12 text-left">
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-[#D62839]/40 hover:bg-white/[0.07] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#D62839]/15 border border-[#D62839]/30 text-[#FF6B77] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base mb-1">CQF Levels 1 to 8</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Structured qualification pathways from foundational certificates through to executive doctoral diplomas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-[#D62839]/40 hover:bg-white/[0.07] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/30 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base mb-1">Industry Disciplines</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Over 20 career tracks including Business, Engineering, Healthcare, IT, Finance, and Hospitality.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-[#D62839]/40 hover:bg-white/[0.07] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base mb-1">Online Verification</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Real-time cryptographic hash and QR-code validation for employers and institutions globally.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-[#D62839]/40 hover:bg-white/[0.07] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base mb-1">Global Delivery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Flexible online assessment and accredited international centre partnerships worldwide.
              </p>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/why-cbpd"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-xs sm:text-sm transition-all hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-[#FBBF24]" />
              <span>Why Choose CBPD</span>
            </Link>

            <Link
              href="/accreditation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-xs sm:text-sm transition-all hover:-translate-y-0.5"
            >
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Institutional Accreditation</span>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D62839] to-[#E8404F] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md shadow-[#D62839]/30 hover:shadow-[#D62839]/50 hover:-translate-y-0.5"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Corporate Accreditation Note */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            Central Board of Professional Development (CBPD UK) &middot; Registered in England &amp; Wales (No. 16442180)
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>&middot;</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <span>&middot;</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
