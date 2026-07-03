export function buildLangSwitcher(prefix = '') {
  return `      <div class="lang-switcher" data-lang-switcher role="group" aria-label="Idioma / Language">
        <button type="button" class="lang-switcher__btn is-active" data-lang="pt" aria-label="Português" title="Português">
          <img src="${prefix}assets/images/flags/br.svg" alt="" width="20" height="14" decoding="async">
        </button>
        <button type="button" class="lang-switcher__btn" data-lang="en" aria-label="English" title="English">
          <img src="${prefix}assets/images/flags/us.svg" alt="" width="20" height="14" decoding="async">
        </button>
        <button type="button" class="lang-switcher__btn" data-lang="es" aria-label="Español" title="Español">
          <img src="${prefix}assets/images/flags/es.svg" alt="" width="20" height="14" decoding="async">
        </button>
      </div>`;
}
