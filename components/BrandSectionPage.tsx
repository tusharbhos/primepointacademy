import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';

interface Brand {
  name: string;
  logoUrl: string;
}

const brandLogos: Brand[] = [
  {
    name: 'Microsoft',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    name: 'TCS',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/tata-consultancy-services-1.svg',
  },
  {
    name: 'Tech Mahindra',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uz4eqOQ0cBdsn1Q3xlAXFPmMP9JmBS7i3A&s',
  },
  {
    name: 'Deloitte',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/2560px-Deloitte.svg.png',
  },
  {
    name: 'Cognizant',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Cognizant%27s_logo.svg',
  },
  {
    name: 'Capgemini',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/2560px-Capgemini_201x_logo.svg.png',
  },
  {
    name: 'HCL',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/HCL_Technologies_logo.svg',
  },
  {
    name: 'Infosys',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
  },
  {
    name: 'IBM',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
  {
    name: 'L%26T_Infotech',
    logoUrl: 'https://www.larsentoubro.com/media/30891/ltgrouplogo.jpg',
  },
];

const BrandSectionPage: FC = () => {
  return (
    <>
      <Head>
        <title>Companies Hiring for IT Training</title>
        <meta
          name="description"
          content="Explore some of the top companies hiring for IT training."
        />
      </Head>

      <div className="bg-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold pb-2 mb-8">
          Companies Hiring For IT Training
          </h2>
          <div
            className="
              grid 
              grid-cols-2 
              sm:grid-cols-3 
              md:grid-cols-4 
              lg:grid-cols-5 
              gap-6 
              items-center 
              justify-center
            "
          >
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg 
                           hover:shadow-md transition-shadow"
              >
                <Image
                  src={brand.logoUrl}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandSectionPage;
