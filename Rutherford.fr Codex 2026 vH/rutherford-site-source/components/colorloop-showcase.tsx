'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

const stats = [
  {
    label: 'Automatic setup',
    target: 30,
    suffix: ' sec',
  },
  {
    label: 'Less waste',
    target: 65,
    suffix: '%',
  },
  {
    label: 'Faster makeready',
    target: 45,
    suffix: '%',
  },
];

const points = [
  {
    title: 'Preset automation',
    text: 'Prepare the job, connect MeasureColor and start from a much faster setup baseline.',
  },
  {
    title: 'Closed-loop',
    text: 'Guide on-press corrections during makeready so operators reach target color faster.',
  },
  {
    title: 'Automatic learning',
    text: 'Learn from stable runs to strengthen future jobs and improve repeatability over time.',
  },
  {
    title: 'MeasureColor integration',
    text: 'Connect measurement, quality tracking and performance visibility in one continuous flow.',
  },
];

const showcasePhotos = [
  {
    src: '/images/Hugues on console press offset.jpg',
    alt: 'Hugues working on the offset press console',
    width: 1152,
    height: 768,
  },
  {
    src: '/images/people-console-01-03-2022.jpg',
    alt: 'Offset press operators on the console during production',
    width: 2560,
    height: 1707,
  },
  {
    src: '/images/people-console-dsc2809.jpg',
    alt: 'Offset press operator standing at the control console',
    width: 2560,
    height: 1707,
  },
  {
    src: '/images/offset-printing-09-10-2020.jpg',
    alt: 'Offset printing press in production',
    width: 2560,
    height: 1707,
  },
];

function PresetIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M7 12h10" />
      <path d="M10 17h4" />
    </svg>
  );
}

function LoopIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 8a5.5 5.5 0 0 1 10 1.5" />
      <path d="M17 6.5 18.5 10 15 11" />
      <path d="M17 16a5.5 5.5 0 0 1-10-1.5" />
      <path d="M7 17.5 5.5 14 9 13" />
    </svg>
  );
}

function LearnIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4 4 8l8 4 8-4-8-4Z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16l8 4 8-4" />
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

const icons = [PresetIcon, LoopIcon, LearnIcon, MeasureIcon];

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

export function ColorLoopShowcase() {
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
    <section className={`colorloop-showcase ${active ? 'is-active' : ''}`} id="products" ref={sectionRef}>
      <div className="container colorloop-stage">
        <div className="colorloop-copy">
          <h2>
            <span>All-in-One</span>
          </h2>
          <p className="colorloop-lead">
            One connected view for preset, control, quality follow-up and production visibility.
          </p>
        </div>

        <div className="colorloop-visual" aria-label="ColorLoop production slideshow">
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

        <div className="colorloop-stats" aria-label="Key ColorLoop metrics">
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

        <a className="button button-dark colorloop-cta" href="https://colorloop.ai/" target="_blank" rel="noreferrer">
          Discover ColorLoop
        </a>
      </div>
    </section>
  );
}
