import { Star } from "lucide-react";

import { Photo } from "@/components/shared/Photo";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { UrgencyBand } from "@/components/sections/UrgencyBand";
import { contact, hero, images, reputation } from "@/data/content";

export function Hero() {
  return (
    <section id="inicio" className="hero [--band:5.5rem] max-sm:[--band:6.75rem]">
      <div className="wrap">
        <div className="hero-text grid h-full items-start gap-10 lg:grid-cols-12 lg:gap-x-6">
          <div className="max-w-2xl lg:col-span-7">
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
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-surface px-4 py-2 text-small ring-1 ring-line transition-shadow hover:shadow-md"
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

          <Photo
            image={images.reception}
            sizes="(min-width: 1024px) 40vw, 0px"
            priority
            className="hidden h-full w-full lg:col-span-5 lg:block"
            imgClassName="object-[50%_35%]"
          />
        </div>
      </div>

      <UrgencyBand />
    </section>
  );
}
