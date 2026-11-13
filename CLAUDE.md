# CLAUDE.md — Site Dra. Camila Mattje

Instruções para a IA que vai desenvolver este projeto. Leia antes de qualquer código.

## Ordem de leitura
1. `docs/spec.md` — o QUE construir (fonte da verdade de requisitos)
2. `docs/content.md` — todos os textos, dados e depoimentos (não invente conteúdo)
3. `docs/plan.md` — COMO construir, em fases e tarefas, na ordem

## Skills obrigatórias
- **taste-skill** — direção estética; evitar visual genérico de "template de IA"
- **impeccable** — qualidade de design/UI: tipografia, espaçamento, hierarquia, acabamento
- **gsap-skills** — toda animação (GSAP + ScrollTrigger + SplitText, via `useGSAP`)

Carregue a skill correspondente ANTES de iniciar cada fase do plano que dependa dela.

## Stack (fixa — não trocar)
- Vite + React + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`, tokens no `@theme`)
- GSAP + `@gsap/react` (ScrollTrigger, SplitText)
- shadcn/ui (só para componentes com comportamento)
- React Bits (efeitos pontuais, máx. 2–3 usos)
- lucide-react (ícones de interface)

## Regras inegociáveis
- Single page. Sem router. Navegação por âncoras.
- Todo texto vem de `src/data/content.ts` (gerado a partir de `docs/content.md`). Componentes não têm texto hardcoded.
- Não adicionar outra biblioteca de animação (Motion/Framer, AOS etc.). Se um componente do React Bits exigir Motion ou Three.js, não use — reimplemente com GSAP.
- Respeitar `prefers-reduced-motion` via `gsap.matchMedia()`.
- Botão de WhatsApp sempre acessível (header + botão flutuante). Nenhuma animação pode atrasá-lo.
- CRO-RJ 48.166 visível no site (Sobre + rodapé).
- Não usar superlativos como afirmação da própria profissional ("a melhor dentista"). Elogio só dentro de depoimento.
- Itens marcados `[PENDENTE]` em `docs/content.md` usam placeholder claro e ficam listados no README até serem confirmados.
- Ao concluir cada fase do plano: rodar `npm run build` e `npm run lint` sem erros antes de seguir.
