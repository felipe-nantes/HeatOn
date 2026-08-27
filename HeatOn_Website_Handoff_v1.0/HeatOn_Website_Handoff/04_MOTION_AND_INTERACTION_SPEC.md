# Motion e interacao

O movimento da Heat On mostra um sistema pensando. Ele deve explicar estado, direcao ou progresso.

## Regras globais

- Quieto por padrao.
- Quando ativo, apenas um elemento recebe Heat Orange.
- Scientific Cyan marca observacao/referencia; nunca compete com o laranja.
- Quando algo importa, um anel expande uma vez. Nao fica pulsando em loop.
- Sem glow, bloom, neon, bevel, drop shadow ou particulas decorativas aleatorias.
- Animacoes repetidas devem parar quando saem da viewport.

## Sequencia de abertura

1. Poster aparece imediatamente.
2. Video faz crossfade somente depois de pronto.
3. Logo entra com `opacity` e deslocamento vertical minimo.
4. Uma linha de sinal percorre o eixo horizontal uma vez.
5. Microcopy aparece por ultimo.

Duracao total percebida: 900-1300 ms. Nao atrasar interacao.

## Header

- No hero: transparente, texto cream, regras brancas com baixa opacidade.
- Fora do hero: superficie Deep Carbon a 92-96% com backdrop blur moderado.
- Exibir `PAGE: HOME` e `SECTION: <NOME>` apenas em desktop/tablet amplo.
- `INDEX +` abre um painel de navegacao; `+` vira `x` sem rotacionar o logo ou outros simbolos.

## Scroll

- Priorizar scroll nativo.
- Paralaxe maxima: 4% do deslocamento do elemento.
- Scale de imagens: 1.00 -> 1.035 no maximo.
- Entradas: `opacity` 0 -> 1 e `translateY` 24 px -> 0.
- Labels podem entrar 80-120 ms antes dos titulos.
- Nao travar secoes em mobile.

## Cases

- Desktop: reveal por mascara/clip-path simples, 600-900 ms.
- Hover: imagem escala no maximo 1.02; `+` e o unico acento ativo.
- Mobile/touch: estado completo visivel, sem depender de hover.
- OREN: as fatias podem separar 8-16 px no eixo horizontal conforme o scroll, sem girar o orgao.
- Data engineering: planos de transformacao aparecem em sequencia, da esquerda para a direita.

## Signal line

- Animar `stroke-dashoffset` da esquerda para a direita.
- O node terminal aparece somente quando a linha chega ao fim.
- Executar uma vez por entrada na secao; nao loopar continuamente.

## Reduced motion

Quando `prefers-reduced-motion: reduce`:

- Nao reproduzir o video automaticamente.
- Usar `hero-poster.webp`/`hero-poster-mobile.webp`.
- Remover paralaxe, smooth scroll e animacoes ligadas ao cursor.
- Manter somente fades de ate 150 ms, se necessarios para feedback.
- Todas as informacoes e controles permanecem disponiveis.

## Easing sugerido

- Entrada editorial: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Feedback curto: `cubic-bezier(0.2, 0, 0, 1)`.
- Nunca usar bounce/elastico.

