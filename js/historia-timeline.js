(function () {
  var section = document.querySelector('.historia-timeline--js');
  if (!section) return;

  var body = section.querySelector('.historia-timeline__body');
  var list = section.querySelector('.historia-timeline__list');
  var lineFill = section.querySelector('.historia-timeline__line-fill');
  if (!body || !list || !lineFill) return;

  var milestones = Array.prototype.slice.call(
    list.querySelectorAll('.historia-milestone')
  );
  if (!milestones.length) return;

  var LINE_MS = 620;
  var DOT_MS = 220;
  var CARD_MS = 600;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealed = { 0: true };
  var pending = [];
  var animating = false;
  var lastLineY = 0;

  function getDotCenterY(milestone) {
    var marker = milestone.querySelector('.historia-milestone__marker');
    if (!marker) return 0;

    var bodyRect = body.getBoundingClientRect();
    var markerRect = marker.getBoundingClientRect();
    return markerRect.top - bodyRect.top + markerRect.height / 2;
  }

  function setLineHeight(y, animate) {
    lastLineY = y;
    if (!animate || reducedMotion) {
      lineFill.style.transition = 'none';
      lineFill.style.height = y + 'px';
      void lineFill.offsetWidth;
      lineFill.style.transition = '';
      return;
    }

    lineFill.style.height = y + 'px';
  }

  function revealAll() {
    milestones.forEach(function (milestone, index) {
      revealed[index] = true;
      milestone.classList.add('is-dot-visible', 'is-card-visible');
    });
    setLineHeight(getDotCenterY(milestones[milestones.length - 1]), false);
  }

  function prepareFirst() {
    var first = milestones[0];
    first.classList.add('is-dot-visible', 'is-card-visible');
    setLineHeight(getDotCenterY(first), false);
  }

  function revealMilestone(index, done) {
    if (revealed[index]) {
      done();
      return;
    }

    revealed[index] = true;
    var milestone = milestones[index];
    var targetY = getDotCenterY(milestone);
    var startY = index > 0 ? getDotCenterY(milestones[index - 1]) : targetY;

    setLineHeight(startY, false);

    window.requestAnimationFrame(function () {
      setLineHeight(targetY, true);
    });

    window.setTimeout(function () {
      milestone.classList.add('is-dot-visible');
    }, Math.round(LINE_MS * 0.82));

    window.setTimeout(function () {
      milestone.classList.add('is-card-visible');
      window.setTimeout(done, CARD_MS);
    }, LINE_MS + DOT_MS);
  }

  function flushQueue() {
    if (animating || !pending.length) return;

    pending.sort(function (a, b) {
      return a - b;
    });

    var nextIndex = pending.shift();
    if (revealed[nextIndex]) {
      flushQueue();
      return;
    }

    animating = true;
    revealMilestone(nextIndex, function () {
      animating = false;
      flushQueue();
    });
  }

  function queueReveal(index) {
    if (revealed[index] || pending.indexOf(index) !== -1) return;
    pending.push(index);
    flushQueue();
  }

  function onResize() {
    var lastRevealed = 0;
    milestones.forEach(function (_, index) {
      if (revealed[index]) lastRevealed = index;
    });
    setLineHeight(getDotCenterY(milestones[lastRevealed]), false);
  }

  if (reducedMotion) {
    section.classList.add('is-ready');
    revealAll();
    return;
  }

  prepareFirst();
  section.classList.add('is-ready');

  milestones.slice(1).forEach(function (milestone, offset) {
    var index = offset + 1;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
              queueReveal(index);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.4, rootMargin: '0px 0px -8% 0px' }
      );
      observer.observe(milestone);
      return;
    }

    queueReveal(index);
  });

  window.addEventListener('resize', onResize);
})();
