/**
 * Drawer lateral — painel deslizante reutilizável
 */
(function () {
  'use strict';

  var SLIDE_MS = 600;
  var REVEAL_STEP_MS = 130;
  var HIDE_CONTENT_MS = 240;
  var REVEAL_ORDER = ['image', 'header', 'subtitle', 'meta', 'body'];

  var DRAWERS = {
    fundador: {
      id: '01',
      label: 'Fundador',
      title: 'Sandro Ruggeri Dulcet',
      role: 'Fundador e Diretor',
      image: 'assets/images/sobre/fundador.jpg',
      imageAlt: 'Sandro Ruggeri Dulcet, fundador da HUMANA COM & TRAD',
      lead: 'Tradutor e intérprete profissional desde 1995, com quase três décadas dedicadas à comunicação multilíngue de alto nível.',
      intro: 'Em 2008, consolidou a HUMANA COM & TRAD em Belém do Pará, construindo uma empresa reconhecida pela excelência técnica, proximidade humana e atuação em eventos científicos, institucionais e multilíngues em todo o Brasil e no exterior.',
      meta: [
        { icon: 'calendar', label: 'Desde', value: '1995' },
        { icon: 'user', label: 'Função', value: 'Fundador e Diretor' },
        { icon: 'languages', label: 'Área', value: 'Tradução e Interpretação' },
        { icon: 'award', label: 'Especialidade', value: 'Eventos científicos e multilíngues' },
      ],
      trajectory: [
        'Sandro Ruggeri Dulcet iniciou sua carreira como tradutor e intérprete em 1995, atendendo clientes locais e empresas do setor linguístico na região de Belém.',
        'Ao longo dos anos, ampliou a atuação para conferências internacionais, projetos de pesquisa e eventos multilíngues em diversas cidades do Brasil e do Escudo das Guianas.',
        'Sob sua direção, a HUMANA consolidou uma rede de tradutores e intérpretes qualificados, mantendo o compromisso com a qualidade, a confidencialidade e a justiça linguística.',
      ],
      principles: [
        { icon: 'target', title: 'Excelência técnica', text: 'Rigor terminológico e precisão em cada serviço prestado.' },
        { icon: 'heart-handshake', title: 'Proximidade humana', text: 'Atendimento personalizado e relação de confiança com clientes e equipe.' },
        { icon: 'shield', title: 'Compromisso institucional', text: 'Parcerias duradouras com organizações de pesquisa, ONGs e empresas.' },
        { icon: 'globe', title: 'Justiça linguística', text: 'Respeito à diversidade cultural e à comunicação inclusiva entre idiomas.' },
      ],
      quote: {
        text: 'A tradução não é apenas trocar palavras — é construir pontes entre culturas, idiomas e pessoas.',
        author: 'Sandro Ruggeri Dulcet',
      },
    },
    'clientes-servicos': {
      id: '02',
      label: 'Serviços',
      title: 'Clientes e Serviços',
      role: 'Mais de 750 projetos realizados',
      image: 'assets/images/sobre/card-servicos.jpg',
      imageAlt: 'Serviços de tradução e interpretação da HUMANA',
      lead: 'Na última década, a HUMANA prestou mais de 750 serviços de tradução e interpretação para mais de 400 empresas em mais de 20 cidades.',
      intro: 'Atuação em interpretação simultânea e consecutiva, tradução técnica, jurídica e científica — sempre com foco em qualidade, prazos e confidencialidade.',
      meta: [
        { icon: 'handshake', label: 'Projetos', value: '750+ serviços' },
        { icon: 'building-2', label: 'Empresas', value: '400+ atendidas' },
        { icon: 'map-pinned', label: 'Cidades', value: '20+ cidades' },
        { icon: 'award', label: 'Padrão', value: 'Qualidade e sigilo' },
      ],
      trajectory: [
        'A HUMANA atende organizações de pesquisa, ONGs, empresas privadas, instituições públicas e eventos científicos multilíngues.',
        'Nossos serviços abrangem interpretação simultânea e consecutiva, tradução técnica e jurídica, revisão de textos e formação de profissionais.',
        'Cada projeto é conduzido com planejamento cuidadoso, equipe especializada e acompanhamento próximo do cliente do início ao fim.',
      ],
      principles: [
        { icon: 'headphones', title: 'Interpretação simultânea', text: 'Eventos presenciais, híbridos e online com fluidez e precisão.' },
        { icon: 'languages', title: 'Tradução especializada', text: 'Textos jurídicos, acadêmicos, científicos e institucionais.' },
        { icon: 'graduation-cap', title: 'Formação profissional', text: 'Cursos de tradução e interpretação desde 2009.' },
        { icon: 'clock', title: 'Compromisso com prazos', text: 'Organização e clareza em projetos com demandas exigentes.' },
      ],
      quote: {
        text: 'Cada serviço é uma oportunidade de conectar pessoas, instituições e culturas com excelência linguística.',
        author: 'HUMANA COM & TRAD',
      },
    },
    tradutores: {
      id: '03',
      label: 'Profissionais',
      title: 'Tradutores e Intérpretes',
      role: 'Rede qualificada e experiente',
      image: 'assets/images/sobre/card-tradutores.jpg',
      imageAlt: 'Intérprete da HUMANA em serviço de interpretação',
      lead: '35 tradutores profissionais habituais e um grupo de 50 intérpretes colaboradores compõem a rede da HUMANA.',
      intro: 'Profissionais qualificados em tradução, revisão de textos e interpretação simultânea e consecutiva, atuando localmente e em outras cidades do Brasil e do Escudo das Guianas.',
      meta: [
        { icon: 'users', label: 'Tradutores', value: '35 colaboradores' },
        { icon: 'headphones', label: 'Intérpretes', value: '50 colaboradores' },
        { icon: 'map-pinned', label: 'Alcance', value: 'Brasil e Guianas' },
        { icon: 'award', label: 'Perfil', value: 'Profissionais especializados' },
      ],
      trajectory: [
        'A HUMANA mantém uma rede estável de tradutores profissionais para projetos de tradução técnica, jurídica e científica.',
        'Para interpretação, conta com intérpretes experientes em conferências, seminários, reuniões multilíngues e eventos presenciais e online.',
        'A seleção e capacitação contínua dos profissionais garantem padrão elevado de qualidade em todos os serviços prestados.',
      ],
      principles: [
        { icon: 'award', title: 'Qualificação técnica', text: 'Profissionais com experiência comprovada em suas áreas.' },
        { icon: 'shield', title: 'Confidencialidade', text: 'Sigilo absoluto em documentos e informações dos clientes.' },
        { icon: 'users', title: 'Trabalho em equipe', text: 'Coordenação próxima entre tradutores, revisores e intérpretes.' },
        { icon: 'globe', title: 'Diversidade linguística', text: 'Atuação em múltiplos idiomas e contextos culturais.' },
      ],
      quote: {
        text: 'Por trás de cada projeto há profissionais dedicados que transformam a comunicação multilíngue em experiência humana.',
        author: 'HUMANA COM & TRAD',
      },
    },
    projetos: {
      id: '04',
      label: 'Projetos',
      title: 'Projetos e Impacto',
      role: 'Atuação nacional e internacional',
      image: 'assets/images/sobre/card-temas.jpg',
      imageAlt: 'Atuação da HUMANA na Amazônia e no exterior',
      lead: 'A HUMANA atua em projetos de tradução e interpretação em todo o Brasil e em contextos internacionais.',
      intro: 'Eventos científicos, ambientais, institucionais e multilíngues — com a Amazônia como base e o mundo como horizonte de atuação.',
      meta: [
        { icon: 'map-pinned', label: 'Base', value: 'Amazônia brasileira' },
        { icon: 'globe', label: 'Alcance', value: 'Nacional e internacional' },
        { icon: 'leaf', label: 'Temas', value: 'Meio ambiente e ciência' },
        { icon: 'star', label: 'Impacto', value: 'Comunicação multilíngue' },
      ],
      trajectory: [
        'Os serviços da HUMANA versam principalmente sobre meio ambiente, pesquisas e publicações científicas — zoologia, antropologia, botânica — além de projetos institucionais e de tecnologia.',
        'A empresa participou de conferências, publicações e eventos em diversas regiões do Brasil e no exterior, conectando comunidades, pesquisadores e instituições.',
        'Com sede na Amazônia, a HUMANA reforça o compromisso com a sustentabilidade, a valorização das comunidades locais e a justiça linguística.',
      ],
      principles: [
        { icon: 'leaf', title: 'Meio ambiente', text: 'Tradução e interpretação para projetos ambientais e científicos.' },
        { icon: 'globe', title: 'Alcance global', text: 'Experiência em eventos multilíngues no Brasil e no exterior.' },
        { icon: 'heart-handshake', title: 'Impacto social', text: 'Comunicação que aproxima instituições e comunidades.' },
        { icon: 'target', title: 'Transformação', text: 'Linguagem como instrumento de diálogo e mudança.' },
      ],
      quote: {
        text: 'Conectamos línguas e culturas para ampliar o alcance de projetos que transformam realidades.',
        author: 'HUMANA COM & TRAD',
      },
    },
    missao: {
      id: '—',
      label: 'Institucional',
      title: 'Missão',
      role: 'Compromisso com a excelência linguística',
      image: 'assets/images/sobre/missao.jpg',
      imageAlt: 'Profissional da HUMANA em serviço de interpretação',
      lead: 'A missão da HUMANA é oferecer serviços de tradução e interpretação de alto nível, com qualidade e competência.',
      intro: 'Atraímos, atendemos e fidelizamos clientes por meio de soluções linguísticas humanizadas, precisas e confiáveis — em eventos, projetos institucionais e demandas técnicas em todo o Brasil e no exterior.',
      meta: [
        { icon: 'target', label: 'Foco', value: 'Alto nível técnico' },
        { icon: 'award', label: 'Padrão', value: 'Qualidade e competência' },
        { icon: 'heart-handshake', label: 'Relação', value: 'Fidelização de clientes' },
        { icon: 'languages', label: 'Serviços', value: 'Tradução e interpretação' },
      ],
      trajectory: [
        'Desde 1995, a HUMANA construiu uma trajetória pautada pela excelência em tradução e interpretação profissional.',
        'Cada projeto é conduzido com rigor terminológico, confidencialidade e atenção às necessidades específicas de cada cliente.',
        'Nossa missão orienta a formação da equipe, a escolha de parceiros e o padrão de qualidade em todos os serviços prestados.',
      ],
      principles: [
        { icon: 'target', title: 'Excelência', text: 'Tradução e interpretação de alto nível em diversas áreas.' },
        { icon: 'award', title: 'Qualidade', text: 'Processos padronizados e revisão especializada.' },
        { icon: 'users', title: 'Atendimento', text: 'Proximidade e dedicação em cada relação com o cliente.' },
        { icon: 'shield', title: 'Confiança', text: 'Competência técnica que fideliza parceiros e instituições.' },
      ],
      quote: {
        text: 'Oferecer serviços linguísticos de excelência é conectar pessoas, instituições e culturas com clareza e precisão.',
        author: 'HUMANA COM & TRAD',
      },
    },
    visao: {
      id: '—',
      label: 'Institucional',
      title: 'Visão',
      role: 'Liderança e diferenciação no mercado',
      image: 'assets/images/sobre/visao.jpg',
      imageAlt: 'Equipe da HUMANA em trabalho colaborativo',
      lead: 'Desejamos continuar sendo uma empresa líder e diferenciada no mercado de prestadores de serviços linguísticos de qualidade.',
      intro: 'Buscamos criar valor adicional para quem participa direta ou indiretamente da HUMANA — clientes, colaboradores, parceiros e comunidades atendidas.',
      meta: [
        { icon: 'star', label: 'Posição', value: 'Empresa líder' },
        { icon: 'globe', label: 'Mercado', value: 'Serviços linguísticos' },
        { icon: 'target', label: 'Diferencial', value: 'Qualidade e proximidade' },
        { icon: 'heart-handshake', label: 'Valor', value: 'Para todos os envolvidos' },
      ],
      trajectory: [
        'A HUMANA consolidou presença em eventos científicos, institucionais e multilíngues no Brasil e no exterior.',
        'Nossa visão impulsiona a ampliação de serviços, idiomas e áreas de atuação sem perder o padrão de excelência.',
        'Investimos na formação de profissionais e na inovação de soluções presenciais, híbridas e online.',
      ],
      principles: [
        { icon: 'star', title: 'Liderança', text: 'Referência em tradução e interpretação de qualidade.' },
        { icon: 'target', title: 'Diferenciação', text: 'Atuação humana e técnica que destaca a empresa no mercado.' },
        { icon: 'users', title: 'Valor compartilhado', text: 'Benefícios para clientes, equipe e parceiros.' },
        { icon: 'globe', title: 'Horizonte amplo', text: 'Crescimento sustentável com alcance nacional e internacional.' },
      ],
      quote: {
        text: 'Ser líder é unir excelência técnica, proximidade humana e impacto duradouro para quem confia em nosso trabalho.',
        author: 'HUMANA COM & TRAD',
      },
    },
    valores: {
      id: '—',
      label: 'Institucional',
      title: 'Valores',
      role: 'Princípios que guiam nossa atuação',
      image: 'assets/images/sobre/valores.jpg',
      imageAlt: 'Equipe da HUMANA',
      lead: 'Os valores que nos inspiram e guiam a estratégia e forma de agir da empresa refletem dedicação, organização e cuidado em cada projeto.',
      intro: 'Dedicação e entusiasmo no trabalho, organização, clareza, cuidado e uso racional no tratamento dos recursos orientam nossas decisões e relações institucionais.',
      meta: [
        { icon: 'heart-handshake', label: 'Atitude', value: 'Dedicação e entusiasmo' },
        { icon: 'clock', label: 'Método', value: 'Organização e clareza' },
        { icon: 'shield', label: 'Cuidado', value: 'Com pessoas e projetos' },
        { icon: 'leaf', label: 'Recursos', value: 'Uso racional e sustentável' },
      ],
      trajectory: [
        'A dedicação ao trabalho bem feito está presente em cada serviço de tradução e interpretação prestado pela HUMANA.',
        'A organização e a clareza garantem prazos, processos transparentes e comunicação eficiente com clientes e equipe.',
        'O cuidado com pessoas e o uso racional de recursos refletem o compromisso da empresa com a sustentabilidade e a responsabilidade institucional.',
      ],
      principles: [
        { icon: 'heart-handshake', title: 'Dedicação', text: 'Entusiasmo e comprometimento em cada projeto.' },
        { icon: 'clock', title: 'Organização', text: 'Processos claros e planejamento cuidadoso.' },
        { icon: 'target', title: 'Clareza', text: 'Comunicação transparente com clientes e colaboradores.' },
        { icon: 'leaf', title: 'Sustentabilidade', text: 'Uso racional de recursos e respeito ao território.' },
      ],
      quote: {
        text: 'Nossos valores traduzem quem somos: uma empresa que cuida das pessoas, do trabalho e dos recursos com responsabilidade.',
        author: 'HUMANA COM & TRAD',
      },
    },
    'quem-somos': {
      id: '01',
      label: 'Institucional',
      title: 'Quem somos nós',
      role: 'HUMANA COM & TRAD',
      image: 'assets/images/site/interprete-humana.jpg',
      imageAlt: 'Equipe e atuação da HUMANA COM & TRAD',
      lead: 'Especialistas em tradução simultânea, interpretação de conferências, tradução técnica e jurídica e formação de tradutores e intérpretes.',
      intro: 'Fundada e dirigida por Sandro Ruggeri Dulcet, intérprete profissional com atuação desde 1995, a HUMANA acumula décadas de experiência ao lado de instituições de pesquisa, ONGs e eventos científicos multilíngues.',
      meta: [
        { icon: 'calendar', label: 'Desde', value: '1995' },
        { icon: 'map-pinned', label: 'Sede', value: 'Belém do Pará' },
        { icon: 'globe', label: 'Alcance', value: 'Brasil e exterior' },
        { icon: 'award', label: 'Foco', value: 'Excelência linguística' },
      ],
      trajectory: [
        'Com sede na Amazônia brasileira e alcance global, somos referência em serviços linguísticos humanizados.',
        'Nosso modelo de atuação baseia-se na justiça linguística, no respeito à diversidade cultural e no compromisso com a excelência técnica.',
        'Oferecemos soluções personalizadas para eventos presenciais, híbridos e online, garantindo clareza, precisão terminológica e conexão entre culturas.',
      ],
      principles: [
        { icon: 'target', title: 'Excelência técnica', text: 'Precisão e rigor em tradução e interpretação.' },
        { icon: 'heart-handshake', title: 'Serviços humanizados', text: 'Proximidade e atenção a cada cliente e projeto.' },
        { icon: 'globe', title: 'Alcance internacional', text: 'Experiência em eventos multilíngues no Brasil e no exterior.' },
        { icon: 'leaf', title: 'Raízes amazônicas', text: 'Compromisso com a região e suas comunidades.' },
      ],
      quote: {
        text: 'Somos especialistas em conectar pessoas, instituições e culturas por meio da linguagem.',
        author: 'HUMANA COM & TRAD',
      },
    },
    interpretacao: {
      id: '02',
      label: 'Serviços',
      title: 'Interpretação Simultânea',
      role: 'Comunicação fluida em tempo real',
      image: 'assets/images/amazonia.jpg',
      imageAlt: 'Interpretação simultânea em evento multilíngue',
      lead: 'A HUMANA é especializada em interpretação simultânea de alto nível, em eventos presenciais e virtuais.',
      intro: 'Conferências internacionais, seminários acadêmicos e reuniões multilíngues com fluidez, clareza e profissionalismo na comunicação entre idiomas.',
      meta: [
        { icon: 'headphones', label: 'Modalidade', value: 'Simultânea e consecutiva' },
        { icon: 'monitor-smartphone', label: 'Formato', value: 'Presencial e online' },
        { icon: 'users', label: 'Equipe', value: 'Intérpretes experientes' },
        { icon: 'award', label: 'Padrão', value: 'Alto nível técnico' },
      ],
      trajectory: [
        'Mais de 750 serviços realizados para instituições, empresas e eventos científicos.',
        'Infraestrutura e equipe preparadas para conferências presenciais, híbridas e totalmente virtuais.',
        'Planejamento prévio, glossários terminológicos e coordenação técnica em cada projeto.',
      ],
      principles: [
        { icon: 'headphones', title: 'Fluidez', text: 'Comunicação contínua sem interrupções na experiência do evento.' },
        { icon: 'target', title: 'Precisão', text: 'Domínio terminológico nas áreas técnicas e científicas.' },
        { icon: 'shield', title: 'Confidencialidade', text: 'Sigilo em reuniões e eventos institucionais.' },
        { icon: 'clock', title: 'Preparação', text: 'Estudo prévio de materiais e contexto do evento.' },
      ],
      quote: {
        text: 'A interpretação simultânea exige técnica, concentração e sensibilidade cultural — qualidades que definem nossa equipe.',
        author: 'HUMANA COM & TRAD',
      },
    },
    traducao: {
      id: '02',
      label: 'Serviços',
      title: 'Tradução',
      role: 'Textos precisos e culturalmente adaptados',
      image: 'assets/images/sobre/card-servicos.jpg',
      imageAlt: 'Tradução técnica e jurídica',
      lead: 'Traduções precisas e culturalmente adaptadas em diversas áreas do conhecimento.',
      intro: 'Jurídico, acadêmico, científico, institucional e cultural — com linguagem adequada, fidelidade ao conteúdo e cuidado com nuances técnicas.',
      meta: [
        { icon: 'languages', label: 'Áreas', value: 'Jurídica e científica' },
        { icon: 'award', label: 'Qualidade', value: 'Revisão especializada' },
        { icon: 'users', label: 'Equipe', value: '35 tradutores' },
        { icon: 'clock', label: 'Entrega', value: 'Prazos acordados' },
      ],
      trajectory: [
        'Mais de 200 trabalhos de tradução técnica e jurídica concluídos nos últimos anos.',
        'Projetos em meio ambiente, pesquisa científica, publicações acadêmicas e documentos institucionais.',
        'Processo com tradução, revisão e controle de qualidade em cada entrega.',
      ],
      principles: [
        { icon: 'target', title: 'Fidelidade', text: 'Respeito ao conteúdo e intenção do texto original.' },
        { icon: 'languages', title: 'Adaptação cultural', text: 'Linguagem adequada ao público e contexto de uso.' },
        { icon: 'award', title: 'Revisão rigorosa', text: 'Controle terminológico e editorial em cada projeto.' },
        { icon: 'shield', title: 'Confidencialidade', text: 'Proteção de documentos e informações sensíveis.' },
      ],
      quote: {
        text: 'Traduzir é interpretar sentidos, contextos e culturas — não apenas converter palavras.',
        author: 'HUMANA COM & TRAD',
      },
    },
    cursos: {
      id: '02',
      label: 'Serviços',
      title: 'Cursos Formativos',
      role: 'Formação de tradutores e intérpretes',
      image: 'assets/images/humana-com-trad.jpg',
      imageAlt: 'Formação em tradução e interpretação',
      lead: 'Desde 2009, cursos de formação em tradução e interpretação com foco no desenvolvimento técnico e ético de novos profissionais.',
      intro: 'Investimos na capacitação de talentos locais, ampliando oportunidades de trabalho na Amazônia e fortalecendo o setor linguístico.',
      meta: [
        { icon: 'calendar', label: 'Desde', value: '2009' },
        { icon: 'graduation-cap', label: 'Foco', value: 'Formação profissional' },
        { icon: 'map-pinned', label: 'Região', value: 'Amazônia' },
        { icon: 'users', label: 'Público', value: 'Novos profissionais' },
      ],
      trajectory: [
        'Programas de formação que combinam teoria, prática e ética profissional na área de tradução e interpretação.',
        'Contribuição para a qualificação de profissionais na região amazônica e ampliação do mercado local.',
        'Compromisso com a excelência técnica e o desenvolvimento sustentável do setor linguístico.',
      ],
      principles: [
        { icon: 'graduation-cap', title: 'Formação sólida', text: 'Base técnica e teórica para a prática profissional.' },
        { icon: 'heart-handshake', title: 'Ética profissional', text: 'Valores de responsabilidade, clareza e dedicação.' },
        { icon: 'leaf', title: 'Talentos locais', text: 'Investimento na capacitação na Amazônia.' },
        { icon: 'target', title: 'Mercado de trabalho', text: 'Preparação para demandas reais do setor.' },
      ],
      quote: {
        text: 'Formar novos profissionais é ampliar o horizonte da comunicação multilíngue na nossa região.',
        author: 'HUMANA COM & TRAD',
      },
    },
    'historia-1995': {
      id: '1995',
      label: 'Linha do tempo',
      title: 'Fundação',
      role: 'O início em Belém do Pará',
      hideImage: true,
      lead: 'Sandro Ruggeri Dulcet inicia sua atuação profissional como tradutor e intérprete, atendendo clientes locais e empresas do setor em Belém do Pará.',
      intro: 'Nesse mesmo ano nasce o propósito que guiaria a HUMANA COM & TRAD: oferecer interpretação e tradução de excelência, com atenção às necessidades de cada cliente e respeito à diversidade cultural.',
      meta: [
        { icon: 'calendar', label: 'Ano', value: '1995' },
        { icon: 'map-pinned', label: 'Base', value: 'Belém do Pará' },
        { icon: 'flag', label: 'Marco', value: 'Fundação' },
        { icon: 'heart-handshake', label: 'Foco', value: 'Clientes locais' },
      ],
      trajectory: [
        'Os primeiros projetos combinavam interpretação consecutiva e tradução de documentos, com atendimento próximo e compreensão do contexto de cada demanda.',
        'Desde o início, a atuação se orientou por qualidade técnica, confidencialidade e cuidado humano com cada cliente.',
        'Essa visão moldou a cultura da HUMANA e permanece presente em cada evento e projeto realizado até hoje.',
      ],
      principles: [
        { icon: 'flag', title: 'Primeiros clientes', text: 'Relações de confiança com empresas e clientes locais em Belém.' },
        { icon: 'languages', title: 'Interpretação e tradução', text: 'Núcleo da atuação profissional desde o primeiro dia.' },
        { icon: 'leaf', title: 'Base amazônica', text: 'Raízes na Amazônia que orientam a identidade da empresa.' },
        { icon: 'heart-handshake', title: 'Proximidade humana', text: 'Atendimento atento às necessidades de cada cliente.' },
      ],
      quote: {
        text: 'A fundação em 1995 marcou o início de uma trajetória construída com confiança, excelência e raízes amazônicas.',
        author: 'HUMANA COM & TRAD',
      },
    },
    'historia-2008': {
      id: '2008',
      label: 'Linha do tempo',
      title: 'Expansão',
      role: 'Crescimento estruturado',
      hideImage: true,
      lead: 'A HUMANA COM & TRAD consolida sua estrutura em Belém do Pará e amplia a atuação para novos idiomas, áreas técnicas e eventos internacionais.',
      intro: 'Ao longo dos primeiros quinze anos de trajetória, a empresa prestou centenas de serviços de interpretação em eventos de variadas disciplinas — de conferências científicas a encontros institucionais de grande porte.',
      meta: [
        { icon: 'calendar', label: 'Ano', value: '2008' },
        { icon: 'globe', label: 'Alcance', value: 'Internacional' },
        { icon: 'languages', label: 'Idiomas', value: 'Portfólio ampliado' },
        { icon: 'award', label: 'Áreas', value: 'Técnicas especializadas' },
      ],
      trajectory: [
        'A equipe cresce em número e especialização, permitindo atender demandas cada vez mais complexas.',
        'Congressos científicos, seminários técnicos e encontros institucionais passam a integrar o portfólio com regularidade.',
        'A reputação da empresa se consolida no mercado de tradução e interpretação profissional.',
      ],
      principles: [
        { icon: 'languages', title: 'Novos idiomas', text: 'Ampliação do portfólio linguístico para projetos multilíngues.' },
        { icon: 'globe', title: 'Eventos internacionais', text: 'Participação em congressos e encontros de grande porte.' },
        { icon: 'award', title: 'Áreas técnicas', text: 'Atuação em disciplinas científicas e institucionais.' },
        { icon: 'users', title: 'Equipe ampliada', text: 'Profissionais qualificados em diversas especialidades.' },
      ],
      quote: {
        text: 'A expansão reforçou a capacidade da HUMANA de atender projetos multilíngues com escala e precisão.',
        author: 'HUMANA COM & TRAD',
      },
    },
    'historia-2015': {
      id: '2015',
      label: 'Linha do tempo',
      title: 'Atuação Internacional',
      role: 'Presença além das fronteiras',
      hideImage: true,
      lead: 'Fortalecimento da presença em projetos multilíngues e em organizações internacionais, com equipe em diversas regiões do Brasil e do exterior.',
      intro: 'A empresa se consolidou em tradução técnica, jurídica e institucional, com revisão especializada e atenção ao contexto de uso de cada material entregue.',
      meta: [
        { icon: 'globe', label: 'Alcance', value: 'Brasil e exterior' },
        { icon: 'languages', label: 'Tradução', value: 'Técnica e jurídica' },
        { icon: 'building-2', label: 'Institucional', value: 'Organizações globais' },
        { icon: 'award', label: 'Revisão', value: 'Especializada' },
      ],
      trajectory: [
        'A HUMANA integra redes de profissionais e participa de iniciativas com alcance global.',
        'Documentos jurídicos, materiais técnicos e conteúdos institucionais ganham processos de revisão rigorosos.',
        'A qualidade que marcou a trajetória desde a fundação se mantém em projetos internacionais.',
      ],
      principles: [
        { icon: 'map-pinned', title: 'Brasil', text: 'Atuação consolidada em projetos nacionais de referência.' },
        { icon: 'globe', title: 'Exterior', text: 'Presença em organizações e eventos internacionais.' },
        { icon: 'languages', title: 'Multilíngue', text: 'Equipe preparada para demandas em diversos idiomas.' },
        { icon: 'shield', title: 'Confidencialidade', text: 'Rigor no tratamento de materiais sensíveis.' },
      ],
      quote: {
        text: 'Em 2015, a HUMANA consolidou sua presença internacional sem abrir mão da proximidade com cada cliente.',
        author: 'HUMANA COM & TRAD',
      },
    },
    'historia-2020': {
      id: '2020',
      label: 'Linha do tempo',
      title: 'Novos Horizontes',
      role: 'Comunicação remota de alto nível',
      hideImage: true,
      lead: 'Expansão de serviços híbridos e online, acompanhando as novas demandas globais de comunicação remota e eventos virtuais.',
      intro: 'A interpretação simultânea remota passou a integrar o portfólio com a mesma qualidade dos eventos presenciais — permitindo conferências, reuniões e formações multilíngues com segurança e agilidade.',
      meta: [
        { icon: 'monitor-smartphone', label: 'Formato', value: 'Híbrido e online' },
        { icon: 'headphones', label: 'Serviço', value: 'Interpretação remota' },
        { icon: 'users', label: 'Eventos', value: 'Virtuais e presenciais' },
        { icon: 'clock', label: 'Agilidade', value: 'Resposta rápida' },
      ],
      trajectory: [
        'A interpretação simultânea remota integra o portfólio com infraestrutura técnica e equipe preparada.',
        'Conferências, reuniões corporativas e formações multilíngues ganham novos formatos sem perder excelência.',
        'Clientes de qualquer lugar passam a realizar eventos multilíngues com segurança e fluidez.',
      ],
      principles: [
        { icon: 'headphones', title: 'Interpretação remota', text: 'Mesma qualidade dos eventos presenciais.' },
        { icon: 'monitor-smartphone', title: 'Eventos híbridos', text: 'Presencial e virtual com coordenação técnica.' },
        { icon: 'globe', title: 'Formatos online', text: 'Adaptação às novas demandas globais de comunicação.' },
        { icon: 'target', title: 'Precisão', text: 'Planejamento e preparação em cada modalidade.' },
      ],
      quote: {
        text: 'Os novos horizontes de 2020 ampliaram as possibilidades de comunicação multilíngue em qualquer lugar do mundo.',
        author: 'HUMANA COM & TRAD',
      },
    },
    'historia-2026': {
      id: '2026',
      label: 'Linha do tempo',
      title: 'Continuamos conectando',
      role: 'Uma trajetória em números',
      hideImage: true,
      lead: 'Mais de 750 projetos realizados e um compromisso renovado com pessoas e culturas — da Amazônia para o Brasil e para o mundo.',
      intro: 'Hoje, a HUMANA conta com mais de 35 tradutores profissionais e mais de 50 intérpretes colaboradores, atuando em interpretação simultânea presencial e remota, tradução técnica e jurídica, e cursos formativos.',
      meta: [
        { icon: 'handshake', label: 'Serviços', value: '750+ realizados' },
        { icon: 'building-2', label: 'Empresas', value: '400+ atendidas' },
        { icon: 'users', label: 'Tradutores', value: '35+' },
        { icon: 'headphones', label: 'Intérpretes', value: '50+' },
      ],
      trajectory: [
        'A equipe reúne tradutores e intérpretes preparados para demandas presenciais, remotas e híbridas.',
        'Além dos serviços de interpretação e tradução, a HUMANA mantém cursos formativos que fortalecem a cena local.',
        'Seguimos conectando pessoas e culturas com o mesmo compromisso de excelência desde 1995.',
      ],
      principles: [
        { icon: 'headphones', title: 'Serviços', text: 'Mais de 750 serviços de tradução e interpretação.' },
        { icon: 'building-2', title: 'Empresas', text: 'Mais de 400 empresas atendidas no Brasil e no exterior.' },
        { icon: 'users', title: 'Colaboradores', text: '35 tradutores e 50 intérpretes colaboradores.' },
        { icon: 'graduation-cap', title: 'Formação', text: 'Cursos formativos para novos profissionais da área.' },
      ],
      quote: {
        text: 'Seguimos conectando pessoas e culturas com excelência — da floresta amazônica às conferências internacionais.',
        author: 'HUMANA COM & TRAD',
      },
    },
    'onde-estamos': {
      id: '03',
      label: 'Institucional',
      title: 'Onde estamos',
      role: 'Sede na Amazônia',
      image: 'assets/images/onde-estamos.jpg',
      imageAlt: 'Sede do Instituto HUMANA em Benevides',
      lead: 'A nova sede do Instituto HUMANA, em Benevides a 30 km de Belém — PA, foi construída com técnicas de bioarquitetura e materiais locais.',
      intro: 'Reforçamos nosso compromisso com a sustentabilidade, a valorização das comunidades amazônicas e a justiça linguística.',
      meta: [
        { icon: 'map-pinned', label: 'Local', value: 'Benevides — PA' },
        { icon: 'leaf', label: 'Construção', value: 'Bioarquitetura' },
        { icon: 'building-2', label: 'Distância', value: '30 km de Belém' },
        { icon: 'globe', label: 'Atuação', value: 'Brasil e exterior' },
      ],
      trajectory: [
        'A HUMANA COM & TRAD opera a partir da Amazônia, conectando a região ao mundo por meio de serviços linguísticos de alto nível.',
        'A sede em Benevides reflete valores de sustentabilidade, uso racional de recursos e respeito ao território.',
        'Atendemos clientes em todo o Brasil e participamos de projetos internacionais a partir dessa base amazônica.',
      ],
      principles: [
        { icon: 'leaf', title: 'Sustentabilidade', text: 'Bioarquitetura e materiais locais na nova sede.' },
        { icon: 'map-pinned', title: 'Raízes regionais', text: 'Presença forte na Amazônia paraense.' },
        { icon: 'globe', title: 'Conexão global', text: 'Projetos locais com alcance internacional.' },
        { icon: 'heart-handshake', title: 'Comunidades', text: 'Valorização das comunidades amazônicas.' },
      ],
      quote: {
        text: 'Da Amazônia para o mundo — nossa sede reflete quem somos e como atuamos.',
        author: 'HUMANA COM & TRAD',
      },
    },
  };

  var root = null;
  var panel = null;
  var closeBtn = null;
  var contentEl = null;
  var isOpen = false;
  var isAnimating = false;
  var revealTimers = [];
  var lastFocus = null;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderMeta(items) {
    return items
      .map(function (item) {
        return (
          '<div class="drawer-meta__item">' +
          '<span class="drawer-meta__icon" data-icon="' +
          escapeHtml(item.icon) +
          '" data-icon-size="md"></span>' +
          '<div><span class="drawer-meta__label">' +
          escapeHtml(item.label) +
          '</span>' +
          '<span class="drawer-meta__value">' +
          escapeHtml(item.value) +
          '</span></div></div>'
        );
      })
      .join('');
  }

  function renderPrinciples(items) {
    return items
      .map(function (item) {
        return (
          '<li class="drawer-principles__item">' +
          '<span class="drawer-principles__icon" data-icon="' +
          escapeHtml(item.icon) +
          '" data-icon-size="md"></span>' +
          '<div><p class="drawer-principles__title">' +
          escapeHtml(item.title) +
          '</p>' +
          '<p class="drawer-principles__text">' +
          escapeHtml(item.text) +
          '</p></div></li>'
        );
      })
      .join('');
  }

  function renderContent(data) {
    var trajectoryHtml = data.trajectory
      .map(function (p) {
        return '<p>' + escapeHtml(p) + '</p>';
      })
      .join('');

    var heroHtml = data.hideImage
      ? ''
      : '<div class="drawer-reveal drawer-reveal--image drawer-hero">' +
        '<figure class="drawer-hero__frame">' +
        '<img src="' +
        escapeHtml(data.image) +
        '" alt="' +
        escapeHtml(data.imageAlt) +
        '">' +
        '</figure></div>';

    return (
      heroHtml +
      '<div class="drawer-reveal drawer-reveal--header drawer-header">' +
      '<p class="drawer-header__id">' +
      escapeHtml(data.id + '. ' + data.label) +
      '</p>' +
      '<h2 class="drawer-header__title" id="drawer-title">' +
      escapeHtml(data.title) +
      '</h2></div>' +
      '<div class="drawer-reveal drawer-reveal--subtitle drawer-subtitle-block">' +
      '<p class="drawer-subtitle-block__role">' +
      escapeHtml(data.role) +
      '</p>' +
      '<span class="drawer-subtitle-block__line" aria-hidden="true"></span>' +
      '<p class="drawer-subtitle-block__lead">' +
      escapeHtml(data.lead) +
      '</p>' +
      '<p class="drawer-subtitle-block__text">' +
      escapeHtml(data.intro) +
      '</p></div>' +
      '<div class="drawer-reveal drawer-reveal--meta drawer-meta">' +
      renderMeta(data.meta) +
      '</div>' +
      '<div class="drawer-reveal drawer-reveal--body drawer-body">' +
      '<div class="drawer-section drawer-section--trajectory">' +
      '<h3 class="drawer-section__heading"><span class="drawer-section__dot" aria-hidden="true"></span>Trajetória</h3>' +
      '<div class="drawer-section__text">' +
      trajectoryHtml +
      '</div>' +
      (data.quote
        ? '<blockquote class="drawer-quote">' +
          '<div class="drawer-quote__icon" data-icon="message-circle" data-icon-size="md"></div>' +
          '<p class="drawer-quote__text">&ldquo;' +
          escapeHtml(data.quote.text) +
          '&rdquo;</p>' +
          '<cite class="drawer-quote__author">' +
          escapeHtml(data.quote.author) +
          '</cite></blockquote>'
        : '') +
      '</div>' +
      '<div class="drawer-section drawer-section--principles">' +
      '<h3 class="drawer-section__heading"><span class="drawer-section__dot" aria-hidden="true"></span>Princípios</h3>' +
      '<ul class="drawer-principles">' +
      renderPrinciples(data.principles) +
      '</ul></div></div>'
    );
  }

  function clearRevealTimers() {
    revealTimers.forEach(clearTimeout);
    revealTimers = [];
  }

  function hideAllReveals() {
    if (!contentEl) return;
    contentEl.querySelectorAll('.drawer-reveal').forEach(function (el) {
      el.classList.remove('is-visible');
    });
  }

  function revealContentSequence(data) {
    hideAllReveals();
    var order =
      data && data.hideImage
        ? ['header', 'subtitle', 'meta', 'body']
        : REVEAL_ORDER;

    order.forEach(function (step, index) {
      var timer = setTimeout(function () {
        var el = contentEl.querySelector('.drawer-reveal--' + step);
        if (el) {
          el.classList.add('is-visible');
        }
      }, index * REVEAL_STEP_MS);
      revealTimers.push(timer);
    });
  }

  function mountDrawerIcons() {
    if (window.HumanaIcons && typeof window.HumanaIcons.mount === 'function') {
      window.HumanaIcons.mount();
    }
  }

  function buildDrawer() {
    root = document.createElement('div');
    root.className = 'drawer-root';
    root.setAttribute('aria-hidden', 'true');
    root.innerHTML =
      '<div class="drawer-backdrop" data-drawer-dismiss></div>' +
      '<aside class="drawer-panel" role="dialog" aria-modal="true" aria-labelledby="drawer-title" tabindex="-1">' +
      '<div class="drawer-panel__scroll">' +
      '<div class="drawer-panel__inner" data-drawer-content></div>' +
      '</div></aside>' +
      '<button type="button" class="drawer-close" aria-label="Fechar painel">&times;</button>';

    document.body.appendChild(root);
    panel = root.querySelector('.drawer-panel');
    closeBtn = root.querySelector('.drawer-close');
    contentEl = root.querySelector('[data-drawer-content]');

    closeBtn.addEventListener('click', closeDrawer);
    root.querySelector('[data-drawer-dismiss]').addEventListener('click', closeDrawer);

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen) {
        closeDrawer();
      }
    });
  }

  function openDrawer(id) {
    var data = DRAWERS[id];
    if (!data || isAnimating) return;

    if (!root) buildDrawer();

    if (isOpen) {
      closeDrawer(function () {
        openDrawer(id);
      });
      return;
    }

    isAnimating = true;
    lastFocus = document.activeElement;
    clearRevealTimers();

    contentEl.innerHTML = renderContent(data);
    mountDrawerIcons();
    hideAllReveals();

    panel.classList.toggle('drawer-panel--no-hero', !!data.hideImage);

    root.classList.add('is-active');
    root.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.add('is-open');
      });
    });

    var slideCompleted = false;

    function completeSlideIn() {
      if (slideCompleted) return;
      slideCompleted = true;
      revealContentSequence(data);
      isOpen = true;
      isAnimating = false;
      closeBtn.focus();
    }

    function onSlideEnd(event) {
      if (event.propertyName !== 'transform') return;
      panel.removeEventListener('transitionend', onSlideEnd);
      completeSlideIn();
    }

    panel.addEventListener('transitionend', onSlideEnd);

    revealTimers.push(
      setTimeout(function () {
        panel.removeEventListener('transitionend', onSlideEnd);
        completeSlideIn();
      }, SLIDE_MS + 80)
    );
  }

  function closeDrawer(callback) {
    if (!root || !isOpen || isAnimating) {
      if (typeof callback === 'function') callback();
      return;
    }

    isAnimating = true;
    clearRevealTimers();

    root.classList.add('is-hiding-content');
    hideAllReveals();

    setTimeout(function () {
      root.classList.remove('is-hiding-content');
      root.classList.remove('is-open');
      root.classList.add('is-closing');

      function onSlideOut(event) {
        if (event.propertyName !== 'transform') return;
        panel.removeEventListener('transitionend', onSlideOut);

        root.classList.remove('is-active', 'is-closing');
        root.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('drawer-open');
        contentEl.innerHTML = '';
        isOpen = false;
        isAnimating = false;

        if (lastFocus && typeof lastFocus.focus === 'function') {
          lastFocus.focus();
        }

        if (typeof callback === 'function') callback();
      }

      panel.addEventListener('transitionend', onSlideOut);
    }, HIDE_CONTENT_MS);
  }

  function isSaibaMaisTrigger(el) {
    if (!el || el.hasAttribute('data-drawer-ignore')) return false;
    if (el.hasAttribute('data-drawer')) return true;

    var text = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    return text.indexOf('saiba mais') !== -1 || text.indexOf('saber mais') !== -1;
  }

  function resolveDrawerId(el) {
    if (el.hasAttribute('data-drawer')) {
      return el.getAttribute('data-drawer');
    }

    var block = el.closest('[data-drawer-id]');
    if (block) {
      return block.getAttribute('data-drawer-id');
    }

    return 'quem-somos';
  }

  function bindTriggers() {
    document.addEventListener('click', function (event) {
      var trigger = event.target.closest('a, button');

      if (!isSaibaMaisTrigger(trigger)) return;

      event.preventDefault();
      var id = resolveDrawerId(trigger);
      openDrawer(id);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindTriggers);
  } else {
    bindTriggers();
  }

  window.HumanaDrawer = {
    open: openDrawer,
    close: closeDrawer,
  };
})();
