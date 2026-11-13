import { Monogram } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * Moldura provisória no lugar das fotos [PENDENTE: fotos da doutora/consultório].
 * Mantém a proporção final para a troca não mexer no layout.
 */
export function PhotoPlaceholder({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      data-placeholder="photo"
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-xl bg-brand-soft text-brand/25 ring-1 ring-brand/10 ring-inset",
        className,
      )}
    >
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-brand/8 to-transparent" />
      <Monogram className="relative size-1/3 max-w-40" />
    </div>
  );
}
