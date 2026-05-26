'use client';

import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';

const XRITE_OFFSET360_URL = 'https://www.xrite.com/page/offset360';

type BundleComponent = {
  name: string;
  vendor: string;
  role: string;
  description: string;
  image: string;
  href?: string;
};

const bundleComponents: BundleComponent[] = [
  {
    name: 'IntelliTrax2',
    vendor: 'X-Rite',
    role: 'Press-side automated scanning',
    description:
      'Desktop automated spectrophotometer for sheetfed offset. Scans a full color bar in under 10 seconds, reads 2 mm bars at 45°/0°, and supports M0, M1 and M3 conditions in a single pass.',
    image: '/images/intellitrax2-clean.jpg',
    href: 'https://www.xrite.com/categories/scanning-spectrophotometers/intellitrax2',
  },
  {
    name: 'MeasureColor',
    vendor: 'X-Rite',
    role: 'Color quality control & reporting',
    description:
      'Production color management platform. Aggregates measurements from the press, the proof, and the brand standard. Builds compliant reports, tracks ΔE in real time, and exports PQX / CXF for the supply chain.',
    image: '/images/measurecolor-hero.jpg',
    href: 'https://www.xrite.com/categories/formulation-and-quality-assurance-software/measurecolor-production',
  },
  {
    name: 'Rutherford ColorLoop',
    vendor: 'Rutherford',
    role: 'Closed-loop control on the console',
    description:
      'Rutherford’s ColorLoop software closes the loop between the measurement device and the press console. It pushes corrections to the ink keys automatically, reducing makeready and stabilizing color across the run.',
    image: '/images/ColorLoop Graphic Studio screenshot.jpg',
    href: '/#colorloop',
  },
];

const outcomes: { title: string; value: string; note: string }[] = [
  { value: '− 50 %', title: 'Makeready waste', note: 'Less paper and ink during setup, run after run.' },
  { value: '− 30 %', title: 'Setup time', note: 'Faster color OK thanks to automated key corrections.' },
  { value: 'ΔE < 2', title: 'In-run color stability', note: 'Brand-grade consistency, measured and reported.' },
  { value: '100 %', title: 'Traceable sheets', note: 'Every job logged, every measurement archived for audit.' },
];

const workflowSteps: { step: string; title: string; body: string }[] = [
  {
    step: '01',
    title: 'Plate-side data',
    body: 'CIP3 / CIP4 ink-key presets are loaded automatically before the press starts. No manual punch-in, no guesswork.',
  },
  {
    step: '02',
    title: 'Scan',
    body: 'IntelliTrax2 reads the color bar across the sheet in seconds. Each zone is measured in M0, M1 or M3 depending on the brand standard.',
  },
  {
    step: '03',
    title: 'Compare',
    body: 'MeasureColor compares every patch to the reference, computes ΔE and flags out-of-tolerance zones in real time.',
  },
  {
    step: '04',
    title: 'Correct',
    body: 'Rutherford ColorLoop converts the deltas into ink-key corrections and pushes them directly to the console. The press operator validates and the loop closes.',
  },
];

const audiences = [
  {
    title: 'Packaging converters',
    body: 'Folding cartons, labels and corrugated converters serving brand owners with strict color tolerances and audit-ready reporting.',
  },
  {
    title: 'Commercial offset',
    body: 'High-mix shops running short and medium jobs where setup time, paper waste and operator turnover are the hidden cost drivers.',
  },
  {
    title: 'Brand owners',
    body: 'Buyers of print who need certainty that color is reproducible across plants, presses, and suppliers — backed by data, not by eye.',
  },
];

export function Offset360Page() {
  return (
    <main className="page-shell">
      <SiteNav current="home" />

      <section className="article-hero section">
        <div className="container article-hero-inner">
          <p className="section-kicker">Solution bundle</p>
          <h1>Offset360.</h1>
          <p>
            Offset360 is the closed-loop color bundle for sheetfed offset, built by X-Rite and Rutherford.
            IntelliTrax2 measures, MeasureColor reports, and Rutherford ColorLoop closes the loop on the press
            console — so brand-grade color is reached faster and held across the run.
          </p>
          <div className="article-actions" style={{ paddingTop: 24, justifyContent: 'center', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="button button-dark" href="https://form.typeform.com/to/LZtPUH" target="_blank" rel="noreferrer">
              Talk to an expert
            </a>
            <a className="button button-light" href={XRITE_OFFSET360_URL} target="_blank" rel="noreferrer">
              Learn more on X-Rite
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <figure className="article-media" style={{ marginBottom: 0 }}>
            <Image
              src="/images/Bundle Rutherford-4.jpg"
              alt="Offset360 bundle in a Rutherford pressroom"
              width={2400}
              height={1350}
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
              style={{ width: '100%', height: 'auto', borderRadius: 24, display: 'block' }}
            />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="article-hero-inner" style={{ textAlign: 'center', justifyItems: 'center', marginBottom: 36 }}>
            <p className="section-kicker">The bundle</p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1, letterSpacing: '-0.02em', margin: 0 }}>
              Three pieces, one loop.
            </h2>
            <p>
              Offset360 brings together two X-Rite products and one Rutherford software. Each piece is best-in-class on its
              own — together they deliver something neither side can deliver alone.
            </p>
          </div>

          <div className="blog-grid">
            {bundleComponents.map((item) => (
              <article className="blog-card" key={item.name}>
                <div className="blog-card-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <p className="section-kicker">{item.vendor}</p>
                  </div>
                  <h2 style={{ fontSize: '1.6rem' }}>{item.name}</h2>
                  <p style={{ color: 'var(--muted)', marginTop: -4, fontSize: '0.95rem' }}>{item.role}</p>
                  <p>{item.description}</p>
                  {item.href ? (
                    <a
                      className="button button-outline blog-card-button"
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      Learn more
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="container">
          <div className="article-hero-inner" style={{ textAlign: 'center', justifyItems: 'center', marginBottom: 36 }}>
            <p className="section-kicker">Outcomes</p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1, letterSpacing: '-0.02em', margin: 0 }}>
              What it delivers on the press floor.
            </h2>
          </div>

          <div className="blog-grid">
            {outcomes.map((kpi) => (
              <article className="blog-card" key={kpi.title} style={{ textAlign: 'center' }}>
                <div className="blog-card-body" style={{ alignItems: 'center', justifyItems: 'center' }}>
                  <strong style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                    {kpi.value}
                  </strong>
                  <h2 style={{ fontSize: '1.2rem', marginTop: 8 }}>{kpi.title}</h2>
                  <p style={{ marginTop: -2 }}>{kpi.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="article-hero-inner" style={{ marginBottom: 36 }}>
            <p className="section-kicker">How it works</p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1, letterSpacing: '-0.02em', margin: 0 }}>
              The Offset360 loop.
            </h2>
          </div>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 22 }}>
            {workflowSteps.map((step) => (
              <li
                key={step.step}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: 24,
                  padding: '24px 0',
                  borderTop: '1px solid var(--line)',
                }}
              >
                <strong style={{ fontSize: '2rem', letterSpacing: '-0.03em', color: 'var(--muted)' }}>{step.step}</strong>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{step.title}</h3>
                  <p style={{ marginTop: 6 }}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="container">
          <div className="article-hero-inner" style={{ textAlign: 'center', justifyItems: 'center', marginBottom: 36 }}>
            <p className="section-kicker">Who it&apos;s for</p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1, letterSpacing: '-0.02em', margin: 0 }}>
              Built for offset operations that ship to brands.
            </h2>
          </div>

          <div className="blog-grid">
            {audiences.map((aud) => (
              <article className="blog-card" key={aud.title}>
                <div className="blog-card-body">
                  <h2 style={{ fontSize: '1.4rem' }}>{aud.title}</h2>
                  <p>{aud.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-hero-inner" style={{ textAlign: 'center', justifyItems: 'center' }}>
          <p className="section-kicker">Next step</p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1, letterSpacing: '-0.02em', margin: 0 }}>
            Get Offset360 on your press.
          </h2>
          <p>
            Send us a picture of your console and a few details about your press. We&apos;ll come back with an Offset360
            scope tailored to your machines, your jobs and your brand standards.
          </p>
          <div style={{ paddingTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a className="button button-dark" href="/console-validation">
              Request console validation
            </a>
            <a className="button button-accent" href="mailto:contact@rutherford.fr">
              Contact Rutherford
            </a>
            <a className="button button-light" href={XRITE_OFFSET360_URL} target="_blank" rel="noreferrer">
              X-Rite Offset360 page
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
