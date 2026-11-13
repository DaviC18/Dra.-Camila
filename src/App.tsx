import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { About } from "@/components/sections/About";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { useRef } from "react";

import { features } from "@/data/content";
import { useReveal } from "@/hooks/useReveal";

export default function App() {
  const main = useRef<HTMLElement>(null);
  useReveal(main);

  return (
    <>
      <Header />
      <main ref={main} id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Services />
        {features.beforeAfter && <BeforeAfter />}
        <Testimonials />
        <Faq />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
