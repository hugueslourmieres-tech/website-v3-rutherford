'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
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

export function RutherfordIdentitySection() {
  const { locale } = useLanguage();
  const [slideIndex, setSlideIndex] = useState(0);
  const copy: Record<
    Locale,
    {
      kicker: string;
      title: string;
      body: string;
      years: string;
      countries: string;
      systems: string;
      partner: string;
      partnerLabel: string;
    }
  > = {
    en: {
      kicker: 'Who we are',
      title: 'Rutherford.fr',
      body:
        'European team specialized in offset and flexo color management. X-Rite PANTONE partner, we support printers, packaging converters and brands across more than 30 countries — with over 1,000 systems deployed worldwide.',
      years: 'Years of expertise',
      countries: 'Countries',
      systems: 'Systems deployed',
      partner: 'X-Rite PANTONE',
      partnerLabel: 'Official partner',
    },
    fr: {
      kicker: 'Who we are',
      title: 'Rutherford.fr',
      body:
        'Équipe européenne spécialisée dans la gestion de la couleur en offset et en flexo. Partenaire X-Rite PANTONE, nous accompagnons imprimeurs, convertisseurs et marques dans plus de 30 pays — avec plus de 1 000 systèmes déployés dans le monde.',
      years: "Années d'expertise",
      countries: 'Pays',
      systems: 'Systèmes déployés',
      partner: 'X-Rite PANTONE',
      partnerLabel: 'Partenaire officiel',
    },
    de: {
      kicker: 'Who we are',
      title: 'Rutherford.fr',
      body:
        'Europäisches Team mit Spezialisierung auf Farbmanagement für Offset und Flexo. Als X-Rite PANTONE Partner unterstützen wir Druckereien, Verpackungshersteller und Marken in mehr als 30 Ländern — mit über 1.000 weltweit installierten Systemen.',
      years: 'Jahre Erfahrung',
      countries: 'Länder',
      systems: 'Installierte Systeme',
      partner: 'X-Rite PANTONE',
      partnerLabel: 'Offizieller Partner',
    },
    it: {
      kicker: 'Who we are',
      title: 'Rutherford.fr',
      body:
        'Team europeo specializzato nella gestione del colore per offset e flexo. Come partner X-Rite PANTONE, supportiamo stampatori, converter e brand in oltre 30 paesi — con più di 1.000 sistemi installati nel mondo.',
      years: 'Anni di esperienza',
      countries: 'Paesi',
      systems: 'Sistemi installati',
      partner: 'X-Rite PANTONE',
      partnerLabel: 'Partner ufficiale',
    },
    es: {
      kicker: 'Who we are',
      title: 'Rutherford.fr',
      body:
        'Equipo europeo especializado en gestión del color para offset y flexo. Como partner de X-Rite PANTONE, apoyamos a impresores, convertidores y marcas en más de 30 países, con más de 1.000 sistemas instalados en todo el mundo.',
      years: 'Años de experiencia',
      countries: 'Países',
      systems: 'Sistemas instalados',
      partner: 'X-Rite PANTONE',
      partnerLabel: 'Partner oficial',
    },
  };
  const t = copy[locale];
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
          <p className="rutherford-identity-body">{t.body}</p>
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
