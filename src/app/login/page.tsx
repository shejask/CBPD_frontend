"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormAlert from "@/components/FormAlert";
import { api } from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await api.login({ email, password });
      
      // Assume the backend returns { token: '...' } on success
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      
      setSuccessMsg("Login successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 1000);
    } catch (err: any) {
      console.error("Login error:", err);
      setErrorMsg(err.message || "Invalid credentials. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c] flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-blue/30 blur-[120px] animate-[pulse_8s_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-red/20 blur-[150px] animate-[pulse_10s_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 w-full">
        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row w-full min-h-[600px] animate-[fadeInUp_0.6s_ease-out]">
          
          {/* Left Side: Branding/Visual */}
          <div className="md:w-5/12 bg-primary-900 relative hidden md:flex flex-col justify-between p-12 overflow-hidden border-r border-slate-200 dark:border-white/10">
            <div className="absolute inset-0 z-0 opacity-40">
              <img 
                src="/images/external/1522202176988-66273c2fd55f.jpg" 
                alt="Students studying" 
                className="w-full h-full object-cover mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-brand-blue/50"></div>
            </div>

            <div className="relative z-10">
              <Link href="/">
                <img 
                  src="/images/external/CBPD_LOGO.7c42c792.png" 
                  alt="CBPD Logo" 
                  className="h-24 w-auto rounded-xl p-4 shadow-xl hover:scale-105 transition-transform"
                />
              </Link>
            </div>

            <div className="relative z-10 mt-20">
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                Redefine Your Professional <span className="text-brand-red">Journey</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                Access your personalized dashboard, manage your certifications, and connect with a global network of professionals.
              </p>
              
              <div className="flex items-center gap-3 text-sm text-brand-red bg-brand-red/10 px-4 py-2 rounded-full w-fit border border-brand-red/20 shadow-inner">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Secure Portal Access
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-7/12 p-8 md:p-14 lg:p-16 flex flex-col justify-center bg-white dark:bg-transparent">
            <div className="mb-10 text-center md:text-left">
              <div className="md:hidden flex justify-center mb-8">
                <Link href="/">
                  <img src="/images/external/CBPD_LOGO.7c42c792.png" alt="CBPD Logo" className="h-14 w-auto bg-white rounded p-2 shadow-md border border-slate-100" />
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight">
                Sign In To Your Account
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                Welcome back! Let's get you signed in.
              </p>
            </div>

            {/* Desktop Notice from Original Site */}
            <div className="md:hidden flex items-start gap-3 p-4 mb-8 text-sm text-brand-blue bg-brand-blue/10 rounded-xl border border-brand-blue/20">
               <svg className="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               <p className="leading-relaxed"><span className="font-semibold block">Recommendation:</span> For better safety & user experience, we recommend using a computer.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <FormAlert type="error" message={errorMsg} onClose={() => setErrorMsg("")} />
              )}
              {successMsg && (
                <FormAlert type="success" message={successMsg} onClose={() => setSuccessMsg("")} />
              )}
              <div className="space-y-2 relative">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-brand-blue">
                    <svg className="w-5 h-5 text-slate-400 group-focus-within:text-brand-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all text-slate-800 dark:text-white placeholder-slate-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2 relative">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                  <Link href="#" className="text-sm text-brand-blue hover:text-brand-red transition-colors font-medium">Forgot password?</Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400 group-focus-within:text-brand-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all text-slate-800 dark:text-white placeholder-slate-400"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center ml-1">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-brand-blue focus:ring-brand-blue border-slate-300 rounded cursor-pointer" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 dark:text-slate-400 cursor-pointer select-none">
                  Remember me next time
                </label>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-4 mt-4 rounded-xl bg-brand-blue hover:bg-brand-red text-white font-bold text-lg transition-all shadow-[0_5px_15px_rgba(30,64,175,0.3)] hover:shadow-[0_10px_25px_rgba(212, 53, 28,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>Sign In <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></>
                )}
              </button>
            </form>

            <div className="mt-10 text-center text-[15px] text-slate-600 dark:text-slate-400">
              Don't have an account?{" "}
              <Link href="/register" className="text-brand-blue font-bold hover:text-brand-red transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-brand-blue hover:after:bg-brand-red pb-0.5">
                Register here
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
