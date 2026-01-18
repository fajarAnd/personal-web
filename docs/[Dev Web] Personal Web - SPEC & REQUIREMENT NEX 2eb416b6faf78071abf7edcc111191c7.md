# PORTFOLIO WEB - SPEC & REQUIREMENT NEXTJS/REACT
---

# **I. OVERVIEW & STRUKTUR PROJECT**

Portofolio web ini adalah **personal web berbasis Next.js dan React** yang dirancang sebagai **representasi profesional digital** untuk menampilkan **portofolio, pengalaman profesional, dan personal branding** secara konsisten, modern, dan scalable.

Website ini tidak hanya berfungsi sebagai halaman profil statis, tetapi sebagai **fondasi jangka panjang** untuk pengembangan konten dan karier, termasuk ekspansi ke **blog / news section** pada fase pengembangan berikutnya.

Dengan pendekatan **design system yang konsisten dan identik di seluruh halaman**, Tokyo Portfolio memastikan pengalaman visual yang rapi, profesional, dan kredibel—baik bagi **client**, **recruiter**, maupun **kolaborator potensial**.

---

## **Tujuan Pembuatan Website**

### **1. Meningkatkan Profesionalitas Personal Brand**

Website ini dirancang untuk:

* Menampilkan portofolio dan kemampuan secara terstruktur
* Memberikan first impression yang kuat


### **2. Mencari Opportunity Job & Career Growth**

Website ini ditujukan sebagai:

* **Online resume / CV interaktif**
* Pendukung aplikasi kerja (job application)
* Media showcase skill teknikal

Dengan struktur SEO-friendly, performa optimal, dan aksesibilitas yang baik, website ini mendukung visibilitas profesional di mata recruiter dan hiring manager.

---

### **4. Fondasi untuk Pengembangan Konten (Next Development)**

Walaupun fokus utama saat ini adalah:

* Home
* About
* Service

Arsitektur project sudah disiapkan untuk:

* Blog / News section
* Content management (CMS-ready config)
* Static generation & ISR
* Skalabilitas jangka panjang

Hal ini memungkinkan website berkembang seiring dengan pengalaman dan kebutuhan karier.


## **Target Audience**

* Client (freelance / agency / corporate)
* Recruiter & HR
* Hiring Manager / Tech Lead
* Professional collaborator

```
personal-web/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── about-profile.jpg
│   │   └── ...
│   └── cv/
│       └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   ├── Hero/
│   │   │   ├── ProfileImage.tsx
│   │   │   ├── AnimatedRing.tsx
│   │   │   └── HeroSection.tsx
│   │   ├── Common/
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── Button.tsx
│   │   │   └── ...
│   │   └── Pages/
│   │       ├── Home.tsx
│   │       ├── About.tsx
│   │       ├── Service.tsx
│   │       └── ...
│   ├── pages/
│   │   ├── index.tsx (Home)
│   │   ├── about.tsx (About)
│   │   ├── service.tsx (Service)
│   │   ├── portfolio.tsx
│   │   ├── news.tsx
│   │   └── contact.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── animations.css
│   │   └── components/
│   │       ├── sidebar.module.css
│   │       ├── hero.module.css
│   │       └── ...
│   ├── hooks/
│   │   ├── useMediaQuery.ts
│   │   ├── useScrollDetection.ts
│   │   └── ...
│   ├── types/
│   │   ├── index.ts
│   │   └── components.ts
│   └── utils/
│       └── constants.ts
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
└── package.json
```

---

# **II. DEPENDENCY & LIBRARY REQUIREMENTS**

### **Core Dependencies:**

json

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0"
  }
}
```

### **UI & Animation Libraries:**

json

```json
{
  "dependencies": {
    "framer-motion": "^10.16.0",
    "react-icons": "^4.12.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### **Form & Validation:**

json

```json
{
  "dependencies": {
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0"
  }
}
```

### **Utilities:**

json

```json
{
  "dependencies": {
    "classnames": "^2.3.2",
    "clsx": "^2.0.0"
  }
}
```

### **Dev Dependencies:**

json

```json
{
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "eslint": "^8.50.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

---

# **III. DESIGN REQUIREMENT - IDENTIK SEMUA PAGE**

## **A. Layout & Navigation (SAMA untuk semua page)**

**Sidebar Kiri (Fixed):**

- Width: 250px (desktop), 80px (mobile)
- Background: Dark (`#1a1a1a` atau rgba(0,0,0,0.95))
- Logo: "TOKYO" - font-weight: bold, size: 24px
- Menu items: Home, About, Service, Portfolio, News, Contact
    - Icon + Text (desktop), Icon only (mobile)
    - Active state: highlight dengan underline atau background color
    - Hover state: smooth transition
- Footer: Copyright text

**Top Header (Full Width):**

- Height: 60-80px
- Background: Transparent atau semi-transparent
- Dark mode toggle: Icon di top-right
- Positioning: Sticky/Fixed
- Mobile: Menu hamburger untuk sidebar

**Main Content Area:**

- Margin-left: 250px (desktop), 0 (mobile)
- Padding: 40-60px (desktop), 20-30px (mobile)
- Max-width: 1400px (center aligned)

---

## **B. Color Scheme (SAMA untuk semua page)**

css

```json
-primary-dark: #1a1a1a;-secondary-dark: #2a2a2a;-text-primary: #ffffff;-text-secondary: #a0a0a0;-accent-color: #00d4ff (atau brand color lain);-border-color: #404040;
```

---

## **C. Typography (SAMA untuk semua page)**

```
ElementFont-sizeFont-weightLine-heightPage Title (H1)48-56px700 Bold1.2Section Title (H2)36-40px700 Bold1.3Sub Title (H3)24-28px600 Semi-bold1.4Body Text14-16px400 Regular1.6Label/Caption12-14px500 Medium1.4Small Text12px400 Regular1.5
```

**Font Family:**

- Primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif (atau font modern lain)
- Mono: 'Courier New', monospace (untuk code/data)

---

## **D. Spacing System (SAMA untuk semua page)**

css

```json
-spacing-xs: 4px;-spacing-sm: 8px;-spacing-md: 16px;-spacing-lg: 24px;-spacing-xl: 32px;-spacing-2xl: 48px;-spacing-3xl: 64px;
```

---

## **E. Border Radius (SAMA untuk semua page)**

css

```json
-radius-sm: 4px;-radius-md: 8px;-radius-lg: 12px;-radius-xl: 16px;-radius-full: 9999px;
```

---

## **F. Shadows (SAMA untuk semua page)**

css

```json
-shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);-shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);-shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2);-shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.25);
```

---

# **IV. PAGE-SPECIFIC REQUIREMENTS**

---

## **A. HOME PAGE (`/`)**

**Hero Section:**

- Layout: Flex (image left, text right)
- Image:
    - Type: Circular profile image (border-radius: 50%)
    - Size: 300-350px diameter
    - Animation: Rotating border (360deg, 3s, infinite)
    - Border: 3-4px solid color dengan opacity
- Profile Info:
    - Name: Large heading (48px, bold)
    - Title/Profession: Dynamic/Animated text
        - Multiple professions cycling (2-3 detik transition)
        - Fade in/out animation
        - Array dari: ["Photographer", "Writer", "Investigative Reporter", "Programmer"]
    - Bio: 2-3 lines of text description
    - Social Icons: Facebook, Twitter, Instagram, Dribbble, TikTok
        - Hover effect: color change, scale transform

**Buttons/CTA:**

- Download CV (if applicable on home)

**Responsive:**

- Mobile: Stack vertical (image top, text bottom)
- Tablet: Adjust spacing and font sizes

---

## **B. ABOUT PAGE (`/about`)**

**Header Section:**

- Page label/badge: "ABOUT" (smaller, uppercase, accent color)
- Page title: "About Me" (large heading)

**Profile Section:**

- Large image: Full-width or 60% width with text alongside
- Name: "Adriano Smith"
- Title: "Web Developer" (professional title)

**Bio/Description:**

- 2-3 paragraph text
- Content: Personal background, experience, expertise
- Font: Body text style
- Line-height: 1.6-1.8 untuk readability

**Personal Information (Two Column Layout):**

Left Column:

- Birthday: "01.07.1990"
- Age: "32"
- Address: "Ave 11, New York, USA"
- Email: "[tokyo@gmail.com](mailto:tokyo@gmail.com)"
- Phone: "+77 022 177 05 05"

Right Column:

- Nationality: "USA"
- Study: "University of Texas"
- Degree: "Master"
- Interest: "Playing Football"
- Freelance: "Available"

**Styling:**

- Label: Bold, smaller font
- Value: Regular, accent color atau text-primary

**CTA Button:**

- "Download CV" button (center aligned or left-aligned)
- Style: White/accent background, hover effect

---

## **C. SERVICE PAGE (`/service`)**

**Header Section:**

- Page label: "SERVICES" (badge, uppercase)
- Page title: "What I Do" (large heading)

**Service Grid:**

- Layout: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gap: 24-32px
- Card design:
    - Background: Dark card (`#2a2a2a`)
    - Border: 1px solid border-color
    - Padding: 30-40px
    - Border-radius: 12px
    - Hover effect:
        - Scale: 1.02-1.05
        - Shadow increase
        - Color/text change

**Service Card Component:**

- Number: "01", "02", etc. (bold, 20px)
- Title: Service name (24px, bold)
    - Examples: "Web Design", "Content Writing", "Brand Identity", "Live Chat", "After Effects", "Mobile App"
- Description: 2-3 lines of text (14px, secondary color)
- Divider: Small horizontal line under title/description

**Total Cards:** 6 services in a 3x2 grid

**Card Behavior:**

- Smooth transition (0.3s ease-in-out)
- Hover: Lift/scale effect + color highlight

---

# **V. COMPONENT BREAKDOWN**

## **Layout Components:**

1. **Layout.tsx** (Wrapper/Main)

typescript

```tsx
Props:
- children: React.ReactNode
- title?: string
- description?: string

Returns:
- Sidebar + Header + Main content area
```

1. **Sidebar.tsx**

typescript

```tsx
Props:
- currentPage?: string
- onNavigate?: (page: string) => void

Returns:
- Logo, Menu items, Footer
```

## **Hero Components (Home):**

1. **AnimatedRing.tsx**

typescript

```tsx
Props:
- size?: number (300-400px)
- strokeWidth?: number
- duration?: number (seconds)
- color?: string

Returns:
- SVG dengan rotating animation
```

1. **ProfileImage.tsx**

typescript

```tsx
Props:
- src: string
- alt: string
- size?: number
- showRing?: boolean

Returns:
- Circular image with optional animated ring
```

1. **ProfessionCycle.tsx**

typescript

```tsx
Props:
- professions: string[]
- interval?: number (milliseconds)
- className?: string

Returns:
- Animated text cycling component
```

## **Page Components:**

1. **HomePage.tsx**
- Hero section dengan profile circular image
- Responsive layout
1. **AboutPage.tsx**
- Full page about section dengan info grid
- Download CV button
1. **ServicePage.tsx**
- Service grid dengan 6 cards
- Hover effects

## **Common Components:**

1. **SectionTitle.tsx**

typescript

```tsx
Props:
- label?: string (badge/label)
- title: string
- subtitle?: string
- centered?: boolean

Returns:
- Styled section header
```

1. **Button.tsx**

typescript

```tsx
Props:
- variant?: 'primary' | 'secondary' | 'outline'
- size?: 'sm' | 'md' | 'lg'
- children: React.ReactNode
- onClick?: () => void
- className?: string

Returns:
- Reusable button component
```

1. **ServiceCard.tsx**

typescript

```tsx
Props:
- number: string | number
- title: string
- description: string
- icon?: React.ReactNode

Returns:
- Service card dengan hover effect
```

---

# **VI. ANIMATION SPECIFICATIONS**

## **Global Animations:**

**Rotating Ring (Home - Profile Image)**

css

```css
@keyframes rotateRing {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
animation: rotateRing 3s linear infinite;
```

**Text Cycling (Home - Profession)**

css

```css
@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(10px); }
  50% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
}
animation: fadeInOut 2s ease-in-out;
```

**Card Hover**

css

```css
transition: all 0.3s ease-in-out;
&:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
}
```

**Page Transition**

javascript

```jsx
// Menggunakan Framer Motion
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.3 }}
```

---

### **VII. RESPONSIVE DESIGN BREAKPOINTS**

css

```css
-mobile: 320px  480px-tablet: 481px  768px-desktop: 769px  1200px-wide: 1201px+
```
*Tailwind breakpoints (if using Tailwind CSS):*
```
sm: 640pxmd: 768pxlg: 1024pxxl: 1280px2xl: 1536px
```

---

# **VIII. STATE MANAGEMENT & DATA STRUCTURE**

## **Example Data Structure:**

typescript

```tsx
// types/index.ts
export interface Profile {
  name: string;
  title: string;
  bio: string;
  professions: string[];
  profileImage: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface PersonalInfo {
  birthday: string;
  age: number;
  address: string;
  email: string;
  phone: string;
  nationality: string;
  study: string;
  degree: string;
  interest: string;
  freelance: string;
}
```

## **Content Configuration (CMS-ready):**

typescript

```tsx
// config/content.ts
export const content = {
  home: {
    profile: { ... },
    professions: [...]
  },
  about: {
    bio: { ... },
    personalInfo: { ... }
  },
  services: [
    { id: 1, title: "Web Design", ... },
    ...
  ]
}
```

---

# **IX. ACCESSIBILITY REQUIREMENTS**

- Semantic HTML: Gunakan `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`
- ARIA labels: Untuk interactive elements
- Focus states: Clear focus indicator untuk keyboard navigation
- Alt text: Untuk semua images
- Color contrast: Min WCAG AA standard (4.5:1 untuk text)
- Skip link: Untuk skip navigation

---

# **X. PERFORMANCE OPTIMIZATION**

- Image optimization:
    - Use Next.js `<Image>` component
    - Lazy loading untuk images di bawah fold
    - Responsive images dengan srcSet
- Code splitting:
    - Dynamic imports untuk pages
    - Lazy load components yang tidak critical
- Caching:
    - Static generation untuk pages yang tidak berubah
    - ISR (Incremental Static Regeneration) jika ada dynamic data

---

# **XI. BROWSER SUPPORT**

- Chrome: Latest
- Firefox: Latest
- Safari: Latest
- Edge: Latest
- Mobile browsers: iOS Safari 12+, Android Chrome latest

---

# **XII. CONSTRAINT - "HARUS IDENTIK SAMA"**

Untuk memastikan semua halaman **IDENTIK** (sama):

1. **Navigation & Layout:** Sidebar + Header SAMA di semua page
2. **Color Scheme:** Gunakan CSS variables/Tailwind colors yang SAMA
3. **Typography:** Font sizes, weights, line-heights SAMA di semua page
4. **Spacing:** Use consistent spacing tokens (--spacing-md, etc.)
5. **Animations:** Reuse animation keyframes dan transitions
6. **Components:** Reuse UI components (Button, Card, Section Title, etc.)
7. **Responsive:** Breakpoints dan mobile behavior SAMA
8. **Styling:** Centralize styles di global.css dan modules

**Best Practice:**

- Create shared component library
- Use Tailwind CSS utility-first approach
- Use CSS-in-JS (Tailwind) atau CSS Modules
- Keep a design system documentation

---

# **XIII. BUILD & DEPLOYMENT SETUP**

json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

**Deployment:**

- Vercel (recommended for Next.js)
- Netlify
- Self-hosted on Node.js server

---

# **XIV. SUMMARY CHECKLIST**

**Pages to Build:**

- [ ]  Home (/index) - dengan hero circular profile & profession cycling
- [ ]  About (/about) - dengan personal info grid & CV download
- [ ]  Service (/service) - dengan 6 service cards grid

**Components to Create:**

- [ ]  Layout wrapper
- [ ]  Sidebar navigation
- [ ]  AnimatedRing
- [ ]  ProfileImage
- [ ]  ProfessionCycle
- [ ]  SectionTitle
- [ ]  Button
- [ ]  ServiceCard
- [ ]  PersonalInfoGrid

**Styling:**

- [ ]  Global styles (colors, typography, spacing)
- [ ]  Layout styles (sidebar, header, responsive)
- [ ]  Animation styles (rotate, fade, hover)
- [ ]  Component styles (card, button, etc.)

**Features:**

- [ ]  Responsive design
- [ ]  Dark theme
- [ ]  Smooth animations
- [ ]  Image optimization
- [ ]  Form handling (contact page)
- [ ]  SEO optimization
- [ ]  Accessibility compliance

Ini adalah specification lengkap untuk membangun portfolio Tokyo dengan Next.js yang **identik di semua halaman dengan design yang konsisten!** 🎯