import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'historia');

const etapas = [
  {
    slug: '1995-fundacao',
    year: '1995',
    title: 'Fundação',
    icon: 'flag',
    description:
      'Sandro Ruggeri Dulcet inicia sua atuação profissional como tradutor e intérprete em Belém do Pará.',
    intro:
      'Nesse mesmo ano nasce o propósito que guiaria a HUMANA COM &amp; TRAD: oferecer interpretação e tradução de excelência, com atenção às necessidades de cada cliente e respeito à diversidade cultural.',
    sections: [
      {
        num: '01',
        icon: 'flag',
        title: 'O início em Belém do Pará',
        paragraphs: [
          'Sandro Ruggeri Dulcet inicia sua atuação profissional como tradutor e intérprete, atendendo clientes locais e empresas do setor em Belém do Pará — cidade que se tornaria a base estratégica da HUMANA COM &amp; TRAD.',
          'Os primeiros projetos combinavam interpretação consecutiva e tradução de documentos, com foco em atendimento próximo e compreensão profunda do contexto de cada demanda.',
        ],
      },
      {
        num: '02',
        icon: 'heart-handshake',
        title: 'Um propósito que permanece',
        paragraphs: [
          'Desde o primeiro dia, a empresa se orientou por três pilares: qualidade técnica, confidencialidade e cuidado humano com cada cliente.',
          'Essa visão moldou a cultura da HUMANA e continua presente em cada evento, conferência e projeto de tradução realizados até hoje.',
        ],
        list: [
          'Primeiros clientes locais em Belém',
          'Interpretação e tradução como núcleo do portfólio',
          'Compromisso com a diversidade cultural amazônica',
        ],
      },
    ],
    callout:
      'A fundação em <strong>1995</strong> marcou o início de uma trajetória construída com <strong>confiança</strong>, <strong>excelência</strong> e <strong>raízes amazônicas</strong>.',
  },
  {
    slug: '2008-expansao',
    year: '2008',
    title: 'Expansão',
    icon: 'maximize-2',
    description:
      'A HUMANA consolida sua estrutura e amplia a atuação para novos idiomas, áreas técnicas e eventos internacionais.',
    intro:
      'Ao longo dos primeiros quinze anos de trajetória, a empresa prestou centenas de serviços de interpretação em eventos de variadas disciplinas — de conferências científicas a encontros institucionais de grande porte.',
    sections: [
      {
        num: '01',
        icon: 'maximize-2',
        title: 'Crescimento estruturado',
        paragraphs: [
          'A HUMANA COM &amp; TRAD consolida sua estrutura em Belém do Pará e amplia a atuação para novos idiomas, áreas técnicas e eventos internacionais.',
          'A equipe cresce em número e em especialização, permitindo atender demandas cada vez mais complexas em diferentes segmentos.',
        ],
      },
      {
        num: '02',
        icon: 'globe',
        title: 'Novos horizontes de atuação',
        paragraphs: [
          'Congressos científicos, seminários técnicos e encontros institucionais passam a integrar o portfólio com regularidade, consolidando a reputação da empresa no mercado.',
        ],
        list: [
          'Ampliação do portfólio de idiomas',
          'Participação em eventos internacionais',
          'Atuação em áreas técnicas especializadas',
        ],
      },
    ],
    callout:
      'A fase de <strong>expansão</strong> reforçou a capacidade da HUMANA de atender <strong>projetos multilíngues</strong> com escala e precisão.',
  },
  {
    slug: '2015-atuacao-internacional',
    year: '2015',
    title: 'Atuação Internacional',
    icon: 'globe',
    description:
      'Fortalecimento da presença em projetos multilíngues e em organizações internacionais.',
    intro:
      'A empresa se consolidou em tradução técnica, jurídica e institucional, com revisão especializada e atenção ao contexto de uso de cada material entregue.',
    sections: [
      {
        num: '01',
        icon: 'globe',
        title: 'Presença além das fronteiras',
        paragraphs: [
          'Fortalecimento da presença em projetos multilíngues e em organizações internacionais, com equipe de tradutores e intérpretes em diversas regiões do Brasil e do exterior.',
          'A HUMANA passa a integrar redes de profissionais e a participar de iniciativas com alcance global, mantendo a qualidade que marcou sua trajetória desde a fundação.',
        ],
      },
      {
        num: '02',
        icon: 'file-text',
        title: 'Tradução técnica e institucional',
        paragraphs: [
          'Documentos jurídicos, materiais técnicos e conteúdos institucionais ganham processos de revisão cada vez mais rigorosos, com atenção ao público-alvo e ao contexto de uso.',
        ],
        list: [
          'Tradução técnica com revisão especializada',
          'Projetos jurídicos e institucionais',
          'Atuação no Brasil e no exterior',
        ],
      },
    ],
    callout:
      'Em <strong>2015</strong>, a HUMANA consolidou sua presença em <strong>projetos internacionais</strong> sem abrir mão da proximidade com cada cliente.',
  },
  {
    slug: '2020-novos-horizontes',
    year: '2020',
    title: 'Novos Horizontes',
    icon: 'users',
    description:
      'Expansão de serviços híbridos e online, acompanhando as novas demandas globais de comunicação remota.',
    intro:
      'A interpretação simultânea remota passou a integrar o portfólio com a mesma qualidade dos eventos presenciais — permitindo que clientes de qualquer lugar realizassem conferências, reuniões e formações multilíngues com segurança e agilidade.',
    sections: [
      {
        num: '01',
        icon: 'monitor-smartphone',
        title: 'Comunicação remota de alto nível',
        paragraphs: [
          'Expansão de serviços híbridos e online, acompanhando as novas demandas globais de comunicação remota e eventos virtuais.',
          'A interpretação simultânea remota passou a integrar o portfólio com a mesma qualidade dos eventos presenciais, com infraestrutura técnica e equipe preparada para diferentes plataformas.',
        ],
      },
      {
        num: '02',
        icon: 'users',
        title: 'Flexibilidade sem perder excelência',
        paragraphs: [
          'Conferências, reuniões corporativas e formações multilíngues ganharam novos formatos — presencial, remoto e híbrido — sem comprometer clareza, fluidez e profissionalismo.',
        ],
        list: [
          'Interpretação simultânea remota',
          'Eventos híbridos e virtuais',
          'Adaptação a novos formatos de comunicação',
        ],
      },
    ],
    callout:
      'Os <strong>novos horizontes</strong> de <strong>2020</strong> ampliaram as possibilidades de comunicação multilíngue em qualquer lugar do mundo.',
  },
  {
    slug: '2026-continuamos-conectando',
    year: '2026',
    title: 'Continuamos conectando',
    icon: 'rocket',
    description:
      'Mais de 500 projetos realizados e um compromisso renovado com pessoas e culturas.',
    intro:
      'Hoje, a HUMANA conta com dezenas de tradutores profissionais e quase cem intérpretes colaboradores, atuando em interpretação simultânea presencial e remota, tradução técnica e jurídica, e cursos formativos para profissionais da área.',
    sections: [
      {
        num: '01',
        icon: 'rocket',
        title: 'Uma trajetória em números',
        paragraphs: [
          'Mais de 500 projetos realizados e um compromisso renovado com pessoas e culturas — da Amazônia para o Brasil e para o mundo.',
          'A equipe reúne dezenas de tradutores profissionais e quase cem intérpretes colaboradores, preparados para demandas presenciais, remotas e híbridas.',
        ],
        stats: [
          { value: '308', label: 'serviços de interpretação' },
          { value: '182', label: 'trabalhos de tradução' },
          { value: '97', label: 'intérpretes colaboradores' },
        ],
      },
      {
        num: '02',
        icon: 'graduation-cap',
        title: 'Formação e futuro',
        paragraphs: [
          'Além dos serviços de interpretação e tradução, a HUMANA mantém cursos formativos que fortalecem a cena local de tradutores e intérpretes na Amazônia e em todo o país.',
        ],
        list: [
          'Interpretação simultânea presencial e remota',
          'Tradução técnica e jurídica',
          'Cursos formativos para novos profissionais',
        ],
      },
    ],
    callout:
      'Seguimos <strong>conectando pessoas e culturas</strong> com o mesmo compromisso de <strong>excelência</strong> que nos move desde <strong>1995</strong>.',
  },
];

function navHtml() {
  return `  <nav class="page-nav page-nav--overlay" aria-label="Navegação principal">
    <div class="page-nav__inner">
      <a href="../index.html" class="page-nav__logo page-nav__logo--hero">
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
      <ul class="page-nav__list">
        <li class="page-nav__item"><a href="../index.html">Início</a></li>
        <li class="page-nav__item is-active"><a href="../sobre.html">Sobre Nós</a></li>
        <li class="page-nav__item page-nav__item--dropdown">
          <a href="#" class="page-nav__dropdown-trigger" aria-haspopup="true" aria-expanded="false">
            Serviços
            <span class="page-nav__link-icon" data-icon="chevron-down" data-icon-size="sm"></span>
          </a>
          <ul class="page-nav__dropdown">
            <li><a href="../isp.html">Interpretação Simultânea Presencial</a></li>
            <li><a href="../isr.html">Interpretação Simultânea Remota</a></li>
            <li><a href="../traducao.html">Tradução</a></li>
            <li><a href="../cursos-formativos.html">Cursos Formativos</a></li>
          </ul>
        </li>
        <li class="page-nav__item"><a href="../blog.html">Blog</a></li>
        <li class="page-nav__item"><a href="../contato.html">Contato</a></li>
      </ul>
      <a href="../contato.html" class="page-nav__cta">
        Solicitar Orçamento
        <span class="page-nav__cta-icon" data-icon="arrow-right" data-icon-size="sm"></span>
      </a>
    </div>
  </nav>`;
}

function renderSection(section) {
  const paragraphs = section.paragraphs
    .map((p) => `              <p>${p}</p>`)
    .join('\n');

  const stats = section.stats
    ? `
              <div class="post-stats">
${section.stats
  .map(
    (s) => `                <div class="post-stats__item">
                  <span class="post-stats__value">${s.value}</span>
                  <span class="post-stats__label">${s.label}</span>
                </div>`
  )
  .join('\n')}
              </div>`
    : '';

  const list = section.list
    ? `
              <ul class="post-list">
${section.list.map((item) => `                <li>${item}</li>`).join('\n')}
              </ul>`
    : '';

  return `        <section class="post-section">
          <div class="post-section__num-col">
            <span class="post-section__num">${section.num}</span>
            <span class="post-section__line" aria-hidden="true"></span>
          </div>
          <span class="post-section__icon" data-icon="${section.icon}" data-icon-size="md" aria-hidden="true"></span>
          <h2 class="post-section__title">${section.title}</h2>
          <div class="post-section__content">
${paragraphs}${stats}${list}
          </div>
        </section>`;
}

function renderPage(etapa) {
  const sections = etapa.sections.map(renderSection).join('\n\n');

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${etapa.year} — ${etapa.title} | Nossa História | HUMANA COM &amp; TRAD</title>
  <meta name="description" content="${etapa.description.replace(/<[^>]+>/g, '')}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/styles.css">
  <link rel="stylesheet" href="../css/blog-post.css">
  <script src="../js/page-transition.js"></script>
</head>
<body>

${navHtml()}

  <div id="page-container">

    <article class="post-editorial">
      <div class="post-editorial__bg" aria-hidden="true">
        <span class="post-editorial__dots post-editorial__dots--tl"></span>
        <span class="post-editorial__dots post-editorial__dots--br"></span>
        <span class="post-editorial__blur post-editorial__blur--hero"></span>
        <span class="post-editorial__line post-editorial__line--a"></span>
      </div>

      <div class="post-editorial__container">

        <header class="post-hero" aria-labelledby="post-hero-title">
          <div class="post-hero__grid post-hero__grid--single">
            <div class="post-hero__copy">
              <nav class="post-hero__breadcrumb" aria-label="Breadcrumb">
                <a href="../sobre.html">Sobre Nós</a>
                <span aria-hidden="true">/</span>
                <a href="../historia.html">Nossa História</a>
                <span aria-hidden="true">/</span>
                <span>${etapa.title}</span>
              </nav>
              <p class="post-hero__category">Linha do tempo · ${etapa.year}</p>
              <h1 class="post-hero__title" id="post-hero-title">${etapa.title}</h1>
              <span class="post-hero__accent" aria-hidden="true"></span>
              <p class="post-hero__intro">${etapa.intro}</p>
            </div>
          </div>
        </header>

        <div class="post-body">
${sections}
        </div>

        <aside class="post-callout">
          <span class="post-callout__icon" data-icon="${etapa.icon}" data-icon-size="md" aria-hidden="true"></span>
          <p class="post-callout__text">${etapa.callout}</p>
        </aside>

        <a href="../historia.html" class="post-back">
          <span class="post-back__icon" data-icon="arrow-right" data-icon-size="sm" aria-hidden="true"></span>
          Voltar à linha do tempo
        </a>

      </div>
    </article>

  </div>

  <script src="../js/nav-dropdown.js"></script>
  <script src="../js/navbar-scroll.js"></script>
  <script src="../js/icons.js"></script>
  <script src="../js/drawer.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>
`;
}

await mkdir(outDir, { recursive: true });

for (const etapa of etapas) {
  const filePath = path.join(outDir, `${etapa.slug}.html`);
  await writeFile(filePath, renderPage(etapa), 'utf8');
  console.log('Wrote', filePath);
}
