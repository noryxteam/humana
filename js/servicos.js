/**
 * Hub de Serviços — counters, fluxo ISR, reveal
 */
(function () {
  'use strict';

  function initStats() {
    document.querySelectorAll('[data-svx-count]').forEach(function (el) {
      var target = el.getAttribute('data-svx-count');
      var suffix = el.getAttribute('data-svx-suffix') || '';
      var numeric = parseInt(target, 10);
      if (!Number.isFinite(numeric)) return;

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting || el.dataset.done === 'true') return;
            el.dataset.done = 'true';
            var start = performance.now();
            var duration = 1400;

            function frame(now) {
              var p = Math.min((now - start) / duration, 1);
              var eased = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.round(numeric * eased) + suffix;
              if (p < 1) requestAnimationFrame(frame);
            }

            requestAnimationFrame(frame);
            observer.unobserve(el);
          });
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
    });
  }

  function initFlow() {
    var stage = document.querySelector('[data-svx-flow]');
    if (!stage) return;
    stage.classList.add('is-armed');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      stage.classList.add('is-revealed');
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          stage.classList.add('is-revealed');
          observer.unobserve(stage);
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(stage);
  }

  function initReveal() {
    var nodes = document.querySelectorAll('[data-svx-motion]');
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    nodes.forEach(function (el) { observer.observe(el); });
  }

  function boot() {
    initStats();
    initFlow();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
