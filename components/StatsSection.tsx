'use client';
import React from 'react';

interface StatItem {
  label: string;
  value: string;
}

const stats: StatItem[] = [
  { label: 'Students', value: '1232+' },
  { label: 'Courses', value: '6+' },
  { label: 'Events', value: '8+' },
  { label: 'Trainers', value: '24+' },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-blue-600">
                {item.value}
              </span>
              <span className="mt-2 text-gray-700 text-lg md:text-base">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
