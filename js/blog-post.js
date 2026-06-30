(function () {
  'use strict';

  var tocLinks = document.querySelectorAll('.post-toc__list a');
  var blocks = document.querySelectorAll('.post-block[id]');
  var shareBtn = document.querySelector('.post-banner__share');

  if (shareBtn) {
    shareBtn.addEventListener('click', function () {
      var url = window.location.href;
      var label = shareBtn.querySelector('.post-banner__share-label');

      function done() {
        if (label) {
          var original = label.textContent;
          label.textContent = 'Link copiado';
          window.setTimeout(function () {
            label.textContent = original;
          }, 1800);
        }
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done).catch(function () {
          window.prompt('Copie o link do artigo:', url);
        });
        return;
      }

      window.prompt('Copie o link do artigo:', url);
    });
  }

  if (!tocLinks.length || !blocks.length || !('IntersectionObserver' in window)) {
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('id');
        tocLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
      });
    },
    { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
  );

  blocks.forEach(function (block) {
    observer.observe(block);
  });
})();
