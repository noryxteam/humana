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

  page.querySelectorAll('[data-instx-motion="timeline-item"]').forEach(function (el, i) {
    inView(el, function () {
      animate(el, { opacity: [0, 1], x: [i % 2 === 0 ? -20 : 20, 0] }, {
        duration: 0.65,
        delay: 0.05,
        easing: ease,
      });
    }, { amount: 0.35 });
  });

  page.querySelectorAll('[data-instx-motion="training-item"]').forEach(function (el, i) {
    inView(el, function () {
      animate(el, { opacity: [0, 1], y: [14, 0] }, {
        duration: 0.55,
        delay: i * 0.07,
        easing: ease,
      });
    }, { amount: 0.4 });
  });

  var projects = page.querySelectorAll('[data-instx-motion="project"]');
  var projectRoot = page.querySelector('.instx-projects__layout');
  if (projects.length && projectRoot) {
    inView(projectRoot, function () {
      animate(projects, { opacity: [0, 1], y: [22, 0] }, {
        delay: stagger(0.1),
        duration: 0.65,
        easing: ease,
      });
    }, { amount: 0.15 });
  }

  var gallery = page.querySelectorAll('[data-instx-motion="gallery-item"]');
  if (gallery.length) {
    inView(page.querySelector('.instx-gallery__grid'), function () {
      animate(gallery, { opacity: [0, 1], scale: [0.97, 1] }, {
        delay: stagger(0.08),
        duration: 0.6,
        easing: ease,
      });
    }, { amount: 0.12 });
  }

  fadeUp(page.querySelector('[data-instx-motion="video-a"]'), { y: 20, amount: 0.3 });
  fadeUp(page.querySelector('[data-instx-motion="video-b"]'), { y: 20, amount: 0.3 });
  fadeUp(page.querySelector('[data-instx-motion="cta"]'), { y: 20, amount: 0.35 });
})();
