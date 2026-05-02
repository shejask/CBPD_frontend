"use client";

import { api } from "@/lib/api";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";

export default function Programs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [popularPrograms, setPopularPrograms] = useState<any[]>([]);

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

    async function fetchPopular() {
      try {
        const res = await api.getCategories();
        const cats = res.categories || [];
        const popularSlugs = [
          "business", 
          "information-technology", 
          "design", 
          "engineering", 
          "finance", 
          "healthcare-medical"
        ];
        const filtered = cats.filter((p: any) => popularSlugs.includes(p.slug));
        if (filtered.length > 0) setPopularPrograms(filtered);
      } catch (err) {
        console.error("Failed to load popular programs", err);
      }
    }
    fetchPopular();

    return () => observer.disconnect();
  }, []);

  const disciplines = popularPrograms.map((prog, i) => ({
    name: prog.name.replace(/ Programmes?/i, ''),
    number: String(i + 1).padStart(2, '0'),
    img: prog.image,
    slug: prog.slug,
  }));

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-primary-900 border-y border-slate-200 dark:border-primary-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        <div className={`lg:w-1/2 flex flex-col justify-center transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <span className="text-brand-red font-bold tracking-wider text-sm uppercase mb-3 block">Disciplines</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Popular CBPD <span className="text-brand-blue dark:text-brand-red">Programme Areas</span>
          </h2>
          <div className="w-24 h-1 bg-brand-red mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            {popularPrograms.map(p => p.name.replace(/ Programmes?/i, '')).join(" • ")}
          </p>
          <Link href="/programs" className="px-8 py-4 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-red transition-all shadow-[0_5px_15px_rgba(30,64,175,0.3)] hover:shadow-[0_10px_25px_rgba(212, 53, 28,0.4)] self-start flex items-center gap-2 group">
            View All Programmes
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>

        <div className={`lg:w-1/2 flex flex-col gap-4 relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/5 rounded-full blur-2xl z-0 pointer-events-none"></div>

          {disciplines.map((item, index) => (
            <TiltCard key={index} sensitivity={8} className="relative z-10">
              <Link 
                href={`/programs/${item.slug}`}
                className="group flex items-center justify-between p-6 rounded-2xl bg-slate-50 dark:bg-primary-800 border-[2px] border-transparent hover:border-brand-blue/30 dark:hover:border-brand-red/50 cursor-pointer transition-all duration-300 hover:shadow-[0_5px_15px_rgba(30,64,175,0.1)] h-full"
                style={{ transform: "translateZ(10px)" }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-brand-blue/30 dark:text-primary-700 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors">{item.number}.</span>
                  {item.img && <Image src={item.img} alt={item.name} width={64} height={64} className="rounded-lg object-cover group-hover:scale-105 transition-transform" />}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-red group-hover:translate-x-2 transition-all duration-300">{item.name}</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-white dark:bg-primary-700 flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all shadow border border-slate-100 dark:border-primary-700">
                  <svg className="w-5 h-5 text-slate-400 dark:text-slate-300 group-hover:text-white transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
