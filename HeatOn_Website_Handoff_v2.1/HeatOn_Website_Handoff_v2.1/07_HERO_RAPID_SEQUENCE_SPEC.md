# Hero em sequência rápida — contrato de implementação

## Resultado aprovado

O pacote contém seis novas tomadas Higgsfield de 3,04 segundos, todas derivadas do acervo real, e duas montagens finais de 6,04 segundos em cortes secos:

- Desktop: `assets/media/hero/sequence/hero-rapid-sequence-preview.mp4` — H.264, 1280×720, 24 fps, sem áudio.
- Mobile: `assets/media/hero/sequence/hero-rapid-sequence-preview-mobile.mp4` — H.264, 1080×1350, 24 fps, sem áudio.

Para produção, use esses MP4 já concatenados. Os seis arquivos independentes existem para um recut posterior; não alterne seis tags `<video>` durante a reprodução.

## Seis novas tomadas

| ID | Arquivo | Origem real | Movimento | Trim seguro recomendado | Papel narrativo |
|---:|---|---|---|---|---|
| 01 | `sequence/clips/01-oren-lab-review.mp4` | Foto de revisão do OREN no laboratório | Dolly lateral e push-in discretos | `00:00.40–00:01.30` | Trabalho humano e validação. |
| 02 | `sequence/clips/02-oren-anatomy-interface.mp4` | Captura real do visualizador OREN | Push-in no fígado com leve órbita | `00:00.25–00:01.15` | Produto e anatomia 3D. |
| 03 | `sequence/clips/03-femur-dashboard-overview.mp4` | Dashboard real de fraturas de fêmur | Slide diagonal e aproximação curta | `00:00.35–00:01.10` | Dados, indicadores e território. |
| 04 | `sequence/clips/04-femur-hotspots.mp4` | Mapa real de hotspots/coldspots | Pan controlado sobre mapa e matriz | `00:00.35–00:01.10` | Inteligência espacial. |
| 05 | `sequence/clips/05-efast-validation.mp4` | Foto real da sessão de validação eFAST | Arco sutil ao redor da usuária | `00:00.35–00:01.25` | Validação presencial e realidade virtual. |
| 06 | `sequence/clips/06-efast-simulation.mp4` | Captura real da simulação eFAST | Dolly lento dentro do ambiente virtual | `00:00.30–00:01.30` | Simulação médica em execução. |

Todos os caminhos da tabela são relativos a `assets/media/hero/`.

## Timeline aprovada da montagem

| Tempo final | Plano | Fonte e trim |
|---|---|---|
| `00:00.00–00:00.85` | OREN em uso | `hero-real-loop-h264.mp4`, `00:00.60–00:01.45` |
| `00:00.85–00:01.75` | OREN — anatomia | `02-oren-anatomy-interface.mp4`, `00:00.25–00:01.15` |
| `00:01.75–00:02.65` | OREN — laboratório | `01-oren-lab-review.mp4`, `00:00.40–00:01.30` |
| `00:02.65–00:03.40` | Fêmur — visão geral | `03-femur-dashboard-overview.mp4`, `00:00.35–00:01.10` |
| `00:03.40–00:04.30` | eFAST — validação | `05-efast-validation.mp4`, `00:00.35–00:01.25` |
| `00:04.30–00:05.05` | Fêmur — hotspots | `04-femur-hotspots.mp4`, `00:00.35–00:01.10` |
| `00:05.05–00:06.05` | eFAST — simulação | `06-efast-simulation.mp4`, `00:00.30–00:01.30` |

Não adicionar dissolves: os cortes secos são parte da direção. O loop pode voltar diretamente da simulação para o OREN; o contraste funciona como reinício da sequência.

## Posicionamento no hero

- Mídia full-bleed em `100svh`, com `object-fit: cover`.
- Wordmark e copy ficam em camada separada, nunca incorporados ao vídeo.
- Overlay Deep Carbon entre 18% e 32%; usar gradiente localizado apenas se a copy perder contraste.
- Não aplicar zoom, parallax, blur ou color grading em runtime.
- Não inserir labels sobre rostos, headset, fígado, mapas ou janela de ultrassom.
- O conteúdo narrativo da seção deve explicar os projetos; o vídeo é decorativo e pode usar `aria-hidden="true"`.

## Carregamento e fallback

1. Renderizar `hero-real-poster.webp` ou `hero-real-poster-mobile.webp` imediatamente.
2. Escolher a fonte desktop ou mobile antes do download.
3. Fazer crossfade único de 250–400 ms entre poster e vídeo pronto.
4. Usar `muted`, `playsInline`, `loop`, `preload="metadata"` e sem controles visíveis.
5. Em `prefers-reduced-motion: reduce` ou `Save-Data`, não baixar nem reproduzir MP4.
6. Se a montagem rápida falhar, usar `hero-real-loop-h264.mp4`/`hero-real-loop-mobile-h264.mp4` como fallback de vídeo.

## Regras para um recut futuro

- Duração de plano: 0,65–1,10 s; o plano humano pode chegar a 1,25 s.
- Alternar humano → interface → humano → dados → humano → dados → simulação.
- Cortar antes de qualquer mudança interna mais perceptível em textos, rostos ou anatomia.
- Não acelerar os clipes acima de `1.25×`; prefira trims mais curtos.
- Não usar optical flow, morph, frame interpolation ou transição gerativa.
- Manter 24 fps, H.264, `yuv420p`, fast-start e ausência de áudio.

## Registro técnico

Jobs, prompts completos, custo, source frames, posters e crops mobile estão em `assets/media/hero/sequence/sequence-metadata.json`. A classificação de uso está em `05_PROVENANCE_AND_PROMPTS.md`.
