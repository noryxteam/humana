(function () {
  'use strict';

  var section = document.querySelector('.section--blog');
  if (!section) {
    return;
  }

  var grid = section.querySelector('.blog-section__grid');
  var header = section.querySelector('.blog-header');
  if (!grid) {
    return;
  }

  var cards = Array.prototype.slice.call(grid.querySelectorAll('.blog-dark-card'));
  if (!cards.length) {
    return;
  }

  section.classList.add('blog-section--js');

  var STAGGER_MS = 580;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cardsPlayed = false;

  cards.forEach(function (card, index) {
    card.style.setProperty('--item-index', String(index));
  });

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

  function primeInitialStack() {
    cards.forEach(function (card, index) {
      if (index === 0) {
        card.style.setProperty('--stack-x', '0px');
        card.style.setProperty('--stack-y', '0px');
        card.style.setProperty('--stack-z', '-110px');
        card.style.setProperty('--stack-rotate', '-22deg');
        return;
      }
      setStackFromAnchor(card, cards[0], index);
    });
  }

  function prepare() {
    primeInitialStack();
    grid.classList.add('is-prepared');
  }

  function revealAll() {
    grid.classList.add('is-prepared', 'is-playing');
    section.classList.add('is-header-in', 'is-footer-in');
    cards.forEach(function (card) {
      card.classList.add('is-revealed');
    });
  }

  function revealSequential(index) {
    if (index >= cards.length) {
      section.classList.add('is-footer-in');
      return;
    }

    if (index > 0) {
      setStackFromAnchor(cards[index], cards[index - 1], 0);
      void cards[index].offsetWidth;
    }

    cards[index].classList.add('is-revealed');

    if (index + 1 < cards.length) {
      window.setTimeout(function () {
        revealSequential(index + 1);
      }, STAGGER_MS);
    } else {
      window.setTimeout(function () {
        section.classList.add('is-footer-in');
      }, Math.round(STAGGER_MS * 0.65));
    }
  }

  function playHeader() {
    section.classList.add('is-header-in');
  }

  function playCards() {
    if (cardsPlayed) {
      return;
    }
    cardsPlayed = true;

    if (reducedMotion) {
      revealAll();
      return;
    }

    grid.classList.add('is-playing');
    void grid.offsetWidth;
    revealSequential(0);
  }

  if (reducedMotion) {
    revealAll();
    return;
  }

  prepare();

  if ('IntersectionObserver' in window) {
    if (header) {
      var headerObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              playHeader();
              headerObserver.disconnect();
            }
          });
        },
        { threshold: 0.35, rootMargin: '0px 0px -4% 0px' }
      );
      headerObserver.observe(header);
    } else {
      playHeader();
    }

    var gridObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            playCards();
            gridObserver.disconnect();
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );
    gridObserver.observe(grid);
  } else {
    playHeader();
    playCards();
  }
})();
