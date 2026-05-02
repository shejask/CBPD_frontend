"use client";

import { useEffect, useState, useRef } from "react";
import TiltCard from "@/components/TiltCard";
import cimaaLogo from "../../public/cimaa-logo.jpg";

export default function Partners() {
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

  const partners = [
    { name: "CIMAA", url: cimaaLogo.src },
    { name: "CPD Logo", url: "/images/external/cpdlogo.png" },
    { name: "AOHT", url: "/images/external/aoht.png" },
    { name: "UKRLP", url: "/images/external/ukrlp.jpg" },
    { name: "ICO", url: "/images/external/ico.jpeg" },
    { name: "Data Protection", url: "/images/external/protection.1a5a131e.png" },
    { name: "Registration", url: "/images/external/reg noo.90469e93.png" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-slate-50 dark:bg-[#0a0f1c] border-y border-slate-200 dark:border-primary-800 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Our <span className="text-brand-blue dark:text-brand-red">Recognitions & Accreditations</span>
        </h2>
        <div className={`w-24 h-1 bg-brand-red mx-auto mb-16 transition-all duration-700 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {partners.map((partner, index) => {
            const isLast = index === partners.length - 1;
            return (
              <TiltCard 
                key={index} 
                sensitivity={15} 
                className={`animate-[float_${6 + (index%3)}s_ease-in-out_infinite] cursor-pointer ${
                  isLast ? "col-span-2 md:col-span-1 md:col-start-2 w-[calc(50%-1rem)] md:w-full mx-auto md:mx-0" : ""
                }`}
              >
                <div 
                  className="flex items-center justify-center p-6 bg-white dark:bg-primary-900 rounded-2xl shadow-sm border border-slate-100 dark:border-primary-800 hover:shadow-xl hover:-translate-y-3 transition-all duration-500 h-[160px] md:h-[180px]"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <img 
                    src={partner.url} 
                    alt={`${partner.name} Logo`} 
                    className="max-h-24 w-auto object-contain mix-blend-multiply dark:mix-blend-normal hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
