import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPillars } from "@/components/sections/AboutPillars";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { SafetyEtiquette } from "@/components/sections/SafetyEtiquette";
import { PhotoDrops } from "@/components/sections/PhotoDrops";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { SpotifyEmbed } from "@/components/sections/SpotifyEmbed";
import { FaqSection } from "@/components/sections/FaqSection";
import { JoinCtaSection } from "@/components/sections/JoinCtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-matte-black text-slate-50 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <HeroSection />
        <AboutPillars />
        <ScheduleSection />
        <SafetyEtiquette />
        <PhotoDrops />
        <PartnersSection />
        <SpotifyEmbed />
        <FaqSection />
        <JoinCtaSection />
      </div>
      <Footer />
    </main>
  );
}
