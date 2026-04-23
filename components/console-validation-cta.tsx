'use client';

import { useLanguage, type Locale } from '@/components/language-provider';

type Copy = {
  kicker: string;
  headline: string;
  supporting: string;
  primaryCta: string;
  secondaryCta: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    kicker: 'Qualification step',
    headline: 'Check whether your console is compatible',
    supporting:
      'Tell Rutherford about your press console and workflow so we can assess compatibility and guide the next step.',
    primaryCta: 'Request console validation',
    secondaryCta: 'Talk to Rutherford',
  },
  fr: {
    kicker: 'Étape de qualification',
    headline: 'Vérifiez si votre console est compatible',
    supporting:
      'Décrivez votre console et votre workflow à Rutherford : nous évaluons la compatibilité et guidons la prochaine étape.',
    primaryCta: 'Demander une validation console',
    secondaryCta: 'Parler à Rutherford',
  },
  de: {
    kicker: 'Qualifizierungsschritt',
    headline: 'Prüfen Sie, ob Ihre Konsole kompatibel ist',
    supporting:
      'Teilen Sie Rutherford Ihre Druckkonsole und Ihren Workflow mit — wir prüfen die Kompatibilität und leiten den nächsten Schritt.',
    primaryCta: 'Konsolenvalidierung anfragen',
    secondaryCta: 'Mit Rutherford sprechen',
  },
  it: {
    kicker: 'Fase di qualificazione',
    headline: 'Verifica se la tua console è compatibile',
    supporting:
      'Racconta a Rutherford la tua console e il tuo workflow: valutiamo la compatibilità e indichiamo il passo successivo.',
    primaryCta: 'Richiedi validazione console',
    secondaryCta: 'Parla con Rutherford',
  },
  es: {
    kicker: 'Paso de cualificación',
    headline: 'Compruebe si su consola es compatible',
    supporting:
      'Cuéntenos sobre su consola y flujo de trabajo: Rutherford evalúa la compatibilidad y guía el siguiente paso.',
    primaryCta: 'Solicitar validación de consola',
    secondaryCta: 'Hablar con Rutherford',
  },
};

export function ConsoleValidationCTA() {
  const { locale } = useLanguage();
  const t = COPY[locale];

  return (
    <section className="section console-cta-section" id="console-cta">
      <div className="container console-cta-shell">
        <div className="console-cta-card">
          <p className="console-cta-kicker">{t.kicker}</p>
          <h2 className="console-cta-headline">{t.headline}</h2>
          <p className="console-cta-supporting">{t.supporting}</p>
          <div className="console-cta-actions">
            <a className="button button-accent" href="/console-validation">
              {t.primaryCta}
            </a>
            <a className="button button-light-on-dark" href="#contact">
              {t.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
