import { createSupabaseServerClient } from '@/lib/supabase/server';
import { FREE_COURSES, type AcademyCourse } from '@/data/academy-courses';

const FREE_COURSE_SLUGS = new Set(FREE_COURSES.map((c) => c.id));

export function isFreeCourse(slug: string) {
  return FREE_COURSE_SLUGS.has(slug);
}

export type CourseAccess = {
  hasAccess: boolean;
  source: 'free' | 'purchase' | 'pass' | 'grant' | null;
  expiresAt: string | null;
  signedIn: boolean;
};

/**
 * Whether the current user can read the full lessons of the course.
 * Free courses are always accessible (even signed out).
 * Premium courses require an enrollment OR an active pass subscription.
 */
export async function getCourseAccess(course: AcademyCourse): Promise<CourseAccess> {
  if (isFreeCourse(course.id)) {
    return { hasAccess: true, source: 'free', expiresAt: null, signedIn: false };
  }

  // Graceful fallback when Supabase env vars are not yet configured:
  // treat premium courses as locked (paywall) and signed-out.
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return { hasAccess: false, source: null, expiresAt: null, signedIn: false };
  }

  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { hasAccess: false, source: null, expiresAt: null, signedIn: false };
  }

  // user_course_access view union'd enrollments + active pass subscriptions
  const { data } = await supabase
    .from('user_course_access')
    .select('source, expires_at')
    .eq('user_id', user.id)
    .eq('course_slug', course.id)
    .maybeSingle();

  if (!data) {
    return { hasAccess: false, source: null, expiresAt: null, signedIn: true };
  }

  return {
    hasAccess: true,
    source: (data.source ?? null) as CourseAccess['source'],
    expiresAt: (data.expires_at ?? null) as string | null,
    signedIn: true,
  };
}
