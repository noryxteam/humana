(function () {
  'use strict';

  var section = document.querySelector('.empresa-blocks');
  if (!section) {
    return;
  }

  var blocks = section.querySelectorAll('.empresa-block');
  if (!blocks.length) {
    return;
  }

  section.classList.add('empresa-blocks--js');

  function revealAll() {
    blocks.forEach(function (block) {
      block.classList.add('is-visible');
    });
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealAll();
    return;
  }

  if (!('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.22, rootMargin: '0px 0px -8% 0px' }
  );

  blocks.forEach(function (block) {
    observer.observe(block);
  });
})();
