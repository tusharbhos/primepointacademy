"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center px-6 bg-cover bg-center banner-image" 
          >

      {/* DARK OVERLAY FOR BETTER TEXT VISIBILITY */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute  container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT SIDE - TEXT CONTENT */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-white"
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            Full Stack Classes In Pune
          </h1>
          <p className="text-lg opacity-80">
            Full Stack Web Development Classes in Pune are in high demand. A web developer should know both client-side and server-side technologies.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="text-lg font-semibold">Rated by 25K+ on Google</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all">
            Request Call Back
          </button>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white text-gray-900 p-6 rounded-lg shadow-2xl backdrop-blur-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">Request Call Back</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name *" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Email *" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="tel" placeholder="Phone Number *" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Choose Branch</option>
              <option>Pune</option>
              <option>Mumbai</option>
            </select>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Choose Course</option>
              <option>Full Stack</option>
              <option>Data Science</option>
            </select>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default Banner;
