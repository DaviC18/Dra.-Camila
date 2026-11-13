import { identity, images, ui } from "@/data/content";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#inicio"
      aria-label={ui.homeAria}
      className={cn("inline-flex min-h-11 items-center gap-3 rounded-sm", className)}
    >
      <img src={images.logo.src} width={40} height={40} alt="" className="size-10" />
      <span className="font-display text-[1.1875rem] leading-none text-ink">{identity.name}</span>
    </a>
  );
}
