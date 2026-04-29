import type { Metadata } from 'next';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Page not found | Rutherford.fr',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="page-shell" id="top">
      <SiteNav />

      <section className="not-found-section">
        <div className="container not-found-shell">
          <p className="not-found-kicker">404</p>
          <h1 className="not-found-title">This page doesn’t exist.</h1>
          <p className="not-found-body">
            The link is broken, or the page has moved. Let’s get you back on track.
          </p>
          <div className="not-found-actions">
            <a className="button button-dark" href="/">
              Back to home
            </a>
            <a className="button button-light" href="/blog">
              Read the blog
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
