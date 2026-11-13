import { BadgeCheck } from "lucide-react";

import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { about, identity } from "@/data/content";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-section">
      <div className="container-site grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <PhotoPlaceholder className="aspect-4/5 w-full max-w-md justify-self-center max-lg:order-last lg:max-w-none" />

        <div>
          <h2 id="sobre-titulo" className="max-w-xl text-h2">
            {about.title}
          </h2>
          <div className="mt-8 max-w-(--container-prose) space-y-5 text-ink-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-small font-semibold text-brand-strong"
              >
                <BadgeCheck className="size-5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 border-t border-line pt-6 text-small text-ink-muted">
            {identity.name} · {identity.profession} ·{" "}
            <strong className="font-semibold text-ink">{about.cro}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
