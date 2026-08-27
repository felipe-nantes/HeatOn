# Dossiê de Referência — colossal.com

> Levantamento técnico e de design do site da Colossal Biosciences (capturado em 27/08/2026),
> para servir de base ao planejamento do site da empresa (projeto "heatonsite").
> **Importante:** replicaremos estrutura, layout, interações e linguagem visual — nunca textos,
> imagens, logos ou marca da Colossal. Todo o conteúdo virá do contexto e dos assets da empresa.

---

## 1. Stack técnica do site original

| Camada | Tecnologia observada |
|---|---|
| CMS | WordPress com tema 100% customizado (`wp-theme-colossal`) |
| CSS base | Bootstrap + CSS próprio por página (`style.css`, `media-queries.css`, `home.css`) |
| JS base | jQuery 3.3.1 |
| Animação de scroll | **ScrollMagic + GSAP (TweenMax v2)** + plugin `animation.gsap` + `jquery.scrollme` |
| Contadores animados | CountUp.js (estatísticas que sobem ao entrar na viewport) |
| Carrosséis | Slick Carousel 1.8.1 (depoimentos, notícias, espécies) |
| Vídeo | Vídeos de fundo autoplay/loop/muted hospedados no **Vimeo** (progressive mp4 + dash.js) |
| Formulários | Gravity Forms (newsletter no footer, com honeypot) |
| Extras | WP Popups (modal de newsletter), EmbedPress, banner de consentimento de cookies próprio |
| CDN/Proteção | Cloudflare |

**Decisão para o nosso projeto (a definir no planejamento):** não precisamos de WordPress.
Uma stack estática moderna (Astro / Next.js / Vite + HTML/CSS/JS) reproduz o mesmo resultado
com GSAP ScrollTrigger (sucessor moderno do ScrollMagic), mais leve e sem manutenção de CMS —
a menos que o cliente precise editar conteúdo sozinho.

## 2. Identidade visual (design system observado)

### Tipografia
- **Display / títulos:** NB Architekt (Std / Light) — fonte "técnica/engenharia", caixa alta,
  tamanhos gigantes (h2 ≈ 74px desktop), peso 300–500. Licença comercial.
- **Corpo / UI:** Telegraf (UltraLight 200 / Regular / Bold) — grotesca contemporânea. Licença comercial.
- **Alternativas de licença livre (Google Fonts)** para avaliar no planejamento:
  - NB Architekt → *Chakra Petch*, *Space Grotesk*, *Michroma*, *Rajdhani* (vibe técnica/blueprint)
  - Telegraf → *Archivo*, *Inter*, *Instrument Sans*, *Hanken Grotesk*
- Hierarquia: títulos enormes em caixa alta quebrados em várias linhas; labels pequenos
  monoespaçados/técnicos; corpo de texto estreito (colunas ~40–60ch).

### Cores
- Base clara: fundo branco `#fff`, texto quase-preto `#212529` / `#222`.
- Seções alternam blocos claros e blocos escuros (preto/quase-preto com texto branco) —
  o contraste claro/escuro por seção é parte central do ritmo visual.
- Sem cor de destaque saturada: a paleta é essencialmente P&B + fotografia/vídeo.
  (Adaptação: podemos introduzir 1 cor de marca da empresa como acento.)

### Elementos gráficos "assinatura" (o que dá a cara do site)
1. **Sistema de numeração técnica**: tudo é indexado como planta de engenharia —
   páginas (`001-00`, `002A-00`…), seções (`000-001`, `004-003`…), "Section 01", "Ref 0001",
   "VIDEO 001", "QUOTE 0002", "DATA SUBSET 009".
2. **Crosshairs "+"** espalhados como marcas de registro de impressão/blueprint.
3. **Linhas de barras `////////////////`** como divisores e prefixos de links (`//////// item >>`).
4. **Labels entre colchetes**: `[ SOURCE ]`, `[ QUOTE ]`, `[ nome-da-categoria ]`.
5. **Setas e indicadores de direção**: `>>`, `< View video`, "Scroll Right >>>>".
6. **Botões pill**: borda fina 1px cinza, raio 1000px, fundo transparente, texto Telegraf ~16px.
7. Texturas: imagens com outline/duotone, padrões de círculos, "prismatic film", QR code decorativo.
8. Estética geral: **"laboratório + documento técnico + editorial de luxo"** — muito espaço em
   branco, grids assimétricos, tipografia como imagem.

## 3. Navegação (padrão em todas as páginas)

- **Header fixo** minimalista: logo + menu numerado em colunas
  (`01 de-extinction … 08 news`) + botão **"Index +"**.
- **"Index +"** abre um **overlay/dialog fullscreen** com o sitemap completo (lista numerada de
  todas as páginas + links legais + redes sociais).
- **Navegação lateral persistente** ("Page: home / Page Section:"): indicador da página atual,
  lista "Page Navigation" (todas as páginas numeradas) e **"Page Sections for: X"** — âncoras
  numeradas para cada seção da página atual, atualizadas conforme o scroll. É o componente mais
  distintivo do site.
- **Footer**: newsletter (nome + email), contatos (geral/imprensa), links legais, redes sociais,
  copyright, crédito da agência.
- Modal popup de newsletter + banner de cookies (aceitar/rejeitar/customizar).

## 4. Arquitetura de informação (sitemap completo)

```
/                      Home
/de-extinction         Página-conceito (o problema + a solução)
/species               Índice de projetos/espécies
/mammoth               Detalhe de espécie (template repetido ↓)
/thylacine             Detalhe de espécie
/dodo                  Detalhe de espécie
/direwolf              Detalhe de espécie
/moa                   Detalhe de espécie
/bluebuck              Detalhe de espécie
/conservation          Conservação
/technology            Ciência & Tecnologia
/a-better-world        Visão/impacto
/company               Empresa (missão, valores, time, investidores)
/labs                  Laboratórios
/news                  Notícias/imprensa (+ posts individuais)
/advisors              Conselho consultivo
/education             Educação
/elephant-conservation Página de causa específica
/careers               Carreiras
/terms-of-use, /privacy-policy
```

**Mapeamento para a empresa (a definir com o contexto):** "espécies" → produtos/projetos/serviços;
"de-extinction" → página-conceito da proposta de valor; "technology" → metodologia/tecnologia;
"company" → institucional; "news" → blog/imprensa.

## 5. Estrutura por template (seção a seção)

### 5.1 Home (7 seções indexadas)
1. **Intro/Hero**: vídeo de fundo fullscreen, título gigante em caixa alta que enuncia o
   problema, subtítulo com a promessa da empresa, parágrafo de missão, CTA.
2. **O problema em números**: estatísticas com CountUp (por hora / por dia / por ano),
   percentuais gigantes, citações de fontes externas com link. Bloco escuro.
3. **A solução + projeto-bandeira**: definição da solução, transição visual (DNA), seção do
   produto principal com vídeo/imagem e CTA.
4. **Empresa/time**: fundadores com fotos, advisory board, CTA para página institucional.
5. **News**: lista das 6 últimas notícias (data + título + autor).
6. **Depoimentos**: carrossel horizontal ("Scroll Right >>>>") com citações de especialistas,
   navegação por tabs 1/2/3.
7. **Visão + parceiros**: cards de tópicos com "Learn More", grade de ~27 logos de parceiros
   (brancos sobre fundo escuro), newsletter.

### 5.2 Página-conceito (/de-extinction — 13 seções)
Hero editorial → dados de autoridade externa (números) → "definição antiga vs. nova"
(recurso de dicionário: termo, fonética, classe gramatical, definição) → pilares em 3 colunas →
manifesto tipográfico → aprofundamento com vídeo → estatísticas → ponte para outras páginas.

### 5.3 Índice de projetos (/species)
Hero + intro → **lista-menu de espécies** (`//////// nome >>`) → seção de pesquisa com citação
de especialista → **cards alternados por espécie**: nome popular + nome científico em itálico +
imagem + parágrafo + "Learn More" + crédito de fonte → bloco de redes sociais → depoimentos.

### 5.4 Detalhe de projeto (/mammoth — 13+ seções; template das espécies)
Hero cinematográfico com tagline → intro "Project 001" → vídeo destacado → **"5/10 Core Goals"**
(lista numerada 01–05) → biologia/especificações ("[Animal Specs]" — ficha técnica) →
comparativos (tabelas de 2 colunas) → processo passo-a-passo → habitat → linha do tempo →
notícias relacionadas → próxima espécie.

### 5.5 Tecnologia (/technology)
Hero → analogia narrativa (missão Apollo) → **"4 Steps"** em colunas → sistema em 3 pilares
numerados (01 Software / 02 Wetware / 03 Hardware) com tabs → seção histórica → CTA labs.

### 5.6 Empresa (/company — 15 seções)
Hero manifesto → citações de apoiadores → Missão + Objetivo (2 blocos) → **Core Values**
(4 valores em acordeão/lista com "+") → Compromissos → Liderança (fotos) → Carreiras →
Advisory Boards (científico/executivo/conservação) → Investidores → Parceiros universitários →
Cultura → Localizações.

### 5.7 News (/news)
Hero → vídeo compilação → 3 destaques grandes (1/3, 2/3, 3/3) → lista cronológica
(data + categoria + título + autor) com "Explore More" → eventos/palestras com citações →
podcasts.

## 6. Animações e interações (para replicar com GSAP ScrollTrigger)

- **Scroll-driven**: praticamente toda seção tem entrada animada (fade/slide/scale) disparada
  por ScrollMagic; títulos gigantes revelados por linha.
- **Parallax** em imagens e elementos decorativos (scrollme).
- **CountUp** nos números quando entram na viewport.
- **Carrosséis horizontais** com arrasto (depoimentos, destaques) + hint "Scroll Right >>>>".
- **Vídeos de fundo** autoplay muted loop (hero e seções-chave).
- **Overlay "Index"** fullscreen com transição.
- **Navegação lateral viva**: destaca a seção atual conforme o scroll (scrollspy).
- Hovers: botões pill invertem cor; links com `>>` deslizam.
- Acordeões "+" que expandem conteúdo (valores, specs).

## 7. Catálogo de componentes reutilizáveis (para o design system do novo site)

1. Header numerado + overlay Index
2. Sidebar de navegação por seções (scrollspy numerado)
3. Hero com vídeo de fundo + título gigante multilinhas
4. Bloco de estatísticas com CountUp
5. Card de "definição de dicionário"
6. Lista-menu com prefixo `////` e sufixo `>>`
7. Card de projeto/espécie (nome + nome científico + imagem + texto + CTA)
8. Ficha técnica "[Specs]"
9. Lista numerada de objetivos (01–05)
10. Pilares numerados com tabs (01/02/03)
11. Carrossel de citações com tabs de paginação
12. Card de notícia (data + categoria + título + autor)
13. Grade de logos de parceiros
14. Acordeão "+" de valores
15. Botão pill (primário/outline)
16. Formulário de newsletter (footer + modal)
17. Banner de cookies
18. Footer completo
19. Kit de ornamentos: crosshair `+`, divisor `////`, labels `[ ]`, códigos numéricos

## 8. Diretrizes de adaptação (obrigatórias)

- **Zero cópia de conteúdo**: nenhum texto, imagem, vídeo, logo ou nome da Colossal ou de seus
  parceiros entra no site final. Este dossiê descreve apenas estrutura e padrões.
- **Fontes**: Telegraf e NB Architekt são comerciais (Pangram Pangram). Ou o cliente compra a
  licença, ou usamos as alternativas do Google Fonts listadas na seção 2.
- **Conteúdo aguardando o cliente**: missão/manifesto, dados e estatísticas do setor (com
  fontes), lista de produtos/projetos (equivalente às "espécies"), time e fotos, depoimentos,
  logos de parceiros, notícias, textos legais, identidade visual (logo, cor de acento).
- **Vídeos**: precisaremos de vídeos institucionais do cliente (ou banco de imagens licenciado)
  para os heros; hospedar em Vimeo/Cloudflare Stream ou mp4 auto-hospedado.
- LGPD: banner de cookies e política de privacidade em pt-BR (assumindo empresa brasileira —
  confirmar idioma do site).

## 9. Pendências para o planejamento (aguardando contexto + assets)

1. Nome, segmento e proposta de valor da empresa ("heaton"?) — define o mapeamento do sitemap.
2. Identidade visual existente (logo, cores, fontes próprias?).
3. Idioma(s) do site (pt-BR? bilíngue?).
4. Quais páginas do sitemap da Colossal têm equivalente real na empresa (cortar o que não tem).
5. Necessidade de CMS (cliente edita conteúdo?) → define stack.
6. Hospedagem/domínio (há integração Vercel disponível neste ambiente).
7. Formulários: para onde vão os leads da newsletter/contato?
