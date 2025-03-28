export interface TableOfContentItem {
  title: string;
  id: string;
}

// export interface ContentBlock {
//   type: 'paragraph' | 'list'; // Can add more types like 'heading', 'image', etc., in the future
//   text?: string; // For paragraphs
//   items?: string[]; // For lists
// }

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] };


export interface Section {
  id: string;
  heading: string;
  content: ContentBlock[];
}
export interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  tableOfContents: { title: string; id: string }[];
  sections: Section[];
  duration: string;
  difficulty: string;
  price: number;
  rating: number;
  studentsEnrolled: number;
  bestseller: boolean;
  testimonials: Testimonial[];
  FAQItem: FAQItem[]
}

  export interface Courses {
    title: string;
    description: string;
    slug: string;
    image: string; // Ensure this is always a string (not optional)
    duration: string;
    difficulty: string;
    price: number;
    rating: number;
    studentsEnrolled?: number;
    bestseller?: boolean;
    syllabus: string[];
    prerequisites: string[];
    benefits: string[];
    
  }

  export interface GalleryItem {
    id: string;
    title: string;
    images: string[];
  }