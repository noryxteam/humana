/**
 * ISP — seção Experiência que conecta (Motion / Framer Motion vanilla)
 */
import { animate, inView, stagger } from 'https://cdn.jsdelivr.net/npm/motion@12.4.7/+esm';

(function initTrustSection() {
  'use strict';

  var section = document.querySelector('.ispx-trust');
  if (!section) return;

  var ease = [0.22, 1, 0.36, 1];
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    section.classList.add('is-motion-static');
    return;
  }

  section.classList.add('is-motion-ready');

  var header = section.querySelector('[data-ispx-trust-motion="header"]');
  if (header) {
    inView(header, function () {
      animate(
        header,
        { opacity: [0, 1], y: [28, 0] },
        { duration: 0.75, easing: ease }
      );
    }, { amount: 0.35 });
  }

  var figure = section.querySelector('[data-ispx-trust-motion="figure"]');
  if (figure) {
    inView(figure, function () {
      animate(
        figure,
        { opacity: [0, 1], scale: [0.97, 1] },
        { duration: 0.85, easing: ease }
      );
    }, { amount: 0.25 });
  }

  var stats = section.querySelectorAll('[data-ispx-trust-motion="stat"]');
  if (stats.length) {
    inView(section.querySelector('.ispx-trust__stats'), function () {
      animate(
        stats,
        { opacity: [0, 1], y: [22, 0] },
        { delay: stagger(0.12), duration: 0.65, easing: ease }
      );
    }, { amount: 0.2 });
  }

  var timelineBlock = section.querySelector('[data-ispx-trust-motion="timeline-block"]');
  if (timelineBlock) {
    inView(timelineBlock, function () {
      animate(
        timelineBlock.querySelector('.ispx-trust__timeline-rule'),
        { opacity: [0, 1], scaleX: [0.6, 1] },
        { duration: 0.7, easing: ease }
      );
    }, { amount: 0.3 });
  }

  var timelineItems = section.querySelectorAll('[data-ispx-trust-motion="timeline-item"]');
  if (timelineItems.length) {
    inView(section.querySelector('.ispx-trust__timeline'), function () {
      animate(
        timelineItems,
        { opacity: [0, 1], y: [18, 0] },
        { delay: stagger(0.1), duration: 0.6, easing: ease }
      );
    }, { amount: 0.15 });
  }
})();
