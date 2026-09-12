import fs from 'fs';
import path from 'path';
import { buildSiteFooter } from './footer-template.mjs';
import { buildNavLogo } from './logo-template.mjs';

const SECTION_ICONS = ['user', 'message-circle', 'globe', 'shield', 'graduation-cap', 'languages'];

const posts = [
  {
    slug: 'traducao-internacional',
    tag: 'Destaque',
    category: 'Sobre a Humana',
    title: 'Excelência em tradução e interpretação desde 2008',
    image: 'post-apresentacao.jpg',
    date: '12 de junho de 2026',
    intro:
      'A <strong>HUMANA COM &amp; TRAD</strong> oferece <strong>tradução e interpretação simultânea profissional</strong> desde 2008, com sede em Belém do Pará e atuação em todo o Brasil e no exterior.',
    callout:
      'Compromisso com <strong>qualidade</strong>, <strong>inovação</strong> e <strong>precisão</strong> em cada projeto linguístico que realizamos.',
    sections: [
      {
        icon: 'user',
        title: 'Fundador e experiência no setor',
        paragraphs: [
          'Seu fundador e diretor é <strong>Sandro Ruggeri Dulcet</strong>, tradutor e intérprete profissional desde 1995, ano em que passou a atender diversos clientes locais e empresas do setor.',
          'Com quase três décadas de atuação, a HUMANA construiu uma trajetória baseada em confiança, excelência técnica e proximidade humana em cada projeto.',
        ],
      },
      {
        icon: 'message-circle',
        title: 'Serviços de interpretação simultânea',
        paragraphs: [
          'Ao longo dos primeiros quinze anos da sua trajetória, a HUMANA COM &amp; TRAD prestou centenas de serviços de interpretação em eventos de variadas disciplinas e temáticas.',
        ],
        stats: [
          { value: '233', label: 'serviços de interpretação simultânea (ISP)' },
          { value: '300+', label: 'serviços de interpretação realizados' },
        ],
      },
      {
        icon: 'globe',
        title: 'Tradução técnica e equipe especializada',
        paragraphs: [
          'A empresa também se consolidou em tradução técnica, jurídica e institucional, com revisão especializada e atenção ao contexto de uso de cada material.',
        ],
        stats: [
          { value: '92', label: 'trabalhos de tradução técnica e jurídica' },
          { value: '39', label: 'tradutores profissionais colaboradores' },
          { value: '97', label: 'intérpretes colaboradores no Brasil e no exterior' },
        ],
      },
      {
        icon: 'shield',
        title: 'Áreas de atuação',
        list: [
          'Interpretação simultânea presencial e remota',
          'Tradução técnica, jurídica e científica',
          'Eventos corporativos, acadêmicos e institucionais',
          'Projetos ambientais e multilíngues de alto impacto',
        ],
      },
      {
        icon: 'graduation-cap',
        title: 'Formação e compromisso institucional',
        list: [
          'Cursos formativos em tradução e interpretação desde 2009',
          'Capacitação de intérpretes indígenas para a COP30',
          'Atuação junto a ONGs, universidades e organizações internacionais',
          'Compromisso com justiça linguística e diversidade cultural',
        ],
      },
      {
        icon: 'languages',
        title: 'Alcance multilíngue',
        paragraphs: [
          'Atendemos demandas em diversos idiomas, com equipe qualificada e rede de profissionais especializados para cada contexto de comunicação.',
        ],
        tags: ['Português', 'Inglês', 'Espanhol', 'Francês', 'Alemão', 'Italiano'],
      },
    ],
  },
  {
    slug: 'trajetoria-12-anos',
    tag: 'Notícias',
    category: 'Notícias',
    title: 'Trajetória da HUMANA nos 12 anos da empresa',
    image: 'post-trajetoria.jpg',
    date: '5 de junho de 2026',
    intro:
      'Ao completar <strong>12 anos de atividades</strong>, a HUMANA COM &amp; TRAD celebra uma trajetória marcada por crescimento, aprendizado e compromisso com a excelência em serviços linguísticos.',
    callout:
      'Doze anos de história reforçam nosso compromisso com <strong>excelência</strong>, <strong>parcerias duradouras</strong> e <strong>impacto real</strong> na comunicação multilíngue.',
    sections: [
      {
        icon: 'calendar',
        title: 'Doze anos de dedicação à linguagem',
        paragraphs: [
          'Desde os primeiros projetos locais até a participação em eventos de grande porte, a empresa construiu uma história baseada em confiança e resultados consistentes para clientes de diversos setores.',
          'A trajetória reflete o crescimento de uma empresa amazônica com alcance nacional e internacional.',
        ],
      },
      {
        icon: 'award',
        title: 'Marcos que fortaleceram nossa identidade',
        paragraphs: [
          'Ao longo dessa jornada, ampliamos nossa equipe de tradutores e intérpretes, diversificamos áreas de atuação e reforçamos o cuidado com cada detalhe — do briefing à entrega final.',
        ],
        stats: [
          { value: '500+', label: 'projetos realizados ao longo da história' },
          { value: '12', label: 'anos de atuação consolidada' },
        ],
      },
      {
        icon: 'globe',
        title: 'Expansão e reconhecimento',
        paragraphs: [
          'Esse aniversário representa não apenas tempo de mercado, mas a soma de experiências que continuam a inspirar nossa visão de conectar pessoas, instituições e culturas por meio da palavra.',
        ],
        list: [
          'Ampliação da atuação para novos idiomas e áreas técnicas',
          'Participação em eventos internacionais de referência',
          'Fortalecimento da rede de profissionais colaboradores',
        ],
      },
      {
        icon: 'heart-handshake',
        title: 'Olhar para o futuro',
        paragraphs: [
          'Seguimos investindo em formação, tecnologia e proximidade com clientes que buscam comunicação clara, precisa e humanizada em qualquer idioma.',
        ],
      },
    ],
  },
  {
    slug: 'capacitacao-indigenas-cop30',
    tag: 'Capacitação',
    category: 'Capacitação',
    title: 'Capacitação de Intérpretes Indígenas para COP30',
    image: 'post-indigenas.jpg',
    date: '28 de maio de 2026',
    intro:
      'A HUMANA participou da <strong>capacitação de intérpretes indígenas</strong> voltada ao contexto da COP30, ampliando a presença de vozes originárias em debates ambientais de alcance mundial.',
    callout:
      'Inclusão linguística e <strong>respeito cultural</strong> como pilares da nossa atuação em eventos globais.',
    sections: [
      {
        icon: 'graduation-cap',
        title: 'Formação para um evento global',
        paragraphs: [
          'O programa combinou fundamentos de interpretação, terminologia específica, ética profissional e práticas de comunicação intercultural, preparando profissionais para atuar com segurança em ambientes multilíngues e de alta visibilidade.',
        ],
      },
      {
        icon: 'users',
        title: 'Inclusão linguística e impacto social',
        paragraphs: [
          'Reconhecemos a importância de garantir que povos indígenas possam expressar suas perspectivas em conferências internacionais sem barreiras de idioma.',
        ],
        list: [
          'Fundamentos técnicos de interpretação simultânea',
          'Terminologia ambiental e climática especializada',
          'Ética profissional e comunicação intercultural',
          'Preparação para agendas de alta complexidade',
        ],
      },
      {
        icon: 'leaf',
        title: 'COP30 e a Amazônia',
        paragraphs: [
          'Essa iniciativa reforça o compromisso da HUMANA com a diversidade cultural e com soluções linguísticas que ampliam a participação e o diálogo em eventos estratégicos para o planeta.',
        ],
      },
      {
        icon: 'globe',
        title: 'Compromisso de longo prazo',
        paragraphs: [
          'Continuamos investindo em parcerias e capacitação para que diferentes vozes sejam compreendidas com qualidade técnica e sensibilidade cultural.',
        ],
      },
    ],
  },
  {
    slug: 'atividades-instituto',
    tag: 'Instituto',
    category: 'Instituto',
    title: 'Atividades do Instituto',
    image: 'post-instituto.jpg',
    date: '20 de maio de 2026',
    intro:
      'O <strong>Instituto HUMANA</strong> desenvolve atividades de formação, pesquisa e difusão de boas práticas em tradução e interpretação na região Norte e em todo o Brasil.',
    callout:
      'Formação, pesquisa e <strong>valorização da profissão linguística</strong> como extensão da nossa missão institucional.',
    sections: [
      {
        icon: 'graduation-cap',
        title: 'Conhecimento e prática em tradução',
        paragraphs: [
          'Entre workshops, encontros técnicos e materiais educativos, promovemos espaços de troca que fortalecem a qualidade dos serviços linguísticos.',
        ],
      },
      {
        icon: 'newspaper',
        title: 'Contribuição para a comunidade profissional',
        paragraphs: [
          'As ações do Instituto buscam atualizar conhecimentos, debater desafios do mercado e estimular o desenvolvimento contínuo de intérpretes e tradutores.',
        ],
        list: [
          'Workshops e encontros técnicos periódicos',
          'Biblioteca pública de intercâmbio social',
          'Campanhas de reciclagem e ações comunitárias',
          'Materiais educativos para profissionais da área',
        ],
      },
      {
        icon: 'users',
        title: 'Agente de formação',
        paragraphs: [
          'Com essa atuação, a HUMANA reafirma seu papel não apenas como prestadora de serviços, mas como agente de formação e valorização da profissão linguística.',
        ],
      },
    ],
  },
  {
    slug: 'trabalhos-isp',
    tag: 'Interpretação',
    category: 'Interpretação',
    title: 'Trabalhos de ISP',
    image: 'post-isp.jpg',
    date: '15 de maio de 2026',
    intro:
      'A HUMANA realiza <strong>trabalhos de ISP</strong> — Interpretação Simultânea em cabine — em congressos, seminários e eventos institucionais de alta complexidade.',
    callout:
      '<strong>Fluidez</strong>, <strong>precisão terminológica</strong> e <strong>discrição profissional</strong> em cada evento multilíngue.',
    sections: [
      {
        icon: 'headphones',
        title: 'Interpretação simultânea em cabine',
        paragraphs: [
          'Nossa equipe utiliza equipamentos profissionais, planejamento prévio de glossários e coordenação técnica para assegurar fluidez durante toda a programação.',
        ],
        stats: [
          { value: '233', label: 'serviços de ISP realizados' },
          { value: '75%', label: 'dos serviços correspondem à interpretação' },
        ],
      },
      {
        icon: 'monitor-smartphone',
        title: 'Eventos presenciais e híbridos',
        paragraphs: [
          'Atuamos em ambientes multilíngues com públicos técnicos, acadêmicos e executivos, adaptando a interpretação ao perfil do evento e às necessidades de cada cliente.',
        ],
        list: [
          'Congressos e conferências internacionais',
          'Seminários acadêmicos e reuniões corporativas',
          'Eventos institucionais e governamentais',
          'Transmissões híbridas e online',
        ],
      },
      {
        icon: 'shield',
        title: 'Rigor logístico e técnico',
        paragraphs: [
          'Cada projeto de ISP é conduzido com rigor logístico e profissional, garantindo que a mensagem original chegue ao público com clareza e naturalidade.',
        ],
      },
    ],
  },
  {
    slug: 'traducao-hoje',
    tag: 'Tradução',
    category: 'Tradução',
    title: 'Tradução Hoje',
    image: 'post-traducao-hoje.jpg',
    date: '8 de maio de 2026',
    intro:
      'A tradução deixou de ser apenas suporte documental: hoje é <strong>estratégia de comunicação global</strong>, expansão comercial e construção de pontes entre culturas.',
    callout:
      'Tecnologia aliada ao <strong>olhar humano</strong> para entregas precisas e culturalmente adequadas.',
    sections: [
      {
        icon: 'languages',
        title: 'O papel da tradução no mundo contemporâneo',
        paragraphs: [
          'Na HUMANA, acompanhamos essa evolução oferecendo traduções técnicas, jurídicas, científicas e institucionais com revisão especializada e atenção ao contexto de uso de cada material.',
        ],
      },
      {
        icon: 'target',
        title: 'Tecnologia aliada ao olhar humano',
        paragraphs: [
          'Combinamos ferramentas modernas de gestão e produtividade com a sensibilidade de tradutores experientes, garantindo qualidade, consistência terminológica e adequação cultural.',
        ],
        stats: [
          { value: '92', label: 'trabalhos de tradução técnica e jurídica' },
          { value: '39', label: 'tradutores profissionais na equipe' },
        ],
      },
      {
        icon: 'globe',
        title: 'Aplicações e setores',
        list: [
          'Documentos corporativos e institucionais',
          'Conteúdos digitais e materiais acadêmicos',
          'Textos jurídicos e científicos especializados',
          'Projetos com prazos exigentes e revisão dedicada',
        ],
      },
    ],
  },
  {
    slug: 'missao-visao-valores',
    tag: 'Valores',
    category: 'Valores',
    title: 'Missão, Visão e Valores da Humana',
    image: 'post-missao.jpg',
    date: '2 de maio de 2026',
    intro:
      'A <strong>missão, visão e valores</strong> da HUMANA orientam cada decisão, cada projeto e cada relação profissional que construímos ao longo dos anos.',
    callout:
      'Dedicação, <strong>clareza</strong> e <strong>excelência técnica</strong> como fundamentos da nossa cultura institucional.',
    sections: [
      {
        icon: 'target',
        title: 'Nossa missão',
        paragraphs: [
          'A missão da HUMANA é oferecer serviços de tradução e interpretação de alto nível, com qualidade e competência, atraindo, atendendo e fidelizando clientes que buscam excelência linguística.',
          'Trabalhamos para que cada projeto reflita precisão, responsabilidade e respeito à diversidade cultural envolvida na comunicação.',
        ],
      },
      {
        icon: 'globe',
        title: 'Nossa visão',
        paragraphs: [
          'Desejamos continuar sendo uma empresa líder e diferenciada no mercado de serviços linguísticos, criando valor adicional para quem nela participa direta ou indiretamente.',
        ],
      },
      {
        icon: 'award',
        title: 'Nossos valores',
        list: [
          'Dedicação e entusiasmo no trabalho',
          'Organização, clareza e cuidado em cada etapa',
          'Uso racional dos recursos e responsabilidade profissional',
          'Respeito à diversidade cultural e à justiça linguística',
        ],
      },
    ],
  },
  {
    slug: 'cop30-belem',
    tag: 'Eventos',
    category: 'Eventos',
    title: 'A HUMANA Participa nas Visitas Técnicas e Reuniões Oficiais da COP30 em Belém',
    image: 'post-cop30.jpg',
    date: '25 de abril de 2026',
    intro:
      'A HUMANA COM &amp; TRAD participou das <strong>visitas técnicas e reuniões oficiais</strong> relacionadas à COP30 em Belém, apoiando a comunicação multilíngue em um dos maiores encontros ambientais do mundo.',
    callout:
      'A Amazônia no centro do <strong>diálogo global</strong> com serviços linguísticos de alto padrão.',
    sections: [
      {
        icon: 'globe',
        title: 'Presença ativa na COP30',
        paragraphs: [
          'Nossa equipe atuou em ambientes que exigem precisão terminológica, sigilo e capacidade de resposta rápida diante de agendas intensas e participantes de diversos países.',
        ],
      },
      {
        icon: 'leaf',
        title: 'Amazônia no centro do diálogo global',
        paragraphs: [
          'Estar presente na COP30 reforça o papel da região Amazônica no debate climático e a importância de serviços linguísticos qualificados para que diferentes vozes sejam compreendidas.',
        ],
        list: [
          'Visitas técnicas e reuniões preparatórias oficiais',
          'Comunicação multilíngue em tempo real',
          'Terminologia ambiental e climática especializada',
          'Coordenação logística para equipes internacionais',
        ],
      },
      {
        icon: 'award',
        title: 'Parceira em eventos de alto impacto',
        paragraphs: [
          'A experiência consolidou a HUMANA como parceira confiável em eventos internacionais, conectando conteúdos técnicos e institucionais com clareza e profissionalismo.',
        ],
      },
    ],
  },
  {
    slug: 'linguas-minoritarias',
    tag: 'Notícias',
    category: 'Notícias',
    title: 'Línguas Minoritárias do Escudo das Guianas',
    image: 'post-linguas.jpg',
    date: '18 de abril de 2026',
    intro:
      'O <strong>Escudo das Guianas</strong> abriga um rico mosaico de línguas minoritárias que fazem parte do patrimônio cultural da região amazônica.',
    callout:
      '<strong>Diversidade linguística</strong> e comunicação inclusiva como compromisso permanente da HUMANA.',
    sections: [
      {
        icon: 'globe',
        title: 'Diversidade linguística na Amazônia',
        paragraphs: [
          'A HUMANA reconhece a importância de preservar e valorizar essa diversidade em projetos de comunicação e interpretação, com sensibilidade cultural e respeito às comunidades locais.',
        ],
      },
      {
        icon: 'users',
        title: 'Comunicação inclusiva e respeitosa',
        paragraphs: [
          'Apoiar iniciativas que envolvem línguas minoritárias significa garantir que informações relevantes cheguem a diferentes públicos de forma clara e contextualizada.',
        ],
        list: [
          'Sensibilidade cultural em projetos amazônicos',
          'Respeito às comunidades e suas especificidades',
          'Conhecimento terminológico de contextos locais',
          'Parcerias para ampliar a qualidade dos serviços linguísticos',
        ],
      },
      {
        icon: 'heart-handshake',
        title: 'Investimento contínuo',
        paragraphs: [
          'A HUMANA continua investindo em parcerias e capacitação para ampliar a qualidade dos serviços linguísticos em regiões de alta diversidade étnica e cultural.',
        ],
      },
    ],
  },
  {
    slug: 'luz-sons-marahu',
    tag: 'Notícias',
    category: 'Notícias',
    title: 'Luz e sons do Marahú: a harmonia da bioarquitetura',
    image: 'post-marahu.jpg',
    date: '10 de abril de 2026',
    intro:
      '<strong>Marahú</strong> inspira reflexões sobre bioarquitetura — a integração entre construção, natureza, luz e paisagem sonora em harmonia com o entorno amazônico.',
    callout:
      'Respeito ao <strong>ambiente</strong> e às <strong>pessoas</strong> como base de toda comunicação eficaz.',
    sections: [
      {
        icon: 'leaf',
        title: 'Marahú e a bioarquitetura',
        paragraphs: [
          'Localidade onde a HUMANA está instalada, Marahú nos convida a refletir sobre equilíbrio, sustentabilidade e cuidado com o espaço em que vivemos e trabalhamos.',
          'Luz, sons e formas do lugar lembram que toda comunicação eficaz nasce do respeito ao ambiente e às pessoas que nele habitam.',
        ],
      },
      {
        icon: 'building-2',
        title: 'Lugar, cultura e comunicação',
        paragraphs: [
          'Assim como a bioarquitetura busca dialogar com o meio, a HUMANA busca traduzir e interpretar com sensibilidade ao contexto cultural de cada mensagem.',
        ],
        list: [
          'Integração com a paisagem amazônica',
          'Materiais locais e construção sustentável',
          'Espaços pensados para trabalho e convivência',
          'Conexão entre natureza e atividade profissional',
        ],
      },
      {
        icon: 'globe',
        title: 'Raízes amazônicas, alcance global',
        paragraphs: [
          'Nossa base na Amazônia fortalece a identidade da HUMANA e inspira uma atuação que conecta o local ao internacional com autenticidade e rigor técnico.',
        ],
      },
    ],
  },
];

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getExcerpt(post) {
  return post.intro
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
}

function renderStats(stats) {
  if (!stats?.length) return '';
  const items = stats
    .map(
      (s) =>
        `                <div class="post-stats__item">
                  <span class="post-stats__value">${s.value}</span>
                  <span class="post-stats__label">${s.label}</span>
                </div>`
    )
    .join('\n');
  return `\n              <div class="post-stats">\n${items}\n              </div>`;
}

function renderList(items) {
  if (!items?.length) return '';
  const lis = items.map((item) => `                <li>${item}</li>`).join('\n');
  return `\n              <ul class="post-list">\n${lis}\n              </ul>`;
}

function renderTags(tags) {
  if (!tags?.length) return '';
  const pills = tags
    .map(
      (tag) =>
        `                <span class="post-tags__item"><span data-icon="globe" data-icon-size="sm" aria-hidden="true"></span>${tag}</span>`
    )
    .join('\n');
  return `\n              <div class="post-tags">\n${pills}\n              </div>`;
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getReadingMinutes(post) {
  const chunks = [
    post.intro,
    post.callout,
    ...(post.sections || []).flatMap((section) => [
      section.title,
      ...(section.paragraphs || []),
      ...(section.list || []),
      ...(section.tags || []),
    ]),
  ];
  const words = chunks
    .join(' ')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(3, Math.ceil(words / 180));
}

function getHighlights(post) {
  if (post.highlights?.length) return post.highlights.slice(0, 3);
  const fromSections = (post.sections || []).slice(0, 3).map((section, index) => ({
    icon: section.icon || SECTION_ICONS[index % SECTION_ICONS.length],
    title: section.title,
    text: (section.paragraphs && section.paragraphs[0]) || post.category,
  }));
  while (fromSections.length < 3) {
    fromSections.push({
      icon: 'newspaper',
      title: post.category,
      text: 'Conteúdo editorial da HUMANA COM & TRAD.',
    });
  }
  return fromSections.slice(0, 3);
}

function getRelatedPosts(currentSlug) {
  return posts.filter((post) => post.slug !== currentSlug).slice(0, 3);
}

function renderHighlights(post) {
  return getHighlights(post)
    .map(
      (item) => `          <div class="post-highlight">
            <span class="post-highlight__icon" data-icon="${item.icon}" data-icon-size="sm" aria-hidden="true"></span>
            <div>
              <p class="post-highlight__title">${item.title}</p>
              <p class="post-highlight__text">${item.text.replace(/<[^>]+>/g, '')}</p>
            </div>
          </div>`
    )
    .join('\n\n');
}

function renderToc(post) {
  return post.sections
    .map((section, index) => {
      const id = `sec-${slugify(section.title) || index + 1}`;
      return `              <li><a href="#${id}">${section.title}</a></li>`;
    })
    .join('\n');
}

function renderRelatedCards(currentSlug) {
  return getRelatedPosts(currentSlug)
    .map((post) => {
      const minutes = getReadingMinutes(post);
      return `            <a href="${post.slug}.html" class="post-related-card">
              <img class="post-related-card__media" src="../assets/images/blog/${post.image}" alt="" width="800" height="500" loading="lazy">
              <div class="post-related-card__body">
                <p class="post-related-card__tag">${post.tag}</p>
                <h3 class="post-related-card__title">${post.title}</h3>
                <p class="post-related-card__meta">${minutes} min de leitura</p>
              </div>
            </a>`;
    })
    .join('\n\n');
}

function renderSection(section, index) {
  const num = String(index + 1).padStart(2, '0');
  const id = `sec-${slugify(section.title) || index + 1}`;
  const paragraphs = (section.paragraphs || [])
    .map((p) => `                <p>${p}</p>`)
    .join('\n');

  return `            <section class="post-block" id="${id}">
              <div class="post-block__head">
                <span class="post-block__num" aria-hidden="true">${num}</span>
                <h2 class="post-block__title">${section.title}</h2>
              </div>
              <div class="post-block__content">
${paragraphs}${renderStats(section.stats)}${renderList(section.list)}${renderTags(section.tags)}
              </div>
            </section>`;
}

function renderPost(post) {
  const sectionsHtml = post.sections.map((s, i) => renderSection(s, i)).join('\n\n');
  const description = escapeHtml(getExcerpt(post).slice(0, 160));
  const readMinutes = getReadingMinutes(post);
  const highlightsHtml = renderHighlights(post);
  const tocHtml = renderToc(post);
  const relatedHtml = renderRelatedCards(post.slug);

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${post.title} | Blog HUMANA</title>
  <meta name="description" content="${description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/styles.css">
  <link rel="stylesheet" href="../css/blog.css">
  <link rel="stylesheet" href="../css/blog-post.css">
  <script src="../js/page-transition.js"></script>
</head>
<body>

  <nav class="page-nav page-nav--overlay" aria-label="Navegação principal">
    <div class="page-nav__inner">
      ${buildNavLogo('../')}
      <ul class="page-nav__list">
        <li class="page-nav__item"><a href="../index.html">Início</a></li>
        <li class="page-nav__item"><a href="../sobre.html">Sobre Nós</a></li>
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
        <li class="page-nav__item"><a href="../cop30.html">COP30</a></li>
        <li class="page-nav__item page-nav__item--dropdown">
          <a href="#" class="page-nav__dropdown-trigger" aria-haspopup="true" aria-expanded="false">
            Parceiros
            <span class="page-nav__link-icon" data-icon="chevron-down" data-icon-size="sm"></span>
          </a>
          <ul class="page-nav__dropdown">
            <li><a href="../parceiros.html">Nossos Colaboradores</a></li>
            <li><a href="../tao-filmes.html">TAO Filmes</a></li>
          </ul>
        </li>
        <li class="page-nav__item is-active"><a href="../blog.html">Blog</a></li>
        <li class="page-nav__item"><a href="../contato.html">Contato</a></li>
      </ul>
      <a href="../contato.html" class="page-nav__cta">
        Solicitar Orçamento
        <span class="page-nav__cta-icon" data-icon="arrow-right" data-icon-size="sm"></span>
      </a>
    </div>
  </nav>

  <div id="page-container">

    <article class="post-article">
      <header class="post-banner" aria-labelledby="post-banner-title">
        <img class="post-banner__media" src="../assets/images/blog/${post.image}" alt="" width="3840" height="2400">
        <div class="post-banner__shade" aria-hidden="true"></div>
        <div class="post-banner__wrap">
          <nav class="post-banner__breadcrumb" aria-label="Breadcrumb">
            <a href="../blog.html">Blog</a>
            <span aria-hidden="true">/</span>
            <span>${post.category}</span>
          </nav>
          <p class="post-banner__category">${post.category}</p>
          <h1 class="post-banner__title" id="post-banner-title">${post.title}</h1>
          <p class="post-banner__intro">${post.intro}</p>
        </div>
      </header>

      <div class="post-shell">
        <div class="post-shell__inner">

          <div class="post-highlights" aria-label="Destaques do artigo">
${highlightsHtml}
          </div>

          <div class="post-layout">
            <aside class="post-aside" aria-label="Informações do artigo">
              <nav class="post-toc" aria-labelledby="post-toc-title">
                <h2 class="post-toc__title" id="post-toc-title">Neste artigo</h2>
                <ol class="post-toc__list">
${tocHtml}
                </ol>
              </nav>

              <div class="post-author">
                <img class="post-author__photo" src="../assets/images/sobre/fundador.jpg" alt="Equipe HUMANA" width="96" height="96" loading="lazy">
                <div>
                  <h2 class="post-author__heading">Sobre a autora</h2>
                  <p class="post-author__name">Equipe HUMANA</p>
                  <p class="post-author__role">Comunicação institucional</p>
                </div>
              </div>

              <div class="post-aside-cta">
                <h2 class="post-aside-cta__title">Precisa de apoio linguístico?</h2>
                <p class="post-aside-cta__text">Fale com nossa equipe sobre tradução, interpretação ou formação.</p>
                <a href="../contato.html" class="post-aside-cta__btn">Falar com especialista</a>
              </div>
            </aside>

            <div class="post-main">
              <div class="post-body">
${sectionsHtml}
              </div>

              <blockquote class="post-quote">
                <span class="post-quote__icon" data-icon="message-circle" data-icon-size="md" aria-hidden="true"></span>
                <p class="post-quote__text">${post.callout}</p>
              </blockquote>
            </div>
          </div>

          <section class="post-related" aria-labelledby="post-related-title">
            <h2 class="post-related__title" id="post-related-title">Artigos relacionados</h2>
            <div class="post-related__grid">
${relatedHtml}
            </div>
          </section>

          <div class="post-cta-strip">
            <div class="post-cta-strip__copy">
              <span class="post-cta-strip__icon" data-icon="messages" data-icon-size="md" aria-hidden="true"></span>
              <div>
                <p class="post-cta-strip__title">Vamos conversar sobre seu projeto?</p>
                <p class="post-cta-strip__text">Tradução, interpretação e soluções multilíngues com a HUMANA.</p>
              </div>
            </div>
            <a href="../contato.html" class="post-cta-strip__btn">
              Solicitar orçamento
              <span data-icon="arrow-right" data-icon-size="sm" aria-hidden="true"></span>
            </a>
          </div>

          <a href="../blog.html" class="post-back">
            <span class="post-back__icon" data-icon="arrow-right" data-icon-size="sm" aria-hidden="true"></span>
            Voltar ao blog
          </a>

        </div>
      </div>
    </article>

  </div>

${buildSiteFooter('../')}

  <script src="../js/nav-dropdown.js"></script>
  <script src="../js/navbar-scroll.js"></script>
  <script src="../js/icons.js"></script>
  <script src="../js/blog-post.js"></script>
  <script src="../js/drawer.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>
`;
}

function renderCard(post) {
  const titleId = `blog-card-${post.slug}`;
  const excerpt = escapeHtml(getExcerpt(post));
  const title = escapeHtml(post.title);

  return `          <article class="blog-dark-card">
            <img class="blog-dark-card__bg" src="assets/images/blog/${post.image}" alt="" width="800" height="530">
            <div class="blog-dark-card__overlay" aria-hidden="true"></div>
            <div class="blog-dark-card__content">
              <p class="blog-dark-card__tag">${post.tag}</p>
              <h2 class="blog-dark-card__title" id="${titleId}">${title}</h2>
              <p class="blog-dark-card__excerpt">${excerpt}</p>
              <span class="blog-dark-card__link">Saiba mais <span class="blog-dark-card__link-icon" data-icon="arrow-right" data-icon-size="sm"></span></span>
            </div>
            <a href="blog/${post.slug}.html" class="blog-dark-card__hit" aria-labelledby="${titleId}"></a>
          </article>`;
}

const outDir = path.resolve('blog');
fs.mkdirSync(outDir, { recursive: true });

for (const post of posts) {
  const filePath = path.join(outDir, `${post.slug}.html`);
  fs.writeFileSync(filePath, renderPost(post), 'utf8');
  console.log('created', filePath);
}

const blogHtmlPath = path.resolve('blog.html');
const blogHtml = fs.readFileSync(blogHtmlPath, 'utf8');
const gridHtml = posts.map(renderCard).join('\n\n');
const gridBlock = `        <div class="blog-page__grid">\n${gridHtml}\n        </div>`;
const updatedBlogHtml = blogHtml.replace(
  /        <div class="blog-page__grid">[\s\S]*?        <\/div>\n\n      <\/div>\n    <\/section>/,
  `${gridBlock}\n\n      </div>\n    </section>`
);

fs.writeFileSync(blogHtmlPath, updatedBlogHtml, 'utf8');
console.log('updated', blogHtmlPath);

export { posts, getExcerpt, renderCard };
