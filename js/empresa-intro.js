(function () {
  'use strict';

  var intro = document.querySelector('.empresa-intro');
  if (!intro) {
    return;
  }

  intro.classList.add('empresa-intro--js');

  function play() {
    intro.classList.add('is-playing');
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    play();
    return;
  }

  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(play);
  });
})();
