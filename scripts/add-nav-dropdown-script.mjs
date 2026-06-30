import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['node_modules', 'scripts'].includes(entry.name)) {
      walk(full);
    } else if (entry.isFile() && entry.name.endsWith('.html') && !entry.name.startsWith('temp-')) {
      let html = fs.readFileSync(full, 'utf8');
      if (!html.includes('nav-dropdown.js') && html.includes('page-nav')) {
        const depth = path.relative(ROOT, dir).split(path.sep).filter(Boolean).length;
        const prefix = depth > 0 ? '../'.repeat(depth) : '';
        html = html.replace(
          /<script src="[^"]*icons\.js"><\/script>/,
          `<script src="${prefix}js/nav-dropdown.js"></script>\n  <script src="${prefix}js/icons.js"></script>`
        );
        fs.writeFileSync(full, html);
        console.log('added nav-dropdown to', path.relative(ROOT, full));
      }
    }
  }
}

walk(ROOT);
