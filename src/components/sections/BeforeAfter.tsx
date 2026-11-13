import { ChevronsLeftRight } from "lucide-react";
import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

import { beforeAfter } from "@/data/content";

const STEP = 5;
const BIG_STEP = 20;

function Picture({ src, alt, tone }: { src: string | null; alt: string; tone: "before" | "after" }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className="absolute inset-0 size-full object-cover" />;
  }
  // [PENDENTE: imagens originais] — placeholder claro
  return (
    <div
      role="img"
      aria-label={alt}
      className={tone === "before" ? "absolute inset-0 bg-[#e9e4da]" : "absolute inset-0 bg-surface"}
    />
  );
}

/** Slider antes/depois. Só é montado com features.beforeAfter = true. */
export function BeforeAfter() {
  const [value, setValue] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.round(Math.min(100, Math.max(0, pct))));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) setFromClientX(e.clientX);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, (v: number) => number> = {
      ArrowLeft: (v) => v - STEP,
      ArrowDown: (v) => v - STEP,
      ArrowRight: (v) => v + STEP,
      ArrowUp: (v) => v + STEP,
      PageDown: (v) => v - BIG_STEP,
      PageUp: (v) => v + BIG_STEP,
      Home: () => 0,
      End: () => 100,
    };
    const next = keys[e.key];
    if (!next) return;
    e.preventDefault();
    setValue((v) => Math.min(100, Math.max(0, next(v))));
  };

  return (
    <section id="antes-depois" aria-labelledby="antes-depois-titulo">
      <div className="wrap">
        <h2 id="antes-depois-titulo" className="text-h2">
          {beforeAfter.title}
        </h2>

        <figure className="fill mt-10 flex flex-col">
          <div
            ref={frameRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            className="relative min-h-0 flex-1 cursor-ew-resize touch-pan-y overflow-hidden rounded-xl bg-brand-soft select-none"
          >
            <Picture src={beforeAfter.afterSrc} alt={beforeAfter.afterAlt} tone="after" />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
              <Picture src={beforeAfter.beforeSrc} alt={beforeAfter.beforeAlt} tone="before" />
            </div>

            <span className="absolute top-4 left-4 rounded-full bg-ink/75 px-3 py-1 text-label font-semibold text-on-ink">
              {beforeAfter.beforeLabel}
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-ink/75 px-3 py-1 text-label font-semibold text-on-ink">
              {beforeAfter.afterLabel}
            </span>

            <div
              role="slider"
              tabIndex={0}
              aria-label={beforeAfter.sliderLabel}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={value}
              aria-valuetext={`${value}%`}
              onKeyDown={onKeyDown}
              className="absolute inset-y-0 w-11 -translate-x-1/2 focus-visible:outline-offset-0"
              style={{ left: `${value}%` }}
            >
              <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-surface shadow-md" />
              <span
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 grid size-11 -translate-1/2 place-items-center rounded-full bg-surface text-brand shadow-lg"
              >
                <ChevronsLeftRight className="size-5" />
              </span>
            </div>
          </div>
          <figcaption className="mt-4 text-small text-ink-muted">{beforeAfter.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
