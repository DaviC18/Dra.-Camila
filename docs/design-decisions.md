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

## Fotos e logo
- Os originais da cliente estão em `assets-originais/` e não são publicados. O site usa as versões WebP em `public/images/`.
- **Hero:** foto da recepção, só no desktop. A parede azul com o logo CM combina com o `brand`. No celular, o título, o CTA e o selo precisam caber na primeira tela.
- **Sobre:** foto da doutora.
- **Logo:** `logo.png` da cliente (CM azul, fundo transparente), em `logo-128.webp`.

## Regras para as próximas fases
- Sem "eyebrow" (rótulo pequeno acima do título). Os campos `eyebrow` foram removidos de `content.ts`.
- Sem números de seção, texto em gradiente ou glassmorphism decorativo.

## Movimento (Fase 4)
- **Configuração:** fica em `src/lib/gsap.ts`. O padrão é `power3.out` com 0,7s. Os contextos do `matchMedia` estão em `MEDIA` (desktop, mobile, motion, reduced).
- **Hero:**
  - O título entra por linha (SplitText com máscara), mas só depois de `document.fonts.ready`. Sem essa espera, a troca de fonte refaz o split e a entrada recomeça.
  - Subtítulo, CTAs e selo entram aos 0,15s, em 0,5s. É curto de propósito, para não atrasar o WhatsApp.
  - O contador do selo vai de 0 a 4,9 e de 0 a 75.
- **Seções:** usam `useReveal` (`src/hooks/useReveal.ts`).
  - Cada `[data-reveal]` sobe 24px e aparece, uma vez só.
  - `[data-reveal-stagger]` anima os filhos `[data-reveal-item]` em sequência: serviços por grupo, depoimentos e os passos.
  - As linhas de botões não ganham reveal.
- **Faixa:** marquee contínuo (`xPercent -50` sobre duas cópias), que pausa em hover e foco.
- **Header e FAB:** a transição é em CSS, com `motion-reduce:transition-none`.
- **Reduced-motion:**
  - O título só esmaece.
  - O resto fica parado e visível, e a faixa fica estática.
  - O contador já mostra o número final.

## SEO e performance (Fase 5)
- **Pré-render no build.** `src/entry-server.tsx` mais `scripts/prerender.mjs` gravam o HTML pronto em `dist/index.html`, e o cliente hidrata (`main.tsx`). Sem isso, nenhum texto aparecia antes de o JS carregar, e o LCP ficava preso nele.
- **Entrada do hero só no desktop.** No celular o hero é estático: o texto já vem no HTML. No desktop, a classe `.js` (definida por um script no `<head>`) mais o CSS escondem título e CTAs até o GSAP mostrar, sem piscar.
- **Reveal com `opacity`, não `autoAlpha`.** O `visibility: hidden` tirava os títulos ainda não revelados da árvore de acessibilidade.
- **Fontes:** preload só do subset latino das duas famílias.
  - A Source Serif com `opsz` tem 122KB.
  - Testei a variante `wght` (51KB): o LCP só caiu de 3,2s para 2,9s e o título perdeu o corte de display. Mantive a `opsz`.
- **URL do site:** `VITE_SITE_URL` (`.env`) alimenta o canonical, o Open Graph e o JSON-LD. `robots.txt` e `sitemap.xml` usam o domínio provisório [PENDENTE].

## Responsividade
- **Altura das seções:** vem do conteúdo, com o mesmo espaçamento vertical (`--padt`/`--padb`, de 72 a 120px). O ritmo fixo de 1–2 telas por seção, que vinha do gate da taste-skill, criava vazios de meia tela ou mais no celular, no tablet e em 1920×1080.
- **Hero:** ocupa a primeira tela. O grid estica (`flex-1`), então a foto da recepção preenche a altura.
- **A partir de 768px (tablet):**
  - Hero e Sobre ficam em 2 colunas (7/5), e a foto aparece no hero.
  - Depoimentos usam colunas tipo masonry: 2 no tablet e 3 no desktop.
  - O rodapé fica em 2 colunas.
- **Abaixo de 768px:** o hero não tem foto (LCP), e a barra de ação fixa é compensada com `padding-bottom` no `body`.
