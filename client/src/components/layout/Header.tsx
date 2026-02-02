import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";
import logoImage from "@assets/586E4BEB-9A32-49CD-B6A4-925E000A0D62_1769909787454.png";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const { language, t, getLocalizedPath } = useLanguage();

  const isEnglish = language === "en";
  
  const leistungenSubmenu = isEnglish ? [
    { label: t("nav.servicesOverview"), path: "/en/services" },
    { label: t("nav.cannabis"), path: "/en/services/medical-cannabis" },
    { label: t("nav.medtech"), path: "/en/services/medical-technology" },
    { label: t("nav.medizinalhandel"), path: "/en/services/medical-trade" },
    { label: t("nav.kiSales"), path: "/en/services/ai-sales-bd" },
  ] : [
    { label: t("nav.servicesOverview"), path: "/leistungen" },
    { label: t("nav.cannabis"), path: "/leistungen/medizinisches-cannabis" },
    { label: t("nav.medtech"), path: "/leistungen/medizintechnik" },
    { label: t("nav.medizinalhandel"), path: "/leistungen/medizinalhandel" },
    { label: t("nav.kiSales"), path: "/leistungen/ki-sales-bd" },
  ];

  const navItems = isEnglish ? [
    { label: t("nav.about"), path: "/en/about" },
    { label: t("nav.projects"), path: "/en/projects" },
    { label: t("nav.insights"), path: "/en/insights" },
  ] : [
    { label: t("nav.about"), path: "/ueber-uns" },
    { label: t("nav.projects"), path: "/projekte" },
    { label: t("nav.insights"), path: "/insights" },
  ];

  const contactPath = isEnglish ? "/en/contact" : "/kontakt";
  const homePath = isEnglish ? "/en" : "/";

  const isLeistungenActive = isEnglish 
    ? location.startsWith("/en/services") 
    : location.startsWith("/leistungen");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={homePath} data-testid="link-home">
            <img 
              src={logoImage} 
              alt="MadforMed GmbH - Medical Resulting" 
              className="h-10 md:h-12 w-auto cursor-pointer"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            <div 
              className="relative"
              onMouseEnter={() => setLeistungenOpen(true)}
              onMouseLeave={() => setLeistungenOpen(false)}
            >
              <Link href={leistungenSubmenu[0].path}>
                <span
                  className={`inline-flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    isLeistungenActive
                      ? "text-brand-green bg-brand-green/10"
                      : "text-brand-dark hover:text-brand-green hover:bg-brand-light"
                  }`}
                  data-testid="nav-leistungen"
                >
                  {t("nav.services")}
                  <ChevronDown className={`w-4 h-4 transition-transform ${leistungenOpen ? "rotate-180" : ""}`} />
                </span>
              </Link>
              
              {leistungenOpen && (
                <div className="absolute top-full left-0 pt-1 w-64">
                  <div className="bg-white rounded-lg shadow-lg border border-brand-grey/20 py-2">
                    {leistungenSubmenu.map((item) => (
                      <Link key={item.path} href={item.path}>
                        <span
                          className={`block px-4 py-2 text-sm transition-colors cursor-pointer ${
                            location === item.path
                              ? "text-brand-green bg-brand-green/10"
                              : "text-brand-dark hover:text-brand-green hover:bg-brand-light"
                          }`}
                          data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                          onClick={() => setLeistungenOpen(false)}
                        >
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    location === item.path || location.startsWith(item.path + "/")
                      ? "text-brand-green bg-brand-green/10"
                      : "text-brand-dark hover:text-brand-green hover:bg-brand-light"
                  }`}
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            
            <Link href={contactPath} className="hidden md:block">
              <Button
                className="bg-brand-green hover:bg-brand-green/90 text-white"
                data-testid="button-contact-header"
              >
                {t("nav.contact")}
              </Button>
            </Link>

            <button
              className="md:hidden p-2 text-brand-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-grey/20" data-testid="nav-mobile">
          <nav className="flex flex-col p-4 space-y-1">
            <div className="flex justify-center pb-4 border-b border-brand-grey/20 mb-2">
              <LanguageSwitcher />
            </div>
            
            <div className="mb-2">
              <span className="block px-4 py-2 text-xs font-semibold text-brand-grey uppercase tracking-wider">
                {t("nav.services")}
              </span>
              {leistungenSubmenu.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`block px-4 py-3 pl-8 rounded-md text-sm font-medium transition-colors ${
                      location === item.path
                        ? "text-brand-green bg-brand-green/10"
                        : "text-brand-dark hover:text-brand-green hover:bg-brand-light"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
            
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location === item.path || location.startsWith(item.path + "/")
                      ? "text-brand-green bg-brand-green/10"
                      : "text-brand-dark hover:text-brand-green hover:bg-brand-light"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href={contactPath}>
              <Button
                className="w-full mt-4 bg-brand-green hover:bg-brand-green/90 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
