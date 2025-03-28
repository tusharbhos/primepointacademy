'use client';
import Image from 'next/image';

const fallbackCertImage = "https://via.placeholder.com/800x600?text=No+Certificate";

const certifications = [
  {
    name: 'Certificate of Excellence',
    image: 'https://templatelab.com/wp-content/uploads/2018/11/Certificateofcompletion-3-e1542503155589.jpg'
  },
  {
    name: 'Professional Achievement Award',
    image: 'https://templatelab.com/wp-content/uploads/2018/11/Certificateofcompletion-3-e1542503155589.jpg'
  }
];

const CertificationSection = () => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = fallbackCertImage;
  };

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Academy Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="relative w-full p-8 h-auto shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={cert.image}
              alt={cert.name}
              width={300}
              height={200}
              className="object-cover w-full h-full"
              loading="lazy"
              onError={handleImageError}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
