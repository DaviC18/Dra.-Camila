import { contact, type WhatsAppKind } from "@/data/content";

/** Link wa.me com a mensagem pronta para cada tipo de contato. */
export function waLink(kind: WhatsAppKind): string {
  const text = encodeURIComponent(contact.whatsappMessages[kind]);
  return `https://wa.me/${contact.phoneE164}?text=${text}`;
}

/** Link tel: para ligar direto. */
export function telLink(): string {
  return `tel:+${contact.phoneE164}`;
}
