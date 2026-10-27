import type { Metadata } from "next";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { Database, Mail, Building2, Globe, ShieldCheck, CheckCircle2, Lock, Eye, AlertTriangle, ExternalLink, FileSpreadsheet } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Protection Notice | Central Board of Professional Development (CBPD UK)",
  description: "Official Data Protection Notice of CBPD UK explaining data governance, processing principles, partner responsibilities, and UK GDPR statutory rights.",
};

export default function DataProtectionNoticePage() {
  return (
    <PolicyPageLayout
      title="Data Protection Notice"
      subtitle="Comprehensive statutory notice detailing our data governance, institutional data sharing, processing principles, and UK GDPR commitments."
      activeSlug="data-protection-notice"
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
            <span className="text-slate-500 dark:text-slate-400">Data Protection Enquiries: </span>
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
            The Central Board of Professional Development (CBPD UK) is committed to protecting personal data and maintaining appropriate standards of confidentiality, integrity, accountability and information security across its awarding, certification, assessment, institutional accreditation and professional development activities.
          </p>
          <p className="leading-relaxed">
            This Data Protection Notice explains how CBPD UK collects, uses, accesses, stores, shares and protects personal data in connection with its website, learners, applicants, accredited education partners, channel partners, institutional representatives, assessors, employees, contractors and other individuals who interact with the organisation.
          </p>
          <p className="leading-relaxed">
            CBPD UK aims to process personal data fairly, lawfully, transparently and only for legitimate purposes, in accordance with applicable data protection legislation, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, where applicable.
          </p>
          <p className="leading-relaxed text-sm text-slate-500 dark:text-slate-400 italic">
            This Notice should be read alongside the CBPD UK <a href="/privacy-policy" className="text-brand-red font-medium hover:underline">Privacy Policy</a>, <a href="/cookies-policy" className="text-brand-red font-medium hover:underline">Cookies Policy</a>, <a href="/terms-and-conditions" className="text-brand-red font-medium hover:underline">Terms and Conditions</a>, and other relevant policies and agreements.
          </p>
        </section>

        {/* 2. Our Data Protection Responsibilities */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">2.</span> Our Data Protection Responsibilities
          </h2>
          <p className="leading-relaxed">
            CBPD UK recognises that personal data must be handled responsibly throughout its lifecycle, from initial collection to secure disposal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30 space-y-1.5">
              <strong className="text-slate-900 dark:text-white block text-base">As Data Controller</strong>
              <p className="text-xs sm:text-sm leading-relaxed">
                Where CBPD UK acts as a data controller, it is responsible for determining the purposes and means of processing personal data and meeting the applicable statutory obligations of a controller under UK GDPR.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30 space-y-1.5">
              <strong className="text-slate-900 dark:text-white block text-base">As Data Processor</strong>
              <p className="text-xs sm:text-sm leading-relaxed">
                Where CBPD UK acts as a data processor, it will process personal data strictly in accordance with the relevant controller&apos;s documented instructions and applicable contractual and legal requirements.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Categories of Personal Data */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">3.</span> Categories of Personal Data
          </h2>
          <p className="leading-relaxed">
            Depending on the relationship with the individual and the services provided, CBPD UK may process the following categories of personal data:
          </p>

          <div className="space-y-3 text-sm">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1">
              <strong className="text-slate-900 dark:text-white block font-semibold">3.1 Identity and Contact Information</strong>
              <p>Full name, title, email address, telephone number, correspondence address, date of birth (for verification/eligibility), and identification records where legitimately required.</p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1">
              <strong className="text-slate-900 dark:text-white block font-semibold">3.2 Learner and Certification Records</strong>
              <p>Learner registration and reference numbers, course/qualification details, enrolment, attendance, assessment submissions and results, certificate numbers, verification status, and records of replacement or withdrawal actions.</p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1">
              <strong className="text-slate-900 dark:text-white block font-semibold">3.3 Institutional and Partner Information</strong>
              <p>Education provider details, names and contact details of authorised representatives, centre approval, quality assurance, compliance records, invoices, and business agreements.</p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1">
              <strong className="text-slate-900 dark:text-white block font-semibold">3.4 Technical and Website Information</strong>
              <p>IP addresses, browser and device data, security logs, access timestamps, cookie preferences, and form submissions.</p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1">
              <strong className="text-slate-900 dark:text-white block font-semibold">3.5 Correspondence and Enquiries</strong>
              <p>Information contained in emails, appeals, complaints, enquiries, and documentary evidence submitted for review.</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            Special category data and information relating to criminal convictions will not be routinely requested and will only be processed where a lawful basis and applicable additional conditions permit it.
          </p>
        </section>

        {/* 4. Purposes of Processing */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">4.</span> Purposes of Processing
          </h2>
          <p className="leading-relaxed">CBPD UK may process personal data for the following purposes:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Managing learner registration, enrolment and certification records.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Administering assessments, reviewing results and certification decisions.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Issuing, correcting, replacing, suspending or withdrawing certificates.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Maintaining verification records and responding to legitimate verification queries.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Reviewing institutional membership, accreditation and partner applications.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Conducting quality assurance, centre monitoring and compliance reviews.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Managing complaints, appeals, malpractice investigations, and disputes.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Processing payments, maintaining accounts and contractual obligations.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Maintaining website functionality, security and fraud prevention.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Meeting statutory, tax, legal and regulatory record-keeping obligations.</span>
            </li>
          </ul>
        </section>

        {/* 5. Lawful Bases for Processing */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">5.</span> Lawful Bases for Processing
          </h2>
          <p className="leading-relaxed">
            Where required by applicable law, CBPD UK will identify an appropriate lawful basis for processing personal data:
          </p>
          <div className="space-y-3 text-sm">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Contract:</strong>
              Processing necessary to enter into or perform an agreement with an individual or an organisation (e.g. learner registration, partner accreditation).
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Legal Obligation:</strong>
              Processing necessary to comply with binding statutory or regulatory requirements applicable to CBPD UK.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Legitimate Interests:</strong>
              Processing necessary for legitimate interests pursued by CBPD UK (e.g. maintaining accurate certification registers, preventing fraud, system security), where not overridden by individual rights.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Consent:</strong>
              Processing based on freely given, specific, informed consent where consent is the applicable basis (withdrawable at any time).
            </div>
          </div>
        </section>

        {/* 6. Learner Records and Certificate Verification */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">6.</span> Learner Records and Certificate Verification
          </h2>
          <p className="leading-relaxed">
            CBPD UK maintains records necessary to administer its certification and quality assurance activities. To support the authenticity and verification of certificates, certain information may be made available through the CBPD UK verification portal (<a href="/verifications" className="text-brand-red font-medium hover:underline">/verifications</a>) or in response to a legitimate verification request.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-700/50 text-sm space-y-2">
            <p className="leading-relaxed">
              Disclosed verification details may include a learner&apos;s name, certificate reference number, qualification title, issue date, and current certification status. CBPD UK seeks to limit publicly accessible data strictly to what is reasonably necessary for authenticity confirmation and fraud prevention.
            </p>
            <p className="font-semibold text-slate-900 dark:text-white text-xs">
              Verification data must not be scraped, unlawfully copied, or repurposed for unrelated marketing activities.
            </p>
          </div>
        </section>

        {/* 7 & 8. Sharing, Disclosures & International Transfers */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">7 &amp; 8.</span> Sharing, Disclosures &amp; International Transfers
          </h2>
          <p className="leading-relaxed text-sm sm:text-base">
            Personal data may be shared where lawful with authorised education partners, external moderators, IT hosting providers, legal advisers, and public or regulatory bodies where required by law.
          </p>
          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
            ✓ CBPD UK does not sell personal data to third parties.
          </div>
          <p className="leading-relaxed text-sm">
            <strong>International Transfers:</strong> Where data is accessed or transferred outside the UK to international partners or cloud providers, CBPD UK ensures appropriate transfer mechanisms, including UK adequacy regulations or standard contractual clauses (SCCs), are maintained.
          </p>
        </section>

        {/* 9 - 11. Data Retention, Security & Breach Handling */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">9 - 11.</span> Retention, Security &amp; Data Breaches
          </h2>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              <strong>9. Data Retention:</strong> Records are retained only for as long as necessary. Certification and verification records are maintained for an extended period to enable lifetime credential verification and prevent fraud.
            </p>
            <p>
              <strong>10. Security &amp; Confidentiality:</strong> Appropriate technical and organizational measures (encryption, role-based access controls, secure backups, staff training) are implemented to protect against accidental loss or unauthorized processing.
            </p>
            <p>
              <strong>11. Personal Data Breaches:</strong> Suspected breaches are contained and investigated promptly. Where required by law, notification will be provided to the Information Commissioner&apos;s Office (ICO) and affected data subjects without undue delay.
            </p>
          </div>
        </section>

        {/* 12. Individual Data Protection Rights */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">12.</span> Individual Data Protection Rights
          </h2>
          <p className="leading-relaxed">
            Subject to statutory conditions, individuals have the right to request access to, correction of, erasure of, or restriction of their personal data, as well as the right to object to processing and request data portability.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-700/50 text-sm">
            To submit a Subject Access Request (SAR) or exercise any right, please contact <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-semibold hover:underline">info@cbpd.co.uk</a> with the subject header <em>&ldquo;Data Protection Request&rdquo;</em>.
          </div>
        </section>

        {/* 13. Responsibilities of Education Partners */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">13.</span> Responsibilities of Education Partners &amp; Channel Partners
          </h2>
          <p className="leading-relaxed">
            Approved training centres and channel partners must ensure accurate collection of learner information, provide required privacy notices, maintain strict document security, and promptly report any suspected data breaches or unauthorized disclosures to CBPD UK.
          </p>
        </section>

        {/* 14 - 16. Marketing, Children & External Links */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">14 - 16.</span> Communications, Young Learners &amp; Third Parties
          </h2>
          <div className="space-y-2 text-sm leading-relaxed">
            <p><strong>Marketing:</strong> Opt-outs are respected at all times; essential administrative notifications continue unaffected.</p>
            <p><strong>Young Learners:</strong> Where services involve individuals under 18, enhanced safeguards and parental/institutional authorizations apply.</p>
            <p><strong>Third-Party Websites:</strong> External portals operate independently under their own privacy disclosures.</p>
          </div>
        </section>

        {/* 17 & 18. Enquiries & Right to Complain */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">17 &amp; 18.</span> Enquiries &amp; Right to Complain to the ICO
          </h2>
          <p className="leading-relaxed">
            If you have concerns about our data protection practices, you have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO):
          </p>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50 dark:bg-primary-900/30 text-sm space-y-1">
            <strong className="text-slate-900 dark:text-white block font-semibold">Information Commissioner&apos;s Office (ICO)</strong>
            <p>Online Complaints: <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" className="text-brand-red font-medium hover:underline">https://ico.org.uk/make-a-complaint/</a></p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Contacting CBPD UK first is not a mandatory legal requirement for lodging a complaint with the ICO.</p>
          </div>
        </section>

        {/* 19 & 20. Contact Information & Closing Commitment */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">19 &amp; 20.</span> Contact Information &amp; Institutional Commitment
          </h2>
          <p className="leading-relaxed">
            For questions or concerns relating to this Data Protection Notice, please contact:
          </p>

          <div className="p-6 rounded-2xl bg-white dark:bg-primary-900/60 border border-slate-200 dark:border-primary-700/60 shadow-sm space-y-3">
            <div className="font-bold text-slate-900 dark:text-white text-base">
              Central Board of Professional Development (CBPD UK)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>General Privacy: <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>Certification Records: <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-medium hover:underline">assessments@cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-red shrink-0" />
                <span>Official Website: <a href="https://www.cbpd.co.uk" target="_blank" rel="noopener noreferrer" className="text-brand-red font-medium hover:underline">www.cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-red shrink-0" />
                <span>Verification Portal: <a href="/verifications" className="text-brand-red font-medium hover:underline">/verifications</a></span>
              </div>
              <div className="sm:col-span-2 flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-primary-700/50">
                <Building2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>Correspondence Address: 1 Canada Square, Canary Wharf, London E14 5DY, United Kingdom</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-primary-700/50 text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
              <strong>Commitment:</strong> CBPD UK aims to handle personal data lawfully, fairly, transparently and securely, while protecting the integrity of its certification records and the statutory rights of the individuals whose information it processes.
            </div>
          </div>
        </section>

      </div>
    </PolicyPageLayout>
  );
}
