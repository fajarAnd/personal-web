import { Layout } from '@/components/layout';
import { PersonalInfoGrid } from '@/components/about';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';

export default function About() {
  return (
    <Layout title="About">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="inline-block px-4 py-1 bg-accent-blue/10 rounded-full">
            <span className="text-accent-blue text-sm font-semibold uppercase tracking-wider">
              About
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h1>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="lg:col-span-2">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-accent-blue to-purple-600">
              <Image
                src="/images/about-profile.jpg"
                alt="Adriano Smith"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Fallback with initials */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-50">
                AS
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Name and Title */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Adriano Smith
              </h2>
              <p className="text-accent-blue text-lg">Web Developer</p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I am a passionate web developer with over 8 years of experience in creating
                beautiful, functional, and user-friendly websites and applications. My journey
                in web development started with a curiosity about how things work on the
                internet, and it has evolved into a full-fledged career that I absolutely love.
              </p>
              <p>
                Throughout my career, I&apos;ve had the opportunity to work with diverse clients
                ranging from startups to established companies, helping them bring their digital
                visions to life. I specialize in modern web technologies and frameworks, with
                a strong focus on creating responsive designs and optimal user experiences.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing
                to open-source projects, or enjoying outdoor activities. I believe in continuous
                learning and staying updated with the latest trends in web development to deliver
                the best solutions to my clients.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Information Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white">Personal Information</h3>
          <PersonalInfoGrid />
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center md:justify-start pt-4">
          <a
            href="/cv/resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-all duration-300 hover:scale-105"
          >
            <FaDownload size={18} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </Layout>
  );
}
