/**
 * Instituto Humana — animações Motion (scroll)
 */
import { animate, inView, stagger } from 'https://cdn.jsdelivr.net/npm/motion@12.4.7/+esm';

(function initInstMotion() {
  'use strict';

  var page = document.querySelector('.instx-page');
  if (!page) return;

  var ease = [0.22, 1, 0.36, 1];
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    page.classList.add('is-motion-static');
    page.querySelectorAll('[data-instx-motion]').forEach(function (el) {
      el.style.opacity = '1';
    });
    return;
  }

  page.classList.add('is-motion-ready');

  function fadeUp(el, opts) {
    if (!el) return;
    inView(el, function () {
      animate(el, { opacity: [0, 1], y: [opts && opts.y ? opts.y : 24, 0] }, {
        duration: opts && opts.duration ? opts.duration : 0.75,
        easing: ease,
      });
    }, { amount: opts && opts.amount ? opts.amount : 0.3 });
  }

  fadeUp(page.querySelector('[data-instx-motion="hero-copy"]'), { y: 28 });
  fadeUp(page.querySelector('[data-instx-motion="hero-visual"]'), { y: 20, amount: 0.25 });

  page.querySelectorAll('[data-instx-motion="section-header"]').forEach(function (el) {
    fadeUp(el, { y: 20, amount: 0.35 });
  });

  page.querySelectorAll('[data-instx-motion="story"]').forEach(function (el) {
    fadeUp(el, { y: 22, amount: 0.18 });
  });
  fadeUp(page.querySelector('[data-instx-motion="story-note"]'), { y: 14, amount: 0.6 });

  var activities = page.querySelectorAll('[data-instx-motion="activity"]');
  var activitiesRoot = page.querySelector('.instx-activities__grid');
  if (activities.length && activitiesRoot) {
    inView(activitiesRoot, function () {
      animate(activities, { opacity: [0, 1], y: [24, 0] }, {
        delay: stagger(0.12),
        duration: 0.7,
        easing: ease,
      });
    }, { amount: 0.15 });
  }
})();
