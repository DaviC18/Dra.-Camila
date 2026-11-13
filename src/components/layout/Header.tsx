import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/shared/Logo";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { contact, hero, identity, nav, ui } from "@/data/content";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 40;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className={cn(
        "fixed inset-x-0 top-0 z-40 h-(--spacing-header) border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-line bg-paper/90 backdrop-blur-md supports-[not(backdrop-filter:blur(0))]:bg-paper"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-site flex h-full items-center justify-between gap-4">
        <Logo className="[&>span:last-child]:max-[359px]:sr-only" />

        <nav aria-label={ui.navAria} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full px-4 text-small font-medium text-ink transition-colors hover:bg-brand-soft hover:text-brand-strong"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton
            kind="urgencia"
            label={ui.whatsappShort}
            size="sm"
            className="max-sm:size-11 max-sm:px-0"
            labelClassName="max-sm:sr-only"
          />

          <Sheet>
            <SheetTrigger
              aria-label={ui.openMenu}
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "lg:hidden")}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(22rem,88vw)] gap-0 p-0">
              <div className="flex h-(--spacing-header) items-center border-b border-line px-6">
                <SheetTitle className="font-display text-h3 font-normal">{ui.menuTitle}</SheetTitle>
              </div>
              <nav aria-label={ui.navAria} className="px-3 py-4">
                <ul>
                  {nav.map((item) => (
                    <li key={item.href}>
                      <SheetClose
                        nativeButton={false}
                        render={<a href={item.href} />}
                        className="flex min-h-14 items-center rounded-md px-3 font-display text-h3 text-ink transition-colors hover:bg-brand-soft"
                      >
                        {item.label}
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto space-y-4 border-t border-line p-6">
                <WhatsAppButton kind="urgencia" label={hero.ctaPrimary} size="lg" className="w-full" />
                <p className="text-small text-ink-muted">
                  {contact.phoneDisplay} · {identity.cro}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
