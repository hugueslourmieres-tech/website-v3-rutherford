'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selectors = [
      '.brand-explainer-header',
      '.brand-explainer-card',
      '.how-rutherford-header',
      '.how-rutherford-card',
      '.colorloop-offset-header',
      '.colorloop-offset-card',
      '.case-studies-header',
      '.case-study-card',
      '.audience-header',
      '.audience-card',
      '.blog-preview-header',
      '.blog-preview-card',
      '.ppwr-intro',
      '.ppwr-card',
      '.team-content',
      '.contact-header',
      '.console-cta-card',
      '.rutherford-identity-copy',
      '.rutherford-stats-grid',
    ];

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(', ')));
    if (reduce) {
      nodes.forEach((n) => n.classList.add('is-revealed'));
      return;
    }

    nodes.forEach((node, i) => {
      node.classList.add('reveal');
      node.style.setProperty('--reveal-delay', `${Math.min(i * 40, 200)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return null;
}
