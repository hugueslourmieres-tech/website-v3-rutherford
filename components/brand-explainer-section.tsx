'use client';

import { useLanguage, type Locale } from '@/components/language-provider';

type CardCopy = { title: string; body: string; ctaLabel?: string; href?: string };

type Copy = {
  kicker: string;
  headline: string;
  intro: string;
  rutherford: CardCopy;
  colorloop: CardCopy;
  veoria: CardCopy;
};

const COPY: Record<Locale, Copy> = {
  en: {
    kicker: 'How we work',
    headline: 'The expertise, software, and technology behind Rutherford',
    intro:
      'Rutherford combines offset print expertise, software, and technology to help modernize production control.',
    rutherford: {
      title: 'Rutherford',
      body: 'Rutherford brings years of offset print expertise in color management, press-side workflow, and production consistency.',
      ctaLabel: 'Visit rutherford.fr',
      href: 'https://www.rutherford.fr/',
    },
    colorloop: {
      title: 'ColorLoop',
      body: 'ColorLoop is Rutherford’s software platform for modern offset production control, built from real pressroom experience.',
      ctaLabel: 'Visit colorloop.ai',
      href: 'https://colorloop.ai/',
    },
    veoria: {
      title: 'VEORIA',
      body: 'VEORIA, Rutherford’s sister company, is a printing technology company focused on industrial printing systems and inline color control for label printing. Its engineering team developed the technology behind ColorLoop together with Rutherford’s offset printing expertise.',
      ctaLabel: 'Visit veoria.fr',
      href: 'https://veoria.fr/',
    },
  },
  fr: {
    kicker: 'Comment nous travaillons',
    headline: 'L’expertise, le logiciel et la technologie derrière Rutherford',
    intro:
      'Rutherford réunit expertise de l’impression offset, logiciel et technologie pour moderniser le contrôle de production.',
    rutherford: {
      title: 'Rutherford',
      body: 'Rutherford apporte des années d’expertise offset en gestion de la couleur, workflow presse et constance de production.',
      ctaLabel: 'Visiter rutherford.fr',
      href: 'https://www.rutherford.fr/',
    },
    colorloop: {
      title: 'ColorLoop',
      body: 'ColorLoop est la plateforme logicielle de Rutherford pour le contrôle moderne de la production offset, conçue à partir d’une expérience terrain.',
      ctaLabel: 'Visiter colorloop.ai',
      href: 'https://colorloop.ai/',
    },
    veoria: {
      title: 'VEORIA',
      body: 'VEORIA, société sœur de Rutherford, est une entreprise de technologies d’impression spécialisée dans les systèmes industriels et le contrôle couleur inline pour l’étiquette. Ses équipes d’ingénierie ont développé la technologie de ColorLoop avec l’expertise offset de Rutherford.',
      ctaLabel: 'Visiter veoria.fr',
      href: 'https://veoria.fr/',
    },
  },
  de: {
    kicker: 'So arbeiten wir',
    headline: 'Die Expertise, Software und Technologie hinter Rutherford',
    intro:
      'Rutherford verbindet Offset-Druckexpertise, Software und Technologie, um die Produktionssteuerung zu modernisieren.',
    rutherford: {
      title: 'Rutherford',
      body: 'Rutherford bringt jahrelange Offset-Druckexpertise in Farbmanagement, pressenseitigem Workflow und Produktionskonstanz.',
      ctaLabel: 'rutherford.fr besuchen',
      href: 'https://www.rutherford.fr/',
    },
    colorloop: {
      title: 'ColorLoop',
      body: 'ColorLoop ist Rutherfords Softwareplattform für moderne Offset-Produktionssteuerung, entwickelt aus realer Druckraumerfahrung.',
      ctaLabel: 'colorloop.ai besuchen',
      href: 'https://colorloop.ai/',
    },
    veoria: {
      title: 'VEORIA',
      body: 'VEORIA, Rutherfords Schwesterunternehmen, ist ein Drucktechnologieunternehmen mit Fokus auf industrielle Drucksysteme und Inline-Farbkontrolle für den Etikettendruck. Das Engineering-Team hat die Technologie hinter ColorLoop gemeinsam mit Rutherfords Offset-Expertise entwickelt.',
      ctaLabel: 'veoria.fr besuchen',
      href: 'https://veoria.fr/',
    },
  },
  it: {
    kicker: 'Come lavoriamo',
    headline: 'L’expertise, il software e la tecnologia dietro Rutherford',
    intro:
      'Rutherford combina expertise di stampa offset, software e tecnologia per modernizzare il controllo di produzione.',
    rutherford: {
      title: 'Rutherford',
      body: 'Rutherford porta anni di expertise nella stampa offset in gestione del colore, workflow di stampa e consistenza produttiva.',
      ctaLabel: 'Visita rutherford.fr',
      href: 'https://www.rutherford.fr/',
    },
    colorloop: {
      title: 'ColorLoop',
      body: 'ColorLoop è la piattaforma software di Rutherford per il controllo moderno della produzione offset, costruita sull’esperienza reale in pressroom.',
      ctaLabel: 'Visita colorloop.ai',
      href: 'https://colorloop.ai/',
    },
    veoria: {
      title: 'VEORIA',
      body: 'VEORIA, azienda sorella di Rutherford, è una società di tecnologie di stampa focalizzata su sistemi industriali e controllo colore inline per le etichette. Il team di ingegneria ha sviluppato la tecnologia dietro ColorLoop insieme all’expertise offset di Rutherford.',
      ctaLabel: 'Visita veoria.fr',
      href: 'https://veoria.fr/',
    },
  },
  es: {
    kicker: 'Cómo trabajamos',
    headline: 'La experiencia, el software y la tecnología detrás de Rutherford',
    intro:
      'Rutherford combina experiencia en impresión offset, software y tecnología para modernizar el control de producción.',
    rutherford: {
      title: 'Rutherford',
      body: 'Rutherford aporta años de experiencia en impresión offset en gestión del color, flujo de trabajo junto a la prensa y consistencia de producción.',
      ctaLabel: 'Visitar rutherford.fr',
      href: 'https://www.rutherford.fr/',
    },
    colorloop: {
      title: 'ColorLoop',
      body: 'ColorLoop es la plataforma de software de Rutherford para el control moderno de la producción offset, construida desde la experiencia real en sala de prensa.',
      ctaLabel: 'Visitar colorloop.ai',
      href: 'https://colorloop.ai/',
    },
    veoria: {
      title: 'VEORIA',
      body: 'VEORIA, empresa hermana de Rutherford, es una compañía de tecnología de impresión centrada en sistemas industriales y control de color inline para la etiqueta. Su equipo de ingeniería desarrolló la tecnología de ColorLoop junto con la experiencia offset de Rutherford.',
      ctaLabel: 'Visitar veoria.fr',
      href: 'https://veoria.fr/',
    },
  },
};

export function BrandExplainerSection() {
  const { locale } = useLanguage();
  const t = COPY[locale];

  const cards: Array<{ key: 'rutherford' | 'colorloop' | 'veoria'; content: CardCopy }> = [
    { key: 'rutherford', content: t.rutherford },
    { key: 'colorloop', content: t.colorloop },
    { key: 'veoria', content: t.veoria },
  ];

  return (
    <section className="section brand-explainer-section" id="about">
      <div className="container brand-explainer-shell">
        <header className="brand-explainer-header">
          <p className="section-kicker">{t.kicker}</p>
          <h2 className="brand-explainer-headline">{t.headline}</h2>
          <p className="brand-explainer-intro">{t.intro}</p>
        </header>

        <div className="brand-explainer-grid">
          {cards.map(({ key, content }, index) => (
            <article key={key} className={`brand-explainer-card brand-explainer-card-${key}`}>
              <p className="brand-explainer-card-label">0{index + 1}</p>
              <h3>{content.title}</h3>
              <p>{content.body}</p>
              {content.href && content.ctaLabel ? (
                <a
                  className="brand-explainer-card-cta"
                  href={content.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.ctaLabel} <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
