/**
 * Converts all remaining PNG/JPG images to WebP.
 * - Work-samples: resize to 960 wide (2× the 480px carousel display)
 * - Logos (applogos, b2c, brand): keep original dimensions, quality 90
 * - Single b2b PNG (Jama-Software.png): same logo treatment
 * Skips favicon.png and SVG files.
 */
import sharp from "sharp";
import { readdir, stat, copyFile, unlink } from "fs/promises";
import { join, basename, extname } from "path";

const kb = (n) => `${(n / 1024).toFixed(1)} KiB`;
let saved = 0;
let skipped = 0;

async function toWebP(src, dest, options = {}) {
  const { width, quality = 90 } = options;
  const { size: before } = await stat(src);

  const pipeline = sharp(src);
  if (width) pipeline.resize(width, null, { fit: "inside", withoutEnlargement: true });
  await pipeline.webp({ quality }).toFile(dest);

  const { size: after } = await stat(dest);
  const delta = before - after;
  if (delta > 0) {
    saved += delta;
    console.log(`  ✓ ${basename(src)} → ${basename(dest)}  ${kb(before)} → ${kb(after)} (-${kb(delta)})`);
  } else {
    // Already smaller as PNG keep original, delete the webp we just made
    await unlink(dest);
    skipped++;
    console.log(`  – ${basename(src)} already smaller as PNG (${kb(before)}) skipped`);
  }
}

async function processDir(dir, options = {}) {
  let files;
  try { files = await readdir(dir); } catch { return; }
  const pngs = files.filter((f) => [".png", ".jpg", ".jpeg"].includes(extname(f).toLowerCase()) && f !== "favicon.png");
  for (const f of pngs) {
    const src = join(dir, f);
    const dest = join(dir, basename(f, extname(f)) + ".webp");
    await toWebP(src, dest, options);
  }
}

// ── Work samples (displayed up to 480 px wide → serve 960 px for 2× retina) ──
console.log("\n📸 Work samples:");
await processDir("public/images/work-samples", { width: 960, quality: 83 });

// ── App logos ──
console.log("\n🔧 App logos:");
await processDir("public/logos/applogos", { quality: 90 });

// ── B2B client logos (only Jama-Software.png is PNG) ──
console.log("\n🏢 B2B logos:");
await processDir("public/logos/b2b", { quality: 90 });

// ── B2C logos ──
console.log("\n🧑 B2C logos:");
await processDir("public/logos/b2c", { quality: 90 });

// ── Brand / site logos ──
console.log("\n🏷 Brand logos:");
await toWebP("public/logo.png", "public/logo.webp", { quality: 95 });
await toWebP("public/Light Logo.png", "public/Light Logo.webp", { quality: 95 });

console.log(`\n✅ Done. Total saved: ${kb(saved)}  |  Skipped (already optimal): ${skipped}`);
