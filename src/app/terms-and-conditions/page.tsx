import type { Metadata } from "next";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { Scale, Mail, Building2, Globe, FileText, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Central Board of Professional Development (CBPD UK)",
  description: "Official Terms and Conditions governing website usage, qualifications, institutional accreditation, certification, and verification with CBPD UK.",
};

export default function TermsAndConditionsPage() {
  return (
    <PolicyPageLayout
      title="Terms and Conditions"
      subtitle="General terms and contractual conditions governing access to our website, professional qualification frameworks, certification administration, and partner accreditations."
      activeSlug="terms-and-conditions"
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
            <span className="text-slate-500 dark:text-slate-400">Company Registration: </span>
            <strong className="text-slate-900 dark:text-white font-semibold">16442180 (England &amp; Wales)</strong>
          </div>
        </div>

        {/* 1. Introduction */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Introduction
          </h2>
          <p className="leading-relaxed">
            Welcome to the website of the Central Board of Professional Development, operating under the name CBPD UK (&ldquo;CBPD UK&rdquo;, &ldquo;CBPD&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;).
          </p>
          <p className="leading-relaxed">
            These Terms and Conditions govern your access to and use of our website, including the information, online services and resources made available through it. They also explain the general terms applicable to our professional development, qualification, certification, institutional accreditation, centre approval, learner registration and certificate verification services, where relevant.
          </p>
          <p className="leading-relaxed">
            These Terms apply to website visitors, learners, applicants, certificate holders, education partners, accredited centres, channel partners and other individuals or organisations using our services.
          </p>
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 flex items-start gap-3 text-sm text-amber-900 dark:text-amber-200">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Important Notice:</strong> These website Terms do not replace a separate written agreement or a specific qualification, assessment, accreditation or certification policy. Where a specific agreement or published policy applies to a particular service, it should be read alongside these Terms. Any conflict will be resolved by reference to the relevant agreement, the applicable policy and the law.
            </div>
          </div>
          <p className="leading-relaxed text-sm italic">
            If you do not agree with the terms governing your use of the website, please discontinue use of the website.
          </p>
        </section>

        {/* 2. About CBPD UK */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            About CBPD UK
          </h2>
          <p className="leading-relaxed">
            Central Board of Professional Development (CBPD UK) provides professional development, certification-related and institutional support services within the scope of its stated activities and applicable agreements. Our services may include:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pl-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
              <span>Professional development programmes and qualifications.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
              <span>Learner registration and certification administration.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
              <span>Institutional accreditation and education partner approval.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
              <span>Centre and channel partner relationships.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
              <span>Assessment administration and quality assurance.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
              <span>Certificate issuance and verification services.</span>
            </li>
          </ul>

          <div className="p-6 rounded-2xl bg-white dark:bg-primary-900/60 border border-slate-200 dark:border-primary-700/60 shadow-sm space-y-3 mt-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">Organisation Details</h4>
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
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Accounts Enquiries</span>
                <a href="mailto:accounts@cbpd.co.uk" className="text-brand-red font-medium hover:underline">accounts@cbpd.co.uk</a>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Website</span>
                <a href="https://www.cbpd.co.uk" target="_blank" rel="noopener noreferrer" className="text-brand-red font-medium hover:underline">
                  https://www.cbpd.co.uk
                </a>
              </div>
              <div className="sm:col-span-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Correspondence Address</span>
                <span className="text-slate-800 dark:text-slate-200">1 Canada Square, Canary Wharf, London E14 5DY, United Kingdom</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Definitions */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">&ldquo;Website&rdquo;</strong>
              https://www.cbpd.co.uk and any related website pages or online services operated by CBPD UK.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">&ldquo;Learner&rdquo;</strong>
              An individual registered or applying to participate in a programme, assessment or certification process administered by or through CBPD UK.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">&ldquo;Certificate Holder&rdquo;</strong>
              An individual to whom a certificate or other credential has been issued through an applicable CBPD UK process.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">&ldquo;Education Partner&rdquo; or &ldquo;Centre&rdquo;</strong>
              An institution or organisation approved, accredited or otherwise authorised to work with CBPD UK under the applicable arrangement.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">&ldquo;Channel Partner&rdquo;</strong>
              An organisation or individual authorised under a separate agreement to promote or support specified CBPD UK services.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">&ldquo;Programme&rdquo;</strong>
              A course, qualification, professional development programme or other learning activity described by CBPD UK or an authorised partner.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30 sm:col-span-2">
              <strong className="block text-slate-900 dark:text-white mb-1">&ldquo;Certification Services&rdquo; &amp; &ldquo;Policies&rdquo;</strong>
              The applicable learner registration, assessment administration, certification, record management and verification services, together with official qualification specifications and published regulatory documents.
            </div>
          </div>
        </section>

        {/* 4. Use of the Website */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Use of the Website
          </h2>
          <p className="leading-relaxed">You may use our website for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
            <li>Use the website in a way that breaches applicable law or infringes another person&apos;s rights.</li>
            <li>Attempt to gain unauthorised access to our website, systems, databases, accounts or records.</li>
            <li>Interfere with website security, availability or functionality.</li>
            <li>Upload or transmit malicious software, harmful code or unauthorised material.</li>
            <li>Submit false, misleading, fraudulent or deliberately inaccurate information.</li>
            <li>Misuse the certificate verification service or attempt to obtain confidential information without authorisation.</li>
            <li>Copy, reproduce, distribute or commercially exploit website content except as permitted by law or with our written permission.</li>
            <li>Impersonate CBPD UK, its representatives, an accredited centre or another individual or organisation.</li>
            <li>Use our name, logo, certificates or accreditation marks in a misleading manner.</li>
          </ul>
          <p className="leading-relaxed text-sm">
            We may take reasonable and proportionate action to protect the website, our users and our services where we reasonably suspect misuse or a breach of these Terms.
          </p>
        </section>

        {/* 5. Information Published on the Website */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Information Published on the Website
          </h2>
          <p className="leading-relaxed">
            We aim to ensure that the information published on our website is accurate, clear and up to date. However, website content is provided for general information and may be revised to reflect changes in programmes, policies, services, fees, operational arrangements or applicable requirements.
          </p>
          <p className="leading-relaxed">
            Unless expressly stated otherwise in a binding agreement, website descriptions, promotional materials and general guidance do not constitute a guarantee that a particular programme, qualification, certificate or service will be suitable for every purpose or accepted by every employer, institution, professional body or authority.
          </p>
          <p className="leading-relaxed text-sm">
            Users should confirm the relevant programme requirements, eligibility criteria, assessment arrangements, fees and certification conditions before making a decision or payment.
          </p>
        </section>

        {/* 6. Qualifications, Programmes and Certification */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Qualifications, Programmes and Certification
          </h2>
          <div className="space-y-4 text-sm sm:text-base">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1.5">
              <strong className="text-slate-900 dark:text-white block">6.1 Programme information</strong>
              <p className="leading-relaxed">
                Each programme may have its own eligibility criteria, learning requirements, assessment arrangements, completion requirements and certification conditions. Learners and education partners are responsible for reviewing the applicable programme information. Participation does not automatically guarantee successful completion or the award of a certificate.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1.5">
              <strong className="text-slate-900 dark:text-white block">6.2 Award and issue of certificates</strong>
              <p className="leading-relaxed">
                A certificate or credential will be issued only where the applicable requirements have been satisfied and relevant approval, assessment, registration, documentation and payment conditions are completed. CBPD UK may request supporting documentation where reasonably necessary to verify eligibility.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1.5">
              <strong className="text-slate-900 dark:text-white block">6.3 Accuracy of learner information</strong>
              <p className="leading-relaxed">
                Learners and submitting centres must ensure that information supplied for registration, assessment and certification is accurate, complete and supported by appropriate documentation. Requests to amend certificates may be subject to verification and published administrative fees.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-1.5">
              <strong className="text-slate-900 dark:text-white block">6.4 Certificate authenticity &amp; Fraud Prevention</strong>
              <p className="leading-relaxed">
                A certificate should not be altered, duplicated, reproduced or represented as valid where its authenticity or status has not been established. Where credible evidence of fraud, material error, unauthorised alteration or serious procedural irregularity arises, CBPD UK may investigate and suspend, correct, withdraw or cancel a certificate under its applicable procedures.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Recognition and Status of Qualifications */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Recognition and Status of Qualifications
          </h2>
          <p className="leading-relaxed">
            The recognition, acceptance or professional value of a qualification may depend on the qualification itself, the issuing organisation, the receiving institution, the employer, the relevant professional body and the rules of the country or jurisdiction concerned.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-700/50 space-y-2 text-sm">
            <p className="font-semibold text-slate-900 dark:text-white">Unless expressly and accurately stated for a particular qualification, CBPD UK does not guarantee that every qualification or certificate will be:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Recognised by every university or educational institution.</li>
              <li>Accepted by every employer or professional body.</li>
              <li>Equivalent to a regulated qualification or academic degree.</li>
              <li>Accepted for immigration, licensing, employment, admission or professional registration.</li>
              <li>Automatically transferable to another awarding organisation or education system.</li>
            </ul>
          </div>
          <p className="leading-relaxed text-xs text-slate-500 dark:text-slate-400">
            The regulatory status of a qualification must be checked against the relevant official register where applicable. No statement on this website should be interpreted as a claim of government approval, Ofqual regulation, university equivalence or universal international recognition unless that specific claim is expressly supported by the relevant authoritative evidence.
          </p>
        </section>

        {/* 8. Institutional Accreditation and Education Partners */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Institutional Accreditation and Education Partners
          </h2>
          <div className="space-y-3 text-sm sm:text-base">
            <p><strong>8.1 Applications and approval:</strong> Institutions seeking accreditation, centre approval, membership or partnership must complete the applicable application process. An application does not guarantee approval.</p>
            <p><strong>8.2 Scope of approval:</strong> Any accreditation or approval granted is strictly limited to the scope, conditions and validity period specified in the agreement. It does not mean every programme offered by the institution is individually approved.</p>
            <p><strong>8.3 Use of CBPD UK branding:</strong> Approved centres may use branding and marks only within the scope of their written authorisation. They must not claim unauthorized recognition or alter certificate designs.</p>
            <p><strong>8.4 Monitoring and quality assurance:</strong> CBPD UK may conduct monitoring, documentation checks and quality assurance reviews. Corrective action or suspension may follow any identified non-compliance.</p>
            <p><strong>8.5 Partner responsibilities:</strong> Partners are responsible for teaching arrangements, facilities, staff and advertising. Partners must never promise a learner will receive a certificate regardless of assessment criteria.</p>
          </div>
        </section>

        {/* 9. Channel Partners and Representatives */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Channel Partners and Representatives
          </h2>
          <p className="leading-relaxed">
            A channel partner may promote or support CBPD UK services only within the scope of a valid written authorisation or agreement. Unless expressly authorised in writing, a channel partner may not enter contracts on behalf of CBPD UK, make binding guarantees, modify assessment requirements, or independently issue certificates.
          </p>
        </section>

        {/* 10. Learner Responsibilities and Academic Integrity */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Learner Responsibilities and Academic Integrity
          </h2>
          <p className="leading-relaxed">
            Learners must comply with all programme instructions and avoid plagiarism, impersonation, collusion, falsification, and other forms of academic misconduct. Suspected malpractice or fraud will be investigated under our formal quality assurance procedures.
          </p>
        </section>

        {/* 11. Fees, Payments and Invoices */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Fees, Payments and Invoices
          </h2>
          <p className="leading-relaxed">
            Applicable fees will be communicated through relevant programme information, fee schedules, invoices or agreements. A payment receipt confirms the recorded financial transaction; it does not, by itself, establish successful assessment or entitlement to a certificate. Certification may be held until outstanding dues are settled.
          </p>
        </section>

        {/* 12. Cancellations, Refunds and Consumer Rights */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Cancellations, Refunds and Consumer Rights
          </h2>
          <p className="leading-relaxed">
            Cancellation and refund arrangements vary according to the service purchased, work already performed, and applicable contractual conditions. Refund requests must be directed to accounts with the relevant transaction reference.
          </p>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-700/50 text-sm">
            Nothing in these Terms excludes or limits any consumer rights that cannot lawfully be excluded or limited. Where the Consumer Rights Act 2015 or other statutory consumer protection legislation applies, statutory rights remain fully in force.
          </div>
        </section>

        {/* 13. Assessment Decisions, Complaints and Appeals */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Assessment Decisions, Complaints and Appeals
          </h2>
          <p className="leading-relaxed">
            Where a learner wishes to challenge an assessment outcome, administrative decision or service issue, they should follow our dedicated <a href="/complaints-appeals-policy" className="text-brand-red font-semibold hover:underline">Complaints &amp; Appeals Policy</a>. Submissions must adhere to designated procedures and deadlines.
          </p>
        </section>

        {/* 14. Certificate Verification and Public Records */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Certificate Verification and Public Records
          </h2>
          <p className="leading-relaxed">
            CBPD UK provides digital verification tools to help employers and institutions confirm the authenticity and status of official certificates. Users must not scrape data, interfere with verification servers, or misrepresent verification results. Suspected fraudulent certificates should be reported immediately to <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-medium hover:underline">assessments@cbpd.co.uk</a>.
          </p>
        </section>

        {/* 15. Intellectual Property and Branding */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Intellectual Property and Branding
          </h2>
          <p className="leading-relaxed">
            All text, logos, trademarks, website layout, qualification frameworks, certificates, and branding are the property of CBPD UK. You must not reproduce, modify, distribute, or commercially exploit protected materials without prior written authorization. Permission requests should be sent to <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a>.
          </p>
        </section>

        {/* 16. Privacy and Data Protection */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Privacy and Data Protection
          </h2>
          <p className="leading-relaxed">
            Personal data is handled in strict compliance with our <a href="/privacy-policy" className="text-brand-red font-semibold hover:underline">Privacy Policy</a>, <a href="/cookies-policy" className="text-brand-red font-semibold hover:underline">Cookies Policy</a>, and applicable UK GDPR requirements.
          </p>
        </section>

        {/* 17. Website Availability and Security */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Website Availability and Security
          </h2>
          <p className="leading-relaxed">
            While we strive for continuous availability, uninterrupted access cannot be guaranteed. Access may be temporarily suspended for scheduled maintenance, updates, or security reasons. Users are responsible for safeguarding their own login credentials.
          </p>
        </section>

        {/* 18. Third-Party Websites and Services */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Third-Party Websites and Services
          </h2>
          <p className="leading-relaxed">
            External links are provided for convenience only. CBPD UK has no control over third-party sites and accepts no responsibility for their content, privacy policies, or practices.
          </p>
        </section>

        {/* 19. Limitation of Liability */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation, or any mandatory consumer rights that cannot be excluded under UK law.
          </p>
          <p className="leading-relaxed text-sm">
            Subject to statutory consumer rights, CBPD UK will not be liable for losses arising from user misuse, inaccurate third-party information, technical interruptions beyond reasonable control, or independent recognition decisions made by external universities or employers.
          </p>
        </section>

        {/* 20. Indemnity and Unauthorised Use */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Indemnity and Unauthorised Use
          </h2>
          <p className="leading-relaxed">
            To the extent permitted by applicable law, business users, centres, and partners may be responsible for losses directly arising from material breach of agreement, fraud, or unauthorized use of CBPD UK intellectual property.
          </p>
        </section>

        {/* 21. Suspension, Termination and Withdrawal of Access */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Suspension, Termination and Withdrawal of Access
          </h2>
          <p className="leading-relaxed">
            We reserve the right to restrict or terminate access where necessary to safeguard network security, address suspected fraud, or respond to serious breaches of these Terms.
          </p>
        </section>

        {/* 22. Changes to These Terms */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Changes to These Terms
          </h2>
          <p className="leading-relaxed">
            We may revise these Terms from time to time. The latest version will be published on this page with an updated revision date. Continued use of the website following published revisions constitutes acceptance of the modified Terms.
          </p>
        </section>

        {/* 23 - 25. Legal Mechanics */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Legal Framework, Severability &amp; Jurisdiction
          </h2>
          <div className="space-y-3 text-sm">
            <p><strong>23. Severability:</strong> If any provision of these Terms is deemed unlawful or unenforceable, that provision will be severed or interpreted to the minimum extent necessary, leaving remaining provisions in full force.</p>
            <p><strong>24. No Waiver:</strong> Failure or delay by CBPD UK in enforcing any right shall not be construed as a waiver of that or any subsequent right.</p>
            <p><strong>25. Governing Law:</strong> These Terms and any disputes arising from them are governed exclusively by the laws of England and Wales, and subject to the jurisdiction of the English courts, without prejudice to mandatory statutory consumer protections.</p>
          </div>
        </section>

        {/* 26. Contact Information */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            Contact Information
          </h2>
          <p className="leading-relaxed">
            For questions about these Terms and Conditions, website use, certification services, or institutional partnerships, please contact:
          </p>

          <div className="p-6 rounded-2xl bg-white dark:bg-primary-900/60 border border-slate-200 dark:border-primary-700/60 shadow-sm space-y-3">
            <div className="font-bold text-slate-900 dark:text-white text-base">
              Central Board of Professional Development (CBPD UK)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>General: <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>Assessments: <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-medium hover:underline">assessments@cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>Accounts: <a href="mailto:accounts@cbpd.co.uk" className="text-brand-red font-medium hover:underline">accounts@cbpd.co.uk</a></span>
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
              Please include the relevant learner, certificate, centre or invoice reference where appropriate, and avoid sending unnecessary sensitive personal information by email.
            </p>
          </div>
        </section>

      </div>
    </PolicyPageLayout>
  );
}
