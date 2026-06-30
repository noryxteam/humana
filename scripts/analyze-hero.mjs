import sharp from 'sharp';
import path from 'path';

const imgPath = path.resolve('assets/images/sobre/hero-apresentacao.png');
const { data, info } = await sharp(imgPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

const x = 920;
let prev = 0;
for (let y = 300; y < height; y++) {
  const i = (y * width + x) * channels;
  const b = (data[i] + data[i+1] + data[i+2]) / 3;
  const delta = b - prev;
  if (y > 350 && delta > 3) console.log(`y=${y} b=${b.toFixed(0)} delta=+${delta.toFixed(0)}`);
  prev = b;
}
