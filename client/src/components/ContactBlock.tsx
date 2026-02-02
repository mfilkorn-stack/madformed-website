import { companyInfo } from "@/content/company";
import { useLanguage } from "@/lib/i18n";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ContactBlockProps {
  variant?: "light" | "card";
}

export function ContactBlock({ variant = "light" }: ContactBlockProps) {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const responseTimeText = isEnglish 
    ? "Response usually within 48h" 
    : companyInfo.responseTime;

  const content = (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 mt-0.5 text-brand-green shrink-0" />
        <div>
          <p className="font-medium text-brand-dark">{companyInfo.name}</p>
          <p className="text-brand-dark/70 text-sm">
            {companyInfo.address.street}
            <br />
            {companyInfo.address.zip} {companyInfo.address.city}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-brand-green shrink-0" />
        <a
          href={`mailto:${companyInfo.contact.email}`}
          className="text-brand-dark hover:text-brand-green transition-colors"
          data-testid="link-email-contact"
        >
          {companyInfo.contact.email}
        </a>
      </div>

      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5 text-brand-green shrink-0" />
        <a
          href={`tel:${companyInfo.contact.phone}`}
          className="text-brand-dark hover:text-brand-green transition-colors"
          data-testid="link-phone-contact"
        >
          {companyInfo.contact.phone}
        </a>
      </div>

      <div className="flex items-center gap-3">
        <Clock className="w-5 h-5 text-brand-green shrink-0" />
        <p className="text-brand-dark/70 text-sm">{responseTimeText}</p>
      </div>
    </div>
  );

  if (variant === "card") {
    return (
      <Card className="p-6 bg-white border-brand-grey/20" data-testid="contact-block">
        {content}
      </Card>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-brand-grey/20" data-testid="contact-block">
      {content}
    </div>
  );
}
