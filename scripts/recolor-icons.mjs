import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const IMAGEM = path.join(ROOT, 'imagem');

const COLOR = { r: 0, g: 102, b: 146 };
const ICONS = ['1 icone.png', '2 icone.png', '3 icone.png'];

async function recolorIcon(filename) {
  const input = path.join(IMAGEM, filename);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(data.length);

  for (let i = 0; i < info.width * info.height; i++) {
    const o = i * 4;
    const r = data[o];
    const g = data[o + 1];
    const b = data[o + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    if (lum > 32) {
      out[o] = COLOR.r;
      out[o + 1] = COLOR.g;
      out[o + 2] = COLOR.b;
      out[o + 3] = 255;
    } else {
      out[o + 3] = 0;
    }
  }

  await sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(input);

  console.log(`ok: ${filename}`);
}

for (const icon of ICONS) {
  await recolorIcon(icon);
}
