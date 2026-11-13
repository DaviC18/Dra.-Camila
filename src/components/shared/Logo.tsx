import { Monogram } from "@/components/icons";
import { identity, ui } from "@/data/content";
import { cn } from "@/lib/utils";

export function Logo({ className, inverse = false }: { className?: string; inverse?: boolean }) {
  return (
    <a
      href="#inicio"
      aria-label={ui.homeAria}
      className={cn("inline-flex min-h-11 items-center gap-3 rounded-sm", className)}
    >
      <Monogram size={40} className={inverse ? "text-on-ink" : "text-brand"} />
      <span className={cn("font-display text-[1.1875rem] leading-none", inverse ? "text-on-ink" : "text-ink")}>
        {identity.name}
      </span>
    </a>
  );
}
