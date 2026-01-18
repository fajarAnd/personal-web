'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiFolder,
  FiFileText,
  FiMail
} from 'react-icons/fi';
import { NAV_ITEMS, SITE_NAME } from '@/utils/constants';

const ICON_MAP: Record<string, React.ElementType> = {
  'Home': FiHome,
  'About': FiUser,
  'Service': FiBriefcase,
  'Portfolio': FiFolder,
  'News': FiFileText,
  'Contact': FiMail,
};

export default function Sidebar() {
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 h-full bg-primary-dark border-r border-border-color z-40 flex flex-col w-20 md:w-[250px] transition-all duration-300">
      {/* Logo */}
      <div className="p-4 md:p-6 border-b border-border-color">
        <Link href="/" className="block">
          <h2 className="text-lg md:text-2xl font-bold text-text-primary truncate">
            <span className="hidden md:inline">{SITE_NAME}</span>
            <span className="md:hidden text-accent">PW</span>
          </h2>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-6 px-2 md:px-4">
        <ul className="space-y-2">
          {NAV_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.label];
            const active = isActive(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 md:px-4 py-3 rounded-md
                    transition-all duration-200
                    ${active
                      ? 'bg-accent/10 text-accent border-l-4 border-accent'
                      : 'text-text-secondary hover:bg-secondary-dark hover:text-text-primary'
                    }
                  `}
                >
                  {Icon && <Icon className="text-xl md:text-2xl flex-shrink-0" />}
                  <span className="hidden md:inline text-sm font-medium">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border-color">
        <p className="text-xs text-text-secondary text-center md:text-left">
          <span className="hidden md:inline">
            &copy; {new Date().getFullYear()} {SITE_NAME}
          </span>
          <span className="md:hidden">&copy;</span>
        </p>
      </div>
    </aside>
  );
}
