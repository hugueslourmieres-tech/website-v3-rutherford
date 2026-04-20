import type { Metadata } from 'next';
import { LanguageProvider } from '@/components/language-provider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://website-v3-rutherford.vercel.app'),
  title: 'Rutherford.fr | Closed-loop color control',
  description:
    'Rutherford.fr powered by X-Rite Pantone. ColorLoop combines CIP3 / CIP4 preset, measurement and closed-loop color control for offset printing.',
  openGraph: {
    title: 'Rutherford.fr | Closed-loop color control',
    description:
      'Rutherford.fr powered by X-Rite Pantone. ColorLoop combines CIP3 / CIP4 preset, measurement and closed-loop color control for offset printing.',
    url: 'https://website-v3-rutherford.vercel.app',
    siteName: 'Rutherford.fr',
    images: [
      {
        url: '/images/Imac CGS Colorloop Graphic Studio.jpg',
        width: 1365,
        height: 768,
        alt: 'ColorLoop Graphic Studio on iMac',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rutherford.fr | Closed-loop color control',
    description:
      'Rutherford.fr powered by X-Rite Pantone. ColorLoop combines CIP3 / CIP4 preset, measurement and closed-loop color control for offset printing.',
    images: ['/images/Imac CGS Colorloop Graphic Studio.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
