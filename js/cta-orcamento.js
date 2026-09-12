/**
 * CTA de orçamento — encaminha os dados do formulário para a página Contato
 * (usado nas páginas de serviço: ISP, ISR, Tradução, Cursos Formativos).
 */
(function () {
  'use strict';

  function initForm(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var params = new URLSearchParams();
      params.set('nome', form.nome.value.trim());
      params.set('email', form.email.value.trim());
      params.set('telefone', form.telefone.value.trim());

      var servicos = Array.prototype.map.call(
        form.querySelectorAll('input[name="servicos[]"]:checked'),
        function (input) { return input.value; }
      );
      if (servicos.length) params.set('servicos', servicos.join(', '));

      var idioma = form.querySelector('select[name="traduz-para"]');
      if (idioma && idioma.value) params.set('idioma', idioma.value);

      var mensagem = form.querySelector('textarea[name="mensagem"]');
      if (mensagem && mensagem.value.trim()) params.set('mensagem', mensagem.value.trim());

      window.location.href = 'contato.html?' + params.toString() + '#orcamento';
    });
  }

  function init() {
    document.querySelectorAll('[data-orcamento-form]').forEach(initForm);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
