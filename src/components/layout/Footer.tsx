import { InstagramIcon } from "@/components/icons";
import { Logo } from "@/components/shared/Logo";
import { contact, footer, identity, nav, ui } from "@/data/content";
import { telLink } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-on-ink-muted">
      <div className="container-site grid gap-12 border-t border-on-ink/12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo inverse />
          <p className="text-small">
            {identity.profession} · {identity.cro}
          </p>
        </div>

        <div className="space-y-3 text-small">
          <h2 className="font-sans text-label font-semibold text-on-ink">{footer.addressTitle}</h2>
          <address className="not-italic">{contact.addressLine}</address>
        </div>

        <div className="space-y-3 text-small">
          <h2 className="font-sans text-label font-semibold text-on-ink">{footer.contactTitle}</h2>
          <ul className="space-y-1">
            <li>
              <a href={telLink()} className="inline-flex min-h-11 items-center hover:text-on-ink hover:underline">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={footer.instagramAria}
                className="inline-flex min-h-11 items-center gap-2 hover:text-on-ink hover:underline"
              >
                <InstagramIcon className="size-5" />
                {contact.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site flex flex-col gap-4 border-t border-on-ink/12 py-6 text-label sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {identity.name}. {footer.rights}
        </p>
        <nav aria-label={ui.footerNavAria}>
          <ul className="flex flex-wrap gap-x-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center hover:text-on-ink hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p>{footer.credit}</p>
      </div>
    </footer>
  );
}
