# Motion e interação — v2.1

O movimento da Heat On mostra um sistema pensando. Nesta versão, ele também organiza e revela registros reais sem transformá-los em efeitos cenográficos.

## Regras globais

- Quieto por padrão.
- Quando ativo, somente um elemento externo à mídia recebe Heat Orange.
- Scientific Cyan marca observação ou referência; nunca compete com o laranja.
- Sem glow, bloom, neon, bevel, drop shadow ou partículas decorativas.
- Não animar conteúdo interno das capturas de interface.
- Não gerar profundidade falsa sobre rostos, mãos, números ou textos pequenos.
- Animações repetidas param ao sair da viewport.
- Hover nunca é requisito para compreender conteúdo ou acessar controles.

## Hero real em sequência rápida

1. `hero-real-poster.webp` aparece imediatamente.
2. Escolher `hero-rapid-sequence-preview.mp4` ou `hero-rapid-sequence-preview-mobile.mp4` antes do download; nunca baixar os dois.
3. Quando o vídeo estiver pronto, fazer crossfade de 250–400 ms.
4. Wordmark entra com `opacity` e `translateY` máximo de 16 px.
5. Uma linha de sinal percorre o eixo horizontal uma vez.
6. Microcopy aparece por último.

A montagem já contém sete planos, movimento sutil e cortes secos. Não adicionar zoom JS contínuo, parallax forte, speed ramp, crossfade ou filtro animado sobre ela. A ordem e os trims aprovados estão em `07_HERO_RAPID_SEQUENCE_SPEC.md`.

Configuração:

- `muted`, `playsInline`, `loop`, sem controles visíveis.
- `preload="metadata"` no desktop.
- Não autoplay com `prefers-reduced-motion`, `Save-Data` ou política de energia restritiva.
- Usar somente H.264 como fonte obrigatória. O HEVC é master e opcional.
- Servir o MP4 concatenado como fonte principal. Os seis arquivos de `sequence/clips/` são material de edição, não seis downloads simultâneos.
- Se o navegador não puder reproduzir a montagem, usar o vídeo OREN contínuo; se motion/dados estiverem restritos, usar apenas o poster.

## Header

- No hero: transparente, texto Cream e regras de baixa opacidade.
- Fora do hero: superfície Deep Carbon a 92–96% com blur moderado.
- Exibir `PAGE: HOME` e `SECTION: <NOME>` somente em desktop ou tablet amplo.
- `INDEX +` abre painel de navegação; o `+` vira `×` sem girar logos.

## Scroll global

- Priorizar scroll nativo e `IntersectionObserver`.
- Paralaxe máxima: 4% do deslocamento do elemento.
- Scale de imagens: `1 → 1.035` no máximo.
- Entrada editorial: `opacity 0 → 1` e `translateY 24px → 0`.
- Labels entram 80–120 ms antes dos títulos.
- Não travar seções em mobile.

## OREN — sequência de estados reais

Desktop:

- A foto de uso abre em full-bleed.
- Um container sticky mantém a mídia durante a explicação.
- Cada etapa troca o frame por crossfade de 280–450 ms.
- Ordem sugerida: uso real → revisão em laboratório → modelo realista → anatomia interna → segmentos → triagem → painéis de imagem médica.
- A imagem anterior pode reduzir para `opacity: 0`; não fazer morph entre órgãos ou telas.
- Uma label externa mostra o estado atual; não inserir texto dentro da captura.

Mobile:

- Fluxo vertical ou carrossel com botões anterior/próximo e posição anunciada.
- Não usar sticky acima de `120svh` e não capturar o gesto de scroll.
- Screenshots ultrawide podem usar overflow horizontal controlado ou lightbox.

## Fraturas de fêmur — exploração de dashboard

- Abrir com visão geral do dashboard intacta.
- Usar `object-position` e wrappers com overflow para aproximar regiões reais da captura.
- Sequência: visão geral → mapa e indicadores → hotspots → tendências → fluxo territorial.
- Scale máximo de 1.08 apenas dentro de viewport recortada, sem interpolar pixels por canvas.
- Não recontar números, animar barras, redesenhar mapas ou trocar cores internas.
- Sempre oferecer um botão `Ver captura completa` para usuários que queiram examinar a tela sem recorte.

## eFAST em VR — validação, experiência e construção

- A fotografia de validação entra primeiro e ocupa 70–85% da largura.
- Na transição, a fotografia reduz e a simulação aparece ao lado, estabelecendo a relação real ↔ virtual.
- O desenvolvimento em Unreal entra como terceiro plano, com reveal por máscara simples.
- Não fazer o paciente virtual “respirar”, falar ou mover por geração adicional.
- Não criar ultrassom, instrumento, ambiente ou HUD que não esteja nas capturas.
- Fotografias de pessoas recebem apenas crop e movimento de câmera da página; não aplicar distorção 3D.

## Cards dos projetos sem mídia

- SAMU, GSUS e engenharia de dados usam tipografia grande, regras, nodes e uma linha de progresso.
- O movimento pode revelar etapas, tags e relações textuais.
- Nenhum card deve abrir uma área vazia reservada a imagem inexistente.
- Um estado `MEDIA: NOT DOCUMENTED` pode aparecer em mono, sem tom de erro.

## Signal line

- Animar `stroke-dashoffset` da esquerda para a direita.
- O node terminal aparece somente quando a linha chega ao fim.
- Executar uma vez por entrada na seção; não loopar continuamente.

## Reduced motion e economia de dados

Quando `prefers-reduced-motion: reduce`:

- Não reproduzir vídeo automaticamente.
- Usar posters desktop ou mobile.
- Mostrar o primeiro frame de cada sequência e controles manuais para os demais.
- Remover paralaxe, smooth scroll e animações ligadas ao cursor.
- Manter somente fades de até 150 ms quando necessários ao feedback.

Quando `navigator.connection?.saveData === true`:

- Não baixar MP4 automaticamente.
- Priorizar WebP mobile.
- Não pré-carregar screenshots de etapas ainda distantes.

## Easing

- Entrada editorial: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Feedback curto: `cubic-bezier(0.2, 0, 0, 1)`.
- Nunca usar bounce ou elástico.
