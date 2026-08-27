# Mapa de posicionamento dos assets — v2.1 real-first

Todos os caminhos são relativos à raiz deste pacote. Copie `assets/` para a pasta pública equivalente do projeto e mantenha os nomes. Leia também `06_REAL_MEDIA_INVENTORY.md` antes de implementar as galerias e os textos alternativos.

## Estrutura da homepage

| Ordem | Seção / ID sugerido | Composição e comportamento | Asset desktop | Asset mobile | Regra crítica |
|---:|---|---|---|---|---|
| 01 | `site-header` | Header fixo sobre o hero; links numerados; botão `INDEX +`. | `assets/brand/logo-horizontal-cream.svg` | `assets/brand/symbol-cream.svg` | Trocar para versão deep em superfícies Cream. |
| 02 | `hero` | `100svh`, montagem rápida full-bleed, overlay Deep Carbon de 18–32%, wordmark grande e microcopy. | `assets/media/hero/sequence/hero-rapid-sequence-preview.mp4` + `hero-real-poster.webp` | `assets/media/hero/sequence/hero-rapid-sequence-preview-mobile.mp4` + `hero-real-poster-mobile.webp` | Usar o MP4 já concatenado; não alternar seis elementos `<video>` em runtime. Em reduced motion e Save-Data, usar somente poster. |
| 03 | `manifesto` | Superfície Cream, headline grande, anel de medição ao fundo e CTA oval. | `assets/graphics/measurement-crosshair.svg` | Mesmo SVG recortado por CSS | Sem raster nesta seção. |
| 04 | `territory-proof` | Mosaico editorial amplo, entrando por máscara diagonal suave, seguido por `Science × Technology × Medicine × Computation × Intelligence`. | `assets/home/home-project-mosaic-ai-assisted.webp` | `assets/home/home-project-mosaic-ai-assisted-mobile.webp` | Montagem editorial assistida por IA; não chamar de screenshot nem usar como prova de resultado. |
| 05 | `oren-opener` | Abertura imersiva do OREN: copy à esquerda e foto real em grande escala à direita. | `assets/cases/real/oren/desktop/oren-cover-real.webp` | `assets/cases/real/oren/mobile/oren-cover-real-mobile.webp` | Legendar como registro real de demonstração/revisão. |
| 06 | `oren-system` | Narrativa sticky: fotografia de revisão → modelo realista → anatomia interna → segmentos → triagem. | Arquivos em `assets/cases/real/oren/desktop/` listados abaixo | `oren-interface-realistic-mobile.webp` e `oren-validation-vr-mobile.webp` | Trocar quadros por crossfade; não interpolar ou redesenhar a interface. |
| 07 | `femur-feature` | Dashboard real full-width; scroll aproxima indicadores, mapa e hotspots. | Arquivos em `assets/cases/real/femur/desktop/` | Arquivos em `assets/cases/real/femur/mobile/` | Manter textos e números dentro das capturas inalterados. |
| 08 | `efast-opener` | Foto real de validação em laboratório, copy sobre faixa Deep Carbon externa à imagem. | `assets/cases/real/efast/desktop/efast-cover-real.webp` | `assets/cases/real/efast/mobile/efast-cover-real-mobile.webp` | Não cobrir rostos, headset ou interação principal. |
| 09 | `efast-system` | Alternar validação real, simulação funcionando e bastidores em Unreal Engine. | Arquivos em `assets/cases/real/efast/desktop/` | `efast-validation-mobile.webp` e `efast-simulation-mobile.webp` | O movimento vem da troca de quadros e do scroll; não inventar HUD. |
| 10 | `projects-index` | Índice dos seis projetos. OREN, fêmur e eFAST recebem thumbnail real; SAMU, GSUS e dados são cards text-only. | Capas reais dos três cases + grid/signal | Capas mobile + cards em fluxo vertical | Não usar imagens genéricas para os três projetos sem acervo. |
| 11 | `capabilities` | Grid de capacidades com ícones lineares e um item ativo laranja. | `assets/graphics/iconography-set.svg` | Mesmo SVG ou ícones recortados | Preservar stroke e cores canônicas. |
| 12 | `method` | Linha `Signal → Processing → Validation → Insight`, animada uma vez. | `assets/graphics/waveform-signal.svg` | Mesmo SVG | A linha viaja da esquerda para a direita e termina em node. |
| 13 | `principles` | Cinco compromissos em superfície Cream com divisórias finas. | Sem raster | Sem raster | Usar grid e tipografia. |
| 14 | `contact` | Bloco Deep Carbon, contour field baixo, CTA e formulário. | `assets/graphics/contour-field.svg` + `assets/brand/logo-scientific-signature.svg` | `assets/graphics/contour-field.svg` | Não inventar e-mail ou endereço. |
| 15 | `footer` | Footer técnico e navegação curta. | `assets/brand/logo-horizontal-cream.svg` | `assets/brand/symbol-cream.svg` | Incluir somente links implementados. |

## Hero

| Função | Arquivo | Uso |
|---|---|---|
| Montagem rápida desktop | `assets/media/hero/sequence/hero-rapid-sequence-preview.mp4` | Fonte principal; H.264, 1280×720, 6,04 s, sem áudio, sete planos em cortes secos. |
| Montagem rápida mobile | `assets/media/hero/sequence/hero-rapid-sequence-preview-mobile.mp4` | Fonte principal mobile; H.264, 1080×1350, 6,04 s, crops aprovados por plano. |
| Vídeo OREN contínuo desktop | `assets/media/hero/hero-real-loop-h264.mp4` | Alternativa de plano único; H.264, 1920×1080, 6,04 s. |
| Vídeo OREN contínuo mobile | `assets/media/hero/hero-real-loop-mobile-h264.mp4` | Alternativa mobile de plano único; 1080×1350. |
| Seis clipes independentes | `assets/media/hero/sequence/clips/*.mp4` | Masters de edição web, 1280×720, 3,04 s cada. Usar somente para recut; detalhes em `07_HERO_RAPID_SEQUENCE_SPEC.md`. |
| Poster desktop | `assets/media/hero/hero-real-poster.webp` | Primeira pintura e fallback. |
| Poster mobile | `assets/media/hero/hero-real-poster-mobile.webp` | Primeira pintura mobile e reduced motion. |
| Poster da montagem desktop | `assets/media/hero/sequence/hero-rapid-sequence-preview-poster.jpg` | QA e fallback alternativo. |
| Poster da montagem mobile | `assets/media/hero/sequence/hero-rapid-sequence-preview-mobile-poster.jpg` | QA e fallback alternativo mobile. |
| Master de geração | `assets/media/hero/hero-real-source-hevc.mp4` | Arquivo-fonte 10-bit; não servir como único formato web. |
| Metadados | `assets/media/hero/hero-real-video-source.json` | Proveniência, codecs, duração, prompt e instruções. |
| Metadados da sequência | `assets/media/hero/sequence/sequence-metadata.json` | Jobs, prompts, trims, ordem, custo e crops mobile. |

Configuração sugerida:

```html
<video muted playsinline loop preload="metadata" poster="/assets/media/hero/hero-real-poster.webp">
  <source src="/assets/media/hero/sequence/hero-rapid-sequence-preview.mp4" type="video/mp4" />
</video>
```

No mobile, trocar `src` para `hero-rapid-sequence-preview-mobile.mp4` via JS progressivo apenas quando a política de dados permitir. Não baixar simultaneamente os dois vídeos. Não reproduzir os seis clipes em seis tags separadas: a troca de decoder pode causar quadros pretos.

## Sequência OREN

| Passo | Asset desktop | Asset mobile | Papel narrativo |
|---:|---|---|---|
| 01 | `assets/cases/real/oren/desktop/oren-cover-real.webp` | `assets/cases/real/oren/mobile/oren-cover-real-mobile.webp` | Abrir com o uso real e estabelecer escala humana. |
| 02 | `assets/cases/real/oren/desktop/oren-lab-review.webp` | `assets/cases/real/oren/mobile/oren-validation-vr-mobile.webp` | Mostrar revisão e trabalho no laboratório. |
| 03 | `assets/cases/real/oren/desktop/oren-interface-realistic.webp` | `assets/cases/real/oren/mobile/oren-interface-realistic-mobile.webp` | Estado anatômico realista do visualizador. |
| 04 | `assets/cases/real/oren/desktop/oren-interface-internal.webp` | Reusar recorte do passo 03 ou exibir a imagem em largura natural | Anatomia interna. |
| 05 | `assets/cases/real/oren/desktop/oren-interface-segments.webp` | Exibir em carrossel horizontal acessível | Segmentos anatômicos. |
| 06 | `assets/cases/real/oren/desktop/oren-interface-triage.webp` | Exibir em carrossel horizontal acessível | Estado de triagem. |
| 07 | `assets/cases/real/oren/desktop/oren-mri-panel-1.webp` e `oren-mri-panel-2.webp` | Usar originais em modal/zoom, não em thumbnail minúscula | Relação entre imagens médicas e revisão. |

Implementação desktop: painel sticky de no máximo `220svh`, com um frame visível por vez. Implementação mobile: fluxo vertical ou carrossel com controles explícitos; não prender o scroll.

## Sequência Fraturas de fêmur

| Passo | Asset desktop | Asset mobile | Papel narrativo |
|---:|---|---|---|
| 01 | `assets/cases/real/femur/desktop/femur-cover-dashboard.webp` | `assets/cases/real/femur/mobile/femur-cover-dashboard-mobile.webp` | Visão geral do produto e indicadores. |
| 02 | `assets/cases/real/femur/desktop/femur-dashboard-overview.webp` | Reusar o cover mobile | Apresentar mapa, total, faixa etária e gráficos no mesmo sistema. |
| 03 | `assets/cases/real/femur/desktop/femur-dashboard-hotspots.webp` | `assets/cases/real/femur/mobile/femur-hotspots-mobile.webp` | Análise espacial de hotspots. |
| 04 | `assets/cases/real/femur/desktop/femur-dashboard-trends.webp` | Mostrar como imagem horizontal com zoom | Evolução temporal. |
| 05 | `assets/cases/real/femur/desktop/femur-dashboard-map.webp` | `assets/cases/real/femur/mobile/femur-map-detail-mobile.webp` | Detalhe do mapa interativo. |
| 06 | `assets/cases/real/femur/desktop/femur-dashboard-flow.webp` | Usar imagem em largura natural | Fluxo por município e destino do atendimento. |

Não anime barras, percentuais ou mapas como se fossem elementos DOM. O movimento deve acontecer na câmera da página — scale, translate e recorte — mantendo a captura intacta.

## Sequência eFAST em VR

| Passo | Asset desktop | Asset mobile | Papel narrativo |
|---:|---|---|---|
| 01 | `assets/cases/real/efast/desktop/efast-cover-real.webp` | `assets/cases/real/efast/mobile/efast-cover-real-mobile.webp` | Validação/demonstração presencial. |
| 02 | `assets/cases/real/efast/desktop/efast-validation-session.webp` | `assets/cases/real/efast/mobile/efast-validation-mobile.webp` | Relação entre usuário e especialistas. |
| 03 | `assets/cases/real/efast/desktop/efast-simulation-live.webp` | `assets/cases/real/efast/mobile/efast-simulation-mobile.webp` | Simulação funcionando com ultrassom em uso. |
| 04 | `assets/cases/real/efast/desktop/efast-unreal-scene.webp` | Usar source em imagem horizontal rolável | Ambiente sendo construído no Unreal Engine. |
| 05 | `assets/cases/real/efast/desktop/efast-unreal-development.webp` | Usar source em imagem horizontal rolável | Bastidor técnico e volume de avaliação. |
| 06 | `assets/cases/real/efast/desktop/efast-demo-room.webp` | Não obrigatório | Demonstração real do sistema. |
| 07 | `assets/cases/real/efast/desktop/efast-headset-demo.webp` | Não obrigatório | Encerramento humano do capítulo. |

## Projetos sem mídia real

| Projeto | Tratamento visual autorizado | Assets permitidos |
|---|---|---|
| SAMU Marialva | Card tipográfico numerado, resumo, tags e uma rota linear abstrata de interface externa ao conteúdo. | `scientific-grid.svg`, `nodes-data-points.svg`, `waveform-signal.svg` |
| Auditoria GSUS | Card tipográfico com etapas do processo em texto; sem papéis, telas ou pessoas inventadas. | Grid, regras, nodes e tipografia |
| Engenharia de dados | Card tipográfico com fluxo `EXTRAÇÃO → PADRONIZAÇÃO → INTEGRAÇÃO`; sem nuvens, bancos cilíndricos ou dashboards falsos. | `waveform-signal.svg`, grid e tipografia |

Esses cards podem ser visualmente fortes e animados, mas não podem sugerir que existe uma fotografia ou interface documentada no pacote.

## Brand assets por contexto

- Header dark: `assets/brand/logo-horizontal-cream.svg`.
- Header e relatórios claros: `assets/brand/logo-horizontal-deep.svg`.
- Hero ou end frame institucional: `assets/brand/logo-scientific-signature.svg`.
- Avatar/quadrado: `assets/brand/logo-stacked-color.svg` ou `app-icon.svg`.
- Micro UI abaixo de 120 px: `symbol-cream.svg` ou `symbol-deep.svg`.
- Favicon: `favicon.ico`, `favicon-32.png` e `favicon-symbol.svg`.
- Open Graph: `assets/social/og-home-real.png`.
- Twitter/X card: `assets/social/twitter-card-real.png`.

## Elementos proibidos

- Assets conceituais da versão 1.0.
- Banco de imagens, médicos genéricos ou hospitais artificiais.
- Imagens geradas apresentadas como captura real.
- Logos, imagens ou código da Colossal.
- Glow de logo, neon, HUD fictício, partículas sci-fi ou números inventados.
