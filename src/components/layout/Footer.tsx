import { useRef } from "react";

import { InstagramIcon } from "@/components/icons";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { contact, finalCta, footer, howItWorks, identity, nav, ui } from "@/data/content";
import { useReveal } from "@/hooks/useReveal";
import { telLink } from "@/lib/whatsapp";

/** O fechamento e o rodapé numa seção só (footer.closing): linha 1 o CTA final, linha 2 os links. */
export function Footer() {
  const year = new Date().getFullYear();
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <footer ref={root} id="contato" aria-labelledby="contato-titulo" className="closing bg-brand-soft max-sm:[--hm:2]">
      <div className="wrap justify-between gap-16">
        <div>
          <h2 id="contato-titulo" data-reveal className="max-w-3xl text-h2">
            {finalCta.title}
          </h2>

          <ol aria-label={howItWorks.title} data-reveal-stagger className="mt-10 grid gap-8 md:grid-cols-3">
            {howItWorks.steps.map((step, i) => (
              <li key={step.title} data-reveal-item className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-brand font-display text-lead text-on-ink"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-small text-ink-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton kind="urgencia" label={finalCta.ctaPrimary} size="lg" className="max-sm:w-full" />
            <WhatsAppButton
              kind="avaliacao"
              label={finalCta.ctaSecondary}
              variant="outline"
              size="lg"
              showIcon={false}
              className="max-sm:w-full"
            />
          </div>
        </div>

        <div className="grid gap-8 text-small text-ink-muted md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-start">
          <div className="space-y-3">
            <Logo />
            <p>
              {identity.profession} · {identity.cro}
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-ink">{footer.addressTitle}</p>
            <address className="not-italic">{contact.addressLine}</address>
          </div>

          <div>
            <p className="font-semibold text-ink">{footer.contactTitle}</p>
            <ul>
              <li>
                <a href={telLink()} className="inline-flex min-h-11 items-center hover:text-ink hover:underline">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={footer.instagramAria}
                  className="inline-flex min-h-11 items-center gap-2 hover:text-ink hover:underline"
                >
                  <InstagramIcon className="size-5" />
                  {contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label={ui.footerNavAria}>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-flex min-h-11 items-center hover:text-ink hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-label md:col-span-4" suppressHydrationWarning>
            © {year} {identity.name}. {footer.rights} · {footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
