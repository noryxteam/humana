(function () {
  'use strict';

  function setupReveal() {
    var items = document.querySelectorAll('.parc-reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  function setupFilters() {
    var root = document.getElementById('parc-grid');
    var buttons = document.querySelectorAll('[data-parc-filter]');
    if (!root || !buttons.length) return;

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var filter = button.getAttribute('data-parc-filter');

        buttons.forEach(function (btn) {
          btn.classList.toggle('is-active', btn === button);
          btn.setAttribute('aria-pressed', btn === button ? 'true' : 'false');
        });

        root.querySelectorAll('[data-category]').forEach(function (card) {
          var category = card.getAttribute('data-category');
          var show = filter === 'all' || category === filter;
          card.classList.toggle('is-hidden', !show);
        });
      });
    });
  }

  function init() {
    setupReveal();
    setupFilters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
