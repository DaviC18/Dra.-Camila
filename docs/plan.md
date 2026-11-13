# Plano de implementação — Site Dra. Camila Mattje

Executar em ordem. Cada fase termina com `npm run build` + `npm run lint` verdes e um commit.
Requisitos completos em `docs/spec.md`; conteúdo em `docs/content.md`.

---

## Fase 0 — Setup do projeto
**Skills:** nenhuma

1. Criar projeto: `npm create vite@latest . -- --template react-ts`
2. Tailwind v4: `npm i tailwindcss @tailwindcss/vite` → adicionar plugin no `vite.config.ts` → `@import "tailwindcss";` no `src/index.css`
3. Alias `@/` → `src/` no `tsconfig.json`, `tsconfig.app.json` e `vite.config.ts` (necessário para o shadcn)
4. shadcn: `npx shadcn@latest init` → adicionar `button badge card accordion sheet carousel`
5. GSAP: `npm i gsap @gsap/react`
6. Ícones: `npm i lucide-react`
7. Criar `src/lib/gsap.ts` registrando `ScrollTrigger`, `SplitText`, `useGSAP`
8. Limpar boilerplate do Vite; `index.html` com `lang="pt-BR"`
9. Commit: `chore: setup vite react ts tailwind gsap shadcn`

**Pronto quando:** `npm run dev` abre página em branco sem erros.

---

## Fase 1 — Conteúdo tipado
**Skills:** nenhuma

1. Criar `src/data/content.ts` com tipos (`Service`, `Testimonial`, `FaqItem`, `ContactInfo`...) e todo o conteúdo de `docs/content.md`
2. Flags: `features.beforeAfter`, `features.testimonialNames` (default `false` até autorização)
3. Criar `src/lib/whatsapp.ts` com `waLink(kind: "urgencia" | "avaliacao")`
4. Commit: `feat: conteúdo tipado e helpers de contato`

**Pronto quando:** nenhum texto de interface precisa existir fora de `content.ts`.

---

## Fase 2 — Direção visual e design system
**Skills:** taste-skill → impeccable

1. Com a taste-skill, definir direção estética a partir da spec §3 e §6: escolher fontes, paleta final, tratamento de fotos, estilo de cards e botões
2. Registrar decisões em `docs/design-decisions.md` (curto: o quê e por quê)
3. Implementar tokens no `@theme` (cores, fontes, escala tipográfica fluida, raios, sombras, espaçamentos)
4. Reestilizar componentes shadcn com os tokens
5. Criar SVGs próprios: WhatsApp, Instagram, dente, monograma CM provisório
6. Commit: `feat: design system e tokens`

**Pronto quando:** existe uma página de teste interna (temporária) mostrando tipografia, cores e botões, aprovada pelo impeccable.

---

## Fase 3 — Layout e seções (estático, sem animação)
**Skills:** impeccable

Construir mobile-first, uma seção por vez, conferindo em 360px e 1440px:

1. `Header` (+ `Sheet` mobile) e `WhatsAppFab`
2. `Hero`
3. `UrgencyBand` (estático por enquanto)
4. `About`
5. `Services`
6. `BeforeAfter` (slider funcional com mouse/toque/teclado, atrás de flag)
7. `Testimonials`
8. `HowItWorks`
9. `Faq` (`Accordion`)
10. `Location` (iframe lazy + comodidades + botões)
11. `FinalCta` e `Footer`
12. Montar tudo em `App.tsx` com `id`s de âncora; scroll suave com `scroll-margin-top` para compensar o header

Commit por seção ou por grupo: `feat(sections): hero` etc.

**Pronto quando:** site completo e navegável, sem animação, revisado pelo impeccable (hierarquia, espaçamento, alinhamento, estados de hover/foco).

---

## Fase 4 — Animações
**Skills:** gsap-skills

1. `src/lib/gsap.ts`: defaults (ease, duration) e `gsap.matchMedia()` com contextos desktop / mobile / reduced-motion
2. Hook `useReveal` (ScrollTrigger, `once: true`) e aplicar nas seções
3. Hero: SplitText por linha + entrada dos CTAs e selo
4. Contador do selo (4,9 e 75)
5. Stagger dos cards de serviço
6. Marquee da faixa de urgência (pausa em hover/foco)
7. Header: transição de fundo ao rolar
8. `WhatsAppFab`: aparece quando o hero sai da viewport
9. React Bits (opcional, máx. 2–3): só se superar a versão GSAP e não trouxer dependência nova
10. Commit: `feat: animações gsap`

**Pronto quando:** tabela da spec §8 implementada; com reduced-motion ligado no SO nada se move; sem layout shift causado por animação.

---

## Fase 5 — SEO, acessibilidade e performance
**Skills:** impeccable (revisão final)

1. `index.html`: title, description, OG/Twitter, favicon, theme-color, preconnect de fontes
2. JSON-LD `Dentist` (spec §10) inline no `index.html`
3. Imagens: converter para WebP/AVIF, dimensões explícitas, `fetchpriority="high"` no hero
4. Auditoria de acessibilidade: teclado, foco, contraste, `alt`, `aria-label` nos botões de WhatsApp
5. Lighthouse mobile e ajustes até ≥ 90 nas 4 categorias
6. Validar JSON-LD no Rich Results Test
7. Commit: `chore: seo, a11y e performance`

---

## Fase 6 — Entrega
1. `README.md`: como rodar, como editar conteúdo (`content.ts`), lista de pendências da cliente
2. Deploy na Vercel; testar os links de WhatsApp em celular real
3. Configurar domínio `[PENDENTE]`
4. Passar o link para a cliente cadastrar no Google Maps ("Adicionar website") e na bio do Instagram
5. Commit/tag: `v1.0.0`

---

## Checklist final (spec §14)
- [ ] Seções completas com conteúdo de `content.ts`
- [ ] Links de WhatsApp corretos (desktop e celular)
- [ ] 360px → 1920px sem quebra
- [ ] Reduced-motion respeitado
- [ ] Lighthouse mobile ≥ 90 (4 categorias)
- [ ] JSON-LD válido
- [ ] Build e lint verdes
- [ ] Pendências no README
