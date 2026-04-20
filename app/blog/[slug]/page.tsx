import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogArticlePage } from '@/components/blog-article-page';
import { getAllArticles, getArticleBySlug } from '@/lib/blog';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: 'Article not found | Rutherford.fr',
    };
  }

  return {
    title: `${article.title} | Rutherford Blog`,
    description: article.lead,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Rutherford Blog`,
      description: article.lead,
      type: 'article',
      url: `/blog/${article.slug}`,
      images: article.image ? [{ url: article.image, alt: article.title }] : undefined,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <BlogArticlePage article={article} />;
}
