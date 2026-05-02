"use client";

import { useState } from "react";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

const programs = [
  { 
    title: "CBPD Certificate in Digital Media Production", 
    desc: "Master video production, editing, sound design, lighting, and post-production techniques using industry-standard tools." 
  },
  { 
    title: "CBPD Certificate in Journalism & News Reporting", 
    desc: "Develop skills in investigative journalism, news writing, ethical reporting, interviewing, and multimedia storytelling." 
  },
  { 
    title: "CBPD Certificate in Content Creation & Strategy", 
    desc: "Learn to plan, create, and manage engaging content across social media, websites, blogs, and digital platforms." 
  },
  { 
    title: "CBPD Certificate in Broadcasting & Television Production", 
    desc: "Gain expertise in TV programme production, studio operations, directing, scripting, and live broadcasting." 
  },
  { 
    title: "CBPD Certificate in Social Media Management & Marketing", 
    desc: "Build advanced strategies for social media campaigns, audience growth, analytics, and brand engagement." 
  },
  { 
    title: "CBPD Certificate in Media Management & Leadership", 
    desc: "Focus on running media organisations, editorial management, team leadership, and strategic media planning." 
  },
  { 
    title: "CBPD Certificate in Public Relations & Corporate Communication", 
    desc: "Develop skills in media relations, crisis communication, press releases, and building organisational reputation." 
  },
  { 
    title: "CBPD Certificate in Photography & Visual Storytelling", 
    desc: "Master professional photography techniques, composition, editing, and using images for powerful visual narratives." 
  },
  { 
    title: "CBPD Certificate in Podcast Production & Audio Media", 
    desc: "Learn audio storytelling, podcast scripting, recording, editing, distribution, and audience building." 
  },
  { 
    title: "CBPD Certificate in Graphic Design for Media", 
    desc: "Create visually compelling graphics, infographics, motion graphics, and branding materials for media projects." 
  },
  { 
    title: "CBPD Certificate in Digital Marketing & Media Advertising", 
    desc: "Explore online advertising, campaign management, SEO, and integrated media marketing strategies." 
  },
  { 
    title: "CBPD Certificate in Film & Documentary Production", 
    desc: "Cover pre-production, scripting, directing, cinematography, and editing for short films and documentaries." 
  },
  { 
    title: "CBPD Certificate in Media Law & Ethics", 
    desc: "Understand legal frameworks, copyright, defamation, privacy laws, and ethical standards in modern media." 
  },
  { 
    title: "CBPD Certificate in Emerging Media Technologies", 
    desc: "Explore new trends including AI in media, virtual reality, augmented reality, and interactive content creation." 
  },
  { 
    title: "CBPD Certificate in Advanced Media Strategy & Monetisation", 
    desc: "For experienced professionals — develop business models, audience monetisation, and long-term media strategies." 
  }
];

const benefits = [
  "Practical, creative, and technical learning with immediate application in media production and communication roles.",
  "Flexible delivery modes designed for working media professionals and aspiring creators.",
  "Prestigious UK-issued CBPD certification recognised by employers in the UK and globally.",
  "Strong coverage of both traditional and digital media skills, including content strategy, production, and management.",
  "Clear pathways for career progression in journalism, broadcasting, digital media, and corporate communications."
];

const steps = [
  "Select the CBPD Media programme that matches your role and creative or professional goals.",
  "Contact or enrol through an authorised CBPD partner (online or in your region).",
  "Complete the focused learning and practical project-based assessment.",
  "Receive your official CBPD digital certificate with unique verification code."
];

export default function MediaProgramPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState('overview');

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-primary-900 pb-20">
      
      {/* 1. Breadcrumbs */}
      <div className="bg-white dark:bg-primary-900 pt-32 pb-4 border-b border-slate-200 dark:border-primary-800">
        <div className="container mx-auto px-6 md:px-12 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
          <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <Link href="/programs" className="hover:text-brand-red transition-colors">Programmes</Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-900 dark:text-white">Media Programmes</span>
        </div>
      </div>

      {/* 2. Hero Section (Image background) */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url('/images/external/1478720568477-152d9b164e26.jpg')` }}
        ></div>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 z-0 bg-primary-900/80 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded bg-white/10 text-white font-semibold text-xs tracking-wider uppercase mb-6 border border-white/20">
              Training Course Category
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
              CBPD <span className="text-brand-red">Media Programmes</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
              Equipping journalists, content creators, digital media specialists, and communication professionals with immediately applicable skills for today's fast-changing media landscape.
            </p>
            <MagneticButton strength={10}>
              <Link href="/partner" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white font-bold rounded shadow-lg hover:bg-white hover:text-brand-red transition-all duration-300 group">
                Find a CBPD Partner
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 3. Light Banner Intro */}
      <section className="bg-brand-blue/5 dark:bg-brand-blue/10 border-b border-slate-200 dark:border-primary-800 py-10">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
            The Central Board of Professional Development (CBPD) offers a comprehensive range of practical Media programmes designed to equip communication professionals with immediately applicable skills for today's fast-changing media landscape.
          </p>
        </div>
      </section>

      {/* 4. Two-Column Content Layout (70/30 split) */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
            
            {/* Left Column (Main Content) */}
            <div className="lg:w-[65%] xl:w-[70%]">
              
              {/* Introduction Body */}
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 mb-12">
                <p>
                  CBPD Media certifications focus on <strong>digital content creation, storytelling, media production, audience engagement, and modern media management</strong>. 
                </p>
                <p>
                  This holistic approach helps professionals produce high-quality content while enabling media organisations, agencies, and corporate communication teams to strengthen their reach, reputation, and impact in a competitive digital world. All CBPD Media programmes are delivered flexibly through our authorised partners in online, blended, or classroom formats and lead to prestigious UK-issued CBPD certifications globally recognised by employers.
                </p>
              </div>

              {/* In-page Tabs for Content Toggle */}
              <div className="flex overflow-x-auto gap-2 border-b border-slate-200 dark:border-primary-800 mb-8 pb-[1px] no-scrollbar">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 font-semibold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === 'overview' ? 'border-brand-red text-brand-red' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}
                >
                  Programme Overview
                </button>
                <button 
                  onClick={() => setActiveTab('why')}
                  className={`px-6 py-3 font-semibold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === 'why' ? 'border-brand-red text-brand-red' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}
                >
                  Why Choose CBPD
                </button>
              </div>

              {/* Tab Content: Overview (Accordions) */}
              {activeTab === 'overview' && (
                <div className="animate-[fadeInUp_0.5s_ease-out]">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Explore Our Specialised Programmes</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-8">
                    CBPD provides targeted, high-impact programmes across key media and communication disciplines to elevate your creative and strategic capabilities.
                  </p>
                  
                  {/* Accordion List */}
                  <div className="space-y-4">
                    {programs.map((prog, idx) => (
                      <div key={idx} className="border border-slate-200 dark:border-primary-800 rounded-sm bg-white dark:bg-primary-900 overflow-hidden shadow-sm">
                        <button 
                          onClick={() => toggleAccordion(idx)}
                          className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-primary-800/50 transition-colors"
                        >
                          <span className={`font-bold text-lg md:text-xl transition-colors ${openAccordion === idx ? 'text-brand-red' : 'text-slate-900 dark:text-white'}`}>
                            {prog.title}
                          </span>
                          <span className={`relative w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-100 dark:bg-primary-800 text-slate-500 transition-transform duration-300 ${openAccordion === idx ? 'rotate-180 bg-brand-red text-white' : ''}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                          </span>
                        </button>
                        
                        <div className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${openAccordion === idx ? 'max-h-[500px] py-5 border-t border-slate-100 dark:border-primary-800 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {prog.desc}
                          </p>
                          <div className="mt-6">
                            <Link href="/partner" className="text-brand-red font-bold text-sm hover:underline flex items-center gap-2">
                              Enquire via Partner <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab Content: Why Choose CBPD */}
              {activeTab === 'why' && (
                <div className="animate-[fadeInUp_0.5s_ease-out] bg-white dark:bg-primary-800 p-8 rounded border border-slate-200 dark:border-primary-700 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Why Choose CBPD for Media Professional Development?</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    CBPD delivers shorter, more practical, and highly flexible media credentials when compared with many traditional qualifications. 
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    Our programmes merge creative excellence with indispensable modern skills such as digital content strategy, SEO, and emerging technologies—helping professionals and media organisations thrive and adapt in the rapidly evolving media landscape.
                  </p>
                </div>
              )}

            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:w-[35%] xl:w-[30%]">
              <div className="sticky top-28 space-y-6">
                
                {/* Benefits Card */}
                <div className="bg-white dark:bg-primary-900 border border-slate-200 dark:border-primary-800 rounded-sm shadow-sm p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wide text-sm border-b border-slate-100 dark:border-primary-800 pb-4">
                    Benefits of Studying
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 text-sm font-medium items-start">
                        <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enrolment Process Card */}
                <div className="bg-slate-50 dark:bg-[#050812] border border-slate-200 dark:border-white/10 rounded-sm shadow-sm p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wide text-sm border-b border-slate-200 dark:border-primary-800 pb-4">
                    How to Enrol
                  </h3>
                  <div className="relative border-l border-slate-300 dark:border-primary-700 ml-2.5 space-y-6 pb-2">
                    {steps.map((step, i) => (
                      <div key={i} className="relative pl-6">
                        <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-primary-800 border-[3px] border-brand-red flex items-center justify-center text-[10px] font-bold text-brand-red">
                          {i + 1}
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm font-medium pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact Widget */}
                <div className="bg-primary-900 rounded-sm shadow-lg p-6 lg:p-8 text-center text-white relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 blur-3xl"></div>
                   <h3 className="font-bold text-xl mb-4 relative z-10">Ready to Advance?</h3>
                   <p className="text-sm text-slate-300 mb-6 relative z-10">Our support team is ready to help you find the right media programme.</p>
                   <Link href="/contact" className="block w-full py-3 bg-brand-red text-white font-bold rounded text-sm hover:bg-white hover:text-brand-red transition-colors relative z-10">
                     Contact Us Today
                   </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Pre-Footer Action Blocks */}
      <section className="container mx-auto px-6 md:px-12 mt-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-slate-100 dark:bg-primary-800/50 p-10 lg:p-12 rounded-sm border border-slate-200 dark:border-primary-800 flex flex-col justify-center items-start group hover:border-brand-blue transition-colors">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">View All Programmes</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
              Discover our complete catalogue of professional credentials across all major disciplines.
            </p>
            <Link href="/programs" className="font-bold text-brand-blue dark:text-white group-hover:text-brand-red transition-colors flex items-center gap-2">
              Browse Catalogue <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

          <div className="bg-primary-900 p-10 lg:p-12 rounded-sm relative overflow-hidden flex flex-col justify-center items-start group">
            <div className="absolute inset-0 bg-brand-red/5 group-hover:bg-brand-red/10 transition-colors"></div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 relative z-10">Become a CBPD Partner</h3>
            <p className="text-slate-300 mb-8 max-w-sm relative z-10">
              Authorised partners have exclusive rights to deliver CBPD media programmes globally.
            </p>
            <Link href="/partner" className="font-bold text-brand-red group-hover:text-white transition-colors flex items-center gap-2 relative z-10">
              Deliver These Programmes <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
