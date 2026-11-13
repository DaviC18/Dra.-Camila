import type { VariantProps } from "class-variance-authority";

import { WhatsAppIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { ui, type WhatsAppKind } from "@/data/content";
import { cn } from "@/lib/utils";
import { waLink } from "@/lib/whatsapp";

type Props = {
  kind: WhatsAppKind;
  label: string;
  showIcon?: boolean;
  className?: string;
  labelClassName?: string;
} & VariantProps<typeof buttonVariants>;

/** Link para o WhatsApp com a mensagem pronta. O nome acessível começa pelo texto visível. */
export function WhatsAppButton({ kind, label, showIcon = true, variant = "whatsapp", size, className, labelClassName }: Props) {
  return (
    <a
      href={waLink(kind)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — ${ui.whatsappAria[kind]}`}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {showIcon && <WhatsAppIcon />}
      <span className={labelClassName}>{label}</span>
    </a>
  );
}
