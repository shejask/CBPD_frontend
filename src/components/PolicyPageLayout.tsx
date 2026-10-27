"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  FileText, 
  Mail, 
  Building2, 
  CheckCircle,
  HelpCircle 
} from "lucide-react";

export const policyLinks = [
  { name: "Privacy Policy", href: "/privacy-policy", slug: "privacy-policy", description: "How we collect, use, and safeguard personal data." },
  { name: "Terms and Conditions", href: "/terms-and-conditions", slug: "terms-and-conditions", description: "Terms governing use of our website and services." },
  { name: "Complaints & Appeals Policy", href: "/complaints-appeals-policy", slug: "complaints-appeals-policy", description: "Procedures for lodging concerns, complaints, and appeals." },
  { name: "Cookies Policy", href: "/cookies-policy", slug: "cookies-policy", description: "Information about cookie usage and user tracking choices." },
  { name: "Data Protection Notice", href: "/data-protection-notice", slug: "data-protection-notice", description: "UK GDPR compliance and data protection practices." },
  { name: "Copyright Notice", href: "/copyright-notice", slug: "copyright-notice", description: "Intellectual property and copyright guidelines." },
  { name: "Legal Information", href: "/legal-information", slug: "legal-information", description: "Corporate entity details and regulatory framework." },
];

interface PolicyPageLayoutProps {
  title: string;
  subtitle?: string;
  activeSlug: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function PolicyPageLayout({
  title,
  subtitle,
  activeSlug,
  lastUpdated,
  children,
}: PolicyPageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-primary-900/60 text-slate-800 dark:text-slate-100">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-red/15 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              </li>
              <li className="text-slate-400">Policies & Legal Information</li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              </li>
              <li className="text-brand-red font-medium truncate max-w-[200px] sm:max-w-none">
                {title}
              </li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                Policies & Legal Information
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Last Updated Badge */}
            {lastUpdated && (
              <div className="shrink-0 self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-slate-200 text-xs sm:text-sm backdrop-blur-sm shadow-sm">
                <Clock className="w-4 h-4 text-brand-red" />
                <span>
                  Last updated: <strong className="text-white font-semibold">{lastUpdated}</strong>
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Navigation Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-6">
            <div className="bg-white dark:bg-primary-800/80 rounded-2xl border border-slate-200 dark:border-primary-700/60 p-5 shadow-sm sticky top-28">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-red" />
                Legal Documents
              </h2>

              <nav className="space-y-1">
                {policyLinks.map((item, index) => {
                  const isActive = item.slug === activeSlug;
                  return (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className={`group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                        isActive
                          ? "bg-brand-red text-white shadow-md shadow-brand-red/20 font-semibold"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-primary-700/50 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={`text-[11px] font-mono ${isActive ? "text-white/80" : "text-slate-400"}`}>
                          {String(index + 1).padStart(2, "0")}.
                        </span>
                        <span className="truncate">{item.name}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive
                            ? "text-white translate-x-0.5"
                            : "text-slate-400 group-hover:translate-x-1"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Legal Assistance Box */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-primary-700/60">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-primary-900/60 border border-slate-200 dark:border-primary-700/40">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                    <Building2 className="w-3.5 h-3.5 text-brand-red" />
                    CBPD Legal & Compliance
                  </div>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                    Have questions regarding our legal framework or regulatory standing?
                  </p>
                  <a
                    href="mailto:info@cbpd.co.uk"
                    className="inline-flex items-center gap-1.5 text-xs text-brand-red font-semibold hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    info@cbpd.co.uk
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Content Card */}
          <main className="lg:col-span-8 xl:col-span-9">
            <article className="bg-white dark:bg-primary-800/80 rounded-2xl border border-slate-200 dark:border-primary-700/60 p-6 sm:p-10 shadow-sm prose prose-slate dark:prose-invert max-w-none">
              {children}
            </article>

            {/* Regulatory & Verification Badge Footer Card */}
            <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-primary-800/60 border border-slate-200 dark:border-primary-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 shadow-sm">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Central Board of Professional Development (CBPD)
                  </p>
                  <p className="text-slate-500 dark:text-slate-400">
                    UK Registered Company · Company No: 16442180
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-primary-700/60 hover:bg-brand-red hover:text-white dark:hover:bg-brand-red text-slate-700 dark:text-slate-200 font-medium transition-colors"
                >
                  Contact Legal Team
                </Link>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
