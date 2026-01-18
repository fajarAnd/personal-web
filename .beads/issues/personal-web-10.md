# Implement performance optimization

| Field | Value |
|-------|-------|
| **ID** | personal-web-10 |
| **Type** | task |
| **Status** | open |
| **Priority** | medium |
| **Created** | 2026-01-18 |
| **Labels** | |
| **Parent** | [[personal-web-1]] |

## Description

Optimize website performance untuk fast loading dan good Core Web Vitals scores.

### Tasks:

**1. Image Optimization:**
- Use Next.js `<Image>` component untuk semua images
- Lazy loading untuk images di bawah fold
- Responsive images dengan srcSet
- WebP format untuk modern browsers
- Proper sizing dan compression

**2. Code Splitting:**
- Dynamic imports untuk pages
- Lazy load components yang tidak critical
- Split vendor bundles
- Tree shaking untuk unused code

**3. Caching Strategy:**
- Static generation untuk pages yang tidak berubah
- ISR (Incremental Static Regeneration) untuk dynamic data
- Browser caching headers
- Service worker (optional)

**4. Performance Metrics:**
- Target Lighthouse scores:
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+
- Core Web Vitals:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

**5. Optimizations:**
- Minimize CSS/JS bundles
- Remove unused CSS
- Optimize fonts loading
- Prefetch/preload critical resources

## Notes

Reference spec: Section X - PERFORMANCE OPTIMIZATION
