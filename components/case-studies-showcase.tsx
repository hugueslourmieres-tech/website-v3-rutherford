'use client';

import Image from 'next/image';
import { useState } from 'react';

const caseStudies = [
  {
    title: 'LEFRANCQ Packaging',
    summary:
      'How a packaging printer improved color repeatability, setup speed and customer confidence across offset production.',
    href: '/blog/lefrancq-packaging-testimonial',
    image: '/images/lefrancq-packaging-testimonial.jpg',
    imageAlt: 'LEFRANCQ Packaging case study',
  },
  {
    title: 'Extended Gamut at LEFRANCQ',
    summary:
      'A practical look at extended gamut deployment, print standardization and smarter color control in packaging.',
    href: '/blog/extended-gamut-from-lefrancq',
    image: '/images/lefrancq-extended-gamut.jpg',
    imageAlt: 'Extended gamut at LEFRANCQ',
  },
  {
    title: "Wauters B'Pack",
    summary:
      'A field story about packaging performance, quality consistency and how Rutherford supports production teams.',
    href: '/blog/wauters---bpack',
    image: '/images/wauters-bpack.jpg',
    imageAlt: "Wauters B'Pack case study",
  },
  {
    title: 'PPWR and DPP Readiness',
    summary:
      'What converters and industrial printers should prepare now for traceability, compliance and packaging data flows.',
    href: '/blog/ppwr-dpp-for-offset-printing',
    image: '/images/ppwr-dpp-hero.png',
    imageAlt: 'PPWR and Digital Product Passport article',
  },
];

export function CaseStudiesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < caseStudies.length - 1;

  return (
    <section className="section case-studies-section" id="cases">
      <div className="container case-studies-shell">
        <div className="section-copy centered-copy">
          <p className="section-kicker">Case studies</p>
          <h2>Results from the field.</h2>
          <p>
            Practical stories from packaging, commercial printing and industrial color deployment.
          </p>
        </div>

        <div className="case-studies-stage">
          <button
            type="button"
            className="case-arrow case-arrow-left"
            onClick={() => setActiveIndex((value) => value - 1)}
            disabled={!canGoPrev}
            aria-label="Previous case study"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <article className="case-card">
            <div className="case-card-media">
              <Image
                src={caseStudies[activeIndex].image}
                alt={caseStudies[activeIndex].imageAlt}
                width={1400}
                height={900}
                sizes="(max-width: 768px) 92vw, (max-width: 1280px) 78vw, 940px"
              />
            </div>

            <div className="case-card-copy">
              <h3>{caseStudies[activeIndex].title}</h3>
              <p>{caseStudies[activeIndex].summary}</p>
              <a className="button button-light" href={caseStudies[activeIndex].href}>
                Read article
              </a>
            </div>
          </article>

          <button
            type="button"
            className="case-arrow case-arrow-right"
            onClick={() => setActiveIndex((value) => value + 1)}
            disabled={!canGoNext}
            aria-label="Next case study"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="case-dots" aria-label="Case studies position">
          {caseStudies.map((study, index) => (
            <button
              type="button"
              key={study.href}
              className={`case-dot ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>

        <div className="case-studies-mobile-list">
          {caseStudies.map((study) => (
            <article className="case-mobile-card" key={`mobile-${study.href}`}>
              <div className="case-mobile-media">
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  width={1400}
                  height={900}
                  sizes="84vw"
                />
              </div>
              <div className="case-mobile-copy">
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <a className="button button-light" href={study.href}>
                  Read article
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
