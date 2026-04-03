# Axel's Portfolio Website

A modern, responsive portfolio website built with Vue 3, TypeScript, and Tailwind CSS v4.

![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎨 **Multiple Color Themes** - Dynamic theme switching with 5 color palettes (green, orange, blue, purple, red)
- 🌓 **Dark/Light Mode** - System preference detection with manual override
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 📱 **Fully Responsive** - Mobile-first design using Tailwind CSS v4
- 🎯 **Type-Safe** - Full TypeScript support
- 🎭 **Modern UI** - Headless UI components and FontAwesome icons
- ✅ **Code Quality** - ESLint, Prettier, CSpell and other pre-commit hooks
- 🚀 **Automated CI/CD** - Semantic versioning and automated AWS deployments

## 🛠️ Tech Stack

### Core

- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling

### Styling

- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[FontAwesome](https://fontawesome.com/)** - Icon library

### UI Components

- **[@headlessui/vue](https://headlessui.com/)** - Unstyled, accessible UI components
- **[@vueuse/core](https://vueuse.org/)** - Collection of Vue composition utilities

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

### Infrastructure

- **[AWS S3 & CloudFront](https://aws.amazon.com/)** - Static hosting and global CDN
- **[GitHub Actions](https://github.com/features/actions)** - Automated CI/CD with semantic-release

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.18.0
- **pnpm** >= 10.22.0

### Installation

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd portfolio-web-site
   ```
2. **Install dependencies**
   ```
   pnpm install
   ```
3. **Start development server**
   ```
   pnpm dev
   ```
4. **Open your browser**

## 🔁 Workflow

1. **Create a GitHub issue** and add it to the Project board — it starts in **Todo**
2. **Create a branch:** `git checkout -b feat/<issue-number>-description`
3. **Make changes** and commit using a conventional commit message
4. **Open a pull request** into `main` — the issue is linked automatically and moves to **In Progress**
5. **Merge the PR** — the issue closes, moves to **Done**, and the automation runs

## 📋 GitHub Project Issue Tracking

This project uses a GitHub Project board to track work. Issues move through the board automatically using GitHub's built-in workflow automations.

### Creating and Linking an Issue

1. **Create the issue** on GitHub and add it to the Project board — it starts in **Todo**
2. **Create a branch** using the issue number in the name:
   ```bash
   git checkout -b feat/<issue-number>-short-description
   ```
3. **Do your work and push** the branch
4. **Open a pull request** into `main`
   - A GitHub Action (`link-issue.yaml`) automatically prepends `Closes #<issue-number>` to the PR description based on the branch name
   - If the branch name doesn't contain an issue number, `Closes #` is added as a placeholder — fill in the number manually
   - The `Closes #` keyword is what tells GitHub to link the PR to the issue and close it on merge
5. **Merge the PR** — the issue closes automatically and the board moves it to **Done**

### Board Automation

The Project board has two automations enabled:

| Event | Board action |
|---|---|
| Pull request linked to issue | Issue moves to **In Progress** |
| Pull request merged | Issue moves to **Done** |

## 🌿 Branch & Commit Conventions

This project uses [semantic-release](https://semantic-release.gitbook.io/) with [Conventional Commits](https://www.conventionalcommits.org/) to automate versioning and releases on every push to `main`.

### Branch Naming

```
<type>/<issue-number>-short-description
```

Examples:

- `feat/42-update-dark-mode-colors`
- `fix/17-nav-overflow-on-mobile`
- `chore/55-upgrade-vite`

### Commit Types & Version Bumps

| Commit type | Example | Version bump |
|---|---|---|
| `feat!:` / `fix!:` | `feat!: redesign color system` | **major** (1.0.0 → 2.0.0) |
| `feat:` | `feat: add dark mode toggle` | **minor** (1.0.0 → 1.1.0) |
| `fix:` | `fix: correct nav overflow` | **patch** (1.0.0 → 1.0.1) |
| `chore(deps):` | `chore(deps): upgrade tailwind` | **patch** (1.0.0 → 1.0.1) |
| `chore:`, `docs:`, `test:`, `perf:`, `ci:` | — | no release |

## ⚙️ Automation

### On every commit (pre-commit hook via Husky)

- **ESLint** — lints staged `.ts` and `.vue` files
- **Prettier** — formats staged files
- **CSpell** — spell-checks staged files

If any check fails, the commit is rejected until the issues are resolved.

### On merge to `main` (GitHub Actions)

1. **CI workflow** — runs lint and type-check
2. **Release workflow** — semantic-release analyzes commit messages and, if a release is warranted:
   - Bumps the version in `package.json`
   - Updates `CHANGELOG.md`
   - Creates a GitHub release and Git tag
3. **Deploy workflow** — triggered by the new release:
   - Builds the app (`pnpm build`)
   - Uploads `dist/` to S3
   - Invalidates the CloudFront cache
