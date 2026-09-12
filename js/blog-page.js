(function () {
  'use strict';

  var page = document.querySelector('.blog-page');
  if (!page) {
    return;
  }

  var grid = page.querySelector('.blog-page__grid');
  if (!grid || grid.classList.contains('blog-section__grid')) {
    return;
  }

  var cards = Array.prototype.slice.call(grid.querySelectorAll('.blog-dark-card'));
  if (!cards.length) {
    return;
  }

  page.classList.add('blog-page--js');

  var STAGGER_MS = 110;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealAll() {
    cards.forEach(function (card) {
      card.classList.add('is-revealed');
    });
  }

  if (reducedMotion) {
    revealAll();
    return;
  }

  function getColumns() {
    var template = window.getComputedStyle(grid).gridTemplateColumns;
    var columns = template.split(' ').filter(function (part) {
      return part && part !== '/';
    });
    return Math.max(1, columns.length);
  }

  var columns = getColumns();

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        var card = entry.target;
        /* atraso pela posição na linha, para o grupo entrar em cascata */
        var delay = (cards.indexOf(card) % columns) * STAGGER_MS;

        window.setTimeout(function () {
          card.classList.add('is-revealed');
        }, delay);

        observer.unobserve(card);
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });

  var resizeTimer;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      columns = getColumns();
    }, 180);
  });
})();
