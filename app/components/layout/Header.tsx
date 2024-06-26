'use client'

import Link from 'next/link';
import './Header.scss';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './HamburgerIcon';
import { HamburgerIcon } from './HamburgerIcon';
import { GitHubIcon } from './GitHubIcon';
import { LinkedInIcon } from './LinkedInIcon';


const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: 'work',
  },
  '/blog': {
    name: 'blog',
  },
  '/reading': {
    name: 'reading',
  }
};

export function Header() {

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative justify-between"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 font-bold">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="text-lg transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 hover:underline"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center space-x-4 justify-end">
            <HamburgerIcon className="hamburger" />
            <GitHubIcon className='social-icon' />
            <LinkedInIcon className='social-icon' />
          </div>
        </nav>
      </div>
    </aside>
  );
}