import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imgPath = path.resolve('assets/images/sobre/hero-apresentacao.png');
const backupPath = path.resolve('assets/images/sobre/hero-apresentacao.backup.png');
const CROP_BOTTOM = 50;

const { width, height } = await sharp(backupPath).metadata();
const newHeight = height - CROP_BOTTOM;
const tmpPath = imgPath.replace(/(\.\w+)$/, '-cropped$1');

await sharp(backupPath)
  .extract({ left: 0, top: 0, width, height: newHeight })
  .png({ compressionLevel: 9 })
  .toFile(tmpPath);

fs.copyFileSync(tmpPath, imgPath);
fs.unlinkSync(tmpPath);

console.log(`Saved ${width}x${newHeight}`);
