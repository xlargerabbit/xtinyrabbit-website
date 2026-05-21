# AGENTS.md

This file provides guidance to Code Agents(such like claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:4321)
npm run build     # production build → dist/
npm run preview   # preview built output
```

No test suite. TypeScript type-checking via `@astrojs/check` (run as part of the build).

## Architecture

Static Astro site deployed to GitHub Pages (`xlargerabbit.github.io`) via `.github/workflows/deploy.yml` on every push to `main`.

**Content:** Blog posts live in `src/content/blog/` as Markdown files. The content collection schema (`src/content.config.ts`) requires `title`, `description`, `pubDate`, and `tags`; supports optional `updatedDate`, `heroImage`, and `draft` (drafts are filtered from listings).

**Routing:**

- `src/pages/index.astro` — home, shows recent posts
- `src/pages/blog/[slug].astro` — individual post (uses `PostLayout`)
- `src/pages/tags/[tag].astro` — filtered listing by tag
- `src/pages/rss.xml.ts` — RSS feed

**Layouts:**

- `BaseLayout` — wraps every page; handles `<head>`, theme initialization (inline script prevents FOUC), `Header`, and `Footer`
- `PostLayout` — extends `BaseLayout`; prose container for blog posts

**Styling:** No CSS framework. Design tokens are CSS custom properties in `src/styles/global.css`. Dark/light theme is driven by `data-theme` on `<html>`, toggled by `ThemeToggle.astro`, persisted to `localStorage`. Prose-specific styles live in `src/styles/prose.css`.

## Design System

Documented in `DESIGN.md`. Key constraints to respect:

- **Prose max-width:** 68ch (`--measure`). Never widen it.
- **Font roles:** Lora (`--font-body`) for all prose content; Inter (`--font-ui`) for all UI chrome; JetBrains Mono (`--font-mono`) for code. Do not cross these domains.
- **Accent color:** Signal Blue (`--color-accent`) only — used on less than 10% of any view. No second accent. No gradient text.
- **Elevation:** Flat by default. No shadows on resting elements. Header uses frosted glass (functional, not decorative).
- **Borders:** 1px `var(--color-border)` hairlines only. No decorative `border-left` stripes except on `<blockquote>`.
- **Body text floor:** Never below 18px (1.125rem) for prose.
- **Motion:** All transitions respect `prefers-reduced-motion`.

Brand references: acko.net and ciechanow.ski. Anti-references: Medium/Substack aesthetic, corporate tech blog look.

## Development Workflow

This repo uses orchestration provided by plugin `tinyspec` which manages the feature development lifecycle via auto-detection
