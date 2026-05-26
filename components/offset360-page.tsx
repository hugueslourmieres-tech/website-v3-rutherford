'use client';

import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';

const XRITE_OFFSET360_URL = 'https://www.xrite.com/page/offset360';
const VIDEO_ID = '7X0fOMXK72Y';

type BundleComponent = {
  name: string;
  vendorLogo: string;
  vendorAlt: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  external: boolean;
};

const bundleComponents: BundleComponent[] = [
  {
    name: 'IntelliTrax2',
    vendorLogo: '/images/xrite-logo-black.png',
    vendorAlt: 'X-Rite',
    role: 'Press-side scanning',
    description:
      'Automated spectrophotometer for sheetfed offset. Reads a full color bar in under ten seconds, 2 mm bars at 45°/0°, M0 / M1 / M3 in a single pass.',
    image: '/images/intellitrax2-clean.jpg',
    imageAlt: 'IntelliTrax2 scanner',
    href: 'https://www.xrite.com/categories/scanning-spectrophotometers/intellitrax2',
    external: true,
  },
  {
    name: 'MeasureColor',
    vendorLogo: '/images/xrite-logo-black.png',
    vendorAlt: 'X-Rite',
    role: 'Quality & reporting',
    description:
      'Production color management. Aggregates measurements, computes ΔE in real time, exports PQX and CXF for the supply chain.',
    image: '/images/measurecolor-hero.jpg',
    imageAlt: 'MeasureColor on a press-side display',
    href: 'https://www.xrite.com/categories/formulation-and-quality-assurance-software/measurecolor-production',
    external: true,
  },
  {
    name: 'Rutherford ColorLoop',
    vendorLogo: '/images/rutherford-logo-black.png',
    vendorAlt: 'Rutherford',
    role: 'Closed-loop on the console',
    description:
      'Converts measurement deltas into ink-key corrections. Pushes them to the press console. The operator validates. The loop closes.',
    image: '/images/Imac CGS Colorloop Graphic Studio.jpg',
    imageAlt: 'Rutherford ColorLoop on an iMac',
    href: '/#colorloop',
    external: false,
  },
];

const numbers: { value: string; label: string }[] = [
  { value: '− 50 %', label: 'Makeready waste' },
  { value: '− 30 %', label: 'Setup time' },
  { value: 'ΔE < 2', label: 'In-run color stability' },
  { value: '100 %', label: 'Traceable sheets' },
];

const steps: { num: string; title: string; body: string }[] = [
  { num: '01', title: 'Preset', body: 'CIP3 / CIP4 ink-key presets load automatically. No manual punch-in.' },
  { num: '02', title: 'Scan', body: 'IntelliTrax2 reads the color bar across the sheet in seconds.' },
  { num: '03', title: 'Compare', body: 'MeasureColor computes ΔE against the brand reference and flags out-of-tolerance zones.' },
  { num: '04', title: 'Correct', body: 'ColorLoop pushes the corrections to the console. The operator validates. The loop closes.' },
];

export function Offset360Page() {
  return (
    <main className="page-shell o360">
      <SiteNav current="home" />

      {/* Hero */}
      <section className="o360-section">
        <div className="o360-narrow">
          <h1 className="o360-h1">Offset360</h1>
          <p className="o360-lede">
            The closed-loop bundle for sheetfed offset. Scan, compare, correct — without leaving the console.
          </p>
          <div className="o360-cta-row">
            <a className="o360-btn o360-btn-primary" href="#film">Watch the film</a>
            <a className="o360-btn o360-btn-ghost" href="https://form.typeform.com/to/LZtPUH" target="_blank" rel="noreferrer">
              Talk to an expert
            </a>
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="film" className="o360-section" style={{ paddingTop: 0 }}>
        <div className="o360-container">
          <div className="o360-video-wrap">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="Offset360 — closed-loop color for sheetfed offset"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Punchline */}
      <section className="o360-section o360-quiet">
        <div className="o360-narrow">
          <p className="o360-eyebrow">The idea</p>
          <h2 className="o360-h2">Three pieces. One loop.</h2>
          <p className="o360-lede">
            Two best-in-class X-Rite products. One Rutherford software. Together they form a single workflow,
            engineered for press operators who can&apos;t afford to chase color.
          </p>
        </div>
      </section>

      {/* Bundle */}
      <section className="o360-section">
        <div className="o360-container">
          <div className="o360-narrow" style={{ marginBottom: 16 }}>
            <p className="o360-eyebrow">In the bundle</p>
            <h2 className="o360-h2">Each piece, best at its job.</h2>
          </div>

          <div className="o360-bundle">
            {bundleComponents.map((item) => (
              <article className="o360-card" key={item.name}>
                <div className="o360-card-media">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                </div>
                <div className="o360-card-body">
                  <div className="o360-card-vendor">
                    <img src={item.vendorLogo} alt={item.vendorAlt} />
                  </div>
                  <h3 className="o360-h3">{item.name}</h3>
                  <p className="o360-card-role">{item.role}</p>
                  <p>{item.description}</p>
                  <a
                    className="o360-card-link"
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                  >
                    Learn more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="o360-section o360-quiet">
        <div className="o360-container">
          <div className="o360-narrow">
            <p className="o360-eyebrow">What it delivers</p>
            <h2 className="o360-h2">On the press floor, in plain numbers.</h2>
          </div>

          <div className="o360-numbers">
            {numbers.map((n) => (
              <div className="o360-number" key={n.label}>
                <strong>{n.value}</strong>
                <span>{n.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="o360-section">
        <div className="o360-container">
          <div className="o360-narrow" style={{ marginBottom: 16 }}>
            <p className="o360-eyebrow">How it runs</p>
            <h2 className="o360-h2">The Offset360 loop.</h2>
          </div>

          <ol className="o360-steps">
            {steps.map((s) => (
              <li className="o360-step" key={s.num}>
                <span className="o360-step-num">{s.num}</span>
                <div className="o360-step-body">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="o360-section o360-quiet">
        <div className="o360-narrow o360-end">
          <p className="o360-eyebrow">Next step</p>
          <h2 className="o360-h2">Get it on your press.</h2>
          <p>
            Send a few photos of your console — we come back with an Offset360 scope tailored to your machines and brand standards.
          </p>
          <div className="o360-cta-row">
            <a className="o360-btn o360-btn-primary" href="/console-validation">
              Request console validation
            </a>
            <a className="o360-btn o360-btn-ghost" href={XRITE_OFFSET360_URL} target="_blank" rel="noreferrer">
              Learn more on X-Rite
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
