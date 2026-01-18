/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1a1a1a',
        'secondary-dark': '#2a2a2a',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'accent': '#00d4ff',
        'border-color': '#404040',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 8px rgba(0, 0, 0, 0.15)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.2)',
        'xl': '0 12px 24px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}
