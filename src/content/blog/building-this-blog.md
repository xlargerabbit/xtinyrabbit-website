---
title: "Building This Blog with Astro and GitHub Pages"
description: "A walkthrough of the stack behind xlargerabbit.github.io — Astro, vanilla CSS design tokens, and a zero-config CI pipeline."
pubDate: 2026-05-20
tags: [astro, github-pages, css, devops]
---

The best way to understand a tool is to build something real with it. I've been watching [Astro](https://astro.build) mature for a couple of years and this blog was the nudge I needed to actually use it.

## Why Astro

My requirements were simple:

1. Write posts in Markdown
2. Zero JavaScript shipped to the reader by default
3. Full control over the HTML/CSS output
4. Deploy automatically on every push

Astro satisfies all four. It ships zero client JS unless you explicitly add an interactive island, its content collections give you a typed schema for frontmatter, and the `withastro/action` GitHub Action deploys to Pages in under 60 seconds.

## The CSS approach

I considered Tailwind. I always consider Tailwind. In the end I went with vanilla CSS and custom properties for two reasons:

1. **Theming is trivial** — dark mode is a single `[data-theme="dark"]` block that overrides the same variables. No Tailwind dark: prefix on every class.
2. **The output is readable** — the generated HTML has class names like `container` and `prose`, not `flex flex-col gap-4 text-sm font-medium`.

The full design token system lives in `src/styles/global.css`. There are roughly 25 variables covering color, typography, spacing, and shadow.

## Dark mode without flash

The classic dark mode flash happens when the page renders before the theme preference is known. The fix is an inline `<script>` that runs synchronously before the first paint:

```js
const theme = localStorage.getItem('theme')
  ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.dataset.theme = theme;
```

Because it's inline (not deferred), it runs before any CSS is applied. No flash.

## CI pipeline

The GitHub Actions workflow uses the official `withastro/action@v2` to build and `actions/deploy-pages@v4` to deploy. Total lines of YAML: 32. It runs on every push to `main` and on manual trigger.

```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:
```

## What's next

I want to add a table of contents to longer posts and eventually an `/archive` page grouped by year. Both are straightforward Astro additions — I'll write about them when I get there.
