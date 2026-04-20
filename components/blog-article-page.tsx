'use client';

import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { useLanguage } from '@/components/language-provider';
import type { BlogArticle } from '@/lib/blog';

export function BlogArticlePage({ article }: { article: BlogArticle }) {
  const { locale } = useLanguage();
  const labels = {
    en: { sources: 'Sources', back: 'Back to all articles', original: 'Original page' },
    fr: { sources: 'Sources', back: 'Retour aux articles', original: "Page d'origine" },
    de: { sources: 'Quellen', back: 'Zurück zu allen Artikeln', original: 'Originalseite' },
    it: { sources: 'Fonti', back: 'Torna a tutti gli articoli', original: 'Pagina originale' },
    es: { sources: 'Fuentes', back: 'Volver a todos los artículos', original: 'Página original' },
  }[locale];

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
                <h2>{labels.sources}</h2>
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
            {labels.back}
          </a>
          <a className="button button-accent" href={article.originalUrl} target="_blank" rel="noreferrer">
            {labels.original}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
