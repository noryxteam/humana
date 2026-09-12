/**
 * ISR — fade-up on scroll (Motion / Framer Motion vanilla)
 */
import { animate, inView } from 'https://cdn.jsdelivr.net/npm/motion@12.4.7/+esm';

(function initIsrMotion() {
  'use strict';

  var page = document.querySelector('.isrx-page');
  if (!page) return;

  var ease = [0.22, 1, 0.36, 1];
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    page.classList.add('is-motion-static');
    document.querySelectorAll('.isrx-motion').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-isrx-motion]'));
  nodes.forEach(function (el) {
    var delaySteps = parseInt(el.getAttribute('data-isrx-delay') || '0', 10);
    var delay = Number.isFinite(delaySteps) ? delaySteps * 0.1 : 0;

    inView(
      el,
      function () {
        animate(
          el,
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.6, delay: delay, easing: ease }
        ).finished.then(function () {
          el.classList.add('is-visible');
        });
      },
      { amount: 0.2, once: true }
    );
  });

})();
