/**
 * Tradução — página premium
 */
(function () {
  'use strict';

  function initCarousel() {
    var root = document.querySelector('[data-tradx-carousel]');
    if (!root) return;

    var track = root.querySelector('[data-tradx-carousel-track]');
    var dotsWrap = root.querySelector('[data-tradx-carousel-dots]');
    var prev = root.querySelector('[data-tradx-carousel-prev]');
    var next = root.querySelector('[data-tradx-carousel-next]');
    if (!track) return;

    var cards = Array.prototype.slice.call(track.children);
    var total = cards.length;
    if (!total) return;

    var index = 0;
    var locked = false;

    function buildDots() {
      if (!dotsWrap || dotsWrap.children.length) return;
      for (var i = 0; i < total; i++) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'tradx-projects__dot';
        btn.setAttribute('aria-label', 'Ir para o projeto ' + (i + 1));
        btn.dataset.index = String(i);
        dotsWrap.appendChild(btn);
      }
    }

    function paint() {
      cards.forEach(function (card, i) {
        var rel = (i - index + total) % total;
        card.classList.remove('is-front', 'is-next', 'is-reserve', 'is-out');
        if (rel === 0) card.classList.add('is-front');
        else if (rel === 1) card.classList.add('is-next');
        else if (rel === total - 1) card.classList.add('is-out');
        else card.classList.add('is-reserve');
        card.setAttribute('aria-hidden', rel === 0 ? 'false' : 'true');
      });

      if (dotsWrap) {
        Array.prototype.forEach.call(dotsWrap.children, function (dot, i) {
          dot.classList.toggle('is-active', i === index);
        });
      }
    }

    function goTo(i) {
      if (locked) return;
      var target = ((i % total) + total) % total;
      if (target === index) return;
      locked = true;
      index = target;
      paint();
      setTimeout(function () { locked = false; }, 380);
    }

    function step(dir) {
      goTo(index + dir);
    }

    if (prev) prev.addEventListener('click', function () { step(-1); });
    if (next) next.addEventListener('click', function () { step(1); });

    if (dotsWrap) {
      dotsWrap.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-index]');
        if (!btn) return;
        goTo(parseInt(btn.dataset.index, 10));
      });
    }

    // Clicar no card de trás traz ele para a frente
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        if (card.classList.contains('is-next')) step(1);
      });
    });

    // Swipe no touch
    var startX = null;
    track.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
      startX = null;
    });

    buildDots();
    paint();
    requestAnimationFrame(function () {
      track.classList.add('is-ready');
    });
  }

  function init() {
    if (window.HumanaIcons && window.HumanaIcons.mount) window.HumanaIcons.mount();
    initCarousel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
