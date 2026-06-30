import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const NEW_DROPDOWN = `        <li class="page-nav__item page-nav__item--dropdown">
          <a href="#" class="page-nav__dropdown-trigger" aria-haspopup="true" aria-expanded="false">
            Serviços
            <span class="page-nav__link-icon" data-icon="chevron-down" data-icon-size="sm"></span>
          </a>
          <ul class="page-nav__dropdown">
            <li><a href="{{PREFIX}}isp.html">Interpretação Simultânea Presencial</a></li>
            <li><a href="{{PREFIX}}isr.html">Interpretação Simultânea Remota</a></li>
            <li><a href="{{PREFIX}}traducao.html">Tradução</a></li>
            <li><a href="{{PREFIX}}cursos-formativos.html">Cursos Formativos</a></li>
          </ul>
        </li>`;

const OLD_DROPDOWN = /<li class="page-nav__item page-nav__item--dropdown">[\s\S]*?<\/li>\s*(?=<li class="page-nav__item"><a href="[^"]*blog)/;

function updateFile(filePath, prefix) {
  let html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes('page-nav__item--dropdown')) return false;
  const updated = html.replace(OLD_DROPDOWN, NEW_DROPDOWN.replace(/\{\{PREFIX\}\}/g, prefix));
  if (updated === html) return false;
  fs.writeFileSync(filePath, updated);
  return true;
}

function walk(dir, prefix) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['node_modules', 'scripts', 'css', 'js', 'assets'].includes(entry.name)) {
      walk(full, prefix + '../');
    } else if (entry.isFile() && entry.name.endsWith('.html') && !entry.name.startsWith('temp-')) {
      if (updateFile(full, prefix)) console.log('updated', path.relative(ROOT, full));
    }
  }
}

walk(ROOT, '');
