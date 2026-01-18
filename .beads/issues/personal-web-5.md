# Implement Home page

| Field | Value |
|-------|-------|
| **ID** | personal-web-5 |
| **Type** | task |
| **Status** | open |
| **Priority** | high |
| **Created** | 2026-01-18 |
| **Labels** | |
| **Parent** | [[personal-web-1]] |

## Description

Implement halaman Home dengan hero section, circular profile image dengan rotating ring, dan animated profession cycling.

### Components to Build:

**1. AnimatedRing.tsx**
- SVG dengan rotating animation (360deg, 3s, infinite)
- Props: size, strokeWidth, duration, color
- Returns: SVG circle dengan keyframe animation

**2. ProfileImage.tsx**
- Circular profile image (border-radius: 50%)
- Size: 300-350px diameter
- Props: src, alt, size, showRing
- Optional: Animated ring wrapper
- Border: 3-4px solid dengan opacity

**3. ProfessionCycle.tsx**
- Dynamic/animated text dengan multiple professions
- Array: ["Photographer", "Writer", "Investigative Reporter", "Programmer"]
- Fade in/out animation (2-3 detik transition)
- Props: professions[], interval, className

**4. HeroSection.tsx**
- Layout: Flex (image left, text right)
- Profile Info:
  - Name: Large heading (48px, bold)
  - Profession: Animated cycling text
  - Bio: 2-3 lines description
  - Social Icons: Facebook, Twitter, Instagram, Dribbble, TikTok
    - Hover effect: color change, scale transform
- Buttons/CTA: Download CV (if applicable)

### Responsive:
- Mobile: Stack vertical (image top, text bottom)
- Tablet: Adjust spacing and font sizes

## Notes

Reference spec: Section IV.A - HOME PAGE
