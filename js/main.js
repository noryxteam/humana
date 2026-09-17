/**
 * Inicialização geral
 */
(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Mensagem enviada com sucesso! (demonstração local)');
      form.reset();
    });
  }

  var heroVideo = document.querySelector('.hero__video');
  if (heroVideo) {
    var tryPlay = function () {
      heroVideo.classList.add('is-ready');
      var playPromise = heroVideo.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(function () {});
      }
    };

    if (!heroVideo.getAttribute('src') && window.__heroVideoSrc) {
      heroVideo.src = window.__heroVideoSrc;
      heroVideo.load();
    }

    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute('playsinline', '');
    heroVideo.setAttribute('webkit-playsinline', '');

    if (heroVideo.readyState >= 2) {
      tryPlay();
    }

    heroVideo.addEventListener('loadeddata', tryPlay);
    heroVideo.addEventListener('canplay', tryPlay);
    heroVideo.addEventListener('playing', tryPlay);

    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) {
        tryPlay();
      }
    });
  }
})();
