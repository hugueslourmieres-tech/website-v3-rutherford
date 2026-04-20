'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useLanguage, type Locale } from '@/components/language-provider';
import { SiteNav } from '@/components/site-nav';

const ColorLoopShowcase = dynamic(
  () => import('@/components/colorloop-showcase').then((module) => module.ColorLoopShowcase),
  { ssr: true }
);
const FlexoShowcase = dynamic(
  () => import('@/components/flexo-showcase').then((module) => module.FlexoShowcase),
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
const VideoShowcase = dynamic(
  () => import('@/components/video-showcase').then((module) => module.VideoShowcase),
  { ssr: true }
);
const SiteFooter = dynamic(
  () => import('@/components/site-footer').then((module) => module.SiteFooter),
  { ssr: true }
);

export default function HomePage() {
  const { locale } = useLanguage();
  const copy: Record<
    Locale,
    {
      kicker: string;
      titleLine1: string;
      titleLine2: string;
      stamp: string;
      subheadline: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
    }
  > = {
    en: {
      kicker: 'Save ink, paper and energy 🌱',
      titleLine1: 'ColorLoop',
      titleLine2: 'Connect',
      stamp: 'PPWR Friendly',
      subheadline: 'Your new color management and production tracking tool for flexo and offset.',
      description:
        'Developed with Veoria, ColorLoop Connect helps offset and flexo teams centralize production data, color workflows, machine status and compliance visibility in one place. It supports practical preparation for PPWR and Digital Product Passport requirements while creating a clearer operational layer for traceability, reporting and day-to-day production management.',
      primaryCta: 'colorloop.ai',
      secondaryCta: 'Explore ColorLoop',
    },
    fr: {
      kicker: 'Économisez l’encre, le papier et l’énergie 🌱',
      titleLine1: 'ColorLoop',
      titleLine2: 'Connect',
      stamp: 'Compatible PPWR',
      subheadline: 'Votre nouvel outil de gestion de la couleur et de suivi de production pour la flexo et l’offset.',
      description:
        'Développé avec Veoria, ColorLoop Connect aide les équipes offset et flexo à centraliser les données de production, les workflows couleur, l’état des machines et la visibilité conformité dans une seule interface. Il facilite la préparation au PPWR et au passeport produit numérique tout en apportant une couche opérationnelle claire pour la traçabilité, le reporting et le pilotage quotidien de la production.',
      primaryCta: 'colorloop.ai',
      secondaryCta: 'Explorer ColorLoop',
    },
    de: {
      kicker: 'Tinte, Papier und Energie sparen 🌱',
      titleLine1: 'ColorLoop',
      titleLine2: 'Connect',
      stamp: 'PPWR-freundlich',
      subheadline: 'Ihr neues Werkzeug für Farbmanagement und Produktionsverfolgung in Flexo und Offset.',
      description:
        'ColorLoop Connect wurde gemeinsam mit Veoria entwickelt und hilft Offset- und Flexoteams dabei, Produktionsdaten, Farbworkflows, Maschinenstatus und Compliance-Transparenz an einem Ort zu bündeln. Die Lösung unterstützt die Vorbereitung auf PPWR- und Digital Product Passport-Anforderungen und schafft eine klarere operative Ebene für Rückverfolgbarkeit, Reporting und tägliches Produktionsmanagement.',
      primaryCta: 'colorloop.ai',
      secondaryCta: 'ColorLoop entdecken',
    },
    it: {
      kicker: 'Risparmia inchiostro, carta ed energia 🌱',
      titleLine1: 'ColorLoop',
      titleLine2: 'Connect',
      stamp: 'Compatibile PPWR',
      subheadline: 'Il tuo nuovo strumento di gestione del colore e monitoraggio della produzione per flexo e offset.',
      description:
        'Sviluppato con Veoria, ColorLoop Connect aiuta i team offset e flexo a centralizzare dati di produzione, workflow colore, stato delle macchine e visibilità sulla conformità in un’unica piattaforma. Supporta la preparazione ai requisiti PPWR e Digital Product Passport creando un livello operativo più chiaro per tracciabilità, reporting e gestione quotidiana della produzione.',
      primaryCta: 'colorloop.ai',
      secondaryCta: 'Scopri ColorLoop',
    },
    es: {
      kicker: 'Ahorre tinta, papel y energía 🌱',
      titleLine1: 'ColorLoop',
      titleLine2: 'Connect',
      stamp: 'Compatible con PPWR',
      subheadline: 'Su nueva herramienta de gestión del color y seguimiento de producción para flexo y offset.',
      description:
        'Desarrollado con Veoria, ColorLoop Connect ayuda a los equipos de offset y flexo a centralizar datos de producción, flujos de color, estado de las máquinas y visibilidad de cumplimiento en un solo lugar. Facilita la preparación para PPWR y Digital Product Passport al crear una capa operativa más clara para trazabilidad, reporting y gestión diaria de la producción.',
      primaryCta: 'colorloop.ai',
      secondaryCta: 'Descubrir ColorLoop',
    },
  };
  const t = copy[locale];

  return (
    <main className="page-shell" id="top">
      <SiteNav current="home" />

      <section className="hero-section">
        <div className="container hero-stack">
          <div className="hero-copy">
            <p className="hero-kicker">{t.kicker}</p>
            <h1>
              <span className="hero-line">{t.titleLine1}</span>
              <span className="hero-line hero-line-accent">{t.titleLine2}</span>
            </h1>
            <span className="hero-stamp" aria-hidden="true">
              {t.stamp}
            </span>
            <p className="hero-subheadline">{t.subheadline}</p>
            <div className="hero-packshot" aria-hidden="true">
              <Image
                src="/images/ImacCGSColorloopGraphicStudio-2.webp"
                alt=""
                width={1366}
                height={768}
                sizes="(max-width: 768px) 92vw, (max-width: 1280px) 78vw, 980px"
                priority
              />
            </div>
            <p className="hero-description">{t.description}</p>

            <div className="hero-actions">
              <a
                className="button button-dark"
                href="https://colorloop.ai/"
                target="_blank"
                rel="noreferrer"
              >
                {t.primaryCta}
              </a>
              <a
                className="button button-light"
                href="#offset"
              >
                {t.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <RutherfordIdentitySection />

      <ColorLoopShowcase />

      <FlexoShowcase />

      <VideoShowcase />

      <TeamShowcase />

      <SiteFooter />
    </main>
  );
}
