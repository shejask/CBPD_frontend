"use client";

import { useEffect, useState, useRef } from "react";

export default function Stats() {
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

  const stats = [
    { number: "5K+", label: "Learners Worldwide" },
    { number: "200+", label: "Global Partners" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "100+", label: "Programs Offered" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-primary-900 border-b border-slate-200 dark:border-primary-800 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
          <div className={`md:w-1/3 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Global Impact & Success</h2>
            <div className="w-20 h-1 bg-brand-red mb-6 mx-auto md:mx-0"></div>
            <p className="text-slate-600 dark:text-slate-400">
              Honoring outstanding achievement and professional excellence across the globe.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center justify-center p-4 rounded-xl border border-transparent hover:border-brand-blue/20 bg-slate-50 dark:bg-primary-800 transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-110 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(30,64,175,0.15)]`}
              >
                <span className="text-4xl font-bold text-brand-blue dark:text-brand-red mb-2">{stat.number}</span>
                <span className="text-sm text-slate-600 dark:text-slate-300 font-bold text-center uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
