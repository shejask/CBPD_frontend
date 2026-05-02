"use client";

import { useEffect, useState, useRef } from "react";
import TiltCard from "@/components/TiltCard";

export default function GlobalRecognition() {
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

  const principles = [
    "Academic Enrichment",
    "Best Online Learning",
    "Personalized Learning",
    "Training & Events",
    "Recognition",
    "Quality"
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-primary-900 border-y border-primary-800 overflow-hidden relative">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-3 block">Why Choose CBPD</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let's explore the concept of <br/>
            <span className="text-gradient">'Global Recognition and Prestige'</span> <br/>
            in greater detail
          </h2>
          <div className="w-24 h-1 bg-brand-red mb-8"></div>
          
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            The Central Board of Professional Development (CBPD) is a professional association dedicated to awarding certification based on the practical application of knowledge in real-world settings.
          </p>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            We believe academic courses must hold social relevance, and our programs are carefully designed to deliver in-depth subject mastery within a short time frame. CBPD is guided by our golden principles that define the essence of true professional qualifications.
          </p>
        </div>

        <div className={`lg:w-1/2 relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((principle, index) => (
              <TiltCard key={index} sensitivity={8}>
                <div 
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-brand-red/20 hover:border-brand-red/50 shadow-[0_10px_30px_rgba(220,38,38,0)] hover:shadow-[0_10px_30px_rgba(212, 53, 28,0.15)] transition-colors duration-300 group flex items-center gap-4 cursor-pointer h-full"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                    <span className="text-brand-red font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">{principle}</h3>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
