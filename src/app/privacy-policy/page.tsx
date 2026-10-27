import type { Metadata } from "next";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { ShieldCheck, Mail, Building2, ExternalLink, Phone, Globe, Lock, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Central Board of Professional Development (CBPD UK)",
  description: "Official Privacy Policy of CBPD UK explaining how we collect, use, store, and protect personal data under UK GDPR and the Data Protection Act 2018.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageLayout
      title="Privacy Policy"
      subtitle="Central Board of Professional Development (CBPD UK) is committed to protecting personal information and handling it responsibly, fairly, and transparently."
      activeSlug="privacy-policy"
      lastUpdated="23 October 2026"
    >
      <div className="space-y-10 text-slate-700 dark:text-slate-300">
        
        {/* Effective Date Card */}
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-primary-900/40 border border-slate-200 dark:border-primary-700/60 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div>
            <span className="text-slate-500 dark:text-slate-400">Effective Date: </span>
            <strong className="text-slate-900 dark:text-white font-semibold">23 October 2026</strong>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400">Website: </span>
            <a href="https://www.cbpd.co.uk" target="_blank" rel="noopener noreferrer" className="text-brand-red font-semibold hover:underline">
              https://www.cbpd.co.uk
            </a>
          </div>
        </div>

        {/* 1. Introduction */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">1.</span> Introduction
          </h2>
          <p className="leading-relaxed">
            Central Board of Professional Development, operating under the name CBPD UK (&ldquo;CBPD&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;), is committed to protecting personal information and handling it responsibly, fairly and transparently.
          </p>
          <p className="leading-relaxed">
            This Privacy Policy explains how we collect, use, store, protect and share personal information when you visit our website, enquire about our services, apply for a qualification or certification, register as a learner, engage with an accredited education partner, or otherwise interact with CBPD UK.
          </p>
          <p className="leading-relaxed">
            We aim to handle personal information in accordance with applicable data protection legislation, including the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 and other applicable privacy and electronic communications requirements, as amended from time to time.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-700/50 space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white">This policy applies, as relevant, to:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-brand-red mt-1 font-bold">•</span>
                <span>Learners, candidates and certificate holders.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red mt-1 font-bold">•</span>
                <span>Applicants and prospective learners.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red mt-1 font-bold">•</span>
                <span>Accredited education partners, centres and training providers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red mt-1 font-bold">•</span>
                <span>Channel partners, institutional representatives and business contacts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red mt-1 font-bold">•</span>
                <span>Employers and other parties requesting certificate verification.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red mt-1 font-bold">•</span>
                <span>Website visitors and individuals contacting CBPD UK.</span>
              </li>
              <li className="flex items-start gap-2 md:col-span-2">
                <span className="text-brand-red mt-1 font-bold">•</span>
                <span>Representatives of organisations that work with us.</span>
              </li>
            </ul>
          </div>
          <p className="leading-relaxed text-sm italic">
            Please read this policy carefully to understand how we handle personal information and the rights that may be available to you.
          </p>
        </section>

        {/* 2. Who We Are */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">2.</span> Who We Are
          </h2>
          <p className="leading-relaxed">
            The organisation responsible for the personal information described in this Privacy Policy is:
          </p>
          
          <div className="p-6 rounded-2xl bg-white dark:bg-primary-900/60 border border-slate-200 dark:border-primary-700/60 shadow-sm space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Organisation</span>
                <span className="font-bold text-slate-900 dark:text-white">Central Board of Professional Development (CBPD UK)</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Company Registration Number</span>
                <span className="font-bold text-slate-900 dark:text-white">16442180</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Official Website</span>
                <a href="https://www.cbpd.co.uk" target="_blank" rel="noopener noreferrer" className="text-brand-red font-medium hover:underline">
                  https://www.cbpd.co.uk
                </a>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">General Enquiries</span>
                <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Assessments & Certification</span>
                <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-medium hover:underline">assessments@cbpd.co.uk</a>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Accounts Enquiries</span>
                <a href="mailto:accounts@cbpd.co.uk" className="text-brand-red font-medium hover:underline">accounts@cbpd.co.uk</a>
              </div>
              <div className="sm:col-span-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Address Used for Correspondence</span>
                <span className="text-slate-800 dark:text-slate-200">1 Canada Square, Canary Wharf, London E14 5DY, United Kingdom</span>
              </div>
            </div>
          </div>

          <p className="leading-relaxed text-sm">
            For privacy and data protection enquiries, please contact us at <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-semibold hover:underline">info@cbpd.co.uk</a> with the subject line <strong>&ldquo;Data Protection Request&rdquo;</strong>.
          </p>
          <p className="leading-relaxed text-xs text-slate-500 dark:text-slate-400">
            Before publication, CBPD UK will ensure that its registered legal name, company number and address are consistent with its official records and that this section correctly identifies the legal entity acting as data controller. Where another awarding organisation, education provider or service provider independently determines how personal information is used, that organisation may have its own responsibilities and privacy notice.
          </p>
        </section>

        {/* 3. What Personal Information We Collect */}
        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">3.</span> What Personal Information We Collect
          </h2>
          <p className="leading-relaxed">
            The information we collect depends on your relationship with CBPD UK and the services you use.
          </p>

          <div className="space-y-4">
            {/* 3.1 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                3.1 Identity and contact information
              </h3>
              <p className="text-sm">We may collect:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Full name and, where relevant, date of birth.</li>
                <li>Email address, telephone number and postal address.</li>
                <li>Country of residence and other contact details.</li>
                <li>Professional title, job role and organisation.</li>
                <li>Identification information where reasonably required for verification or certification purposes.</li>
              </ul>
            </div>

            {/* 3.2 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                3.2 Learner, assessment and certification information
              </h3>
              <p className="text-sm">Where applicable, we may process:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Learner registration and enrolment details.</li>
                <li>Learner identification or registration numbers.</li>
                <li>Course, programme and qualification details.</li>
                <li>Assessment submissions, examination results and assessment outcomes.</li>
                <li>Attendance, learning hours, completion and achievement records.</li>
                <li>Supporting documents submitted for assessment or certification.</li>
                <li>Certificate numbers, issue dates, status and verification records.</li>
                <li>Records of certificate amendments, replacement requests, withdrawal or cancellation, where applicable.</li>
                <li>Correspondence concerning assessments, results, complaints or appeals.</li>
              </ul>
            </div>

            {/* 3.3 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                3.3 Education partner and centre information
              </h3>
              <p className="text-sm">For institutions, accredited centres and business partners, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Institution or business name and contact details.</li>
                <li>Company or registration details, where relevant.</li>
                <li>Names and professional contact details of authorised representatives.</li>
                <li>Accreditation, membership and partnership application records.</li>
                <li>Programme and course information.</li>
                <li>Quality assurance, monitoring and compliance records.</li>
                <li>Agreements, invoices, payment records and business correspondence.</li>
                <li>Information required to investigate complaints, suspected malpractice or breaches of our applicable policies.</li>
              </ul>
            </div>

            {/* 3.4 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                3.4 Payment and financial information
              </h3>
              <p className="text-sm leading-relaxed">
                We may process information relating to certification fees, registration fees, accreditation charges, invoices, receipts, refunds and payment status.
              </p>
              <p className="text-sm leading-relaxed">
                Where payments are handled by a third-party payment service provider, payment card details may be collected and processed directly by that provider. CBPD UK does not intend to collect or retain full payment card details unless this is genuinely necessary and appropriately secured.
              </p>
            </div>

            {/* 3.5 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                3.5 Website and technical information
              </h3>
              <p className="text-sm leading-relaxed">
                When you visit our website, we or our service providers may collect technical information such as:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>IP address and approximate location derived from it.</li>
                <li>Browser type, device information and operating system.</li>
                <li>Pages visited, access times and referring websites.</li>
                <li>Website performance, security and diagnostic information.</li>
                <li>Cookie identifiers and related usage information, where applicable.</li>
              </ul>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                The information collected will depend on the website technology, analytics services and security tools actually in use.
              </p>
            </div>

            {/* 3.6 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                3.6 Communications and enquiries
              </h3>
              <p className="text-sm leading-relaxed">
                We may retain messages and supporting information submitted through our website, email, telephone, online meetings or other communication channels. This may include enquiries about programmes, institutional accreditation, partnerships, certification and verification.
              </p>
            </div>

            {/* 3.7 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                3.7 Sensitive or special category information
              </h3>
              <p className="text-sm leading-relaxed">
                We do not routinely seek special category personal information, such as health information, religious beliefs or biometric data. If such information is genuinely necessary for a specific purpose, we will only process it where a valid legal basis and any required additional condition apply, and with appropriate safeguards.
              </p>
              <p className="text-sm font-medium text-brand-red">
                Please do not submit sensitive personal information unless it is specifically requested and necessary for the relevant process.
              </p>
            </div>
          </div>
        </section>

        {/* 4. How We Collect Personal Information */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">4.</span> How We Collect Personal Information
          </h2>
          <p className="leading-relaxed">We may obtain personal information:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li>Directly from you through forms, applications, emails, telephone calls or other communications.</li>
            <li>Through learner registration or certification submissions made by an authorised education partner or centre.</li>
            <li>From institutions or authorised representatives involved in your training, assessment or certification.</li>
            <li>From employers or other parties where relevant to a legitimate verification request.</li>
            <li>From public registers or other lawful sources where necessary for verification, compliance or business administration.</li>
            <li>Automatically through our website, server logs, cookies and similar technologies, subject to applicable requirements.</li>
            <li>From service providers supporting our administrative, technical, payment or communication functions.</li>
          </ul>
          <p className="leading-relaxed text-sm italic">
            Where personal information is supplied by a third party, we expect the relevant party to have an appropriate basis for sharing it with us and to provide any privacy information required by law.
          </p>
        </section>

        {/* 5. Why We Use Personal Information */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">5.</span> Why We Use Personal Information
          </h2>
          <p className="leading-relaxed">
            CBPD UK processes personal information for specific and legitimate purposes, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Learner registration and administration</strong>
              To register learners, maintain records, communicate with candidates and administer relevant programmes.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Assessment and certification</strong>
              To support assessment processes, evaluate eligibility, record outcomes, issue certificates where authorised and maintain accurate certification records.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Certificate verification</strong>
              To confirm the authenticity, status or details of certificates where an appropriate verification request is made or where verification is otherwise authorised.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Institutional accreditation & partnerships</strong>
              To review applications, assess eligibility, manage relationships, monitor compliance and maintain institutional records.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Quality assurance</strong>
              To conduct appropriate checks relating to assessment standards, programme delivery, records, complaints, appeals and potential malpractice or irregularities.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Payments and accounts</strong>
              To issue invoices, reconcile payments, administer refunds where applicable and maintain financial records.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Customer service and communication</strong>
              To respond to enquiries, provide service updates, address concerns and communicate important information about our services.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Website operation and security</strong>
              To maintain website functionality, prevent unauthorised access, investigate technical issues and protect our systems.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Legal and regulatory obligations</strong>
              To comply with applicable laws, respond to lawful requests, maintain required records and establish, exercise or defend legal claims.
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/30">
              <strong className="block text-slate-900 dark:text-white mb-1">Business administration & Marketing</strong>
              To manage contracts, professional relationships, and send relevant information about programmes/events where permitted by law (opt-out available anytime).
            </div>
          </div>
          <p className="leading-relaxed text-xs text-slate-500 dark:text-slate-400 mt-2">
            We will not use personal information for a materially different purpose without providing appropriate information and obtaining consent where consent is legally required.
          </p>
        </section>

        {/* 6. Our Lawful Bases for Processing */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">6.</span> Our Lawful Bases for Processing
          </h2>
          <p className="leading-relaxed">
            Where UK data protection law applies, we will identify and rely on an appropriate lawful basis for each relevant processing activity. Depending on the circumstances, this may include:
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20">
              <strong className="text-slate-900 dark:text-white block mb-1">6.1 Contract</strong>
              <p className="text-sm leading-relaxed">
                Processing may be necessary to take steps requested by you before entering into an agreement or to perform an agreement with you. This may include learner registration, certification administration, partner agreements and payment processing.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20">
              <strong className="text-slate-900 dark:text-white block mb-1">6.2 Legal obligation</strong>
              <p className="text-sm leading-relaxed">
                Processing may be necessary to comply with applicable legal obligations, including relevant financial record-keeping, legal requests or other binding requirements.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20">
              <strong className="text-slate-900 dark:text-white block mb-1">6.3 Legitimate interests</strong>
              <p className="text-sm leading-relaxed">
                Processing may be necessary for our legitimate interests or those of a relevant third party, provided that these interests are not overridden by your rights and freedoms. These interests may include maintaining reliable learner and certification records, verifying certificates, administering partner relationships, protecting our systems, preventing fraud and responding to disputes.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20">
              <strong className="text-slate-900 dark:text-white block mb-1">6.4 Consent</strong>
              <p className="text-sm leading-relaxed">
                Where required by law, we will ask for your consent before processing personal information for the relevant purpose. You may withdraw consent at any time. Withdrawal does not affect the lawfulness of processing carried out before consent was withdrawn.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50/50 dark:bg-primary-900/20">
              <strong className="text-slate-900 dark:text-white block mb-1">6.5 Other lawful grounds</strong>
              <p className="text-sm leading-relaxed">
                Where applicable, we may rely on another lawful basis permitted under data protection legislation, including the establishment, exercise or defence of legal claims. Where special category information is involved, an additional condition for processing will be required where the law provides for this.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Learner Records and Certificate Verification */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">7.</span> Learner Records and Certificate Verification
          </h2>
          <p className="leading-relaxed">
            As part of our certification and quality assurance activities, CBPD UK may maintain records relating to learner registration, assessment outcomes, qualification details and certificates issued through its applicable processes.
          </p>
          <p className="leading-relaxed">
            Our verification service may be used to confirm certificate authenticity or status. Depending on the verification process, information displayed or confirmed may include a certificate number, learner name, qualification title, issuing date, issuing organisation and current certificate status.
          </p>
          <p className="leading-relaxed">
            We aim to limit verification disclosures to information reasonably necessary for the relevant purpose. Access to non-public learner information should be restricted to authorised individuals and handled in accordance with applicable law.
          </p>
          <p className="leading-relaxed">
            Where a learner&apos;s information has been submitted by an education partner or centre, CBPD UK may process that information to administer the relevant certification or quality assurance process.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-700/50 text-sm">
            If you believe a learner record or certificate detail is inaccurate, please contact <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-semibold hover:underline">assessments@cbpd.co.uk</a>. We will review the request and make appropriate corrections where justified and legally permissible.
          </div>
        </section>

        {/* 8. Sharing Personal Information */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">8.</span> Sharing Personal Information
          </h2>
          <p className="leading-relaxed">
            CBPD UK does not make personal information available indiscriminately. We may share information where necessary for the purposes described in this policy, including with:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li><strong>Accredited centres and education partners:</strong> Where necessary to administer a learner&apos;s registration, assessment, certification or related service.</li>
            <li><strong>Authorised verification requesters:</strong> To confirm certificate authenticity or status, subject to appropriate controls.</li>
            <li><strong>IT and hosting providers:</strong> To host, maintain, secure and support our website, systems and records.</li>
            <li><strong>Professional advisers:</strong> Such as legal, accounting or compliance advisers, where reasonably necessary.</li>
            <li><strong>Payment and financial service providers:</strong> To process or reconcile relevant transactions.</li>
            <li><strong>Communication and administration providers:</strong> Where needed to manage email, customer enquiries, document handling or business operations.</li>
            <li><strong>Public authorities and regulators:</strong> Where required by law or where disclosure is otherwise lawfully justified.</li>
            <li><strong>Other relevant parties:</strong> Where necessary to investigate suspected fraud, malpractice, security incidents or legal disputes, or to establish, exercise or defend legal claims.</li>
          </ul>
          <p className="leading-relaxed text-sm">
            Where service providers process personal information on our behalf, we will take appropriate steps to require suitable confidentiality, security and data protection arrangements.
          </p>
          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
            ✓ We do not sell personal information to third parties for their own direct marketing purposes.
          </div>
        </section>

        {/* 9. International Transfers */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">9.</span> International Transfers of Personal Information
          </h2>
          <p className="leading-relaxed">
            CBPD UK works with learners, institutions and business partners in different countries. Personal information may therefore be accessed from, or transferred to, countries outside the United Kingdom where this is necessary for our operations.
          </p>
          <p className="leading-relaxed">
            Where a transfer is subject to UK data protection requirements, we will take steps to ensure that an appropriate transfer mechanism and any required safeguards are in place. Depending on the circumstances, this may include an applicable adequacy regulation, an approved international data transfer agreement or addendum, or another lawful transfer mechanism.
          </p>
          <p className="leading-relaxed text-sm">
            You may contact us for further information about relevant international transfers and the safeguards that apply, subject to any lawful restrictions.
          </p>
        </section>

        {/* 10. How Long We Keep Personal Information */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">10.</span> How Long We Keep Personal Information
          </h2>
          <p className="leading-relaxed">
            We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including relevant certification, quality assurance, contractual, legal, financial and dispute-resolution requirements. Retention periods may differ according to the type of record and the applicable circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Learner and certification records:</strong> Retained for a period appropriate to certificate verification, record integrity and the resolution of future enquiries.</li>
            <li><strong>Assessment, complaints and appeals records:</strong> Retained for the period needed to administer the relevant process and address any subsequent review or dispute.</li>
            <li><strong>Partner accreditation and contractual records:</strong> Retained during the relationship and for an appropriate period afterwards.</li>
            <li><strong>Financial records:</strong> Retained for the period required by applicable UK tax and financial law.</li>
            <li><strong>Website enquiries and routine correspondence:</strong> Retained for a period appropriate to resolving the enquiry and maintaining business records.</li>
            <li><strong>Technical logs:</strong> Retained for periods appropriate to security, troubleshooting and system administration.</li>
          </ul>
          <p className="leading-relaxed text-sm">
            When personal information is no longer required, we will take appropriate steps to delete it, securely destroy it or anonymise it, unless continued retention is required or permitted by law. CBPD UK maintains a documented retention schedule applied consistently across systems and suppliers.
          </p>
        </section>

        {/* 11. How We Protect Personal Information */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">11.</span> How We Protect Personal Information
          </h2>
          <p className="leading-relaxed">
            We take reasonable and appropriate technical and organisational measures designed to protect personal information against unauthorised access, loss, alteration, disclosure or destruction.
          </p>
          <p className="leading-relaxed">
            Depending on the systems and services involved, these measures may include access controls, restricted permissions, secure account management, system monitoring, backups, staff guidance and appropriate supplier arrangements. Access to personal information is strictly limited to individuals who need it for authorised purposes.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-700/50 text-sm space-y-2">
            <p className="text-slate-600 dark:text-slate-300">
              No electronic transmission or storage system can be guaranteed to be completely secure. However, we will take appropriate steps to manage risks and respond to suspected personal data breaches in accordance with applicable legal requirements.
            </p>
            <p className="font-semibold text-slate-900 dark:text-white">
              If you suspect that personal information held by CBPD UK has been accessed or disclosed without authorisation, please contact <a href="mailto:info@cbpd.co.uk" className="text-brand-red hover:underline">info@cbpd.co.uk</a> promptly.
            </p>
          </div>
        </section>

        {/* 12. Your Data Protection Rights */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">12.</span> Your Data Protection Rights
          </h2>
          <p className="leading-relaxed">
            Subject to applicable law and the circumstances of the request, you may have the right to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 rounded-lg border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/20">
              <strong>Access:</strong> Request a copy of personal information we hold about you.
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/20">
              <strong>Rectification:</strong> Ask us to correct inaccurate or incomplete information.
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/20">
              <strong>Erasure:</strong> Ask us to delete personal information where legal conditions are met.
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/20">
              <strong>Restriction:</strong> Ask us to restrict certain processing in circumstances provided by law.
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/20">
              <strong>Data Portability:</strong> Request certain personal info in a structured, machine-readable format.
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/20">
              <strong>Object:</strong> Object to processing based on legitimate interests or direct marketing at any time.
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/20">
              <strong>Withdraw Consent:</strong> Withdraw consent where consent is the lawful basis for processing.
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-primary-700/60 bg-white dark:bg-primary-900/20">
              <strong>Complain:</strong> Raise a concern with the relevant data protection regulator (ICO).
            </div>
          </div>
          <p className="leading-relaxed text-sm">
            To exercise a right, email <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-semibold hover:underline">info@cbpd.co.uk</a> with the subject line <strong>&ldquo;Data Protection Request&rdquo;</strong>. We may need to verify your identity before responding. We will respond within the statutory time limit required by applicable law.
          </p>
        </section>

        {/* 13. Complaints to the Information Commissioner's Office */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">13.</span> Complaints to the Information Commissioner&apos;s Office (ICO)
          </h2>
          <p className="leading-relaxed">
            If you are concerned about how CBPD UK has handled your personal information, we encourage you to contact us first so that we can review the matter. You also have the right to raise a complaint with the UK Information Commissioner&apos;s Office (ICO), where applicable.
          </p>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-primary-700/60 bg-slate-50 dark:bg-primary-900/30 text-sm space-y-1.5">
            <strong className="text-slate-900 dark:text-white block">Information Commissioner&apos;s Office (ICO)</strong>
            <p>Website: <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-brand-red font-medium hover:underline">https://ico.org.uk/</a></p>
            <p>Telephone: <span className="font-mono font-medium">0303 123 1113</span></p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Further contact options and complaint procedures are available on the ICO website.
            </p>
          </div>
        </section>

        {/* 14. Cookies and Similar Technologies */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">14.</span> Cookies and Similar Technologies
          </h2>
          <p className="leading-relaxed">
            Our website may use cookies and similar technologies to support essential website functions, remember preferences, improve performance, maintain security and, where enabled, understand website usage.
          </p>
          <p className="leading-relaxed">
            Where consent is required, non-essential cookies and similar technologies will only be used in accordance with the applicable consent requirements. You should be able to manage your preferences through the website&apos;s cookie settings where a consent management tool is provided.
          </p>
          <p className="leading-relaxed text-sm">
            For further information, please read our dedicated <a href="/cookies-policy" className="text-brand-red font-semibold hover:underline">Cookies Policy</a>, available through the website&apos;s Policies &amp; Legal Information section.
          </p>
        </section>

        {/* 15. Marketing Communications */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">15.</span> Marketing Communications
          </h2>
          <p className="leading-relaxed">
            We may send service-related communications concerning registration, assessment, certification, accreditation, payments, verification or changes affecting an existing relationship.
          </p>
          <p className="leading-relaxed">
            Where permitted by law, we may also send marketing communications about our programmes, services, events or organisational updates. You can opt out of marketing communications at any time by using the unsubscribe option provided or by contacting <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a>.
          </p>
          <p className="leading-relaxed text-xs text-slate-500 dark:text-slate-400">
            Opting out of marketing will not prevent us from sending essential administrative or service-related communications where necessary. We will not treat a request to receive marketing communications as a condition of receiving a service unless that is lawful and appropriate in the circumstances.
          </p>
        </section>

        {/* 16. Children and Young Learners */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">16.</span> Children and Young Learners
          </h2>
          <p className="leading-relaxed">
            Some educational programmes or services may involve individuals under the age of 18. Where we process personal information relating to children or young learners, we will take appropriate account of their age, understanding and the nature of the information involved.
          </p>
          <p className="leading-relaxed">
            Where required by law or the circumstances of the service, we will implement appropriate safeguards and obtain authorisation or consent from a parent, guardian or other authorised person where necessary.
          </p>
          <p className="leading-relaxed text-sm">
            Education partners and centres submitting learner information to CBPD UK are responsible for ensuring that they have an appropriate legal basis and have provided any required privacy information before sharing that information.
          </p>
        </section>

        {/* 17. Third-Party Websites and Services */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">17.</span> Third-Party Websites and Services
          </h2>
          <p className="leading-relaxed">
            Our website may contain links to external websites, verification services, partner websites or other third-party platforms. These services operate under their own privacy policies and terms. CBPD UK does not control the privacy practices of independent third parties and encourages users to review the relevant policies before submitting personal information to them.
          </p>
        </section>

        {/* 18. Automated Processing and Decision-Making */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">18.</span> Automated Processing and Decision-Making
          </h2>
          <p className="leading-relaxed">
            CBPD UK may use digital systems to support administrative activities, record management, assessment administration, verification and quality assurance.
          </p>
          <p className="leading-relaxed">
            Where applicable, we will provide information about any solely automated decision-making, including profiling, that is subject to specific transparency requirements under data protection law. We do not intend this policy to suggest that every digital or administrative process involves automated decision-making with legal or similarly significant effects.
          </p>
        </section>

        {/* 19. Changes to This Privacy Policy */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">19.</span> Changes to This Privacy Policy
          </h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our services, systems, legal obligations or data handling practices. The latest version will be published on our website with the revised &ldquo;Last updated&rdquo; date. Where a change materially affects how we use personal information, we will provide additional notice where required by law.
          </p>
        </section>

        {/* 20. Contact Us */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">20.</span> Contact Us
          </h2>
          <p className="leading-relaxed">
            For questions about this Privacy Policy, requests concerning personal information, or concerns about how data is handled, please contact:
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
          </div>
        </section>

      </div>
    </PolicyPageLayout>
  );
}
