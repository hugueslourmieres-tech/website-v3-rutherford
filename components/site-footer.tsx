'use client';

import { useLanguage, type Locale } from '@/components/language-provider';
import { SocialLinks } from '@/components/social-links';
import type { SocialLink } from '@/components/social-links';

const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/rutherford-graphic-products-llc' },
  { label: 'Instagram', href: 'https://www.instagram.com/rutherfordgraphic/' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UChiClIodg9rbuTDnInE4GmQ' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@rutherfordgraphic' },
];

const partnerLinks = [
  { label: 'ColorLoop.ai', href: 'https://colorloop.ai/' },
  { label: 'Veoria.fr', href: 'https://veoria.fr/' },
  { label: 'PPWRConnect.com', href: 'https://ppwrconnect.com/' },
];

export function SiteFooter() {
  const { locale } = useLanguage();
  const copy: Record<
    Locale,
    {
      kicker: string;
      title: string;
      body: string;
      firstName: string;
      lastName: string;
      company: string;
      email: string;
      help: string;
      placeholder: string;
      send: string;
      platforms: string;
      follow: string;
      rights: string;
    }
  > = {
    en: {
      kicker: 'Contact',
      title: 'Contact',
      body: '',
      firstName: 'First name',
      lastName: 'Last name',
      company: 'Company',
      email: 'Email',
      help: 'How can we help?',
      placeholder: 'Tell us about your press environment, project or compliance needs.',
      send: 'Send request',
      platforms: 'Platforms',
      follow: 'Follow Rutherford',
      rights: 'All Rights Reserved',
    },
    fr: {
      kicker: 'Contact',
      title: 'Contact',
      body: '',
      firstName: 'Prénom',
      lastName: 'Nom',
      company: 'Entreprise',
      email: 'Email',
      help: 'Comment pouvons-nous vous aider ?',
      placeholder: 'Décrivez votre environnement machine, votre projet ou vos besoins de conformité.',
      send: 'Envoyer',
      platforms: 'Plateformes',
      follow: 'Suivre Rutherford',
      rights: 'Tous droits réservés',
    },
    de: {
      kicker: 'Kontakt',
      title: 'Kontakt',
      body: '',
      firstName: 'Vorname',
      lastName: 'Nachname',
      company: 'Unternehmen',
      email: 'E-Mail',
      help: 'Wie können wir helfen?',
      placeholder: 'Beschreiben Sie Ihre Druckumgebung, Ihr Projekt oder Ihre Compliance-Anforderungen.',
      send: 'Anfrage senden',
      platforms: 'Plattformen',
      follow: 'Rutherford folgen',
      rights: 'Alle Rechte vorbehalten',
    },
    it: {
      kicker: 'Contatto',
      title: 'Contatto',
      body: '',
      firstName: 'Nome',
      lastName: 'Cognome',
      company: 'Azienda',
      email: 'Email',
      help: 'Come possiamo aiutarti?',
      placeholder: 'Descrivi il tuo ambiente di stampa, il progetto o le esigenze di conformità.',
      send: 'Invia richiesta',
      platforms: 'Piattaforme',
      follow: 'Segui Rutherford',
      rights: 'Tutti i diritti riservati',
    },
    es: {
      kicker: 'Contacto',
      title: 'Contacto',
      body: '',
      firstName: 'Nombre',
      lastName: 'Apellido',
      company: 'Empresa',
      email: 'Correo electrónico',
      help: '¿Cómo podemos ayudarle?',
      placeholder: 'Describa su entorno de impresión, su proyecto o sus necesidades de cumplimiento.',
      send: 'Enviar solicitud',
      platforms: 'Plataformas',
      follow: 'Siga a Rutherford',
      rights: 'Todos los derechos reservados',
    },
  };
  const t = copy[locale];

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-shell">
        <section className="footer-contact-card">
          <div className="footer-contact-copy">
            <h2>{t.title}</h2>
          </div>
          <div className="footer-contact-layout">
            <form
              action="https://formsubmit.co/contact@roterford.fr"
              method="POST"
              className="footer-contact-form"
            >
              <input type="hidden" name="_subject" value="New Rutherford contact request" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" className="footer-honeypot" tabIndex={-1} autoComplete="off" />

              <div className="footer-form-grid">
                <label>
                  <span>{t.firstName}</span>
                  <input type="text" name="first_name" required />
                </label>
                <label>
                  <span>{t.lastName}</span>
                  <input type="text" name="last_name" required />
                </label>
              </div>

              <div className="footer-form-grid">
                <label>
                  <span>{t.company}</span>
                  <input type="text" name="company" required />
                </label>
                <label>
                  <span>{t.email}</span>
                  <input type="email" name="email" required />
                </label>
              </div>

              <label>
                <span>{t.help}</span>
                <textarea name="message" rows={6} placeholder={t.placeholder} />
              </label>

              <button type="submit" className="button button-dark footer-contact-button">
                {t.send}
              </button>
            </form>

            <div className="footer-links-grid">
              <section className="footer-links-column">
                <h3>{t.platforms}</h3>
                <div className="footer-link-list">
                  {partnerLinks.map((link) => (
                    <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </section>

              <section className="footer-links-column">
                <h3>{t.follow}</h3>
                <SocialLinks links={socialLinks} className="footer-socials social-links" />
              </section>
            </div>
          </div>
        </section>

        <div className="footer-bottom">
          <p><strong>Rutherford.fr</strong></p>
          <p>© Rutherford.fr 2026</p>
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
