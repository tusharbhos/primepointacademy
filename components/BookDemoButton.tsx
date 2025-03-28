import Link from 'next/link';

export default function BookDemoButton() {
  return (
    <Link
      href="/contact"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Book Free Demo Class
    </Link>
  );
}