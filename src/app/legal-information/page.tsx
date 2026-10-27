import type { Metadata } from "next";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { Building2, Mail, Globe, ShieldCheck, CheckCircle2, AlertTriangle, ExternalLink, Scale, FileText, Stamp } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Information | Central Board of Professional Development (CBPD UK)",
  description: "Official statutory identity, corporate registration, regulatory alignment, apostille legalisation, and legal disclosures of CBPD UK.",
};

export default function LegalInformationPage() {
  return (
    <PolicyPageLayout
      title="Legal Information"
      subtitle="Statutory corporate identity, governance credentials, regulatory alignment, apostille legalisation, and legal disclosures of the Central Board of Professional Development."
      activeSlug="legal-information"
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
            <Building2 className="w-4 h-4 text-brand-red" />
            <span className="text-slate-500 dark:text-slate-400">Registered Office: </span>
            <span className="text-slate-900 dark:text-white font-semibold">1 Canada Square, London E14 5DY</span>
          </div>
        </div>

        {/* 1. About This Legal Information Page */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">1.</span> About This Legal Information Page
          </h2>
          <p className="leading-relaxed">
            This Legal Information page provides important information concerning the identity, activities, website, qualifications, certification services, institutional partnerships and legal notices of the Central Board of Professional Development (CBPD UK).
          </p>
          <p className="leading-relaxed">
            It is intended to help learners, education providers, institutional partners, employers, professional organisations and members of the public understand the nature and scope of CBPD UK&apos;s activities.
          </p>
          <p className="leading-relaxed text-sm text-slate-500 dark:text-slate-400 italic">
            This page should be read alongside the CBPD UK <a href="/terms-and-conditions" className="text-brand-red font-medium hover:underline">Terms and Conditions</a>, <a href="/privacy-policy" className="text-brand-red font-medium hover:underline">Privacy Policy</a>, <a href="/data-protection-notice" className="text-brand-red font-medium hover:underline">Data Protection Notice</a>, <a href="/cookies-policy" className="text-brand-red font-medium hover:underline">Cookies Policy</a>, <a href="/copyright-notice" className="text-brand-red font-medium hover:underline">Copyright Notice</a>, and <a href="/complaints-appeals-policy" className="text-brand-red font-medium hover:underline">Complaints &amp; Appeals Policy</a>, as applicable.
          </p>
        </section>

        {/* 2. Organisation Details Card */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">2.</span> Organisation Details
          </h2>

          <div className="p-6 rounded-2xl bg-white dark:bg-primary-900/60 border border-slate-200 dark:border-primary-700/60 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Organisation Name</span>
                <span className="font-bold text-slate-900 dark:text-white">Central Board of Professional Development (CBPD UK)</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Company Registration Number</span>
                <span className="font-bold text-slate-900 dark:text-white">16442180</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">General Enquiries</span>
                <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Assessment &amp; Certification</span>
                <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-medium hover:underline">assessments@cbpd.co.uk</a>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Accounts &amp; Payments</span>
                <a href="mailto:accounts@cbpd.co.uk" className="text-brand-red font-medium hover:underline">accounts@cbpd.co.uk</a>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Official Website</span>
                <a href="https://www.cbpd.co.uk" target="_blank" rel="noopener noreferrer" className="text-brand-red font-medium hover:underline">
                  https://www.cbpd.co.uk
                </a>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Certificate Verification</span>
                <a href="/verifications" className="text-brand-red font-medium hover:underline">
                  https://www.cbpd.co.uk/verifications
                </a>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Jurisdiction</span>
                <span className="text-slate-800 dark:text-slate-200">England and Wales, United Kingdom</span>
              </div>
              <div className="sm:col-span-2 pt-2 border-t border-slate-200 dark:border-primary-700/50">
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Business Address</span>
                <span className="text-slate-800 dark:text-slate-200">1 Canada Square, Canary Wharf, London E14 5DY, United Kingdom</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Nature of the Organisation */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">3.</span> Nature of the Organisation
          </h2>
          <p className="leading-relaxed">
            CBPD UK operates in the professional development, education, assessment and certification sector. Its activities may include the development and administration of professional courses, certification services, institutional membership, education partner relationships, programme review and quality assurance.
          </p>
          <p className="leading-relaxed">
            CBPD UK aims to promote structured learning, professional development, transparent certification procedures and appropriate quality assurance practices across the sectors it serves.
          </p>
          <p className="leading-relaxed text-sm bg-slate-50 dark:bg-primary-900/30 p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/50">
            The description of CBPD UK as a UK professional awarding and certification body refers to its organisational activities and services. It does not, by itself, establish statutory status, government recognition, regulatory approval or recognition by an external awarding or regulatory authority.
          </p>
        </section>

        {/* 4. Qualifications, Ofqual Alignment and the CQF */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">4.</span> Qualifications, Ofqual Alignment and the CBPD Qualification Framework
          </h2>
          <p className="leading-relaxed">
            CBPD UK develops and offers professional development courses and qualifications designed with reference to relevant UK qualification principles, industry expectations and, where applicable, selected aspects of the Ofqual regulatory framework.
          </p>
          <p className="leading-relaxed">
            Where a course has been developed with reference to specific qualification standards, levels or requirements, the nature and scope of that alignment should be described in the relevant programme documentation. CBPD UK also operates its own qualification arrangements, including the CBPD Qualification Framework (CQF), subject to the applicable programme specifications, assessment requirements and quality assurance procedures.
          </p>
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-2 text-amber-950 dark:text-amber-200 text-sm">
            <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              Important Regulatory Information:
            </div>
            <p className="leading-relaxed">
              Alignment with Ofqual-related principles, qualification levels or framework requirements does not, by itself, mean that a course or qualification is regulated by Ofqual. Ofqual-regulated status applies only where the relevant regulatory requirements have been met and the qualification is offered by an appropriately recognised awarding organisation within its scope of recognition.
            </p>
            <p className="leading-relaxed">
              Unless expressly verified through the relevant official register and supporting documentation, CBPD UK courses and qualifications must not be represented as Ofqual-regulated, Ofqual-approved or government-approved.
            </p>
            <div className="pt-1">
              Official reference: <a href="https://www.gov.uk/find-a-regulated-qualification" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-amber-900">https://www.gov.uk/find-a-regulated-qualification</a>
            </div>
          </div>
        </section>

        {/* 5. Recognition, Acceptance and Use of Certificates */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">5.</span> Recognition, Acceptance and Use of Certificates
          </h2>
          <p className="leading-relaxed">
            The acceptance of a certificate may depend on the requirements of the receiving employer, educational institution, professional body, licensing authority or government agency.
          </p>
          <p className="leading-relaxed">
            CBPD UK provides certification and verification services within the scope of its own activities and authorisations. It cannot guarantee that every certificate will be accepted by every employer, university, regulator, professional association or government authority.
          </p>
          <p className="leading-relaxed text-sm">
            Individuals intending to use a certificate for employment, further education, professional registration, overseas study or another formal purpose should confirm the receiving organisation&apos;s requirements in advance.
          </p>
        </section>

        {/* 6. Institutional Membership and Accreditation */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">6.</span> Institutional Membership and Accreditation
          </h2>
          <p className="leading-relaxed">
            CBPD UK offers institutional membership, education partner arrangements, programme accreditation and institutional approval under its own policies and procedures.
          </p>
          <p className="leading-relaxed text-sm">
            Institutional membership or accreditation issued by CBPD UK should not be interpreted as government approval, statutory accreditation or recognition by an external regulator unless such status is independently established and expressly documented. Institutions must describe their relationship accurately and must not make claims exceeding the scope of their current authorisation.
          </p>
        </section>

        {/* 7. Channel Partners and Education Partners */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">7.</span> Channel Partners and Education Partners
          </h2>
          <p className="leading-relaxed">
            CBPD UK works with authorised channel partners, education providers, and institutional representatives. A partnership does not automatically confer authority to issue certificates, approve qualifications, or represent CBPD UK beyond the scope of the written agreement. Partners must provide accurate information about fees, programme requirements, and certification procedures.
          </p>
        </section>

        {/* 8. Certificate Verification and Authenticity */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">8.</span> Certificate Verification and Authenticity
          </h2>
          <p className="leading-relaxed">
            CBPD UK maintains a verification portal (<a href="/verifications" className="text-brand-red font-medium hover:underline">https://www.cbpd.co.uk/verifications</a>) to support checking certificate details and certification status. Users should verify details against official records and contact us if discrepancies arise.
          </p>
          <p className="leading-relaxed text-sm">
            A certificate, logo, seal, screenshot or digital image that resembles CBPD UK material should not be treated as conclusive proof of authenticity without official portal verification. Unauthorised alteration or fabrication of certification documents will result in investigation and formal action.
          </p>
        </section>

        {/* 9. Apostille and Document Legalisation */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">9.</span> Apostille and Document Legalisation
          </h2>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30 space-y-2 text-sm leading-relaxed">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <Stamp className="w-4 h-4 text-brand-red" />
              UK Legalisation &amp; Apostille Process:
            </div>
            <p>
              Where a CBPD UK document is eligible for legalisation, the relevant process and requirements are determined by the competent authority and the intended use of the document.
            </p>
            <p>
              A UK apostille is issued through the competent UK legalisation process and verifies the relevant signature, seal or stamp within the scope of that process. It does not independently validate the academic quality, regulatory status, equivalence or acceptance of the underlying qualification.
            </p>
            <p>
              An apostille does not guarantee acceptance by every country, employer, university, or professional body. Learners should confirm applicable requirements with the receiving authority before arranging legalisation.
            </p>
          </div>
        </section>

        {/* 10 - 14. Accuracy, IP, Privacy, Disputes & External Links */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">10 - 14.</span> Operational &amp; Legal Governance
          </h2>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              <strong>10. Website Information:</strong> Website content is provided for general information and should be read together with relevant programme specifications and current policies.
            </p>
            <p>
              <strong>11. Intellectual Property:</strong> Protected under copyright law; unauthorised use of logos, marks, or certificate templates is strictly prohibited. See <a href="/copyright-notice" className="text-brand-red font-medium hover:underline">Copyright Notice</a>.
            </p>
            <p>
              <strong>12. Data Protection:</strong> Personal data is processed under UK GDPR as explained in the <a href="/privacy-policy" className="text-brand-red font-medium hover:underline">Privacy Policy</a> and <a href="/data-protection-notice" className="text-brand-red font-medium hover:underline">Data Protection Notice</a>.
            </p>
            <p>
              <strong>13. Complaints &amp; Appeals:</strong> Procedural disputes should be directed to the <a href="/complaints-appeals-policy" className="text-brand-red font-medium hover:underline">Complaints &amp; Appeals Policy</a>.
            </p>
            <p>
              <strong>14. External Websites:</strong> External links are provided for convenience; CBPD UK accepts no responsibility for third-party websites or their content.
            </p>
          </div>
        </section>

        {/* 15 - 17. Legal Rights, Applicable Law & Updates */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">15 - 17.</span> Limitation of Advice &amp; Governing Law
          </h2>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>
              <strong>15. Limitation of Information:</strong> Website materials do not constitute individual legal, immigration, educational equivalence, or professional regulatory advice.
            </p>
            <p>
              <strong>16. Applicable Law:</strong> Contractual services are governed by the laws of England and Wales, subject to mandatory statutory consumer protections.
            </p>
            <p>
              <strong>17. Updates:</strong> CBPD UK may amend this page periodically to reflect organisational, operational, or legal developments.
            </p>
          </div>
        </section>

        {/* 18. Contact Information & Transparency Statement */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">18.</span> Contact Information &amp; Transparency Statement
          </h2>
          <p className="leading-relaxed">
            For enquiries concerning the legal information published by CBPD UK, please contact:
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
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>Assessment &amp; Certification: <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-medium hover:underline">assessments@cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>Accounts &amp; Payments: <a href="mailto:accounts@cbpd.co.uk" className="text-brand-red font-medium hover:underline">accounts@cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-red shrink-0" />
                <span>Verification Portal: <a href="/verifications" className="text-brand-red font-medium hover:underline">/verifications</a></span>
              </div>
              <div className="sm:col-span-2 flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-primary-700/50">
                <Building2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>Business Address: 1 Canada Square, Canary Wharf, London E14 5DY, United Kingdom</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-primary-700/50 text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
              <strong>Transparency Statement:</strong> CBPD UK aims to provide clear information about its identity, certification activities, qualification arrangements, institutional partnerships and applicable policies. Learners, institutions and other stakeholders are encouraged to verify the specific status and acceptance requirements of any qualification or certification before relying on it for a formal purpose.
            </div>
          </div>
        </section>

      </div>
    </PolicyPageLayout>
  );
}
