import type { Metadata } from 'next';
import { LanguageProvider } from '@/components/language-provider';
import { GoogleAnalytics } from '@/components/google-analytics';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://rutherford.fr'),
  title: 'Rutherford.fr | Closed-loop color control',
  description:
    'Rutherford.fr powered by X-Rite Pantone. ColorLoop combines CIP3 / CIP4 preset, measurement and closed-loop color control for offset printing.',
  openGraph: {
    title: 'Rutherford.fr | Closed-loop color control',
    description:
      'Rutherford.fr powered by X-Rite Pantone. ColorLoop combines CIP3 / CIP4 preset, measurement and closed-loop color control for offset printing.',
    url: 'https://rutherford.fr',
    siteName: 'Rutherford.fr',
    images: [
      {
        url: '/images/Bundle Rutherford-4.jpg',
        width: 1200,
        height: 630,
        alt: 'Rutherford team',
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
    images: ['/images/Bundle Rutherford-4.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
