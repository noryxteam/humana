/**
 * ISP — fade-up on scroll (Motion / Framer Motion vanilla)
 */
import { animate, inView, stagger } from 'https://cdn.jsdelivr.net/npm/motion@12.4.7/+esm';

(function initIspMotion() {
  'use strict';

  var page = document.querySelector('.ispx-page');
  if (!page) return;

  var ease = [0.22, 1, 0.36, 1];
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    page.classList.add('is-motion-static');
    document.querySelectorAll('.ispx-motion').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-ispx-motion]'));
  if (!nodes.length) return;

  nodes.forEach(function (el) {
    var delaySteps = parseInt(el.getAttribute('data-ispx-delay') || '0', 10);
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

  var timelineSteps = document.querySelectorAll('.ispx-timeline__step');
  var timelineTrack = document.querySelector('.ispx-timeline__track');
  if (timelineTrack && timelineSteps.length) {
    inView(
      timelineTrack,
      function () {
        animate(
          timelineSteps,
          { opacity: [0, 1], y: [20, 0] },
          { delay: stagger(0.1), duration: 0.6, easing: ease }
        );
      },
      { amount: 0.2, once: true }
    );
  }
})();
