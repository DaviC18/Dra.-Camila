import { Clock, FileQuestion, MapPin, Navigation, Phone, Sparkle, type LucideIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { contact, hours, location, ui } from "@/data/content";
import { cn } from "@/lib/utils";
import { telLink } from "@/lib/whatsapp";

function Detail({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
      <div>
        <dt className="font-semibold text-ink">{title}</dt>
        <dd className="mt-1 text-ink-muted">{children}</dd>
      </div>
    </div>
  );
}

export function Location() {
  return (
    <section id="localizacao" aria-labelledby="localizacao-titulo" className="max-sm:[--hm:2]">
      <div className="wrap">
        <div className="grid h-full items-start gap-10 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-7">
            <h2 id="localizacao-titulo" className="text-h2">
              {location.title}
            </h2>

            <dl className="mt-10 flex flex-col gap-6">
              <Detail icon={MapPin} title={location.addressTitle}>
                <address className="not-italic">{contact.addressLine}</address>
              </Detail>
              <Detail icon={Clock} title={location.hoursTitle}>
                <p>
                  {hours.urgency}. {hours.elective}.
                </p>
              </Detail>
              <Detail icon={Sparkle} title={location.amenitiesTitle}>
                <ul>
                  {location.amenities.map((amenity) => (
                    <li key={amenity.title}>
                      <span className="font-semibold text-ink">{amenity.title}:</span> {amenity.items.join(" · ")}
                    </li>
                  ))}
                </ul>
              </Detail>
              <Detail icon={FileQuestion} title={location.insurance.title}>
                <p>{location.insurance.text}</p>
              </Detail>
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${location.directions} ${ui.externalLink}`}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "max-sm:w-full")}
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

          <div className="h-full min-h-72 overflow-hidden rounded-xl bg-brand-soft ring-1 ring-line lg:col-span-5">
            <iframe
              src={contact.mapsEmbedUrl}
              title={location.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block size-full min-h-72 border-0 focus-visible:outline-offset-[-3px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
