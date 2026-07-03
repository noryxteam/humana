/**
 * ISR — página premium (FAQ)
 */
(function () {
  'use strict';

  function initFaq() {
    document.querySelectorAll('.isrx-faq__item').forEach(function (item) {
      var btn = item.querySelector('.isrx-faq__trigger');
      if (!btn) return;

      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        document.querySelectorAll('.isrx-faq__item.is-open').forEach(function (open) {
          open.classList.remove('is-open');
          var trigger = open.querySelector('.isrx-faq__trigger');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  function init() {
    initFaq();
    if (window.HumanaIcons && window.HumanaIcons.mount) window.HumanaIcons.mount();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
