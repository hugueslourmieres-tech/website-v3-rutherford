'use client';

import dynamic from 'next/dynamic';
import { useLanguage, type Locale } from '@/components/language-provider';
import { SiteNav } from '@/components/site-nav';
import { ScrollReveal } from '@/components/scroll-reveal';

const BrandExplainerSection = dynamic(
  () => import('@/components/brand-explainer-section').then((module) => module.BrandExplainerSection),
  { ssr: true }
);
const HowRutherfordHelps = dynamic(
  () => import('@/components/how-rutherford-helps').then((module) => module.HowRutherfordHelps),
  { ssr: true }
);
const ColorLoopSection = dynamic(
  () => import('@/components/colorloop-section').then((module) => module.ColorLoopSection),
  { ssr: true }
);
const ConsoleValidationCTA = dynamic(
  () => import('@/components/console-validation-cta').then((module) => module.ConsoleValidationCTA),
  { ssr: true }
);
const CaseStudiesShowcase = dynamic(
  () => import('@/components/case-studies-showcase').then((module) => module.CaseStudiesShowcase),
  { ssr: true }
);
const AudienceSection = dynamic(
  () => import('@/components/audience-section').then((module) => module.AudienceSection),
  { ssr: true }
);
const BlogPreviewSection = dynamic(
  () => import('@/components/blog-preview-section').then((module) => module.BlogPreviewSection),
  { ssr: true }
);
const TeamShowcase = dynamic(
  () => import('@/components/team-showcase').then((module) => module.TeamShowcase),
  { ssr: true }
);
const RutherfordIdentitySection = dynamic(
  () => import('@/components/rutherford-identity-section').then((module) => module.RutherfordIdentitySection),
  { ssr: true }
);
const PPWRSection = dynamic(
  () => import('@/components/ppwr-section').then((module) => module.PPWRSection),
  { ssr: true }
);
const SiteFooter = dynamic(
  () => import('@/components/site-footer').then((module) => module.SiteFooter),
  { ssr: true }
);

type HeroCopy = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  supporting: string;
  primaryCta: string;
  secondaryCta: string;
  tertiaryCta: string;
};

const HERO_COPY: Record<Locale, HeroCopy> = {
  en: {
    eyebrow: 'Offset printing expertise',
    headlineLead: 'Improve color control and',
    headlineAccent: 'reduce makeready waste.',
    supporting:
      'From closed-loop workflow expertise to modern production software, Rutherford supports offset teams that want faster setup, stronger repeatability, and clearer press-side control. ColorLoop is Rutherford’s latest software platform for smarter offset production.',
    primaryCta: 'Request console validation',
    secondaryCta: 'Request an audit',
    tertiaryCta: 'Discover ColorLoop',
  },
  fr: {
    eyebrow: 'Expertise impression offset',
    headlineLead: 'Améliorer le contrôle couleur et',
    headlineAccent: 'réduire la gâche au calage.',
    supporting:
      "De l’expertise closed-loop aux logiciels de production modernes, Rutherford accompagne les équipes offset qui veulent un calage plus rapide, une meilleure répétabilité et un contrôle presse plus clair. ColorLoop est la dernière plateforme logicielle de Rutherford pour une production offset plus intelligente.",
    primaryCta: 'Demander une validation console',
    secondaryCta: 'Demander un audit',
    tertiaryCta: 'Découvrir ColorLoop',
  },
  de: {
    eyebrow: 'Expertise im Offsetdruck',
    headlineLead: 'Farbsteuerung verbessern und',
    headlineAccent: 'Makulatur beim Einrichten reduzieren.',
    supporting:
      'Von Closed-Loop-Workflow-Expertise bis zu moderner Produktionssoftware unterstützt Rutherford Offsetteams, die schnelleres Einrichten, bessere Wiederholbarkeit und klarere Maschinensteuerung wollen. ColorLoop ist Rutherfords neueste Softwareplattform für eine intelligentere Offsetproduktion.',
    primaryCta: 'Konsolenvalidierung anfragen',
    secondaryCta: 'Audit anfragen',
    tertiaryCta: 'ColorLoop entdecken',
  },
  it: {
    eyebrow: 'Expertise nella stampa offset',
    headlineLead: 'Migliorare il controllo colore e',
    headlineAccent: 'ridurre lo scarto di avviamento.',
    supporting:
      "Dall’expertise closed-loop ai software di produzione moderni, Rutherford supporta i team offset che vogliono avviamenti più rapidi, maggiore ripetibilità e un controllo di macchina più chiaro. ColorLoop è l’ultima piattaforma software di Rutherford per una produzione offset più intelligente.",
    primaryCta: 'Richiedi validazione console',
    secondaryCta: 'Richiedi un audit',
    tertiaryCta: 'Scopri ColorLoop',
  },
  es: {
    eyebrow: 'Experiencia en impresión offset',
    headlineLead: 'Mejorar el control del color y',
    headlineAccent: 'reducir el desperdicio de puesta a punto.',
    supporting:
      'Desde la experiencia closed-loop hasta el software de producción moderno, Rutherford acompaña a los equipos offset que buscan puestas a punto más rápidas, mejor repetibilidad y un control de prensa más claro. ColorLoop es la última plataforma de software de Rutherford para una producción offset más inteligente.',
    primaryCta: 'Solicitar validación de consola',
    secondaryCta: 'Solicitar una auditoría',
    tertiaryCta: 'Descubrir ColorLoop',
  },
};

export default function HomePage() {
  const { locale } = useLanguage();
  const t = HERO_COPY[locale];

  return (
    <main className="page-shell" id="top">
      <ScrollReveal />
      <SiteNav current="home" />

      <section className="hero-section">
        <div className="hero-background" aria-hidden="true">
          <span className="hero-orb hero-orb-a" />
          <span className="hero-orb hero-orb-b" />
          <span className="hero-orb hero-orb-c" />
          <span className="hero-grid" />
        </div>

        <div className="container hero-stack">
          <div className="hero-copy">
            <p className="hero-kicker">{t.eyebrow}</p>
            <h1 className="hero-headline">
              <span className="hero-headline-line hero-headline-line-1">{t.headlineLead}</span>{' '}
              <span className="hero-headline-line hero-headline-line-2">
                <span className="hero-headline-accent">{t.headlineAccent}</span>
              </span>
            </h1>
            <p className="hero-supporting">{t.supporting}</p>

            <div className="hero-actions">
              <a className="button button-dark hero-cta" href="/console-validation">
                {t.primaryCta}
              </a>
              <a className="button button-light hero-cta" href="mailto:contact@rutherford.fr">
                {t.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <RutherfordIdentitySection />

      <BrandExplainerSection />

      <ConsoleValidationCTA />

      <HowRutherfordHelps />

      <ColorLoopSection />

      <CaseStudiesShowcase />

      <AudienceSection />

      <BlogPreviewSection />

      <PPWRSection />

      <TeamShowcase />

      <SiteFooter />
    </main>
  );
}
