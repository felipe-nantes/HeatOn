# Contexto para o Claude - site Heat On

## Sua funcao

Atue como principal frontend engineer e creative developer. Antes de escrever codigo, leia todos os arquivos deste pacote, inspecione o repositorio existente e produza um plano de implementacao completo, faseado e verificavel.

Sua primeira resposta deve conter somente o plano. Nao gere componentes, CSS, comandos ou dependencias antes da aprovacao humana.

## Objetivo

Criar o site institucional da **Heat On**, empresa de tecnologia que atua na intersecao entre software, dados, inteligencia artificial, ciencia e saude.

A experiencia deve ter a mesma ambicao editorial, escala e ritmo do site de referencia [colossal.com](https://colossal.com/): hero cinematografico de tela cheia, navegacao tecnica, secoes numeradas, grande contraste entre superficies claras e escuras, imagens em escala, tipografia expressiva, metadados monoespacados e movimento ligado ao scroll.

Esta e uma adaptacao, nao uma copia. Nao reutilize codigo, imagens, texto, nomenclaturas, videos, icones ou assets da Colossal.

## Fontes canônicas, em ordem

1. `source/HeatOn_Brandbook_v1.0.pdf`.
2. `source/portfolio_saude.md`.
3. `02_ASSET_PLACEMENT_MAP.md`.
4. `03_CONTENT_MODEL_PTBR.md`.
5. `04_MOTION_AND_INTERACTION_SPEC.md`.
6. `assets/tokens/design-tokens.json` e `assets/tokens/asset-manifest.json`.

Se houver conflito, preserve primeiro o brandbook e depois o portfolio. Nao invente resultados, clientes, metricas, depoimentos, premios, equipe ou impacto clinico.

## Posicionamento da Heat On

- Essencia: **Scientific Intelligence in Motion**. Essa e a unica tagline e nao deve ser traduzida.
- Metodo: ciencia primeiro; tecnologia como ferramenta; problemas complexos como territorio.
- Proposta: construir sistemas que transformam sinal em evidencia e evidencia em decisao.
- Territorio: Science x Technology x Medicine x Computation x Intelligence.
- Oferta: software sob medida, dados, BI, automacao, IA, imagem medica, modelagem 3D, realidade virtual e simulacao.
- Linguagem: precisa, confiante, humana, sem exageros de startup e sem promessas clinicas.

## Projetos documentados

1. OREN - IA, visao computacional, imagem medica e modelos anatomicos 3D.
2. Dashboard de fraturas de femur em idosos no Parana.
3. Dashboard operacional para o SAMU de Marialva.
4. Simulador de eFAST em realidade virtual, desenvolvido em Unreal Engine.
5. Automacao de processos de auditoria medica no GSUS.
6. Extracao, transformacao e manipulacao de dados em massa.

Os seis visuais de case sao representacoes conceituais, nao capturas das interfaces reais. Nunca os descreva como screenshots ou evidencias de resultado.

## Regras visuais obrigatorias

- Cores e papeis semanticos:
  - Deep Carbon `#0E0E10`: estrutura e superficies escuras.
  - Cream `#FFF4E6`: informacao e superficies claras.
  - Heat Orange `#FF6A1A`: atividade; um elemento ativo por vez.
  - Amber `#FFB347`: transicao termica.
  - Coral `#FF5C7A`: borda/excecao, uso raro.
  - Scientific Cyan `#61D4E8`: medicao e referencia; nunca domina o laranja.
- Tipografia:
  - Manrope para display e voz de marca.
  - Inter para corpo, interface e documentacao.
  - IBM Plex Mono para coordenadas, labels, IDs e medidas.
- Nao redesenhar, redigitar, esticar, rotacionar ou aplicar glow/sombra ao logo.
- Nao usar cruz medica, coracao como simbolo generico, DNA, estetoscopio ou outros cliches.
- Ordem de camadas graficas: contorno -> grid -> nodes -> signal -> conteudo.
- O gradiente termico pode aparecer no simbolo, em linhas finas ou em uma unica superficie hero. Nunca atras de texto corrido.
- Muito espaco negativo; alinhamento sempre pelo grid cientifico.

## Estrutura da homepage

Use exatamente esta ordem inicial:

1. Header tecnico fixo.
2. Hero cinematografico de 100svh.
3. Manifesto em superficie Cream.
4. Territorio da marca e inventario mensuravel.
5. Feature imersiva do OREN.
6. Indice de projetos com os seis cases.
7. Capacidades e verticais.
8. Metodo Heat On.
9. Principios da marca.
10. CTA de contato.
11. Footer tecnico.

Nao crie secao de equipe, depoimentos, logos de clientes, imprensa ou numeros de impacto enquanto os dados nao forem fornecidos.

## Comportamentos herdados da referencia

- Header sobre o hero; ao deixar o hero, ele ganha superficie legivel e mostra `PAGE` e `SECTION`.
- Secoes numeradas com labels monoespacados e regras finas.
- Alternancia entre blocos editoriais claros e blocos imersivos escuros.
- Imagens grandes, recortes assimetricos e transicoes de escala suaves.
- Botoes de contorno amplo, sem efeito plastico e com um `+` funcional.
- Indice de projetos navegavel e acessivel por teclado.
- Movimento deve explicar estado/progresso; nunca ser decoracao gratuita.

## Responsividade

- Desktop: grid de 12 colunas, header completo e composicoes assimetricas.
- Tablet: preservar hierarquia; reduzir paralaxe e quantidade de metadados simultaneos.
- Mobile: grid de 4 colunas, menu em drawer, cases em fluxo vertical e uso das imagens `*-mobile.webp`.
- Nenhum titulo pode depender de quebra manual fixa para funcionar em todos os tamanhos.
- O hero usa `100svh`, nao `100vh` isoladamente.

## Acessibilidade e performance

- HTML semantico, foco visivel, skip link, contraste WCAG AA e navegacao completa por teclado.
- Respeitar `prefers-reduced-motion`: remover paralaxe, nao auto-reproduzir o video e usar o poster.
- Hero MP4: `muted`, `playsInline`, `loop`; carregar apenas quando apropriado. Poster sempre presente.
- Em mobile/rede economica, priorizar o poster e adiar o video.
- Imagens abaixo da dobra com dimensoes declaradas e lazy loading.
- Evitar animar propriedades que causam layout; preferir `transform` e `opacity`.
- Meta de qualidade: LCP menor que 2,5 s em condicoes realistas e CLS menor que 0,1.

## Tecnologia

Primeiro identifique a stack do repositorio. Nao migre framework sem justificativa. Se for um projeto greenfield, proponha uma stack moderna em TypeScript, com componentes semanticos, CSS orientado por tokens e animacao progressivamente aprimorada. Bibliotecas de scroll/animacao so entram se o plano explicar por que CSS e APIs nativas nao bastam.

## O que seu plano deve entregar

1. Diagnostico do repositorio e da stack.
2. Arquitetura de rotas, componentes e dados.
3. Mapeamento de cada secao para os assets exatos.
4. Estrategia de responsividade e acessibilidade.
5. Estrategia de video, imagens, fontes e performance.
6. Sistema de tokens e estados de cor.
7. Plano de animacao por secao, incluindo reduced motion.
8. Fases de implementacao com criterios de aceite e testes.
9. Riscos, dependencias e informacoes ainda ausentes.
10. Checklist final de paridade visual e QA.

## Criterio de sucesso

O resultado deve lembrar a experiencia editorial e cinematografica da referencia sem parecer uma imitacao tematica. Ao remover todo o texto, a composicao ainda deve ser reconhecivel como Heat On por causa do pulso termico, do grid cientifico, do papel semantico das cores e do equilibrio entre rigor e movimento.

