import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerBand from "@/components/PartnerBand";
import WhyUs from "@/components/WhyUs";
import WhatIsRAF from "@/components/WhatIsRAF";
import Services from "@/components/Services";
import DataCentres from "@/components/DataCentres";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <PartnerBand />
      <WhyUs />
      <WhatIsRAF />
      <Services />
      <DataCentres />
      <CTABand />
      <Contact />
      <Footer />
      {/* Adds the .in class to .reveal elements as they scroll into view */}
      <ScrollReveal />
    </>
  );
}
