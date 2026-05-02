"use client";

import { useEffect, useState, useRef } from "react";
import TiltCard from "@/components/TiltCard";

export default function ProcessFlow() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: "Accreditation",
      description: "All learning partners should meet the minimum eligibility criteria for being accredited. We ensure the highest standard of educational facilities.",
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    {
      title: "Assessments",
      description: "Training partners are authorised to conduct proctored assessments with periodic evaluation to guarantee skill mastery.",
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
      )
    },
    {
      title: "Certification",
      description: "Candidates meeting the minimum skill requirements are issued a digitally verifiable credential recognised globally.",
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 dark:bg-primary-900 border-b border-slate-200 dark:border-primary-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2 block">Our Methodology</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">The Process Flow</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A seamless journey from institutional accreditation to empowering students with globally recognised certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <TiltCard key={index} sensitivity={12} className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} animate-[float_${6 + index}s_ease-in-out_infinite]`}>
              <div 
                className="bg-white dark:bg-primary-800 rounded-2xl p-8 shadow-[0_5px_15px_rgba(0,0,0,0.05)] shadow-brand-blue/5 dark:shadow-none border-t-4 border-brand-red dark:border-brand-blue hover:shadow-[0_20px_40px_rgba(30,64,175,0.15)] transition-shadow duration-500 relative group overflow-hidden h-full"
                style={{ transform: "translateZ(20px)" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 dark:bg-brand-red/10 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-[2]"></div>
                
                <div className="w-16 h-16 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center mb-6 border border-brand-blue/20">
                  <div className="text-brand-blue dark:text-brand-red">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {step.description}
                </p>
                
                <div className="mt-8 flex items-center text-brand-red dark:text-brand-blue font-bold group-hover:gap-3 transition-all">
                  Learn more 
                  <svg className="w-5 h-5 ml-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
