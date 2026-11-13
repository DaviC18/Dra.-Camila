import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { About } from "@/components/sections/About";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Location } from "@/components/sections/Location";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { UrgencyBand } from "@/components/sections/UrgencyBand";
import { features, ui } from "@/data/content";

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed top-3 left-3 z-50 -translate-y-24 rounded-full bg-ink px-5 py-3 text-small font-semibold text-on-ink focus-visible:translate-y-0"
      >
        {ui.skipToContent}
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <UrgencyBand />
        <About />
        <Services />
        {features.beforeAfter && <BeforeAfter />}
        <Testimonials />
        <HowItWorks />
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
