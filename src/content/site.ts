/**
 * Heat On — conteúdo canônico do site (handoff v2.0, real-first).
 * Fontes: 03_CONTENT_MODEL_PTBR.md, 06_REAL_MEDIA_INVENTORY.md, portfolio_saude.md.
 * Copy inicial para prototipação; revisar com os sócios antes da publicação.
 * A tagline "Scientific Intelligence in Motion" nunca é traduzida.
 */

export const meta = {
  title: 'Heat On — Scientific Intelligence in Motion',
  description:
    'Software, dados e sistemas inteligentes para saúde, ciência e operações complexas. A Heat On transforma sinal em evidência e evidência em decisão.',
  ogImage: '/assets/social/og-home-real.png',
  twitterImage: '/assets/social/twitter-card-real.png',
  locale: 'pt_BR',
} as const;

export const nav = {
  items: [
    { num: '01', label: 'Projetos', href: '/projetos' },
    { num: '02', label: 'Setores', href: '/setores' },
    { num: '03', label: 'Método', href: '/metodo' },
    { num: '04', label: 'Empresa', href: '/empresa' },
    { num: '05', label: 'Contato', href: '/contato' },
  ],
  indexLabel: 'INDEX',
} as const;

/** Seções rastreadas pelo indicador PAGE/SECTION do header. */
export const sections = [
  { id: 'hero', num: '00', name: 'INTRO' },
  { id: 'empresa', num: '01', name: 'TERRITORY' },
  { id: 'territorio', num: '02', name: 'FIELD' },
  { id: 'oren', num: '03', name: 'OREN' },
  { id: 'femur', num: '04', name: 'FEMUR' },
  { id: 'efast', num: '05', name: 'EFAST' },
  { id: 'projetos', num: '06', name: 'PROJECTS' },
  { id: 'capacidades', num: '07', name: 'CAPABILITIES' },
  { id: 'metodo', num: '08', name: 'METHOD' },
  { id: 'principios', num: '09', name: 'PRINCIPLES' },
  { id: 'time', num: '10', name: 'TEAM' },
  { id: 'contato', num: '11', name: 'CONTACT' },
] as const;

export const hero = {
  eyebrow: 'HEATON / SCIENTIFIC INTELLIGENCE IN MOTION',
  display: 'Scientific Intelligence in Motion',
  support:
    'Software, dados e sistemas inteligentes para saúde, ciência e operações complexas.',
  ctaPrimary: { label: 'Explorar projetos', href: '#projetos' },
  ctaSecondary: { label: 'Iniciar um projeto', href: '#contato' },
  video: {
    /**
     * Sequência rápida (07_HERO_RAPID_SEQUENCE_SPEC): clipes de 3s derivados
     * do acervo real, embaralhados a cada visita e cortados a seco nos trims
     * aprovados. Fallback: montagem concatenada de 6s.
     */
    /* Trims curtos (0,65–0,75 s) dentro das janelas seguras da spec 07:
       mais cortes por minuto = sequência mais dinâmica. */
    clips: [
      { src: '/assets/media/hero/sequence/clips/01-oren-lab-review.mp4', start: 0.45, end: 1.15 },
      { src: '/assets/media/hero/sequence/clips/02-oren-anatomy-interface.mp4', start: 0.3, end: 1.0 },
      { src: '/assets/media/hero/sequence/clips/03-femur-dashboard-overview.mp4', start: 0.38, end: 1.03 },
      { src: '/assets/media/hero/sequence/clips/04-femur-hotspots.mp4', start: 0.38, end: 1.03 },
      { src: '/assets/media/hero/sequence/clips/05-efast-validation.mp4', start: 0.4, end: 1.15 },
      { src: '/assets/media/hero/sequence/clips/06-efast-simulation.mp4', start: 0.35, end: 1.05 },
    ],
    fallback: '/assets/media/hero/sequence/hero-rapid-sequence-preview.mp4',
    mobile: '/assets/media/hero/sequence/hero-rapid-sequence-preview-mobile.mp4',
    /** Textura fornecida pelo cliente; o fundo preto é descartado por blend screen. */
    overlay: '/assets/media/hero/overlay/grain-overlay.mp4',
    posterDesktop: '/assets/media/hero/hero-real-poster.webp',
    posterMobile: '/assets/media/hero/hero-real-poster-mobile.webp',
    posterAlt:
      'Pessoa usando headset de realidade virtual diante de uma tela com exame de imagem médica segmentado.',
  },
} as const;

export const manifesto = {
  label: 'SECTION 01 / TERRITORY',
  headline: 'Problemas complexos são o nosso território.',
  body: 'A Heat On transforma desafios técnicos em sistemas claros, mensuráveis e utilizáveis. Construímos da coleta de dados à interface; da automação ao modelo inteligente; da imagem médica à representação tridimensional.',
  principle: 'Medição antes da interpretação.',
  cta: { label: 'Conhecer a Heat On', href: '#metodo' },
} as const;

/** Mosaico editorial + território (SECTION 02 / FIELD). */
export const territory = {
  mosaic: {
    desktop: '/assets/home/home-project-mosaic-ai-assisted.webp',
    mobile: '/assets/home/home-project-mosaic-ai-assisted-mobile.webp',
    alt: 'Montagem editorial reunindo demonstração do OREN, visualização anatômica, validação em realidade virtual e dashboard de saúde pública.',
    caption: 'Composição editorial a partir de registros reais dos projetos.',
  },
  band: ['Science', 'Technology', 'Medicine', 'Computation', 'Intelligence'],
  rows: [
    { label: 'CAMPO', value: 'Saúde, pesquisa e sistemas complexos.' },
    { label: 'MÉTODO', value: 'Medir. Computar. Interpretar.' },
    { label: 'SAÍDA', value: 'Sinal em evidência. Evidência em decisão.' },
  ],
  inventory: {
    count: '06',
    label: 'PROJETOS DOCUMENTADOS',
    note: 'Inventário do portfólio, não métrica de impacto.',
  },
} as const;

export interface SequenceStep {
  id: string;
  /** Label mono externa exibida junto ao frame ativo. */
  name: string;
  text: string;
  desktop: string;
  mobile?: string;
  alt: string;
  /** Link "Ver captura completa" (screenshots). */
  fullView?: string;
}

/** Capítulo OREN (SECTION 03). */
export const oren = {
  id: 'oren',
  label: 'PROJECT 01 / MEDICAL IMAGING',
  title: 'OREN',
  headline: 'Da imagem médica ao modelo anatômico digital.',
  body: 'Um pipeline de pesquisa e desenvolvimento que combina inteligência artificial, visão computacional, segmentação anatômica e reconstrução 3D para transformar exames em representações específicas do paciente.',
  metadata: ['AI', 'COMPUTER VISION', 'DICOM', 'NIFTI', '3D'],
  caption:
    'Registro de demonstração e revisão do OREN, acompanhado por estados reais do visualizador anatômico 3D.',
  opener: {
    desktop: '/assets/cases/real/oren/desktop/oren-cover-real.webp',
    mobile: '/assets/cases/real/oren/mobile/oren-cover-real-mobile.webp',
    alt: 'Pessoa utilizando headset de realidade virtual diante de telas com exame de imagem médica e área segmentada.',
    mobileAlt:
      'Visualização de um modelo anatômico tridimensional durante demonstração do OREN.',
  },
  steps: [
    {
      id: 'revisao',
      name: 'REVISÃO EM LABORATÓRIO',
      text: 'O trabalho começa no laboratório: revisão de fluxos, modelos e resultados em múltiplas telas.',
      desktop: '/assets/cases/real/oren/desktop/oren-lab-review.webp',
      mobile: '/assets/cases/real/oren/mobile/oren-validation-vr-mobile.webp',
      alt: 'Equipe reunida em laboratório revisando software e fluxos técnicos em múltiplas telas.',
    },
    {
      id: 'realista',
      name: 'MODELO REALISTA',
      text: 'O visualizador reconstrói o órgão com acabamento realista, lado a lado com a referência do exame.',
      desktop: '/assets/cases/real/oren/desktop/oren-interface-realistic.webp',
      mobile: '/assets/cases/real/oren/mobile/oren-interface-realistic-mobile.webp',
      alt: 'Visualizador OREN exibindo modelo anatômico tridimensional do fígado com acabamento realista e referência de imagem médica.',
    },
    {
      id: 'interna',
      name: 'ANATOMIA INTERNA',
      text: 'A anatomia interna é exposta sem perder o registro com o exame de origem.',
      desktop: '/assets/cases/real/oren/desktop/oren-interface-internal.webp',
      alt: 'Visualizador OREN em modo de anatomia interna.',
    },
    {
      id: 'segmentos',
      name: 'SEGMENTOS ANATÔMICOS',
      text: 'Cada segmento anatômico é isolado e identificado por cor.',
      desktop: '/assets/cases/real/oren/desktop/oren-interface-segments.webp',
      alt: 'Visualizador OREN exibindo segmentos anatômicos do fígado em cores distintas.',
    },
    {
      id: 'triagem',
      name: 'TRIAGEM',
      text: 'A configuração de triagem organiza os estados do modelo para análise.',
      desktop: '/assets/cases/real/oren/desktop/oren-interface-triage.webp',
      alt: 'Visualizador OREN em configuração de triagem anatômica.',
    },
  ] as SequenceStep[],
  panels: [
    {
      src: '/assets/cases/real/oren/desktop/oren-mri-panel-1.webp',
      alt: 'Painel com cortes de imagem médica usados no processo de revisão do OREN.',
    },
    {
      src: '/assets/cases/real/oren/desktop/oren-mri-panel-2.webp',
      alt: 'Segundo painel com diferentes cortes de imagem médica para comparação.',
    },
  ],
  panelsCaption: 'Painéis de imagem médica usados na revisão.',
} as const;

/** Capítulo Fraturas de fêmur (SECTION 04). */
export const femur = {
  id: 'femur',
  label: 'PROJECT 02 / PUBLIC HEALTH',
  title: 'Fraturas de fêmur em idosos no Paraná',
  headline: 'Dados de saúde pública transformados em leitura espacial.',
  body: 'Analytics e Business Intelligence para organizar dados, indicadores e tendências de saúde pública.',
  metadata: ['PUBLIC HEALTH', 'DATA ANALYTICS', 'BI'],
  caption: 'Captura real do dashboard de análise de fraturas de fêmur no Paraná.',
  cover: {
    desktop: '/assets/cases/real/femur/desktop/femur-cover-dashboard.webp',
    mobile: '/assets/cases/real/femur/mobile/femur-cover-dashboard-mobile.webp',
    alt: 'Dashboard de análise de fraturas de fêmur com mapa do Paraná, indicadores e gráficos por faixa etária.',
  },
  steps: [
    {
      id: 'overview',
      name: 'VISÃO GERAL',
      text: 'Mapa, totais, faixa etária e gráficos convivem no mesmo sistema de leitura.',
      desktop: '/assets/cases/real/femur/desktop/femur-dashboard-overview.webp',
      mobile: '/assets/cases/real/femur/mobile/femur-cover-dashboard-mobile.webp',
      alt: 'Visão geral do dashboard de fraturas de fêmur no Paraná.',
      fullView: '/assets/cases/real/femur/desktop/femur-dashboard-overview.webp',
    },
    {
      id: 'hotspots',
      name: 'HOTSPOTS',
      text: 'A análise espacial destaca hotspots e coldspots por macrorregiões de saúde.',
      desktop: '/assets/cases/real/femur/desktop/femur-dashboard-hotspots.webp',
      mobile: '/assets/cases/real/femur/mobile/femur-hotspots-mobile.webp',
      alt: 'Mapa de hotspots e coldspots de fraturas de fêmur organizado por macrorregiões de saúde.',
      fullView: '/assets/cases/real/femur/desktop/femur-dashboard-hotspots.webp',
    },
    {
      id: 'trends',
      name: 'TENDÊNCIAS',
      text: 'A evolução temporal acompanha fraturas e densitometria ano a ano.',
      desktop: '/assets/cases/real/femur/desktop/femur-dashboard-trends.webp',
      alt: 'Dashboard com gráficos de evolução anual de fraturas e densitometria.',
      fullView: '/assets/cases/real/femur/desktop/femur-dashboard-trends.webp',
    },
    {
      id: 'map',
      name: 'MAPA INTERATIVO',
      text: 'Cada município do Paraná carrega sua taxa em um mapa interativo.',
      desktop: '/assets/cases/real/femur/desktop/femur-dashboard-map.webp',
      mobile: '/assets/cases/real/femur/mobile/femur-map-detail-mobile.webp',
      alt: 'Mapa interativo do Paraná com taxas de fraturas por município.',
      fullView: '/assets/cases/real/femur/desktop/femur-dashboard-map.webp',
    },
    {
      id: 'flow',
      name: 'FLUXO TERRITORIAL',
      text: 'O fluxo por município e destino do atendimento fecha a leitura territorial.',
      desktop: '/assets/cases/real/femur/desktop/femur-dashboard-flow.webp',
      alt: 'Mapa de fluxo por município e destino do atendimento acompanhado por gráfico de distribuição.',
      fullView: '/assets/cases/real/femur/desktop/femur-dashboard-flow.webp',
    },
  ] as SequenceStep[],
} as const;

/** Capítulo eFAST em VR (SECTION 05). */
export const efast = {
  id: 'efast',
  label: 'PROJECT 04 / MEDICAL SIMULATION',
  title: 'Simulador de eFAST em realidade virtual',
  headline: 'Treinamento de avaliação ultrassonográfica em ambiente imersivo.',
  body: 'Ambiente interativo em Unreal Engine para simulação e treinamento de avaliação ultrassonográfica no trauma.',
  metadata: ['MEDICAL SIMULATION', 'VR', 'EDUCATION'],
  caption:
    'Registros reais de demonstração e validação do simulador, acompanhados por capturas da aplicação e do desenvolvimento em Unreal Engine.',
  opener: {
    desktop: '/assets/cases/real/efast/desktop/efast-cover-real.webp',
    mobile: '/assets/cases/real/efast/mobile/efast-cover-real-mobile.webp',
    alt: 'Pessoa utilizando o simulador eFAST em realidade virtual durante sessão de validação com profissionais.',
  },
  steps: [
    {
      id: 'validacao',
      name: 'VALIDAÇÃO PRESENCIAL',
      text: 'Sessões de validação aproximam o usuário em VR dos especialistas que observam.',
      desktop: '/assets/cases/real/efast/desktop/efast-validation-session.webp',
      mobile: '/assets/cases/real/efast/mobile/efast-validation-mobile.webp',
      alt: 'Sessão de validação do simulador eFAST com usuário em realidade virtual e profissionais observando.',
    },
    {
      id: 'simulacao',
      name: 'SIMULAÇÃO EM EXECUÇÃO',
      text: 'Dentro da simulação, o paciente virtual recebe o exame com a janela de ultrassom ativa.',
      desktop: '/assets/cases/real/efast/desktop/efast-simulation-live.webp',
      mobile: '/assets/cases/real/efast/mobile/efast-simulation-mobile.webp',
      alt: 'Paciente virtual em maca com janela de ultrassom durante simulação eFAST.',
    },
    {
      id: 'unreal',
      name: 'CONSTRUÇÃO EM UNREAL',
      text: 'O ambiente é construído no editor da Unreal Engine, cena a cena.',
      desktop: '/assets/cases/real/efast/desktop/efast-unreal-scene.webp',
      alt: 'Cena do simulador eFAST aberta no editor Unreal Engine.',
    },
    {
      id: 'bastidores',
      name: 'BASTIDOR TÉCNICO',
      text: 'Volumes de avaliação e configurações técnicas definem o comportamento do exame.',
      desktop: '/assets/cases/real/efast/desktop/efast-unreal-development.webp',
      alt: 'Volume de avaliação e configurações técnicas no Unreal Engine.',
    },
  ] as SequenceStep[],
  closing: [
    {
      src: '/assets/cases/real/efast/desktop/efast-demo-room.webp',
      alt: 'Demonstração presencial do simulador com headset e monitor.',
    },
    {
      src: '/assets/cases/real/efast/desktop/efast-headset-demo.webp',
      alt: 'Pessoa apresentando o headset utilizado no simulador.',
    },
  ],
  closingCaption: 'Demonstrações presenciais do simulador.',
} as const;

export interface ProjectIndexItem {
  num: string;
  id: string;
  title: string;
  body: string;
  metadata: string[];
  /** Capítulo na página, quando existe mídia real. */
  href?: string;
  thumb?: { desktop: string; mobile: string; alt: string };
  /** Fluxo textual para projetos sem acervo. */
  flow?: string[];
  textOnly: boolean;
}

/** Índice dos seis projetos (SECTION 06). */
export const projectsIndex: ProjectIndexItem[] = [
  {
    num: '01',
    id: 'idx-oren',
    title: 'OREN',
    body: 'IA, visão computacional, imagem médica e modelos anatômicos 3D específicos do paciente.',
    metadata: ['AI', 'MEDICAL IMAGING', 'DIGITAL TWINS'],
    href: '/projetos/oren',
    thumb: {
      desktop: '/assets/cases/real/oren/desktop/oren-cover-real.webp',
      mobile: '/assets/cases/real/oren/mobile/oren-cover-real-mobile.webp',
      alt: 'Demonstração do OREN com headset de realidade virtual e exame segmentado ao fundo.',
    },
    textOnly: false,
  },
  {
    num: '02',
    id: 'idx-femur',
    title: 'Fraturas de fêmur em idosos no Paraná',
    body: 'Analytics e Business Intelligence para organizar dados, indicadores e tendências de saúde pública.',
    metadata: ['PUBLIC HEALTH', 'DATA ANALYTICS', 'BI'],
    href: '/projetos/fraturas-femur',
    thumb: {
      desktop: '/assets/cases/real/femur/desktop/femur-cover-dashboard.webp',
      mobile: '/assets/cases/real/femur/mobile/femur-cover-dashboard-mobile.webp',
      alt: 'Dashboard de fraturas de fêmur com mapa do Paraná e indicadores.',
    },
    textOnly: false,
  },
  {
    num: '03',
    id: 'idx-samu',
    title: 'SAMU Marialva',
    body: 'Dashboard operacional para tornar dados de atendimento e funcionamento do serviço mais acessíveis à gestão.',
    metadata: ['EMERGENCY SERVICES', 'OPERATIONS', 'BI'],
    flow: ['ATENDIMENTO', 'INDICADORES', 'GESTÃO'],
    textOnly: true,
  },
  {
    num: '04',
    id: 'idx-efast',
    title: 'Simulador de eFAST em realidade virtual',
    body: 'Ambiente interativo em Unreal Engine para simulação e treinamento de avaliação ultrassonográfica no trauma.',
    metadata: ['MEDICAL SIMULATION', 'VR', 'EDUCATION'],
    href: '/projetos/efast-vr',
    thumb: {
      desktop: '/assets/cases/real/efast/desktop/efast-cover-real.webp',
      mobile: '/assets/cases/real/efast/mobile/efast-cover-real-mobile.webp',
      alt: 'Sessão de validação do simulador eFAST em realidade virtual.',
    },
    textOnly: false,
  },
  {
    num: '05',
    id: 'idx-gsus',
    title: 'Automação de auditoria médica no GSUS',
    body: 'Mapeamento e automação de tarefas repetitivas, conferência e processamento de dados em fluxos de auditoria.',
    metadata: ['PROCESS AUTOMATION', 'HEALTHCARE OPERATIONS'],
    flow: ['MAPEAMENTO', 'AUTOMAÇÃO', 'CONFERÊNCIA'],
    textOnly: true,
  },
  {
    num: '06',
    id: 'idx-dados',
    title: 'Engenharia de dados em massa',
    body: 'Extração, limpeza, padronização, integração e processamento em lote para análise, dashboards e sistemas.',
    metadata: ['ETL', 'DATA ENGINEERING', 'AUTOMATED PIPELINES'],
    flow: ['EXTRAÇÃO', 'PADRONIZAÇÃO', 'INTEGRAÇÃO'],
    textOnly: true,
  },
];

export const mediaNotDocumented = 'MEDIA: NOT DOCUMENTED';

export const capabilities = {
  label: 'SECTION 07 / CAPABILITIES',
  headline: 'Capacidades e verticais',
  items: [
    'Software sob medida',
    'Dashboards e Business Intelligence',
    'Engenharia de dados e ETL',
    'Automação de processos',
    'Inteligência artificial aplicada',
    'Visão computacional',
    'Imagem médica',
    'Reconstrução e modelagem 3D',
    'Digital Twins anatômicos',
    'Realidade virtual',
    'Simulação e educação médica',
    'Tecnologia para urgência e saúde pública',
  ],
} as const;

export const method = {
  label: 'SECTION 08 / METHOD',
  headline: 'Método Heat On',
  steps: [
    {
      num: '01',
      code: 'SIGNAL',
      name: 'Entender',
      body: 'Delimitar o problema, os usuários, as fontes e o que pode ser medido.',
    },
    {
      num: '02',
      code: 'PROCESSING',
      name: 'Construir',
      body: 'Modelar dados, fluxos, software e experiência.',
    },
    {
      num: '03',
      code: 'VALIDATION',
      name: 'Validar',
      body: 'Testar contra evidência, restrições e uso real.',
    },
    {
      num: '04',
      code: 'INSIGHT',
      name: 'Entregar',
      body: 'Transformar a solução em uma ferramenta utilizável e evolutiva.',
    },
  ],
} as const;

export const principles = {
  label: 'SECTION 09 / PRINCIPLES',
  headline: 'Cinco compromissos',
  items: [
    { num: '01', name: 'Rigor científico' },
    { num: '02', name: 'Inteligência computacional' },
    { num: '03', name: 'Impacto humano' },
    { num: '04', name: 'Precisão' },
    { num: '05', name: 'Exploração' },
  ],
} as const;

export interface TeamMember {
  num: string;
  id: string;
  /** Nome completo, usado nas páginas de perfil. */
  name: string;
  /** Primeiro nome, para grades e cartões. */
  shortName: string;
  role: string;
  discipline: string;
  /** Ênfase dentro da função, quando duas pessoas dividem a mesma. */
  focus: string;
  institution: string;
  /** Slugs dos projetos em que a pessoa atuou. */
  projects: string[];
  photo: string;
  alt: string;
}

/** Time (SECTION 10). Nomes, funções, instituições e autoria por projeto
 *  informados pela empresa. Cargos formais não existem: os três são sócios. */
export const team = {
  label: 'SECTION 10 / TEAM',
  headline: 'Engenharia e ciência na mesma mesa.',
  body: 'Três sócios: duas frentes de engenharia de software e uma de biotecnologia, trabalhando lado a lado no mesmo problema.',
  members: [
    {
      num: '01',
      id: 'felipe',
      name: 'Felipe Morais Nantes',
      shortName: 'Felipe',
      role: 'Sócio · Engenharia de software',
      discipline: 'SOFTWARE ENGINEERING',
      focus: 'Ênfase em desenvolvimento.',
      institution: 'Unicesumar',
      projects: ['oren', 'auditoria-gsus'],
      photo: '/assets/team/felipe.webp',
      alt: 'Retrato de Felipe Morais Nantes, sócio e engenheiro de software da Heat On.',
    },
    {
      num: '02',
      id: 'matheus',
      name: 'Matheus de Lara Campos',
      shortName: 'Matheus',
      role: 'Sócio · Engenharia de software',
      discipline: 'SOFTWARE ENGINEERING',
      focus: 'Ênfase em revisão e estruturação.',
      institution: 'UEM',
      projects: [
        'oren',
        'fraturas-femur',
        'samu-marialva',
        'efast-vr',
        'auditoria-gsus',
        'engenharia-dados',
      ],
      photo: '/assets/team/matheus.webp',
      alt: 'Retrato de Matheus de Lara Campos, sócio e engenheiro de software da Heat On.',
    },
    {
      num: '03',
      id: 'joao-marcelo',
      name: 'João Marcelo Granzotto Vicente',
      shortName: 'João Marcelo',
      role: 'Sócio · Biotecnologia',
      discipline: 'BIOTECHNOLOGY',
      focus: 'Linha de pesquisa em saúde.',
      institution: 'UEM',
      projects: [
        'oren',
        'fraturas-femur',
        'samu-marialva',
        'efast-vr',
        'auditoria-gsus',
        'engenharia-dados',
      ],
      photo: '/assets/team/joao-marcelo.webp',
      alt: 'Retrato de João Marcelo Granzotto Vicente, sócio e biotecnologista da Heat On.',
    },
  ] as TeamMember[],
} as const;

export const contact = {
  label: 'SECTION 11 / CONTACT',
  headline: 'Se o problema cruza software, dados e saúde, queremos entendê-lo.',
  body: 'Conte o contexto, o desafio e o que precisa mudar. A conversa começa pelo problema, não pela tecnologia.',
  cta: 'Falar sobre um projeto',
  form: {
    fields: [
      { id: 'nome', label: 'Nome', type: 'text', required: true },
      { id: 'organizacao', label: 'Organização', type: 'text', required: false },
      { id: 'email', label: 'Email', type: 'email', required: true },
      {
        id: 'contexto',
        label: 'Contexto do projeto',
        type: 'textarea',
        required: true,
      },
    ],
    submit: 'Enviar contexto',
    /** Endpoint, destino, LGPD e mensagens: pendentes de definição antes da publicação. */
    endpoint: null,
  },
} as const;

export const footer = {
  tagline: 'Scientific Intelligence in Motion',
  note: 'Tecnologia na interseção entre software, dados, inteligência artificial, ciência e saúde.',
  copyright: `© ${new Date().getFullYear()} Heat On. Todos os direitos reservados.`,
} as const;
