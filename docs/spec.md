# Spec — Landing page Dra. Camila Mattje

## 1. Objetivo
Single page que transforma quem busca "dentista 24 horas / urgência odontológica em Barra Mansa" em conversa no WhatsApp.

**Métrica principal:** cliques nos botões de WhatsApp (urgência e avaliação).
**Métrica secundária:** cliques em "Como chegar" e no telefone.

## 2. Público
- **Urgência:** pessoa com dor, muitas vezes à noite ou no fim de semana, no celular. Quer saber em segundos se é atendida agora e como falar.
- **Eletivo:** quem procura clareamento, facetas, canal, prótese ou implante e quer confiar na profissional antes de marcar.
- **Medo de dentista:** tema forte nas avaliações. O site precisa transmitir calma.

## 3. Posicionamento e tom
- **Conceito:** "A dentista que atende quando dói — com calma e cuidado."
- **Tom:** acolhedor, direto, humano. Frases curtas. Nada de jargão técnico sem explicação.
- **Proibido:** promessas de resultado, "a melhor", "sem dor garantido", preços.

## 4. Stack
| Camada | Escolha |
|---|---|
| Build | Vite |
| UI | React + TypeScript (strict) |
| Estilo | Tailwind CSS v4 via `@tailwindcss/vite`, tokens em `@theme` |
| Animação | GSAP + `@gsap/react` (`useGSAP`), ScrollTrigger, SplitText |
| Componentes | shadcn/ui (comportamento), React Bits (efeitos pontuais) |
| Ícones | lucide-react + SVGs próprios (WhatsApp, Instagram, dente) |
| Deploy | Vercel |

**Prioridade de solução:** HTML/Tailwind puro → shadcn → React Bits → GSAP para a coreografia.

## 5. Estrutura de pastas
```
src/
  App.tsx
  main.tsx
  index.css                 # @import "tailwindcss"; @theme {...}
  data/content.ts           # todo o conteúdo tipado
  lib/
    gsap.ts                 # registerPlugin + defaults
    whatsapp.ts             # helpers de link
  hooks/
    useReveal.ts            # reveal on scroll reutilizável
  components/
    ui/                     # shadcn (gerado)
    icons/                  # WhatsApp, Instagram, Tooth (SVG)
    layout/Header.tsx
    layout/Footer.tsx
    layout/WhatsAppFab.tsx
    sections/Hero.tsx
    sections/UrgencyBand.tsx
    sections/About.tsx
    sections/Services.tsx
    sections/BeforeAfter.tsx
    sections/Testimonials.tsx
    sections/HowItWorks.tsx
    sections/Faq.tsx
    sections/Location.tsx
    sections/FinalCta.tsx
public/
  images/                   # WebP/AVIF
  og-image.jpg
  favicon.svg
```

## 6. Design system
Valores iniciais — refinar com **taste-skill** e **impeccable** antes de implementar seções.

### Cores (tokens `@theme`)
| Token | Papel | Ponto de partida |
|---|---|---|
| `--color-ink` | texto principal | azul-marinho quase preto |
| `--color-brand` | primária (botões, destaques) | azul royal profundo |
| `--color-brand-soft` | fundos de seção | azul muito claro |
| `--color-accent` | acento | lilás suave (dos posts recentes) |
| `--color-paper` | fundo base | off-white quente |
| `--color-urgent` | só selo/faixa de urgência | vermelho contido |
| `--color-whatsapp` | botão WhatsApp | verde WhatsApp ajustado ao contraste |

Contraste mínimo WCAG AA (4.5:1 texto normal).

### Tipografia
- **Display:** serifada elegante (conversa com o monograma CM). Escolher via taste-skill.
- **Texto:** sans humanista legível. Evitar Inter, Roboto, Arial.
- Escala fluida com `clamp()`. Hero ≥ 48px desktop / ≥ 36px mobile.
- Fontes self-hosted ou Google Fonts com `font-display: swap` e `preconnect`.

### Layout
- Mobile-first. Breakpoints padrão Tailwind.
- Container máx. ~1200px; respiro generoso entre seções.
- Raio de borda, sombras e espaçamento definidos como tokens, consistentes em tudo.

## 7. Seções (ordem e requisitos)

### 7.1 Header (fixo)
- Logo CM à esquerda; âncoras (Serviços, Sobre, Depoimentos, Localização); botão WhatsApp.
- Mobile: menu em `Sheet` (shadcn) + botão WhatsApp sempre visível.
- Fica com fundo sólido/blur após rolar 40px.

### 7.2 Hero
- Título + subtítulo (ver content.md §8).
- CTA primário "Estou com dor agora" → link urgência. CTA secundário "Agendar avaliação" → link avaliação.
- Selo "4,9 ★ · 75 avaliações no Google" com contador animado.
- Foto da doutora (placeholder até receber o arquivo).
- Acima da dobra no mobile: título, CTA primário e selo.

### 7.3 Faixa de urgência
- Marquee contínuo com os textos da faixa. Pausa em hover/foco. Estático com reduced-motion.

### 7.4 Sobre
- Foto + texto curto, CRO-RJ 48.166, diferenciais (Endodontia, facetas em resina), acolhimento para quem tem medo.

### 7.5 Serviços
- 12 serviços em 4 grupos (content.md §4). Cards com ícone, nome e 1 frase.
- Cada card pode levar ao WhatsApp de avaliação.

### 7.6 Antes e depois
- Slider arrastável (mouse, toque e teclado com setas). Legenda "Clareamento dental".
- Só entra se a autorização for confirmada; caso contrário, fica atrás de flag em `content.ts`.

### 7.7 Depoimentos
- 4–6 depoimentos (content.md §5) com 5 estrelas e primeiro nome.
- Link "Ver todas as avaliações no Google".
- Grade no desktop; `Carousel` (shadcn) ou rolagem horizontal no mobile.

### 7.8 Como funciona
- 3 passos numerados.

### 7.9 FAQ
- `Accordion` (shadcn) com as perguntas de content.md §7.

### 7.10 Localização
- Iframe do Google Maps (lazy) + endereço, horário, comodidades (acessibilidade, pagamento, estacionamento).
- Botões "Como chegar" (Google Maps) e "Ligar".

### 7.11 CTA final + Footer
- CTA final com os dois botões.
- Footer: logo, CRO-RJ 48.166, endereço, telefone, Instagram, ano, crédito de desenvolvimento.

### 7.12 WhatsApp flutuante
- Canto inferior direito, todas as telas, aparece após o hero sair da tela. `aria-label` descritivo.

## 8. Animações (gsap-skills)
- Setup central em `src/lib/gsap.ts` (`gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)`).
- Toda animação dentro de `useGSAP` com `scope` (limpeza automática).
- `gsap.matchMedia()` com três contextos: desktop, mobile, reduced-motion.

| Onde | Efeito | Reduced-motion |
|---|---|---|
| Hero título | SplitText por linha, sobe + fade, stagger | fade simples |
| Hero CTAs/selo | entrada em sequência após o título | visível de imediato |
| Selo | contador 0→4,9 e 0→75 | número final |
| Seções | reveal (y: 24 → 0, opacity) via ScrollTrigger, `once: true` | sem animação |
| Cards de serviço | stagger por grupo | sem animação |
| Faixa | marquee infinito | estático |
| Header | transição de fundo ao rolar | instantâneo |

Regras: duração 0.5–0.9s, easing suave (`power3.out`/`expo.out`), nada acima de 1.2s, nenhum bloqueio de interação, sem animação contínua além do marquee.

## 9. Componentes de terceiros
- **shadcn/ui:** Button, Badge, Card, Accordion, Sheet, Carousel. Reestilizar com tokens.
- **React Bits (máx. 2–3):** candidatos — efeito de texto no hero, reveal em frase da seção Sobre, CountUp do selo. Usar só variantes TS + Tailwind que dependam de GSAP ou CSS puro. Não duplicar com SplitText.
- **lucide-react:** ícones de interface (ver content.md §4). WhatsApp, Instagram e dente em SVG próprio no mesmo traço (stroke 2, sem fill).

## 10. SEO local
- `<title>`: "Dentista 24 horas em Barra Mansa | Dra. Camila Mattje"
- Meta description (~155 caracteres) com urgência 24h, Barra Mansa, clínica geral.
- Open Graph + Twitter card com `og-image.jpg` (1200×630).
- `lang="pt-BR"`, favicon SVG com monograma.
- JSON-LD `Dentist`: name, image, telephone, address (PostalAddress), geo, url, sameAs (Instagram, Maps), `openingHoursSpecification` 24/7 `[confirmar]`, priceRange omitido.
- Um único `h1`; hierarquia de headings correta.
- Palavras-chave naturais no texto: dentista 24 horas Barra Mansa, urgência odontológica, canal, clareamento, Ano Bom.

## 11. Acessibilidade
- WCAG 2.2 AA. Navegação por teclado completa, foco visível.
- `alt` em todas as imagens; ícones decorativos com `aria-hidden`.
- Slider antes/depois operável por teclado, com `role="slider"` e `aria-valuenow`.
- Links externos com indicação; botões de WhatsApp com `aria-label` explícito.

## 12. Performance
- Lighthouse mobile ≥ 90 em Performance, Acessibilidade, Boas práticas e SEO.
- Imagens WebP/AVIF com `width`/`height`, `loading="lazy"` (exceto hero, com `fetchpriority="high"`).
- Iframe do mapa lazy. Fontes com preload da principal.
- LCP < 2,5s; CLS < 0,1.

## 13. Conformidade (publicidade odontológica)
- CRO visível. Depoimentos e antes/depois só com autorização dos pacientes.
- Sem promessa de resultado, sem preço, sem superlativos autodeclarados.
- Recomendado: a doutora confirmar as regras atuais do CRO-RJ.

## 14. Critérios de aceite
- [ ] Todas as seções da §7 implementadas com conteúdo de `content.ts`
- [ ] Os dois links de WhatsApp abrem com a mensagem correta (desktop e celular)
- [ ] Funciona de 360px a 1920px sem quebra
- [ ] Reduced-motion desativa movimento
- [ ] Lighthouse mobile ≥ 90 nas 4 categorias
- [ ] JSON-LD válido no Rich Results Test
- [ ] `npm run build` e `npm run lint` sem erros
- [ ] Pendências listadas no README
