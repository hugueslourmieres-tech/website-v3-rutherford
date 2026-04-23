'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { type Locale, useLanguage } from '@/components/language-provider';

type SiteNavProps = {
  current?: 'home' | 'blog' | 'console-validation' | 'support';
};

export function SiteNav({ current = 'home' }: SiteNavProps) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const localeRef = useRef<HTMLDivElement | null>(null);

  const navLabels: Record<
    Locale,
    {
      home: string;
      colorloop: string;
      cases: string;
      blog: string;
      support: string;
      console: string;
      contact: string;
      openNav: string;
      mainNav: string;
      ticker: string[];
      localeLabel: string;
    }
  > = {
    en: {
      home: 'Home',
      colorloop: 'ColorLoop',
      cases: 'Case Studies',
      blog: 'Blog',
      support: 'Support',
      console: 'Console Validation',
      contact: 'Contact',
      openNav: 'Open navigation',
      mainNav: 'Main navigation',
      localeLabel: 'Language selector',
      ticker: [
        'DIGITAL PRODUCT PASSPORT REQUIRED',
        'JANUARY 1, 2030 — RECYCLED CONTENT TARGETS & GRADE D/E BAN',
        'JANUARY 1, 2038 — ONLY GRADES A/B ALLOWED',
        'AUGUST 12, 2026 — BE READY WITH COLORLOOP CONNECT',
      ],
    },
    fr: {
      home: 'Accueil',
      colorloop: 'ColorLoop',
      cases: 'Cas clients',
      blog: 'Blog',
      support: 'Support',
      console: 'Validation console',
      contact: 'Contact',
      openNav: 'Ouvrir la navigation',
      mainNav: 'Navigation principale',
      localeLabel: 'Sélecteur de langue',
      ticker: [
        'PASSEPORT PRODUIT NUMÉRIQUE OBLIGATOIRE',
        '1ER JANVIER 2030 — OBJECTIFS DE CONTENU RECYCLÉ & INTERDICTION DES GRADES D/E',
        '1ER JANVIER 2038 — SEULS LES GRADES A/B SERONT AUTORISÉS',
        '12 AOÛT 2026 — PRÉPAREZ-VOUS AVEC COLORLOOP CONNECT',
      ],
    },
    de: {
      home: 'Start',
      colorloop: 'ColorLoop',
      cases: 'Referenzen',
      blog: 'Blog',
      support: 'Support',
      console: 'Konsolenvalidierung',
      contact: 'Kontakt',
      openNav: 'Navigation öffnen',
      mainNav: 'Hauptnavigation',
      localeLabel: 'Sprachauswahl',
      ticker: [
        'DIGITALER PRODUKTPASS ERFORDERLICH',
        '1. JANUAR 2030 — RECYCLINGANTEILE & VERBOT DER KLASSEN D/E',
        '1. JANUAR 2038 — NUR KLASSEN A/B ZULÄSSIG',
        '12. AUGUST 2026 — MIT COLORLOOP CONNECT BEREIT SEIN',
      ],
    },
    it: {
      home: 'Home',
      colorloop: 'ColorLoop',
      cases: 'Case study',
      blog: 'Blog',
      support: 'Supporto',
      console: 'Validazione console',
      contact: 'Contatto',
      openNav: 'Apri navigazione',
      mainNav: 'Navigazione principale',
      localeLabel: 'Selettore lingua',
      ticker: [
        'PASSAPORTO DIGITALE DI PRODOTTO OBBLIGATORIO',
        '1 GENNAIO 2030 — TARGET DI CONTENUTO RICICLATO E DIVIETO CLASSI D/E',
        '1 GENNAIO 2038 — AMMESSE SOLO LE CLASSI A/B',
        '12 AGOSTO 2026 — PREPARATI CON COLORLOOP CONNECT',
      ],
    },
    es: {
      home: 'Inicio',
      colorloop: 'ColorLoop',
      cases: 'Casos prácticos',
      blog: 'Blog',
      support: 'Soporte',
      console: 'Validación de consola',
      contact: 'Contacto',
      openNav: 'Abrir navegación',
      mainNav: 'Navegación principal',
      localeLabel: 'Selector de idioma',
      ticker: [
        'PASAPORTE DIGITAL DE PRODUCTO OBLIGATORIO',
        '1 DE ENERO DE 2030 — OBJETIVOS DE CONTENIDO RECICLADO Y PROHIBICIÓN DE GRADOS D/E',
        '1 DE ENERO DE 2038 — SOLO SE PERMITIRÁN LOS GRADOS A/B',
        '12 DE AGOSTO DE 2026 — PREPÁRESE CON COLORLOOP CONNECT',
      ],
    },
  };

  const languageOptions: { code: Locale; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'it', label: 'IT' },
    { code: 'es', label: 'ES' },
  ];

  const labels = navLabels[locale];

  useEffect(() => {
    const close = () => {
      setOpen(false);
      setLocaleOpen(false);
    };
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!localeRef.current?.contains(event.target as Node)) {
        setLocaleOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
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
          aria-label={labels.openNav}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`main-nav ${open ? 'is-open' : ''}`}
          aria-label={labels.mainNav}
        >
          <a className={current === 'home' ? 'is-current' : undefined} href="/" onClick={() => setOpen(false)}>
            {labels.home}
          </a>
          <a href="/#colorloop" onClick={() => setOpen(false)}>
            {labels.colorloop}
          </a>
          <a href="/#cases" onClick={() => setOpen(false)}>
            {labels.cases}
          </a>
          <a className={current === 'blog' ? 'is-current' : undefined} href="/blog" onClick={() => setOpen(false)}>
            {labels.blog}
          </a>
          <a href="/#contact" onClick={() => setOpen(false)}>
            {labels.contact}
          </a>
          <a
            className="mobile-nav-link mobile-nav-link-accent"
            href="/support"
            onClick={() => setOpen(false)}
          >
            {labels.support}
          </a>
          <a
            className="mobile-nav-link mobile-nav-link-dark"
            href="/console-validation"
            onClick={() => setOpen(false)}
          >
            {labels.console}
          </a>
          <div className="mobile-language-list" role="group" aria-label={labels.localeLabel}>
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                className={option.code === locale ? 'is-active' : undefined}
                onClick={() => {
                  setLocale(option.code);
                  setLocaleOpen(false);
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="header-actions">
          <div className="locale-dropdown" ref={localeRef}>
            <button
              type="button"
              className={`locale-dropdown-trigger ${localeOpen ? 'is-open' : ''}`}
              aria-haspopup="menu"
              aria-expanded={localeOpen}
              onClick={() => setLocaleOpen((value) => !value)}
            >
              <span>{locale.toUpperCase()}</span>
              <span className="locale-dropdown-caret" aria-hidden="true">⌄</span>
            </button>

            {localeOpen ? (
              <div className="locale-dropdown-menu" role="menu" aria-label={labels.localeLabel}>
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    className={option.code === locale ? 'is-active' : undefined}
                    role="menuitemradio"
                    aria-checked={option.code === locale}
                    onClick={() => {
                      setLocale(option.code);
                      setLocaleOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <a
            className={`button button-accent header-button ${current === 'support' ? 'is-current' : ''}`}
            href="/support"
          >
            {labels.support}
          </a>
          <a
            className={`button button-dark header-button ${current === 'console-validation' ? 'is-current' : ''}`}
            href="/console-validation"
          >
            {labels.console}
          </a>
        </div>
      </div>

      <div className="site-ticker" aria-label="PPWR and DPP timeline">
        <div className="site-ticker-track">
          {[...labels.ticker, ...labels.ticker].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
