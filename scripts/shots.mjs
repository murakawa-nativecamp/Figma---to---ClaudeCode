#!/usr/bin/env node
/**
 * Optional screenshot-regression harness (Playwright).
 * Captures the Gallery (and each component section) to screenshots/.
 * Requires the dev server running (npm run dev) and Playwright browsers
 * (npx playwright install chromium). See docs/preview.md.
 *
 * The PRIMARY screenshot loop is the Claude Preview MCP (text-driven, no install);
 * this script is for CI / offline regression snapshots.
 */
import { mkdirSync } from "node:fs";
import { chromium } from "playwright";

const URL = process.env.PREVIEW_URL || "http://localhost:5191/";
const OUT = "screenshots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: "networkidle" });
await page.screenshot({ path: `${OUT}/gallery-full.png`, fullPage: true });

for (const h of await page.locator("h2").all()) {
  const name = (await h.textContent())?.split(" ")[0]?.toLowerCase() ?? "section";
  const section = h.locator("xpath=ancestor::section[1]");
  if (await section.count()) await section.screenshot({ path: `${OUT}/section-${name}.png` });
}

await browser.close();
console.log(`wrote screenshots to ${OUT}/`);
