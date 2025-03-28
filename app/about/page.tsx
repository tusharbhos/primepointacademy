import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import BookDemoForm from '@/components/BookDemoForm';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-2 lg:px-32 lg:text-lg">
      <Head>
        <title>About Prime Point Academy Pune – Trusted IT Training Institute in Pune</title>
        <meta
          name="description"
          content="Learn about Prime Point Academy in Pune – our mission, vision, and the IT courses we offer."
        />
      </Head>

      <section className="py-10 px-4">
        {/* Flex container: side by side on md+ screens, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <Image
              src="/aboutprime.jpg" // Path to your image
              alt="Prime Point Academy Pune"
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              className="rounded-md shadow-md"
            />
          </div>
          {/* Content Section */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">
              About Prime Point Academy Pune – Trusted IT Training Institute in Pune
            </h1>
            <p className="mb-4">
              Prime Point Academy in Pune is a leading IT training institute, famous for providing the best IT courses in Pune. We design our courses as per the industry&apos;s demand—UI UX design, Full Stack, Full Stack Java, MERN Stack, SAP, SAP FICO, and SAP MM. We ensure our students understand each concept thoroughly while gaining practical experience. By focusing on hands-on training and employing industry-experienced trainers, we bridge the gap between academic learning and industry requirements. We also provide 100% placement assistance.
            </p>

            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="mb-4">
              Our primary goal at Prime Point Academy is to offer the best IT courses to empower students with essential skills and help them achieve their career goals. We are dedicated to providing job-oriented training programs that equip students to handle all technical tasks relevant to their career profiles.
            </p>

            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p className="mb-4">
              We aspire to become one of the most globally reputed IT training institutes, recognized for quality education, innovative teaching, and outstanding placement assistance. Our aim is to transform students into skilled professionals ready to excel in the tech industry.
            </p>

            <h2 className="text-xl font-semibold mb-2">Courses We Offer at Prime Point Academy Pune</h2>

            {/* Two-column table with improved styling */}
            <table className="table-auto w-full border-collapse shadow-md rounded-md overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 hover:bg-gray-50 transition-colors">
                    <Link href="/courses/ui-ux-design-pune">
                      <span className="text-blue-600 font-medium hover:underline">1. UI UX Design</span>
                    </Link>
                  </td>
                  <td className="px-4 py-3 hover:bg-gray-50 transition-colors border-l border-gray-200">
                    <Link href="/courses/full-stack">
                      <span className="text-blue-600 font-medium hover:underline">2. Full Stack</span>
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 hover:bg-gray-50 transition-colors">
                    <Link href="/courses/java-programming-mastery1">
                      <span className="text-blue-600 font-medium hover:underline">3. Full Stack Java</span>
                    </Link>
                  </td>
                  <td className="px-4 py-3 hover:bg-gray-50 transition-colors border-l border-gray-200">
                    <Link href="/courses/mern-stack-course-pune">
                      <span className="text-blue-600 font-medium hover:underline">4. MERN Stack</span>
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 hover:bg-gray-50 transition-colors">
                    <Link href="/courses/sap-course-pune">
                      <span className="text-blue-600 font-medium hover:underline">5. SAP</span>
                    </Link>
                  </td>
                  <td className="px-4 py-3 hover:bg-gray-50 transition-colors border-l border-gray-200">
                    <Link href="/courses/sap-fico-course-pune">
                      <span className="text-blue-600 font-medium hover:underline">6. SAP FICO</span>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 hover:bg-gray-50 transition-colors">
                    <Link href="/courses/sap-mm-course-pune">
                      <span className="text-blue-600 font-medium hover:underline">7. SAP MM</span>
                    </Link>
                  </td>
                  {/* Empty cell for alignment */}
                  <td className="px-4 py-3 border-l border-gray-200" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <BookDemoForm />
    </div>
  );
}
