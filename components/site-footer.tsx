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

const platformLinks = [
  { label: 'ColorLoop.ai', href: 'https://colorloop.ai/' },
  { label: 'Veoria.fr', href: 'https://veoria.fr/' },
  { label: 'PPWRConnect.com', href: 'https://ppwrconnect.com/' },
];

type ResourceKey = 'blog' | 'support' | 'console';

type Copy = {
  kicker: string;
  title: string;
  tagline: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  help: string;
  placeholder: string;
  send: string;
  platforms: string;
  resources: string;
  follow: string;
  rights: string;
  resourceLabels: Record<ResourceKey, string>;
};

const COPY: Record<Locale, Copy> = {
  en: {
    kicker: 'Get in touch',
    title: 'Talk to Rutherford',
    tagline:
      "Tell us about your press environment, project or compliance needs. We usually get back within one working day.",
    firstName: 'First name',
    lastName: 'Last name',
    company: 'Company',
    email: 'Email',
    help: 'How can we help?',
    placeholder: "Share details about your setup, workflow or what you're trying to achieve.",
    send: 'Send request',
    platforms: 'Platforms',
    resources: 'Resources',
    follow: 'Follow',
    rights: 'All rights reserved',
    resourceLabels: { blog: 'Blog', support: 'Support', console: 'Console Validation' },
  },
  fr: {
    kicker: 'Nous contacter',
    title: 'Parlez à Rutherford',
    tagline:
      "Décrivez votre environnement machine, votre projet ou vos besoins de conformité. Nous revenons vers vous sous un jour ouvré.",
    firstName: 'Prénom',
    lastName: 'Nom',
    company: 'Entreprise',
    email: 'Email',
    help: 'Comment pouvons-nous vous aider ?',
    placeholder: "Partagez les détails sur votre installation, votre workflow ou ce que vous cherchez à accomplir.",
    send: 'Envoyer',
    platforms: 'Plateformes',
    resources: 'Ressources',
    follow: 'Suivre',
    rights: 'Tous droits réservés',
    resourceLabels: { blog: 'Blog', support: 'Support', console: 'Validation console' },
  },
  de: {
    kicker: 'Kontakt aufnehmen',
    title: 'Sprechen Sie mit Rutherford',
    tagline:
      'Beschreiben Sie Ihre Druckumgebung, Ihr Projekt oder Ihre Compliance-Anforderungen. Wir antworten in der Regel innerhalb eines Werktags.',
    firstName: 'Vorname',
    lastName: 'Nachname',
    company: 'Unternehmen',
    email: 'E-Mail',
    help: 'Wie können wir helfen?',
    placeholder: 'Teilen Sie uns Details zu Ihrem Setup, Workflow oder Ihrem Ziel mit.',
    send: 'Anfrage senden',
    platforms: 'Plattformen',
    resources: 'Ressourcen',
    follow: 'Folgen',
    rights: 'Alle Rechte vorbehalten',
    resourceLabels: { blog: 'Blog', support: 'Support', console: 'Konsolenvalidierung' },
  },
  it: {
    kicker: 'Contattaci',
    title: 'Parla con Rutherford',
    tagline:
      'Descrivi il tuo ambiente di stampa, il progetto o le esigenze di conformità. Di norma rispondiamo entro un giorno lavorativo.',
    firstName: 'Nome',
    lastName: 'Cognome',
    company: 'Azienda',
    email: 'Email',
    help: 'Come possiamo aiutarti?',
    placeholder: 'Condividi dettagli sul tuo setup, workflow o obiettivo.',
    send: 'Invia richiesta',
    platforms: 'Piattaforme',
    resources: 'Risorse',
    follow: 'Seguici',
    rights: 'Tutti i diritti riservati',
    resourceLabels: { blog: 'Blog', support: 'Supporto', console: 'Validazione console' },
  },
  es: {
    kicker: 'Contáctanos',
    title: 'Habla con Rutherford',
    tagline:
      'Describa su entorno de impresión, su proyecto o sus necesidades de cumplimiento. Solemos responder en un día hábil.',
    firstName: 'Nombre',
    lastName: 'Apellido',
    company: 'Correo electrónico',
    email: 'Email',
    help: '¿Cómo podemos ayudarle?',
    placeholder: 'Comparta detalles sobre su configuración, flujo de trabajo u objetivo.',
    send: 'Enviar solicitud',
    platforms: 'Plataformas',
    resources: 'Recursos',
    follow: 'Seguir',
    rights: 'Todos los derechos reservados',
    resourceLabels: { blog: 'Blog', support: 'Soporte', console: 'Validación de consola' },
  },
};

export function SiteFooter() {
  const { locale } = useLanguage();
  const t = COPY[locale];
  const year = new Date().getFullYear();

  const resourceLinks: { key: ResourceKey; href: string }[] = [
    { key: 'blog', href: '/blog' },
    { key: 'support', href: '/support' },
    { key: 'console', href: '/console-validation' },
  ];

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-top">
            <div className="footer-contact-block">
              <div className="footer-contact-header">
                <p className="footer-contact-kicker">{t.kicker}</p>
                <h2 className="footer-contact-title">{t.title}</h2>
                <p className="footer-contact-tagline">{t.tagline}</p>
              </div>
              <form
                action="https://formsubmit.co/contact@roterford.fr"
                method="POST"
                className="footer-form"
              >
                <input type="hidden" name="_subject" value="New Rutherford contact request" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="text"
                  name="_honey"
                  className="footer-honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="footer-form-row">
                  <label>
                    <span>{t.firstName}</span>
                    <input type="text" name="first_name" required />
                  </label>
                  <label>
                    <span>{t.lastName}</span>
                    <input type="text" name="last_name" required />
                  </label>
                </div>

                <div className="footer-form-row">
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
                  <textarea name="message" rows={5} placeholder={t.placeholder} />
                </label>

                <button type="submit" className="footer-form-submit">
                  {t.send}
                </button>
              </form>
            </div>

            <div className="footer-nav-block">
              <section className="footer-column">
                <h3>{t.platforms}</h3>
                <ul className="footer-column-list">
                  {platformLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="footer-column">
                <h3>{t.resources}</h3>
                <ul className="footer-column-list">
                  {resourceLinks.map((link) => (
                    <li key={link.key}>
                      <a href={link.href}>{t.resourceLabels[link.key]}</a>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="footer-column footer-column-follow">
                <h3>{t.follow}</h3>
                <SocialLinks links={socialLinks} className="footer-socials" />
              </section>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-brand">
              <span className="footer-bottom-name">Rutherford.fr</span>
              <span className="footer-bottom-sep" aria-hidden="true">•</span>
              <span>© {year}</span>
              <span className="footer-bottom-sep" aria-hidden="true">•</span>
              <span>{t.rights}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
