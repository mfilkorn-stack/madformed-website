import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/63287e6f-fa20-4b0e-897a-d638ddbbda36_1769864099886.jpeg";

const navItems = [
  { label: "Leistungen", path: "/leistungen" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Projekte", path: "/projekte" },
  { label: "Insights", path: "/insights" },
  { label: "Kontakt", path: "/kontakt" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-home">
            <img 
              src={logoImage} 
              alt="MAD for MED GmbH - Medical Resulting" 
              className="h-12 md:h-14 w-auto cursor-pointer"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
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
