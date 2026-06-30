const LOGO_SVG = `<svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="6" cy="6" r="3" fill="#00AEEF"/>
            <circle cx="18" cy="6" r="3" fill="#00AEEF"/>
            <circle cx="30" cy="6" r="3" fill="#00AEEF"/>
            <circle cx="6" cy="18" r="3" fill="#00AEEF"/>
            <circle cx="18" cy="18" r="3" fill="#00AEEF"/>
            <circle cx="30" cy="18" r="3" fill="#00AEEF"/>
            <circle cx="6" cy="30" r="3" fill="#00AEEF"/>
            <circle cx="18" cy="30" r="3" fill="#00AEEF"/>
            <circle cx="30" cy="30" r="3" fill="#00AEEF"/>
          </svg>`;

export function buildSiteFooter(prefix = '') {
  const p = prefix;
  const year = new Date().getFullYear();

  return `  <footer class="site-footer">
    <div class="site-footer__main">
      <div class="site-footer__inner">
        <div class="site-footer__brand">
          <a href="${p}index.html" class="site-footer__logo">
            <span class="site-footer__logo-mark">${LOGO_SVG}</span>
            <span class="site-footer__logo-copy">
              <span class="site-footer__logo-name">Humana</span>
              <span class="site-footer__logo-tag">Com &amp; Trad</span>
            </span>
          </a>
          <p class="site-footer__about">Empresa amazônica de serviços linguísticos com atuação em tradução, interpretação e formação — conectando pessoas, culturas e idiomas desde 1995.</p>
        </div>

        <nav class="site-footer__col" aria-label="Navegação do site">
          <h3 class="site-footer__heading">Navegação</h3>
          <ul class="site-footer__list">
            <li><a href="${p}index.html">Início</a></li>
            <li><a href="${p}sobre.html">Sobre Nós</a></li>
            <li><a href="${p}cop30.html">COP30</a></li>
            <li><a href="${p}parceiros.html">Parceiros</a></li>
            <li><a href="${p}isp.html">Serviços</a></li>
            <li><a href="${p}blog.html">Blog</a></li>
            <li><a href="${p}contato.html">Contato</a></li>
          </ul>
        </nav>

        <nav class="site-footer__col" aria-label="Serviços">
          <h3 class="site-footer__heading">Serviços</h3>
          <ul class="site-footer__list">
            <li><a href="${p}traducao.html">Tradução</a></li>
            <li><a href="${p}isp.html">Interpretação Presencial</a></li>
            <li><a href="${p}isr.html">Interpretação Remota</a></li>
            <li><a href="${p}cursos-formativos.html">Cursos Formativos</a></li>
          </ul>
        </nav>

        <div class="site-footer__col">
          <h3 class="site-footer__heading">Contato</h3>
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
                <span>Travessa Jupira s/n Lt 05-06 Qd 18, Jardim Tropicália — Marahú, Belém/PA</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="site-footer__bottom-inner">
        <p class="site-footer__copy">&copy; ${year} HUMANA COM &amp; TRAD. Todos os direitos reservados.</p>
        <ul class="site-footer__legal">
          <li><a href="${p}politica-privacidade.html">Política de Privacidade</a></li>
          <li><a href="${p}termos-de-uso.html">Termos de Uso</a></li>
        </ul>
      </div>
    </div>
  </footer>`;
}
