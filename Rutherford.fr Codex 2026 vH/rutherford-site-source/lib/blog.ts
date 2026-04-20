import articles from '@/data/blog-articles.json';

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  lead: string;
  image: string;
  paragraphs: string[];
  originalUrl: string;
  category: string;
  sources?: Array<{
    label: string;
    href: string;
  }>;
};

const blogArticles = articles as BlogArticle[];

export function getAllArticles(): BlogArticle[] {
  return blogArticles;
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}
