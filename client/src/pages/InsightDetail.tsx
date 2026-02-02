import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { getPostBySlug, blogPosts } from "@/content/posts";
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Leaf, Monitor, Brain, ShoppingCart } from "lucide-react";

const categoryLabels: Record<string, string> = {
  cannabis: "Cannabis",
  medtech: "Medizintechnik",
  ki: "KI",
  allgemein: "Allgemein",
};

interface ServiceLink {
  title: string;
  href: string;
  description: string;
  Icon: React.ElementType;
  bgClass: string;
  borderClass: string;
  hoverBorderClass: string;
  iconBgClass: string;
  iconColorClass: string;
}

const categoryToService: Record<string, ServiceLink> = {
  cannabis: {
    title: "Cannabis-Beratung",
    href: "/leistungen/medizinisches-cannabis",
    description: "EU-GMP/GDP, Supply Chain und Markteintritt",
    Icon: Leaf,
    bgClass: "bg-brand-green/5",
    borderClass: "border-brand-green/20",
    hoverBorderClass: "hover:border-brand-green",
    iconBgClass: "bg-brand-green/10",
    iconColorClass: "text-brand-green"
  },
  medtech: {
    title: "Medizintechnik-Beratung",
    href: "/leistungen/medizintechnik",
    description: "Go-to-Market und Sales Enablement",
    Icon: Monitor,
    bgClass: "bg-brand-cyan/5",
    borderClass: "border-brand-cyan/20",
    hoverBorderClass: "hover:border-brand-cyan",
    iconBgClass: "bg-brand-cyan/10",
    iconColorClass: "text-brand-cyan"
  },
  ki: {
    title: "KI-Workshops",
    href: "/leistungen/ki-sales-bd",
    description: "Copilot & ChatGPT für Vertriebsteams",
    Icon: Brain,
    bgClass: "bg-brand-green/5",
    borderClass: "border-brand-green/20",
    hoverBorderClass: "hover:border-brand-green",
    iconBgClass: "bg-brand-green/10",
    iconColorClass: "text-brand-green"
  },
  allgemein: {
    title: "Unsere Leistungen",
    href: "/leistungen",
    description: "Beratung für Cannabis, Medizintechnik und KI",
    Icon: ShoppingCart,
    bgClass: "bg-brand-cyan/5",
    borderClass: "border-brand-cyan/20",
    hoverBorderClass: "hover:border-brand-cyan",
    iconBgClass: "bg-brand-cyan/10",
    iconColorClass: "text-brand-cyan"
  }
};

export default function InsightDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="bg-brand-light min-h-screen py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-brand-dark mb-4">Artikel nicht gefunden</h1>
          <p className="text-brand-dark/70 mb-8">Der gesuchte Artikel existiert nicht.</p>
          <Link href="/insights">
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white">
              Zurück zu Insights
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-brand-light">
      <SEO
        title={post.title}
        description={post.excerpt}
        ogType="article"
      />
      <article className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/insights">
            <span className="inline-flex items-center text-brand-dark/60 hover:text-brand-green text-sm mb-6 cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Insights
            </span>
          </Link>

          <div className="inline-block px-2 py-1 bg-brand-green/10 rounded text-brand-green text-xs font-medium mb-4">
            {categoryLabels[post.category]}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-brand-dark/60 mb-8 pb-8 border-b border-brand-grey/20">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString("de-DE", { 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none prose-headings:text-brand-dark prose-p:text-brand-dark/80 prose-a:text-brand-green prose-strong:text-brand-dark prose-ul:text-brand-dark/80 prose-li:text-brand-dark/80"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
          />

          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-brand-grey/20">
            <Tag className="w-4 h-4 text-brand-dark/60" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 bg-white rounded-full text-xs text-brand-dark/70 border border-brand-grey/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {categoryToService[post.category] && (() => {
        const service = categoryToService[post.category];
        const ServiceIcon = service.Icon;
        return (
          <section className="py-12 bg-white border-t border-brand-grey/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-brand-dark mb-6">Passende Beratungsleistung</h2>
              <Link href={service.href}>
                <Card className={`p-6 ${service.bgClass} ${service.borderClass} ${service.hoverBorderClass} transition-colors cursor-pointer group`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${service.iconBgClass} rounded-xl flex items-center justify-center shrink-0`}>
                      <ServiceIcon className={`w-6 h-6 ${service.iconColorClass}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-brand-dark mb-1 group-hover:text-brand-green transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-brand-dark/70 mb-2">{service.description}</p>
                      <span className="inline-flex items-center text-brand-green text-sm font-medium">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </section>
        );
      })()}

      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-8">Weitere Artikel</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/insights/${relatedPost.slug}`}>
                  <Card className="p-6 bg-brand-light border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group">
                    <div className="inline-block px-2 py-1 bg-brand-green/10 rounded text-brand-green text-xs font-medium mb-3">
                      {categoryLabels[relatedPost.category]}
                    </div>
                    <h3 className="font-semibold text-brand-dark mb-2 group-hover:text-brand-green transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-brand-dark/70">{relatedPost.excerpt}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </div>
  );
}
