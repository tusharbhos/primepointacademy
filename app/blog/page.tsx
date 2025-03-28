import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';
import type { Post } from '@/lib/posts';

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500} // Adjust based on your design
              height={192} // This maintains roughly a 500x192 aspect ratio for h-48
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-2">
                {post.date} • {post.readTime}
              </p>
              <p className="text-gray-700">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link href={`/blog/${post.slug}`}>
                  <span className="cursor-pointer inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
