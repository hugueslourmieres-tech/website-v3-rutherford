import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AcademyCoursePage } from '@/components/academy-course-page';
import { ALL_COURSES, getCourseBySlug } from '@/data/academy-courses';

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return ALL_COURSES.map((course) => ({ slug: course.id }));
}

export function generateMetadata({ params }: { params: RouteParams }): Metadata {
  const course = getCourseBySlug(params.slug);
  if (!course) return { title: 'Rutherford Academy' };
  return {
    title: `${course.title} — Rutherford Academy`,
    description: course.description,
  };
}

export default function AcademyCourseRoute({ params }: { params: RouteParams }) {
  const course = getCourseBySlug(params.slug);
  if (!course) {
    notFound();
  }
  return <AcademyCoursePage course={course} />;
}
