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

  var STAGGER_MS = 520;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var playedRows = Object.create(null);
  var observers = [];

  function getColumns() {
    var template = window.getComputedStyle(grid).gridTemplateColumns;
    var columns = template.split(' ').filter(function (part) {
      return part && part !== '/';
    });
    return Math.max(1, columns.length);
  }

  function getRows() {
    var cols = getColumns();
    var rows = [];
    var index = 0;

    while (index < cards.length) {
      rows.push(cards.slice(index, index + cols));
      index += cols;
    }

    return rows;
  }

  function setStackFromAnchor(card, anchorCard, depth) {
    var anchorRect = anchorCard.getBoundingClientRect();
    var rect = card.getBoundingClientRect();
    var offsetX = anchorRect.left - rect.left;
    var offsetY = anchorRect.top - rect.top + depth * 4;

    card.style.setProperty('--stack-x', offsetX + 'px');
    card.style.setProperty('--stack-y', offsetY + 'px');
    card.style.setProperty('--stack-z', (-70 - depth * 28) + 'px');
    card.style.setProperty('--stack-rotate', (-12 - depth * 2.5) + 'deg');
  }

  function prepareRow(rowCards) {
    rowCards.forEach(function (card, index) {
      card.classList.add('is-row-prepared');
      card.style.setProperty('--item-index', String(index));

      if (index === 0) {
        card.style.setProperty('--stack-x', '52px');
        card.style.setProperty('--stack-y', '0px');
        card.style.setProperty('--stack-z', '-110px');
        card.style.setProperty('--stack-rotate', '-22deg');
        return;
      }

      setStackFromAnchor(card, rowCards[0], index);
    });
  }

  function revealAll() {
    cards.forEach(function (card) {
      card.classList.add('is-row-prepared', 'is-row-playing', 'is-revealed');
    });
  }

  function revealSequential(rowCards, index) {
    if (index >= rowCards.length) {
      return;
    }

    if (index > 0) {
      setStackFromAnchor(rowCards[index], rowCards[index - 1], 0);
      void rowCards[index].offsetWidth;
    }

    rowCards[index].classList.add('is-revealed');

    if (index + 1 < rowCards.length) {
      window.setTimeout(function () {
        revealSequential(rowCards, index + 1);
      }, STAGGER_MS);
    }
  }

  function playRow(rowIndex, rowCards) {
    if (playedRows[rowIndex]) {
      return;
    }
    playedRows[rowIndex] = true;

    rowCards.forEach(function (card) {
      card.classList.add('is-row-playing');
    });

    void grid.offsetWidth;
    revealSequential(rowCards, 0);
  }

  function disconnectObservers() {
    observers.forEach(function (observer) {
      observer.disconnect();
    });
    observers = [];
  }

  function setupRowObservers() {
    disconnectObservers();

    var rows = getRows();

    rows.forEach(function (rowCards, rowIndex) {
      if (!playedRows[rowIndex]) {
        prepareRow(rowCards);
      }

      if (playedRows[rowIndex]) {
        return;
      }

      var target = rowCards[0];
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              playRow(rowIndex, rowCards);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.28, rootMargin: '0px 0px -6% 0px' }
      );

      observer.observe(target);
      observers.push(observer);
    });
  }

  if (reducedMotion) {
    revealAll();
    return;
  }

  setupRowObservers();

  var resizeTimer;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(setupRowObservers, 180);
  });
})();
