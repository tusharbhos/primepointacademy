// components/CourseCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { Course } from '@/types/course';

// interface Course {
//   title: string;
//   description: string;
//   slug: string;
//   image?: string; // Make image optional
//   duration: string;
//   difficulty: string;
//   price: number;
//   rating: number;
//   studentsEnrolled: number;
//   bestseller?: boolean;
// }

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const fallbackImage =
    'https://via.placeholder.com/400'; // Fallback image URL

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={course.image || fallbackImage} // Use fallback if image is undefined
          alt={course.title}
          fill
          className="object-cover rounded-t-xl"
        />
        {/* {course.bestseller && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Bestseller
          </div>
        )} */}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-blue-600">
            {course.difficulty}
          </span>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-gray-600">
              {course.rating} ({Math.floor(3 * 1000) + 100})
            </span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{course.subtitle}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <ClockIcon className="h-5 w-5 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <UserGroupIcon className="h-5 w-5 mr-1" />
            <span>{100}+ students</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          {/* <div className="text-2xl font-bold text-gray-800">
            ${course.price}
            <span className="text-sm text-gray-500 font-normal ml-1">USD</span>
          </div> */}
          <Link
            href={`/courses/${course.slug}`}
            className="bg-[#0d4186] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}