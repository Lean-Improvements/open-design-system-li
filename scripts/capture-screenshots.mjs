/**
 * Capture README screenshots from the static showcase.
 *
 * Uses playwright-core driving your system-installed Google Chrome
 * (channel: "chrome") — no bundled browser download. Spins up the same
 * static server as `npm run dev`, shoots each section in light + dark, and
 * writes PNGs to docs/screenshots/.
 *
 *   npm run screenshots
 *
 * Requires: Google Chrome installed, and `npm install` (playwright-core +
 * http-server are devDependencies).
 */
import { chromium } from "playwright-core";
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "docs", "screenshots");
const PORT = 4178;
const BASE = `http://localhost:${PORT}`;

mkdirSync(OUT, { recursive: true });

// Serve the repo root statically (same as `npm run dev`).
const server = spawn(
  process.execPath,
  [join(root, "node_modules", "http-server", "bin", "http-server"), ".", "-p", String(PORT), "-c-1", "--silent"],
  { cwd: root, stdio: "ignore" }
);

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function run() {
  await wait(1200); // let the server boot

  const browser = await chromium.launch({ channel: "chrome" });
  const ctx = await browser.newContext({ viewport: { width: 1180, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();

  const ready = async () => {
    await page.waitForLoadState("networkidle").catch(() => {});
    await page.evaluate(async () => { await document.fonts.ready; });
    await wait(500);
  };
  const shot = async (sel, name) => {
    const el = await page.$(sel);
    if (!el) { console.warn("! selector not found:", sel); return; }
    await el.screenshot({ path: join(OUT, name) });
    console.log("✓", name);
  };

  // ── Showcase (index.html) — light ──
  await page.goto(`${BASE}/index.html`, { waitUntil: "load" });
  await ready();
  await page.screenshot({ path: join(OUT, "hero.png"), fullPage: true });
  console.log("✓ hero.png");
  await shot("section:nth-of-type(1)", "colors.png");
  await shot("section:nth-of-type(2)", "type.png");
  await shot("section:nth-of-type(3)", "spacing.png");
  await shot("section:nth-of-type(4) .panel", "components.png");
  await shot("section:nth-of-type(5) .scenes", "dialogs.png");

  // ── Showcase — dark ──
  await page.evaluate(() => document.documentElement.classList.add("dark"));
  await wait(400);
  await page.screenshot({ path: join(OUT, "hero-dark.png"), fullPage: true });
  console.log("✓ hero-dark.png");

  // ── Charts (ECharts, brand-themed) ──
  await page.goto(`${BASE}/charts.html`, { waitUntil: "load" });
  await ready();
  await wait(900); // let ECharts render to canvas
  await shot("#donut-card", "chart-donut.png");
  await shot("#bar-card", "chart-bar.png");

  // ── Reference app (dashboard) ──
  await page.goto(`${BASE}/ui_kits/saas-app/index.html`, { waitUntil: "load" });
  await ready();
  await wait(1000); // in-browser Babel compiles the JSX
  await page.screenshot({ path: join(OUT, "dashboard.png"), fullPage: true });
  console.log("✓ dashboard.png");

  await browser.close();
}

run()
  .catch((err) => { console.error(err); process.exitCode = 1; })
  .finally(() => server.kill());
