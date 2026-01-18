# Implement About page

| Field | Value |
|-------|-------|
| **ID** | personal-web-6 |
| **Type** | task |
| **Status** | open |
| **Priority** | high |
| **Created** | 2026-01-18 |
| **Labels** | |
| **Parent** | [[personal-web-1]] |

## Description

Implement halaman About dengan bio, personal information grid (two-column layout), dan Download CV button.

### Components to Build:

**1. AboutPage.tsx**
- Header Section:
  - Page label/badge: "ABOUT" (uppercase, accent color)
  - Page title: "About Me" (large heading)
- Profile Section:
  - Large image: Full-width atau 60% width
  - Name: "Adriano Smith"
  - Title: "Web Developer"
- Bio/Description:
  - 2-3 paragraph text
  - Personal background, experience, expertise
  - Line-height: 1.6-1.8 untuk readability

**2. PersonalInfoGrid.tsx**
- Two-column layout (responsive: 1-column pada mobile)
- Left Column:
  - Birthday: "01.07.1990"
  - Age: "32"
  - Address: "Ave 11, New York, USA"
  - Email: "tokyo@gmail.com"
  - Phone: "+77 022 177 05 05"
- Right Column:
  - Nationality: "USA"
  - Study: "University of Texas"
  - Degree: "Master"
  - Interest: "Playing Football"
  - Freelance: "Available"
- Styling:
  - Label: Bold, smaller font
  - Value: Regular, accent color/text-primary

**3. CTA Button:**
- "Download CV" button (center/left-aligned)
- Style: White/accent background, hover effect
- Link to public/cv/resume.pdf

## Notes

Reference spec: Section IV.B - ABOUT PAGE
