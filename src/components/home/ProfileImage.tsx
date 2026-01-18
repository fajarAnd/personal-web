import Image from 'next/image';
import AnimatedRing from './AnimatedRing';

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
  showRing?: boolean;
}

export default function ProfileImage({
  src,
  alt,
  size = 320,
  showRing = false
}: ProfileImageProps) {
  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {/* Animated Ring */}
      {showRing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedRing size={size} strokeWidth={3} duration={3} color="#3b82f6" />
        </div>
      )}

      {/* Profile Image Container */}
      <div
        className="relative animate-morph overflow-hidden bg-gradient-to-br from-accent-blue to-purple-600"
        style={{
          width: size,
          height: size,
          boxShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 0px 9px inset'
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes={`${size}px`}
          style={{
            mixBlendMode: 'multiply'
          }}
          onError={(e) => {
            // If image fails to load, keep the gradient background
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Placeholder initials if image doesn't load */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-50">
          {alt.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()}
        </div>
      </div>
    </div>
  );
}
