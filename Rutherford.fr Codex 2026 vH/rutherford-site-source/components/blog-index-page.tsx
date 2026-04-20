'use client';

import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { useLanguage } from '@/components/language-provider';
import type { BlogArticle } from '@/lib/blog';

export function BlogIndexPage({ articles }: { articles: BlogArticle[] }) {
  const { locale } = useLanguage();

  return (
    <main className="page-shell">
      <SiteNav current="blog" />

      <section className="blog-hero section">
        <div className="container blog-hero-inner">
          <p className="section-kicker">{locale === 'fr' ? 'Rutherford Journal' : 'Rutherford Journal'}</p>
          <h1>{locale === 'fr' ? 'Our Articles' : 'Our Articles'}</h1>
          <p>
            {locale === 'fr'
              ? 'News, testimonials, case studies and production insights from the field.'
              : 'News, testimonials, case studies and production insights from the field.'}
          </p>
        </div>
      </section>

      <section className="section blog-index-section">
        <div className="container">
          <div className="blog-count">
            <strong>{articles.length}</strong>
            <span>{locale === 'fr' ? 'articles indexés' : 'indexed articles'}</span>
          </div>

          <div className="blog-grid">
            {articles.map((article) => (
              <article className="blog-card" key={article.slug}>
                {article.image ? (
                  <div className="blog-card-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                ) : null}
                <div className="blog-card-body">
                  <p className="section-kicker">{article.category}</p>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                  <a className="button button-outline blog-card-button" href={`/blog/${article.slug}`}>
                    {locale === 'fr' ? "Lire l'article" : 'Read article'}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
