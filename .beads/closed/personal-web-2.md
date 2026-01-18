# Setup Next.js project structure and dependencies

| Field | Value |
|-------|-------|
| **ID** | personal-web-2 |
| **Type** | task |
| **Status** | closed |
| **Priority** | critical |
| **Created** | 2026-01-18 |
| **Labels** | |
| **Parent** | [[personal-web-1]] |

## Description

Initialize Next.js project dengan TypeScript dan install semua dependencies yang diperlukan sesuai spec.

### Tasks:
- Initialize Next.js 14 project dengan TypeScript
- Setup folder structure (src/, components/, pages/, styles/, hooks/, types/, utils/)
- Install core dependencies: next, react, react-dom, typescript
- Install UI libraries: framer-motion, react-icons, tailwindcss, autoprefixer, postcss
- Install form libraries: react-hook-form, zod
- Install utilities: classnames, clsx
- Setup dev dependencies dan ESLint config
- Configure next.config.js, tsconfig.json, tailwind.config.js
- Create folder structure untuk public/ (images/, cv/)

### Dependencies to Install:
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "framer-motion": "^10.16.0",
    "react-icons": "^4.12.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "classnames": "^2.3.2",
    "clsx": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "eslint": "^8.50.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

## Notes

Reference spec: Section II - DEPENDENCY & LIBRARY REQUIREMENTS
