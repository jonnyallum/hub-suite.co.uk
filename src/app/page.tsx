import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { HubsRow } from "@/components/HubsRow";
import { WhyHubSuite } from "@/components/WhyHubSuite";
import { KpiStrip } from "@/components/KpiStrip";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero />
      <HubsRow />
      <KpiStrip />
      <WhyHubSuite />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
