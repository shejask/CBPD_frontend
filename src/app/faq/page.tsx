"use client";
import { useState } from "react";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("For Learners-0");

  const faqCategories = [
    {
      title: "For Learners",
      faqs: [
        {
          question: "What is CBPD?",
          answer: "CBPD (Central Board of Professional Development) is a UK-based professional awarding body delivering internationally aligned qualifications and certifications that support career progression, professional recognition, and global employability."
        },
        {
          question: "What is the CBPD Qualification Framework (CQF)?",
          answer: "The CBPD Qualification Framework (CQF) is a structured system that defines qualification levels, ensuring clear progression and international comparability."
        },
        {
          question: "Are CBPD qualifications recognised internationally?",
          answer: "CBPD qualifications are aligned with global professional standards and are valued by employers across multiple industries worldwide."
        },
        {
          question: "How can I enrol in a CBPD programme?",
          answer: "You can enrol through CBPD-approved training centres and institutions offering authorised programmes."
        },
        {
          question: "Are there flexible study options available?",
          answer: "Yes, many CBPD programmes offer flexible learning modes, including online, blended, and classroom-based study."
        },
        {
          question: "How will I receive my certificate?",
          answer: "Upon successful completion, you will receive an official CBPD certificate issued through your approved training provider."
        },
        {
          question: "Can my certificate be verified?",
          answer: "Yes, all CBPD certificates include secure verification features such as unique certificate numbers and QR codes."
        },
        {
          question: "What career benefits do CBPD qualifications offer?",
          answer: "CBPD qualifications enhance employability, support career progression, and demonstrate professional competence to employers globally."
        }
      ]
    },
    {
      title: "For Training Providers / Institutions",
      faqs: [
        {
          question: "What is CBPD accreditation?",
          answer: "CBPD accreditation is a formal recognition granted to institutions that meet our academic and quality standards, allowing them to deliver CBPD-aligned programmes."
        },
        {
          question: "Who can apply for CBPD accreditation?",
          answer: "Training providers, colleges, academies, and organisations delivering professional or vocational education can apply."
        },
        {
          question: "What is the CBPD Qualification Framework (CQF)?",
          answer: "The CQF provides a structured framework for programme levels, ensuring academic consistency and global benchmarking of qualifications."
        },
        {
          question: "What are the benefits of becoming a CBPD-approved centre?",
          answer: "Approved centres gain enhanced credibility, access to a global network, co-branding opportunities, and the authority to deliver recognised programmes."
        },
        {
          question: "Can institutions outside the UK apply?",
          answer: "Yes, CBPD collaborates with institutions globally, including across Asia, Europe, the Middle East, Africa, Australia, New Zealand, Canada, and the United States."
        },
        {
          question: "What is the accreditation process?",
          answer: "The process includes application submission, academic review, quality evaluation, and final approval by CBPD."
        },
        {
          question: "Can we issue CBPD certificates?",
          answer: "Yes, approved centres are authorised to deliver programmes and facilitate the issuance of official CBPD certificates."
        },
        {
          question: "Does CBPD provide ongoing support?",
          answer: "Yes, CBPD provides continuous support including quality assurance, academic guidance, and marketing assistance."
        },
        {
          question: "Are there quality assurance requirements?",
          answer: "Yes, all approved centres must maintain CBPD standards through ongoing monitoring and compliance processes."
        },
        {
          question: "How long does the approval process take?",
          answer: "Approval timelines may vary depending on the completeness of submission and evaluation requirements."
        }
      ]
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c]">
      {/* Mini Hero */}
      <section className="relative pt-40 pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 backdrop-blur-md mb-6 animate-[fadeInUp_0.8s_ease-out]">
            <span className="text-brand-red font-semibold tracking-wide text-sm uppercase">Support Hub</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight mb-8 animate-[fadeInUp_1s_ease-out]">
            Frequently Asked <br/>
            <span className="text-brand-red">Questions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
            Find quick answers to common questions about our accreditation process, verification, and partnership opportunities.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="bg-white dark:bg-primary-900 rounded-[2.5rem] p-8 md:p-12 shadow-[0_5px_40px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-primary-800 transition-all duration-300">
            <div className="space-y-12">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-primary-800 pb-4">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, index) => {
                      const id = `${category.title}-${index}`;
                      const isOpen = openId === id;
                      return (
                        <div 
                          key={index} 
                          className={`border border-slate-100 dark:border-primary-800 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-slate-50 dark:bg-primary-800/50 shadow-sm border-brand-blue/30 dark:border-brand-red/30' : 'bg-white dark:bg-primary-900 hover:border-brand-blue/20 dark:hover:border-primary-700'}`}
                        >
                          <button 
                            className="w-full text-left px-6 md:px-8 py-6 flex items-center justify-between gap-4 focus:outline-none"
                            onClick={() => handleToggle(id)}
                          >
                            <span className={`text-lg md:text-xl font-bold pr-8 transition-colors ${isOpen ? 'text-brand-blue dark:text-brand-red' : 'text-slate-800 dark:text-white'}`}>
                              {faq.question}
                            </span>
                            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-red text-white rotate-180 shadow-md' : 'bg-slate-100 dark:bg-primary-800 text-slate-500 dark:text-slate-400'}`}>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                          </button>
                          
                          <div 
                            className="transition-all duration-500 ease-in-out" 
                            style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0, overflow: 'hidden' }}
                          >
                            <div className="px-6 md:px-8 pb-8 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                              <div className="w-full h-px bg-slate-200 dark:bg-primary-700 mb-6"></div>
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-6">Still have questions? Tell us about it.</p>
            <a href="/contact" className="inline-flex px-8 py-4 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-red transition-all shadow-[0_5px_15px_rgba(30,64,175,0.3)] hover:shadow-[0_10px_25px_rgba(212, 53, 28,0.4)] items-center gap-2 group">
              Contact Support
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
