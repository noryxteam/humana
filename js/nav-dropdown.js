/**
 * Dropdown do menu Serviços — igual humanatraducao.com.br
 */
(function () {
  'use strict';

  function closeAll(except) {
    document.querySelectorAll('.page-nav__item--dropdown.is-open').forEach(function (item) {
      if (item !== except) {
        item.classList.remove('is-open');
        var trigger = item.querySelector('.page-nav__dropdown-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function init() {
    document.querySelectorAll('.page-nav__item--dropdown').forEach(function (item) {
      var trigger = item.querySelector('.page-nav__dropdown-trigger');
      if (!trigger) return;

      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var isOpen = item.classList.contains('is-open');
        closeAll(item);
        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        } else {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('click', function () {
      closeAll(null);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeAll(null);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
