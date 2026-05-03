"use client";

import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import { useState, useEffect } from "react";
import { programData as staticProgramData } from "@/data/programs";
import { api } from "@/lib/api";

export default function ProgramsPage() {
  const benefits = [
    { title: "Prestigious Credential", desc: "A distinguished UK-issued credential from CBPD that elevates your global standing." },
    { title: "Digital Verification", desc: "Receive a secure digital certificate equipped with unique, instantaneous verification." },
    { title: "Enhanced Employability", desc: "Significantly enhance your professional profile to attract top-tier global employers." },
    { title: "Practical Competence", desc: "Gain irrefutable proof of practical competency that is trusted and recognised by employers worldwide." },
    { title: "Clear Career Pathways", desc: "Unlock a transparent, structured pathway for continuous professional advancement with CBPD." }
  ];

  const steps = [
    { title: "Select a Programme", desc: "Discover the CBPD programme that aligns perfectly with your goals.", icon: "📚" },
    { title: "Enrol with a Partner", desc: "Register smoothly via one of our trusted, authorised CBPD partners.", icon: "🤝" },
    { title: "Complete Assessment", desc: "Engage in focused, real-world learning and pass the practical assessment.", icon: "✍️" },
    { title: "Receive Credential", desc: "Earn and showcase your official, globally recognised CBPD certificate.", icon: "🎓" }
  ];

  const [programData, setProgramData] = useState<any[]>(staticProgramData);

  useEffect(() => {
    async function fetchDynamicData() {
      try {
        const res = await api.getCategories();
        const cats = res.categories || [];
        if (cats.length > 0) {
          const formatted = cats.map((cat: any) => ({
             title: cat.name,
             slug: cat.slug,
             description: cat.description,
             icon: cat.icon || "🎓",
             image: cat.image || "/images/external/1552664730-d307ca884978.jpg"
          }));
          setProgramData(formatted);
        }
      } catch (err) {
        console.error("Failed to load program categories", err);
      }
    }
    fetchDynamicData();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c]">
      {/* Mini Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 text-left">
              <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 backdrop-blur-md mb-6 animate-[fadeInUp_0.8s_ease-out]">
                <span className="text-brand-red font-semibold tracking-wide text-sm uppercase">CBPD Portfolio</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-[fadeInUp_1s_ease-out]">
                Our Programmes <span className="text-brand-red">&</span> <br/>Certifications
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed animate-[fadeInUp_1.2s_ease-out] mb-8">
                CBPD offers a highly focused portfolio of practical, industry-relevant professional programmes deliberately designed to rapidly accelerate career growth and elevate organisational capability.
              </p>
            </div>
            
            <div className="lg:w-1/2 animate-[fadeInUp_1.4s_ease-out]">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <h3 className="text-xl font-bold text-white mb-6">All CBPD programmes are meticulously:</h3>
                <ul className="space-y-4">
                  {[
                    "Developed in strict consultation with leading industry experts",
                    "Delivered exclusively through trusted CBPD authorised partners",
                    "Assessed entirely for practical, real-world workplace application",
                    "Available in flexible formats: dynamic online, blended, or classroom learning",
                    "Supported extensively by robust and continuous quality assurance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                        <span className="text-brand-blue text-xs font-bold">✓</span>
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section id="programs-grid" className="py-24 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">Categories</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Key Programme Categories</h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Explore our core disciplines, ranging from fundamental Business Management to distinct Technology Skills and highly Specialist Professional practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-8">
            {programData.map((prog, index) => {
              return (
                <TiltCard key={index} sensitivity={12} className="h-full">
                  <div 
                    className="bg-white dark:bg-primary-900 rounded-[2rem] shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-primary-800 group hover:shadow-[0_20px_40px_rgba(30,64,175,0.1)] transition-all duration-500 h-full flex flex-col relative overflow-hidden" 
                    style={{ transform: "translateZ(15px)" }}
                  >
                    
                    {/* Header Image */}
                    <Link href={`/programs/${prog.slug}`} className="relative h-56 w-full overflow-hidden shrink-0 block">
                      <div className="absolute inset-0 bg-brand-blue/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                      <img 
                        src={typeof prog.image === 'string' ? prog.image : prog.image.src} 
                        alt={prog.title} 
                        className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Icon Badge */}
                      <div className="absolute -bottom-6 right-8 bg-white dark:bg-primary-800 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl z-20 border border-slate-100 dark:border-primary-700 group-hover:-translate-y-2 transition-transform duration-500">
                        {prog.icon}
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-8 pt-10 flex flex-col flex-grow">
                      <Link href={`/programs/${prog.slug}`}>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors">
                          {prog.title.replace(/\s*Programmes?/i, '')}
                        </h2>
                      </Link>
                      
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 shrink-0 line-clamp-3">
                        {prog.description || `Master the principles of ${prog.title.replace(/\s*Programmes?/i, '').toLowerCase()} with our globally accredited industry curriculum.`}
                      </p>
                      
                      <Link 
                        href={`/programs/${prog.slug}`}
                        className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-auto transition-all duration-300 bg-slate-50 dark:bg-primary-800 text-brand-blue dark:text-white hover:bg-brand-blue hover:text-white dark:hover:bg-brand-red group/btn"
                      >
                        Explore Full Programme
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </Link>
                    </div>

                  </div>
                </TiltCard>
              );
            })}
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-primary-900 border-y border-slate-200 dark:border-primary-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <span className="text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">The CBPD Advantage</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Benefits of Earning a <span className="text-brand-blue dark:text-brand-red">CBPD Certification</span>
              </h2>
              <div className="w-20 h-1 bg-brand-red mb-8"></div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                CBPD provides a remarkably faster and significantly more practical route to recognised professional credentials when compared against many traditional awarding bodies. We empower you to prove your worth instantly.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="p-6 bg-slate-50 dark:bg-primary-800 rounded-2xl border-[2px] border-slate-100 dark:border-primary-700 hover:border-brand-red transition-all duration-300 group hover:shadow-lg">
                  <div className="w-12 h-12 bg-white dark:bg-primary-900 rounded-xl flex flex-col justify-center items-center text-brand-blue dark:text-brand-red font-black text-xl mb-4 group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50 dark:bg-[#0a0f1c]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-brand-blue dark:text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">Your Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16">
            How CBPD Certification Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-slate-200 dark:bg-primary-800 z-0"></div>
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center group">
                <div className="w-24 h-24 bg-white dark:bg-primary-900 rounded-full border-[4px] border-slate-200 dark:border-primary-700 flex items-center justify-center text-4xl shadow-lg mb-6 group-hover:border-brand-blue dark:group-hover:border-brand-red transition-colors">
                  {step.icon}
                </div>
                <div className="bg-white dark:bg-primary-800 p-6 rounded-2xl w-full border border-slate-100 dark:border-primary-700 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-brand-red font-black block mb-2">Step 0{idx + 1}</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-red transition-colors">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/external/1542744173-8e7e53415bb0.jpg')] bg-cover bg-center mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Begin <span className="text-brand-red">Your Journey?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Accelerate your career trajectory and empower your organisation today with CBPD's world-class credentials.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <MagneticButton strength={20}>
              <button 
                onClick={() => {
                  const el = document.getElementById('programs-grid');
                  if(el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.scrollTo({ top: 600, behavior: 'smooth' });
                }} 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-red text-white font-bold text-lg hover:bg-white hover:text-brand-red transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.5)] flex justify-center items-center gap-3 group whitespace-nowrap"
              >
                View Full List of CBPD Programmes
                <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              </button>
            </MagneticButton>
            <MagneticButton strength={20}>
              <Link href="/partners" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 flex justify-center items-center gap-3 group whitespace-nowrap">
                Find a CBPD Authorised Partner
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

    </main>
  );
}
