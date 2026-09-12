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

  fadeUp(page.querySelector('[data-tradx-motion="projects"]'), { y: 22, amount: 0.2 });
  fadeUp(page.querySelector('[data-tradx-motion="main-types"]'), { y: 20, amount: 0.25 });
  fadeUp(page.querySelector('[data-tradx-motion="main-panel"]'), { y: 24, amount: 0.15 });
  fadeUp(page.querySelector('[data-tradx-motion="how-top"]'), { y: 22, amount: 0.2 });
  fadeUp(page.querySelector('[data-tradx-motion="how-process"]'), { y: 22, amount: 0.15 });
  fadeUp(page.querySelector('[data-tradx-motion="cta"]'), { y: 20, amount: 0.35 });
})();
