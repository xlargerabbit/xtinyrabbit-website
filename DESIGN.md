---
name: xtinyrabbit
description: A personal technical blog for engineers who read with scrutiny.
colors:
  canvas: "#ffffff"
  canvas-dim: "#f8f7f5"
  ink: "#1a1a1a"
  ink-muted: "#6b7280"
  signal: "#1d4ed8"
  signal-deep: "#1e40af"
  hairline: "#e5e7eb"
  code-surface: "#f3f4f6"
  canvas-dark: "#0f1117"
  canvas-dim-dark: "#1a1d26"
  ink-dark: "#e8eaf0"
  ink-muted-dark: "#9ca3af"
  signal-dark: "#60a5fa"
  signal-deep-dark: "#93c5fd"
  hairline-dark: "#2d3148"
  code-surface-dark: "#1e2132"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.08em"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.9em"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "28px"
  xl: "48px"
  2xl: "80px"
components:
  tag-pill:
    backgroundColor: "#e8edfb"
    textColor: "{colors.signal}"
    rounded: "{rounded.pill}"
    padding: "0.2em 0.6em"
  tag-pill-hover:
    backgroundColor: "#d4ddf8"
    textColor: "{colors.signal}"
    rounded: "{rounded.pill}"
    padding: "0.2em 0.6em"
  header:
    backgroundColor: "{colors.canvas}"
    height: "64px"
---

# Design System: xtinyrabbit

## 1. Overview

**Creative North Star: "The Signal Log"**

This is an engineer's personal record — the kind of document you keep because thinking in public has value, not because you want to be noticed. The design reflects that posture: everything recedes. The type is the interface. The chrome — header, footer, navigation — exists to orient, not to impress.

The system is deliberately low-ceremony. A reader arriving here should feel the same as opening a well-worn technical reference: no loading state to admire, no hero to pause on, no platform to acknowledge. Just text, organized clearly, with enough contrast to read for an hour. Color appears exactly once in any meaningful quantity, as a signal for what can be acted on. Everything else is ink on a quiet surface.

This system explicitly rejects the Medium and Substack aesthetic — the indistinguishable platform look, the engagement widgets, the "clap" energy. It rejects the corporate tech blog: committee-approved, risk-neutral, nobody-home design. Both errors share the same root: design that serves the platform or the org, not the writing.

**Key Characteristics:**
- Restrained color strategy: one Signal Blue on near-white and near-black surfaces
- Dual font role: Lora for thought, Inter for navigation — never swapped
- Flat elevation: hairline borders and tonal surfaces carry all structural weight
- Prose-width constraint: 68ch, enforced everywhere
- Full dark/light theme parity — contrast requirements hold in both modes

## 2. Colors: The Signal Palette

A single accent on two quiet surfaces. The palette has nothing to prove.

### Primary
- **Signal Blue** (`#1d4ed8` light / `#60a5fa` dark): Every interactive element — links, tag pills, focus indicators. Used on less than 10% of any given view. Its scarcity is its authority.
- **Signal Deep** (`#1e40af` light / `#93c5fd` dark): Hover state for Signal Blue only. Never used at rest.

### Neutral
- **Canvas** (`#ffffff`): Page background, light mode. Not pure white in spirit — paired always with Canvas Dim to avoid isolation.
- **Canvas Dim** (`#f8f7f5`): Subtle off-white with a faint warmth. Table headers, code block backgrounds (via Code Surface). The thermal layer between Canvas and the page temperature.
- **Code Surface** (`#f3f4f6` light / `#1e2132` dark): Inline code and code block backgrounds. Technical content deserves its own surface.
- **Ink** (`#1a1a1a` light / `#e8eaf0` dark): All body text. Not black — just close enough.
- **Ink Muted** (`#6b7280` light / `#9ca3af` dark): Metadata, timestamps, reading time, nav links at rest. The quiet voice.
- **Hairline** (`#e5e7eb` light / `#2d3148` dark): All borders and dividers. At 1px, they define space without declaring it.
- **Void** (`#0f1117`): Dark mode page background. Slightly blue-shifted, not neutral gray — it reads as a deliberate surface, not an absent one.
- **Void Dim** (`#1a1d26`): Dark mode subtle background. Carries the same role as Canvas Dim.

### Named Rules
**The One Voice Rule.** Signal Blue appears on less than 10% of any view. Its scarcity is the point — when it appears, it means something. Do not introduce a second accent color.

**The Dual Surface Rule.** Light mode uses Canvas (#ffffff) and Canvas Dim (#f8f7f5) together. A page that uses only Canvas reads as unintentionally bare. Use Canvas Dim for code blocks, table headers, and section backgrounds to create tonal rhythm without introducing color.

## 3. Typography

**Prose Font:** Lora, Georgia, serif
**UI / Chrome Font:** Inter, system-ui, sans-serif
**Code Font:** JetBrains Mono, monospace

**Character:** Lora carries the thought. Inter carries the navigation. JetBrains Mono signals the technical. The split is structural, not aesthetic — each font has a specific domain and must not trespass into the other's territory. The result is a clear register distinction: you always know whether you're reading content or interface.

### Hierarchy
- **Display** (Inter 600, 3rem, 1.1 line-height, -0.03em): The hero wordmark "xtinyrabbit" on the home page. Appears once per session. The loudest element in the system.
- **Headline** (Inter 600, 2.25rem, 1.2 line-height, -0.02em): Post titles (h1 in PostLayout). The primary reading entry point.
- **Title** (Inter 600, 1.5rem, 1.3 line-height): In-prose section headers (h2, h3). Signposts, not content.
- **Body** (Lora 400, 1.125rem/18px, 1.75 line-height, max 68ch): All prose content. The primary reading experience.
- **Label** (Inter 500, 0.875rem/14px, 0.08em letter-spacing, uppercase): Section markers ("Recent posts"), navigation links. Muted by default.
- **Mono** (JetBrains Mono 400, 0.9em relative, 1.7 line-height): All code — inline and block. Never used for UI elements.

### Named Rules
**The Serif/Sans Split Rule.** Lora belongs to prose. Inter belongs to chrome. Prose headings use Inter — they are signposts inside the reading flow, not content itself. Never put UI labels or navigation in Lora.

**The Measure Rule.** Prose content has a hard maximum of 68ch. No exceptions for "just this one section." The measure is a reading contract with the visitor.

**The Scale Floor Rule.** Body text never goes below 18px (1.125rem). This is a reference blog read by people who came for the depth — don't make them squint.

## 4. Elevation

This system is flat by default. No decorative shadows exist at rest. Structural depth comes from three sources:

1. **Tonal difference** — Canvas vs Canvas Dim, Void vs Void Dim. One step of background lightness creates all the section distinction the design needs.
2. **Hairline borders** — 1px, `--color-hairline`. Post card dividers, table cells, section separators. Present everywhere structure needs to be implied.
3. **Frosted glass header** — 85% canvas opacity with 12px backdrop blur. The one exception in the system, present to maintain header legibility over scrolled content. Not decorative; functional.

### Shadow Vocabulary
The system defines two shadows but uses neither decoratively in the current component set:
- **Ambient Low** (`0 1px 3px rgba(0,0,0,0.08)`): Available for future hover lift states. If a card gains hover interaction, this is its elevation signal.
- **Ambient Mid** (`0 4px 12px rgba(0,0,0,0.10)`): Reserved for true modal-level elevation (dialogs, popups). Do not use below that threshold.

### Named Rules
**The Flat-by-Default Rule.** No element has a shadow at rest. Shadows appear only as a response to state: hover lift, focus elevation, or modal context. An ambient shadow on a resting card is decoration pretending to be depth — prohibited.

## 5. Components

### Header
The system's only persistent structural element. Deliberately minimal — its job is to recede once a post begins.
- **Style:** Sticky, 64px height, frosted glass (`color-mix(in srgb, canvas 85%, transparent)` + `backdrop-filter: blur(12px)`), 1px hairline border-bottom
- **Wordmark:** Inter 600, 1.25rem, -0.01em, Ink at rest — transitions to Signal Blue on hover (150ms ease). No underline on hover. The brand mark is a navigation element, not a logo treatment.
- **Nav links:** Inter 500, 0.875rem, Ink Muted at rest — transitions to Ink on hover. No underline. No active-page indicator. The current page is understood from context.
- **Mobile:** Nav collapses entirely below 640px. Only wordmark and theme toggle remain.

### Post Card
No card. A post listing is a list — not a grid of cards.
- **Style:** No background, no border-radius, no shadow. 1.75rem vertical padding. 1px hairline border-bottom only (last child: none).
- **Title:** Inter 600, 1.5rem, Ink at rest — transitions to Signal Blue on hover.
- **Description:** Lora 400, Ink Muted, 2-line clamp.
- **Metadata:** Inter, 0.875rem, Ink Muted, separator dot at 0.4 opacity.

### Tag Pill
The only element with a background color beyond Canvas and Canvas Dim.
- **Style:** Signal Blue text, ~10% signal-tinted background, ~25% signal-tinted 1px border, pill radius (999px)
- **Padding:** 0.2em 0.6em
- **Typography:** Inter 500, 0.75rem (--text-xs)
- **Hover:** Background deepens to ~18% tint. No scale change, no shadow.
- **Note:** Color-mix values are computed: `color-mix(in srgb, var(--color-accent) 10%, transparent)` for background; `color-mix(in srgb, var(--color-accent) 25%, transparent)` for border. The frontmatter approximates these as static hex.

### CTA / Inline Link
The site's primary call-to-action is a plain text link with an arrow suffix — not a button.
- **Style:** Signal Blue, no background, no border, no radius. Arrow glyph (→) as text content.
- **Hover:** Underline appears (`text-underline-offset: 3px`). No background shift.
- **Typography:** Inter 500, 0.875rem.

### Blockquote
The one in-prose component with a structural border — and the one permitted exception to the no-side-stripe rule, because it signals quotation, not decoration.
- **Style:** 3px Signal Blue `border-left`, 1.25rem left padding, Ink Muted text, italic.
- **Rule:** This is a semantic pattern (quotation), not a decorative one. The 3px border-left is tolerated here because it communicates meaning. Do not apply this treatment to any non-blockquote element.

### Theme Toggle
An icon-only button (sun/moon, Feather icons) in the header.
- **Style:** No background at rest, no border. Icon strokes in Ink Muted.
- **Hover:** Background tint appears; icon transitions to Ink.

## 6. Do's and Don'ts

### Do:
- **Do** keep Signal Blue below 10% of any view's surface area. Its rarity is its authority.
- **Do** use Lora for all prose content and Inter for all UI chrome. The split is non-negotiable — it communicates register distinction at a glance.
- **Do** constrain prose to 68ch. Longer lines break the reading contract.
- **Do** use 1px hairlines to define structure. `border-bottom: 1px solid var(--color-border)` is the system's primary spatial tool.
- **Do** ensure WCAG AA contrast holds independently in both light and dark themes.
- **Do** respect `prefers-reduced-motion` — all transitions should be `0ms` when reduced motion is set.
- **Do** use Canvas Dim and Void Dim to create tonal rhythm without adding color.

### Don't:
- **Don't** make this look like Medium or Substack. No platform aesthetic, no engagement widgets ("claps", reactions, follow counts), no hero-image-plus-byline card layout. The writing is the product; the platform is not.
- **Don't** produce a corporate tech blog aesthetic — sanitized, brand-neutral, committee-approved. The design should read as a person's work, not a company's content strategy.
- **Don't** add a second accent color. One voice only.
- **Don't** apply `border-left` as a decorative stripe on cards, callouts, or list items. The blockquote is the single permitted exception, and it's semantic.
- **Don't** use gradient text (`background-clip: text`). Signal Blue is used solid, or not at all.
- **Don't** add glassmorphism decoratively. The header's frosted glass is functional (legibility over scroll); any other use is decoration.
- **Don't** add shadows to resting elements. Shadow-sm and shadow-md are state shadows, not ambient ones.
- **Don't** set prose font size below 18px. Lora at small sizes loses its character and readability suffers.
- **Don't** put Lora on UI elements (nav links, labels, buttons). It belongs to content, not chrome.
- **Don't** use the hero-metric template: big number, small label, supporting stats, gradient accent. This is a writing site, not a SaaS landing page.
