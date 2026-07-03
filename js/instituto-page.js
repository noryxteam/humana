/**
 * Instituto Humana — página premium
 */
(function () {
  'use strict';

  function initTimeline() {
    var items = document.querySelectorAll('.instx-timeline__item');
    if (!items.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(function (el) { el.classList.add('is-active'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add('is-active');
        });
      },
      { threshold: 0.45, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  function init() {
    initTimeline();
    if (window.HumanaIcons && window.HumanaIcons.mount) window.HumanaIcons.mount();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
