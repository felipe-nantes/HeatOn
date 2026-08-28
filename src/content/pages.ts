/**
 * Heat On — conteúdo das páginas internas.
 * Fonte: source/portfolio_saude.md (contexto, solução, capacidades e área de
 * cada projeto) + 03_CONTENT_MODEL_PTBR.md. Nada aqui é inventado: onde a
 * empresa ainda não forneceu material, o campo simplesmente não existe.
 */

export interface PageMeta {
  code: string;
  slug: string;
  label: string;
}

/** Índice técnico do site, exibido no painel INDEX. */
export const siteIndex: PageMeta[] = [
  { code: '000-00', slug: '/', label: 'Home' },
  { code: '001-00', slug: '/projetos', label: 'Projetos' },
  { code: '001A-00', slug: '/projetos/oren', label: 'OREN' },
  { code: '001B-00', slug: '/projetos/fraturas-femur', label: 'Fraturas de fêmur' },
  { code: '001C-00', slug: '/projetos/samu-marialva', label: 'SAMU Marialva' },
  { code: '001D-00', slug: '/projetos/efast-vr', label: 'Simulador eFAST' },
  { code: '001E-00', slug: '/projetos/auditoria-gsus', label: 'Auditoria GSUS' },
  { code: '001F-00', slug: '/projetos/engenharia-dados', label: 'Engenharia de dados' },
  { code: '002-00', slug: '/capacidades', label: 'Capacidades' },
  { code: '003-00', slug: '/metodo', label: 'Método' },
  { code: '004-00', slug: '/empresa', label: 'Empresa' },
  { code: '005-00', slug: '/time', label: 'Time' },
  { code: '005A-00', slug: '/time/felipe', label: 'Felipe' },
  { code: '005B-00', slug: '/time/matheus', label: 'Matheus' },
  { code: '005C-00', slug: '/time/joao-marcelo', label: 'João Marcelo' },
  { code: '006-00', slug: '/contato', label: 'Contato' },
];

export interface ProjectPage {
  slug: string;
  num: string;
  eyebrow: string;
  title: string;
  headline: string;
  context: string[];
  solution: string;
  /** Blocos de lista rotulados: capacidades, pipeline, tecnologias, conceitos. */
  lists: { label: string; items: string[] }[];
  area: string;
  metadata: string[];
  /** Capítulo com mídia real; ausente = projeto sem acervo (text-only). */
  mediaKey?: 'oren' | 'femur' | 'efast';
  flow?: string[];
}

export const projectPages: ProjectPage[] = [
  {
    slug: 'oren',
    num: '01',
    eyebrow: 'PROJECT 01 / MEDICAL IMAGING',
    title: 'OREN',
    headline: 'Da imagem médica ao modelo anatômico digital.',
    context: [
      'O OREN é um projeto de pesquisa e desenvolvimento voltado à aplicação de inteligência artificial, visão computacional e processamento de imagens médicas.',
      'O projeto explora a transformação de exames médicos em representações anatômicas estruturadas e modelos tridimensionais específicos do paciente.',
    ],
    solution:
      'Desenvolvimento de um pipeline computacional para processamento de exames médicos, segmentação anatômica, avaliação de modelos e reconstrução tridimensional. A arquitetura utiliza múltiplos modelos de inteligência artificial especializados em diferentes etapas do processamento.',
    lists: [
      {
        label: 'PIPELINE',
        items: [
          'Entrada de exames médicos',
          'Preparação e normalização dos dados',
          'Processamento das imagens',
          'Segmentação anatômica',
          'Avaliação dos modelos',
          'Reconstrução tridimensional',
          'Organização das estruturas segmentadas',
          'Geração de modelos anatômicos digitais',
          'Produção de informações complementares para análise',
        ],
      },
      {
        label: 'TECNOLOGIAS E CONCEITOS',
        items: [
          'Inteligência artificial',
          'Deep learning',
          'Computer vision',
          'Segmentação de imagens médicas',
          'DICOM',
          'NIfTI',
          'Processamento de imagens',
          'Modelagem tridimensional',
          'Reconstrução 3D',
          'Pipelines de inferência',
          'Avaliação quantitativa de modelos',
          'Processamento local utilizando GPU',
        ],
      },
      {
        label: 'APLICAÇÕES',
        items: [
          'Imagem médica',
          'Pesquisa',
          'Visualização anatômica',
          'Apoio a estudos médicos',
          'Construção de modelos digitais específicos do paciente',
          'Digital Twins anatômicos',
        ],
      },
    ],
    area: 'Artificial Intelligence / Medical Imaging / Computer Vision / Digital Twins',
    metadata: ['AI', 'COMPUTER VISION', 'DICOM', 'NIFTI', '3D'],
    mediaKey: 'oren',
  },
  {
    slug: 'fraturas-femur',
    num: '02',
    eyebrow: 'PROJECT 02 / PUBLIC HEALTH',
    title: 'Fraturas de fêmur em idosos no Paraná',
    headline: 'Dados de saúde pública transformados em leitura espacial.',
    context: [
      'Projeto voltado à análise de dados relacionados a fraturas de fêmur em idosos no estado do Paraná.',
      'A solução foi desenvolvida para transformar dados brutos em informações visuais, estruturadas e interpretáveis, facilitando a identificação de padrões, indicadores e tendências relacionadas ao problema.',
    ],
    solution:
      'Desenvolvimento de uma dashboard analítica para consolidação e visualização de informações relevantes.',
    lists: [
      {
        label: 'CAPACIDADES APLICADAS',
        items: [
          'Extração de dados',
          'Limpeza e organização de bases',
          'Tratamento de informações',
          'Criação de indicadores',
          'Visualização de dados',
          'Análise de tendências',
          'Desenvolvimento de dashboard',
          'Estruturação de informações para apoio à decisão',
        ],
      },
    ],
    area: 'Saúde pública / Data Analytics / Business Intelligence',
    metadata: ['PUBLIC HEALTH', 'DATA ANALYTICS', 'BI'],
    mediaKey: 'femur',
  },
  {
    slug: 'samu-marialva',
    num: '03',
    eyebrow: 'PROJECT 03 / EMERGENCY SERVICES',
    title: 'SAMU Marialva',
    headline: 'Dados operacionais de urgência acessíveis à gestão.',
    context: [
      'Desenvolvimento de uma solução direcionada ao SAMU de Marialva, dentro do contexto de atendimento pré-hospitalar e gestão de serviços de urgência e emergência.',
      'O projeto buscou organizar e apresentar dados operacionais de forma mais acessível, permitindo melhor visualização das informações relacionadas ao funcionamento do serviço.',
    ],
    solution:
      'Construção de dashboard voltada à visualização e acompanhamento de informações operacionais do SAMU.',
    lists: [
      {
        label: 'CAPACIDADES APLICADAS',
        items: [
          'Estruturação de dados',
          'Tratamento de informações',
          'Construção de indicadores',
          'Desenvolvimento de interface',
          'Visualização operacional',
          'Organização de dados de atendimento',
          'Apoio à gestão de serviços de urgência',
        ],
      },
    ],
    area: 'Urgência e emergência / Saúde pública / Business Intelligence',
    metadata: ['EMERGENCY SERVICES', 'OPERATIONS', 'BI'],
    flow: ['ATENDIMENTO', 'INDICADORES', 'GESTÃO'],
  },
  {
    slug: 'efast-vr',
    num: '04',
    eyebrow: 'PROJECT 04 / MEDICAL SIMULATION',
    title: 'Simulador de eFAST em realidade virtual',
    headline: 'Treinamento de avaliação ultrassonográfica em ambiente imersivo.',
    context: [
      'Desenvolvimento de um simulador de eFAST em realidade virtual, criado como produto associado a um projeto de mestrado.',
      'O eFAST — Extended Focused Assessment with Sonography for Trauma — é um protocolo ultrassonográfico utilizado principalmente na avaliação rápida de pacientes traumatizados.',
    ],
    solution:
      'Criação de um ambiente virtual interativo para simulação e treinamento do exame eFAST. O projeto foi desenvolvido utilizando Unreal Engine, explorando tecnologias imersivas como ferramenta para educação e treinamento médico.',
    lists: [
      {
        label: 'CAPACIDADES APLICADAS',
        items: [
          'Desenvolvimento em Unreal Engine',
          'Construção de ambientes virtuais',
          'Realidade virtual',
          'Interação 3D',
          'Simulação de procedimentos médicos',
          'Desenvolvimento de experiência educacional',
          'Modelagem de cenários clínicos',
        ],
      },
    ],
    area: 'Medical Simulation / Virtual Reality / Educação médica',
    metadata: ['MEDICAL SIMULATION', 'VR', 'EDUCATION'],
    mediaKey: 'efast',
  },
  {
    slug: 'auditoria-gsus',
    num: '05',
    eyebrow: 'PROJECT 05 / PROCESS AUTOMATION',
    title: 'Automação de auditoria médica no GSUS',
    headline: 'Fluxos de auditoria com menos trabalho manual.',
    context: [
      'Projeto voltado à automação de processos relacionados à auditoria médica no ambiente do GSUS.',
      'Processos de auditoria frequentemente envolvem atividades repetitivas, conferência de informações, manipulação de dados e execução de fluxos administrativos.',
    ],
    solution:
      'Estruturação e implementação de automações para reduzir tarefas manuais e tornar os fluxos de auditoria mais eficientes.',
    lists: [
      {
        label: 'CAPACIDADES APLICADAS',
        items: [
          'Mapeamento de processos',
          'Identificação de tarefas repetitivas',
          'Automação de fluxos',
          'Manipulação de dados',
          'Processamento automatizado',
          'Redução de atividades manuais',
          'Apoio operacional à auditoria médica',
        ],
      },
    ],
    area: 'Healthcare Process Automation / Gestão em saúde / Sistemas de informação',
    metadata: ['PROCESS AUTOMATION', 'HEALTHCARE OPERATIONS'],
    flow: ['MAPEAMENTO', 'AUTOMAÇÃO', 'CONFERÊNCIA'],
  },
  {
    slug: 'engenharia-dados',
    num: '06',
    eyebrow: 'PROJECT 06 / DATA ENGINEERING',
    title: 'Engenharia de dados em massa',
    headline: 'Bases inconsistentes viram datasets utilizáveis.',
    context: [
      'A empresa também possui experiência em projetos envolvendo grandes volumes de dados, incluindo bases relacionadas à saúde pública, pesquisa e sistemas administrativos.',
      'Bases de dados reais frequentemente apresentam inconsistências, formatos heterogêneos, registros incompletos e necessidade de integração entre diferentes fontes.',
    ],
    solution:
      'Desenvolvimento de processos para extração, transformação, limpeza, consolidação e processamento de dados em larga escala.',
    lists: [
      {
        label: 'CAPACIDADES APLICADAS',
        items: [
          'Extração de dados',
          'Processamento em lote',
          'Limpeza de bases',
          'Padronização de informações',
          'Tratamento de inconsistências',
          'Transformações em massa',
          'Cruzamento de bases',
          'Consolidação de datasets',
          'Automação de processamento',
          'Preparação de dados para análise',
          'Preparação de dados para dashboards',
          'Preparação de dados para aplicações e sistemas',
        ],
      },
      {
        label: 'CONCEITOS',
        items: [
          'ETL',
          'Data engineering',
          'Data processing',
          'Data cleaning',
          'Data transformation',
          'Data integration',
          'Automated pipelines',
        ],
      },
    ],
    area: 'Data Engineering / Data Processing / Analytics',
    metadata: ['ETL', 'DATA ENGINEERING', 'AUTOMATED PIPELINES'],
    flow: ['EXTRAÇÃO', 'PADRONIZAÇÃO', 'INTEGRAÇÃO'],
  },
];

/** Competências consolidadas (portfolio_saude.md). */
export const competencies = [
  {
    label: 'DESENVOLVIMENTO DE SOFTWARE',
    items: [
      'Desenvolvimento de aplicações',
      'Sistemas web',
      'Dashboards',
      'Ferramentas especializadas',
      'Interfaces de visualização',
      'Soluções customizadas para saúde',
    ],
  },
  {
    label: 'ENGENHARIA DE DADOS',
    items: [
      'Extração de dados',
      'ETL',
      'Limpeza de dados',
      'Transformação de bases',
      'Integração de fontes',
      'Processamento em massa',
      'Construção de pipelines',
      'Preparação de datasets analíticos',
    ],
  },
  {
    label: 'BUSINESS INTELLIGENCE',
    items: [
      'Construção de indicadores',
      'Dashboards',
      'Visualização de dados',
      'Organização de informações operacionais',
      'Apoio à tomada de decisão',
    ],
  },
  {
    label: 'INTELIGÊNCIA ARTIFICIAL',
    items: [
      'Inteligência artificial aplicada à saúde',
      'Deep learning',
      'Computer vision',
      'Segmentação de imagens',
      'Avaliação de modelos',
      'Pipelines de inferência',
    ],
  },
  {
    label: 'IMAGEM MÉDICA',
    items: [
      'Processamento de exames',
      'DICOM',
      'NIfTI',
      'Segmentação anatômica',
      'Reconstrução tridimensional',
      'Modelagem anatômica digital',
    ],
  },
  {
    label: 'REALIDADE VIRTUAL',
    items: [
      'Unreal Engine',
      'Desenvolvimento de ambientes virtuais',
      'Simulação médica',
      'Treinamento clínico',
      'Interação 3D',
    ],
  },
  {
    label: 'AUTOMAÇÃO',
    items: [
      'Automação de processos administrativos',
      'Automação de fluxos operacionais',
      'Processamento automatizado de dados',
      'Redução de tarefas repetitivas',
    ],
  },
];

/** Verticais de atuação (portfolio_saude.md). */
export const verticals = [
  'Digital Health',
  'HealthTech',
  'Healthcare Software',
  'Healthcare Analytics',
  'Healthcare Business Intelligence',
  'Healthcare Data Engineering',
  'Artificial Intelligence in Healthcare',
  'Medical Imaging',
  'Computer Vision in Medicine',
  'Digital Twins in Healthcare',
  'Medical Simulation',
  'Virtual Reality for Healthcare',
  'Healthcare Process Automation',
  'Public Health Technology',
  'Emergency Medical Services Technology',
];

/** Institucional (portfolio_saude.md + brandbook). */
export const companyPage = {
  eyebrow: 'PAGE 004 / COMPANY',
  title: 'Empresa',
  headline: 'Ciência é o método. Tecnologia é a ferramenta.',
  valueProposition: [
    'A Heat On combina conhecimento de engenharia de software, dados e tecnologias emergentes para desenvolver soluções aplicadas a problemas reais do setor de saúde.',
    'A capacidade técnica abrange desde projetos de menor complexidade, como dashboards e automações, até sistemas avançados envolvendo inteligência artificial, processamento de imagens médicas, realidade virtual e modelagem tridimensional.',
  ],
  maturityLabel: 'NÍVEIS DE MATURIDADE ATENDIDOS',
  maturity: [
    'Digitalização de processos',
    'Organização e integração de dados',
    'Desenvolvimento de dashboards',
    'Automação de atividades',
    'Construção de sistemas personalizados',
    'Aplicação de inteligência artificial',
    'Processamento de imagens médicas',
    'Desenvolvimento de tecnologias para pesquisa e inovação',
  ],
  positioning:
    'A Heat On atua como parceira tecnológica para organizações, profissionais, pesquisadores e instituições que buscam desenvolver, automatizar ou transformar digitalmente processos e produtos na área da saúde.',
} as const;
