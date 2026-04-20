'use client';

import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';

export function TeamShowcase() {
  const { locale } = useLanguage();

  return (
    <section className="section team-section" id="team">
      <div className="container team-shell">
        <div className="section-copy centered-copy team-copy">
          <p className="section-kicker">{locale === 'fr' ? 'Fabriqué en France' : 'Made in France'}</p>
          <h2>{locale === 'fr' ? 'Notre équipe' : 'Our amazing team'}</h2>
          <p>
            {locale === 'fr'
              ? "Conçu, déployé et amélioré en France par une équipe concentrée sur la performance d'impression, la fiabilité et la réalité de production."
              : 'Designed, supported and improved in France by a team focused on print performance, reliability and production reality.'}
          </p>
        </div>

        <div className="team-stage">
          <div className="team-featured">
            <div className="team-featured-media">
              <Image
                src="/images/4Phototeamveoria.jpg"
                alt="Rutherford team photo"
                width={2048}
                height={1363}
                sizes="(max-width: 768px) 92vw, 1100px"
              />
            </div>
            <div className="team-featured-copy">
              <a
                className="team-veoria-logo"
                href="https://veoria.fr/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Veoria"
              >
                <Image
                  src="/images/LOGO VEORIA BLACK 300px.png"
                  alt="Veoria"
                  width={300}
                  height={86}
                  sizes="160px"
                />
              </a>
              <span>
                {locale === 'fr'
                  ? "L'équipe Veoria est à l'origine de l'application ColorLoop ainsi que de Delta One pour la flexographie. Elle conçoit, développe et fait évoluer ces outils pour les réalités de production."
                  : 'The Veoria team created the ColorLoop application as well as Delta One for flexography. They design, develop and evolve these tools for real production environments.'}
              </span>
              <div className="team-featured-actions">
                <a
                  className="button button-dark"
                  href="https://veoria.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Veoria.fr
                </a>
                <a
                  className="button button-light"
                  href="https://colorloop.ai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Colorloop.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
