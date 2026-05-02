"use client";

import { useState } from "react";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

const programs = [
  { 
    title: "CBPD Certificate in Montessori Teaching Methods", 
    desc: "Gain in-depth understanding of the Montessori philosophy, practical life exercises, sensorial materials, mathematics, language development, and child-led learning for early years (ages 0–6) and elementary settings." 
  },
  { 
    title: "CBPD Certificate in Early Years Education & Child Development", 
    desc: "Develop expertise in early childhood pedagogy, play-based learning, child observation, and holistic development for nursery and reception practitioners." 
  },
  { 
    title: "CBPD Certificate in Primary Teaching & Classroom Management", 
    desc: "Master effective teaching strategies, lesson planning, behaviour management, and differentiated instruction for primary school educators." 
  },
  { 
    title: "CBPD Certificate in Secondary Teaching & Subject Pedagogy", 
    desc: "Enhance subject-specific teaching methods, assessment techniques, and student engagement strategies for secondary education across various disciplines." 
  },
  { 
    title: "CBPD Certificate in Inclusive Education & Special Educational Needs (SEN)", 
    desc: "Learn practical approaches to support neurodiverse learners, including autism, ADHD, dyslexia, and other additional needs in mainstream and specialist settings." 
  },
  { 
    title: "CBPD Certificate in Educational Leadership & School Management", 
    desc: "Build leadership skills in curriculum development, staff management, school improvement, and strategic planning for headteachers, deputies, and middle leaders." 
  },
  { 
    title: "CBPD Certificate in Teaching English as a Foreign Language (TEFL) / TESOL", 
    desc: "Acquire modern techniques for teaching English to speakers of other languages, including lesson planning, classroom activities, and assessment for international contexts." 
  },
  { 
    title: "CBPD Certificate in Digital Teaching & Online Learning", 
    desc: "Master the use of educational technology, virtual classrooms, blended learning models, and digital tools to enhance remote and hybrid teaching." 
  },
  { 
    title: "CBPD Certificate in Assessment & Feedback Strategies", 
    desc: "Develop effective formative and summative assessment methods, feedback techniques, and data-driven approaches to improve learner progress." 
  },
  { 
    title: "CBPD Certificate in Safeguarding & Child Protection in Education", 
    desc: "Understand legal responsibilities, risk identification, reporting procedures, and creating safe learning environments in line with UK standards." 
  },
  { 
    title: "CBPD Certificate in Behaviour Management & Positive Discipline", 
    desc: "Learn evidence-based strategies for managing challenging behaviour, promoting positive relationships, and fostering a supportive classroom culture." 
  },
  { 
    title: "CBPD Certificate in Phonics & Early Literacy Instruction", 
    desc: "Gain specialist skills in systematic synthetic phonics, reading development, and early literacy support for young learners." 
  },
  { 
    title: "CBPD Certificate in Special Educational Needs Coordination (SENCO)", 
    desc: "Prepare for the SENCO role with training in policy, identification of needs, provision mapping, and multi-agency collaboration." 
  },
  { 
    title: "CBPD Certificate in Higher Education Teaching & Academic Practice", 
    desc: "Focus on teaching methods for universities and colleges, including lecture delivery, student supervision, and quality assurance in post-16 education." 
  },
  { 
    title: "CBPD Certificate in Montessori Advanced Practices & Classroom Leadership", 
    desc: "For experienced practitioners — advanced Montessori curriculum implementation, classroom leadership, parent collaboration, and programme evaluation." 
  }
];

const benefits = [
  "Practical, classroom-ready skills with immediate application in teaching environments.",
  "Flexible delivery modes designed for busy education professionals.",
  "Prestigious UK-issued CBPD certification recognised by schools, colleges, and employers worldwide.",
  "Coverage of all major teaching approaches, including Montessori and modern inclusive methods.",
  "Strong alignment with UK educational standards and international best practices.",
  "Clear pathways for career progression from classroom teacher to leadership roles."
];

const steps = [
  "Select the CBPD Education programme that matches your teaching role and goals.",
  "Contact or enrol through an authorised CBPD partner (online or in your region).",
  "Complete the focused learning and practical assessment.",
  "Receive your official CBPD digital certificate with unique verification code."
];

export default function EducationProgramPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState('overview');

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-primary-900 pb-20">
      
      {/* 1. Breadcrumbs */}
      <div className="bg-white dark:bg-primary-900 pt-32 pb-4 border-b border-slate-200 dark:border-primary-800">
        <div className="container mx-auto px-6 md:px-12 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
          <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <Link href="/programs" className="hover:text-brand-red transition-colors">Programmes</Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-900 dark:text-white">Education Programmes</span>
        </div>
      </div>

      {/* 2. Hero Section (Image background) */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url('/images/external/1509062522246-3755977927d7.jpg')` }}
        ></div>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 z-0 bg-primary-900/80 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded bg-white/10 text-white font-semibold text-xs tracking-wider uppercase mb-6 border border-white/20">
              Training Course Category
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
              CBPD <span className="text-brand-red">Education</span> Programmes
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
              Equipping teachers, trainers, school leaders, and educational professionals with immediately applicable classroom and pedagogical skills.
            </p>
            <MagneticButton strength={10}>
              <Link href="/partner" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white font-bold rounded shadow-lg hover:bg-white hover:text-brand-red transition-all duration-300 group">
                Find a CBPD Partner
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 3. Light Banner Intro */}
      <section className="bg-brand-blue/5 dark:bg-brand-blue/10 border-b border-slate-200 dark:border-primary-800 py-10">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
            The Central Board of Professional Development (CBPD) offers a comprehensive range of practical Education programmes designed to help educators enhance teaching excellence and institutions deliver higher-quality learning outcomes.
          </p>
        </div>
      </section>

      {/* 4. Two-Column Content Layout (70/30 split) */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
            
            {/* Left Column (Main Content) */}
            <div className="lg:w-[65%] xl:w-[70%]">
              
              {/* Introduction Body */}
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 mb-12">
                <p>
                  CBPD Education certifications cover all major teaching approaches—focusing on <strong>real-world classroom application, learner engagement, curriculum delivery, and educational leadership</strong>. 
                </p>
                <p>
                  From Montessori methods to digital inclusion, these programmes help professionals meet modern regulatory requirements and advance their careers. All CBPD Education programmes are delivered flexibly through our authorised partners in online, blended, or classroom formats and lead to prestigious UK-issued CBPD certifications globally recognised by educational employers.
                </p>
              </div>

              {/* In-page Tabs for Content Toggle */}
              <div className="flex overflow-x-auto gap-2 border-b border-slate-200 dark:border-primary-800 mb-8 pb-[1px] no-scrollbar">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 font-semibold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === 'overview' ? 'border-brand-red text-brand-red' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}
                >
                  Programme Overview
                </button>
                <button 
                  onClick={() => setActiveTab('why')}
                  className={`px-6 py-3 font-semibold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === 'why' ? 'border-brand-red text-brand-red' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}
                >
                  Why Choose CBPD
                </button>
              </div>

              {/* Tab Content: Overview (Accordions) */}
              {activeTab === 'overview' && (
                <div className="animate-[fadeInUp_0.5s_ease-out]">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Explore Our Specialised Programmes</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-8">
                    CBPD provides targeted, high-impact programmes across all types of teaching and educational roles. Each programme combines pedagogical best practice with modern classroom realities.
                  </p>
                  
                  {/* Accordion List */}
                  <div className="space-y-4">
                    {programs.map((prog, idx) => (
                      <div key={idx} className="border border-slate-200 dark:border-primary-800 rounded-sm bg-white dark:bg-primary-900 overflow-hidden shadow-sm">
                        <button 
                          onClick={() => toggleAccordion(idx)}
                          className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-primary-800/50 transition-colors"
                        >
                          <span className={`font-bold text-lg md:text-xl transition-colors ${openAccordion === idx ? 'text-brand-red' : 'text-slate-900 dark:text-white'}`}>
                            {prog.title}
                          </span>
                          <span className={`relative w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-100 dark:bg-primary-800 text-slate-500 transition-transform duration-300 ${openAccordion === idx ? 'rotate-180 bg-brand-red text-white' : ''}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                          </span>
                        </button>
                        
                        <div className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${openAccordion === idx ? 'max-h-[500px] py-5 border-t border-slate-100 dark:border-primary-800 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {prog.desc}
                          </p>
                          <div className="mt-6">
                            <Link href="/partner" className="text-brand-red font-bold text-sm hover:underline flex items-center gap-2">
                              Enquire via Partner <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab Content: Why Choose CBPD */}
              {activeTab === 'why' && (
                <div className="animate-[fadeInUp_0.5s_ease-out] bg-white dark:bg-primary-800 p-8 rounded border border-slate-200 dark:border-primary-700 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Why Choose CBPD for Education Professional Development?</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    CBPD delivers shorter, more practical, and flexible education credentials compared with many traditional qualifications. 
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    Our programmes blend proven teaching methods (including Montessori) with contemporary skills such as digital learning, inclusion, and leadership — helping educators and institutions achieve faster improvement in teaching quality and learner outcomes.
                  </p>
                </div>
              )}

            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:w-[35%] xl:w-[30%]">
              <div className="sticky top-28 space-y-6">
                
                {/* Benefits Card */}
                <div className="bg-white dark:bg-primary-900 border border-slate-200 dark:border-primary-800 rounded-sm shadow-sm p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wide text-sm border-b border-slate-100 dark:border-primary-800 pb-4">
                    Benefits of Studying
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 text-sm font-medium items-start">
                        <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enrolment Process Card */}
                <div className="bg-slate-50 dark:bg-[#050812] border border-slate-200 dark:border-white/10 rounded-sm shadow-sm p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wide text-sm border-b border-slate-200 dark:border-primary-800 pb-4">
                    How to Enrol
                  </h3>
                  <div className="relative border-l border-slate-300 dark:border-primary-700 ml-2.5 space-y-6 pb-2">
                    {steps.map((step, i) => (
                      <div key={i} className="relative pl-6">
                        <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-primary-800 border-[3px] border-brand-red flex items-center justify-center text-[10px] font-bold text-brand-red">
                          {i + 1}
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm font-medium pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact Widget */}
                <div className="bg-primary-900 rounded-sm shadow-lg p-6 lg:p-8 text-center text-white relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 blur-3xl"></div>
                   <h3 className="font-bold text-xl mb-4 relative z-10">Ready to Advance?</h3>
                   <p className="text-sm text-slate-300 mb-6 relative z-10">Our support team is ready to help you find the right education programme.</p>
                   <Link href="/contact" className="block w-full py-3 bg-brand-red text-white font-bold rounded text-sm hover:bg-white hover:text-brand-red transition-colors relative z-10">
                     Contact Us Today
                   </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Pre-Footer Action Blocks */}
      <section className="container mx-auto px-6 md:px-12 mt-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-slate-100 dark:bg-primary-800/50 p-10 lg:p-12 rounded-sm border border-slate-200 dark:border-primary-800 flex flex-col justify-center items-start group hover:border-brand-blue transition-colors">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">View All Programmes</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
              Discover our complete catalogue of professional credentials across all major disciplines.
            </p>
            <Link href="/programs" className="font-bold text-brand-blue dark:text-white group-hover:text-brand-red transition-colors flex items-center gap-2">
              Browse Catalogue <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

          <div className="bg-primary-900 p-10 lg:p-12 rounded-sm relative overflow-hidden flex flex-col justify-center items-start group">
            <div className="absolute inset-0 bg-brand-red/5 group-hover:bg-brand-red/10 transition-colors"></div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 relative z-10">Become a CBPD Partner</h3>
            <p className="text-slate-300 mb-8 max-w-sm relative z-10">
              Authorised partners have exclusive rights to deliver CBPD education programmes globally.
            </p>
            <Link href="/partner" className="font-bold text-brand-red group-hover:text-white transition-colors flex items-center gap-2 relative z-10">
              Deliver These Programmes <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
