import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";


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
  },
  '/projects': {
    name: 'projects'
  }
};

export function Navbar() {
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
            <Link href="https://github.com/ldacruz94" className="text-lg hover:text-neutral-800 dark:hover:text-neutral-200" target='_blank'>
              <FaGithub aria-label="GitHub" size='1.5em' />
            </Link>
            <Link href="https://www.linkedin.com/in/lucas-da-cruz-992738110/" className="text-lg hover:text-neutral-800 dark:hover:text-neutral-200" target='_blank'>
              <FaLinkedin aria-label="LinkedIn" size='1.5em' />
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}