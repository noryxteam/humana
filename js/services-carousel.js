/**
 * Carrossel 3D dos cards de serviços — somente mobile
 */
(function () {
  'use strict';

  var MQ = '(max-width: 980px)';
  var MOVE_MS = 620;

  function init() {
    var root = document.querySelector('[data-services-carousel]');
    if (!root) return;

    var items = Array.prototype.slice.call(root.querySelectorAll('.services-official__item'));
    var prev = root.querySelector('[data-services-prev]');
    var next = root.querySelector('[data-services-next]');
    var count = items.length;
    if (count < 2) return;

    var index = 0;
    var busy = false;
    var mq = window.matchMedia(MQ);

    function posOf(i, active) {
      var delta = (i - active + count) % count;
      if (delta === 0) return 'front';
      if (delta === 1) return 'right';
      if (delta === count - 1) return 'left';
      return 'right';
    }

    function paint(fromIndex) {
      items.forEach(function (item, i) {
        var nextPos = posOf(i, index);
        var prevPos = typeof fromIndex === 'number' ? posOf(i, fromIndex) : nextPos;
        var wrapping =
          (prevPos === 'left' && nextPos === 'right') ||
          (prevPos === 'right' && nextPos === 'left');

        item.classList.remove('is-front', 'is-left', 'is-right', 'is-wrap');
        item.classList.add('is-' + nextPos);
        if (wrapping) item.classList.add('is-wrap');
        item.setAttribute('aria-hidden', nextPos === 'front' ? 'false' : 'true');
        item.tabIndex = nextPos === 'front' ? 0 : -1;
      });
    }

    function go(dir) {
      if (!mq.matches || busy) return;
      busy = true;
      var from = index;
      index = (index + dir + count) % count;
      paint(from);
      window.setTimeout(function () {
        items.forEach(function (item) {
          item.classList.remove('is-wrap');
        });
        busy = false;
      }, MOVE_MS);
    }

    if (prev) prev.addEventListener('click', function () { go(-1); });
    if (next) next.addEventListener('click', function () { go(1); });

    items.forEach(function (item, i) {
      item.addEventListener('click', function (event) {
        if (!mq.matches || i === index) return;
        event.preventDefault();
        var delta = (i - index + count) % count;
        go(delta === 1 ? 1 : -1);
      });
    });

    var touchX = 0;
    root.addEventListener(
      'touchstart',
      function (event) {
        if (!event.changedTouches || !event.changedTouches[0]) return;
        touchX = event.changedTouches[0].clientX;
      },
      { passive: true }
    );
    root.addEventListener(
      'touchend',
      function (event) {
        if (!mq.matches || !event.changedTouches || !event.changedTouches[0]) return;
        var dx = event.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) < 36) return;
        go(dx < 0 ? 1 : -1);
      },
      { passive: true }
    );

    paint();

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
