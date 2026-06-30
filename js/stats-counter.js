/**
 * Contadores animados (stats bar + missão)
 */
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
      if (!startTime) {
        startTime = timestamp;
      }

      var progress = Math.min((timestamp - startTime) / duration, 1);
      var value = Math.round(target * easeOutCubic(progress));

      element.textContent = prefix + value + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(frame);
      } else {
        element.textContent = prefix + target + suffix;
      }
    }

    window.requestAnimationFrame(frame);
  }

  function setupCountUp(root) {
    if (!root) {
      return;
    }

    var counters = root.querySelectorAll('[data-count]');

    if (!counters.length) {
      return;
    }

    var hasAnimated = false;

    function runAnimation() {
      if (hasAnimated) {
        return;
      }

      hasAnimated = true;
      counters.forEach(animateCounter);
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              runAnimation();
              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      observer.observe(root);
    } else {
      runAnimation();
    }
  }

  setupCountUp(document.getElementById('stats-bar'));
  setupCountUp(document.getElementById('missao'));
})();
