'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';
import { SocialLinks } from '@/components/social-links';
import type { SocialLink } from '@/components/social-links';
import { SiteNav } from '@/components/site-nav';

const ColorLoopShowcase = dynamic(
  () => import('@/components/colorloop-showcase').then((module) => module.ColorLoopShowcase),
  { ssr: true }
);
const ColorLoopStudioComing = dynamic(
  () => import('@/components/colorloop-studio-coming').then((module) => module.ColorLoopStudioComing),
  { ssr: true }
);
const TeamShowcase = dynamic(
  () => import('@/components/team-showcase').then((module) => module.TeamShowcase),
  { ssr: true }
);
const VideoShowcase = dynamic(
  () => import('@/components/video-showcase').then((module) => module.VideoShowcase),
  { ssr: true }
);
const SiteFooter = dynamic(
  () => import('@/components/site-footer').then((module) => module.SiteFooter),
  { ssr: true }
);

const pressBrands = [
  { src: '/images/heidelberg.png', alt: 'Heidelberg' },
  { src: '/images/goss.webp', alt: 'Goss' },
  { src: '/images/manroland.webp', alt: 'Manroland' },
  { src: '/images/presstek.webp', alt: 'Presstek' },
  { src: '/images/komori.webp', alt: 'Komori' },
  { src: '/images/koenig-bauer.webp', alt: 'Koenig & Bauer' },
  { src: '/images/ryobi.webp', alt: 'Ryobi' },
  { src: '/images/mitsubishi.webp', alt: 'Mitsubishi' },
];

const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/rutherford-graphic-products-llc' },
  { label: 'Instagram', href: 'https://www.instagram.com/rutherfordgraphic/' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UChiClIodg9rbuTDnInE4GmQ' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@rutherfordgraphic' },
];

export default function HomePage() {
  const { locale } = useLanguage();

  return (
    <main className="page-shell" id="top">
      <SiteNav current="home" />

      <section className="hero-section">
        <div className="container hero-stack">
          <div className="hero-copy">
            <p className="hero-kicker">
              {locale === 'fr'
                ? 'Save ink, paper and energy 🌱'
                : 'Save ink, paper and energy 🌱'}
            </p>
            <h1>
              <span className="hero-line">Stop playing</span>
              <span className="hero-line hero-line-accent">the piano</span>
            </h1>
            <div className="hero-packshot" aria-hidden="true">
              <Image
                src="/images/colorloop-lenovo-half.png"
                alt=""
                width={1620}
                height={657}
                priority
                sizes="(max-width: 768px) 92vw, (max-width: 1280px) 78vw, 980px"
              />
            </div>
            <p className="hero-description">
              {locale === 'fr'
                ? "ColorLoop est la plateforme Rutherford de contrôle couleur en boucle fermée pour les presses offset. Elle relie les presets CIP3 / CIP4, le guidage sur presse et le suivi qualité pour réduire la gâche et accélérer la mise en route. Discover the full product on colorloop.ai."
                : "ColorLoop is Rutherford's closed-loop color control platform for offset presses. It connects CIP3 / CIP4 presetting, on-press guidance and quality follow-up to reduce waste and speed up make-ready. Discover the full product on colorloop.ai."}
            </p>

            <div className="hero-actions">
              <a
                className="button button-dark"
                href="https://colorloop.ai/"
                target="_blank"
                rel="noreferrer"
              >
                colorloop.ai
              </a>
              <a
                className="button button-light"
                href="#products"
              >
                Explore ColorLoop
              </a>
            </div>
          </div>
        </div>
      </section>

      <ColorLoopStudioComing />

      <section className="section compatible-press-section" aria-labelledby="compatible-press-title">
        <div className="container compatible-press-header">
          <p className="section-kicker">{locale === 'fr' ? 'Presses compatibles' : 'Compatible press'}</p>
          <h2 id="compatible-press-title">{locale === 'fr' ? 'Marques de presses compatibles' : 'Compatible press brands'}</h2>
          <p>
            {locale === 'fr'
              ? 'No matter the make and model of press!'
              : 'No matter the make and model of press!'}
          </p>
        </div>

        <div className="compatible-press-marquee" aria-label="Compatible press brands logos">
          <div className="compatible-press-track">
            {[...pressBrands, ...pressBrands].map((brand, index) => (
              <span className="compatible-press-item" key={`${brand.alt}-${index}`}>
                <Image
                  src={brand.src}
                  alt={index < pressBrands.length ? brand.alt : ''}
                  width={200}
                  height={80}
                  sizes="120px"
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      <VideoShowcase />

      <ColorLoopShowcase />

      <section className="section">
        <div className="container map-success-section">
          <div className="section-copy centered-copy map-success-copy">
            <p className="section-kicker">{locale === 'fr' ? 'Déploiement' : 'Deployment'}</p>
            <h2>{locale === 'fr' ? 'Structurez votre réussite' : 'Map your success'}</h2>
            <p>
              {locale === 'fr'
                ? 'Le bundle ColorLoop / X-Rite IntelliTrax2 & MeasureColor réunit le pilotage, la mesure et le suivi qualité dans une seule chaîne claire.'
                : 'The ColorLoop / X-Rite IntelliTrax2 & MeasureColor bundle brings control, measurement and quality tracking together in one clear workflow.'}
            </p>
          </div>

          <div className="map-success-bundle">
            <div className="map-success-bundle-visual">
              <Image
                src="/images/Bundle Rutherford-4.jpg"
                alt="Rutherford bundle with ColorLoop, IntelliTrax2 and MeasureColor"
                width={1024}
                height={768}
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 82vw, 1000px"
              />
            </div>

            <div className="map-success-grid map-success-grid-simple">
              <article className="map-success-info-card">
                <h3>ColorLoop</h3>
                <p>ColorLoop prepares presets and helps operators reach the right color faster on press.</p>
              </article>
              <article className="map-success-info-card">
                <h3>X-Rite IntelliTrax2</h3>
                <p>IntelliTrax2 captures accurate color bar readings quickly and feeds the workflow with reliable data.</p>
              </article>
              <article className="map-success-info-card">
                <h3>MeasureColor</h3>
                <p>MeasureColor centralizes reporting, quality tracking and job visibility across the full production floor.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <TeamShowcase />

      <section className="section section-cta" id="contact">
        <div className="container">
          <div className="newsletter-panel">
            <div className="newsletter-grid" aria-hidden="true" />

            <div className="newsletter-pill">
              <span className="newsletter-pill-avatars" aria-hidden="true">
                <span>
                  <Image
                    src="/images/1profipicturesuccessstory.webp"
                    alt=""
                    width={68}
                    height={68}
                    sizes="34px"
                  />
                </span>
                <span>
                  <Image
                    src="/images/2profipicturesuccessstory.webp"
                    alt=""
                    width={68}
                    height={68}
                    sizes="34px"
                  />
                </span>
                <span>
                  <Image
                    src="/images/3profipicturesuccessstory.webp"
                    alt=""
                    width={68}
                    height={68}
                    sizes="34px"
                  />
                </span>
              </span>
              <span>{locale === 'fr' ? 'Rejoignez la newsletter' : 'Join the newsletter'}</span>
            </div>

            <div className="centered-cta newsletter-copy">
              <h2>{locale === 'fr' ? 'Stay in the loop' : 'Stay in the loop'}</h2>
              <p>
                {locale === 'fr'
                  ? 'Inscrivez-vous à la newsletter Rutherford pour recevoir nos actualités produit, nos vidéos, nos installations et les nouveautés ColorLoop.'
                  : 'Subscribe to the Rutherford newsletter for product updates, videos, installations and the latest ColorLoop releases.'}
              </p>
            </div>

            <form action="mailto:contact@rutherford.fr" method="post" encType="text/plain" className="newsletter-panel-form">
              <input
                type="email"
                name="email"
                placeholder={locale === 'fr' ? 'Votre adresse email' : 'Your email address'}
                aria-label={locale === 'fr' ? 'Votre adresse email' : 'Your email address'}
              />
              <button type="submit">
                {locale === 'fr' ? "S'inscrire" : 'Sign up'}
              </button>
            </form>

            <SocialLinks links={socialLinks} className="newsletter-socials social-links" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
