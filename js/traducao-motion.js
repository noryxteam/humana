/**
 * Tradução — animações Motion (scroll)
 */
import { animate, inView, stagger } from 'https://cdn.jsdelivr.net/npm/motion@12.4.7/+esm';

(function initTradMotion() {
  'use strict';

  var page = document.querySelector('.tradx-page');
  if (!page) return;

  var ease = [0.22, 1, 0.36, 1];
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    page.classList.add('is-motion-static');
    page.querySelectorAll('[data-tradx-motion]').forEach(function (el) {
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

  function scaleIn(el) {
    if (!el) return;
    inView(el, function () {
      animate(el, { opacity: [0, 1], scale: [0.97, 1] }, { duration: 0.85, easing: ease });
    }, { amount: 0.25 });
  }

  fadeUp(page.querySelector('[data-tradx-motion="hero-copy"]'), { y: 28 });
  scaleIn(page.querySelector('[data-tradx-motion="hero-visual"]'));

  page.querySelectorAll('[data-tradx-motion="section-header"]').forEach(function (el) {
    fadeUp(el, { y: 20, amount: 0.35 });
  });

  var specs = page.querySelectorAll('[data-tradx-motion="specialty"]');
  if (specs.length) {
    inView(page.querySelector('.tradx-specialties__grid'), function () {
      animate(specs, { opacity: [0, 1], y: [22, 0] }, {
        delay: stagger(0.12),
        duration: 0.65,
        easing: ease,
      });
    }, { amount: 0.2 });
  }

  var steps = page.querySelectorAll('[data-tradx-motion="process-step"]');
  if (steps.length) {
    inView(page.querySelector('.tradx-process__track'), function () {
      animate(steps, { opacity: [0, 1], y: [18, 0] }, {
        delay: stagger(0.1),
        duration: 0.6,
        easing: ease,
      });
    }, { amount: 0.15 });
  }

  page.querySelectorAll('[data-tradx-motion="why-item"]').forEach(function (el, i) {
    inView(el, function () {
      animate(el, { opacity: [0, 1], x: [-14, 0] }, {
        duration: 0.55,
        delay: i * 0.06,
        easing: ease,
      });
    }, { amount: 0.4 });
  });

  var areas = page.querySelectorAll('[data-tradx-motion="area-item"]');
  if (areas.length) {
    inView(page.querySelector('.tradx-areas__grid'), function () {
      animate(areas, { opacity: [0, 1], y: [16, 0] }, {
        delay: stagger(0.07),
        duration: 0.55,
        easing: ease,
      });
    }, { amount: 0.12 });
  }

  fadeUp(page.querySelector('[data-tradx-motion="video"]'), { y: 20, amount: 0.3 });
  fadeUp(page.querySelector('[data-tradx-motion="cta"]'), { y: 20, amount: 0.35 });
})();
