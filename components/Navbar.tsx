'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import { useRouter } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Notifications',
    href: '/notifications',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap fixed z-50 w-full bg-gray-100 border-b-2 text-sm py-4 dark:bg-gray-800 px-6">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between relative"
        aria-label="Global"
      >
        <div className="w-full flex items-center justify-between">
          <Link
            className="flex-none text-2xl font-semibold text-rose-500 dark:text-white"
            href="/"
          >
            Medi-Tracker
          </Link>
          <div
            onClick={toggleOpen}
            className="p-4 md:py-1 md:px-2  flex flex-row items-center gap-3 rounded-full cursor-pointer transition md:hidden"
          >
            {open ? <IoMdClose size={18} /> : <AiOutlineMenu size={18} />}
          </div>
        </div>

        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5 text-base">
          {open && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
              <div className="flex flex-col cursor-pointer">
                {links.map((link) => (
                  <MenuItem
                    key={link.href}
                    onClick={() => router.push(link.href)}
                    label={link.label}
                    href={link.href}
                  />
                ))}
                <div className="bg-gray-100 w-full h-1" />
              </div>
            </div>
          )}
          <div className="md:flex hidden">
            {links.map((link) => (
              <MenuItem
                key={link.href}
                onClick={() => router.push(link.href)}
                label={link.label}
                href={link.href}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
