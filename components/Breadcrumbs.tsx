import Link from 'next/link';

interface BreadcrumbsProps {
  currentPage: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage }) => {
  return (
    <div className="bg-black bg-opacity-50 text-white py-2 px-4 absolute top-16 left-0 w-full">
      <div className="max-w-7xl mx-auto">
        <Link href="/">
          <span className="hover:underline cursor-pointer">Home</span>
        </Link>
        <span className="mx-2">/</span>
        <span>{currentPage}</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
