'use client';

import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillsProgressProps {
  title: string;
  skills: Skill[];
}

export default function SkillsProgress({ title, skills }: SkillsProgressProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
  <div ref={containerRef} className="space-y-6">
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          {/* Skill name and percentage */}
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">{skill.name}</span>
            <span className="text-text-secondary">{skill.percentage}%</span>
          </div>
          {/* Progress bar - thin line style matching Tokyo template */}
          <div className="w-full bg-border-color h-[3px] overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-1000 ease-out"
              style={{
                width: isVisible ? `${skill.percentage}%` : '0%',
                transitionDelay: `${index * 150}ms`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
