(function () {
  'use strict';

  var duration = 1400;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCounter(element) {
    var target = Number.parseFloat(element.dataset.count || '0');
    var suffix = element.dataset.suffix || '';
    var prefix = element.dataset.prefix || '';
    var startTime = null;

    function frame(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var value = Math.round(target * easeOutCubic(progress));
      element.textContent = prefix + value + suffix;
      if (progress < 1) window.requestAnimationFrame(frame);
      else element.textContent = prefix + target + suffix;
    }

    window.requestAnimationFrame(frame);
  }

  function setupCounters(root) {
    if (!root) return;
    var counters = root.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var done = false;

    function run() {
      if (done) return;
      done = true;
      counters.forEach(animateCounter);
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              run();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(root);
    } else {
      run();
    }
  }

  function setupReveal() {
    var items = document.querySelectorAll('.cop30-reveal');
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  function init() {
    setupReveal();
    setupCounters(document.getElementById('cop30-stats'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
