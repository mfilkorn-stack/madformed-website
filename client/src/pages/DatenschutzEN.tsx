import { companyInfo } from "@/content/company";
import { SEO } from "@/components/SEO";

export default function DatenschutzEN() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy of MadforMed GmbH - Information about data processing, your rights, and our privacy practices."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-lg border border-brand-grey/20 p-6 md:p-8 space-y-8">
            
            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                1. Privacy at a Glance
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                The protection of your personal data is an important concern for us. 
                Personal data is any data that can be used to personally identify you.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                2. Responsible Party
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                {companyInfo.name}
                <br />
                {companyInfo.address.street}
                <br />
                {companyInfo.address.zip} {companyInfo.address.city}
                <br />
                Germany
                <br /><br />
                Managing Director: {companyInfo.legal.geschaeftsfuehrer}
                <br />
                Email: {companyInfo.contact.email}
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                3. General Information and Mandatory Information
              </h2>
              
              <h3 className="font-medium text-brand-dark mb-2 mt-4">Data Protection</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                We process your personal data exclusively in accordance with statutory data protection 
                regulations, in particular the General Data Protection Regulation (GDPR).
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Legal Basis for Processing</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                The processing of personal data is based on:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Art. 6(1)(a) GDPR – Consent</li>
                <li>Art. 6(1)(b) GDPR – Contract / Pre-contractual measures</li>
                <li>Art. 6(1)(c) GDPR – Legal obligation</li>
                <li>Art. 6(1)(f) GDPR – Legitimate interest</li>
              </ul>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Your Rights</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                You have the right to:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Information (Art. 15 GDPR)</li>
                <li>Rectification (Art. 16 GDPR)</li>
                <li>Erasure (Art. 17 GDPR)</li>
                <li>Restriction of processing (Art. 18 GDPR)</li>
                <li>Data portability (Art. 20 GDPR)</li>
                <li>Objection to processing (Art. 21 GDPR)</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                You also have the right to lodge a complaint with a data protection supervisory authority.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                4. Hosting
              </h2>
              
              <h3 className="font-medium text-brand-dark mb-2">Hosting by IONOS</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                This website is hosted by IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                IONOS processes personal data within the framework of a data processing agreement 
                in accordance with Art. 28 GDPR.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                <strong>Legal basis:</strong> Art. 6(1)(f) GDPR
                <br />
                <strong>Legitimate interest:</strong> secure and stable provision of the website.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                5. Data Collection on This Website
              </h2>
              
              <h3 className="font-medium text-brand-dark mb-2">Server Log Files</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                IONOS automatically collects and stores information in so-called server log files:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Browser type and version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Hostname</li>
                <li>Time of server request</li>
                <li>IP address (shortened or anonymized)</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                This data is not merged with other data sources.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                6. Contact Form
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                When you contact us via the contact form, your information from the form, 
                including the contact details you provide, will be processed to handle your inquiry.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2 mb-2">
                <strong>Data processed:</strong>
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (if applicable)</li>
                <li>Content of the message</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                <strong>Legal basis:</strong>
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1 mt-1">
                <li>Art. 6(1)(b) GDPR (pre-contractual measures)</li>
                <li>Art. 6(1)(f) GDPR (legitimate interest)</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                The data will be deleted as soon as it is no longer required for the purpose.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                7. Contact by Email
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                When contacting us by email, the personal data transmitted will be used 
                exclusively to process the inquiry.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                8. Google Analytics
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                This website uses Google Analytics 4, a web analytics service provided by 
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Google Analytics uses cookies that enable analysis of website usage.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">IP Anonymization</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                The IP address is shortened by Google within the EU or the EEA before it is stored.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Purpose of Processing</h3>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Analysis of user behavior</li>
                <li>Website optimization</li>
                <li>Reach measurement</li>
              </ul>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Legal Basis</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Google Analytics is used exclusively on the basis of your consent according to:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1 mt-1">
                <li>Art. 6(1)(a) GDPR</li>
                <li>§ 25(1) TTDSG</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Consent is given via a cookie consent tool and can be revoked at any time.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Data Transfer to Third Countries</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                A transfer of data to the USA cannot be excluded. Google relies on the 
                Standard Contractual Clauses (SCCs) of the EU Commission.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Objection / Opt-Out</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                You can revoke your consent at any time via the cookie settings or use the 
                browser add-on to disable Google Analytics.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                9. Cookies
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                This website uses:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Technically necessary cookies</li>
                <li>Analytics cookies (Google Analytics, only with consent)</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                On your first visit to the website, you will be asked for your consent via a cookie banner.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                10. Use of Artificial Intelligence (AI)
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                We use AI-based tools for the creation and editing of content on this website
                (texts, source code). This notice is provided in accordance with the transparency
                obligations under Art. 50 of the AI Act (EU) 2024/1689 (EU AI Act).
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Tools and Providers Used</h3>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Anthropic Claude / Claude Code – Anthropic, PBC, San Francisco, USA</li>
                <li>GitHub / GitHub Copilot – GitHub, Inc. (Microsoft Corporation), San Francisco, USA</li>
              </ul>
              <p className="text-sm text-brand-dark/70 leading-relaxed mt-2">
                Additional AI tools (e.g., OpenAI ChatGPT, Microsoft Copilot) may be used in the
                course of development and content creation.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Purpose of Use</h3>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Assistance in creating and editing editorial content</li>
                <li>Software development and source code creation</li>
                <li>Text analysis and optimization</li>
              </ul>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Personal Data</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                <strong>No personal data of website visitors</strong> is transmitted to AI systems
                as part of our AI usage. AI tools are used exclusively for editorial purposes and
                development, not for processing user data.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Data Transfer to Third Countries</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                The aforementioned AI providers are based in the USA. To the extent that data is
                transmitted to these providers in the course of editorial use, this is done on the
                basis of Standard Contractual Clauses (SCCs) of the EU Commission pursuant to
                Art. 46(2)(c) GDPR or on the basis of the EU-US Data Privacy Framework (DPF).
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Legal Basis</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Art. 6(1)(f) GDPR (legitimate interest in efficient content creation and web development).
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Human Oversight</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                All AI-generated or AI-assisted content is editorially reviewed, adapted, and
                approved by MadforMed GmbH before publication. There are:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>No automated individual decisions within the meaning of Art. 22 GDPR</li>
                <li>No profiling</li>
                <li>No processing of personal data by AI systems</li>
              </ul>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                11. Development Platform (GitHub)
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                For the development and version control of this website's source code, we use
                GitHub, a service provided by GitHub, Inc. (Microsoft Corporation), 88 Colin P
                Kelly Jr St, San Francisco, CA 94107, USA.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Purpose of Use</h3>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>Version control and storage of website source code</li>
                <li>Collaborative software development and code reviews</li>
                <li>Automated build and deployment processes (CI/CD)</li>
              </ul>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Data Processed</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Only source code and technical configuration files are stored in the GitHub
                repository. <strong>No personal data of website visitors is transmitted to
                GitHub.</strong>
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Data Transfer to Third Countries</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                GitHub is based in the USA. Data transfer is carried out on the basis of Standard
                Contractual Clauses (SCCs) of the EU Commission pursuant to Art. 46(2)(c) GDPR
                and on the basis of the EU-US Data Privacy Framework (DPF). Microsoft/GitHub is
                certified under the DPF.
              </p>

              <h3 className="font-medium text-brand-dark mb-2 mt-4">Legal Basis</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Art. 6(1)(f) GDPR (legitimate interest in secure and efficient software
                development and version control).
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                12. Data Sharing
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-2">
                Personal data will only be shared if:
              </p>
              <ul className="text-sm text-brand-dark/70 leading-relaxed list-disc list-inside space-y-1">
                <li>There is a legal obligation</li>
                <li>You have given consent</li>
                <li>It is necessary for contract fulfillment</li>
              </ul>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                13. Currency and Changes
              </h2>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                This privacy policy is currently valid and will be updated as needed.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
