"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import cbpdLogo from "../../public/cbpd-logo-transparent.png";
import TiltCard from "@/components/TiltCard";
import { programData as staticProgramData } from "@/data/programs";
import { api } from "@/lib/api";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [programData, setProgramData] = useState<any[]>(staticProgramData);
  
  // Mobile accordion states
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Fetch dynamic programs data
    async function fetchDynamicData() {
      try {
        const [categoriesRes, coursesRes] = await Promise.all([
          api.getCategories(),
          api.getCourses()
        ]);
        const cats = categoriesRes.categories || [];
        const courses = coursesRes.courses || [];
        
        if (cats.length > 0) {
          const formatted = cats.map((cat: any) => ({
             title: cat.name,
             slug: cat.slug,
             icon: cat.icon || "🎓",
             subs: courses
               .filter((c: any) => c.categoryId && (c.categoryId._id === cat._id || c.categoryId === cat._id))
               .map((c: any) => ({ title: c.title, slug: c.slug }))
          }));
          setProgramData(formatted);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic program data:", err);
      }
    }
    fetchDynamicData();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const moreTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProgramsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProgramsOpen(false);
    }, 200);
  };

  const handleMoreEnter = () => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    setMoreOpen(true);
  };

  const handleMoreLeave = () => {
    moreTimeoutRef.current = setTimeout(() => {
      setMoreOpen(false);
    }, 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || programsOpen || moreOpen ? "glass-dark bg-primary-900/95 shadow-xl border-b border-white/10" : "bg-transparent py-3"
      }`}
    >
      <div className={`container mx-auto px-6 md:px-12 flex justify-between transition-all duration-300 ${scrolled || programsOpen || moreOpen ? 'items-center py-3' : 'items-start py-5 pt-8'}`}>
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
          <img 
            src={cbpdLogo.src} 
            alt="CBPD Logo" 
            className={`w-auto group-hover:scale-105 transition-all duration-500 origin-left ${
              scrolled || programsOpen || moreOpen ? "h-12 md:h-14" : "h-24 md:h-32 lg:h-40"
            }`} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 h-full">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Why Choose CBPD", path: "/why-cbpd" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-sm font-medium text-slate-200 hover:text-brand-red transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-red after:transition-all hover:after:w-full pb-1"
            >
              {item.name}
            </Link>
          ))}

          {/* Programs Hover Trigger */}
          <div
            className="relative h-full py-4 flex items-center cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/programs" className={`text-sm font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-brand-red after:transition-all pb-1 flex items-center gap-1 ${programsOpen ? 'text-brand-red after:w-full' : 'text-slate-200 hover:text-brand-red after:w-0 hover:after:w-full'}`}>
              Programs
              <svg className={`w-4 h-4 transition-transform duration-300 ${programsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
          </div>

          {[
            { name: "Become a Partner", path: "/partner" },
            { name: "For Learners", path: "/learners" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-sm font-medium text-slate-200 hover:text-brand-red transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-red after:transition-all hover:after:w-full pb-1 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}

          {/* More Hover Trigger */}
          <div
            className="relative h-full py-4 flex items-center cursor-pointer"
            onMouseEnter={handleMoreEnter}
            onMouseLeave={handleMoreLeave}
          >
            <span className={`text-sm font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-brand-red after:transition-all pb-1 flex items-center gap-1 ${moreOpen ? 'text-brand-red after:w-full' : 'text-slate-200 hover:text-brand-red after:w-0 hover:after:w-full'}`}>
              More
              <svg className={`w-4 h-4 transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
            
            {/* Standard Dropdown Menu */}
            <div className={`absolute top-full right-0 mt-0 w-56 glass-dark bg-primary-900/95 border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 transform origin-top overflow-hidden ${moreOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-90 opacity-0 invisible'}`}>
              <div className="flex flex-col py-2">
                <Link href="/accreditation" className="px-5 py-3 text-sm text-slate-200 hover:bg-white/10 hover:text-brand-red transition-colors block">Accreditation</Link>
                <Link href="/verifications" className="px-5 py-3 text-sm text-slate-200 hover:bg-white/10 hover:text-brand-red transition-colors block">Verifications</Link>
                <Link href="/testimonials" className="px-5 py-3 text-sm text-slate-200 hover:bg-white/10 hover:text-brand-red transition-colors block">Testimonials</Link>
                <Link href="/blog" className="px-5 py-3 text-sm text-slate-200 hover:bg-white/10 hover:text-brand-red transition-colors block">Blogs</Link>
                <Link href="/faq" className="px-5 py-3 text-sm text-slate-200 hover:bg-white/10 hover:text-brand-red transition-colors block border-b border-white/5">FAQs</Link>
              </div>
            </div>
          </div>

          <div className="pl-4 border-l border-white/20 flex items-center gap-4">
            <Link
              href="/login"
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-red/20 whitespace-nowrap"
            >
              Register / Login
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden flex text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Full Screen Desktop Mega Menu for Programs */}
      <div 
        className={`hidden xl:block absolute left-0 w-full overflow-hidden transition-all duration-500 ease-in-out bg-[#0a0f1c] border-t border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${programsOpen ? 'max-h-[700px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-6 md:px-12 flex h-[500px]">
          
          {/* Left Sidebar */}
          <div className="w-1/4 h-full overflow-y-auto py-6 pr-4 border-r border-white/10 custom-scrollbar-mega hide-scrollbars">
            <style jsx>{`
              .hide-scrollbars::-webkit-scrollbar { width: 4px; }
              .hide-scrollbars::-webkit-scrollbar-track { background: transparent; }
              .hide-scrollbars::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
            `}</style>
            <div className="space-y-1">
              {programData.map((prog, idx) => (
                <button
                  key={idx}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${activeCategory === idx ? 'bg-white/10 text-white font-bold border-l-2 border-brand-red' : 'text-slate-400 hover:bg-white/5 hover:text-white border-l-2 border-transparent'}`}
                  onMouseEnter={() => setActiveCategory(idx)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl opacity-80 group-hover:opacity-100">{prog.icon}</span>
                    <span className="text-sm tracking-wide">{prog.title.replace(/\s*Programmes?/i, '')}</span>
                  </div>
                  <svg className={`w-4 h-4 transition-transform ${activeCategory === idx ? 'translate-x-1 text-brand-red opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-3/4 h-full p-10 overflow-y-auto">
            <div className="flex items-center gap-6 mb-10 border-b border-white/10 pb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl shadow-inner border border-white/5">
                {programData[activeCategory]?.icon || "🎓"}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {programData[activeCategory]?.title?.replace(/ Programmes/i, '')} <span className="text-brand-red">Programmes</span>
                </h2>
                <p className="text-slate-400 text-sm">Explore specialized certifications within this discipline.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {programData[activeCategory]?.subs?.map((sub: any, i: number) => (
                <TiltCard key={i} sensitivity={5}>
                  <Link href={`/programs/${sub.slug}`} className="block px-6 py-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-red/30 transition-all duration-300 group">
                    <h3 className="text-white font-bold mb-2 group-hover:text-brand-red transition-colors">{sub.title}</h3>
                    <p className="text-sm text-slate-400">Comprehensive curriculum designed for modern industry standards.</p>
                  </Link>
                </TiltCard>
              ))}
              
              <TiltCard sensitivity={5}>
                <Link href={`/programs/${programData[activeCategory]?.slug}`} className="block px-6 py-5 rounded-2xl border border-dashed border-white/20 hover:border-brand-red/50 bg-transparent hover:bg-brand-red/5 transition-all duration-300 group flex items-center justify-center h-full min-h-[100px]">
                  <span className="text-slate-300 font-bold group-hover:text-brand-red transition-colors flex items-center gap-2">
                    View All {programData[activeCategory]?.title?.replace(/\s*Programmes?/i, '')}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </Link>
              </TiltCard>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full glass-dark bg-primary-900/95 border-t border-white/10 py-4 flex flex-col px-6 shadow-2xl max-h-[85vh] overflow-y-auto custom-scrollbar-mega pb-10">
           {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Why Choose CBPD", path: "/why-cbpd" },
          ].map((item) => (
            <Link key={item.name} href={item.path} className="text-white hover:text-brand-red py-3 border-b border-white/5 font-medium" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
          ))}

          {/* Programs Accordion */}
          <div className="py-1 border-b border-white/5">
            <button 
              className="w-full flex items-center justify-between py-2 text-white font-medium focus:outline-none" 
              onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
            >
              Programs
              <svg className={`w-5 h-5 transition-transform duration-300 ${mobileProgramsOpen ? 'rotate-180 text-brand-red' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileProgramsOpen ? 'max-h-[3000px] mt-2 mb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-white/5 rounded-2xl p-2 flex flex-col gap-1 border border-white/10">
                {programData.map((prog, idx) => (
                  <div key={idx} className="flex flex-col">
                    <button 
                      className={`w-full text-left flex items-center justify-between p-3 rounded-xl transition-all duration-300 focus:outline-none ${mobileActiveCategory === idx ? 'bg-white/10 text-brand-red font-bold shadow-sm' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                      onClick={() => setMobileActiveCategory(mobileActiveCategory === idx ? null : idx)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl bg-primary-900/50 p-1.5 rounded-lg border border-white/5">{prog.icon}</span>
                        <span className="text-sm tracking-wide">{prog.title.replace(/\s*Programmes?/i, '')}</span>
                      </div>
                      <svg className={`w-4 h-4 transition-transform duration-300 ${mobileActiveCategory === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileActiveCategory === idx ? 'max-h-[500px] opacity-100 mt-2 mb-3' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-12 pr-4 flex flex-col gap-4 py-2 border-l border-white/10 ml-6">
                        {prog.subs.map((sub, i) => (
                          <Link 
                            key={i} 
                            href={`/programs/${sub.slug}`} 
                            className="text-xs text-slate-400 hover:text-brand-red transition-colors flex items-start gap-2"
                            onClick={() => { setMobileProgramsOpen(false); setMobileMenuOpen(false); }}
                          >
                            <span className="text-brand-red opacity-80 mt-0.5 text-[0.6rem]">●</span>
                            <span className="leading-tight">{sub.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {[
            { name: "Become a Partner", path: "/partner" },
            { name: "For Learners", path: "/learners" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link key={item.name} href={item.path} className="text-white hover:text-brand-red py-3 border-b border-white/5 font-medium" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
          ))}

          {/* More Accordion */}
          <div className="py-1 border-b border-white/5">
            <button 
              className="w-full flex items-center justify-between py-2 text-white font-medium focus:outline-none" 
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
            >
              More
              <svg className={`w-5 h-5 transition-transform duration-300 ${mobileMoreOpen ? 'rotate-180 text-brand-red' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileMoreOpen ? 'max-h-[500px] mt-2 mb-2 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-white/5 rounded-xl p-3 flex flex-col gap-3 border border-white/10 ml-2">
                {[
                  { name: "Accreditation", path: "/accreditation" },
                  { name: "Verifications", path: "/verifications" },
                  { name: "Testimonials", path: "/testimonials" },
                  { name: "FAQs", path: "/faq" },
                  { name: "Blogs", path: "/blog" },
                ].map(sub => (
                   <Link 
                     key={sub.name} 
                     href={sub.path} 
                     className="text-sm text-slate-300 hover:text-brand-red transition-colors pl-2"
                     onClick={() => { setMobileMoreOpen(false); setMobileMenuOpen(false); }}
                   >
                     {sub.name}
                   </Link>
                ))}
              </div>
            </div>
          </div>
           
          <div className="mt-8 flex justify-center items-center px-2">
            <Link href="/login" className="px-6 py-3 w-full text-center rounded-full bg-brand-red text-white font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">
              Register / Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
