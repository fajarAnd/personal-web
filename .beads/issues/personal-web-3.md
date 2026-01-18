# Create global design system

| Field | Value |
|-------|-------|
| **ID** | personal-web-3 |
| **Type** | task |
| **Status** | open |
| **Priority** | high |
| **Created** | 2026-01-18 |
| **Labels** | |
| **Parent** | [[personal-web-1]] |

## Description

Setup global design system yang konsisten dan identik untuk semua halaman (colors, typography, spacing, shadows, border radius).

### Tasks:
- Create globals.css dengan CSS variables untuk:
  - Color scheme (primary-dark, secondary-dark, text colors, accent, border)
  - Typography system (font sizes, weights, line heights)
  - Spacing system (xs, sm, md, lg, xl, 2xl, 3xl)
  - Border radius (sm, md, lg, xl, full)
  - Shadow system (sm, md, lg, xl)
- Configure Tailwind CSS dengan design tokens
- Create animations.css (rotateRing, fadeInOut, card hover, page transitions)
- Setup font families (Segoe UI atau modern font)

### Design Tokens:

**Colors:**
```css
--primary-dark: #1a1a1a
--secondary-dark: #2a2a2a
--text-primary: #ffffff
--text-secondary: #a0a0a0
--accent-color: #00d4ff
--border-color: #404040
```

**Typography:**
- H1: 48-56px, 700 bold
- H2: 36-40px, 700 bold
- H3: 24-28px, 600 semi-bold
- Body: 14-16px, 400 regular
- Caption: 12-14px, 500 medium

**Spacing:** 4px, 8px, 16px, 24px, 32px, 48px, 64px

## Notes

Reference spec: Section III - DESIGN REQUIREMENT - IDENTIK SEMUA PAGE
