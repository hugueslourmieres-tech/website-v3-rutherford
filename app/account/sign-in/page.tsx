import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SignInPage } from '@/components/sign-in-page';

export const metadata: Metadata = {
  title: 'Sign in — Rutherford Academy',
  description: 'Sign in to access your enrolled courses and progress.',
};

export default function SignInRoute() {
  return (
    <Suspense>
      <SignInPage />
    </Suspense>
  );
}
