'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/language-provider';

type SiteNavProps = {
  current?: 'home' | 'blog' | 'console-validation' | 'support';
};

export function SiteNav({ current = 'home' }: SiteNavProps) {
  const { locale } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brandmark" href="/" aria-label="Rutherford.fr">
          <Image src="/images/rutherford-logo-black.png" alt="Rutherford.fr" width={300} height={58} sizes="184px" priority />
        </a>

        <button
          type="button"
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          aria-label={locale === 'fr' ? 'Ouvrir la navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`main-nav ${open ? 'is-open' : ''}`}
          aria-label={locale === 'fr' ? 'Navigation principale' : 'Main navigation'}
        >
          <a className={current === 'home' ? 'is-current' : undefined} href="/" onClick={() => setOpen(false)}>
            {locale === 'fr' ? 'Accueil' : 'Home'}
          </a>
          <a href="/#products" onClick={() => setOpen(false)}>
            {locale === 'fr' ? 'Produits' : 'Products'}
          </a>
          <a href="/#videos" onClick={() => setOpen(false)}>
            {locale === 'fr' ? 'Vidéos' : 'Videos'}
          </a>
          <a href="/#contact" onClick={() => setOpen(false)}>
            {locale === 'fr' ? 'Contact' : 'Contact'}
          </a>
          <a className={current === 'blog' ? 'is-current' : undefined} href="/blog" onClick={() => setOpen(false)}>
            Blog
          </a>
          <a
            className="mobile-nav-link mobile-nav-link-accent"
            href="/support"
            onClick={() => setOpen(false)}
          >
            {locale === 'fr' ? 'Support' : 'Support'}
          </a>
          <a
            className="mobile-nav-link mobile-nav-link-dark"
            href="/console-validation"
            onClick={() => setOpen(false)}
          >
            {locale === 'fr' ? 'Validation console' : 'Console Validation'}
          </a>
        </nav>

        <div className="header-actions">
          <a
            className="button button-accent header-button"
            href="/support"
          >
            {locale === 'fr' ? 'Support' : 'Support'}
          </a>
          <a
            className="button button-dark header-button"
            href="/console-validation"
          >
            {locale === 'fr' ? 'Validation console' : 'Console Validation'}
          </a>
        </div>
      </div>
    </header>
  );
}
