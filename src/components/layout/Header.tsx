'use client';

import { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

interface HeaderProps {
  onMobileMenuToggle?: () => void;
}

export default function Header({ onMobileMenuToggle }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // TODO: Implement dark mode context/state management
    // For now, this is a placeholder
  };

  return (
    <header className="sticky top-0 h-16 md:h-20 bg-primary-dark/80 backdrop-blur-md border-b border-border-color z-30">
      <div className="h-full flex items-center justify-between px-4 md:px-8">
        {/* Mobile Menu Toggle (only visible on mobile) */}
        <button
          onClick={onMobileMenuToggle}
          className="md:hidden p-2 text-text-primary hover:text-accent transition-colors"
          aria-label="Toggle mobile menu"
        >
          <FiMenu className="text-2xl" />
        </button>

        {/* Spacer for desktop */}
        <div className="hidden md:block flex-1" />

        {/* Right side: Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 md:p-3 rounded-lg bg-secondary-dark hover:bg-border-color transition-all duration-200 text-text-primary group"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <FiSun className="text-xl md:text-2xl group-hover:text-accent transition-colors" />
            ) : (
              <FiMoon className="text-xl md:text-2xl group-hover:text-accent transition-colors" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
