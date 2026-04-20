'use client';

import { useLanguage } from '@/components/language-provider';
import { useEffect, useState } from 'react';

const videos = [
  { id: 'r7_4EdplcdE', title: "Wauters B'Pack x Rutherford ENG" },
  { id: 'FTjkGK2K-wI', title: 'Testimonial - GS M...' },
  { id: '0bUlKQ-lIZs', title: 'LEFRANCQ Packaging...' },
  { id: 'vYN1mjCK9VU', title: 'Testimonial - Printware USA' },
  { id: 'XjgKPUguTfw', title: 'ColorLoop Session 05' },
  { id: 'Zu79QlZnCPo', title: 'ColorLoop Session 06' },
  { id: '78a006Kulok', title: 'ColorLoop Session 07' },
  { id: 'ut247z4ren8', title: 'ColorLoop Session 08' },
  { id: 'bj-KzGZgKfU', title: 'ColorLoop Session 09' },
  { id: 'L5psrWuGNBg', title: 'ColorLoop Session 10' },
];

function thumbnail(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function VideoShowcase() {
  const { locale } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [playerEnabled, setPlayerEnabled] = useState(false);
  const activeVideo = videos[activeIndex];

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < videos.length - 1;

  useEffect(() => {
    setPlayerEnabled(false);
  }, [activeIndex]);

  return (
    <section className="section videos-section" id="videos">
      <div className="container videos-shell">
        <div className="section-copy centered-copy videos-copy">
          <h2>{locale === 'fr' ? 'Video Testimonials' : 'Video Testimonials'}</h2>
        </div>

        <div className="videos-player-stage">
          <button
            type="button"
            className="videos-arrow videos-arrow-side videos-arrow-left"
            onClick={() => setActiveIndex((value) => value - 1)}
            disabled={!canGoPrev}
            aria-label={locale === 'fr' ? 'Vidéo précédente' : 'Previous video'}
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div className="videos-player">
            {playerEnabled ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="videos-player-preview"
                onClick={() => setPlayerEnabled(true)}
                aria-label={`${locale === 'fr' ? 'Lire la vidéo' : 'Play video'}: ${activeVideo.title}`}
              >
                <img src={thumbnail(activeVideo.id)} alt={activeVideo.title} loading="lazy" />
                <span className="videos-player-play" aria-hidden="true" />
              </button>
            )}
          </div>

          <button
            type="button"
            className="videos-arrow videos-arrow-side videos-arrow-right"
            onClick={() => setActiveIndex((value) => value + 1)}
            disabled={!canGoNext}
            aria-label={locale === 'fr' ? 'Vidéo suivante' : 'Next video'}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="videos-toolbar">
          <div className="videos-dots" aria-label={locale === 'fr' ? 'Position du slideshow' : 'Slideshow position'}>
            {videos.map((video, index) => (
              <button
                type="button"
                key={video.id}
                className={`videos-dot ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`${locale === 'fr' ? 'Aller à la vidéo' : 'Go to video'} ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="videos-mobile-carousel" aria-label="Mobile video carousel">
          {videos.map((video) => (
            <div
              className={`videos-mobile-card ${video.id === activeVideo.id ? 'is-active' : ''}`}
              key={`mobile-${video.id}`}
            >
              <div className="videos-mobile-media">
                {video.id === activeVideo.id && playerEnabled ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="videos-mobile-preview"
                    onClick={() => {
                      setActiveIndex(videos.findIndex((item) => item.id === video.id));
                      setPlayerEnabled(true);
                    }}
                    aria-label={`${locale === 'fr' ? 'Lire la vidéo' : 'Play video'}: ${video.title}`}
                  >
                    <img src={thumbnail(video.id)} alt={video.title} loading="lazy" />
                    <span className="videos-mobile-play" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
