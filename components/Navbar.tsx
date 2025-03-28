"use client"
import Link from 'next/link'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image';

const coursesList = [
  { title: 'UI UX Design', slug: 'ui-ux-design-pune' },
  { title: 'Full Stack', slug: 'full-stack' },
  { title: 'Full Stack Java', slug: 'java-programming-mastery1' },
  { title: 'MERN Stack', slug: 'mern-stack-course-pune' },
  { title: 'SAP', slug: 'sap-course-pune' },
  { title: 'SAP FICO', slug: 'sap-fico-course-pune' },
  { title: 'SAP MM', slug: 'sap-mm-course-pune' }
]

export default function Navbar() {
  const [courseDropdown, setCourseDropdown] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const dropdownRef = useRef<HTMLLIElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
  //       setCourseDropdown(false)
  //     }
  //     if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
  //       setIsMobileMenuOpen(false)
  //     }
  //   }

  //   document.addEventListener('mousedown', handleClickOutside)
  //   return () => document.removeEventListener('mousedown', handleClickOutside)
  // }, [])

  // Toggle the dropdown state on click
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const navbarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -10 }
  }

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', duration: 0.3 } }
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="fixed w-full bg-white shadow-sm z-50"
    >
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="relative w-40 h-16">
            <Image
              src="/logo.png"
              alt="Prime Point Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
              sizes="(max-width: 768px) 100px, 160px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex space-x-8 items-center">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors font-medium text-gray-700 hover:text-blue-600">
                Home
              </Link>
            </li>
            
            <li 
              className="relative" 
              onClick={toggleDropdown}
              // ref={dropdownRef}
              // onMouseEnter={() => setCourseDropdown(true)}
              // onMouseLeave={() => setTimeout(() => setCourseDropdown(false), 300)}
            >
              <button
                className="hover:text-blue-600 transition-colors flex items-center gap-1 font-medium text-gray-700"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Courses
                <motion.span
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  className="ml-1 text-sm"
                >
                  ▼
                </motion.span>
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="absolute left-0 mt-2 bg-white shadow-xl border rounded-lg py-2 min-w-[220px] space-y-1"
                    role="menu"
                  >
                    {coursesList.map((course) => (
                      <li key={course.slug}>
                        <Link
                          href={`/courses/${course.slug}`}
                          className="px-4 py-3 hover:bg-blue-50 block transition-colors text-gray-700 hover:text-blue-600 text-sm"
                          onClick={() => setCourseDropdown(false)}
                        >
                          {course.title}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-blue-600 transition-colors font-medium text-gray-700 ">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors font-medium text-gray-700 ">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition-colors font-medium text-gray-700 ">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition-colors font-medium text-gray-700 ">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-6 ml-4">
            <div className="flex space-x-5">
              <a href="https://www.instagram.com/primepointacademy" className="hover:text-blue-600 hover:scale-110 transition-all text-gray-600">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573405254644" className="hover:text-blue-600 hover:scale-110 transition-all text-gray-600">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/company/prime-point-academy/posts/?feedView=all" className="hover:text-blue-600 hover:scale-110 transition-all text-gray-600">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://x.com/PrimePointAcdmy" className="hover:text-blue-600 hover:scale-110 transition-all text-gray-600">
                <FaTwitter className="text-xl" />
              </a>
            </div>

            <Link
              href="/contact"
              className="bg-[#0d4186] text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg font-medium transform hover:-translate-y-0.5"
            >
              Book Free Demo
            </Link>
            
            <a href="tel:+918390675123" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              📞 8390675123
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-3 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl text-gray-700" />
          ) : (
            <FaBars className="text-2xl text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
            
            <motion.div
              ref={mobileMenuRef}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="lg:hidden fixed top-0 right-0 bg-white z-50 h-screen w-4/5 max-w-sm shadow-2xl"
            >
              <div className="px-6 py-8 h-full flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="relative w-32 h-14">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="160px"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <FaTimes className="text-2xl text-gray-700" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <nav className="space-y-2">
                    <Link 
                      href="/" 
                      className="block py-3 px-4 hover:bg-gray-50 rounded-lg text-gray-700 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    
                    <div className="relative">
                      <button
                        onClick={() => setCourseDropdown(!courseDropdown)}
                        className="w-full text-left py-3 px-4 hover:bg-gray-50 rounded-lg text-gray-700 font-medium flex justify-between items-center"
                      >
                        Courses
                        <motion.span
                          animate={{ rotate: courseDropdown ? 180 : 0 }}
                          className="ml-2 text-sm"
                        >
                          ▼
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {courseDropdown && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4"
                          >
                            {coursesList.map((course) => (
                              <Link
                                key={course.slug}
                                href={`/courses/${course.slug}`}
                                className="block py-2 px-4 hover:bg-gray-50 rounded-lg text-gray-600 text-sm"
                                onClick={() => {
                                  setCourseDropdown(false)
                                  setIsMobileMenuOpen(false)
                                }}
                              >
                                {course.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link 
                      href="/gallery" 
                      className="block py-3 px-4 hover:bg-gray-50 rounded-lg text-gray-700 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Gallery
                    </Link>
                    <Link 
                      href="/blog" 
                      className="block py-3 px-4 hover:bg-gray-50 rounded-lg text-gray-700 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/about" 
                      className="block py-3 px-4 hover:bg-gray-50 rounded-lg text-gray-700 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block py-3 px-4 hover:bg-gray-50 rounded-lg text-gray-700 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>

                  <div className="mt-8 pt-6 border-t">
                    <div className="flex space-x-6 justify-center">
                      <a href="https://www.instagram.com/primepointacademy" className="hover:text-blue-600 text-gray-600">
                        <FaInstagram className="text-2xl" />
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61573405254644" className="hover:text-blue-600 text-gray-600">
                        <FaFacebook className="text-2xl" />
                      </a>
                      <a href="https://www.linkedin.com/company/prime-point-academy/posts/?feedView=all" className="hover:text-blue-600 text-gray-600">
                        <FaLinkedin className="text-2xl" />
                      </a>
                      <a href="https://x.com/PrimePointAcdmy" className="hover:text-blue-600 text-gray-600">
                        <FaTwitter className="text-2xl" />
                      </a>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-6 block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Free Demo
                    </Link>

                    <div className="mt-6 text-center">
                      <a 
                        href="tel:8390675123" 
                        className="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
                      >
                        📞 8390675123
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}