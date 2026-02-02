import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTABand } from "@/components/CTABand";
import { SEO } from "@/components/SEO";
import { getPostBySlug, blogPosts } from "@/content/posts";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

const categoryLabels: Record<string, string> = {
  cannabis: "Cannabis",
  medtech: "Medizintechnik",
  allgemein: "Allgemein",
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
