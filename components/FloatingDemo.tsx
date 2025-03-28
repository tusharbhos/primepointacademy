// FloatingDemo.jsx
"use client";
import { useState, useEffect } from 'react';
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

const FloatingDemo = () => {
  // const [isOpen, setIsOpen] = useState(false);

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

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

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
      {/* Rotated Chat Button fixed at bottom-right */}
      <button
        onClick={() => setIsModalOpen(true)}
        // onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 z-50 transform rotate-90 origin-bottom-right my-1 mx-12"
      >
        Book Free Demo
      </button>
      {/* Chat Box (demo implementation) */}
      {/* {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white border rounded shadow-lg z-50">
          <div className="p-4">
            <h4 className="font-bold mb-2">Chat with us!</h4>
            <p className="text-gray-600">
              This is a demo chat box. Integrate your chat solution here.
            </p>
            <button onClick={toggleChat} className="mt-4 text-blue-600 hover:underline">
              Close
            </button>
          </div>
        </div>
      )} */}
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
};

export default FloatingDemo;
