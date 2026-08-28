/**
 * Heat On — setores de atuação.
 *
 * Separação deliberada de responsabilidades em cada setor:
 *  - `field`  : descrição da disciplina em si (conhecimento de domínio).
 *               Não afirma nada sobre a Heat On.
 *  - `stakes` : por que o problema é difícil no contexto de saúde.
 *  - `práticas / capabilities / stack` : o que a empresa faz, extraído de
 *               source/portfolio_saude.md. Nada aqui é presumido.
 *  - `projects`: projetos reais cuja "Área" declarada cobre este setor.
 */

export interface Sector {
  slug: string;
  num: string;
  code: string;
  title: string;
  eyebrow: string;
  headline: string;
  /** A disciplina, descrita de forma factual. */
  field: string[];
  /** O que torna o problema difícil — rotulado e curto. */
  stakes: { label: string; text: string }[];
  /** Capacidades reais da Heat On neste setor (portfolio_saude.md). */
  capabilities: string[];
  /** Vocabulário técnico do setor, conforme o portfólio. */
  stack: string[];
  /** Slugs de projetos documentados que atuam neste setor. */
  projects: string[];
}

export const sectors: Sector[] = [
  {
    slug: 'software',
    num: '01',
    code: '002A-00',
    title: 'Desenvolvimento de software',
    eyebrow: 'SECTOR 01 / SOFTWARE ENGINEERING',
    headline: 'Sistemas sob medida para quem trabalha com o problema todo dia.',
    field: [
      'Software para saúde raramente falha por falta de tecnologia. Falha porque o fluxo real de trabalho não cabe na ferramenta: o formulário exige um dado que ninguém tem no momento do atendimento, a tela pede três cliques onde havia dez segundos, o relatório sai num formato que a próxima etapa não lê.',
      'Construir sob medida significa partir do fluxo existente em vez de impor um genérico. A interface acompanha a ordem em que as decisões acontecem, e o sistema assume o trabalho repetitivo em vez de transferi-lo para quem já está sobrecarregado.',
    ],
    stakes: [
      {
        label: 'CONTEXTO',
        text: 'Quem usa o sistema costuma estar no meio de outra tarefa — atendimento, plantão, auditoria. A interface disputa atenção com o trabalho real.',
      },
      {
        label: 'INTEGRAÇÃO',
        text: 'Dados chegam de sistemas que não foram feitos para conversar entre si, em formatos e padrões distintos.',
      },
      {
        label: 'LONGEVIDADE',
        text: 'A ferramenta precisa continuar utilizável e evolutiva depois da entrega, não apenas funcionar na demonstração.',
      },
    ],
    capabilities: [
      'Desenvolvimento de aplicações',
      'Sistemas web',
      'Dashboards',
      'Ferramentas especializadas',
      'Interfaces de visualização',
      'Soluções customizadas para saúde',
    ],
    stack: ['SISTEMAS WEB', 'INTERFACES', 'FERRAMENTAS ESPECIALIZADAS'],
    projects: ['oren', 'fraturas-femur', 'samu-marialva'],
  },
  {
    slug: 'dados',
    num: '02',
    code: '002B-00',
    title: 'Engenharia de dados',
    eyebrow: 'SECTOR 02 / DATA ENGINEERING',
    headline: 'Antes de analisar, é preciso tornar o dado confiável.',
    field: [
      'Bases de saúde pública, pesquisa e sistemas administrativos raramente chegam prontas. Elas trazem formatos heterogêneos, registros incompletos, códigos que mudaram de significado ao longo dos anos e o mesmo município grafado de cinco maneiras diferentes.',
      'Engenharia de dados é o trabalho de extrair, limpar, padronizar, integrar e consolidar essas fontes até que uma pergunta possa ser feita sem que a resposta dependa de qual arquivo foi aberto. É a etapa menos visível e a que determina se tudo depois dela vale alguma coisa.',
    ],
    stakes: [
      {
        label: 'INCONSISTÊNCIA',
        text: 'Duplicatas, campos vazios e categorias que se sobrepõem precisam de decisão explícita — cada escolha muda o resultado final.',
      },
      {
        label: 'ESCALA',
        text: 'Volumes que não cabem na memória exigem processamento em lote e pipelines que possam ser reexecutados sem intervenção manual.',
      },
      {
        label: 'RASTREABILIDADE',
        text: 'Toda transformação precisa ser reproduzível: sem isso, o número no painel não pode ser defendido.',
      },
    ],
    capabilities: [
      'Extração de dados',
      'ETL',
      'Limpeza de dados',
      'Transformação de bases',
      'Integração de fontes',
      'Processamento em massa',
      'Construção de pipelines',
      'Preparação de datasets analíticos',
    ],
    stack: ['ETL', 'DATA CLEANING', 'DATA INTEGRATION', 'AUTOMATED PIPELINES'],
    projects: ['engenharia-dados', 'fraturas-femur'],
  },
  {
    slug: 'business-intelligence',
    num: '03',
    code: '002C-00',
    title: 'Business Intelligence',
    eyebrow: 'SECTOR 03 / BUSINESS INTELLIGENCE',
    headline: 'Indicador só serve se alguém puder decidir a partir dele.',
    field: [
      'Um painel não é um relatório com cores. A diferença está em quais perguntas ele permite responder e com que velocidade: onde o problema está concentrado, se a tendência mudou, qual recorte explica a variação.',
      'Isso exige escolher indicadores que correspondam a decisões possíveis, definir o denominador com clareza e organizar a leitura para que a informação principal apareça antes do detalhe — não depois.',
    ],
    stakes: [
      {
        label: 'RECORTE',
        text: 'Taxa por população, por período ou por unidade contam histórias diferentes sobre os mesmos registros.',
      },
      {
        label: 'LEITURA ESPACIAL',
        text: 'Em saúde pública o território importa: concentração geográfica muda onde o recurso deve ser alocado.',
      },
      {
        label: 'AUDIÊNCIA',
        text: 'Gestão, clínica e pesquisa pedem níveis distintos de granularidade da mesma base.',
      },
    ],
    capabilities: [
      'Construção de indicadores',
      'Dashboards',
      'Visualização de dados',
      'Organização de informações operacionais',
      'Apoio à tomada de decisão',
    ],
    stack: ['INDICADORES', 'VISUALIZAÇÃO', 'ANÁLISE ESPACIAL', 'SÉRIES TEMPORAIS'],
    projects: ['fraturas-femur', 'samu-marialva'],
  },
  {
    slug: 'inteligencia-artificial',
    num: '04',
    code: '002D-00',
    title: 'Inteligência artificial',
    eyebrow: 'SECTOR 04 / ARTIFICIAL INTELLIGENCE',
    headline: 'Modelos ganham lugar quando melhoram uma decisão.',
    field: [
      'Aplicar inteligência artificial em saúde é menos sobre escolher uma arquitetura e mais sobre delimitar a tarefa: o que exatamente o modelo prevê, contra qual referência ele é avaliado e o que acontece quando ele erra.',
      'Um pipeline de inferência raramente é um modelo só. É uma sequência de etapas especializadas — preparação, processamento, segmentação, avaliação — em que a saída de cada uma condiciona a seguinte, e o erro se propaga se não for medido em cada ponto.',
    ],
    stakes: [
      {
        label: 'AVALIAÇÃO',
        text: 'Sem métrica quantitativa contra referência, não há como afirmar que o modelo funcionou — apenas que produziu uma saída.',
      },
      {
        label: 'PROPAGAÇÃO',
        text: 'Em pipelines com múltiplos modelos, um erro inicial contamina todas as etapas seguintes.',
      },
      {
        label: 'LIMITE',
        text: 'O modelo apoia a análise; a interpretação e a responsabilidade clínica permanecem humanas.',
      },
    ],
    capabilities: [
      'Inteligência artificial aplicada à saúde',
      'Deep learning',
      'Computer vision',
      'Segmentação de imagens',
      'Avaliação de modelos',
      'Pipelines de inferência',
    ],
    stack: ['DEEP LEARNING', 'COMPUTER VISION', 'SEGMENTAÇÃO', 'GPU'],
    projects: ['oren'],
  },
  {
    slug: 'imagem-medica',
    num: '05',
    code: '002E-00',
    title: 'Imagem médica',
    eyebrow: 'SECTOR 05 / MEDICAL IMAGING',
    headline: 'De pilhas de cortes a um modelo anatômico navegável.',
    field: [
      'Exames de tomografia e ressonância chegam como séries de cortes bidimensionais, tipicamente em DICOM — um padrão que carrega, além dos pixels, os metadados de aquisição que dão escala e orientação à imagem.',
      'Transformar essas fatias em um volume exige normalizar a aquisição, segmentar cada estrutura anatômica de interesse e reconstruir a superfície resultante. O produto final é um modelo específico daquele paciente, não uma ilustração genérica de anatomia.',
    ],
    stakes: [
      {
        label: 'ESCALA REAL',
        text: 'O modelo precisa preservar a geometria do exame: espessura de corte e espaçamento definem a fidelidade do volume.',
      },
      {
        label: 'SEGMENTAÇÃO',
        text: 'Separar estruturas vizinhas com densidades próximas é a etapa mais sensível de todo o processo.',
      },
      {
        label: 'FORMATOS',
        text: 'DICOM e NIfTI atendem a finalidades distintas — clínica e pesquisa — e a conversão entre eles precisa ser controlada.',
      },
    ],
    capabilities: [
      'Processamento de exames',
      'DICOM',
      'NIfTI',
      'Segmentação anatômica',
      'Reconstrução tridimensional',
      'Modelagem anatômica digital',
    ],
    stack: ['DICOM', 'NIFTI', 'RECONSTRUÇÃO 3D', 'DIGITAL TWINS'],
    projects: ['oren'],
  },
  {
    slug: 'realidade-virtual',
    num: '06',
    code: '002F-00',
    title: 'Realidade virtual e simulação',
    eyebrow: 'SECTOR 06 / VIRTUAL REALITY',
    headline: 'Treinar o gesto antes que ele importe.',
    field: [
      'Procedimentos que dependem de gesto e sequência — posicionar uma sonda, percorrer janelas de avaliação numa ordem — são difíceis de ensinar por texto e caros de treinar com paciente real.',
      'Um ambiente virtual permite repetir a mesma situação quantas vezes forem necessárias, com o cenário sob controle. O valor não está no realismo gráfico, mas em preservar a lógica do procedimento: o que se vê, em que ordem e qual a consequência de cada ação.',
    ],
    stakes: [
      {
        label: 'FIDELIDADE',
        text: 'A simulação precisa reproduzir a sequência clínica correta; realismo visual sem lógica correta ensina o hábito errado.',
      },
      {
        label: 'INTERAÇÃO',
        text: 'Em VR, a relação entre movimento da mão e resposta na tela define se o treino transfere para a prática.',
      },
      {
        label: 'VALIDAÇÃO',
        text: 'O ambiente precisa ser avaliado por quem domina o procedimento antes de virar material de ensino.',
      },
    ],
    capabilities: [
      'Unreal Engine',
      'Desenvolvimento de ambientes virtuais',
      'Simulação médica',
      'Treinamento clínico',
      'Interação 3D',
    ],
    stack: ['UNREAL ENGINE', 'VR', 'INTERAÇÃO 3D', 'SIMULAÇÃO'],
    projects: ['efast-vr'],
  },
  {
    slug: 'automacao',
    num: '07',
    code: '002G-00',
    title: 'Automação de processos',
    eyebrow: 'SECTOR 07 / PROCESS AUTOMATION',
    headline: 'Devolver às pessoas o trabalho que exige julgamento.',
    field: [
      'Fluxos administrativos em saúde acumulam etapas repetitivas: conferir um registro contra outro, transportar dados entre sistemas, aplicar a mesma regra centenas de vezes. São tarefas que consomem tempo qualificado sem exigir julgamento qualificado.',
      'Automatizar começa por mapear o processo como ele realmente ocorre — não como está documentado — e separar o que é regra determinística do que depende de análise humana. Só a primeira parte deve ser automatizada.',
    ],
    stakes: [
      {
        label: 'MAPEAMENTO',
        text: 'O processo descrito e o processo praticado costumam divergir; automatizar o descrito quebra na primeira exceção.',
      },
      {
        label: 'EXCEÇÃO',
        text: 'Casos fora da regra precisam de caminho explícito de volta para a decisão humana.',
      },
      {
        label: 'CONFERÊNCIA',
        text: 'Automação em auditoria não substitui a auditoria: organiza o material para que ela aconteça sobre o que importa.',
      },
    ],
    capabilities: [
      'Mapeamento de processos',
      'Identificação de tarefas repetitivas',
      'Automação de fluxos',
      'Manipulação de dados',
      'Processamento automatizado',
      'Redução de atividades manuais',
      'Apoio operacional à auditoria médica',
    ],
    stack: ['MAPEAMENTO DE PROCESSOS', 'AUTOMAÇÃO DE FLUXOS', 'PROCESSAMENTO'],
    projects: ['auditoria-gsus', 'engenharia-dados'],
  },
];

export const sectorsIndex = {
  eyebrow: 'PAGE 002 / SECTORS',
  title: 'Setores',
  headline: 'Sete disciplinas que se encontram no mesmo território.',
  body: 'A Heat On não separa as frentes em produtos isolados: cada projeto atravessa mais de uma delas. As páginas abaixo descrevem o que cada disciplina envolve e onde ela aparece no portfólio.',
} as const;
