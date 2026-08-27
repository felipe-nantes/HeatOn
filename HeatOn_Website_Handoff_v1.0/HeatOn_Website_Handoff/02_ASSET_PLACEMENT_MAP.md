# Mapa de posicionamento dos assets

Todos os caminhos sao relativos a raiz deste pacote. Ao implementar, copie `assets/` para a pasta publica equivalente do projeto e mantenha os nomes.

| Ordem | Secao / ID sugerido | Composicao e comportamento | Asset desktop | Asset mobile | Observacoes |
|---:|---|---|---|---|---|
| 01 | `site-header` | Header fixo sobre o hero. Logo cream/color conforme contraste. Links numerados; botao `INDEX +`. | `assets/brand/logo-horizontal-cream.svg` | `assets/brand/symbol-cream.svg` | Trocar para versao deep em superficie Cream. Full logo apenas acima de 120 px de largura. |
| 02 | `hero` | 100svh, video full-bleed, overlay Deep Carbon leve, wordmark grande na faixa inferior e microcopy central. | Video definido em `assets/media/hero/hero-video-source.json`; poster `assets/media/hero/hero-poster.webp` | `assets/media/hero/hero-poster-mobile.webp` | Baixar o MP4 para o caminho local do JSON. Nao hotlinkar em producao. Reduced motion usa somente poster. |
| 03 | `manifesto` | Superficie Cream. Headline grande em duas colunas, anel/crosshair de medicao ao fundo e CTA oval. | `assets/graphics/measurement-crosshair.svg` | Mesmo SVG, recortado por CSS | Maximo de dois niveis de heading. A marca entra com logo deep. |
| 04 | `territory` | Faixa horizontal `Science x Technology x Medicine x Computation x Intelligence`, seguida por inventario `06 projetos documentados`. | `assets/graphics/scientific-grid.svg` + `assets/graphics/nodes-data-points.svg` | `assets/graphics/scientific-grid.svg` | O numero 06 e inventario, nao metrica de impacto. |
| 05 | `oren-feature` | Case hero imersivo, texto a esquerda e figura a direita; entrada das fatias no scroll. | `assets/cases/webp/desktop/case-01-oren.webp` | `assets/cases/webp/mobile/case-01-oren-mobile.webp` | Rotular discretamente `REPRESENTACAO CONCEITUAL`. Nao chamar de screenshot. |
| 06 | `projects` | Indice/cases numerados. Alternar fundo claro/escuro e lado do texto. | Arquivos `case-02` a `case-06` em `assets/cases/webp/desktop/` | Correspondentes `*-mobile.webp` | Ordem proposta abaixo. Hover desloca no maximo 2%; touch nao depende de hover. |
| 07 | `capabilities` | Grid de capacidades com icones lineares e um item ativo laranja. | `assets/graphics/iconography-set.svg` | Mesmo SVG ou icones recortados | Os 12 icones formam um sprite visual; se separar, preserve stroke e cores canônicas. |
| 08 | `method` | Linha Signal -> Processing -> Insight, animada uma vez ao entrar. | `assets/graphics/waveform-signal.svg` | Mesmo SVG | A linha sempre viaja da esquerda para a direita e termina em node. Nunca espelhar. |
| 09 | `principles` | Cinco compromissos em superficie Cream, com divisorias finas. | Sem raster; grid e tipografia | Sem raster | Scientific Rigor; Computational Intelligence; Human Impact; Precision; Exploration. |
| 10 | `contact` | Bloco Deep Carbon com contour field baixo, CTA e formulario simples. | `assets/graphics/contour-field.svg` + `assets/brand/logo-scientific-signature.svg` | `assets/graphics/contour-field.svg` | Nao inventar email/endereco. Formulario pode ser visual ate o endpoint ser definido. |
| 11 | `footer` | Footer tecnico, metadados da marca, navegacao curta e legal. | `assets/brand/logo-horizontal-cream.svg` | `assets/brand/symbol-cream.svg` | Incluir somente links realmente implementados. |

## Ordem dos cases no indice

| Numero | Projeto | Asset desktop | Foco do recorte | Superficie sugerida |
|---:|---|---|---|---|
| 01 | OREN | `case-01-oren.webp` | Figuras a direita; copy a esquerda | Deep Carbon |
| 02 | Fraturas de femur | `case-02-femur-fractures.webp` | Femur a direita; copy a esquerda | Cream |
| 03 | SAMU Marialva | `case-03-samu-marialva.webp` | Rede a esquerda; copy a direita | Deep Carbon |
| 04 | eFAST em VR | `case-04-efast-vr.webp` | Simulador a esquerda; copy a direita | Deep Carbon |
| 05 | Auditoria GSUS | `case-05-gsus-audit-automation.webp` | Pipeline central; copy acima/esquerda | Deep Carbon |
| 06 | Engenharia de dados | `case-06-data-engineering.webp` | Entrada esquerda, saida direita; copy em faixa superior | Deep Carbon |

## Brand assets por contexto

- Header dark: `logo-horizontal-cream.svg`.
- Header/relatorio claro: `logo-horizontal-deep.svg`.
- Hero/end frame institucional: `logo-scientific-signature.svg`.
- Avatar/quadrado: `logo-stacked-color.svg` ou `app-icon.svg`.
- Micro UI abaixo de 120 px: `symbol-cream.svg` ou `symbol-deep.svg`.
- Favicon: `favicon.ico`, `favicon-32.png` e `favicon-symbol.svg`.
- Open Graph: `assets/social/og-home.png`.
- Twitter/X card: `assets/social/twitter-card.png`.

## Elementos que nao devem entrar

- `glow` de qualquer logo.
- Imagens `cosmos_*`, concepts/moodboards ou paginas do brandbook como assets do site.
- Logos e imagens da Colossal.
- Capturas falsas de dashboard.
- Textos e numeros inventados dentro das imagens.

