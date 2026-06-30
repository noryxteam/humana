/**
 * Navbar overlay — fundo progressivo conforme o scroll (todas as páginas)
 */
(function () {
  'use strict';

  var nav = document.querySelector('.page-nav--overlay');
  if (!nav) {
    return;
  }

  var SCROLL_RANGE = 150;
  var ticking = false;

  function updateNavbarScroll() {
    var progress = window.scrollY / SCROLL_RANGE;
    if (progress < 0) {
      progress = 0;
    } else if (progress > 1) {
      progress = 1;
    }
    nav.style.setProperty('--nav-scroll', String(progress));
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateNavbarScroll);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateNavbarScroll();
})();
