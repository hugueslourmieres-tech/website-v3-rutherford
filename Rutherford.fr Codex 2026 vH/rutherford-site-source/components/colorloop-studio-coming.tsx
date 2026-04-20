'use client';

import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';
import { useEffect, useRef, useState } from 'react';

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ColorLoopStudioComing() {
  const { locale } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      setProgress(1);
      return;
    }

    const update = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;
      const raw = (viewport - rect.top) / (rect.height * 0.75);
      setProgress(clamp(raw, 0, 1));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const titleOpacity = clamp(progress / 0.3, 0.18, 1);
  const titleShift = 30 - progress * 30;
  const deviceLift = 70 - progress * 70;
  const deviceScale = 0.9 + progress * 0.1;
  const glowOpacity = clamp(progress / 0.45, 0, 1);
  return (
    <section
      className="studio-coming-section"
      ref={sectionRef}
      style={
        {
          '--studio-title-opacity': titleOpacity,
          '--studio-title-shift': `${titleShift}px`,
          '--studio-device-lift': `${deviceLift}px`,
          '--studio-device-scale': deviceScale,
          '--studio-glow-opacity': glowOpacity,
        } as React.CSSProperties
      }
    >
      <div className="container studio-coming-shell">
        <div className="studio-coming-copy">
          <h2>{locale === 'fr' ? 'ColorLoop Graphic Studio' : 'ColorLoop Graphic Studio'}</h2>
          <p className="studio-coming-lead">
            {locale === 'fr'
              ? 'Pour une visibilité totale sur votre production, vos assets et vos machines.'
              : 'For total visibility across your production, assets and machines.'}
          </p>
          <p className="studio-coming-body">
            {locale === 'fr'
              ? "ColorLoop Graphic Studio centralise les vues de production, les ressources et le suivi machine pour donner aux équipes une lecture plus claire de l'atelier."
              : 'ColorLoop Graphic Studio extends the ColorLoop ecosystem with a clearer production view, centralized assets and machine-level visibility across the plant.'}
          </p>
        </div>

        <div className="studio-coming-stage">
          <div className="studio-coming-glow" aria-hidden="true" />
          <div className="studio-imac">
            <Image
              src="/images/Imac CGS Colorloop Graphic Studio.jpg"
              alt="iMac ColorLoop Graphic Studio"
              width={2160}
              height={1215}
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 84vw, 1100px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
