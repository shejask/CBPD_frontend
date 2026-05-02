"use client";
import { useEffect, useState, useRef } from "react";
import TiltCard from "@/components/TiltCard";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      title: "Prestigious UK Recognition",
      description: "CBPD delivers what employers demand: immediately applicable skills combined with UK-issued certificates trusted in over 100 countries.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Proven Pathways",
      description: "Join over 5,000+ professionals who have already been certified through CBPD pathways, boasting a 100% learner satisfaction rate.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
      ),
      color: "from-red-500 to-brand-red"
    },
    {
      title: "Practical Programmes",
      description: "With 120+ practical programmes available across various specialties, our focus is on real-world application, enabling faster upskilling.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
      ),
      color: "from-amber-500 to-brand-red"
    },
    {
      title: "Global Partner Network",
      description: "Our credentials are delivered globally by 200+ authorised partners, ensuring high-quality education reaches professionals anywhere.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-slate-100 dark:bg-primary-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 mb-6">
            <span className="text-brand-blue font-semibold tracking-wide text-sm uppercase">Advantages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Why Professionals Choose <span className="text-brand-red">CBPD</span>
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            CBPD stands out as the agile UK professional body specialising in practical professional development. Unlike traditional awarding organisations, CBPD focuses on real-world application, enabling faster upskilling and clearer career progression.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {reasons.map((reason, index) => (
            <TiltCard key={index} sensitivity={15} className="h-full group">
              <div 
                className="bg-white dark:bg-primary-900 rounded-[2rem] p-8 shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-primary-800 hover:border-brand-blue/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden"
                style={{ transform: "translateZ(20px)" }}
              >
                {/* Hover Gradient Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-white/0 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-red transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
