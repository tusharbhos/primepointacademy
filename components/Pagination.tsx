// components/Pagination.tsx
"use client";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
}

export default function Pagination({ totalPosts, postsPerPage, currentPage }: PaginationProps) {
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', i.toString());
    pages.push(
      <Link
        key={i}
        href={`/blog?${params.toString()}`}
        className={`px-3 py-1 rounded-lg ${
          currentPage === i
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } transition-colors duration-200`}
      >
        {i}
      </Link>
    );
  }

  return <div className="flex justify-center space-x-2 mt-8">{pages}</div>;
}