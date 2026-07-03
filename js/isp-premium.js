/**
 * ISP premium — reveal, contadores e carrossel de clientes
 */
(function () {
  'use strict';

  function initReveal() {
    var nodes = document.querySelectorAll('.isp-premium-reveal');
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    nodes.forEach(function (el) { observer.observe(el); });
  }

  function animateValue(el, end, suffix) {
    var duration = 1400;
    var start = 0;
    var startTime = null;
    suffix = suffix || '';

    function frame(time) {
      if (!startTime) startTime = time;
      var progress = Math.min((time - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(start + (end - start) * eased);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  function initStats() {
    var cards = document.querySelectorAll('[data-isp-stat]');
    if (!cards.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var card = entry.target;
          if (card.dataset.counted === 'true') return;
          card.dataset.counted = 'true';

          var valueEl = card.querySelector('.isp-premium-stat__value');
          var raw = card.getAttribute('data-isp-stat');
          if (!valueEl || !raw) return;

          if (raw === '3M') {
            valueEl.textContent = '0';
            var t0 = null;
            function mFrame(t) {
              if (!t0) t0 = t;
              var p = Math.min((t - t0) / 1400, 1);
              var eased = 1 - Math.pow(1 - p, 3);
              if (p < 1) {
                valueEl.textContent = (eased * 3).toFixed(1).replace('.0', '') + 'M';
                requestAnimationFrame(mFrame);
              } else {
                valueEl.textContent = '3M';
              }
            }
            requestAnimationFrame(mFrame);
          } else {
            animateValue(valueEl, parseInt(raw, 10), '');
          }

          observer.unobserve(card);
        });
      },
      { threshold: 0.35 }
    );

    cards.forEach(function (card) { observer.observe(card); });
  }

  function initCarousel() {
    var track = document.getElementById('isp-premium-logo-track');
    if (!track) return;

    var viewport = track.parentElement;
    var prevBtn = document.querySelector('[data-isp-premium-prev]');
    var nextBtn = document.querySelector('[data-isp-premium-next]');
    var gap = 12;
    var index = 0;

    function visibleSlides() {
      var w = window.innerWidth;
      if (w <= 576) return 1;
      if (w <= 768) return 2;
      if (w <= 980) return 3;
      if (w <= 1200) return 4;
      return 5;
    }

    function slideStep() {
      var count = visibleSlides();
      return (viewport.clientWidth + gap) / count;
    }

    function maxIndex() {
      return Math.max(0, track.children.length - visibleSlides());
    }

    function applySlideWidths() {
      var step = slideStep();
      Array.from(track.children).forEach(function (slide) {
        slide.style.flex = '0 0 ' + (step - gap) + 'px';
        slide.style.width = (step - gap) + 'px';
      });
    }

    function update() {
      applySlideWidths();
      track.style.transform = 'translateX(' + (-index * slideStep()) + 'px)';
    }

    function go(delta) {
      index = Math.min(maxIndex(), Math.max(0, index + delta));
      update();
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { go(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { go(1); });
    window.addEventListener('resize', function () {
      index = Math.min(index, maxIndex());
      update();
    });

    update();
  }

  function init() {
    initReveal();
    initStats();
    initCarousel();
    if (window.HumanaIcons && typeof window.HumanaIcons.mount === 'function') {
      window.HumanaIcons.mount();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
