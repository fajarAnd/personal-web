import { Layout } from '@/components/layout';
import {
  PersonalInfoGrid,
  SkillsProgress,
  KnowledgeList,
  Timeline,
  Testimonials
} from '@/components/about';
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
                Hi, my name is Adriano Smith and I began using WordPress when it first began.
                I&apos;ve spent most of my waking hours for the last ten years designing, programming
                and operating WordPress sites.
              </p>
              <p>
                One of my specialties is taking an idea from scratch and creating a full-fledged platform.
                I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With
                extensive knowledge of web mechanics, I&apos;m able to optimize complex integrations to
                require little-to-no maintenance while running on their own for years.
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

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Programming Skills */}
          <SkillsProgress
            title="Programming Skills"
            skills={[
              { name: 'WordPress', percentage: 95 },
              { name: 'JavaScript', percentage: 80 },
              { name: 'Angular', percentage: 90 }
            ]}
          />

          {/* Language Skills */}
          <SkillsProgress
            title="Language Skills"
            skills={[
              { name: 'English', percentage: 90 },
              { name: 'Russian', percentage: 90 },
              { name: 'Arabic', percentage: 85 }
            ]}
          />
        </div>

        {/* Knowledge & Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Knowledge */}
          <KnowledgeList
            title="Knowledge"
            items={[
              'Bootstrap, Angular',
              'React, Vue, Laravel',
              'Stylus, Sass, Less',
              'Gulp, Webpack, Grunt',
              'Tweenmax, GSAP'
            ]}
          />

          {/* Interests */}
          <KnowledgeList
            title="Interests"
            items={[
              'Make UI/UX Design',
              'Create Mobile App',
              'Site Optimization',
              'Custom Website',
              'Learn Ecommerce'
            ]}
          />
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Education */}
          <Timeline
            title="Education"
            items={[
              {
                year: '2014 - 2016',
                title: 'Oxford University',
                subtitle: 'Master Degree'
              },
              {
                year: '2010 - 2014',
                title: 'Texas University',
                subtitle: 'Bachelor Degree'
              },
              {
                year: '2008 - 2010',
                title: 'Simone College',
                subtitle: 'Associate Degree'
              }
            ]}
          />

          {/* Experience */}
          <Timeline
            title="Experience"
            items={[
              {
                year: '2018 - Now',
                title: 'Envato Market',
                subtitle: 'Exclusive Author'
              },
              {
                year: '2016 - 2018',
                title: 'RGB Studio',
                subtitle: 'UX Designer'
              },
              {
                year: '2012 - 2016',
                title: 'Innovations Park',
                subtitle: 'Web Designer'
              }
            ]}
          />
        </div>

        {/* Testimonials */}
        <Testimonials
          title="Testimonials"
          testimonials={[
            {
              quote: 'Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!',
              name: 'Alexander Walker',
              position: 'Graphic Designer'
            },
            {
              quote: 'Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!',
              name: 'Isabelle Smith',
              position: 'Content Manager'
            }
          ]}
        />
      </div>
    </Layout>
  );
}
