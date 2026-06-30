(function () {
  'use strict';

  var section = document.querySelector('.section--mission');
  if (!section) {
    return;
  }

  section.classList.add('mission-section--js');

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function play() {
    section.classList.add('is-map-in', 'is-content-in');
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
    { threshold: 0.22, rootMargin: '0px 0px -8% 0px' }
  );

  observer.observe(section);
})();
