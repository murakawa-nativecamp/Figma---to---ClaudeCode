#!/usr/bin/env node
/**
 * SINGLE SOURCE → derived artifacts.
 * Reads tokens/tokens.json (the only place values live — synced from the Figma
 * DS file DKl4vZ6OAtXYhuvMHbWkRZ) and generates:
 *   - src/styles/tokens.css        CSS custom properties consumed by every component
 *   - tokens/design-tokens.json    flat { "token.path": "resolvedValue" } map
 *
 * Hand-editing the outputs is forbidden. Re-run:  npm run tokens
 * Naming convention is identical to the upstream APP---design.md generator so the
 * --color-* / --type-* variable names stay stable across both repos.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = resolve(ROOT, "tokens/tokens.json");
const CSS_OUT = resolve(ROOT, "src/styles/tokens.css");
const FLAT_OUT = resolve(ROOT, "tokens/design-tokens.json");

const t = JSON.parse(readFileSync(SRC, "utf8"));
const kebab = (s) => s.replace(/[.\s/]+/g, "-").toLowerCase();

const css = [];
const flat = {};
const push = (varName, cssValue, flatKey, flatValue) => {
  css.push(`  ${varName}: ${cssValue};`);
  if (flatKey) flat[flatKey] = flatValue ?? cssValue;
};

// Resolve a token ref like "color.primitive.redorange.500" or "color.base.white"
const resolveColorRef = (ref) => {
  const parts = ref.split(".");
  // parts[0]="color", parts[1]=group, rest=key
  const grp = parts[1];
  const key = parts.slice(2).join(".");
  return t.color?.[grp]?.[key]?.value;
};

css.push("/* AUTO-GENERATED — do not edit. Source: tokens/tokens.json */");
css.push("/* Regenerate: npm run tokens   |   theme: dark */");
css.push(":root {");

// ---- colors: base, primitive, semantic ----
for (const grp of ["base", "primitive", "semantic"]) {
  for (const [k, v] of Object.entries(t.color[grp] || {})) {
    if (v && typeof v.value === "string") {
      push(`--color-${grp}-${kebab(k)}`, v.value, `color.${grp}.${k}`, v.value);
    } else if (v && v.type === "linearGradient") {
      const stops = v.stops
        .map((s) => `${resolveColorRef(s.ref)} ${Math.round(s.position * 100)}%`)
        .join(", ");
      const val = `linear-gradient(${v.angleDeg}deg, ${stops})`;
      push(`--color-${grp}-${kebab(k)}`, val, `color.${grp}.${k}`, val);
    }
  }
}

// ---- spacing / radius / border-width / icon-size (px) ----
for (const [k, v] of Object.entries(t.spacing)) push(`--spacing-${kebab(k)}`, `${v.value}px`, `spacing.${k}`, `${v.value}px`);
for (const [k, v] of Object.entries(t.radius)) push(`--radius-${kebab(k)}`, `${v.value}px`, `radius.${k}`, `${v.value}px`);
for (const [k, v] of Object.entries(t.borderWidth)) push(`--border-width-${kebab(k)}`, `${v.value}px`, `borderWidth.${k}`, `${v.value}px`);
for (const [k, v] of Object.entries(t.iconSize)) push(`--icon-size-${kebab(k)}`, `${v.value}px`, `iconSize.${k}`, `${v.value}px`);
for (const [k, v] of Object.entries(t.controlHeight)) { if (k === "$note") continue; push(`--control-height-${kebab(k)}`, `${v.value}px`, `controlHeight.${k}`, `${v.value}px`); }

// ---- typography (family / size / weight / line-height) ----
for (const [k, v] of Object.entries(t.typography)) {
  const b = `--type-${kebab(k)}`;
  push(`${b}-family`, `"${v.fontFamily}"`, `typography.${k}.fontFamily`, v.fontFamily);
  push(`${b}-size`, `${v.fontSize}px`, `typography.${k}.fontSize`, `${v.fontSize}px`);
  push(`${b}-weight`, `${v.fontWeight}`, `typography.${k}.fontWeight`, v.fontWeight);
  push(`${b}-line-height`, `${v.lineHeightRatio}`, `typography.${k}.lineHeight`, v.lineHeightRatio);
}

// ---- elevation: drop shadows → box-shadow strings ----
for (const [k, v] of Object.entries(t.elevation)) {
  if (v.type === "dropShadow") {
    const val = `${v.offsetX}px ${v.offsetY}px ${v.blur}px ${v.spread}px ${v.color}`;
    push(`--shadow-${kebab(k.replace("shadow.", ""))}`, val, `elevation.${k}`, val);
  }
}

css.push("}");
mkdirSync(dirname(CSS_OUT), { recursive: true });
writeFileSync(CSS_OUT, css.join("\n") + "\n");
writeFileSync(FLAT_OUT, JSON.stringify(flat, null, 2) + "\n");
console.log(`wrote src/styles/tokens.css (${css.length} lines) and tokens/design-tokens.json (${Object.keys(flat).length} tokens)`);
