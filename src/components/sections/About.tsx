import { BadgeCheck } from "lucide-react";

import { Photo } from "@/components/shared/Photo";
import { about, identity, images } from "@/data/content";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="max-sm:[--hm:2]">
      <div className="wrap">
        <div className="grid h-full content-start items-start gap-12 lg:grid-cols-12 lg:content-stretch lg:gap-x-6">
          <div data-reveal className="lg:col-span-7">
            <h2 id="sobre-titulo" className="max-w-xl text-h2">
              {about.title}
            </h2>
            <div className="mt-8 max-w-(--container-prose) space-y-5 text-ink-muted">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {about.highlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 self-start rounded-full bg-brand-soft px-4 py-2 text-small font-semibold text-brand-strong"
                >
                  <BadgeCheck className="size-5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-small text-ink-muted">
              {identity.profession} · <strong className="font-semibold text-ink">{about.cro}</strong>
            </p>
          </div>

          <Photo
            image={images.doctor}
            reveal
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-4/5 w-full lg:col-span-5 lg:aspect-auto lg:h-full"
            imgClassName="object-[50%_20%]"
          />
        </div>
      </div>
    </section>
  );
}
