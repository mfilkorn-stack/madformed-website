import { Link } from "wouter";
import { companyInfo } from "@/content/company";
import { useLanguage } from "@/lib/i18n";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { language, t } = useLanguage();
  const isEnglish = language === "en";

  const quickLinks = isEnglish ? [
    { label: t("nav.services"), path: "/en/services" },
    { label: t("nav.about"), path: "/en/about" },
    { label: t("nav.projects"), path: "/en/projects" },
    { label: t("nav.insights"), path: "/en/insights" },
    { label: t("footer.services"), path: "/en/contact" },
  ] : [
    { label: t("nav.services"), path: "/leistungen" },
    { label: t("nav.about"), path: "/ueber-uns" },
    { label: t("nav.projects"), path: "/projekte" },
    { label: t("nav.insights"), path: "/insights" },
    { label: "Kontakt", path: "/kontakt" },
  ];

  const legalLinks = isEnglish ? [
    { label: t("nav.legalNotice"), path: "/en/legal-notice" },
    { label: t("nav.privacy"), path: "/en/privacy-policy" },
  ] : [
    { label: t("nav.legalNotice"), path: "/impressum" },
    { label: t("nav.privacy"), path: "/datenschutz" },
  ];

  return (
    <footer className="bg-brand-dark text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-green shrink-0" />
                <span className="text-brand-grey">
                  {companyInfo.address.street}, {companyInfo.address.zip} {companyInfo.address.city}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <a 
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-brand-grey hover:text-brand-green transition-colors"
                  data-testid="link-email-footer"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <a 
                  href={`tel:${companyInfo.contact.phone}`}
                  className="text-brand-grey hover:text-brand-green transition-colors"
                  data-testid="link-phone-footer"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              {isEnglish ? "Navigation" : "Navigation"}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-brand-grey hover:text-brand-green transition-colors text-sm cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              {isEnglish ? "Legal" : "Rechtliches"}
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-brand-grey hover:text-brand-green transition-colors text-sm cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-grey/20 mt-12 pt-8">
          <p className="text-brand-grey text-sm text-center">
            © {new Date().getFullYear()} {companyInfo.name}. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
