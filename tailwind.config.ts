import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3d497b',
        'navy': '#314c75',
        'gray-blue': '#6a7b8f',
        'terracotta': '#c87b5f',
        'terracotta-pale': '#D4A46A',
        'cream': '#e8ddcc',
      },
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'header-nav': 'clamp(1.5rem, 4vw, 2.5rem)',
        'title': 'clamp(1.75rem, 5vw, 2.5rem)',
        'body': 'clamp(1rem, 2vw, 1.125rem)',
      },
      spacing: {
        'header-x': 'clamp(1rem, 8vw, 6.25rem)',
        'header-y': 'clamp(1rem, 3vw, 1.875rem)',
        'section-gap': 'clamp(1.5rem, 5vw, 4.375rem)',
        'title-gap': 'clamp(2rem, 6vw, 4.375rem)',
      },
      maxWidth: {
        'content': '83.75rem',
        'text-column': '47rem',
        'title': '43.5rem',
        'image-caption': '18rem',
      },
    },
  },
  plugins: [],
} satisfies Config
