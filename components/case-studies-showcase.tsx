'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage, type Locale } from '@/components/language-provider';

type CaseKey =
  | 'wauters'
  | 'viappiani'
  | 'autajon'
  | 'lefrancq'
  | 'gsmonaco'
  | 'moderna'
  | 'colorconsulting'
  | 'printwell'
  | 'avery';

type CaseStudy = {
  key: CaseKey;
  company: string;
  videoId: string;
  videoTitle: string;
};

const caseStudies: CaseStudy[] = [
  { key: 'wauters', company: "Wauters B'Pack", videoId: 'yAZbtKzN_j0', videoTitle: "Wauters B'Pack — Advancing color precision" },
  { key: 'viappiani', company: 'Viappiani Printing', videoId: 'r7_4EdplcdE', videoTitle: 'Viappiani Printing — Precision, speed & less waste' },
  { key: 'autajon', company: 'Autajon Packaging Milan', videoId: 'FTjkGK2K-wI', videoTitle: 'Autajon Packaging Milan — Color consistency & efficiency' },
  { key: 'lefrancq', company: 'LEFRANCQ Packaging', videoId: '78a006Kulok', videoTitle: 'LEFRANCQ Packaging — We can’t run the press without it' },
  { key: 'gsmonaco', company: 'GS Monaco & Forbes Monaco', videoId: 'XjgKPUguTfw', videoTitle: 'GS Monaco & Forbes Monaco' },
  { key: 'moderna', company: 'Moderna Printing', videoId: 'vYN1mjCK9VU', videoTitle: 'Moderna Printing — Reduced waste, smarter startups' },
  { key: 'colorconsulting', company: 'ColorConsulting Italy', videoId: 'w4sA1QzEvOs', videoTitle: 'ColorConsulting Italy' },
  { key: 'printwell', company: 'Printwell USA', videoId: 'ut247z4ren8', videoTitle: 'Printwell USA' },
  { key: 'avery', company: 'Avery Dennison Queretaro', videoId: '0bUlKQ-lIZs', videoTitle: 'Avery Dennison Queretaro' },
];

function thumbnail(videoId: string) {
  return `https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`;
}

function fallbackThumbnail(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

type CaseCopy = { challenge: string; result: string };

type Copy = {
  kicker: string;
  headline: string;
  intro: string;
  challengeLabel: string;
  resultLabel: string;
  cta: string;
  prev: string;
  next: string;
  cases: Record<CaseKey, CaseCopy>;
};

const COPY: Record<Locale, Copy> = {
  en: {
    kicker: 'Case studies',
    headline: 'Results from the field',
    intro: 'Stories from the field where Rutherford helped offset teams hit targets faster, reduce waste, and standardize production.',
    challengeLabel: 'Challenge',
    resultLabel: 'Result',
    cta: 'Play testimonial',
    prev: 'Previous testimonial',
    next: 'Next testimonial',
    cases: {
      wauters: {
        challenge: 'Maintaining tight color precision across high-volume packaging offset.',
        result: 'Stronger color accuracy, faster makeready, and more confidence on every job.',
      },
      viappiani: {
        challenge: 'Holding precision and speed on demanding commercial offset jobs.',
        result: 'Faster makeready, less waste, and tighter color control with Rutherford closed-loop.',
      },
      autajon: {
        challenge: 'Holding brand color consistency across high-end packaging production.',
        result: 'Stronger color consistency and better press efficiency shift to shift.',
      },
      lefrancq: {
        challenge: 'Running demanding packaging jobs with no room for color drift.',
        result: '“We can’t run the press without it.” — closed-loop control adopted as a daily standard.',
      },
      gsmonaco: {
        challenge: 'Matching demanding luxury brand color standards with Forbes Monaco.',
        result: 'Tighter color control, shorter makeready, and confident high-end output.',
      },
      moderna: {
        challenge: 'Slow, manual startups driving makeready waste on sheetfed offset.',
        result: 'Smarter startups, reduced waste, and faster time to saleable sheets.',
      },
      colorconsulting: {
        challenge: 'Industrializing color expertise across Italian packaging customers.',
        result: 'Standardized workflows and measurable color performance improvements.',
      },
      printwell: {
        challenge: 'Scaling consistent color across high-volume commercial offset in the US.',
        result: 'Standardized pressroom, faster onboarding, and reliable customer deliveries.',
      },
      avery: {
        challenge: 'Scaling color consistency across international label production.',
        result: 'Standardized pressroom, reliable color quality, and cleaner data across sites.',
      },
    },
  },
  fr: {
    kicker: 'Cas clients',
    headline: 'Des résultats sur le terrain',
    intro: 'Des histoires terrain où Rutherford a aidé des équipes offset à atteindre leurs cibles plus vite, réduire la gâche et standardiser la production.',
    challengeLabel: 'Défi',
    resultLabel: 'Résultat',
    cta: 'Lire le témoignage',
    prev: 'Témoignage précédent',
    next: 'Témoignage suivant',
    cases: {
      wauters: {
        challenge: 'Maintenir une précision couleur fine sur du packaging offset à fort volume.',
        result: 'Précision couleur renforcée, calage plus rapide, plus de confiance à chaque job.',
      },
      viappiani: {
        challenge: 'Maintenir précision et vitesse sur des travaux offset commerciaux exigeants.',
        result: 'Calage plus rapide, moins de gâche et contrôle couleur plus fin grâce au closed-loop Rutherford.',
      },
      autajon: {
        challenge: 'Tenir la constance couleur marque sur du packaging haut de gamme.',
        result: 'Constance couleur renforcée et meilleure efficacité presse d’une équipe à l’autre.',
      },
      lefrancq: {
        challenge: 'Travaux packaging exigeants, aucune dérive couleur tolérée.',
        result: '« On ne peut plus rouler la presse sans. » — closed-loop adopté comme standard quotidien.',
      },
      gsmonaco: {
        challenge: 'Tenir des exigences couleur luxe avec Forbes Monaco.',
        result: 'Contrôle couleur plus fin, calage plus court, sortie haut de gamme maîtrisée.',
      },
      moderna: {
        challenge: 'Calages lents et manuels qui font grimper la gâche sur offset feuille à feuille.',
        result: 'Démarrages plus intelligents, moins de gâche et accès plus rapide aux feuilles vendables.',
      },
      colorconsulting: {
        challenge: 'Industrialiser l’expertise couleur auprès des clients packaging italiens.',
        result: 'Workflows standardisés et performance couleur mesurable.',
      },
      printwell: {
        challenge: 'Scaler une couleur constante sur de l’offset commercial à fort volume aux US.',
        result: 'Atelier standardisé, montée en compétence plus rapide et livraisons fiables.',
      },
      avery: {
        challenge: 'Scaler la constance couleur sur la production d’étiquettes internationale.',
        result: 'Atelier standardisé, qualité couleur fiable et données plus propres entre sites.',
      },
    },
  },
  de: {
    kicker: 'Referenzen',
    headline: 'Ergebnisse aus der Praxis',
    intro: 'Geschichten aus der Praxis, in denen Rutherford Offsetteams geholfen hat, Ziele schneller zu erreichen, Makulatur zu reduzieren und die Produktion zu standardisieren.',
    challengeLabel: 'Herausforderung',
    resultLabel: 'Ergebnis',
    cta: 'Testimonial ansehen',
    prev: 'Vorheriges Testimonial',
    next: 'Nächstes Testimonial',
    cases: {
      wauters: {
        challenge: 'Enge Farbpräzision im großvolumigen Verpackungsoffset halten.',
        result: 'Höhere Farbgenauigkeit, schnelleres Einrichten, mehr Vertrauen pro Auftrag.',
      },
      viappiani: {
        challenge: 'Präzision und Geschwindigkeit bei anspruchsvollen kommerziellen Offsetaufträgen halten.',
        result: 'Schnelleres Einrichten, weniger Makulatur und engere Farbsteuerung mit Rutherford Closed-Loop.',
      },
      autajon: {
        challenge: 'Marken-Farbkonstanz in der hochwertigen Verpackungsproduktion halten.',
        result: 'Stärkere Farbkonstanz und bessere Druckeffizienz von Schicht zu Schicht.',
      },
      lefrancq: {
        challenge: 'Anspruchsvolle Verpackungsjobs ohne Spielraum für Farbabweichung.',
        result: '„Wir können die Presse nicht mehr ohne es fahren.“ — Closed-Loop als Tagesstandard.',
      },
      gsmonaco: {
        challenge: 'Hohe Luxus-Farbvorgaben mit Forbes Monaco halten.',
        result: 'Engere Farbsteuerung, kürzeres Einrichten, kontrollierte High-End-Ausgabe.',
      },
      moderna: {
        challenge: 'Langsame, manuelle Einrichtungen treiben die Makulatur im Bogenoffset hoch.',
        result: 'Intelligentere Starts, weniger Makulatur und schneller zu verkaufbaren Bogen.',
      },
      colorconsulting: {
        challenge: 'Farbexpertise bei italienischen Verpackungskunden industrialisieren.',
        result: 'Standardisierte Workflows und messbare Farb-Performance.',
      },
      printwell: {
        challenge: 'Konstante Farbe im großvolumigen Offsetdruck in den USA skalieren.',
        result: 'Standardisierter Druckraum, schnelleres Onboarding und zuverlässige Lieferungen.',
      },
      avery: {
        challenge: 'Farbkonstanz in der internationalen Etikettenproduktion skalieren.',
        result: 'Standardisierter Druckraum, zuverlässige Farbqualität und sauberere Daten standortübergreifend.',
      },
    },
  },
  it: {
    kicker: 'Case study',
    headline: 'Risultati dal campo',
    intro: 'Storie dal campo in cui Rutherford ha aiutato team offset a colpire prima i target, ridurre lo scarto e standardizzare la produzione.',
    challengeLabel: 'Sfida',
    resultLabel: 'Risultato',
    cta: 'Guarda il video',
    prev: 'Testimonianza precedente',
    next: 'Testimonianza successiva',
    cases: {
      wauters: {
        challenge: 'Tenere una precisione colore stretta su packaging offset ad alto volume.',
        result: 'Maggior precisione colore, avviamento più rapido, più fiducia su ogni lavoro.',
      },
      viappiani: {
        challenge: 'Mantenere precisione e velocità su lavori offset commerciali esigenti.',
        result: 'Avviamento più rapido, meno scarto e controllo colore più fine con il closed-loop Rutherford.',
      },
      autajon: {
        challenge: 'Reggere la consistenza colore brand su packaging di alta gamma.',
        result: 'Maggior consistenza colore e migliore efficienza di stampa tra i turni.',
      },
      lefrancq: {
        challenge: 'Lavori packaging esigenti senza margine per derive colore.',
        result: '“Non possiamo far girare la macchina senza.” — closed-loop come standard quotidiano.',
      },
      gsmonaco: {
        challenge: 'Reggere standard colore lusso con Forbes Monaco.',
        result: 'Controllo colore più fine, avviamento più corto, output high-end controllato.',
      },
      moderna: {
        challenge: 'Avviamenti lenti e manuali che alzano lo scarto su offset foglio.',
        result: 'Startup più intelligenti, meno scarto e accesso più rapido ai fogli vendibili.',
      },
      colorconsulting: {
        challenge: 'Industrializzare l’expertise colore presso i clienti packaging italiani.',
        result: 'Workflow standardizzati e performance colore misurabile.',
      },
      printwell: {
        challenge: 'Scalare un colore costante su offset commerciale ad alto volume negli USA.',
        result: 'Pressroom standardizzato, onboarding più rapido e consegne affidabili.',
      },
      avery: {
        challenge: 'Scalare la consistenza colore su produzione etichette internazionale.',
        result: 'Pressroom standardizzato, qualità colore affidabile e dati più puliti tra i siti.',
      },
    },
  },
  es: {
    kicker: 'Casos prácticos',
    headline: 'Resultados desde la planta',
    intro: 'Historias desde la planta donde Rutherford ayudó a equipos offset a alcanzar objetivos más rápido, reducir el desperdicio y estandarizar la producción.',
    challengeLabel: 'Reto',
    resultLabel: 'Resultado',
    cta: 'Ver testimonio',
    prev: 'Testimonio anterior',
    next: 'Testimonio siguiente',
    cases: {
      wauters: {
        challenge: 'Mantener precisión de color estricta en envases offset de alto volumen.',
        result: 'Mayor precisión de color, puesta a punto más rápida y más confianza en cada trabajo.',
      },
      viappiani: {
        challenge: 'Mantener precisión y velocidad en trabajos offset comerciales exigentes.',
        result: 'Puesta a punto más rápida, menos desperdicio y control de color más fino con closed-loop Rutherford.',
      },
      autajon: {
        challenge: 'Sostener la consistencia de color de marca en envases premium.',
        result: 'Mayor consistencia de color y mejor eficiencia de prensa turno a turno.',
      },
      lefrancq: {
        challenge: 'Trabajos de envase exigentes sin margen para derivas de color.',
        result: '“No podemos hacer girar la prensa sin él.” — closed-loop como estándar diario.',
      },
      gsmonaco: {
        challenge: 'Sostener estándares de color de lujo con Forbes Monaco.',
        result: 'Control de color más fino, puesta a punto más corta, salida high-end controlada.',
      },
      moderna: {
        challenge: 'Arranques lentos y manuales que aumentan el desperdicio en offset pliego.',
        result: 'Arranques más inteligentes, menos desperdicio y acceso más rápido a pliegos vendibles.',
      },
      colorconsulting: {
        challenge: 'Industrializar la experiencia de color con clientes de envase italianos.',
        result: 'Flujos estandarizados y rendimiento de color medible.',
      },
      printwell: {
        challenge: 'Escalar un color consistente en offset comercial de alto volumen en EE. UU.',
        result: 'Pressroom estandarizado, onboarding más rápido y entregas fiables.',
      },
      avery: {
        challenge: 'Escalar la consistencia de color en producción de etiquetas internacional.',
        result: 'Pressroom estandarizado, calidad de color fiable y datos más limpios entre plantas.',
      },
    },
  },
};

function CaseMedia({
  study,
  isPlaying,
  onPlay,
  ctaLabel,
}: {
  study: CaseStudy;
  isPlaying: boolean;
  onPlay: () => void;
  ctaLabel: string;
}) {
  const [src, setSrc] = useState(thumbnail(study.videoId));

  useEffect(() => {
    setSrc(thumbnail(study.videoId));
  }, [study.videoId]);

  if (isPlaying) {
    return (
      <div className="case-study-media case-study-media-playing">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${study.videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={study.videoTitle}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="case-study-media"
      onClick={onPlay}
      aria-label={`${ctaLabel} — ${study.company}`}
    >
      <img
        src={src}
        alt={study.videoTitle}
        loading="lazy"
        className="case-study-thumb"
        onError={() => {
          if (src !== fallbackThumbnail(study.videoId)) {
            setSrc(fallbackThumbnail(study.videoId));
          }
        }}
      />
      <span className="case-study-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}

export function CaseStudiesShowcase() {
  const { locale } = useLanguage();
  const t = COPY[locale];
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const slide = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector<HTMLElement>('.case-study-card');
    const step = firstCard ? firstCard.offsetWidth + 22 : track.clientWidth * 0.6;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  }, []);

  return (
    <section className="section case-studies-section" id="cases">
      <div className="container case-studies-shell">
        <header className="case-studies-header">
          <p className="section-kicker">{t.kicker}</p>
          <h2 className="case-studies-headline">{t.headline}</h2>
          <p className="case-studies-intro">{t.intro}</p>
        </header>

        <div className="case-studies-slider">
          <button
            type="button"
            className="case-studies-arrow case-studies-arrow-left"
            onClick={() => slide(-1)}
            aria-label={t.prev}
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div className="case-studies-track" ref={trackRef}>
            {caseStudies.map((study) => {
              const copy = t.cases[study.key];
              const isPlaying = activeVideoId === study.videoId;
              return (
                <article className="case-study-card" key={study.videoId}>
                  <CaseMedia
                    study={study}
                    isPlaying={isPlaying}
                    onPlay={() => setActiveVideoId(study.videoId)}
                    ctaLabel={t.cta}
                  />
                  <div className="case-study-body">
                    <h3>{study.company}</h3>
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
                    {!isPlaying ? (
                      <button
                        type="button"
                        className="case-study-cta"
                        onClick={() => setActiveVideoId(study.videoId)}
                      >
                        {t.cta} <span aria-hidden="true">→</span>
                      </button>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className="case-studies-arrow case-studies-arrow-right"
            onClick={() => slide(1)}
            aria-label={t.next}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
