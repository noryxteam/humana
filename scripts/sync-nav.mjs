import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildNavLogo } from './logo-template.mjs';
import { buildLangSwitcher } from './lang-switcher.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const SKIP = new Set([
  'temp-isp.html',
  'temp-ref.html',
  'temp-cursos-formativos.html',
  'temp-traducao.html',
  'temp-isr.html',
  'reference-sobre.html',
]);

const OVERLAY_PAGES = new Set([
  'index.html',
  'sobre.html',
  'historia.html',
  'blog.html',
  'cop30.html',
  'parceiros.html',
  'tao-filmes.html',
  'contato.html',
  'isp.html',
  'isr.html',
  'traducao.html',
  'cursos-formativos.html',
  'servicos.html',
]);

function activeFor(filePath) {
  const name = path.basename(filePath);
  const inBlog = filePath.includes(`${path.sep}blog${path.sep}`);

  if (name === 'index.html') return { inicio: true };
  if (name === 'sobre.html' || name === 'historia.html') return { sobre: true };
  if (name === 'blog.html' || inBlog) return { blog: true };
  if (name === 'contato.html') return { contato: true };
  if (name === 'cop30.html') return { cop30: true };
  if (name === 'parceiros.html' || name === 'tao-filmes.html') return { parceiros: true };
  if (['servicos.html', 'isp.html', 'isr.html', 'traducao.html', 'cursos-formativos.html'].includes(name)) {
    return { servicos: true };
  }
  return {};
}

function usesOverlay(filePath) {
  const name = path.basename(filePath);
  return OVERLAY_PAGES.has(name) || filePath.includes(`${path.sep}blog${path.sep}`);
}

function buildNav(prefix, active, overlay) {
  const a = (key) => (active[key] ? ' is-active' : '');
  const navClass = overlay ? 'page-nav page-nav--overlay' : 'page-nav';

  return `  <nav class="${navClass}" aria-label="Navegação principal">
    <div class="page-nav__inner">
      ${buildNavLogo(prefix)}
      <div class="page-nav__panel" id="page-nav-menu">
      <ul class="page-nav__list">
        <li class="page-nav__item${a('inicio')}"><a href="${prefix}index.html" data-i18n="nav.home">Início</a></li>
        <li class="page-nav__item${a('sobre')}"><a href="${prefix}sobre.html" data-i18n="nav.about">Sobre Nós</a></li>
        <li class="page-nav__item page-nav__item--dropdown${a('servicos')}">
          <a href="${prefix}servicos.html" class="page-nav__dropdown-trigger" aria-haspopup="true" aria-expanded="false">
            <span data-i18n="nav.services">Serviços</span>
            <span class="page-nav__link-icon" data-icon="chevron-down" data-icon-size="sm"></span>
          </a>
          <ul class="page-nav__dropdown">
            <li><a href="${prefix}servicos.html" data-i18n="nav.services">Nossos Serviços</a></li>
            <li><a href="${prefix}isp.html" data-i18n="nav.isp">Interpretação Simultânea Presencial</a></li>
            <li><a href="${prefix}isr.html" data-i18n="nav.isr">Interpretação Simultânea Remota</a></li>
            <li><a href="${prefix}traducao.html" data-i18n="nav.translation">Tradução</a></li>
            <li><a href="${prefix}cursos-formativos.html" data-i18n="nav.courses">Cursos Formativos</a></li>
          </ul>
        </li>
        <li class="page-nav__item${a('cop30')}"><a href="${prefix}cop30.html">COP30</a></li>
        <li class="page-nav__item page-nav__item--dropdown${a('parceiros')}">
          <a href="#" class="page-nav__dropdown-trigger" aria-haspopup="true" aria-expanded="false">
            <span data-i18n="nav.partners">Parceiros</span>
            <span class="page-nav__link-icon" data-icon="chevron-down" data-icon-size="sm"></span>
          </a>
          <ul class="page-nav__dropdown">
            <li><a href="${prefix}parceiros.html" data-i18n="nav.partnersAll">Nossos Colaboradores</a></li>
            <li><a href="${prefix}tao-filmes.html">TAO Filmes</a></li>
          </ul>
        </li>
        <li class="page-nav__item${a('blog')}"><a href="${prefix}blog.html" data-i18n="nav.blog">Blog</a></li>
        <li class="page-nav__item${a('contato')}"><a href="${prefix}contato.html" data-i18n="nav.contact">Contato</a></li>
      </ul>
      <a href="${prefix}contato.html" class="page-nav__cta">
        <span data-i18n="nav.cta">Solicitar Orçamento</span>
        <span class="page-nav__cta-icon" data-icon="arrow-right" data-icon-size="sm"></span>
      </a>
      </div>
      ${buildLangSwitcher(prefix)}
      <button type="button" class="page-nav__toggle" aria-controls="page-nav-menu" aria-expanded="false" data-i18n-aria-label="nav.menuOpen" aria-label="Abrir menu">
        <span class="page-nav__toggle-open" data-icon="menu" data-icon-size="md" aria-hidden="true"></span>
        <span class="page-nav__toggle-close" data-icon="x" data-icon-size="md" aria-hidden="true"></span>
      </button>
    </div>
  </nav>`;
}

const NAV_RE = /  <nav class="page-nav[\s\S]*?<\/nav>\r?\n/;

function syncFile(filePath, prefix) {
  if (SKIP.has(path.basename(filePath))) return false;

  let html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes('page-nav')) return false;

  const overlay = usesOverlay(filePath);
  const nav = buildNav(prefix, activeFor(filePath), overlay);
  if (!NAV_RE.test(html)) {
    console.warn('nav not found:', path.relative(ROOT, filePath));
    return false;
  }

  html = html.replace(NAV_RE, `${nav}\n`);
  html = html.replace(/\r?\n  <script src="[^"]*navbar-scroll\.js"><\/script>/g, '');

  if (overlay) {
    const scrollTag = `\n  <script src="${prefix}js/navbar-scroll.js"></script>`;
    if (!html.includes('navbar-scroll.js')) {
      html = html.replace(
        /(<script src="[^"]*nav-dropdown\.js"><\/script>)/,
        `$1${scrollTag}`
      );
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
        console.log('synced', path.relative(ROOT, full));
      }
    }
  }
}

walk(ROOT);
