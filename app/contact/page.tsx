import Link from 'next/link';
import BookDemoForm from '@/components/BookDemoForm';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-2 lg:px-32 lg:text-lg">
      {/* Map & Form Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column - Map */}
        <div className="md:w-1/2">
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.355037668001!2d73.83341527572827!3d18.50917198258085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0657ed3a885%3A0x8d46872c1b4c04a6!2sPrime%20Point%20Academy!5e0!3m2!1sen!2sin!4v1716211167801!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
          {/* Address & Get Directions Section */}
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-800 font-medium">
              <span className="font-semibold">Address:</span> Awfis Quantum Work, 1st Floor 7/A, Paud Phata Road, Pandurang Colony, Erandwane, Pune, Maharashtra 411004
            </p>
            <a
              href="https://www.google.com/maps/dir//Office+No.+7,+First+Floor,+Prime+Point+AI,+Data+Science+Course,+Data+Analytics+Training,+Quantum+Works+Awfis+Building,+Metro+Station,+near+Nal+Stop,+Pandurang+Colony,+Erandwane,+Pune,+Maharashtra+411004,+India/@18.505343,73.82827,10z/data=!4m17!1m7!3m6!1s0x3bc2bfc3eda86d95:0xb4a06d332097c87d!2sPrime+Point+AI,+Data+Science+Course,+Data+Analytics+Training!8m2!3d18.5053429!4d73.8282695!16s%2Fg%2F11x202c_17!4m8!1m0!1m5!1m1!1s0x3bc2bfc3eda86d95:0xb4a06d332097c87d!2m2!1d73.8282695!2d18.5053429!3e2?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0b5fa4] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Get Directions →
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="md:w-1/2">
          <BookDemoForm />
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-10 px-4">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          At Prime Point Academy, we are here to help you achieve your career goals. If you want to inquire about our courses or need assistance with your learning journey, our dedicated team is ready to assist you. Feel free to reach out to us through any of the methods below:
        </p>

        <h2 className="text-xl font-semibold mb-2">Contact Information:</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            <strong>Address:</strong> Awfis Quantum Work, 1st Floor 7/A, Paud Phata Road, Pandurang Colony, Erandwane, Pune, Maharashtra 411004
          </li>
          <li>
            <strong>Phone:</strong> +91 8390675123
          </li>
          <li>
            <strong>Working Hours:</strong> Monday to Saturday, 9:00 AM to 7:00 PM
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Connect With Us:</h2>
        <p className="mb-2">
          Follow us on social media to stay updated on new courses, events, and career tips:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Instagram:</strong>{' '}
            <Link
              href="https://www.instagram.com/primepointacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              primepointacademy
            </Link>
          </li>
          <li>
            <strong>Facebook:</strong>{' '}
            <Link
              href="https://www.facebook.com/people/Prime-Point-Academy/61573405254644"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Prime Point Academy
            </Link>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <Link
              href="https://www.linkedin.com/company/prime-point-academy/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Prime Point Academy
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
