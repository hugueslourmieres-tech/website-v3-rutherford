'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ColorLoopStudioComing() {
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
      id="connect"
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
          <p className="section-kicker">PPWR · DPP</p>
          <h2>ColorLoop Connect</h2>
          <p className="studio-coming-lead">
            Turn compliance, traceability and production data into one clear operating layer.
          </p>
          <p className="studio-coming-body">
            ColorLoop Connect helps packaging and industrial print teams prepare for PPWR and Digital Product Passport
            workflows by connecting machine data, assets, job status and compliance visibility in one place.
          </p>
        </div>

        <div className="studio-coming-stage">
          <div className="studio-coming-glow" aria-hidden="true" />
          <div className="studio-imac">
            <Image
              src="/images/ImacCGSColorloopGraphicStudio-2.webp"
              alt="iMac ColorLoop Graphic Studio"
              width={1366}
              height={768}
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 84vw, 1100px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
