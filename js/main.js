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
    heroVideo.play().catch(function () {
      /* autoplay bloqueado pelo navegador */
    });
  }
})();
