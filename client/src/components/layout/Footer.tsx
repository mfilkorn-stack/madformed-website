import { Link } from "wouter";
import { companyInfo } from "@/content/company";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/63287e6f-fa20-4b0e-897a-d638ddbbda36_1769864099886.jpeg";

const quickLinks = [
  { label: "Leistungen", path: "/leistungen" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Projekte", path: "/projekte" },
  { label: "Insights", path: "/insights" },
  { label: "Kontakt", path: "/kontakt" },
];

const legalLinks = [
  { label: "Impressum", path: "/impressum" },
  { label: "Datenschutz", path: "/datenschutz" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="MAD for MED GmbH - Medical Resulting" 
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-brand-grey text-sm mb-6 max-w-md">
              Beratung für medizinisches Cannabis und Medizintechnik. Strukturiert, 
              compliance-orientiert, ergebnisfokussiert.
            </p>
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
            <h3 className="font-semibold mb-4">Navigation</h3>
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
            <h3 className="font-semibold mb-4">Rechtliches</h3>
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
            © {new Date().getFullYear()} {companyInfo.name}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
