"use client";

import { useEffect, useState, useRef } from "react";
import createPlus from "../../public/create-plus.jpg";

export default function GlobalPartners() {
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

  const partnersRow1 = [
    { name: "CREATE+", url: createPlus.src },
    { name: "Anglia", url: "/images/external/anglia.webp" },
    { name: "Bloomsbury", url: "/images/external/bloomsberry.webp" },
    { name: "Brooks", url: "/images/external/brooks.webp" },
    { name: "Deakin", url: "/images/external/deakin.webp" },
    { name: "East London", url: "/images/external/eastlondon.webp" },
    { name: "Emirates", url: "/images/external/emirates.webp" },
    { name: "Hallam", url: "/images/external/hallam.webp" },
    { name: "Hertfordshire", url: "/images/external/hertfort.webp" },
    { name: "Leicester", url: "/images/external/leicester.webp" },
    { name: "Midland", url: "/images/external/midland.webp" },
  ];


  const partnersRow2 = [
    { name: "Northumbria", url: "/images/external/northum.webp" },
    { name: "Portsmouth", url: "/images/external/portsmouth.webp" },
    { name: "South Bank", url: "/images/external/south-bank.webp" },
    { name: "Staffordshire", url: "/images/external/stafford.webp" },
    { name: "UCB", url: "/images/external/ucb.webp" },
    { name: "UVS", url: "/images/external/uws.webp" },
    { name: "Westminster", url: "/images/external/westminister.webp" },
    { name: "Wrexham", url: "/images/external/wrexham.webp" },
    { name: "Yorkville", url: "/images/external/yorkville.webp" },
    { name: "Aston", url: "/images/external/aston.webp" },
  ];

  const allPartners = [...partnersRow1, ...partnersRow2];
  const marqueeLogos = [...allPartners, ...allPartners];

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-primary-900 border-t border-slate-100 dark:border-primary-800 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Our <span className="text-brand-blue dark:text-brand-red">Global Partners</span>
        </h2>
        <div className="w-24 h-1 bg-brand-red mx-auto mb-6"></div>
        <p className={`text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          We collaborate with leading global institutions and internationally recognized progression universities to drive education across the world.
        </p>
      </div>

      <div className={`relative flex overflow-x-hidden group transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-primary-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-primary-900 to-transparent z-10 pointer-events-none"></div>
        
        {/* Single Premium Marquee */}
        <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused] items-center py-4">
          {marqueeLogos.map((partner, index) => (
            <div 
              key={`p-${index}`} 
              className="mx-6 flex items-center justify-center hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-slate-50 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(30,64,175,0.15)] border border-slate-100 dark:border-transparent cursor-pointer w-[240px] h-[120px]"
            >
              <img src={partner.url} alt={`${partner.name} Logo`} className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
