/**
 * ISR — animações Motion (scroll)
 */
import { animate, inView, stagger } from 'https://cdn.jsdelivr.net/npm/motion@12.4.7/+esm';

(function initIsrMotion() {
  'use strict';

  var page = document.querySelector('.isrx-page');
  if (!page) return;

  var ease = [0.22, 1, 0.36, 1];
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    page.classList.add('is-motion-static');
    page.querySelectorAll('[data-isrx-motion]').forEach(function (el) {
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
      animate(el, { opacity: [0, 1], scale: [0.96, 1] }, { duration: 0.85, easing: ease });
    }, { amount: 0.25 });
  }

  fadeUp(page.querySelector('[data-isrx-motion="hero-copy"]'), { y: 28 });
  scaleIn(page.querySelector('[data-isrx-motion="hero-visual"]'));

  page.querySelectorAll('[data-isrx-motion="section-header"]').forEach(function (el) {
    fadeUp(el, { y: 20, amount: 0.35 });
  });

  var flowSteps = page.querySelectorAll('[data-isrx-motion="flow-step"]');
  if (flowSteps.length) {
    inView(page.querySelector('.isrx-flow__track'), function () {
      animate(flowSteps, { opacity: [0, 1], y: [20, 0] }, {
        delay: stagger(0.12),
        duration: 0.65,
        easing: ease,
      });
    }, { amount: 0.2 });
  }

  page.querySelectorAll('[data-isrx-motion="benefit-item"]').forEach(function (el, i) {
    inView(el, function () {
      animate(el, { opacity: [0, 1], x: [-16, 0] }, {
        duration: 0.6,
        delay: i * 0.06,
        easing: ease,
      });
    }, { amount: 0.4 });
  });

  var platforms = page.querySelectorAll('[data-isrx-motion="platform"]');
  if (platforms.length) {
    inView(page.querySelector('.isrx-platforms__grid'), function () {
      animate(platforms, { opacity: [0, 1], y: [16, 0] }, {
        delay: stagger(0.08),
        duration: 0.55,
        easing: ease,
      });
    }, { amount: 0.25 });
  }

  page.querySelectorAll('[data-isrx-motion="tech-item"]').forEach(function (el, i) {
    inView(el, function () {
      animate(el, { opacity: [0, 1], y: [14, 0] }, {
        duration: 0.55,
        delay: i * 0.07,
        easing: ease,
      });
    }, { amount: 0.35 });
  });

  var useCards = page.querySelectorAll('[data-isrx-motion="use-card"]');
  if (useCards.length) {
    inView(page.querySelector('.isrx-uses__grid'), function () {
      animate(useCards, { opacity: [0, 1], y: [22, 0] }, {
        delay: stagger(0.1),
        duration: 0.65,
        easing: ease,
      });
    }, { amount: 0.15 });
  }

  var timelineItems = page.querySelectorAll('[data-isrx-motion="timeline-item"]');
  if (timelineItems.length) {
    inView(page.querySelector('.isrx-timeline'), function () {
      animate(timelineItems, { opacity: [0, 1], y: [18, 0] }, {
        delay: stagger(0.1),
        duration: 0.6,
        easing: ease,
      });
    }, { amount: 0.12 });
  }

  fadeUp(page.querySelector('[data-isrx-motion="cta"]'), { y: 20, amount: 0.35 });
})();
