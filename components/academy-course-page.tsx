'use client';

import { useState } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import type { AcademyCourse } from '@/data/academy-courses';
import { getLessonsForCourse } from '@/data/academy-lessons';

const FREE_COURSE_LIST: { id: string; title: string }[] = [
  { id: 'fundamentals', title: 'Offset Color Management Fundamentals' },
  { id: 'measurement-essentials', title: 'Press-Side Measurement Essentials' },
  { id: 'where-color-hurts', title: 'Where Color Hurts' },
];

const PREMIUM_COURSE_LIST: { id: string; title: string }[] = [
  { id: 'closed-loop-flagship', title: 'The Complete Closed-Loop Color Masterclass' },
  { id: 'measurecolor-production', title: 'MeasureColor Production' },
  { id: 'measurecolor-reports', title: 'MeasureColor Reports' },
  { id: 'intellitrax2', title: 'IntelliTrax2 & IntelliTrax2 Pro' },
  { id: 'colorloop-ai', title: 'ColorLoop AI' },
  { id: 'offset360', title: 'Offset360 in Practice' },
];

export function AcademyCoursePage({ course }: { course: AcademyCourse }) {
  const tone = course.tone;
  const siblings = tone === 'premium' ? PREMIUM_COURSE_LIST : FREE_COURSE_LIST;
  const lessons = getLessonsForCourse(course.id);
  const [openLesson, setOpenLesson] = useState<number>(0);
  const toggleLesson = (index: number) => setOpenLesson((current) => (current === index ? -1 : index));

  return (
    <main className="page-shell" id="top">
      <SiteNav current="academy" />

      <section className="academy-course-hero section">
        <div className="container academy-course-hero-shell">
          <a className="academy-course-back" href="/academy">
            <span aria-hidden="true">←</span> Back to Rutherford Academy
          </a>

          <div className="academy-course-hero-grid">
            <div className="academy-course-hero-copy">
              <p className="section-kicker">
                {tone === 'premium' ? 'Premium masterclass' : 'Free introductory course'}
              </p>
              <h1 className="academy-course-title">{course.title}</h1>
              <p className="academy-course-lead">{course.description}</p>
              <ul className="academy-course-meta">
                <li>
                  <span>Duration</span>
                  <strong>{course.duration}</strong>
                </li>
                <li>
                  <span>Modules</span>
                  <strong>{course.modules}</strong>
                </li>
                <li>
                  <span>Price</span>
                  <strong>{course.price ?? 'Free'}</strong>
                </li>
                {course.certificate ? (
                  <li>
                    <span>Certificate</span>
                    <strong>{course.certificate}</strong>
                  </li>
                ) : null}
              </ul>
              {course.flagship ? <span className="academy-course-flag">Flagship masterclass</span> : null}
            </div>
            <figure className="academy-course-video">
              <video
                src={course.videoSrc}
                controls
                playsInline
                preload="metadata"
                poster="/images/academy/hero.jpg"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="academy-course-body section">
        <div className="container academy-course-body-shell">
          <div className="academy-course-syllabus-block">
            <h2>Course syllabus</h2>
            <ol className="academy-course-syllabus">
              {course.syllabus.map((item, index) => (
                <li key={index}>
                  <span className="academy-course-syllabus-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <aside className="academy-course-cta-card">
            <h3>{tone === 'premium' ? 'Enroll in this masterclass' : 'Watch the full course'}</h3>
            <p>
              {tone === 'premium'
                ? 'Lifetime access, certificate on completion, private Q&A with Rutherford engineers.'
                : 'Free, no signup required. Built to give every press team a shared vocabulary.'}
            </p>
            <p className="academy-course-cta-price">{course.price ?? 'Free'}</p>
            <a
              className={`button ${tone === 'premium' ? 'button-accent' : 'button-dark'} academy-course-cta-button`}
              href={`mailto:contact@rutherford.fr?subject=Rutherford%20Academy%20${encodeURIComponent(course.title)}`}
            >
              {tone === 'premium' ? 'Enroll now' : 'Talk to us'} <span aria-hidden="true">→</span>
            </a>
            {tone === 'premium' ? (
              <p className="academy-course-cta-sub">
                Or get all 6 premium masterclasses with the{' '}
                <a href="/academy#bundle">Rutherford Academy Pass</a> (€399).
              </p>
            ) : (
              <p className="academy-course-cta-sub">
                Ready for the next step? See the{' '}
                <a href="/academy#premium">premium masterclasses</a>.
              </p>
            )}
          </aside>
        </div>
      </section>

      {lessons && lessons.length > 0 ? (
        <section className="academy-course-lessons section">
          <div className="container academy-course-lessons-shell">
            <header className="academy-section-head academy-section-head-left">
              <p className="section-kicker">Course content</p>
              <h2>The full lesson, module by module</h2>
              <p>
                The video is the introduction. The complete written course is below, structured to match the syllabus.
                Read it in one sitting or come back module by module.
              </p>
            </header>
            <ol className="academy-course-lessons-list">
              {lessons.map((lesson, index) => {
                const isOpen = openLesson === index;
                const headId = `lesson-head-${index}`;
                const bodyId = `lesson-body-${index}`;
                return (
                  <li
                    key={index}
                    className={`academy-course-lesson ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      id={headId}
                      className="academy-course-lesson-head"
                      onClick={() => toggleLesson(index)}
                      aria-expanded={isOpen}
                      aria-controls={bodyId}
                    >
                      <span className="academy-course-lesson-meta">
                        <span className="academy-course-lesson-index" aria-hidden="true">
                          Module {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="academy-course-lesson-step" aria-hidden="true">
                          {index + 1} / {lessons.length}
                        </span>
                      </span>
                      <h3 className="academy-course-lesson-title">{lesson.title}</h3>
                      <p className="academy-course-lesson-summary">{lesson.summary}</p>
                      <span className="academy-course-lesson-chevron" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      id={bodyId}
                      role="region"
                      aria-labelledby={headId}
                      className="academy-course-lesson-body"
                      hidden={!isOpen}
                    >
                      {lesson.body.map((para, paraIndex) => (
                        <p key={paraIndex}>{para}</p>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      ) : null}

      <section className="academy-course-siblings section">
        <div className="container">
          <header className="academy-section-head">
            <p className="section-kicker">{tone === 'premium' ? 'Other masterclasses' : 'Other free courses'}</p>
            <h2>Continue your learning path</h2>
          </header>
          <ul className="academy-course-siblings-list">
            {siblings
              .filter((s) => s.id !== course.id)
              .map((s) => (
                <li key={s.id}>
                  <a href={`/academy/${s.id}`}>
                    <span className="academy-course-siblings-arrow" aria-hidden="true">
                      →
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
