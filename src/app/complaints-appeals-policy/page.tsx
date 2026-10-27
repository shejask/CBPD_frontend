import type { Metadata } from "next";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { HelpCircle, Mail, Building2, Globe, Clock, CheckCircle2, AlertTriangle, ShieldCheck, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Complaints & Appeals Policy | Central Board of Professional Development (CBPD UK)",
  description: "Official Complaints & Appeals Policy of CBPD UK establishing fair, transparent, and objective procedures for student and institutional dispute resolution.",
};

export default function ComplaintsAppealsPolicyPage() {
  return (
    <PolicyPageLayout
      title="Complaints & Appeals Policy"
      subtitle="A clear, fair, and accessible framework for submitting, investigating, and resolving student appeals, institutional complaints, and administrative reviews."
      activeSlug="complaints-appeals-policy"
    >
      <div className="space-y-10 text-slate-700 dark:text-slate-300">
        
        {/* Policy Metadata Card */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/40 border border-slate-200 dark:border-primary-700/60 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-red" />
            <span className="text-slate-500 dark:text-slate-400">Policy Owner: </span>
            <strong className="text-slate-900 dark:text-white font-semibold">Quality Assurance and Certification</strong>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-brand-red" />
            <span className="text-slate-500 dark:text-slate-400">Official Website: </span>
            <a href="https://www.cbpd.co.uk" target="_blank" rel="noopener noreferrer" className="text-brand-red font-semibold hover:underline">
              https://www.cbpd.co.uk
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-red" />
            <span className="text-slate-500 dark:text-slate-400">Appeals Enquiries: </span>
            <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-semibold hover:underline">
              assessments@cbpd.co.uk
            </a>
          </div>
        </div>

        {/* 1. Policy Statement */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Policy Statement
          </h2>
          <p className="leading-relaxed">
            Central Board of Professional Development (CBPD UK) is committed to maintaining high standards of professionalism, fairness, transparency, accountability and quality assurance across its professional development, assessment, certification, institutional accreditation and partnership activities.
          </p>
          <p className="leading-relaxed">
            We recognise that concerns may arise concerning our services, decisions, procedures, staff, accredited education partners or certification processes. We are committed to providing a clear and accessible process through which such concerns can be raised, reviewed and resolved fairly.
          </p>
          <p className="leading-relaxed">
            This Complaints &amp; Appeals Policy establishes the principles and procedures CBPD UK uses to receive, assess, investigate and respond to complaints and appeals. All matters will be handled objectively, confidentially and without unfair discrimination or retaliation. Decisions will be based on the available evidence, the applicable policies and the circumstances of each case.
          </p>
          <p className="leading-relaxed text-sm">
            CBPD UK will use the outcomes of complaints and appeals, where appropriate, to identify areas for improvement and strengthen its quality assurance arrangements.
          </p>
        </section>

        {/* 2. Purpose of This Policy */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Purpose of This Policy
          </h2>
          <p className="leading-relaxed">The purpose of this policy is to:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Provide a clear and accessible process for submitting complaints and appeals.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Ensure concerns are handled fairly, consistently and within reasonable timescales.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Protect the rights and legitimate interests of learners, institutions, and partners.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Establish clear responsibilities for the review and investigation of complaints.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Provide an appropriate review process for eligible assessment and certification appeals.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Maintain accurate records of complaints, appeals, investigations and outcomes.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Identify recurring issues and implement corrective or preventive action.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>Support continuous improvement in CBPD UK&apos;s quality assurance procedures.</span>
            </li>
          </ul>
        </section>

        {/* 3. Scope of This Policy */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Scope of This Policy
          </h2>
          <p className="leading-relaxed">This policy applies, as relevant, to:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
            <li>Learners and certificate holders.</li>
            <li>Applicants and prospective learners.</li>
            <li>Accredited education partners and approved centres.</li>
            <li>Channel partners and institutional representatives.</li>
            <li>Employers or other parties raising legitimate certificate verification concerns.</li>
            <li>Individuals or organisations receiving services from CBPD UK.</li>
          </ul>
          <p className="leading-relaxed text-sm">
            This policy covers complaints and appeals relating to services provided or administered by CBPD UK. Where a programme is delivered, assessed or awarded under the authority of another awarding organisation, regulator or institution, the relevant organisation&apos;s procedures may apply. CBPD UK will explain the appropriate route where a matter falls outside its own authority.
          </p>
        </section>

        {/* 4. Definitions */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Complaint</strong>
              An expression of dissatisfaction about a service, action, omission, administrative process, conduct or other matter within CBPD UK&apos;s responsibility where a response or resolution is requested.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Appeal</strong>
              A formal request to review a specified decision made by CBPD UK or, where expressly permitted, a decision made under a process for which CBPD UK has responsibility.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Assessment Decision</strong>
              A decision concerning assessment results, eligibility, assessment procedures or another outcome covered by the applicable assessment arrangements.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Certification Decision</strong>
              A decision concerning the issue, amendment, suspension, withdrawal or status of a certificate or credential within CBPD UK&apos;s authority.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Complainant / Appellant</strong>
              The individual or organisation submitting a formal complaint or appeal.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Working Day</strong>
              A weekday excluding public holidays applicable to the relevant CBPD UK office.
            </div>
          </div>
        </section>

        {/* 5. Principles of Fair Handling */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Principles of Fair Handling
          </h2>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20">
              <strong className="text-slate-900 dark:text-white block mb-1">Fairness and impartiality</strong>
              Each matter is considered objectively based on relevant evidence and applicable requirements. The reviewer will not be the sole individual responsible for the original decision.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20">
              <strong className="text-slate-900 dark:text-white block mb-1">Accessibility</strong>
              Complaints and appeals may be submitted in writing. Reasonable adjustments are made for individuals requiring assistance.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20">
              <strong className="text-slate-900 dark:text-white block mb-1">Confidentiality</strong>
              Information is restricted to individuals who reasonably need it to investigate, decide, or administer the case.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20">
              <strong className="text-slate-900 dark:text-white block mb-1">Timeliness</strong>
              Target timescales are observed for acknowledgement (within 5 working days) and substantive resolution (within 20 working days).
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20">
              <strong className="text-slate-900 dark:text-white block mb-1">Evidence-based decisions &amp; Protection against retaliation</strong>
              Decisions are grounded in available records and agreements. No person will be disadvantaged or retaliated against for raising a genuine concern in good faith.
            </div>
          </div>
        </section>

        {/* 6 & 7. What Can Be Complained About & Appealed */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Scope of Complaints and Appeals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base text-brand-red">
                What Can Be Complained About:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Quality, accuracy or timeliness of CBPD UK services.</li>
                <li>Administrative errors in registration or certification records.</li>
                <li>Delays in processing applications or verification requests.</li>
                <li>Communication, customer care, or staff conduct.</li>
                <li>Partner centre conduct relating to CBPD UK activities.</li>
                <li>Misuse of branding, certificates or accreditation claims.</li>
                <li>Suspected malpractice, fraud, or procedural failure.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base text-brand-blue">
                What Can Be Formally Appealed:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Assessment or certification decisions where rules permit.</li>
                <li>Learner eligibility or registration rejection decisions.</li>
                <li>Decisions to correct, suspend, withdraw or cancel certificates.</li>
                <li>Accreditation, centre approval, or partnership decisions.</li>
                <li>Demonstrable failure to follow published procedure.</li>
                <li>Material administrative errors or unconsidered evidence.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Matters Outside Scope */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Matters Outside the Scope of This Policy
          </h2>
          <p className="leading-relaxed text-sm">
            This policy does not replace external awarding bodies&apos; independent appeals processes, regulator formal proceedings, commercial contractual arbitration, or court litigation. Routine service queries and minor administrative corrections should be addressed directly to the operational support desk.
          </p>
        </section>

        {/* 9 & 10. Complaint Handling Procedure */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            How to Submit a Complaint &amp; Handling Procedure
          </h2>
          <p className="leading-relaxed">
            Complaints should be submitted in writing by email to <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a> (or <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-medium hover:underline">assessments@cbpd.co.uk</a> for assessment matters) with the subject line <strong>&ldquo;Formal Complaint – CBPD UK&rdquo;</strong>.
          </p>

          <div className="space-y-3 text-sm">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30 flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
              <div>
                <strong>Stage 1: Receipt and Acknowledgement</strong>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Target: within 5 working days. Formal acknowledgement of receipt, case allocation, and indicative timeline.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30 flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
              <div>
                <strong>Stage 2: Initial Review &amp; Informal Resolution</strong>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Assessing severity and exploring swift resolution where straightforward clarification or correction is possible.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30 flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
              <div>
                <strong>Stage 3: Formal Investigation</strong>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Examining records, consulting teams, seeking partner explanations, and establishing policy compliance.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30 flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
              <div>
                <strong>Stage 4: Decision and Written Response</strong>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Target: within 20 working days. Detailed written response explaining findings, decisions, and proposed remedies.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30 flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">5</span>
              <div>
                <strong>Stage 5: Further Review Escalation</strong>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Requestable within 10 working days of outcome if material procedural errors or unaddressed evidence persist.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 11 & 12. Appeals Procedure & Academic Judgement */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Appeals Procedure &amp; Academic Judgement
          </h2>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-700/50 space-y-2 text-sm leading-relaxed">
            <p>
              An appeal must be submitted in writing within <strong>10 working days</strong> of receiving the original decision to <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-medium hover:underline">assessments@cbpd.co.uk</a> (subject: <em>&ldquo;Formal Appeal – CBPD UK&rdquo;</em>).
            </p>
            <p>
              <strong>Grounds for Appeal:</strong> Appellants must demonstrate material procedural irregularity, administrative error, unconsidered extenuating evidence, or perceived conflict of interest. Disagreement with academic or professional judgement alone does not constitute a valid ground for appeal.
            </p>
            <p>
              <strong>Timescale:</strong> Acknowledged within 5 working days; formal written outcome provided within 20 working days.
            </p>
          </div>
        </section>

        {/* 13 - 16. Partner Complaints, Malpractice & Misuse */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Centres, Malpractice &amp; Integrity
          </h2>
          <div className="space-y-3 text-sm">
            <p><strong>Accredited Centres:</strong> We review complaints concerning partner institutions regarding misleading claims, improper branding use, or assessment irregularity. Actions may include formal sanctions or termination of accreditation.</p>
            <p><strong>Malpractice &amp; Fraud:</strong> Credible concerns involving certificate forgery, assessment tampering, or fraud trigger immediate escalation to executive compliance and may be reported to competent authorities.</p>
            <p><strong>Anonymous Submissions:</strong> Assessed where sufficient actionable evidence is supplied, though verification and outcome notification may be restricted.</p>
            <p><strong>Abusive or Vexatious Claims:</strong> We protect our staff from threatening or deliberately disruptive communications while ensuring legitimate critical feedback is fairly considered.</p>
          </div>
        </section>

        {/* 17 - 20. Confidentiality, Records, Responsibilities & Amendments */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Governance, Responsibilities &amp; Reviews
          </h2>
          <div className="space-y-2 text-sm leading-relaxed">
            <p><strong>Data Protection:</strong> All records are managed under UK GDPR and retained in our secure quality assurance register to drive systemic operational improvements.</p>
            <p><strong>Stakeholder Duties:</strong> Complainants must provide truthful, complete documentation. Partner centres must fully cooperate with investigations and not discourage genuine concerns.</p>
            <p><strong>Periodic Review:</strong> This policy is reviewed annually to ensure ongoing alignment with UK educational standards and best practice.</p>
          </div>
        </section>

        {/* 21. Contact Details */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Contact Details
          </h2>
          <p className="leading-relaxed">
            For complaints, appeals, or questions regarding this policy, please contact:
          </p>

          <div className="p-6 rounded-2xl bg-white dark:bg-primary-900/60 border border-slate-200 dark:border-primary-700/60 shadow-sm space-y-3">
            <div className="font-bold text-slate-900 dark:text-white text-base">
              Central Board of Professional Development (CBPD UK)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>General Complaints: <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>Assessment Appeals: <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-medium hover:underline">assessments@cbpd.co.uk</a></span>
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
              Please include the subject line &ldquo;Formal Complaint – CBPD UK&rdquo; or &ldquo;Formal Appeal – CBPD UK&rdquo;, and provide any relevant learner, certificate, centre or application reference.
            </p>
          </div>
        </section>

      </div>
    </PolicyPageLayout>
  );
}
