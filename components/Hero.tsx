'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const courses = [
  'UI UX Design',
  'Full Stack',
  'Full Stack Java',
  'MERN Stack',
  'SAP',
  'SAP FICO',
  'SAP MM',
];

export default function Hero() {
  // State for the 3-second popup form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // State for the inline email collection form
  // const [emailValue, setEmailValue] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [emailSubmitting, setEmailSubmitting] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  
  // 3-second popup form logic:
  // Check localStorage on mount to see if the modal was already shown.
  useEffect(() => {
    const modalShown = localStorage.getItem('modalShown');
    if (!modalShown) {
      setIsModalOpen(true);
    }
  }, []);

  // Auto-disable the success notification after 3 seconds
  useEffect(() => {
    if (emailSuccess) {
      const timer = setTimeout(() => {
        setEmailSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [emailSuccess]);

  // console.log(emailError);
  
  // When the modal is closed, set the flag in localStorage.
  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('modalShown', 'true');
  };

  // Submit logic for the 3-second popup form
  const handleDownloadBrochure = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      contactNo: formData.get('contactNo'),
      email: formData.get('email'),
      courseName: formData.get('courseName'),
      source1: 'Home Page 3 Sec Popup Form',
      source2: '3 Sec Popup Form'
    };

    if (!data.fullName || !data.contactNo || !data.email || !data.courseName) {
      setFormError('All fields are required');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/enquire-now', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setTimeout(() => {
        setIsSubmitting(false);
        setDownloadSuccess(true);
      }, 1100);
    } catch (error) {
      setFormError(`Failed to submit form. Please try again: ${error}`);
      setIsSubmitting(false);
    }
  };

  // Submit logic for the inline email collection form
  // const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setEmailError('');
  //   setEmailSubmitting(true);

  //   if (!emailValue) {
  //     setEmailError('Please enter a valid email.');
  //     setEmailSubmitting(false);
  //     return;
  //   }

  //   try {
  //     const response = await fetch('/api/email-form', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email: emailValue }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Error submitting email');
  //     }

  //     setEmailSubmitting(false);
  //     setEmailSuccess(true);
  //     setEmailValue('');
  //   } catch (error) {
  //     setEmailError(`Error: ${error}`);
  //     setEmailSubmitting(false);
  //   }
  // };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[91vh] mt-2 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
        role="banner"
      >
        {/* Overlay with gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30">
          <div className="container relative mx-auto px-6 py-6 sm:px-6 lg:px-32 lg:py-14">
            <div className="max-w-3xl text-center lg:text-left space-y-6">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-[#38a9de] to-[#1088ca] bg-clip-text text-transparent">
                  Prime Point Academy
                </span>
                <br />
                Your Key to a Successful IT Career
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0 opacity-90">
                At Prime Point Academy, we offer the most in-demand courses like UI/UX Design,
                Full Stack Development, MERN Stack, Java, and SAP (SAP FICO, SAP MM). Our training
                prepares you for high-paying jobs in top-tier companies with complete placement support.
              </p>

              {/* Email Collection Form (Below Subheadline) */}
              <div className="mt-6">
                {emailSuccess && (
                  <div className="mb-4 flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded">
                    <CheckCircleIcon className="h-6 w-6" />
                    <span>Thank you! We&apos;ll keep you updated.</span>
                  </div>
                )}
                {/* <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md lg:mx-0">
                  <input
                    type="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border rounded-md focus:outline-none"
                    required
                  />
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={emailSubmitting}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      {emailSubmitting ? (
                        <div className="flex items-center justify-center">
                          <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
                          Submitting
                        </div>
                      ) : (
                        'Join'
                      )}
                    </button>
                  </div>
                </form> */}
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Enquiry for Demo
                    </button>
                {/* {emailError && <p className="mt-2 text-red-500 text-sm">{emailError}</p>} */}
              </div>
              
              {/* Highlighted Features */}
              <ul className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-gray-100 text-lg font-medium mt-8">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  100% Placement Assistance
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  In-Demand Courses
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Expert Mentorship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Second Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            {!downloadSuccess ? (
              <>
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>

                <div className="mb-6 text-center">
                  <Image src="/logo.png" alt="Company Logo" width={120} height={40} className="mx-auto" />
                </div>

                <form onSubmit={handleDownloadBrochure} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" name="fullName" required className="w-full px-3 py-2 border rounded-md" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact No</label>
                    <input
                      type="tel"
                      name="contactNo"
                      required
                      pattern="[0-9]{10,}"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" required className="w-full px-3 py-2 border rounded-md" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                    <select name="courseName" required className="w-full px-3 py-2 border rounded-md">
                      <option value="">Choose a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formError && <p className="text-red-500 text-sm">{formError}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
                        Submitting
                      </div>
                    ) : (
                      'Yes, Get Free Demo'
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center p-6">
                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Your Request Submitted</h3>
                <p className="text-gray-600 mb-4">We will get back to you.</p>
                <button onClick={handleCloseModal} className="text-blue-600 hover:text-blue-700 font-medium">
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
