import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const SKIP = new Set([
  'temp-isp.html',
  'temp-ref.html',
  'temp-cursos-formativos.html',
  'temp-traducao.html',
  'temp-isr.html',
  'reference-sobre.html',
  'instituto.html',
]);

const I18N_SCRIPTS = (prefix) =>
  `  <script src="${prefix}js/i18n-common.js"></script>\n` +
  `  <script src="${prefix}js/i18n-pages.js"></script>\n` +
  `  <script src="${prefix}js/i18n.js"></script>\n`;

const I18N_RE = /  <script src="[^"]*i18n-common\.js"><\/script>\s*\n  <script src="[^"]*i18n-pages\.js"><\/script>\s*\n  <script src="[^"]*i18n\.js"><\/script>\s*\n/;

function syncFile(filePath, prefix) {
  if (SKIP.has(path.basename(filePath))) return false;
  let html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes('</body>')) return false;

  const block = I18N_SCRIPTS(prefix);

  if (I18N_RE.test(html)) {
    html = html.replace(I18N_RE, block);
  } else {
    html = html.replace(/(\s*<script src="[^"]*nav-dropdown\.js"><\/script>)/, `\n${block}$1`);
    if (!html.includes('i18n.js')) {
      html = html.replace(/(\s*<\/body>)/, `\n${block}$1`);
    }
  }

  fs.writeFileSync(filePath, html);
  return true;
}

function walk(dir, prefix = '') {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', 'scripts', 'css', 'js', 'assets', 'imagem'].includes(entry.name)) continue;
      walk(full, prefix + '../');
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      if (syncFile(full, prefix)) {
        console.log('synced i18n', path.relative(ROOT, full));
      }
    }
  }
}

walk(ROOT);
