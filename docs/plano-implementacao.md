# Plano de Implementação — Site Heat On v1.0

> Baseado em: `01_CLAUDE_CONTEXT_AND_PLAN.md`, brandbook v1.0 (36 pág.), `portfolio_saude.md`,
> `02_ASSET_PLACEMENT_MAP.md`, `03_CONTENT_MODEL_PTBR.md`, `04_MOTION_AND_INTERACTION_SPEC.md`,
> `design-tokens.json`, `asset-manifest.json` e no dossiê estrutural da referência
> (`docs/referencia-colossal.md`). Nenhum código será escrito antes da aprovação deste plano.

---

## 1. Diagnóstico do repositório e da stack

- O repositório é **greenfield**: contém apenas `docs/` (dossiê da referência) e o pacote
  `HeatOn_Website_Handoff_v1.0/`. Não há framework, lockfile ou build para preservar. Não é repositório git ainda (será inicializado).
- Referência estrutural (Colossal) usa WordPress + jQuery + ScrollMagic/GSAP — replicaremos o
  **efeito**, não a stack.

**Stack proposta (greenfield, TypeScript):**

| Camada | Escolha | Justificativa |
|---|---|---|
| Framework | **Astro 5 + TypeScript** | Site institucional estático de 1 rota; Astro entrega HTML semântico com **zero JS por padrão**, componentização, pipeline de imagens e crescimento futuro para páginas de projeto sem troca de stack. |
| Estilo | **CSS puro com custom properties** geradas de `design-tokens.json` (sem Tailwind/framework CSS) | O design system da Heat On é pequeno, preciso e proprietário; tokens → `:root` mantém o CSS auditável contra o brandbook. |
| Animação | **CSS transitions/animations + IntersectionObserver + 1 helper rAF** (sem GSAP/Lenis/Framer) | A spec de motion pede apenas: entradas `opacity/translateY 24px`, linha de sinal via `stroke-dashoffset`, paralaxe ≤4%, scale ≤1.035, scrollspy. Tudo coberto por CSS + IO + um rAF de ~40 linhas para a paralaxe. Biblioteca só seria peso morto — critério do handoff atendido. |
| Fontes | Manrope, Inter, IBM Plex Mono **self-hosted** (woff2, subset latin) | As três são open-source (OFL). Self-host evita request a terceiros (LGPD) e melhora LCP. |
| Deploy | Build estático (`dist/`); Vercel disponível via integração quando o usuário decidir publicar | Sem servidor; formulário fica visual até endpoint definido. |

## 2. Arquitetura de rotas, componentes e dados

**Rotas:** `/` (homepage única, todas as 11 seções) + `404`. Navegação por âncoras
(`#projetos`, `#capacidades`, `#metodo`, `#empresa`, `#contato`). Páginas de detalhe de projeto
ficam como extensão futura (a arquitetura de conteúdo já as suporta).

**Árvore de componentes:**

```
src/
  layouts/Base.astro          → <head>, metas, OG/Twitter, favicons, fontes, skip link
  components/
    SiteHeader.astro          → header fixo, links numerados, INDEX +, PAGE/SECTION
    IndexOverlay.astro        → painel de navegação fullscreen (dialog acessível)
    Hero.astro                → 100svh, poster→vídeo, wordmark, signal line, CTAs
    Manifesto.astro           → superfície Cream + crosshair de medição
    Territory.astro           → faixa Science×…×Intelligence + inventário "06"
    OrenFeature.astro         → case hero imersivo (PROJECT 01)
    ProjectsIndex.astro       → cases 02–06 numerados, fundos alternados
    CaseCard.astro            → unidade do índice (imagem, copy, metadados mono)
    Capabilities.astro        → grid de 12 capacidades + iconografia
    Method.astro              → 01 SIGNAL → 04 INSIGHT com waveform animada
    Principles.astro          → 5 compromissos, divisórias finas, Cream
    Contact.astro             → Deep Carbon + contour field + formulário visual
    SiteFooter.astro          → footer técnico
    ui/SectionLabel.astro     → label mono numerado (SECTION 0X / NOME)
    ui/PillButton.astro       → botão de contorno oval com "+" funcional
    ui/Reveal.astro           → wrapper de entrada no scroll (IO)
  content/site.ts             → TODO o copy tipado, espelhando 03_CONTENT_MODEL_PTBR.md
  styles/tokens.css           → gerado 1:1 de design-tokens.json
  styles/global.css           → reset, tipografia, grid, superfícies, utilitários
  scripts/motion.ts           → IO reveals, scrollspy, header, paralaxe, reduced-motion
public/assets/                → cópia fiel de assets/ do handoff (nomes preservados)
```

**Dados:** copy 100% em `content/site.ts` (nunca hardcoded no markup), para revisão dos sócios
sem tocar em componente. Metadados dos cases vêm de `asset-manifest.json`.

## 3. Mapeamento seção → assets (contrato de composição)

Segue exatamente `02_ASSET_PLACEMENT_MAP.md`:

| # | Seção | Superfície | Assets |
|---|---|---|---|
| 01 | `site-header` | transparente → Deep Carbon 92–96% + blur | `logo-horizontal-cream.svg` (desktop dark) / `logo-horizontal-deep.svg` (sobre Cream) / `symbol-cream.svg` (<120px, mobile) |
| 02 | `hero` | Deep Carbon + vídeo | MP4 `heaton-thermal-pulse-loop.mp4` (baixar conforme `hero-video-source.json`), posters `hero-poster.webp` / `hero-poster-mobile.webp` |
| 03 | `manifesto` | Cream | `measurement-crosshair.svg` ao fundo; logo deep |
| 04 | `territory` | Deep Carbon | `scientific-grid.svg` + `nodes-data-points.svg` (grid só, no mobile) |
| 05 | `oren-feature` | Deep Carbon | `case-01-oren.webp` / `-mobile`; legenda "REPRESENTAÇÃO CONCEITUAL" |
| 06 | `projects` | alternando | `case-02`…`case-06` desktop/mobile, ordem e lados da tabela do mapa |
| 07 | `capabilities` | Cream | `iconography-set.svg` (stroke e cores preservados) |
| 08 | `method` | Deep Carbon | `waveform-signal.svg` (esquerda→direita, node no final, nunca espelhar) |
| 09 | `principles` | Cream | sem raster; grid + tipografia |
| 10 | `contact` | Deep Carbon | `contour-field.svg` (opacidade baixa) + `logo-scientific-signature.svg` |
| 11 | `footer` | Deep Carbon | `logo-horizontal-cream.svg` / `symbol-cream.svg` |

Metas sociais: `og-home.png` e `twitter-card.png`. Favicons: `favicon.ico`, `favicon-32.png`,
`favicon-symbol.svg`, `apple-touch-icon.png`.

**Exclusões (nunca entram):** versões com glow, `cosmos_*`, páginas do brandbook como imagem,
qualquer asset da Colossal, capturas falsas de dashboard, seções de equipe/depoimentos/logos de
clientes/métricas de impacto (dados não fornecidos).

## 4. Responsividade e acessibilidade

**Breakpoints (tokens):** mobile ≤767 / tablet 768–1199 / desktop ≥1200. Grid 12 col desktop,
8 tablet, 4 mobile; `max-width` 1600px; padding e gutter em `clamp()` dos tokens.

- Desktop: header completo com PAGE/SECTION, composições assimétricas, cases lado a lado.
- Tablet: hierarquia preservada, paralaxe reduzida, menos metadados simultâneos.
- Mobile: menu drawer (mesmo dialog do INDEX), cases em fluxo vertical com `*-mobile.webp`,
  símbolo no lugar do logo completo, hero com poster mobile.
- Títulos com `clamp()` fluido + `text-wrap: balance` — **nenhuma quebra manual obrigatória**.
- Hero: `min-height: 100svh` (com fallback `100vh` para navegadores antigos).

**Acessibilidade (WCAG AA):**
- HTML semântico (`header/nav/main/section/footer`, headings hierárquicos: 1 display, máx. 2 níveis por página — regra do brandbook).
- Skip link, foco visível (outline em Heat Orange sobre escuro / Deep sobre claro), navegação
  completa por teclado incluindo índice de projetos e overlay INDEX (focus trap, `Esc` fecha,
  `+`→`×` sem rotacionar logo).
- Vídeo: `muted playsinline loop`, sem áudio, `aria-hidden` (decorativo), poster sempre presente.
- Imagens de case com `alt` descritivo + legenda acessível "Representação conceitual do projeto".
- Contraste: Cream sobre Deep Carbon ≈ 17:1; cyan/laranja nunca como única distinção de estado.
- `prefers-reduced-motion`: detalhado na seção 7.

## 5. Vídeo, imagens, fontes e performance

**Vídeo hero:** baixar o MP4 (8,1 MB, 8 s, 1080p, sem áudio) da URL registrada em
`hero-video-source.json` para `public/assets/media/hero/heaton-thermal-pulse-loop.mp4`
(self-host obrigatório; produção nunca hotlinka o CloudFront). Estratégia de carga:
1. Poster webp renderiza imediatamente (é o candidato a LCP: `fetchpriority=high`, preload).
2. Vídeo com `preload="none"`; JS injeta o `src` após `load` + viewport ativa, e faz crossfade
   só no `canplaythrough` (spec de abertura, 900–1300 ms percebidos).
3. Mobile/`Save-Data`/reduced-motion: fica no poster; fallback documentado (animar waveform).
4. Se o link CloudFront tiver expirado, o site funciona 100% com poster — risco já mitigado.
5. Opcional (se ffmpeg disponível): reencodar para ~3–4 MB CRF 28 + variante 720p mobile.

**Imagens:** webp dos cases já otimizados (23–157 KB); `width/height` declarados em tudo
abaixo da dobra + `loading="lazy" decoding="async"` (CLS < 0,1). SVGs decorativos inline apenas
quando animados (signal, crosshair); demais via `<img>`/CSS background.

**Fontes:** woff2 subset latin, self-hosted, `font-display: swap`; preload só dos pesos críticos
(Manrope 200/600, Inter 400, Plex Mono 400); demais pesos carregam sob demanda. Fallback stack
métrico (`system-ui`, `ui-monospace`) para minimizar CLS de swap.

**Metas:** LCP < 2,5 s (poster), CLS < 0,1, JS total < 15 KB gzip (só `motion.ts` + overlay),
sem bibliotecas de terceiros em runtime, sem tracking (nenhum analytics foi solicitado — sem
cookie banner necessário nesta fase).

## 6. Sistema de tokens e estados de cor

`design-tokens.json` → `styles/tokens.css` (`:root`), preservando os papéis semânticos:

- `--color-structure` Deep Carbon `#0E0E10` — superfícies escuras, nunca acento.
- `--color-information` Cream `#FFF4E6` — texto e superfícies claras.
- `--color-activity` Heat Orange `#FF6A1A` — **um elemento ativo por vez** (hover/foco/item
  ativo do grid de capacidades/node terminal). Regra aplicada por revisão de componente.
- `--color-transition` Amber, `--color-edge` Coral (raro), `--color-measurement` Cyan (nunca
  domina o laranja), `--color-inactive` / `--color-grid` cinzas.
- Gradiente térmico: definido uma vez; permitido só no símbolo, em traços finos e no máximo em
  uma superfície hero. **Nunca atrás de texto corrido** (guard: nenhuma classe utilitária de
  gradiente aceita children de texto).
- Tipografia por papel: `--font-display/heading` Manrope (tracking −0.03/−0.02em),
  `--font-body` Inter (16–18px, lh 1.6), `--font-data` Plex Mono (uppercase, tracking 0.18em).
  Escala do brandbook: Display 72/76 ExtraLight · H1 44/52 SemiBold · H2 30/40 Medium ·
  Body 18/30 · Label 13/18 · Metadata mono 13/20 — convertida em `clamp()` fluido.
- Camadas gráficas com `z-index` tokenizado na ordem fixa: contour → grid → nodes → signal →
  conteúdo (nunca invertida).
- Estados: `:hover` desloca imagem ≤2% e escala ≤1.02; `:focus-visible` sempre visível; ativo =
  laranja; medição = cyan; inativo = cinza. Sem glow/shadow/bevel em qualquer estado.

## 7. Plano de animação por seção (e reduced motion)

Global: easing editorial `cubic-bezier(0.22,1,0.36,1)`, feedback `cubic-bezier(0.2,0,0,1)`,
durações 150/420/850 ms dos tokens; animar só `transform`/`opacity`; animações param fora da
viewport (IO desconecta); **nada em loop** exceto o vídeo.

| Seção | Comportamento |
|---|---|
| Hero | Sequência: poster imediato → crossfade do vídeo quando pronto → logo (opacity + Y mínimo) → signal line percorre 1× → microcopy. Total percebido 900–1300 ms, sem bloquear interação. |
| Header | Transparente sobre o hero; ao sair (IO no hero), ganha superfície + blur e revela `PAGE: HOME / SECTION: <nome>` (scrollspy via IO nas 11 seções, desktop/tablet). `+`→`×` no INDEX. |
| Manifesto | Label mono entra 80–120 ms antes do headline; crosshair estático (só fade). |
| Territory | Faixa entra por reveal; nodes acendem em sequência (1 laranja por vez). |
| OREN | Reveal por clip-path 600–900 ms; fatias separam 8–16 px no eixo X conforme scroll (rAF, sem rotação). |
| Projects | Cada case: reveal de máscara + entrada de copy; hover desloca ≤2%, escala ≤1.02, `+` como único acento. Touch: estado completo sem hover. |
| Capabilities | Grid entra em cascata curta; item ativo (hover/foco) recebe o laranja — único da seção. |
| Method | `waveform-signal.svg` inline: `stroke-dashoffset` esquerda→direita 1× por entrada; node terminal aparece só no fim; passos 01–04 revelam em sequência. |
| Principles | Divisórias finas “desenham” (scaleX) + fade dos itens. |
| Contact | Contour field em fade; anel do CTA expande **uma vez** ao entrar (não pulsa em loop). |
| Paralaxe | Elementos decorativos ≤4% de deslocamento, desktop apenas, via rAF com `transform`. |

**`prefers-reduced-motion: reduce`:** vídeo não autoplay (poster fixo), zero paralaxe/scale/
clip-path/sequências; apenas fades ≤150 ms para feedback; scrollspy e toda a informação
permanecem; implementado por media query central que zera as custom properties de motion.

## 8. Fases de implementação, critérios de aceite e testes

Cada fase termina com verificação no browser pane (desktop 1280+ e mobile 375, light/dark não
se aplica — o site define suas superfícies), console limpo e commit.

| Fase | Entrega | Critérios de aceite |
|---|---|---|
| **F0 — Fundação** | Scaffold Astro+TS, `git init`, cópia de `assets/`, tokens.css, global.css, fontes subset, Base.astro (metas/OG/favicons/skip link), `content/site.ts` completo | Build roda; página vazia com tipografia/superfícies corretas; tokens = brandbook; HTML valida; zero JS |
| **F1 — Header + Hero + Footer** | SiteHeader, IndexOverlay, Hero (poster→vídeo), SiteFooter | Hero 100svh com poster como LCP; crossfade só com vídeo pronto; header transiciona ao sair do hero; INDEX acessível por teclado; reduced-motion = poster; download do MP4 concluído e servido localmente |
| **F2 — Superfícies editoriais** | Manifesto, Territory, Principles, Contact (form visual), footer completo | Copy 1:1 com `03_CONTENT_MODEL`; contraste AA; camadas gráficas na ordem; form navegável por teclado (sem submit real) |
| **F3 — Cases** | OrenFeature + ProjectsIndex/CaseCard (02–06) | Ordem/lados/superfícies conforme mapa; legendas "representação conceitual"; webp mobile no mobile; hover/touch conforme spec |
| **F4 — Capabilities + Method** | Grid de capacidades + iconografia; waveform animada | 12 capacidades; 1 item laranja por vez; signal line 1×, nunca espelhada, node no fim |
| **F5 — Motion & scrollspy** | motion.ts final: reveals, paralaxe ≤4%, PAGE/SECTION, polimento das sequências | Todas as animações nos limites da spec; param fora da viewport; reduced-motion total |
| **F6 — QA final** | Auditoria de acessibilidade, performance e paridade | Checklist da seção 10 verde; LCP<2,5s e CLS<0,1 no preview de produção; teclado 100%; console limpo em todas as viewports |

**Testes contínuos:** preview de produção (`astro build && preview`) no browser pane;
emulação mobile (375px) e tablet; `prefers-reduced-motion` via emulação; navegação por Tab
completa; leitura do DOM (read_page) para validar semântica/landmarks; network requests para
confirmar lazy loading e ausência de terceiros.

## 9. Riscos, dependências e informações ausentes

| Item | Impacto | Mitigação/decisão pendente |
|---|---|---|
| **Endpoint do formulário** (destino, consentimento LGPD, mensagens de sucesso/erro) | Contato fica visual | Handoff já autoriza form visual; definir antes da publicação |
| **URL CloudFront do vídeo pode expirar** | Hero sem vídeo | Baixar na F1 (primeira ação após aprovação); fallback de poster já especificado |
| Revisão do copy pelos sócios | Textos são "iniciais" | Copy centralizado em `site.ts` → revisão barata |
| Domínio/hospedagem não definidos | Sem publicação | Build estático roda em qualquer host; Vercel disponível quando decidir |
| E-mail/endereço/redes sociais da Heat On não fornecidos | Footer/contato enxutos | Regra do handoff: não inventar — entram quando fornecidos |
| Páginas internas de projeto (futuro) | Fora do escopo v1 | Arquitetura já preparada (content model tipado + rota dinâmica futura) |
| Analytics/SEO técnico além de metas OG | Não solicitado | Sem trackers; sitemap/robots entram na F6 (custo zero) |

**Aprovar este plano autoriza também:** o download único do MP4 do hero
(`hf_20260827_…mp4`, 8,1 MB, CloudFront listado em `hero-video-source.json`) para self-host,
conforme instrução do próprio handoff.

## 10. Checklist final de paridade visual e QA

**Paridade com a referência (ritmo/estrutura):**
- [ ] Hero cinematográfico fullscreen com header sobreposto
- [ ] Navegação técnica numerada + INDEX overlay + PAGE/SECTION vivo no scroll
- [ ] Labels monoespaçados numerados em todas as seções; regras finas
- [ ] Alternância clara/escura entre superfícies editoriais e imersivas
- [ ] Imagens em escala com recortes assimétricos e reveals suaves
- [ ] Índice de projetos navegável (mouse, touch e teclado)
- [ ] Botões de contorno oval com `+` funcional

**Identidade Heat On (teste do "sem texto"):**
- [ ] Removendo o texto, a página ainda é Heat On: pulso térmico, grid científico, papéis
      semânticos de cor, quietude por padrão
- [ ] Um único elemento laranja ativo por vez, em qualquer estado da página
- [ ] Cyan nunca domina; gradiente nunca atrás de texto; zero glow/shadow/bounce
- [ ] Logos: master correto por superfície, clear space ≥1x node, símbolo abaixo de 120px
- [ ] Tagline apenas "Scientific Intelligence in Motion", nunca traduzida

**QA técnico:**
- [ ] LCP < 2,5 s · CLS < 0,1 · JS < 15 KB gzip · zero requests de terceiros
- [ ] WCAG AA: contraste, foco, skip link, teclado, landmarks, headings
- [ ] `prefers-reduced-motion` íntegro; vídeo nunca obrigatório
- [ ] Mobile 375 / tablet 768 / desktop 1280–1600+ sem quebras manuais
- [ ] Cases com legenda "representação conceitual"; nenhum dado/depoimento inventado
- [ ] Console limpo; imagens com dimensões; lazy loading abaixo da dobra
- [ ] OG/Twitter cards e favicons servidos dos masters aprovados

---

*Aguardando aprovação humana para iniciar a F0. Nenhum código foi gerado.*
