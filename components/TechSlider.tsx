'use client';
import Image from 'next/image';

const fallbackLogo = "https://via.placeholder.com/96?text=Logo";

const technologies = [
  { name: 'Node.js', logo: 'https://img.icons8.com/color/96/nodejs.png' },
  { name: 'React', logo: 'https://img.icons8.com/office/96/react.png' },
  { name: 'MongoDB', logo: 'https://img.icons8.com/color/96/mongodb.png' },
  { name: 'Express', logo: 'https://i.imgur.com/zDbLkdY.png' },
  { name: 'Java', logo: 'https://img.icons8.com/color/96/java-coffee-cup-logo.png' },
  { name: 'TypeScript', logo: 'https://img.icons8.com/color/96/typescript.png' },
  { name: 'JavaScript', logo: 'https://img.icons8.com/color/96/javascript.png' },
  { name: 'UI', logo: 'https://img.icons8.com/color/96/design--v1.png' },
  { name: 'SAP', logo: 'https://img.icons8.com/color/96/sap.png' },
  { name: 'Node.js', logo: 'https://img.icons8.com/color/96/nodejs.png' },
  { name: 'React', logo: 'https://img.icons8.com/office/96/react.png' },
  { name: 'MongoDB', logo: 'https://img.icons8.com/color/96/mongodb.png' },
  { name: 'Express', logo: 'https://i.imgur.com/zDbLkdY.png' },
  { name: 'Java', logo: 'https://img.icons8.com/color/96/java-coffee-cup-logo.png' },
  { name: 'TypeScript', logo: 'https://img.icons8.com/color/96/typescript.png' },
  { name: 'JavaScript', logo: 'https://img.icons8.com/color/96/javascript.png' },
  { name: 'UI', logo: 'https://img.icons8.com/color/96/design--v1.png' },
  { name: 'SAP', logo: 'https://img.icons8.com/color/96/sap.png' },
  { name: 'Node.js', logo: 'https://img.icons8.com/color/96/nodejs.png' },
  { name: 'React', logo: 'https://img.icons8.com/office/96/react.png' },
  { name: 'MongoDB', logo: 'https://img.icons8.com/color/96/mongodb.png' },
  { name: 'Express', logo: 'https://i.imgur.com/zDbLkdY.png' },
  { name: 'Java', logo: 'https://img.icons8.com/color/96/java-coffee-cup-logo.png' },
  { name: 'TypeScript', logo: 'https://img.icons8.com/color/96/typescript.png' },
  { name: 'JavaScript', logo: 'https://img.icons8.com/color/96/javascript.png' },
  { name: 'UI', logo: 'https://img.icons8.com/color/96/design--v1.png' },
  { name: 'SAP', logo: 'https://img.icons8.com/color/96/sap.png' },
  { name: 'Node.js', logo: 'https://img.icons8.com/color/96/nodejs.png' },
  { name: 'React', logo: 'https://img.icons8.com/office/96/react.png' },
  { name: 'MongoDB', logo: 'https://img.icons8.com/color/96/mongodb.png' },
  { name: 'Express', logo: 'https://i.imgur.com/zDbLkdY.png' },
  { name: 'Java', logo: 'https://img.icons8.com/color/96/java-coffee-cup-logo.png' },
  { name: 'TypeScript', logo: 'https://img.icons8.com/color/96/typescript.png' },
  { name: 'JavaScript', logo: 'https://img.icons8.com/color/96/javascript.png' },
  { name: 'UI', logo: 'https://img.icons8.com/color/96/design--v1.png' },
  { name: 'SAP', logo: 'https://img.icons8.com/color/96/sap.png' }
];

const TechSlider = () => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = fallbackLogo;
  };

  const renderTechList = (ariaHidden = false) => (
    <ul
      className="flex items-center my-8 justify-center md:justify-start gap-8 animate-infinite-scroll"
      aria-hidden={ariaHidden}
    >
      {technologies.map((tech, index) => (
        <li key={`${tech.name}-${index}`} className="flex items-center space-x-2" title={tech.name}>
          <div className="relative h-16 w-16">
            <Image
              src={tech.logo}
              alt={tech.name}
              fill={false}
              width={64}
              height={64}
              className="object-contain"
              loading="lazy"
              onError={handleImageError}
            />
          </div>
          <span className="text-lg font-medium text-gray-700">{tech.name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)',
      }}
    >
      {/* Duplicate list for infinite scroll */}
      {renderTechList(true)}
    </div>
  );
};

export default TechSlider;
