(function () {
  var section = document.querySelector('.historia-intro');
  if (!section) return;

  var year = section.querySelector('.historia-intro__year-bg');
  if (!year) return;

  section.classList.add('historia-intro--js');

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function play() {
    section.classList.add('is-year-in');
  }

  if (reducedMotion) {
    play();
    return;
  }

  if (!('IntersectionObserver' in window)) {
    play();
    return;
  }

  var target = section.querySelector('.historia-intro__hero') || section;

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

  observer.observe(target);
})();
