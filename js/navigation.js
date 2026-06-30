/**
 * Slide menu navigation
 */
(function () {
  'use strict';

  var toggle = document.getElementById('menu-toggle');
  var slideMenu = document.getElementById('slide-menu');
  var overlay = document.getElementById('menu-overlay');
  var subMenus = document.querySelectorAll('.slide-menu__nav li.has-sub > a');

  function openMenu() {
    slideMenu.classList.add('is-open');
    overlay.classList.add('is-visible');
    toggle.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    slideMenu.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      if (slideMenu.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  subMenus.forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (window.innerWidth <= 980) {
        event.preventDefault();
        var parent = link.parentElement;
        parent.classList.toggle('is-expanded');
      }
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
})();
