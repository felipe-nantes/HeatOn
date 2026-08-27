/**
 * Heat On — conteúdo canônico do site.
 * Fonte: HeatOn_Website_Handoff/03_CONTENT_MODEL_PTBR.md (+ portfolio_saude.md).
 * Copy inicial para prototipação; revisar com os sócios antes da publicação.
 * A tagline "Scientific Intelligence in Motion" nunca é traduzida.
 */

export const meta = {
  title: 'Heat On — Scientific Intelligence in Motion',
  description:
    'Software, dados e sistemas inteligentes para saúde, ciência e operações complexas. A Heat On transforma sinal em evidência e evidência em decisão.',
  ogImage: '/assets/social/og-home.png',
  twitterImage: '/assets/social/twitter-card.png',
  locale: 'pt_BR',
} as const;

export const nav = {
  items: [
    { num: '01', label: 'Projetos', href: '#projetos' },
    { num: '02', label: 'Capacidades', href: '#capacidades' },
    { num: '03', label: 'Método', href: '#metodo' },
    { num: '04', label: 'Empresa', href: '#empresa' },
    { num: '05', label: 'Contato', href: '#contato' },
  ],
  indexLabel: 'INDEX',
} as const;

/** Seções rastreadas pelo indicador PAGE/SECTION do header. */
export const sections = [
  { id: 'hero', num: '00', name: 'INTRO' },
  { id: 'empresa', num: '01', name: 'TERRITORY' },
  { id: 'territorio', num: '02', name: 'FIELD' },
  { id: 'oren', num: '03', name: 'OREN' },
  { id: 'projetos', num: '04', name: 'PROJECTS' },
  { id: 'capacidades', num: '05', name: 'CAPABILITIES' },
  { id: 'metodo', num: '06', name: 'METHOD' },
  { id: 'principios', num: '07', name: 'PRINCIPLES' },
  { id: 'contato', num: '08', name: 'CONTACT' },
] as const;

export const hero = {
  eyebrow: 'HEATON / [ 000-00 / INTRO ]',
  display: 'Scientific Intelligence in Motion',
  /** Linhas do display monumental; a última palavra é o elemento ativo (laranja). */
  displayLines: ['Scientific', 'Intelligence', 'In Motion'],
  /** Leitura de dados de exemplo do brandbook (p.22/25) — linguagem da marca, não métricas. */
  dataReadout: [
    ['MODEL_ID', 'HTO-042'],
    ['CONFIDENCE', '0.942'],
    ['STATUS', 'ACTIVE'],
  ],
  support:
    'Software, dados e sistemas inteligentes para saúde, ciência e operações complexas.',
  ctaPrimary: { label: 'Explorar projetos', href: '#projetos' },
  ctaSecondary: { label: 'Iniciar um projeto', href: '#contato' },
  video: {
    src: '/assets/media/hero/heaton-thermal-pulse-loop.mp4',
    posterDesktop: '/assets/media/hero/hero-poster.webp',
    posterMobile: '/assets/media/hero/hero-poster-mobile.webp',
  },
} as const;

export const manifesto = {
  label: 'SECTION 01 / TERRITORY',
  headline: 'Problemas complexos são o nosso território.',
  body: 'A Heat On transforma desafios técnicos em sistemas claros, mensuráveis e utilizáveis. Construímos da coleta de dados à interface; da automação ao modelo inteligente; da imagem médica à representação tridimensional.',
  principle: 'Medição antes da interpretação.',
  cta: { label: 'Conhecer a Heat On', href: '#metodo' },
} as const;

export const territory = {
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

export const conceptualCaption = 'Representação conceitual do projeto';

export const oren = {
  label: 'PROJECT 01 / MEDICAL IMAGING',
  title: 'OREN',
  headline: 'Da imagem médica ao modelo anatômico digital.',
  body: 'Um pipeline de pesquisa e desenvolvimento que combina inteligência artificial, visão computacional, segmentação anatômica e reconstrução 3D para transformar exames em representações específicas do paciente.',
  metadata: ['AI', 'COMPUTER VISION', 'DICOM', 'NIFTI', '3D'],
  cta: { label: 'Explorar o projeto', href: '#projetos' },
  image: {
    desktop: '/assets/cases/desktop/case-01-oren.webp',
    mobile: '/assets/cases/mobile/case-01-oren-mobile.webp',
    alt: 'Fatias de imagem médica se transformando em segmentação anatômica e em um volume 3D do fígado.',
  },
} as const;

export interface CaseItem {
  num: string;
  id: string;
  title: string;
  body: string;
  metadata: string[];
  surface: 'deep' | 'cream';
  /** Lado da imagem no desktop. */
  imageSide: 'left' | 'right';
  image: { desktop: string; mobile: string; alt: string };
}

export const cases: CaseItem[] = [
  {
    num: '02',
    id: 'femur',
    title: 'Fraturas de fêmur em idosos no Paraná',
    body: 'Analytics e Business Intelligence para organizar dados, indicadores e tendências de saúde pública.',
    metadata: ['PUBLIC HEALTH', 'DATA ANALYTICS', 'BI'],
    surface: 'cream',
    imageSide: 'right',
    image: {
      desktop: '/assets/cases/desktop/case-02-femur-fractures.webp',
      mobile: '/assets/cases/mobile/case-02-femur-fractures-mobile.webp',
      alt: 'Fêmur translúcido sobre superfície clara, cercado por um campo de dados anônimo e um traço analítico.',
    },
  },
  {
    num: '03',
    id: 'samu',
    title: 'SAMU Marialva',
    body: 'Dashboard operacional para tornar dados de atendimento e funcionamento do serviço mais acessíveis à gestão.',
    metadata: ['EMERGENCY SERVICES', 'OPERATIONS', 'BI'],
    surface: 'deep',
    imageSide: 'left',
    image: {
      desktop: '/assets/cases/desktop/case-03-samu-marialva.webp',
      mobile: '/assets/cases/mobile/case-03-samu-marialva-mobile.webp',
      alt: 'Cartografia urbana abstrata com uma única rota ativa destacada.',
    },
  },
  {
    num: '04',
    id: 'efast',
    title: 'Simulador de eFAST em realidade virtual',
    body: 'Ambiente interativo em Unreal Engine para simulação e treinamento de avaliação ultrassonográfica no trauma.',
    metadata: ['MEDICAL SIMULATION', 'VR', 'EDUCATION'],
    surface: 'deep',
    imageSide: 'left',
    image: {
      desktop: '/assets/cases/desktop/case-04-efast-vr.webp',
      mobile: '/assets/cases/mobile/case-04-efast-vr-mobile.webp',
      alt: 'Manequim de treinamento com janelas de avaliação e probe de ultrassom em ambiente virtual.',
    },
  },
  {
    num: '05',
    id: 'gsus',
    title: 'Automação de auditoria médica no GSUS',
    body: 'Mapeamento e automação de tarefas repetitivas, conferência e processamento de dados em fluxos de auditoria.',
    metadata: ['PROCESS AUTOMATION', 'HEALTHCARE OPERATIONS'],
    surface: 'deep',
    imageSide: 'right',
    image: {
      desktop: '/assets/cases/desktop/case-05-gsus-audit-automation.webp',
      mobile: '/assets/cases/mobile/case-05-gsus-audit-automation-mobile.webp',
      alt: 'Registros anônimos atravessando portões de validação em um pipeline central.',
    },
  },
  {
    num: '06',
    id: 'dados',
    title: 'Engenharia de dados em massa',
    body: 'Extração, limpeza, padronização, integração e processamento em lote para análise, dashboards e sistemas.',
    metadata: ['ETL', 'DATA ENGINEERING', 'AUTOMATED PIPELINES'],
    surface: 'deep',
    imageSide: 'right',
    image: {
      desktop: '/assets/cases/desktop/case-06-data-engineering.webp',
      mobile: '/assets/cases/mobile/case-06-data-engineering-mobile.webp',
      alt: 'Filamentos não estruturados atravessando planos de transformação e emergindo como malha organizada.',
    },
  },
];

export const capabilities = {
  label: 'SECTION 05 / CAPABILITIES',
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
  label: 'SECTION 06 / METHOD',
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
  label: 'SECTION 07 / PRINCIPLES',
  headline: 'Cinco compromissos',
  items: [
    { num: '01', name: 'Rigor científico' },
    { num: '02', name: 'Inteligência computacional' },
    { num: '03', name: 'Impacto humano' },
    { num: '04', name: 'Precisão' },
    { num: '05', name: 'Exploração' },
  ],
} as const;

export const contact = {
  label: 'SECTION 08 / CONTACT',
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
