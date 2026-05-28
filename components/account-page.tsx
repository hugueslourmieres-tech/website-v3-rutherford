'use client';

import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';

type EnrolledCourse = {
  slug: string;
  title: string;
  duration: string;
  modules: number;
  tone: 'free' | 'premium';
  source: 'free' | 'purchase' | 'pass' | 'grant';
  grantedAt: string;
  expiresAt: string | null;
};

type PassSubscription = {
  status: 'active' | 'past_due' | 'canceled' | 'incomplete';
  currentPeriodEnd: string | null;
  cancelAt: string | null;
};

type Props = {
  user: { email: string; fullName: string | null; avatarUrl: string | null };
  enrolledCourses: EnrolledCourse[];
  passSubscription: PassSubscription | null;
};

function formatDate(value: string | null) {
  if (!value) return null;
  try {
    return new Date(value).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  } catch {
    return null;
  }
}

const SOURCE_LABEL: Record<EnrolledCourse['source'], string> = {
  free: 'Free',
  purchase: 'Purchased',
  pass: 'Academy Pass',
  grant: 'Granted',
};

export function AccountPage({ user, enrolledCourses, passSubscription }: Props) {
  const hasActivePass = passSubscription?.status === 'active';

  const handleOpenPortal = async () => {
    const res = await fetch('/api/stripe/portal', { method: 'POST' });
    if (!res.ok) return;
    const { url } = await res.json();
    if (url) window.location.href = url;
  };

  return (
    <main className="page-shell" id="top">
      <SiteNav />

      <section className="account-hero section">
        <div className="container account-hero-shell">
          <div className="account-hero-identity">
            {user.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="account-hero-avatar" src={user.avatarUrl} alt="" />
            ) : (
              <div className="account-hero-avatar account-hero-avatar-placeholder" aria-hidden="true">
                {(user.fullName || user.email).slice(0, 1).toUpperCase()}
              </div>
            )}
            <div>
              <p className="section-kicker">Your account</p>
              <h1 className="account-hero-title">{user.fullName ?? user.email}</h1>
              <p className="account-hero-sub">{user.email}</p>
            </div>
          </div>
          <form action="/api/auth/sign-out" method="post">
            <button type="submit" className="button button-light account-signout">
              Sign out
            </button>
          </form>
        </div>
      </section>

      <section className="account-pass section">
        <div className="container">
          <header className="account-section-head">
            <p className="section-kicker">Academy Pass</p>
            <h2>{hasActivePass ? 'Pass active' : 'Get unlimited access to every masterclass'}</h2>
          </header>
          {hasActivePass ? (
            <div className="account-pass-card">
              <div>
                <p className="account-pass-status">Active</p>
                {passSubscription?.currentPeriodEnd ? (
                  <p className="account-pass-detail">
                    {passSubscription?.cancelAt
                      ? `Cancels on ${formatDate(passSubscription.cancelAt)}`
                      : `Renews on ${formatDate(passSubscription.currentPeriodEnd)}`}
                  </p>
                ) : (
                  <p className="account-pass-detail">Lifetime access, no renewal required.</p>
                )}
              </div>
              <button type="button" className="button button-light" onClick={handleOpenPortal}>
                Manage subscription
              </button>
            </div>
          ) : (
            <div className="account-pass-card">
              <div>
                <p className="account-pass-detail">
                  Six premium masterclasses, six certificates, lifetime access, private Q&amp;A community.
                </p>
              </div>
              <a className="button button-accent" href="/academy#bundle">
                See the Pass →
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="account-courses section">
        <div className="container">
          <header className="account-section-head">
            <p className="section-kicker">Your courses</p>
            <h2>{enrolledCourses.length > 0 ? 'Continue learning' : 'No courses yet'}</h2>
          </header>
          {enrolledCourses.length === 0 ? (
            <div className="account-empty">
              <p>
                You don&rsquo;t have any enrolled courses yet. Start with a free intro course or browse the premium
                masterclasses.
              </p>
              <div className="account-empty-actions">
                <a className="button button-dark" href="/academy#free">
                  Free courses
                </a>
                <a className="button button-accent" href="/academy#premium">
                  Premium masterclasses
                </a>
              </div>
            </div>
          ) : (
            <ul className="account-course-list">
              {enrolledCourses.map((course) => (
                <li key={course.slug} className="account-course-card">
                  <div className="account-course-meta">
                    <span className="account-course-source">{SOURCE_LABEL[course.source]}</span>
                    <span className="account-course-duration">
                      {course.duration} · {course.modules} modules
                    </span>
                  </div>
                  <h3 className="account-course-title">
                    <a href={`/academy/${course.slug}`}>{course.title}</a>
                  </h3>
                  <a className="account-course-cta" href={`/academy/${course.slug}`}>
                    Continue <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
