import type { Metadata } from "next";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { Cookie, Mail, Building2, Globe, Sliders, ShieldCheck, CheckCircle2, Lock, Eye, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookies Policy | Central Board of Professional Development (CBPD UK)",
  description: "Official Cookies Policy of CBPD UK explaining how cookies and similar tracking technologies are used and how visitors can manage preferences.",
};

export default function CookiesPolicyPage() {
  return (
    <PolicyPageLayout
      title="Cookies Policy"
      subtitle="Clear information regarding how we use cookies, web storage, and similar technologies to ensure site security, support essential functionality, and respect your privacy choices."
      activeSlug="cookies-policy"
      lastUpdated="23 October 2026"
    >
      <div className="space-y-10 text-slate-700 dark:text-slate-300">
        
        {/* Document Reference Card */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/40 border border-slate-200 dark:border-primary-700/60 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-brand-red" />
            <span className="text-slate-500 dark:text-slate-400">Official Website: </span>
            <a href="https://www.cbpd.co.uk" target="_blank" rel="noopener noreferrer" className="text-brand-red font-semibold hover:underline">
              https://www.cbpd.co.uk
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-red" />
            <span className="text-slate-500 dark:text-slate-400">Privacy &amp; Cookie Enquiries: </span>
            <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-semibold hover:underline">
              info@cbpd.co.uk
            </a>
          </div>
        </div>

        {/* 1. Introduction */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">1.</span> Introduction
          </h2>
          <p className="leading-relaxed">
            Central Board of Professional Development (CBPD UK) is committed to providing a reliable, secure and user-friendly online experience.
          </p>
          <p className="leading-relaxed">
            This Cookies Policy explains how cookies and similar technologies may be used on the CBPD UK website, why these technologies are used, and how visitors can manage their preferences.
          </p>
          <p className="leading-relaxed">
            This policy should be read alongside our <a href="/privacy-policy" className="text-brand-red font-semibold hover:underline">Privacy Policy</a> and <a href="/terms-and-conditions" className="text-brand-red font-semibold hover:underline">Terms and Conditions</a>, which explain how we handle personal information and govern the use of our website and services.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-700/50 text-sm">
            By using our website, you may encounter cookies and similar technologies that are necessary for the operation, security and functionality of the website. Where applicable law requires consent for non-essential cookies or similar technologies, we will seek that consent before using them.
          </div>
        </section>

        {/* 2. What Are Cookies? */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">2.</span> What Are Cookies?
          </h2>
          <p className="leading-relaxed">
            Cookies are small text files that a website may place on your computer, mobile phone, tablet or other device when you visit it.
          </p>
          <p className="leading-relaxed">
            Cookies allow a website to recognise a device or remember certain information about a visit. Depending on their purpose, they may help a website operate securely, remember preferences, understand how visitors use its pages or support other website functions.
          </p>
          <p className="leading-relaxed">
            Cookies may be set directly by the website you visit or by a third-party service integrated into that website.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Session Cookies</strong>
              Remain on your device only while your browser is open and are deleted automatically upon closing.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Persistent Cookies</strong>
              Remain on your device for a specified expiration period or until explicitly deleted by the user.
            </div>
          </div>
        </section>

        {/* 3. Similar Technologies */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">3.</span> Similar Technologies
          </h2>
          <p className="leading-relaxed">
            In addition to cookies, websites may use similar technologies, such as:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Local Storage</strong>
              Allows a website to store certain data securely within a browser for persistent operational needs.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Session Storage</strong>
              Stores information temporarily during an active single browsing session.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Tracking Pixels</strong>
              Small transparent graphic elements that help determine whether a page or communication was accessed.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Scripts and Tags</strong>
              Code snippets that support site functionality, performance analytics, or integrated third-party services.
            </div>
          </div>
          <p className="leading-relaxed text-xs text-slate-500 dark:text-slate-400">
            For simplicity, this policy refers to cookies and similar technologies collectively as &ldquo;cookies&rdquo;, unless a distinction is necessary.
          </p>
        </section>

        {/* 4. Why We Use Cookies */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">4.</span> Why We Use Cookies
          </h2>
          <p className="leading-relaxed">
            Depending on the features and services enabled on our website, cookies may be used for the following purposes:
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-slate-900 dark:text-white text-base">4.1 Strictly necessary cookies</strong>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                  Always Active (Exempt from Consent)
                </span>
              </div>
              <p className="leading-relaxed text-sm">
                These cookies are essential for the operation, security or functionality of a website feature requested by the user. They support maintaining a secure session, protecting forms against CSRF, managing access to restricted areas, or remembering cookie consent choices.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-slate-900 dark:text-white text-base">4.2 Functional preference cookies</strong>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-primary-700 text-slate-600 dark:text-slate-300">
                  User Opt-in
                </span>
              </div>
              <p className="leading-relaxed text-sm">
                These cookies allow a website to remember choices made by a visitor, such as display theme preferences (dark/light mode) or interface selections, providing a consistent experience upon return.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-slate-900 dark:text-white text-base">4.3 Analytics and performance cookies</strong>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-primary-700 text-slate-600 dark:text-slate-300">
                  User Opt-in
                </span>
              </div>
              <p className="leading-relaxed text-sm">
                Help us understand how visitors use the website, which pages are visited, how navigation flows, and whether technical errors occur, allowing us to assess performance and improve accessibility.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-slate-900 dark:text-white text-base">4.4 Marketing and advertising cookies</strong>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-primary-700 text-slate-600 dark:text-slate-300">
                  User Opt-in
                </span>
              </div>
              <p className="leading-relaxed text-sm">
                If marketing technologies are enabled, they help measure promotional effectiveness. CBPD UK will not use non-essential marketing cookies without explicit prior consent.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1.5">
              <strong className="text-slate-900 dark:text-white text-base block">4.5 Security and fraud prevention</strong>
              <p className="leading-relaxed text-sm">
                Certain technologies help detect suspicious activity, protect forms from automated abuse, maintain website integrity and mitigate unauthorised access.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            Important: The categories above describe purposes that may apply to a website. They do not confirm that every category is currently active on the CBPD UK website.
          </p>
        </section>

        {/* 5. First-Party and Third-Party Cookies */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">5.</span> First-Party and Third-Party Cookies
          </h2>
          <div className="space-y-3 text-sm sm:text-base leading-relaxed">
            <p>
              <strong>5.1 First-party cookies:</strong> Set directly by the website being visited (cbpd.co.uk) or by services operating on its behalf, supporting essential site functions and security.
            </p>
            <p>
              <strong>5.2 Third-party cookies:</strong> Set by an external service integrated into our website (such as analytics providers, embedded media services, payment gateways, or security tools). Third-party providers process data under their own independent privacy policies. Where required, CBPD UK configures consent controls before allowing non-essential third-party technologies to operate.
            </p>
          </div>
        </section>

        {/* 6. Cookie Consent and Your Preferences */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">6.</span> Cookie Consent and Your Preferences
          </h2>
          <p className="leading-relaxed">
            Where consent is legally required, CBPD UK seeks consent before placing or accessing non-essential cookies. Our cookie consent mechanism allows visitors to:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pl-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Accept non-essential cookies.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
              <span>Reject non-essential cookies.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
              <span>Choose between available cookie categories.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Review, change, or withdraw consent at any time.</span>
            </li>
          </ul>
          <p className="leading-relaxed text-sm">
            Strictly necessary cookies continue to operate where required for a requested feature. Withdrawing consent does not affect the lawfulness of processing carried out prior to withdrawal.
          </p>
        </section>

        {/* 7. How to Manage Cookies Through Your Browser */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">7.</span> How to Manage Cookies Through Your Browser
          </h2>
          <p className="leading-relaxed">
            Most web browsers allow users to view, block, restrict or delete cookies through their application settings. Depending on your browser, you may be able to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li>Delete existing stored cookies.</li>
            <li>Block all cookies or selected categories by default.</li>
            <li>Receive notifications whenever cookies are being stored.</li>
            <li>Automatically clear website data upon closing the browser window.</li>
            <li>Configure site-specific storage permissions.</li>
          </ul>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-700/50 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Please be aware that blocking or deleting strictly necessary cookies may affect website functionality (e.g., signing into the institute dashboard or preserving verification filters).
          </div>
        </section>

        {/* 8 - 11. Personal Information, Transfers, Retention & External Sites */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">8 - 11.</span> Data Protection &amp; Cookie Lifespan
          </h2>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              <strong>8. Personal Information:</strong> Any technical identifiers (IP addresses, device hashes) captured via cookies are handled strictly under our <a href="/privacy-policy" className="text-brand-red font-semibold hover:underline">Privacy Policy</a> and UK GDPR standards.
            </p>
            <p>
              <strong>9. International Transfers:</strong> Where third-party technology providers process information outside the UK, appropriate transfer safeguards and standard contractual clauses are maintained.
            </p>
            <p>
              <strong>10. Cookie Retention:</strong> Session cookies expire when the browser closes. Persistent cookies remain for defined periods appropriate to their utility or until cleared by the user.
            </p>
            <p>
              <strong>11. External Websites:</strong> External links operate under their own independent cookie policies; CBPD UK accepts no responsibility for third-party cookie handling.
            </p>
          </div>
        </section>

        {/* 12. Changes to This Cookies Policy */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">12.</span> Changes to This Cookies Policy
          </h2>
          <p className="leading-relaxed">
            CBPD UK may update this Cookies Policy to reflect changes in applicable legislation, website functionality, technology providers or our cookie practices. The latest version will be published on this page with the updated revision date.
          </p>
        </section>

        {/* 13. Contact Us */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">13.</span> Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have questions about this Cookies Policy or how cookies are used on the CBPD UK website, please contact:
          </p>

          <div className="p-6 rounded-2xl bg-white dark:bg-primary-900/60 border border-slate-200 dark:border-primary-700/60 shadow-sm space-y-3">
            <div className="font-bold text-slate-900 dark:text-white text-base">
              Central Board of Professional Development (CBPD UK)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>General Enquiries: <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-red shrink-0" />
                <span>Website: <a href="https://www.cbpd.co.uk" target="_blank" rel="noopener noreferrer" className="text-brand-red font-medium hover:underline">www.cbpd.co.uk</a></span>
              </div>
              <div className="sm:col-span-2 flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-primary-700/50">
                <Building2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>Correspondence Address: 1 Canada Square, Canary Wharf, London E14 5DY, United Kingdom</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
              Please use the subject line <strong>&ldquo;Cookies Policy Enquiry&rdquo;</strong> when contacting us about cookies or website tracking.
            </p>
          </div>
        </section>

      </div>
    </PolicyPageLayout>
  );
}
