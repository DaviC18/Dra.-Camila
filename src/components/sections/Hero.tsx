import { Star } from "lucide-react";
import { useRef } from "react";

import { Photo } from "@/components/shared/Photo";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { UrgencyBand } from "@/components/sections/UrgencyBand";
import { contact, hero, images, reputation } from "@/data/content";
import { gsap, MEDIA, SplitText, useGSAP } from "@/lib/gsap";

const formatRating = (v: number) => v.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const mm = gsap.matchMedia();

      // Só no desktop: no celular o hero fica estático (texto visível desde o HTML pré-renderizado,
      // bom para o LCP). O CSS em index.css esconde título e CTAs até aqui, sem piscar.
      mm.add(MEDIA.desktop, () => {
        const title = root.current?.querySelector<HTMLElement>("[data-hero-title]");
        if (!title || !contextSafe) return;
        let split: SplitText | undefined;

        // Divide só depois das fontes: senão o autoSplit refaz o split e a entrada recomeça.
        const splitTitle = contextSafe(() => {
          gsap.set(title, { autoAlpha: 1 });
          split = SplitText.create(title, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
              return gsap.from(self.lines, { yPercent: 100, duration: 0.9, stagger: 0.09, ease: "expo.out" });
            },
          });
        });
        document.fonts.ready.then(() => splitTitle());

        // Subtítulo, CTAs e selo: entrada curta e cedo (o WhatsApp não pode esperar), sem bloquear clique
        gsap.fromTo(
          "[data-hero-after]",
          { y: 12, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.06, delay: 0.15 },
        );

        // Contador do selo: 0 → 4,9 e 0 → 75
        const rating = root.current?.querySelector<HTMLElement>("[data-count-rating]");
        const reviews = root.current?.querySelector<HTMLElement>("[data-count-reviews]");
        const counter = { rating: 0, reviews: 0 };
        gsap.to(counter, {
          rating: reputation.rating,
          reviews: reputation.reviewCount,
          duration: 1.1,
          delay: 0.4,
          ease: "power2.out",
          onUpdate() {
            if (rating) rating.textContent = formatRating(counter.rating);
            if (reviews) reviews.textContent = String(Math.round(counter.reviews));
          },
        });

        return () => split?.revert();
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="inicio" className="hero [--band:5.5rem] max-sm:[--band:6.75rem]">
      <div className="wrap">
        <div className="hero-text grid h-full items-start gap-10 lg:grid-cols-12 lg:gap-x-6">
          <div className="max-w-2xl lg:col-span-7">
            <h1 data-hero-title className="text-display text-ink">
              {hero.title}
            </h1>
            <p data-hero-after className="mt-6 max-w-(--container-prose) text-lead text-ink-muted">
              {hero.subtitle}
            </p>

            <div data-hero-after className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              data-hero-after
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-surface px-4 py-2 text-small ring-1 ring-line transition-shadow hover:shadow-md"
            >
              <Star className="size-4 fill-current text-brand" aria-hidden="true" />
              <span className="tabular font-semibold text-ink" data-count-rating>
                {reputation.ratingDisplay}
              </span>
              <span className="text-ink-muted">
                · <span className="tabular inline-block min-w-[2ch] text-right" data-count-reviews>
                  {reputation.reviewCount}
                </span>{" "}
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
