import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/data/content";

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="bg-surface py-section">
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <h2 id="duvidas-titulo" className="text-h2 lg:sticky lg:top-[calc(var(--spacing-header)+2rem)] lg:self-start">
          {faq.title}
        </h2>

        <Accordion className="border-t border-line">
          {faq.items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="max-w-(--container-prose) pb-6">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
