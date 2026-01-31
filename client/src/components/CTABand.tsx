import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABandProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTABand({
  title = "Projekt besprechen",
  subtitle = "Lassen Sie uns gemeinsam Ihre Herausforderungen analysieren und Lösungen entwickeln.",
  buttonText = "Kontakt aufnehmen",
  buttonLink = "/kontakt",
}: CTABandProps) {
  return (
    <section className="bg-brand-dark py-16 md:py-20" data-testid="cta-band">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-brand-grey text-base md:text-lg mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link href={buttonLink}>
          <Button
            size="lg"
            className="bg-brand-green hover:bg-brand-green/90 text-white"
            data-testid="button-cta-band"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
