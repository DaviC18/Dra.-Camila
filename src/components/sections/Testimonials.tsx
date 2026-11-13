import { ArrowUpRight } from "lucide-react";

import { Stars } from "@/components/shared/Stars";
import { buttonVariants } from "@/components/ui/button";
import { contact, features, testimonials, ui } from "@/data/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const items = testimonials.items.slice(0, testimonials.featuredCount);

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="bg-accent py-section">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="depoimentos-titulo" className="max-w-xl text-h2">
            {testimonials.title}
          </h2>
          <a
            href={contact.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${testimonials.allReviews} ${ui.externalLink}`}
            className={cn(buttonVariants({ variant: "link" }), "h-11 self-start px-0 md:self-auto")}
          >
            {testimonials.allReviews}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Mobile: rolagem horizontal com snap. Desktop: grade em colunas. */}
      <ul
        className={cn(
          "mt-12 flex items-start snap-x snap-mandatory gap-4 overflow-x-auto px-(--spacing-gutter) pb-4 [scrollbar-width:thin]",
          "md:mx-auto md:block md:max-w-[calc(var(--container-site)+2*var(--spacing-gutter))] md:columns-2 md:gap-6 md:overflow-visible md:pb-0 lg:columns-3",
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="w-[85%] max-w-sm shrink-0 snap-start md:mb-6 md:w-auto md:max-w-none md:break-inside-avoid"
          >
            <figure className="rounded-lg bg-surface p-7 shadow-sm">
              <Stars label={testimonials.starsAria} />
              <blockquote className="mt-5 font-display text-lead text-ink">
                <p>“{item.text}”</p>
              </blockquote>
              <figcaption className="mt-6 text-small font-semibold text-ink-muted">
                {features.testimonialNames ? item.name : testimonials.anonymousName}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
