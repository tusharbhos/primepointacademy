// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

// Define the type of asynchronous params.
// Change to Promise<{ slug: string[] }> if you're using a catch-all route.
type tParams = Promise<{ slug: string }>;

interface PageProps {
  params: tParams;
}

export default async function BlogPostPage(props: PageProps) {
  // Await the asynchronous params before destructuring.
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
          {post.date} • {post.readTime}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
      <section className="prose prose-lg dark:prose-dark mx-auto">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </section>
    </article>
  );
}
