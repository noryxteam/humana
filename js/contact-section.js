/**
 * Contato — animações discretas ao entrar na viewport
 */
(function () {
  'use strict';

  var section = document.querySelector('.contact-section');
  if (!section || !('IntersectionObserver' in window)) {
    return;
  }

  var targets = section.querySelectorAll('.contact-card, .contact-section__feature');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
