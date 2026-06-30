/**
 * Formulário de contato — seleção de serviços e upload de arquivos
 */
(function () {
  'use strict';

  function initServiceCards() {
    document.querySelectorAll('.contato-service-card').forEach(function (card) {
      var input = card.querySelector('.contato-service-card__input');
      if (!input) return;

      function sync() {
        card.classList.toggle('is-selected', input.checked);
      }

      input.addEventListener('change', sync);
      sync();
    });
  }

  function initFileUpload() {
    document.querySelectorAll('.contato-upload').forEach(function (wrap) {
      var input = wrap.querySelector('.contato-upload__input');
      var btn = wrap.querySelector('.contato-upload__btn');
      if (!input || !btn) return;

      input.addEventListener('change', function () {
        if (input.files && input.files.length > 0) {
          var names = Array.prototype.map.call(input.files, function (f) { return f.name; }).join(', ');
          btn.textContent = names.length > 28 ? names.slice(0, 25) + '…' : names;
        } else {
          btn.textContent = 'Escolher arquivo';
        }
      });
    });
  }

  function init() {
    initServiceCards();
    initFileUpload();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
