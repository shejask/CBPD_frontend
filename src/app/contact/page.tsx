"use client";

import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import FormAlert from "@/components/FormAlert";
import { countryCodes } from "@/data/countries";
import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import { programData as staticProgramData } from "@/data/programs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+44",
    phone: "",
    enquiryType: "Enquiry",
    programme: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [programData, setProgramData] = useState<any[]>(staticProgramData);

  useEffect(() => {
    async function fetchDynamicData() {
      try {
        const [categoriesRes, coursesRes] = await Promise.all([
          api.getCategories(),
          api.getCourses()
        ]);
        const cats = categoriesRes.categories || [];
        const courses = coursesRes.courses || [];
        
        if (cats.length > 0) {
          const formatted = cats.map((cat: any) => ({
             title: cat.name,
             subs: courses
               .filter((c: any) => c.categoryId && (c.categoryId._id === cat._id || c.categoryId === cat._id))
               .map((c: any) => ({ title: c.title }))
          }));
          setProgramData(formatted);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic program data:", err);
      }
    }
    fetchDynamicData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      setErrorMessage("");
      setSuccessMessage("");
      
      const response = await api.submitContact({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email,
        phone: `${formData.phoneCode} ${formData.phone}`.trim(),
        enquiryType: formData.enquiryType,
        programmeName: formData.enquiryType === "Programme" ? formData.programme : "",
        message: formData.message,
      });
      
      setStatus("success");
      setSuccessMessage(response?.message || "Message sent successfully! We will get back to you shortly.");
      setFormData({ firstName: "", lastName: "", email: "", phoneCode: "+44", phone: "", enquiryType: "Enquiry", programme: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
        setSuccessMessage("");
      }, 5000);
    } catch (err: any) {
      console.error("Contact submission error:", err);
      setStatus("error");
      setErrorMessage(err.message || "There was an error sending your message. Please try again.");
    }
  };
  return (
    <main className="min-h-screen">
      {/* Mini Hero */}
      <section className="relative pt-40 pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 backdrop-blur-md mb-6 animate-[fadeInUp_0.8s_ease-out]">
            <span className="text-brand-red font-semibold tracking-wide text-sm uppercase">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight mb-8 animate-[fadeInUp_1s_ease-out]">
            Let's start a <br/>
            <span className="text-brand-red">Conversation</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
            Have any questions? Get in touch with our team of experts. We are here to help you redefine your professional journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50 dark:bg-[#0a0f1c] relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 mx-auto">
            
            {/* Contact Info Left Side */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <span className="text-brand-blue dark:text-brand-red font-bold tracking-wider text-sm uppercase mb-2 block">Get in touch!</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Contact Info</h2>
              <div className="w-20 h-1 bg-brand-red mb-8"></div>

              <TiltCard sensitivity={15}>
                <div className="bg-white dark:bg-primary-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-primary-800 group hover:border-brand-blue/50 dark:hover:border-brand-red/50 transition-colors h-full" style={{ transform: "translateZ(20px)" }}>
                  <div className="w-14 h-14 bg-brand-blue/10 dark:bg-primary-800 rounded-xl flex items-center justify-center mb-6 text-brand-blue dark:text-brand-red group-hover:bg-brand-blue group-hover:text-white dark:group-hover:bg-brand-red transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Address</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Central Board of Professional Development<br/>
                    1 Canada Square, Canary Wharf<br/>
                    London, E14 5DY, United Kingdom
                  </p>
                </div>
              </TiltCard>

              <TiltCard sensitivity={15}>
                <div className="bg-white dark:bg-primary-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-primary-800 group hover:border-brand-blue/50 dark:hover:border-brand-red/50 transition-colors h-full" style={{ transform: "translateZ(20px)" }}>
                  <div className="w-14 h-14 bg-brand-blue/10 dark:bg-primary-800 rounded-xl flex items-center justify-center mb-6 text-brand-blue dark:text-brand-red group-hover:bg-brand-blue group-hover:text-white dark:group-hover:bg-brand-red transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    +44 20 38074300
                  </p>
                </div>
              </TiltCard>

              <TiltCard sensitivity={15}>
                <div className="bg-white dark:bg-primary-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-primary-800 group hover:border-brand-blue/50 dark:hover:border-brand-red/50 transition-colors h-full" style={{ transform: "translateZ(20px)" }}>
                  <div className="w-14 h-14 bg-brand-blue/10 dark:bg-primary-800 rounded-xl flex items-center justify-center mb-6 text-brand-blue dark:text-brand-red group-hover:bg-brand-blue group-hover:text-white dark:group-hover:bg-brand-red transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    info@cbpd.co.uk
                  </p>
                </div>
              </TiltCard>
            </div>

            {/* Contact Form Right Side */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-primary-900 rounded-[2.5rem] p-8 md:p-12 shadow-[0_5px_40px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-primary-800 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-bl-full pointer-events-none"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Drop A Line!</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">First Name *</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">Last Name *</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white" placeholder="johndoe@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">Phone *</label>
                      <div className="flex">
                        <select name="phoneCode" value={formData.phoneCode} onChange={handleChange} className="w-1/3 px-3 py-4 bg-slate-100 dark:bg-primary-800 border border-r-0 border-slate-200 dark:border-primary-700 rounded-l-xl focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white">
                          {countryCodes.map((c, i) => (
                            <option key={i} value={c.code}>{c.label}</option>
                          ))}
                        </select>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-2/3 pl-3 pr-5 py-4 rounded-r-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white" placeholder="20..." />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">Enquiry Type *</label>
                      <select name="enquiryType" value={formData.enquiryType} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white">
                        <option value="Enquiry">General Enquiry</option>
                        <option value="Programme">Programme</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {formData.enquiryType === "Programme" && (
                      <div className="space-y-2 animate-[fadeIn_0.3s_ease-out]">
                        <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">Select Programme *</label>
                        <select name="programme" value={formData.programme} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white">
                          <option value="" disabled>Select a programme</option>
                          {programData.map((category, idx) => (
                            <optgroup key={idx} label={category.title}>
                              {category.subs.map((sub: any, subIdx: number) => (
                                <option key={subIdx} value={sub.title}>{sub.title}</option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white resize-none" placeholder="Write your message here..."></textarea>
                    </div>

                    <MagneticButton strength={15}>
                      <button disabled={status === "loading"} className="px-10 py-5 rounded-full bg-brand-blue text-white font-bold text-lg hover:bg-brand-red transition-colors shadow-[0_5px_20px_rgba(30,64,175,0.4)] hover:shadow-[0_10px_30px_rgba(212, 53, 28,0.5)] flex items-center gap-2 group w-full md:w-auto mt-4 disabled:opacity-70">
                        {status === "loading" ? "Sending..." : "Send Message"}
                        {status !== "loading" && <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
                      </button>
                    </MagneticButton>
                    
                    {status === "success" && (
                      <FormAlert type="success" message={successMessage} onClose={() => setStatus("idle")} />
                    )}
                    {status === "error" && (
                      <FormAlert type="error" message={errorMessage} onClose={() => setStatus("idle")} />
                    )}
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
