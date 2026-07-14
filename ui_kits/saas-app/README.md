# Example SaaS app — UI kit

A high-fidelity, click-through **reference app** built entirely on the Lean
Improvements SaaS design system. It shows how the tokens, editorial app-shell
classes and core components compose into a real product surface — use it as the
starting point when spinning up a new app.

## Files
- `index.html` — interactive shell. Sidebar navigation switches the main view;
  the top-bar moon/sun button toggles **dark mode** (`.dark` on `<html>`).
- `Sidebar.jsx` — brand mark, editorial nav and the user footer.
- `DashboardScreen.jsx` — page header, four stat cards (28px radius, tinted icon
  tiles), and a data table card with status badges + progress bars.

## Notes
- Icons are **Lucide**, loaded from CDN via `data-lucide` attributes —
  `lucide.createIcons()` runs after each render.
- This is a cosmetic recreation, not production code; non-dashboard views are stubs.
- The example content (epics / OKRs) comes from the reference implementation at
  `LeanPortfolio/apps/frontend` — swap it for your own product's nouns.
