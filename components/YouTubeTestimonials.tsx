"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Vikram Desai',
    role: 'Student',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
  },
  {
    id: 2,
    name: 'Rahul More',
    role: 'Student',
    videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    thumbnail: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg',
  },
  {
    id: 3,
    name: 'Amit Patil',
    role: 'Student',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
  }
  

];

export default function YouTubeTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-12 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">What Our Students Say</h2>
        <p className="mt-2 text-gray-600">See real experiences from our happy students.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {testimonials.map(({ id, name, role, videoUrl, thumbnail }) => (
          <motion.div
            key={id}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedVideo(videoUrl)}
          >
            <Image src={thumbnail} alt={name} height={200} width={100} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
              <FaPlay className=" text-3xl" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-600 text-sm">{role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onClose={() => setSelectedVideo(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <Dialog.Panel className="bg-black p-4 rounded-lg max-w-3xl w-full relative">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-2 right-2 text-white text-lg"
          >
            &times;
          </button>
          {selectedVideo && (
            <iframe
              className="w-full h-64 sm:h-96"
              src={selectedVideo}
              title="YouTube video"
              allowFullScreen
            />
          )}
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}
