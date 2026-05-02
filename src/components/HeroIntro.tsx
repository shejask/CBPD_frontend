"use client";

import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function HeroIntro() {
  return (
    <section className="py-12 bg-white dark:bg-[#050812] border-b border-slate-200 dark:border-primary-800 z-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="w-full lg:w-1/2">
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-medium">
              CBPD empowers professionals and organisations worldwide with high-quality, employer-valued certifications that deliver immediate workplace impact.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
              <span className="px-4 py-2 bg-slate-100 dark:bg-primary-900 rounded-lg border border-slate-200 dark:border-primary-800 shadow-sm">UK-registered</span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-primary-900 rounded-lg border border-slate-200 dark:border-primary-800 shadow-sm">CPD Provider No. 21235</span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-primary-900 rounded-lg border border-slate-200 dark:border-primary-800 shadow-sm text-brand-blue dark:text-brand-red">Fast, Flexible & Internationally Trusted</span>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row flex-wrap items-center lg:justify-end gap-4">
            <MagneticButton strength={15}>
              <Link href="/programs" className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-red text-white font-bold text-base hover:bg-brand-blue transition-all shadow-[0_5px_20px_rgba(220,38,38,0.3)] hover:shadow-[0_5px_20px_rgba(30,64,175,0.3)] inline-flex justify-center items-center gap-2 group whitespace-nowrap">
                Explore CBPD Programmes
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </MagneticButton>
            <MagneticButton strength={15}>
              <Link href="/partner" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-brand-blue dark:border-white/20 text-brand-blue dark:text-white font-bold text-base hover:bg-brand-blue hover:border-brand-blue hover:text-white dark:hover:bg-white dark:hover:text-brand-blue transition-all inline-flex justify-center items-center gap-2 group whitespace-nowrap">
                Become a CBPD Partner
              </Link>
            </MagneticButton>
          </div>
          
        </div>
      </div>
    </section>
  );
}
