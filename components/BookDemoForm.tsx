"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const courses = [
  'UI UX Design',
  'Full Stack',
  'Full Stack Java',
  'MERN Stack',
  'SAP',
  'SAP FICO',
  'SAP MM',
];

const BookDemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    course: courses[0],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!/^[a-zA-Z\s]+$/.test(value)) error = 'Only letters and spaces allowed';
        break;
      case 'contact':
        if (!/^\d{10}$/.test(value)) error = '10-digit number required';
        break;
      case 'email':
        if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Invalid email format';
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change but only after initial touch
    if (errors[name]) validateField(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    validateField(e.target.name, e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate all fields
    Object.entries(formData).forEach(([name, value]) => validateField(name, value));
    if (Object.values(errors).some(error => error)) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Submitted', formData);
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', contact: '', email: '', course: courses[0] });
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Book Your Free <span className="text-blue-600">Demo</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Experience our Live Demo Session with expert trainers and discover our course quality firsthand.
            </p>
          </div>

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
            >
              Demo booked successfully! We&apos;ll contact you shortly.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Full Name"
                  required
                  className={`w-full p-3 rounded-lg border-2 ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm absolute -bottom-5 left-0">
                    {errors.name}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Contact Number"
                  required
                  className={`w-full p-3 rounded-lg border-2 ${
                    errors.contact ? 'border-red-500' : 'border-gray-200'
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
                />
                {errors.contact && (
                  <span className="text-red-500 text-sm absolute -bottom-5 left-0">
                    {errors.contact}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email Address"
                  required
                  className={`w-full p-3 rounded-lg border-2 ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm absolute -bottom-5 left-0">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="relative">
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2YjcyOGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[center_right_1rem]"
              >
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0b5fa4] text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Booking...
                  </div>
                ) : (
                  'Book Demo Now'
                )}
              </button>
            </div>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Secure your spot now. No credit card required.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BookDemoForm;
