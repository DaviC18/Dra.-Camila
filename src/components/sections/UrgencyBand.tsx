import { urgencyBand } from "@/data/content";

/**
 * Faixa de urgência: camada presa à base do hero (não é uma seção própria).
 * Estática e sem corte na Fase 3; o marquee da spec entra na Fase 4.
 */
export function UrgencyBand() {
  return (
    <div
      role="note"
      aria-label={urgencyBand.ariaLabel}
      className="absolute inset-x-0 bottom-(--bar) flex h-(--band) items-center bg-brand text-on-ink"
    >
      <ul data-marquee className="wrap flex flex-wrap items-center justify-center gap-x-8 gap-y-1 sm:justify-between">
        {urgencyBand.items.map((item) => (
          <li key={item} className="font-display text-lead whitespace-nowrap sm:text-h3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
