export const LOGO_ASSET = 'assets/images/logo-humana.png';

function buildLogoCopy(prefix, block) {
  const nameClass = `${block}__logo-name`;
  const tagClass = `${block}__logo-tag`;
  const copyClass = `${block}__logo-copy`;

  return `<span class="${copyClass}">
        <span class="${nameClass}">Humana</span>
        <span class="${tagClass}">com &amp; trad</span>
      </span>`;
}

export function buildNavLogo(prefix = '') {
  return `      <a href="${prefix}index.html" class="page-nav__logo page-nav__logo--hero">
        <img src="${prefix}${LOGO_ASSET}" alt="" class="page-nav__logo-img" width="84" height="40" decoding="async" aria-hidden="true">
        ${buildLogoCopy(prefix, 'page-nav')}
      </a>`;
}

export function buildFooterLogo(prefix = '') {
  return `          <a href="${prefix}index.html" class="site-footer__logo" aria-label="HUMANA com &amp; trad">
            <img src="${prefix}${LOGO_ASSET}" alt="" class="site-footer__logo-img" width="106" height="50" decoding="async" aria-hidden="true">
            ${buildLogoCopy(prefix, 'site-footer')}
          </a>`;
}

export function buildBrandLogo(prefix = '', block = 'humana-brand') {
  return `<div class="${block}" aria-label="HUMANA com &amp; trad">
            <img src="${prefix}${LOGO_ASSET}" alt="" class="${block}__img" width="84" height="40" decoding="async" aria-hidden="true">
            ${buildLogoCopy(prefix, block)}
          </div>`;
}
