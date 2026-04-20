'use client';

import Image from 'next/image';
import { SocialLinks } from '@/components/social-links';
import type { SocialLink } from '@/components/social-links';
import { useLanguage } from '@/components/language-provider';

const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/rutherford-graphic-products-llc' },
  { label: 'Instagram', href: 'https://www.instagram.com/rutherfordgraphic/' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UChiClIodg9rbuTDnInE4GmQ' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@rutherfordgraphic' },
];

export function SiteFooter() {
  const { locale } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <section className="footer-newsletter">
          <div className="footer-brand">
            <Image src="/images/rutherford-logo-black.png" alt="Rutherford.fr" width={300} height={58} sizes="160px" />
          </div>
          <h3>Newsletter</h3>
          <p>
            {locale === 'fr'
              ? 'Recevez les nouveautés produit, études de cas et nouvelles sorties ColorLoop par email.'
              : 'Get product updates, case studies and new ColorLoop releases directly by email.'}
          </p>
          <form action="mailto:contact@rutherford.fr" method="post" encType="text/plain" className="newsletter-form">
            <input
              type="email"
              name="email"
              placeholder={locale === 'fr' ? 'Votre adresse email' : 'Your email address'}
              aria-label={locale === 'fr' ? 'Votre adresse email' : 'Your email address'}
            />
            <button type="submit">{locale === 'fr' ? "S'inscrire" : 'Subscribe'}</button>
          </form>
          <SocialLinks links={socialLinks} className="footer-socials social-links" />
        </section>
      </div>

      <div className="container footer-bottom">
        <p><strong>Rutherford.fr</strong></p>
        <p>© Rutherford.fr 2026</p>
        <p>{locale === 'fr' ? 'Tous droits réservés' : 'All Rights Reserved'}</p>
      </div>
    </footer>
  );
}
