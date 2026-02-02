import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/586E4BEB-9A32-49CD-B6A4-925E000A0D62_1769909787454.png";

const leistungenSubmenu = [
  { label: "Übersicht", path: "/leistungen" },
  { label: "Medizinisches Cannabis", path: "/leistungen/medizinisches-cannabis" },
  { label: "Medizintechnik", path: "/leistungen/medizintechnik" },
  { label: "KI für Sales & BD", path: "/leistungen/ki-sales-bd" },
];

const navItems = [
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Referenzen & Projekte", path: "/projekte" },
  { label: "Insights", path: "/insights" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);

  const isLeistungenActive = location.startsWith("/leistungen");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-home">
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
              <Link href="/leistungen">
                <span
                  className={`inline-flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    isLeistungenActive
                      ? "text-brand-green bg-brand-green/10"
                      : "text-brand-dark hover:text-brand-green hover:bg-brand-light"
                  }`}
                  data-testid="nav-leistungen"
                >
                  Leistungen
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
            <Link href="/kontakt" className="hidden md:block">
              <Button
                className="bg-brand-green hover:bg-brand-green/90 text-white"
                data-testid="button-contact-header"
              >
                Kontakt aufnehmen
              </Button>
            </Link>

            <button
              className="md:hidden p-2 text-brand-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-grey/20" data-testid="nav-mobile">
          <nav className="flex flex-col p-4 space-y-1">
            <div className="mb-2">
              <span className="block px-4 py-2 text-xs font-semibold text-brand-grey uppercase tracking-wider">
                Leistungen
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
            <Link href="/kontakt">
              <Button
                className="w-full mt-4 bg-brand-green hover:bg-brand-green/90 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt aufnehmen
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
