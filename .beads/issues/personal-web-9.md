# Implement responsive design and mobile optimization

| Field | Value |
|-------|-------|
| **ID** | personal-web-9 |
| **Type** | task |
| **Status** | open |
| **Priority** | high |
| **Created** | 2026-01-18 |
| **Labels** | |
| **Parent** | [[personal-web-1]] |

## Description

Implement responsive design untuk semua halaman dan optimize untuk mobile devices dengan breakpoints yang konsisten.

### Tasks:

**1. Setup Breakpoints**
```css
- mobile: 320px - 480px
- tablet: 481px - 768px
- desktop: 769px - 1200px
- wide: 1201px+
```

**Tailwind breakpoints:**
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

**2. Responsive Layout:**
- Sidebar:
  - Desktop: 250px width, icon + text
  - Mobile: 80px width, icon only OR hamburger menu
- Main content:
  - Desktop: margin-left 250px
  - Mobile: margin-left 0
  - Max-width: 1400px (center aligned)

**3. Responsive Components:**
- Hero Section (Home):
  - Desktop: Flex (image left, text right)
  - Mobile: Stack vertical (image top, text bottom)
- Service Grid:
  - Desktop: 3-column
  - Tablet: 2-column
  - Mobile: 1-column
- Personal Info Grid:
  - Desktop: 2-column
  - Mobile: 1-column

**4. Mobile Optimizations:**
- Touch-friendly buttons (min 44x44px)
- Adjust font sizes untuk mobile
- Adjust spacing/padding untuk mobile (20-30px vs 40-60px)
- Mobile navigation (hamburger menu)
- Responsive images

## Notes

Reference spec: Section VII - RESPONSIVE DESIGN BREAKPOINTS
