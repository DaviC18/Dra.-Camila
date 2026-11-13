import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { finalCta } from "@/data/content";

export function FinalCta() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="bg-ink py-section text-on-ink">
      <div className="container-site">
        <h2 id="contato-titulo" className="max-w-4xl text-display">
          {finalCta.title}
        </h2>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <WhatsAppButton kind="urgencia" label={finalCta.ctaPrimary} size="lg" className="max-sm:w-full" />
          <WhatsAppButton
            kind="avaliacao"
            label={finalCta.ctaSecondary}
            variant="outline-inverse"
            size="lg"
            showIcon={false}
            className="max-sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
