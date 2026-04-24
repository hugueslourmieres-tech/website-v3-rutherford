'use client';

import { useLanguage, type Locale } from '@/components/language-provider';

type Copy = {
  kicker: string;
  title: string;
  tagline: string;
  name: string;
  email: string;
  message: string;
  placeholder: string;
  send: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    kicker: 'Contact',
    title: 'Talk to an expert',
    tagline: 'Drop us a line — we usually get back within one working day.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    placeholder: 'Tell us briefly what you want to discuss.',
    send: 'Send',
  },
  fr: {
    kicker: 'Contact',
    title: 'Parlez à un expert',
    tagline: 'Écrivez-nous — nous revenons vers vous sous un jour ouvré.',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    placeholder: 'Dites-nous brièvement ce que vous voulez aborder.',
    send: 'Envoyer',
  },
  de: {
    kicker: 'Kontakt',
    title: 'Sprechen Sie mit einem Experten',
    tagline: 'Schreiben Sie uns — wir antworten in der Regel innerhalb eines Werktags.',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    placeholder: 'Sagen Sie uns kurz, worum es geht.',
    send: 'Senden',
  },
  it: {
    kicker: 'Contatto',
    title: 'Parla con un esperto',
    tagline: 'Scrivici — rispondiamo di norma entro un giorno lavorativo.',
    name: 'Nome',
    email: 'Email',
    message: 'Messaggio',
    placeholder: 'Dicci brevemente di cosa vuoi parlare.',
    send: 'Invia',
  },
  es: {
    kicker: 'Contacto',
    title: 'Hable con un experto',
    tagline: 'Escríbanos — respondemos normalmente en un día hábil.',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    placeholder: 'Cuéntenos brevemente de qué quiere hablar.',
    send: 'Enviar',
  },
};

export function ContactSection() {
  const { locale } = useLanguage();
  const t = COPY[locale];

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-shell">
        <header className="contact-header">
          <p className="section-kicker">{t.kicker}</p>
          <h2 className="contact-headline">{t.title}</h2>
          <p className="contact-tagline">{t.tagline}</p>
        </header>

        <form
          action="https://formsubmit.co/contact@roterford.fr"
          method="POST"
          className="contact-form"
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

          <label>
            <span>{t.name}</span>
            <input type="text" name="name" required />
          </label>

          <label>
            <span>{t.email}</span>
            <input type="email" name="email" required />
          </label>

          <label>
            <span>{t.message}</span>
            <textarea
              name="message"
              rows={4}
              placeholder={t.placeholder}
              required
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
