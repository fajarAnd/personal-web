'use client';

import { ReactNode, useState } from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';
import Header from './Header';
import { SITE_NAME, SITE_DESCRIPTION } from '@/utils/constants';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title,
  description = SITE_DESCRIPTION
}: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-primary-dark">
        {/* Sidebar - Fixed */}
        <Sidebar />

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={toggleMobileMenu}
          />
        )}

        {/* Main Content Area */}
        <div className="ml-20 md:ml-[250px] transition-all duration-300">
          {/* Header */}
          <Header onMobileMenuToggle={toggleMobileMenu} />

          {/* Page Content */}
          <main className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6 md:py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
