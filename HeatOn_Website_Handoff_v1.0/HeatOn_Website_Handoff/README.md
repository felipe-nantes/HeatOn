# Heat On - Website handoff

Pacote de identidade, imagens e instrucoes para criar o site institucional da Heat On com a linguagem editorial e imersiva observada em [colossal.com](https://colossal.com/), adaptada a uma empresa de software, dados e inteligencia aplicada a saude.

## Comece por aqui

1. Entregue ao Claude todo este diretorio.
2. Mande-o ler `01_CLAUDE_CONTEXT_AND_PLAN.md` por completo.
3. A primeira resposta do Claude deve ser somente o plano de implementacao, sem codigo.
4. Depois de aprovar o plano, use `02_ASSET_PLACEMENT_MAP.md` como contrato de composicao.
5. O texto-base esta em `03_CONTENT_MODEL_PTBR.md`.

## Arquivos principais

- `01_CLAUDE_CONTEXT_AND_PLAN.md`: prompt/contexto completo para o Claude.
- `02_ASSET_PLACEMENT_MAP.md`: onde cada asset entra no site, no desktop e no mobile.
- `03_CONTENT_MODEL_PTBR.md`: arquitetura de conteudo e copy inicial.
- `04_MOTION_AND_INTERACTION_SPEC.md`: comportamento, animacao e acessibilidade.
- `05_PROVENANCE_AND_PROMPTS.md`: origem e limites de uso dos visuais.
- `assets/tokens/design-tokens.json`: tokens canônicos da marca.
- `assets/tokens/asset-manifest.json`: inventario legivel por maquina.
- `assets/tokens/generation-prompts.json`: prompts finais e reprodutiveis dos assets gerados.
- `source/HeatOn_Brandbook_v1.0.pdf`: brandbook original.
- `source/portfolio_saude.md`: portfolio original fornecido.

## Regra de fidelidade

Replicar a estrutura, o ritmo, a escala tipografica e os principios de interacao da referencia. Nao copiar codigo, imagens, textos, nomes de classes ou elementos proprietarios da Colossal. Toda a identidade visual entregue neste pacote e propria da Heat On.

## Nota sobre o hero em video

O video cinematografico foi gerado e seu endereco de origem esta em `assets/media/hero/hero-video-source.json`. Durante o desenvolvimento, baixe-o para o caminho local indicado nesse arquivo. Em producao, nao faca hotlink: sirva o MP4 pelo mesmo dominio/CDN do site. O poster local permite implementar e validar a pagina mesmo antes do download.
