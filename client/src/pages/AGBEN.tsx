import { companyInfo } from "@/content/company";
import { SEO } from "@/components/SEO";

export default function AGBEN() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Terms and Conditions"
        description="General Terms and Conditions of MadforMed GmbH – Scope, services, use of AI, liability, and confidentiality."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
            General Terms and Conditions
          </h1>

          <div className="bg-white rounded-lg border border-brand-grey/20 p-6 md:p-8 space-y-8">

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 1 Scope of Application
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                These General Terms and Conditions apply to all business relationships
                between {companyInfo.name}, {companyInfo.address.street},{" "}
                {companyInfo.address.zip} {companyInfo.address.city} (hereinafter "Contractor")
                and the respective client (hereinafter "Client").
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Deviating, conflicting, or supplementary terms and conditions of the Client shall
                only become part of the contract if the Contractor has expressly agreed to their
                validity in writing.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 2 Subject Matter and Scope of Services
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                The Contractor provides consulting and services in the areas of medical cannabis,
                medical technology, medical trade, and AI enablement for sales and business
                development.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                The type and scope of services are determined by the respective offer, order
                confirmation, or a separate contract. Verbal side agreements require written
                confirmation.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 3 Formation of Contract
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Offers by the Contractor are non-binding. A contract is concluded only upon
                written order confirmation by the Contractor or upon commencement of service
                delivery.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 4 Remuneration and Payment Terms
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Remuneration is based on the respectively agreed fee. Unless otherwise agreed,
                the following terms apply:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>All prices are quoted excluding statutory VAT</li>
                <li>Invoices are due within 14 days of the invoice date without deduction</li>
                <li>In the event of late payment, the Contractor is entitled to charge default
                  interest at the statutory rate</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Travel costs and expenses will be invoiced separately upon prior agreement.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 5 Client's Duty to Cooperate
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                The Client shall provide the Contractor with all information, documents, and
                access necessary for the performance of services in a timely manner. In particular:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Designation of a contact person with decision-making authority</li>
                <li>Provision of relevant documents and data</li>
                <li>Timely feedback and approval of interim results</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Delays due to lack of cooperation by the Client shall not be attributable to
                the Contractor.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 6 Use of Artificial Intelligence (AI)
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                The Contractor uses AI-based tools in the course of service delivery. This
                disclosure is made in accordance with the transparency obligations under
                Art. 50 of the AI Act (EU) 2024/1689 (EU AI Act).
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.1 Tools Used</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Tools used include in particular Anthropic Claude / Claude Code (Anthropic, PBC, USA)
                as well as potentially other AI tools such as OpenAI ChatGPT, Microsoft Copilot, or
                GitHub Copilot. The specific tools used may change as technology evolves.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.2 Areas of Application</h3>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Creation and editing of texts, presentations, and documents</li>
                <li>Software development and source code creation</li>
                <li>Research, analysis, and summarization of information</li>
                <li>Design and optimization of website content</li>
              </ul>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.3 Quality Assurance and Human Oversight</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                All AI-generated or AI-assisted work results are professionally reviewed, adapted,
                and approved by the Contractor before being delivered to the Client or published.
                Full content responsibility remains with the Contractor.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.4 Data Protection in AI Usage</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                The following principles apply when using AI tools:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Personal data of the Client or their customers is not entered into AI systems
                  without explicit agreement</li>
                <li>Confidential business information is only transmitted to AI systems to the
                  extent necessary for service delivery</li>
                <li>Enterprise versions with contractual data protection guarantees are
                  preferred</li>
                <li>No automated decision-making within the meaning of Art. 22 GDPR takes place</li>
              </ul>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.5 Liability for AI Results</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                The Contractor is liable for the quality and accuracy of work results regardless
                of whether AI tools were used in their creation. The use of AI does not exempt
                from the duty of care. Liability is governed by § 9 of these Terms and Conditions.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">6.6 Disclosure Obligation</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Upon the Client's request, the Contractor will indicate which work results were
                created using AI tools. The Client may exclude the use of AI tools for their
                engagement in writing.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 7 Confidentiality
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Both parties undertake to treat all confidential information received in the
                course of cooperation as strictly confidential and to use it only for the
                agreed purposes.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                The confidentiality obligation shall continue to apply after termination of the
                contractual relationship. A separate non-disclosure agreement (NDA) may be
                concluded upon request.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 8 Intellectual Property and Usage Rights
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Upon full payment, the Client receives the agreed usage rights to the work
                results. Unless otherwise agreed, simple, non-transferable usage rights are
                granted.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Methods, frameworks, and general know-how of the Contractor remain with the
                Contractor and may be reused for other engagements.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Where work results were created using AI tools, the Contractor notes that
                copyright protection for purely machine-generated content may be limited under
                current law. However, the editorial processing and professional preparation
                by the Contractor establish independent copyright protection.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 9 Liability
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                The Contractor is liable without limitation in cases of intent and gross
                negligence, as well as in cases of injury to life, body, or health.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                In cases of slight negligence, the Contractor is only liable for breach of
                material contractual obligations (cardinal obligations). In such cases,
                liability is limited to the typical, foreseeable damage.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                The Contractor's consulting services do not constitute legal, tax, or
                medical advice and do not replace professional advice from appropriately
                qualified professionals.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 10 Term and Termination
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                The contract term is determined by the respective agreement. Unless otherwise
                agreed:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Project-based engagements end upon delivery of the agreed services</li>
                <li>Ongoing consulting relationships may be terminated by either party with
                  4 weeks' notice to the end of the month</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                The right to extraordinary termination for good cause remains unaffected.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 11 Data Protection
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Both parties undertake to comply with applicable data protection regulations,
                in particular the GDPR. Where personal data is processed in the course of the
                engagement, a separate data processing agreement (DPA) pursuant to Art. 28 GDPR
                will be concluded as needed.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                For more information on data protection, please see our{" "}
                <a href="/en/privacy-policy" className="text-brand-green hover:underline">
                  Privacy Policy
                </a>.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                § 12 Final Provisions
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                The law of the Federal Republic of Germany shall apply, excluding the
                UN Convention on Contracts for the International Sale of Goods (CISG).
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                The place of jurisdiction for all disputes arising from the contractual
                relationship shall be – to the extent legally permissible – the registered
                office of the Contractor.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Should individual provisions of these Terms and Conditions be or become
                invalid, the validity of the remaining provisions shall remain unaffected.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-4">
                <strong>As of:</strong> March 2026
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
