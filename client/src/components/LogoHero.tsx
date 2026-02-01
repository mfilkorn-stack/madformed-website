import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoImage from "@assets/586E4BEB-9A32-49CD-B6A4-925E000A0D62_1769909787454.png";

export function LogoHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-brand-light" data-testid="logo-hero">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 1440 800" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,200 Q360,100 720,200 T1440,200 L1440,0 L0,0 Z" fill="#1E9BD9" opacity="0.3" />
            <path d="M0,300 Q360,200 720,300 T1440,300 L1440,0 L0,0 Z" fill="#5FB94E" opacity="0.2" />
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="mb-8 flex justify-center">
          <img 
            src={logoImage} 
            alt="MadforMed Logo" 
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
            data-testid="logo-hero-image"
          />
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-brand-dark/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Strategieberatung für <span className="text-brand-green font-semibold">medizinisches Cannabis</span>, 
          <span className="text-brand-cyan font-semibold"> Medizintechnik</span> und 
          <span className="text-brand-cyan font-semibold"> KI-Enablement</span> – 
          strukturiert, compliance-orientiert, ergebnisfokussiert.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/leistungen">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white shadow-lg px-8"
              data-testid="button-services-hero"
            >
              Leistungen entdecken
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/kontakt">
            <Button
              size="lg"
              variant="outline"
              className="border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 px-8"
              data-testid="button-contact-hero"
            >
              Kontakt aufnehmen
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: "60px" }}>
          <defs>
            <linearGradient id="hero-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5FB94E" />
              <stop offset="50%" stopColor="#1E9BD9" />
              <stop offset="100%" stopColor="#5FB94E" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C240,80 480,20 720,50 C960,80 1200,30 1440,50 L1440,100 L0,100 Z"
            fill="url(#hero-wave-gradient)"
            opacity="0.2"
          />
          <path
            d="M0,60 C360,30 720,70 1080,40 C1260,25 1380,50 1440,50 L1440,100 L0,100 Z"
            fill="url(#hero-wave-gradient)"
            opacity="0.15"
          />
        </svg>
      </div>
    </section>
  );
}
