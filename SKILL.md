---
name: lean-improvements-saas-design
description: Use this skill to generate well-branded interfaces and assets for ANY Lean Improvements SaaS app, either for production or throwaway prototypes/mocks. This is the shared SaaS design-system template — essential design guidelines, colors, type, fonts, and UI kit components for the Cursor-inspired editorial aesthetic used across all the team's products.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

This is the **shared template for all Lean Improvements apps** — not a single
product. When building a new app, link `styles.css`, reuse the core components, and
keep the example app in `ui_kits/saas-app/` as a starting point.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view — link `styles.css` for the
real tokens. If working on production code, copy assets and read the rules here to
become an expert (React 19 + Tailwind + shadcn/ui, Lucide icons, mandatory dark
mode, `rounded-md` interactive elements, i18n en/es).

Key invariants: warm cream canvas (never pure white floor), warm near-black ink,
Cursor Orange (#f54e00) used scarcely, display type at weight 400 with negative
tracking, JetBrains Mono on every code surface, hairline-only depth (no shadows),
AI-timeline pastels scoped to in-product agent visualizations only.

If the user invokes this skill without other guidance, ask what app or surface they
want to build, ask a few questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
