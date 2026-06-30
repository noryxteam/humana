import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TARGET_WIDTH = 3840;
const blogDir = path.resolve('assets/images/blog');
const outputDir = path.join(blogDir, '4k');

await fs.promises.mkdir(outputDir, { recursive: true });

const files = fs
  .readdirSync(blogDir)
  .filter((file) => /^post-.*\.(jpe?g|png)$/i.test(file));

for (const file of files) {
  const input = path.join(blogDir, file);
  const output = path.join(outputDir, file.replace(/\.png$/i, '.jpg'));
  const meta = await sharp(input).metadata();

  if (!meta.width || !meta.height) {
    console.log(`skip ${file}: metadata unavailable`);
    continue;
  }

  if (meta.width >= TARGET_WIDTH && fs.existsSync(output)) {
    console.log(`skip ${file}: already ${meta.width}x${meta.height}`);
    continue;
  }

  await sharp(input)
    .resize(TARGET_WIDTH, null, {
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    })
    .sharpen({ sigma: 0.85, m1: 0.55, m2: 0.35 })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(output);

  const after = await sharp(output).metadata();
  console.log(`${file}: ${meta.width}x${meta.height} -> ${after.width}x${after.height}`);
}
