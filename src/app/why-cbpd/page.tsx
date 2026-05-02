"use client";

import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WhyChooseCBPDPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-12", "opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const features = [
    { title: "More Practical", desc: "Strong emphasis on applied skills and real, measurable professional outcomes rather than just academic theory.", icon: "🎯", color: "from-brand-blue" },
    { title: "Faster & Flexible", desc: "Shorter, highly-focused development pathways explicitly designed for busy professionals.", icon: "⚡", color: "from-brand-red" },
    { title: "Globally Trusted", desc: "Prestigious UK credentials internationally recognized and accepted across 100+ countries.", icon: "🌍", color: "from-brand-red" },
    { title: "Learner & Partner Focused", desc: "Providing agile, responsive support alongside highly adaptable modern delivery models.", icon: "🤝", color: "from-primary-600" },
    { title: "Quality Assured", desc: "Uncompromising rigorous standards fully backed by high-level CPD Provider recognition.", icon: "⭐", color: "from-brand-red" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c]">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary-900 overflow-hidden border-b border-primary-800">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542744094-24638ea0b34e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent z-0"></div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none z-0 animate-[pulse_8s_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none transform translate-y-1/2 z-0 animate-[pulse_10s_infinite_reverse]"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-block px-5 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold tracking-wider uppercase">The Advantage</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Why Choose <span className="text-brand-red">CBPD</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              CBPD deliberately delivers a superior professional development experience designed strictly around modern career demands.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-20 relative bg-white dark:bg-[#050812] z-20">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center animate-on-scroll translate-y-12 opacity-0 transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-10 max-w-4xl mx-auto leading-relaxed">
            Professionals and dynamic organisations worldwide are actively choosing CBPD for its perfect balance of <span className="text-brand-red">prestige</span>, <span className="text-brand-blue">practicality</span>, and <span className="text-brand-red">accessibility</span>.
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
        </div>
      </section>

      {/* The 5 Key Pillars */}
      <section className="py-24 bg-slate-50 dark:bg-[#0a0f1c] relative overflow-hidden border-t border-slate-200 dark:border-primary-800">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Intro Block occupying one slot */}
            <div className="flex flex-col justify-center animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out pr-8 md:col-span-2 lg:col-span-1 border-b md:border-b-0 lg:border-r border-slate-200 dark:border-white/10 pb-10 lg:pb-0 mb-10 lg:mb-0">
               <h3 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Our Superior <br/><span className="text-brand-blue">Delivery Model</span></h3>
               <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                 We consciously broke away from sluggish, conventional educational frameworks to build an agile, modern approach that instantly rewards ambition and hard work.
               </p>
            </div>

            {features.map((feature, idx) => (
              <div key={idx} className="animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out" style={{ transitionDelay: `${idx * 100}ms` }}>
                <TiltCard sensitivity={8} className="h-full">
                  <div className="bg-white dark:bg-primary-900 border border-slate-100 dark:border-primary-800 rounded-3xl p-8 h-full hover:shadow-[0_20px_40px_rgba(30,64,175,0.1)] transition-all duration-500 group relative overflow-hidden flex flex-col">
                    
                    {/* Gradient highlight line on top */}
                    <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${feature.color} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    
                    <div className="text-5xl mb-6 transform group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors">{feature.title}</h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                      {feature.desc}
                    </p>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Trust Banner */}
      <section className="py-0">
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[500px]">
          <div className="lg:w-1/2 w-full h-[300px] lg:h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply z-10 group-hover:bg-brand-blue/10 transition-colors duration-700"></div>
            <img 
               src="/images/external/1578574577315-3fbeb0cecdc2.jpg" 
               alt="Global Map showing trust" 
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
          
          <div className="lg:w-1/2 w-full bg-brand-red flex flex-col justify-center p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-on-scroll translate-y-12 opacity-0 transition-all duration-700">
              Trusted in Over 100+ Countries
            </h3>
            <div className="animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 delay-100">
              <p className="text-xl text-red-100 mb-4 leading-relaxed">
                CBPD qualifications are recognised by a global network of learners, institutions, and employers.
              </p>
              <p className="text-xl text-red-100 mb-10 leading-relaxed">
                Supported by the CBPD Qualification Framework (CQF) and aligned with recognised Continuing Professional Development (CPD) standards, our programmes ensure structured progression, academic integrity, and internationally benchmarked outcomes.
              </p>
            </div>
            
            <div className="animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 delay-200">
              <MagneticButton strength={20}>
                <Link href="/programs" className="inline-flex px-8 py-4 rounded-full bg-white text-brand-red font-bold text-lg hover:bg-brand-blue hover:text-white transition-all shadow-lg hover:shadow-brand-red/40 flex-row items-center gap-3 group">
                  Explore The CBPD Difference
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
