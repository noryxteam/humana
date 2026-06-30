/**
 * Logo carousel — loop infinito + autoplay
 */
(function () {
  'use strict';

  var AUTOPLAY_DELAY = 5000;
  var TRANSITION_MS = 500;

  function getVisibleCount() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 767) return 2;
    if (window.innerWidth <= 980) return 3;
    return 5;
  }

  function getSlideStep(track) {
    var slide = track.querySelector('.logo-carousel__slide');
    if (!slide) return 0;

    var styles = window.getComputedStyle(track);
    var gap = parseFloat(styles.columnGap || styles.gap) || 12;
    return slide.getBoundingClientRect().width + gap;
  }

  function setTransition(track, enabled) {
    track.style.transition = enabled ? 'transform ' + TRANSITION_MS + 'ms ease' : 'none';
  }

  function initCarousel(carousel) {
    var track = carousel.querySelector('.logo-carousel__track');
    var prevBtn = carousel.querySelector('.logo-carousel__nav--prev');
    var nextBtn = carousel.querySelector('.logo-carousel__nav--next');

    if (!track) return;

    var originals = Array.from(track.querySelectorAll('.logo-carousel__slide'));
    var originalCount = originals.length;

    if (!originalCount) return;

    originals.forEach(function (slide) {
      var clone = slide.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.dataset.clone = 'true';
      track.appendChild(clone);
    });

    var currentIndex = 0;
    var autoplayTimer = null;
    var isTransitioning = false;

    function updateTrack() {
      var step = getSlideStep(track);
      track.style.transform = 'translateX(-' + (currentIndex * step) + 'px)';
    }

    function finishLoopReset() {
      setTransition(track, false);
      currentIndex = 0;
      updateTrack();
      track.offsetHeight;
      setTransition(track, true);
      isTransitioning = false;
    }

    function goNext() {
      if (isTransitioning) return;

      currentIndex += 1;
      isTransitioning = true;
      setTransition(track, true);
      updateTrack();

      if (currentIndex >= originalCount) {
        track.addEventListener(
          'transitionend',
          function onEnd(event) {
            if (event.propertyName !== 'transform') return;
            track.removeEventListener('transitionend', onEnd);
            finishLoopReset();
          }
        );
      } else {
        track.addEventListener(
          'transitionend',
          function onEnd(event) {
            if (event.propertyName !== 'transform') return;
            track.removeEventListener('transitionend', onEnd);
            isTransitioning = false;
          }
        );
      }
    }

    function goPrev() {
      if (isTransitioning) return;

      if (currentIndex <= 0) {
        setTransition(track, false);
        currentIndex = originalCount;
        updateTrack();
        track.offsetHeight;
        setTransition(track, true);
        currentIndex -= 1;
      } else {
        currentIndex -= 1;
      }

      isTransitioning = true;
      updateTrack();

      track.addEventListener(
        'transitionend',
        function onEnd(event) {
          if (event.propertyName !== 'transform') return;
          track.removeEventListener('transitionend', onEnd);
          isTransitioning = false;
        }
      );
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(goNext, AUTOPLAY_DELAY);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        goNext();
        startAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goPrev();
        startAutoplay();
      });
    }

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    window.addEventListener('resize', function () {
      setTransition(track, false);
      if (currentIndex >= originalCount) {
        currentIndex = 0;
      }
      updateTrack();
      track.offsetHeight;
      setTransition(track, true);
    });

    setTransition(track, true);
    updateTrack();
    startAutoplay();
  }

  document.querySelectorAll('.logo-carousel').forEach(initCarousel);
})();
