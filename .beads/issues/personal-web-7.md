# Implement Service page

| Field | Value |
|-------|-------|
| **ID** | personal-web-7 |
| **Type** | task |
| **Status** | open |
| **Priority** | high |
| **Created** | 2026-01-18 |
| **Labels** | |
| **Parent** | [[personal-web-1]] |

## Description

Implement halaman Service dengan grid layout dan 6 service cards dengan hover effects.

### Components to Build:

**1. ServicePage.tsx**
- Header Section:
  - Page label: "SERVICES" (badge, uppercase)
  - Page title: "What I Do" (large heading)
- Service Grid:
  - Layout: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
  - Gap: 24-32px
  - Total: 6 service cards dalam 3x2 grid

**2. ServiceCard.tsx**
- Card design:
  - Background: Dark card (#2a2a2a)
  - Border: 1px solid border-color
  - Padding: 30-40px
  - Border-radius: 12px
- Content:
  - Number: "01", "02", etc. (bold, 20px)
  - Title: Service name (24px, bold)
    - Examples: "Web Design", "Content Writing", "Brand Identity", "Live Chat", "After Effects", "Mobile App"
  - Description: 2-3 lines of text (14px, secondary color)
  - Divider: Small horizontal line
- Hover effects:
  - Scale: 1.02-1.05
  - Shadow increase
  - Color/text change
  - Smooth transition (0.3s ease-in-out)

### Service Data:
```typescript
const services = [
  { id: 1, title: "Web Design", description: "..." },
  { id: 2, title: "Content Writing", description: "..." },
  { id: 3, title: "Brand Identity", description: "..." },
  { id: 4, title: "Live Chat", description: "..." },
  { id: 5, title: "After Effects", description: "..." },
  { id: 6, title: "Mobile App", description: "..." }
]
```

## Notes

Reference spec: Section IV.C - SERVICE PAGE
