# Trinca Engenharia | Landing Page (`trincaeng-lp`)

Landing page institucional e simulador de viabilidade de construções financiadas da **Trinca Engenharia / Trinca Construtora** (`@trincaengenharia`), sediada em Maringá, Paraná.

## Sobre a empresa

- **Nome fantasia**: Trinca Engenharia / Trinca Construtora
- **Razão social**: Trinca Construtora Ltda (CNPJ `65.754.742/0001-58`) e Trinca Serviços Ltda (CNPJ `65.778.057/0001-61`)
- **Foco de atuação**: Construções residenciais financiadas (da aprovação do financiamento à entrega das chaves, incluindo Aquisição de Terreno e Construção e Construção em Terreno Próprio pela Caixa Econômica Federal nas faixas Minha Casa Minha Vida 2026 e SBPE) e obras comerciais/corporativas em Maringá e região.
- **Endereço**: Av. XV de Novembro, 462, Edifício Metrópole (Pavimento 02, Sala 03 / Loja 21), Zona 01, Maringá/PR, CEP `87013-230`
- **Canais oficiais**: WhatsApp `(44) 99879-3999`, telefone fixo `(44) 3025-4006` e Instagram [`@trincaengenharia`](https://www.instagram.com/trincaengenharia/)

## Estrutura do código

O projeto foi organizado em camadas separadas para simplificar a manutenção humana:

- `src/data/`: dados factuais desacoplados da camada visual:
  - `company.ts`: credenciais jurídicas, endereço, telefones e links.
  - `portfolio.ts`: obras residenciais e comerciais (`Obra Genebra`, `Obra Siena`, `Obras Mercedes`, `Obras GWM`) e memoriais descritivos.
  - `engineeringStandards.ts`: protocolos construtivos (amarração de platibanda e laje, hidráulica pressurizada, tubulação de gás embutida e impermeabilização de baldrame).
  - `processSteps.ts`: as 6 fases operacionais desde a escolha do lote até o Habite-se.
  - `faq.ts`: dúvidas recorrentes sobre terreno parcelado, comprovação de renda para autônomos/MEI e faixas MCMV 2026.
- `src/lib/`: regras de cálculo puras e testadas:
  - `simulator.ts`: cálculo de enquadramento nas faixas MCMV 2026 (Faixas 1 a 4 até R$ 600 mil) e SBPE, comparativo patrimonial de custo por m² frente a imóvel pronto e montagem de mensagens pré-preenchidas para WhatsApp.
  - `structuredData.ts`: geração do grafo JSON-LD (`GeneralContractor` e `FAQPage`).
- `src/components/`: seções modulares da página (`SiteHeader`, `HeroSection`, `SimulatorSection`, `ModalitiesSection`, `PortfolioSection`, `EngineeringNotebookSection`, `ProcessTimelineSection`, `FaqSection`, `ContactSection`, `Footer`, `TrincaLogo`).
- `src/fontes/`: fontes variáveis `.woff2` servidas localmente (`Space Grotesk`, `Plus Jakarta Sans` e `JetBrains Mono`).
- `scripts/og-image.html` e `scripts/og-image.mjs`: fonte e gerador da imagem de compartilhamento `public/og-image.png` (1200x630). Depois de editar o HTML, rode `npm run og-image`.
- `scripts/prerender.mjs`: script de pós-build que injeta o HTML renderizado em servidor dentro de `dist/index.html`, adiciona `<link rel="preload">` para as fontes com hash e atualiza a data do `sitemap.xml`.

## Como executar e validar

```bash
npm install
npm run dev          # Servidor de desenvolvimento Vite
npm run check        # Executa oxlint, tsc -b e vitest run
npm run build        # Gera o pacote estático pré-renderizado em dist/
```

## Publicação

O deploy roda pelo GitHub Actions (`.github/workflows/pages.yml`) a cada push na `main` e publica em [trincaconstrutora.com.br](https://trincaconstrutora.com.br/) pelo GitHub Pages. O arquivo `public/CNAME` guarda o domínio e a zona DNS fica no Registro.br:

| Tipo | Nome | Dados |
|---|---|---|
| A | `trincaconstrutora.com.br` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA | `trincaconstrutora.com.br` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www.trincaconstrutora.com.br` | `pedrosatin.github.io` |
