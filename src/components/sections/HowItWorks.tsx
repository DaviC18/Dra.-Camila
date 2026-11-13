import { howItWorks } from "@/data/content";

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="py-section">
      <div className="container-site">
        <h2 id="como-funciona-titulo" className="max-w-2xl text-h2">
          {howItWorks.title}
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {howItWorks.steps.map((step, i) => (
            <li key={step.title} className="relative md:pt-2">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-brand font-display text-h3 text-on-ink"
                >
                  {i + 1}
                </span>
                {i < howItWorks.steps.length - 1 && (
                  <span aria-hidden="true" className="hidden h-px flex-1 bg-line md:block" />
                )}
              </div>
              <h3 className="mt-6 text-h3">{step.title}</h3>
              <p className="mt-3 max-w-xs text-ink-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
