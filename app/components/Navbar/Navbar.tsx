"use client";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactus from "./Contactus";


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
        href: '/Courses',
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
    { name: 'Gallery', href: '/Gallery', current: false },
    { name: 'Blog', href: '/Blogs', current: false },
    { name: 'About Us', href: '/About', current: false },
    { name: 'Contact Us', href: '/ContactUs', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <Disclosure as="nav" className="bg-lightpink navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center">
                                <img className="block h-10 w-10 lg:hidden" src={'/assets/logo/Logo.svg'} alt="Courses-Logo" />
                                <img className="hidden h-12 w-12 lg:block" src={'/assets/logo/Logo.svg'} alt="Courses-Logo" />
                            </div>
                            {/* LINKS */}
                            <div className="hidden sm:ml-14 md:block">
                                <div className="flex space-x-4 relative">
                                    {navigation.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative"
                                            onMouseEnter={() => item.submenu && setDropdownOpen(true)}
                                            onMouseLeave={() => item.submenu && setDropdownOpen(false)}
                                        >
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'text-purple' : 'hover:text-purple',
                                                    'px-3 py-4 text-15px font-medium space-links'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                            {item.submenu && dropdownOpen && (
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
                                    
                                </div>
                            </div>
                        </div>
                        {/* DRAWER FOR MOBILE VIEW */}
                        <div className='block md:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>
                        {/* DRAWER LINKS DATA */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;