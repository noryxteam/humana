import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const BUTTON_BLOCK = /<button type="button" class="page-nav__dropdown-toggle"[^>]*>[\s\S]*?<\/button>\s*<ul class="page-nav__dropdown"[^>]*>/g;

function walk(dir, prefix) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['node_modules', 'scripts', 'css', 'js', 'assets'].includes(entry.name)) {
      walk(full, prefix + '../');
    } else if (entry.isFile() && entry.name.endsWith('.html') && !entry.name.startsWith('temp-')) {
      let html = fs.readFileSync(full, 'utf8');
      if (!html.includes('page-nav__dropdown-toggle')) continue;

      html = html.replace(BUTTON_BLOCK, `<a href="#" class="page-nav__dropdown-trigger" aria-haspopup="true" aria-expanded="false">
            Serviços
            <span class="page-nav__link-icon" data-icon="chevron-down" data-icon-size="sm"></span>
          </a>
          <ul class="page-nav__dropdown">`);

      html = html.replace(/<li role="none"><a href="([^"]+)" role="menuitem">/g, '<li><a href="$1">');
      fs.writeFileSync(full, html);
      console.log('fixed', path.relative(ROOT, full));
    }
  }
}

walk(ROOT, '');
