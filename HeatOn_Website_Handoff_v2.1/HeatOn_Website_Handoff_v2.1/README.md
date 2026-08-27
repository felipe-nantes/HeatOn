# Heat On — Website handoff v2.1

Pacote real-first para construir o site institucional da Heat On com ritmo editorial e imersivo inspirado na referência estrutural de [colossal.com](https://colossal.com/), sem copiar código, imagens ou elementos proprietários.

## O que mudou

- Os seis visuais conceituais da versão anterior foram removidos.
- OREN, fraturas de fêmur e eFAST agora usam fotografias e capturas reais.
- O hero agora possui uma montagem rápida de 6,04 s formada pelo vídeo OREN original e seis novas tomadas Higgsfield.
- As seis novas tomadas cobrem OREN, dashboard de fraturas de fêmur e eFAST, sempre derivadas do acervo real.
- Foram incluídas montagens prontas H.264 para desktop e mobile, além dos seis clipes independentes para recorte.
- Foram criadas versões desktop, mobile, posters, social cards e inventário completo.
- SAMU, GSUS e engenharia de dados foram definidos como capítulos text-only até existirem registros reais.

## Comece por aqui

1. Entregue ao Claude todo este diretório.
2. Mande-o ler `01_CLAUDE_CONTEXT_AND_PLAN.md` por completo.
3. A primeira resposta do Claude deve ser somente o plano de implementação, sem código.
4. Depois de aprovar o plano, use `02_ASSET_PLACEMENT_MAP.md` como contrato de composição.
5. Leia `07_HERO_RAPID_SEQUENCE_SPEC.md` para implementar o hero em cortes rápidos.
6. Consulte `06_REAL_MEDIA_INVENTORY.md` para alt text, origem e uso de cada mídia.
7. Use `03_CONTENT_MODEL_PTBR.md` como copy inicial.

## Arquivos principais

- `01_CLAUDE_CONTEXT_AND_PLAN.md`: contexto e instrução de planejamento.
- `02_ASSET_PLACEMENT_MAP.md`: posição exata dos assets no desktop e mobile.
- `03_CONTENT_MODEL_PTBR.md`: arquitetura de conteúdo e copy inicial.
- `04_MOTION_AND_INTERACTION_SPEC.md`: comportamento, animação, reduced motion e Save-Data.
- `05_PROVENANCE_AND_PROMPTS.md`: origem, transformações, prompts e limites de uso.
- `06_REAL_MEDIA_INVENTORY.md`: inventário detalhado das fotografias, screenshots e derivados.
- `07_HERO_RAPID_SEQUENCE_SPEC.md`: ordem, trims, fallbacks e regras técnicas da nova montagem rápida.
- `assets/tokens/design-tokens.json`: tokens canônicos da marca.
- `assets/tokens/asset-manifest.json`: inventário legível por máquina.
- `assets/tokens/generation-prompts.json`: registro das transformações assistidas por IA, incluindo os seis novos clipes.
- `source/HeatOn_Brandbook_v1.0.pdf`: brandbook original.
- `source/portfolio_saude.md`: portfólio original.

## Prévia rápida

- `assets/cases/real-contact-sheet-desktop.jpg`
- `assets/cases/real-contact-sheet-mobile.jpg`
- `assets/media/hero/hero-video-contact-sheet.jpg`
- `assets/media/hero/sequence/hero-rapid-sequence-preview.mp4`
- `assets/media/hero/sequence/hero-rapid-sequence-preview-mobile.mp4`
- `assets/media/hero/sequence/sequence-posters-contact-sheet.jpg`
- `assets/media/hero/sequence/sequence-preview-contact-sheet-desktop.jpg`
- `assets/media/hero/sequence/sequence-preview-contact-sheet-mobile.jpg`

## Regra de fidelidade

Replicar a estrutura, ritmo, escala tipográfica e princípios de interação da referência. Não copiar código, imagens, textos, nomes de classes ou elementos proprietários da Colossal. A prova visual deve vir do acervo real e a identidade deve permanecer Heat On.

## Regra de mídia

- Materiais reais: podem documentar os projetos.
- Derivados WebP: podem ser usados diretamente no site.
- Mosaico assistido por IA: apenas editorial.
- Hero e clipes animados: abertura editorial baseada em fotografias e capturas reais, não filmagem documental contínua.
- Projetos sem acervo: tipografia e sistema gráfico, sem banco de imagens.
