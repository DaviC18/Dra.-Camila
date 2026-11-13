import {
  Anchor,
  Baby,
  Crown,
  Droplets,
  Gem,
  Moon,
  ShieldCheck,
  Siren,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { BracesIcon, ToothIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { services, type ServiceIcon } from "@/data/content";
import { cn } from "@/lib/utils";

const icons: Record<ServiceIcon, LucideIcon | ComponentType<SVGProps<SVGSVGElement>>> = {
  siren: Siren,
  baby: Baby,
  tooth: ToothIcon,
  "shield-check": ShieldCheck,
  droplets: Droplets,
  moon: Moon,
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  gem: Gem,
  crown: Crown,
  anchor: Anchor,
  braces: BracesIcon,
};

function Group({ group }: { group: (typeof services.groups)[number] }) {
  return (
    <div data-service-group={group.id} data-reveal-stagger>
      <h3 className={cn("text-h3", group.id === "urgencia" ? "text-urgent" : "text-brand-strong")}>{group.title}</h3>
      <ul className="mt-4 grid gap-x-6 gap-y-5 sm:mt-6 sm:grid-cols-2 sm:gap-y-7">
        {group.services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <li key={service.name} data-service data-reveal-item className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h4 className="font-semibold text-ink">{service.name}</h4>
                <p className="mt-1 text-small text-ink-muted">{service.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Duas telas: [título + urgência + tratamentos] e [estética + reabilitação + CTA]. */
export function Services() {
  const [urgencia, tratamentos, ...rest] = services.groups;

  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="g2 bg-surface">
      <div className="wrap">
        <div className="space-y-8 sm:space-y-12">
          <h2 id="servicos-titulo" data-reveal className="text-h2">
            {services.title}
          </h2>
          <Group group={urgencia} />
          <Group group={tratamentos} />
        </div>
        <div className="space-y-8 sm:space-y-12">
          {rest.map((group) => (
            <Group key={group.id} group={group} />
          ))}
          <WhatsAppButton kind="avaliacao" label={services.cta} variant="outline" size="lg" showIcon={false} className="max-sm:hidden" />
        </div>
      </div>
    </section>
  );
}
