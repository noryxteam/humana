(function () {
  var section = document.querySelector('.empresa-timeline');
  var milestones = document.querySelector('.empresa-timeline__milestones');
  if (!section || !milestones) return;

  var items = Array.prototype.slice.call(
    milestones.querySelectorAll('.empresa-timeline__item')
  );
  if (!items.length) return;

  var STAGGER_MS = 620;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasPlayed = false;

  items.forEach(function (item, index) {
    item.style.setProperty('--item-index', String(index));
  });

  function getCard(item) {
    return item.querySelector('.empresa-timeline__card');
  }

  function setStackFromAnchor(item, anchorItem, depth) {
    var anchorCard = getCard(anchorItem);
    var card = getCard(item);
    if (!anchorCard || !card) return;

    var anchorRect = anchorCard.getBoundingClientRect();
    var rect = card.getBoundingClientRect();
    var offsetX = anchorRect.left - rect.left;
    var offsetY = anchorRect.top - rect.top + depth * 4;

    item.style.setProperty('--stack-x', offsetX + 'px');
    item.style.setProperty('--stack-y', offsetY + 'px');
    item.style.setProperty('--stack-z', (-70 - depth * 28) + 'px');
    item.style.setProperty('--stack-rotate', (-12 - depth * 2.5) + 'deg');
  }

  function primeInitialStack() {
    items.forEach(function (item, index) {
      if (index === 0) {
        item.style.setProperty('--stack-x', '0px');
        item.style.setProperty('--stack-y', '0px');
        item.style.setProperty('--stack-z', '-110px');
        item.style.setProperty('--stack-rotate', '-22deg');
        return;
      }
      setStackFromAnchor(item, items[0], index);
    });
  }

  function prepare() {
    primeInitialStack();
    milestones.classList.add('is-prepared');
  }

  function revealAll() {
    milestones.classList.add('is-prepared');
    items.forEach(function (item) {
      item.classList.add('is-revealed');
    });
  }

  function revealSequential(index) {
    if (index >= items.length) return;

    if (index > 0) {
      setStackFromAnchor(items[index], items[index - 1], 0);
      void items[index].offsetWidth;
    }

    items[index].classList.add('is-revealed');

    if (index + 1 < items.length) {
      window.setTimeout(function () {
        revealSequential(index + 1);
      }, STAGGER_MS);
    }
  }

  function play() {
    if (hasPlayed) return;
    hasPlayed = true;

    if (reducedMotion) {
      revealAll();
      return;
    }

    milestones.classList.add('is-playing');
    void milestones.offsetWidth;
    revealSequential(0);
  }

  if (reducedMotion) {
    revealAll();
    return;
  }

  prepare();

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            play();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(section);
  } else {
    play();
  }
})();
