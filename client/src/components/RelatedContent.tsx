import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Monitor, ShoppingCart, Brain, BookOpen } from "lucide-react";
import { blogPosts, BlogPost } from "@/content/posts";

interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
}

interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon: "cannabis" | "medtech" | "handel" | "ki";
  color: "green" | "cyan" | "gradient";
}

const serviceIcons = {
  cannabis: Leaf,
  medtech: Monitor,
  handel: ShoppingCart,
  ki: Brain
};

const colorClasses = {
  green: {
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green/10",
    hoverBorder: "hover:border-brand-green"
  },
  cyan: {
    iconColor: "text-brand-cyan",
    iconBg: "bg-brand-cyan/10",
    hoverBorder: "hover:border-brand-cyan"
  },
  gradient: {
    iconColor: "text-brand-cyan",
    iconBg: "bg-gradient-to-r from-brand-green/10 to-brand-cyan/10",
    hoverBorder: "hover:border-brand-cyan"
  }
};

const categoryLabels: Record<string, string> = {
  cannabis: "Cannabis",
  medtech: "Medizintechnik",
  ki: "KI",
  allgemein: "Allgemein"
};

export function RelatedArticles({ 
  category, 
  excludeSlug,
  maxItems = 2,
  title = "Passende Artikel" 
}: { 
  category: string; 
  excludeSlug?: string;
  maxItems?: number;
  title?: string;
}) {
  const articles = blogPosts
    .filter(post => post.category === category && post.slug !== excludeSlug)
    .slice(0, maxItems);

  if (articles.length === 0) return null;

  return (
    <section className="py-12 bg-white border-t border-brand-grey/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-brand-green" />
          <h2 className="text-xl font-bold text-brand-dark">{title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={`/insights/${article.slug}`}>
              <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group h-full">
                <div className="inline-block px-2 py-1 bg-brand-green/10 rounded text-brand-green text-xs font-medium mb-3">
                  {categoryLabels[article.category]}
                </div>
                <h3 className="font-semibold text-brand-dark mb-2 group-hover:text-brand-green transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-brand-dark/70 line-clamp-2">{article.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/insights">
            <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/5">
              Alle Insights ansehen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function RelatedServices({ 
  services,
  title = "Weitere Leistungen" 
}: { 
  services: RelatedService[];
  title?: string;
}) {
  return (
    <section className="py-12 bg-brand-light border-t border-brand-grey/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-brand-dark mb-6">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            const colors = colorClasses[service.color];
            
            return (
              <Link key={service.href} href={service.href}>
                <Card className={`p-6 bg-white border-brand-grey/20 ${colors.hoverBorder} transition-colors cursor-pointer group h-full`}>
                  <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-2 group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-dark/70 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-brand-green text-sm font-medium">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceCTA({ 
  service 
}: { 
  service: "cannabis" | "medtech" | "handel" | "ki";
}) {
  const serviceData = {
    cannabis: {
      title: "Medizinisches Cannabis",
      description: "EU-GMP/GDP-Beratung, Markteintritt und Supply Chain für Cannabis-Unternehmen.",
      href: "/leistungen/medizinisches-cannabis",
      bgClass: "bg-brand-green/5",
      borderClass: "border-brand-green/20",
      hoverBorderClass: "hover:border-brand-green",
      iconBgClass: "bg-brand-green/10",
      iconColorClass: "text-brand-green"
    },
    medtech: {
      title: "Medizintechnik",
      description: "Go-to-Market, Prozessoptimierung und Sales Enablement für Medizintechnik-Unternehmen.",
      href: "/leistungen/medizintechnik",
      bgClass: "bg-brand-cyan/5",
      borderClass: "border-brand-cyan/20",
      hoverBorderClass: "hover:border-brand-cyan",
      iconBgClass: "bg-brand-cyan/10",
      iconColorClass: "text-brand-cyan"
    },
    handel: {
      title: "Medizinalhandel",
      description: "Vertriebsstrategie und Key Account Management für Händler und Distributoren.",
      href: "/leistungen/medizinalhandel",
      bgClass: "bg-brand-cyan/5",
      borderClass: "border-brand-cyan/20",
      hoverBorderClass: "hover:border-brand-cyan",
      iconBgClass: "bg-brand-cyan/10",
      iconColorClass: "text-brand-cyan"
    },
    ki: {
      title: "KI für Sales & BD",
      description: "Copilot & ChatGPT Workshops, Prompt-Playbooks und Enablement-Programme.",
      href: "/leistungen/ki-sales-bd",
      bgClass: "bg-brand-green/5",
      borderClass: "border-brand-green/20",
      hoverBorderClass: "hover:border-brand-green",
      iconBgClass: "bg-brand-green/10",
      iconColorClass: "text-brand-green"
    }
  };

  const data = serviceData[service];
  const Icon = serviceIcons[service];

  return (
    <Link href={data.href}>
      <Card className={`p-6 ${data.bgClass} ${data.borderClass} ${data.hoverBorderClass} transition-colors cursor-pointer group`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 ${data.iconBgClass} rounded-xl flex items-center justify-center shrink-0`}>
            <Icon className={`w-6 h-6 ${data.iconColorClass}`} />
          </div>
          <div>
            <h3 className="font-semibold text-brand-dark mb-1 group-hover:text-brand-green transition-colors">
              {data.title}
            </h3>
            <p className="text-sm text-brand-dark/70">{data.description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
