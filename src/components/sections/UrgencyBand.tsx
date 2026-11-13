import { urgencyBand } from "@/data/content";

function Items() {
  return (
    <>
      {urgencyBand.items.map((item) => (
        <li key={item} className="flex shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10">
          <span className="font-display text-h3 whitespace-nowrap">{item}</span>
          <span aria-hidden="true" className="size-1.5 rounded-full bg-on-ink-brand" />
        </li>
      ))}
    </>
  );
}

/** Faixa de urgência. Estática na Fase 3; vira marquee na Fase 4 (a segunda trilha já existe, oculta). */
export function UrgencyBand() {
  return (
    <section aria-label={urgencyBand.ariaLabel} className="overflow-hidden bg-brand py-5 text-on-ink">
      <div data-marquee className="flex w-max">
        <ul className="flex">
          <Items />
        </ul>
        <ul aria-hidden="true" className="flex">
          <Items />
        </ul>
      </div>
    </section>
  );
}
