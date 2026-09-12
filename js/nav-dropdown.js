/**
 * Dropdowns do menu + painel mobile
 */
(function () {
  'use strict';

  var MOBILE_MQ = '(max-width: 980px)';

  function isMobileNav() {
    return window.matchMedia(MOBILE_MQ).matches;
  }

  function navRoot() {
    return document.querySelector('.page-nav');
  }

  function closeDropdowns(except) {
    document.querySelectorAll('.page-nav__item--dropdown.is-open').forEach(function (item) {
      if (item !== except) {
        item.classList.remove('is-open');
        var trigger = item.querySelector('.page-nav__dropdown-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function setMenuOpen(open) {
    var nav = navRoot();
    var toggle = nav && nav.querySelector('.page-nav__toggle');
    if (!nav || !toggle) return;

    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');

    var labels = window.HUMANA_I18N_KEYS || {};
    var lang = document.documentElement.lang === 'en' ? 'en' : document.documentElement.lang === 'es' ? 'es' : 'pt';
    var key = open ? 'nav.menuClose' : 'nav.menuOpen';
    var fallback = open ? 'Fechar menu' : 'Abrir menu';
    var text = lang === 'pt' ? fallback : (labels[key] && labels[key][lang]) || fallback;
    toggle.setAttribute('aria-label', text);

    if (!open) closeDropdowns(null);
  }

  function initDropdowns() {
    document.querySelectorAll('.page-nav__item--dropdown').forEach(function (item) {
      var trigger = item.querySelector('.page-nav__dropdown-trigger');
      var menu = item.querySelector('.page-nav__dropdown');
      if (!trigger) return;

      if (menu) {
        menu.addEventListener('click', function (event) {
          event.stopPropagation();
        });
      }

      trigger.addEventListener('click', function (event) {
        var href = trigger.getAttribute('href') || '#';
        var isRealLink = href !== '#' && href.trim() !== '';
        var onChevron = event.target.closest('.page-nav__link-icon, [data-icon]');

        if (isMobileNav()) {
          event.preventDefault();
          event.stopPropagation();
          var opening = !item.classList.contains('is-open');
          closeDropdowns(item);
          if (opening) {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
          } else {
            item.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
          }
          return;
        }

        if (isRealLink && !onChevron) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        var isOpen = item.classList.contains('is-open');
        closeDropdowns(item);
        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        } else {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  function initMobileMenu() {
    var nav = navRoot();
    if (!nav) return;
    var toggle = nav.querySelector('.page-nav__toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function (event) {
      event.stopPropagation();
      setMenuOpen(!nav.classList.contains('is-open'));
    });

    nav.querySelectorAll('.page-nav__list a:not(.page-nav__dropdown-trigger), .page-nav__cta').forEach(function (link) {
      link.addEventListener('click', function () {
        if (isMobileNav()) setMenuOpen(false);
      });
    });

    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target)) {
        closeDropdowns(null);
        if (isMobileNav()) setMenuOpen(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeDropdowns(null);
        setMenuOpen(false);
      }
    });

    window.addEventListener('resize', function () {
      if (!isMobileNav()) setMenuOpen(false);
    });
  }

  function init() {
    initDropdowns();
    initMobileMenu();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
