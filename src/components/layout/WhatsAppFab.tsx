import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { ui } from "@/data/content";
import { cn } from "@/lib/utils";
import { waLink } from "@/lib/whatsapp";

/** Botão flutuante: aparece quando o hero sai da tela. */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "-80px 0px 0px 0px",
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={waLink("urgencia")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ui.fabAria}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      data-visible={visible}
      className={cn(
        "fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-[opacity,translate,background-color] duration-300 ease-out-expo hover:bg-whatsapp-strong sm:right-6 sm:bottom-6",
        "pb-[env(safe-area-inset-bottom)]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
