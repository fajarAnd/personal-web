# Build common reusable components

| Field | Value |
|-------|-------|
| **ID** | personal-web-8 |
| **Type** | task |
| **Status** | open |
| **Priority** | medium |
| **Created** | 2026-01-18 |
| **Labels** | |
| **Parent** | [[personal-web-1]] |

## Description

Build komponen-komponen reusable yang digunakan di berbagai halaman untuk memastikan konsistensi design.

### Components to Build:

**1. SectionTitle.tsx**
```typescript
Props:
- label?: string (badge/label)
- title: string
- subtitle?: string
- centered?: boolean

Returns:
- Styled section header dengan badge dan title
```

**2. Button.tsx**
```typescript
Props:
- variant?: 'primary' | 'secondary' | 'outline'
- size?: 'sm' | 'md' | 'lg'
- children: React.ReactNode
- onClick?: () => void
- className?: string

Returns:
- Reusable button component dengan variants
```

**3. SocialIcons.tsx**
```typescript
Props:
- links: SocialLink[]
- className?: string

Returns:
- Social media icons dengan hover effects
- Icons: Facebook, Twitter, Instagram, Dribbble, TikTok
```

**4. Common Types (types/index.ts)**
```typescript
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

## Notes

Reference spec: Section V - COMPONENT BREAKDOWN (Common Components)
