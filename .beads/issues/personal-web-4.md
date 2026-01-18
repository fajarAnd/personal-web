# Build core layout components

| Field | Value |
|-------|-------|
| **ID** | personal-web-4 |
| **Type** | task |
| **Status** | open |
| **Priority** | high |
| **Created** | 2026-01-18 |
| **Labels** | |
| **Parent** | [[personal-web-1]] |

## Description

Build komponen layout utama yang akan digunakan di semua halaman (Sidebar, Header, Layout wrapper).

### Components to Build:

**1. Layout.tsx**
- Main wrapper component
- Props: children, title?, description?
- Returns: Sidebar + Header + Main content area
- Margin-left: 250px (desktop), 0 (mobile)
- Max-width: 1400px (center aligned)

**2. Sidebar.tsx**
- Fixed position di kiri
- Width: 250px (desktop), 80px (mobile)
- Background: Dark (#1a1a1a)
- Logo: "PERSONAL WEB" - bold, 24px
- Menu items: Home, About, Service, Portfolio, News, Contact
  - Icon + Text (desktop), Icon only (mobile)
  - Active state: highlight dengan underline/background
  - Hover state: smooth transition
- Footer: Copyright text

**3. Header.tsx**
- Height: 60-80px
- Background: Transparent/semi-transparent
- Dark mode toggle: Icon di top-right
- Position: Sticky/Fixed
- Mobile: Hamburger menu untuk sidebar

### Styling:
- Use Tailwind CSS + CSS Modules
- Responsive breakpoints
- Smooth transitions dan animations

## Notes

Reference spec: Section III.A - Layout & Navigation (SAMA untuk semua page)
