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

  function setupGallery() {
    var stage = document.querySelector('[data-cop30-gallery]');
    if (!stage) return;

    var shots = Array.prototype.slice.call(stage.querySelectorAll('[data-cop30-shot]'));
    var panels = Array.prototype.slice.call(stage.querySelectorAll('[data-cop30-panel]'));
    var thumbs = Array.prototype.slice.call(document.querySelectorAll('[data-cop30-thumb]'));
    var counter = stage.querySelector('[data-cop30-current]');
    var prev = stage.querySelector('[data-cop30-prev]');
    var next = stage.querySelector('[data-cop30-next]');
    if (!shots.length) return;

    var current = 0;

    function show(index) {
      current = (index + shots.length) % shots.length;

      shots.forEach(function (shot, i) {
        shot.classList.toggle('is-active', i === current);
      });
      panels.forEach(function (panel, i) {
        panel.classList.toggle('is-active', i === current);
      });
      thumbs.forEach(function (thumb, i) {
        var active = i === current;
        thumb.classList.toggle('is-active', active);
        thumb.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      if (counter) counter.textContent = String(current + 1);
    }

    if (prev) prev.addEventListener('click', function () { show(current - 1); });
    if (next) next.addEventListener('click', function () { show(current + 1); });

    thumbs.forEach(function (thumb, i) {
      thumb.addEventListener('click', function () { show(i); });
    });

    stage.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') show(current - 1);
      if (event.key === 'ArrowRight') show(current + 1);
    });

    show(0);
  }

  function init() {
    setupReveal();
    setupCounters(document.getElementById('cop30-stats'));
    setupGallery();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
