import { buildFooterLogo } from './logo-template.mjs';

export function buildSiteFooter(prefix = '') {
  const p = prefix;
  const year = new Date().getFullYear();

  return `  <footer class="site-footer">
    <div class="site-footer__main">
      <div class="site-footer__inner">
        <div class="site-footer__brand">
${buildFooterLogo(p)}
        </div>

        <nav class="site-footer__col" aria-label="Navegação do site">
          <h3 class="site-footer__heading" data-i18n="footer.nav">Navegação</h3>
          <ul class="site-footer__list">
            <li><a href="${p}index.html" data-i18n="nav.home">Início</a></li>
            <li><a href="${p}sobre.html" data-i18n="nav.about">Sobre Nós</a></li>
            <li><a href="${p}cop30.html">COP30</a></li>
            <li><a href="${p}parceiros.html" data-i18n="nav.partners">Parceiros</a></li>
            <li><a href="${p}isp.html" data-i18n="nav.services">Serviços</a></li>
            <li><a href="${p}blog.html" data-i18n="nav.blog">Blog</a></li>
            <li><a href="${p}contato.html" data-i18n="nav.contact">Contato</a></li>
          </ul>
        </nav>

        <nav class="site-footer__col" aria-label="Serviços">
          <h3 class="site-footer__heading" data-i18n="footer.services">Serviços</h3>
          <ul class="site-footer__list">
            <li><a href="${p}traducao.html" data-i18n="nav.translation">Tradução</a></li>
            <li><a href="${p}isp.html" data-i18n="footer.ispShort">Interpretação Presencial</a></li>
            <li><a href="${p}isr.html" data-i18n="footer.isrShort">Interpretação Remota</a></li>
            <li><a href="${p}cursos-formativos.html" data-i18n="nav.courses">Cursos Formativos</a></li>
          </ul>
        </nav>

        <div class="site-footer__col">
          <h3 class="site-footer__heading" data-i18n="footer.contact">Contato</h3>
          <ul class="site-footer__contact">
            <li>
              <a href="tel:+5591991005523">
                <span class="site-footer__contact-icon" data-icon="phone" data-icon-size="sm" aria-hidden="true"></span>
                (91) 99100-5523
              </a>
            </li>
            <li>
              <a href="https://wa.me/559191005523" target="_blank" rel="noopener noreferrer">
                <span class="site-footer__contact-icon" data-icon="whatsapp" data-icon-size="sm" aria-hidden="true"></span>
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:contato@humanatraducao.com.br">
                <span class="site-footer__contact-icon" data-icon="mail" data-icon-size="sm" aria-hidden="true"></span>
                contato@humanatraducao.com.br
              </a>
            </li>
            <li>
              <span class="site-footer__contact-static">
                <span class="site-footer__contact-icon" data-icon="map-pinned" data-icon-size="sm" aria-hidden="true"></span>
                <span data-i18n="footer.address">Travessa Jupira s/n Lt 05-06 Qd 18, Jardim Tropicália — Marahú, Belém/PA</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="site-footer__bottom-inner">
        <p class="site-footer__copy" data-i18n="footer.copyright" data-i18n-year="${year}">&copy; ${year} HUMANA COM &amp; TRAD. Todos os direitos reservados.</p>
        <ul class="site-footer__legal">
          <li><a href="${p}politica-privacidade.html" data-i18n="footer.privacy">Política de Privacidade</a></li>
          <li><a href="${p}termos-de-uso.html" data-i18n="footer.terms">Termos de Uso</a></li>
        </ul>
      </div>
    </div>
  </footer>`;
}
