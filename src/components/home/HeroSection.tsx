'use client';

import ProfileImage from './ProfileImage';
import ProfessionCycle from './ProfessionCycle';
import { PROFESSIONS } from '@/utils/constants';
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble, FaTiktok } from 'react-icons/fa';

interface HeroSectionProps {
  name?: string;
  bio?: string;
  profileImage?: string;
  showDownloadCV?: boolean;
}

export default function HeroSection({
  name = 'Your Name',
  bio = 'A passionate creative professional dedicated to crafting exceptional digital experiences.',
  profileImage = '/images/profile.jpg',
  showDownloadCV = false
}: HeroSectionProps) {
  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaDribbble, href: '#', label: 'Dribbble' },
    { icon: FaTiktok, href: '#', label: 'TikTok' }
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Profile Image - Left */}
        <div className="flex-shrink-0">
          <ProfileImage
            src={profileImage}
            alt={name}
            size={320}
            showRing={true}
          />
        </div>

        {/* Text Content - Right */}
        <div className="flex-1 text-center md:text-left">
          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {name}
          </h1>

          {/* Animated Profession */}
          <div className="text-xl md:text-2xl text-accent-blue mb-6">
            I&apos;m a{' '}
            <ProfessionCycle
              professions={PROFESSIONS}
              interval={3000}
              className="font-semibold"
            />
          </div>

          {/* Bio */}
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            {bio}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-text-secondary hover:bg-accent-blue hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Download CV Button */}
          {showDownloadCV && (
            <button className="px-8 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-colors duration-300">
              Download CV
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
