# Lean Improvements SaaS — Design System

[![License: MIT](https://img.shields.io/badge/License-MIT-f54e00.svg)](./LICENSE)

> The shared UI template for **every Lean Improvements app**. Warm cream canvas,
> warm near-black ink, a single Cursor-Orange voltage, and JetBrains Mono on every
> code surface.

This is the **single source of truth** for the look & feel of all products built by
**Lean Improvements** (Valencia, `leanimprovements.es`). Link `styles.css`, use the
components, follow the rules below, and any new app inherits the same editorial,
Cursor-inspired aesthetic out of the box. The included example app is a *reference
implementation* — not the brand itself.

The aesthetic is **Cursor-inspired editorial**: a quietly-confident developer-tool
voice that favours a warm-cream magazine canvas over the typical dark-IDE
atmosphere.

---

## Sources

Reverse-engineered from the team's production stack and its design brief:

- **Reference codebase:** a React 19 + Vite + TailwindCSS + shadcn/ui (Radix) +
  TanStack Query app. The token truth lives in its `src/index.css` (CSS custom
  properties, light + dark) and `tailwind.config.js` (radius scale, warm-gray
  remap, shadow-less theme).
- **Design brief:** the "Cursor design analysis" (`cursor-dev` skill / *Design.md*)
  the look is based on — palette, type scale, timeline pastels, component specs.
- **Dev standards:** the team's frontend skill — shadcn-first, mandatory dark
  mode, `rounded-md` on all interactive elements, Lucide icons, ECharts for data
  viz, i18n (en/es), Cypress.

No Figma file was provided. All token values come directly from the codebase.

---

## Content fundamentals — how Lean Improvements apps write

- **Product UI language is bilingual (en / es)** via `react-i18next`; no strings
  are hard-coded. English is the reference (`en.json`), Spanish the peer (`es.json`).
- **Tone:** plain, operational, peer-to-peer. Labels are short nouns
  ("Dashboard", "Workspace", "Settings"); actions are imperative verbs
  ("Create", "Add to sprint", "Reservar diagnóstico").
- **Casing:** Sentence case for headings and body. **Eyebrows / panel labels are
  UPPERCASE** with wide `0.24em` tracking. Status badges are UPPERCASE mono.
- **Numbers carry weight:** stats are big display figures with a tiny muted
  uppercase label above. Progress as `%`.
- **Emoji:** never. The voice is clean and professional.

---

## Visual foundations

**Palette.** A warm **cream canvas** (`--lp-bg` #f7f7f4) — never pure white floor —
holding **warm near-black ink** (`--lp-ink` #26251e) for body and display alike.
Cards are pure white (`--lp-surface`) so they lift off the cream by contrast, not
shadow. The single brand voltage is **Cursor Orange** (`--lp-primary` #f54e00),
used scarcely — primary CTA, the brand diamond, focus ring, progress fill. A
five-step **AI-timeline pastel** set (peach / mint / blue / lavender / gold) is
reserved strictly for in-product agent-stage visualizations. Semantic: success
#1f8a65, error #cf2d56. Tailwind's `gray/slate/zinc/neutral` ramps are all
**remapped onto warm neutrals**, and there is a full **dark theme** (`.dark` →
warm charcoal #1f1d18).

**Type.** One sans family: **CursorGothic** (licensed) → **Inter** substitute,
plus **JetBrains Mono** on every code surface and inside badges. Display sits at
**weight 400** with negative tracking (`-0.04em`) — a magazine voice, never bold.
Scale: display-mega 72 → display-lg 36 → display-md 26 → display-sm 22 →
title 18/16 (600) → body 16/14 → caption 13 → eyebrow 11 (600, UPPER, 0.24em) →
code 13 (mono).

**Spacing & radius.** 4px base unit; **80px section rhythm**. Compact **8px**
radius on all interactive elements (`rounded-md` — the team standard), **12px** on
cards, with a softer **28px** on dashboard stat cards. Pills for badges/avatars.

**Depth.** **Hairline-only** — `box-shadow` is globally `none`. Cards, panels and
dividers are defined by 1px lines (`--lp-line` #e6e5e0, `--lp-line-strong`). White
card on cream is the only "elevation".

**Motion.** Quiet — colour/opacity tweens and `translate-y(-0.5)` lifts at
~150–300ms standard ease. Accordions use a height transition. Loaders use Lucide
`Loader2` + `animate-spin`. No bounces, no springs. Every backend action shows a
loading/skeleton state.

**Hover/press.** Nav items fill to ink when active; primary button darkens to
`--lp-primary-active` (#d04200); ghost/secondary tint with `--lp-overlay`. Focus
shows a 1–2px Cursor-Orange ring.

---

## Iconography

**[Lucide](https://lucide.dev)** is the icon system (apps use `lucide-react`).
Clean 1.5px-stroke line glyphs at 16–20px. Consume them from the Lucide CDN via
`data-lucide="…"` + `lucide.createIcons()`, or `lucide-react` in production.
**No emoji. No Unicode-character icons.**

The brand mark is a small **ink rounded square holding an orange diamond** (a
rotated square) — drawn in CSS via the `editorial-brand-mark` /
`editorial-brand-diamond` classes, set beside the **"Lean Improvements"** wordmark
with a small uppercase eyebrow (e.g. "SAAS TEMPLATE", or the app's own name).

---

## Components — we use shadcn/ui

Production components are **[shadcn/ui](https://ui.shadcn.com)** (Radix UI
primitives), themed with the tokens in this system. shadcn is copy-paste, not a
versioned dependency — so the **canonical implementation lives in each app's repo**
(`src/components/ui/*`), and that is the source of truth for component code. The
`components/core/` files here are lightweight **design references / prototype
helpers** — they mirror the look (variants, the scarce orange, `rounded-md`, states)
so designers and quick HTML mocks stay on-brand, but they are **not** the production
components. When in doubt, the repo wins.

---

## Index — what's in here

- `styles.css` — global entry point (import this). `@import`s all tokens.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `components/core/` — design-reference primitives mirroring the shadcn components:
  **Button, Badge, Card, Input, Dialog** (each with `.jsx`, `.d.ts`, `.prompt.md`)
  + component spec cards. *(Reference / prototype use — production code is shadcn
  in the app repo.)*
- `ui_kits/saas-app/` — the **reference example app** (sidebar + dashboard +
  dark-mode toggle), showing the system composed into a full product surface.
- `guidelines/*.card.html` — foundation specimen cards (Colors / Type / Spacing /
  Brand) that populate the **Design System** tab.
- `index.html` — one-page visual preview of the whole system.
- `SKILL.md` — Agent-Skill manifest for using this system in Claude Code.

---

## Preview locally — see it in the browser

To explore the tokens, guideline cards and the reference example app in the browser:

```bash
npm install
npm run dev
```

Then open **http://localhost:4173**:

- `/` — one-page visual preview of the whole system (`index.html`).
- `/ui_kits/saas-app/` — the reference example app (sidebar + dashboard + dark-mode toggle).
- `/guidelines/` and `/components/core/` — the specimen cards.

> It's a plain static server (`http-server`), so no build step. The example app uses an in-browser
> Babel transformer (dev-only) — harmless `404`s for `/favicon.ico` and
> `/.well-known/appspecific/com.chrome.devtools.json` in the terminal are just Chrome/DevTools noise.
> A proper interactive playground (Storybook) is tracked as a future task.

---

## Distribution — install straight from GitHub (no registry, no token)

This is an **open-source (MIT)** package distributed **directly from its public Git
repository** — no npm registry, no `.npmrc`, no auth token. Because it ships raw
source (there is no build step), npm can install it straight from a tagged commit.

### Use it in a product

1. Add it to `package.json`, pinned to a release tag:
   ```jsonc
   {
     "dependencies": {
       "@lean-improvements/design-system": "github:Lean-Improvements/open-design-system-li#v1.0.0"
     }
   }
   ```
   Then `npm install`. (The package **name** stays `@lean-improvements/design-system`,
   so all imports below are unchanged — only the source is the Git repo.)

   > Installing a `github:` dependency requires **git** to be available in the
   > install environment. Alpine-based CI/Docker images must `apk add --no-cache git`
   > before `npm install` / `npm ci`.

2. Import the theme once in your app entry (`main.tsx`):
   ```ts
   import "@lean-improvements/design-system/styles.css";
   ```
3. Extend the Tailwind config with the shared preset:
   ```js
   import preset from "@lean-improvements/design-system/tailwind-preset";
   export default {
     presets: [preset],
     content: [
       "./src/**/*.{ts,tsx}",
       "./node_modules/@lean-improvements/design-system/**/*.{js,jsx}",
     ],
   };
   ```
4. Run `npx shadcn@latest init` (monorepo mode) and add components — they inherit
   the tokens automatically. Production component code stays in your app's
   `src/components/ui`.

To adopt a newer version, bump the tag in the Git URL (e.g. `#v1.1.0`).

### Publish a new version (in THIS repo)

Releases are automated with **[release-please](https://github.com/googleapis/release-please)**
and driven by [Conventional Commits](https://www.conventionalcommits.org/):

- `fix: …` → **patch** (token tweak / bug fix)
- `feat: …` → **minor** (additive token / component)
- `feat!: …` or a `BREAKING CHANGE:` footer → **major** (renamed/removed token or
  changed default — consumers must adapt)

On every push to `main`, release-please opens/updates a **"chore: release x.y.z"**
PR containing the version bump + `CHANGELOG.md`. Merging that PR creates the git
tag `vX.Y.Z` and a GitHub Release automatically. No secrets are required — the
workflow uses the built-in `GITHUB_TOKEN`. Consumers then bump their Git URL tag
at their own pace.

---

> **Substitution note:** CursorGothic is a licensed typeface and is **not** shipped
> here — the open substitute **Inter** is loaded from Google Fonts (with CursorGothic
> kept first in every `--font-*` stack). JetBrains Mono is the real production mono.
> Drop CursorGothic webfont files into `assets/fonts/` + add `@font-face` rules in
> `tokens/fonts.css` to restore the exact brand type.
