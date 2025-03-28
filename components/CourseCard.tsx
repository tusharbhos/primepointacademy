"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon, ClockIcon, UserGroupIcon, CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import { Button } from '@headlessui/react';

interface Course {
    title: string;
    description: string;
    slug: string;
    image: string;
    duration: string;
    difficulty: string;
    price: number;
    rating: number;
    studentsEnrolled: number;
    bestseller?: boolean;
  }
  
  interface CourseCardProps {
    course: Course;
  }

export default function CourseCard({ course }: CourseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadBrochure = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      contactNo: formData.get('contactNo') as string,
      email: formData.get('email') as string,
      courseName: course.title,
      source1: "Trending Course"
    };

    // Basic validation
    if (!data.fullName || !data.contactNo || !data.email) {
      setFormError('All fields are required');
      return;
    }

    try {
      // Send email
      const response = await fetch('/api/send-brochure', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      // Download PDF
      const pdfUrl = `/brochures/sample-pdf.pdf`;
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', `${course.slug}-brochure.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitting(false);
        setDownloadSuccess(false);
      }, 3000);
    } catch (error) {
      setFormError(`Failed to submit form. Please try again: ${error}`);
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden">
        <div className="relative h-48 w-full">
          <Image 
            src={course.image} 
            alt={course.title}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold mb-2 hover:text-purple-600 transition-colors">
              <Link href={`/courses/${course.slug}`}>
                {course.title}
              </Link>
            </h3>
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-gray-600">
                {course.rating} ({Math.floor(2 * 1000) + 100})
              </span>
            </div>
          </div>

          <p className="text-gray-600 mb-4">{course.description}</p>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <UserGroupIcon className="h-5 w-5 mr-1" />
              <span>{course.studentsEnrolled.toLocaleString()}+ students</span>
            </div>
          </div>

          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#1088ca] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Download Brochure
          </Button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            {!downloadSuccess ? (
              <>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
                
                <div className="mb-6 text-center">
                  <Image 
                    src="/logo.png" 
                    alt="Company Logo" 
                    width={120} 
                    height={40} 
                    className="mx-auto"
                  />
                </div>

                <form onSubmit={handleDownloadBrochure} className="space-y-4">
                <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1088ca]"
                />
              </div>

              <div>
                <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact No
                </label>
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  required
                  pattern="[0-9]{10,}"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1088ca]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1088ca]"
                />
              </div>

              {formError && (
                <p className="text-red-500 text-sm">{formError}</p>
              )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1088ca] text-white py-2 px-4 rounded-md hover:bg-[#0d6ca3] transition-colors disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
                        Downloading...
                      </div>
                    ) : (
                      'Submit and Download Brochure'
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center p-6">
                <div className="mb-4">
                  <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Brochure Downloaded!
                </h3>
                <p className="text-gray-600 mb-4">
                  The course brochure has been successfully downloaded.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#1088ca] hover:text-[#0d6ca3] font-medium"
                >
                  Close this window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}