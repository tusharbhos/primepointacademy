"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial as TestimonialType } from "../data/HomeTestimonial";

interface TestimonialProps {
  testimonials: TestimonialType[];
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 7000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
      intervalRef.current = setInterval(nextSlide, 7000);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [nextSlide]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section
      ref={containerRef}
      className="py-16 px-4 bg-gradient-to-br from-blue-50 to-slate-100 relative"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Students Say</h2>
        <p className="text-lg text-gray-600 mb-8">
          Hear from our students in Pune who have transformed their careers with Prime Point Academy.
        </p>
      </div>
      <div className="relative max-w-2xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <FaQuoteLeft className="text-teal-500 text-3xl mx-auto mb-3" />
            <p className="text-gray-700 text-lg italic">
              {testimonials[activeIndex].feedback}
            </p>
            <div className="mt-4 flex justify-center">
              {[...Array(Math.floor(testimonials[activeIndex].rating))].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-lg" />
              ))}
              {testimonials[activeIndex].rating % 1 !== 0 && (
                <FaStar key="half" className="text-yellow-500 text-lg opacity-75" />
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-3">
              {testimonials[activeIndex].name}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center mt-6 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-teal-500" : "bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-gray-900 transition"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-gray-900 transition"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Testimonial;
