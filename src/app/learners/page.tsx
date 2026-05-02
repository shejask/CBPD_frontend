"use client";

import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LearnersPage() {
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

  const benefits = [
    { title: "Immediate Application", desc: "Engage with practical programmes intentionally designed for immediate, impactful real-world workplace application.", icon: "🛠️" },
    { title: "Flexible Study Options", desc: "Capitalise on versatile and flexible study options seamlessly tailored to fit around your demanding commitments.", icon: "⏱️" },
    { title: "Valued Certification", desc: "Gain prestigious UK professional-body certification firmly trusted and valued by prominent employers worldwide.", icon: "🏆" },
    { title: "Verifiable Credentials", desc: "Secure clear, instantly verifiable digital credentials that effectively prove your high-level competencies globally.", icon: "🔐" },
    { title: "Authorised Network", desc: "Enjoy comprehensive support through our expansive network of rigorously vetted, authorised CBPD partners.", icon: "🌐" },
    { title: "Career Progression Pathways", desc: "Advance your career with globally aligned qualifications designed to enhance employability, strengthen professional credibility, and support long-term career growth.", icon: "📈" }
  ];

  const testimonials = [
    { name: "Sarah M.", role: "HR Director", quote: "Obtaining my CBPD certification was a turning point. It provided tangible skills that I instantly applied to streamline our entire recruitment process.", image: "/images/external/1573496359142-b8d87734a5a2.jpg" },
    { name: "James L.", role: "IT Project Manager", quote: "The flexible learning options meant I could continue my demanding role while studying. The digital credential I gained was key for my promotion.", image: "/images/external/1560250097-0b93528c311a.jpg" },
    { name: "Amanda T.", role: "Operations Lead", quote: "CBPD's focus on practical application makes it stand out from typical theoretical courses. The results were immediate and incredibly beneficial.", image: "/images/external/1580489944761-15a19d654956.jpg" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c]">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('/images/external/1522202176988-66273c2fd55f.jpg')] bg-cover bg-center mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent z-0"></div>

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[150px] pointer-events-none z-0 animate-[pulse_8s_infinite]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none transform translate-y-1/2 z-0 animate-[pulse_10s_infinite_reverse]"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-block px-5 py-2 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold tracking-wider uppercase">Professional Development</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Advance Your Career <br /> with <span className="text-brand-red">CBPD</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              CBPD provides busy professionals with practical, flexible, and internationally recognised pathways to rigorous career advancement.
            </p>
          </div>
        </div>
      </section>



      {/* Benefits Section */}
      <section className="py-24 relative bg-white dark:bg-[#050812]">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20 animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out">
            <span className="text-brand-blue dark:text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">The Advantage</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Why Learners Choose <span className="text-brand-red">CBPD</span>
            </h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out" style={{ transitionDelay: `${idx * 100}ms` }}>
                <TiltCard sensitivity={7} className="h-full">
                  <div className="bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-primary-800 rounded-3xl p-10 h-full hover:shadow-2xl transition-all group shadow-sm flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-primary-800 border border-slate-200 dark:border-primary-700 flex items-center justify-center text-4xl mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300 group-hover:border-brand-red/50">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors">{benefit.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                      {benefit.desc}
                    </p>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section className="py-24 bg-[#0a0f1c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
          <div className="text-center mb-16 animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out max-w-4xl">
            <span className="text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">Proven Results</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Learner <span className="text-brand-blue">Success Stories</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Success with CBPD simply means gaining credentials that truly reflect your enhanced competence and unwavering commitment to ongoing professional excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out" style={{ transitionDelay: `${idx * 150}ms` }}>
                <TiltCard sensitivity={5} className="h-full">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all group shadow-xl relative mt-8 flex flex-col justify-between">
                    <div className="absolute -top-8 left-8 w-16 h-16 rounded-full border-[3px] border-brand-red overflow-hidden shadow-lg">
                      <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-4 right-6 text-brand-red opacity-30 text-6xl font-serif">"</div>
                    <div className="mt-8 flex-grow">
                      <p className="text-slate-300 italic leading-relaxed mb-6">"{testi.quote}"</p>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">{testi.name}</p>
                      <p className="text-brand-blue text-sm uppercase tracking-wider font-semibold">{testi.role}</p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 delay-300">
             <Link href="/testimonials" className="text-brand-red hover:text-white transition-colors border-b border-brand-red/30 hover:border-white font-medium text-lg tracking-wide uppercase">
               Read More Global Testimonials &rarr;
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary-900 border-t border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/external/1524178232363-1fb2b075b655.jpg')] bg-cover bg-center mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/90 to-transparent z-0"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out delay-200 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight mx-auto leading-tight">
            Take the <span className="text-brand-red">Next Step</span> in Your Career
          </h2>
          <p className="text-xl text-slate-300 mb-12 mx-auto leading-relaxed">
            Stand out to employers globally with credentials explicitly bridging the gap between rigorous learning and commanding real-world performance.
          </p>
          
          <div className="flex justify-center">
            <MagneticButton strength={15}>
              <Link href="/programs" className="px-10 py-5 rounded-full bg-brand-red text-white font-bold text-xl hover:bg-white hover:text-brand-red transition-all duration-300 shadow-[0_10px_30px_rgba(220,38,38,0.5)] hover:shadow-[0_15px_40px_rgba(212, 53, 28,0.5)] flex items-center justify-center gap-3 group w-full md:w-auto text-center">
                Browse CBPD Programmes for Learners
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
