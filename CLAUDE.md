# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev       # Start dev server on http://localhost:3000
npm run build     # Production build
npm run generate  # Static site generation
npm run preview   # Preview production build
```

## Project Overview

Nuxt 4 application for an Hogwarts role-play educational platform about symbology (Russian language content). Built with TypeScript, Vue 3, and Tailwind CSS with a custom academic design system.

## Architecture

### Nuxt 4 App Directory Structure

All application code lives in the `app/` directory:

- **[app/pages/](app/pages/)** - File-based routing (welcome.vue → /welcome, index.vue → /)
- **[app/layouts/](app/layouts/)** - Two layouts:
  - `default.vue` - Includes Header navigation (most pages)
  - `clean.vue` - Minimal layout (index page only)
- **[app/components/](app/components/)** - Components with flat structure + domain subdirectories
  - Top-level: Shared UI components (Header, HeaderLink, LectureCard)
  - `lecture-blocks/` - Domain-specific lecture display components
- **[app/app.vue](app/app.vue)** - Root component with global background effects (paper texture + vignette)
- **app/plugins/** - Empty, ready for future plugins (Anime.js is installed but not yet integrated)

Pages select layouts using: `definePageMeta({ layout: 'clean' })`

### Component Patterns

- **Vue 3 Composition API**: All components use `<script setup lang="ts">`
- **Props**: TypeScript interfaces with `defineProps()` and `withDefaults()`
- **Nuxt Composables**: `useRoute()` and `navigateTo()` for routing, `useHead()` for meta tags
- **Composition Pattern**: `LectureBlockBase.vue` provides slot-based composition for lecture blocks

### Component Organization Pattern

Domain-specific components are grouped in subdirectories:
- `lecture-blocks/` contains: IntroBlock, Year1Block, Year3Block, Year5Block, LectureList, LectureDivider, LectureBlockBase

## Styling Architecture

### Global Effects (app.vue)

The root component applies two global background effects:

1. **Paper texture**: Image overlay with `mix-blend-mode: multiply` and 58% opacity
2. **Vignette**: Inset box-shadow creating edge darkening effect

These effects apply across all pages via the root component.

### Tailwind Custom Design System

Extensive custom theme in [tailwind.config.ts](tailwind.config.ts):

**Custom Colors** (Academic aesthetic):
```
primary-blue: #3d497b
navy: #314c75
terracotta: #c87b5f (accent color)
cream: #e8ddcc (background)
```

**Custom Fonts** (loaded via Google Fonts in app.vue):
```
font-cormorant: 'Cormorant Garamond' (serif)
font-manrope: 'Manrope' (sans-serif)
```

**Responsive Typography** (using CSS clamp()):
```
text-header-nav: clamp(1.5rem, 4vw, 2.5rem)
text-title: clamp(1.75rem, 5vw, 2.5rem)
text-body: clamp(1rem, 2vw, 1.125rem)
```

**Responsive Spacing** (using CSS clamp()):
```
px-header-x: clamp(1rem, 8vw, 6.25rem)
py-header-y: clamp(1rem, 3vw, 1.875rem)
gap-section-gap: clamp(1.5rem, 5vw, 4.375rem)
gap-title-gap: clamp(2rem, 6vw, 4.375rem)
```

**Content Max-widths**:
```
max-w-content: 83.75rem (main content container)
max-w-text-column: 47rem (text column width)
max-w-title: 43.5rem (title max-width)
max-w-image-caption: 18rem (image captions)
```

### Styling Approach

- **Primary**: Tailwind utility classes with custom design tokens
- **Scoped styles**: Used for specific effects (e.g., active link text-shadow in HeaderLink.vue)
- **No global CSS file**: All styling via Tailwind + scoped component styles

## Key Features

### Navigation System (Header + HeaderLink)

- **Active state detection**: Uses `useRoute().path` to match current route
- **Hover effects**: Video background (header-link-hover-bg.webm) on desktop only
- **Active styling**: Terracotta-colored text-shadow on active links
- Routes: Welcome, Archives, Rules, Lectures, Literature, Music

### Lecture Display System

**Hierarchical structure** by academic year:
- Intro Block (introduction to symbology)
- Year 1, Year 3, Year 5 blocks (student-level specific content)

**Component composition**:
1. `LectureBlockBase` - Container combining title image + content slot
2. `LectureList` - Numbered lists with customizable start number
3. `LectureDivider` - Gradient text dividers for content sections (Control/Practical work)
4. Year blocks - Compose these utilities together

Display layout: 2-column grid on desktop (`grid-cols-2`), single column on mobile

### Asset Organization

- **Static files**: [public/](public/) directory
- **Images**: Organized by purpose (`public/images/lectures/` for lecture title images)
- **Videos**: Interactive elements (e.g., `header-link-hover-bg.webm` for hover effects)

## TypeScript Configuration

Uses Nuxt's modular TypeScript setup - [tsconfig.json](tsconfig.json) references generated configs in `.nuxt/`:
- `tsconfig.app.json` - App-side types
- `tsconfig.server.json` - Server-side types
- `tsconfig.shared.json` - Shared types
- `tsconfig.node.json` - Node.js types

Type checking: `vue-tsc` is installed for component type checking.

## Dependencies

**Core**:
- nuxt: ^4.2.1
- vue: ^3.5.25

**Styling**:
- @nuxtjs/tailwindcss: ^6.14.0

**Animation** (installed but not yet used):
- animejs: ^3.2.2

## Notes

- Content is in Russian (Cyrillic text)
- Many pages are placeholder stubs (archives, rules, literature, music pages exist but have minimal content)
- No state management library - simple prop-based data flow
- No API integration yet - all content is hardcoded in components
