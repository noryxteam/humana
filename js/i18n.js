/**
 * i18n — PT (padrão), EN, ES
 * Português: texto original do HTML
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'humana-lang';
  var SUPPORTED = ['pt', 'en', 'es'];
  var currentLang = 'pt';

  function getPageId() {
    var path = window.location.pathname || '';
    var file = path.split('/').pop();
    return file && file.length ? file : 'index.html';
  }

  function getDict(lang) {
    var keys = window.HUMANA_I18N_KEYS || {};
    var pages = window.HUMANA_I18N_PAGES || {};
    return { keys: keys, pages: pages[lang] || pages[getPageId()] || null };
  }

  function t(key, lang) {
    lang = lang || currentLang;
    if (lang === 'pt') return null;
    var entry = (window.HUMANA_I18N_KEYS || {})[key];
    return entry && entry[lang] ? entry[lang] : null;
  }

  function remember(el, prop, value) {
    var attr = 'data-i18nOrig' + prop.charAt(0).toUpperCase() + prop.slice(1);
    if (!el.hasAttribute(attr)) {
      el.setAttribute(attr, value);
    }
    return el.getAttribute(attr);
  }

  function applyKeys(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;

      if (key === 'footer.copyright') {
        var year = el.getAttribute('data-i18n-year') || new Date().getFullYear();
        var orig =
          remember(el, 'html', el.innerHTML) ||
          '&copy; ' + year + ' HUMANA COM &amp; TRAD. Todos os direitos reservados.';
        if (lang === 'pt') {
          el.innerHTML = orig;
        } else {
          var text = t(key, lang);
          el.innerHTML = text ? text.replace('{year}', year) : orig;
        }
        return;
      }

      var useHtml = el.hasAttribute('data-i18n-html');
      var prop = useHtml ? 'html' : 'text';
      var current = useHtml ? el.innerHTML : el.textContent;
      remember(el, prop, current);

      if (lang === 'pt') {
        if (useHtml) el.innerHTML = el.getAttribute('data-i18nOrigHtml');
        else el.textContent = el.getAttribute('data-i18nOrigText');
        return;
      }

      var translated = t(key, lang);
      if (!translated) return;
      if (useHtml) el.innerHTML = translated;
      else el.textContent = translated;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      remember(el, 'placeholder', el.getAttribute('placeholder') || '');
      if (lang === 'pt') {
        el.setAttribute('placeholder', el.getAttribute('data-i18nOrigPlaceholder') || '');
        return;
      }
      var key = el.getAttribute('data-i18n-placeholder');
      var translated = t(key, lang);
      if (translated) el.setAttribute('placeholder', translated);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      remember(el, 'ariaLabel', el.getAttribute('aria-label') || '');
      if (lang === 'pt') {
        el.setAttribute('aria-label', el.getAttribute('data-i18nOrigAriaLabel') || '');
        return;
      }
      var key = el.getAttribute('data-i18n-aria-label');
      var translated = t(key, lang);
      if (translated) el.setAttribute('aria-label', translated);
    });
  }

  function applyPageSelectors(lang) {
    var pageId = getPageId();
    var allPages = window.HUMANA_I18N_PAGES || {};
    var pageMap = allPages[pageId];
    if (!pageMap) return;

    Object.keys(pageMap).forEach(function (selector) {
      var texts = pageMap[selector];
      document.querySelectorAll(selector).forEach(function (el) {
        remember(el, 'html', el.innerHTML);
        if (lang === 'pt') {
          el.innerHTML = el.getAttribute('data-i18nOrigHtml');
        } else if (texts[lang]) {
          el.innerHTML = texts[lang];
        }
      });
    });
  }

  function updateSwitcher(lang) {
    document.querySelectorAll('[data-lang-switcher] [data-lang]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
  }

  function updateHtmlLang(lang) {
    var map = { pt: 'pt-BR', en: 'en', es: 'es' };
    document.documentElement.lang = map[lang] || 'pt-BR';
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'pt';
    currentLang = lang;
    applyKeys(lang);
    applyPageSelectors(lang);
    updateSwitcher(lang);
    updateHtmlLang(lang);
    document.dispatchEvent(
      new CustomEvent('humana:languagechange', { detail: { lang: lang } })
    );
    if (window.HumanaIcons && typeof window.HumanaIcons.mount === 'function') {
      window.HumanaIcons.mount();
    }
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
    apply(lang);
  }

  function getLang() {
    return currentLang;
  }

  function initSwitcher() {
    document.querySelectorAll('[data-lang-switcher]').forEach(function (root) {
      root.addEventListener('click', function (event) {
        var btn = event.target.closest('[data-lang]');
        if (!btn || !root.contains(btn)) return;
        setLang(btn.getAttribute('data-lang'));
      });
    });
  }

  function init() {
    var saved = 'pt';
    try {
      saved = localStorage.getItem(STORAGE_KEY) || 'pt';
    } catch (e) {
      saved = 'pt';
    }
    if (SUPPORTED.indexOf(saved) === -1) saved = 'pt';
    initSwitcher();
    apply(saved);
  }

  window.HumanaI18n = {
    t: t,
    getLang: getLang,
    setLang: setLang,
    apply: apply,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
