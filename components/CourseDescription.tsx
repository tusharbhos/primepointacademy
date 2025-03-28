"use client"
import React from 'react';
import { Button } from '@headlessui/react';
import { useState } from 'react';
import Image from 'next/image';
import { CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const CourseDescription: React.FC = () => {
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
      courseName: "MERN Stack",
      source1: "Home Course"
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
      link.setAttribute('download', `test-brochure.pdf`);
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
      <section id="courses" className="py-1 text-lg bg-white shadow-lg rounded">
        <div className="container mx-auto px-4 lg:px-20">
          {/* UI/UX Design Course */}
          <article className="p-8 mb-1 ">
            <h3 className="text-3xl font-bold mb-6">Join Prime Point Academy - Best UI UX Design Course in Pune</h3>
            <p className="mb-4">
              UI/UX Design is an important part of creating visually attractive and user-friendly digital experiences. But what do UI and UX mean? Let&apos;s break it down!
            </p>
            <p className="mb-4">
              <span className="font-semibold">UI (User Interface) Design:</span> It is all about the overall visual appearance and the feel of the application. It includes elements such as colors, typography, buttons, icons, and layout. UI ensures an engaging and attractive design.
            </p>
            <p className="mb-4">
              <span className="font-semibold">UX (User Experience) Design:</span> It focuses on the user&apos;s experience and interactivity with the product. Its primary goal is to improve ease of use &amp; accessibility, which results in great customer satisfaction.
            </p>
            <p className="mb-4">
              Our UI UX design course in Pune provides in-depth training in tools like Figma, Adobe XD, Sketch, and foundational design principles. If you are a beginner or an experienced designer aiming to upgrade your skills, our ui ux classes in Pune are designed to help you excel in UI/UX design through practical projects and industry exposure.
            </p>

            <p className="text-2xl font-semibold mb-4">
              Why Choose Our UI UX Classes in Pune?
            </p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2">
              <li>Learn from experienced UI/UX designers.</li>
              <li>Work on live projects and case studies.</li>
              <li>Placement support with portfolio building.</li>
              <li>Master industry-standard tools like Figma and Adobe XD.</li>
            </ul>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-[#0d4186] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Download Brochure
            </Button>
          </article>

          {/* Full Stack Developer Course */}
          <article className="p-8 mb-1">
            <h3 className="text-3xl font-bold mb-6">Industry-Oriented Full Stack Developer Course in Pune</h3>
            <p className="mb-4">
              The IT industry&apos;s requirements for Full Stack Developers are very high as of now. Our Full Stack Developer course in Pune prepares students by teaching essential skills in both front-end and back-end development. Our syllabus includes all trending technologies as per the latest industry requirements. Learn from industry expert trainers with practical training by working on live projects and become a professional full stack developer.
            </p>
            <p className="text-2xl font-semibold mb-4">
              Key Features of Our Full Stack Classes in Pune:
            </p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2">
              <li>Detailed training of front-end and back-end technologies.</li>
              <li>Practical training through the real world&apos;s live project.</li>
              <li>Career guidance and soft skills training.</li>
              <li>Access to industry expert mentors and one-on-one sessions</li>
            </ul>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-[#0d4186] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Download Brochure
            </Button>
          </article>

          {/* SAP MM and SAP FICO Course */}
          <article className="p-8 mb-1">
            <h3 className="text-3xl font-bold mb-6">Why is Prime Point Academy the Best for SAP MM and SAP FICO Course in Pune?</h3>
            <p className="mb-4">
              SAP serves as a crucial foundation for many businesses. To meet the needs of the industry without disrupting the market and witnessing the disappearance of a stable job. It is a significant part of the enterprise ecosystem and requires training about five different aspects. To commensurate with this requirement, we are here to provide the best SAP course in Pune covers SAP MM and SAP FICO. If you’re interested in a course focused on SAP MM course in Pune for material management or seeking SAP FICO classes in Pune for financial management, our knowledgeable instructors will equip you with the expertise needed to become SAP-certified and prepared for the job market.
            </p>
            <p className="text-2xl font-semibold mb-4">
              Benefits of Learning SAP MM and SAP FICO Course in Pune at Prime Point Academy:
            </p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2">
              <li>Certification-oriented training with practical assignments.</li>
              <li>Expert-led classes with real-time case studies.</li>
              <li>Placement assistance with interview preparation.</li>
              <li>High-paying career opportunities in top MNCs</li>
            </ul>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-[#0d4186] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Download Brochure
            </Button>
          </article>

          {/* MERN Stack Course */}
          <article className="p-8 mb-1">
            <h3 className="text-3xl font-bold mb-6">Join One of the Best MERN Stack Classes in Pune at Prime Point Academy</h3>
            <p className="mb-4">
              MERN Stack which is the fundamental technology for building the website. Our MERN stack course in Pune covers MongoDB, Express.js, React, and Node.js, giving students the ability to gain knowledge in developing highly-scalable, and high-quality web apps. Students can gain hands-on experience, work on live projects, and receive industry-relevant training with our MERN stack classes in Pune.
            </p>
            <p className="text-2xl font-semibold mb-4">
              What You Will Learn in the MERN Stack Course in Pune:
            </p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2">
              <li>JavaScript fundamentals and ES6 concepts.</li>
              <li>Developing single-page applications (SPAs) using React.js.</li>
              <li>Back-end development using Node.js and Express.js</li>
              <li>Database management with MongoDB and Mongoose</li>
            </ul>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-[#0d4186] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Download Brochure
            </Button>
          </article>

          {/* Why Choose Prime Point Academy */}
          <article className="p-8 mb-1 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-6">Why Choose Prime Point Academy?</h3>
              <ul className="list-disc list-inside mb-6 ml-4 space-y-2">
                <li>100% Placement Assistance with tie-ups in top IT companies.</li>
                <li>Experienced Industry Trainers to ensure quality education.</li>
                <li>Real-world Projects and case studies for hands-on learning.</li>
                <li>Flexible Learning Options - classroom and online training available.</li>
                <li>Affordable Fee Structure with easy installment options.</li>
                <li>Career Guidance &amp; Mentorship for lifelong career support.</li>
                <li>Soft Skills training &amp; Interview Preparation for better job prospects.</li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
              <Image 
                src="/pptable.jpg" 
                alt="Prime Point Academy" 
                width={500} 
                height={300} 
                className="rounded"
              />
            </div>
          </article>

          {/* Call to Action */}
          <article className="p-8 mb-1">
            <h3 className="text-3xl font-bold mb-6">Start Your IT Career with Prime Point Academy</h3>
            <p className="text-lg mb-6">
              Are you serious about building a career in IT? Well, we have the best solution for you, the Prime Point Academy Pune. You are welcome to join our offline/online live courses today and take the first step towards a successful career in GUI/UX design, Full stack Development, MERN stack, Java, and SAP (SAP MM &amp; SAP FICO).
            </p>
          </article>
        </div>
      </section>
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
};

export default CourseDescription;
