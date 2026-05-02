import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

export default function AccreditationPage() {
  const benefits = [
    { title: "Unrivalled Credibility", desc: "Secure independent, highly respected UK professional-body endorsement that powerfully boosts your institutional standing.", icon: "🏅" },
    { title: "Enhanced Enrolment", desc: "Significantly increase learner appeal, driving higher enrolment and attendance for your specialist courses worldwide.", icon: "📈" },
    { title: "Global Network Access", desc: "Unlock immediate access to CBPD's rapidly growing international network of elite professionals and corporate partners.", icon: "🌐" },
    { title: "Strategic Co-Branding", desc: "Receive dedicated marketing guidance, promotional materials, and official co-branding support to amplify your reach.", icon: "📢" },
    { title: "Official Credentials", desc: "Gain the exclusive authority to issue official, globally recognised CBPD-endorsed certificates to your participants.", icon: "📜" },
    { title: "CBPD Qualification Framework (CQF)", desc: "Integrate your programmes within the CBPD Qualification Framework (CQF), delivering structured level alignment, academic integrity, and globally benchmarked qualification standards.", icon: "📋" }
  ];

  const steps = [
    { title: "Submission", desc: "Submit your comprehensive programme curriculum, learning objectives, or event details to our committee.", icon: "📝" },
    { title: "Quality Review", desc: "Undergo a rigorous, independent quality review conducted by CBPD's experienced educational assessors.", icon: "🔎" },
    { title: "Accreditation Decision", desc: "Receive a formal accreditation decision alongside constructive feedback designed to elevate your delivery.", icon: "✅" },
    { title: "Ongoing Support", desc: "Benefit extensively from continuous CBPD expert support and structured annual monitoring to ensure excellence.", icon: "🤝" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c]">
      {/* Mini Hero */}
      <section className="relative pt-40 pb-24 bg-primary-900 border-b border-primary-800 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-30 bg-[url('/images/external/1556761175-4b46a572b786.jpg')] bg-cover bg-center mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent z-0"></div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2 z-0"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 backdrop-blur-md mb-6 animate-[fadeInUp_0.8s_ease-out]">
            <span className="text-brand-red font-semibold tracking-wide text-sm uppercase">Global Accreditation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white max-w-5xl mx-auto leading-tight mb-8 animate-[fadeInUp_1s_ease-out]">
            CBPD Accreditation <br className="hidden md:block"/>
            for <span className="text-brand-red">Training Providers</span> & Events
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
            CBPD offers professional accreditation services to training providers, corporate L&D teams, educational institutions, and event organisers seeking a prestigious, UK-recognised quality mark for their programmes.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white dark:bg-[#050812] border-b border-slate-200 dark:border-primary-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-brand-blue dark:text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">Elevate Your Standard</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                Stand out with <span className="text-brand-blue dark:text-brand-red">uncompromising quality</span>
              </h2>
              <div className="w-20 h-1 bg-brand-red mb-8"></div>
              <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
                <p className="leading-relaxed mb-6">
                  The Central Board of Professional Development (CBPD) extends its hallmark of excellence by offering elite professional accreditation services. We collaborate closely with top-tier training providers, corporate Learning & Development teams, highly-rated educational institutions, and premier event organisers internationally.
                </p>
                <p className="leading-relaxed">
                  By partnering with CBPD for your accreditation needs, you proudly align your institution with rigorous global standards. This official endorsement actively assures your learners that they are receiving exceptional educational value, practical application, and immediate professional impact.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-brand-blue/20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/images/external/1515169067868-5387ec356754.jpg" 
                  alt="Business event presentation" 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 dark:bg-primary-900 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">Why Choose CBPD</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              The Value of CBPD Accreditation
            </h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto mb-6"></div>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-8 bg-white dark:bg-primary-800 rounded-3xl border border-slate-100 dark:border-primary-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-slate-50 dark:bg-primary-900 border border-slate-100 dark:border-primary-700 rounded-2xl flex justify-center items-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-white dark:bg-[#0a0f1c] border-y border-slate-200 dark:border-primary-800">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-brand-blue dark:text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">Getting Approved</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16">
            The CBPD Accreditation Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-0 border-t-[2px] border-dashed border-slate-300 dark:border-primary-700 z-0"></div>
            
            {steps.map((step, idx) => (
              <TiltCard key={idx} sensitivity={5} className="relative z-10 flex flex-col items-center group">
                <div className="h-full flex flex-col items-center w-full">
                  <div className="w-24 h-24 bg-brand-blue dark:bg-primary-900 text-white rounded-full border-[4px] border-white dark:border-[#0a0f1c] flex items-center justify-center text-4xl shadow-xl mb-6 group-hover:bg-brand-red group-hover:scale-110 transition-all shrink-0">
                    {step.icon}
                  </div>
                  <div className="bg-slate-50 dark:bg-primary-800 p-8 pt-10 rounded-3xl w-full border border-slate-200 dark:border-primary-700 shadow-sm relative grow">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white font-black px-4 py-1 rounded-full text-sm shrink-0 whitespace-nowrap">
                      Phase 0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 mt-2 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors">{step.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/external/1542744094-3a31f272c490.jpg')] bg-cover bg-center mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Signal Uncompromising <span className="text-brand-red">Quality</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            CBPD accreditation vividly signals uncompromising quality and practical relevance — helping your educational provision successfully stand out in a competitive global market.
          </p>
          <div className="flex justify-center">
            <MagneticButton strength={20}>
              <Link href="/contact" className="px-10 py-5 rounded-full bg-brand-red text-white font-bold text-xl hover:bg-white hover:text-brand-red transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] flex justify-center items-center gap-3 group whitespace-nowrap">
                Apply for CBPD Accreditation
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

    </main>
  );
}
