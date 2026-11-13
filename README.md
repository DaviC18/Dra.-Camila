# Site Dra. Camila Mattje

Landing page de uma página só da **Dra. Camila Mattje**, cirurgiã-dentista com urgência 24 horas em Barra Mansa (RJ). O objetivo é levar quem procura atendimento a uma conversa no WhatsApp.

Stack: Vite, React, TypeScript, Tailwind CSS v4, GSAP (ScrollTrigger e SplitText), shadcn/ui e lucide-react.

## Como rodar

Requer Node 20 ou superior.

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # build de produção em dist/ (com pré-render do HTML)
npm run preview   # serve o build em http://localhost:4173
npm run lint
```

O `npm run build` faz quatro coisas:

1. Checa os tipos.
2. Gera o bundle do cliente.
3. Gera um bundle SSR temporário (`dist-ssr/`).
4. Roda `scripts/prerender.mjs`, que grava o HTML pronto da página em `dist/index.html`.

Assim o texto aparece antes do JavaScript carregar, e o React só hidrata.

## Deploy (Vercel)

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Variável de ambiente:** `VITE_SITE_URL`, a URL final sem barra no fim (ex.: `https://www.exemplo.com.br`). Ela alimenta o canonical, o Open Graph e o JSON-LD. O valor padrão está em `.env`.

Depois de definir o domínio, troque também `public/robots.txt` e `public/sitemap.xml`. Esses dois arquivos não leem a variável.

Depois do deploy:

- [ ] Testar os dois botões de WhatsApp ("Estou com dor agora" e "Agendar avaliação") num celular de verdade e conferir a mensagem pronta.
- [ ] Testar "Ligar" e "Como chegar" no celular.
- [ ] Validar o JSON-LD no [Rich Results Test](https://search.google.com/test/rich-results) com a URL pública.
- [ ] Rodar o Lighthouse mobile na URL pública.
- [ ] Mandar o link para a cliente cadastrar no Google Maps ("Adicionar website") e na bio do Instagram.

## Como editar o conteúdo

Todos os textos, links e dados ficam em **`src/data/content.ts`**. Os componentes não têm texto fixo.

| Quero mudar… | Onde, em `content.ts` |
|---|---|
| Telefone, mensagens do WhatsApp, Instagram, endereço, links do Maps | `contact` |
| Título, subtítulo e botões do topo | `hero` |
| Texto da faixa azul | `urgencyBand` |
| Texto "Sobre" e diferenciais | `about`, `identity` |
| Serviços (nome, frase, ícone) | `services.groups` |
| Depoimentos e quantos aparecem | `testimonials` (`featuredCount`, `featuredCountMobile`) |
| Perguntas frequentes | `faq.items` |
| Horário | `hours` |
| Comodidades e convênios | `location` |
| Passos e chamada final | `howItWorks`, `finalCta` |
| Rodapé | `footer` |
| Fotos e logo | `images` |

**Flags** (`features` em `content.ts`):

- `beforeAfter`: mostra a seção antes/depois. Deixe `false` até haver autorização da paciente. As imagens entram em `beforeAfter.beforeSrc` e `beforeAfter.afterSrc`.
- `testimonialNames`: mostra o primeiro nome nos depoimentos. Deixe `false` até haver autorização. Sem ela, aparece "Paciente no Google".

**Imagens:**

- Os originais da cliente ficam em `assets-originais/`, fora do deploy.
- O site usa as versões WebP em `public/images/`. Para trocar uma foto, gere o WebP no mesmo nome e tamanho, ou atualize `images` em `content.ts`. Por exemplo:

  ```bash
  ffmpeg -i assets-originais/foto.jpg -vf scale=1400:-1 -c:v libwebp -quality 80 public/images/foto-1400.webp
  ```

- A imagem de compartilhamento é `public/og-image.jpg` (1200×630).

**WhatsApp:** os links são montados em `src/lib/whatsapp.ts` a partir de `contact.phoneE164` e `contact.whatsappMessages`.

## Estrutura

```
src/
  data/content.ts          todo o conteúdo
  lib/gsap.ts              plugins e padrões do GSAP + contextos do matchMedia
  lib/whatsapp.ts          links do WhatsApp e do telefone
  hooks/useReveal.ts       revelação das seções ao rolar
  components/layout/       Header, Footer (CTA final + rodapé), WhatsAppFab (barra no celular, botão no desktop)
  components/sections/     Hero, UrgencyBand, About, Services, BeforeAfter, Testimonials, Faq, Location
  components/shared/       WhatsAppButton, Photo, Logo, Stars
  components/icons/        SVGs próprios (WhatsApp, Instagram, dente, aparelho)
  components/ui/           shadcn (reestilizado com os tokens)
  entry-server.tsx         render usado só no pré-render do build
scripts/prerender.mjs      injeta o HTML pré-renderizado em dist/index.html
docs/                      spec, plano, conteúdo e decisões de design
```

As decisões visuais (cores, fontes, ritmo, movimento, performance) estão em `docs/design-decisions.md`.

## Pendências da cliente

Itens marcados `[PENDENTE]` em `src/data/content.ts`. O site já funciona com um placeholder claro em cada um.

- [ ] **Horário das consultas eletivas.** Já confirmado: 24 horas vale só para urgência. Hoje o site diz "Consultas: com hora marcada" (`hours`).
- [ ] **Convênios.** O FAQ e a seção Localização mostram "Em confirmação" (`faq.items`, `location.insurance`).
- [ ] **Formas de pagamento.** Falta confirmar Pix e parcelamento (`faq.items`, `location.amenities`, JSON-LD em `index.html`).
- [ ] **Autorização dos depoimentos.** Ao confirmar, ligar `features.testimonialNames` (só o primeiro nome).
- [ ] **Antes/depois.** Falta a imagem original e a autorização da paciente. Ao confirmar, ligar `features.beforeAfter`.
- [ ] **Domínio.** Atualizar `VITE_SITE_URL` (`.env` ou Vercel), `public/robots.txt` e `public/sitemap.xml`.
- [ ] **Crédito de desenvolvimento no rodapé.** Confirmar o texto em `footer.credit`.
- [ ] **Regras do CRO-RJ.** É recomendado que a doutora confirme as regras atuais de publicidade odontológica.

## Situação técnica

**Lighthouse mobile local:**

| Categoria | Nota |
|---|---|
| Performance | 92 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 100 |

**Pontos em aberto:**

- **LCP:** cerca de 3,2s em 4G lento simulado. A meta da spec é 2,5s. O gargalo é a fonte serifada do título (122KB), e as opções estão em `docs/design-decisions.md`.
- **Movimento:** com `prefers-reduced-motion`, o site não anima. A faixa fica estática e o conteúdo aparece direto.
