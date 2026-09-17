import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildSiteFooter } from './footer-template.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const SKIP = new Set([
  'temp-isp.html',
  'temp-ref.html',
  'temp-cursos-formativos.html',
  'temp-traducao.html',
  'temp-isr.html',
  'reference-sobre.html',
  'servicos.html',
  'instituto.html',
]);

const FOOTER_BLOCK_RE =
  /  (?:<section class="site-prefooter"[\s\S]*?)?<footer class="site-footer"[\s\S]*?<\/footer>\s*/g;
const CONTATO_FOOTER_RE = /  <footer class="contato-footer"[\s\S]*?<\/footer>\s*/g;

function stripFooter(html) {
  return html.replace(FOOTER_BLOCK_RE, '').replace(CONTATO_FOOTER_RE, '');
}

function insertFooter(html, footer) {
  const bodyStart = html.indexOf('<body');
  if (bodyStart === -1) {
    return html.replace(/(\n<\/body>)/, `\n${footer}$1`);
  }

  const bodyPart = html.slice(bodyStart);
  const containerClose = bodyPart.match(/\n\s*<\/div>\s*\n\s*<script src=/);

  if (containerClose) {
    const insertAt = bodyStart + containerClose.index + containerClose[0].indexOf('<script');
    return `${html.slice(0, insertAt)}${footer}\n  ${html.slice(insertAt)}`;
  }

  const scriptMatch = bodyPart.match(/\n\s*<script src=/);
  if (scriptMatch) {
    const insertAt = bodyStart + scriptMatch.index;
    return `${html.slice(0, insertAt)}\n${footer}${html.slice(insertAt)}`;
  }

  return html.replace(/(\n<\/body>)/, `\n${footer}$1`);
}

function syncFile(filePath, prefix) {
  if (SKIP.has(path.basename(filePath))) return false;

  let html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes('</body>')) return false;

  const footer = `${buildSiteFooter(prefix)}\n`;
  html = stripFooter(html);
  html = insertFooter(html, footer);

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
        console.log('synced', path.relative(ROOT, full));
      }
    }
  }
}

walk(ROOT);
