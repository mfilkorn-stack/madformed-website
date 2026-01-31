import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/content/posts";
import { ArrowRight, Calendar, User } from "lucide-react";

const categoryLabels: Record<string, string> = {
  cannabis: "Cannabis",
  medtech: "Medizintechnik",
  allgemein: "Allgemein",
};

export default function Insights() {
  return (
    <div className="bg-brand-light">
      <SEO
        title="Insights & Blog"
        description="Aktuelle Einblicke, Analysen und Perspektiven aus den Bereichen medizinisches Cannabis und Medizintechnik."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
              Insights
            </h1>
            <p className="text-lg text-brand-dark/70 leading-relaxed">
              Aktuelle Einblicke, Analysen und Perspektiven aus den Bereichen 
              medizinisches Cannabis und Medizintechnik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`}>
                <Card
                  className="p-6 bg-white border-brand-grey/20 hover:border-brand-green transition-colors cursor-pointer group h-full flex flex-col"
                  data-testid={`blog-card-${post.slug}`}
                >
                  <div className="inline-block px-2 py-1 bg-brand-green/10 rounded text-brand-green text-xs font-medium mb-3 self-start">
                    {categoryLabels[post.category]}
                  </div>
                  <h2 className="text-lg font-semibold text-brand-dark mb-3 group-hover:text-brand-green transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-brand-dark/70 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-brand-dark/50 pt-4 border-t border-brand-grey/10">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString("de-DE")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center text-brand-green text-sm font-medium mt-4">
                    Weiterlesen
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Fragen zu unseren Insights?"
        subtitle="Sprechen Sie uns an – wir freuen uns auf den Austausch."
      />
    </div>
  );
}
