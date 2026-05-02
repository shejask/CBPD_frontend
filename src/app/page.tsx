import Link from "next/link";
import Hero from "@/components/Hero";
import HeroIntro from "@/components/HeroIntro";
import Stats from "@/components/Stats";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Partners from "@/components/Partners";
import ProcessFlow from "@/components/ProcessFlow";
import Programs from "@/components/Programs";
import GlobalRecognition from "@/components/GlobalRecognition";
import GlobalPartners from "@/components/GlobalPartners";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroIntro />
      <Stats />
      <AboutUs />
      <WhyChooseUs />
      <Partners />
      <ProcessFlow />
      <Programs />
      <GlobalRecognition />
      <GlobalPartners />
      {/* Education meets personality could be another section, but we've covered the main ones for the redesign demo */}
      <section className="py-24 relative overflow-hidden bg-primary-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Advance with <br />
            <span className="text-gradient">CBPD?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            CBPD delivers what employers demand: immediately applicable skills combined with prestigious UK recognition. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <Link href="/programs" className="px-8 py-4 w-full sm:w-auto rounded-full bg-brand-red text-white font-bold hover:bg-white hover:text-brand-red transition-all shadow-[0_0_20px_rgba(212, 53, 28,0.3)] hover:scale-105 inline-flex justify-center items-center gap-2">
              Browse CBPD Programmes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </Link>
            <Link href="/learners" className="px-8 py-4 w-full sm:w-auto rounded-full bg-brand-red text-white font-bold hover:bg-white hover:text-brand-red transition-all inline-flex justify-center items-center gap-2 shadow-[0_5px_20px_rgba(220,38,38,0.3)]">
              For Learners
            </Link>
            <Link href="/partner" className="px-8 py-4 w-full sm:w-auto rounded-full bg-transparent border border-white/30 text-white font-bold hover:bg-white/10 transition-all inline-flex justify-center items-center gap-2">
              Partner Network
            </Link>
            <Link href="/accreditation" className="px-8 py-4 w-full sm:w-auto rounded-full bg-brand-blue text-white font-bold hover:bg-blue-600 transition-all inline-flex justify-center items-center gap-2">
              Accreditation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
