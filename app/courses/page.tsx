// app/courses/page.tsx
import CourseCards from '@/components/CourseCards';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Our Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCards key={course.slug} course={course} />
        ))}
      </div>
    </main>
  );
}