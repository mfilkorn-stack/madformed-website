import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <SEO
        title="Seite nicht gefunden (404)"
        description="Die gesuchte Seite existiert nicht oder wurde verschoben."
      />
      <div className="text-center">
        <div className="text-8xl font-bold text-brand-green mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-brand-dark/70 mb-8 max-w-md mx-auto">
          Die gesuchte Seite existiert nicht oder wurde verschoben. 
          Kehren Sie zur Startseite zurück oder kontaktieren Sie uns.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white" data-testid="button-home-404">
              <Home className="w-4 h-4 mr-2" />
              Zur Startseite
            </Button>
          </Link>
          <Link href="/kontakt">
            <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/10" data-testid="button-contact-404">
              <Mail className="w-4 h-4 mr-2" />
              Kontakt
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
