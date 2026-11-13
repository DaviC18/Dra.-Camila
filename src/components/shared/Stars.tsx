import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export function Stars({ label, className }: { label: string; className?: string }) {
  return (
    <span role="img" aria-label={label} className={cn("inline-flex gap-0.5 text-brand", className)}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="size-4 fill-current" aria-hidden="true" />
      ))}
    </span>
  );
}
