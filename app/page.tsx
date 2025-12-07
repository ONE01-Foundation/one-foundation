"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SectionAnonymously } from "@/components/SectionAnonymously";
import { SectionGlobally } from "@/components/SectionGlobally";
import { SectionLive } from "@/components/SectionLive";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionAnonymously />
      <SectionGlobally />
      <SectionLive />
      <Footer />
    </main>
  );
}

