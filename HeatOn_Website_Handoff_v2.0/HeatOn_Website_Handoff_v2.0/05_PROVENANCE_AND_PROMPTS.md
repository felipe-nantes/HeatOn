# Proveniência, transformação e limites de uso — v2.0

## Origem

- Brandbook, logos, símbolos, grids, contour field, waveform, nodes, crosshair e iconografia foram fornecidos pela Heat On.
- O portfólio textual em `source/portfolio_saude.md` foi fornecido pela equipe.
- Fotografias e screenshots dentro de `assets/cases/real/**/source/` vieram do acervo entregue pelo usuário em 27/08/2026.
- Os WebP nas pastas `desktop/` e `mobile/` foram derivados desses originais por crop, resize, conversão de formato e remoção de metadados.
- A Colossal foi usada apenas como referência de estrutura, ritmo, escala e comportamento. Nenhum asset da Colossal integra o pacote.

## Classificação dos materiais

| Material | Natureza | Pode ser usado como evidência visual do projeto? |
|---|---|---|
| `assets/cases/real/**/source/*` | Fotografia ou captura real fornecida | Sim, com legenda contextual e sem promessas adicionais. |
| `assets/cases/real/**/desktop/*` e `mobile/*` | Derivação mecânica do material real | Sim. |
| `assets/home/home-project-mosaic-ai-assisted.*` | Composição editorial assistida por OpenAI ImageGen | Não como screenshot ou evidência; apenas transição/manifesto visual. |
| `assets/media/hero/hero-real-*.mp4` | Animação Higgsfield a partir de fotografia real | Não como filmagem documental; usar como abertura editorial. |
| Logos e gráficos vetoriais | Masters oficiais da marca | Sim, conforme o brandbook. |

## Materiais reais disponíveis

- **OREN:** demonstração com headset, revisão em laboratório, visualizador 3D em diferentes estados e painéis de imagem médica.
- **Fraturas de fêmur:** dashboard geral, mapa, hotspots, tendências e fluxo territorial.
- **eFAST em VR:** validação presencial, pessoas utilizando o headset, simulação em execução e desenvolvimento em Unreal Engine.

Não há fotografias ou screenshots reais de SAMU Marialva, auditoria GSUS ou engenharia de dados neste pacote. Esses cases devem permanecer text-only até novo acervo ser fornecido.

## Hero em vídeo

- Ferramenta: Higgsfield.
- Modelo: Seedance 2.5.
- Job: `0ce3a68c-5612-4022-b1ab-439ed64b2477`.
- Duração: 6,04 segundos.
- Resolução master: 1920×1080.
- Áudio: não.
- Entrada: fotografia real `oren-validation-vr-original.jpg` recortada para 16:9.
- Custo registrado: 54 créditos.
- Entrega web: transcodificada para H.264, `yuv420p`, fast-start.

Prompt final:

```text
Use the supplied real photograph as the immutable visual source and first frame. Create a six-second silent cinematic website hero with a very slow controlled dolly-in and subtle lateral parallax. The real person makes only minimal natural breathing and a small believable hand movement. Keep the VR headset rigidly fitted. Keep the monitor, medical scan, room, cables, equipment, body, face, hands, clothing and all existing screen content unchanged and stable. Preserve realistic documentary lighting and natural textures. No cuts, no new objects, no text, no interface animation, no screen morphing, no anatomy changes, no extra fingers, no fake glow, no cyberpunk. Finish close to the starting composition so the clip can loop softly.
```

## Mosaico editorial assistido por IA

- Ferramenta: OpenAI ImageGen.
- Entradas: fotografia real do OREN, screenshot real do visualizador OREN, fotografia real de validação eFAST e screenshot real do dashboard de fêmur.
- Uso autorizado: transição visual da homepage, social card e introdução do portfólio.
- Uso proibido: prova de interface, resultado científico, demonstração de funcionamento ou reprodução pixel-perfect das telas.

Prompt final:

```text
Use case: compositing
Asset type: Heat On website cinematic hero master frame, 16:9 landscape
Primary request: build a sophisticated, energetic editorial montage using only the four supplied real project images. The real OREN photograph is the dominant human scene; the OREN visualizer, eFAST validation and femur dashboard appear as secondary evidence panels.
Composition: asymmetric full-bleed editorial layout, strong depth, dark negative space and one restrained Heat Orange line.
Constraints: preserve identities, anatomy, hands, headset, people, scans, interfaces, charts, maps and existing source content. Do not invent people, organs, equipment, data or text. No new text, glow, stock-photo look, medical cliché or watermark.
```

## Transformações mecânicas realizadas

- Renomeação para caminhos previsíveis e sem espaços.
- Conversão dos derivados para WebP.
- Criação de capas desktop em 16:10 e mobile em 4:5 quando o enquadramento permitiu.
- Preservação de versões horizontais quando o crop mobile destruiria informação relevante.
- Remoção de metadados dos derivados publicados.
- Transcodificação do master HEVC do hero para H.264 compatível com web.
- Criação de poster desktop/mobile e social cards.

## Limites de conteúdo e privacidade

- Não identificar pessoas retratadas por nome sem autorização específica.
- Não atribuir resultados clínicos ou institucionais às fotografias.
- Não publicar dados sensíveis, nomes de pacientes, prontuários ou identificadores.
- Confirmar internamente que a Heat On possui autorização de uso das fotografias com pessoas antes da publicação.
- Capturas e imagens médicas permanecem no contexto de pesquisa e desenvolvimento descrito no portfólio.

## Exclusões deliberadas

- Todos os seis visuais conceituais da versão 1.0 foram retirados desta entrega.
- Não foram criadas imagens substitutas para SAMU, GSUS ou engenharia de dados.
- Moodboards, imagens `cosmos_*`, conceitos e documentos técnicos internos do `.rar` original continuam excluídos.
- Nenhum retrato, cliente, parceiro, prêmio, depoimento ou número de impacto foi inventado.
