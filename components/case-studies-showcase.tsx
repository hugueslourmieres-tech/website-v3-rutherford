'use client';

import { useEffect, useState } from 'react';
import { useLanguage, type Locale } from '@/components/language-provider';

type CaseKey = 'lefrancq' | 'wauters' | 'gsmonaco';

type CaseStudy = {
  key: CaseKey;
  company: string;
  videoId: string;
  videoTitle: string;
};

const caseStudies: CaseStudy[] = [
  {
    key: 'lefrancq',
    company: 'LEFRANCQ Packaging',
    videoId: '0bUlKQ-lIZs',
    videoTitle: 'LEFRANCQ Packaging — testimonial',
  },
  {
    key: 'wauters',
    company: "Wauters B'Pack",
    videoId: 'r7_4EdplcdE',
    videoTitle: "Wauters B'Pack x Rutherford",
  },
  {
    key: 'gsmonaco',
    company: 'GS Monaco',
    videoId: 'FTjkGK2K-wI',
    videoTitle: 'GS Monaco — testimonial',
  },
];

function thumbnail(videoId: string) {
  return `https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`;
}

function fallbackThumbnail(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function videoUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

type CaseCopy = { challenge: string; result: string };

type Copy = {
  kicker: string;
  headline: string;
  intro: string;
  challengeLabel: string;
  resultLabel: string;
  cta: string;
  cases: Record<CaseKey, CaseCopy>;
};

const COPY: Record<Locale, Copy> = {
  en: {
    kicker: 'Case studies',
    headline: 'Results from the field',
    intro:
      'Three stories where Rutherford helped offset teams hit targets faster, reduce waste, and standardize production.',
    challengeLabel: 'Challenge',
    resultLabel: 'Result',
    cta: 'Watch testimonial',
    cases: {
      lefrancq: {
        challenge: 'Color inconsistency slowing down packaging offset production.',
        result: 'Faster makeready, stable deliveries, and stronger customer confidence.',
      },
      wauters: {
        challenge: 'Maintaining packaging quality at scale while speeding up setup.',
        result: 'Stronger repeatability and more predictable output shift to shift.',
      },
      gsmonaco: {
        challenge: 'Matching demanding brand color standards on commercial offset jobs.',
        result: 'Tighter color control, shorter makeready, and fewer reruns.',
      },
    },
  },
  fr: {
    kicker: 'Cas clients',
    headline: 'Des résultats sur le terrain',
    intro:
      'Trois histoires où Rutherford a aidé des équipes offset à atteindre leurs cibles plus vite, réduire la gâche et standardiser la production.',
    challengeLabel: 'Défi',
    resultLabel: 'Résultat',
    cta: 'Voir le témoignage',
    cases: {
      lefrancq: {
        challenge: 'Constance couleur instable qui ralentit la production offset packaging.',
        result: 'Calage plus rapide, livraisons stables, confiance client renforcée.',
      },
      wauters: {
        challenge: 'Maintenir la qualité packaging à l’échelle tout en accélérant le calage.',
        result: 'Meilleure répétabilité et sorties plus prévisibles d’une équipe à l’autre.',
      },
      gsmonaco: {
        challenge: 'Tenir des exigences couleur marque fortes sur des travaux offset commerciaux.',
        result: 'Contrôle couleur plus fin, calage plus court, moins de relances.',
      },
    },
  },
  de: {
    kicker: 'Referenzen',
    headline: 'Ergebnisse aus der Praxis',
    intro:
      'Drei Geschichten, in denen Rutherford Offsetteams geholfen hat, Ziele schneller zu erreichen, Makulatur zu reduzieren und die Produktion zu standardisieren.',
    challengeLabel: 'Herausforderung',
    resultLabel: 'Ergebnis',
    cta: 'Testimonial ansehen',
    cases: {
      lefrancq: {
        challenge: 'Farbinkonsistenz bremst die Verpackungs-Offsetproduktion.',
        result: 'Schnelleres Einrichten, stabile Lieferungen, mehr Kundenvertrauen.',
      },
      wauters: {
        challenge: 'Verpackungsqualität im Maßstab halten und Einrichtung beschleunigen.',
        result: 'Höhere Wiederholbarkeit und vorhersagbarere Ergebnisse pro Schicht.',
      },
      gsmonaco: {
        challenge: 'Hohe Marken-Farbvorgaben bei kommerziellen Offset-Jobs halten.',
        result: 'Engere Farbsteuerung, kürzeres Einrichten, weniger Nachdrucke.',
      },
    },
  },
  it: {
    kicker: 'Case study',
    headline: 'Risultati dal campo',
    intro:
      'Tre storie in cui Rutherford ha aiutato team offset a colpire prima i target, ridurre lo scarto e standardizzare la produzione.',
    challengeLabel: 'Sfida',
    resultLabel: 'Risultato',
    cta: 'Guarda il video',
    cases: {
      lefrancq: {
        challenge: 'Inconsistenza colore che rallenta la produzione offset packaging.',
        result: 'Avviamento più rapido, consegne stabili, maggiore fiducia del cliente.',
      },
      wauters: {
        challenge: 'Mantenere qualità packaging su scala mentre si accelera il setup.',
        result: 'Maggior ripetibilità e output più prevedibile tra i turni.',
      },
      gsmonaco: {
        challenge: 'Reggere standard di colore brand esigenti su lavori offset commerciali.',
        result: 'Controllo colore più fine, avviamento più corto, meno riavvii.',
      },
    },
  },
  es: {
    kicker: 'Casos prácticos',
    headline: 'Resultados desde la planta',
    intro:
      'Tres historias donde Rutherford ayudó a equipos offset a alcanzar objetivos más rápido, reducir el desperdicio y estandarizar la producción.',
    challengeLabel: 'Reto',
    resultLabel: 'Resultado',
    cta: 'Ver testimonio',
    cases: {
      lefrancq: {
        challenge: 'Inconsistencia de color que ralentiza la producción offset de envases.',
        result: 'Puesta a punto más rápida, entregas estables y mayor confianza del cliente.',
      },
      wauters: {
        challenge: 'Mantener la calidad del envase a escala mientras se acelera el setup.',
        result: 'Mayor repetibilidad y salida más predecible turno a turno.',
      },
      gsmonaco: {
        challenge: 'Sostener estándares de color de marca exigentes en offset comercial.',
        result: 'Control de color más fino, puesta a punto más corta, menos reruns.',
      },
    },
  },
};

function VideoThumbnail({ videoId, title }: { videoId: string; title: string }) {
  const [src, setSrc] = useState(thumbnail(videoId));

  useEffect(() => {
    setSrc(thumbnail(videoId));
  }, [videoId]);

  return (
    <img
      src={src}
      alt={title}
      loading="lazy"
      className="case-study-thumb"
      onError={() => {
        if (src !== fallbackThumbnail(videoId)) {
          setSrc(fallbackThumbnail(videoId));
        }
      }}
    />
  );
}

export function CaseStudiesShowcase() {
  const { locale } = useLanguage();
  const t = COPY[locale];

  return (
    <section className="section case-studies-section" id="cases">
      <div className="container case-studies-shell">
        <header className="case-studies-header">
          <p className="section-kicker">{t.kicker}</p>
          <h2 className="case-studies-headline">{t.headline}</h2>
          <p className="case-studies-intro">{t.intro}</p>
        </header>

        <div className="case-studies-grid">
          {caseStudies.map((study) => {
            const copy = t.cases[study.key];
            const href = videoUrl(study.videoId);
            return (
              <article className="case-study-card" key={study.videoId}>
                <a
                  className="case-study-media"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${study.company} — ${study.videoTitle}`}
                >
                  <VideoThumbnail videoId={study.videoId} title={study.videoTitle} />
                  <span className="case-study-play" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </a>
                <div className="case-study-body">
                  <h3>
                    <a href={href} target="_blank" rel="noreferrer">
                      {study.company}
                    </a>
                  </h3>
                  <dl className="case-study-detail">
                    <div>
                      <dt>{t.challengeLabel}</dt>
                      <dd>{copy.challenge}</dd>
                    </div>
                    <div>
                      <dt>{t.resultLabel}</dt>
                      <dd>{copy.result}</dd>
                    </div>
                  </dl>
                  <a className="case-study-cta" href={href} target="_blank" rel="noreferrer">
                    {t.cta} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
