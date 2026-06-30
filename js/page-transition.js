/**
 * Transição premium entre páginas — camada branca da direita para a esquerda.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'humana-page-transition';
  var DURATION_MS = 1000;

  if (sessionStorage.getItem(STORAGE_KEY) === 'active') {
    document.documentElement.classList.add('page-transition-lock');
  }

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function pageSlug(url) {
    var file = url.pathname.split('/').pop() || 'index.html';

    if (!file || file === '/') {
      file = 'index.html';
    }

    return file.toLowerCase().replace(/\.html$/, '') || 'index';
  }

  function isSameDocument(targetUrl) {
    var current = new URL(window.location.href);
    return pageSlug(current) === pageSlug(targetUrl);
  }

  function isInternalPageLink(anchor) {
    if (!anchor || anchor.tagName !== 'A') {
      return false;
    }

    var href = anchor.getAttribute('href');

    if (!href || href.charAt(0) === '#') {
      return false;
    }

    if (
      href.indexOf('mailto:') === 0 ||
      href.indexOf('tel:') === 0 ||
      href.indexOf('javascript:') === 0
    ) {
      return false;
    }

    if (anchor.target === '_blank' || anchor.hasAttribute('download')) {
      return false;
    }

    try {
      var targetUrl = new URL(anchor.href, window.location.href);
      return targetUrl.origin === window.location.origin;
    } catch (error) {
      return false;
    }
  }

  function waitForTransition(element) {
    return new Promise(function (resolve) {
      var finished = false;

      function done(event) {
        if (event && event.propertyName !== 'transform') {
          return;
        }

        if (finished) {
          return;
        }

        finished = true;
        element.removeEventListener('transitionend', done);
        resolve();
      }

      element.addEventListener('transitionend', done);
      window.setTimeout(done, DURATION_MS + 120);
    });
  }

  function ensureOverlay() {
    var overlay = document.querySelector('.page-transition');

    if (overlay) {
      return overlay;
    }

    overlay = document.createElement('div');
    overlay.className = 'page-transition';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML =
      '<div class="page-transition__panel">' +
      '<span class="page-transition__edge" aria-hidden="true"></span>' +
      '</div>';

    document.body.appendChild(overlay);
    return overlay;
  }

  function runReveal(overlay, panel) {
    document.documentElement.classList.remove('page-transition-lock');
    overlay.classList.add('is-active', 'is-covered');

    panel.offsetHeight;

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add('is-revealing');
        overlay.classList.remove('is-covered');

        waitForTransition(panel).then(function () {
          overlay.classList.remove('is-active', 'is-revealing');
        });
      });
    });
  }

  function runExit(overlay, panel, destination) {
    overlay.classList.add('is-active');
    overlay.classList.remove('is-revealing', 'is-covered');

    panel.offsetHeight;

    requestAnimationFrame(function () {
      overlay.classList.add('is-covered');

      waitForTransition(panel).then(function () {
        sessionStorage.setItem(STORAGE_KEY, 'active');
        window.location.href = destination;
      });
    });
  }

  function init() {
    if (prefersReducedMotion()) {
      sessionStorage.removeItem(STORAGE_KEY);
      document.documentElement.classList.remove('page-transition-lock');
      return;
    }

    var overlay = ensureOverlay();
    var panel = overlay.querySelector('.page-transition__panel');

    if (sessionStorage.getItem(STORAGE_KEY) === 'active') {
      sessionStorage.removeItem(STORAGE_KEY);
      runReveal(overlay, panel);
    }

    document.addEventListener('click', function (event) {
      var anchor = event.target.closest('a');

      if (!isInternalPageLink(anchor)) {
        return;
      }

      var targetUrl = new URL(anchor.href, window.location.href);

      if (isSameDocument(targetUrl)) {
        return;
      }

      event.preventDefault();
      runExit(overlay, panel, anchor.href);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
