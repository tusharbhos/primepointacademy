// app/page.tsx
import Hero from '../components/Hero'
import BookDemoForm from '../components/BookDemoForm'
import Courses from '../components/Courses'
import Testimonial from '../components/Testimonial'
import { testimonials } from "../data/HomeTestimonial";
// import Location from '../components/Location'
import FaqSection from '../components/FaqSection'
import CourseDescription from '@/components/CourseDescription'
import { faqs } from "../data/HomeFAQ";
import BrandSectionPage from '@/components/BrandSectionPage';
import YouTubeTestimonials from '@/components/YouTubeTestimonials';
// import TechSliderPage from '@/components/TechSliderPage';
import TechnologySlider from '@/components/TechSlider';
import CertificationSection from '@/components/CertificationSection';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container mx-auto px-4 py-2">
        <Courses />
      </div>
      <div className="container mx-auto md:px-2 py-1">
        <CourseDescription/>
      </div>
      <div className="container mx-auto px-4 py-6">
        <BookDemoForm />
        <StatsSection/>
      </div>


      <div className="container mx-auto px-4 py-6">
        {/* <Testimonial /> */}
        <Testimonial testimonials={testimonials} />
      <TechnologySlider />
      <CertificationSection/>
      <YouTubeTestimonials/>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* <TechSliderPage/> */}
      <BrandSectionPage/>
        {/* <BookDemoForm /> */}
      </div>

      {/* <main className="p-4">
      <h1 className="mb-8 text-center text-3xl font-bold">Technologies</h1>
    </main> */}



      <FaqSection faqs={faqs} />
      {/* <Location /> */}

    </div>
  )
}
