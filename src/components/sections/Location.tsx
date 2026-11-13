import { Accessibility, Car, Clock, CreditCard, FileQuestion, MapPin, Navigation, Phone, type LucideIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { contact, hours, location, ui } from "@/data/content";
import { cn } from "@/lib/utils";
import { telLink } from "@/lib/whatsapp";

const amenityIcons: LucideIcon[] = [Accessibility, CreditCard, Car];

function Detail({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
      <div>
        <h3 className="font-sans text-body font-semibold text-ink">{title}</h3>
        <div className="mt-1 text-ink-muted">{children}</div>
      </div>
    </div>
  );
}

export function Location() {
  return (
    <section id="localizacao" aria-labelledby="localizacao-titulo" className="py-section">
      <div className="container-site">
        <h2 id="localizacao-titulo" className="max-w-2xl text-h2">
          {location.title}
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="overflow-hidden rounded-xl bg-brand-soft ring-1 ring-line lg:order-last">
            <iframe
              src={contact.mapsEmbedUrl}
              title={location.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-4/3 h-full min-h-80 w-full border-0"
            />
          </div>

          <div className="flex flex-col gap-8">
            <Detail icon={MapPin} title={location.addressTitle}>
              <address className="not-italic">{contact.addressLine}</address>
            </Detail>
            <Detail icon={Clock} title={location.hoursTitle}>
              <p>{hours.urgency}</p>
              <p>{hours.elective}</p>
            </Detail>
            {location.amenities.map((amenity, i) => (
              <Detail key={amenity.title} icon={amenityIcons[i]} title={amenity.title}>
                <p>{amenity.items.join(" · ")}</p>
              </Detail>
            ))}
            <Detail icon={FileQuestion} title={location.insurance.title}>
              <p>{location.insurance.text}</p>
            </Detail>

            <div className="flex flex-col gap-3 border-t border-line pt-8 sm:flex-row">
              <a
                href={contact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${location.directions} ${ui.externalLink}`}
                className={cn(buttonVariants({ size: "lg" }), "max-sm:w-full")}
              >
                <Navigation aria-hidden="true" />
                {location.directions}
              </a>
              <a
                href={telLink()}
                aria-label={location.callAria}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "max-sm:w-full")}
              >
                <Phone aria-hidden="true" />
                {location.call}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
