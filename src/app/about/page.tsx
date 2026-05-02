import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

export default function AboutPage() {
  const strengths = [
    { title: "Practical Focus", desc: "Real-world skills that deliver immediate results", icon: "🛠️" },
    { title: "Global Reach", desc: "Certificates valued internationally", icon: "🌍" },
    { title: "Flexibility", desc: "Multiple delivery modes through our authorised partner network", icon: "⏱️" },
    { title: "Quality Assurance", desc: "Rigorous standards and ongoing monitoring", icon: "⭐" },
    { title: "Accessibility", desc: "Affordable pathways designed for busy professionals", icon: "🎓" },
  ];

  return (
    <main className="min-h-screen">
      {/* Mini Hero with Image Background */}
      <section className="relative pt-40 pb-24 bg-primary-900 border-b border-primary-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40 bg-[url('/images/external/1542744173-8e7e53415bb0.jpg')] bg-cover bg-center mix-blend-overlay z-0"></div>
        {/* Dark opacity layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-0 pointer-events-none"></div>
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2 z-0"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 backdrop-blur-md mb-6 animate-[fadeInUp_0.8s_ease-out]">
            <span className="text-brand-red font-semibold tracking-wide text-sm uppercase">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-8 animate-[fadeInUp_1s_ease-out]">
            About the <span className="text-brand-red">Central Board of Professional Development</span> (CBPD)
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
            The Central Board of Professional Development (CBPD) is a UK-registered professional body (Company No. 16442180) dedicated to excellence in professional certification and training accreditation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50 dark:bg-[#0a0f1c]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="text-brand-blue dark:text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">Introduction</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Bridging the gap between <span className="text-brand-blue dark:text-brand-red">learning and real-world performance</span>
            </h2>
            <div className="w-20 h-1 bg-brand-red mb-10"></div>
            
            <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
              <p className="mb-6">
                In a fast-evolving global economy, continuous education is no longer an option but an absolute necessity. CBPD was strategically established to meet the rising demand for practical, accessible, and globally portable credentials. We specialise in targeted professional certification rather than theoretical or lengthy regulated qualifications, ensuring our approach fits the busy schedules of modern professionals.
              </p>
              <p className="mb-6">
                Our dynamic programmes actively emphasise applied knowledge and immediate workplace relevance. By focusing squarely on competency-based methodologies, we allow professionals to gain fully recognised credentials significantly faster and more cost-effectively than with many traditional awarding bodies.
              </p>
              
              <div className="my-8 p-6 bg-white dark:bg-primary-800 rounded-2xl border-l-[6px] border-brand-red shadow-md group hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
                <p className="m-0 text-base">CBPD exists to empower individuals and organisations through high-quality, practical certifications that drive measurable career milestones and expansive business success.</p>
              </div>

              <div className="my-6 p-6 bg-white dark:bg-primary-800 rounded-2xl border-l-[6px] border-brand-red shadow-md group hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Vision</h3>
                <p className="m-0 text-base">To be the undisputed leading UK professional body for agile, employer-focused professional development—recognised worldwide for uncompromising quality, rapid speed of delivery, and tangible real-world impact.</p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4">What Makes CBPD Different</h3>
              <p className="mb-6 leading-relaxed">
                While others focus solely on academic theory, we bridge the gap between learning and actionable professional excellence. CBPD is proud to hold CPD Provider No. 21235 with The CPD Certification Service and operates seamlessly in alignment with established UK frameworks. This powerful endorsement means our credentials enjoy strong, respected recognition across the UK, GCC, Europe, Asia, Africa, Australia, and beyond.
              </p>
              <p className="leading-relaxed">
                To maintain these rigorous standards, CBPD works exclusively with high-calibre authorised partners who profoundly share our commitment to educational excellence. This unified approach directly guarantees that every learner experiences outstanding support, enriching content, and highly successful outcomes at every stage of their educational journey.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Core Strengths of CBPD</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((item, index) => (
                <TiltCard key={index} className="h-full" sensitivity={10}>
                  <div className="bg-white dark:bg-primary-800 rounded-3xl p-6 border border-slate-100 dark:border-primary-700 shadow-sm hover:shadow-xl hover:border-brand-red/50 transition-all duration-300 h-full flex flex-col group" style={{ transform: "translateZ(20px)", transitionDelay: `${index * 150}ms` }}>
                    <div className="text-3xl mb-4 bg-slate-50 dark:bg-primary-900 w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-primary-700 shadow-inner group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>

            {/* Decorative Image to fill blank space */}
            <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl relative group hidden lg:block border border-slate-200 dark:border-primary-700">
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500"></div>
              <img 
                src="/images/external/1522071820081-009f0129c71c.jpg" 
                alt="Professionals collaborating" 
                className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-primary-900/90 backdrop-blur-md border border-slate-200 dark:border-primary-700 p-4 rounded-xl z-20 shadow-lg">
                <p className="text-slate-800 dark:text-white font-bold text-lg mb-1">Global Excellence</p>
                <p className="text-slate-500 dark:text-slate-300 text-xs font-medium uppercase tracking-wider">CPD Provider No. 21235</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('/images/external/1552664730-d307ca884978.jpg')] bg-cover bg-center mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-950/80 to-transparent z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="text-brand-red">Advance</span> with CBPD
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            CBPD exists to empower individuals and organisations through high-quality, practical certifications. Start your journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <MagneticButton strength={20}>
              <Link href="/programs" className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-red text-white font-bold text-lg hover:bg-brand-blue transition-all duration-300 shadow-[0_0_30px_rgba(212, 53, 28,0.5)] flex justify-center items-center gap-3 group whitespace-nowrap">
                Discover CBPD Programmes
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </MagneticButton>
            <MagneticButton strength={20}>
              <Link href="/partners" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-bold text-lg hover:bg-white hover:text-brand-blue transition-all duration-300 flex justify-center items-center gap-3 group whitespace-nowrap">
                Become a CBPD Authorised Partner
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
