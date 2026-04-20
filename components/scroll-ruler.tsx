'use client';

import { useEffect, useState } from 'react';

export function ScrollRuler() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      return;
    }

    let frame = 0;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(value);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="scroll-ruler" aria-hidden="true">
      <div className="scroll-ruler-track">
        <div className="scroll-ruler-fill" style={{ height: `${Math.max(progress * 100, 8)}%` }} />
      </div>
    </div>
  );
}
