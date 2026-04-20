'use client';

import Image from 'next/image';

type SocialLink = {
  label: 'LinkedIn' | 'Instagram' | 'YouTube' | 'TikTok';
  href: string;
};

export type { SocialLink };

const iconMap: Record<SocialLink['label'], { src: string; width: number; height: number }> = {
  LinkedIn: {
    src: '/images/linkedin-pictogramme.webp',
    width: 1600,
    height: 1600,
  },
  Instagram: {
    src: '/images/instagram-pictogramme.webp',
    width: 600,
    height: 600,
  },
  YouTube: {
    src: '/images/youtube--pictogramme..webp',
    width: 600,
    height: 600,
  },
  TikTok: {
    src: '/images/tiktok-pictogramme.png',
    width: 800,
    height: 800,
  },
};

export function SocialLinks({
  links,
  className,
}: {
  links: SocialLink[];
  className?: string;
}) {
  return (
    <div className={className ?? 'social-links'}>
      {links.map((social) => {
        const icon = iconMap[social.label];

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
            className={`social-link social-link-${social.label.toLowerCase()}`}
          >
            <Image src={icon.src} alt="" width={icon.width} height={icon.height} sizes="28px" />
          </a>
        );
      })}
    </div>
  );
}
