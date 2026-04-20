'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

const stats = [
  {
    label: 'Minimal color bar',
    target: 2,
    suffix: ' mm',
  },
  {
    label: 'Full press speed',
    target: 500,
    suffix: ' m/min',
  },
  {
    label: 'Multispectral imaging',
    target: 36,
    suffix: ' bands',
  },
];

const points = [
  {
    title: 'Inline spectral control',
    text: 'DeltaOne delivers inline spectral color control for label and flexible packaging presses at production speed.',
  },
  {
    title: 'Automatic color bar detection',
    text: 'The motorized system automatically detects the color bar and positions itself accurately on both sides of the web.',
  },
  {
    title: 'Intelligent patch control',
    text: 'Patch size, shape and registration are evaluated continuously to keep measurements stable and trustworthy.',
  },
  {
    title: 'MeasureColor compatible',
    text: 'Integrated with MeasureColor, DeltaOne turns live measurements into actionable quality and reporting data.',
  },
];

const showcasePhotos = [
  {
    src: '/images/veoria-deltaone-1.jpg',
    alt: 'DeltaOne deployed on a flexographic label production line',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/veoria-deltaone-2.jpg',
    alt: 'DeltaOne scanning and measuring on a flexo press',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/veoria-deltaone-3.jpg',
    alt: 'Flexographic machine equipped with Veoria DeltaOne',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/veoria-deltaone-4.jpg',
    alt: 'DeltaOne in label production',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/veoria-deltaone-5.jpg',
    alt: 'Flexo printing workflow with DeltaOne',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/veoria-deltaone-6.jpg',
    alt: 'Veoria DeltaOne production environment',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/veoria-deltaone-7.jpg',
    alt: 'DeltaOne supporting inline control for labels',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/veoria-deltaone-8.jpg',
    alt: 'Veoria DeltaOne on a modern flexographic press',
    width: 1600,
    height: 1200,
  },
];

function InlineIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h16" />
      <path d="M8 8h8" />
      <path d="M8 16h8" />
    </svg>
  );
}

function DetectIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function PatchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </svg>
  );
}

function MeasureIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 16a7 7 0 1 1 14 0" />
      <path d="m12 13 4-4" />
      <path d="M12 13v3" />
    </svg>
  );
}

const icons = [InlineIcon, DetectIcon, PatchIcon, MeasureIcon];

type AnimatedStatProps = {
  target: number;
  suffix: string;
  active: boolean;
};

function AnimatedStat({ target, suffix, active }: AnimatedStatProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      return;
    }

    let frame = 0;
    let start = 0;
    const duration = 1400;

    const tick = (timestamp: number) => {
      if (!start) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <strong>
      {value}
      {suffix}
    </strong>
  );
}

export function FlexoShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);
  const photoTriples = useMemo(() => [...showcasePhotos, ...showcasePhotos], []);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`colorloop-showcase flexo-showcase ${active ? 'is-active' : ''}`} id="flexo" ref={sectionRef}>
      <div className="container colorloop-stage">
        <div className="colorloop-copy">
          <p className="section-kicker">DeltaOne by Veoria</p>
          <h2>
            <span>DeltaOne</span>
          </h2>
          <div className="colorloop-section-packshot colorloop-section-packshot-flexo" aria-hidden="true">
            <Image
              src="/images/DeltaOne_New-size-scaled.png"
              alt=""
              width={1600}
              height={900}
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 72vw, 840px"
            />
          </div>
          <p className="colorloop-lead">
            DeltaOne brings inline spectral color control to label and flexible packaging presses with compact hardware,
            automatic detection and MeasureColor integration.
          </p>
        </div>

        <div className="colorloop-visual" aria-label="DeltaOne production slideshow">
          <div className="colorloop-photo-track">
            {photoTriples.map((photo, index) => (
              <figure className="colorloop-photo-card" key={`${photo.src}-${index}`}>
                <Image
                  className="colorloop-product-image"
                  src={photo.src}
                  alt={index < showcasePhotos.length ? photo.alt : ''}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 768px) 72vw, (max-width: 1280px) 26vw, 240px"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="colorloop-stats" aria-label="Key DeltaOne metrics">
          {stats.map((stat) => (
            <article className="colorloop-stat" key={stat.label}>
              <AnimatedStat target={stat.target} suffix={stat.suffix} active={active} />
              <p>{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="colorloop-points">
          {points.map((point, index) => {
            const Icon = icons[index];
            return (
              <article className="colorloop-point" key={point.title} style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="colorloop-point-icon">
                  <Icon />
                </div>
                <div className="colorloop-point-copy">
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <a className="button button-dark colorloop-cta" href="https://veoria.fr/deltaone/" target="_blank" rel="noreferrer">
          Discover DeltaOne
        </a>
      </div>
    </section>
  );
}
