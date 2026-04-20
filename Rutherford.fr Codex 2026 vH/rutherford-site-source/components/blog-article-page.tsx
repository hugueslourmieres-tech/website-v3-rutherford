'use client';

import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { useLanguage } from '@/components/language-provider';
import type { BlogArticle } from '@/lib/blog';

export function BlogArticlePage({ article }: { article: BlogArticle }) {
  const { locale } = useLanguage();

  return (
    <main className="page-shell">
      <SiteNav current="blog" />

      <section className="article-hero section">
        <div className="container article-hero-inner">
          <p className="section-kicker">{article.category}</p>
          <h1>{article.title}</h1>
          <p>{article.lead}</p>
        </div>
      </section>

      <section className="section article-section">
        <div className="container article-layout">
          <figure className="article-media">
            {article.image ? <img src={article.image} alt={article.title} /> : null}
          </figure>

          <article className="article-content">
            {article.paragraphs.map((paragraph, index) => (
              <p key={`${article.slug}-${index}`}>{paragraph}</p>
            ))}

            {article.sources?.length ? (
              <div className="article-sources">
                <h2>Sources</h2>
                <ul>
                  {article.sources.map((source) => (
                    <li key={source.href}>
                      <a href={source.href} target="_blank" rel="noreferrer">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        </div>

        <div className="container article-actions">
          <a className="button button-light" href="/blog">
            {locale === 'fr' ? 'Retour aux articles' : 'Back to all articles'}
          </a>
          <a className="button button-accent" href={article.originalUrl} target="_blank" rel="noreferrer">
            {locale === 'fr' ? "Page d'origine" : 'Original page'}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
