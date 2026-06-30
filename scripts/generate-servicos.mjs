import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const NAV = `      <ul class="page-nav__list">
        <li class="page-nav__item"><a href="index.html">Início</a></li>
        <li class="page-nav__item"><a href="sobre.html">Sobre Nós</a></li>
        <li class="page-nav__item page-nav__item--dropdown is-active">
          <a href="#" class="page-nav__dropdown-trigger" aria-haspopup="true" aria-expanded="false">
            Serviços
            <span class="page-nav__link-icon" data-icon="chevron-down" data-icon-size="sm"></span>
          </a>
          <ul class="page-nav__dropdown">
            <li><a href="isp.html">Interpretação Simultânea Presencial</a></li>
            <li><a href="isr.html">Interpretação Simultânea Remota</a></li>
            <li><a href="traducao.html">Tradução</a></li>
            <li><a href="cursos-formativos.html">Cursos Formativos</a></li>
          </ul>
        </li>
        <li class="page-nav__item"><a href="blog.html">Blog</a></li>
        <li class="page-nav__item"><a href="contato.html">Contato</a></li>
      </ul>`;

const PAGES = [
  {
    file: 'isp.html',
    title: 'Interpretação Simultânea Presencial',
    meta: 'Interpretação simultânea presencial de alto nível para conferências, seminários e eventos multilíngues.',
    heroImg: 'assets/images/servicos/isp-hero.png',
    heroAlt: 'Interpretação Simultânea Presencial',
    subtitle: 'A necessidade de adaptabilidade',
    stats: [
      { value: '39', label: 'tradutores' },
      { value: '97', label: 'intérpretes' },
      { value: '300+', label: 'serviços de interpretação' },
    ],
    definition: {
      title: 'Interpretação Simultânea (IS)',
      type: '[substantivo, s. f.]',
      text: 'Ação que consiste em estabelecer, simultânea ou consecutivamente, comunicação verbal ou não verbal entre duas entidades, pessoas ou entre um locutor e seu público.',
      image: 'assets/images/servicos/97-interpretes.png',
    },
    features: [
      { title: 'Versatilidade', text: 'Ao longo dos primeiros quinze anos da sua trajetória, a HUMANA COM & TRAD tem prestado 300 serviços de interpretação em eventos de variadas disciplinas e temáticas.' },
      { title: 'Adaptação', text: 'Seja a versatilidade, no que se refere aos temas tratados, assim como a capacidade de adaptação, na hora de trabalhar em lugares remotos, representam um valor adicional que a empresa potencia ao máximo.' },
      { title: 'Situação comunicativa', text: 'Para atender esta demanda por serviços especializados, analisamos as condições particulares de cada evento para decidir os meios humanos e técnicos necessários para melhor atendê-lo.' },
      { title: 'Mobilidade', text: 'A estrutura e a organização da HUMANA COM & TRAD permitem que a empresa possua uma grande agilidade administrativa e logística, assim como capacidade de mobilidade geográfica.' },
      { title: 'Eventos Emblemáticos', text: 'A HUMANA participou de eventos de grande relevância nacional e internacional, consolidando experiência em congressos científicos, conferências ambientais e encontros multilíngues.' },
    ],
    extra: '',
  },
  {
    file: 'isr.html',
    title: 'Interpretação Simultânea Remota',
    meta: 'Interpretação simultânea remota (ISR) para eventos virtuais, híbridos e reuniões multilíngues online.',
    heroImg: 'assets/images/servicos/isr-hero.png',
    heroAlt: 'Interpretação Simultânea Remota',
    subtitle: 'O que é ISR e como funciona?',
    stats: null,
    definition: {
      title: 'Interpretação Simultânea Remota (ISR)',
      type: '[substantivo, s. f.]',
      text: 'Ação que consiste em estabelecer, simultânea ou consecutivamente, comunicação verbal ou não verbal entre duas entidades, pessoas ou entre um locutor e seu público, por meio de um canal digital.',
      image: 'assets/images/servicos/sri-humana.png',
    },
    features: [
      { title: 'Protagonistas da ISR', text: 'A interpretação simultânea remota coloca intérpretes qualificados no centro da comunicação digital, garantindo fluidez em eventos virtuais e híbridos.' },
      { title: 'Por que ISR?', text: 'Do físico ao digital — a HUMANA adaptou sua infraestrutura para atender eventos online com o mesmo padrão de excelência dos serviços presenciais.' },
      { title: 'A importância da ISR hoje', text: '2020: Mudança de paradigma. A demanda por interpretação remota consolidou-se como solução essencial para conferências, reuniões e eventos internacionais.' },
    ],
    extra: '',
  },
  {
    file: 'traducao.html',
    title: 'Tradução',
    meta: 'Tradução técnica, jurídica, acadêmica e institucional com precisão e fidelidade ao conteúdo.',
    heroImg: 'assets/images/servicos/traducao-e-interpretacao.png',
    heroAlt: 'Tradução',
    subtitle: 'Tipos de serviços de tradução',
    stats: null,
    definition: {
      title: 'Tradução',
      type: '[substantivo, s.f.]',
      text: 'Transformar exatamente [sem ambiguidades], uma palavra/frase/texto de uma linguagem para outra, respeitando o sentido, o contexto e a intenção do texto original.',
      image: 'assets/images/servicos/traducao-e-interpretacao.png',
    },
    features: [
      { title: 'Translation Services', text: 'Added Value in Translation — traduções precisas e culturalmente adaptadas em diversas áreas do conhecimento.' },
      { title: 'Como funciona a tradução?', text: 'Como funcionam os serviços de Tradução Humana? Cada projeto passa por análise terminológica, tradução especializada e revisão de qualidade.' },
    ],
    extra: '<div class="servico-prose"><h2>Áreas de atuação</h2><p><strong>Traduções precisas e culturalmente adaptadas</strong> em diversas áreas do conhecimento: jurídico, acadêmico, científico, institucional e cultural. Nosso compromisso é entregar textos com <strong>linguagem adequada, fidelidade ao conteúdo</strong> e cuidado com os mínimos detalhes.</p></div>',
  },
  {
    file: 'cursos-formativos.html',
    title: 'Cursos Formativos',
    meta: 'Cursos de formação em tradução e interpretação desde 2009. Instituto Humana — capacitação de profissionais na Amazônia.',
    heroImg: 'assets/images/servicos/cursos-formativos.png',
    heroAlt: 'Instituto Humana',
    subtitle: 'Mais que cursos formativos',
    stats: null,
    definition: null,
    features: [
      { title: 'Campanha de Reciclagem', text: 'Campanha de Reciclagem no Instituto, bem como em residências e empresas da mesma localidade.' },
      { title: 'Biblioteca P&S de Intercâmbio', text: 'Criação e etiquetagem de livros da Biblioteca Pública de Intercâmbio Social do Instituto. Promoção e divulgação do intercâmbio de livros e realização de atividades socioculturais.' },
      { title: 'Cuidando do MA', text: 'Replante de árvores movimentadas na construção do Instituto e atividades relacionadas à redução da pegada ambiental da empresa.' },
    ],
    extra: `<div class="servico-prose">
      <h2>Instituto Humana</h2>
      <p>A Humana desde a sua fundação, em 2009, começa a oferecer <strong>cursos de formação</strong> em tradução e interpretação simultânea. O Instituto Humana, dando continuidade às atividades no campo da educação, retoma toda experiência na formação para poder atender a demanda de profissionais na área.</p>
      <p>Até à data, mais de 20 intérpretes concluíram com sucesso o curso, não só adquirindo os conhecimentos teóricos necessários, mas também os colocando em prática em serviços profissionais como intérpretes.</p>
      <p>Em 2018, o projeto do Instituto Humana ganhou forma física, com a construção de sua nova sede. Trata-se de uma construção pautada pelos princípios da <strong>bioarquitetura</strong>, localizada na ilha de Mosqueiro, Belém, rodeada por um ambiente natural privilegiado, no coração da floresta amazônica brasileira.</p>
      <p>O Instituto Humana tornou-se peça chave da Humana Com &amp; Trad. Como resultado da pandemia, surge não só como local de trabalho para oferecer soluções de Interpretação e Tradução Simultânea, mas também como o espaço ideal para promover os <strong>valores da empresa</strong>.</p>
    </div>
    <div class="servico-prose">
      <h2>Atividades do Instituto</h2>
      <p>Prática e difusão dos valores promovidos pela Humana Com &amp; Trad.</p>
      <ul>
        <li>Campanha de Reciclagem no Instituto, bem como em residências e empresas da mesma cidade.</li>
        <li>Ciclos de eventos de divulgação científica ligados à importância da promoção do cuidado com o meio ambiente.</li>
        <li>Replantar as árvores movimentadas na construção do Instituto e atividades relacionadas à redução da pegada ambiental da empresa.</li>
        <li>Criação e etiquetagem de livros na Biblioteca Pública de Intercâmbio Social do Instituto.</li>
      </ul>
    </div>
    <div class="servico-video"><iframe src="https://www.youtube.com/embed/q14sRDlbOmc" title="Instituto Humana" allowfullscreen loading="lazy"></iframe></div>
    <div class="servico-video"><iframe src="https://www.youtube.com/embed/Rr8bFMrQcUc" title="Instituto Humana" allowfullscreen loading="lazy"></iframe></div>`,
  },
];

function renderPage(p) {
  const statsHtml = p.stats
    ? `<div class="servico-stats">${p.stats.map((s) => `<div class="servico-stats__item"><span class="servico-stats__value">${s.value}</span><span class="servico-stats__label">${s.label}</span></div>`).join('')}</div>`
    : '';

  const definitionHtml = p.definition
    ? `<div class="servico-definition">
        <div>
          <h2 class="servico-definition__title">${p.definition.title}</h2>
          <p class="servico-definition__type"><em>${p.definition.type}</em></p>
          <p class="servico-definition__text">${p.definition.text}</p>
        </div>
        <img class="servico-definition__image" src="${p.definition.image}" alt="" loading="lazy">
      </div>`
    : '';

  const featuresHtml = p.features.length
    ? `<div class="servico-features">${p.features.map((f) => `<article class="servico-feature"><h3 class="servico-feature__title">${f.title}</h3><p class="servico-feature__text">${f.text}</p></article>`).join('')}</div>`
    : '';

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.title} | HUMANA COM &amp; TRAD</title>
  <meta name="description" content="${p.meta}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="css/servicos-page.css">
  <script src="js/page-transition.js"></script>
</head>
<body class="servico-page">

  <nav class="page-nav" aria-label="Navegação principal">
    <div class="page-nav__inner">
      <a href="index.html" class="page-nav__logo page-nav__logo--hero">
        <span class="page-nav__logo-mark" aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="3" fill="#00AEEF"/>
            <circle cx="18" cy="6" r="3" fill="#00AEEF"/>
            <circle cx="30" cy="6" r="3" fill="#00AEEF"/>
            <circle cx="6" cy="18" r="3" fill="#00AEEF"/>
            <circle cx="18" cy="18" r="3" fill="#00AEEF"/>
            <circle cx="30" cy="18" r="3" fill="#00AEEF"/>
            <circle cx="6" cy="30" r="3" fill="#00AEEF"/>
            <circle cx="18" cy="30" r="3" fill="#00AEEF"/>
            <circle cx="30" cy="30" r="3" fill="#00AEEF"/>
          </svg>
        </span>
        <span class="page-nav__logo-copy">
          <span class="page-nav__logo-name">Humana</span>
          <span class="page-nav__logo-tag">Com &amp; Trad</span>
        </span>
      </a>
${NAV}
      <a href="contato.html" class="page-nav__cta">
        Solicitar Orçamento
        <span class="page-nav__cta-icon" data-icon="arrow-right" data-icon-size="sm"></span>
      </a>
    </div>
  </nav>

  <div id="page-container">
    <section class="servico-hero">
      <div class="servico-hero__inner">
        <img class="servico-hero__image" src="${p.heroImg}" alt="${p.heroAlt}" loading="eager">
        <h1 class="servico-hero__title">${p.title}</h1>
        <p class="servico-hero__subtitle">${p.subtitle}</p>
      </div>
    </section>
    ${statsHtml}
    <section class="servico-content">
      <div class="servico-content__inner">
        ${definitionHtml}
        ${p.extra}
        ${featuresHtml}
      </div>
    </section>
    <section class="servico-cta">
      <h2 class="servico-cta__title">Orçamento</h2>
      <a href="contato.html" class="servico-cta__btn">Solicitar orçamento &rarr;</a>
    </section>
  </div>

  <script src="js/nav-dropdown.js"></script>
  <script src="js/icons.js"></script>
</body>
</html>`;
}

for (const p of PAGES) {
  fs.writeFileSync(path.join(ROOT, p.file), renderPage(p));
  console.log('wrote', p.file);
}
