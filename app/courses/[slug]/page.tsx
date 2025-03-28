"use client";
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { courses } from '@/data/courses';
import { useParams } from 'next/navigation';
import BookDemoForm from '../../../components/BookDemoForm';
import Testimonial from '../../../components/Testimonial';
import FaqSection from '../../../components/FaqSection';
import { CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import { Button } from '@headlessui/react';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  interface ClassCardData {
  id: number;
  title?: string;    // Mark optional in case data is missing
  items?: string[];  // Mark optional in case data is missing
  buttonLabel?: string;
}

const mockData: ClassCardData[] = [
  {
    id: 1,
    title: 'SAP FICO (Finance and Controlling)',
    items: [
      'General Ledger Accounting',
      'Accounts Payable & Receivable',
      'Asset Accounting',
      'Cost Center & Profitability Analysi',
    ],
    buttonLabel: 'Download Brochure for SAP FICO',
  },
  {
    id: 2,
    title: 'SAP MM (Material Management)',
    items: [
      'Procurement & Inventory Management',
      'Vendor Management',
      'Invoice Verification',
    ],
    buttonLabel: 'Download Brochure for SAP MM',
  },
];

  const handleDownloadBrochure = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      contactNo: formData.get('contactNo') as string,
      email: formData.get('email') as string,
      courseName: course?.title,
      source1: "Course Page Download Brochure form Details Recived email"
    };

    // Basic validation
    if (!data.fullName || !data.contactNo || !data.email) {
      setFormError('All fields are required');
      setIsSubmitting(false);
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
      link.setAttribute('download', `${course?.slug}-brochure.pdf`);
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

  const parseBoldText = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
    });
  };

  const handleEnquireNow = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      contactNo: formData.get('contactNo') as string,
      email: formData.get('email') as string,
      courseName: course?.title,
      source1: "Course Page Enquire Now form Details Recived email", 
      source2: "(Enquire Now)"
    };

    // Basic validation
    if (!data.fullName || !data.contactNo || !data.email) {
      setFormError('All fields are required');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email
      const response = await fetch('/api/enquire-now', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setTimeout(() => {
        setIsSubmitting(false);
      }, 1100);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 1300);
    } catch (error) {
      setFormError(`Failed to submit form. Please try again: ${error}`);
      setIsSubmitting(false);
    }
  };

  // Use IntersectionObserver to update active section in the table of contents
  useEffect(() => {
    if (!course?.sections || !Array.isArray(course.sections)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    course.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [course?.sections]);

  if (!course) {
    notFound();
    return null;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr_1fr]">
        {/* Left Sidebar - Table of Contents */}
        <aside className="lg:sticky lg:top-20 lg:h-fit lg:self-start">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Course Content</h2>
            {course.tableOfContents && course.tableOfContents.length > 0 ? (
              <nav>
                <ul className="list-none space-y-3">
                  {course.tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`block px-3 py-2 text-sm transition-all rounded-lg ${
                          activeSection === item.id
                            ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:pl-4'
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : (
              <p className="text-gray-500 text-sm">No content available</p>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <section className="space-y-8">
          {/* Hero Section: Course Image with Title & Subtitle Overlay */}
          {course.image ? (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+yHgAFWAJc08sE7wAAAABJRU5ErkJggg=="
              />
              {/* Gradient overlay for improved readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
                  {course.title}
                </h1>
                <p className="mt-2 text-lg lg:text-xl text-white drop-shadow">
                  {course.subtitle}
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-8 p-6 bg-gray-100 rounded-xl">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {course.title}
              </h1>
              <p className="mt-2 text-lg lg:text-xl text-gray-600">{course.subtitle}</p>
            </div>
          )}

          {/* Course Details */}
          {slug !== "sap-course-pune" && <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-stretch gap-6">
              {/* Column 1 */}
              <div className="flex-1">
                <ul className="space-y-2">
                  <li className="text-gray-700 font-medium">3 Months Training</li>
                  <li className="text-gray-700 font-medium">3 Months Internship</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="flex-1">
                <ul className="space-y-2">
                  <li className="text-gray-700 font-medium">Pay after placement</li>
                  <li className="text-gray-700 font-medium">Offline / Online Batches</li>
                </ul>
              </div>

              {/* Column 3 - Button centered */}
              <div className="flex-1 flex items-center justify-center">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#1088ca] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>}

          {slug === "sap-course-pune" && <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
  <div className="flex flex-col md:flex-row md:items-stretch gap-6">
    {/* Column 1 */}
    <div className="flex-1">
      <ul className="space-y-4">
        <li className="text-gray-700 font-medium">3 Months Training</li>
        <li className="text-gray-700 font-medium">3 Months Internship</li>
      </ul>
    </div>

    {/* Column 2 */}
    <div className="flex-1">
      <ul className="space-y-4">
        <li className="text-gray-700 font-medium">Pay after placement</li>
        <li className="text-gray-700 font-medium">Offline / Online Batches</li>
      </ul>
    </div>

    {/* Column 3 - Two Buttons Stacked */}
    <div className="flex-1 flex flex-col items-center justify-center space-y-4">
      <Button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#1088ca] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Download Brochure
      </Button>

      <Button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#1088ca] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Download Brochure
      </Button>
    </div>
  </div>
</div>}

          {/* Course Sections */}
          {course.sections && course.sections.length > 0 ? (
            course.sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{section.heading}</h2>
                {/* 
                  If your section content includes list items (like markdown), you may consider using 
                  a markdown parser (e.g., react-markdown) for more advanced formatting.
                */}
                <div className="text-gray-600 leading-relaxed">
{section.content.map((block, index) => {
  if (block.type === 'paragraph') {
    return (
      <p key={index} className="mb-4">
        {block.text}
      </p>
    );
  } else if (block.type === 'heading') {
    return (
      <h2 key={index} className="text-3xl font-bold mb-4">
        {block.text}
      </h2>
    );
  } else if (block.type === 'subheading') {
    return (
      <h3 key={index} className="text-2xl font-semibold mb-3">
        {block.text}
      </h3>
    );
  } else if (block.type === 'list') {
    return (
      <ul key={index} className="list-disc pl-5 mb-4 space-y-2">
        {block.items.map((item, i) => (
          <li key={i} className="text-gray-600">
            {parseBoldText(item)}
          </li>
        ))}
      </ul>
    );
  }
  return null;
})}
</div>
              </article>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No sections available.</p>
          )}

{slug === "sap-course-pune" &&
  <div className=" bg-gray-50 p-1 flex items-center justify-center">
  {mockData.length === 0 ? (
    <p>No class information available.</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
      {mockData.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-bold mb-4">
              {card.title ?? 'Untitled Class'}
            </h2>
            {card.items && card.items.length > 0 ? (
              <ul className="mb-6 space-y-1">
                {card.items.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No additional details provided.</p>
            )}
          </div>
          {card.buttonLabel && (
            <button
              type="button"
              onClick={() =>
                alert(`Downloading brochure for: ${card.title ?? 'Class'}`)
              }
              className="bg-[#1088ca] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              {card.buttonLabel}
            </button>
          )}
        </div>
      ))}
    </div>
  )}
</div>
}
{slug === "sap-course-pune" &&  <div className='text-gray-900 mx-2 pb-4'>By joining SAP training in Pune at Prime Point Academy, you will gain industry-relevant skills to excel in your SAP career.</div>}
        </section>

        {/* Right Sidebar - Enquiry Form */}
        <aside className="lg:sticky lg:top-20 lg:h-fit lg:self-start md:block">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Enquire Now</h2>
            <form onSubmit={handleEnquireNow} className="space-y-5" noValidate>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1088ca]"
                />
              </div>

              <div>
                <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number <span className="text-red-500">*</span>
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0b5fa4] text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </div>
                ) : (
                  'Submit Enquiry'
                )}
              </button>

              {isSubmitted && (
                <div
                  className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 text-sm"
                  role="status"
                >
                  Thank you for your enquiry! We&apos;ll contact you soon.
                </div>
              )}
            </form>
          </div>
        </aside>
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

                  {formError && <p className="text-red-500 text-sm">{formError}</p>}

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

      <BookDemoForm />
      <Testimonial testimonials={course.testimonials} />
      <FaqSection faqs={course.FAQItem} />
    </main>
  );
}
