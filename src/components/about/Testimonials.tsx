'use client';

import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export default function Testimonials({ title, testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">{title}</h3>

      <div className="relative bg-secondary-dark rounded-2xl p-8 md:p-10">
        {/* Quote */}
        <p className="text-text-secondary leading-relaxed mb-6 italic">
          &ldquo;{currentTestimonial.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-white">{currentTestimonial.name}</h4>
          <p className="text-text-secondary text-sm">{currentTestimonial.position}</p>
        </div>

        {/* Navigation arrows */}
        {testimonials.length > 1 && (
          <div className="flex gap-3 mt-6">
            <button
              onClick={goToPrevious}
              className="p-2 bg-primary-dark hover:bg-border-color rounded-lg transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="text-xl text-text-primary" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 bg-primary-dark hover:bg-border-color rounded-lg transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="text-xl text-text-primary" />
            </button>
          </div>
        )}

        {/* Dots indicator */}
        {testimonials.length > 1 && (
          <div className="flex gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-accent-blue w-6'
                    : 'bg-border-color hover:bg-accent-blue/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
