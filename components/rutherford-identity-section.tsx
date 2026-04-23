'use client';

import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { useLanguage, type Locale } from '@/components/language-provider';

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="rutherford-stat">
      <dt>
        {value}
        <span>{suffix}</span>
      </dt>
      <dd>{label}</dd>
    </div>
  );
}

type Segment = { text: string; accent?: boolean };

type Copy = {
  kicker: string;
  title: string;
  body: Segment[];
  years: string;
  countries: string;
  systems: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    kicker: 'Who we are',
    title: 'Rutherford.fr',
    body: [
      { text: 'European team specialized in ' },
      { text: 'offset and flexo color management', accent: true },
      { text: '. ' },
      { text: 'X-Rite PANTONE partner', accent: true },
      { text: ', we support printers, packaging converters and brands across ' },
      { text: 'more than 30 countries', accent: true },
      { text: ' — with ' },
      { text: 'over 1,000 systems deployed worldwide', accent: true },
      { text: '.' },
    ],
    years: 'Years of expertise',
    countries: 'Countries',
    systems: 'Systems deployed',
  },
  fr: {
    kicker: 'Qui nous sommes',
    title: 'Rutherford.fr',
    body: [
      { text: 'Équipe européenne spécialisée dans la ' },
      { text: 'gestion de la couleur en offset et flexo', accent: true },
      { text: '. ' },
      { text: 'Partenaire X-Rite PANTONE', accent: true },
      { text: ', nous accompagnons imprimeurs, convertisseurs et marques dans ' },
      { text: 'plus de 30 pays', accent: true },
      { text: ' — avec ' },
      { text: 'plus de 1 000 systèmes déployés dans le monde', accent: true },
      { text: '.' },
    ],
    years: "Années d'expertise",
    countries: 'Pays',
    systems: 'Systèmes déployés',
  },
  de: {
    kicker: 'Wer wir sind',
    title: 'Rutherford.fr',
    body: [
      { text: 'Europäisches Team mit Fokus auf ' },
      { text: 'Farbmanagement für Offset und Flexo', accent: true },
      { text: '. Als ' },
      { text: 'X-Rite PANTONE Partner', accent: true },
      { text: ' unterstützen wir Druckereien, Verpackungshersteller und Marken in ' },
      { text: 'mehr als 30 Ländern', accent: true },
      { text: ' — mit ' },
      { text: 'über 1.000 weltweit installierten Systemen', accent: true },
      { text: '.' },
    ],
    years: 'Jahre Erfahrung',
    countries: 'Länder',
    systems: 'Installierte Systeme',
  },
  it: {
    kicker: 'Chi siamo',
    title: 'Rutherford.fr',
    body: [
      { text: 'Team europeo specializzato nella ' },
      { text: 'gestione del colore per offset e flexo', accent: true },
      { text: '. Come ' },
      { text: 'partner X-Rite PANTONE', accent: true },
      { text: ', supportiamo stampatori, converter e brand in ' },
      { text: 'oltre 30 paesi', accent: true },
      { text: ' — con ' },
      { text: 'più di 1.000 sistemi installati nel mondo', accent: true },
      { text: '.' },
    ],
    years: 'Anni di esperienza',
    countries: 'Paesi',
    systems: 'Sistemi installati',
  },
  es: {
    kicker: 'Quiénes somos',
    title: 'Rutherford.fr',
    body: [
      { text: 'Equipo europeo especializado en ' },
      { text: 'gestión del color para offset y flexo', accent: true },
      { text: '. Como ' },
      { text: 'partner de X-Rite PANTONE', accent: true },
      { text: ', apoyamos a impresores, convertidores y marcas en ' },
      { text: 'más de 30 países', accent: true },
      { text: ' — con ' },
      { text: 'más de 1.000 sistemas instalados en todo el mundo', accent: true },
      { text: '.' },
    ],
    years: 'Años de experiencia',
    countries: 'Países',
    systems: 'Sistemas instalados',
  },
};

export function RutherfordIdentitySection() {
  const { locale } = useLanguage();
  const [slideIndex, setSlideIndex] = useState(0);
  const t = COPY[locale];

  const slides = [
    '/images/Team rutherford Slideshow/1team.jpg',
    '/images/Team rutherford Slideshow/2team.jpg',
    '/images/Team rutherford Slideshow/3team.jpg',
    '/images/Team rutherford Slideshow/4team.jpg',
    '/images/Team rutherford Slideshow/5team.jpg',
    '/images/Team rutherford Slideshow/6team.jpg',
    '/images/Team rutherford Slideshow/7team.jpg',
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="section rutherford-identity-section">
      <div className="rutherford-identity-background" aria-hidden="true">
        {slides.map((src, index) => (
          <div
            key={src}
            className={`rutherford-slide ${index === slideIndex ? 'is-active' : ''}`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="rutherford-slide-image"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="rutherford-identity-overlay" />
      </div>

      <div className="container rutherford-identity-shell">
        <div className="rutherford-identity-copy">
          <p className="section-kicker">{t.kicker}</p>
          <h2 className="rutherford-identity-headline">{t.title}</h2>
          <p className="rutherford-identity-body">
            {t.body.map((segment, index) => (
              <Fragment key={index}>
                {segment.accent ? (
                  <span className="rutherford-identity-accent">{segment.text}</span>
                ) : (
                  segment.text
                )}
              </Fragment>
            ))}
          </p>
        </div>

        <dl className="rutherford-stats-grid">
          <Stat value={25} suffix="+" label={t.years} />
          <Stat value={30} suffix="+" label={t.countries} />
          <Stat value={1000} suffix="+" label={t.systems} />
        </dl>
      </div>
    </section>
  );
}
