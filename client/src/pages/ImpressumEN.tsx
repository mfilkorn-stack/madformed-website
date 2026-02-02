import { companyInfo } from "@/content/company";
import { SEO } from "@/components/SEO";

export default function ImpressumEN() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Legal Notice"
        description="Legal Notice of MadforMed GmbH - Information according to § 5 TMG, contact details and legal notices."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
            Legal Notice
          </h1>

          <div className="bg-white rounded-lg border border-brand-grey/20 p-6 md:p-8 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Information according to § 5 TMG
              </h2>
              <p className="text-brand-dark/70">
                {companyInfo.name}
                <br />
                {companyInfo.address.street}
                <br />
                {companyInfo.address.zip} {companyInfo.address.city}
                <br />
                Germany
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Represented by the Managing Director
              </h2>
              <p className="text-brand-dark/70">
                {companyInfo.legal.geschaeftsfuehrer}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Contact
              </h2>
              <p className="text-brand-dark/70">
                Email: {companyInfo.contact.email}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Commercial Register Entry
              </h2>
              <p className="text-brand-dark/70">
                Entry in the Commercial Register
                <br />
                Registry Court: {companyInfo.legal.handelsregister}
                <br />
                Registration Number: {companyInfo.legal.hrb}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                VAT Identification Number
              </h2>
              <p className="text-brand-dark/70">
                VAT identification number according to § 27 a of the German Value Added Tax Act:
                <br />
                {companyInfo.legal.ustId}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Responsible for Content according to § 55 Abs. 2 RStV
              </h2>
              <p className="text-brand-dark/70">
                {companyInfo.legal.geschaeftsfuehrer}
                <br />
                {companyInfo.address.street}
                <br />
                {companyInfo.address.zip} {companyInfo.address.city}
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Consulting and Liability Disclaimer
              </h2>
              <p className="text-brand-dark/70 text-sm leading-relaxed">
                The information, content, and presentations provided on this website serve exclusively 
                for general information about the services of MadforMed GmbH and do not constitute 
                legal, tax, medical, or regulatory advice in individual cases.
              </p>
              <p className="text-brand-dark/70 text-sm leading-relaxed mt-3">
                In particular, the content does not replace individual professional advice from 
                appropriately qualified professional groups (e.g., lawyers, tax advisors, doctors, 
                pharmacists, regulatory or compliance experts).
              </p>
              <p className="text-brand-dark/70 text-sm leading-relaxed mt-3">
                MadforMed GmbH assumes no liability for decisions or measures taken based on the 
                information provided on this website. Liability arises exclusively within the 
                framework of a separately concluded, written consulting or service agreement.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Liability for Content
              </h2>
              <p className="text-brand-dark/70 text-sm leading-relaxed">
                As a service provider, we are responsible for our own content on these pages in 
                accordance with § 7 para. 1 TMG under general laws. According to §§ 8 to 10 TMG, 
                however, we are not obligated as a service provider to monitor transmitted or 
                stored third-party information or to investigate circumstances that indicate 
                illegal activity.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Liability for Links
              </h2>
              <p className="text-brand-dark/70 text-sm leading-relaxed">
                Our offer contains links to external websites of third parties, over whose content 
                we have no influence. Therefore, we cannot assume any liability for this third-party 
                content. The respective provider or operator of the pages is always responsible for 
                the content of the linked pages.
              </p>
            </div>

            <hr className="border-brand-grey/20" />

            <div>
              <h2 className="text-lg font-semibold text-brand-dark mb-3">
                Copyright
              </h2>
              <p className="text-brand-dark/70 text-sm leading-relaxed">
                The content and works created by the site operators on these pages are subject to 
                German copyright law. Duplication, processing, distribution, and any kind of 
                exploitation outside the limits of copyright require the written consent of the 
                respective author or creator.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
