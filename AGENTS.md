## AI Assistant Role

You are a web developer proficient in **Vite**, **Vue 3**, **CSS**, **Tailwind CSS**, and **TypeScript**. You are building a portfolio website to showcase projects. The website must be:

- **Fully responsive** on all devices (mobile, tablet, desktop)
- **Well-designed** following good UI/UX principles
- **Built with reusable Tailwind CSS configurations** to maintain consistency
- **Performant** and accessible

Always prioritize responsive design, semantic HTML, accessibility, and code reusability. Code should be **readable, maintainable, and well-organized**. Where possible, code should be **performant and simple**. Avoid overly complex implementations—prefer straightforward, maintainable solutions.

## Tech Stack

- **Vue 3.5.17** - Composition API with `<script setup>`
- **TypeScript 5.8.3** - Strict mode
- **Tailwind CSS 4.1.11** - Using `@theme` directive (v4 syntax)
- **Vite 7.0.4** - Build tool
- **pnpm 10.22.0+** - Required package manager
- **Node.js >= 24.0.0**

## Path Aliases

- `@/` → `./src/`
- `@components/` → `./src/components/`

## Component Pattern

<script setup lang="ts">
// --- IMPORTS ---
// --- VARIABLES (reactive) ---
// --- CONSTANTS ---
// --- FUNCTIONS ---
// --- WATCHERS ---
// --- LIFECYCLE HOOKS ---
</script>
<template>...</template>
<style scoped>
...
</style>

Constants should be UPPER_SNAKE_CASE. Block order must be: script, template, style

## Styling System

### CRITICAL: Use Tailwind Config Colors

**Always use** `bg-bg-dark`, `text-text`, `text-primary`, etc. (from Tailwind config)  
**Never use** hard-coded colors like `bg-gray-100`, `text-blue-500`

### Color System

- Colors defined as CSS variables in `src/style.css` (`:root` and `.dark`)
- All colors use **OKLCH format**: `oklch(lightness chroma hue)`
- Tailwind `@theme` references these variables
- Use `dark:` variant for dark mode styles

### Theme System

**Color Palettes:** 5 themes (green, orange, blue, purple, red)

- Stored in `localStorage` as `theme-palette`
- Primary color updated via: `document.documentElement.style.setProperty('--color-primary', ...)`
- Favicon changes with palette

**Dark/Light Mode:**

- Stored in `localStorage` as `theme` ('dark' or 'light')
- Applied via `.dark` class on `document.documentElement`
- Falls back to system preference

### Theme Sync Issue

Primary color defined in **3 places** (must stay in sync):

1. `src/style.css` - `:root { --color-primary: ... }`
2. `src/components/layout/AppNavigation.vue` - `THEME_COLORS.green`
3. `index.html` - inline script `themes.green`

**When modifying themes, update all three locations!**

## TypeScript

- Strict mode enabled
- Project type defined in `src/data/projects.ts`
- Path mapping matches Vite aliases

## Infrastructure

### AWS Deployment

- **S3 Bucket:** `axelkerksiek.com` - Static website hosting
- **CloudFront Distribution:** - Global CDN with SSL
- **Domain:** `axelkerksiek.com` - Route 53 hosted zone
- **Region:** `us-east-1`
- Build artifacts deployed via GitHub Actions

### CI/CD Pipeline

**Release Workflow** (`.github/workflows/release.yaml`):
- Triggers on push to `main`
- Uses semantic-release for automated versioning
- Analyzes commits using Conventional Commits
- Creates GitHub releases and Git tags
- Updates `CHANGELOG.md` and `package.json` version

**Deploy Workflow** (`.github/workflows/deploy.yaml`):
- Triggers on `release: created` event
- Builds the application (`pnpm build`)
- Uploads `dist/` to S3 bucket
- Invalidates CloudFront cache for immediate updates

### Semantic Release Configuration

- **Version bumps:**
  - `feat:` → minor version (1.0.0 → 1.1.0)
  - `fix:` → patch version (1.0.0 → 1.0.1)
  - `feat!:` or `fix!:` → major version (1.0.0 → 2.0.0)
- **No release:** `chore:`, `docs:`, `test:`, `perf:`, `ci:`
- **Branch protection:** GitHub App used to bypass branch protection rules

### GitHub Actions Setup

- **Release workflow:** Uses GitHub App for authentication
- **Secrets required:**
  - `AXEL_GH_APP_ID`
  - `AXEL_GH_APP_PRIVATE_KEY`
  - `AXEL_GH_APP_INSTALLATION_ID`
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `CLOUDFRONT_DISTRIBUTION_ID`

## Key Conventions

- PascalCase component files: `AppNavigation.vue`
- Use `<script setup lang="ts">` always
- Use `ref()` for reactive primitives
- Semantic HTML + accessibility attributes
- Lazy load images: `loading="lazy"`
- Mobile-first responsive design
