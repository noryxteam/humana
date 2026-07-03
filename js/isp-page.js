/**
 * ISP — página premium (reveal, FAQ, lightbox, carrosséis)
 */
(function () {
  'use strict';

  function initReveal() {
    var nodes = document.querySelectorAll('.ispx-reveal');
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    nodes.forEach(function (el) { observer.observe(el); });
  }

  function initStats() {
    document.querySelectorAll('[data-ispx-count]').forEach(function (el) {
      var target = el.getAttribute('data-ispx-count');
      var suffix = el.getAttribute('data-ispx-suffix') || '';
      var numeric = parseInt(target, 10);
      if (!Number.isFinite(numeric)) return;

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting || el.dataset.done === 'true') return;
            el.dataset.done = 'true';
            var start = performance.now();
            var duration = 1400;

            function frame(now) {
              var p = Math.min((now - start) / duration, 1);
              var eased = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.round(numeric * eased) + suffix;
              if (p < 1) requestAnimationFrame(frame);
            }

            requestAnimationFrame(frame);
            observer.unobserve(el);
          });
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
    });
  }

  function initFaq() {
    document.querySelectorAll('.ispx-faq__item').forEach(function (item) {
      var btn = item.querySelector('.ispx-faq__trigger');
      if (!btn) return;

      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        document.querySelectorAll('.ispx-faq__item.is-open').forEach(function (open) {
          open.classList.remove('is-open');
          var trigger = open.querySelector('.ispx-faq__trigger');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  function initLightbox() {
    var lb = document.getElementById('ispx-lightbox');
    if (!lb) return;

    var img = lb.querySelector('.ispx-lightbox__img');
    var closeBtn = lb.querySelector('.ispx-lightbox__close');

    function open(src, alt) {
      img.src = src;
      img.alt = alt || '';
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      img.src = '';
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-ispx-lightbox]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var full = trigger.getAttribute('data-ispx-lightbox');
        var altEl = trigger.querySelector('img');
        var alt = altEl ? altEl.getAttribute('alt') || '' : '';
        if (full) open(full, alt);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', close);
    lb.addEventListener('click', function (e) {
      if (e.target === lb) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  function initCarousel(trackId, prevSel, nextSel) {
    var track = document.getElementById(trackId);
    if (!track) return;

    var viewport = track.parentElement;
    var prevBtn = document.querySelector(prevSel);
    var nextBtn = document.querySelector(nextSel);
    var gap = 20;
    var index = 0;

    function visible() {
      var w = window.innerWidth;
      if (w <= 576) return 1;
      if (w <= 900) return 1;
      return 1;
    }

    function step() {
      return viewport.clientWidth;
    }

    function maxIndex() {
      return Math.max(0, track.children.length - visible());
    }

    function update() {
      track.style.transform = 'translateX(' + (-index * step()) + 'px)';
    }

    function go(d) {
      index = Math.min(maxIndex(), Math.max(0, index + d));
      update();
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { go(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { go(1); });
    window.addEventListener('resize', function () {
      index = Math.min(index, maxIndex());
      update();
    });

    Array.from(track.children).forEach(function (slide) {
      slide.style.minWidth = '100%';
      slide.style.flex = '0 0 100%';
    });

    update();
  }

  function initTimelineScroll() {
    var track = document.querySelector('.ispx-process__track');
    if (!track || window.innerWidth > 900) return;

    var isDown = false;
    var startX = 0;
    var scrollLeft = 0;

    track.addEventListener('mousedown', function (e) {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', function () { isDown = false; });
    track.addEventListener('mouseup', function () { isDown = false; });
    track.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX) * 1.2;
    });
  }

  function init() {
    initReveal();
    initStats();
    initFaq();
    initLightbox();
    initCarousel('ispx-testimonials-track', '[data-ispx-test-prev]', '[data-ispx-test-next]');
    initTimelineScroll();
    if (window.HumanaIcons && window.HumanaIcons.mount) window.HumanaIcons.mount();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
