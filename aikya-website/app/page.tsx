import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import MissionPreview from "@/components/home/MissionPreview";
import WhatWeDoPreview from "@/components/home/WhatWeDoPreview";
import FounderPreview from "@/components/home/FounderPreview";
import TeamPreview from "@/components/home/TeamPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import DonatePreview from "@/components/home/DonatePreview";
import ContactPreview from "@/components/home/ContactPreview";

export default function HomePage() {
  return (
    <main className="page-stack home-page">
      <Hero />
      <AboutPreview />
      <MissionPreview />
      <WhatWeDoPreview />
      <FounderPreview />
      <TeamPreview />
      <GalleryPreview />
      <DonatePreview />
      <ContactPreview />
    </main>
  );
}
