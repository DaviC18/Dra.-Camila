import { ArrowUpRight } from "lucide-react";

import { Stars } from "@/components/shared/Stars";
import { buttonVariants } from "@/components/ui/button";
import { contact, features, testimonials, ui, type Testimonial } from "@/data/content";
import { cn } from "@/lib/utils";

function Quote({ item, className }: { item: Testimonial; className?: string }) {
  return (
    <li className={className}>
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

/** Duas telas: título + 3 depoimentos, depois mais 3 e o link para o Google. */
export function Testimonials() {
  const items = testimonials.items.slice(0, testimonials.featuredCount);
  const first = items.slice(0, 3);
  const second = items.slice(3);
  const mobileHidden = (i: number) => (i >= testimonials.featuredCountMobile ? "max-sm:hidden" : undefined);

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="g2 bg-accent">
      <div className="wrap">
        <div>
          <h2 id="depoimentos-titulo" className="max-w-2xl text-h2">
            {testimonials.title}
          </h2>
          <ul className="mt-12 grid items-start gap-6 md:grid-cols-3">
            {first.map((item, i) => (
              <Quote key={item.name} item={item} className={mobileHidden(i)} />
            ))}
          </ul>
        </div>
        <div>
          <ul className="grid items-start gap-6 md:grid-cols-3">
            {second.map((item, i) => (
              <Quote key={item.name} item={item} className={mobileHidden(i + first.length)} />
            ))}
          </ul>
          <a
            href={contact.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${testimonials.allReviews} ${ui.externalLink}`}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-10 max-sm:h-auto max-sm:min-h-14 max-sm:w-full max-sm:py-3 max-sm:whitespace-normal")}
          >
            {testimonials.allReviews}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
