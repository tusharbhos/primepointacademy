import React from "react";
import Link from "next/link";
import Contactus from './Contactus';
import Aboutus from '../Aboutus';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  submenu?: { name: string; href: string }[];
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  {
      name: 'Courses',
      href: '#',
      current: false,
      submenu: [
          { name: 'UI/UX Design', href: '/Courses/ui-ux-design-course-in-pune' },
          { name: 'Full Stack Developer', href: '/Courses/full-stack-developer-course-in-pune' },
          { name: 'Java Classes', href: '/Courses/java-classes-in-pune' },
          { name: 'MERN Stack', href: '/Courses/mern-stack-course-in-pune' },
          { name: 'SAP Course', href: '/Courses/sap-course-in-pune' },
          { name: 'SAP FICO', href: '/Courses/sap-fico-course-in-pune' },
          { name: 'SAP MM', href: '/Courses/sap-mm-course-in-pune' },
      ]
  },
  { name: 'Gallery', href: '/gallery', current: false },
  { name: 'Blog', href: '#testimonial-section', current: false },
  { name: 'About Us', href: '/aboutus', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                    'block py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md z-50">
                    <ul className="py-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link href={sub.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <Contactus />
            
            <div className="mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
