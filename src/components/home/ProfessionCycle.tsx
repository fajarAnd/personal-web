'use client';

import { useState, useEffect } from 'react';

interface ProfessionCycleProps {
  professions: string[];
  interval?: number;
  className?: string;
}

export default function ProfessionCycle({
  professions,
  interval = 3000,
  className = ''
}: ProfessionCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // Wait for fade out, then change text and fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % professions.length);
        setIsVisible(true);
      }, 500); // Half second for fade out
    }, interval);

    return () => clearInterval(cycleInterval);
  }, [professions.length, interval]);

  return (
    <span
      className={`inline-block transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {professions[currentIndex]}
    </span>
  );
}
