# Inventário de mídia real

Este arquivo liga cada material ao projeto, ao papel narrativo e a uma sugestão inicial de texto alternativo. Ajuste o alt text ao contexto final da página; não repita a legenda visível palavra por palavra.

## Status por projeto

| Projeto | Status | Tratamento |
|---|---|---|
| OREN | Mídia real completa | Fotografia, interface, modelo anatômico e painéis de imagem médica. |
| Fraturas de fêmur | Mídia real completa | Capturas do dashboard, mapa, hotspots, tendências e fluxo. |
| eFAST em VR | Mídia real completa | Fotografias de uso/validação, aplicação e Unreal Engine. |
| SAMU Marialva | Sem mídia real | Text-only. |
| Auditoria GSUS | Sem mídia real | Text-only. |
| Engenharia de dados | Sem mídia real | Text-only. |

## Hero e homepage

| Arquivo | Origem | Uso recomendado | Alt text sugerido |
|---|---|---|---|
| `assets/media/hero/hero-real-loop-h264.mp4` | Animação Higgsfield de fotografia real do OREN | Hero desktop | Vídeo decorativo quando houver título sobreposto; usar `aria-hidden="true"` e fornecer contexto no texto da seção. |
| `assets/media/hero/hero-real-loop-mobile-h264.mp4` | Recorte mobile do vídeo real | Hero mobile | Mesmo tratamento do vídeo desktop. |
| `assets/media/hero/hero-real-poster.webp` | Recorte real do OREN | Poster desktop / reduced motion | Pessoa usando headset de realidade virtual diante de uma tela com exame de imagem médica segmentado. |
| `assets/media/hero/hero-real-poster-mobile.webp` | Recorte vertical da mesma foto | Poster mobile | Pessoa usando headset durante demonstração de um sistema de imagem médica. |
| `assets/home/home-project-mosaic-ai-assisted.webp` | Composição editorial assistida por IA com quatro materiais reais | Transição para o portfólio | Montagem editorial reunindo demonstração do OREN, visualização anatômica, validação em realidade virtual e dashboard de saúde pública. |
| `assets/home/home-project-mosaic-ai-assisted-mobile.webp` | Recorte mobile da montagem | Transição mobile | Versão vertical da montagem editorial dos projetos Heat On. |

`hero-real-source-hevc.mp4` é master de arquivo. Não precisa ser servido ao navegador quando o H.264 estiver disponível.

## OREN

### Derivados prontos para o site

| Arquivo | Posição | Alt text sugerido |
|---|---|---|
| `assets/cases/real/oren/desktop/oren-cover-real.webp` | Capa do case no desktop | Pessoa utilizando headset de realidade virtual diante de telas com exame de imagem médica e área segmentada. |
| `assets/cases/real/oren/mobile/oren-cover-real-mobile.webp` | Capa mobile | Visualização de um modelo anatômico tridimensional durante demonstração do OREN. |
| `assets/cases/real/oren/desktop/oren-lab-review.webp` | Bloco “revisão” | Equipe reunida em laboratório revisando software e fluxos técnicos em múltiplas telas. |
| `assets/cases/real/oren/mobile/oren-validation-vr-mobile.webp` | Segundo frame mobile | Pessoa operando o OREN com headset diante de exame segmentado. |
| `assets/cases/real/oren/desktop/oren-interface-realistic.webp` | Estado 01 da interface | Visualizador OREN exibindo modelo anatômico tridimensional do fígado com acabamento realista e referência de imagem médica. |
| `assets/cases/real/oren/mobile/oren-interface-realistic-mobile.webp` | Recorte mobile da interface | Detalhe do modelo tridimensional do fígado no visualizador OREN. |
| `assets/cases/real/oren/desktop/oren-interface-internal.webp` | Estado 02 | Visualizador OREN em modo de anatomia interna. |
| `assets/cases/real/oren/desktop/oren-interface-segments.webp` | Estado 03 | Visualizador OREN exibindo segmentos anatômicos do fígado em cores distintas. |
| `assets/cases/real/oren/desktop/oren-interface-triage.webp` | Estado 04 | Visualizador OREN em configuração de triagem anatômica. |
| `assets/cases/real/oren/desktop/oren-mri-panel-1.webp` | Painel de apoio | Painel com cortes de imagem médica usados no processo de revisão do OREN. |
| `assets/cases/real/oren/desktop/oren-mri-panel-2.webp` | Painel de apoio | Segundo painel com diferentes cortes de imagem médica para comparação. |

### Masters preservados

Todos os arquivos abaixo são reais e não devem ser redigitados ou redesenhados:

- `assets/cases/real/oren/source/oren-validation-vr-original.jpg`
- `assets/cases/real/oren/source/oren-lab-review-original.jpg`
- `assets/cases/real/oren/source/oren-ar-liver-original.jpg`
- `assets/cases/real/oren/source/oren-ui-upload.png`
- `assets/cases/real/oren/source/oren-ui-realistic.png`
- `assets/cases/real/oren/source/oren-ui-segments.png`
- `assets/cases/real/oren/source/oren-ui-internal.png`
- `assets/cases/real/oren/source/oren-ui-triage.png`
- `assets/cases/real/oren/source/oren-ui-segments-superior.png`
- `assets/cases/real/oren/source/oren-mri-panel-1.png`
- `assets/cases/real/oren/source/oren-mri-panel-2.png`

## Fraturas de fêmur

### Derivados prontos para o site

| Arquivo | Posição | Alt text sugerido |
|---|---|---|
| `assets/cases/real/femur/desktop/femur-cover-dashboard.webp` | Capa desktop | Dashboard de análise de fraturas de fêmur com mapa do Paraná, indicadores e gráficos por faixa etária. |
| `assets/cases/real/femur/mobile/femur-cover-dashboard-mobile.webp` | Capa mobile | Recorte do dashboard mostrando navegação, mapa e gráficos de incidência. |
| `assets/cases/real/femur/desktop/femur-dashboard-overview.webp` | Visão geral | Visão geral do dashboard de fraturas de fêmur no Paraná. |
| `assets/cases/real/femur/desktop/femur-dashboard-hotspots.webp` | Etapa hotspots | Mapa de hotspots e coldspots de fraturas de fêmur organizado por macrorregiões de saúde. |
| `assets/cases/real/femur/mobile/femur-hotspots-mobile.webp` | Hotspots mobile | Recorte vertical do mapa de padrões espaciais de fraturas. |
| `assets/cases/real/femur/desktop/femur-dashboard-trends.webp` | Etapa tendências | Dashboard com gráficos de evolução anual de fraturas e densitometria. |
| `assets/cases/real/femur/desktop/femur-dashboard-map.webp` | Detalhe cartográfico | Mapa interativo do Paraná com taxas de fraturas por município. |
| `assets/cases/real/femur/mobile/femur-map-detail-mobile.webp` | Detalhe mobile | Mapa interativo do Paraná com municípios destacados por faixa de incidência. |
| `assets/cases/real/femur/desktop/femur-dashboard-flow.webp` | Etapa fluxo | Mapa de fluxo por município e destino do atendimento acompanhado por gráfico de distribuição. |

### Masters preservados

- `assets/cases/real/femur/source/femur-dashboard-overview.png`
- `assets/cases/real/femur/source/femur-dashboard-overview-alt.png`
- `assets/cases/real/femur/source/femur-dashboard-trends.png`
- `assets/cases/real/femur/source/femur-dashboard-hotspots.png`
- `assets/cases/real/femur/source/femur-dashboard-map.png`
- `assets/cases/real/femur/source/femur-dashboard-flow.png`

## eFAST em realidade virtual

### Derivados prontos para o site

| Arquivo | Posição | Alt text sugerido |
|---|---|---|
| `assets/cases/real/efast/desktop/efast-cover-real.webp` | Capa desktop | Pessoa utilizando o simulador eFAST em realidade virtual durante sessão de validação com profissionais. |
| `assets/cases/real/efast/mobile/efast-cover-real-mobile.webp` | Capa mobile | Pessoa usando headset e controle durante demonstração do simulador eFAST. |
| `assets/cases/real/efast/desktop/efast-validation-session.webp` | Validação | Sessão de validação do simulador eFAST com usuário em realidade virtual e profissionais observando. |
| `assets/cases/real/efast/mobile/efast-validation-mobile.webp` | Validação mobile | Recorte vertical da sessão de validação do simulador eFAST. |
| `assets/cases/real/efast/desktop/efast-simulation-live.webp` | Aplicação | Paciente virtual em maca com janela de ultrassom durante simulação eFAST. |
| `assets/cases/real/efast/mobile/efast-simulation-mobile.webp` | Aplicação mobile | Recorte vertical da simulação mostrando paciente virtual e exame ultrassonográfico. |
| `assets/cases/real/efast/desktop/efast-unreal-scene.webp` | Desenvolvimento | Cena do simulador eFAST aberta no editor Unreal Engine. |
| `assets/cases/real/efast/desktop/efast-unreal-development.webp` | Desenvolvimento técnico | Volume de avaliação e configurações técnicas no Unreal Engine. |
| `assets/cases/real/efast/desktop/efast-demo-room.webp` | Demonstração | Demonstração presencial do simulador com headset e monitor. |
| `assets/cases/real/efast/desktop/efast-headset-demo.webp` | Encerramento opcional | Pessoa apresentando o headset utilizado no simulador. |

### Masters preservados

- `assets/cases/real/efast/source/efast-validation-session.jpg`
- `assets/cases/real/efast/source/efast-headset-demo.jpg`
- `assets/cases/real/efast/source/efast-demo-room.jpg`
- `assets/cases/real/efast/source/efast-operator-portrait-1.jpg`
- `assets/cases/real/efast/source/efast-operator-portrait-2.jpg`
- `assets/cases/real/efast/source/efast-simulation-live.png`
- `assets/cases/real/efast/source/efast-unreal-scene.png`
- `assets/cases/real/efast/source/efast-unreal-patient.png`
- `assets/cases/real/efast/source/efast-unreal-development.png`

## Regras técnicas

- Use derivados WebP na página e mantenha os masters apenas para zoom, recrop futuro ou auditoria.
- Declare `width` e `height` ou `aspect-ratio` para impedir CLS.
- Fotografias: `object-fit: cover` somente nos recortes já aprovados.
- Screenshots: preferir `object-fit: contain` ou overflow recortado com botão para visualizar a captura completa.
- Não aplicar filtros que prejudiquem leitura de mapas, exames ou interfaces.
- Em galerias, a legenda deve deixar claro quando a imagem é registro real, captura de interface ou composição editorial.
