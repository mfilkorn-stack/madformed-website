import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

interface CTABandProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTABand({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: CTABandProps) {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  
  const defaults = {
    title: isEnglish ? "Discuss Your Project" : "Projekt besprechen",
    subtitle: isEnglish 
      ? "Let's analyze your challenges together and develop solutions."
      : "Lassen Sie uns gemeinsam Ihre Herausforderungen analysieren und Lösungen entwickeln.",
    buttonText: isEnglish ? "Get in Touch" : "Kontakt aufnehmen",
    buttonLink: isEnglish ? "/en/contact" : "/kontakt",
  };

  return (
    <section className="bg-brand-dark py-16 md:py-20 relative overflow-hidden" data-testid="cta-band">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-gradient-to-r from-brand-green to-brand-cyan blur-3xl opacity-20" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title || defaults.title}
        </motion.h2>
        <motion.p
          className="text-brand-grey text-base md:text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {subtitle || defaults.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href={buttonLink || defaults.buttonLink}>
            <button
              className="animate-glow-pulse inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-brand-cyan text-white font-bold text-base px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
              data-testid="button-cta-band"
            >
              {buttonText || defaults.buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
