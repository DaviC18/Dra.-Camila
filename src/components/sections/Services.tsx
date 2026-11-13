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

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="bg-surface py-section">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="servicos-titulo" className="max-w-2xl text-h2">
            {services.title}
          </h2>
          <WhatsAppButton
            kind="avaliacao"
            label={services.cta}
            variant="outline"
            showIcon={false}
            className="self-start md:self-auto"
          />
        </div>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {services.groups.map((group) => (
            <div
              key={group.id}
              data-service-group={group.id}
              className="grid gap-6 py-10 md:grid-cols-[minmax(10rem,0.32fr)_1fr] md:gap-10"
            >
              <h3
                className={cn(
                  "text-h3",
                  group.id === "urgencia" ? "text-urgent" : "text-brand-strong",
                )}
              >
                {group.title}
              </h3>
              <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {group.services.map((service) => {
                  const Icon = icons[service.icon];
                  return (
                    <li key={service.name} data-service className="flex gap-4">
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
          ))}
        </div>
      </div>
    </section>
  );
}
