"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import FormAlert from "@/components/FormAlert";
import { api } from "@/lib/api";

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setErrorMsg("Invalid or missing reset token.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters long.");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      await api.resetPassword({ token, password, confirmPassword });
      setSuccessMsg("Password reset successfully! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      console.error("Reset password error:", err);
      setErrorMsg(err.message || "Failed to reset password. The link might be expired or invalid.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="text-center">
        <FormAlert type="error" message="Missing reset token. Please use the link provided in your email." />
        <Link href="/login" className="inline-block mt-6 text-brand-blue font-semibold hover:underline">
          Return to Login
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMsg && (
        <FormAlert type="error" message={errorMsg} onClose={() => setErrorMsg("")} />
      )}
      {successMsg && (
        <FormAlert type="success" message={successMsg} onClose={() => setSuccessMsg("")} />
      )}

      <div className="space-y-2 relative">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">New Password</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-brand-blue">
            <svg className="w-5 h-5 text-slate-400 group-focus-within:text-brand-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all text-slate-800 dark:text-white placeholder-slate-400"
            placeholder="Enter new password"
          />
        </div>
      </div>

      <div className="space-y-2 relative">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Confirm New Password</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-brand-blue">
             <svg className="w-5 h-5 text-slate-400 group-focus-within:text-brand-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <input 
            type="password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all text-slate-800 dark:text-white placeholder-slate-400"
            placeholder="Confirm new password"
          />
        </div>
      </div>

      <button 
        type="submit"
        disabled={isLoading || !password || !confirmPassword}
        className="w-full py-4 mt-4 rounded-xl bg-brand-blue hover:bg-brand-red text-white font-bold text-lg transition-all shadow-[0_5px_15px_rgba(30,64,175,0.3)] hover:shadow-[0_10px_25px_rgba(212, 53, 28,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          "Reset Password"
        )}
      </button>
    </form>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c] flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-blue/30 blur-[120px] animate-[pulse_8s_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-red/20 blur-[150px] animate-[pulse_10s_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto max-w-lg relative z-10 w-full">
        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-8 md:p-12 animate-[fadeInUp_0.6s_ease-out]">
          
          <div className="flex justify-center mb-8">
            <Link href="/">
              <img src="/images/external/CBPD_LOGO.7c42c792.png" alt="CBPD Logo" className="h-16 w-auto bg-white rounded-xl p-2 shadow-md border border-slate-100" />
            </Link>
          </div>

          <div className="mb-10 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight">
              Create New Password
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Please enter your new password below.
            </p>
          </div>

          <Suspense fallback={<div className="flex justify-center p-8"><span className="animate-spin text-brand-blue">⏳</span></div>}>
            <ResetPasswordForm />
          </Suspense>

        </div>
      </div>
    </div>
  );
}
