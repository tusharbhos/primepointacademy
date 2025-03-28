import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Import Swiper core and required modules properly
// import SwiperCore from 'swiper';
// import Autoplay from 'swiper/modules/autoplay/autoplay.min.js';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Autoplay module as named import
// import  Autoplay  from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/autoplay';

// Register the Autoplay module
// SwiperCore.use([Autoplay]);

interface Tech {
  name: string;
  logoUrl: string;
}

const techLogos: Tech[] = [
  {
    name: 'Node.js',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    name: 'React',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'MongoDB',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg',
  },
  {
    name: 'Express',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
  },
  {
    name: 'Java',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
  },
  {
    name: 'TypeScript',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
  {
    name: 'JavaScript',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
  },
  {
    name: 'UI',
    logoUrl:
      'https://via.placeholder.com/100x100.png?text=UI', // placeholder online image
  },
  {
    name: 'UX',
    logoUrl:
      'https://via.placeholder.com/100x100.png?text=UX', // placeholder online image
  },
  {
    name: 'SAP',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
  },
  {
    name: 'SAP FICO',
    logoUrl:
      'https://via.placeholder.com/100x100.png?text=SAP+FICO', // placeholder online image
  },
  {
    name: 'SAP MM',
    logoUrl:
      'https://via.placeholder.com/100x100.png?text=SAP+MM', // placeholder online image
  },
];

const TechSliderPage: FC = () => {
  return (
    <>
      <Head>
        <title>Technologies Slider Demo</title>
        <meta
          name="description"
          content="A slider of technology logos using Next.js, TypeScript, Tailwind CSS, and Swiper."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Popular Technologies
        </h1>
        <div className="w-full max-w-5xl px-4">
          <Swiper
        //   modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2} // default for smallest screens
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
          >
            {techLogos.map((tech) => (
              <SwiperSlide key={tech.name}>
                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                  <Image
                    src={tech.logoUrl}
                    alt={tech.name}
                    width={100}
                    height={100}
                    className="object-contain h-16 w-auto"
                    unoptimized
                  />
                  <p className="mt-2 text-gray-700 font-medium">
                    {tech.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TechSliderPage;
