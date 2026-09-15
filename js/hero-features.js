(function () {
  'use strict';

  var FEATURES = {
    blog: [
      { icon: 'newspaper', title: 'Notícias e projetos', text: 'Acompanhe nossas ações e iniciativas' },
      { icon: 'users', title: 'Inclusão social', text: 'Projetos que promovem transformação' },
      { icon: 'globe', title: 'Conhecimento', text: 'Conteúdo da Amazônia para o mundo' },
    ],
    contato: [
      { icon: 'handshake', title: 'Orçamento sob medida', text: 'Para empresas, eventos e instituições' },
      { icon: 'clock', title: 'Resposta rápida', text: 'Atendimento personalizado e ágil' },
      { icon: 'shield', title: 'Confidencialidade', text: 'Sigilo em todas as informações' },
    ],
    sobre: [
      { icon: 'flag', title: 'Desde 1995', text: 'Quase três décadas de atuação' },
      { icon: 'globe', title: 'Amazônia e mundo', text: 'Alcance nacional e internacional' },
      { icon: 'award', title: 'Excelência linguística', text: 'Serviços humanizados e precisos' },
    ],
    historia: [
      { icon: 'calendar', title: 'Nossa trajetória', text: 'Evolução constante desde 1995' },
      { icon: 'award', title: '500+ projetos', text: 'Experiência em todo o Brasil' },
      { icon: 'heart-handshake', title: 'Proximidade humana', text: 'Confiança em cada etapa' },
    ],
    isp: [
      { icon: 'headphones', title: 'Cabine profissional', text: 'Interpretação simultânea presencial' },
      { icon: 'users', title: 'Intérpretes experientes', text: 'Equipe qualificada e especializada' },
      { icon: 'mic', title: '300+ serviços', text: 'Eventos presenciais de alto nível' },
    ],
    isr: [
      { icon: 'monitor-smartphone', title: 'Eventos remotos', text: 'Interpretação para plataformas digitais' },
      { icon: 'globe', title: 'Multilíngue', text: 'Comunicação em qualquer idioma' },
      { icon: 'headphones', title: 'Flexibilidade', text: 'Eventos híbridos e online' },
    ],
    traducao: [
      { icon: 'languages', title: 'Tradução técnica', text: 'Jurídica, acadêmica e institucional' },
      { icon: 'file-text', title: 'Precisão terminológica', text: 'Fidelidade ao conteúdo original' },
      { icon: 'globe', title: 'Diversas áreas', text: 'Ciência, cultura e instituições' },
    ],
    cursos: [
      { icon: 'graduation-cap', title: 'Capacitação', text: 'Formação de tradutores e intérpretes' },
      { icon: 'users', title: 'Fortalecimento regional', text: 'Mais de 70 profissionais formados' },
      { icon: 'award', title: 'Excelência técnica', text: 'Cursos especializados desde 2009' },
    ],
    'blog-post': [
      { icon: 'newspaper', title: 'Blog Humana', text: 'Notícias, projetos e reflexões' },
      { icon: 'users', title: 'Inclusão', text: 'Iniciativas que transformam realidades' },
      { icon: 'globe', title: 'Conhecimento', text: 'Conteúdo da Amazônia para o mundo' },
    ],
  };

  var TARGETS = [
    { selector: '.blog-hero', key: 'blog' },
    { selector: '.contato-hero', key: 'contato' },
    { selector: '.empresa-intro', key: 'sobre' },
    { selector: '.historia-hero', key: 'historia' },
    { selector: '.isp-hero', key: 'isp' },
    { selector: '.servico-hero', key: resolveServicoKey },
    { selector: '.post-hero', key: 'blog-post' },
  ];

  function resolveServicoKey() {
    var path = window.location.pathname.replace(/\\/g, '/').toLowerCase();

    if (path.indexOf('isr') !== -1) {
      return 'isr';
    }
    if (path.indexOf('traducao') !== -1) {
      return 'traducao';
    }
    if (path.indexOf('cursos') !== -1) {
      return 'cursos';
    }

    return 'traducao';
  }

  function buildFeaturesMarkup(items) {
    var cards = items
      .map(function (item) {
        return (
          '<article class="hero-feature">' +
          '<div class="hero-feature__icon" aria-hidden="true">' +
          '<span data-icon="' +
          item.icon +
          '" data-icon-size="sm"></span>' +
          '</div>' +
          '<div class="hero-feature__copy">' +
          '<h2 class="hero-feature__title">' +
          item.title +
          '</h2>' +
          '<p class="hero-feature__text">' +
          item.text +
          '</p>' +
          '</div>' +
          '</article>'
        );
      })
      .join('');

    return (
      '<div class="hero__features">' +
      '<div class="hero__features-inner" style="--hero-features-cols:' +
      items.length +
      '">' +
      cards +
      '</div></div>'
    );
  }

  function mountHeroFeatures() {
    TARGETS.forEach(function (target) {
      var hero = document.querySelector(target.selector);
      if (!hero || hero.querySelector('.hero__features')) {
        return;
      }

      var key = typeof target.key === 'function' ? target.key() : target.key;
      var items = FEATURES[key];
      if (!items || !items.length) {
        return;
      }

      hero.insertAdjacentHTML('beforeend', buildFeaturesMarkup(items));
    });

    if (window.HumanaIcons && typeof window.HumanaIcons.mount === 'function') {
      window.HumanaIcons.mount();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountHeroFeatures);
  } else {
    mountHeroFeatures();
  }
})();
