// components/SEO.tsx
// import { Metadata } from 'next';

// interface SEOProps {
//   title: string;
//   description: string;
//   slug: string;
//   image?: string;
// }

// export const generateMetadataForSEO = ({ title, description, slug, image }: SEOProps): Metadata => {
//   return {
//     title: `${title} | My Blog`,
//     description,
//     alternates: {
//       canonical: `/blog/${slug}`,
//     },
//     openGraph: {
//       title: `${title} | My Blog`,
//       description,
//       url: `/blog/${slug}`,
//       images: image ? [{ url: image }] : [],
//       type: 'article',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `${title} | My Blog`,
//       description,
//       images: image,
//     },
//   };
// };