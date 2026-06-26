#!/usr/bin/env node
/**
 * Two-part gate (run by `npm run validate`, and by CI):
 *  1. tokens.json structural validity (parse + required sections + value types).
 *  2. NO-HARDCODE lint: component source under src/components must not contain raw
 *     hex colors, raw <n>px values, or rgb()/rgba()/hsl() literals. Every visual
 *     value must reference a CSS custom property via var(--...).
 *
 * tokens.css is the ONLY file allowed to hold raw values (it is generated).
 * To intentionally allow a raw value on a line, append a `/* token-exempt *​/` comment.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

// ---------- Part 1: tokens.json structural validity ----------
let data;
try {
  data = JSON.parse(readFileSync(join(ROOT, "tokens/tokens.json"), "utf8"));
} catch (e) {
  console.error(`✗ cannot parse tokens/tokens.json: ${e.message}`);
  process.exit(1);
}
const requireKey = (obj, key, label) => {
  if (obj == null || typeof obj !== "object" || !(key in obj)) errors.push(`missing required key: ${label}`);
};
for (const k of ["color", "spacing", "radius", "iconSize", "typography", "elevation", "borderWidth"]) requireKey(data, k, k);
if (data.color) for (const k of ["base", "primitive", "semantic"]) requireKey(data.color, k, `color.${k}`);

const checkColorMap = (map, label) => {
  for (const [name, v] of Object.entries(map || {})) {
    if (v && v.value === undefined && v.type) continue; // gradient/composite
    const val = v && v.value;
    if (typeof val !== "string" || !/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(val))
      errors.push(`bad color value: ${label}.${name} = ${JSON.stringify(val)}`);
  }
};
checkColorMap(data.color?.primitive, "color.primitive");
checkColorMap(data.color?.semantic, "color.semantic");

// ---------- Part 2: no-hardcode lint over component source ----------
const COMPONENTS = join(ROOT, "src/components");
const walk = (dir) => {
  let out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out = out.concat(walk(p));
    else if (/\.(css|tsx|ts)$/.test(name) && !/\.figma\.(ts|tsx)$/.test(name)) out.push(p);
  }
  return out;
};
const HEX = /#[0-9a-fA-F]{3,8}\b/;
const PX = /(?<![\w-])\d*\.?[1-9]\d*px\b/; // any non-zero px literal
const FUNC_COLOR = /\b(rgb|rgba|hsl|hsla)\s*\(/;
let files = [];
try { files = walk(COMPONENTS); } catch { /* no components yet */ }
for (const file of files) {
  const lines = readFileSync(file, "utf8").split("\n");
  let inBlockComment = false;
  lines.forEach((raw, i) => {
    let line = raw;
    if (inBlockComment) { if (line.includes("*/")) { inBlockComment = false; line = line.slice(line.indexOf("*/") + 2); } else return; }
    line = line.replace(/\/\*.*?\*\//g, "");          // strip inline block comments
    if (line.includes("/*")) { inBlockComment = true; line = line.slice(0, line.indexOf("/*")); }
    line = line.replace(/\/\/.*$/, "");                // strip line comments
    if (/token-exempt/.test(raw)) return;
    const rel = relative(ROOT, file);
    if (HEX.test(line)) errors.push(`hardcoded hex: ${rel}:${i + 1}  →  ${raw.trim()}`);
    if (PX.test(line)) errors.push(`hardcoded px: ${rel}:${i + 1}  →  ${raw.trim()}`);
    if (FUNC_COLOR.test(line)) errors.push(`hardcoded color fn: ${rel}:${i + 1}  →  ${raw.trim()}`);
  });
}

if (errors.length) {
  console.error("✗ validation failed:");
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log(`✓ tokens.json valid · ${files.length} component file(s) scanned · 0 hardcoded values`);
