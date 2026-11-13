import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/data/content";

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="bg-surface">
      <div className="wrap">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-x-6">
          <h2 id="duvidas-titulo" data-reveal className="text-h2 lg:col-span-5">
            {faq.title}
          </h2>

          <Accordion data-reveal className="lg:col-span-7">
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
      </div>
    </section>
  );
}
