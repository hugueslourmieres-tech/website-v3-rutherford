'use client';

import { useState } from 'react';
import { useLanguage, type Locale } from '@/components/language-provider';

type IntentKey = 'console' | 'makeready' | 'colorloop';

type Copy = {
  kicker: string;
  title: string;
  tagline: string;
  intents: Record<IntentKey, string>;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  help: string;
  placeholder: string;
  send: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    kicker: 'Contact / audit request',
    title: 'Talk to Rutherford about your offset workflow',
    tagline:
      'Tell us what you want to move first. We usually get back within one working day.',
    intents: {
      console: 'I want to validate my console',
      makeready: 'I want to improve makeready and color consistency',
      colorloop: 'I want to understand whether ColorLoop fits my setup',
    },
    firstName: 'First name',
    lastName: 'Last name',
    company: 'Company',
    email: 'Email',
    help: 'How can we help?',
    placeholder: 'Share details about your presses, workflow or what you’re trying to achieve.',
    send: 'Request an audit',
  },
  fr: {
    kicker: 'Contact / demande d’audit',
    title: 'Parlez à Rutherford de votre workflow offset',
    tagline:
      'Dites-nous ce que vous voulez faire avancer en premier. Nous revenons vers vous sous un jour ouvré.',
    intents: {
      console: 'Je veux valider ma console',
      makeready: 'Je veux améliorer le calage et la constance couleur',
      colorloop: 'Je veux voir si ColorLoop s’adapte à mon parc',
    },
    firstName: 'Prénom',
    lastName: 'Nom',
    company: 'Entreprise',
    email: 'Email',
    help: 'Comment pouvons-nous vous aider ?',
    placeholder: 'Partagez les détails sur vos machines, votre workflow ou vos objectifs.',
    send: 'Demander un audit',
  },
  de: {
    kicker: 'Kontakt / Audit-Anfrage',
    title: 'Sprechen Sie mit Rutherford über Ihren Offset-Workflow',
    tagline:
      'Sagen Sie uns, was Sie zuerst bewegen wollen. Wir antworten in der Regel innerhalb eines Werktags.',
    intents: {
      console: 'Ich möchte meine Konsole validieren',
      makeready: 'Ich möchte Einrichtung und Farbkonsistenz verbessern',
      colorloop: 'Ich möchte prüfen, ob ColorLoop zu meinem Setup passt',
    },
    firstName: 'Vorname',
    lastName: 'Nachname',
    company: 'Unternehmen',
    email: 'E-Mail',
    help: 'Wie können wir helfen?',
    placeholder: 'Teilen Sie uns Details zu Ihren Maschinen, Workflow oder Zielen mit.',
    send: 'Audit anfragen',
  },
  it: {
    kicker: 'Contatto / richiesta di audit',
    title: 'Parla con Rutherford del tuo workflow offset',
    tagline:
      'Dicci cosa vuoi far partire per primo. Rispondiamo di norma entro un giorno lavorativo.',
    intents: {
      console: 'Voglio validare la mia console',
      makeready: 'Voglio migliorare avviamento e consistenza colore',
      colorloop: 'Voglio capire se ColorLoop si adatta al mio parco macchine',
    },
    firstName: 'Nome',
    lastName: 'Cognome',
    company: 'Azienda',
    email: 'Email',
    help: 'Come possiamo aiutarti?',
    placeholder: 'Condividi dettagli sulle tue macchine, workflow o obiettivi.',
    send: 'Richiedi un audit',
  },
  es: {
    kicker: 'Contacto / solicitud de auditoría',
    title: 'Habla con Rutherford sobre tu flujo offset',
    tagline:
      'Cuéntanos qué quieres mover primero. Respondemos normalmente en un día hábil.',
    intents: {
      console: 'Quiero validar mi consola',
      makeready: 'Quiero mejorar la puesta a punto y la consistencia de color',
      colorloop: 'Quiero saber si ColorLoop encaja en mi planta',
    },
    firstName: 'Nombre',
    lastName: 'Apellido',
    company: 'Empresa',
    email: 'Email',
    help: '¿Cómo podemos ayudarle?',
    placeholder: 'Comparta detalles sobre sus prensas, flujo u objetivos.',
    send: 'Solicitar auditoría',
  },
};

export function ContactSection() {
  const { locale } = useLanguage();
  const t = COPY[locale];
  const [intent, setIntent] = useState<IntentKey | null>(null);
  const [message, setMessage] = useState('');

  const intentKeys: IntentKey[] = ['console', 'makeready', 'colorloop'];

  const handleIntentClick = (key: IntentKey) => {
    const text = t.intents[key];
    setIntent(key);
    setMessage((prev) => (prev.trim().length > 0 ? prev : `${text}.`));
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-shell">
        <header className="contact-header">
          <p className="section-kicker">{t.kicker}</p>
          <h2 className="contact-headline">{t.title}</h2>
          <p className="contact-tagline">{t.tagline}</p>
        </header>

        <div className="contact-intent-chips" role="group" aria-label={t.kicker}>
          {intentKeys.map((key) => (
            <button
              key={key}
              type="button"
              className={`contact-intent-chip ${intent === key ? 'is-active' : ''}`}
              onClick={() => handleIntentClick(key)}
            >
              {t.intents[key]}
            </button>
          ))}
        </div>

        <form
          action="https://formsubmit.co/contact@roterford.fr"
          method="POST"
          className="contact-form"
        >
          <input type="hidden" name="_subject" value="New Rutherford contact request" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="intent" value={intent ?? ''} />
          <input
            type="text"
            name="_honey"
            className="footer-honeypot"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="contact-form-row">
            <label>
              <span>{t.firstName}</span>
              <input type="text" name="first_name" required />
            </label>
            <label>
              <span>{t.lastName}</span>
              <input type="text" name="last_name" required />
            </label>
          </div>

          <div className="contact-form-row">
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
            <textarea
              name="message"
              rows={5}
              placeholder={t.placeholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          <button type="submit" className="contact-form-submit">
            {t.send}
          </button>
        </form>
      </div>
    </section>
  );
}
