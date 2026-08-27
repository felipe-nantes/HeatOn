# Contexto para o Claude — site Heat On v2.0

## Sua função

Atue como principal frontend engineer e creative developer. Antes de escrever código, leia todos os arquivos deste pacote, inspecione o repositório existente e produza um plano de implementação completo, faseado e verificável.

Sua primeira resposta deve conter somente o plano. Não gere componentes, CSS, comandos ou dependências antes da aprovação humana.

## Objetivo

Criar o site institucional da **Heat On**, empresa de tecnologia na interseção entre software, dados, inteligência artificial, ciência e saúde.

A experiência deve ter a ambição editorial, escala e ritmo observados em [colossal.com](https://colossal.com/): hero de tela cheia, navegação técnica, seções numeradas, contraste entre superfícies claras e escuras, imagens em grande escala, tipografia expressiva, metadados monoespaçados e movimento ligado ao scroll.

Esta é uma adaptação autoral. Não reutilize código, imagens, texto, nomenclaturas, vídeos, ícones ou assets da Colossal.

## Mudança central desta versão

Esta versão substitui os antigos visuais conceituais por **registros reais dos projetos** sempre que o acervo permite.

- OREN: fotografias reais de uso e revisão, capturas reais do visualizador 3D e painéis de imagem médica.
- Fraturas de fêmur: capturas reais do dashboard, mapas, indicadores e análises espaciais.
- eFAST em VR: fotografias reais de demonstração e validação, capturas da simulação e do desenvolvimento em Unreal Engine.
- SAMU Marialva, auditoria GSUS e engenharia de dados: ainda não possuem mídia real no pacote. Devem aparecer como capítulos tipográficos e de processo, sem imagens genéricas ou inventadas.

Não use banco de imagens, fotografias falsas de hospitais nem imagens geradas por IA como evidência de projeto. Não recupere os assets conceituais da versão 1.0.

## Fontes canônicas, em ordem

1. `source/HeatOn_Brandbook_v1.0.pdf`.
2. `source/portfolio_saude.md`.
3. `02_ASSET_PLACEMENT_MAP.md`.
4. `06_REAL_MEDIA_INVENTORY.md`.
5. `03_CONTENT_MODEL_PTBR.md`.
6. `04_MOTION_AND_INTERACTION_SPEC.md`.
7. `assets/tokens/design-tokens.json` e `assets/tokens/asset-manifest.json`.

Se houver conflito, preserve primeiro o brandbook e depois o portfólio. Não invente resultados, clientes, métricas, depoimentos, prêmios, equipe ou impacto clínico.

## Posicionamento da Heat On

- Essência: **Scientific Intelligence in Motion**. É a única tagline e não deve ser traduzida.
- Método: ciência primeiro; tecnologia como ferramenta; problemas complexos como território.
- Proposta: construir sistemas que transformam sinal em evidência e evidência em decisão.
- Território: Science × Technology × Medicine × Computation × Intelligence.
- Oferta: software sob medida, dados, BI, automação, IA, imagem médica, modelagem 3D, realidade virtual e simulação.
- Linguagem: precisa, confiante e humana, sem exageros de startup e sem promessas clínicas.

## Projetos documentados

1. OREN — IA, visão computacional, imagem médica e modelos anatômicos 3D.
2. Dashboard de fraturas de fêmur em idosos no Paraná.
3. Dashboard operacional para o SAMU de Marialva.
4. Simulador de eFAST em realidade virtual, desenvolvido em Unreal Engine.
5. Automação de processos de auditoria médica no GSUS.
6. Extração, transformação e manipulação de dados em massa.

## Regras de verdade visual

- Arquivos dentro de `assets/cases/real/**/source/` são materiais reais fornecidos pela equipe.
- Arquivos dentro de `desktop/` e `mobile/` são apenas recortes, redimensionamentos ou conversões desses materiais.
- `assets/home/home-project-mosaic-ai-assisted.*` é uma montagem editorial assistida por IA. Ela pode introduzir o portfólio, mas não pode ser tratada como screenshot, demonstração ou prova de resultado.
- O hero em vídeo parte de uma fotografia real do OREN. É uma animação editorial, não um registro documental contínuo.
- Nas capturas de interface, não redesenhar, reescrever, corrigir ou animar números e textos internos.
- Não criar pessoas, pacientes, profissionais, telas, resultados ou instalações que não estejam no acervo.
- Os três projetos sem mídia real devem funcionar visualmente com tipografia, grid, sinal e dados textuais canônicos.

## Regras visuais obrigatórias

- Deep Carbon `#0E0E10`: estrutura e superfícies escuras.
- Cream `#FFF4E6`: informação e superfícies claras.
- Heat Orange `#FF6A1A`: atividade; um elemento ativo por vez.
- Amber `#FFB347`: transição térmica.
- Coral `#FF5C7A`: borda ou exceção, uso raro.
- Scientific Cyan `#61D4E8`: medição e referência; nunca domina o laranja.
- Manrope para display; Inter para corpo e interface; IBM Plex Mono para coordenadas, labels, IDs e medidas.
- Não redesenhar, redigitar, esticar, rotacionar ou aplicar glow/sombra ao logo.
- Não usar cruz médica, coração genérico, DNA, estetoscópio ou outros clichês.
- Ordem de camadas gráficas: contorno → grid → nodes → signal → conteúdo.
- O gradiente térmico pode aparecer no símbolo, em linhas finas ou em uma única superfície hero. Nunca atrás de texto corrido.
- Muito espaço negativo e alinhamento pelo grid científico.

## Estrutura da homepage

Use esta ordem inicial:

1. Header técnico fixo.
2. Hero real em vídeo de `100svh`.
3. Manifesto em superfície Cream.
4. Mosaico editorial do portfólio e território da marca.
5. Feature imersiva do OREN com fotografia real e sequência de interfaces reais.
6. Feature de fraturas de fêmur com exploração do dashboard real.
7. Feature do simulador eFAST com validação real, simulação e bastidores de desenvolvimento.
8. Índice dos seis projetos; os três sem mídia ficam text-only.
9. Capacidades e verticais.
10. Método Heat On.
11. Princípios da marca.
12. CTA de contato.
13. Footer técnico.

Não crie seção de equipe, depoimentos, logos de clientes, imprensa ou números de impacto enquanto os dados não forem fornecidos.

## Direção de composição e movimento

- A dinamicidade vem de escala, recorte, vídeo, sequência e scroll — não de efeitos artificiais.
- Hero: vídeo real full-bleed, wordmark grande e overlay mínimo para legibilidade.
- OREN: fotografia documental abre o capítulo; depois uma pilha sticky alterna entre estados reais da interface.
- Fêmur: o dashboard entra amplo; o scroll aproxima mapa, indicadores e hotspots sem alterar os dados.
- eFAST: alternar validação presencial, simulação em execução e desenvolvimento em Unreal.
- Nunca aplicar glow, HUD fictício, partículas sci-fi ou sobreposições que pareçam parte da interface original.
- Heat Orange e Scientific Cyan entram apenas como linhas e labels externos ao conteúdo real.

## Comportamentos herdados da referência

- Header sobre o hero; ao deixar o hero, ganha superfície legível e mostra `PAGE` e `SECTION`.
- Seções numeradas com labels monoespaçados e regras finas.
- Alternância entre blocos editoriais claros e blocos imersivos escuros.
- Imagens grandes, recortes assimétricos e transições de escala suaves.
- Botões de contorno amplo, sem efeito plástico, com `+` funcional.
- Índice de projetos navegável e acessível por teclado.
- Movimento explica estado ou progresso; nunca é decoração gratuita.

## Responsividade

- Desktop: grid de 12 colunas, header completo, mídia ampla e composições assimétricas.
- Tablet: preservar hierarquia; reduzir paralaxe e quantidade de metadados simultâneos.
- Mobile: grid de 4 colunas, menu em drawer, cases em fluxo vertical e assets da pasta `mobile/`.
- Não forçar screenshots desktop inteiras dentro de telas pequenas: usar os recortes mobile indicados no mapa.
- Nenhum título depende de quebra manual fixa.
- O hero usa `100svh`, não `100vh` isoladamente.

## Acessibilidade e performance

- HTML semântico, foco visível, skip link, contraste WCAG AA e navegação completa por teclado.
- Todo material real deve receber alt text contextual, não descrição genérica de “imagem tecnológica”.
- `prefers-reduced-motion`: remover paralaxe, não reproduzir o vídeo automaticamente e usar o poster.
- Hero MP4: `muted`, `playsInline`, `loop`, `preload="metadata"`; poster sempre presente.
- Em mobile, rede economizada ou `Save-Data`, priorizar poster e não baixar o vídeo automaticamente.
- Imagens abaixo da dobra com dimensões declaradas, `srcset`, `sizes` e lazy loading.
- Evitar animar propriedades de layout; preferir `transform`, `opacity` e `clip-path` simples.
- Meta: LCP abaixo de 2,5 s em condições realistas e CLS abaixo de 0,1.

## Tecnologia

Primeiro identifique a stack do repositório. Não migre framework sem justificativa. Em projeto greenfield, proponha TypeScript, componentes semânticos, CSS orientado por tokens e animação progressivamente aprimorada. Bibliotecas de scroll/animação só entram se o plano explicar por que CSS e APIs nativas não bastam.

## O que o plano deve entregar

1. Diagnóstico do repositório e da stack.
2. Arquitetura de rotas, componentes e dados.
3. Mapeamento de cada seção para os assets exatos.
4. Estratégia de responsividade, acessibilidade e alt text.
5. Estratégia de vídeo, imagens, fontes e performance.
6. Sistema de tokens e estados de cor.
7. Plano de animação por seção, incluindo reduced motion e Save-Data.
8. Fases de implementação com critérios de aceite e testes.
9. Riscos, dependências e informações ainda ausentes.
10. Checklist final de paridade visual e QA.

## Critério de sucesso

O resultado deve transmitir que os projetos existem e foram construídos pela Heat On. A referência editorial pode ser percebida no ritmo e na escala, mas a credibilidade deve vir do acervo real, da precisão do conteúdo e da identidade Heat On.
