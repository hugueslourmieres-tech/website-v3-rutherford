import type { NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    // run on every route except static assets, _next, api/stripe/webhook (raw body needed)
    '/((?!_next/static|_next/image|favicon.ico|videos|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm)$|api/stripe/webhook).*)',
  ],
};
