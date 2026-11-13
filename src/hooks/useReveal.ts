import type { RefObject } from "react";

import { gsap, MEDIA, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Reveal ao rolar: cada [data-reveal] dentro do escopo sobe 24px e aparece, uma vez.
 * [data-reveal-stagger] anima os filhos [data-reveal-item] em sequência.
 * Com reduced-motion nada é animado (o conteúdo já está visível).
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add(MEDIA.motion, () => {
        root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 24,
            autoAlpha: 0,
            duration: 0.8,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        root.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
          const items = group.querySelectorAll("[data-reveal-item]");
          if (!items.length) return;
          gsap.from(items, {
            y: 24,
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.08,
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
          });
        });

        // fontes e imagens mudam a altura das seções depois do primeiro cálculo
        document.fonts?.ready.then(() => ScrollTrigger.refresh());
      });

      return () => mm.revert();
    },
    { scope },
  );
}
