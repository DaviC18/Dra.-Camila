/**
 * Página de teste TEMPORÁRIA da Fase 2 (docs/plan.md).
 * Mostra tokens, tipografia e componentes. Remover na Fase 3.
 */
import { Anchor, Baby, Crown, Droplets, Gem, Moon, ShieldCheck, Siren, Sparkles, Star, Stethoscope } from "lucide-react";

import { BracesIcon, InstagramIcon, Monogram, ToothIcon, WhatsAppIcon } from "@/components/icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { about, faq, hero, identity, reputation, services, urgencyBand } from "@/data/content";
import { waLink } from "@/lib/whatsapp";

const swatches = [
  ["ink", "bg-ink"],
  ["ink-muted", "bg-ink-muted"],
  ["paper", "bg-paper"],
  ["surface", "bg-surface"],
  ["line", "bg-line"],
  ["brand", "bg-brand"],
  ["brand-strong", "bg-brand-strong"],
  ["brand-soft", "bg-brand-soft"],
  ["accent (lilás)", "bg-accent"],
  ["urgent", "bg-urgent"],
  ["whatsapp", "bg-whatsapp"],
] as const;

const icons = [Siren, Baby, ToothIcon, ShieldCheck, Droplets, Moon, Stethoscope, Sparkles, Gem, Crown, Anchor, BracesIcon];

function Block({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`border-t border-line py-16 ${className}`}>
      <div className="container-site">
        <p className="mb-8 text-label font-semibold uppercase tracking-wide text-ink-muted">{title}</p>
        {children}
      </div>
    </section>
  );
}

export default function StyleGuide() {
  const service = services.groups[1].services[0];

  return (
    <main>
      <Block title="Marca" className="border-t-0">
        <div className="flex items-center gap-4 text-brand">
          <Monogram size={56} />
          <span className="font-display text-h3 text-ink">{identity.name}</span>
        </div>
      </Block>

      <Block title="Tipografia — Source Serif 4 (display) / Libre Franklin (texto)">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-display text-ink">{hero.title}</h1>
          <p className="max-w-(--container-prose) text-lead text-ink-muted">{hero.subtitle}</p>
          <h2 className="text-h2">{about.title}</h2>
          <h3 className="text-h3">{service.name}</h3>
          <p className="max-w-(--container-prose)">{about.paragraphs[1]}</p>
          <p className="text-small text-ink-muted">{identity.cro}</p>
        </div>
      </Block>

      <Block title="Cores">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {swatches.map(([name, cls]) => (
            <div key={name}>
              <div className={`h-20 rounded-md ring-1 ring-line ${cls}`} />
              <p className="mt-2 text-label text-ink-muted">{name}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Botões">
        <div className="flex flex-wrap items-center gap-4">
          <a href={waLink("urgencia")} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "whatsapp", size: "lg" })}>
            <WhatsAppIcon />
            {hero.ctaPrimary}
          </a>
          <a href={waLink("avaliacao")} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "lg" })}>
            {hero.ctaSecondary}
          </a>
          <button type="button" className={buttonVariants()}>{services.cta}</button>
          <button type="button" className={buttonVariants({ variant: "secondary" })}>{services.cta}</button>
          <button type="button" className={buttonVariants({ variant: "ghost" })}>{services.cta}</button>
          <button type="button" className={buttonVariants({ variant: "link" })}>{services.cta}</button>
          <button type="button" disabled className={buttonVariants()}>{services.cta}</button>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-lg bg-ink p-8">
          <a href={waLink("urgencia")} className={buttonVariants({ variant: "whatsapp", size: "lg" })}>
            <WhatsAppIcon />
            {hero.ctaPrimary}
          </a>
          <a href={waLink("avaliacao")} className={buttonVariants({ variant: "outline-inverse", size: "lg" })}>
            {hero.ctaSecondary}
          </a>
        </div>
      </Block>

      <Block title="Selo, badge, faixa">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-small font-semibold shadow-sm ring-1 ring-line">
            <Star className="size-4 fill-current text-brand" aria-hidden="true" />
            <span className="tabular">{reputation.ratingDisplay}</span>
            <span className="text-ink-muted">· {reputation.reviewCount} {reputation.label}</span>
          </span>
          <Badge className="bg-urgent text-white">{urgencyBand.items[0]}</Badge>
          <Badge className="bg-brand-soft text-brand-strong">{urgencyBand.items[2]}</Badge>
        </div>
        <div className="mt-8 flex gap-8 overflow-hidden rounded-md bg-brand py-4 pl-6 text-on-ink">
          {urgencyBand.items.map((item) => (
            <span key={item} className="font-display text-h3 whitespace-nowrap">{item}</span>
          ))}
        </div>
      </Block>

      <Block title="Ícones (lucide + próprios, traço 2)">
        <div className="flex flex-wrap gap-6 text-brand">
          {icons.map((I, i) => (
            <I key={i} className="size-7" aria-hidden="true" />
          ))}
          <WhatsAppIcon className="size-7 text-whatsapp" />
          <InstagramIcon className="size-7 text-ink" />
        </div>
      </Block>

      <Block title="Card + superfícies">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-sm">
            <CardHeader>
              <ToothIcon className="size-7 text-brand" />
              <CardTitle className="font-display text-h3">{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-ink-muted">{service.description}</CardContent>
          </Card>
          <div className="rounded-lg bg-brand-soft p-6">
            <p className="font-display text-h3">{services.groups[2].title}</p>
            <p className="mt-2 text-ink-muted">{services.groups[2].services[0].description}</p>
          </div>
          <div className="rounded-lg bg-accent p-6">
            <p className="font-display text-h3">{services.groups[3].title}</p>
            <p className="mt-2 text-ink-muted">{services.groups[3].services[0].description}</p>
          </div>
        </div>
      </Block>

      <Block title="Accordion">
        <Accordion className="max-w-2xl">
          {faq.items.slice(0, 3).map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Block>
    </main>
  );
}
