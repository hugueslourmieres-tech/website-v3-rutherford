import type { Metadata } from 'next';
import { AcademyPage } from '@/components/academy-page';

export const metadata: Metadata = {
  title: 'Rutherford Academy — Offset color management masterclasses',
  description:
    'Online courses and masterclasses on closed-loop color, MeasureColor, IntelliTrax2 and ColorLoop, built by Rutherford for offset printers, packaging converters and brand owners.',
};

export default function AcademyRoute() {
  return <AcademyPage />;
}
