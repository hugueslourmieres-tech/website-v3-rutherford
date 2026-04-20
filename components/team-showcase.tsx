'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const teamMembers = [
  {
    name: 'Francois-Xavier David',
    image: '/images/team-fx.jpeg',
    role: 'Chief Executive Officer',
  },
  {
    name: 'Jonathan Constant',
    image: '/images/team-jonathan.jpeg',
    role: 'Technical Director',
  },
  {
    name: 'Fabrice Doreau',
    image: '/images/team-fabrice-doreau-v2.jpeg',
    role: 'Business Developer',
  },
  {
    name: 'Emilie Doreau',
    image: '/images/team-EMilie doreau.jpeg',
    role: 'Administrative and Finance Manager',
  },
  {
    name: 'Lucile Chalayer',
    image: '/images/team-lucile-chalayer.jpeg',
    role: 'AI & Software Engineer',
  },
  {
    name: 'Gabriel Jean',
    image: '/images/team-gabriel.jpeg',
    role: 'FPGA Hardware Engineer',
  },
  {
    name: 'Valentina Lisci',
    image: '/images/team-valentina-lisci.jpeg',
    role: 'Marketing Strategy & Operations VEORIA & Rutherford',
  },
  {
    name: 'Hugues Lourmieres',
    image: '/images/team-hugues-lourmieres.jpeg',
    role: 'CMO Rutherford.fr',
  },
];

function getVisibleMembers(startIndex: number) {
  return Array.from({ length: 3 }, (_, offset) => teamMembers[(startIndex + offset) % teamMembers.length]);
}

export function TeamShowcase() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleMembers = useMemo(() => getVisibleMembers(startIndex), [startIndex]);

  return (
    <section className="section team-section" id="team">
      <div className="container team-shell">
        <div className="section-copy centered-copy team-copy">
          <p className="section-kicker">Made in France</p>
          <h2>Our Team</h2>
        </div>

        <div className="team-carousel-desktop">
          <button
            type="button"
            className="team-arrow team-arrow-left"
            onClick={() => setStartIndex((value) => (value - 1 + teamMembers.length) % teamMembers.length)}
            aria-label="Previous team members"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div className="team-cards-grid">
            {visibleMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-card-media">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={900}
                    height={1125}
                    sizes="(max-width: 1280px) 28vw, 320px"
                  />
                </div>
                <div className="team-card-copy">
                  <p className="team-card-name">{member.name}</p>
                  <p className="team-card-role">{member.role}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="team-arrow team-arrow-right"
            onClick={() => setStartIndex((value) => (value + 1) % teamMembers.length)}
            aria-label="Next team members"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="team-mobile-scroller" aria-label="Team members">
          {teamMembers.map((member) => (
            <article className="team-card" key={`mobile-${member.name}`}>
              <div className="team-card-media">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={900}
                  height={1125}
                  sizes="(max-width: 768px) 74vw, 42vw"
                />
              </div>
              <div className="team-card-copy">
                <p className="team-card-name">{member.name}</p>
                <p className="team-card-role">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
