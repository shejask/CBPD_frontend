"use client";

import { useState } from "react";
import { countryCodes } from "@/data/countries";

export default function ApplicationForm({ programTitle }: { programTitle: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+44",
    phone: "",
    country: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-green-500/30 p-12 rounded-3xl shadow-xl text-center animate-[fadeInUp_0.5s_ease-out]">
        <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-4xl mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Application Received!</h3>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
          Thank you for applying to the <span className="font-bold text-brand-blue">{programTitle}</span> program. Our admissions team will review your details and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative">
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-red rounded-t-3xl"></div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name <span className="text-brand-red">*</span></label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all dark:text-white"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address <span className="text-brand-red">*</span></label>
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all dark:text-white"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number <span className="text-brand-red">*</span></label>
            <div className="flex">
              <select 
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
                className="w-1/3 px-2 py-3 bg-slate-100 dark:bg-primary-900 border border-r-0 border-slate-200 dark:border-white/10 rounded-l-xl focus:ring-2 focus:ring-brand-blue transition-all dark:text-white"
              >
                {countryCodes.map((c, i) => (
                  <option key={i} value={c.code}>{c.label}</option>
                ))}
              </select>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-2/3 pl-3 pr-4 py-3 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-r-xl focus:ring-2 focus:ring-brand-blue transition-all dark:text-white"
                placeholder="234 567 890"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Country of Residence <span className="text-brand-red">*</span></label>
            <select 
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all dark:text-white"
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="IN">India</option>
              <option value="AE">United Arab Emirates</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Why are you interested in this program? <span className="text-brand-red">*</span></label>
          <textarea 
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all dark:text-white resize-none"
            placeholder="Tell us about your background and career goals..."
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 rounded-xl bg-blend-normal bg-gradient-to-r from-brand-blue to-primary-800 hover:from-brand-red hover:to-brand-red text-white font-bold text-lg transition-all shadow-lg hover:shadow-brand-red/40 disabled:opacity-70 flex items-center justify-center gap-2 group"
        >
          {status === "loading" ? (
            <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>Submit Formal Application <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></>
          )}
        </button>
      </form>
    </div>
  );
}
