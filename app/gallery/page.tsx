// app/gallery/page.tsx
import BookDemoForm from '@/components/BookDemoForm';
import Gallery from '@/components/Gallery';
import type { GalleryItem } from '@/types/course';


const GalleryPage = () => {
  // const galleryItems: GalleryItem[] = [
  //   {
  //     id: '1',
  //     title: 'Christmas Celebration 2024',
  //     images: [
  //       '/images/christmas1.jpg',
  //       '/images/christmas2.jpg',
  //       '/images/christmas3.jpg',
  //     ],
  //   },
  //   // Add more items as needed
  // ];

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Our Academy',
      images: [
        '/gallery/g1.jpg',
        '/gallery/g2.jpg',
        '/gallery/g3.jpg',
        '/gallery/g4.jpg',
      ],
    },
    // {
    //   id: '2',
    //   title: 'Tech Symposium 2022',
    //   images: [
    //     'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //     'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //     'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   ],
    // },
    // {
    //   id: '3',
    //   title: 'Hackathon 2023',
    //   images: [
    //     'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //     'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //     'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   ],
    // },
    // {
    //   id: '4',
    //   title: 'CodeFest 2024',
    //   images: [
    //     'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //     'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //     'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   ],
    // },
    // Add more items as needed
  ];
  

  return (
    <main>
      <Gallery items={galleryItems} />
      <BookDemoForm/>
    </main>
  );
};

export default GalleryPage;