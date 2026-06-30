(function () {
  'use strict';

  var section = document.querySelector('.section--location');
  if (!section) {
    return;
  }

  var grid = section.querySelector('.location-section__grid');
  if (!grid) {
    return;
  }

  section.classList.add('location-section--js');

  var IMAGE_MS = 900;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function play() {
    section.classList.add('is-image-in');

    if (reducedMotion) {
      section.classList.add('is-text-in');
      return;
    }

    window.setTimeout(function () {
      section.classList.add('is-text-in');
    }, IMAGE_MS);
  }

  if (reducedMotion) {
    play();
    return;
  }

  if (!('IntersectionObserver' in window)) {
    play();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          play();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.28, rootMargin: '0px 0px -8% 0px' }
  );

  observer.observe(section);
})();
