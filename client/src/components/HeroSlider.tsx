import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-slide-1.png",
    title: "Strategieberatung für regulierte Märkte",
    subtitle: "Wir begleiten Unternehmen im Bereich medizinisches Cannabis und Medizintechnik – strukturiert, compliance-orientiert, ergebnisfokussiert."
  },
  {
    image: "/images/hero-slide-2.png",
    title: "Expertise in Medizinalcannabis",
    subtitle: "Von EU-GMP/GDP bis zur Supply Chain: Wir kennen die regulatorischen Anforderungen und unterstützen Sie bei der erfolgreichen Umsetzung."
  },
  {
    image: "/images/hero-slide-3.png",
    title: "Ihr Partner für nachhaltiges Wachstum",
    subtitle: "M&A, Interim Management und Business Development – wir bringen die Erfahrung mit, die Ihr Projekt zum Erfolg führt."
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const nextSlide = () => {
    if (!isAnimating) {
      goToSlide((currentSlide + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden" data-testid="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div
              className={`transition-all duration-700 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md max-w-xl">
                {slides[currentSlide].subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/leistungen">
                <Button
                  size="lg"
                  className="bg-brand-green hover:bg-brand-green/90 text-white shadow-lg"
                  data-testid="button-services-hero"
                >
                  Leistungen ansehen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                  data-testid="button-contact-hero"
                >
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white"
        aria-label="Vorheriges Bild"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white"
        aria-label="Nächstes Bild"
        data-testid="button-next-slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-brand-green w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Zu Folie ${index + 1}`}
            data-testid={`button-slide-${index}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-light to-transparent z-10" />
    </section>
  );
}
