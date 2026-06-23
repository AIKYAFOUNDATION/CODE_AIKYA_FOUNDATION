import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import MissionPreview from "@/components/home/MissionPreview";
import WhatWeDoPreview from "@/components/home/WhatWeDoPreview";
import FounderPreview from "@/components/home/FounderPreview";
import TeamPreview from "@/components/home/TeamPreview";
import NewsPreview from "@/components/home/NewsPreview";
import DonatePreview from "@/components/home/DonatePreview";
import ContactPreview from "@/components/home/ContactPreview";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
      <MissionPreview />
      <WhatWeDoPreview />
      <FounderPreview />
      <TeamPreview />
      <NewsPreview />
      <DonatePreview />
      <ContactPreview />
      <Footer />
    </>
  );
}