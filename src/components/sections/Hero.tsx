import { Star } from "lucide-react";

import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { contact, hero, reputation } from "@/data/content";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center pt-(--spacing-header) pb-12 lg:pb-16"
    >
      <div className="container-site grid items-center gap-10 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="max-w-2xl">
          <h1 className="text-display text-ink">{hero.title}</h1>
          <p className="mt-6 max-w-(--container-prose) text-lead text-ink-muted">{hero.subtitle}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton kind="urgencia" label={hero.ctaPrimary} size="lg" className="max-sm:w-full" />
            <WhatsAppButton
              kind="avaliacao"
              label={hero.ctaSecondary}
              variant="outline"
              size="lg"
              showIcon={false}
              className="max-sm:w-full"
            />
          </div>

          <a
            href={contact.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={reputation.ariaLabel}
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-surface px-4 py-2 text-small shadow-sm ring-1 ring-line transition-shadow hover:shadow-md"
          >
            <Star className="size-4 fill-current text-brand" aria-hidden="true" />
            <span className="tabular font-semibold text-ink" data-count={reputation.rating}>
              {reputation.ratingDisplay}
            </span>
            <span className="text-ink-muted">
              · <span className="tabular" data-count={reputation.reviewCount}>{reputation.reviewCount}</span>{" "}
              {reputation.label}
            </span>
          </a>
        </div>

        <PhotoPlaceholder className="aspect-4/5 w-full max-w-md justify-self-center lg:max-w-none" />
      </div>
    </section>
  );
}
