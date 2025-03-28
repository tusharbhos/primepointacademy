// components/Gallery.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import type { GalleryItem } from '@/types/course';
import Modal from '@/components/Modal';

const Gallery = ({ items }: { items: GalleryItem[] }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(item)}
          >
            <div className="relative h-48">
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        images={selectedItem?.images || []}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
        title={selectedItem?.title || ''}
      />
    </div>
  );
};

export default Gallery;