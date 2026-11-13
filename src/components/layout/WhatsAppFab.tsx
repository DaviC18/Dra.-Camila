import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { hero, ui } from "@/data/content";
import { cn } from "@/lib/utils";
import { waLink } from "@/lib/whatsapp";

/**
 * WhatsApp sempre à mão.
 * - Celular: barra de ação fixa na base (nav.actionbar), sempre visível.
 * - Desktop: botão flutuante que aparece quando o hero sai da tela.
 */
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
    <>
      <nav
        aria-label={ui.whatsappShort}
        className="actionbar fixed inset-x-0 bottom-0 z-30 h-(--bar) border-t border-line bg-paper px-6 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden"
      >
        <WhatsAppButton kind="urgencia" label={hero.ctaPrimary} className="w-full" />
      </nav>

      <a
        href={waLink("urgencia")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ui.fabAria}
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
        data-visible={visible}
        className={cn(
          "fixed right-6 bottom-6 z-30 hidden size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-[opacity,translate,background-color] duration-300 ease-out-expo motion-reduce:transition-none hover:bg-whatsapp-strong sm:grid",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
