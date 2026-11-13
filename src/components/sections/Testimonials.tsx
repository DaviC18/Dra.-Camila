import { ArrowUpRight } from "lucide-react";

import { Stars } from "@/components/shared/Stars";
import { buttonVariants } from "@/components/ui/button";
import { contact, features, testimonials, ui, type Testimonial } from "@/data/content";
import { cn } from "@/lib/utils";

function Quote({ item, className }: { item: Testimonial; className?: string }) {
  return (
    <li data-reveal-item className={cn("break-inside-avoid sm:mb-5 lg:mb-6", className)}>
      <figure className="rounded-lg bg-surface p-7">
        <Stars label={testimonials.starsAria} />
        <blockquote className="mt-5 font-display text-lead text-ink">
          <p>“{item.text}”</p>
        </blockquote>
        <figcaption className="mt-6 text-small font-semibold text-ink-muted">
          {features.testimonialNames ? item.name : testimonials.anonymousName}
        </figcaption>
      </figure>
    </li>
  );
}

export function Testimonials() {
  const items = testimonials.items.slice(0, testimonials.featuredCount);
  const mobileHidden = (i: number) => (i >= testimonials.featuredCountMobile ? "max-sm:hidden" : undefined);

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="bg-accent">
      <div className="wrap">
        <h2 id="depoimentos-titulo" data-reveal className="max-w-2xl text-h2">
          {testimonials.title}
        </h2>
        <ul data-reveal-stagger className="mt-12 space-y-5 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6">
          {items.map((item, i) => (
            <Quote key={item.name} item={item} className={mobileHidden(i)} />
          ))}
        </ul>
        <a
          href={contact.reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${testimonials.allReviews} ${ui.externalLink}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "mt-10 self-start max-sm:h-auto max-sm:min-h-14 max-sm:w-full max-sm:py-3 max-sm:whitespace-normal",
          )}
        >
          {testimonials.allReviews}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
