/**
 * ISR — counters, form helper, flow reveal
 */
(function () {
  'use strict';

  function initStats() {
    document.querySelectorAll('[data-isrx-count]').forEach(function (el) {
      var target = el.getAttribute('data-isrx-count');
      var suffix = el.getAttribute('data-isrx-suffix') || '';
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

  function initFlowReveal() {
    var stage = document.querySelector('[data-isrx-flow]');
    if (!stage) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    stage.classList.add('is-armed');

    function reveal() {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          stage.classList.add('is-revealed');
        });
      });
    }

    if (!('IntersectionObserver' in window)) {
      reveal();
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          reveal();
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(stage);
  }

  function initRevealFallback() {
    window.setTimeout(function () {
      var pending = document.querySelectorAll('.isrx-motion:not(.is-visible)');
      if (!pending.length) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        pending.forEach(function (el) { el.classList.add('is-visible'); });
        return;
      }
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      pending.forEach(function (el) { observer.observe(el); });
    }, 1200);
  }

  function boot() {
    initStats();
    initFlowReveal();
    initRevealFallback();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
