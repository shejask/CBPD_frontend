"use client";

import { useEffect, useState, useRef } from "react";

export default function AboutUs() {
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

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-primary-900 border-b border-slate-200 dark:border-primary-800 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className={`md:w-1/2 relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <div className="absolute inset-0 bg-brand-blue/20 transform rotate-3 rounded-3xl"></div>
          <img 
            src="/images/external/1522202176988-66273c2fd55f.jpg" 
            alt="Professionals in a learning environment" 
            className="relative z-10 w-full rounded-3xl object-cover object-center shadow-2xl h-[400px] hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-brand-red text-white p-6 rounded-2xl z-20 shadow-xl animate-float">
            <p className="text-xl font-bold">Proven</p>
            <p className="font-semibold text-sm">Excellence</p>
          </div>
        </div>

        <div className={`md:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            <span className="text-brand-blue dark:text-brand-red">Leaders</span> in Education Skill Development Solutions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            A global perspective, we empower learners to make an impact anywhere in the world. We set the benchmark for success by making excellence the foundation of everything we do.
          </p>
          <ul className="space-y-4 mb-8">
            {['Global Reach', 'Excellence as Standard', 'Recognition of Excellence', 'Dynamic Networking', 'Comprehensive Learning'].map((feat, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">✓</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
