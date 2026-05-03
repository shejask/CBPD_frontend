"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { countryCodes } from "@/data/countries";
import FormAlert from "@/components/FormAlert";
import { api } from "@/lib/api";
import { countries } from "@/data/countryList";

const InputWrapper = ({ label, required = false, children }: any) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    country: "United Kingdom",
    orgName: "",
    industry: "",
    address: "",
    postalCode: "",
    website: "",
    email: "",
    password: "",
    phoneCode: "+44",
    phone: "",
    // Step 2: Main Contact
    mcFirstName: "",
    mcLastName: "",
    mcJobTitle: "",
    mcEmail: "",
    mcPhoneCode: "+44",
    mcPhone: "",
    mcMobileCode: "+44",
    mcMobile: "",
    // Step 3: Secondary Contact
    scFirstName: "",
    scLastName: "",
    scJobTitle: "",
    scEmail: "",
    scPhoneCode: "+44",
    scPhone: "",
    scMobileCode: "+44",
    scMobile: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    const payload = {
      orgName: formData.orgName,
      industrySector: formData.industry,
      businessAddress: formData.address,
      postalCode: formData.postalCode,
      mainTelephone: `${formData.phoneCode} ${formData.phone}`.trim(),
      website: formData.website,
      email: formData.email,
      password: formData.password,
      
      firstName: formData.mcFirstName,
      lastName: formData.mcLastName,
      jobTitle: formData.mcJobTitle,
      emailAddress: formData.mcEmail,
      phoneNumber: `${formData.mcPhoneCode} ${formData.mcPhone}`.trim(),
      mobileNumber: formData.mcMobile ? `${formData.mcMobileCode} ${formData.mcMobile}`.trim() : "",
      
      SfirstName: formData.scFirstName,
      SlastName: formData.scLastName,
      SjobTitle: formData.scJobTitle,
      SemailAddress: formData.scEmail,
      SphoneNumber: `${formData.scPhoneCode} ${formData.scPhone}`.trim(),
      SmobileNumber: formData.scMobile ? `${formData.scMobileCode} ${formData.scMobile}`.trim() : "",
      
      isApproved: false,
      isTerminated: false,
    };

    try {
      const response = await api.register(payload);
      setSuccessMsg(response.message || "Registration Successful! Please login.");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err: any) {
      console.error("Registration error:", err);
      setErrorMsg(err.message || "An error occurred during registration.");
      setIsLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c] pt-24 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-blue/20 blur-[120px] animate-[pulse_8s_infinite] delay-75"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-red/10 blur-[150px] animate-[pulse_10s_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 w-full">
        {/* Header Header */}
        <div className="text-center mb-10 w-full animate-[fadeInUp_0.5s_ease-out]">
          <Link href="/" className="inline-block mb-8">
            <img src="/images/external/CBPD_LOGO.7c42c792.png" alt="CBPD Logo" className="h-32 w-auto rounded-xl p-4 shadow-xl" />
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">
            Let's Get You Started
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Enter the details to get going
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden w-full p-8 md:p-12 animate-[fadeInUp_0.7s_ease-out] min-h-[500px] flex flex-col justify-between relative">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-red"></div>

          {/* Stepper Wizard */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 dark:bg-white/5 -z-10 hidden md:block rounded-full"></div>
            
            {[
              { num: 1, title: "Organization Details" },
              { num: 2, title: "Main Contact" },
              { num: 3, title: "Secondary Contact" }
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-3 bg-white dark:bg-primary-900 px-4 py-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  step >= s.num ? "bg-brand-blue text-white shadow-[0_0_15px_rgba(30,64,175,0.4)]" : "bg-slate-200 dark:bg-white/10 text-slate-500"
                }`}>
                  {s.num}
                </div>
                <span className={`font-medium ${step >= s.num ? "text-slate-800 dark:text-white" : "text-slate-400 dark:text-slate-500"}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={step === 3 ? handleSubmit : handleNext} className="flex-grow flex flex-col justify-between">
            {errorMsg && (
              <FormAlert type="error" message={errorMsg} onClose={() => setErrorMsg("")} />
            )}
            {successMsg && (
              <FormAlert type="success" message={successMsg} onClose={() => setSuccessMsg("")} />
            )}
            {/* Step 1: Organization Details */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-[fadeInUp_0.4s_ease-out]">
                <InputWrapper label="Country" required>
                  <select name="country" value={formData.country} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white">
                    <option value="">Select Country</option>
                    {countries.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </InputWrapper>

                <InputWrapper label="Organization Name" required>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <input type="text" name="orgName" value={formData.orgName} onChange={handleChange} required placeholder="Enter Organization Name" className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                  </div>
                </InputWrapper>

                <InputWrapper label="Industry Sector" required>
                  <select name="industry" value={formData.industry} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white">
                    <option value="">Select Industry Sector</option>
                    <option value="Education">Education</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                  </select>
                </InputWrapper>

                <InputWrapper label="Business Address" required>
                  <textarea name="address" value={formData.address} onChange={handleChange} required placeholder="Enter Business Address" rows={3} className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white resize-none" />
                </InputWrapper>

                <InputWrapper label="Postal Code" required>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 pt-3 pointer-events-none text-slate-400">
                      <span className="font-bold">#</span>
                    </div>
                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required placeholder="Enter Postal Code" className="w-full pl-9 pr-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white h-auto" />
                  </div>
                </InputWrapper>

                <InputWrapper label="Website">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pt-1 pointer-events-none text-slate-400">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://..." className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                  </div>
                </InputWrapper>

                <InputWrapper label="Organization Email" required>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Organization Email" className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                  </div>
                </InputWrapper>

                <InputWrapper label="Password" required>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Enter Password" className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                  </div>
                </InputWrapper>

                <InputWrapper label="Main Telephone Number" required>
                  <div className="flex">
                    <select name="phoneCode" value={formData.phoneCode} onChange={handleChange} className="w-1/3 px-3 py-3 bg-slate-100 dark:bg-primary-800 border border-r-0 border-slate-300 dark:border-white/10 rounded-l-xl focus:ring-2 focus:ring-brand-blue text-slate-800 dark:text-white">
                      {countryCodes.map((c, i) => (
                        <option key={i} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter number" className="w-2/3 pl-3 pr-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-r-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                  </div>
                </InputWrapper>
              </div>
            )}

            {/* Step 2: Main Contact */}
            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeInUp_0.4s_ease-out]">
                <InputWrapper label="First Name" required>
                  <input type="text" name="mcFirstName" value={formData.mcFirstName} onChange={handleChange} required placeholder="Enter First Name" className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                </InputWrapper>

                <InputWrapper label="Last Name" required>
                  <input type="text" name="mcLastName" value={formData.mcLastName} onChange={handleChange} required placeholder="Enter Last Name" className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                </InputWrapper>

                <InputWrapper label="Job Title" required>
                  <select name="mcJobTitle" value={formData.mcJobTitle} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white">
                    <option value="">Select Job Title</option>
                    <option value="Founder">Founder / CEO</option>
                    <option value="Manager">Manager</option>
                    <option value="Director">Director</option>
                    <option value="Coordinator">Coordinator</option>
                  </select>
                </InputWrapper>

                <InputWrapper label="Email Address" required>
                  <input type="email" name="mcEmail" value={formData.mcEmail} onChange={handleChange} required placeholder="Enter Email" className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                </InputWrapper>

                <InputWrapper label="Phone Number" required>
                  <div className="flex">
                    <select name="mcPhoneCode" value={formData.mcPhoneCode} onChange={handleChange} className="w-1/3 px-2 py-3 bg-slate-100 dark:bg-primary-800 border border-r-0 border-slate-300 dark:border-white/10 rounded-l-xl focus:ring-2 focus:ring-brand-blue text-slate-800 dark:text-white">
                      {countryCodes.map((c, i) => (
                        <option key={i} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    <input type="tel" name="mcPhone" value={formData.mcPhone} onChange={handleChange} required placeholder="Enter number" className="w-2/3 pl-3 pr-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-r-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                  </div>
                </InputWrapper>

                <InputWrapper label="Mobile Number">
                  <div className="flex">
                    <select name="mcMobileCode" value={formData.mcMobileCode} onChange={handleChange} className="w-1/3 px-2 py-3 bg-slate-100 dark:bg-primary-800 border border-r-0 border-slate-300 dark:border-white/10 rounded-l-xl focus:ring-2 focus:ring-brand-blue text-slate-800 dark:text-white">
                      {countryCodes.map((c, i) => (
                        <option key={i} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    <input type="tel" name="mcMobile" value={formData.mcMobile} onChange={handleChange} placeholder="Enter mobile" className="w-2/3 pl-3 pr-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-r-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                  </div>
                </InputWrapper>
              </div>
            )}

            {/* Step 3: Secondary Contact */}
            {step === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeInUp_0.4s_ease-out]">
                <InputWrapper label="First Name" required>
                  <input type="text" name="scFirstName" value={formData.scFirstName} onChange={handleChange} required placeholder="Enter First Name" className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                </InputWrapper>

                <InputWrapper label="Last Name" required>
                  <input type="text" name="scLastName" value={formData.scLastName} onChange={handleChange} required placeholder="Enter Last Name" className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                </InputWrapper>

                <InputWrapper label="Job Title" required>
                  <select name="scJobTitle" value={formData.scJobTitle} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white">
                    <option value="">Select Job Title</option>
                    <option value="CoFounder">Co-Founder</option>
                    <option value="Manager">Manager</option>
                    <option value="Director">Director</option>
                    <option value="Coordinator">Coordinator</option>
                  </select>
                </InputWrapper>

                <InputWrapper label="Email Address" required>
                  <input type="email" name="scEmail" value={formData.scEmail} onChange={handleChange} required placeholder="Enter Email" className="w-full px-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                </InputWrapper>

                <InputWrapper label="Phone Number" required>
                  <div className="flex">
                    <select name="scPhoneCode" value={formData.scPhoneCode} onChange={handleChange} className="w-1/3 px-2 py-3 bg-slate-100 dark:bg-primary-800 border border-r-0 border-slate-300 dark:border-white/10 rounded-l-xl focus:ring-2 focus:ring-brand-blue text-slate-800 dark:text-white">
                      {countryCodes.map((c, i) => (
                        <option key={i} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    <input type="tel" name="scPhone" value={formData.scPhone} onChange={handleChange} required placeholder="Enter number" className="w-2/3 pl-3 pr-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-r-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                  </div>
                </InputWrapper>

                <InputWrapper label="Mobile Number">
                  <div className="flex">
                    <select name="scMobileCode" value={formData.scMobileCode} onChange={handleChange} className="w-1/3 px-2 py-3 bg-slate-100 dark:bg-primary-800 border border-r-0 border-slate-300 dark:border-white/10 rounded-l-xl focus:ring-2 focus:ring-brand-blue text-slate-800 dark:text-white">
                      {countryCodes.map((c, i) => (
                        <option key={i} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    <input type="tel" name="scMobile" value={formData.scMobile} onChange={handleChange} placeholder="Enter mobile" className="w-2/3 pl-3 pr-4 py-3 bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-white/10 rounded-r-xl focus:ring-2 focus:ring-brand-blue transition-all text-slate-800 dark:text-white" />
                  </div>
                </InputWrapper>
              </div>
            )}

            <div className="mt-12 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div>
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={handleBack}
                    className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-primary-800 text-slate-700 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-primary-700 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400 font-medium hidden sm:block">Step {step} of 3</span>
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 rounded-xl bg-slate-900 border border-transparent dark:bg-white text-white dark:text-primary-900 font-bold hover:bg-brand-red dark:hover:bg-brand-red dark:hover:text-white dark:hover:border-transparent transition-all shadow-xl disabled:opacity-70 flex items-center gap-2"
                >
                  {isLoading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : step === 3 ? (
                    <>Submit Registration <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></>
                  ) : (
                    <>Next <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></>
                  )}
                </button>
              </div>
            </div>
          </form>

        </div>
        
        <div className="text-center mt-6 text-slate-500">
          Already have an account? <Link href="/login" className="text-brand-blue font-bold hover:text-brand-red transition-colors">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
