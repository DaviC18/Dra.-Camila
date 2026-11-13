import { useRef } from "react";

import { urgencyBand } from "@/data/content";
import { gsap, MEDIA, useGSAP } from "@/lib/gsap";

const SPEED = 50; // px por segundo

const REPEAT = 3; // cada cópia do marquee precisa ser mais larga que a tela

function Items({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex w-full shrink-0 flex-wrap items-center justify-center gap-x-8 gap-y-1 sm:justify-between group-data-[marquee=on]/band:w-auto group-data-[marquee=on]/band:flex-nowrap group-data-[marquee=on]/band:gap-x-0"
    >
      {Array.from({ length: REPEAT }, (_, rep) =>
        urgencyBand.items.map((item) => (
          <li
            key={`${rep}-${item}`}
            aria-hidden={rep > 0 || undefined}
            className={
              "items-center font-display text-lead whitespace-nowrap sm:text-h3 group-data-[marquee=on]/band:flex group-data-[marquee=on]/band:pr-12 " +
              (rep > 0 ? "hidden" : "flex")
            }
          >
            {item}
            <span
              aria-hidden="true"
              className="ml-12 hidden size-1.5 rounded-full bg-on-ink-brand group-data-[marquee=on]/band:inline-block"
            />
          </li>
        )),
      )}
    </ul>
  );
}

/**
 * Faixa de urgência: camada presa à base do hero.
 * Com movimento: marquee contínuo (pausa em hover/foco). Com reduced-motion: estática.
 */
export function UrgencyBand() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const band = root.current;
      const track = band?.querySelector<HTMLElement>("[data-marquee-track]");
      if (!band || !track || !contextSafe) return;

      const mm = gsap.matchMedia();
      mm.add(MEDIA.motion, () => {
        band.dataset.marquee = "on";
        // duas cópias idênticas: -50% fecha o loop sem emenda, em qualquer largura
        const duration = track.scrollWidth / 2 / SPEED;
        const tween = gsap.to(track, { xPercent: -50, duration, ease: "none", repeat: -1 });

        const pause = contextSafe(() => tween.pause());
        const play = contextSafe(() => tween.play());
        band.addEventListener("mouseenter", pause);
        band.addEventListener("mouseleave", play);
        band.addEventListener("focusin", pause);
        band.addEventListener("focusout", play);

        return () => {
          band.removeEventListener("mouseenter", pause);
          band.removeEventListener("mouseleave", play);
          band.removeEventListener("focusin", pause);
          band.removeEventListener("focusout", play);
          delete band.dataset.marquee;
        };
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      role="note"
      aria-label={urgencyBand.ariaLabel}
      className="group/band absolute inset-x-0 bottom-(--bar) flex h-(--band) items-center overflow-hidden bg-brand text-on-ink"
    >
      <div className="mx-auto w-[min(100%-2*var(--gut),var(--container-site))] group-data-[marquee=on]/band:mx-0 group-data-[marquee=on]/band:w-max">
        <div data-marquee-track className="flex w-full group-data-[marquee=on]/band:w-max">
          <Items />
          <div className="hidden group-data-[marquee=on]/band:contents">
            <Items hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
