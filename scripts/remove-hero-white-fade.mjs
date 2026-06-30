import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sourcePath = path.resolve('imagem/imagem 1.webp');
const outPath = path.resolve('assets/images/sobre/hero-apresentacao.webp');
const backupPath = path.resolve('assets/images/sobre/hero-apresentacao.before-defade.webp');

const FOG_START = 1100;
const FOG_MAX = 0.7;
const FOG_POWER = 1.0;
const FOG = { r: 255, g: 255, b: 255 };

const { data, info } = await sharp(sourcePath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.from(data);

function clamp(v) {
  return Math.max(0, Math.min(255, Math.round(v)));
}

function isNavyOverlay(r, g, b) {
  return r < 42 && g < 52 && b < 82;
}

function fogAlpha(x) {
  if (x <= FOG_START) return 0;
  const t = (x - FOG_START) / (width - 1 - FOG_START);
  return Math.pow(t, FOG_POWER) * FOG_MAX;
}

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];

    if (isNavyOverlay(r, g, b)) continue;

    let alpha = fogAlpha(x);
    if (alpha < 0.01) continue;

    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum < 35) alpha *= 0.35;

    out[i] = clamp((r - FOG.r * alpha) / (1 - alpha));
    out[i + 1] = clamp((g - FOG.g * alpha) / (1 - alpha));
    out[i + 2] = clamp((b - FOG.b * alpha) / (1 - alpha));
  }
}

if (fs.existsSync(outPath)) {
  fs.copyFileSync(outPath, backupPath);
}

const tmpPath = outPath.replace(/(\.\w+)$/, '-tmp$1');

await sharp(out, { raw: { width, height, channels } })
  .webp({ quality: 92 })
  .toFile(tmpPath);

fs.copyFileSync(tmpPath, outPath);
fs.unlinkSync(tmpPath);

console.log(`Saved ${width}x${height} -> ${outPath}`);
