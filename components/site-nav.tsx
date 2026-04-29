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
      localeLabel: string;
      announcementBadge: string;
      announcementText: string;
      announcementCta: string;
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
      announcementBadge: 'New',
      announcementText: 'Discover ColorLoop — Rutherford’s new software for offset production',
      announcementCta: 'Discover',
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
      announcementBadge: 'Nouveau',
      announcementText: 'Découvrez ColorLoop — le nouveau logiciel Rutherford pour l’offset',
      announcementCta: 'Découvrir',
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
      announcementBadge: 'Neu',
      announcementText: 'Entdecken Sie ColorLoop — Rutherfords neue Software für Offsetdruck',
      announcementCta: 'Entdecken',
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
      announcementBadge: 'Nuovo',
      announcementText: 'Scopri ColorLoop — il nuovo software Rutherford per l’offset',
      announcementCta: 'Scopri',
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
      announcementBadge: 'Nuevo',
      announcementText: 'Descubra ColorLoop — el nuevo software Rutherford para offset',
      announcementCta: 'Descubrir',
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
    <>
      <a className="site-announcement" href="/#colorloop">
        <span className="site-announcement-badge">{labels.announcementBadge}</span>
        <span className="site-announcement-text">{labels.announcementText}</span>
        <span className="site-announcement-cta" aria-hidden="true">
          {labels.announcementCta} →
        </span>
      </a>

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
          <a href="mailto:contact@rutherford.fr" onClick={() => setOpen(false)}>
            {labels.contact}
          </a>
          <a
            className="mobile-nav-link mobile-nav-link-accent"
            href="https://form.typeform.com/to/LZtPUH" target="_blank" rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            {labels.support}
          </a>
          <a
            className="mobile-nav-link mobile-nav-link-dark"
            href="https://form.typeform.com/to/elOTOK?typeform-source=rgproducts.typeform.com#english=xxxxx" target="_blank" rel="noreferrer"
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
            href="https://form.typeform.com/to/LZtPUH" target="_blank" rel="noreferrer"
          >
            {labels.support}
          </a>
          <a
            className={`button button-dark header-button ${current === 'console-validation' ? 'is-current' : ''}`}
            href="https://form.typeform.com/to/elOTOK?typeform-source=rgproducts.typeform.com#english=xxxxx" target="_blank" rel="noreferrer"
          >
            {labels.console}
          </a>
        </div>
      </div>

    </header>
    </>
  );
}
