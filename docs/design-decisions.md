# Decisões de design

Fase 2. Os tokens estão em `src/index.css` (`@theme`). A página de teste temporária é `src/dev/StyleGuide.tsx`.

## Direção
Um consultório calmo e claro, sem cara de hospital nem de spa.
- O papel off-white e o azul royal vêm da marca da cliente.
- O verde aparece só onde a ação é falar no WhatsApp.
- A cliente quer evitar dois extremos: o visual "frio e hospitalar" e o "luxo de spa/estética". Por isso o site não tem branco estourado, ciano clínico, dourado nem bege.

## Cores
| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `ink` | `#0f1b33` | texto, faixas escuras | 16,4:1 no papel |
| `ink-muted` | `#55607a` | texto secundário | 6,0:1 no papel |
| `paper` | `#fbfaf7` | fundo base (off-white quente, sem ficar creme) | — |
| `surface` | `#ffffff` | cards | — |
| `line` | `#dde2ec` | bordas, divisórias | — |
| `brand` / `brand-strong` | `#1f3fa8` / `#17307f` | cor da marca, botões, faixa | 8,6:1 no papel |
| `brand-soft` | `#e8eefa` | fundos de seção | ink 14,7:1 |
| `accent` | `#efebf7` | lilás, **só como tinta clara** em 1–2 fundos | ink 14,6:1 |
| `urgent` | `#b42318` | só o selo/faixa de urgência | branco 6,6:1 |
| `whatsapp` / `-strong` | `#157a3c` / `#0e6b35` | botões de WhatsApp | branco 5,4:1 |

**Por que o lilás é só tinta:** a spec pede lilás como acento, mas a taste-skill proíbe violeta. A cliente escolheu o meio-termo: o lilás aparece só como fundo bem claro.

**Por que o WhatsApp é verde:** o verde oficial `#25D366` com texto branco dá 2:1 e reprova no contraste. Por isso o verde foi escurecido até passar no AA.

## Tipografia
- **Display:** Source Serif 4 (variável, com eixo `opsz`), peso 400. É uma serifada calma e legível, que combina com o monograma CM.
  - Veio do deal da taste-skill para "health". A primeira opção sugerida era sans e foi descartada, porque a spec pede serifada.
- **Texto:** Libre Franklin (variável). Botões e rótulos usam 600.
- As duas fontes ficam no próprio site via `@fontsource-variable`, sem Google Fonts.
- **Escala fluida:** `text-display` (40→76px), `text-h2` (32→52px), `text-h3`, `text-lead`, `text-body` (17px), `text-small`, `text-label`.
- O `cn` (`src/lib/utils.ts`) conhece esses tamanhos. Sem isso, `text-h3` e `text-ink` se anulariam.

## Forma
- **Raios:** `sm` 8px, `md` 14px, `lg` 20px (cards), `xl` 32px.
- **Botões:** formato pílula. É mais acolhedor e menos clínico.
- **Sombras:** sempre com deslocamento e desfoque, tingidas de `ink`. Nunca halo nem sombra dura.
- **Espaçamento:**
  - `--spacing-section`: 72→144px entre seções.
  - `--spacing-gutter`: 16→40px nas laterais.
  - `container-site`: 1200px.
- **Botões:** variantes `whatsapp` (CTA de urgência), `outline` (avaliação), `default` (azul), `outline-inverse` (sobre fundo `ink`), `secondary`, `ghost`, `link`. A altura mínima é 44px.
  - Ao passar o mouse, o botão sobe 1px; ao clicar, afunda 1px. Os dois só acontecem com `motion-safe`.

## Superfícies do navegador
Seleção de texto, cursor de digitação, anel de foco (2px `brand`) e barra de rolagem usam a paleta. O sublinhado dos links tem 0,2em de distância do texto.

## Ícones
- Os ícones de interface vêm do lucide.
- Quatro ícones são desenhados à mão, no mesmo traço do lucide (grid 24, traço 2, sem preenchimento): `WhatsAppIcon`, `InstagramIcon`, `ToothIcon` e `BracesIcon`.
- `Monogram` é provisório, até a cliente enviar o logo [PENDENTE].

## Fotos
Até chegarem as fotos reais, o site usa um placeholder claro: uma moldura com o monograma, já na proporção final. Nada que pareça foto da doutora.

## Regras para as próximas fases
- Sem "eyebrow" (rótulo pequeno acima do título). Os campos `eyebrow` foram removidos de `content.ts`.
- Sem números de seção, texto em gradiente ou glassmorphism decorativo.
