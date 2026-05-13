'use client';

import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';

type Course = {
  id: string;
  title: string;
  duration: string;
  modules: number;
  description: string;
  syllabus: string[];
  price?: string;
  certificate?: string;
  flagship?: boolean;
};

const FREE_COURSES: Course[] = [
  {
    id: 'fundamentals',
    title: 'Offset Color Management Fundamentals',
    duration: '45 min',
    modules: 5,
    description: 'The shared vocabulary every press team needs.',
    syllabus: [
      'What "good color" actually means on a press',
      'ISO 12647 in 10 minutes: substrates, TVI, primaries',
      'M0, M1, M2, M3: when to measure under which illuminant',
      'ΔE, ΔE 00, density: what to trust on the press floor',
      'The role of standards (G7, GRACoL, FOGRA) without the jargon',
    ],
  },
  {
    id: 'measurement-essentials',
    title: 'Press-Side Measurement Essentials',
    duration: '35 min',
    modules: 4,
    description: 'From manual densitometer to inline scanning.',
    syllabus: [
      'Handheld vs strip-reader vs inline scanner: pros, cons, cost',
      'The geometry that matters: 45°/0°, polarization, UV filtering',
      'Color bars decoded: what to put on the sheet and why',
      'Repeatability vs reproducibility: the trap that costs you hours',
    ],
  },
  {
    id: 'where-color-hurts',
    title: 'Where Color Hurts: From Makeready to Saleable Sheet',
    duration: '30 min',
    modules: 4,
    description: 'The hidden cost of inconsistency.',
    syllabus: [
      'Anatomy of a makeready: 800 sheets, 120 minutes, €450 on the floor',
      'The "good copy" myth: why subjective approval is killing your margin',
      'Drift, contamination, fountain solution, paper batch: the four silent killers',
      'Self-financed automation: how reduced waste pays for the system',
    ],
  },
];

const PREMIUM_COURSES: Course[] = [
  {
    id: 'closed-loop-flagship',
    title: 'The Complete Closed-Loop Color Masterclass',
    duration: '120 min',
    modules: 8,
    price: '€149',
    flagship: true,
    description: 'The definitive course on building a closed-loop offset operation, from setup to scale.',
    certificate: 'Rutherford Closed-Loop Expert',
    syllabus: [
      'The closed-loop concept: sensor, decision, actuator',
      'Anatomy of the Rutherford system: console interface, ink-zone control, learning logic',
      'Integrating with your press brand: Heidelberg, KBA, Komori, Manroland workflows',
      'CIP3/CIP4 presetting: turning prepress data into ink-key opens',
      'Spectral targets and ΔE strategy in production',
      'Operator workflow: what changes day one vs week one vs month three',
      'Closed-loop on extended gamut (ECG, 7-color)',
      'Scaling across presses, shifts, sites',
    ],
  },
  {
    id: 'measurecolor-production',
    title: 'MeasureColor Production: From Setup to Daily Operation',
    duration: '90 min',
    modules: 6,
    price: '€119',
    description: 'Master the measurement workflow that runs the pressroom.',
    syllabus: [
      'Installing and configuring MeasureColor Production',
      'Job templates, color bars, tolerances',
      'PQX, CXF, MIF, ICC, CGATS: what each format gives you',
      'Daily operator routine: measure, judge, document',
      'Integration with your MIS / job management via open XML',
      'Troubleshooting common errors and false positives',
    ],
  },
  {
    id: 'measurecolor-reports',
    title: 'MeasureColor Reports: Dashboards, Root-Cause & Continuous Improvement',
    duration: '80 min',
    modules: 6,
    price: '€119',
    description: 'Turn measurement data into management decisions.',
    syllabus: [
      'The Reports module architecture: data flow from press to dashboard',
      'Building the dashboards that matter (per machine, per operator, per brand)',
      'Drill-down for root-cause analysis: finding the failure pattern',
      'Brand-owner reporting: what to send, in which format',
      'Benchmarking machines, operators, shifts, sites',
      'Driving continuous improvement loops with Reports',
    ],
  },
  {
    id: 'intellitrax2',
    title: 'IntelliTrax2 & IntelliTrax2 Pro: Automated Scanning Mastery',
    duration: '90 min',
    modules: 6,
    price: '€129',
    description: 'Get every advantage out of X-Rite’s flagship scanning hardware.',
    syllabus: [
      'IntelliTrax2 (model 2900) vs IntelliTrax2 Pro (model 2900PRO): when to pick which',
      'Hardware setup: tracks, sheet positioning, calibration',
      'Geometry and conditions: 45°/0°, M0/M1/M3 single-pass strategy',
      'Color bars sized for 2 mm: what fits, what breaks',
      'Maintenance: non-contact best practices, UV LED life, certification cycles',
      'Migrating from legacy IntelliTrax (discontinued): what to expect',
    ],
  },
  {
    id: 'colorloop-ai',
    title: 'ColorLoop AI: Predictive Setup for Modern Offset',
    duration: '70 min',
    modules: 5,
    price: '€99',
    description: 'Rutherford’s own software: the new generation.',
    syllabus: [
      'What "AI-guided makeready" actually means (and what it doesn’t)',
      'Training the model on your jobs: first 30, 90, 365 days',
      'Predictive ink-key positioning vs reactive correction',
      'ColorLoop’s data layer: connecting press, measurement, MIS',
      'From operator decision to autonomous correction: staged adoption',
    ],
  },
  {
    id: 'offset360',
    title: 'Offset360 in Practice: Rutherford + IntelliTrax2 + MeasureColor',
    duration: '60 min',
    modules: 5,
    price: '€99',
    description: 'The X-Rite + Rutherford solution bundle, in real production conditions.',
    syllabus: [
      'The Offset360 architecture: what each component does',
      'Wiring the three systems together',
      'End-to-end job flow: prepress → setup → measure → correct → report',
      'Real-world ROI: calage, gâche, brand reports',
      'Common implementation pitfalls and how to avoid them',
    ],
  },
];

const WHY_POINTS = [
  { value: '25+', label: 'years of pressroom experience' },
  { value: '1 000+', label: 'deployed systems' },
  { value: '30+', label: 'countries' },
  { value: 'X-Rite', label: 'PANTONE partner' },
];

function CourseCard({ course, tone }: { course: Course; tone: 'free' | 'premium' }) {
  return (
    <article className={`academy-card academy-card-${tone} ${course.flagship ? 'is-flagship' : ''}`}>
      {course.flagship ? <span className="academy-card-flag">Flagship masterclass</span> : null}
      <header className="academy-card-head">
        <p className="academy-card-meta">
          <span>{course.duration}</span>
          <span aria-hidden="true">·</span>
          <span>{course.modules} modules</span>
        </p>
        <h3 className="academy-card-title">{course.title}</h3>
        <p className="academy-card-desc">{course.description}</p>
      </header>

      <ol className="academy-card-syllabus">
        {course.syllabus.map((item, index) => (
          <li key={index}>
            <span className="academy-card-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>

      <footer className="academy-card-foot">
        {course.certificate ? (
          <p className="academy-card-cert">
            <span aria-hidden="true">●</span> Certificate: <strong>{course.certificate}</strong>
          </p>
        ) : null}
        <div className="academy-card-cta-row">
          {course.price ? <span className="academy-card-price">{course.price}</span> : <span className="academy-card-price-free">Free</span>}
          <a className={`button ${tone === 'premium' ? 'button-accent' : 'button-dark'} academy-card-cta`} href="mailto: contact@rutherford.fr?subject=Rutherford%20Academy%20enrollment">
            {tone === 'premium' ? 'Enroll' : 'Start course'} <span aria-hidden="true">→</span>
          </a>
        </div>
      </footer>
    </article>
  );
}

export function AcademyPage() {
  return (
    <main className="page-shell" id="top">
      <SiteNav current="academy" />

      <section className="academy-hero section">
        <div className="container academy-hero-shell">
          <p className="section-kicker">Rutherford Academy</p>
          <h1 className="academy-hero-title">
            Offset color management,
            <br />
            taught by people who run pressrooms.
          </h1>
          <p className="academy-hero-sub">
            Online courses and masterclasses on closed-loop color, MeasureColor, IntelliTrax2 and ColorLoop: built by
            Rutherford for offset printers, packaging converters and brand owners. 25+ years of pressroom experience,
            distilled into structured curricula.
          </p>
          <div className="academy-hero-actions">
            <a className="button button-accent" href="#premium">
              Browse masterclasses
            </a>
            <a className="button button-light" href="#free">
              Start with a free course
            </a>
          </div>
        </div>
      </section>

      <section className="academy-section section" id="free">
        <div className="container">
          <header className="academy-section-head">
            <p className="section-kicker">Free introductory courses</p>
            <h2>Get the fundamentals right: at no cost</h2>
            <p>Three short courses to build the shared vocabulary every press team needs before tackling closed-loop.</p>
          </header>
          <div className="academy-grid academy-grid-free">
            {FREE_COURSES.map((course) => (
              <CourseCard key={course.id} course={course} tone="free" />
            ))}
          </div>
        </div>
      </section>

      <section className="academy-section academy-section-premium section" id="premium">
        <div className="container">
          <header className="academy-section-head">
            <p className="section-kicker">Premium masterclasses</p>
            <h2>Deep dives, certificates, real production wins</h2>
            <p>Six masterclasses covering the Rutherford / X-Rite / MeasureColor stack end to end.</p>
          </header>
          <div className="academy-grid academy-grid-premium">
            {PREMIUM_COURSES.map((course) => (
              <CourseCard key={course.id} course={course} tone="premium" />
            ))}
          </div>
        </div>
      </section>

      <section className="academy-bundle section" id="bundle">
        <div className="container academy-bundle-shell">
          <div className="academy-bundle-copy">
            <p className="section-kicker">Bundle</p>
            <h2>Rutherford Academy Pass</h2>
            <p className="academy-bundle-sub">All six premium masterclasses, lifetime access, six certificates, private Q&amp;A community, quarterly live sessions with Rutherford engineers.</p>
            <ul className="academy-bundle-list">
              <li>38 modules · ~510 minutes of content</li>
              <li>6 certificates of expertise</li>
              <li>Lifetime access &amp; updates</li>
              <li>Private Q&amp;A community</li>
              <li>Quarterly live sessions with Rutherford engineers</li>
            </ul>
          </div>
          <aside className="academy-bundle-price">
            <p className="academy-bundle-price-old">Was €725</p>
            <p className="academy-bundle-price-new">€399</p>
            <p className="academy-bundle-price-promo">
              <strong>€349</strong> with code <code>EARLYBIRD50</code>
              <br />
              <span>First 50 enrollments</span>
            </p>
            <a className="button button-accent academy-bundle-cta" href="mailto: contact@rutherford.fr?subject=Rutherford%20Academy%20Pass">
              Get the Pass <span aria-hidden="true">→</span>
            </a>
          </aside>
        </div>
      </section>

      <section className="academy-why section">
        <div className="container academy-why-shell">
          <header className="academy-section-head">
            <p className="section-kicker">Why learn with us</p>
            <h2>Built from real pressroom experience</h2>
          </header>
          <dl className="academy-why-grid">
            {WHY_POINTS.map((point) => (
              <div className="academy-why-stat" key={point.label}>
                <dt>{point.value}</dt>
                <dd>{point.label}</dd>
              </div>
            ))}
          </dl>
          <p className="academy-why-foot">
            Rutherford has been pioneering closed-loop color control on offset presses since the 90s, with 1 000+ systems deployed across 30+ countries. We co-developed MeasureColor with ColorWare and continue to integrate with X-Rite PANTONE measurement tools.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
