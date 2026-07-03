/**
 * ISP — seção Infraestrutura (Motion)
 */
import { animate, inView, stagger } from 'https://cdn.jsdelivr.net/npm/motion@12.4.7/+esm';

(function initInfraSection() {
  'use strict';

  var section = document.querySelector('.ispx-infra');
  if (!section) return;

  var ease = [0.22, 1, 0.36, 1];
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    section.classList.add('is-motion-static');
    return;
  }

  section.classList.add('is-motion-ready');

  var header = section.querySelector('[data-ispx-infra-motion="header"]');
  if (header) {
    inView(header, function () {
      animate(
        header,
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.75, easing: ease }
      );
    }, { amount: 0.4 });
  }

  var figure = section.querySelector('[data-ispx-infra-motion="figure"]');
  if (figure) {
    inView(figure, function () {
      animate(
        figure,
        { opacity: [0, 1], scale: [0.97, 1] },
        { duration: 0.85, easing: ease }
      );
    }, { amount: 0.25 });
  }

  var items = section.querySelectorAll('[data-ispx-infra-motion="item"]');
  if (items.length) {
    inView(section.querySelector('.ispx-infra__list'), function () {
      animate(
        items,
        { opacity: [0, 1], y: [18, 0] },
        { delay: stagger(0.1), duration: 0.6, easing: ease }
      );
    }, { amount: 0.15 });
  }

  var strip = section.querySelector('[data-ispx-infra-motion="strip"]');
  if (strip) {
    inView(strip, function () {
      animate(
        strip,
        { opacity: [0, 1], y: [14, 0] },
        { duration: 0.7, easing: ease }
      );
    }, { amount: 0.35 });
  }
})();
