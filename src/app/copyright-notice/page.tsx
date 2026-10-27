import type { Metadata } from "next";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { Copyright, Mail, Building2, Globe, ShieldCheck, CheckCircle2, Lock, AlertTriangle, FileText, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Copyright Notice | Central Board of Professional Development (CBPD UK)",
  description: "Official Copyright and Intellectual Property Notice of CBPD UK governing educational content, certificates, branding, and trademark protection.",
};

export default function CopyrightNoticePage() {
  return (
    <PolicyPageLayout
      title="Copyright Notice"
      subtitle="Intellectual property, trademarks, curriculum frameworks, and content usage permissions of the Central Board of Professional Development."
      activeSlug="copyright-notice"
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
            <span className="text-slate-500 dark:text-slate-400">Permissions &amp; Licensing: </span>
            <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-semibold hover:underline">
              info@cbpd.co.uk
            </a>
          </div>
        </div>

        {/* 1. Copyright Statement */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">1.</span> Copyright Statement
          </h2>
          <p className="leading-relaxed">
            Unless otherwise stated, the content published on the CBPD UK website and in materials produced by the Central Board of Professional Development (CBPD UK) is protected by applicable copyright, intellectual property and related laws.
          </p>
          <p className="leading-relaxed">
            This includes, but is not limited to, website text, qualification descriptions, programme information, policy documents, assessment materials, certificate templates, institutional accreditation documents, graphics, designs, logos, seals, digital resources, verification interfaces and other original materials created or published by CBPD UK.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-700/50 text-sm font-medium text-slate-800 dark:text-slate-200">
            All rights in such materials are reserved, subject to applicable law, third-party rights and any express written permission or licence granted by CBPD UK.
          </div>
        </section>

        {/* 2. Ownership of Intellectual Property */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">2.</span> Ownership of Intellectual Property
          </h2>
          <p className="leading-relaxed">
            Unless expressly stated otherwise, intellectual property rights in original materials created by or for CBPD UK are owned by CBPD UK or used under an appropriate licence.
          </p>
          <p className="leading-relaxed">
            The CBPD UK name, branding, visual identity, certificate designs, accreditation seals, qualification framework materials and related institutional resources constitute protected intellectual property. Nothing in this Notice transfers ownership of any intellectual property to a website visitor, learner, education partner, channel partner or other third party.
          </p>
          <p className="leading-relaxed text-xs text-slate-500 dark:text-slate-400">
            Third-party names, logos, trademarks, images and publications remain the property of their respective owners. Their appearance on the website does not imply endorsement or affiliation.
          </p>
        </section>

        {/* 3. Permitted Use of Website Content */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">3.</span> Permitted Use of Website Content
          </h2>
          <p className="leading-relaxed">
            Visitors may access and view the CBPD UK website for personal, educational, institutional or professional information purposes. Unless otherwise authorised by law or by CBPD UK in writing, visitors must not:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
            <li>Reproduce, republish or distribute substantial portions of CBPD UK website content for commercial purposes.</li>
            <li>Copy, modify, adapt or create derivative works from CBPD UK materials.</li>
            <li>Sell, sublicense, commercially exploit or otherwise distribute CBPD UK materials without permission.</li>
            <li>Remove or alter copyright notices, ownership statements or other intellectual property notices.</li>
            <li>Present CBPD UK content as the original work of another organisation or individual.</li>
            <li>Use CBPD UK materials in a way that misrepresents the organisation, its qualifications, or its services.</li>
          </ul>
        </section>

        {/* 4. Qualification and Assessment Materials */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">4.</span> Qualification and Assessment Materials
          </h2>
          <p className="leading-relaxed">
            CBPD UK develops, commissions, publishes and distributes qualification specifications, programme outlines, assessment guidance, learner resources, quality assurance documents and educational rubrics.
          </p>
          <p className="leading-relaxed text-sm">
            These materials may be used only for their authorised purpose within the scope of an applicable licence or agreement. Education partners and channel partners must not claim ownership of CBPD UK materials merely because they have received, adapted or distributed them under an authorised arrangement.
          </p>
        </section>

        {/* 5. Certificates and Certification Documents */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">5.</span> Certificates and Certification Documents
          </h2>
          <p className="leading-relaxed">
            CBPD UK certificates, digital credentials, accreditation certificates, verification records, certificate templates, layouts, and seals are issued for authorised purposes only.
          </p>
          <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 space-y-2 text-rose-950 dark:text-rose-200 text-sm">
            <strong className="block font-bold">Strictly Prohibited Acts:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reproducing, forging, altering, falsifying or issuing a CBPD UK certificate.</li>
              <li>Creating a document that falsely appears to have been issued or approved by CBPD UK.</li>
              <li>Altering a certificate holder&apos;s name, qualification title, result, certificate number, or date.</li>
              <li>Manipulating verification records or fabricating data on the verification portal.</li>
              <li>Using a genuine certificate or credential in a misleading or fraudulent manner.</li>
            </ul>
          </div>
          <p className="leading-relaxed text-sm">
            Certificate holders may present genuine certificates for legitimate employment or university verification. However, this does not authorise the commercial reproduction or counterfeit distribution of certification documents.
          </p>
        </section>

        {/* 6 & 7. Brand Protection & Partner Use */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">6 &amp; 7.</span> CBPD UK Logos, Seals &amp; Partner Usage
          </h2>
          <div className="space-y-3 text-sm sm:text-base leading-relaxed">
            <p>
              <strong>6. Name and Logos:</strong> The CBPD UK name, crest, accreditation marks, and branding may only be used with express written authorization. No party may register confusingly similar domain names or suggest that CBPD UK is a government department or statutory regulator.
            </p>
            <p>
              <strong>7. Partner Authorisation:</strong> Approved centres and channel partners are granted limited, non-exclusive permission to use designated logos solely within the validity period and scope of their agreement. All use must cease immediately upon agreement termination.
            </p>
          </div>
        </section>

        {/* 8 - 10. Downloads, Third-Party Content & Reporting Infringement */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">8 - 10.</span> Digital Content, Downloads &amp; Infringement
          </h2>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              <strong>8. Digital Downloads:</strong> The availability of downloadable brochures, handbooks, or forms does not grant unrestricted rights to redistribute or modify content.
            </p>
            <p>
              <strong>9. Third-Party Content:</strong> Any third-party resources referenced retain their respective copyright protections and attribution requirements.
            </p>
            <p>
              <strong>10. Reporting Infringement:</strong> If you believe content on our website infringes your intellectual property, please notify us at <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a> with a description of the copyrighted work and proof of ownership.
            </p>
          </div>
        </section>

        {/* 11 - 13. Permissions, Enforcement & No Transfer */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">11 - 13.</span> Licensing Requests &amp; Legal Enforcement
          </h2>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              <strong>11. Permission Requests:</strong> Inquiries to republish, adapt, or commercially license CBPD UK materials should be addressed to <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a> prior to use.
            </p>
            <p>
              <strong>12. Enforcement:</strong> CBPD UK reserves all statutory and common-law rights to take action against unauthorised use or copyright infringement, including injunctive relief and damages.
            </p>
            <p>
              <strong>13. No Transfer of Rights:</strong> Enrolment, centre approval, or website access does not transfer any proprietary rights or ownership of CBPD UK intellectual property.
            </p>
          </div>
        </section>

        {/* 14 & 15. Changes & Contact Information */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-primary-700/60">
            <span className="text-brand-red">14 &amp; 15.</span> Contact Information &amp; Statement
          </h2>
          <p className="leading-relaxed">
            For copyright enquiries, licensing permissions, or reports of suspected intellectual property infringement, please contact:
          </p>

          <div className="p-6 rounded-2xl bg-white dark:bg-primary-900/60 border border-slate-200 dark:border-primary-700/60 shadow-sm space-y-3">
            <div className="font-bold text-slate-900 dark:text-white text-base">
              Central Board of Professional Development (CBPD UK)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>General IP Inquiries: <a href="mailto:info@cbpd.co.uk" className="text-brand-red font-medium hover:underline">info@cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>Certification Security: <a href="mailto:assessments@cbpd.co.uk" className="text-brand-red font-medium hover:underline">assessments@cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-red shrink-0" />
                <span>Website: <a href="https://www.cbpd.co.uk" target="_blank" rel="noopener noreferrer" className="text-brand-red font-medium hover:underline">www.cbpd.co.uk</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-red shrink-0" />
                <span>Registered Office: 1 Canada Square, Canary Wharf, London E14 5DY, UK</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-primary-700/50 text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
              © 2026 Central Board of Professional Development (CBPD UK). All rights reserved. Registered Company Number: 16442180.
            </div>
          </div>
        </section>

      </div>
    </PolicyPageLayout>
  );
}
