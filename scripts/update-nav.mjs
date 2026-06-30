import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const NAV_DROPDOWN = `        <li class="page-nav__item page-nav__item--dropdown">
          <button type="button" class="page-nav__dropdown-toggle" aria-expanded="false" aria-haspopup="true">
            Serviços
            <span class="page-nav__link-icon" data-icon="chevron-down" data-icon-size="sm"></span>
          </button>
          <ul class="page-nav__dropdown" role="menu">
            <li role="none"><a href="{{PREFIX}}isp.html" role="menuitem">Interpretação Simultânea Presencial</a></li>
            <li role="none"><a href="{{PREFIX}}isr.html" role="menuitem">Interpretação Simultânea Remota</a></li>
            <li role="none"><a href="{{PREFIX}}traducao.html" role="menuitem">Tradução</a></li>
            <li role="none"><a href="{{PREFIX}}cursos-formativos.html" role="menuitem">Cursos Formativos</a></li>
          </ul>
        </li>`;

const OLD_NAV = /<li class="page-nav__item page-nav__item--has-icon">[\s\S]*?<\/li>/g;

function updateNavInFile(filePath, prefix) {
  let html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes('page-nav__item--has-icon')) return false;
  html = html.replace(OLD_NAV, NAV_DROPDOWN.replace(/\{\{PREFIX\}\}/g, prefix));
  fs.writeFileSync(filePath, html);
  return true;
}

function walk(dir, prefix) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['node_modules', 'scripts', 'css', 'js', 'assets'].includes(entry.name)) {
      walk(full, prefix + '../');
    } else if (entry.isFile() && entry.name.endsWith('.html') && !entry.name.startsWith('temp-') && entry.name !== 'reference-sobre.html') {
      if (updateNavInFile(full, prefix)) console.log('updated', path.relative(ROOT, full));
    }
  }
}

walk(ROOT, '');
