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
]);

const OVERLAY_PAGES = new Set([
  'index.html',
  'sobre.html',
  'historia.html',
  'blog.html',
  'cop30.html',
  'parceiros.html',
  'tao-filmes.html',
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
  if (['isp.html', 'isr.html', 'traducao.html', 'cursos-formativos.html'].includes(name)) {
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
      <a href="${prefix}index.html" class="page-nav__logo page-nav__logo--hero">
        <span class="page-nav__logo-mark" aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="3" fill="#00AEEF"/>
            <circle cx="18" cy="6" r="3" fill="#00AEEF"/>
            <circle cx="30" cy="6" r="3" fill="#00AEEF"/>
            <circle cx="6" cy="18" r="3" fill="#00AEEF"/>
            <circle cx="18" cy="18" r="3" fill="#00AEEF"/>
            <circle cx="30" cy="18" r="3" fill="#00AEEF"/>
            <circle cx="6" cy="30" r="3" fill="#00AEEF"/>
            <circle cx="18" cy="30" r="3" fill="#00AEEF"/>
            <circle cx="30" cy="30" r="3" fill="#00AEEF"/>
          </svg>
        </span>
        <span class="page-nav__logo-copy">
          <span class="page-nav__logo-name">Humana</span>
          <span class="page-nav__logo-tag">Com &amp; Trad</span>
        </span>
      </a>
      <ul class="page-nav__list">
        <li class="page-nav__item${a('inicio')}"><a href="${prefix}index.html">Início</a></li>
        <li class="page-nav__item${a('sobre')}"><a href="${prefix}sobre.html">Sobre Nós</a></li>
        <li class="page-nav__item page-nav__item--dropdown${a('servicos')}">
          <a href="#" class="page-nav__dropdown-trigger" aria-haspopup="true" aria-expanded="false">
            Serviços
            <span class="page-nav__link-icon" data-icon="chevron-down" data-icon-size="sm"></span>
          </a>
          <ul class="page-nav__dropdown">
            <li><a href="${prefix}isp.html">Interpretação Simultânea Presencial</a></li>
            <li><a href="${prefix}isr.html">Interpretação Simultânea Remota</a></li>
            <li><a href="${prefix}traducao.html">Tradução</a></li>
            <li><a href="${prefix}cursos-formativos.html">Cursos Formativos</a></li>
          </ul>
        </li>
        <li class="page-nav__item${a('cop30')}"><a href="${prefix}cop30.html">COP30</a></li>
        <li class="page-nav__item page-nav__item--dropdown${a('parceiros')}">
          <a href="#" class="page-nav__dropdown-trigger" aria-haspopup="true" aria-expanded="false">
            Parceiros
            <span class="page-nav__link-icon" data-icon="chevron-down" data-icon-size="sm"></span>
          </a>
          <ul class="page-nav__dropdown">
            <li><a href="${prefix}parceiros.html">Nossos Parceiros</a></li>
            <li><a href="${prefix}tao-filmes.html">TAO Filmes</a></li>
          </ul>
        </li>
        <li class="page-nav__item${a('blog')}"><a href="${prefix}blog.html">Blog</a></li>
        <li class="page-nav__item${a('contato')}"><a href="${prefix}contato.html">Contato</a></li>
      </ul>
      <a href="${prefix}contato.html" class="page-nav__cta">
        Solicitar Orçamento
        <span class="page-nav__cta-icon" data-icon="arrow-right" data-icon-size="sm"></span>
      </a>
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
